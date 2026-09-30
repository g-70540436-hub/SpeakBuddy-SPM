begin;
create extension if not exists pgcrypto;

create table if not exists public.profiles(
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  role text not null default 'student' check(role in('student','teacher')),
  created_at timestamptz not null default now()
);
create table if not exists public.classes(
  id uuid primary key default gen_random_uuid(),
  name text not null,
  code text not null unique check(code=upper(code)),
  teacher_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now()
);
create table if not exists public.class_members(
  class_id uuid not null references public.classes(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  role text not null check(role in('student','teacher')),
  joined_at timestamptz not null default now(),
  primary key(class_id,user_id)
);
create table if not exists public.assignments(
  id uuid primary key default gen_random_uuid(),class_id uuid not null references public.classes(id) on delete cascade,
  teacher_id uuid not null references public.profiles(id),title text not null,part text not null check(part in('part1','part2','part3')),
  topic text not null,prompt text not null,due_at timestamptz,created_at timestamptz not null default now()
);
create table if not exists public.attempts(
  id bigint generated always as identity primary key,user_id uuid not null references public.profiles(id) on delete cascade,
  class_id uuid references public.classes(id) on delete set null,assignment_id uuid references public.assignments(id) on delete set null,
  student_name text not null,part text not null check(part in('part1','part2','part3')),topic text not null,prompt text not null,
  duration_seconds integer not null default 0,total_score smallint not null check(total_score between 0 and 24),
  overall_score smallint not null check(overall_score between 0 and 6),grammar_score smallint not null check(grammar_score between 0 and 6),
  vocabulary_score smallint not null check(vocabulary_score between 0 and 6),communication_score smallint not null check(communication_score between 0 and 6),
  ai_feedback jsonb not null default '{}'::jsonb,diagnostic_type text check(diagnostic_type in('pre','post')),recording_path text,
  created_at timestamptz not null default now()
);
create table if not exists public.teacher_feedback(
  id bigint generated always as identity primary key,attempt_id bigint not null unique references public.attempts(id) on delete cascade,
  teacher_id uuid not null references public.profiles(id) on delete cascade,comment text not null,created_at timestamptz not null default now(),updated_at timestamptz not null default now()
);

create index if not exists attempts_user_idx on public.attempts(user_id);
create index if not exists attempts_class_idx on public.attempts(class_id);
create index if not exists members_user_idx on public.class_members(user_id);

create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path=public as $$
begin insert into public.profiles(id,full_name,role) values(new.id,coalesce(new.raw_user_meta_data->>'full_name',''),coalesce(new.raw_user_meta_data->>'role','student'));return new;end$$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

create or replace function public.is_class_teacher(p_class uuid) returns boolean language sql stable security definer set search_path=public as $$select exists(select 1 from public.class_members where class_id=p_class and user_id=(select auth.uid()) and role='teacher')$$;
create or replace function public.is_class_member(p_class uuid) returns boolean language sql stable security definer set search_path=public as $$select exists(select 1 from public.class_members where class_id=p_class and user_id=(select auth.uid()))$$;
create or replace function public.create_or_get_class(p_code text,p_name text) returns uuid language plpgsql security definer set search_path=public as $$declare cid uuid;begin if not exists(select 1 from public.profiles where id=(select auth.uid()) and role='teacher') then raise exception 'Teacher account required';end if;insert into public.classes(name,code,teacher_id) values(coalesce(nullif(trim(p_name),''),upper(trim(p_code))),upper(trim(p_code)),(select auth.uid())) on conflict(code) do update set code=excluded.code where classes.teacher_id=(select auth.uid()) returning id into cid;if cid is null then raise exception 'Class code already belongs to another teacher';end if;insert into public.class_members(class_id,user_id,role) values(cid,(select auth.uid()),'teacher') on conflict do nothing;return cid;end$$;
create or replace function public.join_class_by_code(p_code text) returns uuid language plpgsql security definer set search_path=public as $$declare cid uuid;begin select id into cid from public.classes where code=upper(trim(p_code));if cid is null then raise exception 'Class code not found';end if;insert into public.class_members(class_id,user_id,role) values(cid,(select auth.uid()),'student') on conflict do nothing;return cid;end$$;

alter table public.profiles enable row level security;alter table public.classes enable row level security;alter table public.class_members enable row level security;alter table public.assignments enable row level security;alter table public.attempts enable row level security;alter table public.teacher_feedback enable row level security;
revoke all on public.profiles,public.classes,public.class_members,public.assignments,public.attempts,public.teacher_feedback from anon;
grant select,update on public.profiles to authenticated;grant select,insert,update,delete on public.classes,public.class_members,public.assignments,public.attempts,public.teacher_feedback to authenticated;
grant execute on function public.create_or_get_class(text,text),public.join_class_by_code(text) to authenticated;

create policy profiles_self_select on public.profiles for select to authenticated using(id=(select auth.uid()) or exists(select 1 from public.class_members m join public.class_members me on me.class_id=m.class_id where m.user_id=profiles.id and me.user_id=(select auth.uid()) and me.role='teacher'));
create policy profiles_self_update on public.profiles for update to authenticated using(id=(select auth.uid())) with check(id=(select auth.uid()));
create policy classes_member_select on public.classes for select to authenticated using(public.is_class_member(id));
create policy members_class_select on public.class_members for select to authenticated using(user_id=(select auth.uid()) or public.is_class_teacher(class_id));
create policy assignments_member_select on public.assignments for select to authenticated using(public.is_class_member(class_id));
create policy assignments_teacher_insert on public.assignments for insert to authenticated with check(teacher_id=(select auth.uid()) and public.is_class_teacher(class_id));
create policy assignments_teacher_update on public.assignments for update to authenticated using(teacher_id=(select auth.uid()) and public.is_class_teacher(class_id));
create policy assignments_teacher_delete on public.assignments for delete to authenticated using(teacher_id=(select auth.uid()) and public.is_class_teacher(class_id));
create policy attempts_select on public.attempts for select to authenticated using(user_id=(select auth.uid()) or (class_id is not null and public.is_class_teacher(class_id)));
create policy attempts_insert on public.attempts for insert to authenticated with check(user_id=(select auth.uid()) and (class_id is null or public.is_class_member(class_id)));
create policy attempts_owner_delete on public.attempts for delete to authenticated using(user_id=(select auth.uid()));
create policy feedback_select on public.teacher_feedback for select to authenticated using(teacher_id=(select auth.uid()) or exists(select 1 from public.attempts a where a.id=attempt_id and a.user_id=(select auth.uid())));
create policy feedback_teacher_insert on public.teacher_feedback for insert to authenticated with check(teacher_id=(select auth.uid()) and exists(select 1 from public.attempts a where a.id=attempt_id and public.is_class_teacher(a.class_id)));
create policy feedback_teacher_update on public.teacher_feedback for update to authenticated using(teacher_id=(select auth.uid())) with check(teacher_id=(select auth.uid()));

insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types) values('recordings','recordings',false,12582912,array['audio/webm','audio/ogg','audio/mp4']) on conflict(id) do update set public=false,file_size_limit=excluded.file_size_limit,allowed_mime_types=excluded.allowed_mime_types;
create policy recordings_student_insert on storage.objects for insert to authenticated with check(bucket_id='recordings' and (storage.foldername(name))[2]=(select auth.uid())::text);
create policy recordings_read on storage.objects for select to authenticated using(bucket_id='recordings' and ((storage.foldername(name))[2]=(select auth.uid())::text or public.is_class_teacher(((storage.foldername(name))[1])::uuid)));
create policy recordings_student_delete on storage.objects for delete to authenticated using(bucket_id='recordings' and (storage.foldername(name))[2]=(select auth.uid())::text);
commit;
