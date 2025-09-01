import { useState } from "react";
import { Calendar, Clock, User, ArrowRight, ChevronDown, ChevronUp, BookOpen, Share2, Heart, Bookmark, UtensilsCrossed, ShoppingCart, Shirt, GraduationCap, Stethoscope } from "lucide-react";
import { Link } from "wouter";
import Navigation from "../components/layout/navigation";
import Footer from "../components/layout/footer";
import FloatingActionButton from "../components/ui/floating-action-button";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export default function Blog() {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set());

  const featuredPost = {
    title: "ল্যান্ডিং পেজের শুরুতেই কেন Problem/Pain Point হাইলাইট করা জরুরি?",
    subtitle: "Neuro Marketing এর আলোকে",
    excerpt: "Trust Gap কমানো এবং মানুষের ব্রেইনের survival instinct কে কাজে লাগিয়ে কিভাবে আপনার ল্যান্ডিং পেজে conversion বাড়াবেন। জানুন Problem/Pain Point হাইলাইট করার বৈজ্ঞানিক কৌশল।",
    author: "Neuro Binding Team",
    date: "2025-01-31",
    readTime: "18 min read",
    category: "Neuro Marketing",
    tags: ["Landing Page", "Pain Point", "Conversion", "Trust Building"],
    slug: "landing-page-pain-point-neuro-marketing"
  };

  const recentPosts = [
    {
      title: "Lead Magnet Ideas for Bangladeshi Businesses",
      subtitle: "বাংলাদেশি ব্যবসাগুলোর জন্য ৫৭টি অসাধারণ লিড ম্যাগনেট আইডিয়া",
      excerpt: "বাংলাদেশি ব্যবসাগুলোর জন্য ৫৭টি অসাধারণ লিড ম্যাগনেট আইডিয়া যা আপনার কাস্টমারদের আকর্ষিত করবে এবং বিক্রয় বৃদ্ধি করবে।",
      author: "Neuro Binding Team",
      date: "2025-01-17",
      readTime: "15 min read",
      category: "Marketing Strategy",
      tags: ["Lead Generation", "Bangladesh Business", "Marketing"],
    },
    {
      title: "Why Neuro-Marketing Comes in?",
      subtitle: "কেন নিউরো মার্কেটিং দরকার হয়ে উঠলো?",
      excerpt: "আজকের ব্যবসার সবচেয়ে বড় চ্যালেঞ্জ হলো মানুষের মনোযোগ পাওয়া। প্রতিদিন একজন মানুষ ৫০০০+ বিজ্ঞাপন দেখে কিন্তু সময় দেয় মাত্র ৮ সেকেন্ড।",
      author: "Neuro Binding Team",
      date: "2025-01-28",
      readTime: "12 min read",
      category: "Neuro Marketing",
      tags: ["Consumer Psychology", "Brain Science"],
      slug: "why-neuro-marketing-comes-in"
    }
  ];

  const businessSections = [
    {
      id: 1,
      title: "রেস্টুরেন্ট ফুড নিয়ে আগ্রহী করার ১০টি লিড ম্যাগনেট আইডিয়া",
      icon: UtensilsCrossed,
      iconColor: "text-orange-400",
      preview: "ঢাকার সবচেয়ে জনপ্রিয় রেস্টুরেন্টগুলোর রেসিপি এবং শেফদের সিক্রেট টিপস...",
      content: [
        "ঢাকার সবচেয়ে জনপ্রিয় রেস্টুরেন্টগুলোর ১০টি সিক্রেট রেসিপি",
        "শেফদের মুখে শোনা—কেন রেস্টুরেন্ট খাবারের টেস্ট আলাদা হয়?",
        "৫টি রেস্টুরেন্ট ফুড হ্যাক যা আপনি জানলে ঘরে টেস্ট পাবেন না",
        "বাংলাদেশের বিখ্যাত ৭টি রেস্টুরেন্ট ডিশ—যা একবার খেলেই মনে থাকবে",
        "রেস্টুরেন্ট স্টাইলে পরিবেশনের ১০টি সিক্রেট আইডিয়া",
        "কেন রেস্টুরেন্ট ফুড বন্ধু-বান্ধবদের সাথে আড্ডার মুডকে বদলে দেয়?",
        "বিশ্বের ১০টি খাবার যা শুধু রেস্টুরেন্টে খাওয়ার আনন্দ পাওয়া যায়",
        "রেস্টুরেন্ট বনাম ঘরের রান্না—কেন টেস্টে এত পার্থক্য?",
        "শেফদের টপ ৫ সিক্রেট স্পাইস—যা শুধু রেস্টুরেন্টেই পাওয়া যায়",
        "রেস্টুরেন্ট খাবারের সেরা কম্বিনেশন গাইড—কোন খাবারের সাথে কোনটা খেলে টেস্ট দ্বিগুণ?"
      ]
    },
    {
      id: 2,
      title: "ই-কমার্স শপিং-এ আগ্রহ বাড়ানোর ১০টি লিড ম্যাগনেট আইডিয়া",
      icon: ShoppingCart,
      iconColor: "text-green-400",
      preview: "অনলাইন শপিংয়ের সেরা ডিল এবং এক্সক্লুসিভ গ্যাজেট...",
      content: [
        "বাংলাদেশের অনলাইন শপিংয়ে সবচেয়ে বেশি সেল হওয়া ১০টি পণ্যের তালিকা",
        "শুধু ই-কমার্সেই পাওয়া যায়—৫টি এক্সক্লুসিভ গ্যাজেট",
        "অনলাইন ডিসকাউন্টের লুকানো সিক্রেট—কিভাবে অর্ধেক দামে পছন্দের জিনিস কিনবেন",
        "রিভিউ দেখে কিভাবে ১০০% আসল প্রোডাক্ট বেছে নেবেন?",
        "শুধু অনলাইন প্ল্যাটফর্মে পাওয়া যায় এমন ৭টি ফ্যাশন ট্রেন্ড",
        "বছরের সেরা ই-কমার্স ডিল গাইড—যা দোকানে কখনোই পাবেন না",
        "অনলাইনে অর্ডার করলে ডেলিভারি চার্জ বাঁচানোর ৫টি উপায়",
        "মোবাইল দিয়ে কিভাবে মাত্র ৩ মিনিটে শপিং করবেন—এক্সপার্ট টিপস",
        "কেন অনলাইন শপিং ব্যস্ত মানুষদের জন্য সময় বাঁচানোর ম্যাজিক?",
        "ই-কমার্স শপিং-এর সেরা কম্বো অফার—একসাথে কিনলে দ্বিগুণ সাশ্রয়"
      ]
    },
    {
      id: 3,
      title: "ফ্যাশন / বুটিক ব্যবসার জন্য ১০টি লিড ম্যাগনেট",
      icon: Shirt,
      iconColor: "text-pink-400",
      preview: "ট্রেন্ডিং ফ্যাশন কালেকশন এবং পার্টি ড্রেস...",
      content: [
        "বাংলাদেশের ট্রেন্ডিং ১০টি ফ্যাশন কালেকশন",
        "এখনকার সিজনের সবচেয়ে হট ৭টি পোশাক",
        "পার্টির জন্য অবশ্যই লাগবে এমন ৫টি ড্রেস",
        "শুধু বুটিকে পাওয়া যায়—এক্সক্লুসিভ ১০টি ফ্যাশন আইটেম",
        "শাড়ি ও জুতার পারফেক্ট কম্বিনেশন গাইড",
        "কেন এই ৭টি ফ্যাশন ট্রেন্ড তরুণদের মধ্যে ভাইরাল হচ্ছে?",
        "অফিসে পরার জন্য সেরা ৫টি আউটফিট আইডিয়া",
        "কোন রঙ কোন অনুষ্ঠানের জন্য পারফেক্ট?",
        "ফ্যাশন আইকনদের ফলো করা ১০টি পোশাক ডিজাইন",
        "বুটিক পোশাকের সেরা এক্সেসরিজ কম্বো লিস্ট"
      ]
    },
    {
      id: 4,
      title: "কোচিং সেন্টার / শিক্ষার জন্য ১০টি লিড ম্যাগনেট",
      icon: GraduationCap,
      iconColor: "text-blue-400",
      preview: "সফল কোচিং এর সিক্রেট এবং স্টাডি হ্যাক...",
      content: [
        "বাংলাদেশের সবচেয়ে বেশি স্টুডেন্ট জয়ী হওয়া ১০টি কোচিং",
        "কেন এই ৫টি পড়ার টেকনিক আপনাকে টপার বানাতে পারে?",
        "ভর্তি পরীক্ষায় সাফল্যের জন্য সবচেয়ে হেল্পফুল ৭টি বই",
        "শুধু এই কোচিং সেন্টারেই শিখতে পাবেন এমন সিক্রেট ট্রিক",
        "এই ১০টি স্টাডি হ্যাক ব্যবহার করলে মার্কস দ্বিগুণ হবে",
        "কেন এই ৫টি কোচিং সেন্টার বিশ্ববিদ্যালয় ভর্তি পরীক্ষায় নাম্বার ওয়ান?",
        "প্রতিদিন মাত্র ২ ঘণ্টা পড়েই কিভাবে ভালো রেজাল্ট করবেন",
        "শিক্ষকের টপ ৫ সাজেশন—যা পরীক্ষার আগে অবশ্যই পড়তে হবে",
        "বাংলাদেশের টপাররা কোন কোচিং এ পড়েছে?",
        "অ্যাডমিশন টেস্টে সাফল্যের জন্য ৭টি প্রমাণিত টেকনিক"
      ]
    },
    {
      id: 5,
      title: "স্বাস্থ্য / হেলথকেয়ার ব্যবসার জন্য ১০টি লিড ম্যাগনেট",
      icon: Stethoscope,
      iconColor: "text-red-400",
      preview: "ঘরোয়া চিকিৎসা এবং দেশি ভেষজের গোপন উপকারিতা...",
      content: [
        "বাংলাদেশের সবচেয়ে কার্যকর ১০টি ঘরোয়া চিকিৎসা",
        "ডাক্তারের পরামর্শ ছাড়াই ৫টি স্বাস্থ্য সমস্যার সমাধান",
        "কেন এই ৭টি খাবার আপনার রোগ প্রতিরোধ ক্ষমতা বাড়াবে?",
        "শুধু হেলথকেয়ার সেন্টারেই পাওয়া যায় এমন ৫টি বিশেষ সেবা",
        "দেশি ভেষজ দিয়ে ১০টি কমন রোগের চিকিৎসা",
        "কেন এই ৫টি হেলথ টিপস বাংলাদেশিদের জন্য বিশেষভাবে কার্যকর?",
        "দৈনিক ১৫ মিনিট ব্যায়ামে কিভাবে ফিট থাকবেন",
        "হেলথ চেকআপের সেরা ৫টি প্যাকেজ—কোনটা আপনার জন্য?",
        "বাংলাদেশি খাবারে লুকানো ১০টি স্বাস্থ্য উপকারিতা",
        "ব্যস্ত জীবনে সুস্থ থাকার ৭টি সহজ উপায়"
      ]
    }
  ];

  const toggleSection = (sectionId: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const fullContent = `🔥 ব্যবসা ১: রেস্টুরেন্ট ফুড নিয়ে আগ্রহী করার ১০টি লিড ম্যাগনেট আইডিয়া

"ঢাকার সবচেয়ে জনপ্রিয় রেস্টুরেন্টগুলোর ১০টি সিক্রেট রেসিপি"
"শেফদের মুখে শোনা—কেন রেস্টুরেন্ট খাবারের টেস্ট আলাদা হয়?"
"৫টি রেস্টুরেন্ট ফুড হ্যাক যা আপনি জানলে ঘরে টেস্ট পাবেন না"
"বাংলাদেশের বিখ্যাত ৭টি রেস্টুরেন্ট ডিশ—যা একবার খেলেই মনে থাকবে"
"রেস্টুরেন্ট স্টাইলে পরিবেশনের ১০টি সিক্রেট আইডিয়া"
"কেন রেস্টুরেন্ট ফুড বন্ধু-বান্ধবদের সাথে আড্ডার মুডকে বদলে দেয়?"
"বিশ্বের ১০টি খাবার যা শুধু রেস্টুরেন্টে খাওয়ার আনন্দ পাওয়া যায়"
"রেস্টুরেন্ট বনাম ঘরের রান্না—কেন টেস্টে এত পার্থক্য?"
"শেফদের টপ ৫ সিক্রেট স্পাইস—যা শুধু রেস্টুরেন্টেই পাওয়া যায়"
"রেস্টুরেন্ট খাবারের সেরা কম্বিনেশন গাইড—কোন খাবারের সাথে কোনটা খেলে টেস্ট দ্বিগুণ?"

🔥 ব্যবসা ২: ই-কমার্স শপিং-এ আগ্রহ বাড়ানোর ১০টি লিড ম্যাগনেট আইডিয়া

"বাংলাদেশের অনলাইন শপিংয়ে সবচেয়ে বেশি সেল হওয়া ১০টি পণ্যের তালিকা"
"শুধু ই-কমার্সেই পাওয়া যায়—৫টি এক্সক্লুসিভ গ্যাজেট"
"অনলাইন ডিসকাউন্টের লুকানো সিক্রেট—কিভাবে অর্ধেক দামে পছন্দের জিনিস কিনবেন"
"রিভিউ দেখে কিভাবে ১০০% আসল প্রোডাক্ট বেছে নেবেন?"
"শুধু অনলাইন প্ল্যাটফর্মে পাওয়া যায় এমন ৭টি ফ্যাশন ট্রেন্ড"
"বছরের সেরা ই-কমার্স ডিল গাইড—যা দোকানে কখনোই পাবেন না"
"অনলাইনে অর্ডার করলে ডেলিভারি চার্জ বাঁচানোর ৫টি উপায়"
"মোবাইল দিয়ে কিভাবে মাত্র ৩ মিনিটে শপিং করবেন—এক্সপার্ট টিপস"
"কেন অনলাইন শপিং ব্যস্ত মানুষদের জন্য সময় বাঁচানোর ম্যাজিক?"
"ই-কমার্স শপিং-এর সেরা কম্বো অফার—একসাথে কিনলে দ্বিগুণ সাশ্রয়"

🔥 ব্যবসা ৩: ফ্যাশন / বুটিক

"বাংলাদেশের ট্রেন্ডিং ১০টি ফ্যাশন কালেকশন"
"এখনকার সিজনের সবচেয়ে হট ৭টি পোশাক"
"পার্টির জন্য অবশ্যই লাগবে এমন ৫টি ড্রেস"
"শুধু বুটিকে পাওয়া যায়—এক্সক্লুসিভ ১০টি ফ্যাশন আইটেম"
"শাড়ি ও জুতার পারফেক্ট কম্বিনেশন গাইড"
"কেন এই ৭টি ফ্যাশন ট্রেন্ড তরুণদের মধ্যে ভাইরাল হচ্ছে?"
"অফিসে পরার জন্য সেরা ৫টি আউটফিট আইডিয়া"
"কোন রঙ কোন অনুষ্ঠানের জন্য পারফেক্ট?"
"ফ্যাশন আইকনদের ফলো করা ১০টি পোশাক ডিজাইন"
"বুটিক পোশাকের সেরা এক্সেসরিজ কম্বো লিস্ট"

🔥 ব্যবসা ৪: কোচিং সেন্টার / শিক্ষা

"বাংলাদেশের সবচেয়ে বেশি স্টুডেন্ট জয়ী হওয়া ১০টি কোচিং"
"কেন এই ৫টি পড়ার টেকনিক আপনাকে টপার বানাতে পারে?"
"ভর্তি পরীক্ষায় সাফল্যের জন্য সবচেয়ে হেল্পফুল ৭টি বই"
"শুধু এই কোচিং সেন্টারেই শিখতে পাবেন এমন সিক্রেট ট্রিক"
"এই ১০টি স্টাডি হ্যাক ব্যবহার করলে মার্কস দ্বিগুণ হবে"
"কেন এই ৫টি কোচিং সেন্টার বিশ্ববিদ্যালয় ভর্তি পরীক্ষায় নাম্বার ওয়ান?"
"প্রতিদিন মাত্র ২ ঘণ্টা পড়েই কিভাবে ভালো রেজাল্ট করবেন"
"শিক্ষকের টপ ৫ সাজেশন—যা পরীক্ষার আগে অবশ্যই পড়তে হবে"
"বাংলাদেশের টপাররা কোন কোচিং এ পড়েছে?"
"অ্যাডমিশন টেস্টে সাফল্যের জন্য ৭টি প্রমাণিত টেকনিক"

🔥 ব্যবসা ৫: স্বাস্থ্য / হেলথকেয়ার

"বাংলাদেশের সবচেয়ে কার্যকর ১০টি ঘরোয়া চিকিৎসা"
"ডাক্তারের পরামর্শ ছাড়াই ৫টি স্বাস্থ্য সমস্যার সমাধান"
"কেন এই ৭টি খাবার আপনার রোগ প্রতিরোধ ক্ষমতা বাড়াবে?"
"শুধু হেলথকেয়ার সেন্টারেই পাওয়া যায় এমন ৫টি বিশেষ সেবা"
"দেশি ভেষজ দিয়ে ১০টি কমন রোগের চিকিৎসা"
"কেন এই ৫টি হেলথ টিপস বাংলাদেশিদের জন্য বিশেষভাবে কার্যকর?"
"দৈনিক ১৫ মিনিট ব্যায়ামে কিভাবে ফিট থাকবেন"
"হেলথ চেকআপের সেরা ৫টি প্যাকেজ—কোনটা আপনার জন্য?"
"বাংলাদেশি খাবারে লুকানো ১০টি স্বাস্থ্য উপকারিতা"
"ব্যস্ত জীবনে সুস্থ থাকার ৭টি সহজ উপায়"

... এবং আরও ৫২টি ব্যবসার জন্য বিশেষভাবে তৈরি লিড ম্যাগনেট আইডিয়া!`;

  return (
    <div className="min-h-screen bg-neural-bg text-white">
      <Navigation />
      
      {/* Featured Blog Posts */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-neural-bg to-neural-bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-white mb-12">
            <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">
              🔥 Latest
            </span> Articles
          </h2>
          
          {/* New Featured Post - 24/7 Neuro Marketing Secret */}
          <div className="mb-12">
            <Link href="/blog/24-7-neuro-marketing-secret">
              <div className="glassmorphism-dark rounded-3xl overflow-hidden hover-lift cursor-pointer group transition-all duration-500 border border-electric-blue/10 hover:border-electric-blue/30 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                      alt="24/7 Neuro Marketing Secret"
                      className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full animate-pulse">
                        🔥 New
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <Badge variant="outline" className="border-orange-400 text-orange-400">
                        Website Optimization
                      </Badge>
                      <Badge variant="secondary" className="bg-red-500/20 text-gray-300">
                        Sales Strategy
                      </Badge>
                    </div>
                    
                    <h3 className="text-3xl font-montserrat font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                      ⚡ ওয়েবসাইটকে 24/7 সেলসম্যান বানানোর ৭টি Neuro Marketing Secret
                    </h3>
                    
                    <p className="text-gray-300 text-lg mb-8 group-hover:text-gray-200 transition-colors duration-300 line-clamp-3">
                      আজকের ডিজিটাল যুগে একটা ওয়েবসাইট শুধু "অনলাইন ভিজিটিং কার্ড" থাকলেই হবে না। সেটা হতে হবে একজন নিরবচ্ছিন্ন সেলসম্যান। জানুন ৭টি গোপন কৌশল যা আপনার ওয়েবসাইটকে ২৪/৭ কাস্টমার আনতে থাকবে...
                    </p>
                    
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                          <User className="text-white" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold text-white">Neuro Binding Team</p>
                          <p className="text-sm text-gray-400">Jan 29, 2025 • 15 min read</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-gray-400">
                        <div className="flex items-center gap-2">
                          <Heart size={16} />
                          <span className="text-sm">412</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Share2 size={16} />
                          <span className="text-sm">Share</span>
                        </div>
                      </div>
                      
                      <Button className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-full hover-lift group/btn">
                        Read Full Article
                        <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Previous Featured Post */}
          <Link href="/blog/why-neuro-marketing-comes-in">
            <div className="glassmorphism-dark rounded-3xl overflow-hidden hover-lift cursor-pointer group transition-all duration-500 border border-electric-blue/10 hover:border-electric-blue/30 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                    alt="Why Neuro-Marketing Comes in?"
                    className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-gradient-neural text-white px-4 py-2 rounded-full">
                      Popular
                    </Badge>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <Badge variant="outline" className="border-electric-blue text-electric-blue">
                      Neuro Marketing
                    </Badge>
                    <Badge variant="secondary" className="bg-neuro-purple/20 text-gray-300">
                      Brain Science
                    </Badge>
                  </div>
                  
                  <h3 className="text-3xl font-montserrat font-bold text-white mb-2 group-hover:text-electric-blue transition-colors duration-300">
                    🧠 Why Neuro-Marketing Comes in?
                  </h3>
                  
                  <h4 className="text-xl font-montserrat font-medium text-gray-400 mb-6">
                    কেন নিউরো মার্কেটিং দরকার হয়ে উঠলো?
                  </h4>
                  
                  <p className="text-gray-300 text-lg mb-8 group-hover:text-gray-200 transition-colors duration-300 line-clamp-3">
                    আজকের ব্যবসার সবচেয়ে বড় চ্যালেঞ্জ হলো মানুষের মনোযোগ পাওয়া। প্রতিদিন একজন মানুষ ৫০০০+ বিজ্ঞাপন দেখে কিন্তু সময় দেয় মাত্র ৮ সেকেন্ড। জানুন কেন নিউরো মার্কেটিং আজকের যুগে অপরিহার্য...
                  </p>
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-electric-blue to-neuro-purple rounded-full flex items-center justify-center">
                        <User className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Neuro Binding Team</p>
                        <p className="text-sm text-gray-400">Jan 28, 2025 • 12 min read</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Heart size={16} />
                        <span className="text-sm">245</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Share2 size={16} />
                        <span className="text-sm">Share</span>
                      </div>
                    </div>
                    
                    <Button className="bg-gradient-neural px-6 py-3 rounded-full hover-lift group/btn">
                      Read Full Article
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-neural-bg-secondary via-neural-bg to-neural-bg relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-neuro-purple/5 via-transparent to-electric-blue/5"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-electric-blue/10 to-neuro-purple/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-neon-green/10 to-electric-blue/10 rounded-full blur-2xl opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-8 animate-slide-up">
              <div className="p-6 bg-gradient-to-r from-electric-blue/20 to-neuro-purple/20 rounded-full">
                <BookOpen className="text-electric-blue" size={64} />
              </div>
            </div>
            
            <Badge className="bg-gradient-neural text-white px-6 py-2 mb-6 animate-slide-up" style={{animationDelay: "0.1s"}}>
              {featuredPost.category}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 animate-slide-up" style={{animationDelay: "0.2s"}}>
              <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">
                Lead Magnet Ideas
              </span>
              <br />
              <span className="text-white text-3xl md:text-4xl">
                for Bangladeshi Businesses
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up" style={{animationDelay: "0.3s"}}>
              {featuredPost.subtitle}
            </p>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 mb-8 animate-slide-up" style={{animationDelay: "0.4s"}}>
              <div className="flex items-center gap-2">
                <User size={20} />
                <span className="text-lg">{featuredPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span className="text-lg">{new Date(featuredPost.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span className="text-lg">{featuredPost.readTime}</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up" style={{animationDelay: "0.5s"}}>
              <Button className="bg-gradient-neural hover:bg-gradient-to-r hover:from-electric-blue hover:to-neuro-purple transition-all duration-300 px-8 py-3 text-lg">
                <Share2 size={20} className="mr-2" />
                Share Article
              </Button>
              <Button variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue/10 px-8 py-3 text-lg">
                <Bookmark size={20} className="mr-2" />
                Save for Later
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 neural-bg-secondary relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Featured Post */}
            <article className="glassmorphism-dark rounded-2xl p-8 md:p-12 animate-slide-up mb-8">
              <Link href={`/blog/${featuredPost.slug}`}>
                <div className="cursor-pointer group">
                  <div className="flex flex-wrap gap-3 mb-6">
                    {featuredPost.tags.map((tag: string, index: number) => (
                      <Badge 
                        key={index}
                        variant="outline" 
                        className="border-electric-blue/30 text-electric-blue"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-electric-blue transition-colors">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-gray-400">
                      <span className="flex items-center gap-2">
                        <User size={16} />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar size={16} />
                        {new Date(featuredPost.date).toLocaleDateString('bn-BD')}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock size={16} />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    
                    <Button className="bg-gradient-neural hover:bg-gradient-to-r hover:from-electric-blue hover:to-neuro-purple transition-all duration-300">
                      পড়ুন <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </div>
              </Link>
            </article>

            {/* Recent Posts */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">আরও পোস্ট</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {recentPosts.map((post, index) => (
                  <article key={index} className="glassmorphism-dark rounded-xl p-6 animate-slide-up group">
                    <Link href={post.slug ? `/blog/${post.slug}` : "/blog"}>
                      <div className="cursor-pointer">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="border-electric-blue/30 text-electric-blue text-xs">
                            {post.category}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-electric-blue transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span className="flex items-center gap-2">
                            <User size={12} />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock size={12} />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}