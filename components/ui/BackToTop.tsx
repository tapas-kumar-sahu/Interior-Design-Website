'use client';

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top coordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0, y: 50 }}
                    onClick={scrollToTop}
                    className="fixed z-9999 w-12 h-12 lg:w-16 lg:h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-[0_15px_35px_-10px_rgba(205,162,116,0.6)] hover:bg-dark border-2 border-white/10 transition-all duration-500 cursor-pointer"
                    style={{
                        position: 'fixed',
                        bottom: '2.5rem',
                        right: '2.5rem',
                        left: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    aria-label="Back to top"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronUp className="w-6 h-6 lg:w-8 lg:h-8" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
