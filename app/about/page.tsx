import { Metadata } from 'next'
import Navigation from '@/components/layout/navigation'
import AboutSection from '@/components/sections/about-section'
import Footer from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'About Us - Neuro Binding | Psychology-Driven Web Design Team',
  description: 'Meet our Bangladesh-based team of psychologists, designers, and developers who combine cutting-edge neuro marketing research with stunning web design.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neural-bg text-white">
      <Navigation />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </div>
  )
}