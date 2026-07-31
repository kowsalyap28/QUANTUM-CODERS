import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, User, GraduationCap, MapPin, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { supabase, type Profile } from '@/lib/supabase';
import { EDUCATION_OPTIONS } from '@/lib/careerEngine';

export default function ProfileSetup() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    full_name: '',
    age: '',
    gender: '',
    education_status: '',
    college_name: '',
    school_name: '',
    current_year: '',
    department: '',
    city: '',
    country: '',
    preferred_language: 'English',
  });

  const steps = ['Personal', 'Education', 'Location'];
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const canContinue = () => {
    if (step === 0) return form.full_name && form.age && form.gender;
    if (step === 1) return form.education_status;
    return form.city && form.country;
  };

  const handleContinue = async () => {
    if (step < 2) {
      setStep((s) => s + 1);
      return;
    }
    if (!user) {
      navigate('/');
      return;
    }
    setSaving(true);
    setError(null);
    const profile: Partial<Profile> = {
      user_id: user.id,
      full_name: form.full_name,
      age: form.age ? parseInt(form.age) : null,
      gender: form.gender,
      education_status: form.education_status,
      college_name: form.college_name || null,
      school_name: form.school_name || null,
      current_year: form.current_year || null,
      department: form.department || null,
      city: form.city,
      country: form.country,
      preferred_language: form.preferred_language,
      profile_complete: true,
    };
    const { error: upErr } = await supabase.from('profiles').upsert(profile);
    setSaving(false);
    if (upErr) {
      setError(upErr.message);
    } else {
      navigate('/home');
    }
  };

  const inputCls = 'w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/[0.06] border border-gray-300 dark:border-white/15 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500';
  const labelCls = 'text-xs font-medium text-gray-600 dark:text-gray-300 mb-1.5 block';

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 grid-bg">
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-lg glass-card p-8 shadow-2xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-xl gradient-btn flex items-center justify-center glow">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Complete Your Profile</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Step {step + 1} of 3 — {steps[step]}</p>
          </div>
        </div>

        {/* progress */}
        <div className="flex gap-2 mb-8">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? 'gradient-btn' : 'bg-gray-200 dark:bg-white/10'}`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="personal"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div>
                <label className={labelCls}>Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input value={form.full_name} onChange={(e) => set('full_name', e.target.value)} placeholder="John Doe" className={`${inputCls} pl-10`} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Age</label>
                  <input type="number" value={form.age} onChange={(e) => set('age', e.target.value)} placeholder="20" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Gender</label>
                  <select value={form.gender} onChange={(e) => set('gender', e.target.value)} className={inputCls}>
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Non-binary</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="education"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div>
                <label className={labelCls}>Education Status</label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <select value={form.education_status} onChange={(e) => set('education_status', e.target.value)} className={`${inputCls} pl-10`}>
                    <option value="">Select status</option>
                    {EDUCATION_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>College Name</label>
                  <input value={form.college_name} onChange={(e) => set('college_name', e.target.value)} placeholder="e.g. IIT Delhi" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>School Name</label>
                  <input value={form.school_name} onChange={(e) => set('school_name', e.target.value)} placeholder="e.g. Delhi Public School" className={inputCls} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Current Year</label>
                  <input value={form.current_year} onChange={(e) => set('current_year', e.target.value)} placeholder="e.g. 2nd Year" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Department</label>
                  <input value={form.department} onChange={(e) => set('department', e.target.value)} placeholder="e.g. Computer Science" className={inputCls} />
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="location"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>City</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input value={form.city} onChange={(e) => set('city', e.target.value)} placeholder="e.g. Mumbai" className={`${inputCls} pl-10`} />
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Country</label>
                  <input value={form.country} onChange={(e) => set('country', e.target.value)} placeholder="e.g. India" className={inputCls} />
                </div>
              </div>
              <div>
                <label className={labelCls}>Preferred Language</label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <select value={form.preferred_language} onChange={(e) => set('preferred_language', e.target.value)} className={`${inputCls} pl-10`}>
                    {['English', 'Hindi', 'Spanish', 'French', 'German', 'Arabic', 'Chinese', 'Japanese'].map((l) => <option key={l}>{l}</option>)}
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {error && <p className="text-xs text-red-500 mt-4">{error}</p>}

        <div className="flex gap-3 mt-8">
          {step > 0 && (
            <button onClick={() => setStep((s) => s - 1)} className="px-5 py-2.5 rounded-xl glass text-sm font-medium hover:scale-105 transition-transform">
              Back
            </button>
          )}
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={handleContinue}
            disabled={!canContinue() || saving}
            className="flex-1 py-2.5 rounded-xl gradient-btn font-semibold text-sm shadow-lg glow disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {saving ? 'Saving...' : step < 2 ? 'Continue' : 'Complete Profile'}
            {!saving && step < 2 && <ArrowRight className="w-4 h-4" />}
            {!saving && step === 2 && <CheckCircle2 className="w-4 h-4" />}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
