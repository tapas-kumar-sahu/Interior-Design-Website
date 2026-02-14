'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export function useAuthActions() {
    const router = useRouter();

    async function authenticate(formData: FormData) {
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        try {
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                return 'Invalid credentials. Please try again.';
            }

            router.push('/admin');
            router.refresh();
        } catch (error) {
            return 'Something went wrong. Please try again.';
        }
    }

    return { authenticate };
}
