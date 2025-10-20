'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

interface FormData {
  senderName: string
  senderPhone: string
  senderEmail: string
  senderAddress: string
  senderPostalCode: string
  senderCity: string
  senderCountry: 'maroc' | 'allemagne' | ''
  receiverName: string
  receiverPhone: string
  receiverEmail: string
  receiverAddress: string
  receiverPostalCode: string
  receiverCity: string
  receiverCountry: 'maroc' | 'allemagne' | ''
}

export default function SendPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    senderName: '', senderPhone: '', senderEmail: '', senderAddress: '', senderPostalCode: '', senderCity: '', senderCountry: '',
    receiverName: '', receiverPhone: '', receiverEmail: '', receiverAddress: '', receiverPostalCode: '', receiverCity: '', receiverCountry: ''
  })

  const steps = [
    { number: 1, title: 'Expéditeur', icon: '👤' },
    { number: 2, title: 'Destinataire', icon: '🎯' },
    { number: 3, title: 'Récapitulatif', icon: '📋' }
  ]

  const updateFormData = (field: keyof FormData, value: string) => {
    const newFormData = { ...formData, [field]: value }
    setFormData(newFormData)
  }

  const nextStep = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  useEffect(() => {
    const el = document.getElementById(`step-${currentStep}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }, [currentStep])

  const handleSubmit = async () => {
    if (!formData.senderName || !formData.receiverName) {
      Swal.fire({
        icon: 'error',
        title: 'Informations manquantes',
        text: 'Veuillez remplir tous les champs obligatoires',
        confirmButtonColor: '#FF7A00'
      })
      return
    }

    const result = await Swal.fire({
      title: 'Confirmer votre envoi ?',
      html: `
        <div class="text-left space-y-2">
          <p><strong>Expéditeur:</strong> ${formData.senderName}</p>
          <p><strong>Destinataire:</strong> ${formData.receiverName}</p>
        </div>
      `,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#FF7A00',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Oui, envoyer !',
      cancelButtonText: 'Modifier'
    })

    if (result.isConfirmed) {
      Swal.fire({
        title: 'Traitement en cours...',
        text: 'Nous enregistrons votre demande d\'envoi',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        }
      })

      setTimeout(() => {
        Swal.fire({
          icon: 'success',
          title: 'Demande enregistrée !',
          html: `
            <div class="space-y-3">
              <p>Votre demande d'envoi a été enregistrée avec succès.</p>
              <p><strong>Numéro de référence:</strong> LIV${Date.now().toString().slice(-6)}</p>
              <p class="text-sm text-gray-600">Nous vous contacterons sous 24h pour finaliser votre envoi.</p>
            </div>
          `,
          confirmButtonColor: '#FF7A00',
          confirmButtonText: 'Parfait !'
        }).then(() => {
          setCurrentStep(1)
          router.push('/')
        })
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-light to-white">
      <div className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
          <div className="flex items-center justify-between">
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
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="hidden sm:inline">Retour à l&apos;accueil</span>
                <span className="sm:hidden">Accueil</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="relative overflow-x-auto">
            <div className="flex items-center justify-between min-w-[720px] md:min-w-0 px-2">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {steps.map((step) => (
              <div id={`step-${step.number}`} key={step.number} className="flex flex-col items-center relative z-10">
                <div 
                  onClick={() => {
                    if (step.number < currentStep) {
                      setCurrentStep(step.number)
                    }
                  }}
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg md:text-2xl font-bold transition-all duration-300 ${
                    currentStep === step.number
                      ? 'bg-primary text-white shadow-lg scale-110'
                      : currentStep > step.number
                      ? 'bg-green-500 text-white cursor-pointer hover:scale-105'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {currentStep > step.number ? (
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    step.icon
                  )}
                </div>
                
                <div className="mt-2 md:mt-3 text-center">
                  <div className={`font-semibold transition-colors ${
                    currentStep >= step.number ? 'text-primary' : 'text-gray-500'
                  }`}>
                    <span className="text-xs sm:text-sm">{step.title}</span>
                  </div>
                  <div className="text-[10px] md:text-xs text-gray-400 mt-1">
                    Étape {step.number}
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="order-2 lg:order-1 lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:sticky top-8">
              <div className="mt-6">
                <h4 className="font-semibold text-secondary mb-3">Progression</h4>
                <div className="space-y-2">
                  {steps.map((step) => (
                    <div key={step.number} className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${
                        currentStep > step.number ? 'bg-green-500' :
                        currentStep === step.number ? 'bg-primary' : 'bg-gray-200'
                      }`} />
                      <span className={`text-sm ${
                        currentStep >= step.number ? 'text-gray-800' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">💡 Conseil</h4>
                <p className="text-sm text-blue-700">
                  {currentStep === 1 && "Vérifiez bien vos informations personnelles"}
                  {currentStep === 2 && "Assurez-vous que l'adresse du destinataire est correcte"}
                  {currentStep === 3 && "Vérifiez toutes les informations avant de confirmer"}
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-3">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8"
            >
              {currentStep === 1 && (
                <div>
                  <h1 className="text-3xl font-bold text-secondary mb-6">👤 Informations de l&apos;expéditeur</h1>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                      <input
                        type="text"
                        value={formData.senderName}
                        onChange={(e) => updateFormData('senderName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Votre nom et prénom"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                      <input
                        type="tel"
                        value={formData.senderPhone}
                        onChange={(e) => updateFormData('senderPhone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+212 6XX XXX XXX"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        value={formData.senderEmail}
                        onChange={(e) => updateFormData('senderEmail', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pays *</label>
                      <select
                        value={formData.senderCountry}
                        onChange={(e) => updateFormData('senderCountry', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      >
                        <option value="">Sélectionnez un pays</option>
                        <option value="maroc">🇲🇦 Maroc</option>
                        <option value="allemagne">🇩🇪 Allemagne</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Adresse complète *</label>
                      <input
                        type="text"
                        value={formData.senderAddress}
                        onChange={(e) => updateFormData('senderAddress', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Numéro, rue, quartier..."
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Code postal *</label>
                      <input
                        type="text"
                        value={formData.senderPostalCode}
                        onChange={(e) => updateFormData('senderPostalCode', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="20000"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ville *</label>
                      <input
                        type="text"
                        value={formData.senderCity}
                        onChange={(e) => updateFormData('senderCity', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Casablanca"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <h1 className="text-3xl font-bold text-secondary mb-6">🎯 Informations du destinataire</h1>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                      <input
                        type="text"
                        value={formData.receiverName}
                        onChange={(e) => updateFormData('receiverName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Nom du destinataire"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                      <input
                        type="tel"
                        value={formData.receiverPhone}
                        onChange={(e) => updateFormData('receiverPhone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+49 XXX XXX XXXX"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={formData.receiverEmail}
                        onChange={(e) => updateFormData('receiverEmail', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="email@destinataire.com (optionnel)"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pays *</label>
                      <select
                        value={formData.receiverCountry}
                        onChange={(e) => updateFormData('receiverCountry', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      >
                        <option value="">Sélectionnez un pays</option>
                        <option value="maroc">🇲🇦 Maroc</option>
                        <option value="allemagne">🇩🇪 Allemagne</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Adresse complète *</label>
                      <input
                        type="text"
                        value={formData.receiverAddress}
                        onChange={(e) => updateFormData('receiverAddress', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Adresse de livraison"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Code postal *</label>
                      <input
                        type="text"
                        value={formData.receiverPostalCode}
                        onChange={(e) => updateFormData('receiverPostalCode', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="10115"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ville *</label>
                      <input
                        type="text"
                        value={formData.receiverCity}
                        onChange={(e) => updateFormData('receiverCity', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Berlin"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <h1 className="text-3xl font-bold text-secondary mb-6">📋 Récapitulatif de votre envoi</h1>
                  
                  <div className="grid md:grid-cols-1 gap-8">
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          👤 Expéditeur
                        </h3>
                        <div className="text-sm space-y-1">
                          <div><strong>{formData.senderName}</strong></div>
                          <div>{formData.senderPhone}</div>
                          <div>{formData.senderEmail}</div>
                          <div>{formData.senderAddress}</div>
                          <div>{formData.senderPostalCode} {formData.senderCity}</div>
                          <div>{formData.senderCountry === 'maroc' ? '🇲🇦 Maroc' : '🇩🇪 Allemagne'}</div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          🎯 Destinataire
                        </h3>
                        <div className="text-sm space-y-1">
                          <div><strong>{formData.receiverName}</strong></div>
                          <div>{formData.receiverPhone}</div>
                          {formData.receiverEmail && <div>{formData.receiverEmail}</div>}
                          <div>{formData.receiverAddress}</div>
                          <div>{formData.receiverPostalCode} {formData.receiverCity}</div>
                          <div>{formData.receiverCountry === 'maroc' ? '🇲🇦 Maroc' : '🇩🇪 Allemagne'}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mt-8 pt-6 border-t">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`w-full sm:w-auto px-6 py-3 rounded-lg font-semibold transition-all ${
                    currentStep === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  ← Précédent
                </button>

                <div className="text-center sm:text-left text-sm text-gray-500">
                  Étape {currentStep} sur {steps.length}
                </div>

                {currentStep < steps.length ? (
                  <button
                    onClick={nextStep}
                    className="w-full sm:w-auto px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all"
                  >
                    Suivant →
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="w-full sm:w-auto px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all"
                  >
                    Confirmer l&apos;envoi ✓
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
