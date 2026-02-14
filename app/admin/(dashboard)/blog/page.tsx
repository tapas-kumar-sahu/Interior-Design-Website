import React from 'react';
import ComingSoon from '@/components/admin/ComingSoon';

export default function AdminBlogPage() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-display text-dark">Blog Management</h2>
                <p className="text-secondary mt-1">Manage your studio&apos;s articles and design news.</p>
            </div>

            <ComingSoon
                title="Blog Content Management"
                description="We are currently building the interface for writing and editing blog posts. You'll soon be able to share your design insights directly from here!"
            />
        </div>
    );
}
