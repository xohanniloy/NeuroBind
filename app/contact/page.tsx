import { Metadata } from 'next'
import Navigation from '@/components/layout/navigation'
import ContactSection from '@/components/sections/contact-section'
import Footer from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Contact Us - Neuro Binding | Get Your Free Marketing Consultation',
  description: 'Ready to transform your business with neuro marketing? Contact our team for a free consultation and see how psychology can boost your conversions.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neural-bg text-white">
      <Navigation />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}