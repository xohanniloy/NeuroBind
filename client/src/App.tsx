import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Portfolio from "@/pages/portfolio";
import Contact from "@/pages/contact";
import Blog from "@/pages/blog";
import ServiceDetail from "@/pages/service-detail";
import WebsiteTrustGuide from "@/pages/website-trust-guide";
import WhyNeuroMarketingBlog from "@/pages/why-neuro-marketing-blog";
import NotFound from "@/pages/not-found";
import FloatingParticles from "@/components/ui/floating-particles";
import EnhancedFloatingButtons from "@/components/ui/enhanced-floating-buttons";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/why-neuro-marketing-comes-in" component={WhyNeuroMarketingBlog} />
      <Route path="/contact" component={Contact} />
      <Route path="/website-trust-guide" component={WebsiteTrustGuide} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <FloatingParticles count={15} speed={0.3} />
        <EnhancedFloatingButtons />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
