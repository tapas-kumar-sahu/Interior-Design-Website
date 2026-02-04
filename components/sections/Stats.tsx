import React from 'react';
import Container from '../ui/Container';

const stats = [
    {
        number: '12',
        label: 'Years Of Experiance',
    },
    {
        number: '85',
        label: 'Success Project',
    },
    {
        number: '15',
        label: 'Active Project',
    },
    {
        number: '95',
        label: 'Happy CUstomers',
    },
];

export default function Stats() {
    return (
        <section className="py-20 bg-light">
            <Container>
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
            </Container>
        </section>
    );
}
