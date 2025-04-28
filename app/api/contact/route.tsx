import { Resend } from "resend"
import { NextResponse } from "next/server"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = ContactSchema.parse(body)

    const data = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: "deepanshukumar1542004@gmail.com",
      replyTo: email,
      subject,
      html: `
        <strong>From:</strong> ${name} (${email})<br/>
        <strong>Message:</strong><br/>${message}
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Resend error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: error.errors }, { status: 400 })
    }

    // Log and return the actual error message from Resend
    const errorMessage = error instanceof Error ? error.message : "Unknown error"

    return NextResponse.json({ success: false, error: `Internal server error: ${errorMessage}` }, { status: 500 })
  }
}
