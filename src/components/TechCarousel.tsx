"use client";
import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

interface TechItem {
  name: string;
  logo: string; // path under public
}

interface TechCarouselProps {
  items: TechItem[];
  speed?: number; // pixels per second
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
}

// Duplicate list for seamless infinite scroll
export default function TechCarousel({
  items,
  speed = 60,
  direction = 'left',
  pauseOnHover = true,
  className = ''
}: TechCarouselProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();

  const startAnimation = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const fullWidth = container.scrollWidth; // duplicated already
    if (fullWidth === 0) {
      // retry shortly if images not laid out yet
      setTimeout(startAnimation, 100);
      return;
    }
    const halfWidth = fullWidth / 2;
    const fromX = direction === 'left' ? 0 : -halfWidth;
    const toX = direction === 'left' ? -halfWidth : 0;

    controls.start({
      x: [fromX, toX],
      transition: {
        duration: halfWidth / speed, // pixels per second
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop'
      }
    });
  }, [controls, speed, direction]);

  useEffect(() => {
    startAnimation();
    // Recalculate on resize in case of responsive layout changes
    const ro = new ResizeObserver(() => startAnimation());
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [startAnimation]);

  const handleMouseEnter = () => {
    if (pauseOnHover) controls.stop();
  };
  const handleMouseLeave = () => {
    if (pauseOnHover) startAnimation();
  };

  return (
    <div 
      className={`relative w-full overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        ref={containerRef}
        animate={controls}
        className="flex gap-12 px-8 will-change-transform"
        style={{ width: 'max-content' }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
            <div className="relative h-12 w-12 mb-2">
              <Image src={item.logo} alt={item.name} fill sizes="48px" className="object-contain" />
            </div>
            <span className="text-xs text-muted tracking-wide">{item.name}</span>
          </div>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
    </div>
  );
}
