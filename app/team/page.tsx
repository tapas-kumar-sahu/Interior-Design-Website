'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import TeamMemberCard from '@/components/ui/TeamMemberCard';

const teamMembers = [
    {
        id: '1',
        name: 'Subhashree Dash',
        role: 'Senior Designer, Bhubaneswar',
        image: '/team/member1.png',
        socials: [
            { platform: 'facebook', url: 'https://facebook.com' },
            { platform: 'twitter', url: 'https://twitter.com' }
        ]
    },
    {
        id: '2',
        name: 'Biswajit Mohanty',
        role: 'Lead Architect, Odisha',
        image: '/team/member2.png',
        socials: [
            { platform: 'facebook', url: 'https://facebook.com' },
            { platform: 'twitter', url: 'https://twitter.com' },
            { platform: 'linkedin', url: 'https://linkedin.com' }
        ]
    },
    {
        id: '3',
        name: 'Priyanka Mishra',
        role: 'Interior Specialist, Patia',
        image: '/team/member3.png',
        socials: [
            { platform: 'facebook', url: 'https://facebook.com' },
            { platform: 'twitter', url: 'https://twitter.com' }
        ]
    },
    {
        id: '4',
        name: 'Amitav Patnaik',
        role: 'Project Manager, Bhubaneswar',
        image: '/team/member4.png',
        socials: [
            { platform: 'facebook', url: 'https://facebook.com' },
            { platform: 'twitter', url: 'https://twitter.com' }
        ]
    },
    {
        id: '5',
        name: 'Sasmita Sahoo',
        role: 'Creative Designer, Cuttack',
        image: '/team/member1.png',
        socials: [
            { platform: 'facebook', url: 'https://facebook.com' },
            { platform: 'twitter', url: 'https://twitter.com' }
        ]
    },
    {
        id: '6',
        name: 'Rakesh Jena',
        role: 'Site Supervisor, Infocity',
        image: '/team/member2.png',
        socials: [
            { platform: 'facebook', url: 'https://facebook.com' },
            { platform: 'twitter', url: 'https://twitter.com' },
            { platform: 'linkedin', url: 'https://linkedin.com' }
        ]
    },
    {
        id: '7',
        name: 'Anjali Rout',
        role: 'Lighting Expert, Bhubaneswar',
        image: '/team/member3.png',
        socials: [
            { platform: 'facebook', url: 'https://facebook.com' },
            { platform: 'twitter', url: 'https://twitter.com' }
        ]
    },
    {
        id: '8',
        name: 'Deepak Behera',
        role: 'Furniture Specialist, Odisha',
        image: '/team/member4.png',
        socials: [
            { platform: 'facebook', url: 'https://facebook.com' },
            { platform: 'twitter', url: 'https://twitter.com' }
        ]
    }
];

export default function TeamPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Our Professional"
                    breadcrumb={[
                        { label: 'Home', href: '/' },
                        { label: 'Team' }
                    ]}
                    image="/team/team-landing.jpg"
                />

                <section className="py-24">
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                            {teamMembers.map((member, index) => (
                                <TeamMemberCard
                                    key={index}
                                    id={member.id}
                                    name={member.name}
                                    role={member.role}
                                    image={member.image}
                                    socials={member.socials as any}
                                />
                            ))}
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
