import { motion } from 'framer-motion';
import { BookOpen, User, MapPin, Heart } from 'lucide-react';

const row1Items = [
  'C++', 'C#', 'Java', 'HTML', 'CSS', 'JavaScript', 
  'Angular', 'Dart', 'Flutter', 'Figma', 'Oracle', 'MySQL'
];

const row2Items = [
  'MongoDB', 'Rest API', 'Supabase', 'Photoshop', 'Illustrator', 
  'Adobe XD', 'Adobe Premiere', 'After Effects', 'SketchUp', 'Chinese language', 'QuickBooks'
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut' as any }
    }
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-400/5 dark:bg-purple-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary-600 dark:text-primary-400 bg-primary-100/50 dark:bg-primary-950/50 px-3 py-1 rounded-full border border-primary-200/20">
              Who I Am
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-slate-900 dark:text-white">
              About Me
            </h2>
            <div className="h-1 w-12 bg-primary-500 rounded-full mx-auto mt-4" />
          </motion.div>
        </div>

        {/* Content Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left Column: Visual Profile Card */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm w-full">
              {/* Card backing glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-pink-500 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity blur-xl duration-500" />
              
              {/* Premium card design representing the multi-role identity */}
              <div className="relative glass-card rounded-2xl p-8 border border-slate-200/50 dark:border-slate-800/50 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary-500/10 to-pink-500/10 rounded-full -mr-8 -mt-8" />
                
                {/* Profile Photo */}
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-primary-500 to-pink-500 p-[3px] mb-6 shadow-lg shadow-primary-500/20">
                  <img 
                    src="/images/profile.jpg" 
                    alt="Em Raksa" 
                    className="w-full h-full rounded-[13px] object-cover object-top"
                  />
                </div>
                
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  Em Raksa
                </h3>
                <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
                  Developer • Photographer • Designer
                </p>
                
                <div className="space-y-3.5 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4.5 w-4.5 text-primary-500 flex-shrink-0" />
                    <span>Khan Sen Sok, Phnom Penh</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-4.5 w-4.5 text-primary-500 flex-shrink-0" />
                    <span>Setec Institute student</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="h-4.5 w-4.5 text-primary-500 flex-shrink-0" />
                    <span>Visual arts & clean code</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Education details */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                My Story & Ambition
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                I am a passionate technologist and creative based in Phnom Penh, Cambodia. Currently studying at **Setec Institute**, I spend my days bridging the gap between rigorous technical engineering and immersive visual design.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                As a **Developer**, I build high-performance web applications with modular code structures. As a **Photographer**, I capture fleeting moments, light play, and architectural spaces. As a **Designer**, I structure clean layouts and smooth user experiences. 
              </p>
            </div>

            {/* Education Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-5 border-l-4 border-l-primary-500">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-primary-500/10 text-primary-600 dark:text-primary-400 mt-1">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-primary-600 dark:text-primary-400 font-semibold uppercase tracking-wider">
                      Education
                    </span>
                    <h4 className="font-bold text-slate-900 dark:text-white mt-0.5">
                      Setec Institute
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                      Information Technology
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                      Ongoing Academic Studies
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-5 border-l-4 border-l-pink-500">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-pink-500/10 text-pink-600 dark:text-pink-400 mt-1">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-pink-600 dark:text-pink-400 font-semibold uppercase tracking-wider">
                      Core Values
                    </span>
                    <h4 className="font-bold text-slate-900 dark:text-white mt-0.5">
                      Continuous Growth
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                      Active Skill Acquisition
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                      Building projects & visual assets
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Infinite Scrolling Marquee */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 relative w-full overflow-hidden marquee-container py-4"
        >
          <h4 className="text-center font-display text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-6">
            Languages & Technologies
          </h4>

          {/* Row 1: Left to Right Scrolling */}
          <div className="flex overflow-hidden select-none space-x-6 py-2">
            <div className="flex space-x-6 animate-marquee-left whitespace-nowrap min-w-max">
              {row1Items.concat(row1Items).map((tech, idx) => (
                <span 
                  key={`r1-${idx}`} 
                  className="px-5 py-2.5 rounded-2xl glass-card text-sm font-semibold border border-slate-200/50 dark:border-slate-800/50 shadow-sm text-slate-700 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Row 2: Right to Left Scrolling */}
          <div className="flex overflow-hidden select-none space-x-6 py-2 mt-2">
            <div className="flex space-x-6 animate-marquee-right whitespace-nowrap min-w-max">
              {row2Items.concat(row2Items).map((tech, idx) => (
                <span 
                  key={`r2-${idx}`} 
                  className="px-5 py-2.5 rounded-2xl glass-card text-sm font-semibold border border-slate-200/50 dark:border-slate-800/50 shadow-sm text-slate-700 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
