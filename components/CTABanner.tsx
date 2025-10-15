'use client'

import { motion } from 'framer-motion'

export default function CTABanner() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.prod.website-files.com/651c198b3ea329eb422858f1/6535d1dc92a04a804f144cef_video4_v210001-0200-transcode.webm"
            type="video/webm"
          />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Offrez-vous une expérience utilisateur
          </h2>
          <p className="text-3xl sm:text-4xl font-semibold text-primary mb-10">
            Flexible et optimale
          </p>
          
          <motion.a
            href="/send"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold px-10 py-5 rounded-lg shadow-2xl hover:shadow-primary/50 transition-all duration-300 text-lg"
          >
            Livrer maintenant
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
