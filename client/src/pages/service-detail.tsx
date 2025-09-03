import { useRoute } from 'wouter';
import { Redirect } from 'wouter';
import Navigation from '@/components/layout/navigation';
import Footer from '@/components/layout/footer';
import { Brain, TrendingUp, Users, Magnet, FileText, Palette, Check, ChevronLeft, Star, Zap, Target, ArrowRight, Clock, DollarSign, Award, Lightbulb, TrendingUp as TrendingUpIcon, Users as UsersIcon, Eye, Sparkles, Shield, Rocket, MousePointer, Smartphone } from 'lucide-react';
import { Link } from 'wouter';

const services = [
  {
    slug: 'neuro-website',
    icon: Brain,
    title: "শুধু সুন্দর ওয়েবসাইট নয়, চাই একটি ২৪/৭ Salesperson",
    shortDescription: "আপনার ওয়েবসাইট কি শুধু ভিজিটরের জন্য শো-পিস, নাকি সত্যিকারের সেলস পার্সন? 👉 আমরা Neuro Binding এ এমন ওয়েবসাইট বিল্ড করি যেটা কথা বলে, আস্থা তৈরি করে এবং সেলস করে।",
    fullDescription: "আজকের দিনে ৯০% ভিজিটর ওয়েবসাইটে ঢুকে প্রথম ৫ সেকেন্ডেই সিদ্ধান্ত নেয়, থাকবে নাকি চলে যাবে। কারণ: এলোমেলো ডিজাইন → ব্রেইন বলে 'Low Quality', Social Proof নাই → ব্রেইন বলে 'Risky', CTA স্পষ্ট নয় → ব্রেইন বলে 'Confusing'। 🧠 Neuro Fact: মানুষ সিদ্ধান্ত নেয় আবেগ + psychology দিয়ে। শুধু লজিক দিয়ে না। 👉 তাই ওয়েবসাইটকে এমনভাবে বানাতে হয় যাতে ভিজিটর অবচেতনভাবে বিশ্বাস করে এবং কিনতে বাধ্য হয়।",
    features: [
      "রঙ, ফন্ট, লেআউট সবকিছু Neuro Tested",
      "Eye Direction Theory → CTA এর দিকে দৃষ্টি টানে",
      "Color Psychology → আস্থা, urgency, excitement তৈরি করে",
      "PRISM Model ভিত্তিক কনটেন্ট (Problem → React → Inspire → Social Proof → Move)",
      "Cold Visitor → Warm → Hot Customer রূপান্তর",
      "বাংলাদেশী কাস্টমারের মানসিকতা অনুযায়ী ডিজাইন"
    ],
    advanced: [
      "Psychology-driven Design প্যাটার্ন",
      "Conversion Optimized Funnel তৈরি", 
      "Bangladesh Context Ready ডিজাইন",
      "বাংলা/ইংরেজি মিশ্র ভাষার জন্য অপটিমাইজড",
      "মোবাইল-ফার্স্ট অভিজ্ঞতা (৭০% ভিজিটর মোবাইল থেকে আসে)",
      "প্রতিটি সেকশন ভিজিটরকে সিদ্ধান্তের দিকে ঠেলে দেয়"
    ],
    process: [
      "🔍 Audit & Research – আপনার ব্যবসার Industry বিশ্লেষণ",
      "🧠 Neuro Strategy Plan – রঙ, ফন্ট, কনটেন্ট প্লেসমেন্টের সিদ্ধান্ত",
      "🎨 Design & Development – Psychology-driven UI + Funnel তৈরি",
      "✅ Testing & Optimization – Heatmap setup and Testing",
      "🚀 Launch & Scale – ডেটা-ড্রিভেন স্কেলিং"
    ],
    results: [
      "আপনার ওয়েবসাইট শুধু সুন্দর হবে না, বরং ভিজিটরকে কাস্টমারে রূপান্তরিত করবে",
      "প্রতিটি ভিজিটর অবচেতনভাবে বিশ্বাস করবে এবং কিনতে বাধ্য হবে",
      "২৪/৭ কাজ করে এমন একটি সেলসপার্সন পাবেন",
      "Psychology এবং আবেগের মাধ্যমে সিদ্ধান্ত নেওয়া ভিজিটর"
    ],
    stats: { success: "৯০%", metric: "ভিজিটর প্রথম ৫ সেকেন্ডে থাকার সিদ্ধান্ত" },
    price: "👉 এখনই ফ্রি কনসালটেশন বুক করুন",
    timeline: "১৫-২১ কর্মদিবস",
    backgroundColor: "from-blue-500/10 to-purple-500/10",
    accentColor: "blue-500"
  },
  {
    slug: 'neuro-content',
    icon: TrendingUp,
    title: "Neuro Marketing ভিত্তিক Content",
    shortDescription: "আজকের দিনে সবচেয়ে দামি জিনিস হলো মানুষের Attention। 👉 আমরা এমন কনটেন্ট তৈরি করি যেটা শুধু কোন টেক্সট নয় বরং Scroll-Stopper Text, Emotion-driven Script, Attention-grabbing Image, আর Engaging Video Content।",
    fullDescription: "প্রতিদিন একজন মানুষ গড়ে ৫০০০+ কনটেন্ট দেখে কিন্তু সময় দেয় মাত্র ১–২ সেকেন্ড। মানুষ এখন আর কনটেন্ট পড়ে না → স্ক্যান করে। 👉 তাই কনটেন্ট এমন হতে হবে যা স্ক্যান করার সময়ই আটকে দেয়। 🧠 Neuro Fact: মানুষ স্ক্যান করার সময় Pattern Breaker (শব্দ, আকর্ষণীয় ভিজ্যুয়াল, bold হুক, বা চমকপ্রদ ভিজ্যুয়াল) দেখলেই থেমে যায়।",
    features: [
      "🎯 Scroll-Stopper Effect - হুক লাইন (Fear/Curiosity/Benefit-driven)",
      "👀 Visual cues (emoji, icons, bold text, engaging graphics)",
      "🧠 Psychology-driven Copy - Emotional trigger + Logical support",
      "📝 Scan-Friendly Layout - ছোট প্যারাগ্রাফ, Bullet points",
      "🎨 Multi-format Content - Text, Script, Image, Video",
      "⚡ Pattern Breaker কৌশল"
    ],
    advanced: [
      "📰 Text Content – Blog, Website Copy, Sales Page, Email Copy",
      "📜 Script Content – Ad Script, Video Script, Storytelling Script", 
      "🖼️ Image Content – Infographic, Carousel, Scroll-stopper Visuals",
      "🎥 Video Content – Explainer Script, Short Ads, Regular content, Podcast Script",
      "💭 Emotional trigger (ভয়, আশা, স্বপ্ন) + Logical support",
      "🎯 নিউরো-লিঙ্গুইস্টিক প্রোগ্রামিং"
    ],
    process: [
      "🔍 Research – কাস্টমারের pain + attention pattern বিশ্লেষণ",
      "🧠 Hook Creation – scroll-stopper হুক তৈরি করা",
      "✍️ Neuro Writing & Design – emotion + logic balance করে লেখা ও ভিজ্যুয়াল বানানো",
      "✅ Testing – কোন হুক / CTA সবচেয়ে কাজ করছে তা A/B test করা",
      "🚀 Publish – ready-to-convert কনটেন্ট লঞ্চ"
    ],
    results: [
      "ভিজিটর শুধু চোখ বুলাবে না - থামবে, পড়বে, দেখবে, শুনবে",
      "আপনার কনটেন্টকে সাধারণ লেখা থেকে Scroll-Stopper Neuro Content এ রূপান্তর",
      "Text + Script + Image + Video সব ধরনের কনটেন্ট সেবা",
      "বিশ্বাস করে কিনবে এমন কনটেন্ট তৈরি"
    ],
    stats: { success: "৫০০০+", metric: "প্রতিদিন কনটেন্ট দেখে কিন্তু থামে ১-২ সেকেন্ড" },
    price: "👉 ফ্রি কনটেন্ট অডিট বুক করুন",
    timeline: "৭-১০ কর্মদিবস",
    backgroundColor: "from-green-500/10 to-teal-500/10",
    accentColor: "green-500"
  },
  {
    slug: 'lead-magnet',
    icon: Magnet,
    title: "Neuro Marketing ভিত্তিক Lead Magnet",
    shortDescription: "ভিজিটরকে সরাসরি কিছু বিক্রি না করে আগে তার কাছে বিশ্বাস তৈরি করতে হয়।",
    fullDescription: "আমাদের লিড ম্যাগনেট শুধু ইমেইল সংগ্রহ করে না, এটি আপনার সম্ভাব্য গ্রাহকদের সাথে একটি মানসিক সংযোগ তৈরি করে। আমরা সাইকোলজিক্যাল ট্রিগার, ভ্যালু প্রোপোজিশন এবং ট্রাস্ট বিল্ডিং এলিমেন্ট ব্যবহার করে এমন লিড ম্যাগনেট তৈরি করি যা ভিজিটরের মনে আপনার ব্র্যান্ডের জন্য একটি ইতিবাচক ধারণা তৈরি করে।",
    features: [
      "ভিজিটরের ভয় কমানো লিড ম্যাগনেট",
      "বিশ্বাস তৈরিকারী অফার",
      "হাই-কনভার্টিং অপ্ট-ইন ফর্ম",
      "ভ্যালু-ড্রিভেন কনটেন্ট",
      "ইমেইল অটোমেশন সিকুয়েন্স",
      "নার্চার ক্যাম্পেইন"
    ],
    advanced: [
      "ডায়নামিক পার্সোনালাইজেশন ইঞ্জিন",
      "বিহেভিয়ারাল ট্রিগার অটোমেশন",
      "সাইকোলজি-বেসড ফানেল ডিজাইন",
      "মাইক্রো-মোমেন্ট ক্যাপচার সিস্টেম",
      "প্রেডিক্টিভ লিড স্কোরিং",
      "ইনটেন্ট-বেসড পার্সোনালাইজেশন"
    ],
    process: [
      "অডিয়েন্স পেইন পয়েন্ট রিসার্চ",
      "ভ্যালু প্রোপোজিশন ডেভেলপমেন্ট",
      "লিড ম্যাগনেট কনটেন্ট ক্রিয়েশন",
      "ল্যান্ডিং পেজ ডিজাইন",
      "ইমেইল সিকুয়েন্স সেটআপ",
      "পারফরমেন্স অপটিমাইজেশন"
    ],
    results: [
      "গড়ে 450% লিড কোয়ালিটি বৃদ্ধি",
      "অপ্ট-ইন রেট 300% বৃদ্ধি",
      "ইমেইল ওপেন রেট 250% বৃদ্ধি",
      "সেলস কনভার্শন 180% বৃদ্ধি"
    ],
    stats: { success: "450%", metric: "Lead Quality বৃদ্ধি" },
    price: "শুরু ৩০,০০০ টাকা থেকে",
    timeline: "১০-১৪ কর্মদিবস",
    backgroundColor: "from-orange-500/10 to-red-500/10",
    accentColor: "orange-500"
  },
  {
    slug: 'neuro-script',
    icon: FileText,
    title: "5️⃣ Neuro Marketing ভিত্তিক Script ✍️",
    shortDescription: "আজকের ডিজিটাল দুনিয়ায়, একজন কাস্টমার আপনার ভিডিও বা বিজ্ঞাপন দেখে মাত্র ৮–১০ সেকেন্ড সময় দেয়। এই কয়েক সেকেন্ডেই ঠিক হয়ে যায়—সে থাকছে নাকি স্ক্রল করে চলে যাচ্ছে।",
    fullDescription: "আমরা তৈরি করি এমন Script, যা শুধু শোনায় না, বরং মানুষের মনের গভীরে ঢুকে পড়ে। 🧠 Neuro Fact: মানুষের মস্তিষ্ক প্রথমে Visual + Voice Tone ধরে, তারপর Meaning বোঝে। 👉 তাই যদি প্রথম কয়েক সেকেন্ডেই Hook কাজ না করে, আপনার মেসেজ হারিয়ে যাবে।",
    whyImportant: {
      title: "❓ কেন Script এত গুরুত্বপূর্ণ?",
      neuroFact: "🧠 Neuro Fact: মানুষের মস্তিষ্ক প্রথমে Visual + Voice Tone ধরে, তারপর Meaning বোঝে। 👉 তাই যদি প্রথম কয়েক সেকেন্ডেই Hook কাজ না করে, আপনার মেসেজ হারিয়ে যাবে।",
      problems: [
        "অনেক লম্বা Intro → Attention হারিয়ে যায়",
        "শুধু তথ্য দেয়, Emotion জাগায় না", 
        "CTA এমনভাবে লেখা হয় না যা অবচেতন মনে ঢোকে"
      ],
      solution: "💡 Neuro Marketing ভিত্তিক Script এই সমস্যা দূর করে।"
    },
    scriptFeatures: [
      {
        number: "1️⃣",
        title: "Attention Hook",
        description: "প্রথম ৩ সেকেন্ডেই Scroll-Stopper হুক → ভিজিটরের ব্রেইনে 'Pattern Break' ঘটায়।"
      },
      {
        number: "2️⃣", 
        title: "Emotional Connection",
        description: "ভিজিটরের ব্যথা, ভয়, আশা বা স্বপ্নকে গল্পের মধ্যে ছুঁয়ে দেওয়া।",
        extra: "👉 Emotion + Logic Balance → মেসেজ বিশ্বাসযোগ্য হয়।"
      },
      {
        number: "3️⃣",
        title: "Neuro Trigger CTA", 
        description: "শুধু 'Call Now' বা 'Buy Now' নয়—বরং অবচেতন মনকে অ্যাকশনে ঠেলে দেওয়া Trigger Word।",
        example: "যেমন: 'এখন না হলে হয়তো সুযোগ হাতছাড়া হবে।'"
      },
      {
        number: "4️⃣",
        title: "Multi-Use Format",
        formats: [
          "✅ বিজ্ঞাপন ভিডিও",
          "✅ ইউটিউব / সোশ্যাল মিডিয়া কনটেন্ট", 
          "✅ ওয়েবিনার Script",
          "✅ কর্পোরেট প্রেজেন্টেশন",
          "✅ সেলস পিচ"
        ]
      }
    ],
    finalCTA: {
      title: "🚀 Final CTA",
      description: "আপনার ভিডিও বা বিজ্ঞাপন শুধু 'দেখানো' না— 👉 সেটাকে হতে হবে Conversion Machine।",
      button: "এখনই ফ্রি Neuro Script পরামর্শ বুক করুন"
    },
    features: [
      "🎯 Attention Hook - প্রথম ৩ সেকেন্ডেই Scroll-Stopper হুক যা ভিজিটরের ব্রেইনে Pattern Break ঘটায়",
      "💭 Emotional Connection - ভিজিটরের ব্যথা, ভয়, আশা বা স্বপ্নকে গল্পের মধ্যে ছুঁয়ে দেওয়া",
      "🧠 Neuro Trigger CTA - শুধু 'Call Now' বা 'Buy Now' নয়—বরং অবচেতন মনকে অ্যাকশনে ঠেলে দেওয়া Trigger Word",
      "🎭 Multi-Use Format - বিজ্ঞাপন ভিডিও, ইউটিউব/সোশ্যাল মিডিয়া কনটেন্ট, ওয়েবিনার Script, কর্পোরেট প্রেজেন্টেশন, সেলস পিচ",
      "⚡ Pattern Break - ভিজিটরের ব্রেইনে Pattern Break ঘটায়",
      "🎨 Emotion + Logic Balance - মেসেজ বিশ্বাসযোগ্য হয়"
    ],
    advanced: [
      "🎯 Hook Creation Mastery - Fear/Curiosity/Benefit-driven প্রথম ৩-৫ সেকেন্ড",
      "📝 Storytelling + Neuro Trigger - গল্পের মাধ্যমে অবচেতন মনে প্রভাব",
      "🎭 Voice Tone Mapping - কোন Voice Tone কাস্টমারের মনে বেশি কাজ করবে",
      "✅ A/B Testing Framework - সেরা Script বাছাই করার পদ্ধতি",
      "📱 Multi-Platform Optimization - YouTube, Facebook, Instagram, TikTok",
      "🚀 Conversion Machine Approach - শুধু দেখানো নয়, কনভার্ট করা"
    ],
    process: [
      "🔍 Research – আপনার কাস্টমার কারা, তাদের Pain Point কি",
      "🧠 Hook Creation – প্রথম ৩–৫ সেকেন্ডের হুক তৈরি",
      "✍️ Script Writing – Storytelling + Neuro Trigger CTA",
      "🎭 Tone Mapping – কোন Voice Tone কাস্টমারের মনে বেশি কাজ করবে",
      "✅ Testing – A/B টেস্টিং এর মাধ্যমে সেরা Script বাছাই"
    ],
    results: [
      "⚠️ সাধারণ Script এর সমস্যা দূর করে",
      "🎯 প্রথম কয়েক সেকেন্ডেই Hook কাজ করে",
      "💭 শুধু তথ্য নয়, Emotion জাগায়",
      "🧠 CTA অবচেতন মনে ঢুকে পড়ে",
      "🚀 আপনার ভিডিও বা বিজ্ঞাপন হয়ে ওঠে Conversion Machine"
    ],
    stats: { success: "৮-১০", metric: "সেকেন্ড সময় পান কাস্টমারের কাছ থেকে" },
    price: "এখনই ফ্রি Neuro Script পরামর্শ বুক করুন",
    timeline: "Research থেকে Final Script পর্যন্ত ৫-৭ দিন",
    backgroundColor: "from-purple-500/10 to-pink-500/10",
    accentColor: "purple-500"
  },
  {
    slug: 'business-consultancy',
    icon: Users,
    title: "Neuro Marketing ভিত্তিক Business Consultancy",
    shortDescription: "বিজনেসে গ্রোথ শুধু স্ট্র্যাটেজি দিয়ে আসে না, গ্রাহকের মনের ভেতরে ঢুকতে জানতে হয়।",
    fullDescription: "আমাদের বিজনেস কনসালট্যান্সি শুধু ব্যবসায়িক পরামর্শ দেয় না, এটি আপনার গ্রাহকদের মানসিকতা বুঝে সে অনুযায়ী ব্যবসায়িক কৌশল প্রণয়ন করে। আমরা নিউরো মার্কেটিং এর গভীর জ্ঞান ব্যবহার করে আপনার ব্র্যান্ডকে এমনভাবে পজিশন করি যা গ্রাহকদের মনে স্থায়ী প্রভাব ফেলে এবং তাদের আপনার পণ্য ও সেবার প্রতি আকৃষ্ট করে।",
    features: [
      "Neuro Marketing ব্যবহার করে ব্র্যান্ড বিল্ডিং",
      "বিশ্বাসযোগ্য ও লাভজনক করা",
      "বিজনেসের জন্য প্রপার প্ল্যান",
      "কাস্টমার সাইকোলজি অ্যানালাইসিস",
      "কমপিটিটর অ্যানালাইসিস",
      "মার্কেট পজিশনিং স্ট্র্যাটেজি"
    ],
    advanced: [
      "সাইকোগ্রাফিক কাস্টমার সেগমেন্টেশন",
      "নিউরো-ইকোনমিক প্রাইসিং স্ট্র্যাটেজি",
      "বিহেভিয়ারাল ব্র্যান্ডিং ফ্রেমওয়ার্ক",
      "কগনিটিভ গ্রোথ হ্যাকিং",
      "নিউরো-সেলস ফানেল অপটিমাইজেশন",
      "প্রেডিক্টিভ কাস্টমার বিহেভিয়ার মডেলিং"
    ],
    process: [
      "বিজনেস ও মার্কেট অ্যানালাইসিস",
      "কাস্টমার জার্নি ম্যাপিং",
      "নিউরো মার্কেটিং স্ট্র্যাটেজি ডেভেলপমেন্ট",
      "ব্র্যান্ড পজিশনিং",
      "ইমপ্লিমেন্টেশন প্ল্যান",
      "পারফরমেন্স মনিটরিং"
    ],
    results: [
      "গড়ে 400% বিজনেস গ্রোথ",
      "কাস্টমার লয়ালটি 250% বৃদ্ধি",
      "ব্র্যান্ড রিকগনিশন 300% বৃদ্ধি",
      "প্রফিট মার্জিন 180% বৃদ্ধি"
    ],
    stats: { success: "400%", metric: "Business Growth" },
    price: "শুরু ১,০০,০০০ টাকা থেকে",
    timeline: "৩০-৪৫ কর্মদিবস",
    backgroundColor: "from-indigo-500/10 to-blue-500/10",
    accentColor: "indigo-500"
  },
  {
    slug: 'neuro-branding',
    icon: Palette,
    title: "একটি ব্যবসা হয়তো শুরু করা যায় এক লোগো দিয়ে, কিন্তু একটি ব্র্যান্ড তৈরি হয় মানুষের মনে।",
    shortDescription: "আপনার ব্যবসা কি গ্রাহকের চোখে শুধু একটা দোকান বা সার্ভিস, নাকি সত্যিকারের একটি ব্র্যান্ড? আমাদের Full Branding Service নিশ্চিত করে আপনার ব্যবসা মানুষের মনে শুধু আজ নয়—বরং আগামী ১০ বছরেও স্মরণীয় হয়ে থাকবে।",
    fullDescription: "মানুষের মস্তিষ্ক প্রতিটি ব্র্যান্ডকে একটি 'Shortcut' দিয়ে মনে রাখে—Logo, Color, Tagline বা Tone। যদি আপনার ব্র্যান্ডের সেই Shortcut পরিষ্কার না হয় তবে গ্রাহক আপনাকে প্রতিযোগীদের ভিড়ে হারিয়ে ফেলবে। Branding মানে হলো: Consistency + Communication এর ফলাফল।",
    brandingProblems: [
      "আপনার ব্যবসাকে কেউ আলাদা করে চেনে না",
      "গ্রাহকের মনে বিশ্বাস তৈরি হয় না",
      "দীর্ঘমেয়াদে Loyalty তৈরি হয় না",
      "প্রতিযোগীরা সবসময় একধাপ এগিয়ে থাকে"
    ],
    brandExamples: [
      {
        name: "বিকাশের গোলাপি রঙ",
        description: "দূর থেকে গোলাপি দেখলেই বোঝা যায় বিকাশের বিজ্ঞাপন বা লোগো।"
      },
      {
        name: "গ্রামীণফোনের নীল",
        description: "যেকোনো জায়গায় নীল দেখলে আমাদের মনে পড়ে গ্রামীণফোনের বিজ্ঞাপন।"
      },
      {
        name: "Google Maps এর রঙের কোড",
        description: "জ্যাম থাকলে লাল লাইন, জ্যাম না থাকলে নীল লাইন - মানুষের মনে গেঁথে যাওয়া রঙের সংযোগ।"
      }
    ],
    bangladeshMisconception: {
      wrongIdea: "আগে কোম্পানি বড় হোক, তারপর Branding করব।",
      rightIdea: "কোম্পানি বড় হওয়ার জন্যই শুরু থেকে Branding করতে হয়।",
      facebookRisk: "যদি কখনো চীনের মতো আমাদের দেশেও Facebook ব্যান হয়, তখন আপনার ব্যবসার কী হবে?",
      brandingSolution: "মানুষ Facebook-এর বাইরে গিয়েও আপনার ব্যবসাকে চিনবে, খুঁজবে এবং বিশ্বাস করবে।"
    },
    features: [
      "Logo Design → আপনার ব্র্যান্ডের পরিচয়ের মূল প্রতীক",
      "Color Psychology Palette → রঙ দিয়ে মানুষের মনে বিশ্বাস ও আবেগ তৈরি",
      "Typography System → ফন্ট যেটা ব্র্যান্ডের ব্যক্তিত্ব প্রকাশ করে",
      "Brand Voice & Messaging → কিভাবে আপনার ব্যবসা কথা বলবে",
      "Social Media Branding Kit → পোস্ট, কভার, ব্যানার, ভিডিও টেমপ্লেট—সবকিছু consistent",
      "Packaging & Marketing Collateral → প্রোডাক্ট থাকলে Label, Box, Poster, Brochure"
    ],
    neuroApproach: [
      "Perception Design – গ্রাহকের মস্তিষ্কে প্রথম ধারণা তৈরি",
      "Emotional Triggers – রঙ, টোন, ভিজ্যুয়াল দিয়ে আবেগ ছোঁয়া",
      "Consistency – প্রতিটি প্ল্যাটফর্মে একরকম Presentation",
      "Trust Signals – Authority, Social Proof, Community Voice"
    ],
    whyDifferent: {
      generalDesigner: "শুধু সুন্দর কিছু বানায়",
      neuroBranding: "মনস্তাত্ত্বিকভাবে প্রভাবিত ব্র্যান্ডিং যা মানুষের আবেগ ছোঁয়, আস্থা জাগায়, মনে স্থায়ী ছাপ ফেলে"
    },
    advanced: [
      "🧩 Perception Design – গ্রাহকের মস্তিষ্কে প্রথম ধারণা তৈরি",
      "🎭 Emotional Triggers – রঙ, টোন, ভিজ্যুয়াল দিয়ে আবেগ ছোঁয়া",
      "🔄 Consistency – প্রতিটি প্ল্যাটফর্মে একরকম Presentation",
      "🛡️ Trust Signals – Authority, Social Proof, Community Voice",
      "🎯 Neuro Marketing ভিত্তিক ব্র্যান্ডিং যা মনস্তাত্ত্বিকভাবে প্রভাবিত করে",
      "🇧🇩 বাংলাদেশী উদ্যোক্তাদের জন্য বিশেষভাবে তৈরি"
    ],
    process: [
      "🔍 Research – বাজার, প্রতিযোগী ও কাস্টমারের Psychology বোঝা",
      "🎨 Identity Design – Logo, Color, Typography ঠিক করা",
      "🗣️ Voice & Storytelling – ব্র্যান্ডের Tone ও মেসেজ তৈরি",
      "📱 Digital Presence Setup – ওয়েবসাইট + সোশ্যাল মিডিয়ায় ব্র্যান্ড একরূপ করা",
      "📦 Packaging / Collateral – প্রোডাক্ট / মার্কেটিং ম্যাটেরিয়াল সাজানো",
      "🚀 Launch & Monitor – কিভাবে মানুষ ব্র্যান্ড perceive করছে সেটা বিশ্লেষণ"
    ],
    results: [
      "আপনার ব্যবসাকে কেউ আলাদা করে চেনে",
      "গ্রাহকের মনে বিশ্বাস তৈরি হয়",
      "দীর্ঘমেয়াদে Loyalty তৈরি হয়",
      "প্রতিযোগীদের থেকে সবসময় এক ধাপ এগিয়ে থাকেন"
    ],
    stats: { success: "৯০%", metric: "ব্র্যান্ড মানুষের মনে স্থায়ী হয়" },
    price: "এখনই আপনার ব্র্যান্ড আইডেন্টিটি তৈরি করুন",
    timeline: "২১-৩০ কর্মদিবস",
    backgroundColor: "from-purple-500/10 to-pink-500/10",
    accentColor: "purple-500"
  },
  {
    slug: 'neuro-script-advanced',
    icon: FileText,
    title: "5️⃣ Neuro Marketing ভিত্তিক Script ✍️",
    shortDescription: "আজকের ডিজিটাল দুনিয়ায়, একজন কাস্টমার আপনার ভিডিও বা বিজ্ঞাপন দেখে মাত্র ৮–১০ সেকেন্ড সময় দেয়। এই কয়েক সেকেন্ডেই ঠিক হয়ে যায়—সে থাকছে নাকি স্ক্রল করে চলে যাচ্ছে।",
    fullDescription: "আমরা তৈরি করি এমন Script, যা শুধু শোনায় না, বরং মানুষের মনের গভীরে ঢুকে পড়ে। 🧠 Neuro Fact: মানুষের মস্তিষ্ক প্রথমে Visual + Voice Tone ধরে, তারপর Meaning বোঝে। 👉 তাই যদি প্রথম কয়েক সেকেন্ডেই Hook কাজ না করে, আপনার মেসেজ হারিয়ে যাবে।",
    features: [
      "🎯 Attention Hook - প্রথম ৩ সেকেন্ডেই Scroll-Stopper হুক",
      "💭 Emotional Connection - ভিজিটরের ব্যথা, ভয়, আশা বা স্বপ্নকে গল্পের মধ্যে ছুঁয়ে দেওয়া",
      "🧠 Neuro Trigger CTA - অবচেতন মনকে অ্যাকশনে ঠেলে দেওয়া Trigger Word",
      "🎭 Multi-Use Format - বিজ্ঞাপন ভিডিও, সোশ্যাল মিডিয়া, ওয়েবিনার, সেলস পিচ",
      "⚡ Pattern Break - ভিজিটরের ব্রেইনে Pattern Break ঘটায়",
      "🎨 Emotion + Logic Balance - মেসেজ বিশ্বাসযোগ্য হয়"
    ],
    advanced: [
      "🎯 Hook Creation Mastery - Fear/Curiosity/Benefit-driven প্রথম ৩-৫ সেকেন্ড",
      "📝 Storytelling + Neuro Trigger - গল্পের মাধ্যমে অবচেতন মনে প্রভাব",
      "🎭 Voice Tone Mapping - কোন Voice Tone কাস্টমারের মনে বেশি কাজ করবে",
      "✅ A/B Testing Framework - সেরা Script বাছাই করার পদ্ধতি",
      "📱 Multi-Platform Optimization - YouTube, Facebook, Instagram, TikTok",
      "🚀 Conversion Machine Approach - শুধু দেখানো নয়, কনভার্ট করা"
    ],
    process: [
      "🔍 Research – আপনার কাস্টমার কারা, তাদের Pain Point কি",
      "🧠 Hook Creation – প্রথম ৩–৫ সেকেন্ডের হুক তৈরি",
      "✍️ Script Writing – Storytelling + Neuro Trigger CTA",
      "🎭 Tone Mapping – কোন Voice Tone কাস্টমারের মনে বেশি কাজ করবে",
      "✅ Testing – A/B টেস্টিং এর মাধ্যমে সেরা Script বাছাই"
    ],
    results: [
      "⚠️ সাধারণ Script এর সমস্যা দূর করে",
      "🎯 প্রথম কয়েক সেকেন্ডেই Hook কাজ করে",
      "💭 শুধু তথ্য নয়, Emotion জাগায়",
      "🧠 CTA অবচেতন মনে ঢুকে পড়ে",
      "🚀 আপনার ভিডিও বা বিজ্ঞাপন হয়ে ওঠে Conversion Machine"
    ],
    stats: { success: "৮-১০", metric: "সেকেন্ড সময় পান কাস্টমারের কাছ থেকে" },
    price: "এখনই ফ্রি Neuro Script পরামর্শ বুক করুন",
    timeline: "Research থেকে Final Script পর্যন্ত ৫-৭ দিন",
    backgroundColor: "from-purple-500/10 to-pink-500/10",
    accentColor: "purple-500"
  },
  {
    slug: 'neuro-lead-magnet-pro',
    icon: Magnet,
    title: "🎯 Neuro Marketing ভিত্তিক Lead Magnet (Pro)",
    shortDescription: "Cold ভিজিটরকে কি আপনি সরাসরি কাস্টমারে রূপান্তর করতে চাইছেন? সেটা কখনো কাজ করবে না। কারণ মানুষের মস্তিষ্ক অপরিচিত কাউকে 'Buy Now' শুনলেই Danger Signal পাঠায়।",
    fullDescription: "কিন্তু যদি আপনি প্রথমেই একটি ছোট্ট Free Value দেন—তাহলে সেই ভয় কমে যায়, তৈরি হয় বিশ্বাস। মানুষ অপরিচিতের অফারকে সন্দেহজনক ভাবে। কিন্তু ফ্রি ভ্যালু → Reciprocity Trigger চালু করে।",
    features: [
      "🧠 Neuro Fact ভিত্তিক সাইকোলজি প্রয়োগ",
      "🎯 Reciprocity Trigger সক্রিয়করণ",
      "📚 4 ধরনের Lead Magnet - Ebook, Checklist, Course, Template",
      "🔍 গভীর Customer Psychology Research",
      "🎨 Scroll-Stopper Design এবং Cover",
      "📊 বাংলাদেশি ব্যবসার জন্য কাস্টমাইজড"
    ],
    advanced: [
      "🎭 রয়াল মালাবার কৌশল প্রয়োগ",
      "🧠 Hook Creation - Fear/Curiosity/Benefit-driven",
      "✍️ Neuro Framework Content Development",
      "📱 Multi-channel Delivery System",
      "🎯 Expert Positioning Strategy",
      "🚀 Future Sales Pipeline Setup"
    ],
    process: [
      "🔍 Research → কাস্টমারের ভয় ও চাহিদা বোঝা",
      "🧠 Hook Creation → মানুষকে ক্লিক করাবে এমন টাইটেল তৈরি",
      "✍️ Content & Design → Neuro Framework + Scroll-Stopper Cover",
      "🚀 Delivery → Email / WhatsApp / Funnel"
    ],
    results: [
      "✅ ভিজিটরের ভয় কমায়",
      "✅ আপনাকে Expert প্রমাণ করে",
      "✅ Relationship তৈরি করে",
      "✅ Future Sales এর পথ খুলে দেয়"
    ],
    stats: { success: "Cold Visitor", metric: "→ Warm Lead → Loyal Customer" },
    price: "এখনই ফ্রি লিড ম্যাগনেট বুক করুন",
    timeline: "Research থেকে Delivery পর্যন্ত",
    backgroundColor: "from-orange-500/10 to-red-500/10",
    accentColor: "orange-500"
  }
];

export default function ServiceDetailPage() {
  const [match, params] = useRoute('/services/:slug');
  
  if (!match || !params?.slug) {
    return <div>Service not found</div>;
  }

  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  const IconComponent = service.icon;

  // Special layout for neuro-script service
  if (params.slug === 'neuro-script') {
    return (
      <div className="min-h-screen bg-neural-bg text-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-electric-blue/10 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-40 h-40 bg-neuro-purple rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-56 h-56 bg-electric-blue rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-1/3 w-32 h-32 bg-indigo-400 rounded-full blur-2xl animate-pulse delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <Link 
              href="/services" 
              className="inline-flex items-center text-electric-blue hover:text-neon-green transition-colors mb-8 group glassmorphism-dark rounded-full px-4 py-2"
            >
              <ChevronLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={18} />
              <span className="text-sm">সার্ভিসসমূহে ফিরে যান</span>
            </Link>

            <div className="text-center max-w-6xl mx-auto">
              <div className="flex justify-center mb-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-neuro-purple via-electric-blue to-indigo-500 rounded-3xl blur opacity-75 animate-pulse"></div>
                  <div className="relative p-10 bg-gradient-to-r from-neuro-purple/20 via-electric-blue/20 to-indigo-500/20 rounded-3xl glassmorphism-dark">
                    <FileText className="text-electric-blue" size={100} />
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-7xl font-montserrat font-bold mb-10 leading-tight">
                <span className="bg-gradient-to-r from-white via-neuro-purple to-electric-blue bg-clip-text text-transparent">
                  {service.title}
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                {service.shortDescription}
              </p>
              
              <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                {service.fullDescription}
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-16">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-neuro-purple to-electric-blue hover:from-electric-blue hover:to-neuro-purple text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-neuro-purple/50 flex items-center gap-3"
                >
                  <Rocket className="group-hover:rotate-12 transition-transform" size={20} />
                  এখনই আপনার Neuro Script এর জন্য বুক করুন
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Important Section */}
        <section className="py-20 bg-neural-bg-secondary relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-8">
                <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">
                  {service.whyImportant?.title}
                </span>
              </h2>
              
              <div className="max-w-4xl mx-auto mb-12">
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {service.whyImportant?.neuroFact}
                </p>
                
                <div className="glassmorphism-dark rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-semibold text-red-400 mb-6">⚠️ সাধারণ Script এর সমস্যা:</h3>
                  <div className="space-y-4">
                    {service.whyImportant?.problems?.map((problem, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <p className="text-gray-300">{problem}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <p className="text-xl font-semibold text-neon-green">
                  {service.whyImportant?.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Script Features Section */}
        <section className="py-20 bg-neural-bg relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-8">
                🌟 আমাদের <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">Script এর বৈশিষ্ট্য</span>
              </h2>
            </div>
            
            <div className="space-y-12">
              {service.scriptFeatures?.map((feature, index) => (
                <div key={index} className="glassmorphism-dark rounded-3xl p-8 hover-lift border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-500">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-4xl">{feature.number}</div>
                    <div>
                      <h3 className="text-2xl font-semibold text-electric-blue mb-4">{feature.title}</h3>
                      <p className="text-lg text-gray-300 leading-relaxed mb-4">{feature.description}</p>
                      {feature.extra && (
                        <p className="text-lg text-neon-green font-semibold">{feature.extra}</p>
                      )}
                      {feature.example && (
                        <p className="text-lg text-yellow-400 italic">{feature.example}</p>
                      )}
                      {feature.formats && (
                        <div className="mt-4 space-y-2">
                          {feature.formats.map((format, formatIndex) => (
                            <div key={formatIndex} className="text-gray-300">{format}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-neural-bg-secondary relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-8">
                🛠️ আমাদের <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">কাজ করার ধাপ</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((step, index) => (
                <div key={index} className="glassmorphism-dark rounded-3xl p-8 hover-lift border border-neon-green/20 hover:border-neon-green/40 transition-all duration-500">
                  <div className="text-4xl mb-4">{step.charAt(0)}</div>
                  <h3 className="text-xl font-semibold text-neon-green mb-4">
                    {step.split(' –')[0].substring(2)}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.split(' –')[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-neural-bg relative">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-8">
                <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">
                  {service.finalCTA?.title}
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                {service.finalCTA?.description}
              </p>

              <Link
                href="/contact"
                className="group bg-gradient-to-r from-neon-green to-electric-blue hover:from-electric-blue hover:to-neon-green text-white font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-neon-green/50 flex items-center gap-3 justify-center max-w-md mx-auto"
              >
                <Rocket className="group-hover:rotate-12 transition-transform" size={24} />
                {service.finalCTA?.button}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    )
  }

  // Special layout for neuro-branding service
  if (params.slug === 'neuro-branding') {
    return (
      <div className="min-h-screen bg-neural-bg text-white">
        <Navigation />
        
        {/* Hero Section - Clean Professional */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-20 w-56 h-56 bg-gray-300 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <Link 
              href="/services" 
              className="inline-flex items-center text-electric-blue hover:text-neon-green transition-colors mb-8 group glassmorphism-dark rounded-full px-4 py-2"
            >
              <ChevronLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={18} />
              <span className="text-sm">সার্ভিসসমূহে ফিরে যান</span>
            </Link>

            <div className="text-center max-w-6xl mx-auto">
              <div className="flex justify-center mb-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-3xl blur opacity-30"></div>
                  <div className="relative p-10 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20">
                    <Palette className="text-white" size={100} />
                  </div>
                </div>
              </div>
              
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
                <Palette className="text-white" size={20} />
                <span className="text-sm font-semibold text-gray-200">নিউরো ব্র্যান্ডিং সিস্টেম</span>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-montserrat font-bold mb-10 leading-tight text-white">
                {service.title}
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-12 max-w-5xl mx-auto">
                {service.shortDescription}
              </p>

              {/* Brand Examples Section */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-white mb-8">বাংলাদেশের সফল ব্র্যান্ডের উদাহরণ:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {service.brandExamples.map((example, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-colors">
                      <h4 className="text-lg font-bold text-white mb-3">{example.name}</h4>
                      <p className="text-gray-300 text-sm">{example.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-8">
                <Link
                  href="/contact"
                  className="group bg-white text-gray-900 hover:bg-gray-100 font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-white/20 inline-flex items-center gap-3"
                >
                  <Palette className="group-hover:rotate-12 transition-transform" size={24} />
                  {service.price}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Branding Important Section */}
        <section className="py-20 bg-neural-bg-secondary relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-8 text-white">
                ❓ কেন ব্র্যান্ডিং এত গুরুত্বপূর্ণ?
              </h2>
              
              <div className="max-w-5xl mx-auto space-y-10">
                {/* Branding Problems */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-red-500/10 backdrop-blur-sm border border-red-400/30 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-red-400 mb-6 text-center">❌ Branding ছাড়া যা হয়:</h3>
                    <div className="space-y-4">
                      {service.brandingProblems.map((problem, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          <p className="text-gray-300">{problem}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-green-500/10 backdrop-blur-sm border border-green-400/30 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">✅ সঠিক Branding এ যা হয়:</h3>
                    <div className="space-y-4">
                      {service.results.map((result, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <p className="text-gray-300">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bangladesh Misconception */}
                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold text-yellow-400 mb-4">🇧🇩 বাংলাদেশী উদ্যোক্তাদের ভুল ধারণা</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <div className="bg-red-500/10 rounded-2xl p-6 border border-red-400/20">
                        <h4 className="text-xl font-bold text-red-400 mb-4">❌ ভুল চিন্তা:</h4>
                        <p className="text-lg text-white">{service.bangladeshMisconception.wrongIdea}</p>
                      </div>
                      <div className="bg-green-500/10 rounded-2xl p-6 border border-green-400/20">
                        <h4 className="text-xl font-bold text-green-400 mb-4">✅ সঠিক চিন্তা:</h4>
                        <p className="text-lg text-white">{service.bangladeshMisconception.rightIdea}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-400/20 mt-6">
                    <p className="text-xl text-white font-semibold text-center mb-4">
                      <span className="text-3xl">🤔</span> একটি প্রশ্ন:
                    </p>
                    <p className="text-lg text-orange-300 text-center mb-4">{service.bangladeshMisconception.facebookRisk}</p>
                    <div className="bg-green-500/10 rounded-xl p-4 border border-green-400/20">
                      <p className="text-lg text-white text-center font-semibold">
                        <span className="text-green-400">💡 সমাধান:</span> {service.bangladeshMisconception.brandingSolution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-20 bg-neural-bg">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-8">আমাদের Branding Service এ যা যা থাকছে:</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {service.features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white">{feature}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Neuro Marketing Different Section */}
            <div className="mt-20 max-w-6xl mx-auto">
              <h3 className="text-4xl font-bold text-center text-white mb-12">কেন Neuro Marketing ভিত্তিক ব্র্যান্ডিং আলাদা?</h3>
              
              {/* Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-red-500/10 backdrop-blur-sm rounded-2xl p-8 border border-red-400/30">
                  <h4 className="text-2xl font-bold text-red-400 mb-6 text-center">সাধারণ ডিজাইনাররা:</h4>
                  <p className="text-xl text-gray-300 text-center mb-6">শুধু সুন্দর কিছু বানায়।</p>
                  <div className="bg-red-500/20 rounded-xl p-4 border border-red-400/20">
                    <p className="text-center text-red-300 font-semibold">✖️ শুধু দৃষ্টিনন্দন ডিজাইন</p>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h4 className="text-2xl font-bold text-white mb-6 text-center">👉 আমরা তৈরি করি:</h4>
                  <p className="text-xl text-gray-300 text-center mb-6">মনস্তাত্ত্বিকভাবে প্রভাবিত ব্র্যান্ডিং, যা—</p>
                  
                  <div className="space-y-4">
                    <div className="bg-green-500/10 rounded-xl p-4 border border-green-400/20 flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <p className="text-white font-semibold">মানুষের আবেগ ছোঁয়</p>
                    </div>
                    <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-400/20 flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <p className="text-white font-semibold">মানুষের আস্থা জাগায়</p>
                    </div>
                    <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-400/20 flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <p className="text-white font-semibold">মানুষের মনে স্থায়ী ছাপ ফেলে</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Neuro Binding Approach */}
              <div className="bg-gradient-to-r from-slate-800/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h4 className="text-3xl font-bold text-center text-white mb-8">
                  🧩 Neuro Binding এর Branding Approach:
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-white/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-sm flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h5 className="text-lg font-bold text-white mb-2">Perception Design</h5>
                        <p className="text-gray-300">গ্রাহকের মস্তিষ্কে প্রথম ধারণা তৈরি</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-white/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-sm flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h5 className="text-lg font-bold text-white mb-2">Emotional Triggers</h5>
                        <p className="text-gray-300">রঙ, টোন, ভিজ্যুয়াল দিয়ে আবেগ ছোঁয়া</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-white/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-sm flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h5 className="text-lg font-bold text-white mb-2">Consistency</h5>
                        <p className="text-gray-300">প্রতিটি প্ল্যাটফর্মে একরকম Presentation</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-white/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-sm flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h5 className="text-lg font-bold text-white mb-2">Trust Signals</h5>
                        <p className="text-gray-300">Authority, Social Proof, Community Voice</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-neural-bg-secondary">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-8">আমাদের কাজের প্রক্রিয়া:</h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {service.process.map((step, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-white text-lg">{step}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div className="text-center mt-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold text-white mb-4">
                  🎯 <span className="text-white">{service.stats.success}</span> ব্র্যান্ড মানুষের মনে স্থায়ী হয়
                </h3>
                <p className="text-xl text-gray-300 mb-8">
                  আমাদের Neuro Branding পদ্ধতি ব্যবহার করে
                </p>
                <Link
                  href="/contact"
                  className="group bg-white text-gray-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-white/20 inline-flex items-center gap-3"
                >
                  <Palette className="group-hover:rotate-12 transition-transform" size={20} />
                  এখনই ব্র্যান্ড আইডেন্টিটি তৈরি করুন
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Special layout for neuro-lead-magnet-pro service
  if (params.slug === 'neuro-lead-magnet-pro') {
    return (
      <div className="min-h-screen bg-neural-bg text-white">
        <Navigation />
        
        {/* Hero Section - Premium Design */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-electric-blue/10 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-40 h-40 bg-neuro-purple rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-56 h-56 bg-electric-blue rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-1/3 w-32 h-32 bg-indigo-400 rounded-full blur-2xl animate-pulse delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <Link 
              href="/services" 
              className="inline-flex items-center text-electric-blue hover:text-neon-green transition-colors mb-8 group glassmorphism-dark rounded-full px-4 py-2"
            >
              <ChevronLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={18} />
              <span className="text-sm">সার্ভিসসমূহে ফিরে যান</span>
            </Link>

            <div className="text-center max-w-6xl mx-auto">
              <div className="flex justify-center mb-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-neuro-purple via-electric-blue to-indigo-500 rounded-3xl blur opacity-75 animate-pulse"></div>
                  <div className="relative p-10 bg-gradient-to-r from-neuro-purple/20 via-electric-blue/20 to-indigo-500/20 rounded-3xl glassmorphism-dark">
                    <Magnet className="text-electric-blue" size={100} />
                  </div>
                </div>
              </div>
              
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-neuro-purple/10 to-electric-blue/10 rounded-full px-6 py-3 mb-8">
                <Target className="text-neon-green" size={20} />
                <span className="text-sm font-semibold text-electric-blue">প্রিমিয়াম লিড ম্যাগনেট সিস্টেম</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-montserrat font-bold mb-10 leading-tight">
                <span className="bg-gradient-to-r from-white via-neuro-purple to-electric-blue bg-clip-text text-transparent">
                  "Cold ভিজিটরকে কি আপনি সরাসরি কাস্টমারে রূপান্তর করতে চাইছেন?"
                </span>
              </h1>
              
              <div className="text-3xl lg:text-5xl text-red-400 font-bold mb-10">
                👉 সেটা কখনো কাজ করবে না।
              </div>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-12 max-w-5xl mx-auto">
                কারণ মানুষের মস্তিষ্ক অপরিচিত কাউকে "Buy Now" শুনলেই <span className="text-red-400 font-bold">Danger Signal</span> পাঠায়।<br/>
                কিন্তু যদি আপনি প্রথমেই একটি ছোট্ট <span className="text-neon-green font-bold">Free Value</span> দেন—<br/>
                তাহলে সেই ভয় কমে যায়, তৈরি হয় বিশ্বাস।
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                <div className="glassmorphism-dark rounded-2xl p-6 border border-neon-green/20 hover:border-neon-green/40 transition-colors">
                  <div className="text-4xl font-bold text-neon-green mb-2">680%</div>
                  <div className="text-sm text-gray-300">লিড জেনারেশন বৃদ্ধি</div>
                </div>
                <div className="glassmorphism-dark rounded-2xl p-6 border border-electric-blue/20 hover:border-electric-blue/40 transition-colors">
                  <div className="text-4xl font-bold text-electric-blue mb-2">450%</div>
                  <div className="text-sm text-gray-300">কনভার্শন রেট উন্নতি</div>
                </div>
                <div className="glassmorphism-dark rounded-2xl p-6 border border-neuro-purple/20 hover:border-neuro-purple/40 transition-colors">
                  <div className="text-4xl font-bold text-neuro-purple mb-2">350%</div>
                  <div className="text-sm text-gray-300">কাস্টমার রিটেনশন</div>
                </div>
                <div className="glassmorphism-dark rounded-2xl p-6 border border-indigo-400/20 hover:border-indigo-400/40 transition-colors">
                  <div className="text-4xl font-bold text-indigo-400 mb-2">280%</div>
                  <div className="text-sm text-gray-300">ROI পারফরমেন্স</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-6 mb-16">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-neuro-purple to-electric-blue hover:from-electric-blue hover:to-neuro-purple text-white font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-neuro-purple/50 flex items-center gap-3"
                >
                  <Magnet className="group-hover:rotate-12 transition-transform" size={24} />
                  📌 আপনার লিড ম্যাগনেট এখনই তৈরি করুন
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
                </Link>
                <button className="glassmorphism-dark border-2 border-electric-blue/30 hover:border-electric-blue/60 text-white font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
                  <Eye size={24} />
                  ডেমো দেখুন
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* কেন Lead Magnet জরুরি Section */}
        <section className="py-24 bg-neural-bg-secondary relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-montserrat font-bold mb-8">
                ❓ কেন <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">Lead Magnet জরুরি?</span>
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-neuro-purple/10 to-electric-blue/10 rounded-3xl p-12 border border-neuro-purple/20 mb-16">
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-neuro-purple/20 to-electric-blue/20 rounded-full flex items-center justify-center">
                    <Brain className="text-electric-blue" size={48} />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-8 text-center">🧠 Neuro Fact:</h3>
                <div className="space-y-6 text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed text-center">
                  <p className="text-2xl">মানুষ অপরিচিতের অফারকে সন্দেহজনক ভাবে।</p>
                  <p className="text-2xl">কিন্তু ফ্রি ভ্যালু → <span className="text-electric-blue font-bold text-3xl">Reciprocity Trigger</span> চালু করে।</p>
                  <div className="bg-electric-blue/10 p-8 rounded-2xl border border-electric-blue/30 my-8">
                    <p className="text-3xl font-bold text-electric-blue">মানে →</p>
                    <p className="text-2xl font-bold text-white mt-4">"ওরা আমাকে কিছু দিল, আমিও কিছু ফিরিয়ে দিই।"</p>
                  </div>
                  <p className="text-2xl font-bold text-white">👉 তাই ব্যবসার প্রথম ধাপ হওয়া উচিত লিড ম্যাগনেট অফার করা।</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ভিজিটরের সাইকোলজি - বাসের গল্প */}
        <section className="py-24 bg-neural-bg relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-montserrat font-bold mb-8">
                🧠 ভিজিটরের <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">সাইকোলজি</span>
              </h2>
              <p className="text-2xl text-gray-300 mb-8">বিশ্বাস কিভাবে গড়ে ওঠে</p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* বাসের গল্প */}
              <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl p-12 border border-indigo-400/20 mb-12">
                <div className="space-y-8 text-lg leading-relaxed">
                  <p className="text-xl text-center font-semibold text-indigo-300 mb-8">📖 একটি বাস্তব গল্প</p>
                  
                  <p className="text-xl">একদিন এক লোক অফিস থেকে বাসে করে বাসায় ফিরছিল। বাসে তার পাশের সিটে বসা এক অপরিচিত মানুষ হঠাৎ তার দিকে একটি মিষ্টির বাক্স বাড়িয়ে দিল।</p>
                  
                  <div className="bg-neon-green/10 p-8 rounded-2xl border border-neon-green/30 text-center">
                    <p className="text-2xl font-bold text-neon-green mb-4">লোকটি বললো:</p>
                    <p className="text-xl italic">"ভাই, আমার মেয়ে এসএসসি পরীক্ষায় A+ পেয়েছে। তাই আনন্দে সবার মাঝে মিষ্টি বিলাচ্ছি, নিন, খান।"</p>
                  </div>

                  <div className="bg-red-500/10 p-8 rounded-2xl border border-red-500/20">
                    <p className="text-xl font-bold text-red-400 mb-6 text-center">👉 আপনি যদি সেই যাত্রী হতেন, তাহলে কি মিষ্টি খেতেন?</p>
                    <div className="text-center space-y-4">
                      <p className="text-xl mb-4">অধিকাংশ মানুষই বলবে <span className="text-red-400 font-bold">"না"</span>।</p>
                      <p className="text-lg text-gray-300">কারণ মাথায় সঙ্গে সঙ্গে ভয়ের সিগন্যাল বাজবে:</p>
                    </div>
                  </div>

                  {/* ভয়ের কারণগুলো */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                    <div className="bg-orange-500/10 p-6 rounded-2xl border border-orange-500/20 text-center">
                      <div className="text-4xl mb-4">😰</div>
                      <p className="text-lg font-semibold text-orange-400 mb-3">"আমি তো তাকে চিনি না।"</p>
                    </div>
                    <div className="bg-yellow-500/10 p-6 rounded-2xl border border-yellow-500/20 text-center">
                      <div className="text-4xl mb-4">☠️</div>
                      <p className="text-lg font-semibold text-yellow-400 mb-3">"কে জানে, মিষ্টিতে কিছু মেশানো আছে কিনা!"</p>
                    </div>
                    <div className="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 text-center">
                      <div className="text-4xl mb-4">🚨</div>
                      <p className="text-lg font-semibold text-red-400 mb-3">"রাস্তায় কত কাহিনি তো শুনেছি!"</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 p-8 rounded-2xl border border-red-500/30 text-center">
                    <p className="text-2xl font-bold text-white mb-4">📍 মূল সূত্র</p>
                    <p className="text-2xl font-bold text-red-400">অচেনা মানুষ + হঠাৎ অফার = ব্রেইনের জন্য ডেঞ্জার সিগন্যাল</p>
                  </div>
                </div>
              </div>

              {/* ব্যবসার সাথে তুলনা */}
              <div className="bg-gradient-to-r from-electric-blue/10 to-neuro-purple/10 rounded-3xl p-12 border border-electric-blue/20 mb-12">
                <h3 className="text-3xl font-bold text-center text-electric-blue mb-8">ব্যবসার ক্ষেত্রে একই ব্যাপার!</h3>
                
                <div className="space-y-8">
                  <p className="text-xl text-center">যখন কোনো ব্যবসায়ী সরাসরি বলে <span className="text-red-400 font-bold">"আমার সার্ভিস কিনুন বা আমার প্রোডাক্ট কিনুন"</span>, তখন সম্ভাব্য কাস্টমারের ব্রেইনেও একই ভয় কাজ করে।</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-red-400/10 p-6 rounded-2xl border border-red-400/20 text-center">
                      <div className="text-3xl mb-4">🤔</div>
                      <p className="text-lg text-red-300">"এরা কি সত্যিই ভাল কোম্পানি নাকি স্কেমার?"</p>
                    </div>
                    <div className="bg-yellow-400/10 p-6 rounded-2xl border border-yellow-400/20 text-center">
                      <div className="text-3xl mb-4">💰</div>
                      <p className="text-lg text-yellow-300">"আমার টাকা নিয়ে গেলে কি আমি ক্ষতিগ্রস্ত হবো না?"</p>
                    </div>
                    <div className="bg-orange-400/10 p-6 rounded-2xl border border-orange-400/20 text-center">
                      <div className="text-3xl mb-4">🎭</div>
                      <p className="text-lg text-orange-300">"এরা কি শুধু বিক্রি করার জন্য এসব কথা বলছে না?"</p>
                    </div>
                  </div>

                  <div className="bg-red-500/10 p-8 rounded-2xl border border-red-500/20 text-center">
                    <h4 className="text-2xl font-bold text-red-400 mb-4">ফলাফল?</h4>
                    <p className="text-2xl font-bold text-white">👉 সে অফার না নিয়ে ওয়েবসাইট থেকে বের হয়ে যায়।</p>
                  </div>
                </div>
              </div>

              {/* সমাধান */}
              <div className="bg-gradient-to-r from-neon-green/10 to-electric-blue/10 rounded-3xl p-12 border border-neon-green/20">
                <h3 className="text-4xl font-bold text-center text-neon-green mb-8">💡 সমাধান: লিড ম্যাগনেট</h3>
                
                <div className="space-y-8">
                  <p className="text-xl text-center">ভাবুন, সেই বাসের যাত্রী যদি আপনার এক পুরোনো পরিচিত হতো। যেমন আপনার স্কুলের এক স্যার বা পাশের বাড়ির এক চাচা হঠাৎ এসে বললো:</p>
                  
                  <div className="bg-neon-green/10 p-8 rounded-2xl border border-neon-green/30 text-center">
                    <p className="text-2xl font-bold text-neon-green mb-4">পরিচিত ব্যক্তি বললো:</p>
                    <p className="text-xl italic">"ভাই/বাবা, আমার মেয়ে এসএসসি পরীক্ষায় A+ পেয়েছে। আনন্দে সবাইকে মিষ্টি খাওয়াচ্ছি, নাও একটা খাও।"</p>
                  </div>

                  <div className="bg-electric-blue/10 p-8 rounded-2xl border border-electric-blue/30 text-center">
                    <p className="text-2xl font-bold text-electric-blue mb-4">👉 এবার কি আপনি মিষ্টি খেতে ভয় পেতেন?</p>
                    <p className="text-2xl font-bold text-white">নিশ্চয়ই না। বরং খুশি মনে খেতেন!</p>
                    <p className="text-xl text-gray-300 mt-4">কারণ আপনি তাকে চেনেন, বিশ্বাস করেন।</p>
                  </div>

                  <div className="bg-gradient-to-r from-neuro-purple/10 to-electric-blue/10 p-8 rounded-2xl border border-neuro-purple/20">
                    <h4 className="text-2xl font-bold text-center text-neuro-purple mb-6">💡 আসল শিক্ষা:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="text-center">
                        <div className="text-3xl mb-4">❌</div>
                        <p className="text-lg text-red-300">অপরিচিত মানুষ হঠাৎ কিছু অফার করলে আমাদের ব্রেইন ডেঞ্জার সিগন্যাল দেয়।</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl mb-4">✅</div>
                        <p className="text-lg text-neon-green">পরিচিত মানুষ কিছু অফার করলে ভয় থাকে না।</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* লিড ম্যাগনেটের ভূমিকা */}
        <section className="py-24 bg-neural-bg-secondary relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-montserrat font-bold mb-8">
                🎯 লিড ম্যাগনেটের <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">ভূমিকা</span>
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-neon-green/10 to-electric-blue/10 rounded-3xl p-12 border border-neon-green/20 mb-12">
                <div className="space-y-8">
                  <p className="text-xl text-center">ঠিক একইভাবে, ব্যবসার ক্ষেত্রেও প্রথমে কাস্টমারের কাছে আপনি অপরিচিত। সে আপনাকে দেখে ভাবে:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-red-400/10 p-8 rounded-2xl border border-red-400/20 text-center">
                      <div className="text-4xl mb-4">❓</div>
                      <p className="text-xl font-bold text-red-300">"এরা আসলেই কে?"</p>
                    </div>
                    <div className="bg-yellow-400/10 p-8 rounded-2xl border border-yellow-400/20 text-center">
                      <div className="text-4xl mb-4">🤷</div>
                      <p className="text-xl font-bold text-yellow-300">"এরা বিশ্বাসযোগ্য তো?"</p>
                    </div>
                    <div className="bg-orange-400/10 p-8 rounded-2xl border border-orange-400/20 text-center">
                      <div className="text-4xl mb-4">💸</div>
                      <p className="text-xl font-bold text-orange-300">"আমার টাকা দিলে আমি কি ঠকব না তো?"</p>
                    </div>
                  </div>

                  <div className="bg-red-500/10 p-8 rounded-2xl border border-red-500/20 text-center">
                    <p className="text-2xl font-bold text-red-400 mb-4">👉 তাই সরাসরি প্রোডাক্ট/সার্ভিস অফার করলে সে আপনাকে "অপরিচিত" ভাববে।</p>
                  </div>

                  <div className="bg-neon-green/10 p-12 rounded-2xl border border-neon-green/30">
                    <h3 className="text-3xl font-bold text-center text-neon-green mb-8">🎁 কিন্তু যখন আপনি আগে একটি লিড ম্যাগনেট দেন...</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center">
                        <div className="text-4xl mb-4">📄</div>
                        <p className="text-lg text-gray-300">ফ্রি রিপোর্ট</p>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl mb-4">✅</div>
                        <p className="text-lg text-gray-300">ফ্রি চেকলিস্ট</p>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl mb-4">🎁</div>
                        <p className="text-lg text-gray-300">ফ্রি স্যাম্পল</p>
                      </div>
                    </div>

                    <div className="bg-electric-blue/10 p-8 rounded-2xl border border-electric-blue/30 text-center">
                      <p className="text-xl font-bold text-electric-blue mb-4">তখন কাস্টমার প্রথমে আপনার সাথে পরিচিত হয়। সে ভাবে:</p>
                      <p className="text-2xl italic text-white">"আচ্ছা, এরা আমাকে সাহায্য করেছে, ভ্যালু দিয়েছে। হয়তো এদের সাথে কাজ করা নিরাপদ।"</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* আমাদের তৈরি লিড ম্যাগনেট কেমন হয় */}
              <div className="bg-gradient-to-r from-electric-blue/10 to-neuro-purple/10 rounded-3xl p-12 border border-electric-blue/20">
                <h3 className="text-4xl font-bold text-center text-electric-blue mb-12">🔍 আমাদের তৈরি লিড ম্যাগনেট কেমন হয়?</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center glassmorphism-dark p-8 rounded-2xl border border-neon-green/20">
                    <div className="text-5xl mb-4">😌</div>
                    <h4 className="text-xl font-bold text-neon-green mb-3">✅ ভিজিটরের ভয় কমায়</h4>
                    <p className="text-gray-300">বিশ্বাস তৈরি করে</p>
                  </div>
                  <div className="text-center glassmorphism-dark p-8 rounded-2xl border border-electric-blue/20">
                    <div className="text-5xl mb-4">🎓</div>
                    <h4 className="text-xl font-bold text-electric-blue mb-3">✅ আপনাকে Expert প্রমাণ করে</h4>
                    <p className="text-gray-300">কর্তৃত্ব স্থাপন করে</p>
                  </div>
                  <div className="text-center glassmorphism-dark p-8 rounded-2xl border border-neuro-purple/20">
                    <div className="text-5xl mb-4">🤝</div>
                    <h4 className="text-xl font-bold text-neuro-purple mb-3">✅ Relationship তৈরি করে</h4>
                    <p className="text-gray-300">দীর্ঘমেয়াদী সম্পর্ক</p>
                  </div>
                  <div className="text-center glassmorphism-dark p-8 rounded-2xl border border-indigo-400/20">
                    <div className="text-5xl mb-4">🚀</div>
                    <h4 className="text-xl font-bold text-indigo-400 mb-3">✅ Future Sales এর পথ খুলে দেয়</h4>
                    <p className="text-gray-300">ভবিষ্যৎ বিক্রয়</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* রয়াল মালাবারের গল্প */}
        <section className="py-24 bg-neural-bg relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-montserrat font-bold mb-8">
                🎭 গল্প থেকে শিক্ষা <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">(রয়াল মালাবারের কোল্ড ড্রিঙ্ক)</span>
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-3xl p-12 border border-blue-400/20">
                <div className="space-y-8 text-lg leading-relaxed">
                  <p className="text-xl">একদিন আমি আর আমার ওয়াইফ গিয়েছিলাম ডায়মন্ড ওয়ার্ল্ড থেকে গিফট কিনতে। কিন্তু ভেতরে ঢোকার আগেই রয়াল মালাবারের স্টোরে ঢুকে পড়লাম।</p>
                  
                  <div className="bg-green-500/20 p-8 rounded-2xl border border-green-500/30 text-center">
                    <p className="text-2xl font-bold text-green-400">তারা আমাদের হাতে ধরিয়ে দিল দুটো কোল্ড ড্রিঙ্ক।</p>
                  </div>

                  <div className="bg-orange-500/10 p-8 rounded-2xl border border-orange-500/20">
                    <p className="text-xl font-bold text-orange-400 mb-6">👉 সঙ্গে সঙ্গেই আমাদের মনে হলো—</p>
                    <div className="text-center">
                      <p className="text-2xl font-semibold italic">"ওরা আমাদেরকে ফ্রি আপ্যায়ন করল… এখন কিনে না গেলে তো খারাপ লাগবে।"</p>
                    </div>
                  </div>

                  <div className="text-center bg-yellow-500/10 p-8 rounded-2xl border border-yellow-500/20">
                    <p className="text-xl mb-6">আমরা মূলত ডায়মন্ড ওয়ার্ল্ড থেকে কেনার প্ল্যান করেছিলাম,</p>
                    <p className="text-3xl font-bold text-yellow-400">কিন্তু শেষমেশ কিনলাম রয়াল মালাবার থেকেই।</p>
                  </div>

                  <div className="bg-red-500/10 p-8 rounded-2xl border border-red-500/20 text-center">
                    <p className="text-2xl font-bold text-red-400 mb-6">এখানেই আসল সত্য:</p>
                    <p className="text-xl mb-4">ফ্রি ভ্যালু মানুষকে মানসিকভাবে ঋণী করে তোলে।</p>
                    <p className="text-2xl font-bold text-orange-400">এটাই Lead Magnet-এর কাজ।</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* লিড ম্যাগনেটের ধরন */}
        <section className="py-24 bg-neural-bg-secondary relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-montserrat font-bold mb-8">
                🌟 লিড ম্যাগনেটের <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">ধরন</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                আপনার ব্যবসার জন্য সবচেয়ে কার্যকর ধরন বেছে নিন
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="glassmorphism-dark rounded-3xl p-8 hover-lift border border-neon-green/20 hover:border-neon-green/40 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">📚</div>
                  <div>
                    <h3 className="text-2xl font-bold text-neon-green mb-4">1️⃣ Ebook / Guide</h3>
                    <p className="text-lg text-gray-300 mb-4">বিস্তারিত তথ্যবহুল গাইড</p>
                    <div className="bg-neon-green/10 p-4 rounded-xl border border-neon-green/20">
                      <p className="text-sm italic">"আপনার ওয়েবসাইটে কেন ৯০% ভিজিটর বিশ্বাস করে না"</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glassmorphism-dark rounded-3xl p-8 hover-lift border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">✅</div>
                  <div>
                    <h3 className="text-2xl font-bold text-electric-blue mb-4">2️⃣ Checklist</h3>
                    <p className="text-lg text-gray-300 mb-4">সহজ চেক করার তালিকা</p>
                    <div className="bg-electric-blue/10 p-4 rounded-xl border border-electric-blue/20">
                      <p className="text-sm italic">"ওয়েবসাইট ট্রাস্ট স্কোর টেস্ট – ১০টি প্রশ্ন"</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glassmorphism-dark rounded-3xl p-8 hover-lift border border-neuro-purple/20 hover:border-neuro-purple/40 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">🎥</div>
                  <div>
                    <h3 className="text-2xl font-bold text-neuro-purple mb-4">3️⃣ Mini Course / Video Training</h3>
                    <p className="text-lg text-gray-300 mb-4">ধাপে ধাপে শিক্ষামূলক ভিডিও</p>
                    <div className="bg-neuro-purple/10 p-4 rounded-xl border border-neuro-purple/20">
                      <p className="text-sm italic">"কিভাবে ওয়েবসাইট থেকে বেশি কাস্টমার পাওয়া যায়"</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glassmorphism-dark rounded-3xl p-8 hover-lift border border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">🛠️</div>
                  <div>
                    <h3 className="text-2xl font-bold text-indigo-400 mb-4">4️⃣ Template / Toolkit</h3>
                    <p className="text-lg text-gray-300 mb-4">প্রস্তুত টেমপ্লেট ও ফ্রেমওয়ার্ক</p>
                    <div className="bg-indigo-400/10 p-4 rounded-xl border border-indigo-400/20">
                      <p className="text-sm italic">Script, Framework, Ready Template</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* বাংলাদেশি ব্যবসার উদাহরণ */}
        <section className="py-24 bg-neural-bg relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-montserrat font-bold mb-8">
                📊 বাংলাদেশি <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">ব্যবসার উদাহরণ</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                স্থানীয় ব্যবসার জন্য কার্যকর লিড ম্যাগনেট আইডিয়া
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="glassmorphism-dark rounded-3xl p-8 hover-lift border border-green-400/20 hover:border-green-400/40 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">🍃</div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-400 mb-4">অর্গানিক ফুড শপ</h3>
                    <div className="bg-green-400/10 p-6 rounded-2xl border border-green-400/20">
                      <p className="text-lg font-semibold text-green-300 mb-2">লিড ম্যাগনেট:</p>
                      <p className="text-base text-gray-300 italic">"বাংলাদেশে ভেজাল খাবার চিনবেন কিভাবে" (PDF Guide)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glassmorphism-dark rounded-3xl p-8 hover-lift border border-amber-400/20 hover:border-amber-400/40 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">👝</div>
                  <div>
                    <h3 className="text-2xl font-bold text-amber-400 mb-4">লেদার শপ</h3>
                    <div className="bg-amber-400/10 p-6 rounded-2xl border border-amber-400/20">
                      <p className="text-lg font-semibold text-amber-300 mb-2">লিড ম্যাগনেট:</p>
                      <p className="text-base text-gray-300 italic">"আসল আর নকল লেদার আলাদা করার ৫টি উপায়"</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glassmorphism-dark rounded-3xl p-8 hover-lift border border-blue-400/20 hover:border-blue-400/40 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">📱</div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">গ্যাজেট শপ</h3>
                    <div className="bg-blue-400/10 p-6 rounded-2xl border border-blue-400/20">
                      <p className="text-lg font-semibold text-blue-300 mb-2">লিড ম্যাগনেট:</p>
                      <p className="text-base text-gray-300 italic">"নকল ইয়ারফোনের ভয়ংকর ৫টি ক্ষতি"</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glassmorphism-dark rounded-3xl p-8 hover-lift border border-pink-400/20 hover:border-pink-400/40 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">🧸</div>
                  <div>
                    <h3 className="text-2xl font-bold text-pink-400 mb-4">টয় শপ</h3>
                    <div className="bg-pink-400/10 p-6 rounded-2xl border border-pink-400/20">
                      <p className="text-lg font-semibold text-pink-300 mb-2">লিড ম্যাগনেট:</p>
                      <p className="text-base text-gray-300 italic">"শিশুর বয়স অনুযায়ী সঠিক খেলনা বাছাই গাইড"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* আমাদের কাজ করার ধাপ */}
        <section className="py-24 bg-neural-bg-secondary relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-montserrat font-bold mb-8">
                🛠️ আমাদের কাজ করার <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">ধাপ</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                বিজ্ঞান এবং অভিজ্ঞতা ভিত্তিক কার্যকর প্রক্রিয়া
              </p>
            </div>
            
            <div className="relative max-w-6xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-neuro-purple via-electric-blue to-neon-green rounded-full opacity-40"></div>
              
              <div className="space-y-16">
                <div className="flex items-center gap-12">
                  <div className="flex-1 text-right">
                    <div className="glassmorphism-dark rounded-3xl p-8 hover-lift inline-block max-w-lg">
                      <div className="flex items-center justify-end gap-4 mb-6">
                        <span className="text-sm font-semibold text-neon-green bg-neon-green/10 px-3 py-1 rounded-full">ধাপ ১</span>
                        <div className="text-4xl">🔍</div>
                      </div>
                      <h3 className="text-2xl font-bold text-neon-green mb-4">Research</h3>
                      <p className="text-gray-300 leading-relaxed text-lg">কাস্টমারের ভয় ও চাহিদা বোঝা</p>
                      <div className="w-full h-1 bg-gradient-to-l from-neon-green/50 to-transparent rounded-full mt-4"></div>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-r from-neon-green to-electric-blue rounded-full flex items-center justify-center shadow-xl border-4 border-neural-bg-secondary">
                      <span className="text-white font-bold text-2xl">1</span>
                    </div>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>

                <div className="flex items-center gap-12 flex-row-reverse">
                  <div className="flex-1 text-left">
                    <div className="glassmorphism-dark rounded-3xl p-8 hover-lift inline-block max-w-lg">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-4xl">🧠</div>
                        <span className="text-sm font-semibold text-electric-blue bg-electric-blue/10 px-3 py-1 rounded-full">ধাপ ২</span>
                      </div>
                      <h3 className="text-2xl font-bold text-electric-blue mb-4">Hook Creation</h3>
                      <p className="text-gray-300 leading-relaxed text-lg">মানুষকে ক্লিক করাবে এমন টাইটেল তৈরি</p>
                      <div className="w-full h-1 bg-gradient-to-r from-electric-blue/50 to-transparent rounded-full mt-4"></div>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-r from-electric-blue to-neuro-purple rounded-full flex items-center justify-center shadow-xl border-4 border-neural-bg-secondary">
                      <span className="text-white font-bold text-2xl">2</span>
                    </div>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>

                <div className="flex items-center gap-12">
                  <div className="flex-1 text-right">
                    <div className="glassmorphism-dark rounded-3xl p-8 hover-lift inline-block max-w-lg">
                      <div className="flex items-center justify-end gap-4 mb-6">
                        <span className="text-sm font-semibold text-neuro-purple bg-neuro-purple/10 px-3 py-1 rounded-full">ধাপ ৩</span>
                        <div className="text-4xl">✍️</div>
                      </div>
                      <h3 className="text-2xl font-bold text-neuro-purple mb-4">Content & Design</h3>
                      <p className="text-gray-300 leading-relaxed text-lg">Neuro Framework + Scroll-Stopper Cover</p>
                      <div className="w-full h-1 bg-gradient-to-l from-neuro-purple/50 to-transparent rounded-full mt-4"></div>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-r from-neuro-purple to-indigo-400 rounded-full flex items-center justify-center shadow-xl border-4 border-neural-bg-secondary">
                      <span className="text-white font-bold text-2xl">3</span>
                    </div>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>

                <div className="flex items-center gap-12 flex-row-reverse">
                  <div className="flex-1 text-left">
                    <div className="glassmorphism-dark rounded-3xl p-8 hover-lift inline-block max-w-lg">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-4xl">🚀</div>
                        <span className="text-sm font-semibold text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full">ধাপ ৪</span>
                      </div>
                      <h3 className="text-2xl font-bold text-indigo-400 mb-4">Delivery</h3>
                      <p className="text-gray-300 leading-relaxed text-lg">Email / WhatsApp / Funnel</p>
                      <div className="w-full h-1 bg-gradient-to-r from-indigo-400/50 to-transparent rounded-full mt-4"></div>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-r from-indigo-400 to-neon-green rounded-full flex items-center justify-center shadow-xl border-4 border-neural-bg-secondary">
                      <span className="text-white font-bold text-2xl">4</span>
                    </div>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ফলাফল Section */}
        <section className="py-24 bg-neural-bg relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-montserrat font-bold mb-8">
                💡 <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">ফলাফল</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                কি পাবেন আমাদের লিড ম্যাগনেট দিয়ে
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Main Flow */}
              <div className="bg-gradient-to-r from-red-500/10 via-yellow-500/10 to-neon-green/10 rounded-3xl p-12 border border-neon-green/20 mb-16">
                <div className="text-center mb-12">
                  <h3 className="text-4xl font-bold text-white mb-8">👉 Cold Visitor → Warm Lead → Loyal Customer</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="text-4xl">🧊</div>
                    </div>
                    <h4 className="text-2xl font-bold text-red-400 mb-4">Cold Visitor</h4>
                    <p className="text-gray-300">অপরিচিত ভিজিটর</p>
                    <p className="text-sm text-red-300 mt-2">সন্দেহ ও ভয়</p>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="text-6xl">→</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="text-4xl">🔥</div>
                    </div>
                    <h4 className="text-2xl font-bold text-yellow-400 mb-4">Warm Lead</h4>
                    <p className="text-gray-300">আগ্রহী সম্ভাব্য গ্রাহক</p>
                    <p className="text-sm text-yellow-300 mt-2">বিশ্বাস ও আগ্রহ</p>
                  </div>
                </div>
                
                <div className="text-center mt-12">
                  <div className="text-6xl mb-4">↓</div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="text-4xl">👑</div>
                    </div>
                    <h4 className="text-2xl font-bold text-neon-green mb-4">Loyal Customer</h4>
                    <p className="text-gray-300">স্থায়ী বিশ্বস্ত গ্রাহক</p>
                    <p className="text-sm text-neon-green mt-2">দীর্ঘমেয়াদী সম্পর্ক</p>
                  </div>
                </div>
              </div>
              
              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center glassmorphism-dark rounded-3xl p-8 hover-lift border border-neon-green/20">
                  <div className="w-20 h-20 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="text-neon-green" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-neon-green mb-4">✅ ভিজিটরকে সহজে কাস্টমারে রূপান্তর</h3>
                  <p className="text-gray-300">উন্নত কনভার্শন রেট</p>
                </div>
                
                <div className="text-center glassmorphism-dark rounded-3xl p-8 hover-lift border border-electric-blue/20">
                  <div className="w-20 h-20 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="text-electric-blue" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-electric-blue mb-4">✅ বিশ্বাস তৈরি</h3>
                  <p className="text-gray-300">দীর্ঘমেয়াদী সম্পর্ক গড়ে তোলা</p>
                </div>
                
                <div className="text-center glassmorphism-dark rounded-3xl p-8 hover-lift border border-neuro-purple/20">
                  <div className="w-20 h-20 bg-neuro-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="text-neuro-purple" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-neuro-purple mb-4">✅ ভবিষ্যতের সেলসের জন্য কাস্টমার প্রস্তুত</h3>
                  <p className="text-gray-300">উন্নত সেলস পাইপলাইন</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Showcase */}
        <section className="py-24 bg-neural-bg relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-montserrat font-bold mb-8">
                প্রমাণিত <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">ফলাফল</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                আমাদের ক্লায়েন্টদের বাস্তব সাফল্যের গল্প
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.results.map((result, index) => (
                <div 
                  key={index}
                  className="text-center glassmorphism-dark rounded-3xl p-8 hover-lift group relative overflow-hidden border border-neon-green/20 hover:border-neon-green/40 transition-all duration-500"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-r from-neon-green to-electric-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <TrendingUp className="text-white" size={36} />
                    </div>
                    <h3 className="text-2xl font-bold text-neon-green mb-3">{result.split(' ')[0]}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{result.substring(result.indexOf(' ') + 1)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-neuro-purple/20 to-electric-blue/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 bg-electric-blue rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-56 h-56 bg-neuro-purple rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-green/10 to-electric-blue/10 rounded-full px-6 py-3 mb-8">
                <Rocket className="text-neon-green" size={20} />
                <span className="text-sm font-semibold text-electric-blue">আজই শুরু করুন</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-montserrat font-bold mb-8">
                🚀 <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">Final CTA</span>
              </h2>
              
              <p className="text-3xl lg:text-4xl font-bold mb-8 text-white">"কাস্টমারকে ভয় নয়, বিশ্বাস দিয়ে জয় করুন।"</p>
              
              <p className="text-2xl lg:text-3xl mb-12 text-gray-300">
                👉 এখনই আপনার <strong className="text-neon-green">Neuro Marketing ভিত্তিক Lead Magnet তৈরি করুন।</strong>
              </p>

              <div className="flex flex-wrap justify-center gap-8 mb-16">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-neon-green to-electric-blue hover:from-electric-blue hover:to-neon-green text-white font-bold py-6 px-16 rounded-full text-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-neon-green/50 flex items-center gap-4"
                >
                  <Magnet className="group-hover:rotate-12 transition-transform" size={28} />
                  📌 এখনই ফ্রি লিড ম্যাগনেট বুক করুন
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={28} />
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glassmorphism-dark rounded-2xl p-6 border border-neon-green/20">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Shield className="text-neon-green" size={32} />
                    <span className="font-bold text-neon-green text-xl">১০০% গ্যারান্টি</span>
                  </div>
                  <p className="text-gray-300">সন্তুষ্ট না হলে সম্পূর্ণ টাকা ফেরত</p>
                </div>
                
                <div className="glassmorphism-dark rounded-2xl p-6 border border-electric-blue/20">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <UsersIcon className="text-electric-blue" size={32} />
                    <span className="font-bold text-electric-blue text-xl">৮০০+ ক্লায়েন্ট</span>
                  </div>
                  <p className="text-gray-300">সফল প্রজেক্ট এবং সন্তুষ্ট গ্রাহক</p>
                </div>
                
                <div className="glassmorphism-dark rounded-2xl p-6 border border-neuro-purple/20">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Award className="text-neuro-purple" size={32} />
                    <span className="font-bold text-neuro-purple text-xl">৬ বছরের অভিজ্ঞতা</span>
                  </div>
                  <p className="text-gray-300">Neuro Marketing এ বিশেষজ্ঞ টিম</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neural-bg text-white">
      <Navigation />
      
      <div className="pt-20">
        {/* CLEAN HERO SECTION */}
        <section className="relative min-h-screen overflow-hidden flex items-center" style={{background: 'linear-gradient(to bottom right, #11141d 0%, #6511a2 50%, #11141d 100%)'}}>
          <div className="container mx-auto px-6 relative z-10">
            {/* Simple Back Button */}
            <Link 
              href="/services" 
              className="absolute top-8 left-6 inline-flex items-center text-white/80 hover:text-white transition-colors group"
            >
              <ChevronLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
              <span>সার্ভিস পেজে ফিরুন</span>
            </Link>

            <div className="text-center space-y-8 max-w-5xl mx-auto">
              {/* Clean Stats Display */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                  <IconComponent className="text-white" size={60} />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-black text-white">{service.stats.success}</span>
                    <span className="text-2xl text-white/80">%</span>
                  </div>
                  <p className="text-white/70 text-sm">{service.stats.metric}</p>
                </div>
              </div>
              
              {/* Clean Main Title */}
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                {service.title}
              </h1>
              
              {/* Simple Description */}
              <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                {service.shortDescription}
              </p>
              
              {/* Simple CTA */}
              <div className="pt-8">
                <button className="bg-white text-purple-900 font-bold text-xl px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  ফ্রি কনসালটেশন বুক করুন
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* কেন Attention এত গুরুত্বপূর্ণ SECTION */}
        <section className="py-20 bg-gradient-to-br from-neural-bg via-neural-bg-secondary to-neural-bg relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-8">
                <span className="bg-gradient-to-r from-neon-green via-electric-blue to-neuro-purple bg-clip-text text-transparent">
                  ❓ কেন Attention এত গুরুত্বপূর্ণ?
                </span>
              </h2>
              
              <div className="max-w-5xl mx-auto space-y-10">
                {/* Stats Display */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-8 text-center">
                    <div className="mb-4">
                      <span className="text-6xl font-black text-red-400">৫০০০+</span>
                      <p className="text-xl text-white mt-2">কনটেন্ট দেখে প্রতিদিন</p>
                    </div>
                    <p className="text-lg text-gray-300">একজন মানুষ গড়ে</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-electric-blue/10 to-neuro-purple/10 border border-electric-blue/20 rounded-2xl p-8 text-center">
                    <div className="mb-4">
                      <span className="text-6xl font-black text-electric-blue">১-২</span>
                      <span className="text-3xl text-white/80 ml-2">সেকেন্ড</span>
                      <p className="text-xl text-white mt-2">সময় দেয় মাত্র</p>
                    </div>
                    <p className="text-lg text-gray-300">প্রতিটি কনটেন্টে</p>
                  </div>
                </div>

                {/* Behavior Change */}
                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold text-yellow-400 mb-4">আচরণের পরিবর্তন</h3>
                    <p className="text-2xl text-white leading-relaxed">
                      মানুষ এখন আর কনটেন্ট <span className="line-through text-red-400">পড়ে না</span> → <span className="text-neon-green font-bold">স্ক্যান করে</span>
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-neon-green/10 to-electric-blue/10 border border-neon-green/30 rounded-2xl p-6 mt-6">
                    <p className="text-xl text-white font-semibold text-center flex items-center justify-center gap-3">
                      <span className="text-3xl">👉</span>
                      <span>তাই কনটেন্ট এমন হতে হবে যা স্ক্যান করার সময়ই আটকে দেয়।</span>
                    </p>
                  </div>
                </div>

                {/* Neuro Fact */}
                <div className="bg-gradient-to-r from-neuro-purple/10 to-electric-blue/10 border border-neuro-purple/20 rounded-2xl p-8">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-4">
                      <span className="text-5xl">🧠</span>
                      <span className="text-neuro-purple">Neuro Fact:</span>
                    </h3>
                    <p className="text-2xl text-white leading-relaxed mb-6">
                      মানুষ স্ক্যান করার সময় <span className="text-neon-green font-bold">Pattern Breaker</span> দেখলেই থেমে যায়
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                      <div className="bg-white/10 rounded-xl p-4 text-center">
                        <div className="text-2xl mb-2">📝</div>
                        <p className="text-sm text-gray-300">Bold শব্দ</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4 text-center">
                        <div className="text-2xl mb-2">🎨</div>
                        <p className="text-sm text-gray-300">আকর্ষণীয় ভিজ্যুয়াল</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4 text-center">
                        <div className="text-2xl mb-2">🎯</div>
                        <p className="text-sm text-gray-300">Bold হুক</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4 text-center">
                        <div className="text-2xl mb-2">⚡</div>
                        <p className="text-sm text-gray-300">চমকপ্রদ ভিজ্যুয়াল</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* কেন Neuro Marketing জরুরি SECTION */}
        <section className="py-20 bg-neural-bg relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-8">
                <span className="bg-gradient-to-r from-electric-blue via-neuro-purple to-neon-green bg-clip-text text-transparent">
                  ❓ কেন শুধু ডিজাইন নয়, Neuro Marketing জরুরি
                </span>
              </h2>
              
              <div className="max-w-4xl mx-auto space-y-8">
                <p className="text-2xl text-gray-200 leading-relaxed font-medium">
                  আজকের দিনে <span className="text-red-400 font-bold">৯০% ভিজিটর</span> ওয়েবসাইটে ঢুকে <span className="text-electric-blue font-bold">প্রথম ৫ সেকেন্ডেই</span> সিদ্ধান্ত নেয়, থাকবে নাকি চলে যাবে।
                </p>
                
                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-red-400 mb-6 text-center">কারণ:</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center">
                          <Palette className="text-red-400" size={40} />
                        </div>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-red-400">এলোমেলো ডিজাইন</p>
                        <div className="flex justify-center my-2">
                          <ArrowRight className="text-gray-300 rotate-90" size={20} />
                        </div>
                        <p className="text-white font-bold bg-red-500/20 rounded-lg px-4 py-2 mt-2">
                          ব্রেইন বলে "Low Quality"
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center">
                          <Shield className="text-red-400" size={40} />
                        </div>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-red-400">Social Proof নাই</p>
                        <div className="flex justify-center my-2">
                          <ArrowRight className="text-gray-300 rotate-90" size={20} />
                        </div>
                        <p className="text-white font-bold bg-red-500/20 rounded-lg px-4 py-2 mt-2">
                          ব্রেইন বলে "Risky"
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center">
                          <MousePointer className="text-red-400" size={40} />
                        </div>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-red-400">CTA স্পষ্ট নয়</p>
                        <div className="flex justify-center my-2">
                          <ArrowRight className="text-gray-300 rotate-90" size={20} />
                        </div>
                        <p className="text-white font-bold bg-red-500/20 rounded-lg px-4 py-2 mt-2">
                          ব্রেইন বলে "Confusing"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-electric-blue/10 to-neuro-purple/10 border border-electric-blue/20 rounded-2xl p-8 mt-8">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-4">
                      <span className="text-5xl">🧠</span>
                      <span>Neuro Fact:</span>
                    </h3>
                    <p className="text-2xl text-white leading-relaxed mb-6">
                      মানুষ সিদ্ধান্ত নেয় <span className="text-neon-green font-bold">আবেগ + psychology</span> দিয়ে। শুধু লজিক দিয়ে না।
                    </p>
                    <div className="bg-gradient-to-r from-neon-green/10 to-electric-blue/10 border border-neon-green/30 rounded-2xl p-6">
                      <p className="text-xl text-white font-semibold flex items-center justify-center gap-3">
                        <span className="text-3xl">👉</span>
                        <span>তাই ওয়েবসাইটকে এমনভাবে বানাতে হয় যাতে ভিজিটর অবচেতনভাবে বিশ্বাস করে এবং কিনতে বাধ্য হয়।</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS & PRICING SECTION */}
        <section className="py-20 bg-neural-bg-secondary">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Pricing Card */}
              <div className="bg-gradient-to-br from-electric-blue/10 to-neuro-purple/10 backdrop-blur-lg border border-electric-blue/20 rounded-2xl p-8 text-center">
                <DollarSign className="text-neon-green mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-2">বিনিয়োগ</h3>
                <p className="text-3xl font-black text-neon-green">{service.price}</p>
              </div>
              
              {/* Timeline Card */}
              <div className="bg-gradient-to-br from-neuro-purple/10 to-electric-blue/10 backdrop-blur-lg border border-neuro-purple/20 rounded-2xl p-8 text-center">
                <Clock className="text-electric-blue mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-2">ডেলিভারি</h3>
                <p className="text-3xl font-black text-electric-blue">{service.timeline}</p>
              </div>
              
              {/* Success Rate Card */}
              <div className="bg-gradient-to-br from-neon-green/10 to-electric-blue/10 backdrop-blur-lg border border-neon-green/20 rounded-2xl p-8 text-center">
                <Award className="text-neon-green mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-2">সফলতার হার</h3>
                <p className="text-3xl font-black text-neon-green">{service.stats.success}%</p>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS SECTION */}
        <section className="py-20 bg-neural-bg">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
                প্রমাণিত ফলাফল
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {service.results.map((result, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-neural-bg-secondary/50 to-neural-bg/50 backdrop-blur-lg border border-electric-blue/20 rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-neon-green to-electric-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles size={20} className="text-white" />
                    </div>
                    <p className="text-lg text-gray-200 leading-relaxed">{result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES SECTION - BEAUTIFUL DESIGN */}
        <section className="py-20 bg-neural-bg-secondary relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-8">
                <span className="bg-gradient-to-r from-electric-blue via-neuro-purple to-neon-green bg-clip-text text-transparent">
                  🌟 আমাদের তৈরি ওয়েবসাইটের বৈশিষ্ট্য
                </span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* 1️⃣ Psychology-driven Design */}
              <div className="bg-gradient-to-br from-electric-blue/10 to-neuro-purple/10 backdrop-blur-lg border border-electric-blue/20 rounded-3xl p-8 hover:border-electric-blue/40 transition-all duration-300 hover:scale-105 group">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-electric-blue to-neuro-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Brain className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    1️⃣ Psychology-driven Design
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Palette className="text-neon-green mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-200">রঙ, ফন্ট, লেআউট সবকিছু Neuro Tested</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Eye className="text-electric-blue mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-200">Eye Direction Theory → CTA এর দিকে দৃষ্টি টানে</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lightbulb className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-200">Color Psychology → আস্থা, urgency, excitement তৈরি করে</p>
                  </div>
                </div>
              </div>
              
              {/* 2️⃣ Conversion Optimized Funnel */}
              <div className="bg-gradient-to-br from-neuro-purple/10 to-neon-green/10 backdrop-blur-lg border border-neuro-purple/20 rounded-3xl p-8 hover:border-neuro-purple/40 transition-all duration-300 hover:scale-105 group">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-neuro-purple to-neon-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Target className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    2️⃣ Conversion Optimized Funnel
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Magnet className="text-neon-green mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-200">PRISM Model এ ভিত্তিক কনটেন্ট (Problem → React → Inspire → Social Proof → Move)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="text-electric-blue mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-200">Cold Visitor → Warm → Hot Customer রূপান্তর</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-200">প্রতিটি সেকশন ভিজিটরকে সিদ্ধান্তের দিকে ঠেলে দেয়</p>
                  </div>
                </div>
              </div>
              
              {/* 4️⃣ Bangladesh Context Ready */}
              <div className="bg-gradient-to-br from-neon-green/10 to-electric-blue/10 backdrop-blur-lg border border-neon-green/20 rounded-3xl p-8 hover:border-neon-green/40 transition-all duration-300 hover:scale-105 group">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-neon-green to-electric-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Users className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    4️⃣ Bangladesh Context Ready
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Brain className="text-neon-green mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-200">লোকাল কাস্টমারের মানসিকতা অনুযায়ী ডিজাইন</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="text-electric-blue mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-200">বাংলা/ইংরেজি মিশ্র ভাষা</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Smartphone className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-200">মোবাইল-ফার্স্ট অভিজ্ঞতা (কারণ ৭০% ভিজিটর মোবাইল থেকে আসে)</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 📌 ফলাফল SECTION */}
            <div className="bg-gradient-to-r from-electric-blue/10 via-neuro-purple/10 to-neon-green/10 border border-electric-blue/30 rounded-3xl p-10 text-center">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-4">
                  <span className="text-4xl">📌</span>
                  <span>ফলাফল:</span>
                </h3>
              </div>
              
              <p className="text-2xl text-white leading-relaxed max-w-4xl mx-auto">
                আপনার ওয়েবসাইট <span className="text-red-400 font-bold">শুধু সুন্দর হবে না</span>, বরং 
                <span className="text-neon-green font-bold"> ভিজিটরকে কাস্টমারে রূপান্তরিত করবে।</span>
              </p>
              
              <div className="mt-8">
                <button className="bg-gradient-to-r from-neon-green to-electric-blue text-neural-bg font-black text-xl px-12 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-green/30">
                  এখনই শুরু করুন
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Features Section - New Design */}
        <section className="py-20 bg-neural-bg relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-electric-blue/10 to-neuro-purple/10 rounded-full px-6 py-3 mb-6">
                <Sparkles className="text-yellow-400" size={20} />
                <span className="text-sm font-semibold text-electric-blue">এক্সক্লুসিভ ফিচার</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
                অ্যাডভান্সড <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">টেকনোলজি</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                আত্ত্যাধুনিক নিউরো মার্কেটিং টুলস এবং কৌশল যা আপনার প্রতিযোগীদের থেকে এগিয়ে রাখবে
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.advanced.map((feature, index) => (
                <div 
                  key={index}
                  className="group glassmorphism-dark rounded-2xl p-8 hover-lift animate-shimmer border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-500 relative overflow-hidden"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Star className="text-yellow-400" size={24} />
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Zap className="text-yellow-400" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                        {feature}
                      </h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - Timeline Design */}
        <section className="py-20 bg-neural-bg-secondary relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
                আমাদের কাজের <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">প্রক্রিয়া</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                প্রতিটি ধাপ বৈজ্ঞানিক পদ্ধতি অনুসরণ করে এবং সর্বোচ্চ মানের নিশ্চয়তা দেয়। আমরা শুধু কাজ করি না, বরং আপনার ব্যবসার জন্য Strategy, Psychology এবং Result-driven approach ব্যবহার করে প্রতিটি ধাপ সম্পন্ন করি।
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-electric-blue via-neuro-purple to-neon-green rounded-full opacity-30"></div>
              
              <div className="space-y-8">
                {service.process.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="glassmorphism-dark rounded-2xl p-6 hover-lift animate-shimmer inline-block max-w-md">
                        <div className="flex items-center gap-3 mb-3">
                          <Lightbulb className="text-electric-blue" size={20} />
                          <span className="text-sm font-semibold text-electric-blue">ধাপ {index + 1}</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{step}</p>
                      </div>
                    </div>
                    
                    {/* Timeline Node */}
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-r from-electric-blue to-neuro-purple rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                    </div>
                    
                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Enhanced Visual */}
        <section className="py-20 bg-neural-bg relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
                প্রমাণিত <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">পরিসংখ্যান</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                হাজার হাজার সন্তুষ্ট ক্লায়েন্টের ফলাফল এবং আমাদের এক্সপার্টিজের প্রমাণ
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.results.map((result, index) => (
                <div 
                  key={index}
                  className="text-center glassmorphism-dark rounded-3xl p-8 hover-lift animate-shimmer group relative overflow-hidden"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-r from-neon-green to-electric-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <TrendingUpIcon className="text-white" size={32} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">সাফল্যের গল্প</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Premium Design */}
        <section className="py-24 bg-gradient-to-br from-neural-bg via-neural-bg-secondary to-neural-bg relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-electric-blue/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-neuro-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-electric-blue/10 to-neuro-purple/10 rounded-full px-6 py-3 mb-8">
                <Rocket className="text-electric-blue" size={20} />
                <span className="text-sm font-semibold text-electric-blue">আজই শুরু করুন</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-montserrat font-bold mb-8">
                <span className="bg-gradient-to-r from-white via-electric-blue to-neuro-purple bg-clip-text text-transparent">
                  আপনার বিজনেসকে নিয়ে যান
                </span>
                <br />
                <span className="bg-gradient-to-r from-neuro-purple to-neon-green bg-clip-text text-transparent">
                  পরবর্তী পর্যায়ে
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                আমাদের Neuro Marketing বিশেষজ্ঞদের সাথে ফ্রি কনসালটেশন নিন এবং দেখুন আপনার বিজনেস কতটা এগিয়ে যেতে পারে।
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  href="/contact"
                  className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-electric-blue to-neuro-purple rounded-full text-white font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Shield className="group-hover:rotate-12 transition-transform" size={24} />
                    ফ্রি কনসালটেশন নিন
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neuro-purple to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <a 
                  href="tel:+8801700000000"
                  className="inline-flex items-center gap-3 px-10 py-5 border-2 border-electric-blue text-electric-blue rounded-full font-semibold text-lg hover:bg-electric-blue hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  <Eye size={24} />
                  এখনই কল করুন
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glassmorphism-dark rounded-2xl p-6 border border-neon-green/20">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Shield className="text-neon-green" size={24} />
                    <span className="font-semibold text-neon-green">১০০% গ্যারান্টি</span>
                  </div>
                  <p className="text-sm text-gray-300">সন্তুষ্ট না হলে সম্পূর্ণ টাকা ফেরত</p>
                </div>
                
                <div className="glassmorphism-dark rounded-2xl p-6 border border-electric-blue/20">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <UsersIcon className="text-electric-blue" size={24} />
                    <span className="font-semibold text-electric-blue">৫০০+ ক্লায়েন্ট</span>
                  </div>
                  <p className="text-sm text-gray-300">সফল প্রজেক্ট এবং সন্তুষ্ট গ্রাহক</p>
                </div>
                
                <div className="glassmorphism-dark rounded-2xl p-6 border border-neuro-purple/20">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Award className="text-neuro-purple" size={24} />
                    <span className="font-semibold text-neuro-purple">৫ বছরের অভিজ্ঞতা</span>
                  </div>
                  <p className="text-sm text-gray-300">Neuro Marketing এ বিশেষজ্ঞ টিম</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}