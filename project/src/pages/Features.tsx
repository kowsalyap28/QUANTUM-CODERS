import { motion } from 'framer-motion';
import {
  Sparkles, BookOpen, Target, BarChart3, TrendingUp, Award, Users, Shield,
  Moon, Zap, Database, Cpu, LayoutGrid, Clock, Globe, MessageCircle, FileText,
  Mic, Languages, Bell,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const features = [
  { icon: Sparkles, title: 'AI Career Recommendation', desc: 'Get your top 3 career matches with suitability percentages based on your unique profile.', color: 'from-blue-500 to-indigo-500' },
  { icon: BookOpen, title: 'Personalized Learning Roadmap', desc: 'Step-by-step timelines from foundational skills to placement for each recommended career.', color: 'from-cyan-500 to-blue-500' },
  { icon: Target, title: 'Skill Gap Analysis', desc: 'See exactly which skills you have and which you need to acquire for each career path.', color: 'from-indigo-500 to-purple-500' },
  { icon: BarChart3, title: 'Career Match Percentage', desc: 'Visual suitability scores with animated progress rings for each recommendation.', color: 'from-blue-500 to-cyan-500' },
  { icon: TrendingUp, title: 'Future Scope Prediction', desc: 'Insights on job demand, growth rates, and salary outlook for every career.', color: 'from-cyan-500 to-teal-500' },
  { icon: Award, title: 'Resume Suggestions', desc: 'Get guidance on building a resume tailored to your recommended career path.', color: 'from-indigo-500 to-blue-500' },
  { icon: BookOpen, title: 'Learning Resources', desc: 'Curated courses, books, certifications, and YouTube channels for each career.', color: 'from-blue-500 to-indigo-500' },
  { icon: Users, title: 'Profile Management', desc: 'Edit your profile, view saved reports, and track your career history over time.', color: 'from-cyan-500 to-blue-500' },
  { icon: Shield, title: 'Secure Authentication', desc: 'Email and password authentication with JWT sessions keep your data safe.', color: 'from-indigo-500 to-purple-500' },
  { icon: Moon, title: 'Dark Mode', desc: 'Beautiful dark and light themes with smooth transitions. Your preference is saved.', color: 'from-blue-500 to-indigo-500' },
  { icon: Zap, title: 'Fast Recommendations', desc: 'Generate your career report instantly — no waiting, no delays.', color: 'from-cyan-500 to-blue-500' },
  { icon: Database, title: 'Cloud Database', desc: 'Your profile and reports are securely stored in the cloud and accessible anywhere.', color: 'from-indigo-500 to-blue-500' },
  { icon: Cpu, title: 'LLM Powered Intelligence', desc: 'Our recommendation engine uses advanced analysis to match you with careers.', color: 'from-blue-500 to-cyan-500' },
  { icon: LayoutGrid, title: 'Responsive UI', desc: 'Optimized for desktop, tablet, and mobile with a premium commercial design.', color: 'from-cyan-500 to-indigo-500' },
  { icon: Clock, title: 'Real Time Suggestions', desc: 'Get instant feedback as you update your interests and skills.', color: 'from-indigo-500 to-cyan-500' },
  { icon: Globe, title: 'Global Career Paths', desc: '500+ career paths spanning technology, business, medicine, law, arts, and more.', color: 'from-blue-500 to-indigo-500' },
];

const bonus = [
  { icon: FileText, title: 'AI Resume Analyzer' },
  { icon: Award, title: 'AI Resume Builder' },
  { icon: Target, title: 'AI Skill Gap Analyzer' },
  { icon: MessageCircle, title: 'AI Interview Questions' },
  { icon: Users, title: 'AI Mock Interview' },
  { icon: MessageCircle, title: 'AI Career Chatbot' },
  { icon: BookOpen, title: 'AI Course Recommendation' },
  { icon: TrendingUp, title: 'AI Job Trend Analysis' },
  { icon: BarChart3, title: 'AI Weekly Progress Tracker' },
  { icon: Globe, title: 'AI Career Comparison Tool' },
  { icon: FileText, title: 'AI PDF Career Report' },
  { icon: Mic, title: 'AI Voice Assistant' },
  { icon: Languages, title: 'AI Multilingual Support' },
  { icon: Bell, title: 'AI Notifications & Goals' },
];

export default function Features() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="relative grid-bg">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl animate-blob animation-delay-2000" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-blue-600 dark:text-blue-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Features
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Everything CareerAI Offers</h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              A comprehensive suite of AI-powered tools to guide you from confusion to clarity in your career journey.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Bonus AI Features</h2>
            <p className="text-gray-500 dark:text-gray-400">Additional tools coming soon to supercharge your career journey.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {bonus.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.05 }}
                whileHover={{ y: -3 }}
                className="glass-card p-4 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <b.icon className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-xs font-medium">{b.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
