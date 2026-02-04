import React from 'react';

interface SectionHeadingProps {
    title: React.ReactNode;
    subtitle?: string;
    centered?: boolean;
    className?: string;
}

export default function SectionHeading({
    title,
    subtitle,
    centered = false,
    className = ''
}: SectionHeadingProps) {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
            <h2 className="text-4xl md:text-5xl font-display text-dark mb-4">{title}</h2>
            {subtitle && (
                <p className="text-secondary max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
