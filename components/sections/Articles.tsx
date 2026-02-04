'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { ChevronRight } from 'lucide-react';

const articles = [
    {
        title: "Let's Get Solution For Building Construction Work",
        date: '26 December, 2022',
        image: '/articles/article1.jpg',
        badge: 'Kitchen Design',
    },
    {
        title: 'Low Cost Latest Invented Interior Designing Ideas.',
        date: '22 December, 2022',
        image: '/articles/article2.jpg',
        badge: 'Living Design',
    },
    {
        title: 'Best For Any Office & Business Interior Solution',
        date: '25 December, 2022',
        image: '/articles/article3.jpg',
        badge: 'Interior Design',
    },
];

export default function Articles() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(1); // Default middle card active

    return (
        <section className="section">
            <Container>
                <SectionHeading
                    title="Articles & News"
                    subtitle="It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using."
                    centered
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {articles.map((article, index) => (
                        <div
                            key={index}
                            className="group rounded-4xl p-6 transition-all duration-300 cursor-pointer border border-gray-200 hover:shadow-lg hover:bg-light-bg"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(1)} // Return to middle card
                        >
                            {/* Article Image with Badge */}
                            <div className="relative h-64 mb-6 rounded-t-4xl overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover"
                                />
                                {/* Badge */}
                                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-t-lg rounded-br-lg">
                                    <span className="text-sm text-dark">{article.badge}</span>
                                </div>
                            </div>

                            {/* Article Title */}
                            <h3 className="text-dark mb-6 leading-snug font-display text-xl">
                                {article.title}
                            </h3>

                            {/* Date & Arrow */}
                            <div className="flex items-center justify-between">
                                <p className="text-secondary text-sm">{article.date}</p>
                                <div className="w-10 h-10 rounded-full transition-colors flex items-center justify-center bg-light-bg group-hover:bg-white">
                                    <ChevronRight className="w-5 h-5 text-dark" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
