'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const plans = [
    {
        title: "Design Consultation",
        price: "4,999",
        features: [
            "General living space advice",
            "Renovation consultation",
            "Interior design basic plan",
            "Furniture layout suggestions",
            "Up to 3 site visits"
        ],
        buttonVariant: "primary" as const
    },
    {
        title: "Master Plan",
        price: "24,999",
        features: [
            "Complete home layout design",
            "3D walkthrough of main areas",
            "Modular kitchen planning",
            "Lighting & electrical plan",
            "Selection of materials & textures"
        ],
        buttonVariant: "dark" as const,
        featured: true,
        badge: "Most Popular Plan"
    },
    {
        title: "Full Turnkey Solution",
        price: "99,999",
        features: [
            "End-to-end execution",
            "Custom furniture design",
            "Premium finish selection",
            "Vendor management",
            "Post-delivery support"
        ],
        buttonVariant: "primary" as const
    }
];

export default function PricingPage() {
    return (
        <>
            <Header />
            <main className="relative overflow-hidden">
                {/* Decorative Background Lines */}
                {/* <div className="absolute inset-0 pointer-events-none z-0">
                    <Container className="h-full border-x border-light-bg/30 relative">
                        <div className="absolute left-1/3 top-0 bottom-0 border-l border-light-bg/30" />
                        <div className="absolute left-2/3 top-0 bottom-0 border-l border-light-bg/30" />
                    </Container>
                </div> */}

                <PageHero
                    title="Pricing & Plan"
                    image="/pricing/pricing-banner.jpg"
                    breadcrumb={[
                        { label: 'Home', href: '/' },
                        { label: 'Pricing' }
                    ]}
                />

                <section className="py-24 relative z-10">
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {plans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`relative flex flex-col items-center text-center p-12 rounded-3xl transition-all duration-300 hover:shadow-xl ${plan.featured ? 'bg-white shadow-lg border border-primary/10' : 'bg-light-bg/50'}`}
                                >
                                    <h3 className="text-2xl font-display text-dark mb-6">
                                        {plan.title}
                                    </h3>

                                    <div className="flex items-start justify-center mb-8">
                                        <span className="text-2xl font-display text-dark mt-2">₹</span>
                                        <span className="text-7xl font-display text-primary">{plan.price}</span>
                                    </div>
                                    <span className="text-secondary font-display text-xl -mt-6 mb-8">onwards</span>

                                    {plan.featured && (
                                        <div className="w-full relative mb-12">
                                            <div className="absolute inset-0 flex items-center">
                                                <div className="w-full border-t border-dark/10"></div>
                                            </div>
                                            <div className="relative flex justify-center">
                                                <span className="bg-dark text-white text-sm py-2 px-6 rounded-full font-medium">
                                                    {plan.badge}
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {!plan.featured && <div className="h-px w-full border-t border-primary/20 mb-12" />}

                                    <ul className="space-y-4 mb-12 grow">
                                        {plan.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="text-secondary text-lg">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        icon
                                        variant={plan.buttonVariant === 'dark' ? 'primary' : 'secondary'}
                                    // Using variant secondary for the gold ones if available, 
                                    // or just styling appropriately
                                    >
                                        Get Started
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
