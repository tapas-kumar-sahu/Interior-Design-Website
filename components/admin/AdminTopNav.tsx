'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { User, Bell } from 'lucide-react';

export default function AdminTopNav() {
    const { data: session } = useSession();

    return (
        <header className="h-20 bg-white border-b border-dark/5 flex items-center justify-between px-8 sticky top-0 z-20">
            <div>
                <h3 className="text-xl font-display text-dark">Dashboard</h3>
            </div>

            <div className="flex items-center gap-6">
                {/* Notifications Placeholder */}
                <button className="text-secondary/60 hover:text-primary transition-colors relative p-2">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
                </button>

                {/* Vertical Divider */}
                <div className="w-px h-6 bg-dark/10"></div>

                {/* User Profile */}
                <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-semibold text-dark leading-tight">
                            {session?.user?.name || 'Interno Admin'}
                        </p>
                        <p className="text-xs text-secondary/70">
                            Super Administator
                        </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-light-bg border border-dark/5 flex items-center justify-center text-primary">
                        <User className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </header>
    );
}
