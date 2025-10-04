"use client"

import * as React from "react"
import { TextAppear } from "@/components/ui/text-appear"
import { cn } from "@/lib/utils"

interface CycleTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  phrases: string[]
  interval?: number // ms between swaps
  stagger?: number
  duration?: number
  respectReducedMotion?: boolean
}

export function CycleText({
  phrases,
  interval = 3500,
  stagger = 0.06,
  duration = 3.5,
  respectReducedMotion = false,
  className,
  ...rest
}: CycleTextProps) {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    if (phrases.length <= 1) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length)
    }, interval)
    return () => clearInterval(id)
  }, [phrases.length, interval])

  const text = phrases[index] ?? ""

  return (
    <span className={cn("text-accent", className)} {...rest}>
      <TextAppear
        key={text}
        text={text}
        stagger={stagger}
        duration={duration}
        respectReducedMotion={respectReducedMotion}
      />
    </span>
  )
}
