import React from 'react';
import prisma from '@/lib/prisma';
import {
    Briefcase,
    FileText,
    Users,
    MessageSquare,
    ArrowUpRight,
    Search
} from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
    // Fetch stats
    const [projectCount, postCount, memberCount, testimonialCount, leadCount] = await Promise.all([
        prisma.project.count(),
        prisma.post.count(),
        prisma.teamMember.count(),
        prisma.testimonial.count(),
        prisma.lead.count(),
    ]);

    const stats = [
        { label: 'Total Projects', value: projectCount, icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50', link: '/admin/projects' },
        { label: 'Blog Posts', value: postCount, icon: FileText, color: 'text-amber-600', bg: 'bg-amber-50', link: '/admin/blog' },
        { label: 'Team Members', value: memberCount, icon: Users, color: 'text-purple-600', bg: 'bg-purple-50', link: '/admin/team' },
        { label: 'Testimonials', value: testimonialCount, icon: MessageSquare, color: 'text-green-600', bg: 'bg-green-50', link: '/admin/testimonials' },
    ];

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-display text-dark">Welcome back, Admin</h2>
                    <p className="text-secondary mt-1">Here is what is happening with Interno today.</p>
                </div>
                <div className="bg-white p-2 rounded-2xl border border-dark/5 flex items-center gap-2 px-4 w-64 shadow-sm">
                    <Search className="w-4 h-4 text-secondary/40" />
                    <input
                        type="text"
                        placeholder="Search dashboard..."
                        className="text-sm bg-transparent outline-none w-full text-dark placeholder:text-secondary/30"
                    />
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <Link
                        key={stat.label}
                        href={stat.link}
                        className="bg-white p-6 rounded-[32px] border border-dark/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all group"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`${stat.bg} ${stat.color} p-3 rounded-2xl`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div className="text-secondary/20 group-hover:text-primary transition-colors">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        </div>
                        <p className="text-secondary/60 text-sm font-medium">{stat.label}</p>
                        <h3 className="text-2xl font-display text-dark mt-1">{stat.value}</h3>
                    </Link>
                ))}
            </div>

            {/* Quick Actions / Recent Activity Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white rounded-[40px] border border-dark/5 p-8 shadow-sm">
                    <h3 className="text-xl font-display text-dark mb-6">Recent Contact Leads</h3>
                    {leadCount === 0 ? (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <div className="w-16 h-16 bg-light-bg rounded-full flex items-center justify-center mb-4">
                                <MessageSquare className="w-8 h-8 text-secondary/20" />
                            </div>
                            <p className="text-secondary/60">No new messages yet.</p>
                        </div>
                    ) : (
                        <p className="text-secondary/60">You have {leadCount} messages to review.</p>
                    )}
                </div>

                <div className="bg-dark rounded-[40px] p-8 text-white relative overflow-hidden flex flex-col justify-between min-h-[400px]">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-display mb-4">Need help?</h3>
                        <p className="text-white/60 leading-relaxed">
                            Check out our documentation or contact support if you have issues managing your content.
                        </p>
                    </div>

                    <button className="relative z-10 bg-primary text-white py-4 rounded-2xl font-medium hover:bg-primary/90 transition-colors">
                        Documentation
                    </button>

                    {/* Decorative Background Pattern */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-[-20%] right-[-20%] w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(205,162,116,1),transparent_70%)]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
