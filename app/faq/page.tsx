'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import Accordion from '@/components/ui/Accordion';

const generalFaqs = [
    {
        question: "What is the Hipcouch Interior Design Service?",
        answer: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised."
    },
    {
        question: "So, how exactly does this work?",
        answer: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised."
    },
    {
        question: "What cities do you currently operate in?",
        answer: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised."
    },
    {
        question: "Hipcouch Interior Design Service?",
        answer: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised."
    },
    {
        question: "What kind of interior designers do you have?",
        answer: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised."
    }
];

const projectFaqs = [
    {
        question: "How long does it take?",
        answer: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised."
    },
    {
        question: "Can I use my existing furnishings?",
        answer: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised."
    },
    {
        question: "I put into redesigning my interior?",
        answer: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised."
    },
    {
        question: "What do your services cost?",
        answer: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised."
    },
    {
        question: "Do you offer free consultations?",
        answer: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised."
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
                <section className="py-24">
                    <Container>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-display text-dark">Every Question Answered</h2>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <Accordion items={generalFaqs} />
                            </div>
                            <div className="order-1 lg:order-2 relative h-[500px] w-full">
                                <Image
                                    src="/faq/question-answer.jpg"
                                    alt="Questions and Answers"
                                    fill
                                    className="object-cover rounded-[50px]"
                                />
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Section 2: Project related questions */}
                <section className="py-24 bg-white">
                    <Container>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-display text-dark">Project related questions</h2>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="relative h-[500px] w-full">
                                <Image
                                    src="/faq/releated-question.jpg"
                                    alt="Project related questions"
                                    fill
                                    className="object-cover rounded-[50px]"
                                />
                            </div>
                            <div>
                                <Accordion items={projectFaqs} />
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
