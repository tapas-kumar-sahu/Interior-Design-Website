import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';

const brands = [
    { name: 'Brand 1', logo: '/brands/brand1.png' },
    { name: 'Brand 2', logo: '/brands/brand2.png' },
    { name: 'Brand 3', logo: '/brands/brand3.png' },
    { name: 'Brand 4', logo: '/brands/brand4.png' },
    { name: 'Brand 5', logo: '/brands/brand5.png' },
];

export default function Brands() {
    return (
        <section className="py-16">
            <Container>
                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                        >
                            <div className="relative w-32 h-16">
                                <Image
                                    src={brand.logo}
                                    alt={brand.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
