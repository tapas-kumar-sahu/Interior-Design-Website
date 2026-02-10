'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ProgressBar from '@/components/ui/ProgressBar';
import Accordion from '@/components/ui/Accordion';
import TeamMemberFlipCard from '@/components/ui/TeamMemberFlipCard';

interface TeamMemberDetailContentProps {
    member: {
        id: string;
        name: string;
        role: string;
        image: string;
        bio: string;
        email: string;
        phone: string;
        socials: any[];
    };
    allMembers: any[];
}

const qnaItems = [
    {
        question: 'How do you ensure design excellence in Odisha?',
        answer: 'We combine high-end design principles with meticulous local material selection, ensuring every project reflects premium standards while remaining durable in the regional climate.'
    },
    {
        question: 'How do you keep projects on track in Bhubaneswar?',
        answer: 'Our dedicated site supervisors and project managers in Bhubaneswar oversee daily progress, ensuring timelines are met without compromising on quality.'
    },
    {
        question: 'What is your specialty in regional interiors?',
        answer: 'We specialize in integrating traditional Odia elements—like stone work or ikat patterns—into sleek, modern minimalist frameworks.'
    }
];

export default function TeamMemberDetailContent({ member, allMembers }: TeamMemberDetailContentProps) {
    return (
        <>
            {/* Member Intro Section */}
            <section className="py-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                        {/* Portrait */}
                        <div className="lg:col-span-5">
                            <div className="relative aspect-[0.9/1] overflow-hidden rounded-[50px]">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Info */}
                        <div className="lg:col-span-7 space-y-8">
                            <div className="space-y-2">
                                <h1 className="text-4xl md:text-5xl font-display text-dark">{member.name}</h1>
                                <p className="text-secondary text-xl">{member.role}</p>
                            </div>
                            <p className="text-secondary leading-relaxed text-lg">
                                {member.bio}
                            </p>

                            {/* Contact List */}
                            <div className="space-y-6 pt-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-light-bg flex items-center justify-center text-primary shadow-sm">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span className="text-secondary text-lg">{member.email}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-light-bg flex items-center justify-center text-primary shadow-sm">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <span className="text-secondary text-lg">{member.phone}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-light-bg flex items-center justify-center text-primary shadow-sm">
                                        <Globe className="w-5 h-5" />
                                    </div>
                                    <span className="text-secondary text-lg">www.interno.in</span>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center gap-6 pt-6">
                                {member.socials.map((social: any, idx: number) => (
                                    <Link key={idx} href={social.url} className="text-dark hover:text-primary transition-colors">
                                        {social.platform === 'facebook' && <Facebook className="w-5 h-5" />}
                                        {social.platform === 'twitter' && <Twitter className="w-5 h-5" />}
                                        {social.platform === 'linkedin' && <Linkedin className="w-5 h-5" />}
                                        {social.platform === 'instagram' && <Instagram className="w-5 h-5" />}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Biography Section */}
            <section className="py-24">
                <Container>
                    <div className="space-y-16">
                        <div className="max-w-4xl space-y-8">
                            <h2 className="text-4xl font-display text-dark">Professional Journey</h2>
                            <p className="text-secondary leading-relaxed text-lg">
                                Our journey began in the heritage-rich city of Bhubaneswar with a simple mission: to elevate the standard of living through thoughtful, premium interior design. Today, we are proud to be the trusted partner for homeowners and businesses across Odisha.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                            {/* Skills */}
                            <div className="space-y-12">
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-display text-dark">Simplicity and Functionality</h3>
                                    <p className="text-secondary leading-relaxed text-lg">
                                        We believe in creating designs that are as functional as they are beautiful. Our process is collaborative and transparent.
                                    </p>
                                </div>
                                <div className="space-y-8">
                                    <ProgressBar label="Project Design" percentage={80} />
                                    <ProgressBar label="Team Management" percentage={95} />
                                    <ProgressBar label="Client Satisfaction" percentage={70} />
                                </div>
                            </div>

                            {/* Q&A */}
                            <div className="space-y-12">
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-display text-dark">Excellence and Quality</h3>
                                    <p className="text-secondary leading-relaxed text-lg">
                                        We believe that a beautiful space is the result of perfect balance between aesthetics and functionality.
                                    </p>
                                </div>
                                <Accordion items={qnaItems} />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Our Team Members Highlight Section */}
            <section className="py-24 bg-light-bg">
                <Container>
                    <div className="space-y-12 text-center">
                        <h2 className="text-4xl font-display text-dark">Our Team Members</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {allMembers.slice(0, 4).map((m) => (
                                <TeamMemberFlipCard
                                    key={m.id}
                                    id={m.id}
                                    name={m.name}
                                    role={m.role}
                                    image={m.image}
                                />
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Contact Me Form */}
            <section className="py-24">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-12 text-center">
                        <h2 className="text-4xl font-display text-dark">Contact Me</h2>
                        <form className="space-y-8 text-left" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                            <textarea
                                placeholder="Your Message"
                                rows={6}
                                className="w-full bg-transparent border-b border-dark/20 py-4 focus:border-primary outline-none transition-colors resize-none"
                            />
                            <div className="flex items-center gap-3 text-secondary text-sm">
                                <input type="checkbox" id="save-info" className="accent-primary" />
                                <label htmlFor="save-info">Save my name, email, and website in this browser for the next time I comment.</label>
                            </div>
                            <div className="flex justify-center pt-8">
                                <Button type="submit">
                                    Send Now
                                </Button>
                            </div>
                        </form>
                    </div>
                </Container>
            </section>
        </>
    );
}
