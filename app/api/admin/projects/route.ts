import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { auth } from '@/auth';

// Create Project
export async function POST(request: Request) {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const project = await prisma.project.create({
            data: body
        });
        return NextResponse.json(project);
    } catch (error) {
        console.error('Project creation failed:', error);
        return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
    }
}
