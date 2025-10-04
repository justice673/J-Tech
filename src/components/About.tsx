'use client'

import { motion } from 'framer-motion'
import { Hero } from '@/components/blocks/hero-clean'
import { ShinyText } from '@/components/ui/text-effect'

export default function About() {
  return (
    <motion.div 
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="w-full">
        <Hero
          className="w-full [&_.grid]:!grid-cols-1 [&_.grid]:!text-center [&_.flex-col]:!items-center"
          title={
            <>
              Software Developer <ShinyText>& Problem Solver</ShinyText>
            </>
          }
          subtitle="Full-stack software developer specializing in modern web technologies. I build scalable applications with React, Next.js, and Node.js, focusing on performance, clean architecture, and exceptional user experiences."
          titleClassName="text-center"
          subtitleClassName="text-center max-w-3xl mx-auto"
          actionsClassName="justify-center"
          actions={[
            {
              label: "View Projects",
              href: "#projects",
              variant: "default"
            },
            {
              label: "Download Resume",
              href: "#", // TODO: Add your resume link
              variant: "outline"
            }
          ]}
          gradient={true}
          blur={true}
        />
      </div>
    </motion.div>
  )
}
