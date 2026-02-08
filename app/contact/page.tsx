'use client';

import React from 'react';
import { Mail, Phone, Globe, Facebook, Twitter, Linkedin, Instagram, MapPin } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import Button from '@/components/ui/Button';

export default function ContactPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Contact Us"
                    breadcrumb={[
                        { label: 'Home', href: '/' },
                        { label: 'Contact' }
                    ]}
                    image="/about/banner.jpg"
                />

                <section className="py-24">
                    <Container>
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-display text-dark text-center mb-20 max-w-3xl mx-auto leading-tight">
                                We love meeting new people and helping them.
                            </h2>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                                {/* Contact Info Card */}
                                <div className="lg:col-span-5 bg-light-bg rounded-[50px] p-8 md:p-12 space-y-10">
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-4 group">
                                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <span className="text-secondary text-lg">info@yourdomain.com</span>
                                        </div>
                                        <div className="flex items-center gap-4 group">
                                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <span className="text-secondary text-lg">+1 (378) 400-1234</span>
                                        </div>
                                        <div className="flex items-center gap-4 group">
                                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                                                <Globe className="w-5 h-5" />
                                            </div>
                                            <span className="text-secondary text-lg">www.yourdomain.com</span>
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex items-center gap-6 pt-6 justify-center lg:justify-start">
                                        <Link href="#" className="text-dark hover:text-primary transition-colors">
                                            <Facebook className="w-5 h-5" />
                                        </Link>
                                        <Link href="#" className="text-dark hover:text-primary transition-colors">
                                            <Twitter className="w-5 h-5" />
                                        </Link>
                                        <Link href="#" className="text-dark hover:text-primary transition-colors">
                                            <Linkedin className="w-5 h-5" />
                                        </Link>
                                        <Link href="#" className="text-dark hover:text-primary transition-colors">
                                            <Instagram className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Contact Form */}
                                <div className="lg:col-span-7">
                                    <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                className="w-full bg-transparent border-b border-dark/20 py-4 focus:border-primary outline-none transition-colors text-lg"
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className="w-full bg-transparent border-b border-dark/20 py-4 focus:border-primary outline-none transition-colors text-lg"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <input
                                                type="text"
                                                placeholder="Subject"
                                                className="w-full bg-transparent border-b border-dark/20 py-4 focus:border-primary outline-none transition-colors text-lg"
                                            />
                                            <input
                                                type="tel"
                                                placeholder="Phone"
                                                className="w-full bg-transparent border-b border-dark/20 py-4 focus:border-primary outline-none transition-colors text-lg"
                                            />
                                        </div>
                                        <textarea
                                            placeholder="Hello I am Intrested in.."
                                            rows={6}
                                            className="w-full bg-transparent border-b border-dark/20 py-4 focus:border-primary outline-none transition-colors resize-none text-lg"
                                        />

                                        <div className="flex justify-end pt-4">
                                            <Button type="submit" icon>
                                                Send Now
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Map Section */}
                <section className="py-24 overflow-hidden">
                    <Container>
                        <div className="relative w-full h-[500px] rounded-[50px] overflow-hidden shadow-2xl">
                            {/* Google Map with Dark Theme Filter */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280821886!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1675865231234!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2) brightness(0.8)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                            {/* Custom Brand Marker Over Map Center */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                <div className="relative">
                                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce">
                                        <MapPin className="text-white w-6 h-6" />
                                    </div>
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rotate-45 -mt-2 shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
