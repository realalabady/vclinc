# V Clinic Web Experience (Next.js + TypeScript)

A bilingual (Arabic/English) marketing website for V Clinic built with Next.js 14 (App Router), Tailwind CSS, and TypeScript. The experience reflects the official brand palette (gold, deep teal, off-white, charcoal) and supports RTL/LTR layouts with a language toggle.

## Features

- **Bilingual routing** – `/ar` (default) and `/en` locales with automatic redirect from `/`.
- **Locale-aware layout** – Sticky navigation, hero, highlights, testimonials, and insurance partners adapt to the selected language and direction.
- **Dynamic service pages** – Re-usable page renderer covers About, Departments, Obesity & Endocrine Center, IV Therapy, Consultation Clinics, Programs, Telemedicine, Patient Journey, Insurance, Blog, Contact, and App preview.
- **Accessible UI** – Tailwind utility design with ≥16px body text, focus states, and responsive layout.
- **Brand assets** – Custom SVG logos approximating provided samples in light/dark variations.

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```
   The site is available at [http://localhost:3000](http://localhost:3000). The root route redirects to `/ar`.

3. **Lint the project**
   ```bash
   npm run lint
   ```

4. **Create a production build**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
src/
  app/
    layout.tsx                 # Global styles and metadata
    page.tsx                   # Redirects to default locale (/ar)
    [locale]/                  # Locale-aware routes
      layout.tsx               # Locale validation + direction
      (site)/                  # Marketing site pages
        layout.tsx             # Shared navbar/footer
        page.tsx               # Home
        [page]/page.tsx        # Dynamic service pages (about, telemedicine, …)
  components/                  # Reusable UI components
  data/site-content.ts         # Bilingual copy & structured content
public/logos/                  # SVG brand marks
```

## Localization Notes

- Locale context is provided on the client to drive navigation, CTAs, and RTL styles.
- Content is sourced from `src/data/site-content.ts`, ensuring each section has Arabic and English copy.
- Additional locales can be added by extending the `siteContent` object and Next.js `i18n` config.

## License

This project is provided as implementation scaffolding for V Clinic. Adapt, extend, and integrate it with your production backend, booking, and telemedicine services as needed.
