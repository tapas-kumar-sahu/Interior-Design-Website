'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuthActions } from '@/lib/actions/auth';
import LoginForm from '@/components/admin/LoginForm';

export default function AdminLoginPage() {
    const { authenticate } = useAuthActions();
    const [error, setError] = useState<string | undefined>();

    async function handleAction(formData: FormData) {
        setError(undefined);
        const result = await authenticate(formData);
        if (typeof result === 'string') {
            setError(result);
        }
    }

    return (
        <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side: Illustration & Branding */}
            <div className="hidden lg:flex flex-col justify-between bg-dark p-16 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <Link href="/" className="inline-block">
                        <span className="text-3xl font-display tracking-tight hover:text-primary transition-colors">
                            Interno.
                        </span>
                    </Link>
                </div>

                <div className="relative z-10 space-y-6 max-w-md">
                    <h1 className="text-5xl font-display leading-tight text-primary">
                        Experience the Art of Stylish Living.
                    </h1>
                    <p className="text-white/60 text-lg">
                        Manage your interior design portfolio, blog posts, and client leads from one sophisticated dashboard.
                    </p>
                </div>

                <div className="relative z-10 text-sm text-white/40">
                    &copy; {new Date().getFullYear()} Interno Interior Design Studio. All rights reserved.
                </div>

                {/* Decorative Pattern Background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(205,162,116,0.3),transparent_50%)]"></div>
                </div>
            </div>

            {/* Right Side: Login Form */}
            <div className="flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-sm space-y-12">
                    <div className="space-y-4 text-center lg:text-left">
                        <h2 className="text-4xl font-display text-dark">Welcome back</h2>
                        <p className="text-secondary">Please enter your administrators details.</p>
                    </div>

                    <LoginForm action={handleAction} error={error} />

                    <div className="text-center lg:text-left">
                        <Link href="/" className="text-sm text-secondary hover:text-primary transition-colors inline-flex items-center gap-2">
                            <span>&larr;</span> Back to website
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
