import React from 'react';
import ComingSoon from '@/components/admin/ComingSoon';

export default function AdminTestimonialsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-display text-dark">Testimonials Management</h2>
                <p className="text-secondary mt-1">Manage client feedback and success stories.</p>
            </div>

            <ComingSoon
                title="Client Feedback"
                description="Build trust with your visitors by managing powerful testimonials. This management tool is coming very soon!"
            />
        </div>
    );
}
