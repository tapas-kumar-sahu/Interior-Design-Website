import Link from 'next/link';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import ArticleCard from '../ui/ArticleCard';
import AnimateOnScroll from '../ui/AnimateOnScroll';

const articles = [
    {
        title: "Modern Kitchen Design Trends in Bhubaneswar Homes",
        date: '15 January, 2024',
        image: '/articles/article1.jpg',
        badge: 'Kitchen Design',
    },
    {
        title: 'Maximizing Space in 3BHK Apartments in Patia',
        date: '10 January, 2024',
        image: '/articles/article2.jpg',
        badge: 'Living Design',
    },
    {
        title: 'Interior Solutions for Growing Startups in Infocity',
        date: '05 January, 2024',
        image: '/articles/article3.jpg',
        badge: 'Interior Design',
    },
];

export default function Articles() {
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
                    {articles.map((article, index) => (
                        <AnimateOnScroll
                            key={index}
                            delay={index * 0.2}
                            distance={30}
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
            </Container>
        </section>
    );
}
