'use client';

import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

interface TeamMemberCardProps {
    id?: string;
    name: string;
    role: string;
    image: string;
    socials?: {
        platform: 'facebook' | 'twitter' | 'linkedin' | 'instagram';
        url: string;
    }[];
}

export default function TeamMemberCard({
    id,
    name,
    role,
    image,
    socials = []
}: TeamMemberCardProps) {
    const renderIcon = (platform: string) => {
        switch (platform) {
            case 'facebook': return <Facebook className="w-5 h-5" />;
            case 'twitter': return <Twitter className="w-5 h-5" />;
            case 'linkedin': return <Linkedin className="w-5 h-5" />;
            case 'instagram': return <Instagram className="w-5 h-5" />;
            default: return null;
        }
    };

    const content = (
        <>
            {/* Portrait Image */}
            <div className="relative aspect-[0.9/1] mb-6 overflow-hidden rounded-[50px]">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Member Info */}
            <div className="space-y-2">
                <h3 className="text-2xl font-display text-dark">{name}</h3>
                <p className="text-secondary">{role}</p>
            </div>
        </>
    );

    return (
        <div className="group text-center">
            {id ? (
                <Link href={`/team/${id}`} className="block mb-6">
                    {content}
                </Link>
            ) : (
                <div className="mb-6">
                    {content}
                </div>
            )}

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 mt-6">
                {socials.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark hover:text-primary transition-colors"
                        aria-label={`${name}'s ${social.platform}`}
                    >
                        {renderIcon(social.platform)}
                    </a>
                ))}
            </div>
        </div>
    );
}
