'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import ArticleCard from '@/components/ui/ArticleCard';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

import Link from 'next/link';
import { useEffect } from 'react';

export const dynamic = 'force-dynamic';

export default function BlogPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('/api/posts');
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    const latestPost = posts.length > 0 ? posts[0] : null;
    const otherPosts = posts.length > 1 ? posts.slice(1) : [];

    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Articles & News"
                    image="/blog/blog-banner.jpg"
                    breadcrumb={[
                        { label: 'Home', href: '/' },
                        { label: 'Blog' }
                    ]}
                />

                {/* Latest Post Section */}
                <section className="py-24">
                    <Container>
                        <AnimateOnScroll direction="up" delay={0.2}>
                            <h2 className="text-4xl md:text-5xl font-display text-dark mb-12">Latest Post</h2>
                        </AnimateOnScroll>

                        {loading ? (
                            <div className="flex justify-center py-12">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                            </div>
                        ) : latestPost ? (
                            <AnimateOnScroll direction="up" delay={0.4}>
                                <Link href={`/blog/${latestPost.id}`} className="block">
                                    <div className="group border border-gray-200 rounded-[50px] p-6 lg:p-12 transition-all duration-300 hover:shadow-xl hover:bg-light-bg cursor-pointer">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                            <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-[30px] lg:rounded-[40px]">
                                                <Image
                                                    src={latestPost.image}
                                                    alt={latestPost.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                            </div>
                                            <div className="space-y-6">
                                                <h3 className="text-3xl md:text-4xl font-display text-dark leading-tight">
                                                    {latestPost.title}
                                                </h3>
                                                <p className="text-secondary text-lg leading-relaxed">
                                                    {latestPost.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between pt-4">
                                                    <p className="text-secondary">{new Date(latestPost.publishedAt).toLocaleDateString()}</p>
                                                    <div className="w-14 h-14 rounded-full bg-light-bg flex items-center justify-center transition-colors group-hover:bg-white text-dark shadow-sm">
                                                        <ChevronRight className="w-6 h-6" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </AnimateOnScroll>
                        ) : (
                            <p className="text-center text-secondary">No blog posts found.</p>
                        )}
                    </Container>
                </section>

                {/* Articles Grid */}
                <section className="pb-24">
                    <Container>
                        <AnimateOnScroll direction="up" delay={0.2}>
                            <h2 className="text-4xl md:text-5xl font-display text-dark mb-12">Articles & News</h2>
                        </AnimateOnScroll>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                            {otherPosts.map((article, index) => (
                                <AnimateOnScroll
                                    key={article.id}
                                    delay={(index % 3) * 0.1}
                                    distance={20}
                                >
                                    <ArticleCard
                                        id={article.id}
                                        title={article.title}
                                        date={new Date(article.publishedAt).toLocaleDateString()}
                                        image={article.image}
                                        badge={article.badge}
                                    />
                                </AnimateOnScroll>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center items-center gap-4">
                            {[1, 2, 3].map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-12 h-12 rounded-full border flex items-center justify-center text-lg font-medium transition-all duration-300 ${currentPage === page
                                        ? 'bg-light-bg border-none text-dark shadow-sm'
                                        : 'border-primary/20 text-dark hover:border-primary'
                                        }`}
                                >
                                    {page < 10 ? `0${page}` : page}
                                </button>
                            ))}
                            <button className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:border-primary transition-all duration-300 text-dark">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
