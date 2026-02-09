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

const blogArticles = [
    {
        title: "Let's Get Solution For Building Construction Work",
        date: '26 December, 2022',
        image: '/blog/blog1.jpg',
        badge: 'Kitchen Design',
    },
    {
        title: 'Low Cost Latest Invented Interior Designing Ideas.',
        date: '22 December, 2022',
        image: '/blog/blog2.jpg',
        badge: 'Living Design',
    },
    {
        title: 'Best For Any Office & Business Interior Solution',
        date: '25 December, 2022',
        image: '/blog/blog3.jpg',
        badge: 'Interior Design',
    },
    {
        title: "Let's Get Solution For Building Construction Work",
        date: '26 December, 2022',
        image: '/blog/blog4.jpg',
        badge: 'Kitchen Design',
    },
    {
        title: 'Low Cost Latest Invented Interior Designing Ideas.',
        date: '22 December, 2022',
        image: '/blog/blog5.jpg',
        badge: 'Living Design',
    },
    {
        title: 'Best For Any Office & Business Interior Solution',
        date: '25 December, 2022',
        image: '/blog/blog6.jpg',
        badge: 'Interior Design',
    },
];

export default function BlogPage() {
    const [currentPage, setCurrentPage] = useState(1);

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

                        <AnimateOnScroll direction="up" delay={0.4}>
                            <div className="group border border-gray-200 rounded-[50px] p-6 lg:p-12 transition-all duration-300 hover:shadow-xl hover:bg-light-bg cursor-pointer">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-[30px] lg:rounded-[40px]">
                                        <Image
                                            src="/blog/latest-post.jpg"
                                            alt="Latest Post"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="space-y-6">
                                        <h3 className="text-3xl md:text-4xl font-display text-dark leading-tight">
                                            Low Cost Latest Invented Interior <br className="hidden lg:block" /> Designing Ideas
                                        </h3>
                                        <p className="text-secondary text-lg leading-relaxed">
                                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.
                                        </p>
                                        <p className="text-secondary text-lg leading-relaxed">
                                            Lorem Ipsum is not simply random text. It has roots in a piece of classical.
                                        </p>
                                        <div className="flex items-center justify-between pt-4">
                                            <p className="text-secondary">26 December, 2022</p>
                                            <div className="w-14 h-14 rounded-full bg-light-bg flex items-center justify-center transition-colors group-hover:bg-white text-dark shadow-sm">
                                                <ChevronRight className="w-6 h-6" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </Container>
                </section>

                {/* Articles Grid */}
                <section className="pb-24">
                    <Container>
                        <AnimateOnScroll direction="up" delay={0.2}>
                            <h2 className="text-4xl md:text-5xl font-display text-dark mb-12">Articles & News</h2>
                        </AnimateOnScroll>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                            {blogArticles.map((article, index) => (
                                <AnimateOnScroll
                                    key={index}
                                    delay={(index % 3) * 0.1}
                                    distance={20}
                                >
                                    <ArticleCard
                                        title={article.title}
                                        date={article.date}
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
