const json=(res,status,body)=>{res.statusCode=status;res.setHeader('Content-Type','application/json');res.end(JSON.stringify(body))};
const responseText=data=>data.output?.flatMap(x=>x.content||[]).find(x=>x.type==='output_text')?.text||data.output_text||'';
const clamp=n=>Math.max(0,Math.min(6,Math.round(Number(n)||0)));
async function authenticated(req){
  const token=(req.headers.authorization||'').replace(/^Bearer\s+/i,'');
  if(!token||!process.env.SUPABASE_URL||!process.env.SUPABASE_ANON_KEY)return false;
  const r=await fetch(`${process.env.SUPABASE_URL}/auth/v1/user`,{headers:{apikey:process.env.SUPABASE_ANON_KEY,Authorization:`Bearer ${token}`}});
  return r.ok;
}
export default async function handler(req,res){
  if(req.method!=='POST')return json(res,405,{error:'Method not allowed'});
  if(!process.env.OPENAI_API_KEY)return json(res,503,{error:'AI feedback is not configured yet'});
  if(!await authenticated(req))return json(res,401,{error:'Please sign in to use AI feedback.'});
  try{
    const body=typeof req.body==='string'?JSON.parse(req.body):req.body;
    if(body.mode==='assist'){
      const prompt=`You are SpeakBuddy SPM, a concise coach for Malaysian SPM English Speaking Test 1119/3. The student is practising ${body.part} at ${body.difficulty} level. Task: ${body.prompt}. Points: ${(body.points||[]).join('; ')}. Request: ${body.request}. Give practical help in no more than 100 words. Do not provide a memorisation script unless explicitly asked.`;
      const r=await fetch('https://api.openai.com/v1/responses',{method:'POST',headers:{Authorization:`Bearer ${process.env.OPENAI_API_KEY}`,'Content-Type':'application/json'},body:JSON.stringify({model:process.env.OPENAI_MODEL||'gpt-4.1-mini',input:prompt,max_output_tokens:220})});
      const d=await r.json();if(!r.ok)throw Error(d.error?.message||'AI request failed');return json(res,200,{answer:responseText(d)});
    }
    if(body.mode!=='score'||!body.audio)return json(res,400,{error:'A recording is required'});
    const bytes=Buffer.from(body.audio,'base64');if(bytes.length>12*1024*1024)return json(res,413,{error:'Keep the recording under 12 MB.'});
    const type=(body.mimeType||'audio/webm').split(';')[0],ext=type.includes('ogg')?'ogg':type.includes('mp4')?'mp4':'webm';
    const form=new FormData();form.append('file',new Blob([bytes],{type}),`response.${ext}`);form.append('model','gpt-4o-mini-transcribe');form.append('language','en');
    const tr=await fetch('https://api.openai.com/v1/audio/transcriptions',{method:'POST',headers:{Authorization:`Bearer ${process.env.OPENAI_API_KEY}`},body:form});
    const td=await tr.json();if(!tr.ok)throw Error(td.error?.message||'Transcription failed');
    const transcript=(td.text||'').trim(),words=transcript?transcript.split(/\s+/).length:0,wpm=Math.round(words/Math.max(1,body.duration/60));
    const rubric=`Score only these SPM 1119/3 areas from 0 to 6 points each, without calling them bands: Overall Spoken Performance, Grammar, Vocabulary, Communicative Competence. Apply this scale: 0 insufficient English; 1 basic familiar-topic language requiring support; 3 generally relevant simple interaction with reasonable accuracy; 5 developed relevant interaction with good control and range; 6 sustained detailed interaction with consistently strong accuracy and range. Scores 2 and 4 are between descriptors. In Part 3, do not invent partner interaction evidence.`;
    const prompt=`${rubric}\nPart: ${body.part}. Difficulty: ${body.difficulty}. Question: ${body.prompt}. Required points: ${(body.points||[]).join('; ')}. Duration: ${body.duration}s. Approximate rate: ${wpm} words per minute. Transcript: ${transcript||'[no usable transcript]'}. Return ONLY JSON: {"scores":{"overall":0,"grammar":0,"vocabulary":0,"communicativeCompetence":0},"strengths":["",""],"improvements":["",""],"pronunciation":"","fluency":"","content":"","organisation":"","confidence":"","improvedResponse":""}. Keep feedback concise and student-friendly. Pronunciation comments must be cautious because they are inferred from transcription clarity. The improved response should be 80–150 words.`;
    const r=await fetch('https://api.openai.com/v1/responses',{method:'POST',headers:{Authorization:`Bearer ${process.env.OPENAI_API_KEY}`,'Content-Type':'application/json'},body:JSON.stringify({model:process.env.OPENAI_MODEL||'gpt-4.1-mini',input:prompt,max_output_tokens:900,text:{format:{type:'json_object'}}})});
    const d=await r.json();if(!r.ok)throw Error(d.error?.message||'Scoring failed');
    const raw=responseText(d).trim().replace(/^```json\s*|\s*```$/g,''),out=JSON.parse(raw);
    out.scores={overall:clamp(out.scores?.overall),grammar:clamp(out.scores?.grammar),vocabulary:clamp(out.scores?.vocabulary),communicativeCompetence:clamp(out.scores?.communicativeCompetence)};
    out.total=Object.values(out.scores).reduce((a,b)=>a+b,0);out.transcript=transcript;out.metrics={words,wpm,duration:body.duration};return json(res,200,out);
  }catch(e){return json(res,500,{error:e.message||'Unexpected AI feedback error'})}
}
