"use client";

import { cn } from '@/lib/utils'
import { motion } from "framer-motion"

interface GridPatternCardProps {
  children: React.ReactNode
  className?: string
  patternClassName?: string
  gradientClassName?: string
}

export function GridPatternCard({ 
  children, 
  className,
  patternClassName,
  gradientClassName
}: GridPatternCardProps) {
  return (
    <motion.div
      className={cn(
        "border w-full rounded-[2rem] overflow-hidden",
        "bg-background",
        "border-border",
        "p-1 md:p-3",
        className
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={cn(
        "size-full bg-repeat bg-[length:30px_30px]",
        "bg-grid-pattern-light dark:bg-grid-pattern rounded-[1.5rem]",
        patternClassName
      )}>
        <div className={cn(
          "size-full bg-gradient-to-tr",
          "from-background/90 via-background/40 to-background/10",
          "rounded-[1.5rem]",
          gradientClassName
        )}>
          {children}
        </div>
      </div>
    </motion.div>
  )
}

export function GridPatternCardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={cn("text-left p-6 md:p-10", className)} 
      {...props} 
    />
  )
}
