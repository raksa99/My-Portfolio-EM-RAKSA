import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, MapPin } from 'lucide-react';

interface PhotoItem {
  id: number;
  title: string;
  location: string;
  image: string;
}

const photos: PhotoItem[] = [
  {
    id: 1,
    title: 'Golden Hour Reflection',
    location: 'Angkor Wat, Siem Reap',
    image: '/images/angkor_wat_sunrise.png',
  },
  {
    id: 2,
    title: 'Metropolis Light Trails',
    location: 'Sothearos Blvd, Phnom Penh',
    image: '/images/phnom_penh_night.png',
  },
  {
    id: 3,
    title: 'Rainforest Dew',
    location: 'Cardamom Mountains',
    image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Architectural Shadows',
    location: 'Vance Residence',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Urban Commute',
    location: 'Phnom Penh Center',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Quiet Workspace Lights',
    location: 'Studio Loft',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
  }
];

export default function Photography() {
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  return (
    <section id="photography" className="py-24 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">
      <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary-600 dark:text-primary-400 bg-primary-100/50 dark:bg-primary-950/50 px-3 py-1 rounded-full border border-primary-200/20">
              Captured Moments
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-slate-900 dark:text-white">
              Photography Gallery
            </h2>
            <div className="h-1 w-12 bg-primary-500 rounded-full mx-auto mt-4" />
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="masonry-item relative group overflow-hidden rounded-2xl glass-card cursor-zoom-in border border-slate-200/40 dark:border-slate-800/40"
              onClick={() => setActivePhoto(photo)}
            >
              {/* Photo Image */}
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-103"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                <div className="flex items-center space-x-2 text-white/70 text-xs mb-1.5 font-medium">
                  <MapPin className="h-3.5 w-3.5 text-primary-400" />
                  <span>{photo.location}</span>
                </div>
                <h3 className="font-display text-white text-base sm:text-lg font-bold">
                  {photo.title}
                </h3>
                
                {/* Floating zoom-in indicator */}
                <div className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                  <ZoomIn className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activePhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 sm:p-8 backdrop-blur-sm"
              onClick={() => setActivePhoto(null)}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors focus:outline-none"
                onClick={() => setActivePhoto(null)}
                aria-label="Close Lightbox"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Modal Container */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative max-w-5xl max-h-[85vh] overflow-hidden flex flex-col items-center"
                onClick={(e) => e.stopPropagation()} // stop close on image click
              >
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
                />
                
                {/* Captions */}
                <div className="mt-4 text-center text-white">
                  <h3 className="font-display text-lg sm:text-xl font-bold">
                    {activePhoto.title}
                  </h3>
                  <div className="flex items-center justify-center space-x-1.5 text-white/60 text-xs sm:text-sm mt-1 font-medium">
                    <MapPin className="h-4 w-4 text-primary-400" />
                    <span>{activePhoto.location}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
