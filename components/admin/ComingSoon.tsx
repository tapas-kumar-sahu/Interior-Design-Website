import React from 'react';
import { Construction } from 'lucide-react';

interface ComingSoonProps {
    title: string;
    description?: string;
}

export default function ComingSoon({
    title,
    description = "We are currently building this management interface to give you full control over your content. Stay tuned!"
}: ComingSoonProps) {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-white rounded-[40px] border border-dark/5 shadow-sm">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Construction className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-display text-dark mb-3">{title}</h2>
            <p className="text-secondary max-w-md mx-auto leading-relaxed">
                {description}
            </p>

            <div className="mt-10 pt-10 border-t border-dark/5 w-full max-w-sm">
                <p className="text-xs text-secondary/40 uppercase tracking-widest font-bold">
                    Interno Admin System &bull; Version 0.1.0
                </p>
            </div>
        </div>
    );
}
