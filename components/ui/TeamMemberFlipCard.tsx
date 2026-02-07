'use client';

import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

interface TeamMemberFlipCardProps {
    id?: string;
    name: string;
    role: string;
    image: string;
    phone?: string;
    email?: string;
    socials?: {
        platform: 'facebook' | 'twitter' | 'linkedin' | 'instagram';
        url: string;
    }[];
}

export default function TeamMemberFlipCard({
    id,
    name,
    role,
    image,
    phone,
    email,
    socials = []
}: TeamMemberFlipCardProps) {
    const renderIcon = (platform: string) => {
        switch (platform) {
            case 'facebook': return <Facebook className="w-5 h-5" />;
            case 'twitter': return <Twitter className="w-5 h-5" />;
            case 'linkedin': return <Linkedin className="w-5 h-5" />;
            case 'instagram': return <Instagram className="w-5 h-5" />;
            default: return null;
        }
    };

    return (
        <div className="group perspective-1000 h-[400px]">
            <div className={`relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180`}>
                {/* Front Side (Image) */}
                <div className="absolute inset-0 backface-hidden rotate-y-0 z-20">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover rounded-[30px]"
                    />
                </div>

                {/* Back Side (Details) */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-[30px] p-8 flex flex-col items-center justify-center text-center shadow-lg border border-gray-100 z-10">
                    <h3 className="text-2xl font-display text-dark mb-1">{name}</h3>
                    <p className="text-secondary text-sm mb-6">{role}</p>

                    <div className="flex gap-4 mb-8">
                        {socials.length > 0 ? (
                            socials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    className="text-dark hover:text-primary transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {renderIcon(social.platform)}
                                </a>
                            ))
                        ) : (
                            <>
                                <a href="#" className="text-dark hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                                <a href="#" className="text-dark hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                                <a href="#" className="text-dark hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                                <a href="#" className="text-dark hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                            </>
                        )}
                    </div>

                    {(phone || email) && (
                        <div className="text-secondary text-sm space-y-1">
                            {phone && <p>{phone}</p>}
                            {email && <p>{email}</p>}
                        </div>
                    )}

                    {id && (
                        <Link
                            href={`/team/${id}`}
                            className="mt-6 text-primary font-display hover:underline"
                        >
                            View Profile
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
