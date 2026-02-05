'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Play, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import Brands from '@/components/sections/Brands';
import Stats from '@/components/sections/Stats';
import Button from '@/components/ui/Button';

// Dummy data for services to support dynamic routing
const servicesData: Record<string, { title: string }> = {
    'project-plan': { title: 'Project Plan' },
    'interior-work': { title: 'Interior Work' },
    'retail-design': { title: 'Retail Design' },
    'architect-service': { title: '24/7 Architect' },
    'decoration-work': { title: 'Decoration Work' },
    'lighting-design': { title: 'Lighting Design' },
};

export default function ServiceDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const service = servicesData[slug] || { title: 'Service Details' };
    const [isVideoOpen, setIsVideoOpen] = React.useState(false);

    return (
        <>
            <Header />
            <main>
                <PageHero
                    title={service.title}
                    image="/services/service-single-banner.jpg"
                    breadcrumb={[
                        { label: 'Home', href: '/' },
                        { label: 'Services', href: '/services' },
                        { label: service.title }
                    ]}
                />

                {/* Introduction Section */}
                <section className="py-24 bg-white">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                            <h2 className="text-4xl md:text-5xl font-display text-dark leading-tight">
                                We set the trends of <br /> modern living Services.
                            </h2>
                            <div className="space-y-6">
                                <p className="text-primary text-lg">
                                    It is a long established fact that a reader will be distracted by the of readable content of a page.
                                </p>
                                <p className="text-secondary leading-relaxed">
                                    When looking at its layout, the point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
                                </p>
                                <p className="text-secondary leading-relaxed">
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Brands Section */}
                <Brands />

                {/* Video Section */}
                <section className="py-12">
                    <Container>
                        <div className="relative h-[400px] md:h-[600px] w-full group overflow-hidden rounded-[50px]">
                            <Image
                                src="/services/video-preview.jpg.jpg"
                                alt="Video Preview"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    onClick={() => setIsVideoOpen(true)}
                                    className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 group/btn"
                                >
                                    <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                                </button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Video Modal */}
                {isVideoOpen && (
                    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 md:p-8">
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-8 right-8 text-white hover:text-primary transition-colors z-110"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
                            <iframe
                                className="w-full h-full border-0"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}

                {/* Features (Lists) Section */}
                <section className="py-24">
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
                            {/* Use of Interior */}
                            <div>
                                <h3 className="text-3xl font-display text-dark mb-8">Use of Interior</h3>
                                <ul className="space-y-4">
                                    {[
                                        "We provide high quality design services.",
                                        "Project on time and Latest Design.",
                                        "Scientific Skills For getting a better result.",
                                        "Renovations Benefit of Service.",
                                        "We are confident about our projects."
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <span className="text-primary font-display text-xl leading-none pt-1">{i + 1}</span>
                                            <p className="text-secondary">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Make An Art */}
                            <div>
                                <h3 className="text-3xl font-display text-dark mb-8">Make An Art</h3>
                                <ul className="space-y-4">
                                    {[
                                        "We provide high quality design services.",
                                        "Project on time and Latest Design.",
                                        "Scientific Skills For getting a better result.",
                                        "Renovations Benefit of Service.",
                                        "We are confident about our projects."
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <span className="text-primary font-display text-xl leading-none pt-1">{i + 1}</span>
                                            <p className="text-secondary">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Featured "We love design" Section */}
                <section className="py-24 bg-white">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Image with Custom Shape */}
                            <div className="relative h-[350px] w-full overflow-hidden rounded-[50px]">
                                <Image
                                    src="/services/featured-single.jpg"
                                    alt="Featured Interior"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="lg:pl-8">
                                <h2 className="text-4xl md:text-5xl font-display text-dark mb-6 leading-tight">
                                    We love design.That's <br /> how we got here.
                                </h2>
                                <p className="text-secondary text-lg mb-10 leading-relaxed">
                                    It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.
                                </p>
                                <Button icon>
                                    Our Portfolio
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Stats Section */}
                <Stats />

            </main>
            <Footer />
        </>
    );
}
