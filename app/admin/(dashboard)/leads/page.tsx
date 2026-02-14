import React from 'react';
import ComingSoon from '@/components/admin/ComingSoon';

export default function AdminLeadsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-display text-dark">Contact Leads</h2>
                <p className="text-secondary mt-1">View and respond to client inquiries and project requests.</p>
            </div>

            <ComingSoon
                title="Lead Management System"
                description="We are developing a sophisticated system to help you track and respond to every client inquiry. Never miss an opportunity to start a new project!"
            />
        </div>
    );
}
