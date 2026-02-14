import React from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminTopNav from '@/components/admin/AdminTopNav';
import AuthProvider from '@/components/providers/SessionProvider';
import { Toaster } from 'sonner';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthProvider>
            <div className="flex h-screen bg-[#F4F7F9] overflow-hidden">
                <AdminSidebar />
                <div className="flex-1 flex flex-col min-w-0">
                    <AdminTopNav />
                    <main className="flex-1 overflow-y-auto p-8">
                        {children}
                    </main>
                </div>
                <Toaster richColors position="top-right" />
            </div>
        </AuthProvider>
    );
}
