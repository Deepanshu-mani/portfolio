"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "CTO at TechCorp",
    content:
      "Working with Deepanshu was a game-changer for our project. His technical expertise and problem-solving skills helped us deliver a complex application on time and under budget.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Product Manager at InnovateLabs",
    content:
      "Deepanshu's attention to detail and commitment to quality is exceptional. He not only delivered what we asked for but also suggested improvements that made our product even better.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Founder at StartupX",
    content:
      "I've worked with many developers, but Deepanshu stands out for his ability to understand business requirements and translate them into elegant technical solutions. Highly recommended!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, current])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section id="testimonials" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 rounded-2xl px-4 py-1 text-sm">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="w-full"
            >
              <Card className="border-none shadow-lg rounded-2xl bg-gradient-to-br from-secondary/50 to-background">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 relative">
                      <Avatar className="h-20 w-20 border-4 border-background">
                        <AvatarImage
                          src={testimonials[current].avatar || "/placeholder.svg"}
                          alt={testimonials[current].name}
                        />
                        <AvatarFallback>{testimonials[current].name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
                        <Quote className="h-4 w-4" />
                      </div>
                    </div>
                    <p className="text-lg md:text-xl italic mb-6 max-w-3xl">{testimonials[current].content}</p>
                    <h3 className="font-bold text-xl">{testimonials[current].name}</h3>
                    <p className="text-muted-foreground">{testimonials[current].role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
