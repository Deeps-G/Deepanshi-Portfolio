import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Code, ExternalLink, Globe, Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative px-6 py-32 max-w-7xl mx-auto overflow-hidden">
      {/* Background Display Text */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none select-none -z-10 opacity-[0.015]">
        <h2 className="text-[15vw] font-black whitespace-nowrap leading-none tracking-tighter uppercase vertical-text">
          PROJECTS
        </h2>
      </div>

      {/* Geometric Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-white/5 -z-10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-white/5 -z-10" />

      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Featured Projects</h2>
        <p className="text-white/40 font-mono text-sm uppercase tracking-[0.2em]">Turning ideas into reality</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resumeData.projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="flex gap-3">
                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">{project.title}</h3>
            
            {project.stack && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.split(',').map((tech, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/50 uppercase tracking-wider">
                    {tech.trim()}
                  </span>
                ))}
              </div>
            )}

            <ul className="space-y-3">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-white/60 leading-relaxed text-sm">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-white/20 shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
