'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

interface City {
  name: string
  coordinates?: { x: number; y: number }
}

interface Country {
  name: string
  flag: string
  flagImage: string
  code: string
  cities: City[]
  color: string
}

const deliveryData: Country[] = [
  {
    name: 'France',
    flag: '🇫🇷',
    flagImage: 'https://flagcdn.com/w320/fr.png',
    code: 'FR',
    color: '#0055A4',
    cities: [
      { name: 'Montpellier' },
      { name: 'Nîmes' },
      { name: 'Orange' },
      { name: 'Montélimar' },
      { name: 'Valence' },
      { name: 'Lyon' },
      { name: 'Dijon' },
      { name: 'Langres' },
      { name: 'Paris' },
      { name: 'Toulouse' },
    ]
  },
  {
    name: 'Allemagne',
    flag: '🇩🇪',
    flagImage: 'https://flagcdn.com/w320/de.png',
    code: 'DE',
    color: '#000000',
    cities: [
      { name: 'Frankfurt' },
      { name: 'Mainau' },
      { name: 'Darmstadt' },
      { name: 'Mainz' },
      { name: 'Wiesbaden' },
      { name: 'Bad Homburg' },
    ]
  },
  {
    name: 'Belgique',
    flag: '🇧🇪',
    flagImage: 'https://flagcdn.com/w320/be.png',
    code: 'BE',
    color: '#FDDA24',
    cities: [
   
    ]
  }
]

export default function DeliveryPoints() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)
  const [isEUOpen, setIsEUOpen] = useState(false)
  const [isUKSelected, setIsUKSelected] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3"
          >
            🌍 Nos Points de Livraison
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Livraison dans toute l&apos;Europe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos points de livraison disponibles dans plusieurs pays européens
          </p>
        </motion.div>

        {/* EU and UK Flag Buttons */}
        <div className="flex justify-center items-start gap-8 sm:gap-12 mb-12 px-4">
          {/* EU Flag Button */}
          <motion.button
            onClick={() => {
              setIsEUOpen(!isEUOpen)
              setIsUKSelected(false)
              setSelectedCountry(null)
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <motion.div
              animate={isEUOpen ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.6 }}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-2xl relative overflow-hidden bg-white"
            >
              <Image
                src="/images/Flag_of_Europe.svg.png"
                alt="Drapeau de l'Union Européenne"
                fill
                className="object-cover"
                priority
              />
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center w-full"
            >
              <p className="font-bold text-lg text-secondary text-center">Union Européenne</p>
              <p className="text-sm text-gray-600 text-center">Cliquez pour voir les pays</p>
            </motion.div>
          </motion.button>

          {/* UK Flag Button */}
          <motion.button
            onClick={() => {
              setIsUKSelected(!isUKSelected)
              setIsEUOpen(false)
              setSelectedCountry(null)
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <motion.div
              animate={isUKSelected ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.6 }}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-2xl relative overflow-hidden bg-white"
            >
              <Image
                src="https://flagcdn.com/w320/gb.png"
                alt="Drapeau du Royaume-Uni"
                fill
                className="object-cover"
                priority
              />
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center w-full"
            >
              <p className="font-bold text-lg text-secondary text-center">Royaume-Uni</p>
              <p className="text-sm text-gray-600 text-center">Cliquez pour découvrir</p>
            </motion.div>
          </motion.button>
        </div>

        {/* Countries Grid */}
        <AnimatePresence mode="wait">
          {isEUOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {deliveryData.map((country, index) => (
                  <div key={country.code} className="flex flex-col">
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setSelectedCountry(selectedCountry?.code === country.code ? null : country)}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                        selectedCountry?.code === country.code 
                          ? 'border-primary ring-4 ring-primary/20' 
                          : 'border-gray-200 hover:border-primary/50'
                      }`}
                    >
                      {/* Country Flag */}
                      <div className="relative w-20 h-20 mx-auto mb-4 rounded-lg overflow-hidden shadow-md">
                        <Image
                          src={country.flagImage}
                          alt={`Drapeau ${country.name}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Country Name */}
                      <h3 className="text-xl font-bold text-secondary mb-2">
                        {country.name}
                      </h3>
                      
                      {/* Cities Count */}
                      <div className="flex items-center justify-center gap-2 text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm font-medium">
                          {country.cities.length > 0 ? `${country.cities.length} villes` : 'Tout le pays'}
                        </span>
                      </div>

                      {/* Selection indicator */}
                      {selectedCountry?.code === country.code && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg"
                        >
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                      )}
                    </motion.button>

                    {/* Cities List for this country */}
                    <AnimatePresence>
                      {selectedCountry?.code === country.code && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4"
                        >
                          {country.code === 'BE' ? (
                            // Belgium special message
                            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 rounded-2xl border-2 border-blue-200 shadow-lg text-center">
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="text-5xl mb-4"
                              >
                                🇧🇪
                              </motion.div>
                              <h5 className="font-bold text-xl text-secondary mb-3">Livraison dans toute la Belgique</h5>
                              <p className="text-sm text-gray-600 leading-relaxed">Nous livrons vos colis partout en Belgique</p>
                            </div>
                          ) : (
                            // Cities grid
                            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 shadow-xl border-2 border-gray-200">
                              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <h5 className="font-bold text-secondary">Points de livraison</h5>
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                {country.cities.map((city, cityIndex) => (
                                  <motion.div
                                    key={city.name}
                                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ 
                                      delay: cityIndex * 0.05,
                                      type: "spring",
                                      stiffness: 300,
                                      damping: 20
                                    }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary cursor-pointer overflow-hidden"
                                  >
                                    {/* Hover background effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    {/* Content */}
                                    <div className="relative flex items-center gap-2">
                                      <motion.div
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 0.5, delay: cityIndex * 0.05 }}
                                        className="flex-shrink-0"
                                      >
                                        <svg className="w-4 h-4 text-primary group-hover:text-secondary transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                      </motion.div>
                                      <p className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">
                                        {city.name}
                                      </p>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                              
                              {/* Info footer */}
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-center gap-2 text-xs text-gray-500"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Livraison en 5-7 jours ouvrés</span>
                              </motion.div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* UK Message */}
        <AnimatePresence mode="wait">
          {isUKSelected && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border-2 border-primary/20">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <div className="max-w-2xl mx-auto">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="mb-6"
                    >
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-xl">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h4
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl sm:text-4xl font-bold text-secondary mb-4"
                    >
                      Livraison dans tout le Royaume-Uni
                    </motion.h4>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg text-gray-600"
                    >
                      Nous livrons vos colis partout au Royaume-Uni
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        {!selectedCountry && isEUOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              Sélectionnez un pays pour voir les villes disponibles
            </p>
            <a
              href="/send"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Envoyer un colis
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  )
}
