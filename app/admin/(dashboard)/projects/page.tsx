import React from 'react';
import prisma from '@/lib/prisma';
import ProjectsTable from '@/components/admin/ProjectsTable';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { deleteProjectAction } from '@/lib/actions/admin-projects';

export const dynamic = 'force-dynamic';

export default async function AdminProjectsPage() {
    const projects = await prisma.project.findMany({
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-display text-dark">Portfolio Management</h2>
                    <p className="text-secondary mt-1">Manage your studio&apos;s projects and showcased works.</p>
                </div>
                <Link href="/admin/projects/new">
                    <Button className="gap-2 px-6">
                        <Plus className="w-5 h-5" />
                        Add New Project
                    </Button>
                </Link>
            </div>

            <ProjectsTable
                projects={projects}
                onDelete={deleteProjectAction}
            />
        </div>
    );
}
