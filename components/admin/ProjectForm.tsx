'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import {
    Save,
    X,
    Loader2,
    Image as ImageIcon,
    Plus,
    Trash2
} from 'lucide-react';
import Button from '@/components/ui/Button';

export interface ProjectData {
    id?: string;
    title: string;
    client: string;
    category: string;
    date: string;
    mainImage: string;
    isFeatured: boolean;
    tags: string[];
    description: string[];
}

interface ProjectFormProps {
    initialData?: ProjectData;
}

export default function ProjectForm({ initialData }: ProjectFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    // Form state
    const [formData, setFormData] = useState<ProjectData>({
        title: initialData?.title || '',
        client: initialData?.client || '',
        category: initialData?.category || '',
        date: initialData?.date || '',
        mainImage: initialData?.mainImage || '',
        isFeatured: initialData?.isFeatured || false,
        tags: initialData?.tags || [''],
        description: initialData?.description || [''],
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target as any;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleArrayChange = (index: number, value: string, field: 'tags' | 'description') => {
        const newArray = [...formData[field]];
        newArray[index] = value;
        setFormData(prev => ({ ...prev, [field]: newArray }));
    };

    const addArrayItem = (field: 'tags' | 'description') => {
        setFormData(prev => ({ ...prev, [field]: [...prev[field], ''] }));
    };

    const removeArrayItem = (index: number, field: 'tags' | 'description') => {
        if (formData[field].length === 1) return;
        const newArray = (formData[field] as string[]).filter((_: string, i: number) => i !== index);
        setFormData(prev => ({ ...prev, [field]: newArray }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const method = initialData ? 'PUT' : 'POST';
            const url = initialData?.id
                ? `/api/admin/projects/${initialData.id}`
                : '/api/admin/projects';

            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to save project');

            toast.success(`Project ${initialData ? 'updated' : 'created'} successfully!`);
            router.push('/admin/projects');
            router.refresh();
        } catch (error) {
            toast.error('Something went wrong. Please check your inputs.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
                <div className="bg-white p-8 rounded-[40px] border border-dark/5 shadow-sm space-y-6">
                    <h3 className="text-xl font-display text-dark border-b border-dark/5 pb-4">General Information</h3>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-secondary">Project Title</label>
                            <input
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                                placeholder="e.g. Luxury Villa in Patia"
                                className="w-full bg-light-bg border border-dark/5 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-secondary">Client Name</label>
                                <input
                                    name="client"
                                    value={formData.client}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="e.g. Alok Patnaik"
                                    className="w-full bg-light-bg border border-dark/5 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-secondary">Completion Date</label>
                                <input
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="e.g. 15 January, 2024"
                                    className="w-full bg-light-bg border border-dark/5 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-[40px] border border-dark/5 shadow-sm space-y-6">
                    <div className="flex items-center justify-between border-b border-dark/5 pb-4">
                        <h3 className="text-xl font-display text-dark">Detailed Description</h3>
                        <button
                            type="button"
                            onClick={() => addArrayItem('description')}
                            className="text-primary hover:text-primary/70 transition-colors flex items-center gap-1 text-sm font-medium"
                        >
                            <Plus className="w-4 h-4" /> Add Paragraph
                        </button>
                    </div>

                    <div className="space-y-4">
                        {(formData.description as string[]).map((text: string, index: number) => (
                            <div key={index} className="relative group">
                                <textarea
                                    value={text}
                                    onChange={(e) => handleArrayChange(index, e.target.value, 'description')}
                                    required
                                    rows={4}
                                    placeholder={`Paragraph ${index + 1}...`}
                                    className="w-full bg-light-bg border border-dark/5 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                                />
                                {formData.description.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeArrayItem(index, 'description')}
                                        className="absolute top-4 right-4 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-red-50 rounded-xl"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sidebar / Settings Area */}
            <div className="space-y-8">
                <div className="bg-white p-8 rounded-[40px] border border-dark/5 shadow-sm space-y-6">
                    <h3 className="text-xl font-display text-dark border-b border-dark/5 pb-4">Organization</h3>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-secondary">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                required
                                className="w-full bg-light-bg border border-dark/5 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none"
                            >
                                <option value="">Select Category</option>
                                <option value="Residential Interiors">Residential Interiors</option>
                                <option value="Commercial Interiors">Commercial Interiors</option>
                                <option value="Retail Design">Retail Design</option>
                                <option value="Architectural Design">Architectural Design</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between mb-2">
                                <label className="text-sm font-medium text-secondary">Tags</label>
                                <button
                                    type="button"
                                    onClick={() => addArrayItem('tags')}
                                    className="text-primary text-xs font-bold"
                                >
                                    + ADD
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2 text-dark">
                                {(formData.tags as string[]).map((tag: string, index: number) => (
                                    <div key={index} className="flex-1 min-w-[120px] relative group">
                                        <input
                                            value={tag}
                                            onChange={(e) => handleArrayChange(index, e.target.value, 'tags')}
                                            placeholder="Tag..."
                                            className="w-full bg-light-bg border border-dark/5 rounded-xl py-2 px-3 text-sm focus:border-primary outline-none transition-all"
                                        />
                                        {formData.tags.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeArrayItem(index, 'tags')}
                                                className="absolute -top-2 -right-2 bg-white text-red-500 rounded-full shadow-sm border border-dark/5 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <X className="w-3 h-3" />
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <label className="flex items-center gap-3 cursor-pointer group bg-light-bg p-4 rounded-2xl transition-all hover:bg-primary/5 border border-transparent hover:border-primary/10">
                            <input
                                type="checkbox"
                                name="isFeatured"
                                checked={formData.isFeatured}
                                onChange={handleInputChange}
                                className="w-5 h-5 rounded border-dark/10 text-primary focus:ring-primary/20 transition-all"
                            />
                            <span className="text-sm font-medium text-secondary group-hover:text-dark transition-colors">Featured Project</span>
                        </label>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-[40px] border border-dark/5 shadow-sm space-y-6 text-dark leading-tight">
                    <h3 className="text-xl font-display text-dark border-b border-dark/5 pb-4">Cover Image</h3>

                    <div className="space-y-4">
                        <div className="relative group pt-[60%] bg-light-bg rounded-2xl overflow-hidden border-2 border-dashed border-dark/10 flex items-center justify-center">
                            {formData.mainImage ? (
                                <Image
                                    src={formData.mainImage}
                                    alt="Preview"
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-secondary/30">
                                    <ImageIcon className="w-12 h-12 mb-2" />
                                    <p className="text-sm">No image selected</p>
                                </div>
                            )}
                        </div>
                        <input
                            name="mainImage"
                            value={formData.mainImage}
                            onChange={handleInputChange}
                            required
                            placeholder="Image URL (Placeholder for now)"
                            className="w-full bg-light-bg border border-dark/5 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                        />
                        <p className="text-[10px] text-secondary/50 uppercase tracking-widest font-bold">
                            Tip: Once Cloudinary is integrated, you can upload here.
                        </p>
                    </div>
                </div>

                {/* Submit Sticky Bar for Desktop / Bottom Bar */}
                <div className="flex flex-col gap-3">
                    <Button
                        type="submit"
                        className="w-full py-4 justify-center shadow-lg shadow-primary/20"
                        disabled={loading}
                    >
                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5 mr-2" />}
                        {initialData ? 'Update Project' : 'Create Project'}
                    </Button>
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="w-full py-4 rounded-2xl text-secondary hover:text-dark transition-all text-sm font-medium border border-dark/5 bg-white shadow-sm"
                    >
                        Cancel Changes
                    </button>
                </div>
            </div>
        </form>
    );
}
