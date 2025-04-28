"use client"

import { useEffect, useState } from "react"
import GooeyNav from "./ui/gooey-nav"
import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { Badge } from "./ui/badge"
import { useTheme } from "next-themes"

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? `py-2 bg-${theme === "dark" ? "gray-900" : "white"}/80 backdrop-blur-md shadow-md`
          : "py-4"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Badge
              variant="outline"
              className={`rounded-2xl px-4 py-1 text-sm ${theme === "dark" ? "bg-background/80" : "bg-background/60"} backdrop-blur-sm`}
            >
              Available for hire
            </Badge>
          </motion.div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="h-[50px] relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <GooeyNav
                items={navItems}
                particleCount={15}
                particleDistances={[90, 10]}
                particleR={100}
                initialActiveIndex={0}
                animationTime={600}
                timeVariance={300}
              />
            </motion.div>
          </div>
        </div>

        <ThemeToggle />
      </div>
    </motion.div>
  )
}
