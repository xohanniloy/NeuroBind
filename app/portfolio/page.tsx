import { Metadata } from 'next'
import Navigation from '@/components/layout/navigation'
import PortfolioSection from '@/components/sections/portfolio-section'
import Footer from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Portfolio - Neuro Binding | Proven Results in Neuro Marketing',
  description: 'Explore our portfolio of successful neuro marketing projects with proven results across e-commerce, SaaS, and startup clients.',
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-neural-bg text-white">
      <Navigation />
      <div className="pt-20">
        <PortfolioSection />
      </div>
      <Footer />
    </div>
  )
}