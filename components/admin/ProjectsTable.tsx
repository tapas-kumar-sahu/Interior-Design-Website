'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Edit,
    Trash2,
    Star,
    ExternalLink,
    MoreHorizontal
} from 'lucide-react';

interface Project {
    id: string;
    title: string;
    category: string;
    date: string;
    mainImage: string;
    isFeatured: boolean;
}

interface ProjectsTableProps {
    projects: Project[];
    onDelete: (id: string) => void;
}

export default function ProjectsTable({ projects, onDelete }: ProjectsTableProps) {
    return (
        <div className="bg-white rounded-[32px] border border-dark/5 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-light-bg border-b border-dark/5">
                            <th className="px-8 py-5 text-sm font-semibold text-secondary uppercase tracking-wider">Project</th>
                            <th className="px-8 py-5 text-sm font-semibold text-secondary uppercase tracking-wider">Category</th>
                            <th className="px-8 py-5 text-sm font-semibold text-secondary uppercase tracking-wider">Date</th>
                            <th className="px-8 py-5 text-sm font-semibold text-secondary uppercase tracking-wider text-center">Status</th>
                            <th className="px-8 py-5 text-sm font-semibold text-secondary uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-dark/5">
                        {projects.map((project) => (
                            <tr key={project.id} className="hover:bg-light-bg/50 transition-colors group">
                                <td className="px-8 py-5">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-16 h-12 rounded-lg overflow-hidden border border-dark/5">
                                            <Image
                                                src={project.mainImage}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-display text-dark group-hover:text-primary transition-colors">{project.title}</p>
                                            <Link
                                                href={`/project/${project.id}`}
                                                target="_blank"
                                                className="text-xs text-secondary/40 hover:text-primary flex items-center gap-1 mt-1"
                                            >
                                                View Live <ExternalLink className="w-3 h-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-5">
                                    <span className="text-secondary/70 text-sm">{project.category}</span>
                                </td>
                                <td className="px-8 py-5">
                                    <span className="text-secondary/70 text-sm">{project.date}</span>
                                </td>
                                <td className="px-8 py-5">
                                    <div className="flex justify-center">
                                        {project.isFeatured ? (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-medium border border-amber-100">
                                                <Star className="w-3 h-3 fill-current" />
                                                Featured
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 text-slate-500 text-xs font-medium border border-slate-100">
                                                Standard
                                            </span>
                                        )}
                                    </div>
                                </td>
                                <td className="px-8 py-5">
                                    <div className="flex items-center justify-end gap-2">
                                        <Link
                                            href={`/admin/projects/${project.id}/edit`}
                                            className="p-2 rounded-xl text-secondary/40 hover:text-primary hover:bg-primary/5 transition-all"
                                            title="Edit Project"
                                        >
                                            <Edit className="w-5 h-5" />
                                        </Link>
                                        <button
                                            onClick={() => onDelete(project.id)}
                                            className="p-2 rounded-xl text-secondary/40 hover:text-red-500 hover:bg-red-50 transition-all"
                                            title="Delete Project"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {projects.length === 0 && (
                <div className="py-20 text-center">
                    <p className="text-secondary/60">No projects found. Start by creating a new one!</p>
                </div>
            )}
        </div>
    );
}
