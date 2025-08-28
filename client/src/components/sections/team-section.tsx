import { Brain, Code, Lightbulb, Target, TrendingUp, Users, Mail, Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const teamMembers = [
  {
    name: "Dr. Shahida Rahman",
    role: "Chief Neuro Psychologist",
    expertise: "Consumer Psychology & Behavioral Analysis",
    image: "https://images.unsplash.com/photo-1594736797933-d0ca9d3c01ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    bio: "15+ years in neuroscience research. Leads our neuro marketing strategies that convert 40% better than traditional approaches.",
    detailedBio: "Dr. Rahman holds a PhD in Cognitive Neuroscience from Dhaka University and has published 25+ research papers on consumer behavior. She pioneered the application of EEG analysis in web design optimization, helping our clients achieve unprecedented conversion rates.",
    specialties: ["Consumer Psychology", "Behavioral Analytics", "Decision Science"],
    achievements: ["25+ Research Papers", "PhD Cognitive Neuroscience", "TEDx Speaker"],
    social: { linkedin: "#", twitter: "#", email: "shahida@neurobinding.com" },
    icon: Brain,
    gradient: "from-neuro-purple to-electric-blue",
    accentColor: "neuro-purple"
  },
  {
    name: "Tanvir Ahmed",
    role: "Creative Director",
    expertise: "Neural-Responsive Design Systems",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    bio: "Award-winning designer with expertise in creating visually compelling experiences that trigger subconscious engagement.",
    detailedBio: "With 8+ years in design and multiple international awards, Tanvir specializes in neuro-responsive interfaces. His designs have increased user engagement by 350% on average through strategic use of color psychology and micro-interactions.",
    specialties: ["Visual Psychology", "UX Design", "Brand Strategy"],
    achievements: ["Design Awards Winner", "350% Engagement Boost", "Brand Strategy Expert"],
    social: { linkedin: "#", twitter: "#", email: "tanvir@neurobinding.com" },
    icon: Lightbulb,
    gradient: "from-electric-blue to-neon-green",
    accentColor: "electric-blue"
  },
  {
    name: "Faisal Khan",
    role: "Lead Full-Stack Developer",
    expertise: "Performance-Optimized Web Applications",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    bio: "Expert in React, Node.js, and modern web technologies. Builds lightning-fast websites that rank #1 on Google.",
    detailedBio: "Senior developer with 10+ years building scalable applications. Faisal's websites consistently achieve 98+ PageSpeed scores and have helped clients save $2M+ in hosting costs through optimization.",
    specialties: ["React & Next.js", "Performance Optimization", "SEO Engineering"],
    achievements: ["98+ PageSpeed Scores", "$2M+ Cost Savings", "10+ Years Experience"],
    social: { linkedin: "#", github: "#", email: "faisal@neurobinding.com" },
    icon: Code,
    gradient: "from-neon-green to-neuro-purple",
    accentColor: "neon-green"
  },
  {
    name: "Nafisa Sultana",
    role: "Data Analytics Manager",
    expertise: "Conversion Rate Optimization",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    bio: "Uses advanced analytics and A/B testing to continuously improve website performance and user engagement rates.",
    detailedBio: "Data scientist with expertise in predictive analytics and machine learning. Nafisa's optimization strategies have improved conversion rates by 400%+ across 100+ websites using advanced statistical modeling.",
    specialties: ["A/B Testing", "Data Analysis", "CRO Strategy"],
    achievements: ["400%+ Conversion Boost", "100+ Websites Optimized", "ML Expert"],
    social: { linkedin: "#", twitter: "#", email: "nafisa@neurobinding.com" },
    icon: TrendingUp,
    gradient: "from-neuro-purple to-neon-green",
    accentColor: "neuro-purple"
  },
  {
    name: "Rashid Hasan",
    role: "Client Strategy Lead",
    expertise: "Business Growth & Digital Marketing",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    bio: "Helps clients achieve 3x revenue growth through strategic digital transformation and neuro marketing implementation.",
    detailedBio: "Business strategist with MBA from IBA and 12+ years in digital marketing. Rashid has generated $50M+ in additional revenue for clients through data-driven neuro marketing campaigns.",
    specialties: ["Digital Strategy", "Marketing Automation", "ROI Optimization"],
    achievements: ["$50M+ Revenue Generated", "MBA IBA", "12+ Years Experience"],
    social: { linkedin: "#", twitter: "#", email: "rashid@neurobinding.com" },
    icon: Target,
    gradient: "from-electric-blue to-neuro-purple",
    accentColor: "electric-blue"
  },
  {
    name: "Amina Khatun",
    role: "Project Manager",
    expertise: "Agile Development & Client Relations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    bio: "Ensures seamless project delivery and maintains 98% client satisfaction rate through effective communication and management.",
    detailedBio: "Certified PMP with 7+ years managing complex digital projects. Amina has delivered 200+ projects on time and budget, maintaining industry-leading 98% client satisfaction through innovative project methodologies.",
    specialties: ["Project Management", "Client Relations", "Quality Assurance"],
    achievements: ["200+ Projects Delivered", "98% Client Satisfaction", "PMP Certified"],
    social: { linkedin: "#", email: "amina@neurobinding.com" },
    icon: Users,
    gradient: "from-neon-green to-electric-blue",
    accentColor: "neon-green"
  }
];

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [expandedMember, setExpandedMember] = useState<string | null>(null);
  const [animatingStats, setAnimatingStats] = useState(false);

  const stats = [
    { number: 25, suffix: "+", label: "Expert Team Members", color: "neon-green" },
    { number: 5, suffix: "+", label: "Years Experience", color: "electric-blue" },
    { number: 200, suffix: "+", label: "Projects Delivered", color: "neuro-purple" },
    { number: 98, suffix: "%", label: "Client Satisfaction", color: "neon-green" }
  ];

  return (
    <section id="team" className="py-20 bg-neural-bg relative overflow-hidden">
      {/* Animated Background with Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neuro-purple/10 via-transparent to-electric-blue/10"></div>
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-electric-blue to-neon-green rounded-full animate-float opacity-20`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold mb-6">
            <span className="bg-gradient-to-r from-neuro-purple via-electric-blue to-neon-green bg-clip-text text-transparent">
              Meet Our
            </span>
            <br />
            <span className="text-white">Neuro Marketing Experts</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our diverse team of psychologists, designers, and developers combines scientific research 
            with creative excellence to build websites that convert minds into customers.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-neuro-purple to-electric-blue mx-auto rounded-full"></div>
        </div>

        {/* Interactive Team Stats */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          onMouseEnter={() => setAnimatingStats(true)}
        >
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="glassmorphism-dark rounded-xl p-6 text-center hover-lift group transition-all duration-500 animate-slide-up cursor-pointer border border-transparent hover:border-electric-blue/30"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`text-3xl font-montserrat font-bold text-${stat.color} mb-2 group-hover:scale-125 transition-all duration-500 ${animatingStats ? 'animate-bounce-gentle' : ''}`}>
                {stat.number}{stat.suffix}
              </div>
              <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">{stat.label}</p>
              {/* Progress bar animation */}
              <div className="w-full bg-gray-700 rounded-full h-1 mt-3 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r from-${stat.color}/50 to-${stat.color} transition-all duration-1000 group-hover:w-full`}
                  style={{ width: hoveredMember ? '100%' : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            const isExpanded = expandedMember === member.name;
            const isHovered = hoveredMember === member.name;
            
            return (
              <div 
                key={member.name}
                className={`glassmorphism-dark rounded-2xl p-6 hover-lift group transition-all duration-500 animate-slide-up cursor-pointer border-2 ${
                  isExpanded ? 'border-electric-blue' : 'border-transparent hover:border-electric-blue/30'
                } ${isExpanded ? 'lg:col-span-2' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredMember(member.name)}
                onMouseLeave={() => setHoveredMember(null)}
                onClick={() => setExpandedMember(isExpanded ? null : member.name)}
                data-testid={`team-member-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={`${isExpanded ? 'grid grid-cols-1 lg:grid-cols-2 gap-6' : ''}`}>
                  <div>
                    {/* Member Image & Icon */}
                    <div className="relative mb-6">
                      <div className={`${isExpanded ? 'w-40 h-40' : 'w-32 h-32'} mx-auto rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br ${member.gradient} p-1 group-hover:scale-105 transition-all duration-500`}>
                        <img
                          src={member.image}
                          alt={`${member.name} - ${member.role} at Neuro Binding`}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center transition-all duration-300 shadow-lg ${
                        isHovered ? 'scale-125 rotate-12' : 'group-hover:scale-110 group-hover:rotate-12'
                      }`}>
                        <IconComponent className="text-white" size={20} />
                      </div>
                      
                      {/* Animated ring */}
                      {isHovered && (
                        <div className="absolute inset-0 rounded-full border-2 border-electric-blue animate-ping opacity-30"></div>
                      )}
                    </div>

                    {/* Member Info */}
                    <div className="text-center">
                      <h3 className={`text-xl font-montserrat font-bold text-white mb-2 transition-colors duration-300 ${
                        isExpanded ? 'text-electric-blue' : 'group-hover:text-electric-blue'
                      }`}>
                        {member.name}
                      </h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-3`}>
                        {member.role}
                      </p>
                      <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-200 transition-colors duration-300">
                        {isExpanded ? member.detailedBio : member.bio}
                      </p>
                      
                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {member.specialties.map((specialty, idx) => (
                          <span 
                            key={idx}
                            className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r from-neuro-purple/20 to-electric-blue/20 border transition-all duration-300 ${
                              isHovered ? 'border-electric-blue/70 text-white scale-105' : 'border-neuro-purple/30 text-gray-300 group-hover:border-electric-blue/50 group-hover:text-white'
                            }`}
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="lg:pl-6 animate-slide-up">
                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-montserrat font-bold text-electric-blue mb-3">Key Achievements</h4>
                        <div className="space-y-2">
                          {member.achievements.map((achievement, idx) => (
                            <div 
                              key={idx}
                              className="flex items-center space-x-3 animate-slide-up"
                              style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                              <div className={`w-2 h-2 rounded-full bg-${member.accentColor}`}></div>
                              <span className="text-gray-300 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="mb-6">
                        <h4 className="text-lg font-montserrat font-bold text-electric-blue mb-3">Connect</h4>
                        <div className="flex space-x-4">
                          {member.social.email && (
                            <a 
                              href={`mailto:${member.social.email}`}
                              className={`w-10 h-10 rounded-full bg-gradient-to-r ${member.gradient} flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                              data-testid={`social-email-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              <Mail size={16} className="text-white" />
                            </a>
                          )}
                          {member.social.linkedin && (
                            <a 
                              href={member.social.linkedin}
                              className={`w-10 h-10 rounded-full bg-gradient-to-r ${member.gradient} flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                              data-testid={`social-linkedin-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              <Linkedin size={16} className="text-white" />
                            </a>
                          )}
                          {member.social.twitter && (
                            <a 
                              href={member.social.twitter}
                              className={`w-10 h-10 rounded-full bg-gradient-to-r ${member.gradient} flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                              data-testid={`social-twitter-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              <Twitter size={16} className="text-white" />
                            </a>
                          )}
                          {member.social.github && (
                            <a 
                              href={member.social.github}
                              className={`w-10 h-10 rounded-full bg-gradient-to-r ${member.gradient} flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                              data-testid={`social-github-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              <Github size={16} className="text-white" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Call to Action */}
                      <Button 
                        size="sm"
                        className={`bg-gradient-to-r ${member.gradient} px-6 py-2 rounded-full text-sm font-semibold hover-lift group w-full`}
                        data-testid={`button-contact-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <span className="relative z-10">Schedule 1-on-1 Meeting</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                      </Button>
                    </div>
                  )}
                </div>

                {/* Click indicator */}
                <div className="text-center mt-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs text-gray-400">
                    {isExpanded ? 'Click to collapse' : 'Click to expand profile'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-slide-up">
          <div className="glassmorphism-dark rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
              Ready to Work with the Best?
            </h3>
            <p className="text-gray-300 mb-6">
              Let our expert team transform your website into a conversion machine using proven neuro marketing strategies.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-neural px-8 py-4 rounded-full text-lg font-semibold hover-lift group"
              data-testid="button-contact-team"
            >
              <span className="relative z-10">Get Your Free Strategy Session</span>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-green opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}