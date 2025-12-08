'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode, useEffect, useState } from 'react'

interface SectionProps {
  id?: string
  title?: string
  description?: string
  children: ReactNode
  className?: string
}

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    }
  }
}

export default function Section({ 
  id, 
  title, 
  description, 
  children, 
  className = '' 
}: SectionProps) {
  const prefersReducedMotion = useReducedMotion()
  const [forceVisible, setForceVisible] = useState(false)

  // Safety net: ensure the section becomes visible even if IntersectionObserver is slow
  useEffect(() => {
    if (prefersReducedMotion) {
      setForceVisible(true)
      return
    }
    const timer = setTimeout(() => setForceVisible(true), 1200)
    return () => clearTimeout(timer)
  }, [prefersReducedMotion])

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      // Lower threshold and remove negative margin so mobile viewports trigger earlier
      viewport={{ once: true, amount: 0.01 }}
      // Force-show if the observer never fires or user prefers reduced motion
      animate={forceVisible ? "visible" : undefined}
      variants={sectionVariants}
      className={`py-16 md:py-24 ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {(title || description) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mx-auto max-w-2xl text-lg text-muted">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </motion.section>
  )
}
