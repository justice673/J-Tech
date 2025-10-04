"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroAction {
  label: string
  href: string
  variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary"
}

interface HeroProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  gradient?: boolean
  blur?: boolean
  title: string
  subtitle?: string
  actions?: HeroAction[]
  titleClassName?: string
  subtitleClassName?: string
  actionsClassName?: string
}

interface HeroAction {
  label: string
  href: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
}

interface HeroProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  gradient?: boolean
  blur?: boolean
  title: string
  subtitle?: string
  actions?: HeroAction[]
  titleClassName?: string
  subtitleClassName?: string
  actionsClassName?: string
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      gradient = true,
      blur = true,
      title,
      subtitle,
      actions,
      titleClassName,
      subtitleClassName,
      actionsClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative z-0 flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-primary-bg",
          className,
        )}
        {...props}
      >
        {gradient && (
          <div className="absolute top-0 isolate z-0 flex w-screen flex-1 items-start justify-center">
            {blur && (
              <div className="absolute top-0 z-50 h-48 w-screen bg-transparent opacity-10 backdrop-blur-md" />
            )}

            {/* Main glow - using your cyan accent */}
                        {/* Main glow */}
            <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-[-30%] bg-accent/60 opacity-80 blur-3xl" />

            {/* Lamp effect */}
            <motion.div
              initial={{ width: "8rem" }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
              whileInView={{ width: "16rem" }}
              className="absolute top-0 z-30 h-36 -translate-y-[20%] bg-accent/60 blur-2xl"
            />

            {/* Top line */}
            <motion.div
              initial={{ width: "15rem" }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
              whileInView={{ width: "30rem" }}
              className="absolute inset-auto z-50 h-0.5 -translate-y-[-10%] bg-accent/60"
            />

            {/* Left gradient cone */}
            <motion.div
              initial={{ opacity: 0.3, width: "15rem" }}
              animate={{ opacity: 0.8, width: "30rem" }}
              transition={{
                delay: 1,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem]"
              style={{
                background: `conic-gradient(from 70deg at center top, rgba(34, 211, 238, 0.6) 0%, transparent 50%, transparent 100%)`,
              }}
            >
              <div className="absolute w-[100%] left-0 bg-primary-bg h-40 bottom-0 z-20" 
                   style={{ maskImage: 'linear-gradient(to top, white, transparent)' }} />
              <div className="absolute w-40 h-[100%] left-0 bg-primary-bg bottom-0 z-20"
                   style={{ maskImage: 'linear-gradient(to right, white, transparent)' }} />
            </motion.div>

            {/* Right gradient cone */}
            <motion.div
              initial={{ opacity: 0.3, width: "15rem" }}
              animate={{ opacity: 0.8, width: "30rem" }}
              transition={{
                delay: 1.2,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="absolute inset-auto left-1/2 h-56 w-[30rem]"
              style={{
                background: `conic-gradient(from 290deg at center top, transparent 0%, transparent 50%, rgba(34, 211, 238, 0.6) 100%)`,
              }}
            >
              <div className="absolute w-40 h-[100%] right-0 bg-primary-bg bottom-0 z-20"
                   style={{ maskImage: 'linear-gradient(to left, white, transparent)' }} />
              <div className="absolute w-[100%] right-0 bg-primary-bg h-40 bottom-0 z-20"
                   style={{ maskImage: 'linear-gradient(to top, white, transparent)' }} />
            </motion.div>
          </div>
        )}

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-50 container flex justify-center flex-1 flex-col px-5 md:px-10 gap-4 -translate-y-20"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <h1
              className={cn(
                "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text",
                titleClassName,
              )}
            >
              {title.includes('fonge justice') ? (
                <>
                  About <span className="text-accent">fonge justice</span>
                </>
              ) : (
                title
              )}
            </h1>
            {subtitle && (
              <p
                className={cn(
                  "text-xl text-muted",
                  subtitleClassName,
                )}
              >
                {subtitle}
              </p>
            )}
            {actions && actions.length > 0 && (
              <div className={cn("flex gap-4", actionsClassName)}>
                {actions.map((action, index) => (
                  <Button
                    key={index}
                    variant={action.variant || "default"}
                    asChild
                  >
                    <Link href={action.href}>{action.label}</Link>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </section>
    )
  },
)
Hero.displayName = "Hero"

export { Hero }
