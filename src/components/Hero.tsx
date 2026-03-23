import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 overflow-hidden">
      {/* Side Rails - Only visible on desktop */}
      <div className="hidden xl:flex fixed left-12 top-1/2 -translate-y-1/2 flex-col items-center gap-8 z-40">
        <div className="w-px h-32 bg-gradient-to-b from-transparent to-white/20" />
        <span className="writing-vertical-rl rotate-180 text-[10px] font-mono uppercase tracking-[0.5em] text-white/20">
          AI & Data Science Student
        </span>
        <div className="w-px h-32 bg-gradient-to-t from-transparent to-white/20" />
      </div>

      <div className="hidden xl:flex fixed right-12 top-1/2 -translate-y-1/2 flex-col items-center gap-8 z-40">
        <div className="w-px h-32 bg-gradient-to-b from-transparent to-white/20" />
        <div className="flex flex-col gap-6">
          {resumeData.basics.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          ))}
        </div>
        <div className="w-px h-32 bg-gradient-to-t from-transparent to-white/20" />
      </div>

      {/* Large Background Display Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none -z-10 opacity-[0.02]">
        <h2 className="text-[20vw] font-black whitespace-nowrap leading-none tracking-tighter uppercase">
          Deepanshi
        </h2>
      </div>

      {/* Geometric Accents */}
      <div className="absolute top-24 left-24 w-12 h-12 border-t border-l border-white/10 -z-10" />
      <div className="absolute top-24 right-24 w-12 h-12 border-t border-r border-white/10 -z-10" />
      <div className="absolute bottom-24 left-24 w-12 h-12 border-b border-l border-white/10 -z-10" />
      <div className="absolute bottom-24 right-24 w-12 h-12 border-b border-r border-white/10 -z-10" />

      <motion.div
        className="z-10 text-center max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="mb-4 inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="text-xs font-mono text-white/60 uppercase tracking-widest">
            {resumeData.basics.title}
          </span>
        </motion.div>

        <motion.h1
          className="mb-6 text-6xl md:text-8xl font-bold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {resumeData.basics.name}
        </motion.h1>

        <motion.p
          className="mb-10 text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {resumeData.basics.summary}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <button
            onClick={scrollToExperience}
            className="group relative flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold transition-all hover:scale-105 active:scale-95"
          >
            View Experience
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </button>
          
          <a
            href="#"
            className="flex items-center gap-2 px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md text-white rounded-full font-semibold transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
          >
            Download Resume
            <Download className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          className="mt-12 flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          {resumeData.basics.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-white/40 hover:text-white transition-colors"
            >
              {link.label}
              <ExternalLink className="w-3 h-3" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] -z-10" />
    </section>
  );
};
