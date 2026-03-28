import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedPackages from "@/components/FeaturedPackages";
import BenefitsSection from "@/components/BenefitsSection";
import WhyRapidTax from "@/components/WhyRapidTax";
import HowItWorks from "@/components/HowItWorks";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import RegistrationsSection from "@/components/RegistrationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen font-body">
    <TopBar />
    <Navbar />
    <HeroSection />
    <FeaturedPackages />
    <BenefitsSection />
    <WhyRapidTax />
    <HowItWorks />
    <AboutSection />
    <StatsSection />
    <RegistrationsSection />
    <TestimonialsSection />
    <CTABanner />
    <Footer />
  </div>
);

export default Index;
