/*
# CareerAI schema

1. New Tables
- `profiles` — extended user profile beyond auth.users (full name, age, gender, education, school/college, city, country, language, interests, skills, academic performance, working style, career goal). One row per auth user.
- `career_reports` — generated AI career reports (top 3 careers + roadmaps + skill suggestions). Owner-scoped to the authenticated user.

2. Security
- Enable RLS on both tables.
- Owner-scoped CRUD: each authenticated user can only access rows they own (user_id = auth.uid()).
- `profiles.user_id` defaults to auth.uid() so inserts that omit it still satisfy the WITH CHECK.
- `career_reports.user_id` defaults to auth.uid() likewise.

3. Notes
- Email/password auth handled by Supabase auth.users; this table stores the supplementary profile.
- Interests/skills stored as text[] for easy querying.
- The full structured report JSON is stored in career_reports.report (jsonb).
*/

CREATE TABLE IF NOT EXISTS profiles (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text,
  age integer,
  gender text,
  education_status text,
  college_name text,
  school_name text,
  current_year text,
  department text,
  city text,
  country text,
  preferred_language text DEFAULT 'English',
  interests text[] DEFAULT '{}',
  skills text[] DEFAULT '{}',
  academic_performance text,
  working_style text[] DEFAULT '{}',
  career_goal text,
  profile_complete boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_profile" ON profiles;
CREATE POLICY "select_own_profile" ON profiles FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_profile" ON profiles;
CREATE POLICY "insert_own_profile" ON profiles FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_profile" ON profiles;
CREATE POLICY "update_own_profile" ON profiles FOR UPDATE
  TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_profile" ON profiles;
CREATE POLICY "delete_own_profile" ON profiles FOR DELETE
  TO authenticated USING (auth.uid() = user_id);


CREATE TABLE IF NOT EXISTS career_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  input jsonb NOT NULL,
  report jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE career_reports ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_reports" ON career_reports;
CREATE POLICY "select_own_reports" ON career_reports FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_reports" ON career_reports;
CREATE POLICY "insert_own_reports" ON career_reports FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_reports" ON career_reports;
CREATE POLICY "delete_own_reports" ON career_reports FOR DELETE
  TO authenticated USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS career_reports_user_idx ON career_reports(user_id, created_at DESC);
