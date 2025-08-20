"use client";

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neural-bg-secondary border-t border-electric-blue/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-neuro-purple via-transparent to-electric-blue"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">
                  Neuro
                </span>
                <span className="text-white"> Binding</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Bangladesh's premier neuro marketing agency. We combine cutting-edge psychology 
                with stunning design to create websites that convert minds into customers.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gradient-to-r from-neuro-purple to-electric-blue flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg"
                aria-label="Facebook"
              >
                <Facebook size={16} className="text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gradient-to-r from-electric-blue to-neon-green flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg"
                aria-label="Twitter"
              >
                <Twitter size={16} className="text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-green to-neuro-purple flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gradient-to-r from-neuro-purple to-neon-green flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg"
                aria-label="Instagram"
              >
                <Instagram size={16} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-montserrat font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-electric-blue transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-electric-blue transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-electric-blue transition-colors duration-300 text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-electric-blue transition-colors duration-300 text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-electric-blue transition-colors duration-300 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-montserrat font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400 text-sm">Neuro Marketing Research</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Web Design & Development</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Conversion Optimization</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Brand Strategy</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Digital Marketing</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-montserrat font-bold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-electric-blue mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-400 text-sm">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-electric-blue flex-shrink-0" size={16} />
                <p className="text-gray-400 text-sm">+880 1XXX-XXXXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-electric-blue flex-shrink-0" size={16} />
                <p className="text-gray-400 text-sm">hello@neurobinding.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-electric-blue/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Neuro Binding. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-300 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}