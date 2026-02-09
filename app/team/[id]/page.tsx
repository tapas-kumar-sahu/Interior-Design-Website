'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import Button from '@/components/ui/Button';
import ProgressBar from '@/components/ui/ProgressBar';
import Accordion from '@/components/ui/Accordion';

import TeamMemberFlipCard from '@/components/ui/TeamMemberFlipCard';

// Mock data for team members
const teamData: Record<string, any> = {
    '1': {
        name: 'Subhashree Dash',
        role: 'Senior Designer, Bhubaneswar',
        image: '/team/member1.png',
        bio: 'With over 8 years of experience in the Odisha interior design market, Subhashree specializes in blending modern minimalism with traditional aesthetics. She has led numerous luxury villa projects in Patia and Jayadev Vihar.',
        email: 'subhashree@interno.in',
        phone: '+91 977 777 7777',
        website: 'www.interno.in',
        socials: [
            { platform: 'facebook', url: 'https://facebook.com' },
            { platform: 'twitter', url: 'https://twitter.com' },
            { platform: 'linkedin', url: 'https://linkedin.com' },
            { platform: 'instagram', url: 'https://instagram.com' }
        ]
    },
    'default': {
        name: 'Biswajit Mohanty',
        role: 'Lead Architect, Odisha',
        image: '/team/member2.png',
        bio: 'Biswajit is a visionary architect dedicated to creating sustainable and functional spaces across Bhubaneswar. His expertise in material sourcing within Odisha ensures premium quality for every turnkey project.',
        email: 'biswajit@interno.in',
        phone: '+91 977 777 7777',
        website: 'www.interno.in',
        socials: [
            { platform: 'facebook', url: 'https://facebook.com' },
            { platform: 'twitter', url: 'https://twitter.com' },
            { platform: 'linkedin', url: 'https://linkedin.com' }
        ]
    }
};

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

export default function TeamSinglePage() {
    const params = useParams();
    const id = params.id as string;
    const member = teamData[id] || teamData['default'];

    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Professional Single"
                    breadcrumb={[
                        { label: 'Home', href: '/' },
                        { label: 'Team Single' }
                    ]}
                    image="/team/single-banner.png"
                />

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
                                        <span className="text-secondary text-lg">{member.website}</span>
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
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus.
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

                {/* Our Team Members Highlight Section (Mockup based on design) */}
                <section className="py-24 bg-light-bg">
                    <Container>
                        <div className="space-y-12 text-center">
                            <h2 className="text-4xl font-display text-dark">Our Team Members</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { id: '1', name: 'Subhashree Dash', role: 'Senior Designer, Bhubaneswar', image: '/team/member1.png' },
                                    { id: '2', name: 'Biswajit Mohanty', role: 'Lead Architect, Odisha', image: '/team/member2.png' },
                                    { id: '3', name: 'Priyanka Mishra', role: 'Interior Specialist, Patia', image: '/team/member3.png' },
                                    { id: '4', name: 'Amitav Patnaik', role: 'Project Manager, Bhubaneswar', image: '/team/member4.png' }
                                ].map((member) => (
                                    <TeamMemberFlipCard
                                        key={member.id}
                                        id={member.id}
                                        name={member.name}
                                        role={member.role}
                                        image={member.image}
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
            </main>
            <Footer />
        </>
    );
}
