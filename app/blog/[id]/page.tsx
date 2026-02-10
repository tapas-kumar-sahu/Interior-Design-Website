import prisma from '@/lib/prisma';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BlogDetailContent from '@/components/blog/BlogDetailContent';

export const dynamic = 'force-dynamic';

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const post = await prisma.post.findUnique({
        where: { id }
    });

    if (!post) return null;

    const latestPosts = await prisma.post.findMany({
        take: 3,
        orderBy: { publishedAt: 'desc' },
        where: {
            NOT: { id }
        }
    });

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

                <BlogDetailContent post={post as any} latestNews={latestPosts} />
            </main>
            <Footer />
        </>
    );
}
