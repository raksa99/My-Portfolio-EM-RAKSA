import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import ThreeHero from './ThreeHero';

const roles = ['Developer', 'Photographer', 'Designer'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (id: string) => {
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
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/30 dark:from-slate-950 dark:via-slate-900/40 dark:to-slate-950/20">
      {/* Background radial accent */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-400/15 dark:bg-pink-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-10">
          
          {/* Hero Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <span className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-primary-700 bg-primary-100/60 dark:text-primary-300 dark:bg-primary-950/60 border border-primary-200/30 dark:border-primary-800/40 w-fit mb-6 shadow-sm">
              ✨ Welcome to my creative space
            </span>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none mb-4 text-slate-900 dark:text-white">
              Hi, I'm <span className="gradient-text">Em Raksa</span>
            </h1>

            {/* Rotating Typewriter Roles */}
            <div className="h-[48px] sm:h-[56px] flex items-center mb-6">
              <span className="text-xl sm:text-2xl font-medium text-slate-500 dark:text-slate-400 mr-2.5 sm:mr-3 select-none">
                I am a
              </span>
              <div className="relative h-full flex items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -25, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-600 dark:text-primary-400 font-display"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mb-8 leading-relaxed">
              Studying at <span className="font-semibold text-slate-800 dark:text-slate-200">Setec Institute</span>. 
              I design robust software systems, capture immersive photographic perspectives, and construct visually arresting user interfaces.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleScrollTo('portfolio')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-800 shadow-lg shadow-primary-500/25 dark:shadow-none hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 group"
              >
                <span>View My Work</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-semibold text-slate-700 hover:text-slate-900 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                <span>Contact Me</span>
              </button>
            </div>
          </motion.div>

          {/* Hero Right 3D Visualizer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-5 h-[350px] sm:h-[450px] lg:h-[500px] flex items-center justify-center pointer-events-auto"
          >
            <ThreeHero />
          </motion.div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block">
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          onClick={() => handleScrollTo('about')}
          className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center p-1.5 cursor-pointer hover:border-primary-500 transition-colors"
        >
          <div className="w-1 h-2 bg-slate-400 dark:bg-slate-600 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
