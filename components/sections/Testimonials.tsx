import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Image from 'next/image';
import AnimateOnScroll from '../ui/AnimateOnScroll';

import prisma from '@/lib/prisma';

export default async function Testimonials() {
    const testimonials = await prisma.testimonial.findMany({
        orderBy: { createdAt: 'desc' }
    });

    if (!testimonials || testimonials.length === 0) return null;
    return (
        <section className="section">
            <Container>
                <div className='bg-light rounded-4xl px-8 py-16'>
                    <AnimateOnScroll>
                        <SectionHeading
                            title="What the People Thinks About Us"
                            centered
                        />
                    </AnimateOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {testimonials.map((testimonial: any, index: number) => (
                            <AnimateOnScroll
                                key={testimonial.id}
                                delay={index * 0.15}
                                distance={30}
                                className="bg-white p-8 rounded-4xl"
                            >
                                {/* Profile */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                                        {/* Avatar */}
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-dark font-body font-semibold">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-secondary text-sm">{testimonial.location}</p>
                                    </div>
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-secondary text-sm leading-relaxed">
                                    {testimonial.text}
                                </p>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
