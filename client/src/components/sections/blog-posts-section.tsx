import { Calendar, Clock, User, ArrowRight, Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "../ui/button";

export default function BlogPostsSection() {
  const featuredPost = {
    id: 1,
    title: "রঙের মনোবিজ্ঞান: কীভাবে নিউরো মার্কেটিং ওয়েব ডিজাইনকে রূপান্তরিত করে",
    excerpt: "আবিষ্কার করুন কীভাবে রঙের মনোবৈজ্ঞানিক প্রভাব বুঝে আপনার ওয়েবসাইটের কনভার্শন রেট ৮০% পর্যন্ত বৃদ্ধি করতে পারেন। আমরা রঙের মনোবিজ্ঞানের বিজ্ঞান এবং এর ব্যবহারিক প্রয়োগ নিয়ে আলোচনা করি।",
    author: "ড. সারাহ রহমান",
    authorRole: "প্রধান নিউরো মার্কেটিং সাইকোলজিস্ট",
    date: "2024-01-15",
    readTime: "৮ মিনিট পড়া",
    category: "নিউরো মার্কেটিং",
    tags: ["রঙের মনোবিজ্ঞান", "কনভার্শন অপটিমাইজেশন", "UX ডিজাইন"],
    image: "https://images.unsplash.com/photo-1558655146-364adaf25c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    featured: true
  };

  const recentPosts = [
    {
      id: 2,
      title: "৫টি নিউরো মার্কেটিং নীতি যা আমাদের ক্লায়েন্টের বিক্রয় ১৫০% বৃদ্ধি করেছে",
      excerpt: "বাস্তব কেস স্টাডি যেখানে দেখানো হয়েছে কীভাবে আমরা জ্ঞানীয় পক্ষপাত এবং আচরণগত ট্রিগার প্রয়োগ করে একটি সংগ্রামরত ই-কমার্স সাইটকে রূপান্তরিত করেছি।",
      author: "আহমেদ হাসান",
      date: "2024-01-12",
      readTime: "৬ মিনিট পড়া",
      category: "কেস স্টাডি",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 3,
      title: "ইউজার এক্সপেরিয়েন্সের নিউরোসায়েন্স: আপনার মস্তিষ্ক ডিজাইন সম্পর্কে কী প্রকাশ করে",
      excerpt: "আই-ট্র্যাকিং স্টাডি এবং নিউরোইমেজিং ব্যবহারকারীরা প্রকৃতপক্ষে ওয়েবসাইটের সাথে কীভাবে ইন্টারঅ্যাক্ট করে সে সম্পর্কে আশ্চর্যজনক অন্তর্দৃষ্টি প্রকাশ করে।",
      author: "ড. ফাতিমা খান",
      date: "2024-01-10",
      readTime: "৭ মিনিট পড়া",
      category: "ইউজার এক্সপেরিয়েন্স",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 4,
      title: "A/B টেস্টিং দিয়ে নিউরো মার্কেটিং সাফল্য: উন্নত কৌশল",
      excerpt: "মৌলিক A/B টেস্টিং ছাড়িয়ে যান নিউরোসায়েন্স-সমর্থিত পদ্ধতির সাথে যা ব্যবহারকারীর আচরণ সম্পর্কে গভীর অন্তর্দৃষ্টি প্রকাশ করে।",
      author: "রাকিব আহমেদ",
      date: "2024-01-08",
      readTime: "৫ মিনিট পড়া",
      category: "কনভার্শন অপটিমাইজেশন",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 5,
      title: "কনভার্ট করা টাইপোগ্রাফি: ফন্টের লুকানো মনোবিজ্ঞান",
      excerpt: "বিভিন্ন ফন্ট কীভাবে নির্দিষ্ট আবেগময় প্রতিক্রিয়া সৃষ্টি করে এবং ওয়েবসাইটে ক্রয়ের সিদ্ধান্তকে প্রভাবিত করে।",
      author: "নাদিয়া ইসলাম",
      date: "2024-01-05",
      readTime: "৪ মিনিট পড়া",
      category: "ডিজাইন সাইকোলজি",
      image: "https://images.unsplash.com/photo-1586281010493-53de1b9c5903?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 6,
      title: "মাইক্রো-ইন্টারঅ্যাকশনের মাধ্যমে বিশ্বাস তৈরি: একটি নিউরো মার্কেটিং পদ্ধতি",
      excerpt: "ছোট ডিজাইনের বিবরণ যা মনোবৈজ্ঞানিক নীতির মাধ্যমে ব্যবহারকারীর বিশ্বাস এবং এনগেজমেন্টে বড় প্রভাব ফেলে।",
      author: "ড. সারাহ রহমান",
      date: "2024-01-03",
      readTime: "৬ মিনিট পড়া",
      category: "ইউজার এক্সপেরিয়েন্স",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    }
  ];

  return (
    <section className="py-20 bg-neural-bg relative">
      <div className="container mx-auto px-6">
        {/* Featured Post */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">
                ফিচার্ড
              </span> আর্টিকেল
            </h2>
          </div>
          
          <div className="glassmorphism-dark rounded-3xl overflow-hidden hover-lift cursor-pointer group transition-all duration-500 border border-electric-blue/10 hover:border-electric-blue/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden min-h-[320px]">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full min-h-[320px] lg:min-h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-gradient-neural text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    ফিচার্ড
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="border border-electric-blue text-electric-blue px-3 py-1 rounded-full text-sm">
                    {featuredPost.category}
                  </span>
                  {featuredPost.tags.map((tag) => (
                    <span key={tag} className="bg-neuro-purple/20 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl font-montserrat font-bold text-white mb-6 group-hover:text-electric-blue transition-colors duration-300">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-300 text-lg mb-8 group-hover:text-gray-200 transition-colors duration-300">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-electric-blue to-neuro-purple rounded-full flex items-center justify-center">
                      <User className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{featuredPost.author}</p>
                      <p className="text-sm text-gray-400">{featuredPost.authorRole}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="text-sm">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span className="text-sm">{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Share2 size={16} />
                      <span className="text-sm">শেয়ার</span>
                    </div>
                  </div>
                  
                  <Button className="bg-gradient-neural px-6 py-3 rounded-full hover-lift group/btn">
                    আরও পড়ুন
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recent Posts */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              <span className="bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">
                সর্বশেষ
              </span> অন্তর্দৃষ্টি
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              নিউরো মার্কেটিং এবং মনোবিজ্ঞান-চালিত ডিজাইনের সর্বশেষ ট্রেন্ড সম্পর্কে আপডেট থাকুন
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <article 
                key={post.id}
                className="glassmorphism-dark rounded-2xl overflow-hidden hover-lift cursor-pointer group transition-all duration-500 animate-slide-up border border-electric-blue/10 hover:border-electric-blue/30"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="border border-electric-blue text-electric-blue bg-neural-bg/80 px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-bold text-white mb-3 group-hover:text-electric-blue transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-electric-blue to-neuro-purple rounded-full flex items-center justify-center">
                        <User className="text-white" size={14} />
                      </div>
                      <span className="text-sm text-gray-300">{post.author}</span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span className="text-xs">{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span className="text-xs">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-gray-400">
                    </div>
                    
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-electric-blue hover:text-white hover:bg-electric-blue/20 p-2 rounded-full group/btn"
                    >
                      <ArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" size={14} />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-gradient-neural px-8 py-4 rounded-full text-lg font-semibold hover-lift"
            >
              আরও আর্টিকেল লোড করুন
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}