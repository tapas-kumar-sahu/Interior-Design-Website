'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Search, X } from 'lucide-react';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';

const projectsData: Record<string, any> = {
    '1': {
        title: 'Luxury Villa in Patia',
        client: 'Rajesh Mohapatra',
        category: 'Residential Interiors',
        tags: 'Modern, Luxury, Villa',
        date: '15 January, 2024',
        link: 'interno.in',
        description: [
            "This premium villa project in Patia, Bhubaneswar, reflects a perfect harmony between modern minimalist architecture and traditional Odia aesthetic touches. Our team focused on maximizing natural light and ventilation while maintaining a sophisticated, high-end look.",
            "The client requested a space that was both welcoming for family gatherings and highly functional for a modern lifestyle. We used premium, weather-resistant materials sourced locally to ensure longevity and style."
        ],
        mainImage: '/projects/project-detail-magnifying.jpg'
    },
    'default': {
        title: 'Modern Office in Infocity',
        client: 'Infotech Solutions',
        category: 'Commercial Interiors',
        tags: 'Corporate, Minimalist, Workspace',
        date: '20 October, 2023',
        link: 'interno.in',
        description: [
            "This corporate interior project in Infocity, Bhubaneswar, was designed to foster creativity and productivity among young tech professionals. The open-plan layout is balanced with private focus zones and vibrant collaborative spaces.",
            "We integrated smart lighting and ergonomic furniture to create a workspace that is as functional as it is visually inspiring, setting a new benchmark for office design in Odisha."
        ],
        mainImage: '/projects/project-detail-magnifying.jpg'
    }
};

export default function ProjectDetailPage() {
    const params = useParams();
    const id = params.id as string;
    const project = projectsData[id] || projectsData['default'];

    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    return (
        <>
            <Header />
            <main>
                <PageHero
                    image="/projects/project-detail-banner.jpg"
                />

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
                                        <span className="text-secondary">{project.tags}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-dark font-display text-xl mb-1">Date</span>
                                        <span className="text-secondary">{project.date}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-dark font-display text-xl mb-1">Link</span>
                                        <a href="#" className="text-secondary hover:text-primary transition-colors">{project.link}</a>
                                    </div>
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
                </section>

                {/* Lightbox Modal */}
                {isLightboxOpen && (
                    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 md:p-8">
                        <button
                            onClick={() => setIsLightboxOpen(false)}
                            className="absolute top-8 right-8 text-white hover:text-primary transition-colors z-110"
                        >
                            <X className="w-10 h-10" />
                        </button>
                        <div className="relative w-full max-w-7xl h-full flex items-center justify-center">
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
            </main>
            <Footer />
        </>
    );
}
