'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            À propos de LivPro
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Votre partenaire de confiance pour l'envoi de colis entre le Maroc et l'Allemagne
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-secondary mb-6">
              Notre mission
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              LivPro est né de la volonté de faciliter les envois de colis entre le Maroc et l'Allemagne. 
              Nous comprenons l'importance de rester connecté avec vos proches et de recevoir vos colis en toute sécurité.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Notre plateforme simplifie le processus d'envoi en offrant une interface intuitive, 
              des tarifs transparents et un suivi en temps réel de vos colis.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Avec une équipe basée au Maroc et en Allemagne, nous assurons un service personnalisé 
              et multilingue (français, allemand, arabe) pour répondre à tous vos besoins.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Image Cardboard */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/Cardboard.jpeg" 
                alt="Colis LivPro"
                className="w-full h-full object-cover"
              />
              {/* Overlay avec valeurs */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/70 to-transparent flex items-end">
                <div className="p-8 w-full">
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    Nos valeurs
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Transparence</h4>
                        <p className="text-gray-200 text-sm">Tarifs clairs sans frais cachés</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Fiabilité</h4>
                        <p className="text-gray-200 text-sm">Livraison sécurisée et ponctuelle</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Support client</h4>
                        <p className="text-gray-200 text-sm">Assistance disponible et réactive</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Innovation</h4>
                        <p className="text-gray-200 text-sm">Technologie moderne et simple d'utilisation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
