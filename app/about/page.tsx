import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Container from '@/components/ui/Container';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

import SectionHeading from '@/components/ui/SectionHeading';

const teamMembers = [
    {
        name: "Nattasha Julie",
        role: "Design, Australia",
        image: "/about/person1.jpg",
        phone: "+1 (378) 400-1234",
        email: "julie@email.com"
    },
    {
        name: "David Smith",
        role: "Designer, USA",
        image: "/about/person2.png",
        phone: "+1 (378) 400-5678",
        email: "david@email.com"
    },
    {
        name: "Nattasha Julie",
        role: "Design, Australia",
        image: "/about/person3.png",
        phone: "+1 (378) 400-1234",
        email: "julie@email.com"
    },
    {
        name: "Sarah Jenkins",
        role: "Architect, UK",
        image: "/about/person4.jpg",
        phone: "+1 (378) 400-9012",
        email: "sarah@email.com"
    }
];

export default function AboutPage() {
    return (
        <main>
            {/* Hero/Banner Section */}
            <section className="relative h-[400px] flex items-end justify-center overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/about/banner.jpg"
                    alt="About Us Banner"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Content */}
                <div className="relative z-10 text-center rounded-t-2xl bg-white py-2 px-6">
                    {/* Page Title */}
                    <h1 className="text-3xl md:text-5xl font-display text-white mb-1">
                        About Us
                    </h1>

                    {/* Breadcrumb - White curved container */}
                    <div className="inline-flex items-center gap-2 bg-white pb-3">
                        <Link href="/" className="text-secondary hover:text-dark transition-colors text-sm">
                            Home
                        </Link>
                        <ChevronRight className="w-4 h-4 text-secondary" />
                        <span className="text-dark font-medium text-sm">About</span>
                    </div>
                </div>
            </section>


            {/* Quote/Testimonial Section */}
            <section className="py-24 bg-white font-dm-serif italic">
                <Container>
                    <div className="relative max-w-4xl mx-auto py-16 px-12 md:px-24">
                        {/* Left Bracket Decorator */}
                        <div className="absolute left-0 top-0 bottom-0 w-1/4 max-w-[200px] border-t-20 border-b-20 border-l-20 border-light-bg rounded-l-[50px] pointer-events-none" />

                        {/* Right Bracket Decorator */}
                        <div className="absolute right-0 top-0 bottom-0 w-1/4 max-w-[200px] border-t-20 border-b-20 border-r-20 border-light-bg rounded-r-[50px] pointer-events-none" />

                        <div className="relative z-10 text-center">
                            {/* Quotation Marks */}
                            <div className="mb-4">
                                <span className="text-6xl font-serif text-dark opacity-80">“</span>
                            </div>

                            {/* Quote Text */}
                            <blockquote className="mb-8">
                                <p className="text-xl md:text-2xl lg:text-3xl font-display italic text-dark leading-snug max-w-3xl mx-auto">
                                    I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it
                                </p>
                            </blockquote>

                            {/* Author */}
                            <div className="mt-6">
                                <p className="text-base md:text-lg text-secondary tracking-widest font-body uppercase not-italic">
                                    -BUNNY WILLIAMS
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* What We Do Section */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center mb-20">
                        {/* Text Content */}
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-5xl font-display text-dark mb-6 leading-tight">
                                What We Do
                            </h2>
                            <p className="text-secondary mb-8 leading-relaxed text-lg">
                                It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts points of using that it has a more-or-less normal.
                            </p>
                            <Button icon>
                                Our Concept
                                {/* <ArrowRight className="w-5 h-5 text-primary ml-1" /> */}
                            </Button>
                        </div>

                        {/* Image Content */}
                        <div className="relative h-[250px] md:h-[250px] lg:h-[300px] w-full">
                            <Image
                                src="/about/what-we-do.jpg"
                                alt="What We Do interior design"
                                fill
                                className="object-cover rounded-[50px]"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
                        {/* Image Content */}
                        <div className="relative h-[250px] md:h-[250px] lg:h-[300px] w-full">
                            <Image
                                src="/about/the-end-result.jpg"
                                alt="The End Result interior design"
                                fill
                                className="object-cover rounded-[50px]"
                            />
                        </div>
                        {/* Text Content */}
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-5xl font-display text-dark mb-6 leading-tight">
                                The End Result
                            </h2>
                            <p className="text-secondary mb-8 leading-relaxed text-lg">
                                It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts points of using that it has a more-or-less normal.
                            </p>
                            <Button icon>
                                Our Portfolio
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* What the People Thinks About Us Section */}
            <section className="py-24 bg-light">
                <Container>
                    <SectionHeading
                        title={<>What the People Thinks<br />About Us</>}
                        centered
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="group perspective-1000 h-[400px]">
                                <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                                    {/* Front Side (Image) */}
                                    <div className="absolute inset-0 backface-hidden rotate-y-0 translate-z-front z-20">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover rounded-[30px]"
                                        />
                                    </div>

                                    {/* Back Side (Details) */}
                                    <div className="absolute inset-0 backface-hidden rotate-y-back bg-white rounded-[30px] p-8 flex flex-col items-center justify-center text-center shadow-lg border border-gray-100 z-10">
                                        <h3 className="text-2xl font-display text-dark mb-1">{member.name}</h3>
                                        <p className="text-secondary text-sm mb-6">{member.role}</p>

                                        <div className="flex gap-4 mb-8">
                                            <a href="#" className="text-dark hover:text-primary transition-colors">
                                                <Facebook className="w-5 h-5" />
                                            </a>
                                            <a href="#" className="text-dark hover:text-primary transition-colors">
                                                <Twitter className="w-5 h-5" />
                                            </a>
                                            <a href="#" className="text-dark hover:text-primary transition-colors">
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                            <a href="#" className="text-dark hover:text-primary transition-colors">
                                                <Instagram className="w-5 h-5" />
                                            </a>
                                        </div>

                                        <div className="text-secondary text-sm space-y-1">
                                            <p>{member.phone}</p>
                                            <p>{member.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Contact Form Section */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <SectionHeading
                            title={<>Creative project? <br /> Let's have a productive talk.</>}
                            centered
                            className="mb-12"
                        />

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-transparent border-b border-dark/20 py-4 focus:border-primary outline-none transition-colors"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-transparent border-b border-dark/20 py-4 focus:border-primary outline-none transition-colors"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full bg-transparent border-b border-dark/20 py-4 focus:border-primary outline-none transition-colors"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    className="w-full bg-transparent border-b border-dark/20 py-4 focus:border-primary outline-none transition-colors"
                                />
                            </div>
                            <textarea
                                placeholder="Hello, I am interested in.."
                                rows={6}
                                className="w-full bg-transparent border-b border-dark/20 py-4 focus:border-primary outline-none transition-colors resize-none"
                            ></textarea>

                            <div className="flex justify-center pt-8">
                                <Button type="submit" icon>
                                    Send Now
                                </Button>
                            </div>
                        </form>
                    </div>
                </Container>
            </section>

            {/* Footer */}
            <Footer />
        </main >
    );
}
