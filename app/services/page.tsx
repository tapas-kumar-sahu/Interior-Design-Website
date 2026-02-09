import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import PageHero from '@/components/ui/PageHero';
import Newsletter from '@/components/sections/Newsletter';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

interface Service {
    title: string;
    slug: string;
    description: string;
    featured?: boolean;
}

const services: Service[] = [
    {
        title: "Project Plan",
        slug: "project-plan",
        description: "There are many variations of the passages of lorem Ipsum from available, majority."
    },
    {
        title: "Interior Work",
        slug: "interior-work",
        description: "There are many variations of the passages of lorem Ipsum from available, majority."
    },
    {
        title: "Retail Design",
        slug: "retail-design",
        description: "There are many variations of the passages of lorem Ipsum from available, majority."
    },
    {
        title: "24/7 Architect",
        slug: "architect-service",
        description: "There are many variations of the passages of lorem Ipsum from available, majority."
    },
    {
        title: "Decoration Work",
        slug: "decoration-work",
        description: "There are many variations of the passages of lorem Ipsum from available, majority.",
        featured: true
    },
    {
        title: "Lighting Design",
        slug: "lighting-design",
        description: "There are many variations of the passages of lorem Ipsum from available, majority."
    }
];

const steps = [
    {
        number: "01",
        title: "Concept & Details",
        description: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.",
        image: "/services/step1.jpg",
        icon: "/services/step1-icon.svg"
    },
    {
        number: "02",
        title: "Idea for Work",
        description: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.",
        image: "/services/step2.jpg",
        icon: "/services/step2-icon.svg"
    },
    {
        number: "03",
        title: "Design",
        description: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.",
        image: "/services/step3.jpg",
        icon: "/services/step3-icon.svg"
    },
    {
        number: "04",
        title: "Perfection",
        description: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.",
        image: "/services/step4.jpg",
        icon: "/services/step4-icon.svg"
    }
];

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Services"
                    image="/services/banner.jpg"
                    breadcrumb={[
                        { label: 'Home', href: '/' },
                        { label: 'Services' }
                    ]}
                />

                {/* Services Grid */}
                <section className="py-24 bg-white">
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                            {services.map((service, index) => (
                                <AnimateOnScroll
                                    key={index}
                                    delay={index * 0.1}
                                    distance={20}
                                >
                                    <div
                                        className={`p-12 rounded-[30px] transition-all duration-300 group hover:bg-light-bg text-center ${service.featured ? 'bg-light-bg' : ''}`}
                                    >
                                        <h3 className="text-2xl font-display text-dark mb-4">
                                            {service.title}
                                        </h3>
                                        <p className="text-secondary mb-8 leading-relaxed">
                                            {service.description}
                                        </p>
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="inline-flex items-center gap-2 text-dark font-semibold hover:text-primary transition-colors"
                                        >
                                            Read More
                                            <ArrowRight className="w-5 h-5 text-primary" />
                                        </Link>
                                    </div>
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* How We Work Section */}
                <section className="py-24 overflow-hidden">
                    <Container>
                        <div className="bg-light-bg rounded-[70px] py-24 px-8 md:px-24">
                            <AnimateOnScroll direction="up" delay={0.2}>
                                <div className="text-center max-w-3xl mx-auto mb-20">
                                    <h2 className="text-4xl md:text-5xl font-display text-dark mb-6">How We Work</h2>
                                    <p className="text-secondary text-lg">
                                        It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.
                                    </p>
                                </div>
                            </AnimateOnScroll>

                            <div className="space-y-24">
                                {steps.map((step, index) => (
                                    <div
                                        key={index}
                                        className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-32`}
                                    >
                                        {/* Image with Leaf Shape */}
                                        <AnimateOnScroll
                                            direction={index % 2 === 0 ? 'left' : 'right'}
                                            delay={0.2}
                                            className="flex-1 w-full"
                                        >
                                            <div className={`relative h-[400px] w-full overflow-hidden rounded-tr-[100px] rounded-bl-[250px]`}>
                                                <Image
                                                    src={step.image}
                                                    alt={step.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </AnimateOnScroll>

                                        {/* Text Content */}
                                        <AnimateOnScroll
                                            direction={index % 2 === 0 ? 'right' : 'left'}
                                            delay={0.4}
                                            className="flex-1 relative"
                                        >
                                            {/* Large Number Background */}
                                            <div className="absolute top-0 right-0 lg:-top-12 lg:-right-4 text-[120px] md:text-[180px] font-display text-white pointer-events-none select-none leading-none z-0">
                                                {step.number}
                                            </div>

                                            <div className="relative z-10 pt-4">
                                                {/* Step Icon */}
                                                <div className="mb-6">
                                                    <Image
                                                        src={step.icon}
                                                        alt="icon"
                                                        width={50}
                                                        height={50}
                                                        className="opacity-70"
                                                    />
                                                </div>
                                                <h3 className="text-3xl font-display text-dark mb-4">
                                                    {step.title}
                                                </h3>
                                                <p className="text-secondary text-lg leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Newsletter/CTA */}
                <Newsletter />

                {/* Footer */}
                <Footer />
            </main>
        </>
    );
}
