"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoAsset from "../../../attached_assets/Logo_1755595120037.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "glassmorphism-dark" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <img 
                src={logoAsset.src} 
                alt="Neuro Binding Logo" 
                className="h-12 w-auto transition-all duration-300 hover:scale-105 cursor-pointer" 
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`relative group hover:text-electric-blue transition-all duration-300 transform hover:scale-105 ${
              isActive("/") ? "text-electric-blue" : ""
            }`}>
              <span className="relative z-10">Home</span>
              <span className={`absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neuro-purple/20 rounded-full transition-all duration-300 ${
                isActive("/") ? "w-full px-3 py-1" : "w-0 group-hover:w-full group-hover:px-3 group-hover:py-1"
              }`}></span>
            </Link>
            <Link href="/services" className={`relative group hover:text-electric-blue transition-all duration-300 transform hover:scale-105 ${
              isActive("/services") ? "text-electric-blue" : ""
            }`}>
              <span className="relative z-10">Services</span>
              <span className={`absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neuro-purple/20 rounded-full transition-all duration-300 ${
                isActive("/services") ? "w-full px-3 py-1" : "w-0 group-hover:w-full group-hover:px-3 group-hover:py-1"
              }`}></span>
            </Link>
            <Link href="/portfolio" className={`relative group hover:text-electric-blue transition-all duration-300 transform hover:scale-105 ${
              isActive("/portfolio") ? "text-electric-blue" : ""
            }`}>
              <span className="relative z-10">Portfolio</span>
              <span className={`absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neuro-purple/20 rounded-full transition-all duration-300 ${
                isActive("/portfolio") ? "w-full px-3 py-1" : "w-0 group-hover:w-full group-hover:px-3 group-hover:py-1"
              }`}></span>
            </Link>
            <Link href="/about" className={`relative group hover:text-electric-blue transition-all duration-300 transform hover:scale-105 ${
              isActive("/about") ? "text-electric-blue" : ""
            }`}>
              <span className="relative z-10">About</span>
              <span className={`absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neuro-purple/20 rounded-full transition-all duration-300 ${
                isActive("/about") ? "w-full px-3 py-1" : "w-0 group-hover:w-full group-hover:px-3 group-hover:py-1"
              }`}></span>
            </Link>
            <Link href="/contact" className="relative bg-gradient-neural px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] group overflow-hidden">
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neuro-purple to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
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
          <div className="md:hidden mt-4 glassmorphism-dark rounded-2xl p-6 animate-slide-down">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left hover:text-electric-blue transition-all duration-300 p-2 rounded-lg hover:bg-gradient-to-r hover:from-electric-blue/10 hover:to-neuro-purple/10 transform hover:translate-x-2 ${
                  isActive("/") ? "text-electric-blue" : ""
                }`}
              >
                Home
              </Link>
              <Link 
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left hover:text-electric-blue transition-all duration-300 p-2 rounded-lg hover:bg-gradient-to-r hover:from-electric-blue/10 hover:to-neuro-purple/10 transform hover:translate-x-2 ${
                  isActive("/services") ? "text-electric-blue" : ""
                }`}
              >
                Services
              </Link>
              <Link 
                href="/portfolio"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left hover:text-electric-blue transition-all duration-300 p-2 rounded-lg hover:bg-gradient-to-r hover:from-electric-blue/10 hover:to-neuro-purple/10 transform hover:translate-x-2 ${
                  isActive("/portfolio") ? "text-electric-blue" : ""
                }`}
              >
                Portfolio
              </Link>
              <Link 
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left hover:text-electric-blue transition-all duration-300 p-2 rounded-lg hover:bg-gradient-to-r hover:from-electric-blue/10 hover:to-neuro-purple/10 transform hover:translate-x-2 ${
                  isActive("/about") ? "text-electric-blue" : ""
                }`}
              >
                About
              </Link>
              <Link 
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gradient-neural px-6 py-2 rounded-full hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300 text-center transform hover:scale-105 block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}