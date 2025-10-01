'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Prêt à envoyer votre colis ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Commencez dès maintenant et profitez d'un service simple, rapide et sécurisé
          </p>
          <Link
            href="/send"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-primary bg-white hover:bg-gray-50 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/50"
            aria-label="Créer un nouvel envoi de colis"
          >
            Envoyez votre colis
            <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <p className="mt-6 text-white/80 text-sm">
            Pas de frais cachés • Annulation gratuite sous 24h
          </p>
        </motion.div>
      </div>
    </section>
  )
}
