import React from 'react'
import { Metadata } from 'next'
import Navigation from '../components/layout/navigation'
import Footer from '../components/layout/footer'
import BlogHeroSection from '../components/sections/blog-hero-section'
import BlogPostsSection from '../components/sections/blog-posts-section'
import BlogCategoriesSection from '../components/sections/blog-categories-section'
import BlogNewsletterSection from '../components/sections/blog-newsletter-section'
import FloatingActionButton from '../components/ui/floating-action-button'

export const metadata: Metadata = {
  title: 'Blog - Neuro Binding | Insights on Psychology-Driven Web Design',
  description: 'Discover the latest insights in neuro marketing, psychology-driven web design, and conversion optimization strategies from our expert team.',
  keywords: 'neuro marketing blog, web design psychology, conversion optimization tips, digital marketing insights, Bangladesh marketing agency',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-neural-bg text-white">
      <Navigation />
      <BlogHeroSection />
      <BlogCategoriesSection />
      <BlogPostsSection />
      <BlogNewsletterSection />
      <Footer />
      <FloatingActionButton />
    </div>
  )
}