"use client";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { useState } from "react";
import LoadingPage from "./loading";
export default function Home() {
  const [loading, setLoding] = useState(false);
  setTimeout(() => {
    setLoding(true);
  }, 2000);
  return (
    <div>
      <Header />
      {loading ? (
        <>
          <HeroSection />
          <ProjectsSection />
          <TapeSection />
          <TestimonialsSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}
