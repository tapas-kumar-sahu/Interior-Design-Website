import React from 'react';
import ProjectForm from '@/components/admin/ProjectForm';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function NewProjectPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-4">
                <Link
                    href="/admin/projects"
                    className="flex items-center gap-2 text-secondary hover:text-primary transition-colors text-sm font-medium group w-fit"
                >
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to portfolio
                </Link>
                <div>
                    <h2 className="text-3xl font-display text-dark">Create New Project</h2>
                    <p className="text-secondary mt-1">Fill in the details below to add a new work to your portfolio.</p>
                </div>
            </div>

            <ProjectForm />
        </div>
    );
}
