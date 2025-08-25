import { Metadata } from 'next'
import Navigation from '../components/layout/navigation'
import ServicesSection from '../components/sections/services-section'
import Footer from '../components/layout/footer'

export const metadata: Metadata = {
  title: 'আমাদের সার্ভিসসমূহ - Neuro Binding | Neuro Marketing Based Services',
  description: 'আমাদের Neuro Marketing ভিত্তিক সেবা সমূহ - Website, Content, Lead Magnet, Script, Business Consultancy এবং Full Branding যা আপনার ব্যবসার জন্য সবচেয়ে কার্যকর।',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-neural-bg text-white">
      <Navigation />
      <div className="pt-20">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  )
}