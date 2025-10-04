"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ShinyTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

export function ShinyText({ children, className, ...props }: ShinyTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r from-accent via-white/90 to-accent bg-clip-text text-transparent",
        "[background-size:200%_100%] animate-shimmer",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
