import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export type Profile = {
  user_id: string;
  full_name: string | null;
  age: number | null;
  gender: string | null;
  education_status: string | null;
  college_name: string | null;
  school_name: string | null;
  current_year: string | null;
  department: string | null;
  city: string | null;
  country: string | null;
  preferred_language: string | null;
  interests: string[];
  skills: string[];
  academic_performance: string | null;
  working_style: string[];
  career_goal: string | null;
  profile_complete: boolean;
  created_at: string;
  updated_at: string;
};

export type CareerReport = {
  id: string;
  user_id: string;
  input: Record<string, unknown>;
  report: GeneratedReport;
  created_at: string;
};

export type CareerRecommendation = {
  career: string;
  suitability: number;
  description: string;
  salary_range: string;
  required_education: string;
  future_demand: string;
  growth_rate: string;
  job_market: string;
  pros: string[];
  cons: string[];
  required_skills: string[];
  matching_skills: string[];
  missing_skills: string[];
  ai_confidence: number;
  roadmap: string[];
  skill_suggestions: {
    recommended_courses: string[];
    recommended_certifications: string[];
    recommended_books: string[];
    practice_platforms: string[];
    youtube_resources: string[];
    estimated_completion_time: string;
  };
};

export type GeneratedReport = {
  careers: CareerRecommendation[];
  overall_confidence: number;
  generated_at: string;
};
