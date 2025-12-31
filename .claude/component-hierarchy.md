# Component Hierarchy

This document shows the parent-child relationships between React components in the portfolio website.

## Visual Hierarchy

```
App
├── Header
│   ├── Nav
│   └── LinkBox (x6)
├── Routes
│   ├── Home ["/"]
│   │   ├── BigHero
│   │   └── HeadingLinkback (x4)
│   ├── EmpEd ["/history"]
│   │   ├── Hero
│   │   └── EmpEdItem (x N from JSON)
│   ├── Outputs ["/outputs"]
│   │   ├── Hero
│   │   └── PublicationItem (x N from JSON)
│   ├── OtherApps ["/apps"]
│   │   ├── Hero
│   │   └── AppProfile (x N from JSON)
│   ├── About ["/about"]
│   │   └── Hero
│   ├── Contact ["/contact"]
│   │   └── Hero
│   └── Whoops404 ["*"]
└── Footer
```

## Component Details

### Global Layout Components

| Component | Location | Parent | Children | Props |
|-----------|----------|--------|----------|-------|
| Header | `src/components/Header.js` | App | Nav, LinkBox (x6) | `title` |
| Footer | `src/components/Footer.js` | App | None | None |
| Nav | `src/components/Nav.js` | Header | None | None |
| LinkBox | `src/components/LinkBox.js` | Header | None | `url`, `icon`, `label` |

### Page Components

| Component | Location | Route | Children | Data Source |
|-----------|----------|-------|----------|-------------|
| Home | `src/pages/Home.js` | `/` | BigHero, HeadingLinkback (x4) | None |
| About | `src/pages/About.js` | `/about` | Hero | None |
| Contact | `src/pages/Contact.js` | `/contact` | Hero | None |
| EmpEd | `src/pages/EmpEd.js` | `/history` | Hero, EmpEdItem (x N) | `education-and-employment.json` |
| Outputs | `src/pages/Outputs.js` | `/outputs` | Hero, PublicationItem (x N) | `publications.json` |
| OtherApps | `src/pages/OtherApps.js` | `/apps` | Hero, AppProfile (x N) | `apps.json` |
| Whoops404 | `src/pages/Whoops404.js` | `*` | None | None |

### Reusable Components

| Component | Location | Used By | Props |
|-----------|----------|---------|-------|
| Hero | `src/components/Hero.js` | About, Contact, EmpEd, Outputs, OtherApps | `title` |
| BigHero | `src/components/BigHero.js` | Home | `firstView` |
| HeadingLinkback | `src/components/HeadingLinkback.js` | Home | `title`, `linkRoot`, `linkBackward`, `linkForward` |
| EmpEdItem | `src/components/EmpEdItem.js` | EmpEd | `years`, `role`, `place`, `activities` |
| PublicationItem | `src/components/PublicationItem.js` | Outputs | `year`, `authors`, `title`, `journal`, `url`, `id` |
| AppProfile | `src/components/AppProfile.js` | OtherApps | `title`, `mainText`, `image`, `url`, `github`, `status` |

## Data Flow

```
JSON Files (src/local-json/)
    │
    ├── education-and-employment.json ──► EmpEd ──► EmpEdItem
    │
    ├── publications.json ──► Outputs ──► PublicationItem
    │
    └── apps.json ──► OtherApps ──► AppProfile
```

## Key Patterns

1. **Layout Wrapper**: App provides consistent Header/Footer around all routes
2. **Hero Reuse**: 5 of 7 pages use the Hero component for their header section
3. **JSON-Driven Content**: EmpEd, Outputs, and OtherApps render lists from JSON files using `.map()`
4. **Responsive Components**: AppProfile and Footer use `react-responsive` for mobile layouts
5. **External Links**: LinkBox handles social media links with FontAwesome icons
6. **In-Page Navigation**: Home uses HeadingLinkback for section navigation with arrow icons

## File Structure

```
src/
├── App.js                          # Root component with routes
├── components/
│   ├── AppProfile.js               # App showcase card
│   ├── BigHero.js                  # Large hero for home page
│   ├── EmpEdItem.js                # Employment/education list item
│   ├── Footer.js                   # Site footer
│   ├── Header.js                   # Site header with nav and links
│   ├── HeadingLinkback.js          # Section heading with navigation
│   ├── Hero.js                     # Standard page hero section
│   ├── LinkBox.js                  # External link with icon
│   ├── Nav.js                      # Main navigation menu
│   └── PublicationItem.js          # Publication list item
├── pages/
│   ├── About.js
│   ├── Contact.js
│   ├── EmpEd.js
│   ├── Home.js
│   ├── OtherApps.js
│   ├── Outputs.js
│   └── Whoops404.js
└── local-json/
    ├── apps.json
    ├── education-and-employment.json
    └── publications.json
```
