"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import ShinyText from "@/components/ui/shinyText"
import { ArrowDown, Github, Linkedin, Twitter, Download } from "lucide-react"
import Link from "next/link"
import Particles from "../ui/particles"
import { useTheme } from "next-themes"
import RotatingText from "../ui/rotating-text"

export function Hero() {
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.2 + i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    }),
  }

  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4 pt-20">
      <div className="absolute inset-0 z-[2]">
        <Particles
          particleColors={isDarkMode ? ["#ffffff", "#ffffff", "#00e5ff"] : ["#000000", "#000000", "#00e5ff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 z-[1]"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center space-y-6 max-w-3xl relative z-[2]"
      >
        <motion.div variants={itemVariants} className="mb-2">
          <Badge variant="outline" className="rounded-2xl px-4 py-1 text-sm bg-background/80 backdrop-blur-sm">
            Full Stack Developer
          </Badge>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tight">
          <ShinyText
            text="Hello, I'm Deepanshu Mani"
            disabled={false}
            speed={3}
            className="custom-class dark:text-[#b5b5b5a4]"
          />
        </motion.h1>

        <motion.div variants={itemVariants} className="text-2xl md:text-4xl font-medium text-muted-foreground">
          <RotatingText
            texts={[
              "Building digital experiences",
              "Creating modern websites",
              "Developing web applications",
              "Crafting user interfaces",
            ]}
            mainClassName="px-2 sm:px-2 md:px-3 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
        </motion.div>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          I build modern, responsive web applications with cutting-edge technologies. Focused on creating elegant
          solutions to complex problems.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center pt-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button asChild size="lg" className="rounded-2xl ">
              <Link href="#contact">Get in touch</Link>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button asChild variant="outline" size="lg" className="rounded-2xl">
              <Link href="#projects">View my work</Link>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button asChild variant="secondary" size="lg" className="rounded-2xl">
              <Link href="#" download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div className="flex justify-center gap-4 pt-8" variants={itemVariants}>
          {[Github, Linkedin, Twitter].map((Icon, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.2,
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 },
              }}
            >
              <Button variant="ghost" size="icon" className="rounded-full bg-background/50 backdrop-blur-sm" asChild>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">Social Media</span>
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 z-[2]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.8,
          duration: 1,
        }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <Button variant="ghost" size="icon" className="rounded-full bg-background/50 backdrop-blur-sm" asChild>
            <Link href="#about">
              <ArrowDown className="h-6 w-6" />
              <span className="sr-only">Scroll down</span>
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
