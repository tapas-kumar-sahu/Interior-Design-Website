'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimateOnScrollProps {
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    delay?: number;
    duration?: number;
    distance?: number;
    className?: string;
    once?: boolean;
}

export default function AnimateOnScroll({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.8,
    distance = 50,
    className = '',
    once = true
}: AnimateOnScrollProps) {
    const variants = {
        hidden: {
            opacity: 0,
            x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
            y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: duration,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98] as any, // Cast to any to bypass strict tuple check if needed, or explicitly [number, number, number, number]
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: once, margin: "-100px" }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
