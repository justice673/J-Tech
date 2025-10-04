'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

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
      ease: [0.22, 1, 0.36, 1] as any
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
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
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
