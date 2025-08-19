import Navigation from "../components/layout/navigation";
import HeroSection from "../components/sections/hero-section";
import ServicesSection from "../components/sections/services-section";
import StatsSection from "../components/sections/stats-section";
import PortfolioSection from "../components/sections/portfolio-section";
import AboutSection from "../components/sections/about-section";
import TestimonialsSection from "../components/sections/testimonials-section";
import ContactSection from "../components/sections/contact-section";
import Footer from "../components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-neural-bg text-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <PortfolioSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
