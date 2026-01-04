# V Clinic - AI Coding Agent Instructions

## Project Overview
Bilingual (Arabic/English) marketing website for V Clinic using **React + Vite + TypeScript + Tailwind CSS**. Supports RTL/LTR layouts with locale-based routing.

## Architecture

### Routing Pattern
- Root `/` redirects to `/ar` (default locale)
- Routes: `/:locale` and `/:locale/:page` via React Router
- `LocaleBoundary` validates locale and wraps content with `LocaleProvider`
- Add new pages in [GenericPage.tsx](src/routes/GenericPage.tsx) `slugToKey` map

### Localization Flow
1. `LocaleProvider` sets `lang` and `dir` attributes on `<html>` and `<body>`
2. All content sourced from [site-content.ts](src/data/site-content.ts) keyed by `'ar' | 'en'`
3. Use `useLocale()` hook to access `{ locale, isArabic, toggleHref }`

### Content Structure
```typescript
// src/data/site-content.ts
siteContent[locale].navigation  // NavItem[]
siteContent[locale].hero        // HeroContent
siteContent[locale].pages.about // PageContent with sections
```

## Brand Colors (Tailwind)
| Token      | Hex       | Usage                    |
|------------|-----------|--------------------------|
| `gold`     | `#E7CDAF` | Accents, CTAs, borders   |
| `deep`     | `#1E363A` | Primary text, buttons    |
| `offwhite` | `#F8F5F0` | Page backgrounds         |
| `charcoal` | `#2B2B2B` | Body text                |

## Key Conventions

### Component Patterns
- Components use `useLocale()` for bilingual content
- Inline locale-specific text: `{locale === 'ar' ? 'عربي' : 'English'}`
- Layout classes: `container-section`, `card`, `section-title` (defined in [index.css](src/index.css))

### RTL Support
- RTL overrides in `index.css` for directional utilities
- Avoid hardcoded `left/right`; prefer `start/end` logical properties
- Test both `/ar` (RTL) and `/en` (LTR) routes

### Adding New Pages
1. Add content to `siteContent[locale].pages.newPage` in [site-content.ts](src/data/site-content.ts)
2. Add slug mapping in [GenericPage.tsx](src/routes/GenericPage.tsx): `'new-page': 'newPage'`
3. Add nav link in `siteContent[locale].navigation`

## Commands
```bash
npm run dev      # Start dev server (localhost:5173)
npm run build    # TypeScript check + Vite production build
npm run preview  # Preview production build
```

## File Structure
```
src/
├── components/   # Reusable UI (navbar, hero, footer, etc.)
├── data/         # site-content.ts - ALL bilingual copy
├── lib/          # locales.ts - Locale type utilities
├── routes/       # Page components and layout wrappers
```
