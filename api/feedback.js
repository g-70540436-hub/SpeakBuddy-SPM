const json = (res, status, body) => {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
};

const clamp = (value) =>
  Math.max(0, Math.min(6, Math.round(Number(value) || 0)));

async function authenticated(req) {
  const token = (req.headers.authorization || "").replace(/^Bearer\s+/i, "");
  if (!token || !process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY)
    return false;
  const response = await fetch(`${process.env.SUPABASE_URL}/auth/v1/user`, {
    headers: {
      apikey: process.env.SUPABASE_ANON_KEY,
      Authorization: `Bearer ${token}`,
    },
  });
  return response.ok;
}

async function groqChat(prompt, jsonMode = false, maxTokens = 900) {
  const configuredModel = process.env.GROQ_MODEL || "openai/gpt-oss-20b";
  const model = configuredModel === "llama-3.3-70b-versatile"
    ? "openai/gpt-oss-20b"
    : configuredModel;
  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "user", content: prompt }],
        max_completion_tokens: maxTokens,
        temperature: jsonMode ? 0.2 : 0.5,
      }),
    },
  );
  const data = await response.json();
  if (!response.ok)
    throw Error(data.error?.message || "Groq AI request failed");
  return data.choices?.[0]?.message?.content || "";
}

function parseModelJson(text) {
  const cleaned = text.trim().replace(/^```(?:json)?\s*|\s*```$/gi, "");
  try {
    return JSON.parse(cleaned);
  } catch {
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");
    if (start < 0 || end <= start) throw Error("AI returned an invalid score format");
    return JSON.parse(cleaned.slice(start, end + 1));
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST")
    return json(res, 405, { error: "Method not allowed" });
  if (!process.env.GROQ_API_KEY)
    return json(res, 503, { error: "Groq AI feedback is not configured yet" });
  if (!(await authenticated(req)))
    return json(res, 401, { error: "Please sign in to use AI feedback." });

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    if (body.mode === "assist") {
      const prompt = `You are SpeakBuddy SPM, a concise coach for Malaysian SPM English Speaking Test 1119/3. The student is practising ${body.part} at ${body.difficulty} level. Task: ${body.prompt}. Points: ${(body.points || []).join("; ")}. Request: ${body.request}. Give practical help in no more than 100 words. Do not provide a memorisation script unless explicitly asked.`;
      const answer = await groqChat(prompt, false, 220);
      return json(res, 200, { answer });
    }

    if (body.mode !== "score" || !body.audio)
      return json(res, 400, { error: "A recording is required" });

    const bytes = Buffer.from(body.audio, "base64");
    if (bytes.length > 12 * 1024 * 1024)
      return json(res, 413, { error: "Keep the recording under 12 MB." });

    const type = (body.mimeType || "audio/webm").split(";")[0];
    const ext = type.includes("ogg") ? "ogg" : type.includes("mp4") ? "mp4" : "webm";
    const form = new FormData();
    form.append("file", new Blob([bytes], { type }), `response.${ext}`);
    form.append("model", "whisper-large-v3-turbo");
    form.append("language", "en");
    form.append("response_format", "json");

    const transcriptionResponse = await fetch(
      "https://api.groq.com/openai/v1/audio/transcriptions",
      {
        method: "POST",
        headers: { Authorization: `Bearer ${process.env.GROQ_API_KEY}` },
        body: form,
      },
    );
    const transcriptionData = await transcriptionResponse.json();
    if (!transcriptionResponse.ok)
      throw Error(transcriptionData.error?.message || "Transcription failed");

    const transcript = (transcriptionData.text || "").trim();
    const words = transcript ? transcript.split(/\s+/).length : 0;
    const wpm = Math.round(words / Math.max(1, body.duration / 60));
    const rubric = `Score only these SPM 1119/3 areas from 0 to 6 points each, without calling them bands: Overall Spoken Performance, Grammar, Vocabulary, Communicative Competence. Apply this scale: 0 insufficient English; 1 basic familiar-topic language requiring support; 3 generally relevant simple interaction with reasonable accuracy; 5 developed relevant interaction with good control and range; 6 sustained detailed interaction with consistently strong accuracy and range. Scores 2 and 4 are between descriptors. In Part 3, do not invent partner interaction evidence.`;
    const prompt = `${rubric}\nPart: ${body.part}. Difficulty: ${body.difficulty}. Question: ${body.prompt}. Required points: ${(body.points || []).join("; ")}. Duration: ${body.duration}s. Approximate rate: ${wpm} words per minute. Transcript: ${transcript || "[no usable transcript]"}. Return ONLY valid JSON: {"scores":{"overall":0,"grammar":0,"vocabulary":0,"communicativeCompetence":0},"strengths":["",""],"improvements":["",""],"pronunciation":"","fluency":"","content":"","organisation":"","confidence":"","improvedResponse":""}. Keep feedback concise and student-friendly. Pronunciation comments must be cautious because they are inferred from transcription clarity. The improved response should be 80–150 words.`;
    let raw = await groqChat(prompt, true, 900);
    let out;
    try {
      out = parseModelJson(raw);
    } catch {
      raw = await groqChat(
        `Convert the following content into ONLY the valid JSON object requested. Do not add markdown or explanations.\n\n${raw}`,
        true,
        900,
      );
      out = parseModelJson(raw);
    }

    out.scores = {
      overall: clamp(out.scores?.overall),
      grammar: clamp(out.scores?.grammar),
      vocabulary: clamp(out.scores?.vocabulary),
      communicativeCompetence: clamp(out.scores?.communicativeCompetence),
    };
    if (words >= 3 && Object.values(out.scores).every((score) => score === 0)) {
      const rescorePrompt = `Act as an SPM 1119/3 speaking assessor. The transcript below contains ${words} English words, so do not award all zero unless it is genuinely unintelligible or unrelated. Give a cautious rough score from 0 to 6 for each official criterion. Use 1 for very limited language, 3 for generally relevant simple language, 5 for developed language with good control, and 6 only for consistently strong performance. Return ONLY JSON in exactly this format: {"overall":0,"grammar":0,"vocabulary":0,"communicativeCompetence":0}.\nTask: ${body.prompt}\nTranscript: ${transcript}`;
      try {
        const rescored = parseModelJson(await groqChat(rescorePrompt, true, 250));
        out.scores = {
          overall: clamp(rescored.overall),
          grammar: clamp(rescored.grammar),
          vocabulary: clamp(rescored.vocabulary),
          communicativeCompetence: clamp(rescored.communicativeCompetence),
        };
      } catch {
        // Keep the cautious first result if the dedicated re-score also fails.
      }
    }
    out.total = Object.values(out.scores).reduce((sum, score) => sum + score, 0);
    out.transcript = transcript;
    out.metrics = { words, wpm, duration: body.duration };
    return json(res, 200, out);
  } catch (error) {
    return json(res, 500, {
      error: error.message || "Unexpected Groq feedback error",
    });
  }
}
