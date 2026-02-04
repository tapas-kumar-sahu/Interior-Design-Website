import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    icon?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

export default function Button({
    children,
    variant = 'primary',
    icon = false,
    onClick,
    type = 'button',
    className = ''
}: ButtonProps) {
    const baseStyles = 'btn';
    const variantStyles = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        outline: 'btn-outline'
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
            {children}
            {icon && <ArrowRight className="w-5 h-5 text-primary" />}
        </button>
    );
}
