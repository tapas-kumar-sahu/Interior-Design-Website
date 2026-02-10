import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const limit = searchParams.get('limit')

        const posts = await prisma.post.findMany({
            take: limit ? parseInt(limit) : undefined,
            orderBy: { publishedAt: 'desc' }
        })

        return NextResponse.json(posts)
    } catch (error) {
        console.error('Failed to fetch posts:', error)
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
    }
}
