import React from 'react';
import ComingSoon from '@/components/admin/ComingSoon';

export default function AdminTeamPage() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-display text-dark">Team Management</h2>
                <p className="text-secondary mt-1">Manage your studio&apos;s professional designers and architects.</p>
            </div>

            <ComingSoon
                title="Team Member Profiles"
                description="The interface for adding and managing your team members is in progress. Every professional at Interno deserves a stunning profile!"
            />
        </div>
    );
}
