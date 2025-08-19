import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Neuro Binding transformed our e-commerce site into a conversion machine. Our sales increased by 300% within the first month. Their understanding of customer psychology is unmatched.",
      name: "Ahmed Rahman",
      company: "CEO, TechCommerce BD",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      id: 2,
      quote: "The team's neuro marketing approach revolutionized our SaaS platform. User engagement went through the roof, and our trial-to-paid conversion rate doubled.",
      name: "Sarah Johnson",
      company: "Founder, DataFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      id: 3,
      quote: "Working with Neuro Binding was a game-changer. They didn't just build us a website; they built us a 24/7 sales machine that understands our customers better than we do.",
      name: "Michael Chen",
      company: "Director, InnovateLab",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-neural-bg to-deep-purple">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-montserrat font-bold mb-6">
            What Our <span className="bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300">Real results from real businesses</p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="glassmorphism-dark rounded-2xl p-8 text-center relative">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-neon-green fill-current" size={20} />
                ))}
              </div>
            </div>
            
            <blockquote className="text-2xl text-gray-200 mb-8 italic">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentTestimonial].avatar}
                alt={`${testimonials[currentTestimonial].name} testimonial portrait`}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-400">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-electric-blue transition-colors duration-300"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-electric-blue transition-colors duration-300"
            >
              <ChevronRight size={32} />
            </button>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? "bg-neuro-purple" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
