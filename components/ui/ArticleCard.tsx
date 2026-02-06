'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface ArticleCardProps {
    title: string;
    date: string;
    image: string;
    badge: string;
    href?: string;
    className?: string;
}

export default function ArticleCard({
    title,
    date,
    image,
    badge,
    href = '#',
    className = ''
}: ArticleCardProps) {
    return (
        <div
            className={`group rounded-[40px] p-6 transition-all duration-300 cursor-pointer border border-gray-200 hover:shadow-lg hover:bg-light-bg ${className}`}
        >
            {/* Article Image with Badge */}
            <div className="relative aspect-[1.5/1] mb-6 rounded-[30px] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-t-lg rounded-br-lg">
                    <span className="text-sm text-secondary">{badge}</span>
                </div>
            </div>

            {/* Article Title */}
            <h3 className="text-dark mb-6 leading-snug font-display text-xl md:text-2xl min-h-16 line-clamp-2">
                {title}
            </h3>

            {/* Date & Arrow */}
            <div className="flex items-center justify-between">
                <p className="text-secondary text-sm">{date}</p>
                <div className="w-10 h-10 rounded-full transition-colors flex items-center justify-center bg-light-bg group-hover:bg-white">
                    <ChevronRight className="w-5 h-5 text-dark" />
                </div>
            </div>
        </div>
    );
}
