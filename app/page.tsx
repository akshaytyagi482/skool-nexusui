import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Features from '../components/Feature'
import WhyChooseUs from '@/components/Whychooseus'
import DashboardSection from '@/components/Dashboard'
import SkoolNexusPro from '@/components/SkoolNexuspro'
import StepsSection from '@/components/StepsSection'
import WhyChooseUs2 from '@/components/Whychooseus2'
import InfiniteLogos from '@/components/Infinitescroll'
import BetterSection from '@/components/Helpus'
import FaqSection from '@/components/Faqsection'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyChooseUs/>
        <Features />
        <DashboardSection />
        <SkoolNexusPro />
        <StepsSection />
        <WhyChooseUs2 />
        <InfiniteLogos />
        <BetterSection />
        <FaqSection />
      </main>

      <Footer />
    </div>
  )
}
