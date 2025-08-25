import React, { useState } from "react";
import { Brain, TrendingUp, Users, Magnet, FileText, Palette, Check, ChevronDown, ChevronUp, Zap, Star, ArrowRight } from "lucide-react";

export default function ServicesSection(): React.JSX.Element {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const services = [
    {
      slug: 'neuro-website',
      icon: Brain,
      title: "Neuro Marketing ভিত্তিক Website",
      description: "আমরা শুধু ওয়েবসাইট বিল্ড করি না, আমরা বিল্ড করি Psychology-driven Conversion Machine।",
      features: [
        "প্রতিটি ডিজাইন মানুষের ব্রেইনে প্রুভেন প্রভাব ফেলে",
        "প্রতিটি CTA সাইকোলজিক্যালি অপটিমাইজড",
        "প্রতিটি কালার কনভার্শন বাড়ায়"
      ],
      advanced: [
        "নিউরো-সাইকোলজিক্যাল ডিজাইন প্যাটার্ন",
        "ভিজুয়াল হায়ারার্কি অপটিমাইজেশন",
        "ইউজার বিহেভিয়ার ট্র্যাকিং",
        "কনভার্শন ফানেল অপটিমাইজেশন"
      ],
      stats: { success: "350%", metric: "Conversion বৃদ্ধি" }
    },
    {
      slug: 'neuro-content',
      icon: TrendingUp,
      title: "Neuro Marketing ভিত্তিক Content",
      description: "\"Content is King\" – কিন্তু Neuro Marketing-এ Content is Cash।",
      features: [
        "ভিজিটরের আবেগ ছুঁয়ে যাওয়া কনটেন্ট",
        "অ্যাকশনে নিয়ে আসা কপিরাইটিং",
        "সাইকোলজিক্যাল ট্রিগার ব্যবহার"
      ],
      advanced: [
        "নিউরো-লিঙ্গুইস্টিক প্রোগ্রামিং",
        "ইমোশনাল ট্রিগার ম্যাপিং",
        "পারসুয়েশন সাইকোলজি ফ্রেমওয়ার্ক",
        "বিহেভিয়ারাল কপিরাইটিং প্যাটার্ন"
      ],
      stats: { success: "280%", metric: "Engagement বৃদ্ধি" }
    },
    {
      slug: 'lead-magnet',
      icon: Magnet,
      title: "Neuro Marketing ভিত্তিক Lead Magnet",
      description: "ভিজিটরকে সরাসরি কিছু বিক্রি না করে আগে তার কাছে বিশ্বাস তৈরি করতে হয়।",
      features: [
        "ভিজিটরের ভয় কমানো লিড ম্যাগনেট",
        "বিশ্বাস তৈরিকারী অফার",
        "হাই-কনভার্টিং অপ্ট-ইন ফর্ম"
      ],
      advanced: [
        "ডায়নামিক পার্সোনালাইজেশন ইঞ্জিন",
        "বিহেভিয়ারাল ট্রিগার অটোমেশন",
        "সাইকোলজি-বেসড ফানেল ডিজাইন",
        "মাইক্রো-মোমেন্ট ক্যাপচার সিস্টেম"
      ],
      stats: { success: "450%", metric: "Lead Quality বৃদ্ধি" }
    },
    {
      slug: 'neuro-script',
      icon: FileText,
      title: "Neuro Marketing ভিত্তিক Script",
      description: "ভিডিও, বিজ্ঞাপন বা ওয়েবিনারের জন্য সঠিক স্ক্রিপ্ট = কাস্টমারের মনের দরজা খোলার চাবি।",
      features: [
        "মানুষের অবচেতন মনকে প্রভাবিত করা",
        "অ্যাকশনে বাধ্য করা স্ক্রিপ্ট",
        "ইমোশনাল কানেকশন তৈরি"
      ],
      advanced: [
        "নিউরো-লিঙ্গুইস্টিক স্ক্রিপ্টিং",
        "সাবলিমিনাল মেসেজিং টেকনিক",
        "পারসুয়েশন সিকুয়েন্সিং",
        "কগনিটিভ বায়াস অ্যাক্টিভেশন"
      ],
      stats: { success: "300%", metric: "Response Rate বৃদ্ধি" }
    },
    {
      slug: 'business-consultancy',
      icon: Users,
      title: "Neuro Marketing ভিত্তিক Business Consultancy",
      description: "বিজনেসে গ্রোথ শুধু স্ট্র্যাটেজি দিয়ে আসে না, গ্রাহকের মনের ভেতরে ঢুকতে জানতে হয়।",
      features: [
        "Neuro Marketing ব্যবহার করে ব্র্যান্ড বিল্ডিং",
        "বিশ্বাসযোগ্য ও লাভজনক করা",
        "বিজনেসের জন্য প্রপার প্ল্যান"
      ],
      advanced: [
        "সাইকোগ্রাফিক কাস্টমার সেগমেন্টেশন",
        "নিউরো-ইকোনমিক প্রাইসিং স্ট্র্যাটেজি",
        "বিহেভিয়ারাল ব্র্যান্ডিং ফ্রেমওয়ার্ক",
        "কগনিটিভ গ্রোথ হ্যাকিং"
      ],
      stats: { success: "400%", metric: "Business Growth" }
    },
    {
      slug: 'full-branding',
      icon: Palette,
      title: "Full Branding (ফুল ব্র্যান্ডিং)",
      description: "একটি ব্যবসা শুধু লোগো বা ওয়েবসাইট দিয়ে ব্র্যান্ড হয় না। ব্র্যান্ডিং মানে হলো, মানুষের মনে আপনার ব্যবসার একটি স্থায়ী ইমেজ তৈরি করা।",
      features: [
        "Logo থেকে Color Palette পর্যন্ত সব",
        "Typography ও Brand Voice ডিজাইন",
        "Social Media Presence সম্পূর্ণ সেটআপ"
      ],
      advanced: [
        "নিউরো-ব্র্যান্ডিং আর্কিটেকচার",
        "সাইকোলজিক্যাল কালার থিওরি",
        "ব্র্যান্ড পার্সোনালিটি ডেভেলপমেন্ট",
        "ইমোশনাল ব্র্যান্ড পজিশনিং"
      ],
      stats: { success: "500%", metric: "Brand Recognition" }
    }
  ];

  return (
    <section id="services" className="py-20 bg-neural-bg-secondary relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-montserrat font-bold mb-6">
            আমাদের <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">
              Neuro Marketing Based
            </span> সার্ভিসসমূহ
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            আমরা বিশ্বাস করি ওয়েবসাইট, কনটেন্ট, কিংবা বিজনেস স্ট্রেটেজি, সবকিছুই সফল হয় তখনই যখন সেটা মানুষের ব্রেইনের সাথে সংযোগ ঘটায়। তাই আমাদের প্রতিটি সার্ভিস Neuro Marketing-এর গভীর রিসার্চ ও প্রুভেন টেকনিকের ওপর দাঁড়ানো।
          </p>
          <p className="text-lg text-electric-blue mt-4 font-semibold">
            👉 নিচে দেখুন, কোন সার্ভিসটি আপনার জন্য সবচেয়ে দরকারি:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative glassmorphism-dark rounded-2xl p-8 hover-lift group overflow-hidden transition-all duration-500 cursor-pointer animate-shimmer ${
                expandedCard === index ? 'scale-105 z-10' : 'hover:scale-105'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-electric-blue via-neuro-purple to-neon-green transition-opacity duration-300 rounded-2xl ${
                hoveredCard === index || expandedCard === index ? 'opacity-20' : 'opacity-0'
              }`}></div>
              
              {/* Floating particles effect */}
              {hoveredCard === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-electric-blue rounded-full animate-bounce-gentle opacity-60"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${10 + (i % 3) * 30}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>
              )}
              
              <div className="relative z-10">
                {/* Stats Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-neon-green to-electric-blue text-white text-xs px-3 py-1 rounded-full font-bold animate-bounce-gentle">
                  +{service.stats.success}
                </div>
                
                <div className={`text-electric-blue text-4xl mb-6 transition-all duration-500 ${
                  hoveredCard === index ? 'scale-110 rotate-12' : ''
                }`}>
                  <service.icon size={48} />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-2xl font-montserrat font-semibold text-neuro-purple transition-colors duration-300 ${
                    hoveredCard === index ? 'text-electric-blue' : ''
                  }`}>
                    {service.title}
                  </h3>
                  <div className={`transition-transform duration-300 ${
                    expandedCard === index ? 'rotate-180' : ''
                  }`}>
                    {expandedCard === index ? (
                      <ChevronUp className="text-electric-blue" size={20} />
                    ) : (
                      <ChevronDown className="text-gray-400" size={20} />
                    )}
                  </div>
                </div>
                <p className={`text-gray-300 mb-6 transition-colors duration-300 ${
                  hoveredCard === index ? 'text-white' : ''
                }`}>
                  {service.description}
                </p>
                <ul className="text-sm text-gray-400 space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className={`flex items-center transition-transform duration-300 ${
                        hoveredCard === index ? 'translate-x-2' : ''
                      }`}
                      style={{transitionDelay: `${featureIndex * 0.1}s`}}
                    >
                      <Check className={`text-neon-green mr-3 h-4 w-4 transition-transform duration-300 ${
                        hoveredCard === index ? 'scale-125' : ''
                      }`} />
                      <span className={`transition-colors duration-300 ${
                        hoveredCard === index ? 'text-gray-200' : ''
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* View Details Button */}
                <a 
                  href={`/services/${service.slug}`}
                  className="block w-full bg-gradient-to-r from-electric-blue to-neuro-purple text-white text-center py-3 rounded-lg font-semibold hover:from-neuro-purple hover:to-electric-blue transition-all duration-300 group"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="flex items-center justify-center gap-2">
                    বিস্তারিত দেখুন
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                  </span>
                </a>
                
                {/* Expanded Content */}
                <div className={`transition-all duration-500 overflow-hidden ${
                  expandedCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="border-t border-electric-blue/30 pt-4 mt-4">
                    <div className="flex items-center mb-3">
                      <Zap className="text-neon-green mr-2" size={16} />
                      <span className="text-sm font-semibold text-electric-blue">Advanced Features</span>
                    </div>
                    <ul className="text-sm text-gray-300 space-y-2 mb-4">
                      {service.advanced.map((feature, advIndex) => (
                        <li key={advIndex} className="flex items-center">
                          <Star className="text-yellow-400 mr-2 h-3 w-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gradient-to-r from-electric-blue/20 to-neon-green/20 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-neon-green">+{service.stats.success}</div>
                      <div className="text-xs text-gray-300">{service.stats.metric}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced hover glow effect */}
              <div className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                hoveredCard === index || expandedCard === index ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neuro-purple to-transparent"></div>
                <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-neon-green to-transparent"></div>
                <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-electric-blue to-transparent"></div>
              </div>
              
              {/* Click indicator */}
              {expandedCard === index && (
                <div className="absolute inset-0 bg-electric-blue/5 rounded-2xl animate-pulse"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
