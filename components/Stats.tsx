'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Stats() {
  const totalOrders = '00192564'

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary to-orange-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left flex-shrink-0"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Rejoignez la
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Famille LivPro!
            </h2>
          </motion.div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px h-24 lg:h-32 bg-white/30 flex-shrink-0"></div>

          {/* Horizontal Divider for mobile/tablet */}
          <div className="lg:hidden w-full max-w-xs h-px bg-white/30"></div>

          {/* Right Side - Counter */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left w-full lg:w-auto"
          >
            <p className="text-white text-base sm:text-lg md:text-xl font-medium mb-4 sm:mb-6">
              Commandes livrées avec succès
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1 sm:gap-2">
              {totalOrders.split('').map((digit, index) => (
                <motion.div
                  key={index}
                  initial={{ rotateX: -90, opacity: 0 }}
                  whileInView={{ rotateX: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="bg-white text-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl w-10 h-12 sm:w-12 sm:h-14 md:w-14 md:h-16 lg:w-16 lg:h-20 xl:w-20 xl:h-24 flex items-center justify-center rounded-md sm:rounded-lg shadow-2xl border-2 sm:border-4 border-white/20"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {digit}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
