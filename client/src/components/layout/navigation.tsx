import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@assets/Logo_1755595120037.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "glassmorphism-dark" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={logoAsset} 
              alt="Neuro Binding Logo" 
              className="h-10 w-auto" 
            />
            <span className="text-2xl font-montserrat font-bold text-neuro-purple">
              Neuro Binding
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="hover:text-electric-blue transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="hover:text-electric-blue transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")}
              className="hover:text-electric-blue transition-colors duration-300"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="hover:text-electric-blue transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-neural px-6 py-2 rounded-full hover:opacity-90 transition-opacity duration-300"
            >
              Contact Us
            </button>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glassmorphism-dark rounded-2xl p-6">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-left hover:text-electric-blue transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-left hover:text-electric-blue transition-colors duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("portfolio")}
                className="text-left hover:text-electric-blue transition-colors duration-300"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-left hover:text-electric-blue transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-neural px-6 py-2 rounded-full hover:opacity-90 transition-opacity duration-300 text-center"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
