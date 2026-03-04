import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBadge from '@/components/TrustBadge';
import ChannelsShowcase from '@/components/ChannelsShowcase';
import Features from '@/components/Features';
import PlatformDemo from '@/components/PlatformDemo';
import HowItWorks from '@/components/HowItWorks';
import Stats from '@/components/Stats';
import PromoBanner from '@/components/PromoBanner';
import Tariffs from '@/components/Tariffs';
import BusinessBenefits from '@/components/BusinessBenefits';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#16212b] transition-colors">
      <Header />
      <Hero />
      <TrustBadge />
      <ChannelsShowcase />
      <Features />
      <PlatformDemo />
      <HowItWorks />
      <Stats />
      <PromoBanner />
      <Tariffs />
      <BusinessBenefits />
      <CTA />
      <Footer />
    </main>
  );
}
