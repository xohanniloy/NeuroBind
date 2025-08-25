"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Brain, TrendingUp, Users, Magnet, FileText, Palette } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoAsset from "../../../attached_assets/Logo_1755595120037.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  const services = [
    {
      slug: 'neuro-website',
      icon: Brain,
      title: 'Neuro Website',
      bengaliTitle: 'নিউরো ওয়েবসাইট'
    },
    {
      slug: 'neuro-content',
      icon: TrendingUp,
      title: 'Neuro Content',
      bengaliTitle: 'নিউরো কনটেন্ট'
    },
    {
      slug: 'lead-magnet',
      icon: Magnet,
      title: 'Lead Magnet',
      bengaliTitle: 'লিড ম্যাগনেট'
    },
    {
      slug: 'neuro-script',
      icon: FileText,
      title: 'Neuro Script',
      bengaliTitle: 'নিউরো স্ক্রিপ্ট'
    },
    {
      slug: 'business-consultancy',
      icon: Users,
      title: 'Business Consultancy',
      bengaliTitle: 'বিজনেস কনসালট্যান্সি'
    },
    {
      slug: 'full-branding',
      icon: Palette,
      title: 'Full Branding',
      bengaliTitle: 'ফুল ব্র্যান্ডিং'
    }
  ];

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

  const isServicesActive = () => {
    return pathname === '/services' || pathname?.startsWith('/services/');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isServicesDropdownOpen) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isServicesDropdownOpen]);

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
            {/* Services Dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className={`relative group hover:text-electric-blue transition-all duration-300 transform hover:scale-105 flex items-center gap-1 ${
                  isServicesActive() ? "text-electric-blue" : ""
                }`}
              >
                <span className="relative z-10">Services</span>
                <ChevronDown className={`transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} size={16} />
                <span className={`absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neuro-purple/20 rounded-full transition-all duration-300 ${
                  isServicesActive() ? "w-full px-3 py-1" : "w-0 group-hover:w-full group-hover:px-3 group-hover:py-1"
                }`}></span>
              </button>
              
              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 glassmorphism-dark rounded-2xl p-6 shadow-2xl animate-slide-down z-50">
                  <div className="grid grid-cols-1 gap-3">
                    <Link 
                      href="/services"
                      onClick={() => setIsServicesDropdownOpen(false)}
                      className="block p-3 rounded-xl hover:bg-gradient-to-r hover:from-electric-blue/10 hover:to-neuro-purple/10 transition-all duration-300 border border-transparent hover:border-electric-blue/30"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-electric-blue/20 to-neuro-purple/20 rounded-lg">
                          <Menu size={16} className="text-electric-blue" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">All Services</div>
                          <div className="text-sm text-gray-400">সকল সার্ভিস দেখুন</div>
                        </div>
                      </div>
                    </Link>
                    {services.map((service) => {
                      const IconComponent = service.icon;
                      return (
                        <Link 
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setIsServicesDropdownOpen(false)}
                          className="block p-3 rounded-xl hover:bg-gradient-to-r hover:from-electric-blue/10 hover:to-neuro-purple/10 transition-all duration-300 border border-transparent hover:border-electric-blue/30"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-gradient-to-r from-electric-blue/20 to-neuro-purple/20 rounded-lg">
                              <IconComponent size={16} className="text-electric-blue" />
                            </div>
                            <div>
                              <div className="font-semibold text-white">{service.title}</div>
                              <div className="text-sm text-gray-400">{service.bengaliTitle}</div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
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
              <div className="space-y-2">
                <Link 
                  href="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-left hover:text-electric-blue transition-all duration-300 p-2 rounded-lg hover:bg-gradient-to-r hover:from-electric-blue/10 hover:to-neuro-purple/10 transform hover:translate-x-2 ${
                    isActive("/services") ? "text-electric-blue" : ""
                  }`}
                >
                  All Services
                </Link>
                <div className="pl-4 space-y-1">
                  {services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <Link 
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-electric-blue transition-all duration-300 p-2 rounded-lg hover:bg-gradient-to-r hover:from-electric-blue/10 hover:to-neuro-purple/10"
                      >
                        <IconComponent size={14} />
                        <span>{service.bengaliTitle}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
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