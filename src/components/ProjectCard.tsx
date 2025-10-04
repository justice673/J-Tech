'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Badge from '@/components/Badge'
import { EtherealShadow } from './EtherealShadow'
import type { Project } from '@/lib/projects'
import { useState, useCallback } from 'react'

interface ProjectCardProps {
  project: Project
  index: number
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1] as any
    }
  })
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [flipped, setFlipped] = useState(false)
  const toggleFlip = useCallback(() => setFlipped(f => !f), [])

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      className="group relative h-full"
      style={{ perspective: '1600px' }}
    >
      <div
        className={`relative h-full w-full transition-transform duration-[900ms] [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''} group-hover:[transform:rotateY(180deg)]`}
      >
        {/* FRONT FACE */}
        <div className="relative h-full border border-border bg-surface p-6 shadow-sm overflow-hidden [backface-visibility:hidden] rounded-none">
          {/* Mobile flip button */}
          <button
            type="button"
            onClick={toggleFlip}
            className="md:hidden absolute top-3 right-3 z-10 inline-flex items-center gap-1 rounded-none border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-medium text-accent hover:bg-accent/20 focus:outline-none focus:ring-2 focus:ring-accent/60"
            aria-label="Show project actions"
          >
            Details
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
          </button>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <EtherealShadow
              color="rgba(34, 211, 238, 0.04)"
              animation={{ scale: 15, speed: 60 }}
              noise={{ opacity: 0.02, scale: 0.5 }}
              className="w-full h-full"
            />
          </div>
          <div className="relative mb-6 aspect-video overflow-hidden bg-surface/40">
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/30 to-transparent" />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-text group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-muted line-clamp-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech: string) => (
                <Badge key={tech} variant="accent" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            <p className="pt-2 text-xs uppercase tracking-wider text-muted/60 md:block hidden">Hover to flip</p>
            <p className="pt-2 text-xs uppercase tracking-wider text-muted/60 md:hidden">Tap DETAILS</p>
          </div>
        </div>

        {/* BACK FACE */}
        <div className="absolute inset-0 flex flex-col justify-between border border-accent/40 bg-gradient-to-br from-accent/10 via-primary-bg to-primary-bg p-6 text-text shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <button
            type="button"
            onClick={toggleFlip}
            className="md:hidden absolute top-3 right-3 z-10 inline-flex items-center gap-1 rounded-none border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-medium text-accent hover:bg-accent/20 focus:outline-none focus:ring-2 focus:ring-accent/60"
            aria-label="Go back to project overview"
          >
            Back
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6" /></svg>
          </button>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-accent">
              {project.title}
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <div className="mb-8 flex flex-wrap gap-2">
              {project.tech.map((tech: string) => (
                <Badge key={tech} variant="accent" className="text-[10px]">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <div className="mt-auto flex flex-col gap-3">
            {project.hrefLive && (
              <Link
                href={project.hrefLive}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-none bg-accent px-5 py-3 text-sm font-medium text-primary-bg transition-colors hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-bg"
                aria-label={`Open live demo of ${project.title}`}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                Live Demo
              </Link>
            )}
            {project.hrefRepo && (
              <Link
                href={project.hrefRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-none border border-accent px-5 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-bg"
                aria-label={`View source code of ${project.title}`}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                View Code
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
