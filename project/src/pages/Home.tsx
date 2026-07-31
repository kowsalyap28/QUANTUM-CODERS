import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles, Brain, TrendingUp, Target, Rocket, BookOpen, Award, Users, Zap, Shield, Moon, BarChart3, Globe, Clock, Database, Cpu, LayoutGrid, ArrowRight, Quote,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const stats = [
  { value: '10,000+', label: 'Students Guided' },
  { value: '500+', label: 'Career Paths' },
  { value: '95%', label: 'Recommendation Accuracy' },
];

const benefits = [
  { icon: Brain, title: 'AI-Powered Recommendations', desc: 'Our engine analyzes 30+ interests and 24+ skills to find your best career matches.' },
  { icon: Target, title: 'Skill Gap Analysis', desc: 'See exactly which skills you have and which you need to acquire for each career.' },
  { icon: TrendingUp, title: 'Future Scope Prediction', desc: 'Get insights on job demand, growth rates, and salary outlook for each path.' },
  { icon: BookOpen, title: 'Personalized Roadmaps', desc: 'Step-by-step learning timelines from foundational skills to placement.' },
];

const howItWorks = [
  { num: '01', title: 'Create Your Profile', desc: 'Sign up and tell us about your education, interests, and skills.' },
  { num: '02', title: 'Generate Recommendations', desc: 'Our AI engine analyzes your profile and matches you with top careers.' },
  { num: '03', title: 'Get Your Roadmap', desc: 'Receive a personalized learning path with courses, books, and resources.' },
];

const testimonials = [
  { name: 'Aarav Sharma', role: 'CS Student', text: 'CareerAI helped me realize data science was my perfect fit. The roadmap was spot on — I landed an internship in 4 months!' },
  { name: 'Priya Patel', role: 'Higher Secondary', text: 'I was completely confused about my career. CareerAI gave me clarity and a clear path forward. The skill gap analysis was eye-opening.' },
  { name: 'Rohan Mehta', role: 'Working Professional', text: 'The AI recommendations matched my interests perfectly. The salary insights and future demand data helped me switch careers confidently.' },
];

const features = [
  { icon: Sparkles, title: 'AI Career Recommendation' },
  { icon: BookOpen, title: 'Personalized Learning Roadmap' },
  { icon: Target, title: 'Skill Gap Analysis' },
  { icon: BarChart3, title: 'Career Match Percentage' },
  { icon: TrendingUp, title: 'Future Scope Prediction' },
  { icon: Award, title: 'Resume Suggestions' },
  { icon: BookOpen, title: 'Learning Resources' },
  { icon: Users, title: 'Profile Management' },
  { icon: Shield, title: 'Secure Authentication' },
  { icon: Moon, title: 'Dark Mode' },
  { icon: Zap, title: 'Fast Recommendations' },
  { icon: Database, title: 'Cloud Database' },
  { icon: Cpu, title: 'LLM Powered Intelligence' },
  { icon: LayoutGrid, title: 'Responsive UI' },
  { icon: Clock, title: 'Real Time Suggestions' },
  { icon: Globe, title: 'Global Career Paths' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden grid-bg">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-blue-600 dark:text-blue-400 mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                AI-Powered Career Guidance
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Find Your Perfect{' '}
                <span className="gradient-text-dark dark:gradient-text-dark">Career Path</span> with AI
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
                CareerAI analyzes your interests, skills, and academic profile to generate personalized career recommendations and learning roadmaps.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/generator">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 rounded-xl gradient-btn font-semibold shadow-lg glow flex items-center gap-2">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
                <Link to="/features">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 rounded-xl glass font-semibold flex items-center gap-2">
                    <LayoutGrid className="w-4 h-4" /> Explore Features
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card p-8 shadow-2xl animate-float">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-btn flex items-center justify-center glow">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">AI Career Report</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Personalized for you</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { career: 'AI Engineer', match: 94, color: 'from-blue-500 to-indigo-500' },
                    { career: 'Data Scientist', match: 88, color: 'from-cyan-500 to-blue-500' },
                    { career: 'Software Engineer', match: 82, color: 'from-indigo-500 to-purple-500' },
                  ].map((c, i) => (
                    <motion.div
                      key={c.career}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.15 }}
                      className="glass p-4 rounded-xl"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm">{c.career}</span>
                        <span className="text-xs font-bold gradient-text-dark dark:gradient-text-dark">{c.match}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${c.match}%` }}
                          transition={{ delay: 0.6 + i * 0.15, duration: 0.8 }}
                          className={`h-full rounded-full bg-gradient-to-r ${c.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 glass-card p-3 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-blue-500" />
                  <span className="text-xs font-medium">95% Accuracy</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-3 gap-4 sm:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold gradient-text-dark dark:gradient-text-dark">{s.value}</p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why CareerAI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Why CareerAI?</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            We combine AI intelligence with deep career knowledge to guide you toward your ideal future.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 group"
            >
              <div className="w-12 h-12 rounded-xl gradient-btn flex items-center justify-center mb-4 group-hover:scale-110 transition-transform glow">
                <b.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-2">{b.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">How It Works</h2>
          <p className="text-gray-500 dark:text-gray-400">Three simple steps to your dream career.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {howItWorks.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-8 relative overflow-hidden"
            >
              <span className="absolute -top-4 -right-4 text-8xl font-bold text-gray-100 dark:text-white/5 select-none">{s.num}</span>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl gradient-btn flex items-center justify-center mb-4 glow">
                  <span className="text-white font-bold">{s.num}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">What Students Say</h2>
          <p className="text-gray-500 dark:text-gray-400">Real stories from students who found their path.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <Quote className="w-8 h-8 text-blue-500/30 mb-4" />
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-btn flex items-center justify-center font-bold text-white text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature grid preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Powerful Features</h2>
          <p className="text-gray-500 dark:text-gray-400">Everything you need to make informed career decisions.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.05 }}
              whileHover={{ y: -3 }}
              className="glass-card p-5 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <f.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-sm font-medium">{f.title}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Discover Your Future?</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
              Join thousands of students who found their perfect career path with CareerAI.
            </p>
            <Link to="/generator">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 rounded-xl gradient-btn font-semibold shadow-lg glow inline-flex items-center gap-2">
                Generate My Career Report <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
