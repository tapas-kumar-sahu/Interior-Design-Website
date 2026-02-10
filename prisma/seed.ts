import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Start seeding...')

    console.log('Clearing existing data...')
    await prisma.project.deleteMany({})
    console.log('Projects cleared.')
    await prisma.post.deleteMany({})
    console.log('Posts cleared.')
    await prisma.teamMember.deleteMany({})
    console.log('Team members cleared.')
    await prisma.testimonial.deleteMany({})
    console.log('Testimonials cleared.')

    // Seed Projects
    console.log('Seeding projects...')
    const projects = [
        {
            title: 'Luxury Villa in Patia',
            client: 'Rajesh Mohapatra',
            category: 'Residential Interiors',
            tags: ['Modern', 'Luxury', 'Villa'],
            date: '15 January, 2024',
            description: [
                "This premium villa project in Patia, Bhubaneswar, reflects a perfect harmony between modern minimalist architecture and traditional Odia aesthetic touches.",
                "The client requested a space that was both welcoming for family gatherings and highly functional for a modern lifestyle."
            ],
            mainImage: '/projects/project-detail-magnifying.jpg',
            isFeatured: true
        },
        {
            title: 'Modern Office in Infocity',
            client: 'Infotech Solutions',
            category: 'Commercial Interiors',
            tags: ['Corporate', 'Minimalist', 'Workspace'],
            date: '20 October, 2023',
            description: [
                "This corporate interior project in Infocity, Bhubaneswar, was designed to foster creativity and productivity among young tech professionals.",
                "We integrated smart lighting and ergonomic furniture to create a workspace that is as functional as it is visually inspiring."
            ],
            mainImage: '/projects/project-detail-magnifying.jpg',
            isFeatured: false
        }
    ]

    for (const p of projects) {
        await prisma.project.create({ data: p })
    }

    // Seed Posts
    const posts = [
        {
            title: "Modern Kitchen Design Trends in Bhubaneswar Homes",
            content: "Designing a space in Bhubaneswar requires a unique understanding of both modern trends and local environmental conditions...",
            excerpt: "Discover the latest kitchen trends specifically for the modern residents of Odisha.",
            image: "/blog/blog1.jpg",
            badge: "Kitchen Design",
            author: "Subhashree Dash"
        },
        {
            title: "The Evolution of Luxury Living in Odisha",
            content: "Discover how modern architecture and premium interior design are reshaping the skyline of Bhubaneswar...",
            excerpt: "We explore the balance between traditional Odia aesthetics and contemporary global trends.",
            image: "/blog/blog2.jpg",
            badge: "Interior Design",
            author: "Biswajit Mohanty"
        }
    ]

    for (const post of posts) {
        await prisma.post.create({ data: post })
    }

    // Seed Team Members
    const team = [
        {
            memberId: '1',
            name: 'Subhashree Dash',
            role: 'Senior Designer, Bhubaneswar',
            image: '/team/member1.png',
            bio: 'With over 8 years of experience in the Odisha interior design market, Subhashree specializes in blending modern minimalism with traditional aesthetics.',
            email: 'subhashree@interno.in',
            phone: '+91 977 777 7777',
            website: 'www.interno.in',
            socials: [
                { platform: 'facebook', url: 'https://facebook.com' },
                { platform: 'twitter', url: 'https://twitter.com' },
                { platform: 'linkedin', url: 'https://linkedin.com' },
                { platform: 'instagram', url: 'https://instagram.com' }
            ]
        },
        {
            memberId: '2',
            name: 'Biswajit Mohanty',
            role: 'Lead Architect, Odisha',
            image: '/team/member2.png',
            bio: 'Biswajit is a visionary architect dedicated to creating sustainable and functional spaces across Bhubaneswar.',
            email: 'biswajit@interno.in',
            phone: '+91 977 777 7777',
            website: 'www.interno.in',
            socials: [
                { platform: 'facebook', url: 'https://facebook.com' },
                { platform: 'twitter', url: 'https://twitter.com' },
                { platform: 'linkedin', url: 'https://linkedin.com' }
            ]
        }
    ]

    for (const member of team) {
        await prisma.teamMember.create({ data: member })
    }

    // Seed Testimonials
    const testimonials = [
        {
            name: 'Nalinikanta Nayak',
            location: 'Patia, Bhubaneswar',
            image: '/testimonials/person1.png',
            text: 'Interno transformed our Patia villa into a modern masterpiece. Their attention to detail and local sourcing was impressive.'
        },
        {
            name: 'Sasmita Roy',
            location: 'Cuttack',
            image: '/testimonials/person2.png',
            text: 'The team understood exactly what we wanted for our Cuttack ancestral home renovation. Professional and highly creative!'
        },
        {
            name: 'Alok Patnaik',
            location: 'Jayadev Vihar, Bhubaneswar',
            image: '/testimonials/person3.png',
            text: 'Best interior design firm in Odisha. They delivered our Infocity office project ahead of schedule with premium quality.'
        }
    ]

    for (const t of testimonials) {
        await prisma.testimonial.create({ data: t })
    }

    console.log('Seeding finished.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
