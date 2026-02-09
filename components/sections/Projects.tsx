import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from '../ui/AnimateOnScroll';

const projects = [
    {
        title: 'Modern Kitchan',
        category: 'Decor / Artchitecture',
        image: '/projects/project1.jpg',
    },
    {
        title: 'Modern Kitchan',
        category: 'Decor / Artchitecture',
        image: '/projects/project2.jpg',
    },
    {
        title: 'Modern Kitchan',
        category: 'Decor / Artchitecture',
        image: '/projects/project3.jpg',
    },
    {
        title: 'Modern Kitchan',
        category: 'Decor / Artchitecture',
        image: '/projects/project4.jpg',
    },
];

export default function Projects() {
    return (
        <section className="section">
            <Container>
                <AnimateOnScroll>
                    <SectionHeading
                        title="Follow Our Projects"
                        subtitle="It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points."
                        centered
                    />
                </AnimateOnScroll>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <AnimateOnScroll
                            key={index}
                            delay={index * 0.2}
                            direction={index % 2 === 0 ? 'left' : 'right'}
                        >
                            <div className="group cursor-pointer">
                                {/* Project Image */}
                                <div className="relative h-80 mb-6 rounded-tr-[60px] rounded-bl-[60px] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                {/* Project Info */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-dark mb-1">{project.title}</h3>
                                        <p className="text-secondary text-sm">{project.category}</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-light flex items-center justify-center group-hover:bg-primary transition-colors">
                                        <ArrowRight className="w-5 h-5 text-dark group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}
