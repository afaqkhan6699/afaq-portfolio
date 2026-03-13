# 🗂️ PROJECT CONTEXT — Muhammad Afaq Portfolio
### Read this before making any changes to the codebase.

---

## 👤 About the Owner

**Name:** Muhammad Afaq  
**Role:** WordPress Developer & Website Designer  
**Location:** Peshawar, Pakistan  
**Email:** afaqkhan6699@gmail.com  
**Phone / WhatsApp:** +92 343 349 4788 (`923433494788` for wa.me links)  
**LinkedIn:** https://linkedin.com/in/afaqkhan6699  
**GitHub:** https://github.com/afaqkhan6699  

---

## 🎯 What This Project Is

A **futuristic glassmorphism portfolio website** for Muhammad Afaq. It has been built in two versions:

1. **Next.js App** (`/`) — this folder — for development, customization, and deployment on Vercel or static export
2. **WordPress Theme** (`../afaq-wordpress-theme/`) — PHP theme for direct WordPress installation

Both versions share the **exact same design system** (CSS variables, fonts, glass cards, animations).

---

## 🖌️ Design System

### Philosophy
> Black & White Glassmorphism + Futuristic / Cyber aesthetic  
> Every UI element uses glass cards, scanline overlay, and animated grid background.

### Fonts (Google Fonts)
| Font | Usage |
|------|-------|
| **Syne** (wt 400–800) | All headings, names, titles |
| **Space Mono** (wt 400,700) | Labels, monospace accents, badges, tags |
| **DM Sans** (wt 300–600) | Body text, paragraphs, form inputs |

### CSS Custom Properties (in `app/globals.css`)
```css
/* DARK MODE (default) */
--bg-primary: #050505
--bg-secondary: #0d0d0d
--glass-bg: rgba(255,255,255,0.04)
--glass-border: rgba(255,255,255,0.1)
--glass-hover: rgba(255,255,255,0.08)
--text-primary: #f0f0f0
--text-secondary: #888888
--text-accent: #ffffff
--accent-glow: rgba(255,255,255,0.12)

/* LIGHT MODE — [data-theme='light'] */
--bg-primary: #f5f5f5
--glass-bg: rgba(0,0,0,0.04)
--text-accent: #000000
```

### Key Classes
- `.glass-card` — glassmorphism card with shimmer hover
- `.section-label` — small Space Mono uppercase label
- `.section-title` — Syne 800 heading
- `.btn-primary` — white filled pill button
- `.btn-outline` — transparent bordered pill button
- `.btn-whatsapp` — green (#25d366) WhatsApp button
- `.outline-text` — transparent text with stroke
- `.container` — max-width 1100px centered
- `.container-narrow` — max-width 860px centered

### Animations
- `@keyframes float` — floating particles
- `@keyframes fadeInUp` — section reveals
- `@keyframes blink` — cursor + availability dot
- `@keyframes grid-move` — animated background grid
- `@keyframes pulse-border` — stat card border glow

### Dark / Light Toggle
- Managed by `context/ThemeContext.jsx`
- Stored in `localStorage` key: `afaq-theme`
- Applied to `document.documentElement` as `data-theme="dark"` or `data-theme="light"`
- Navbar toggle button transforms from `🌙` to `☀️`

---

## 🗂️ File Structure

```
afaq-portfolio/
├── app/
│   ├── globals.css          ← ENTIRE design system lives here
│   ├── layout.js            ← Root layout (ThemeProvider wraps everything)
│   ├── page.js              ← Homepage (Hero → About → Skills → Experience → Education → CTA)
│   ├── projects/
│   │   └── page.jsx         ← Routes to components/ProjectsPage.jsx
│   └── contact/
│       └── page.jsx         ← Routes to components/ContactPage.jsx
├── components/
│   ├── Navbar.jsx           ← Fixed floating nav with theme toggle + mobile hamburger
│   ├── Hero.jsx             ← Full-screen hero with particles, typed text, glitch name
│   ├── About.jsx            ← Bio + 4 stat cards + tech badges
│   ├── Skills.jsx           ← 3 glass cards with animated skill bars
│   ├── Experience.jsx       ← Timeline with 2 jobs
│   ├── Education.jsx        ← Timeline with CGPA ring + certifications
│   ├── Footer.jsx           ← Logo + links + socials
│   ├── ProjectsPage.jsx     ← Full projects page (filter tabs + 10 project cards)
│   └── ContactPage.jsx      ← Contact info + social links + dual-tab WhatsApp forms
├── context/
│   └── ThemeContext.jsx     ← Dark/light mode React context
├── public/                  ← Static assets (add profile photo here as `photo.jpg`)
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.mjs          ← Configured for static export (`output: 'export'`)
```

---

## 📄 Pages

### `/` — Homepage
Sections in order:
1. **Hero** — Animated grid bg, particles, glitch name "Muhammad / Afaq", typewriter roles, CTA buttons
2. **About** — Bio paragraphs, 2+/50+/3.21/5★ stat cards, tech badge pills
3. **Skills** — WordPress / Frontend / Tools & More with animated fill bars
4. **Experience** — Vertical timeline: Freelance (2025–Present) + Softhat IT Solutions (2023–2025)
5. **Education** — Timeline with CGPA SVG ring + certifications grid
6. **Projects Teaser** — "View All Projects →" CTA
7. **CTA Strip** — Glass card with "Start a Project" + WhatsApp button

### `/projects` — Projects Page
- Page hero with stats (50+ projects, 2+ years, 100% satisfaction)
- 5 filter tabs: All / WordPress / E-Commerce / Landing Pages / Custom Dev
- 10 project cards (filterable by category)
- Each card: type badge, year, title, description, tech tags, hover overlay with "View Live ↗"
- CTA strip at bottom

### `/contact` — Contact Page
**Top Section (side by side):**
- LEFT: Direct contact info (Email, Phone, WhatsApp as clickable glass cards) + green "Currently Available" badge
- RIGHT: 6 social platform cards (LinkedIn, WhatsApp, Gmail, GitHub, Fiverr, Upwork)

**Bottom Section (form with 2 tabs):**
- **Tab 1 — "Hire Me":** Name, Phone, Email, Company, Role dropdown, Salary/Budget, Job description, "How found" — sends to WhatsApp
- **Tab 2 — "Start a Project":** Name, Phone, Email, Website, Project type, Budget, Timeline, Pages, 12 feature checkboxes, Description, Design preferences — sends to WhatsApp

**WhatsApp Integration:**
- Both forms build a formatted message and open `https://wa.me/923433494788?text=...`
- Number: `923433494788`
- Messages include emojis, dividers (`━━━`), and section labels
- Validated on submit — toast error if required fields are empty

---

## 🔧 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
# → Opens at http://localhost:3000

# 3. Build for production
npm run build

# 4. Static export (for WordPress or cPanel hosting)
npm run build
# → Generates /out folder — upload contents to server
```

---

## 🚀 Deployment Options

### Vercel (Recommended — one click)
```bash
npm i -g vercel
vercel
```

### Static Export → cPanel / Shared Hosting
```bash
npm run build
# Upload /out folder to public_html
```

### WordPress (PHP Theme)
- Use the `../afaq-wordpress-theme/afaq-portfolio-theme/` folder
- Zip it → Upload to WP Admin → Appearance → Themes → Activate
- Create pages: "Projects" with template "Projects Page", "Contact" with template "Contact Page"

---

## ✅ What Has Been Built (Completed)

- [x] Full responsive layout (mobile, tablet, desktop)
- [x] Dark / Light mode toggle (top-right of navbar, persists in localStorage)
- [x] Futuristic glassmorphism design (black & white, scanline, grid bg)
- [x] Animated floating particles in hero
- [x] Typewriter text cycling through 4 roles
- [x] Animated skill bars (triggered on scroll intersection)
- [x] Scroll reveal animations on all sections
- [x] Education timeline with CGPA SVG ring
- [x] Certifications grid with verified badges
- [x] Experience vertical timeline
- [x] Projects page with filter tabs (10 projects, 5 categories)
- [x] Contact page: info panel + 6 social links + dual-tab forms
- [x] WhatsApp form integration (Hire Me + Project Brief)
- [x] Shared Navbar (adapts links based on current page)
- [x] Shared Footer with logo, links, socials
- [x] WordPress PHP theme version (same design)
- [x] `next.config.mjs` configured for static export

---

## 🔜 What Still Needs To Be Done

- [ ] **Add real project screenshots** — replace placeholder letters with actual images in `/public/projects/`
- [ ] **Add profile photo** — place `photo.jpg` in `/public/` and update `Hero.jsx` or `About.jsx`
- [ ] **Add real project URLs** — update `href="#"` in `ProjectsPage.jsx` with live URLs
- [ ] **Fiverr / Upwork profile links** — update `href="#"` in `ContactPage.jsx`
- [ ] **GitHub profile URL** — verify `https://github.com/Muhammad-Afaq` is correct
- [ ] **SEO meta tags** — update `app/layout.js` with real title, description, OG image
- [ ] **Favicon** — add `app/favicon.ico`
- [ ] **Add more projects** — extend `ALL_PROJECTS` array in `ProjectsPage.jsx`
- [ ] **Projects filter animation** — add smooth fade when switching filter tabs
- [ ] **Form success state** — show success message after WhatsApp opens
- [ ] **Custom 404 page** — create `app/not-found.js`

---

## ⚠️ Important Rules (DO NOT CHANGE)

1. **Never change font families** — Syne / Space Mono / DM Sans are core to the brand
2. **Never change the CSS variable names** — they're used across hundreds of rules
3. **Keep WhatsApp number as** `923433494788` (no + sign in wa.me URLs)
4. **dark mode is the default** — `data-theme="dark"` is set in `layout.js` on the `<html>` tag
5. **All CSS is in `globals.css`** — do not create separate component CSS files (this is intentional for the WordPress theme to stay in sync)
6. **`next.config.mjs` uses `output: 'export'`** — do not use server-side rendering features like `getServerSideProps`

---

## 💡 Common Changes You Might Want

### Add a new project
In `components/ProjectsPage.jsx`, add to the `ALL_PROJECTS` array:
```js
{ id:11, category:'wordpress', type:'WordPress Theme', year:'2025',
  title:'Your Project Name', desc:'Description here.',
  tags:['WordPress','Elementor'], label:'WP' }
```
Categories: `wordpress` | `ecommerce` | `landing` | `custom`

### Update personal info / bio
Edit `components/About.jsx` — the bio paragraphs are hardcoded there.

### Add a profile photo
1. Place `photo.jpg` in `/public/`
2. In `components/About.jsx` or `components/Hero.jsx`, add:
```jsx
import Image from 'next/image';
<Image src="/photo.jpg" alt="Muhammad Afaq" width={400} height={400} style={{borderRadius:'16px'}} />
```

### Change primary accent color
In `app/globals.css`, update both `:root` and `[data-theme='light']`:
```css
--text-accent: #your-color;
--accent-glow: rgba(r,g,b,0.12);
```

### Add a new section to homepage
1. Create `components/YourSection.jsx`
2. Import and add it to `app/page.js` with a `<div className="section-divider" />` before it

---

*Last updated: March 2026 | Built with Next.js 14, Tailwind CSS, React 18*
