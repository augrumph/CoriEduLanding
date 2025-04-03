// MainContent.tsx
import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

function MainContent() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default MainContent;
