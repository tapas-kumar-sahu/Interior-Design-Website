import prisma from '@/lib/prisma';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import TeamMemberCard from '@/components/ui/TeamMemberCard';

export const dynamic = 'force-dynamic';

export default async function TeamPage() {
    const teamMembers = await prisma.teamMember.findMany();
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Our Professional"
                    breadcrumb={[
                        { label: 'Home', href: '/' },
                        { label: 'Team' }
                    ]}
                    image="/team/team-landing.jpg"
                />

                <section className="py-24">
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                            {teamMembers.map((member: any, index: number) => (
                                <TeamMemberCard
                                    key={index}
                                    id={member.id}
                                    name={member.name}
                                    role={member.role}
                                    image={member.image}
                                    socials={member.socials as any}
                                />
                            ))}
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
