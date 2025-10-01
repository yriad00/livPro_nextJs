# LivPro - Landing Page

Landing page professionnelle moderne pour service d'envoi de colis Maroc ↔ Allemagne.
Design inspiré de onessta.com avec illustrations 3D et animations.

## 🚀 Technologies

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)

## 📦 Installation

```bash
npm install
```

## 🏃 Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Build

```bash
npm run build
npm start
```

## 🎨 Couleurs de la marque

- **Primaire (Orange)**: `#FF7A00`
- **Secondaire (Marine)**: `#052F5F`
- **Neutre clair**: `#F7F8FA`
- **Neutre foncé**: `#2B2B2B`

## 📄 Structure du projet

```
├── app/
│   ├── layout.tsx          # Layout principal avec SEO
│   ├── page.tsx            # Page d'accueil
│   ├── send/
│   │   └── page.tsx        # Page d'envoi (mock)
│   └── globals.css         # Styles globaux
├── components/
│   ├── Hero.tsx            # Section hero (client)
│   ├── Features.tsx        # Section features (client)
│   ├── HowItWorks.tsx      # Section "Comment ça marche" (client)
│   ├── Benefits.tsx        # Section avantages (client)
│   ├── Testimonials.tsx    # Témoignages clients (client)
│   ├── FAQ.tsx             # Questions fréquentes (client)
│   ├── CTA.tsx             # Call-to-action (client)
│   └── Footer.tsx          # Footer (server)
└── public/                 # Assets statiques
```

## ✨ Fonctionnalités

### SEO Optimisé
- Meta tags complets (title, description, keywords)
- Open Graph pour réseaux sociaux
- Twitter Card
- JSON-LD (Organization + WebPage schema)
- Sitemap et robots.txt ready

### Performance
- Server-Side Rendering (SSR) pour le contenu
- Client-Side animations avec Framer Motion
- Images optimisées
- Preconnect aux fonts Google
- CSS minimal et optimisé

### Accessibilité
- Focus visible sur tous les éléments interactifs
- ARIA labels appropriés
- Contraste des couleurs conforme WCAG
- Navigation au clavier
- HTML sémantique

### Responsive Design
- Mobile-first approach
- Breakpoints optimisés
- Layout adaptatif
- Touch-friendly sur mobile

## 🎯 CTA Principal

Le bouton **"Envoyez votre colis"** apparaît :
1. Dans la section Hero (au-dessus de la ligne de flottaison)
2. Dans la section CTA (avant le footer)

Les deux redirigent vers `/send`.

## 📱 Pages

### Page d'accueil (`/`)
- Hero avec illustration
- 3 Features principales
- Comment ça marche (3 étapes)
- Nos engagements (3 bénéfices)
- Témoignages clients (2)
- FAQ (4 questions)
- CTA final
- Footer complet

### Page d'envoi (`/send`)
- Titre "Page d'envoi (mock)"
- Liste des fonctionnalités à venir
- Bouton "Retour à l'accueil"

## 📊 SEO & Analytics Ready

Le site est prêt pour :
- Google Analytics
- Google Search Console
- Facebook Pixel
- Hotjar
- etc.

Ajoutez simplement vos scripts dans `app/layout.tsx`.

## 🌐 Déploiement

Le site est prêt pour être déployé sur :
- **Vercel** (recommandé)
- **Netlify**
- **AWS Amplify**
- Tout autre plateforme supportant Next.js

## 📝 Personnalisation

Pour personnaliser la marque, modifiez :
- `BRAND_NAME` dans `app/layout.tsx`
- Couleurs dans `tailwind.config.ts`
- Contenu texte dans chaque composant
- Images dans `/public/`

## 🔒 Environnement

Créez un fichier `.env.local` pour vos variables d'environnement :

```env
NEXT_PUBLIC_SITE_URL=https://votredomaine.com
NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X
```

## 📞 Support

Pour toute question : contact@livpro.com

---

Développé avec ❤️ pour LivPro
