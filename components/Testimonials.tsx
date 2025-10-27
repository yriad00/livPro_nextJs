'use client'

import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'

const testimonials = [
  {
    name: 'Fatima Benali',
    location: 'Maroc',
    text: 'Service impeccable ! J\'ai envoyé des cadeaux à ma famille en Europe et tout est arrivé en parfait état. Le suivi en temps réel m\'a vraiment rassurée.',
    rating: 5,
    avatar: 'FB',
  },
  {
    name: 'Mohammed El Amrani',
    location: 'France',
    text: 'Enfin une solution simple et transparente pour recevoir mes colis du Maroc. Les tarifs sont clairs et le service client très réactif. Je recommande vivement !',
    rating: 5,
    avatar: 'ME',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: index * 0.2,
      type: "spring",
      stiffness: 100,
      damping: 15,
    }
  })
}

export default function Testimonials() {
  const isMobile = useIsMobile()

  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white relative overflow-hidden">
      {/* Animated background patterns - disabled on mobile for better performance */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary rounded-full blur-3xl"
          ></motion.div>
        </div>
      )}
      
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
            Témoignages
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Découvrez les retours d&apos;expérience de nos clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="relative group"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 scale-95 group-hover:scale-100"></div>
              
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-white/20 hover:border-primary/50 transition-all duration-500 shadow-2xl">
                {/* Quote icon */}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-xl"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </motion.div>
                
                {/* Stars with animation */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.svg
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="w-6 h-6 text-primary drop-shadow-lg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-100 mb-8 leading-relaxed italic text-lg relative z-10">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author with avatar animation */}
                <div className="flex items-center gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl"
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <div className="font-bold text-white text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-300 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
