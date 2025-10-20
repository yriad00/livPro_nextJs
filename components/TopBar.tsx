'use client'

import { motion } from 'framer-motion'

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-primary via-secondary to-primary text-white py-4 overflow-hidden relative">
      <motion.div
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex items-center gap-16 whitespace-nowrap"
      >
        {/* Répéter les badges 3 fois pour effet continu */}
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex items-center gap-16">
            {/* Paiement sur place */}
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-base">💳 Paiement sur place</span>
            </div>

          

            {/* Suivi en temps réel */}
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-base">📍 Suivi en temps réel</span>
            </div>

            

            {/* Support multilingue */}
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-base">🌍 Support FR/DE/AR</span>
            </div>

            
          </div>
        ))}
      </motion.div>
    </div>
  )
}
