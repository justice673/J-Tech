"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ShinyText } from "@/components/ui/text-effect"

interface HeroAction {
  label: string
  href: string
  variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary"
}

interface HeroProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  gradient?: boolean
  blur?: boolean
  title: React.ReactNode
  subtitle?: React.ReactNode
  actions?: HeroAction[]
  titleClassName?: string
  subtitleClassName?: string
  actionsClassName?: string
  imageSrc?: string
  imageAlt?: string
  imageClassName?: string
  hideImage?: boolean
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
      imageSrc,
      imageAlt = "Profile image",
      imageClassName,
      hideImage = false,
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
              <div className="absolute top-0 z-10 h-48 w-screen bg-transparent opacity-10 backdrop-blur-md" />
            )}

            {/* Main glow */}
            <div className="absolute inset-auto z-10 h-36 w-[28rem] -translate-y-[-30%] bg-accent/60 opacity-80 blur-3xl" />

            {/* Lamp effect */}
            <motion.div
              initial={{ width: "8rem" }}
              viewport={{ amount: 0.35 }}
              transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
              whileInView={{ width: "16rem" }}
              className="absolute top-0 z-30 h-36 -translate-y-[20%] bg-accent/60 blur-2xl"
            />

            {/* Top line */}
            <motion.div
              initial={{ width: "15rem" }}
              viewport={{ amount: 0.35 }}
              transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
              whileInView={{ width: "30rem" }}
              className="absolute inset-auto z-10 h-0.5 -translate-y-[-10%] bg-accent/60"
            />

            {/* Left gradient cone */}
            <motion.div
              initial={{ opacity: 0.5, width: "15rem" }}
              whileInView={{ opacity: 1, width: "30rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-accent/60 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
            >
              <div className="absolute w-[100%] left-0 bg-primary-bg h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
              <div className="absolute w-40 h-[100%] left-0 bg-primary-bg bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
            </motion.div>

            {/* Right gradient cone */}
            <motion.div
              initial={{ opacity: 0.5, width: "15rem" }}
              whileInView={{ opacity: 1, width: "30rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-accent/60 [--conic-position:from_290deg_at_center_top]"
            >
              <div className="absolute w-40 h-[100%] right-0 bg-primary-bg bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
              <div className="absolute w-[100%] right-0 bg-primary-bg h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            </motion.div>
          </div>
        )}

        <motion.div
          initial={{ y: 100, opacity: 0.5 }}
          viewport={{ amount: 0.35 }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="relative z-30 container px-5 md:px-10 -translate-y-20 mt-16 sm:mt-20 md:mt-24"
        >
          <div className={cn("grid items-center gap-10", hideImage ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2")}>
            {/* Left: text */}
            <div className="flex flex-col items-start text-left space-y-4">
              <h1
                className={cn(
                  "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text",
                  titleClassName,
                )}
              >
                {title}
              </h1>
              {subtitle && (
                <p
                  className={cn(
                    "text-lg md:text-xl text-muted max-w-2xl",
                    subtitleClassName,
                  )}
                >
                  <ShinyText className="text-text">{subtitle}</ShinyText>
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

            {/* Right: circular image placeholder */}
            {!hideImage && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative mx-auto md:mx-0 w-48 h-48 md:w-72 md:h-72"
              >
                {/* Glow behind */}
                <div className="absolute inset-0 blur-3xl opacity-40"
                     style={{
                       background: "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.35), transparent 60%)",
                     }}
                />
                {/* Image or placeholder, clipped to circle (no border radius) */}
                {imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className={cn("object-cover", imageClassName)}
                    style={{ clipPath: "circle(50% at 50% 50%)" }}
                    sizes="(max-width: 768px) 192px, 288px"
                  />
                ) : (
                  <div
                    className="w-full h-full bg-surface"
                    style={{
                      clipPath: "circle(50% at 50% 50%)",
                      backgroundImage:
                        "radial-gradient(circle at 50% 45%, rgba(34,211,238,0.25), transparent 60%), linear-gradient(135deg, rgba(34,211,238,0.15), rgba(167,139,250,0.1))",
                    }}
                  />
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>
    )
  },
)
Hero.displayName = "Hero"

export { Hero }
