'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
        <motion.button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            {children}
            {icon && <ArrowRight className="w-5 h-5 text-primary" />}
        </motion.button>
    );
}
