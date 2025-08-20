import Navigation from "../components/layout/navigation";
import ContactSection from "../components/sections/contact-section";
import Footer from "../components/layout/footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-neural-bg text-white">
      <Navigation />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}