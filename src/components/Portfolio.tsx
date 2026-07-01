import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: 'Dev' | 'Photo' | 'Design';
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Setec Management System',
    category: 'Dev',
    description: 'An interactive student & class coordination dashboard with schedule tracking, customized for Setec Institute.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
    link: '#'
  },
  {
    id: 2,
    title: 'Visual Storytelling: PP Streets',
    category: 'Photo',
    description: 'A deep photographic dive into the street light dynamics and urban composition of Phnom Penh at night.',
    image: '/images/phnom_penh_night.png',
    tags: ['Photography', 'Lightroom', 'Long Exposure'],
    link: '#'
  },
  {
    id: 3,
    title: 'Raksa Coffee POS Design',
    category: 'Design',
    description: 'A high-fidelity Figma prototype and comprehensive design system for a coffee shop POS terminal.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    tags: ['UI/UX', 'Figma', 'Prototyping', 'Design System'],
    link: '#'
  },
  {
    id: 4,
    title: 'Custom E-Commerce Platform',
    category: 'Dev',
    description: 'A lightning-fast frontend storefront displaying items in glassmorphic cards with complex cart management.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['Vite', 'React', 'Context API', 'Tailwind'],
    link: '#'
  },
  {
    id: 5,
    title: 'Misty Landscapes: Angkor Glow',
    category: 'Photo',
    description: 'Capturing the golden sunrise reflecting in the historic lotus ponds of Angkor Wat under light mist.',
    image: '/images/angkor_wat_sunrise.png',
    tags: ['Landscape', 'Angkor Wat', 'Morning Light'],
    link: '#'
  },
  {
    id: 6,
    title: 'Minimal Portfolio Brand System',
    category: 'Design',
    description: 'Personal branding styling sheets, customized typography scale, and dark mode interface guidelines.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
    tags: ['Branding', 'Typography', 'Visual Identity'],
    link: '#'
  }
];

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Limits rotation to +/- 12 degrees for an elegant subtle effect
    const rX = -(mouseY / height) * 12;
    const rY = (mouseX / width) * 12;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`preserve-3d transition-transform duration-200 ease-out cursor-pointer ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
    >
      <div className="h-full preserve-3d" style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState<'All' | 'Dev' | 'Photo' | 'Design'>('All');

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.category === filter
  );

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-primary-500/5 dark:bg-primary-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary-600 dark:text-primary-400 bg-primary-100/50 dark:bg-primary-950/50 px-3 py-1 rounded-full border border-primary-200/20">
              Work Gallery
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-slate-900 dark:text-white">
              Featured Projects
            </h2>
            <div className="h-1 w-12 bg-primary-500 rounded-full mx-auto mt-4" />
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-2.5 sm:space-x-4 mb-16">
          {(['All', 'Dev', 'Photo', 'Design'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border focus:outline-none ${
                filter === cat
                  ? 'bg-primary-600 border-primary-600 text-white shadow-md shadow-primary-500/20'
                  : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-primary-400/50 dark:hover:border-primary-500/50'
              }`}
            >
              {cat === 'All' ? 'All Work' : cat === 'Dev' ? 'Development' : cat === 'Photo' ? 'Photography' : 'Design'}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <TiltCard className="h-full">
                  <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col justify-between border border-slate-200/50 dark:border-slate-800/50 hover:shadow-lg dark:hover:shadow-none transition-shadow group">
                    <div>
                      {/* Project Image Container */}
                      <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Overlay link icon */}
                        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                          <a
                            href={project.link}
                            className="p-3 rounded-full bg-white text-slate-900 hover:bg-primary-500 hover:text-white transition-colors shadow-md"
                            aria-label="View Project"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6 text-left">
                        <span className="text-xs font-semibold tracking-wider text-primary-600 dark:text-primary-400 uppercase">
                          {project.category}
                        </span>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1.5 mb-2.5">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Tags Footer */}
                    <div className="px-6 pb-6 pt-2 text-left flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
