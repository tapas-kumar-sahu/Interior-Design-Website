'use client';

import React, { useState } from 'react';
import Container from '../ui/Container';
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from '../ui/AnimateOnScroll';

export default function Newsletter() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter signup
        console.log('Newsletter signup:', email);
        setEmail('');
    };

    return (
        <section className="py-20">
            <Container>
                <AnimateOnScroll direction="up" distance={40} delay={0.2}>
                    <div className="w-full mx-auto text-center bg-dark rounded-[70px] p-10">
                        <h2 className="text-white text-4xl mb-6" style={{ color: 'white' }}>
                            Wanna join the interno?
                        </h2>
                        <p className="mb-8 text-secondary">
                            It is a long established fact will be distracted.
                        </p>
                        <button
                            type="submit"
                            className="w-auto h-14 px-8 mx-auto text-white rounded-lg bg-primary hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
                            aria-label="Subscribe"
                        >
                            Contact With Us
                            <ArrowRight className="w-5 h-5 text-dark group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}
