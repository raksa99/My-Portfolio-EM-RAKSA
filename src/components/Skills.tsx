import { motion } from 'framer-motion';
import { Code2, Palette, BookOpen } from 'lucide-react';

interface SkillItem {
  name: string;
  level: number; // percentage
}

interface SkillCategory {
  title: string;
  icon: any;
  color: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Development',
    icon: Code2,
    color: 'from-blue-500 to-indigo-600',
    skills: [
      { name: 'HTML, CSS & JavaScript', level: 95 },
      { name: 'React / Next.js', level: 90 },
      { name: 'Dart & Flutter', level: 85 },
      { name: 'Java & C++', level: 80 },
      { name: 'C# & Oracle', level: 78 },
      { name: 'MySQL & MongoDB', level: 82 },
      { name: 'Supabase & Rest API', level: 86 },
      { name: 'Angular Framework', level: 75 },
    ]
  },
  {
    title: 'Design & Visuals',
    icon: Palette,
    color: 'from-purple-500 to-pink-600',
    skills: [
      { name: 'Figma UI/UX Design', level: 92 },
      { name: 'Adobe Photoshop & XD', level: 88 },
      { name: 'Adobe Illustrator', level: 85 },
      { name: 'Premiere & After Effects', level: 82 },
      { name: 'SketchUp 3D Modeling', level: 78 },
      { name: 'Photography & Lighting', level: 90 },
    ]
  },
  {
    title: 'Languages & Tools',
    icon: BookOpen,
    color: 'from-pink-500 to-rose-600',
    skills: [
      { name: 'Chinese Language', level: 85 },
      { name: 'QuickBooks Accounting', level: 80 },
      { name: 'Git & GitHub Versioning', level: 88 },
      { name: 'Workflow & Wireframing', level: 84 },
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as any }
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-500/5 dark:bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary-600 dark:text-primary-400 bg-primary-100/50 dark:bg-primary-950/50 px-3 py-1 rounded-full border border-primary-200/20">
              Expertise
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-slate-900 dark:text-white">
              Skills & Proficiencies
            </h2>
            <div className="h-1 w-12 bg-primary-500 rounded-full mx-auto mt-4" />
          </motion.div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon;
            
            return (
              <motion.div
                key={catIdx}
                variants={cardVariants}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`p-3 rounded-2xl bg-gradient-to-tr ${category.color} text-white shadow-md shadow-slate-200 dark:shadow-none`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Progress Bars */}
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIdx) => (
                      <div key={skillIdx} className="space-y-1.5 text-left">
                        <div className="flex justify-between text-sm font-medium">
                          <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                          <span className="text-slate-500 dark:text-slate-400">{skill.level}%</span>
                        </div>
                        {/* Progress Bar Container */}
                        <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                          {/* Animated progress bar fill */}
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                            className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
