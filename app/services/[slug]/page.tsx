import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navigation from '../../components/layout/navigation'
import Footer from '../../components/layout/footer'
import { Brain, TrendingUp, Users, Magnet, FileText, Palette, Check, ChevronLeft, Star, Zap, Target, ArrowRight, Clock, DollarSign, Award, Lightbulb, TrendingUp as TrendingUpIcon, Users as UsersIcon, Eye, Sparkles, Shield, Rocket } from 'lucide-react'
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
    shortDescription: "\"Content is King\" – কিন্তু Neuro Marketing-এ Content is Cash।",
    fullDescription: "আমাদের কনটেন্ট শুধু তথ্য প্রদান করে না, এটি ভিজিটরের আবেগের সাথে সংযোগ স্থাপন করে। আমরা নিউরো-লিঙ্গুইস্টিক প্রোগ্রামিং, ইমোশনাল ট্রিগার এবং পারসুয়েশন সাইকোলজির নীতি ব্যবহার করে এমন কনটেন্ট তৈরি করি যা পাঠকের মনে গভীর প্রভাব ফেলে এবং তাদের কাঙ্ক্ষিত অ্যাকশন নিতে অনুপ্রাণিত করে।",
    features: [
      "ভিজিটরের আবেগ ছুঁয়ে যাওয়া কনটেন্ট",
      "অ্যাকশনে নিয়ে আসা কপিরাইটিং",
      "সাইকোলজিক্যাল ট্রিগার ব্যবহার",
      "স্টোরিটেলিং টেকনিক",
      "পারসুয়েসিভ রাইটিং",
      "CTA অপটিমাইজেশন"
    ],
    advanced: [
      "নিউরো-লিঙ্গুইস্টিক প্রোগ্রামিং",
      "ইমোশনাল ট্রিগার ম্যাপিং",
      "পারসুয়েশন সাইকোলজি ফ্রেমওয়ার্ক",
      "বিহেভিয়ারাল কপিরাইটিং প্যাটার্ন",
      "সাবলিমিনাল ইনফ্লুয়েন্স টেকনিক",
      "কগনিটিভ বায়াস অ্যাক্টিভেশন"
    ],
    process: [
      "টার্গেট অডিয়েন্স সাইকোলজিক্যাল প্রোফাইলিং",
      "কনটেন্ট স্ট্র্যাটেজি ডেভেলপমেন্ট",
      "ইমোশনাল জার্নি ম্যাপিং",
      "পারসুয়েসিভ কপিরাইটিং",
      "A/B টেস্টিং ও রিভিশন",
      "পারফরমেন্স ট্র্যাকিং"
    ],
    results: [
      "গড়ে 280% এনগেজমেন্ট বৃদ্ধি",
      "কনভার্শন রেট 150% বৃদ্ধি",
      "সোশ্যাল শেয়ার 300% বৃদ্ধি",
      "রিড থ্রু রেট 200% বৃদ্ধি"
    ],
    stats: { success: "280%", metric: "Engagement বৃদ্ধি" },
    price: "শুরু ২৫,০০০ টাকা থেকে",
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