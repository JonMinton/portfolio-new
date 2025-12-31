# Portfolio Website - Project Documentation

## Overview

A personal portfolio website for Jon Minton, a statistician/data scientist. Built with React to showcase professional background, publications, and projects.

**Live site:** https://jonminton.net

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18.2 (Create React App) |
| Routing | React Router v6 |
| Styling | Vanilla CSS with BEM methodology + CSS variables |
| Icons | FontAwesome |
| Responsiveness | `react-responsive` hooks |
| Deployment | Netlify (auto-deploys from GitHub) |

## Project Structure

```
portfolio-new/
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Header.js       # Sticky nav with contact links
│   │   ├── Footer.js       # Sticky footer (responsive)
│   │   ├── Nav.js          # Main navigation menu
│   │   ├── BigHero.js      # Full-screen intro on home page
│   │   ├── Hero.js         # Section header for other pages
│   │   ├── AppProfile.js   # Project showcase card
│   │   ├── EmpEdItem.js    # Employment/education entry
│   │   ├── PublicationItem.js  # Publication entry
│   │   ├── LinkBox.js      # Icon-based external links
│   │   └── HeadingLinkback.js  # Section heading with nav arrows
│   ├── pages/              # Page components
│   │   ├── Home.js         # Landing page with animated intro
│   │   ├── EmpEd.js        # Employment & Education timeline
│   │   ├── Outputs.js      # Publications list
│   │   ├── OtherApps.js    # Portfolio of projects
│   │   ├── Contact.js      # Contact information
│   │   ├── About.js        # About page (route commented out)
│   │   └── Whoops404.js    # 404 error page
│   ├── css/                # Stylesheets
│   │   └── index.css       # Main styles (CSS variables, BEM)
│   ├── local-json/         # Data files
│   │   ├── publications.json
│   │   └── education-and-employment.json
│   ├── img/                # Image assets
│   ├── App.js              # Root component with routing
│   └── index.js            # React entry point
├── public/                 # Static assets
├── build/                  # Production build output
└── package.json
```

## Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | `<Home>` | Landing page with animated intro |
| `/history` | `<EmpEd>` | Employment and Education timeline |
| `/outputs` | `<Outputs>` | Scientific publications list |
| `/apps` | `<OtherApps>` | Portfolio of projects |
| `/contact` | `<Contact>` | Contact information |
| `*` | `<Whoops404>` | 404 error page |

Note: `/about` route is now active but the page needs content

## Data Management

Content is managed via JSON files in `src/local-json/`:

### publications.json
Array of publication objects with fields:
- `id`, `authors`, `year`, `title`, `journal`, `url`, `pages`, `volume`, `issue`

### education-and-employment.json
Array of career entries with fields:
- `id`, `place`, `role`, `years` (array of [startYear, endYear]), `activities` (array of strings)

## Styling

- CSS variables defined in `:root` for colors, fonts, spacing
- BEM naming convention (e.g., `.header__contacts`, `.bigHero__h1`)
- Responsive breakpoints: 700px (mobile), 600px (footer)
- Media queries handled via `react-responsive` hooks in components

## Deployment

**Platform:** Netlify (connected to GitHub)

**Workflow:**
```bash
git add .
git commit -m "description"
git push origin main    # Triggers auto-deploy
```

**Build settings (configured in Netlify dashboard):**
- Build command: `npm run build`
- Publish directory: `build`

## Development

```bash
npm install     # Install dependencies
npm start       # Development server (localhost:3000)
npm run build   # Production build
npm test        # Run tests
```

## Adding Content

### New Publication
Add object to `src/local-json/publications.json`:
```json
{
  "id": 21,
  "authors": "Author names",
  "year": 2024,
  "title": "Publication title",
  "journal": "Journal name",
  "url": "https://...",
  "pages": "1-10",
  "volume": "1",
  "issue": "1"
}
```

### New Job/Education
Add object to `src/local-json/education-and-employment.json`:
```json
{
  "id": 13,
  "place": "Organization name",
  "role": "Job title",
  "years": [2024, 2025],
  "activities": ["Activity 1", "Activity 2"]
}
```

### New Project Card
Add `<AppProfile>` component in `src/pages/OtherApps.js`

### New Page
1. Create component in `src/pages/`
2. Add route in `src/App.js`

## Hosting Sub-Applications

The site is a single-page React app on Netlify (static hosting only). This affects how additional applications (Python Dash, R Shiny, etc.) can be integrated.

### Option A: Subdomains (Recommended for Simplicity)

Host separate apps on subdomains:
- `jonminton.net` → React portfolio (Netlify)
- `dash.jonminton.net` → Python Dash app (Render, Railway, Heroku)
- `shiny.jonminton.net` → R Shiny app (shinyapps.io)

**Setup:**
1. Deploy app to a platform that supports its runtime (e.g., Render for Python)
2. In your DNS provider, add a CNAME record pointing `dash` to the hosting platform
3. Configure custom domain in the hosting platform's dashboard

**Pros:** Independent deployments, no conflicts, easy to maintain
**Cons:** Not a true subpath structure

### Option B: Netlify Proxies (Subpath URLs)

Use Netlify rewrites to proxy requests to externally-hosted apps, making them appear at `jonminton.net/app-name`.

**Setup:**
1. Deploy your Dash/Shiny app to Render, Railway, or similar
2. Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = "build"

# Handle React Router (client-side routing)
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Proxy to external Dash app
[[redirects]]
  from = "/dash-app/*"
  to = "https://your-dash-app.onrender.com/:splat"
  status = 200
  force = true

# Proxy to external Shiny app
[[redirects]]
  from = "/shiny-app/*"
  to = "https://your-shiny-app.shinyapps.io/:splat"
  status = 200
  force = true
```

**Important:** Proxy redirects must appear BEFORE the React Router catch-all redirect.

**Pros:** Clean URLs under `jonminton.net/*`
**Cons:** App must be hosted elsewhere; may have CORS/routing issues with some frameworks

### Option C: iframe Embedding

Embed external apps within React pages:

```jsx
// src/pages/DashApp.js
const DashApp = () => {
  return (
    <iframe
      src="https://your-dash-app.onrender.com"
      style={{ width: '100%', height: '80vh', border: 'none' }}
      title="Dash Application"
    />
  );
};
```

Then add a route in `App.js`.

**Pros:** Simple, keeps navigation within the portfolio
**Cons:** Limited integration, iframe quirks, less seamless UX

### Recommended Hosting Platforms for Data Science Apps

| App Type | Platform | Free Tier | Notes |
|----------|----------|-----------|-------|
| Python Dash | Render | Yes | Easy setup, auto-deploy from GitHub |
| Python Dash | Railway | Yes (limited) | Good DX, generous free tier |
| R Shiny | shinyapps.io | Yes (25 hrs/month) | Official RStudio hosting |
| R Shiny | Posit Connect | Paid | Enterprise option |
| Streamlit | Streamlit Cloud | Yes | Native Streamlit hosting |

### DNS Configuration Notes

If using subdomains, you'll need access to DNS settings for jonminton.net. Typical setup:
- `A` record: `@` → Netlify IP (or use Netlify DNS)
- `CNAME` record: `dash` → `your-app.onrender.com`
- `CNAME` record: `shiny` → `your-app.shinyapps.io`

## Accessibility

The site uses semantic HTML (`<article>`, `<nav>`, `<header>`, `<footer>`, `<main>`) which provides a good foundation.

### Current Features
- Skip link for keyboard navigation (bypasses header to main content)
- `aria-label` attributes on icon-only links
- Semantic HTML structure throughout

### Testing & Compliance
To test accessibility:
1. **Keyboard navigation**: Tab through the site, ensure all interactive elements are reachable
2. **Screen reader**: Test with VoiceOver (Mac) or NVDA (Windows)
3. **Contrast**: Use browser dev tools or axe DevTools extension
4. **Automated testing**: Run `npx axe-cli https://jonminton.net`

### WCAG Guidelines Reference
- **Perceivable**: Alt text on images, sufficient color contrast
- **Operable**: Keyboard accessible, skip links, no time limits
- **Understandable**: Consistent navigation, clear labels
- **Robust**: Valid HTML, ARIA used correctly

### Future Improvements
- Add focus visible styles (`:focus-visible`) for better keyboard navigation visibility
- Consider reduced motion preferences (`prefers-reduced-motion`)
- Add `aria-current="page"` to active navigation items

## Known Issues / TODOs

- `react-markdown` in package.json but not used (can be removed with `npm uninstall react-markdown`)
- No unit tests written (Jest/RTL setup exists)
- About page (`/about`) is minimal - needs content
