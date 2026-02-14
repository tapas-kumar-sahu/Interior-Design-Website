'use client';

import { toast } from 'sonner';

export async function deleteProjectAction(id: string) {
    if (!confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
        return;
    }

    try {
        const response = await fetch(`/api/admin/projects/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) throw new Error('Failed to delete project');

        toast.success('Project deleted successfully');
        window.location.reload(); // Refresh to show updated list
    } catch (error) {
        toast.error('Could not delete project. Please try again.');
        console.error(error);
    }
}
