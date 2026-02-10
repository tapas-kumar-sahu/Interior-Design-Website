'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const categories = ['All', 'Bathroom', 'Bed Room', 'Kitchen', 'Living Area', 'Residential Interiors', 'Commercial Interiors'];

export const dynamic = 'force-dynamic';

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch('/api/projects');
                const data = await res.json();
                setProjects(data);
            } catch (error) {
                console.error('Failed to fetch projects:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

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
                        <AnimateOnScroll direction="up" delay={0.2}>
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
                        </AnimateOnScroll>

                        {/* Projects Grid */}
                        {loading ? (
                            <div className="flex justify-center py-24">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                            </div>
                        ) : filteredProjects.length === 0 ? (
                            <div className="text-center py-24">
                                <p className="text-secondary">No projects found for this category.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-16">
                                {filteredProjects.map((project, index) => (
                                    <AnimateOnScroll
                                        key={`${project.id}`}
                                        delay={(index % 4) * 0.1}
                                        distance={30}
                                    >
                                        <div className="group cursor-pointer">
                                            <div className="relative overflow-hidden mb-6 rounded-t-[30px] rounded-b-none lg:rounded-none">
                                                <div className={`relative w-full ${index % 4 === 1 || index % 4 === 2 ? 'aspect-4/5' : 'aspect-square'}`}>
                                                    <Image
                                                        src={project.mainImage}
                                                        alt={project.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h3 className="text-2xl font-display text-dark">{project.title}</h3>
                                                    <p className="text-secondary">{project.category}</p>
                                                </div>
                                                <Link
                                                    href={`/project/${project.id}`}
                                                    className="w-12 h-12 rounded-full bg-light-bg flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition-all duration-300"
                                                >
                                                    <ArrowRight className="w-5 h-5 text-dark" />
                                                </Link>
                                            </div>
                                        </div>
                                    </AnimateOnScroll>
                                ))}
                            </div>
                        )}

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
