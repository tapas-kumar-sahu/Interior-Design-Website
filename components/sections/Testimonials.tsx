import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Image from 'next/image';
import AnimateOnScroll from '../ui/AnimateOnScroll';

const testimonials = [
    {
        name: 'Nalinikanta Nayak',
        location: 'Patia, Bhubaneswar',
        image: '/testimonials/person1.png',
        text: 'Interno transformed our Patia villa into a modern masterpiece. Their attention to detail and local sourcing was impressive.',
    },
    {
        name: 'Sasmita Roy',
        location: 'Cuttack',
        image: '/testimonials/person2.png',
        text: 'The team understood exactly what we wanted for our Cuttack ancestral home renovation. Professional and highly creative!',
    },
    {
        name: 'Alok Patnaik',
        location: 'Jayadev Vihar, Bhubaneswar',
        image: '/testimonials/person3.png',
        text: 'Best interior design firm in Odisha. They delivered our Infocity office project ahead of schedule with premium quality.',
    },
];

export default function Testimonials() {
    return (
        <section className="section">
            <Container>
                <div className='bg-light rounded-4xl px-8 py-16'>
                    <AnimateOnScroll>
                        <SectionHeading
                            title="What the People Thinks About Us"
                            centered
                        />
                    </AnimateOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {testimonials.map((testimonial, index) => (
                            <AnimateOnScroll
                                key={index}
                                delay={index * 0.15}
                                distance={30}
                                className="bg-white p-8 rounded-4xl"
                            >
                                {/* Profile */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                                        {/* Avatar */}
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-dark font-body font-semibold">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-secondary text-sm">{testimonial.location}</p>
                                    </div>
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-secondary text-sm leading-relaxed">
                                    {testimonial.text}
                                </p>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
