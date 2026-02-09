'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ChevronRight, Quote, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

// Mock data for blog posts
const postsData: Record<string, any> = {
    '1': {
        title: "Modern Kitchen Design Trends in Bhubaneswar Homes",
        date: "15 January, 2024",
        category: "Kitchen Design",
        mainImage: "/blog/blog1.jpg",
        contentImage: "/blog/latest-post.jpg",
        tags: ["Kitchen", "Modern", "Bhubaneswar"]
    },
    'default': {
        title: "The Evolution of Luxury Living in Odisha",
        date: "26 January, 2024",
        category: "Interior Design",
        mainImage: "/blog/blog2.jpg",
        contentImage: "/blog/blog5.jpg",
        tags: ["Luxury", "Design", "Odisha"]
    }
};

export default function BlogDetailPage() {
    const params = useParams();
    const id = params.id as string;
    const post = postsData[id] || postsData['default'];

    return (
        <>
            <Header />
            <main>
                {/* Custom Banner */}
                <section className="relative h-[400px] overflow-hidden">
                    <Image
                        src="/blog/blog-detail-banner.jpg"
                        alt="Blog Banner"
                        fill
                        className="object-cover"
                        priority
                    />
                </section>

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
                                                src={post.mainImage}
                                                alt={post.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex items-center justify-between text-secondary">
                                            <span>{post.date}</span>
                                            <span>Interior / Design / Odisha</span>
                                        </div>
                                    </div>

                                    {/* Content Text */}
                                    <div className="space-y-6 text-secondary text-lg leading-relaxed">
                                        <p>
                                            Designing a space in Bhubaneswar requires a unique understanding of both modern trends and local environmental conditions. From selecting materials that withstand the regional humidity to creating layouts that prioritize ventilation, every detail matters.
                                        </p>
                                        <p>
                                            In this article, we dive deep into how premium homes in areas like Patia and Jayadev Vihar are evolving to meet global standards while staying rooted in local aesthetics.
                                        </p>
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

                                    {/* Secondary Heading & Text */}
                                    <div className="space-y-8">
                                        <h2 className="text-4xl font-display text-dark">Why Quality Matters</h2>
                                        <p className="text-secondary text-lg leading-relaxed">
                                            Choosing the right interior designer in Odisha can make the difference between a house and a true home.
                                        </p>
                                        <ul className="space-y-4">
                                            {[1, 2, 3].map((item) => (
                                                <li key={item} className="flex gap-4 text-secondary text-lg">
                                                    <span className="text-primary font-display">{item}</span>
                                                    <span>{item === 1 ? "Premium material sourcing from trusted local vendors." : item === 2 ? "Expert site supervision for flawless execution." : "Transparent pricing with no hidden surprises."}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Content Image */}
                                    <div className="relative aspect-video overflow-hidden rounded-[50px]">
                                        <Image
                                            src={post.contentImage}
                                            alt="Interior Design Content"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <p className="text-secondary text-lg leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Aenean in the ipsum vel lectus bibendum commodo.
                                    </p>

                                    {/* Tags & Share */}
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-12 border-y border-gray-100">
                                        <div className="flex items-center gap-4">
                                            <span className="text-dark font-display text-xl">Tags</span>
                                            <div className="flex flex-wrap gap-2">
                                                {post.tags.map((tag: string) => (
                                                    <span key={tag} className="bg-light-bg px-6 py-2 rounded-lg text-secondary text-sm">
                                                        {tag}
                                                    </span>
                                                ))}
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
                                        {[1, 2, 3].map((item) => (
                                            <Link key={item} href="#" className="block group">
                                                <div className="space-y-2">
                                                    <h4 className="text-dark font-display text-lg group-hover:text-primary transition-colors leading-tight">
                                                        {item === 1 ? "Top Interior Colors for 2024" : item === 2 ? "How to Modernize Your Office Space" : "Small Home, Big Style: Creative Ideas"}
                                                    </h4>
                                                    <p className="text-secondary text-sm text-right">08/02/2024</p>
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
            </main>
            <Footer />
        </>
    );
}
