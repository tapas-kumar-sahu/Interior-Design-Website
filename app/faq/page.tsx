'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import Accordion from '@/components/ui/Accordion';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const generalFaqs = [
    {
        question: "How do I start my interior design project with Interno?",
        answer: "The process begins with an initial consultation where we discuss your vision, budget, and requirements. We then provide a customized design proposal specifically for your space in Bhubaneswar or across Odisha."
    },
    {
        question: "What is the typical timeline for a complete home renovation?",
        answer: "Timelines vary depending on the scope of work. Generally, a 3BHK apartment in Bhubaneswar takes about 45-60 days from design approval to handover."
    },
    {
        question: "Do you provide modular kitchen solutions in Odisha?",
        answer: "Yes, we specialize in premium, weather-resistant modular kitchens tailored for the local climate of Odisha, using high-quality materials and intelligent storage solutions."
    },
    {
        question: "What areas do you currently serve?",
        answer: "We are based in Saheed Nagar, Bhubaneswar, and serve clients across the city (Patia, Infocity, Khandagiri, etc.) as well as Cuttack, Puri, and other major districts in Odisha."
    },
    {
        question: "What sets Interno apart from other local designers in Bhubaneswar?",
        answer: "Our commitment to premium quality, transparent pricing, and a blend of global design standards with local cultural aesthetics makes us the preferred choice for sophisticated homes."
    }
];

const projectFaqs = [
    {
        question: "Can I use my existing furniture in the new design?",
        answer: "Absolutely. We can integrate your existing prized possessions into the new design through professional refurbishing or strategic placement to maintain sentimental value."
    },
    {
        question: "What kind of materials do you use for Odisha's humid climate?",
        answer: "We prioritize moisture-resistant plywood, anti-termite treatments, and high-quality coatings that are specifically tested for the environmental conditions of coastal Odisha."
    },
    {
        question: "Is there any warranty on the interior works?",
        answer: "Yes, we provide an extensive warranty on all our custom furniture and modular fittings, ensuring peace of mind for our Bhubaneswar clients."
    },
    {
        question: "Do you handle the entire execution (Turnkey) yourself?",
        answer: "Yes, our turnkey solution handles everything from plumbing and electrical to final decor, managed by our professional site supervisors in Bhubaneswar."
    },
    {
        question: "How do you handle budget management for the project?",
        answer: "We provide detailed, itemized quotes upfront with no hidden costs. Our team ensures that the design process stays within your agreed budget without compromising on quality."
    }
];

export default function FaqPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Faq's"
                    breadcrumb={[
                        { label: 'Home', href: '/' },
                        { label: 'Faq' }
                    ]}
                    image="/faq/banner.jpg"
                />

                {/* Section 1: Every Question Answered */}
                <section className="py-24 overflow-hidden">
                    <Container>
                        <AnimateOnScroll direction="up" delay={0.2}>
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-display text-dark">Every Question Answered</h2>
                            </div>
                        </AnimateOnScroll>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <AnimateOnScroll direction="left" delay={0.4} className="order-2 lg:order-1">
                                <Accordion items={generalFaqs} />
                            </AnimateOnScroll>

                            <AnimateOnScroll direction="right" delay={0.4} className="order-1 lg:order-2">
                                <div className="relative h-[500px] w-full">
                                    <Image
                                        src="/faq/question-answer.jpg"
                                        alt="Questions and Answers"
                                        fill
                                        className="object-cover rounded-[50px]"
                                    />
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </Container>
                </section>

                {/* Section 2: Project related questions */}
                <section className="py-24 bg-white overflow-hidden">
                    <Container>
                        <AnimateOnScroll direction="up" delay={0.2}>
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-display text-dark">Project related questions</h2>
                            </div>
                        </AnimateOnScroll>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <AnimateOnScroll direction="left" delay={0.4}>
                                <div className="relative h-[500px] w-full">
                                    <Image
                                        src="/faq/releated-question.jpg"
                                        alt="Project related questions"
                                        fill
                                        className="object-cover rounded-[50px]"
                                    />
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll direction="right" delay={0.4}>
                                <Accordion items={projectFaqs} />
                            </AnimateOnScroll>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
