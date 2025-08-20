import Navigation from "../components/layout/navigation";
import PortfolioSection from "../components/sections/portfolio-section";
import Footer from "../components/layout/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neural-bg text-white">
      <Navigation />
      <div className="pt-20">
        <PortfolioSection />
      </div>
      <Footer />
    </div>
  );
}