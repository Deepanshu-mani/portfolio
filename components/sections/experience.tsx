"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"
import SpotlightCard from "@/components/ui/spotlight-card"

const experiences = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description:
      "Lead the frontend development team in building modern web applications using React, Next.js, and TypeScript. Implemented CI/CD pipelines and improved performance by 40%.",
    type: "work",
    color: "rgba(0, 229, 255, 0.2)",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple web applications using React, Node.js, and MongoDB. Collaborated with designers to implement responsive UI/UX designs.",
    type: "work",
    color: "rgba(255, 86, 86, 0.2)",
  },
  {
    id: 3,
    title: "Bachelor of Technology in Computer Science",
    company: "University of Technology",
    period: "2016 - 2020",
    description:
      "Graduated with honors. Specialized in web development and artificial intelligence. Completed a capstone project on real-time data visualization.",
    type: "education",
    color: "rgba(255, 220, 40, 0.2)",
  },
  {
    id: 4,
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    period: "2018 - 2020",
    description:
      "Worked part-time while completing my degree. Assisted in developing and maintaining company websites and internal tools.",
    type: "work",
    color: "rgba(120, 120, 255, 0.2)",
  },
]

export function Experience() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 rounded-2xl px-4 py-1 text-sm">
            My Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div key={exp.id} variants={itemVariants} className="mb-12 relative">
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-primary md:transform md:-translate-x-1/2 hidden md:flex items-center justify-center z-10">
                  {exp.type === "work" ? (
                    <Briefcase className="h-3 w-3 text-primary-foreground" />
                  ) : (
                    <GraduationCap className="h-3 w-3 text-primary-foreground" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-0 md:pl-4" : "md:pl-0 md:pr-4"}`}
                >
                  <SpotlightCard
                    className="overflow-hidden border border-border/40 dark:border-border/20 bg-background/80 dark:bg-background/20 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl"
                    spotlightColor={exp.color}
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div
                          className={`mr-4 p-2 rounded-full ${
                            exp.type === "work" ? "bg-primary/10" : "bg-secondary/80"
                          }`}
                        >
                          {exp.type === "work" ? (
                            <Briefcase className="h-5 w-5 text-primary" />
                          ) : (
                            <GraduationCap className="h-5 w-5 text-primary" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{exp.title}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="mb-4 rounded-2xl px-3 py-1 text-xs">
                        {exp.period}
                      </Badge>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </SpotlightCard>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
