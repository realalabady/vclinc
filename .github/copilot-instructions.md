# V Clinic - AI Coding Agent Instructions

## Project Overview
Bilingual (Arabic/English) medical clinic platform with **React + Vite + TypeScript + Tailwind CSS + Firebase**. Features marketing pages, patient portal, telemedicine, and admin dashboard. Supports RTL/LTR layouts.

## Architecture

### Routing Hierarchy (`App.tsx`)
```
/                          → Redirects to /ar
/:locale                   → LocaleBoundary validates ar|en
  ├── index               → LocaleHomePage (marketing)
  ├── login               → LoginPage (standalone, no navbar)
  ├── dashboard           → PatientDashboard (protected, patient role)
  │   ├── telemedicine    → TelemedicineConsult
  │   └── profile         → ProfilePage
  ├── admin               → AdminDashboard (protected, admin role)
  └── :page               → GenericPage (about, departments, etc.)
```

### Layout System
- `LocaleBoundary` → validates locale, decides layout via `STANDALONE_PAGES` array
- Marketing pages → wrapped with `SiteLayout` (navbar + footer)
- Auth/dashboard pages → standalone (no shared layout)

### Authentication & Authorization (`lib/auth-context.tsx`)
- Firebase Auth + Firestore for user profiles
- Roles: `'patient' | 'admin'` stored in Firestore `/users/{uid}`
- Admin emails hardcoded in `ADMIN_EMAILS` array
- Use `<ProtectedRoute requiredRole="patient|admin">` for guarded routes
- Hook: `useAuth()` → `{ user, isAuthenticated, login, register, logout }`

### Localization Flow
1. `LocaleProvider` sets `lang`/`dir` on `<html>` and `<body>`
2. Content from `siteContent[locale]` in [site-content.ts](src/data/site-content.ts)
3. Hook: `useLocale()` → `{ locale, isArabic, toggleHref }`
4. Inline pattern: `{isArabic ? 'عربي' : 'English'}`

## Brand Colors (Tailwind)
| Token      | Hex       | Usage                    |
|------------|-----------|--------------------------|
| `gold`     | `#E7CDAF` | Accents, CTAs, borders   |
| `deep`     | `#1E363A` | Primary buttons, headers |
| `offwhite` | `#F8F5F0` | Page backgrounds         |
| `charcoal` | `#2B2B2B` | Body text                |

## Key Conventions

### Component Patterns
- Marketing components: use `useLocale()`, content from `site-content.ts`
- Dashboard components: use `useAuth()` + `useLocale()`, may have local state
- CSS utilities: `container-section`, `card`, `section-title` ([index.css](src/index.css))
- Font: `font-expo` (Expo Arabic + fallbacks)

### RTL Support
- RTL overrides in `index.css` for directional utilities
- Avoid `left/right`; use `start/end` logical properties
- Test both `/ar` (RTL) and `/en` (LTR) routes

### Adding New Marketing Pages
1. Add content to `siteContent[locale].pages.newPage` in [site-content.ts](src/data/site-content.ts)
2. Add slug mapping in [GenericPage.tsx](src/routes/GenericPage.tsx): `'new-page': 'newPage'`
3. Add nav link in `siteContent[locale].navigation`

### Adding Protected Routes
1. Create route component in `src/routes/`
2. Add to `App.tsx` wrapped with `<ProtectedRoute requiredRole="...">` 
3. If standalone (no navbar): add to `STANDALONE_PAGES` in [LocaleBoundary.tsx](src/routes/LocaleBoundary.tsx)

## Commands
```bash
npm run dev      # Vite dev server (localhost:5173)
npm run build    # tsc && vite build
npm run preview  # Preview production build
```

## File Structure
```
src/
├── components/   # UI: navbar, hero, footer, protected-route, locale-provider
├── data/         # site-content.ts - ALL bilingual marketing copy
├── lib/          # auth-context.tsx, firebase.ts, locales.ts
├── routes/       # Page components (LocaleBoundary, GenericPage, dashboards)
```

## Firebase Integration
- Config: `lib/firebase.ts` (auth + db exports)
- Firestore collections: `users` (profiles with role field)
- Rules: `firestore.rules` (root level)
