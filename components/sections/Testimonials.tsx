import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Image from 'next/image';

const testimonials = [
    {
        name: 'Nattasha Mith',
        location: 'Sydney, USA',
        image: '/testimonials/person1.png',
        text: 'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.',
    },
    {
        name: 'Raymond Galario',
        location: 'Sydney, Australia',
        image: '/testimonials/person2.png',
        text: 'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.',
    },
    {
        name: 'Benny Roll',
        location: 'Sydney, New York',
        image: '/testimonials/person3.png',
        text: 'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.',
    },
];

export default function Testimonials() {
    return (
        <section className="section">
            <Container>
                <div className='bg-light rounded-4xl px-8 py-16'>
                    <SectionHeading
                        title="What the People Thinks About Us"
                        centered
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
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
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
