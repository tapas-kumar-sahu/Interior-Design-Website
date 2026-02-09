import React from 'react';
import Container from '../ui/Container';
import AnimateOnScroll from '../ui/AnimateOnScroll';

const stats = [
    {
        number: '12',
        label: 'Years of Experience',
    },
    {
        number: '85',
        label: 'Success Projects',
    },
    {
        number: '15',
        label: 'Active Projects',
    },
    {
        number: '95',
        label: 'Happy Customers',
    },
];

export default function Stats() {
    return (
        <section className="py-20 bg-light">
            <Container>
                <AnimateOnScroll direction="up" distance={30} delay={0.2}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center border-r border-primary/20 last:border-r-0"
                            >
                                <div className="text-5xl md:text-6xl font-display text-primary mb-2">
                                    {stat.number}
                                </div>
                                <p className="text-secondary text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}
