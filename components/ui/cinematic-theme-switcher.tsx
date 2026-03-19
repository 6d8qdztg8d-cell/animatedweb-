'use client';

import { Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  delay: number;
  duration: number;
}

interface CinematicThemeSwitcherProps {
  isDark: boolean;
  onToggle: () => void;
}

export function CinematicThemeSwitcher({ isDark, onToggle }: CinematicThemeSwitcherProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const generateParticles = () => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 3; i++) {
      newParticles.push({ id: i, delay: i * 0.1, duration: 0.6 + i * 0.1 });
    }
    setParticles(newParticles);
    setIsAnimating(true);
    setTimeout(() => { setIsAnimating(false); setParticles([]); }, 1000);
  };

  const handleToggle = () => {
    generateParticles();
    onToggle();
  };

  return (
    <div className="relative inline-block">
      <motion.button
        onClick={handleToggle}
        className="relative flex h-[56px] w-[96px] items-center rounded-full p-[5px] focus:outline-none"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #0C0C0C 0%, #141414 100%)'
            : 'linear-gradient(135deg, #F0F0EC 0%, #E5E5E1 100%)',
          boxShadow: isDark
            ? 'inset 0 2px 8px rgba(0,0,0,0.9), inset 0 -1px 3px rgba(255,255,255,0.04), 0 1px 0 rgba(255,255,255,0.04)'
            : 'inset 0 2px 8px rgba(0,0,0,0.12), inset 0 -1px 3px rgba(255,255,255,0.9), 0 1px 0 rgba(255,255,255,0.8)',
          border: isDark
            ? '1px solid #1f1f1f'
            : '1px solid #D0D0CC',
        }}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        role="switch"
        aria-checked={isDark}
        whileTap={{ scale: 0.97 }}
      >
        {/* Background icons */}
        <div className="absolute inset-0 flex items-center justify-between px-[14px]">
          <Sun size={16} style={{ color: isDark ? '#333' : '#aaaaaa' }} />
          <Moon size={16} style={{ color: isDark ? '#555' : '#bbbbbb' }} />
        </div>

        {/* Thumb */}
        <motion.div
          className="relative z-10 flex h-[38px] w-[38px] items-center justify-center rounded-full overflow-hidden"
          style={{
            background: isDark
              ? 'linear-gradient(145deg, #CAFF00 0%, #a8d900 100%)'
              : 'linear-gradient(145deg, #ffffff 0%, #f5f5f0 100%)',
            boxShadow: isDark
              ? '0 2px 12px rgba(202,255,0,0.35), 0 1px 4px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.2)'
              : '0 2px 12px rgba(0,0,0,0.15), 0 1px 4px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,1)',
            border: isDark
              ? '1px solid rgba(202,255,0,0.4)'
              : '1px solid rgba(200,200,195,0.6)',
          }}
          animate={{ x: isDark ? 42 : 0 }}
          transition={{ type: 'spring', stiffness: 320, damping: 22 }}
        >
          {/* Shine */}
          <div className="absolute inset-0 rounded-full pointer-events-none" style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.35) 0%, transparent 50%)',
          }} />

          {/* Particles */}
          {isAnimating && particles.map((particle) => (
            <motion.div key={particle.id} className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: '10px', height: '10px',
                  background: isDark
                    ? 'radial-gradient(circle, rgba(202,255,0,0.6) 0%, rgba(202,255,0,0) 70%)'
                    : 'radial-gradient(circle, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 70%)',
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: isDark ? 6 : 7, opacity: [0, 1, 0] }}
                transition={{ duration: particle.duration, delay: particle.delay, ease: 'easeOut' }}
              />
            </motion.div>
          ))}

          {/* Icon */}
          <div className="relative z-10">
            {isDark
              ? <Moon size={17} style={{ color: '#080808' }} />
              : <Sun size={17} style={{ color: '#555555' }} />
            }
          </div>
        </motion.div>
      </motion.button>
    </div>
  );
}
