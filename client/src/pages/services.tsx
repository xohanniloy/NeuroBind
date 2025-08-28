import Navigation from "../components/layout/navigation";
import ServicesSection from "../components/sections/services-section";
import Footer from "../components/layout/footer";

export default function Services() {
  return (
    <div className="min-h-screen bg-neural-bg text-white">
      <Navigation />
      <div className="pt-20">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
}