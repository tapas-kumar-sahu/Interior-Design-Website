import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import Brands from '@/components/sections/Brands';
import Projects from '@/components/sections/Projects';
import Stats from '@/components/sections/Stats';
import Articles from '@/components/sections/Articles';
import Newsletter from '@/components/sections/Newsletter';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Testimonials />
        <Brands />
        <Projects />
        <Stats />
        <Articles />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
