'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const features = [
  {
    title: 'Estimation instantanée des tarifs',
    description: 'Obtenez un prix en temps réel selon poids & destination.',
    image: '/images/Design.jpeg',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Suivi simplifié étape par étape',
    description: 'Notifications e-mail & SMS, historique complet.',
    image: '/images/TrucksBoxes.jpeg',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Paiement sécurisé sur place',
    description: 'Payez en toute sécurité lors de la livraison ou au point de retrait.',
    image: '/images/Transportation.jpeg',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="services" className="py-32 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-bold text-xl mb-3">Nos Services</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Solutions de livraison adaptées
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une solution complète pour vos envois entre le Maroc et l'Allemagne
          </p>
        </motion.div>

        {/* Animated Cards Container */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 mb-16 md:h-[240px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              layout
              className={`cursor-pointer transition-all duration-500 ${
                activeIndex === index
                  ? 'md:w-[600px] w-full'
                  : 'md:w-[200px] w-full'
              }`}
            >
              <motion.div
                layout
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border-2 h-full ${
                  activeIndex === index
                    ? 'border-primary'
                    : 'border-gray-100 hover:border-primary/30'
                }`}
              >
                <AnimatePresence mode="wait">
                  {activeIndex === index ? (
                    // Expanded Card
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-8 h-full flex items-center"
                    >
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-secondary mb-3">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    // Collapsed Card
                    <motion.div
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-6 flex flex-col items-center justify-center text-center h-full"
                    >
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-3">
                        {feature.icon}
                      </div>
                      <h4 className="text-sm font-semibold text-secondary">
                        {feature.title}
                      </h4>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="/send"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Envoyez votre colis
          </a>
        </motion.div>
      </div>
    </section>
  )
}
