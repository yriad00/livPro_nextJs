# Guide de Traduction Multilingue

## 🌍 Langues Supportées

Le site supporte 3 langues :
- **Français (FR)** 🇫🇷 - Langue par défaut
- **Arabe (AR)** 🇲🇦 - Support RTL (Right-to-Left)
- **Allemand (DE)** 🇩🇪

## 📍 Sélecteur de Langue

Le sélecteur de langue est disponible dans :
- **Navbar** (Desktop & Mobile)
- Visible en haut à droite de la page

## 🔧 Comment Utiliser

### Dans un Composant

```tsx
import { useLanguage } from '@/contexts/LanguageContext'

export default function MyComponent() {
  const { t, language } = useLanguage()
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>Langue actuelle: {language}</p>
    </div>
  )
}
```

### Ajouter de Nouvelles Traductions

Éditez le fichier `contexts/LanguageContext.tsx` :

```typescript
const translations: Record<Language, Record<string, string>> = {
  fr: {
    'new.key': 'Texte en français',
  },
  ar: {
    'new.key': 'النص بالعربية',
  },
  de: {
    'new.key': 'Text auf Deutsch',
  }
}
```

## 🎨 Support RTL pour l'Arabe

Le système gère automatiquement la direction du texte :
- **LTR** (Left-to-Right) pour FR et DE
- **RTL** (Right-to-Left) pour AR

L'attribut `dir` du HTML est automatiquement mis à jour lors du changement de langue.

## 💾 Persistance

La langue sélectionnée est sauvegardée dans le `localStorage` et restaurée automatiquement lors des visites suivantes.

## 📝 Clés de Traduction Disponibles

### Navigation
- `nav.home` - Accueil
- `nav.services` - Services
- `nav.about` - À propos
- `nav.contact` - Contact

### Hero
- `hero.title` - Titre principal
- `hero.subtitle` - Sous-titre
- `hero.sendButton` - Bouton d'envoi

### Features
- `features.title` - Titre de la section
- `features.subtitle` - Sous-titre
- `features.description` - Description
- `features.pricing.title` - Titre tarification
- `features.tracking.title` - Titre suivi
- `features.payment.title` - Titre paiement

### About
- `about.tag` - Tag de section
- `about.title` - Titre
- `about.subtitle` - Sous-titre
- `about.mission` - Notre mission
- `about.values` - Nos valeurs

### Testimonials
- `testimonials.tag` - Tag
- `testimonials.title` - Titre
- `testimonials.subtitle` - Sous-titre

### FAQ
- `faq.title` - Titre
- `faq.subtitle` - Sous-titre
- `faq.q1` à `faq.q4` - Questions
- `faq.a1` à `faq.a4` - Réponses

### Contact
- `contact.title` - Titre
- `contact.subtitle` - Sous-titre
- `contact.form.*` - Champs du formulaire

### Footer
- `footer.description` - Description
- `footer.services` - Services
- `footer.legal` - Légal
- `footer.contact` - Contact

## 🚀 Prochaines Étapes

Pour compléter la traduction du site :

1. Mettre à jour les composants restants pour utiliser `t()`
2. Ajouter les traductions manquantes dans `LanguageContext.tsx`
3. Tester chaque langue pour vérifier l'affichage
4. Ajuster le CSS si nécessaire pour le RTL (arabe)
