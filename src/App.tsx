import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { Splash } from './components/Splash';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Footer } from './components/Footer';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen text-white selection:bg-white selection:text-black">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <AnimatePresence mode="wait">
        {!isLoaded ? (
          <Splash key="splash" onComplete={() => setIsLoaded(true)} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <AnimatedBackground />
            
            {/* Scroll Progress Indicator */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-white z-50 origin-left"
              style={{ scaleX }}
            />

            {/* Navigation (Sticky Progress) */}
            <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-8 px-8 py-4 rounded-full border border-white/10 bg-black/20 backdrop-blur-xl">
              {['Experience', 'Projects', 'Skills', 'Education'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xs font-mono text-white/40 hover:text-white uppercase tracking-widest transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
