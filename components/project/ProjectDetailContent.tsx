'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, X } from 'lucide-react';
import Container from '@/components/ui/Container';

interface ProjectDetailContentProps {
    project: {
        title: string;
        client: string;
        category: string;
        tags: string[];
        date: string;
        link?: string;
        description: string[];
        mainImage: string;
    };
}

export default function ProjectDetailContent({ project }: ProjectDetailContentProps) {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    return (
        <section className="py-24">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-24">
                    {/* Metadata Sidebar */}
                    <div className="lg:col-span-4 bg-light-bg rounded-[50px] p-12">
                        <div className="space-y-8">
                            <div className="flex flex-col">
                                <span className="text-dark font-display text-xl mb-1">Client</span>
                                <span className="text-secondary">{project.client}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-dark font-display text-xl mb-1">Category</span>
                                <span className="text-secondary">{project.category}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-dark font-display text-xl mb-1">Tags</span>
                                <span className="text-secondary">{project.tags.join(', ')}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-dark font-display text-xl mb-1">Date</span>
                                <span className="text-secondary">{project.date}</span>
                            </div>
                            {project.link && (
                                <div className="flex flex-col">
                                    <span className="text-dark font-display text-xl mb-1">Link</span>
                                    <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">{project.link}</a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Content Description */}
                    <div className="lg:col-span-8">
                        <h2 className="text-4xl md:text-5xl font-display text-dark mb-8">
                            {project.title}
                        </h2>
                        <div className="space-y-6">
                            {project.description.map((para: string, i: number) => (
                                <p key={i} className="text-secondary text-lg leading-relaxed">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Image Showcase */}
                <div className="relative group cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
                    <div className="relative aspect-video w-full overflow-hidden rounded-[50px]">
                        <Image
                            src={project.mainImage}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Magnify Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500">
                                <Search className="w-10 h-10 text-primary" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Lightbox Modal */}
            {isLightboxOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 md:p-8">
                    <button
                        onClick={() => setIsLightboxOpen(false)}
                        className="absolute top-8 right-8 text-white hover:text-primary transition-colors z-110"
                    >
                        <X className="w-10 h-10" />
                    </button>
                    <div className="relative w-full max-w-7xl h-[80vh] flex items-center justify-center">
                        <div className="relative w-full h-full">
                            <Image
                                src={project.mainImage}
                                alt={project.title}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
