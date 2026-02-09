'use client';

import React from 'react';
import { Mail, Phone, Globe, Facebook, Twitter, Linkedin, Instagram, MapPin } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

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

                <section className="py-24 overflow-hidden">
                    <Container>
                        <div className="max-w-6xl mx-auto">
                            <AnimateOnScroll direction="up" delay={0.2}>
                                <h2 className="text-4xl md:text-5xl font-display text-dark text-center mb-20 max-w-3xl mx-auto leading-tight">
                                    We love meeting new people and helping them.
                                </h2>
                            </AnimateOnScroll>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                                {/* Contact Info Card */}
                                <AnimateOnScroll direction="left" delay={0.4} className="lg:col-span-5">
                                    <div className="bg-light-bg rounded-[50px] p-8 md:p-12 space-y-10 h-full">
                                        <div className="space-y-8">
                                            <div className="flex items-center gap-4 group">
                                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                                                    <Mail className="w-5 h-5" />
                                                </div>
                                                <span className="text-secondary text-lg">hello@interno.in</span>
                                            </div>
                                            <div className="flex items-center gap-4 group">
                                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                                                    <Phone className="w-5 h-5" />
                                                </div>
                                                <span className="text-secondary text-lg">+91 977 777 7777</span>
                                            </div>
                                            <div className="flex items-center gap-4 group">
                                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                                                    <Globe className="w-5 h-5" />
                                                </div>
                                                <span className="text-secondary text-lg">www.interno.in</span>
                                            </div>
                                        </div>

                                        {/* Social Links */}
                                        <div className="flex items-center gap-6 pt-6 justify-center lg:justify-start">
                                            <Link href="https://facebook.com" className="text-dark hover:text-primary transition-colors">
                                                <Facebook className="w-5 h-5" />
                                            </Link>
                                            <Link href="https://twitter.com" className="text-dark hover:text-primary transition-colors">
                                                <Twitter className="w-5 h-5" />
                                            </Link>
                                            <Link href="https://linkedin.com" className="text-dark hover:text-primary transition-colors">
                                                <Linkedin className="w-5 h-5" />
                                            </Link>
                                            <Link href="https://instagram.com" className="text-dark hover:text-primary transition-colors">
                                                <Instagram className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </AnimateOnScroll>

                                {/* Contact Form */}
                                <AnimateOnScroll direction="right" delay={0.4} className="lg:col-span-7">
                                    <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                className="w-full bg-transparent border-b border-dark/20 py-4 focus:border-primary outline-none transition-colors text-lg"
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                className="w-full bg-transparent border-b border-dark/20 py-4 focus:border-primary outline-none transition-colors text-lg"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <input
                                                type="text"
                                                name="subject"
                                                placeholder="Subject"
                                                className="w-full bg-transparent border-b border-dark/20 py-4 focus:border-primary outline-none transition-colors text-lg"
                                            />
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone"
                                                className="w-full bg-transparent border-b border-dark/20 py-4 focus:border-primary outline-none transition-colors text-lg"
                                            />
                                        </div>
                                        <textarea
                                            placeholder="Hello I am Interested in.."
                                            name="message"
                                            rows={6}
                                            className="w-full bg-transparent border-b border-dark/20 py-4 focus:border-primary outline-none transition-colors resize-none text-lg"
                                        />

                                        <div className="flex justify-end pt-4">
                                            <Button type="submit" icon>
                                                Send Now
                                            </Button>
                                        </div>
                                    </form>
                                </AnimateOnScroll>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Map Section */}
                <section className="py-24 overflow-hidden">
                    <Container>
                        <AnimateOnScroll direction="up" delay={0.2}>
                            <div className="relative w-full h-[500px] rounded-[50px] overflow-hidden shadow-2xl">
                                {/* Google Map centered on Saheed Nagar, Bhubaneswar */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1585465223447!2d85.84277737525301!3d20.293672012615462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909f1df7ef963%3A0xe54911d13f508272!2sSaheed%20Nagar%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
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
                        </AnimateOnScroll>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
