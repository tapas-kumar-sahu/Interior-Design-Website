'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ChevronRight, Quote, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface BlogDetailContentProps {
    post: {
        id: string;
        title: string;
        excerpt: string;
        content: string;
        image: string;
        category: string;
        author: string;
        publishedAt: any;
    };
    latestNews: any[];
}

export default function BlogDetailContent({ post, latestNews }: BlogDetailContentProps) {
    return (
        <section className="py-24">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Main Content Area */}
                    <div className="lg:col-span-8">
                        <article className="space-y-12">
                            {/* Header Info */}
                            <div className="space-y-8">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-dark leading-tight">
                                    {post.title}
                                </h1>
                                <div className="relative aspect-video overflow-hidden rounded-[50px]">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex items-center justify-between text-secondary">
                                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                                    <span>Interior / Design / Odisha</span>
                                </div>
                            </div>

                            {/* Content Text */}
                            <div className="space-y-6 text-secondary text-lg leading-relaxed whitespace-pre-wrap">
                                {post.content}
                            </div>

                            {/* Blockquote */}
                            <div className="bg-light-bg rounded-[50px] p-12 text-center relative overflow-hidden">
                                <div className="relative z-10">
                                    <Quote className="w-16 h-16 text-primary mx-auto mb-6 rotate-180" />
                                    <p className="text-primary text-2xl md:text-3xl font-display italic leading-relaxed">
                                        “Good design is about creating spaces <br /> that reflect the soul of its inhabitants.”
                                    </p>
                                </div>
                            </div>

                            {/* Tags & Share */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-12 border-y border-gray-100">
                                <div className="flex items-center gap-4">
                                    <span className="text-dark font-display text-xl">Tags</span>
                                    <div className="flex flex-wrap gap-2">
                                        {post.category && (
                                            <span className="bg-light-bg px-6 py-2 rounded-lg text-secondary text-sm">
                                                {post.category}
                                            </span>
                                        )}
                                        <span className="bg-light-bg px-6 py-2 rounded-lg text-secondary text-sm">Design</span>
                                        <span className="bg-light-bg px-6 py-2 rounded-lg text-secondary text-sm">Bhubaneswar</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <Facebook className="w-5 h-5 text-dark cursor-pointer hover:text-primary transition-colors" />
                                    <Twitter className="w-5 h-5 text-dark cursor-pointer hover:text-primary transition-colors" />
                                    <Linkedin className="w-5 h-5 text-dark cursor-pointer hover:text-primary transition-colors" />
                                    <Instagram className="w-5 h-5 text-dark cursor-pointer hover:text-primary transition-colors" />
                                </div>
                            </div>

                            {/* Leave a Reply Form */}
                            <div className="space-y-10 pt-12">
                                <h3 className="text-3xl font-display text-dark">Leave a Reply</h3>
                                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
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
                                        <input
                                            type="text"
                                            placeholder="Website"
                                            className="w-full bg-transparent border-b border-dark/20 py-4 focus:border-primary outline-none transition-colors"
                                        />
                                        <input
                                            type="tel"
                                            placeholder="Phone"
                                            className="w-full bg-transparent border-b border-dark/20 py-4 focus:border-primary outline-none transition-colors"
                                        />
                                    </div>
                                    <textarea
                                        placeholder="Hello I am Interested in.."
                                        rows={6}
                                        className="w-full bg-transparent border-b border-dark/20 py-4 focus:border-primary outline-none transition-colors resize-none"
                                    />
                                    <div className="flex items-center gap-3 text-secondary text-sm">
                                        <input type="checkbox" id="save-info" className="accent-primary" />
                                        <label htmlFor="save-info">Save my name, email, and website in this browser for the next time I comment.</label>
                                    </div>
                                    <Button type="submit">
                                        Send Now
                                    </Button>
                                </form>
                            </div>
                        </article>
                    </div>

                    {/* Sidebar Area */}
                    <aside className="lg:col-span-4 space-y-12">
                        {/* Search */}
                        <div className="bg-light-bg p-8 rounded-[40px] relative">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full bg-white rounded-2xl py-5 px-6 pr-14 focus:outline-none shadow-sm"
                                />
                                <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-dark w-6 h-6 cursor-pointer" />
                            </div>
                        </div>

                        {/* Latest News */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-display text-dark">Latest News</h3>
                            <div className="space-y-8">
                                {latestNews.map((item: any) => (
                                    <Link key={item.id} href={`/blog/${item.id}`} className="block group">
                                        <div className="space-y-2">
                                            <h4 className="text-dark font-display text-lg group-hover:text-primary transition-colors leading-tight">
                                                {item.title}
                                            </h4>
                                            <p className="text-secondary text-sm text-right">{new Date(item.publishedAt).toLocaleDateString()}</p>
                                        </div>
                                        <div className="h-px bg-primary/20 mt-6" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="bg-light-bg p-10 rounded-[40px] space-y-8">
                            <h3 className="text-2xl font-display text-dark">Categories</h3>
                            <div className="space-y-6">
                                {["Decoration", "Luxury Interiors", "Modular Solutions", "Lighting Design"].map((cat, idx) => (
                                    <Link key={cat} href="#" className="flex flex-col gap-4 group">
                                        <span className="text-secondary hover:text-primary transition-colors">{cat}</span>
                                        {idx !== 3 && <div className="h-px bg-primary/20" />}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-display text-dark">Tags</h3>
                            <div className="flex flex-wrap gap-3">
                                {["Kitchen", "Bedroom", "Building", "Architecture", "Kitchen Planning", "Bedroom"].map((tag, idx) => (
                                    <button
                                        key={idx}
                                        className={`px-8 py-3 rounded-md text-sm transition-all duration-300 ${idx === 0
                                            ? 'bg-dark text-white'
                                            : 'bg-light-bg text-dark hover:bg-dark hover:text-white!'
                                            }`}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                </div>
            </Container>
        </section>
    );
}
