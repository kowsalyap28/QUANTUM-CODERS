import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  TrendingUp, TrendingDown, CheckCircle2, XCircle, Award,
  BookOpen, Map, ArrowRight, Briefcase, DollarSign, GraduationCap,
  BarChart3, Sparkles, Download, RotateCcw,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { GeneratedReport, CareerRecommendation } from '@/lib/supabase';

function SuitabilityRing({ pct }: { pct: number }) {
  const radius = 52;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (pct / 100) * circ;
  return (
    <div className="relative w-32 h-32 flex-shrink-0">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={radius} fill="none" strokeWidth="8" className="stroke-gray-200 dark:stroke-white/10" />
        <motion.circle
          cx="60" cy="60" r={radius} fill="none" strokeWidth="8"
          stroke="url(#grad)" strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold gradient-text-dark dark:gradient-text-dark">{pct}%</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">Match</span>
      </div>
    </div>
  );
}

function CareerCard({ career, index }: { career: CareerRecommendation; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      className="glass-card p-6 lg:p-8 mb-8"
    >
      {/* header */}
      <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
        <SuitabilityRing pct={career.suitability} />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
              #{index + 1} Recommendation
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              AI Confidence: {career.ai_confidence}%
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-2">{career.career}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{career.description}</p>
        </div>
      </div>

      {/* key stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {[
          { icon: DollarSign, label: 'Salary Range', value: career.salary_range },
          { icon: GraduationCap, label: 'Education', value: career.required_education },
          { icon: TrendingUp, label: 'Future Demand', value: career.future_demand },
          { icon: BarChart3, label: 'Growth Rate', value: career.growth_rate },
        ].map((s) => (
          <div key={s.label} className="glass p-3 rounded-xl">
            <div className="flex items-center gap-1.5 mb-1">
              <s.icon className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-xs text-gray-500 dark:text-gray-400">{s.label}</span>
            </div>
            <p className="text-xs font-medium">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="glass p-3 rounded-xl mb-6">
        <div className="flex items-center gap-1.5 mb-1">
          <Briefcase className="w-3.5 h-3.5 text-blue-500" />
          <span className="text-xs text-gray-500 dark:text-gray-400">Job Market</span>
        </div>
        <p className="text-sm">{career.job_market}</p>
      </div>

      {/* pros / cons */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="glass p-4 rounded-xl">
          <h4 className="font-semibold text-sm mb-3 flex items-center gap-2 text-green-600 dark:text-green-400">
            <CheckCircle2 className="w-4 h-4" /> Pros
          </h4>
          <ul className="space-y-1.5">
            {career.pros.map((p) => (
              <li key={p} className="text-xs text-gray-600 dark:text-gray-300 flex items-start gap-2">
                <span className="text-green-500 mt-0.5">+</span> {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass p-4 rounded-xl">
          <h4 className="font-semibold text-sm mb-3 flex items-center gap-2 text-red-500">
            <XCircle className="w-4 h-4" /> Cons
          </h4>
          <ul className="space-y-1.5">
            {career.cons.map((c) => (
              <li key={c} className="text-xs text-gray-600 dark:text-gray-300 flex items-start gap-2">
                <span className="text-red-500 mt-0.5">-</span> {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* skills */}
      <div className="space-y-4 mb-6">
        <div>
          <h4 className="font-semibold text-sm mb-2">Required Skills</h4>
          <div className="flex flex-wrap gap-2">
            {career.required_skills.map((s) => {
              const has = career.matching_skills.includes(s);
              return (
                <span
                  key={s}
                  className={`text-xs px-2.5 py-1.5 rounded-lg ${
                    has
                      ? 'bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400'
                      : 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400'
                  }`}
                >
                  {has && <CheckCircle2 className="w-3 h-3 inline mr-1" />}
                  {s}
                </span>
              );
            })}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="glass p-4 rounded-xl">
            <h5 className="text-xs font-semibold text-green-600 dark:text-green-400 mb-2">Matching Skills ({career.matching_skills.length})</h5>
            <div className="flex flex-wrap gap-1.5">
              {career.matching_skills.length ? career.matching_skills.map((s) => (
                <span key={s} className="text-xs px-2 py-1 rounded-md bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400">{s}</span>
              )) : <span className="text-xs text-gray-400">None yet</span>}
            </div>
          </div>
          <div className="glass p-4 rounded-xl">
            <h5 className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-2">Missing Skills ({career.missing_skills.length})</h5>
            <div className="flex flex-wrap gap-1.5">
              {career.missing_skills.length ? career.missing_skills.map((s) => (
                <span key={s} className="text-xs px-2 py-1 rounded-md bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400">{s}</span>
              )) : <span className="text-xs text-gray-400">None — you're fully matched!</span>}
            </div>
          </div>
        </div>
      </div>

      {/* roadmap */}
      <div className="glass p-5 rounded-xl mb-6">
        <h4 className="font-semibold text-sm mb-4 flex items-center gap-2">
          <Map className="w-4 h-4 text-blue-500" /> Learning Roadmap
        </h4>
        <div className="space-y-0">
          {career.roadmap.map((step, i) => (
            <div key={step} className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full gradient-btn flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  {i + 1}
                </div>
                {i < career.roadmap.length - 1 && <div className="w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent" />}
              </div>
              <p className="text-sm pt-1">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* skill suggestions */}
      <div className="glass p-5 rounded-xl">
        <h4 className="font-semibold text-sm mb-4 flex items-center gap-2">
          <Award className="w-4 h-4 text-blue-500" /> Skill Suggestions & Resources
        </h4>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { label: 'Recommended Courses', items: career.skill_suggestions.recommended_courses, icon: BookOpen },
            { label: 'Certifications', items: career.skill_suggestions.recommended_certifications, icon: Award },
            { label: 'Books', items: career.skill_suggestions.recommended_books, icon: BookOpen },
            { label: 'Practice Platforms', items: career.skill_suggestions.practice_platforms, icon: BarChart3 },
            { label: 'YouTube Resources', items: career.skill_suggestions.youtube_resources, icon: TrendingUp },
          ].map((g) => (
            <div key={g.label}>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 flex items-center gap-1.5">
                <g.icon className="w-3.5 h-3.5" /> {g.label}
              </p>
              <ul className="space-y-1">
                {g.items.map((it) => (
                  <li key={it} className="text-xs text-gray-600 dark:text-gray-300 flex items-start gap-1.5">
                    <ArrowRight className="w-3 h-3 mt-0.5 text-blue-400 flex-shrink-0" /> {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="sm:col-span-2 glass p-3 rounded-lg mt-2">
            <p className="text-xs font-medium text-blue-600 dark:text-blue-400">Estimated Completion Time</p>
            <p className="text-sm font-semibold mt-0.5">{career.skill_suggestions.estimated_completion_time}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Result() {
  const location = useLocation();
  const report = (location.state as { report: GeneratedReport } | null)?.report;

  if (!report) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <Sparkles className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">No report found</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">Generate a new career report to see your personalized recommendations.</p>
          <Link to="/generator">
            <button className="px-6 py-3 rounded-xl gradient-btn font-semibold shadow-lg glow">
              Go to Generator
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="relative grid-bg">
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl animate-blob animation-delay-2000" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-blue-600 dark:text-blue-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> AI Generated
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Your AI Career Report</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Based on your interests, skills, and preferences — here are your top {report.careers.length} career matches.
            </p>
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl glass">
              <Award className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium">Overall Confidence: {report.overall_confidence}%</span>
            </div>
          </motion.div>

          {report.careers.map((c, i) => (
            <CareerCard key={c.career} career={c} index={i} />
          ))}

          <div className="flex flex-wrap gap-4 justify-center pb-8">
            <Link to="/generator">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 rounded-xl glass font-semibold flex items-center gap-2">
                <RotateCcw className="w-4 h-4" /> Generate New Report
              </motion.button>
            </Link>
            <Link to="/profile">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 rounded-xl gradient-btn font-semibold shadow-lg glow flex items-center gap-2">
                <Download className="w-4 h-4" /> View Saved Reports
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
