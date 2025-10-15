'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Saisissez les infos',
    description: 'Expéditeur, destinataire, colis.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Payez sur place',
    description: 'Paiement sécurisé à la livraison.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Suivez & recevez',
    description: 'Tracking + livraison.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    }
  },
}

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Simple & Rapide
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trois étapes simples pour envoyer votre colis
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Connection line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-y-1/2 origin-center" 
            style={{ left: '20%', right: '20%' }}
          ></motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 md:gap-4"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                
                {/* Number badge with pulse animation */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative z-10 w-24 h-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl mb-6"
                >
                  <motion.span
                    animate={{ 
                      textShadow: [
                        "0 0 0px rgba(255,255,255,0)",
                        "0 0 10px rgba(255,255,255,0.8)",
                        "0 0 0px rgba(255,255,255,0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {step.number}
                  </motion.span>
                  
                  {/* Pulse rings */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.5, 1.5],
                      opacity: [0.5, 0, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full border-2 border-primary"
                  ></motion.div>
                </motion.div>

                {/* Icon with rotation */}
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-md group-hover:shadow-lg transition-shadow"
                >
                  {step.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  {step.description}
                </p>
                
                {/* Arrow for non-last items */}
                {index < steps.length - 1 && (
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="hidden md:block absolute top-20 -right-8 text-primary/40"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
