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
    title: "Neuro Marketing ভিত্তিক Script",
    shortDescription: "ভিডিও, বিজ্ঞাপন বা ওয়েবিনারের জন্য সঠিক স্ক্রিপ্ট = কাস্টমারের মনের দরজা খোলার চাবি।",
    fullDescription: "আমাদের স্ক্রিপ্ট শুধু কথা বলে না, এটি ভিউয়ারের অবচেতন মনে প্রভাব ফেলে। আমরা নিউরো-লিঙ্গুইস্টিক প্রোগ্রামিং, সাবলিমিনাল মেসেজিং এবং পারসুয়েশন সাইকোলজির কৌশল ব্যবহার করে এমন স্ক্রিপ্ট তৈরি করি যা দর্শকদের আবেগের সাথে গভীর সংযোগ স্থাপন করে এবং তাদের কাঙ্ক্ষিত অ্যাকশন নিতে অনুপ্রাণিত করে।",
    features: [
      "মানুষের অবচেতন মনকে প্রভাবিত করা",
      "অ্যাকশনে বাধ্য করা স্ক্রিপ্ট",
      "ইমোশনাল কানেকশন তৈরি",
      "পারসুয়েসিভ স্টোরিটেলিং",
      "কল টু অ্যাকশন অপটিমাইজেশন",
      "অডিয়েন্স এনগেজমেন্ট"
    ],
    advanced: [
      "নিউরো-লিঙ্গুইস্টিক স্ক্রিপ্টিং",
      "সাবলিমিনাল মেসেজিং টেকনিক",
      "পারসুয়েশন সিকুয়েন্সিং",
      "কগনিটিভ বায়াস অ্যাক্টিভেশন",
      "ইমোশনাল আর্ক ডেভেলপমেন্ট",
      "নিউরো-ভার্বাল হাইপনোসিস"
    ],
    process: [
      "অডিয়েন্স সাইকোলজিক্যাল প্রোফাইলিং",
      "মেসেজ স্ট্র্যাটেজি ডেভেলপমেন্ট",
      "স্ক্রিপ্ট স্ট্রাকচার ডিজাইন",
      "ইমোশনাল ট্রিগার ইনটিগ্রেশন",
      "টেস্টিং ও রিফাইনমেন্ট",
      "পারফরমেন্স অ্যানালাইসিস"
    ],
    results: [
      "গড়ে 300% রেসপন্স রেট বৃদ্ধি",
      "ভিউ কমপ্লিশন রেট 250% বৃদ্ধি",
      "কনভার্শন রেট 180% বৃদ্ধি",
      "এনগেজমেন্ট রেট 220% বৃদ্ধি"
    ],
    stats: { success: "300%", metric: "Response Rate বৃদ্ধি" },
    price: "শুরু ২০,০০০ টাকা থেকে",
    timeline: "৫-৭ কর্মদিবস",
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
    slug: 'full-branding',
    icon: Palette,
    title: "Full Branding (ফুল ব্র্যান্ডিং)",
    shortDescription: "একটি ব্যবসা শুধু লোগো বা ওয়েবসাইট দিয়ে ব্র্যান্ড হয় না। ব্র্যান্ডিং মানে হলো, মানুষের মনে আপনার ব্যবসার একটি স্থায়ী ইমেজ তৈরি করা।",
    fullDescription: "আমাদের ফুল ব্র্যান্ডিং সার্ভিস শুধু ভিজুয়াল আইডেন্টিটি তৈরি করে না, এটি আপনার ব্র্যান্ডের সম্পূর্ণ ব্যক্তিত্ব গড়ে তোলে। আমরা নিউরো-সাইকোলজি এবং কালার থেরাপির নীতি ব্যবহার করে এমন একটি ব্র্যান্ড আইডেন্টিটি তৈরি করি যা গ্রাহকদের মনে গভীর এবং স্থায়ী প্রভাব ফেলে এবং তাদের আপনার ব্র্যান্ডের সাথে একটি আবেগপূর্ণ সংযোগ গড়ে তুলতে সাহায্য করে।",
    features: [
      "Logo থেকে Color Palette পর্যন্ত সব",
      "Typography ও Brand Voice ডিজাইন",
      "Social Media Presence সম্পূর্ণ সেটআপ",
      "ব্র্যান্ড গাইডলাইন তৈরি",
      "মার্কেটিং ম্যাটেরিয়াল ডিজাইন",
      "ব্র্যান্ড স্ট্র্যাটেজি ডেভেলপমেন্ট"
    ],
    advanced: [
      "নিউরো-ব্র্যান্ডিং আর্কিটেকচার",
      "সাইকোলজিক্যাল কালার থিওরি",
      "ব্র্যান্ড পার্সোনালিটি ডেভেলপমেন্ট",
      "ইমোশনাল ব্র্যান্ড পজিশনিং",
      "কগনিটিভ ব্র্যান্ড রিকগনিশন",
      "নিউরো-ভিজুয়াল হায়ারার্কি"
    ],
    process: [
      "ব্র্যান্ড ডিসকভারি ও রিসার্চ",
      "ব্র্যান্ড স্ট্র্যাটেজি ডেভেলপমেন্ট",
      "ভিজুয়াল আইডেন্টিটি ক্রিয়েশন",
      "ব্র্যান্ড গাইডলাইন তৈরি",
      "মার্কেটিং কোলেটেরাল ডিজাইন",
      "ব্র্যান্ড লঞ্চ ও মনিটরিং"
    ],
    results: [
      "গড়ে 500% ব্র্যান্ড রিকগনিশন বৃদ্ধি",
      "কাস্টমার ট্রাস্ট 300% বৃদ্ধি",
      "মার্কেট শেয়ার 250% বৃদ্ধি",
      "ব্র্যান্ড ভ্যালু 400% বৃদ্ধি"
    ],
    stats: { success: "500%", metric: "Brand Recognition" },
    price: "শুরু ১,৫০,০০০ টাকা থেকে",
    timeline: "৩০-৬০ কর্মদিবস",
    backgroundColor: "from-pink-500/10 to-rose-500/10",
    accentColor: "pink-500"
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

  // Special layout for neuro-lead-magnet-pro service
  if (params.slug === 'neuro-lead-magnet-pro') {
    return (
      <div className="min-h-screen bg-neural-bg text-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-orange-500/10 to-red-500/10 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-32 right-20 w-48 h-48 bg-red-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-yellow-400 rounded-full blur-2xl animate-pulse delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <Link 
              href="/services" 
              className="inline-flex items-center text-orange-400 hover:text-red-400 transition-colors mb-8 group glassmorphism-dark rounded-full px-4 py-2"
            >
              <ChevronLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={18} />
              <span className="text-sm">সার্ভিসসমূহে ফিরে যান</span>
            </Link>

            <div className="text-center max-w-6xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl blur opacity-75 animate-pulse"></div>
                  <div className="relative p-8 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-3xl glassmorphism-dark">
                    <div className="text-6xl mb-4">🎯</div>
                    <Magnet className="text-orange-400" size={80} />
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-montserrat font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-orange-400 to-red-500 bg-clip-text text-transparent">
                  "Cold ভিজিটরকে কি আপনি সরাসরি কাস্টমারে রূপান্তর করতে চাইছেন?"
                </span>
              </h1>
              
              <div className="text-2xl lg:text-4xl text-red-400 font-bold mb-8">
                👉 সেটা কখনো কাজ করবে না।
              </div>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 max-w-5xl mx-auto">
                কারণ মানুষের মস্তিষ্ক অপরিচিত কাউকে "Buy Now" শুনলেই <span className="text-red-400 font-bold">Danger Signal</span> পাঠায়।<br/>
                কিন্তু যদি আপনি প্রথমেই একটি ছোট্ট <span className="text-orange-400 font-bold">Free Value</span> দেন—<br/>
                তাহলে সেই ভয় কমে যায়, তৈরি হয় বিশ্বাস।
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-red-500 hover:to-orange-400 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-400/50">
                  📌 আপনার লিড ম্যাগনেট এখনই তৈরি করুন
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* কেন Lead Magnet জরুরি */}
        <section className="py-20 bg-neural-bg-secondary relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-montserrat font-bold mb-8">
                ❓ কেন <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Lead Magnet জরুরি?</span>
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-3xl p-12 border border-orange-400/20 mb-16">
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-full flex items-center justify-center">
                    <Brain className="text-orange-400" size={48} />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-8 text-center">🧠 Neuro Fact:</h3>
                <div className="space-y-6 text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed text-center">
                  <p className="text-2xl">মানুষ অপরিচিতের অফারকে সন্দেহজনক ভাবে।</p>
                  <p className="text-2xl">কিন্তু ফ্রি ভ্যালু → <span className="text-orange-400 font-bold text-3xl">Reciprocity Trigger</span> চালু করে।</p>
                  <div className="bg-orange-400/10 p-8 rounded-2xl border border-orange-400/30 my-8">
                    <p className="text-3xl font-bold text-orange-400">মানে →</p>
                    <p className="text-2xl font-bold text-white mt-4">"ওরা আমাকে কিছু দিল, আমিও কিছু ফিরিয়ে দিই।"</p>
                  </div>
                  <p className="text-2xl font-bold text-white">👉 তাই ব্যবসার প্রথম ধাপ হওয়া উচিত লিড ম্যাগনেট অফার করা।</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* রয়াল মালাবারের গল্প */}
        <section className="py-20 bg-neural-bg-secondary relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-montserrat font-bold mb-8">
                🎭 গল্প থেকে শিক্ষা <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">(রয়াল মালাবারের কোল্ড ড্রিঙ্ক)</span>
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

        {/* Final CTA */}
        <section className="py-20 bg-neural-bg relative">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-3xl p-16 border border-orange-400/20">
                <h2 className="text-4xl lg:text-6xl font-montserrat font-bold mb-8">
                  🚀 <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Final CTA</span>
                </h2>
                
                <p className="text-3xl lg:text-4xl font-bold mb-8 text-white">"কাস্টমারকে ভয় নয়, বিশ্বাস দিয়ে জয় করুন।"</p>
                
                <p className="text-2xl lg:text-3xl mb-12 text-gray-300">
                  👉 এখনই আপনার <strong className="text-orange-400">Neuro Marketing ভিত্তিক Lead Magnet তৈরি করুন।</strong>
                </p>
                
                <div className="flex flex-wrap justify-center gap-6">
                  <button className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-red-500 hover:to-orange-400 text-white font-bold py-6 px-12 rounded-full text-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-400/50">
                    📌 এখনই ফ্রি লিড ম্যাগনেট বুক করুন
                  </button>
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