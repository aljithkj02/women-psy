import React from "react";
import HeroSection from "./components/HeroSection";
import VideoSection from "./components/VideoSection";
import TestimonialsSection from "./components/TestimonialSection";
import CTASection from "./components/CTASection";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar />
      <HeroSection />
      <VideoSection />
      <TestimonialsSection />
      <CTASection /> */}
      <LandingPage />
    </div>
  );
};

export default App;