'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'fr' | 'ar' | 'de'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr')

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && ['fr', 'ar', 'de'].includes(savedLang)) {
      setLanguage(savedLang)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
    // Update HTML dir attribute for RTL support
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['fr'][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Hero
    'hero.title': 'Envoyez facilement vos colis — Maroc ↔ Europe',
    'hero.subtitle': 'La meilleure solution pour vos envois internationaux. Simple, rapide et sécurisé.',
    'hero.sendButton': 'Envoyez votre colis',
    
    // Navbar
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.send': 'Envoyer un colis',
    
    // Stats
    'stats.parcels': 'Colis livrés',
    'stats.clients': 'Clients satisfaits',
    'stats.countries': 'Pays desservis',
    'stats.support': 'Support 24/7',
    
    // Features
    'features.title': 'Nos Services',
    'features.subtitle': 'Solutions de livraison adaptées',
    'features.description': 'Une solution complète pour vos envois entre le Maroc et l\'Europe',
    'features.pricing.title': 'Estimation instantanée des tarifs',
    'features.pricing.desc': 'Obtenez un prix en temps réel selon poids & destination.',
    'features.tracking.title': 'Suivi simplifié étape par étape',
    'features.tracking.desc': 'Notifications e-mail & SMS, historique complet.',
    'features.payment.title': 'Paiement sécurisé sur place',
    'features.payment.desc': 'Payez en toute sécurité lors de la livraison ou au point de retrait.',
    'features.sendButton': 'Envoyez votre colis',
    
    // About
    'about.tag': 'Qui sommes-nous',
    'about.title': 'À propos de RM TAWSSIL',
    'about.subtitle': 'Votre partenaire de confiance pour l\'envoi de colis entre le Maroc et l\'Europe',
    'about.mission': 'Notre mission',
    'about.values': 'Nos valeurs',
    'about.mission1.title': 'Connexion internationale',
    'about.mission1.desc': 'RM TAWSSIL est né de la volonté de faciliter les envois de colis entre le Maroc et l\'Europe. Nous comprenons l\'importance de rester connecté avec vos proches et de recevoir vos colis en toute sécurité.',
    'about.mission2.title': 'Simplicité & Transparence',
    'about.mission2.desc': 'Notre plateforme simplifie le processus d\'envoi en offrant une interface intuitive, des tarifs transparents et un suivi en temps réel de vos colis.',
    'about.mission3.title': 'Service personnalisé',
    'about.mission3.desc': 'Avec une équipe basée au Maroc et en Europe, nous assurons un service personnalisé et multilingue (français, allemand, arabe) pour répondre à tous vos besoins.',
    'about.value1.title': 'Transparence',
    'about.value1.desc': 'Tarifs clairs sans frais cachés',
    'about.value2.title': 'Fiabilité',
    'about.value2.desc': 'Livraison sécurisée et ponctuelle',
    'about.value3.title': 'Support client',
    'about.value3.desc': 'Assistance disponible et réactive',
    'about.value4.title': 'Innovation',
    'about.value4.desc': 'Technologie moderne et simple d\'utilisation',
    
    // Testimonials
    'testimonials.tag': 'Témoignages',
    'testimonials.title': 'Ils nous font confiance',
    'testimonials.subtitle': 'Découvrez les retours d\'expérience de nos clients',
    'testimonials.1.text': 'Service impeccable ! J\'ai envoyé des cadeaux à ma famille en Europe et tout est arrivé en parfait état. Le suivi en temps réel m\'a vraiment rassurée.',
    'testimonials.2.text': 'Enfin une solution simple et transparente pour recevoir mes colis du Maroc. Les tarifs sont clairs et le service client très réactif. Je recommande vivement !',
    
    // FAQ
    'faq.title': 'Questions fréquentes',
    'faq.subtitle': 'Tout ce que vous devez savoir sur nos services',
    'faq.q1': 'Quels documents sont nécessaires pour la douane ?',
    'faq.a1': 'Pour les envois internationaux entre le Maroc et l\'Europe, vous devez fournir une facture commerciale détaillée et une déclaration en douane. Nous vous guidons pas à pas lors de la création de votre envoi pour compléter facilement tous les documents requis.',
    'faq.q2': 'Quels sont les délais de livraison ?',
    'faq.a2': 'Les délais standards sont de 5 à 7 jours ouvrés entre Casablanca et l\'Europe. Des options express sont disponibles pour une livraison en 2-3 jours. Les délais peuvent varier selon les procédures douanières.',
    'faq.q3': 'Proposez-vous une assurance pour les colis ?',
    'faq.a3': 'Oui, une assurance de base est incluse dans tous nos envois (couverture jusqu\'à 100€). Vous pouvez souscrire une assurance complémentaire lors de la création de votre envoi pour des valeurs supérieures.',
    'faq.q4': 'Puis-je annuler ou modifier mon envoi ?',
    'faq.a4': 'Vous pouvez annuler ou modifier votre envoi gratuitement jusqu\'à 24h après la création. Passé ce délai, des frais peuvent s\'appliquer selon l\'état de traitement. Contactez notre service client pour toute demande.',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Notre équipe est à votre disposition pour répondre à toutes vos questions',
    'contact.form.title': 'Envoyez-nous un message',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Téléphone',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer le message',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.address': 'Adresse',
    'contact.support': 'Support multilingue disponible en',
    'contact.french': 'Français',
    'contact.german': 'Allemand',
    'contact.arabic': 'Arabe',
    
    // Footer
    'footer.description': 'Votre partenaire de confiance pour vos envois entre le Maroc et l\'Europe.',
    'footer.services': 'Services',
    'footer.legal': 'Légal',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
  },
  ar: {
    // Hero
    'hero.title': 'أرسل طرودك بسهولة — المغرب ↔ أوروبا',
    'hero.subtitle': 'أفضل حل لشحناتك الدولية. بسيط وسريع وآمن.',
    'hero.sendButton': 'أرسل طردك',
    
    // Navbar
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'nav.send': 'إرسال طرد',
    
    // Stats
    'stats.parcels': 'الطرود المسلمة',
    'stats.clients': 'عملاء راضون',
    'stats.countries': 'البلدان المخدومة',
    'stats.support': 'دعم 24/7',
    
    // Features
    'features.title': 'خدماتنا',
    'features.subtitle': 'حلول توصيل مخصصة',
    'features.description': 'حل شامل لشحناتك بين المغرب وأوروبا',
    'features.pricing.title': 'تقدير فوري للأسعار',
    'features.pricing.desc': 'احصل على سعر في الوقت الفعلي حسب الوزن والوجهة.',
    'features.tracking.title': 'تتبع مبسط خطوة بخطوة',
    'features.tracking.desc': 'إشعارات عبر البريد الإلكتروني والرسائل القصيرة، سجل كامل.',
    'features.payment.title': 'دفع آمن في الموقع',
    'features.payment.desc': 'ادفع بأمان عند التسليم أو في نقطة الاستلام.',
    'features.sendButton': 'أرسل طردك',
    
    // About
    'about.tag': 'من نحن',
    'about.title': 'حول RM TAWSSIL',
    'about.subtitle': 'شريكك الموثوق لإرسال الطرود بين المغرب وأوروبا',
    'about.mission': 'مهمتنا',
    'about.values': 'قيمنا',
    'about.mission1.title': 'اتصال دولي',
    'about.mission1.desc': 'ولدت RM TAWSSIL من الرغبة في تسهيل إرسال الطرود بين المغرب وأوروبا. نحن نفهم أهمية البقاء على اتصال مع أحبائك واستلام طرودك بأمان.',
    'about.mission2.title': 'البساطة والشفافية',
    'about.mission2.desc': 'تبسط منصتنا عملية الإرسال من خلال تقديم واجهة بديهية وأسعار شفافة وتتبع في الوقت الفعلي لطرودك.',
    'about.mission3.title': 'خدمة شخصية',
    'about.mission3.desc': 'مع فريق مقره في المغرب وأوروبا، نضمن خدمة شخصية ومتعددة اللغات (الفرنسية والألمانية والعربية) لتلبية جميع احتياجاتك.',
    'about.value1.title': 'الشفافية',
    'about.value1.desc': 'أسعار واضحة بدون رسوم خفية',
    'about.value2.title': 'الموثوقية',
    'about.value2.desc': 'تسليم آمن وفي الوقت المحدد',
    'about.value3.title': 'دعم العملاء',
    'about.value3.desc': 'مساعدة متاحة ومتجاوبة',
    'about.value4.title': 'الابتكار',
    'about.value4.desc': 'تكنولوجيا حديثة وسهلة الاستخدام',
    
    // Testimonials
    'testimonials.tag': 'الشهادات',
    'testimonials.title': 'يثقون بنا',
    'testimonials.subtitle': 'اكتشف تجارب عملائنا',
    'testimonials.1.text': 'خدمة لا تشوبها شائبة! أرسلت هدايا لعائلتي في أوروبا ووصل كل شيء في حالة ممتازة. التتبع في الوقت الفعلي طمأنني حقًا.',
    'testimonials.2.text': 'أخيرًا حل بسيط وشفاف لاستلام طرودي من المغرب. الأسعار واضحة وخدمة العملاء سريعة الاستجابة. أوصي بشدة!',
    
    // FAQ
    'faq.title': 'الأسئلة الشائعة',
    'faq.subtitle': 'كل ما تحتاج لمعرفته حول خدماتنا',
    'faq.q1': 'ما هي المستندات المطلوبة للجمارك؟',
    'faq.a1': 'للشحنات الدولية بين المغرب وأوروبا، يجب عليك تقديم فاتورة تجارية مفصلة وإقرار جمركي. نرشدك خطوة بخطوة عند إنشاء شحنتك لإكمال جميع المستندات المطلوبة بسهولة.',
    'faq.q2': 'ما هي مواعيد التسليم؟',
    'faq.a2': 'المواعيد القياسية هي من 5 إلى 7 أيام عمل بين الدار البيضاء وأوروبا. تتوفر خيارات سريعة للتسليم في 2-3 أيام. قد تختلف المواعيد حسب الإجراءات الجمركية.',
    'faq.q3': 'هل تقدمون تأمينًا للطرود؟',
    'faq.a3': 'نعم، يتم تضمين تأمين أساسي في جميع شحناتنا (تغطية تصل إلى 100 يورو). يمكنك الاشتراك في تأمين إضافي عند إنشاء شحنتك للقيم الأعلى.',
    'faq.q4': 'هل يمكنني إلغاء أو تعديل شحنتي؟',
    'faq.a4': 'يمكنك إلغاء أو تعديل شحنتك مجانًا حتى 24 ساعة بعد الإنشاء. بعد هذه الفترة، قد يتم تطبيق رسوم حسب حالة المعالجة. اتصل بخدمة العملاء لأي طلب.',
    
    // Contact
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'فريقنا في خدمتك للإجابة على جميع أسئلتك',
    'contact.form.title': 'أرسل لنا رسالة',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.phone': 'الهاتف',
    'contact.form.message': 'الرسالة',
    'contact.form.send': 'إرسال الرسالة',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.address': 'العنوان',
    'contact.support': 'دعم متعدد اللغات متاح بـ',
    'contact.french': 'الفرنسية',
    'contact.german': 'الألمانية',
    'contact.arabic': 'العربية',
    
    // Footer
    'footer.description': 'شريكك الموثوق لشحناتك بين المغرب وأوروبا.',
    'footer.services': 'الخدمات',
    'footer.legal': 'قانوني',
    'footer.contact': 'اتصل',
    'footer.rights': 'جميع الحقوق محفوظة.',
  },
  de: {
    // Hero
    'hero.title': 'Versenden Sie Ihre Pakete einfach — Marokko ↔ Europa',
    'hero.subtitle': 'Die beste Lösung für Ihre internationalen Sendungen. Einfach, schnell und sicher.',
    'hero.sendButton': 'Senden Sie Ihr Paket',
    
    // Navbar
    'nav.home': 'Startseite',
    'nav.services': 'Dienstleistungen',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'nav.send': 'Paket senden',
    
    // Stats
    'stats.parcels': 'Zugestellte Pakete',
    'stats.clients': 'Zufriedene Kunden',
    'stats.countries': 'Bediente Länder',
    'stats.support': '24/7 Support',
    
    // Features
    'features.title': 'Unsere Dienstleistungen',
    'features.subtitle': 'Angepasste Lieferlösungen',
    'features.description': 'Eine komplette Lösung für Ihre Sendungen zwischen Marokko und Europa',
    'features.pricing.title': 'Sofortige Tarifschätzung',
    'features.pricing.desc': 'Erhalten Sie einen Echtzeitpreis nach Gewicht & Ziel.',
    'features.tracking.title': 'Vereinfachte Schritt-für-Schritt-Verfolgung',
    'features.tracking.desc': 'E-Mail- & SMS-Benachrichtigungen, vollständiger Verlauf.',
    'features.payment.title': 'Sichere Zahlung vor Ort',
    'features.payment.desc': 'Zahlen Sie sicher bei Lieferung oder an der Abholstelle.',
    'features.sendButton': 'Senden Sie Ihr Paket',
    
    // About
    'about.tag': 'Über uns',
    'about.title': 'Über RM TAWSSIL',
    'about.subtitle': 'Ihr vertrauenswürdiger Partner für den Paketversand zwischen Marokko und Europa',
    'about.mission': 'Unsere Mission',
    'about.values': 'Unsere Werte',
    'about.mission1.title': 'Internationale Verbindung',
    'about.mission1.desc': 'RM TAWSSIL wurde aus dem Wunsch geboren, den Paketversand zwischen Marokko und Europa zu erleichtern. Wir verstehen die Bedeutung, mit Ihren Lieben in Verbindung zu bleiben und Ihre Pakete sicher zu erhalten.',
    'about.mission2.title': 'Einfachheit & Transparenz',
    'about.mission2.desc': 'Unsere Plattform vereinfacht den Versandprozess durch eine intuitive Benutzeroberfläche, transparente Preise und Echtzeit-Tracking Ihrer Pakete.',
    'about.mission3.title': 'Personalisierter Service',
    'about.mission3.desc': 'Mit einem Team in Marokko und Europa gewährleisten wir einen personalisierten und mehrsprachigen Service (Französisch, Deutsch, Arabisch), um all Ihre Bedürfnisse zu erfüllen.',
    'about.value1.title': 'Transparenz',
    'about.value1.desc': 'Klare Preise ohne versteckte Gebühren',
    'about.value2.title': 'Zuverlässigkeit',
    'about.value2.desc': 'Sichere und pünktliche Lieferung',
    'about.value3.title': 'Kundensupport',
    'about.value3.desc': 'Verfügbare und reaktionsschnelle Unterstützung',
    'about.value4.title': 'Innovation',
    'about.value4.desc': 'Moderne und einfach zu bedienende Technologie',
    
    // Testimonials
    'testimonials.tag': 'Erfahrungsberichte',
    'testimonials.title': 'Sie vertrauen uns',
    'testimonials.subtitle': 'Entdecken Sie die Erfahrungen unserer Kunden',
    'testimonials.1.text': 'Einwandfreier Service! Ich habe Geschenke an meine Familie in Europa geschickt und alles kam in perfektem Zustand an. Das Echtzeit-Tracking hat mich wirklich beruhigt.',
    'testimonials.2.text': 'Endlich eine einfache und transparente Lösung, um meine Pakete aus Marokko zu erhalten. Die Preise sind klar und der Kundenservice sehr reaktionsschnell. Ich empfehle es wärmstens!',
    
    // FAQ
    'faq.title': 'Häufig gestellte Fragen',
    'faq.subtitle': 'Alles, was Sie über unsere Dienstleistungen wissen müssen',
    'faq.q1': 'Welche Dokumente sind für den Zoll erforderlich?',
    'faq.a1': 'Für internationale Sendungen zwischen Marokko und Europa müssen Sie eine detaillierte Handelsrechnung und eine Zollerklärung vorlegen. Wir führen Sie Schritt für Schritt bei der Erstellung Ihrer Sendung, um alle erforderlichen Dokumente einfach auszufüllen.',
    'faq.q2': 'Wie lange dauert die Lieferung?',
    'faq.a2': 'Die Standardlaufzeiten betragen 5 bis 7 Werktage zwischen Casablanca und Europa. Express-Optionen sind für eine Lieferung in 2-3 Tagen verfügbar. Die Laufzeiten können je nach Zollverfahren variieren.',
    'faq.q3': 'Bieten Sie eine Versicherung für Pakete an?',
    'faq.a3': 'Ja, eine Grundversicherung ist in allen unseren Sendungen enthalten (Deckung bis zu 100 €). Sie können bei der Erstellung Ihrer Sendung eine zusätzliche Versicherung für höhere Werte abschließen.',
    'faq.q4': 'Kann ich meine Sendung stornieren oder ändern?',
    'faq.a4': 'Sie können Ihre Sendung bis zu 24 Stunden nach der Erstellung kostenlos stornieren oder ändern. Nach dieser Frist können je nach Bearbeitungsstatus Gebühren anfallen. Kontaktieren Sie unseren Kundenservice für jede Anfrage.',
    
    // Contact
    'contact.title': 'Kontaktieren Sie uns',
    'contact.subtitle': 'Unser Team steht Ihnen zur Verfügung, um alle Ihre Fragen zu beantworten',
    'contact.form.title': 'Senden Sie uns eine Nachricht',
    'contact.form.name': 'Vollständiger Name',
    'contact.form.email': 'E-Mail',
    'contact.form.phone': 'Telefon',
    'contact.form.message': 'Nachricht',
    'contact.form.send': 'Nachricht senden',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.address': 'Adresse',
    'contact.support': 'Mehrsprachiger Support verfügbar in',
    'contact.french': 'Französisch',
    'contact.german': 'Deutsch',
    'contact.arabic': 'Arabisch',
    
    // Footer
    'footer.description': 'Ihr vertrauenswürdiger Partner für Ihre Sendungen zwischen Marokko und Europa.',
    'footer.services': 'Dienstleistungen',
    'footer.legal': 'Rechtliches',
    'footer.contact': 'Kontakt',
    'footer.rights': 'Alle Rechte vorbehalten.',
  }
}
