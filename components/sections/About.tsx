import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Phone } from 'lucide-react';
import AnimateOnScroll from '../ui/AnimateOnScroll';

export default function About() {
    return (
        <section className="section">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <AnimateOnScroll direction="left" delay={0.2}>
                        <div className="space-y-8">
                            <h2 className="text-dark leading-tight">
                                We Create The Art<br />Of Stylish Living Stylishly
                            </h2>
                            <p className="text-secondary leading-relaxed">
                                It is a long established fact that a reader will be distracted by the of readable content of page when lookings at its layouts the points of using that it has a more-or-less normal.
                            </p>

                            {/* Phone Contact */}
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-light flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <div className="text-2xl font-semibold text-dark mb-1">012345678</div>
                                    <p className="text-secondary text-sm">Call Us Anytime</p>
                                </div>
                            </div>

                            <Button icon>
                                Get Free Estimate
                            </Button>
                        </div>
                    </AnimateOnScroll>

                    {/* Right Column - Image with Curved Edge */}
                    <AnimateOnScroll direction="right" delay={0.4}>
                        <div className="relative h-[500px] lg:h-[600px]">
                            <div
                                className="relative w-full h-full"
                            >
                                <Image
                                    src="/home/contact-section.png"
                                    alt="Modern kitchen interior design"
                                    fill
                                    className="object-cover rounded-tr-[200px] rounded-bl-[80px]"
                                />
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </Container>
        </section>
    );
}
