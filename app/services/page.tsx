import { Metadata } from 'next'
import Navigation from '@/components/layout/navigation'
import ServicesSection from '@/components/sections/services-section'
import Footer from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Services - Neuro Binding | Neuro Marketing & Web Design Solutions',
  description: 'Discover our complete range of neuro marketing services including psychology-driven web design, behavioral analytics, and conversion optimization.',
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