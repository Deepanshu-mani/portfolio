"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import RotatingText from "../ui/rotating-text"

export function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 rounded-2xl px-4 py-1 text-sm">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="overflow-hidden border-none shadow-lg rounded-2xl">
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Profile"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">
              <RotatingText
                texts={["Who I Am", "My Background", "My Story"]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-white dark:bg-primary/10 text-black dark:text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={4000}
              />
            </h3>
            <p className="text-muted-foreground">
              I'm a passionate full-stack developer with over 5 years of experience building web applications. My
              journey in tech started when I built my first website at the age of 15, and I've been hooked ever since.
            </p>

            <h3 className="text-2xl font-bold">What I Do</h3>
            <p className="text-muted-foreground">
              I specialize in creating modern, responsive web applications using React, Next.js, and other cutting-edge
              technologies. My approach combines technical expertise with an eye for design to deliver exceptional user
              experiences.
            </p>

            <h3 className="text-2xl font-bold">My Philosophy</h3>
            <p className="text-muted-foreground">
              I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends. My
              goal is to create solutions that not only meet technical requirements but also delight users.
            </p>

            <div className="pt-4">
              <Badge className="mr-2 mb-2 rounded-2xl">Problem Solver</Badge>
              <Badge className="mr-2 mb-2 rounded-2xl">Fast Learner</Badge>
              <Badge className="mr-2 mb-2 rounded-2xl">Team Player</Badge>
              <Badge className="mr-2 mb-2 rounded-2xl">Detail-Oriented</Badge>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
