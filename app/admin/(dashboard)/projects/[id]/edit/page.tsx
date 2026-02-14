'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import ProjectForm, { ProjectData } from '@/components/admin/ProjectForm';
import { Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

export default function EditProjectPage() {
    const params = useParams();
    const router = useRouter();
    const [project, setProject] = useState<ProjectData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProject() {
            try {
                const response = await fetch(`/api/admin/projects/${params.id}`);
                if (!response.ok) {
                    if (response.status === 404) {
                        toast.error('Project not found');
                        router.push('/admin/projects');
                        return;
                    }
                    throw new Error('Failed to fetch project');
                }
                const data = await response.json();
                setProject(data);
            } catch (error) {
                console.error(error);
                toast.error('Could not load project details');
            } finally {
                setLoading(false);
            }
        }

        if (params.id) {
            fetchProject();
        }
    }, [params.id, router]);

    if (loading) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
                <p className="text-secondary font-medium italic">Loading project details...</p>
            </div>
        );
    }

    if (!project) return null;

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            <div className="flex flex-col gap-2">
                <Link
                    href="/admin/projects"
                    className="text-primary hover:text-primary/70 transition-colors flex items-center gap-2 text-sm font-medium w-fit group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </Link>
                <h2 className="text-3xl font-display text-dark">Edit Project</h2>
                <p className="text-secondary">Update the details and imagery for &quot;{project.title}&quot;</p>
            </div>

            <ProjectForm initialData={project} />
        </div>
    );
}
