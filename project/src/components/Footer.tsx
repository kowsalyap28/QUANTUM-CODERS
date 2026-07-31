import { Link } from 'react-router-dom';
import { Brain, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/home" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-btn flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold gradient-text-dark dark:gradient-text-dark">CareerAI</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Discover Your Future with Artificial Intelligence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-gray-900 dark:text-gray-100">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link to="/home" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
              <li><Link to="/generator" className="hover:text-blue-600 dark:hover:text-blue-400">AI Career Generator</Link></li>
              <li><Link to="/features" className="hover:text-blue-600 dark:hover:text-blue-400">Features</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-gray-900 dark:text-gray-100">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@careerai.com</li>
              <li>Support: support@careerai.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-gray-900 dark:text-gray-100">Follow Us</h4>
            <div className="flex gap-3">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400 transition-transform"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-white/5 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} CareerAI. All rights reserved. Built for the future of career guidance.
        </div>
      </div>
    </footer>
  );
}
