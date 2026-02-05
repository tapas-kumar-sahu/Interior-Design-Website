import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Container from './Container';

interface PageHeroProps {
    title?: string;
    image: string;
    breadcrumb?: {
        label: string;
        href?: string;
    }[];
}

export default function PageHero({ title, image, breadcrumb }: PageHeroProps) {
    return (
        <section className="relative h-[400px] flex items-end justify-center overflow-hidden">
            {/* Background Image */}
            <Image
                src={image}
                alt={title || 'Page Hero'}
                fill
                className="object-cover"
                priority
            />

            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Content Card */}
            {(title || breadcrumb) && <div className="relative z-10 text-center bg-white px-16 py-8 rounded-t-[40px] shadow-sm">
                {title && (
                    <h1 className="text-4xl md:text-5xl font-display text-dark mb-2">
                        {title}
                    </h1>
                )}

                {/* Breadcrumbs */}
                {breadcrumb && (
                    <div className="flex items-center justify-center gap-2">
                        {breadcrumb.map((item, index) => (
                            <React.Fragment key={index}>
                                {item.href ? (
                                    <Link
                                        href={item.href}
                                        className="text-secondary hover:text-dark transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="text-secondary">{item.label}</span>
                                )}
                                {index < breadcrumb.length - 1 && (
                                    <ChevronRight className="w-4 h-4 text-secondary" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                )}
            </div>}
        </section>
    );
}
