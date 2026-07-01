import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Auto close success message
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[350px] h-[350px] bg-pink-500/5 dark:bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />

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
              Get In Touch
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-slate-900 dark:text-white">
              Contact Me
            </h2>
            <div className="h-1 w-12 bg-primary-500 rounded-full mx-auto mt-4" />
          </motion.div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact Cards + Locator */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Info Cards */}
            <div className="space-y-4">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 text-left">
                Contact Information
              </h3>

              {/* Email */}
              <div className="glass-card rounded-xl p-5 border border-slate-200/40 dark:border-slate-800/40 flex items-center space-x-4 text-left">
                <div className="p-3.5 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Email
                  </h4>
                  <a
                    href="mailto:emraksa096@gmail.com"
                    className="text-slate-700 dark:text-slate-300 font-medium hover:text-primary-500 dark:hover:text-primary-400 transition-colors break-all"
                  >
                    emraksa096@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="glass-card rounded-xl p-5 border border-slate-200/40 dark:border-slate-800/40 flex items-center space-x-4 text-left">
                <div className="p-3.5 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Phone
                  </h4>
                  <a
                    href="tel:+855967982573"
                    className="text-slate-700 dark:text-slate-300 font-medium hover:text-pink-500 transition-colors"
                  >
                    096 798 2573
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="glass-card rounded-xl p-5 border border-slate-200/40 dark:border-slate-800/40 flex items-start space-x-4 text-left">
                <div className="p-3.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 mt-0.5">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Address
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 font-medium text-sm leading-relaxed">
                    Sangkat Phnom Penh Thmey, Khan Sen Sok, Phnom Penh, Cambodia
                  </p>
                </div>
              </div>
            </div>

            {/* Micro Map Locator */}
            <div className="glass-card rounded-2xl p-6 border border-slate-200/40 dark:border-slate-800/40 flex flex-col justify-center h-48 relative overflow-hidden bg-slate-900/5 dark:bg-slate-900/50">
              {/* Graphic map grid representing Khan Sen Sok */}
              <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-20 stroke-slate-500" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 0,20 Q 40,25 60,10 T 100,5" strokeWidth="0.8" />
                <path d="M 0,45 Q 30,50 50,35 T 100,40" strokeWidth="0.8" />
                <path d="M 0,80 Q 20,70 60,75 T 100,70" strokeWidth="0.8" />
                <path d="M 30,0 Q 45,40 25,60 T 40,100" strokeWidth="0.8" />
                <path d="M 70,0 Q 60,30 80,70 T 70,100" strokeWidth="0.8" />
              </svg>
              
              {/* Ping Animation Indicator */}
              <div className="relative flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-primary-400 opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-primary-600"></span>
                </div>
                <h4 className="font-display font-bold text-slate-800 dark:text-white mt-3 text-sm">
                  Sangkat Phnom Penh Thmey
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Khan Sen Sok, Phnom Penh
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 h-full border border-slate-200/40 dark:border-slate-800/40 text-left relative">
              
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Send A Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-sm"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="name@example.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-sm"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-800 shadow-md shadow-primary-500/20 hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 disabled:opacity-75 focus:outline-none"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="ml-2.5 h-4.5 w-4.5" />
                    </>
                  )}
                </button>
              </form>

              {/* Success Notification */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-0 bg-white dark:bg-slate-900 rounded-2xl flex flex-col items-center justify-center p-6 text-center z-10"
                  >
                    <CheckCircle2 className="h-14 w-14 text-emerald-500 mb-4 animate-bounce-slow" />
                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mb-4 leading-relaxed">
                      Thank you for reaching out, Em Raksa. Your message has been sent successfully. I will get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2 text-xs font-semibold text-primary-600 dark:text-primary-400 border border-primary-500/20 dark:border-primary-500/30 rounded-lg hover:bg-primary-500/5 transition-colors focus:outline-none"
                    >
                      Dismiss
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
