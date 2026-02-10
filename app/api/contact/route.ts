import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { z } from 'zod'

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    subject: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters')
})

export async function POST(request: Request) {
    try {
        const body = await request.json()

        // Validate input
        const validatedData = contactSchema.parse(body)

        const lead = await prisma.lead.create({
            data: validatedData
        })

        return NextResponse.json({
            success: true,
            message: 'Thank you for your message. We will get back to you soon!',
            leadId: lead.id
        })
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: error.issues[0].message }, { status: 400 })
        }

        console.error('Contact submission error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
