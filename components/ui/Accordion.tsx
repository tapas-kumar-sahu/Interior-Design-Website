'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="space-y-6">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="border-b border-light-bg pb-6"
                >
                    <button
                        className="w-full flex items-center justify-between text-left group"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className={`text-xl font-display transition-colors ${activeIndex === index ? 'text-primary' : 'text-dark group-hover:text-primary'}`}>
                            {item.question}
                        </span>
                        <div className="shrink-0 ml-4">
                            {activeIndex === index ? (
                                <Minus className="w-5 h-5 text-dark" />
                            ) : (
                                <Plus className="w-5 h-5 text-dark" />
                            )}
                        </div>
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 mt-6 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <p className="text-secondary leading-relaxed">
                            {item.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
