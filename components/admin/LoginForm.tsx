'use client';

import React, { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { Mail, Lock, Loader2, AlertCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

interface LoginFormProps {
    action: (formData: FormData) => void;
    error?: string;
}

export default function LoginForm({ action, error }: LoginFormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form action={action} className="space-y-6">
            <div className="space-y-4">
                {/* Email Field */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary" htmlFor="email">
                        Email Address
                    </label>
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/50">
                            <Mail className="w-5 h-5" />
                        </div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="admin@interno.in"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-light-bg border border-dark/10 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        />
                    </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary" htmlFor="password">
                        Password
                    </label>
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/50">
                            <Lock className="w-5 h-5" />
                        </div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-light-bg border border-dark/10 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        />
                    </div>
                </div>
            </div>

            {error && (
                <div className="flex items-center gap-2 text-red-500 bg-red-50 p-4 rounded-2xl border border-red-100">
                    <AlertCircle className="w-5 h-5" />
                    <p className="text-sm">{error}</p>
                </div>
            )}

            <SubmitButton />
        </form>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            className="w-full justify-center py-4"
            disabled={pending}
        >
            {pending ? (
                <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Authenticating...
                </>
            ) : (
                'Sign In'
            )}
        </Button>
    );
}
