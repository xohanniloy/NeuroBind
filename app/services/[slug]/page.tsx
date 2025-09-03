import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navigation from '../../components/layout/navigation'
import Footer from '../../components/layout/footer'
import { Brain, TrendingUp, Users, Magnet, FileText, Palette, Check, ChevronLeft, Star, Zap, Target, ArrowRight, Clock, DollarSign, Award, Lightbulb, TrendingUp as TrendingUpIcon, Users as UsersIcon, Eye, Sparkles, Shield, Rocket, MousePointer, Smartphone } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    slug: 'neuro-website',
    icon: Brain,
    title: "শুধু সুন্দর ওয়েবসাইট নয়, চাই একটি ২৪/৭ Salesperson",
    shortDescription: "আপনার ওয়েবসাইট কি শুধু ভিজিটরের জন্য শো-পিস, নাকি সত্যিকারের সেলস পার্সন? আমরা Neuro Binding এ এমন ওয়েবসাইট বিল্ড করি যেটা কথা বলে, আস্থা তৈরি করে এবং সেলস করে।",
    fullDescription: "আজকের দিনে ৯০% ভিজিটর ওয়েবসাইটে ঢুকে প্রথম ৫ সেকেন্ডেই সিদ্ধান্ত নেয়, থাকবে নাকি চলে যাবে। কারণ: এলোমেলো ডিজাইন → ব্রেইন বলে 'Low Quality', Social Proof নাই → ব্রেইন বলে 'Risky', CTA স্পষ্ট নয় → ব্রেইন বলে 'Confusing'। মানুষ সিদ্ধান্ত নেয় আবেগ + psychology দিয়ে। শুধু লজিক দিয়ে না। তাই ওয়েবসাইটকে এমনভাবে বানাতে হয় যাতে ভিজিটর অবচেতনভাবে বিশ্বাস করে এবং কিনতে বাধ্য হয়।",
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
    price: "এখনই ফ্রি কনসালটেশন বুক করুন",
    timeline: "১৫-২১ কর্মদিবস",
    backgroundColor: "from-blue-500/10 to-purple-500/10",
    accentColor: "blue-500"
  },
  {
    slug: 'neuro-content',
    icon: TrendingUp,
    title: "Neuro Marketing ভিত্তিক Content",
    shortDescription: "আজকের দিনে সবচেয়ে দামি জিনিস হলো মানুষের Attention। আমরা এমন কনটেন্ট তৈরি করি যেটা শুধু কোন টেক্সট নয় বরং Scroll-Stopper Text, Emotion-driven Script, Attention-grabbing Image, আর Engaging Video Content।",
    fullDescription: "প্রতিদিন একজন মানুষ গড়ে ৫০০০+ কনটেন্ট দেখে কিন্তু সময় দেয় মাত্র ১–২ সেকেন্ড। মানুষ এখন আর কনটেন্ট পড়ে না → স্ক্যান করে। তাই কনটেন্ট এমন হতে হবে যা স্ক্যান করার সময়ই আটকে দেয়। মানুষ স্ক্যান করার সময় Pattern Breaker (শব্দ, আকর্ষণীয় ভিজ্যুয়াল, bold হুক, বা চমকপ্রদ ভিজ্যুয়াল) দেখলেই থেমে যায়।",
    features: [
      "Scroll-Stopper Effect - হুক লাইন (Fear/Curiosity/Benefit-driven)",
      "Visual cues (emoji, icons, bold text, engaging graphics)",
      "Psychology-driven Copy - Emotional trigger + Logical support",
      "Scan-Friendly Layout - ছোট প্যারাগ্রাফ, Bullet points",
      "Multi-format Content - Text, Script, Image, Video",
      "Pattern Breaker কৌশল"
    ],
    advanced: [
      "📰 Text Content – Blog, Website Copy, Sales Page, Email Copy",
      "📜 Script Content – Ad Script, Video Script, Storytelling Script", 
      "🖼️ Image Content – Infographic, Carousel, Scroll-stopper Visuals",
      "🎥 Video Content – Explainer Script, Short Ads, Regular content, Podcast Script",
      "Emotional trigger (ভয়, আশা, স্বপ্ন) + Logical support",
      "নিউরো-লিঙ্গুইস্টিক প্রোগ্রামিং"
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
      "বিশ্বাস করে কিনবে এমন কনটেন্ট"
    ],
    stats: { success: "৫০০০+", metric: "প্রতিদিন কনটেন্ট দেখে কিন্তু থামে ১-২ সেকেন্ড" },
    price: "ফ্রি কনটেন্ট অডিট বুক করুন",
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
    slug: 'neuro-lead-magnet-pro',
    icon: Magnet,
    title: "Neuro Lead Magnet Pro - বিশ্বস্ততার মাধ্যমে গ্রাহক অর্জন",
    shortDescription: "শুধু ইমেইল সংগ্রহ নয়, গভীর মানসিক সংযোগ তৈরি করে স্থায়ী গ্রাহক বানান।",
    fullDescription: "আমাদের প্রো লিড ম্যাগনেট সিস্টেম নিউরো সাইকোলজি ব্যবহার করে ভিজিটরের অবচেতন মনে বিশ্বাস তৈরি করে। এটি শুধু কন্টাক্ট ইনফরমেশন সংগ্রহ করে না, বরং প্রতিটি ভিজিটরকে একজন বিশ্বস্ত ফ্যান এবং ভবিষ্যত গ্রাহকে রূপান্তরিত করে।",
    features: [
      "🧠 নিউরো-সাইকোলজিক্যাল ট্রিগার ব্যবহার",
      "💰 উচ্চ-মানের লিড জেনারেশন",
      "🎯 পার্সোনালাইজড ইউজার এক্সপেরিয়েন্স", 
      "📧 স্মার্ট ইমেইল নার্চারিং সিকুয়েন্স",
      "📊 রিয়েল-টাইম অ্যানালিটিক্স ড্যাশবোর্ড",
      "🔄 অটোমেটিক A/B টেস্টিং সিস্টেম"
    ],
    advanced: [
      "🎨 হাই-কনভার্টিং ল্যান্ডিং পেজ ডিজাইন",
      "⚡ ইনস্ট্যান্ট লিড কোয়ালিফিকেশন সিস্টেম",
      "🚀 মাল্টি-চ্যানেল ইন্টিগ্রেশন",
      "📱 মোবাইল-অপ্টিমাইজড এক্সপেরিয়েন্স",
      "🎭 ডায়নামিক কনটেন্ট পার্সোনালাইজেশন",
      "💡 প্রেডিক্টিভ লিড স্কোরিং"
    ],
    process: [
      "🔍 টার্গেট অডিয়েন্স গভীর বিশ্লেষণ",
      "🧠 নিউরো-মার্কেটিং স্ট্র্যাটেজি ডিজাইন",
      "🎨 আকর্ষণীয় ভিজ্যুয়াল এবং কপি তৈরি",
      "⚙️ অটোমেশন সিস্টেম সেটআপ",
      "📊 পারফরমেন্স ট্র্যাকিং সিস্টেম",
      "🔄 ক্রমাগত অপ্টিমাইজেশন"
    ],
    results: [
      "৬৮০% লিড জেনারেশন বৃদ্ধি",
      "৪৫০% কনভার্শন রেট উন্নতি", 
      "৩৫০% কাস্টমার রিটেনশন বৃদ্ধি",
      "২৮০% ROI পারফরমেন্স"
    ],
    stats: { success: "680%", metric: "Lead Generation বৃদ্ধি" },
    price: "শুরু ৭৫,০০০ টাকা থেকে",
    timeline: "১৪-২১ কর্মদিবস",
    backgroundColor: "from-purple-500/10 to-indigo-500/10",
    accentColor: "purple-500"
  },
  {
    slug: 'neuro-branding',
    icon: Palette,
    title: "একটি ব্যবসা হয়তো শুরু করা যায় এক লোগো দিয়ে, কিন্তু একটি ব্র্যান্ড তৈরি হয় মানুষের মনে।",
    shortDescription: "আপনার ব্যবসা কি গ্রাহকের চোখে শুধু একটা দোকান বা সার্ভিস, নাকি সত্যিকারের একটি ব্র্যান্ড? আমাদের Full Branding Service নিশ্চিত করে আপনার ব্যবসা মানুষের মনে শুধু আজ নয়—বরং আগামী ১০ বছরেও স্মরণীয় হয়ে থাকবে।",
    fullDescription: "মানুষের মস্তিষ্ক প্রতিটি ব্র্যান্ডকে একটি 'Shortcut' দিয়ে মনে রাখে—Logo, Color, Tagline বা Tone। যদি আপনার ব্র্যান্ডের সেই Shortcut পরিষ্কার না হয় তবে গ্রাহক আপনাকে প্রতিযোগীদের ভিড়ে হারিয়ে ফেলবে। Branding মানে হলো: Consistency + Communication এর ফলাফল।",
    features: [
      "Logo Design → আপনার ব্র্যান্ডের পরিচয়ের মূল প্রতীক",
      "Color Psychology Palette → রঙ দিয়ে মানুষের মনে বিশ্বাস ও আবেগ তৈরি",
      "Typography System → ফন্ট যেটা ব্র্যান্ডের ব্যক্তিত্ব প্রকাশ করে",
      "Brand Voice & Messaging → কিভাবে আপনার ব্যবসা কথা বলবে",
      "Social Media Branding Kit → পোস্ট, কভার, ব্যানার, ভিডিও টেমপ্লেট—সবকিছু consistent",
      "Packaging & Marketing Collateral → প্রোডাক্ট থাকলে Label, Box, Poster, Brochure"
    ],
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
  }
]

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find(s => s.slug === params.slug)
  
  if (!service) {
    return {
      title: 'Service Not Found - Neuro Binding',
      description: 'The requested service was not found.'
    }
  }

  return {
    title: `${service.title} - Neuro Binding`,
    description: service.shortDescription,
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find(s => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  const IconComponent = service.icon

  // Special layout for neuro-branding service
  if (params.slug === 'neuro-branding') {
    return (
      <div className="min-h-screen bg-neural-bg text-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-rose-500/10 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-40 h-40 bg-neuro-purple rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-56 h-56 bg-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-1/3 w-32 h-32 bg-rose-400 rounded-full blur-2xl animate-pulse delay-2000"></div>
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
                  <div className="absolute inset-0 bg-gradient-to-r from-neuro-purple via-pink-500 to-rose-500 rounded-3xl blur opacity-75 animate-pulse"></div>
                  <div className="relative p-10 bg-gradient-to-r from-neuro-purple/20 via-pink-500/20 to-rose-500/20 rounded-3xl glassmorphism-dark">
                    <Palette className="text-pink-400" size={100} />
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-montserrat font-bold mb-10 leading-tight">
                <span className="bg-gradient-to-r from-white via-neuro-purple to-pink-400 bg-clip-text text-transparent">
                  {service.title}
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                {service.shortDescription}
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-16">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-neuro-purple to-pink-500 hover:from-pink-500 hover:to-neuro-purple text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-pink-500/50 flex items-center gap-3"
                >
                  <Palette className="group-hover:rotate-12 transition-transform" size={20} />
                  এখনই আপনার ব্র্যান্ড আইডেন্টিটি তৈরি করুন
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Branding Important Section */}
        <section className="py-20 bg-neural-bg-secondary relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-8">
                <span className="bg-gradient-to-r from-neuro-purple to-pink-400 bg-clip-text text-transparent">
                  🧠 কেন Branding অপরিহার্য?
                </span>
              </h2>
              
              <div className="max-w-4xl mx-auto mb-12">
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {service.fullDescription}
                </p>
                
                <div className="glassmorphism-dark rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-semibold text-red-400 mb-6">⚠️ Branding এর অভাবে যা হয়:</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <p className="text-gray-300">আপনার ব্যবসাকে কেউ আলাদা করে চেনে না</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <p className="text-gray-300">গ্রাহকের মনে বিশ্বাস তৈরি হয় না</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <p className="text-gray-300">দীর্ঘমেয়াদে Loyalty তৈরি হয় না</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <p className="text-gray-300">প্রতিযোগীরা সবসময় একধাপ এগিয়ে থাকে</p>
                    </div>
                  </div>
                </div>

                <div className="glassmorphism-dark rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-green-400 mb-6">✅ Brand Shortcut এর শক্তি:</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-pink-400 pl-6">
                      <h4 className="text-lg font-semibold text-pink-400 mb-2">বিকাশের গোলাপি রঙ</h4>
                      <p className="text-gray-300">দূর থেকে গোলাপি দেখলেই বোঝা যায় বিকাশের বিজ্ঞাপন বা লোগো।</p>
                    </div>
                    <div className="border-l-4 border-blue-400 pl-6">
                      <h4 className="text-lg font-semibold text-blue-400 mb-2">গ্রামীণফোনের নীল</h4>
                      <p className="text-gray-300">যেকোনো জায়গায় নীল দেখলে আমাদের মনে পড়ে গ্রামীণফোনের বিজ্ঞাপন।</p>
                    </div>
                    <div className="border-l-4 border-indigo-400 pl-6">
                      <h4 className="text-lg font-semibold text-indigo-400 mb-2">Google Maps এর রঙের কোড</h4>
                      <p className="text-gray-300">জ্যাম থাকলে লাল লাইন, জ্যাম না থাকলে নীল লাইন - মানুষের মনে গেঁথে যাওয়া রঙের সংযোগ।</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bangladesh Entrepreneurs Section */}
        <section className="py-20 bg-neural-bg relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-8">
                <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  🇧🇩 বাংলাদেশের উদ্যোক্তাদের ভুল ধারণা
                </span>
              </h2>
              
              <div className="max-w-4xl mx-auto">
                <div className="glassmorphism-dark rounded-2xl p-8 mb-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">🤔</div>
                    <p className="text-xl text-orange-300 mb-4">"আগে কোম্পানি বড় হোক, তারপর Branding করব।"</p>
                    <div className="text-2xl text-green-400">👉 কিন্তু আসলেই উল্টোটা সত্যি</div>
                    <p className="text-lg text-green-300">কোম্পানি বড় হওয়ার জন্যই শুরু থেকে Branding করতে হয়।</p>
                  </div>
                </div>

                <div className="glassmorphism-dark rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-yellow-400 mb-6">⚠️ Facebook Ads নির্ভরতার বিপদ:</h3>
                  <div className="space-y-4 mb-6">
                    <p className="text-gray-300">আজকে বেশিরভাগ ব্যবসা শুধু Facebook Ads নির্ভরশীল। Ad না দিলে তাদের বিক্রি বন্ধ হয়ে যায়।</p>
                    <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                      <p className="text-red-300 text-lg font-semibold mb-2">🤔 একটু চিন্তা করুন:</p>
                      <p className="text-gray-300">যদি কখনো চীনের মতো আমাদের দেশেও Facebook ব্যান হয়, তখন আপনার ব্যবসার কী হবে?</p>
                    </div>
                  </div>
                  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                    <p className="text-green-300 text-lg font-semibold mb-2">👉 Branding থাকলে:</p>
                    <p className="text-gray-300">মানুষ Facebook-এর বাইরে গিয়েও আপনার ব্যবসাকে চিনবে, খুঁজবে এবং বিশ্বাস করবে।</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-neural-bg-secondary relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-8">
                <span className="bg-gradient-to-r from-neuro-purple to-pink-400 bg-clip-text text-transparent">
                  🌟 আমরা যা করি (Scope of Work)
                </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {service.features.map((feature, index) => (
                <div key={index} className="glassmorphism-dark rounded-2xl p-6 hover:bg-white/5 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-neuro-purple to-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 leading-relaxed">{feature}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Neuro Marketing Difference Section */}
        <section className="py-20 bg-neural-bg relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-8">
                <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  🧠 কেন Neuro Marketing ভিত্তিক ব্র্যান্ডিং আলাদা?
                </span>
              </h2>
              
              <div className="max-w-4xl mx-auto mb-12">
                <div className="glassmorphism-dark rounded-2xl p-8 mb-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-red-400 mb-4">❌ সাধারণ ডিজাইনার</h3>
                      <p className="text-gray-300">শুধু সুন্দর কিছু বানায়।</p>
                    </div>
                    <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-green-400 mb-4">✅ আমরা তৈরি করি</h3>
                      <p className="text-gray-300">মনস্তাত্ত্বিকভাবে প্রভাবিত ব্র্যান্ডিং</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="glassmorphism-dark rounded-xl p-6 text-center">
                    <div className="text-3xl mb-4">❤️</div>
                    <h4 className="text-lg font-semibold text-pink-400 mb-2">আবেগ ছোঁয়</h4>
                    <p className="text-sm text-gray-400">মানুষের আবেগ</p>
                  </div>
                  <div className="glassmorphism-dark rounded-xl p-6 text-center">
                    <div className="text-3xl mb-4">🛡️</div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">আস্থা জাগায়</h4>
                    <p className="text-sm text-gray-400">মানুষের আস্থা</p>
                  </div>
                  <div className="glassmorphism-dark rounded-xl p-6 text-center">
                    <div className="text-3xl mb-4">🎯</div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">স্থায়ী ছাপ</h4>
                    <p className="text-sm text-gray-400">মানুষের মনে</p>
                  </div>
                  <div className="glassmorphism-dark rounded-xl p-6 text-center">
                    <div className="text-3xl mb-4">🚀</div>
                    <h4 className="text-lg font-semibold text-green-400 mb-2">দীর্ঘস্থায়ী</h4>
                    <p className="text-sm text-gray-400">প্রভাব ফেলে</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Neuro Binding Approach Section */}
        <section className="py-20 bg-neural-bg-secondary relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-8">
                <span className="bg-gradient-to-r from-neuro-purple to-pink-400 bg-clip-text text-transparent">
                  🧩 Neuro Binding এর Branding Approach
                </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {service.advanced.map((approach, index) => (
                <div key={index} className="glassmorphism-dark rounded-2xl p-6 hover:bg-white/5 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-neuro-purple to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-gray-300 leading-relaxed">{approach}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-neural-bg relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-8">
                <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  🛠️ আমাদের কাজ করার ধাপ
                </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {service.process.map((step, index) => (
                <div key={index} className="glassmorphism-dark rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-pink-400/10">{index + 1}</div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-neuro-purple to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-gray-300 font-medium">{step}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-neural-bg-secondary relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-8">
                <span className="bg-gradient-to-r from-neuro-purple to-pink-400 bg-clip-text text-transparent">
                  🎯 ফলাফল
                </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              {service.results.map((result, index) => (
                <div key={index} className="glassmorphism-dark rounded-2xl p-6 hover:bg-white/5 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 leading-relaxed">{result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="glassmorphism-dark rounded-3xl p-12 text-center max-w-2xl mx-auto">
              <div className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-neuro-purple to-pink-400 bg-clip-text text-transparent mb-4">
                {service.stats.success}
              </div>
              <p className="text-xl text-gray-300">{service.stats.metric}</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-neural-bg relative">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-8">
                <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  🚀 Final CTA
                </span>
              </h2>
              
              <div className="glassmorphism-dark rounded-2xl p-8 mb-8">
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  👉 মনে রাখবেন, Full Branding মানে শুধু একটি লোগো নয়।
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  এটি হলো একটি মনস্তাত্ত্বিক অভিজ্ঞতা—যা আপনার ব্যবসাকে "অপরিচিত" থেকে "বিশ্বাসযোগ্য ব্র্যান্ড"-এ রূপান্তরিত করবে।
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-neuro-purple to-pink-500 hover:from-pink-500 hover:to-neuro-purple text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-pink-500/50 flex items-center gap-3"
                >
                  <Palette className="group-hover:rotate-12 transition-transform" size={20} />
                  আজই আপনার Neuro Branding যাত্রা শুরু করুন
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </div>

              {/* Timeline and Price */}
              <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto">
                <div className="glassmorphism-dark rounded-xl p-6 text-center">
                  <Clock className="mx-auto mb-3 text-pink-400" size={32} />
                  <h4 className="text-lg font-semibold text-white mb-2">সময়কাল</h4>
                  <p className="text-gray-300">{service.timeline}</p>
                </div>
                <div className="glassmorphism-dark rounded-xl p-6 text-center">
                  <Award className="mx-auto mb-3 text-pink-400" size={32} />
                  <h4 className="text-lg font-semibold text-white mb-2">গ্যারান্টি</h4>
                  <p className="text-gray-300">১০০% সন্তোষজনক ফলাফল</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    )
  }

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
                  {service.whyImportant.title}
                </span>
              </h2>
              
              <div className="max-w-4xl mx-auto mb-12">
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {service.whyImportant.neuroFact}
                </p>
                
                <div className="glassmorphism-dark rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-semibold text-red-400 mb-6">⚠️ সাধারণ Script এর সমস্যা:</h3>
                  <div className="space-y-4">
                    {service.whyImportant.problems.map((problem, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <p className="text-gray-300">{problem}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <p className="text-xl font-semibold text-neon-green">
                  {service.whyImportant.solution}
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
              {service.scriptFeatures.map((feature, index) => (
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
                  {service.finalCTA.title}
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                {service.finalCTA.description}
              </p>

              <Link
                href="/contact"
                className="group bg-gradient-to-r from-neon-green to-electric-blue hover:from-electric-blue hover:to-neon-green text-white font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-neon-green/50 flex items-center gap-3 justify-center max-w-md mx-auto"
              >
                <Rocket className="group-hover:rotate-12 transition-transform" size={24} />
                {service.finalCTA.button}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    )
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
              
              <h1 className="text-5xl lg:text-8xl font-montserrat font-bold mb-10 leading-tight">
                <span className="bg-gradient-to-r from-white via-neuro-purple to-electric-blue bg-clip-text text-transparent">
                  Neuro Lead Magnet
                </span>
                <br />
                <span className="bg-gradient-to-r from-electric-blue via-indigo-400 to-neon-green bg-clip-text text-transparent">
                  Pro সিস্টেম
                </span>
              </h1>
              
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                শুধু ইমেইল সংগ্রহ নয়, <span className="text-neon-green font-semibold">গভীর মানসিক সংযোগ</span> তৈরি করে 
                <span className="text-electric-blue font-semibold"> স্থায়ী গ্রাহক</span> বানান
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
                  <Rocket className="group-hover:rotate-12 transition-transform" size={24} />
                  প্রো সিস্টেম শুরু করুন
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

        {/* Features Showcase */}
        <section className="py-24 bg-neural-bg-secondary relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-green/10 to-electric-blue/10 rounded-full px-6 py-3 mb-6">
                <Sparkles className="text-neon-green" size={20} />
                <span className="text-sm font-semibold text-electric-blue">প্রিমিয়াম ফিচারসমূহ</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-montserrat font-bold mb-8">
                যা পাবেন এই <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">প্রো সিস্টেমে</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                নিউরো-সাইকোলজি এবং আধুনিক টেকনোলজির নিখুঁত মিশ্রণ
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, index) => (
                <div 
                  key={index}
                  className="group glassmorphism-dark rounded-3xl p-8 hover-lift border border-transparent hover:border-electric-blue/30 transition-all duration-500 relative overflow-hidden"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neuro-purple/5 to-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-6xl mb-4">{feature.charAt(0)}</div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-electric-blue transition-colors">
                      {feature.substring(2)}
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-neuro-purple to-electric-blue rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Technology Section */}
        <section className="py-24 bg-neural-bg relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full px-6 py-3 mb-6">
                <Zap className="text-yellow-400" size={20} />
                <span className="text-sm font-semibold text-yellow-400">অ্যাডভান্সড টেকনোলজি</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-montserrat font-bold mb-8">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  প্রিমিয়াম ফিচার
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                যা আপনাকে প্রতিযোগীদের থেকে এগিয়ে রাখবে
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.advanced.map((feature, index) => (
                <div 
                  key={index}
                  className="group glassmorphism-dark rounded-3xl p-8 hover-lift border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-500 relative overflow-hidden"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-60 transition-opacity">
                    <Star className="text-yellow-400" size={32} />
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="text-5xl">{feature.charAt(0)}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                        {feature.substring(2)}
                      </h3>
                      <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-24 bg-neural-bg-secondary relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-montserrat font-bold mb-8">
                আমাদের কাজের <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">প্রক্রিয়া</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                প্রতিটি ধাপ বিজ্ঞান এবং অভিজ্ঞতা ভিত্তিক
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-neuro-purple via-electric-blue to-neon-green rounded-full opacity-40"></div>
              
              <div className="space-y-12">
                {service.process.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="glassmorphism-dark rounded-3xl p-6 hover-lift inline-block max-w-md">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="text-2xl">{step.charAt(0)}</div>
                          <span className="text-sm font-semibold text-electric-blue">ধাপ {index + 1}</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-lg">{step.substring(2)}</p>
                      </div>
                    </div>
                    
                    {/* Timeline Node */}
                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-r from-neuro-purple to-electric-blue rounded-full flex items-center justify-center shadow-lg border-4 border-neural-bg">
                        <span className="text-white font-bold text-xl">{index + 1}</span>
                      </div>
                    </div>
                    
                    <div className="flex-1"></div>
                  </div>
                ))}
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
              
              <h2 className="text-5xl lg:text-7xl font-montserrat font-bold mb-8">
                আপনার বিজনেসকে নিয়ে যান <br />
                <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
                  পরবর্তী লেভেলে
                </span>
              </h2>
              
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                এখনই আমাদের প্রো টিমের সাথে যোগাযোগ করুন।
              </p>

              <div className="flex flex-wrap justify-center gap-8 mb-16">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-neon-green to-electric-blue hover:from-electric-blue hover:to-neon-green text-white font-bold py-6 px-16 rounded-full text-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-neon-green/50 flex items-center gap-4"
                >
                  <Shield className="group-hover:rotate-12 transition-transform" size={28} />
                  ফ্রি কনসালটেশন বুক করুন
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

  // Special layout for neuro-website service
  if (params.slug === 'neuro-website') {
    return (
      <div className="min-h-screen bg-neural-bg text-white">
        <Navigation />
        
        {/* Hero Section - Custom for Neuro Website */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-electric-blue rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-32 right-20 w-48 h-48 bg-neuro-purple rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-neon-green rounded-full blur-2xl animate-pulse delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <Link 
              href="/services" 
              className="inline-flex items-center text-electric-blue hover:text-neon-green transition-colors mb-8 group glassmorphism-dark rounded-full px-4 py-2"
            >
              <ChevronLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={18} />
              <span className="text-sm">সার্ভিসসমূহে ফিরে যান</span>
            </Link>

            <div className="text-center max-w-5xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neuro-purple rounded-3xl blur opacity-75 animate-pulse"></div>
                  <div className="relative p-8 bg-gradient-to-r from-electric-blue/20 to-neuro-purple/20 rounded-3xl glassmorphism-dark">
                    <Brain className="text-electric-blue" size={80} />
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-7xl font-montserrat font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-electric-blue to-neuro-purple bg-clip-text text-transparent">
                  শুধু সুন্দর ওয়েবসাইট নয়, চাই একটি ২৪/৭ Salesperson
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8">
                আপনার ওয়েবসাইট কি শুধু ভিজিটরের জন্য শো-পিস, নাকি সত্যিকারের সেলস পার্সন?<br/>
                👉 আমরা Neuro Binding এ এমন ওয়েবসাইট বিল্ড করি যেটা কথা বলে, আস্থা তৈরি করে এবং সেলস করে।
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button className="bg-gradient-to-r from-neon-green to-electric-blue hover:from-electric-blue hover:to-neon-green text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-neon-green/50">
                  👉 এখনই আপনার Neuro Marketing ভিত্তিক ওয়েবসাইট এর জন্য বুক করুন
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                <div className="glassmorphism-dark rounded-2xl p-6 border border-electric-blue/20">
                  <div className="text-4xl font-bold text-neon-green mb-2">৯০%</div>
                  <p className="text-gray-300">ভিজিটর প্রথম ৫ সেকেন্ডেই সিদ্ধান্ত নেয়</p>
                </div>
                <div className="glassmorphism-dark rounded-2xl p-6 border border-neuro-purple/20">
                  <div className="text-4xl font-bold text-electric-blue mb-2">২৪/৭</div>
                  <p className="text-gray-300">সেলসপার্সন হিসেবে কাজ করবে</p>
                </div>
                <div className="glassmorphism-dark rounded-2xl p-6 border border-neon-green/20">
                  <div className="text-4xl font-bold text-neuro-purple mb-2">১০০%</div>
                  <p className="text-gray-300">Psychology-driven ডিজাইন</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Neuro Marketing Important Section */}
        <section className="py-20 bg-neural-bg-secondary relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
                ❓ কেন শুধু ডিজাইন নয়, <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">Neuro Marketing জরুরি</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                আজকের দিনে ৯০% ভিজিটর ওয়েবসাইটে ঢুকে প্রথম ৫ সেকেন্ডেই সিদ্ধান্ত নেয়, থাকবে নাকি চলে যাবে।
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="glassmorphism-dark rounded-2xl p-8 border border-red-500/20 hover:border-red-500/40 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-xl flex items-center justify-center mb-6">
                  <Target className="text-red-400" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-400">এলোমেলো ডিজাইন</h3>
                <p className="text-gray-300">→ ব্রেইন বলে "Low Quality"</p>
              </div>
              
              <div className="glassmorphism-dark rounded-2xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="text-orange-400" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-orange-400">Social Proof নাই</h3>
                <p className="text-gray-300">→ ব্রেইন বলে "Risky"</p>
              </div>
              
              <div className="glassmorphism-dark rounded-2xl p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="text-yellow-400" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400">CTA স্পষ্ট নয়</h3>
                <p className="text-gray-300">→ ব্রেইন বলে "Confusing"</p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-neuro-purple/10 to-electric-blue/10 rounded-3xl p-12 border border-electric-blue/20">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-electric-blue/20 to-neuro-purple/20 rounded-full flex items-center justify-center">
                  <Brain className="text-electric-blue" size={40} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">🧠 Neuro Fact:</h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                মানুষ সিদ্ধান্ত নেয় আবেগ + psychology দিয়ে। শুধু লজিক দিয়ে না।<br/>
                👉 তাই ওয়েবসাইটকে এমনভাবে বানাতে হয় যাতে ভিজিটর অবচেতনভাবে বিশ্বাস করে এবং কিনতে বাধ্য হয়।
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-neural-bg relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
                🌟 আমাদের তৈরি <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">ওয়েবসাইটের বৈশিষ্ট্য</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Psychology-driven Design */}
              <div className="glassmorphism-dark rounded-3xl p-8 border border-electric-blue/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-electric-blue/20 to-neuro-purple/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">1️⃣</span>
                  </div>
                  <h3 className="text-2xl font-bold text-electric-blue">Psychology-driven Design</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-neon-green flex-shrink-0 mt-1" size={16} />
                    <p className="text-gray-300">রঙ, ফন্ট, লেআউট সবকিছু Neuro Tested</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-neon-green flex-shrink-0 mt-1" size={16} />
                    <p className="text-gray-300">Eye Direction Theory → CTA এর দিকে দৃষ্টি টানে</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-neon-green flex-shrink-0 mt-1" size={16} />
                    <p className="text-gray-300">Color Psychology → আস্থা, urgency, excitement তৈরি করে</p>
                  </div>
                </div>
              </div>

              {/* Conversion Optimized */}
              <div className="glassmorphism-dark rounded-3xl p-8 border border-neuro-purple/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-neuro-purple/20 to-neon-green/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">2️⃣</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neuro-purple">Conversion Optimized Funnel</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-neon-green flex-shrink-0 mt-1" size={16} />
                    <p className="text-gray-300">PRISM Model এ ভিত্তিক কনটেন্ট (Problem → React → Inspire → Social Proof → Move)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-neon-green flex-shrink-0 mt-1" size={16} />
                    <p className="text-gray-300">Cold Visitor → Warm → Hot Customer রূপান্তর</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-neon-green flex-shrink-0 mt-1" size={16} />
                    <p className="text-gray-300">প্রতিটি সেকশন ভিজিটরকে সিদ্ধান্তের দিকে ঠেলে দেয়</p>
                  </div>
                </div>
              </div>

              {/* Bangladesh Context */}
              <div className="glassmorphism-dark rounded-3xl p-8 border border-neon-green/20 md:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-green/20 to-electric-blue/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">4️⃣</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neon-green">Bangladesh Context Ready</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <Check className="text-neon-green flex-shrink-0 mt-1" size={16} />
                    <p className="text-gray-300">লোকাল কাস্টমারের মানসিকতা অনুযায়ী ডিজাইন</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-neon-green flex-shrink-0 mt-1" size={16} />
                    <p className="text-gray-300">বাংলা/ইংরেজি মিশ্র ভাষা</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-neon-green flex-shrink-0 mt-1" size={16} />
                    <p className="text-gray-300">মোবাইল-ফার্স্ট অভিজ্ঞতা (কারণ ৭০% ভিজিটর মোবাইল থেকে আসে)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-neon-green/10 to-electric-blue/10 rounded-3xl p-12 border border-neon-green/20">
              <h3 className="text-2xl font-bold mb-4">📌 ফলাফল:</h3>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                আপনার ওয়েবসাইট শুধু সুন্দর হবে না, বরং ভিজিটরকে কাস্টমারে রূপান্তরিত করবে।
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-neural-bg-secondary relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
                🛠️ আমাদের কাজ করার <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">ধাপ</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {service.process.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-electric-blue/20 to-neuro-purple/20 rounded-full flex items-center justify-center mx-auto border-2 border-electric-blue/30 group-hover:border-electric-blue/60 transition-colors">
                      <span className="text-2xl font-bold text-electric-blue">{index + 1}</span>
                    </div>
                    {index < service.process.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-electric-blue/30 to-transparent"></div>
                    )}
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 bg-neural-bg relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
                📊 <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">Social Proof / Results</span>
              </h2>
              <p className="text-xl text-gray-300">প্রমাণিত ফলাফল এবং সন্তুষ্ট ক্লায়েন্টদের মতামত</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {service.results.map((result, index) => (
                <div key={index} className="text-center glassmorphism-dark rounded-2xl p-8 border border-electric-blue/20 hover:border-electric-blue/40 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-r from-neon-green to-electric-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award size={24} className="text-white" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{result}</p>
                </div>
              ))}
            </div>

            <div className="text-center bg-gradient-to-r from-electric-blue/10 to-neuro-purple/10 rounded-3xl p-12 border border-electric-blue/20">
              <h3 className="text-2xl font-bold mb-4">Video review গলিব ভাই</h3>
              <p className="text-gray-300 mb-6">আমাদের ক্লায়েন্টদের সরাসরি মতামত শুনুন</p>
              <div className="w-full max-w-2xl mx-auto h-64 bg-gradient-to-br from-neural-bg-secondary to-neural-bg rounded-2xl border border-electric-blue/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-electric-blue/20 to-neuro-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="text-electric-blue" size={32} />
                  </div>
                  <p className="text-gray-400">Video Content এর জন্য স্থান</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-neuro-purple/20 to-electric-blue/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-electric-blue rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-neuro-purple rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-montserrat font-bold mb-8">
                🔥 আপনার ওয়েবসাইট শুধু শো-পিস না, <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">একটি ২৪/৭ সেলসপার্সন বানান।</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                👉 এখনই আমাদের সাথে যোগাযোগ করুন।
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <button className="bg-gradient-to-r from-neon-green to-electric-blue hover:from-electric-blue hover:to-neon-green text-white font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-neon-green/50">
                  ফ্রি কনসালটেশন বুক করুন
                </button>
                <button className="glassmorphism-dark border border-electric-blue/30 hover:border-electric-blue/60 text-white font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 hover:scale-105">
                  আরো জানুন
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    )
  }

  // Default layout for other services
  return (
    <div className="min-h-screen bg-neural-bg text-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section with Enhanced Design */}
        <section className={`relative py-24 bg-gradient-to-br ${service.backgroundColor} overflow-hidden`}>
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-electric-blue rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-32 right-20 w-48 h-48 bg-neuro-purple rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-neon-green rounded-full blur-2xl animate-pulse delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            {/* Breadcrumb */}
            <Link 
              href="/services" 
              className="inline-flex items-center text-electric-blue hover:text-neon-green transition-colors mb-8 group glassmorphism-dark rounded-full px-4 py-2"
            >
              <ChevronLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={18} />
              <span className="text-sm">সার্ভিসসমূহে ফিরে যান</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neuro-purple rounded-3xl blur opacity-75 animate-pulse"></div>
                    <div className="relative p-6 bg-gradient-to-r from-electric-blue/20 to-neuro-purple/20 rounded-3xl glassmorphism-dark">
                      <IconComponent className="text-electric-blue" size={64} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl lg:text-6xl font-bold text-neon-green">+{service.stats.success}</span>
                      <div className="text-sm text-gray-300">
                        <div>{service.stats.metric}</div>
                        <div className="text-xs text-electric-blue">গড় ফলাফল</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h1 className="text-4xl lg:text-6xl font-montserrat font-bold mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-white via-electric-blue to-neuro-purple bg-clip-text text-transparent">
                      {service.title}
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    {service.fullDescription}
                  </p>
                </div>

                {/* Quick Info Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="glassmorphism-dark rounded-2xl p-6 border border-electric-blue/20 hover:border-electric-blue/40 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <DollarSign className="text-neon-green" size={24} />
                      <h3 className="font-semibold">মূল্য</h3>
                    </div>
                    <p className="text-xl font-bold text-neon-green">{service.price}</p>
                  </div>
                  
                  <div className="glassmorphism-dark rounded-2xl p-6 border border-neuro-purple/20 hover:border-neuro-purple/40 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="text-electric-blue" size={24} />
                      <h3 className="font-semibold">সময়কাল</h3>
                    </div>
                    <p className="text-xl font-bold text-electric-blue">{service.timeline}</p>
                  </div>
                </div>
              </div>

              {/* Right Content - Visual Stats */}
              <div className="space-y-6">
                <div className="glassmorphism-dark rounded-3xl p-8 border border-electric-blue/20">
                  <h3 className="text-2xl font-bold mb-6 text-center">প্রমাণিত ফলাফল</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {service.results.map((result, index) => (
                      <div 
                        key={index}
                        className="text-center p-4 bg-gradient-to-br from-neural-bg-secondary to-neural-bg rounded-2xl border border-gray-800 hover:border-electric-blue/30 transition-colors"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-neon-green to-electric-blue rounded-full flex items-center justify-center mx-auto mb-3">
                          <Award size={20} className="text-white" />
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Enhanced */}
        <section className="py-20 bg-neural-bg-secondary relative overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute animate-float-slow">
              <Brain className="w-64 h-64 text-electric-blue" />
            </div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
                এই সার্ভিসে যা <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">পাবেন</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                আমাদের প্রতিটি ফিচার নিউরো সাইকোলজির উপর ভিত্তি করে তৈরি এবং প্রমাণিত ফলাফল দেয়
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, index) => (
                <div 
                  key={index}
                  className="group glassmorphism-dark rounded-2xl p-8 hover-lift animate-shimmer border border-transparent hover:border-electric-blue/30 transition-all duration-500"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-electric-blue/20 to-neuro-purple/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Check className="text-neon-green" size={20} />
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                প্রতিটি ধাপ বৈজ্ঞানিক পদ্ধতি অনুসরণ করে এবং সর্বোচ্চ মানের নিশ্চয়তা দেয়
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
  )
}