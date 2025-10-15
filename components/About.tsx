'use client'

import { motion } from 'framer-motion'

const valueVariants = {
  hidden: { opacity: 0, x: -20 },
  show: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.1,
      type: "spring",
      stiffness: 100,
    }
  })
}

export default function About() {
  return (
    <section id="apropos" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-neutral-light to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3"
          >
            Qui sommes-nous
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-3 sm:mb-4 px-4">
            À propos de LivPro
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Votre partenaire de confiance pour l&apos;envoi de colis entre le Maroc et l&apos;Allemagne
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="space-y-4 sm:space-y-6"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold text-secondary mb-6 sm:mb-8"
            >
              Notre mission
            </motion.h3>
            
            {/* Mission Cards */}
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Connexion internationale",
                  description: "LivPro est né de la volonté de faciliter les envois de colis entre le Maroc et l'Allemagne. Nous comprenons l'importance de rester connecté avec vos proches et de recevoir vos colis en toute sécurité."
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  ),
                  title: "Simplicité & Transparence",
                  description: "Notre plateforme simplifie le processus d'envoi en offrant une interface intuitive, des tarifs transparents et un suivi en temps réel de vos colis."
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Service personnalisé",
                  description: "Avec une équipe basée au Maroc et en Allemagne, nous assurons un service personnalisé et multilingue (français, allemand, arabe) pour répondre à tous vos besoins."
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    x: 10,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="group relative"
                >
                  {/* Card glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative bg-white border-2 border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:border-primary/30">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-primary/80 rounded-lg sm:rounded-xl flex items-center justify-center text-white mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-shadow"
                    >
                      {card.icon}
                    </motion.div>
                    
                    {/* Content */}
                    <h4 className="text-base sm:text-lg font-bold text-secondary mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                      {card.description}
                    </p>
                    
                    {/* Animated accent bar */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "40px" }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                      className="h-0.5 sm:h-1 bg-gradient-to-r from-primary to-primary/80 rounded-full mt-3 sm:mt-4 group-hover:w-full transition-all duration-500"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Desktop version - Image with overlay */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative group hidden md:block"
          >
            {/* Image Cardboard with parallax effect */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src="/images/Cardboard.jpeg" 
                alt="Colis LivPro"
                className="w-full h-full object-cover"
              />
              
              {/* Gradient overlay with values */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-secondary/85 to-transparent flex items-end">
                <div className="p-8 w-full bg-gradient-to-t from-black/40 to-transparent">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-white mb-6 drop-shadow-2xl"
                  >
                    Nos valeurs
                  </motion.h3>
                  
                  <div className="space-y-4">
                    {[
                      { title: "Transparence", desc: "Tarifs clairs sans frais cachés" },
                      { title: "Fiabilité", desc: "Livraison sécurisée et ponctuelle" },
                      { title: "Support client", desc: "Assistance disponible et réactive" },
                      { title: "Innovation", desc: "Technologie moderne et simple d'utilisation" }
                    ].map((value, index) => (
                      <motion.div
                        key={index}
                        custom={index}
                        variants={valueVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4 cursor-pointer group/value bg-black/20 backdrop-blur-md rounded-xl p-4 hover:bg-black/30 transition-all border border-white/10"
                      >
                        <motion.div 
                          whileHover={{ rotate: 360, scale: 1.15 }}
                          transition={{ type: "spring", stiffness: 200 }}
                          className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0 shadow-2xl group-hover/value:shadow-primary/50 transition-shadow"
                        >
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-extrabold text-white mb-1.5 text-xl leading-tight drop-shadow-2xl">
                            {value.title}
                          </h4>
                          <p className="text-white font-medium text-base leading-relaxed drop-shadow-2xl">
                            {value.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative floating element */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-2xl opacity-80 blur-sm"
            ></motion.div>
          </motion.div>

          {/* Mobile version - Cards without image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:hidden space-y-4"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-6">
              Nos valeurs
            </h3>
            
            <div className="space-y-3">
              {[
                { title: "Transparence", desc: "Tarifs clairs sans frais cachés" },
                { title: "Fiabilité", desc: "Livraison sécurisée et ponctuelle" },
                { title: "Support client", desc: "Assistance disponible et réactive" },
                { title: "Innovation", desc: "Technologie moderne et simple d'utilisation" }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="bg-white border-2 border-gray-100 rounded-xl p-4 shadow-md hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-secondary mb-1 text-base">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {value.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
