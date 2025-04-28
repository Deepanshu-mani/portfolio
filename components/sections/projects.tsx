"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SpotlightCard from "@/components/ui/spotlight-card"

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A modern e-commerce platform built with Next.js and Stripe integration.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "React", "Stripe", "Tailwind CSS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "rgba(0, 229, 255, 0.2)",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Real-time chat application with WebSocket integration and user authentication.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "rgba(255, 86, 86, 0.2)",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Dashboard analytics platform with data visualization and reporting features.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "D3.js", "Firebase", "Material UI"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "rgba(255, 220, 40, 0.2)",
  },
]

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 rounded-2xl px-4 py-1 text-sm">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <motion.div
            className="h-1 w-20 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          ></motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <SpotlightCard
                className="h-full rounded-2xl border border-border/40 dark:border-border/20 bg-background/80 dark:bg-background/20 backdrop-blur-sm shadow-lg"
                spotlightColor={project.color}
              >
                <div className="flex flex-col h-full">
                  <div className="overflow-hidden rounded-t-2xl">
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover"
                      />
                    </motion.div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <motion.div key={tag} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                          <Badge variant="secondary" className="rounded-2xl">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 pt-0 flex justify-between items-center">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button asChild variant="outline" size="sm" className="rounded-2xl">
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button asChild size="sm" className="rounded-2xl">
                        <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild variant="outline" size="lg" className="rounded-2xl group">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
