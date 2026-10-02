const TASKS = {
  part1: [
    [
      "Personal Life",
      "What do you usually do after school?",
      ["routine", "reason", "frequency"],
    ],
    [
      "School",
      "Tell me about your favourite subject at school.",
      ["subject", "teacher or activity", "reason"],
    ],
    [
      "Family",
      "Who are you closest to in your family?",
      ["person", "activities together", "why"],
    ],
    [
      "Hobbies",
      "What hobby would you like to try?",
      ["hobby", "how to begin", "benefit"],
    ],
    [
      "Technology",
      "How do you use technology for learning?",
      ["tool", "how you use it", "benefit"],
    ],
    [
      "Health",
      "What do you do to stay healthy?",
      ["activity", "frequency", "effect"],
    ],
    [
      "Food",
      "Tell me about a Malaysian food you enjoy.",
      ["food", "taste or ingredients", "occasion"],
    ],
    [
      "Friends",
      "What qualities do you value in a friend?",
      ["quality", "example", "importance"],
    ],
    [
      "Travel",
      "Where would you like to visit in Malaysia?",
      ["place", "activity", "reason"],
    ],
    [
      "Reading",
      "What kind of books or stories do you enjoy?",
      ["type", "example", "reason"],
    ],
    [
      "Environment",
      "How do you help protect the environment?",
      ["action", "when", "impact"],
    ],
    [
      "Celebrations",
      "Tell me about a celebration you enjoy.",
      ["celebration", "what happens", "feeling"],
    ],
    [
      "Sports",
      "Do you prefer team or individual sports?",
      ["preference", "example", "reason"],
    ],
    [
      "Community",
      "How can teenagers help their community?",
      ["action", "who benefits", "reason"],
    ],
    [
      "Future",
      "What job would you like to have?",
      ["career", "skills", "reason"],
    ],
    [
      "Shopping",
      "Do you prefer shopping online or in shops?",
      ["preference", "advantage", "example"],
    ],
    [
      "Transport",
      "How do you usually travel to school?",
      ["transport", "experience", "improvement"],
    ],
    [
      "Music",
      "What kind of music do you listen to?",
      ["type", "when", "feeling"],
    ],
  ],
  part2: [
    [
      "Skills",
      "Talk about a useful skill you would like to learn.",
      [
        "what the skill is",
        "why it is useful",
        "how you could learn it",
        "whether all teenagers should learn it",
      ],
    ],
    [
      "Health",
      "Talk about an activity that helps teenagers stay healthy.",
      [
        "what it is",
        "when and where it can be done",
        "health benefits",
        "whether it suits everyone",
      ],
    ],
    [
      "School",
      "Talk about a memorable school event.",
      [
        "what it was",
        "what happened",
        "who was involved",
        "why it was memorable",
      ],
    ],
    [
      "Technology",
      "Talk about a useful mobile application.",
      [
        "what it is",
        "how you use it",
        "its benefits",
        "whether students should use it",
      ],
    ],
    [
      "Environment",
      "Talk about one way to reduce waste.",
      [
        "what the action is",
        "how to do it",
        "why it matters",
        "how schools can help",
      ],
    ],
    [
      "Careers",
      "Talk about a career that interests you.",
      ["what it is", "skills needed", "why it interests you", "how to prepare"],
    ],
    [
      "Culture",
      "Talk about a Malaysian tradition worth preserving.",
      [
        "what it is",
        "when it happens",
        "why it matters",
        "how young people can preserve it",
      ],
    ],
    [
      "Community",
      "Talk about a community programme you would join.",
      ["what it is", "your role", "who benefits", "why you would join"],
    ],
    [
      "Education",
      "Talk about an effective way to study.",
      [
        "what the method is",
        "how it works",
        "when to use it",
        "why it is effective",
      ],
    ],
    [
      "Social Media",
      "Talk about a positive use of social media.",
      ["what it is", "an example", "its benefit", "how to use it responsibly"],
    ],
    [
      "Travel",
      "Talk about a place in Malaysia visitors should see.",
      [
        "where it is",
        "what to do there",
        "what makes it special",
        "best time to visit",
      ],
    ],
    [
      "Friendship",
      "Talk about a person who has helped you.",
      [
        "who the person is",
        "what happened",
        "how they helped",
        "what you learned",
      ],
    ],
    [
      "Reading",
      "Talk about a book or story you recommend.",
      [
        "title or type",
        "what it is about",
        "why you like it",
        "who should read it",
      ],
    ],
    [
      "Sports",
      "Talk about a sport teenagers should try.",
      ["what it is", "how to play", "benefits", "why it suits teenagers"],
    ],
    [
      "Money",
      "Talk about a good way for teenagers to save money.",
      ["what to do", "how to begin", "why it helps", "possible difficulty"],
    ],
    [
      "Safety",
      "Talk about how students can stay safe online.",
      [
        "a risk",
        "what students should do",
        "an example",
        "why awareness matters",
      ],
    ],
    [
      "Leadership",
      "Talk about a good student leader.",
      [
        "who or what type",
        "important qualities",
        "an example",
        "what others can learn",
      ],
    ],
    [
      "Volunteering",
      "Talk about a volunteering experience you would like to have.",
      [
        "where it would be",
        "what you would do",
        "who benefits",
        "why it appeals to you",
      ],
    ],
  ],
  part3: [
    [
      "Reading",
      "How can schools encourage students to read more?",
      [
        "improve the library",
        "reading competitions",
        "book clubs",
        "author visits",
        "digital books",
        "daily reading time",
      ],
    ],
    [
      "Leadership",
      "What qualities make a good young leader?",
      [
        "responsibility",
        "communication",
        "confidence",
        "fairness",
        "creativity",
        "teamwork",
      ],
    ],
    [
      "Social Media",
      "How can teenagers use social media responsibly?",
      [
        "limit screen time",
        "check information",
        "protect privacy",
        "use kind language",
        "report harmful content",
        "follow positive accounts",
      ],
    ],
    [
      "Environment",
      "How can a school become more environmentally friendly?",
      [
        "recycling stations",
        "save electricity",
        "tree planting",
        "reduce plastic",
        "eco-club campaigns",
        "walk or cycle",
      ],
    ],
    [
      "Health",
      "How can teenagers develop a healthier lifestyle?",
      [
        "regular exercise",
        "balanced meals",
        "enough sleep",
        "less screen time",
        "manage stress",
        "health education",
      ],
    ],
    [
      "Technology",
      "How can technology improve classroom learning?",
      [
        "educational apps",
        "online research",
        "interactive quizzes",
        "digital collaboration",
        "video lessons",
        "virtual simulations",
      ],
    ],
    [
      "Careers",
      "How can students prepare for their future careers?",
      [
        "career talks",
        "work experience",
        "skills courses",
        "career research",
        "mentoring",
        "school clubs",
      ],
    ],
    [
      "Community",
      "How can young people help their local community?",
      [
        "volunteering",
        "clean-up events",
        "helping elderly people",
        "fundraising",
        "tutoring children",
        "awareness campaigns",
      ],
    ],
    [
      "Culture",
      "How can Malaysian culture be promoted among teenagers?",
      [
        "cultural festivals",
        "traditional arts workshops",
        "social media content",
        "school clubs",
        "heritage visits",
        "interviews with elders",
      ],
    ],
    [
      "Safety",
      "How can schools reduce cyberbullying?",
      [
        "clear rules",
        "anonymous reporting",
        "digital citizenship lessons",
        "peer support",
        "parent workshops",
        "counselling",
      ],
    ],
    [
      "Education",
      "What makes group work successful?",
      [
        "clear roles",
        "good communication",
        "shared goals",
        "time management",
        "respect",
        "fair contribution",
      ],
    ],
    [
      "Transport",
      "How can students travel to school more sustainably?",
      [
        "school buses",
        "carpooling",
        "cycling",
        "walking",
        "public transport",
        "safe routes",
      ],
    ],
    [
      "Money",
      "How can teenagers learn to manage money?",
      [
        "set a budget",
        "save regularly",
        "compare prices",
        "avoid impulse buying",
        "track spending",
        "learn from adults",
      ],
    ],
    [
      "Tourism",
      "How can Malaysia attract more young tourists?",
      [
        "social media promotion",
        "affordable packages",
        "eco-tourism",
        "cultural experiences",
        "youth events",
        "better transport",
      ],
    ],
    [
      "School Life",
      "How can schools improve students’ well-being?",
      [
        "counselling",
        "sports and clubs",
        "rest areas",
        "less academic pressure",
        "peer support",
        "healthy meals",
      ],
    ],
    [
      "Communication",
      "How can teenagers become more confident speakers?",
      [
        "regular practice",
        "join competitions",
        "record themselves",
        "learn useful phrases",
        "work with a partner",
        "accept feedback",
      ],
    ],
    [
      "Food",
      "How can healthy Malaysian food be promoted?",
      [
        "school campaigns",
        "cooking demonstrations",
        "social media recipes",
        "healthy canteens",
        "food festivals",
        "family education",
      ],
    ],
    [
      "Volunteering",
      "What would make teenagers volunteer more often?",
      [
        "school recognition",
        "interesting projects",
        "friends joining",
        "flexible schedules",
        "clear impact",
        "online sign-up",
      ],
    ],
  ],
};
const FORMATS = {
  part1: {
    label: "Part 1 · Interview",
    note: "No preparation time. The paired interview lasts approximately 3–4 minutes.",
    stages: [
      [
        "Interview practice",
        180,
        "Answer naturally and develop short responses.",
      ],
    ],
  },
  part2: {
    label: "Part 2 · Individual long turn",
    note: "20 seconds to prepare, followed by about 1 minute of individual speaking.",
    stages: [
      ["Preparation", 20, "Plan keywords for every prompt."],
      [
        "Individual long turn",
        60,
        "Speak continuously and develop all points.",
      ],
    ],
  },
  part3: {
    label: "Part 3 · Pair discussion",
    note: "20 seconds to prepare, about 2 minutes to discuss, then 1 minute to make a decision.",
    stages: [
      ["Preparation", 20, "Study the question and points."],
      ["Discussion", 120, "Exchange views and respond to your partner."],
      ["Decision", 60, "Choose the best point together and explain why."],
    ],
  },
};
const PHRASES = {
  part1: [
    "Usually, I…",
    "One reason is that…",
    "For example…",
    "What I enjoy most is…",
  ],
  part2: [
    "I’d like to talk about…",
    "One important reason is…",
    "For instance…",
    "Another point worth mentioning is…",
    "Overall, I believe…",
  ],
  part3: [
    "Shall we start with…?",
    "In my opinion…",
    "I agree because…",
    "That’s a good point, but…",
    "What do you think about…?",
    "Shall we agree that…?",
  ],
};
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
let state = {
  part: "part2",
  task: 0,
  panel: "phrases",
  stage: 0,
  seconds: 20,
  total: 20,
  tick: null,
  media: null,
  chunks: [],
  audio: null,
  audioUrl: "",
  recordStart: 0,
  recordTick: null,
  diagnostic: null,
};
const getAttempts = () =>
    JSON.parse(localStorage.getItem("sb_attempts") || "[]"),
  saveAttempts = (x) => localStorage.setItem("sb_attempts", JSON.stringify(x)),
  profile = () => JSON.parse(localStorage.getItem("sb_profile") || "{}"),
  esc = (s) =>
    String(s ?? "").replace(
      /[&<>'"]/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        })[c],
    );
function toast(t) {
  $("#toast").textContent = t;
  $("#toast").classList.add("show");
  setTimeout(() => $("#toast").classList.remove("show"), 2300);
}
function task() {
  return TASKS[state.part][state.task];
}
function streak() {
  const days = [...new Set(getAttempts().map((a) => a.date.slice(0, 10)))]
    .sort()
    .reverse();
  if (!days.length) return 0;
  let n = 0,
    d = new Date();
  for (const day of days) {
    const diff = Math.round(
      (new Date(d.toDateString()) - new Date(day + "T00:00:00")) / 86400000,
    );
    if (diff === n) n++;
    else if (diff > n) break;
  }
  return n;
}
function stats() {
  const a = getAttempts();
  return {
    attempts: a.length,
    mins: Math.round(a.reduce((s, x) => s + (x.duration || 0), 0) / 60),
    avg: a.length ? a.reduce((s, x) => s + x.total, 0) / a.length : 0,
    streak: streak(),
  };
}
function statCards(target) {
  const s = stats();
  $(target).innerHTML =
    `<div class="stat"><i>🎙️</i><b>${s.attempts}</b><small>Practices completed</small></div><div class="stat"><i>⏱️</i><b>${s.mins}</b><small>Minutes speaking</small></div><div class="stat"><i>⭐</i><b>${s.avg.toFixed(1)}</b><small>Average score / 24</small></div><div class="stat"><i>🔥</i><b>${s.streak}</b><small>Day practice streak</small></div>`;
  $("#streak-chip").textContent = `🔥 ${s.streak}-day streak`;
}
async function login() {
  await window.cloudReady;
  if (!window.Cloud.configured) {
    $("#auth-status").textContent =
      "Add SUPABASE_URL and SUPABASE_ANON_KEY in Vercel to enable accounts.";
    return;
  }
  window.Cloud.user ? showApp() : ($("#login").hidden = false);
}
function showApp() {
  const p = profile();
  $("#login").hidden = true;
  $("#app").hidden = false;
  $("#profile-name").textContent = p.name;
  $("#profile-class").textContent = p.classCode || "No class";
  $("#avatar").textContent = (p.name || "S")[0].toUpperCase();
  $("#view-title").textContent =
    `Hello, ${(p.name || "speaker").split(" ")[0]}!`;
  $("#teacher-class").textContent = p.classCode || "—";
  const teacher = p.role === "teacher";
  $(`.nav[data-view="teacher"]`).hidden = !teacher;
  statCards("#home-stats");
  renderDiagnostic();
  renderProgress();
  if (teacher) renderTeacher();
}
function authInput() {
  return {
    name: $("#login-name").value.trim(),
    email: $("#login-email").value.trim(),
    password: $("#login-password").value,
    classCode: $("#login-class").value.trim().toUpperCase(),
    role: $("#login-role").value,
  };
}
function authStatus(t) {
  $("#auth-status").textContent = t;
}
$("#enter-app").onclick = async () => {
  const v = authInput();
  if (!v.email || !v.password)
    return authStatus("Enter your email and password.");
  try {
    authStatus("Signing in…");
    await window.Cloud.signIn(v);
    showApp();
  } catch (e) {
    authStatus(e.message);
  }
};
$("#create-account").onclick = async () => {
  const v = authInput();
  if (!v.name || !v.email || v.password.length < 8 || !v.classCode)
    return authStatus("Enter your name, email, password and class code.");
  if (!$("#consent").checked)
    return authStatus("Voice-recording consent is required.");
  try {
    authStatus("Creating account…");
    const r = await window.Cloud.signUp(v);
    if (r.confirmationRequired)
      return authStatus(
        "Check your email to confirm the account, then sign in.",
      );
    showApp();
  } catch (e) {
    authStatus(e.message);
  }
};
$("#logout").onclick = async () => {
  await window.Cloud.signOut();
  location.reload();
};
$$(".nav").forEach((b) => (b.onclick = () => openView(b.dataset.view)));
$$("[data-go]").forEach((b) => (b.onclick = () => openView(b.dataset.go)));
$$(".mode-card").forEach(
  (b) =>
    (b.onclick = () => {
      state.part = b.dataset.part;
      $("#part-select").value = state.part;
      state.task = 0;
      openView("practice");
      renderTask();
    }),
);
function openView(id) {
  $$(".view,.nav").forEach((x) => x.classList.remove("active"));
  $("#" + id).classList.add("active");
  $(`.nav[data-view="${id}"]`)?.classList.add("active");
  const t = {
    home: `Hello, ${profile().name?.split(" ")[0] || "speaker"}!`,
    practice: "SPM speaking practice",
    diagnostic: "Diagnostic test",
    progress: "Your progress",
    teacher: "Teacher dashboard",
  };
  $("#view-title").textContent = t[id];
  if (id === "progress") renderProgress();
  if (id === "teacher") renderTeacher();
}
$("#text-toggle").onclick = () => document.body.classList.toggle("large-text");
$("#lang-toggle").onclick = () =>
  toast(
    "Arahan: pilih soalan, rancang isi, rakam jawapan dan dapatkan maklum balas AI.",
  );
function populateTopics() {
  const s = $("#topic-select");
  s.innerHTML = TASKS[state.part]
    .map((x, i) => `<option value="${i}">${i + 1}. ${esc(x[0])}</option>`)
    .join("");
  s.value = state.task;
}
function modelAnswer() {
  const [topic, q, pts] = task();
  if (state.part === "part1")
    return `Usually, I answer this question with a clear personal detail. One reason is that it is meaningful to me. For example, I can describe a real experience and explain how it made me feel.`;
  if (state.part === "part2")
    return `I’d like to talk about ${topic.toLowerCase()}. First, ${pts[0]} gives the listener a clear context. ${pts[1]} can then be explained with a specific reason. For example, I would add a personal or Malaysian example related to ${pts[2]}. Another point worth mentioning is ${pts[3]}. Overall, this topic can have a positive effect on young people.`;
  return `Shall we start with ${pts[0]}? In my opinion, it could be effective because it is practical. I also think ${pts[1]} is worth considering. What do you think? That’s a good point. However, ${pts[2]} may reach more students. Shall we agree that ${pts[0]} is the best choice because it is realistic and easy to begin?`;
}
function renderSupport() {
  const [, , pts] = task(),
    box = $("#support-content");
  $$(".support-tab").forEach((x) =>
    x.classList.toggle("active", x.dataset.panel === state.panel),
  );
  if (state.panel === "phrases")
    box.innerHTML = `<b>Try these expressions</b><ul>${PHRASES[state.part].map((x) => `<li>${x}</li>`).join("")}</ul>`;
  if (state.panel === "ideas")
    box.innerHTML = `<b>Point–Reason–Example ideas</b><ul>${pts.map((x) => `<li>${esc(x[0].toUpperCase() + x.slice(1))}: add a reason and one relevant example.</li>`).join("")}</ul>`;
  if (state.panel === "sample")
    box.innerHTML = `<b>Intermediate sample response</b><p id="sample-text">${esc(modelAnswer())}</p><div class="sample-actions"><button class="btn soft" data-speak="1">🔊 Normal</button><button class="btn soft" data-speak=".72">🐢 Slower</button></div><small>Notice organisation and useful language—do not memorise.</small>`;
  if (state.panel === "aihelp")
    box.innerHTML = `<b>Ask the AI speaking assistant</b><p class="muted">Get ideas, vocabulary or a follow-up question.</p><div class="button-row"><button class="btn soft ai-prompt">Give me three ideas</button><button class="btn soft ai-prompt">Ask a follow-up question</button><button class="btn soft ai-prompt">Suggest useful vocabulary</button></div><div id="assist-result"></div>`;
  $$("[data-speak]").forEach(
    (b) =>
      (b.onclick = () =>
        speak($("#sample-text").textContent, +b.dataset.speak)),
  );
  $$(".ai-prompt").forEach((b) => (b.onclick = () => assist(b.textContent)));
}
function speak(text, rate = 1) {
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-MY";
  u.rate = rate;
  speechSynthesis.speak(u);
}
async function assist(request) {
  const out = $("#assist-result");
  out.innerHTML = '<p class="loading"><span></span> Thinking…</p>';
  try {
    const token = await window.Cloud.accessToken(),
      r = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          mode: "assist",
          request,
          prompt: task()[1],
          points: task()[2],
          part: state.part,
          difficulty: $("#difficulty").value,
        }),
      }),
      d = await r.json();
    if (!r.ok) throw Error(d.error || "AI request failed");
    out.innerHTML = `<div class="model-response">${esc(d.answer)}</div>`;
  } catch (e) {
    out.innerHTML = `<p class="muted">${esc(e.message)}</p>`;
  }
}
function renderTask() {
  populateTopics();
  const [, q, pts] = task(),
    f = FORMATS[state.part];
  $("#part-label").textContent = f.label;
  $("#task-question").textContent = q;
  $("#format-box").textContent = f.note;
  $("#discussion-points").innerHTML = pts
    .map((x) => `<div>${esc(x)}</div>`)
    .join("");
  state.panel = "phrases";
  renderSupport();
  resetTimer();
  $("#feedback-card").hidden = true;
}
$("#part-select").onchange = (e) => {
  state.part = e.target.value;
  state.task = 0;
  renderTask();
};
$("#topic-select").onchange = (e) => {
  state.task = +e.target.value;
  renderTask();
};
$("#random-task").onclick = () => {
  state.task = Math.floor(Math.random() * TASKS[state.part].length);
  renderTask();
};
$$(".support-tab").forEach(
  (b) =>
    (b.onclick = () => {
      state.panel = b.dataset.panel;
      renderSupport();
    }),
);
function resetTimer() {
  clearInterval(state.tick);
  state.tick = null;
  state.stage = 0;
  state.seconds = FORMATS[state.part].stages[0][1];
  state.total = state.seconds;
  $("#timer-start").textContent = "Start sequence";
  paintTimer();
}
function paintTimer() {
  const st = FORMATS[state.part].stages[state.stage],
    m = String(Math.floor(state.seconds / 60)).padStart(2, "0"),
    s = String(state.seconds % 60).padStart(2, "0");
  $("#timer").textContent = `${m}:${s}`;
  $("#timer-stage").textContent = st[0];
  $("#timer-note").textContent = st[2];
  $("#timer-bar").style.width = `${(state.seconds / state.total) * 100}%`;
  $("#sequence").innerHTML = FORMATS[state.part].stages
    .map(
      (_, i) =>
        `<span class="${i < state.stage ? "done" : i === state.stage ? "now" : ""}"></span>`,
    )
    .join("");
}
function nextStage() {
  state.stage++;
  if (state.stage >= FORMATS[state.part].stages.length) {
    clearInterval(state.tick);
    state.tick = null;
    $("#timer-start").textContent = "Sequence complete";
    return toast("Speaking sequence complete!");
  }
  state.seconds = FORMATS[state.part].stages[state.stage][1];
  state.total = state.seconds;
  paintTimer();
}
$("#timer-start").onclick = () => {
  if ($("#timer-start").textContent === "Sequence complete")
    return resetTimer();
  if (state.tick) {
    clearInterval(state.tick);
    state.tick = null;
    $("#timer-start").textContent = "Resume";
    return;
  }
  $("#timer-start").textContent = "Pause";
  state.tick = setInterval(() => {
    if (state.seconds > 0) {
      state.seconds--;
      paintTimer();
    } else nextStage();
  }, 1000);
};
$("#timer-reset").onclick = resetTimer;
async function toggleRecord() {
  if (state.media?.state === "recording") return stopRecord();
  if (!navigator.mediaDevices?.getUserMedia)
    return toast("Voice recording is not supported.");
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    state.chunks = [];
    state.media = new MediaRecorder(stream);
    state.media.ondataavailable = (e) =>
      e.data.size && state.chunks.push(e.data);
    state.media.onstop = () => {
      state.audio = new Blob(state.chunks, {
        type: state.media.mimeType || "audio/webm",
      });
      state.audioUrl = URL.createObjectURL(state.audio);
      $("#audio-playback").src = state.audioUrl;
      $("#audio-playback").hidden = false;
      $("#download-audio").disabled =
        $("#delete-audio").disabled =
        $("#ai-score").disabled =
          false;
      stream.getTracks().forEach((t) => t.stop());
    };
    state.media.start();
    state.recordStart = Date.now();
    $("#record-btn").classList.add("recording");
    $("#live-wave").classList.add("active");
    $("#record-status").textContent = "Recording… tap to stop";
    state.recordTick = setInterval(
      () =>
        ($("#record-time").textContent = formatSeconds(
          Math.floor((Date.now() - state.recordStart) / 1000),
        )),
      500,
    );
  } catch (e) {
    toast("Microphone permission is needed.");
  }
}
function stopRecord() {
  state.media.stop();
  clearInterval(state.recordTick);
  $("#record-btn").classList.remove("recording");
  $("#live-wave").classList.remove("active");
  $("#record-status").textContent = "Recording complete";
}
function formatSeconds(n) {
  return `${String(Math.floor(n / 60)).padStart(2, "0")}:${String(n % 60).padStart(2, "0")}`;
}
$("#record-btn").onclick = toggleRecord;
$("#delete-audio").onclick = () => {
  if (state.audioUrl) URL.revokeObjectURL(state.audioUrl);
  state.audio = null;
  $("#audio-playback").hidden = true;
  $("#download-audio").disabled =
    $("#delete-audio").disabled =
    $("#ai-score").disabled =
      true;
  $("#record-status").textContent = "Ready to record";
  $("#record-time").textContent = "00:00";
};
$("#download-audio").onclick = () => {
  const a = document.createElement("a");
  a.href = state.audioUrl;
  a.download = `SpeakBuddy-${state.part}-${Date.now()}.webm`;
  a.click();
};
const toBase64 = (blob) =>
  new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result.split(",")[1]);
    r.onerror = rej;
    r.readAsDataURL(blob);
  });
$("#ai-score").onclick = async () => {
  if (!state.audio) return;
  $("#ai-loading").hidden = false;
  $("#ai-score").disabled = true;
  try {
    const token = await window.Cloud.accessToken(),
      audio = await toBase64(state.audio),
      duration = Math.max(
        1,
        Math.round((Date.now() - state.recordStart) / 1000),
      ),
      r = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          mode: "score",
          audio,
          mimeType: state.audio.type,
          prompt: task()[1],
          points: task()[2],
          part: state.part,
          duration,
          difficulty: $("#difficulty").value,
        }),
      }),
      d = await r.json();
    if (!r.ok) throw Error(d.error || "AI scoring failed");
    await saveFeedback(d, duration);
    renderFeedback(d);
    toast("AI feedback is saved!");
  } catch (e) {
    toast(e.message);
    $("#feedback-card").hidden = false;
    $("#feedback-card").innerHTML =
      `<h2>AI feedback unavailable</h2><p>${esc(e.message)}</p>`;
  } finally {
    $("#ai-loading").hidden = true;
    $("#ai-score").disabled = false;
  }
};
async function saveFeedback(d, duration) {
  const p = profile(),
    entry = {
      id: Date.now(),
      name: p.name,
      classCode: p.classCode,
      date: new Date().toISOString(),
      part: state.part,
      topic: task()[0],
      prompt: task()[1],
      duration,
      total: d.total,
      scores: d.scores,
      feedback: d,
      teacherNote: "",
      diagnostic: state.diagnostic,
    };
  await window.Cloud.saveAttempt(entry, state.audio);
  if (state.diagnostic)
    localStorage.setItem(`sb_${state.diagnostic}`, JSON.stringify(entry));
  state.diagnostic = null;
  statCards("#home-stats");
  renderDiagnostic();
}
function renderFeedback(d) {
  const names = [
    ["Overall", "overall"],
    ["Grammar", "grammar"],
    ["Vocabulary", "vocabulary"],
    ["Communication", "communicativeCompetence"],
  ];
  $("#feedback-card").hidden = false;
  $("#feedback-card").innerHTML =
    `<div class="score-total"><div class="score-circle" style="--score:${Math.round((d.total / 24) * 100)}%"><b>${d.total}/24</b></div><div><span class="pill">AI-generated practice score</span><h2>SPM-aligned feedback</h2><p class="muted">Formative guidance only; official scores are awarded by trained examiners.</p></div></div><div class="score-bars">${names.map(([n, k]) => `<div class="score-item"><b>${n}<span>${d.scores[k]}/6</span></b><i><span style="width:${(d.scores[k] / 6) * 100}%"></span></i></div>`).join("")}</div><div class="feedback-columns"><div class="feedback-box good"><h3>✓ Strengths</h3><ul>${d.strengths.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div><div class="feedback-box improve"><h3>→ Improve next</h3><ul>${d.improvements.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div></div><div class="feedback-columns" style="margin-top:15px"><div class="feedback-box"><h3>Pronunciation & fluency</h3><p>${esc(d.pronunciation)}</p><p>${esc(d.fluency)}</p></div><div class="feedback-box"><h3>Ideas & organisation</h3><p>${esc(d.content)}</p><p>${esc(d.organisation)}</p></div></div><div class="model-response"><h3>Improved model response</h3><p>${esc(d.improvedResponse)}</p><button class="btn soft" id="speak-improved">🔊 Listen</button></div><details class="transcript"><summary>View transcript</summary><p>${esc(d.transcript)}</p></details>`;
  $("#speak-improved").onclick = () => speak(d.improvedResponse);
  $("#feedback-card").scrollIntoView({ behavior: "smooth" });
}
function diagnosticResult(key, target) {
  const x = JSON.parse(localStorage.getItem(key) || "null");
  $(target).textContent = x
    ? `${x.total}/24 · ${new Date(x.date).toLocaleDateString()}`
    : "Not completed yet";
  return x;
}
function renderDiagnostic() {
  const pre = diagnosticResult("sb_pre", "#pre-result"),
    post = diagnosticResult("sb_post", "#post-result");
  $("#diagnostic-chart").innerHTML =
    `<div class="bar-group"><div class="bar" style="height:${pre ? (pre.total / 24) * 170 : 4}px">${pre ? pre.total : ""}</div><small>Pre-test</small></div><div class="bar-group"><div class="bar post" style="height:${post ? (post.total / 24) * 170 : 4}px">${post ? post.total : ""}</div><small>Post-test</small></div>`;
}
function startDiagnostic(type) {
  state.diagnostic = type;
  state.part = "part2";
  state.task = 0;
  $("#part-select").value = state.part;
  openView("practice");
  renderTask();
  toast(`${type === "pre" ? "Pre" : "Post"}-test mode started.`);
}
$("#start-pre").onclick = () => startDiagnostic("pre");
$("#start-post").onclick = () => startDiagnostic("post");
function renderProgress() {
  statCards("#progress-stats");
  const a = getAttempts().slice().reverse();
  $("#trend-chart").innerHTML = a.length
    ? a
        .slice(-12)
        .map(
          (x) =>
            `<div style="height:${Math.max(5, (x.total / 24) * 160)}px"><span>${x.total}</span></div>`,
        )
        .join("")
    : '<div class="empty">Complete a practice to see your trend.</div>';
  const keys = [
    ["Overall", "overall"],
    ["Grammar", "grammar"],
    ["Vocabulary", "vocabulary"],
    ["Communication", "communicativeCompetence"],
  ];
  $("#criteria-chart").innerHTML = keys
    .map(([n, k]) => {
      const v = a.length
        ? a.reduce((s, x) => s + (x.scores?.[k] || 0), 0) / a.length
        : 0;
      return `<div class="criterion-row"><span>${n}</span><div class="criterion-track"><span style="width:${(v / 6) * 100}%"></span></div><b>${v.toFixed(1)}</b></div>`;
    })
    .join("");
  $("#attempt-list").innerHTML = a.length
    ? a
        .slice()
        .reverse()
        .map(
          (x) =>
            `<div class="attempt"><div class="attempt-head"><div><b>${esc(x.topic)} · ${esc(FORMATS[x.part]?.label)}</b><p class="muted">${new Date(x.date).toLocaleString()}</p></div><span class="score-badge">${x.total}/24</span></div><p>${esc(x.feedback?.improvements?.[0] || "")}</p>${x.teacherNote ? `<div class="teacher-note"><b>Teacher:</b> ${esc(x.teacherNote)}</div>` : ""}</div>`,
        )
        .join("")
    : '<div class="empty">No attempts saved yet.</div>';
}
$("#clear-history").onclick = async () => {
  if (confirm("Permanently delete all your attempts and recordings?")) {
    try {
      await window.Cloud.deleteOwnAttempts();
      renderProgress();
      statCards("#home-stats");
      toast("Practice history deleted.");
    } catch (e) {
      toast(e.message);
    }
  }
};
function renderTeacher() {
  const a = getAttempts(),
    students = new Set(a.map((x) => x.name)).size,
    avg = a.length ? a.reduce((s, x) => s + x.total, 0) / a.length : 0,
    last = a.length ? Math.max(...a.map((x) => new Date(x.date).getTime())) : 0;
  $("#teacher-stats").innerHTML =
    `<div class="stat"><i>👤</i><b>${students}</b><small>Students</small></div><div class="stat"><i>🎙️</i><b>${a.length}</b><small>Total attempts</small></div><div class="stat"><i>⭐</i><b>${avg.toFixed(1)}</b><small>Average / 24</small></div><div class="stat"><i>📅</i><b>${last ? Math.floor((Date.now() - last) / 86400000) : "—"}</b><small>Days since practice</small></div>`;
  $("#teacher-table").innerHTML = a.length
    ? `<div class="table-wrap"><table><thead><tr><th>Date</th><th>Student</th><th>Task</th><th>Score</th><th>Recording</th><th>Teacher feedback</th></tr></thead><tbody>${a.map((x) => `<tr><td>${new Date(x.date).toLocaleDateString()}</td><td>${esc(x.name)}</td><td>${esc(x.topic)}<small>${esc(FORMATS[x.part]?.label)}</small></td><td><span class="score-badge">${x.total}/24</span></td><td>${x.recordingPath ? `<button class="btn soft" data-audio="${esc(x.recordingPath)}">Play</button>` : "—"}</td><td><textarea data-note="${x.id}">${esc(x.teacherNote || "")}</textarea></td></tr>`).join("")}</tbody></table></div>`
    : '<div class="empty">No student attempts saved.</div>';
  $$("[data-note]").forEach(
    (t) =>
      (t.onchange = async () => {
        try {
          await window.Cloud.saveTeacherNote(+t.dataset.note, t.value.trim());
          toast("Teacher feedback saved.");
        } catch (e) {
          toast(e.message);
        }
      }),
  );
  $$("[data-audio]").forEach(
    (b) =>
      (b.onclick = async () => {
        try {
          const url = await window.Cloud.recordingUrl(b.dataset.audio);
          window.open(url, "_blank", "noopener");
        } catch (e) {
          toast(e.message);
        }
      }),
  );
}
$("#export-csv").onclick = () => {
  const a = getAttempts(),
    rows = [
      [
        "Date",
        "Student",
        "Class",
        "Part",
        "Topic",
        "Overall",
        "Grammar",
        "Vocabulary",
        "Communication",
        "Total",
        "Teacher Feedback",
      ],
      ...a.map((x) => [
        x.date,
        x.name,
        x.classCode,
        x.part,
        x.topic,
        x.scores.overall,
        x.scores.grammar,
        x.scores.vocabulary,
        x.scores.communicativeCompetence,
        x.total,
        x.teacherNote || "",
      ]),
    ],
    csv = rows
      .map((r) =>
        r.map((v) => `"${String(v ?? "").replaceAll('"', '""')}"`).join(","),
      )
      .join("\n"),
    url = URL.createObjectURL(new Blob([csv], { type: "text/csv" })),
    link = document.createElement("a");
  link.href = url;
  link.download = "SpeakBuddy-SPM-results.csv";
  link.click();
  URL.revokeObjectURL(url);
};
$("#print-report").onclick = () => window.print();
renderTask();
login();
