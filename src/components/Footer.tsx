import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Mail, Phone, MapPin, Github, Linkedin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative px-6 py-20 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white tracking-tighter">DG</h3>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            {resumeData.basics.summary}
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs font-mono text-white/40 uppercase tracking-[0.2em]">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${resumeData.basics.email}`}>{resumeData.basics.email}</a>
            </li>
            <li className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <a href={`tel:${resumeData.basics.phone}`}>{resumeData.basics.phone}</a>
            </li>
            <li className="flex items-center gap-3 text-sm text-white/60">
              <MapPin className="w-4 h-4" />
              {resumeData.basics.location}
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs font-mono text-white/40 uppercase tracking-[0.2em]">Social</h4>
          <ul className="space-y-4">
            {resumeData.basics.links.map((link) => (
              <li key={link.label} className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                {link.label === 'GitHub' ? <Github className="w-4 h-4" /> : <Linkedin className="w-4 h-4" />}
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs font-mono text-white/40 uppercase tracking-[0.2em]">Quick Links</h4>
          <ul className="space-y-4">
            <li><a href="#experience" className="text-sm text-white/60 hover:text-white transition-colors">Experience</a></li>
            <li><a href="#projects" className="text-sm text-white/60 hover:text-white transition-colors">Projects</a></li>
            <li><a href="#skills" className="text-sm text-white/60 hover:text-white transition-colors">Skills</a></li>
            <li><a href="#education" className="text-sm text-white/60 hover:text-white transition-colors">Education</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/5 text-center">
        <p className="text-xs font-mono text-white/20 uppercase tracking-widest flex items-center justify-center gap-2">
          Made with <Heart className="w-3 h-3 text-red-500" /> by {resumeData.basics.name} &copy; 2026
        </p>
      </div>

      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[120px] -z-10" />
    </footer>
  );
};
