"use client"

import * as React from "react"
import { useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextAppearProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  stagger?: number // seconds between each char
  duration?: number // seconds for one cycle per char
  delay?: number // initial delay
  respectReducedMotion?: boolean // if false, always animate
}

export function TextAppear({ text, className, stagger = 0.05, duration = 3, delay = 0, respectReducedMotion = true, ...rest }: TextAppearProps) {
  const reduce = useReducedMotion()
  if (reduce && respectReducedMotion) return <span className={className} {...rest}>{text}</span>

  return (
    <span className={cn("inline-block align-baseline", className)} aria-label={text} {...rest}>
      {Array.from(text).map((ch, i) => (
        <span
          key={i}
          className="text-fade-char"
          style={{
            animation: `text-fade-cycle ${duration}s cubic-bezier(0.22,1,0.36,1) infinite both`,
            animationDelay: `${delay + i * stagger}s`,
            transform: 'translateZ(0)'
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  )
}
