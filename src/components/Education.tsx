import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { GraduationCap, Calendar, Star } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative px-6 py-32 max-w-5xl mx-auto">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Academic Journey</h2>
        <p className="text-white/40 font-mono text-sm uppercase tracking-[0.2em]">Foundation for the future</p>
      </motion.div>

      <div className="space-y-8">
        {resumeData.education.map((edu, index) => (
          <motion.div
            key={index}
            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:bg-white/10 hover:border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-white transition-colors">{edu.degree}</h3>
                  <p className="text-white/60 font-medium">{edu.institution}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-white/40">
                <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <Calendar className="w-4 h-4" /> {edu.dates}
                </span>
                <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-yellow-400">
                  <Star className="w-4 h-4" /> CGPA: {edu.cgpa}
                </span>
              </div>
            </div>

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
