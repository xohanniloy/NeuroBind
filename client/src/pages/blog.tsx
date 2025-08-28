import Navigation from "../components/layout/navigation";
import Footer from "../components/layout/footer";
import BlogHeroSection from "../components/sections/blog-hero-section";
import BlogPostsSection from "../components/sections/blog-posts-section";
import BlogFeaturesSection from "../components/sections/blog-features-section";
import BlogNewsletterSection from "../components/sections/blog-newsletter-section";

export default function Blog() {
  return (
    <div className="min-h-screen bg-neural-bg text-white">
      <Navigation />
      <BlogHeroSection />
      <BlogFeaturesSection />
      <BlogPostsSection />
      <BlogNewsletterSection />
      <Footer />
    </div>
  );
}