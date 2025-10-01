'use client'

import { motion } from 'framer-motion'

const stats = [
  {
    value: '92.3%',
    label: 'Clients satisfaits',
  },
  {
    value: '+5000',
    label: 'Colis livrés',
  },
  {
    value: '24/7',
    label: 'Support disponible',
  },
  {
    value: '100%',
    label: 'Suivi en temps réel',
  },
]

export default function Stats() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
