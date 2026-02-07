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
        name: 'Charlotte Levi',
        role: 'Design, Australia',
        image: '/team/member1.png',
        socials: [
            { platform: 'facebook', url: '#' },
            { platform: 'twitter', url: '#' }
        ]
    },
    {
        id: '2',
        name: 'Nattasha Julie',
        role: 'Design, Australia',
        image: '/team/member2.png',
        socials: [
            { platform: 'facebook', url: '#' },
            { platform: 'twitter', url: '#' },
            { platform: 'linkedin', url: '#' }
        ]
    },
    {
        id: '3',
        name: 'John Smith',
        role: 'Design, Australia',
        image: '/team/member3.png',
        socials: [
            { platform: 'facebook', url: '#' },
            { platform: 'twitter', url: '#' }
        ]
    },
    {
        id: '4',
        name: 'Nora Owen',
        role: 'Design, Australia',
        image: '/team/member4.png',
        socials: [
            { platform: 'facebook', url: '#' },
            { platform: 'twitter', url: '#' }
        ]
    },
    {
        id: '5',
        name: 'Sofia Carter',
        role: 'Design, Australia',
        image: '/team/member1.png',
        socials: [
            { platform: 'facebook', url: '#' },
            { platform: 'twitter', url: '#' }
        ]
    },
    {
        id: '6',
        name: 'Avery Jackson',
        role: 'Design, Australia',
        image: '/team/member2.png',
        socials: [
            { platform: 'facebook', url: '#' },
            { platform: 'twitter', url: '#' },
            { platform: 'linkedin', url: '#' }
        ]
    },
    {
        id: '7',
        name: 'Luna James',
        role: 'Design, Australia',
        image: '/team/member3.png',
        socials: [
            { platform: 'facebook', url: '#' },
            { platform: 'twitter', url: '#' }
        ]
    },
    {
        id: '8',
        name: 'Gianna Mateo',
        role: 'Design, Australia',
        image: '/team/member4.png',
        socials: [
            { platform: 'facebook', url: '#' },
            { platform: 'twitter', url: '#' }
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
