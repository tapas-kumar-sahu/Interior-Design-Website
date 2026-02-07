'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="grow flex items-center">
                <div className="container mx-auto px-6 h-full flex flex-col lg:flex-row items-center justify-between">
                    {/* Left: Error Message */}
                    <div className="w-full lg:w-1/2 space-y-8 py-20 lg:py-0 text-start">
                        <h1 className="text-[150px] md:text-[250px] font-display text-primary text-center leading-none select-none">
                            404
                        </h1>
                        <h2 className="text-3xl md:text-5xl font-display text-dark leading-tight max-w-md mx-auto lg:mx-0">
                            We are sorry, but the page you requested was not found
                        </h2>
                        <div className="pt-4 flex justify-center lg:justify-start">
                            <Link href="/">
                                <Button icon>
                                    Back To Home
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right: Decorative Image */}
                    <div className="w-full lg:w-1/2 relative h-[400px] md:h-[600px] lg:h-[80vh] overflow-hidden rounded-bl-[150px] md:rounded-bl-[300px]">
                        <Image
                            src="/404-image.jpg"
                            alt="Not Found Page interior"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
