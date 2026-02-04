import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import Container from '../ui/Container';

export default function Hero() {
    return (
        <section className="relative bg-light min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
            <Container>
                <div className="relative z-10 max-w-xl py-20 lg:py-0">
                    {/* Text Content */}
                    <h1 className="text-dark leading-tight mb-6">
                        Let Your Home<br />Be Unique
                    </h1>
                    <p className="text-secondary text-lg mb-8 max-w-md">
                        There are many variations of the passages of lorem Ipsum fromavailable, variations of the passages.
                    </p>
                    <Button icon>
                        Get Started
                    </Button>
                </div>
            </Container>

            {/* Hero Image with Curved Edge - Positioned on Right */}
            <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%] xl:w-[60%]">
                {/* Curved mask using clip-path */}
                <div
                    className="relative w-full h-full"
                    style={{
                        clipPath: 'ellipse(100% 100% at 100% 50%)',
                    }}
                >
                    <Image
                        src="/hero-banner.png"
                        alt="Beautiful modern living room interior"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
