import { useState, useRef, useEffect, type KeyboardEvent } from 'react';
import { Send, Bot, Sparkles, User as UserIcon, MessageCircle, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getChatResponse } from '@/lib/chatEngine';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type Message = { role: 'user' | 'bot'; content: string };

const SUGGESTIONS = [
  'How do I become an AI engineer?',
  'Which career pays the highest salary?',
  'I like design and creativity — what suits me?',
  'How to become a data scientist?',
  'Best careers for remote work?',
  'What skills do I need for cloud computing?',
];

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      content:
        "Hi! I'm your CareerAI assistant. I can answer questions about career paths, required skills, salaries, learning roadmaps, and future job demand. Ask me anything career-related!",
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { role: 'user', content: trimmed }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      const reply = getChatResponse(trimmed);
      setMessages((m) => [...m, { role: 'bot', content: reply }]);
      setTyping(false);
    }, 700);
  };

  const handleKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: 'bot',
        content:
          "Chat cleared! I'm your CareerAI assistant. Ask me anything about careers, skills, salaries, or learning roadmaps.",
      },
    ]);
  };

  const showSuggestions = messages.length <= 1;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#0a0e1a]">
      <Navbar />

      <div className="flex-1 flex flex-col max-w-3xl w-full mx-auto px-4 sm:px-6 py-8 gap-4">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 text-xs font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" /> AI Career Chatbot
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">
            Ask Me Anything About Careers
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Specialized in career guidance — paths, skills, salaries, and roadmaps.
          </p>
        </motion.div>

        {/* Chat window */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex-1 flex flex-col rounded-2xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 shadow-xl overflow-hidden"
          style={{ minHeight: '480px', maxHeight: '60vh' }}
        >
          {/* Chat header bar */}
          <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-600 dark:to-indigo-700">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">CareerAI Assistant</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-xs text-white/80">Online · Career guidance only</p>
                </div>
              </div>
            </div>
            <button
              onClick={clearChat}
              title="Clear chat"
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin bg-gray-50/50 dark:bg-transparent">
            <AnimatePresence initial={false}>
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.role === 'bot' && (
                    <div className="w-8 h-8 rounded-full gradient-btn flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}

                  <div
                    className={`max-w-[78%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      m.role === 'user'
                        ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-br-sm'
                        : 'bg-white dark:bg-white/[0.07] text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-white/10 rounded-bl-sm'
                    }`}
                  >
                    {m.content}
                  </div>

                  {m.role === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <UserIcon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing indicator */}
            {typing && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3 items-end">
                <div className="w-8 h-8 rounded-full gradient-btn flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white dark:bg-white/[0.07] border border-gray-200 dark:border-white/10 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center shadow-sm">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Suggestions */}
        <AnimatePresence>
          {showSuggestions && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="flex flex-wrap gap-2"
            >
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="px-3 py-2 rounded-xl bg-white dark:bg-white/[0.06] border border-gray-200 dark:border-white/10 text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-500/15 hover:text-blue-700 dark:hover:text-blue-300 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all hover:scale-105 shadow-sm"
                >
                  {s}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Input box */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex gap-3 items-end"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            rows={2}
            placeholder="Ask about careers, skills, salaries, or roadmaps… (Enter to send)"
            className="
              flex-1 px-4 py-3 rounded-2xl resize-none
              bg-white dark:bg-white/[0.06]
              border border-gray-300 dark:border-white/15
              text-sm text-gray-900 dark:text-gray-100
              placeholder-gray-400 dark:placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              shadow-sm transition-all
              scrollbar-thin
            "
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => send(input)}
            disabled={!input.trim()}
            className="w-12 h-12 rounded-xl gradient-btn flex items-center justify-center flex-shrink-0 glow shadow-lg disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
            aria-label="Send"
          >
            <Send className="w-5 h-5 text-white" />
          </motion.button>
        </motion.div>

        <p className="text-center text-xs text-gray-400 dark:text-gray-600">
          CareerAI only answers career-related questions.
        </p>
      </div>

      <Footer />
    </div>
  );
}
