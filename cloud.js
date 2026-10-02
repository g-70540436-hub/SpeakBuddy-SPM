window.Cloud = {
  configured: false,
  client: null,
  user: null,
  profile: null,
  classInfo: null,
};
window.cloudReady = (async () => {
  try {
    const config = await fetch("/api/config").then((r) => r.json());
    if (!config.supabaseUrl || !config.supabaseAnonKey || !window.supabase)
      return window.Cloud;
    const client = window.supabase.createClient(
      config.supabaseUrl,
      config.supabaseAnonKey,
    );
    Object.assign(window.Cloud, { configured: true, client });
    const {
      data: { session },
    } = await client.auth.getSession();
    if (session) await loadContext();
  } catch (e) {
    console.warn("Cloud setup unavailable:", e.message);
  }
  return window.Cloud;
})();

async function loadContext() {
  const c = window.Cloud.client,
    {
      data: { user },
      error,
    } = await c.auth.getUser();
  if (error || !user) return null;
  const { data: profile } = await c
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();
  let { data: membership } = await c
    .from("class_members")
    .select("class_id,role,classes(id,name,code,teacher_id)")
    .eq("user_id", user.id)
    .limit(1)
    .maybeSingle();
  const pendingCode = user.user_metadata?.class_code;
  if (!membership && pendingCode) {
    const role = profile?.role || user.user_metadata?.role || "student",
      fn = role === "teacher" ? "create_or_get_class" : "join_class_by_code",
      args =
        role === "teacher"
          ? { p_code: pendingCode, p_name: pendingCode }
          : { p_code: pendingCode };
    const result = await c.rpc(fn, args);
    if (!result.error) {
      membership = (
        await c
          .from("class_members")
          .select("class_id,role,classes(id,name,code,teacher_id)")
          .eq("user_id", user.id)
          .limit(1)
          .maybeSingle()
      ).data;
    }
  }
  Object.assign(window.Cloud, {
    user,
    profile,
    classInfo: membership?.classes || null,
  });
  if (profile)
    localStorage.setItem(
      "sb_profile",
      JSON.stringify({
        name: profile.full_name || user.email,
        role: profile.role,
        classCode: membership?.classes?.code || "",
        consent: true,
        email: user.email,
      }),
    );
  await window.Cloud.syncAttempts();
  return user;
}

window.Cloud.signUp = async ({ email, password, name, role, classCode }) => {
  const c = window.Cloud.client;
  if (!c) throw Error("Supabase is not configured.");
  const { data, error } = await c.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
        role,
        class_code: classCode.trim().toUpperCase(),
      },
    },
  });
  if (error) throw error;
  if (!data.session) return { confirmationRequired: true };
  await c
    .from("profiles")
    .update({ full_name: name, role })
    .eq("id", data.user.id);
  if (classCode) {
    const fn =
      role === "teacher" ? "create_or_get_class" : "join_class_by_code";
    const args =
      role === "teacher"
        ? { p_code: classCode, p_name: classCode }
        : { p_code: classCode };
    const { error: e } = await c.rpc(fn, args);
    if (e) throw e;
  }
  await loadContext();
  return { confirmationRequired: false };
};
window.Cloud.signIn = async ({ email, password }) => {
  const c = window.Cloud.client;
  if (!c) throw Error("Supabase is not configured.");
  const { error } = await c.auth.signInWithPassword({ email, password });
  if (error) throw error;
  await loadContext();
};
window.Cloud.signOut = async () => {
  if (window.Cloud.client) await window.Cloud.client.auth.signOut();
  Object.assign(window.Cloud, { user: null, profile: null, classInfo: null });
  localStorage.removeItem("sb_profile");
  localStorage.removeItem("sb_attempts");
};
window.Cloud.accessToken = async () => {
  const c = window.Cloud.client;
  if (!c) return "";
  const { data } = await c.auth.getSession();
  return data?.session?.access_token || "";
};
window.Cloud.syncAttempts = async () => {
  const c = window.Cloud.client;
  if (!c || !window.Cloud.user) return [];
  let q = c.from("attempts").select("*,teacher_feedback(comment)");
  if (window.Cloud.profile?.role === "student")
    q = q.eq("user_id", window.Cloud.user.id);
  const { data, error } = await q.order("created_at", { ascending: false });
  if (error) throw error;
  const mapped = (data || []).map((r) => {
    const note = Array.isArray(r.teacher_feedback)
      ? r.teacher_feedback[0]
      : r.teacher_feedback;
    return {
      id: r.id,
      name: r.student_name,
      classCode: window.Cloud.classInfo?.code || "",
      date: r.created_at,
      part: r.part,
      topic: r.topic,
      prompt: r.prompt,
      duration: r.duration_seconds,
      total: r.total_score,
      scores: {
        overall: r.overall_score,
        grammar: r.grammar_score,
        vocabulary: r.vocabulary_score,
        communicativeCompetence: r.communication_score,
      },
      feedback: r.ai_feedback || {},
      teacherNote: note?.comment || "",
      diagnostic: r.diagnostic_type,
      recordingPath: r.recording_path,
    };
  });
  localStorage.setItem("sb_attempts", JSON.stringify(mapped));
  if (window.Cloud.profile?.role === "student") {
    const pre = mapped.find((x) => x.diagnostic === "pre");
    const post = mapped.find((x) => x.diagnostic === "post");
    if (pre) localStorage.setItem("sb_pre", JSON.stringify(pre));
    if (post) localStorage.setItem("sb_post", JSON.stringify(post));
  }
  return mapped;
};
window.Cloud.saveAttempt = async (entry, audioBlob) => {
  const c = window.Cloud.client,
    u = window.Cloud.user,
    cl = window.Cloud.classInfo;
  if (!c || !u) throw Error("Please sign in again.");
  let recordingPath = null;
  if (audioBlob && cl) {
    recordingPath = `${cl.id}/${u.id}/${Date.now()}.webm`;
    const { error } = await c.storage
      .from("recordings")
      .upload(recordingPath, audioBlob, {
        contentType: audioBlob.type || "audio/webm",
      });
    if (error) throw error;
  }
  const row = {
    user_id: u.id,
    class_id: cl?.id || null,
    student_name: entry.name,
    part: entry.part,
    topic: entry.topic,
    prompt: entry.prompt,
    duration_seconds: entry.duration,
    total_score: entry.total,
    overall_score: entry.scores.overall,
    grammar_score: entry.scores.grammar,
    vocabulary_score: entry.scores.vocabulary,
    communication_score: entry.scores.communicativeCompetence,
    ai_feedback: entry.feedback,
    diagnostic_type: entry.diagnostic || null,
    recording_path: recordingPath,
  };
  const { data, error } = await c
    .from("attempts")
    .insert(row)
    .select()
    .single();
  if (error) throw error;
  await window.Cloud.syncAttempts();
  return data;
};
window.Cloud.saveTeacherNote = async (attemptId, comment) => {
  const c = window.Cloud.client,
    u = window.Cloud.user;
  if (!c || !u) throw Error("Please sign in.");
  const { error } = await c
    .from("teacher_feedback")
    .upsert(
      { attempt_id: attemptId, teacher_id: u.id, comment },
      { onConflict: "attempt_id" },
    );
  if (error) throw error;
  await window.Cloud.syncAttempts();
};
window.Cloud.deleteOwnAttempts = async () => {
  const c = window.Cloud.client,
    u = window.Cloud.user;
  if (!c || !u) throw Error("Please sign in.");
  const { data } = await c
    .from("attempts")
    .select("recording_path")
    .eq("user_id", u.id);
  const paths = (data || []).map((x) => x.recording_path).filter(Boolean);
  if (paths.length) await c.storage.from("recordings").remove(paths);
  const { error } = await c.from("attempts").delete().eq("user_id", u.id);
  if (error) throw error;
  localStorage.removeItem("sb_pre");
  localStorage.removeItem("sb_post");
  await window.Cloud.syncAttempts();
};
window.Cloud.recordingUrl = async (path) => {
  const { data, error } = await window.Cloud.client.storage
    .from("recordings")
    .createSignedUrl(path, 300);
  if (error) throw error;
  return data.signedUrl;
};
