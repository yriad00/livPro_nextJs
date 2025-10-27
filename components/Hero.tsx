'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const isMobile = useIsMobile()
  const { t } = useLanguage()

  return (
    <section className="relative overflow-x-hidden overflow-y-visible text-white pt-8">
      {/* Background Image with Blur */}
      <div className="absolute inset-0">
        <img 
          src="/images/rm_tawssil3.jpg" 
          alt="Background transport"
          className="w-full h-full object-cover"
        />
        {/* Disable backdrop-blur on mobile for better performance */}
        <div className="absolute inset-0 md:backdrop-blur-sm"></div>
      </div>
      
      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-secondary/60 to-secondary/85"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 overflow-x-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight"
            >
              {t('hero.title')}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {t('hero.subtitle')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Link 
                href="/send"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary/50"
                aria-label="Créer un nouvel envoi de colis"
              >
                {t('hero.sendButton')}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right Image - Delivery Man */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-8 lg:mt-0 overflow-hidden"
          >
            <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] flex items-center justify-center overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
              </div>
              
              {/* Delivery Man Image */}
              <motion.div
                animate={!isMobile ? { 
                  y: [0, -15, 0],
                } : {}}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10 w-full"
              >
                <img 
                  src="/images/delevery-removebg-preview.png" 
                  alt="Livreur professionnel RM TAWSSIL avec colis"
                  className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-2xl object-contain"
                  width={700}
                  height={900}
                />
              </motion.div>
              
              {/* Floating elements - hidden on mobile for better performance */}
              <motion.div
                animate={!isMobile ? { 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                } : {}}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="hidden md:block absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-xl"
              >
                <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
              </motion.div>
              
              <motion.div
                animate={!isMobile ? { 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                } : {}}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="hidden md:block absolute bottom-20 left-10 bg-white p-4 rounded-2xl shadow-xl"
              >
                <svg className="w-12 h-12 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
