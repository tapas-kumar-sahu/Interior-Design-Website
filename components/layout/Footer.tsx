import React from 'react';
import Container from '../ui/Container';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="py-10">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/Logo.svg"
                                    alt="Logo"
                                    width={24}
                                    height={24}
                                />
                                <span className="text-2xl font-display text-dark">Interno</span>
                            </div>
                        </div>
                        <p className="text-secondary text-sm mb-6">
                            It is a long established fact that a reader will be distracted lookings.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-light flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-light flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-light flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-light flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Pages */}
                    <div>
                        <h4 className="font-display text-dark mb-4">Pages</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-secondary hover:text-primary transition-colors text-sm">About Us</a></li>
                            <li><a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Our Projects</a></li>
                            <li><a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Our Team</a></li>
                            <li><a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Contact Us</a></li>
                            <li><a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Services</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-display text-dark mb-4">Services</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Kitchen</a></li>
                            <li><a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Living Area</a></li>
                            <li><a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Bathroom</a></li>
                            <li><a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Dinning Hall</a></li>
                            <li><a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Bedroom</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display text-dark mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="text-secondary text-sm">55 East Birchwood Ave. Brooklyn, New York 11201</li>
                            <li><a href="mailto:contact@interno.com" className="text-secondary hover:text-primary transition-colors text-sm">contact@interno.com</a></li>
                            <li><a href="tel:+1234567890" className="text-secondary hover:text-primary transition-colors text-sm">(123) 456 - 7890</a></li>
                        </ul>
                    </div>
                </div>
            </Container>
            {/* Copyright */}
            <div className="pt-8 border-t border-gray-100 text-center">
                <p className="text-secondary text-sm">
                    Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow
                </p>
            </div>
        </footer>
    );
}
