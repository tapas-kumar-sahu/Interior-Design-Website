import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import Container from '../ui/Container';

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="relative min-h-[600px] lg:min-h-[700px] flex items-center rounded-bl-[100px] overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/hero-banner.png"
                    alt="Beautiful modern living room interior"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Content Overlay */}
                <Container className="relative w-full px-6">
                    <div className="max-w-xl">
                        <h1 className="text-dark leading-tight mb-6 text-[50px] md:text-[65px] lg:text-[85px]">
                            Let Your Home<br />Be Unique
                        </h1>
                        <p className="text-secondary text-lg mb-10 max-w-sm md:max-w-md">
                            There are many variations of the passages of lorem Ipsum fromavailable,variations of the passages.
                        </p>
                        <Button icon>
                            Get Started
                        </Button>
                    </div>
                </Container>
            </div>
        </section>
    );
}
