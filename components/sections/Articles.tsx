import Link from 'next/link';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import ArticleCard from '../ui/ArticleCard';
import AnimateOnScroll from '../ui/AnimateOnScroll';

const articles = [
    {
        title: "Let's Get Solution For Building Construction Work",
        date: '26 December, 2022',
        image: '/articles/article1.jpg',
        badge: 'Kitchen Design',
    },
    {
        title: 'Low Cost Latest Invented Interior Designing Ideas.',
        date: '22 December, 2022',
        image: '/articles/article2.jpg',
        badge: 'Living Design',
    },
    {
        title: 'Best For Any Office & Business Interior Solution',
        date: '25 December, 2022',
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
                        subtitle="It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using."
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
