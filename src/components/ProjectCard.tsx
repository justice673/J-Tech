'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { TiArrowRightOutline } from 'react-icons/ti'
import Badge from '@/components/Badge'
import type { Project } from '@/lib/projects'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'

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
      delay: Math.min(index * 0.08, 0.4),
      ease: EASE,
    },
  }),
}

const statusBadgeStyles: Record<string, string> = {
  'in-progress': 'bg-red-500/15 text-red-300 border border-red-500/40',
  live: 'bg-emerald-500/15 text-emerald-200 border border-emerald-500/40',
  completed: 'bg-slate-500/15 text-slate-200 border border-slate-500/40',
  preview: 'bg-indigo-500/15 text-indigo-200 border border-indigo-500/40',
}

const statusBadgeLabels: Record<string, string> = {
  'in-progress': 'In progress',
  live: 'Live',
  completed: 'Completed',
  preview: 'Preview',
}

const FALLBACK_DELAY = 2000

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [forceVisible, setForceVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setForceVisible(true), FALLBACK_DELAY)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.01 }}
      variants={cardVariants}
      animate={forceVisible ? 'visible' : undefined}
      className="group relative z-20 h-full"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-none border border-border bg-surface p-6 shadow-sm">
        <div className="relative mb-6 aspect-video overflow-hidden bg-surface/40">
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/30 to-transparent" />
        </div>

        <div className="flex flex-1 flex-col space-y-4">
          {project.status && (
            <Badge
              variant="default"
              className={cn(
                'w-fit self-start text-[10px] uppercase tracking-wider',
                statusBadgeStyles[project.status] ?? 'bg-surface text-text border border-border'
              )}
            >
              {statusBadgeLabels[project.status] ?? project.status}
            </Badge>
          )}
          <h3 className="text-xl font-semibold text-text transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          <p className="line-clamp-4 leading-relaxed text-muted">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string) => (
              <Badge key={tech} variant="default" className="text-xs text-muted">
                {tech}
              </Badge>
            ))}
          </div>

          {(project.hrefLive || project.hrefRepo) && (
            <div className="mt-auto flex flex-wrap items-center gap-3 pt-3 text-sm font-semibold">
              {project.hrefLive && (
                <Link
                  href={project.hrefLive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 rounded-none bg-accent px-4 py-2 text-primary-bg transition-colors hover:bg-accent/90"
                >
                  View demo
                  <TiArrowRightOutline
                    aria-hidden
                    className="size-4 transition-transform duration-200 ease-out group-hover/link:translate-x-1"
                  />
                </Link>
              )}
              {project.hrefRepo && (
                <Link
                  href={project.hrefRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-muted underline-offset-4 transition-colors hover:text-text hover:underline"
                >
                  View more
                  <TiArrowRightOutline
                    aria-hidden
                    className="size-4 transition-transform duration-200 ease-out group-hover/link:translate-x-1"
                  />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
