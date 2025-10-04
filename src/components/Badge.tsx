import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent'
  className?: string
}

export default function Badge({ 
  children, 
  variant = 'default', 
  className 
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-sm font-medium transition-colors',
        variant === 'default' && 'bg-surface text-text border border-border',
        variant === 'accent' && 'bg-accent/10 text-accent border border-accent/20',
        className
      )}
    >
      {children}
    </span>
  )
}
