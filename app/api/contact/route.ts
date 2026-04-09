import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { Resend } from "resend"

const resendApiKey = process.env.RESEND_API_KEY
const contactToEmail = process.env.CONTACT_TO_EMAIL || "kumar.sumit9981@gmail.com"
const contactFromEmail = process.env.CONTACT_FROM_EMAIL || "[Sumit K.C. Website] <onboarding@resend.dev>"

const resend = resendApiKey ? new Resend(resendApiKey) : null

const formSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(320),
  subject: z.string().trim().min(1).max(150),
  message: z.string().trim().min(1).max(5000),
})

type RateLimitEntry = {
  count: number
  expiresAt: number
}

const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS_PER_WINDOW = 5
const rateLimitStore = new Map<string, RateLimitEntry>()

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for")
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown"
  }

  return request.headers.get("x-real-ip") || "unknown"
}

function isRateLimited(key: string) {
  const now = Date.now()
  const existingEntry = rateLimitStore.get(key)

  if (!existingEntry || existingEntry.expiresAt <= now) {
    rateLimitStore.set(key, { count: 1, expiresAt: now + WINDOW_MS })
    return false
  }

  existingEntry.count += 1
  rateLimitStore.set(key, existingEntry)

  return existingEntry.count > MAX_REQUESTS_PER_WINDOW
}

export async function POST(request: NextRequest) {
  if (!resend) {
    console.error("Missing RESEND_API_KEY for contact API.")
    return NextResponse.json({ message: "Contact form is temporarily unavailable." }, { status: 500 })
  }

  const ip = getClientIp(request)
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: "Too many requests. Please wait a few minutes and try again." },
      { status: 429 },
    )
  }

  let requestData: unknown
  try {
    requestData = await request.json()
  } catch {
    return NextResponse.json({ message: "Invalid request payload." }, { status: 400 })
  }

  const parsedData = formSchema.safeParse(requestData)
  if (!parsedData.success) {
    return NextResponse.json({ message: "Please provide valid contact details." }, { status: 400 })
  }

  const { name, email, subject, message } = parsedData.data

  try {
    const { error } = await resend.emails.send({
      from: contactFromEmail,
      to: [contactToEmail],
      replyTo: email,
      subject: `${subject}`,
      text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    if (error) {
      console.error("Resend API error:", error)
      return NextResponse.json({ message: "Could not send message right now. Please try again." }, { status: 500 })
    }

    return NextResponse.json({ message: "Message sent successfully." }, { status: 200 })
  } catch (error) {
    console.error("Contact email send failed:", error)
    return NextResponse.json({ message: "Could not send message right now. Please try again." }, { status: 500 })
  }
}
