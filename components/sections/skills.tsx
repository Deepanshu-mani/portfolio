"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Layout, Server, Terminal, Smartphone, Wand2 } from "lucide-react"
import SpotlightCard from "@/components/ui/spotlight-card"

const skillCategories = [
  {
    id: 1,
    title: "Frontend Development",
    icon: <Layout className="h-8 w-8 mb-4 text-primary" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
    color: "rgba(0, 229, 255, 0.2)",
  },
  {
    id: 2,
    title: "Backend Development",
    icon: <Server className="h-8 w-8 mb-4 text-primary" />,
    skills: ["Node.js", "Express", "NestJS", "Python", "Django", "GraphQL"],
    color: "rgba(255, 86, 86, 0.2)",
  },
  {
    id: 3,
    title: "Database",
    icon: <Database className="h-8 w-8 mb-4 text-primary" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma", "Supabase"],
    color: "rgba(255, 220, 40, 0.2)",
  },
  {
    id: 4,
    title: "DevOps & Tools",
    icon: <Terminal className="h-8 w-8 mb-4 text-primary" />,
    skills: ["Git", "Docker", "AWS", "CI/CD", "Vercel", "GitHub Actions"],
    color: "rgba(120, 120, 255, 0.2)",
  },
  {
    id: 5,
    title: "Mobile Development",
    icon: <Smartphone className="h-8 w-8 mb-4 text-primary" />,
    skills: ["React Native", "Flutter", "Expo", "iOS", "Android", "PWA"],
    color: "rgba(255, 150, 50, 0.2)",
  },
  {
    id: 6,
    title: "UI/UX Design",
    icon: <Wand2 className="h-8 w-8 mb-4 text-primary" />,
    skills: ["Figma", "Adobe XD", "Sketch", "Wireframing", "Prototyping", "User Testing"],
    color: "rgba(180, 90, 255, 0.2)",
  },
  {
    id: 7,
    title: "Web Technologies",
    icon: <Globe className="h-8 w-8 mb-4 text-primary" />,
    skills: ["HTML5", "CSS3", "JavaScript", "REST API", "WebSockets", "SEO"],
    color: "rgba(50, 200, 100, 0.2)",
  },
  {
    id: 8,
    title: "Programming Languages",
    icon: <Code className="h-8 w-8 mb-4 text-primary" />,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C#", "Go"],
    color: "rgba(255, 100, 150, 0.2)",
  },
]

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 rounded-2xl px-4 py-1 text-sm">
            Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <motion.div
            className="h-1 w-20 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          ></motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <SpotlightCard
                className="h-full rounded-2xl border border-border/40 dark:border-border/20 bg-background/80 dark:bg-background/20 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300"
                spotlightColor={category.color}
              >
                <div className="p-6 text-center">
                  <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                    className="inline-block"
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill) => (
                      <motion.div key={skill} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Badge variant="secondary" className="rounded-2xl">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
