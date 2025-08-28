import Navigation from "../components/layout/navigation";
import HeroSection from "../components/sections/hero-section";
import AboutSection from "../components/sections/about-section";
import ServicesSection from "../components/sections/services-section";
import TeamSection from "../components/sections/team-section";
import PortfolioSection from "../components/sections/portfolio-section";
import ContactSection from "../components/sections/contact-section";
import StatsSection from "../components/sections/stats-section";
import TestimonialsSection from "../components/sections/testimonials-section";
import Footer from "../components/layout/footer";
import FloatingActionButton from "../components/ui/floating-action-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-neural-bg text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <PortfolioSection />
      <ContactSection />
      <StatsSection />
      <TestimonialsSection />
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
