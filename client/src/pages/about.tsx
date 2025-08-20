import Navigation from "../components/layout/navigation";
import AboutSection from "../components/sections/about-section";
import Footer from "../components/layout/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-neural-bg text-white">
      <Navigation />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
}