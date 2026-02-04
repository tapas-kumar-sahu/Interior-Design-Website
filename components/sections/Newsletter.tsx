'use client';

import React, { useState } from 'react';
import Container from '../ui/Container';
import { ArrowRight } from 'lucide-react';

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
                <div className="w-full mx-auto text-center bg-dark rounded-[70px] p-10">
                    <h2 className="text-white text-4xl mb-6" style={{ color: 'white' }}>
                        Wanna join the interno?
                    </h2>
                    <p className="mb-8">
                        It is a long established fact will be distracted.
                    </p>
                    <button
                        type="submit"
                        className="w-auto h-14 px-3 mx-auto text-white rounded-lg bg-primary hover:bg-primary/90 transition-colors flex items-center justify-center"
                        aria-label="Subscribe"
                    >Contact With Us
                        <ArrowRight className="w-5 h-5 text-dark pl-1" />
                    </button>
                </div>
            </Container>
        </section>
    );
}
