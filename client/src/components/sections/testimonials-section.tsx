import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from "lucide-react";

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

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
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 150);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 150);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(nextTestimonial, 4000);
    return () => clearInterval(interval);
  }, [autoPlay, isAnimating]);

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
          <div 
            className="relative glassmorphism-dark rounded-2xl p-8 text-center group overflow-hidden hover-lift"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            {/* Enhanced animated border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 via-neon-green/20 to-neuro-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl animate-shimmer"></div>
            
            {/* Floating quote icons */}
            <div className="absolute top-4 left-4 opacity-20">
              <Quote className="text-electric-blue animate-bounce-gentle" size={24} />
            </div>
            <div className="absolute top-4 right-4 opacity-20 rotate-180">
              <Quote className="text-neon-green animate-bounce-gentle" size={24} style={{animationDelay: '1s'}} />
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`text-neon-green fill-current transition-all duration-500 hover:scale-125 ${
                        isAnimating ? 'animate-bounce' : 'animate-bounce-gentle'
                      }`}
                      size={20}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
            
              <blockquote className={`text-2xl text-gray-200 mb-8 italic transition-all duration-300 ${
                isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
              }`}>
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className={`flex items-center justify-center space-x-4 transition-all duration-300 ${
                isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
              }`}>
                <div className="relative">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={`${testimonials[currentTestimonial].name} testimonial portrait`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-electric-blue transition-all duration-300 hover:scale-110"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-neon-green rounded-full p-1">
                    <Heart className="text-white" size={12} />
                  </div>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-400">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-electric-blue transition-all duration-300 hover:scale-110 animate-bounce-gentle"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-electric-blue transition-all duration-300 hover:scale-110 animate-bounce-gentle"
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
                className={`w-3 h-3 rounded-full transition-all duration-500 transform hover:scale-150 ${
                  index === currentTestimonial 
                    ? "bg-gradient-to-r from-neuro-purple to-electric-blue scale-125" 
                    : "bg-gray-600 hover:bg-gray-400"
                } animate-bounce-gentle`}
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}