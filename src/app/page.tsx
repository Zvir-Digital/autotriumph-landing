import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Stats from '@/components/Stats';
import Tariffs from '@/components/Tariffs';
import BusinessBenefits from '@/components/BusinessBenefits';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#16212b] transition-colors">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Tariffs />
      <BusinessBenefits />
      <CTA />
      <Footer />
    </main>
  );
}
