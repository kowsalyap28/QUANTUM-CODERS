import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Check, Loader2, GraduationCap, Briefcase, Target, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  INTEREST_OPTIONS, SKILL_OPTIONS, ACADEMIC_OPTIONS,
  WORKING_STYLE_OPTIONS, CAREER_GOAL_OPTIONS,
} from '@/lib/careerEngine';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { generateCareerReport } from '@/lib/careerEngine';

function Chip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-2 rounded-xl text-sm font-medium border transition-all ${
        selected
          ? 'gradient-btn border-transparent shadow-md scale-105 text-white'
          : 'bg-white dark:bg-white/[0.06] border-gray-300 dark:border-white/15 text-gray-800 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-500/15 hover:border-blue-300 dark:hover:border-blue-500/40 hover:text-blue-700 dark:hover:text-blue-300 hover:scale-105'
      }`}
    >
      <span className="flex items-center gap-1.5">
        {selected && <Check className="w-3.5 h-3.5" />}
        {label}
      </span>
    </button>
  );
}

function SectionCard({ icon: Icon, title, subtitle, children }: { icon: any; title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 p-6 shadow-sm"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl gradient-btn flex items-center justify-center glow">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{subtitle}</p>
        </div>
      </div>
      {children}
    </motion.div>
  );
}

export default function Generator() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [interests, setInterests] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [academic, setAcademic] = useState('');
  const [workingStyle, setWorkingStyle] = useState<string[]>([]);
  const [careerGoal, setCareerGoal] = useState('');
  const [educationStatus, setEducationStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggle = (arr: string[], set: (v: string[]) => void, val: string) => {
    set(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);
  };

  const canGenerate = interests.length > 0 && skills.length > 0 && academic && careerGoal;

  const handleGenerate = async () => {
    if (!canGenerate) return;
    setLoading(true);
    setError(null);
    const input = {
      interests, skills, academic_performance: academic,
      education_status: educationStatus, career_goal: careerGoal,
      working_style: workingStyle,
    };
    const report = generateCareerReport(input);

    if (user) {
      const { error: dbErr } = await supabase.from('career_reports').insert({
        user_id: user.id, input, report,
      });
      if (dbErr) setError('Report generated but could not be saved to history.');
    }

    setLoading(false);
    navigate('/result', { state: { report } });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="relative grid-bg">
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl animate-blob animation-delay-2000" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 text-xs font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5" /> AI Career Generator
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Build Your Career Profile</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              Select your interests, skills, and preferences. Our AI engine will generate your top 3 personalized career recommendations.
            </p>
          </motion.div>

          <div className="space-y-6">
            <SectionCard icon={Sparkles} title="Interests" subtitle="Select all that appeal to you">
              <div className="flex flex-wrap gap-2">
                {INTEREST_OPTIONS.map((o) => (
                  <Chip key={o} label={o} selected={interests.includes(o)} onClick={() => toggle(interests, setInterests, o)} />
                ))}
              </div>
            </SectionCard>

            <SectionCard icon={Target} title="Skills" subtitle="Select skills you currently have">
              <div className="flex flex-wrap gap-2">
                {SKILL_OPTIONS.map((o) => (
                  <Chip key={o} label={o} selected={skills.includes(o)} onClick={() => toggle(skills, setSkills, o)} />
                ))}
              </div>
            </SectionCard>

            <div className="grid md:grid-cols-2 gap-6">
              <SectionCard icon={GraduationCap} title="Academic Performance" subtitle="How would you rate yourself?">
                <select value={academic} onChange={(e) => setAcademic(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/[0.06] border border-gray-300 dark:border-white/15 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select performance</option>
                  {ACADEMIC_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                </select>
              </SectionCard>

              <SectionCard icon={Target} title="Career Goal" subtitle="What matters most to you?">
                <select value={careerGoal} onChange={(e) => setCareerGoal(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/[0.06] border border-gray-300 dark:border-white/15 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select goal</option>
                  {CAREER_GOAL_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                </select>
              </SectionCard>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <SectionCard icon={Briefcase} title="Preferred Working Style" subtitle="How do you want to work?">
                <div className="flex flex-wrap gap-2">
                  {WORKING_STYLE_OPTIONS.map((o) => (
                    <Chip key={o} label={o} selected={workingStyle.includes(o)} onClick={() => toggle(workingStyle, setWorkingStyle, o)} />
                  ))}
                </div>
              </SectionCard>

              <SectionCard icon={Clock} title="Education Status" subtitle="Your current level">
                <select value={educationStatus} onChange={(e) => setEducationStatus(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/[0.06] border border-gray-300 dark:border-white/15 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select status</option>
                  {['High School', 'Higher Secondary', 'Diploma', 'UG', 'PG', 'Working Professional'].map((o) => <option key={o}>{o}</option>)}
                </select>
              </SectionCard>
            </div>

            {error && <p className="text-sm text-red-500 text-center">{error}</p>}

            <div className="flex justify-center pt-4 pb-8">
              <motion.button
                whileHover={canGenerate ? { scale: 1.05 } : {}}
                whileTap={canGenerate ? { scale: 0.95 } : {}}
                onClick={handleGenerate}
                disabled={!canGenerate || loading}
                className="px-10 py-4 rounded-2xl gradient-btn font-bold text-base shadow-2xl glow disabled:opacity-50 flex items-center gap-3"
              >
                {loading ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Generating your report...</>
                ) : (
                  <><Sparkles className="w-5 h-5" /> Generate Career Suggestions</>
                )}
              </motion.button>
            </div>

            {!canGenerate && (
              <p className="text-center text-xs text-gray-400">
                Select at least one interest, one skill, your academic performance, and career goal to continue.
              </p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
