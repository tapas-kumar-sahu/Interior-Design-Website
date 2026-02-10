import Link from 'next/link';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import ArticleCard from '../ui/ArticleCard';
import AnimateOnScroll from '../ui/AnimateOnScroll';

import prisma from '@/lib/prisma';

export default async function Articles() {
    const articles = await prisma.post.findMany({
        take: 3,
        orderBy: { publishedAt: 'desc' }
    });

    if (!articles || articles.length === 0) return null;
    return (
        <section className="section">
            <Container>
                <AnimateOnScroll>
                    <SectionHeading
                        title="Articles & News"
                        subtitle="Explore the latest interior design insights and home improvement tips specifically for the modern residents of Odisha."
                        centered
                    />
                </AnimateOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {articles.map((article: any, index: number) => (
                        <AnimateOnScroll
                            key={article.id}
                            delay={index * 0.2}
                            distance={30}
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
            </Container>
        </section>
    );
}
