import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const featured = searchParams.get('featured')

        const projects = await prisma.project.findMany({
            where: featured === 'true' ? { isFeatured: true } : {},
            orderBy: { createdAt: 'desc' }
        })

        return NextResponse.json(projects)
    } catch (error) {
        console.error('Failed to fetch projects:', error)
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
    }
}
