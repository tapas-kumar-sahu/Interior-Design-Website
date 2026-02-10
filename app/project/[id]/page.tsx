import prisma from '@/lib/prisma';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import ProjectDetailContent from '@/components/project/ProjectDetailContent';

export const dynamic = 'force-dynamic';

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const project = await prisma.project.findUnique({
        where: { id }
    });

    if (!project) return null; // Or show 404

    return (
        <>
            <Header />
            <main>
                <PageHero
                    image="/projects/project-detail-banner.jpg"
                />
                <ProjectDetailContent project={project as any} />
            </main>
            <Footer />
        </>
    );
}
