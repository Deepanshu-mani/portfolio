"use server"

// Define the type for our chat messages
export type Message = {
  role: "user" | "assistant"
  content: string
}

// Sample responses for common questions
const sampleResponses: Record<string, string> = {
  hello: "Hello! How can I help you today?",
  hi: "Hi there! How can I assist you with the portfolio?",
  "who are you":
    "I'm a virtual assistant for this portfolio website. I can tell you about the developer's skills, projects, and experience!",
  skills:
    "The developer specializes in React, Next.js, TypeScript, and modern web development frameworks. They're also proficient in UI/UX design, backend development with Node.js, and database management.",
  contact:
    "You can reach out through the contact form in the Contact section, or directly via email at the address listed there.",
  projects:
    "The portfolio showcases several projects including web applications, mobile apps, and UI/UX designs. Each project demonstrates different skills and technologies.",
  experience:
    "The developer has several years of experience building web applications, with expertise in frontend development, responsive design, and modern JavaScript frameworks.",
  default:
    "I'm not sure about that, but I'd be happy to help with questions about the portfolio, skills, or projects. You can also use the contact form for specific inquiries.",
}

export async function chatWithAI(messages: Message[]): Promise<string> {
  try {
    // Add a small delay to simulate processing
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Get the last user message
    const userMessage = messages[messages.length - 1].content.toLowerCase()

    // Check for keywords in the user's message
    for (const [keyword, response] of Object.entries(sampleResponses)) {
      if (userMessage.includes(keyword)) {
        return response
      }
    }

    // If no keywords match, provide a default response
    if (userMessage.includes("project")) {
      return "The portfolio includes several impressive projects that demonstrate technical skills and creativity. Each project has details about the technologies used and links to live demos."
    } else if (userMessage.includes("work")) {
      return "The developer has worked on a variety of projects, from e-commerce platforms to real-time applications and mobile apps. The Projects section showcases some of the best work."
    } else if (userMessage.includes("hire")) {
      return "If you're interested in hiring the developer, please use the contact form in the Contact section. Include details about your project for a faster response!"
    }

    return sampleResponses.default
  } catch (error) {
    console.error("Error in chat:", error)
    return "I'm having trouble processing your request. Please try again or use the contact form."
  }
}
