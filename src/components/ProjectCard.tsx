'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Badge from '@/components/Badge'
import { EtherealShadow } from './EtherealShadow'
import type { Project } from '@/lib/projects'
import { cn } from '@/lib/utils'
import { useState, useCallback, useEffect } from 'react'

interface ProjectCardProps {
  project: Project
  index: number
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: Math.min(index * 0.08, 0.4), // Cap max delay at 0.4s
      ease: EASE
    }
  })
}

const statusBadgeStyles: Record<string, string> = {
  "in-progress": "bg-red-500/15 text-red-300 border border-red-500/40",
  live: "bg-emerald-500/15 text-emerald-200 border border-emerald-500/40",
  completed: "bg-slate-500/15 text-slate-200 border border-slate-500/40",
  preview: "bg-indigo-500/15 text-indigo-200 border border-indigo-500/40"
}

const statusBadgeLabels: Record<string, string> = {
  "in-progress": "In progress",
  live: "Live",
  completed: "Completed",
  preview: "Preview"
}

// Fallback: ensure cards are visible after a delay (mobile safety net)
const FALLBACK_DELAY = 2000 // 2 seconds

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [flipped, setFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [forceVisible, setForceVisible] = useState(false)
  const toggleFlip = useCallback(() => setFlipped(f => !f), [])

  // Fallback: force visibility after delay if animation doesn't trigger (mobile safety)
  useEffect(() => {
    const timer = setTimeout(() => {
      setForceVisible(true)
    }, FALLBACK_DELAY)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "-100px" }}
      variants={cardVariants}
      animate={forceVisible ? "visible" : undefined}
      className="group relative h-full z-20"
      style={{ perspective: '1600px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative h-full w-full transition-transform duration-[900ms] [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''} group-hover:[transform:rotateY(180deg)]`}
      >
        {/* FRONT FACE */}
        <div className="relative h-full border border-border bg-surface p-6 shadow-sm overflow-hidden [backface-visibility:hidden] rounded-none">
          {/* Lazy load EtherealShadow only when hovered to improve initial load performance */}
          {isHovered && (
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <EtherealShadow
                color="rgba(34, 211, 238, 0.04)"
                animation={{ scale: 15, speed: 60 }}
                noise={{ opacity: 0.02, scale: 0.5 }}
                className="w-full h-full"
              />
            </div>
          )}
          <button
            type="button"
            onClick={toggleFlip}
            className="md:hidden relative mb-6 aspect-video overflow-hidden bg-surface/40 w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
            aria-label="View project details"
          >
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading={index < 3 ? "eager" : "lazy"}
              priority={index < 3}
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/30 to-transparent" />
          </button>
          <div className="relative mb-6 aspect-video overflow-hidden bg-surface/40 md:block hidden">
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading={index < 3 ? "eager" : "lazy"}
              priority={index < 3}
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/30 to-transparent" />
          </div>
          <div className="space-y-4">
            {project.status && (
              <Badge
                variant="default"
                className={cn(
                  "text-[10px] uppercase tracking-wider",
                  statusBadgeStyles[project.status] ?? "bg-surface text-text border border-border"
                )}
              >
                {statusBadgeLabels[project.status] ?? project.status}
              </Badge>
            )}
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
            <p className="pt-2 text-xs uppercase tracking-wider text-muted/60 md:hidden">Tap image to view details</p>
          </div>
        </div>

        {/* BACK FACE */}
        <button
          type="button"
          onClick={toggleFlip}
          className="absolute inset-0 flex flex-col justify-between border border-accent/40 bg-gradient-to-br from-accent/10 via-primary-bg to-primary-bg p-6 text-text shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] md:pointer-events-none focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
          aria-label="Go back to project overview"
        >
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
          <div className="mt-auto flex flex-col gap-3 pointer-events-auto">
            {project.hrefLive && (
              <Link
                href={project.hrefLive}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-none bg-accent px-5 py-3 text-sm font-medium text-primary-bg transition-colors hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-bg"
                aria-label={`Open live demo of ${project.title}`}
                onClick={(e) => e.stopPropagation()}
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
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                View Code
              </Link>
            )}
          </div>
        </button>
      </div>
    </motion.div>
  )
}
