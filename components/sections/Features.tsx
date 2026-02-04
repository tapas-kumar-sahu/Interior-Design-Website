import React from 'react';
import Container from '../ui/Container';
import { Lightbulb, Palette, CheckCircle, ArrowRight } from 'lucide-react';

const features = [
    {
        icon: Lightbulb,
        title: 'Project Plan',
        description: 'There are many variations of the passages of lorem Ipsum from available, majority.',
    },
    {
        icon: Palette,
        title: 'Interior Work',
        description: 'There are many variations of the passages of lorem Ipsum from available, majority.',
    },
    {
        icon: CheckCircle,
        title: 'Realization',
        description: 'There are many variations of the passages of lorem Ipsum from available, majority.',
    },
];

export default function Features() {
    return (
        <section className="section">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="text-center p-8 hover:shadow-lg transition-shadow rounded-lg"
                            >
                                {/* Icon */}
                                <div className="mb-3 flex justify-center">
                                    <div className="w-16 h-16 flex items-center justify-center">
                                        <Icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="mb-4">{feature.title}</h3>

                                {/* Description */}
                                <p className="text-secondary mb-6 text-sm">
                                    {feature.description}
                                </p>

                                {/* Read More Link */}
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors text-sm font-medium"
                                >
                                    Read More
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
