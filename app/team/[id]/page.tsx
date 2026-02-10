import prisma from '@/lib/prisma';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import TeamMemberDetailContent from '@/components/team/TeamMemberDetailContent';

export const dynamic = 'force-dynamic';

export default async function TeamSinglePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const member = await prisma.teamMember.findUnique({
        where: { id }
    });

    if (!member) return null;

    const allMembers = await prisma.teamMember.findMany();

    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Professional Single"
                    breadcrumb={[
                        { label: 'Home', href: '/' },
                        { label: 'Team Single' }
                    ]}
                    image="/team/single-banner.png"
                />

                <TeamMemberDetailContent member={member as any} allMembers={allMembers} />
            </main>
            <Footer />
        </>
    );
}
