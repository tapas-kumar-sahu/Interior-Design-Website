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
        title: 'Minimal Look Bedrooms',
        client: 'Your client name',
        category: 'Interiors',
        tags: 'interior, Home',
        date: 'Date 23,02, 2022',
        link: 'Link example.com',
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
            "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor."
        ],
        mainImage: '/projects/project-detail-magnifying.jpg'
    },
    // Fallback/Default for other IDs
    'default': {
        title: 'Project Details',
        client: 'Internal Project',
        category: 'Interior Design',
        tags: 'Modern, Luxury',
        date: 'October 24, 2023',
        link: 'interno.com',
        description: [
            "This project showcases our commitment to elegance and functional design. Each element has been carefully curated to provide a harmonious living experience.",
            "We focus on sustainable materials and modern aesthetics to create spaces that are not only beautiful but also environmentally conscious."
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
