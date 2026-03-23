import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { resumeData } from '../data/resume';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Zap } from 'lucide-react';

export const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="relative px-6 py-32 max-w-7xl mx-auto overflow-hidden">
      {/* Background Display Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none -z-10 opacity-[0.015]">
        <h2 className="text-[15vw] font-black whitespace-nowrap leading-none tracking-tighter uppercase vertical-text rotate-180">
          EXPERIENCE
        </h2>
      </div>

      {/* Geometric Accents */}
      <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-white/5 -z-10" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-white/5 -z-10" />

      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Professional Experience</h2>
        <p className="text-white/40 font-mono text-sm uppercase tracking-[0.2em]">Building the future of AI & Web</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              className={`group relative p-6 rounded-3xl border transition-all duration-500 cursor-pointer ${
                expandedIndex === index 
                  ? 'bg-white/10 border-white/20 shadow-2xl shadow-white/5' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">{exp.role}</h3>
                  <p className="text-white/60 font-medium">{exp.company}</p>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/40">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {exp.dates}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {exp.location}</span>
                  {expandedIndex === index ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-3 mb-6">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 text-white/70 leading-relaxed text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    
                    {exp.metrics && (
                      <div className="flex flex-wrap gap-2">
                        {exp.metrics.map((metric, i) => (
                          <span key={i} className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-mono text-white/60 uppercase tracking-wider flex items-center gap-1.5">
                            <Zap className="w-3 h-3 text-yellow-400" />
                            {metric}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="space-y-8">
          <motion.div
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Impact Highlights
            </h3>
            <div className="space-y-6">
              {resumeData.experience.flatMap(exp => exp.metrics || []).map((metric, i) => (
                <div key={i} className="relative pl-6 border-l border-white/10">
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-white/20" />
                  <p className="text-sm text-white/80 leading-relaxed">{metric}</p>
                </div>
              ))}
              {resumeData.achievements.map((ach, i) => (
                <div key={`ach-${i}`} className="relative pl-6 border-l border-white/10">
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-white/20" />
                  <p className="text-sm text-white/80 leading-relaxed">{ach.text}</p>
                  <span className="text-[10px] font-mono text-white/40 uppercase mt-1 block">{ach.context}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
