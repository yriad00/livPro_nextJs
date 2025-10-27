'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 sm:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image 
              src="/images/logo-ff.png" 
              alt="RM TAWSSIL Logo" 
              width={280} 
              height={100}
              style={{ scale: 1.8 , margin: '0px 0px 0px 15px'}}
              className="h-20 sm:h-24 w-auto transform group-hover:scale-105 transition-transform duration-200"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              {t('nav.home')}
            </Link>
            <Link 
              href="/#apropos" 
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              {t('nav.about')}
            </Link>
            <Link 
              href="/#services" 
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              {t('nav.services')}
            </Link>
            <Link 
              href="/#contact" 
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              {t('nav.contact')}
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
                {t('nav.home')}
              </Link>
              <Link 
                href="/#apropos" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 px-4 py-2"
              >
                {t('nav.about')}
              </Link>
              <Link 
                href="/#services" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 px-4 py-2"
              >
                {t('nav.services')}
              </Link>
              <Link 
                href="/#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 px-4 py-2"
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
