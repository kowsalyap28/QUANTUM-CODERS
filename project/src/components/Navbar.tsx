import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Brain, Home, Sparkles, LayoutGrid, Info, Moon, Sun, Bell, LogOut, User as UserIcon, MessageCircle } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const links = [
    { to: '/home',      label: 'Home',               icon: Home },
    { to: '/generator', label: 'AI Career Generator', icon: Sparkles },
    { to: '/features',  label: 'Features',            icon: LayoutGrid },
    { to: '/about',     label: 'About',               icon: Info },
    { to: '/chatbot',   label: 'AI Chatbot',          icon: MessageCircle },
  ];

  const isActive = (to: string) => location.pathname === to;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-[#0a0e1a]/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-9 h-9 rounded-xl gradient-btn flex items-center justify-center glow group-hover:scale-105 transition-transform">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              CareerAI
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`
                  px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-all
                  ${isActive(l.to)
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50 dark:hover:bg-white/10'
                  }
                `}
              >
                <l.icon className="w-4 h-4 flex-shrink-0" />
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark'
                ? <Sun className="w-5 h-5 text-amber-400" />
                : <Moon className="w-5 h-5 text-gray-600" />}
            </button>

            <button
              className="p-2 rounded-lg text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors relative"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full" />
            </button>

            <Link
              to="/profile"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Profile"
            >
              <UserIcon className="w-5 h-5" />
            </Link>

            {user && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleSignOut}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-200 hover:bg-red-50 dark:hover:bg-red-500/15 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                aria-label="Logout"
              >
                <LogOut className="w-5 h-5" />
              </motion.button>
            )}
          </div>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden flex items-center gap-1 overflow-x-auto pb-2 scrollbar-thin">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`
                px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 whitespace-nowrap transition-all
                ${isActive(l.to)
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50 dark:hover:bg-white/10'
                }
              `}
            >
              <l.icon className="w-3.5 h-3.5 flex-shrink-0" />
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
