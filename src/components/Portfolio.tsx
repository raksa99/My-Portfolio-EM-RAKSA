import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ZoomIn, X } from 'lucide-react';

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
    id: 2,
    title: 'Visual Storytelling: PP Streets',
    category: 'Photo',
    description: 'A deep photographic dive into the street light dynamics and urban composition of Phnom Penh at night.',
    image: '/images/phnom_penh_night.jpg',
    tags: ['Photography', 'Lightroom', 'Long Exposure'],
    link: '#'
  },
  {
    id: 3,
    title: 'Raksa Coffee POS System',
    category: 'Dev',
    description: 'A fully functional Flutter POS web application and design system for a coffee shop, built with Bloc, Hive, and Supabase.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    tags: ['Flutter', 'Dart', 'Bloc', 'Supabase', 'Hive', 'UI/UX'],
    link: 'https://raksa-coffee.vercel.app'
  },
  {
    id: 4,
    title: 'Skin Care E-Commerce Store',
    category: 'Dev',
    description: 'A premium, responsive skin care storefront and e-commerce catalog featuring dynamic product filtering, intuitive category navigation, and modern layouts.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    tags: ['Angular', 'TypeScript', 'CSS', 'Vercel'],
    link: 'https://skin-care-e-commerce.vercel.app'
  },
  {
    id: 7,
    title: 'Voleak Express: Truck Shipping System',
    category: 'Dev',
    description: 'A comprehensive cargo logistics and truck shipping system built with Flutter and Supabase, supporting shipment tracking, driver dispatching, route optimization, and admin analytics dashboards.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
    tags: ['Flutter', 'Dart', 'Supabase', 'Realtime', 'Logistics'],
    link: 'https://voleak-express.vercel.app'
  },
  {
    id: 8,
    title: 'Room Rental & Booking System',
    category: 'Dev',
    description: 'A full-stack rental platform built with Angular and Express, featuring room listings, interactive availability check, booking management, and MongoDB integration.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    tags: ['Angular', 'Express', 'Node.js', 'MongoDB', 'Tailwind'],
    link: 'https://room-rent-teal.vercel.app'
  },
  {
    id: 9,
    title: 'Neon Jump: 2D Platformer Game',
    category: 'Dev',
    description: 'A dynamic 2D neon-themed action platformer game built with Python and Pygame, featuring physics-based movements, custom collision mechanics, levels, and zombie enemy waves.',
    image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Pygame', 'OOP', 'Game Physics'],
    link: 'https://github.com/raksa99/Python_game.git'
  },
  {
    id: 10,
    title: 'Interactive Birthday Celebration Web',
    category: 'Dev',
    description: 'A creative, interactive web application built with Angular to celebrate birthdays, featuring custom particle effects, canvas confetti animations, and responsive layouts.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    tags: ['Angular', 'TypeScript', 'Tailwind', 'Vercel'],
    link: 'https://my-birthday-em-raksa.vercel.app'
  },
  {
    id: 5,
    title: 'Misty Landscapes: Angkor Glow',
    category: 'Photo',
    description: 'Capturing the golden sunrise reflecting in the historic lotus ponds of Angkor Wat under light mist.',
    image: '/images/angkor_wat_sunrise.jpg',
    tags: ['Landscape', 'Angkor Wat', 'Morning Light'],
    link: '#'
  },
  {
    id: 6,
    title: 'Apsara Coffee Advertisement',
    category: 'Design',
    description: 'A premium product advertisement poster designed using Adobe Photoshop and Illustrator, emphasizing lighting, depth, and traditional Khmer details.',
    image: '/images/design-coffee-adv.jpg',
    tags: ['Photoshop', 'Illustrator', 'Advertising', 'Graphic Design'],
    link: '#'
  },
  {
    id: 11,
    title: 'Delicious Food Menu Board',
    category: 'Design',
    description: 'A clean, modern cafe menu board design utilizing vector layouts, structured pricing grids, and custom illustrations.',
    image: '/images/design-food-menu.jpg',
    tags: ['Illustrator', 'Photoshop', 'Typography', 'Menu Design'],
    link: '#'
  },
  {
    id: 12,
    title: 'Khmer New Year Blessing Poster',
    category: 'Design',
    description: 'An elegant, high-fidelity formal greeting and blessing poster featuring intricate traditional Khmer borders, gold foil textures, and custom typography.',
    image: '/images/design-khmer-greeting.jpg',
    tags: ['Photoshop', 'Illustrator', 'Khmer Art', 'Print Design'],
    link: '#'
  },
  {
    id: 13,
    title: 'Special Discount Food Poster',
    category: 'Design',
    description: 'A vibrant marketing poster created for food promotion campaigns, using bright sunburst backgrounds and dynamic discount tags to catch attention.',
    image: '/images/design-food-discount.jpg',
    tags: ['Photoshop', 'Marketing Design', 'Poster Design'],
    link: '#'
  },
  {
    id: 14,
    title: '3D Residential House Model',
    category: 'Design',
    description: 'A detailed 3D architectural house model designed using Trimble SketchUp, showcasing interior spatial layout, exterior siding, gating, and landscaping.',
    image: '/images/design-sketchup-house.png',
    tags: ['SketchUp', '3D Modeling', 'Architecture', 'Design'],
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
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.category === filter
  );

  return (
    <>
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
                          <button
                            onClick={() => setActiveProject(project)}
                            className="p-3 rounded-full bg-white text-slate-900 hover:bg-primary-500 hover:text-white transition-colors shadow-md focus:outline-none"
                            aria-label="Zoom Photo"
                          >
                            <ZoomIn className="h-5 w-5" />
                          </button>
                          {project.link && project.link !== '#' && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 rounded-full bg-white text-slate-900 hover:bg-primary-500 hover:text-white transition-colors shadow-md"
                              aria-label="View Project"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          )}
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

    {/* Full Screen Image Preview Modal */}
    <AnimatePresence>
      {activeProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={() => setActiveProject(null)}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute -top-3 -right-3 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-md border border-white/10"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Label / Title overlay */}
            <div className="mb-4 text-center px-6 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 max-w-[90%]">
              <h4 className="text-base font-bold text-white leading-tight">
                {activeProject.title}
              </h4>
              <p className="text-xs text-white/70 mt-1">
                Category: {activeProject.category} • {activeProject.tags.join(', ')}
              </p>
            </div>

            {/* Full Image */}
            <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-slate-900/40 border border-white/10 flex items-center justify-center">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-2xl"
              />
            </div>

            {/* Action buttons in modal */}
            {activeProject.link && activeProject.link !== '#' && (
              <a
                href={activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold shadow-lg shadow-primary-500/25 transition-all duration-300"
              >
                <span>Visit Live Project</span>
                <ExternalLink className="h-4.5 w-4.5" />
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
