'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';

const categories = ['Bathroom', 'Bed Room', 'Kitchen', 'Living Area'];

const projectsData = [
    {
        id: 1,
        title: 'Minimal Bedroom',
        category: 'Bed Room',
        subCategory: 'Decor / Architecture',
        image: '/projects/project1.jpg',
    },
    {
        id: 2,
        title: 'Minimal Bedroom',
        category: 'Bed Room',
        subCategory: 'Decor / Architecture',
        image: '/projects/project2.jpg',
    },
    {
        id: 3,
        title: 'Classic Minimal Bedroom',
        category: 'Bed Room',
        subCategory: 'Decor / Architecture',
        image: '/projects/project3.jpg',
    },
    {
        id: 4,
        title: 'Modern Bedroom',
        category: 'Bed Room',
        subCategory: 'Decor / Architecture',
        image: '/projects/project4.jpg',
    },
    {
        id: 5,
        title: 'Minimal Bedroom table',
        category: 'Bed Room',
        subCategory: 'Decor / Architecture',
        image: '/projects/project1.jpg',
    },
    {
        id: 6,
        title: 'System Table',
        category: 'Bed Room',
        subCategory: 'Decor / Architecture',
        image: '/projects/project2.jpg',
    },
    {
        id: 7,
        title: 'Modern Bedroom',
        category: 'Bed Room',
        subCategory: 'Decor / Architecture',
        image: '/projects/project3.jpg',
    },
    {
        id: 8,
        title: 'Modern Bedroom',
        category: 'Bed Room',
        subCategory: 'Decor / Architecture',
        image: '/projects/project4.jpg',
    },
    // Adding some fake data for other categories
    {
        id: 9,
        title: 'Modern Bathroom',
        category: 'Bathroom',
        subCategory: 'Decor / Architecture',
        image: '/projects/project1.jpg',
    },
    {
        id: 10,
        title: 'Clean Kitchen',
        category: 'Kitchen',
        subCategory: 'Decor / Architecture',
        image: '/projects/project2.jpg',
    },
    {
        id: 11,
        title: 'Cozy Living Area',
        category: 'Living Area',
        subCategory: 'Decor / Architecture',
        image: '/projects/project3.jpg',
    }
];

export default function ProjectPage() {
    const [activeCategory, setActiveCategory] = useState('Bed Room');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredProjects = projectsData.filter(p => p.category === activeCategory);

    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Our Project"
                    image="/projects/banner.jpg"
                    breadcrumb={[
                        { label: 'Home', href: '/' },
                        { label: 'Project' }
                    ]}
                />

                <section className="py-24">
                    <Container>
                        {/* Category Filter */}
                        <div className="flex justify-center mb-16 px-4">
                            <div className="flex flex-wrap justify-center border border-primary rounded-2xl overflow-hidden p-1 md:p-0">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => {
                                            setActiveCategory(category);
                                            setCurrentPage(1);
                                        }}
                                        className={`rounded-xl px-4 md:px-8 py-3 md:py-4 text-sm md:text-lg font-medium transition-all duration-300 ${activeCategory === category
                                            ? 'bg-primary text-white shadow-lg'
                                            : 'text-dark hover:bg-light-bg'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-16">
                            {filteredProjects.map((project, index) => (
                                <div key={project.id} className="group cursor-pointer">
                                    <div className="relative overflow-hidden mb-6 rounded-t-[30px] rounded-b-none lg:rounded-none">
                                        {/* Dynamic Height Simulation for the masonry feel */}
                                        <div className={`relative w-full ${index % 4 === 1 || index % 4 === 2 ? 'aspect-4/5' : 'aspect-square'}`}>
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-2xl font-display text-dark">{project.title}</h3>
                                            <p className="text-secondary">{project.subCategory}</p>
                                        </div>
                                        <Link
                                            href={`/project/${project.id}`}
                                            className="w-12 h-12 rounded-full bg-light-bg flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition-all duration-300"
                                        >
                                            <ArrowRight className="w-5 h-5 text-dark" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center items-center gap-4">
                            {[1, 2, 3].map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-12 h-12 rounded-full border flex items-center justify-center text-lg font-medium transition-all duration-300 ${currentPage === page
                                        ? 'bg-light-bg border-none text-dark'
                                        : 'border-primary/20 text-dark hover:border-primary'
                                        }`}
                                >
                                    {page < 10 ? `0${page}` : page}
                                </button>
                            ))}
                            <button className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:border-primary transition-all duration-300 text-dark">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
