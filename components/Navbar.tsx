'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <Logo className="w-12 h-12 transform group-hover:scale-110 transition-transform duration-200" />
            <span className="text-2xl font-bold text-secondary font-heading">
              LivPro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              Accueil
            </Link>
            <Link 
              href="/#apropos" 
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              À propos
            </Link>
            <Link 
              href="/#services" 
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              Services
            </Link>
            <Link 
              href="/#contact" 
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              Contactez-nous
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 px-4 py-2"
              >
                Accueil
              </Link>
              <Link 
                href="/#apropos" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 px-4 py-2"
              >
                À propos
              </Link>
              <Link 
                href="/#services" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 px-4 py-2"
              >
                Services
              </Link>
              <Link 
                href="/#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 px-4 py-2"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
