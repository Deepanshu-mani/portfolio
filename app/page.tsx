"use client"

import { useEffect, useState } from "react"
import Loader from "@/components/loader/loader"

import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Contact } from "@/components/sections/contact"
import { ChatBot } from "@/components/chat-bot"
import { ScrollProgress } from "@/components/scroll-progress"
import { Experience } from "@/components/sections/experience"
import { Testimonials } from "@/components/sections/testimonial"
import { Footer } from "@/components/sections/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
      <ChatBot />
    </main>
  )
}
