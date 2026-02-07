'use client';

import React from 'react';

interface ProgressBarProps {
    label: string;
    percentage: number;
}

export default function ProgressBar({ label, percentage }: ProgressBarProps) {
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center text-dark font-display text-lg">
                <span>{label}</span>
                <span>{percentage}%</span>
            </div>
            <div className="h-2 bg-light-bg rounded-full overflow-hidden">
                <div
                    className="h-full bg-primary transition-all duration-1000 ease-out"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}
