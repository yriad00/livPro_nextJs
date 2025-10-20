import Loader from '@/components/Loader'
import TopBar from '@/components/TopBar'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import CTABanner from '@/components/CTABanner'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export default function Home() {
  return (
    <>
      <Loader />
      <TopBar />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <CTABanner />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTA />
        <Footer />
      </main>
      <FloatingButtons />
    </>
  )
}
