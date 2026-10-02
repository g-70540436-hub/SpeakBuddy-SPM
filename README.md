# SpeakBuddy SPM

A Vercel-ready speaking practice application for Malaysian SPM English Speaking Test 1119/3, with Supabase accounts, private recordings, AI feedback, and teacher class dashboards.

## Included

- 18 tasks for each of Parts 1, 2, and 3 (54 total).
- Part 3 questions with six discussion points.
- SPM-style preparation and speaking timers.
- Browser recording, replay, download, delete, and resubmit.
- AI transcription and scores for Overall Spoken Performance, Grammar, Vocabulary, and Communicative Competence: 0–6 each, total 24. Scores are not labelled as bands.
- Useful phrases, ideas, Point–Reason–Example support, samples, and text-to-speech.
- Pre-test/post-test diagnostics and progress charts.
- Student and teacher accounts, class codes, cloud-synced attempts, private audio, teacher comments, CSV, and Print/PDF.
- Row Level Security so students see their records while teachers see records for their own classes.

AI results are formative estimates, not official examination marks.

## 1. Create the Supabase database

1. Create a project at [Supabase](https://supabase.com/).
2. Open **SQL Editor → New query**.
3. Copy all of `supabase/schema.sql`, paste it into the editor, and select **Run**.
4. Open **Project Settings → API** and copy the project URL and publishable/anon key.

The SQL creates the tables, private `recordings` bucket, authentication profile trigger, class-code functions, indexes, and security policies. Do not expose the Supabase service-role key.

## 2. Deploy to Vercel

1. Upload this folder to Vercel or connect its GitHub repository.
2. Choose the **Other** framework preset. No build command is required.
3. Under **Project Settings → Environment Variables**, add:

   - `OPENAI_API_KEY` — secret server-side OpenAI key.
   - `OPENAI_MODEL` — optional; defaults to `gpt-4.1-mini`.
   - `SUPABASE_URL` — your Supabase project URL.
   - `SUPABASE_ANON_KEY` — your publishable/anon key (not the service-role key).

4. Redeploy after saving the variables.

## 3. First use

1. A teacher creates an account and chooses a class code such as `5MAJU`; this creates the class.
2. Students create accounts using exactly the same class code.
3. If email confirmation is enabled in Supabase, users confirm the email and then sign in. Their requested class is joined automatically.

## Local preview

Run `npm start` to preview the interface. Authentication, storage, and AI features require the environment variables and a Vercel-compatible `/api` runtime.

Never place `OPENAI_API_KEY` or a Supabase service-role key in browser code.
