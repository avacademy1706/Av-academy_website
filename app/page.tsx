import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import ParticleCanvas from "@/components/ParticleCanvas";
import HeroSection from "@/components/HeroSection";
import { Ticker, StatsBand, WhatWeDo } from "@/components/HomeSections";
import { IndustriesGrid, DualBrand, WhyUs, CTASection } from "@/components/PageSections";
import CoursesSlider from "@/components/CoursesSlider";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WAFloat from "@/components/WAFloat";
import PlacedStudents from "@/components/Placedstudents";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <ParticleCanvas />
      <main>
        <HeroSection />
        <Ticker />
        <StatsBand />
        <WhatWeDo />
        <DualBrand />
        <CoursesSlider />
        <PlacedStudents />
        <IndustriesGrid />

        {/* <DualBrand /> */}
        <WhyUs />
        {/* <CoursesSlider /> */}
        <Testimonials />
        {/* <CTASection
          title="Ready to Take Your Brand to"
          highlight="the Next Level?"
          desc="Let's create something amazing together — visuals that don't just look good but drive real business growth and measurable results."
        /> */}
        <CTASection
          title="Start Your"
          highlight="Creative Career Today"
          desc="Join AV Academy and learn Video Editing, Graphic Design, Motion Graphics, AI Content Creation & more with real industry exposure from AV EditLab."
        />
      </main>
      <Footer />
      <WAFloat />
    </>
  );
}
