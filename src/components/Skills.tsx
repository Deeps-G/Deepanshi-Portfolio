import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Code2, Database, Layout, Terminal, Cpu, BrainCircuit } from 'lucide-react';

const categoryIcons: Record<string, any> = {
  'Languages': Code2,
  'Machine Learning': BrainCircuit,
  'Deep Learning & AI': Cpu,
  'Generative AI / NLP': Terminal,
  'Visualization & BI': Layout,
  'Developer Tools': Database,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative px-6 py-32 max-w-7xl mx-auto">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Technical Arsenal</h2>
        <p className="text-white/40 font-mono text-sm uppercase tracking-[0.2em]">Mastering the tools of the trade</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resumeData.skills.map((skill, index) => {
          const Icon = categoryIcons[skill.category] || Code2;
          return (
            <motion.div
              key={index}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:bg-white/10 hover:border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">{skill.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};