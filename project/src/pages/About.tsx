import { motion } from 'framer-motion';
import { Brain, Target, Eye, Mail, Github, Linkedin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0e1a]">
      <Navbar />

      <div className="relative grid-bg">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl animate-blob animation-delay-2000" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Page heading */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 text-xs font-medium mb-4">
              <Brain className="w-3.5 h-3.5" /> About CareerAI
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Guiding Students with AI
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-lg">
              CareerAI is an intelligent career guidance platform that helps students discover their ideal career path using artificial intelligence.
            </p>
          </motion.div>

          {/* Mission + Vision */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white dark:bg-white/[0.05] border border-gray-200 dark:border-white/10 p-8 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl gradient-btn flex items-center justify-center mb-5 glow">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To empower every student with personalized, data-driven career guidance — removing the guesswork from one of life's most important decisions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white dark:bg-white/[0.05] border border-gray-200 dark:border-white/10 p-8 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl gradient-btn flex items-center justify-center mb-5 glow">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                A world where no student chooses a career blindly — where AI helps everyone find a path that matches their interests, skills, and aspirations.
              </p>
            </motion.div>
          </div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white dark:bg-white/[0.05] border border-gray-200 dark:border-white/10 p-8 text-center shadow-sm"
          >
            <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Get in Touch</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Have questions? We'd love to hear from you.</p>
            <div className="flex justify-center gap-3 mb-6">
              {[Mail, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              hello@careerai.com &nbsp;·&nbsp; support@careerai.com
            </p>
          </motion.div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
