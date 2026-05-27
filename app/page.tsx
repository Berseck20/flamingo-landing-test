import React from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import Services from '../components/services';
import WhyChooseUs from '../components/why-choose-us';
import ProjectGallery from '../components/project-gallery';
import Testimonials from '../components/testimonials';
import CtaBanner from '../components/cta-banner';
import ContactSection from '../components/contact-section';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
      <Header />
      <main className="flex flex-col items-center justify-center">
        <Hero />
        <Services />
        <WhyChooseUs />
        <ProjectGallery />
        <Testimonials />
        <CtaBanner />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
