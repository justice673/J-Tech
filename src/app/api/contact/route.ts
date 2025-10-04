import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const ContactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

// Basic in-memory rate limit (per instance) to prevent spam bursts
const submissionWindowMs = 60_000
let lastSubmissionTimestamps: number[] = []
const MAX_SUBMISSIONS_PER_WINDOW = 5

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = ContactSchema.parse(body)

    const now = Date.now()
    lastSubmissionTimestamps = lastSubmissionTimestamps.filter(ts => now - ts < submissionWindowMs)
    if (lastSubmissionTimestamps.length >= MAX_SUBMISSIONS_PER_WINDOW) {
      return NextResponse.json({ error: 'Too many submissions, please wait a minute.' }, { status: 429 })
    }
    lastSubmissionTimestamps.push(now)

    // Ensure required env vars
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
      console.error('Missing email environment variables')
      return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465, // true for 465, false for others
      auth: { user: SMTP_USER, pass: SMTP_PASS }
    })

    const mail = await transporter.sendMail({
      from: `Portfolio Contact <${SMTP_USER}>`,
      to: CONTACT_TO,
      subject: `New message from ${validatedData.name}`,
      replyTo: validatedData.email,
      text: `Name: ${validatedData.name}\nEmail: ${validatedData.email}\n\n${validatedData.message}`,
      html: `
        <h2 style="font-family:system-ui,Arial,sans-serif;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p style="white-space:pre-line;">${validatedData.message}</p>
        <hr />
        <small>Sent from J-Tech portfolio</small>
      `
    })

    return NextResponse.json({ message: 'Message sent successfully!', id: mail.messageId })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.issues },
        { status: 400 }
      )
    }
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
