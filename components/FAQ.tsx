'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: 'Quels documents sont nécessaires pour la douane ?',
    answer: 'Pour les envois internationaux entre le Maroc et l\'Europe, vous devez fournir une facture commerciale détaillée et une déclaration en douane. Nous vous guidons pas à pas lors de la création de votre envoi pour compléter facilement tous les documents requis.',
  },
  {
    question: 'Quels sont les délais de livraison ?',
    answer: 'Les délais standards sont de 5 à 7 jours ouvrés entre Casablanca et l\'Europe. Des options express sont disponibles pour une livraison en 2-3 jours. Les délais peuvent varier selon les procédures douanières.',
  },
  {
    question: 'Proposez-vous une assurance pour les colis ?',
    answer: 'Oui, une assurance de base est incluse dans tous nos envois (couverture jusqu\'à 100€). Vous pouvez souscrire une assurance complémentaire lors de la création de votre envoi pour des valeurs supérieures.',
  },
  {
    question: 'Puis-je annuler ou modifier mon envoi ?',
    answer: 'Vous pouvez annuler ou modifier votre envoi gratuitement jusqu\'à 24h après la création. Passé ce délai, des frais peuvent s\'appliquer selon l\'état de traitement. Contactez notre service client pour toute demande.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-gray-600">
            Tout ce que vous devez savoir sur nos services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left bg-white hover:bg-neutral-light transition-colors duration-200 flex items-center justify-between gap-4"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-secondary pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-5 bg-neutral-light/50 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
