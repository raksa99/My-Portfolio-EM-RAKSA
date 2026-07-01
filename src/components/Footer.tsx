import { Sparkles } from 'lucide-react';

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Photography', id: 'photography' },
  { label: 'Contact', id: 'contact' },
];

export default function Footer() {
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-800/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Logo & Name */}
          <div className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-primary-500" />
            <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
              Raksa<span className="text-primary-500">.</span>
            </span>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2.5">
            {quickLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors focus:outline-none"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/raksa99"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-200/40 dark:bg-slate-900 hover:bg-primary-500/10 hover:text-primary-600 dark:hover:text-primary-400 text-slate-600 dark:text-slate-400 transition-colors"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/em-raksa-17016741b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-200/40 dark:bg-slate-900 hover:bg-primary-500/10 hover:text-primary-600 dark:hover:text-primary-400 text-slate-600 dark:text-slate-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" rx="1" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://instagram.com/e.raksa77"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-200/40 dark:bg-slate-900 hover:bg-primary-500/10 hover:text-primary-600 dark:hover:text-primary-400 text-slate-600 dark:text-slate-400 transition-colors"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://facebook.com/raksa77"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-200/40 dark:bg-slate-900 hover:bg-primary-500/10 hover:text-primary-600 dark:hover:text-primary-400 text-slate-600 dark:text-slate-400 transition-colors"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@e.raksa77"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-200/40 dark:bg-slate-900 hover:bg-primary-500/10 hover:text-primary-600 dark:hover:text-primary-400 text-slate-600 dark:text-slate-400 transition-colors"
              aria-label="TikTok"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
            <a
              href="https://t.me/emraksa77"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-200/40 dark:bg-slate-900 hover:bg-primary-500/10 hover:text-primary-600 dark:hover:text-primary-400 text-slate-600 dark:text-slate-400 transition-colors"
              aria-label="Telegram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-slate-200/50 dark:bg-slate-800/50 w-full my-8" />

        {/* Copyright */}
        <div className="text-center text-xs text-slate-400 dark:text-slate-500 font-medium">
          © {new Date().getFullYear()} Em Raksa. All rights reserved. Studying at Setec Institute.
        </div>
      </div>
    </footer>
  );
}
