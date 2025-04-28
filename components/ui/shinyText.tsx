"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

interface ShinyTextProps {
  text: string
  disabled?: boolean
  speed?: number
  className?: string
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = "" }) => {
  const { theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null // ← this prevents hydration mismatch

  const isDark = theme === "dark"
  const animationDuration = `${speed}s`

  const backgroundImage = isDark
    ? "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)"
    : "linear-gradient(120deg, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 60%)"

  return (
    <div
      className={`text-black/70 bg-clip-text inline-block outline-none ${disabled ? "" : "animate-shine"} ${className}`}
      style={{
        backgroundImage,
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        animationDuration,
      }}
    >
      {text}
    </div>
  )
}

export default ShinyText
