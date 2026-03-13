# Muhammad Afaq — Portfolio
### Futuristic Glassmorphism Design

---

## 📦 What's Included

```
afaq-portfolio/              ← Next.js App (React)
afaq-wordpress-theme/
  afaq-portfolio-theme/      ← WordPress Theme (PHP)
```

---

## 🚀 Option 1: WordPress Theme (Direct Install)

### Step 1 — Upload Theme
1. Compress `afaq-portfolio-theme/` folder into a `.zip`
2. Go to **WordPress Admin → Appearance → Themes → Add New → Upload Theme**
3. Upload the `.zip` and click **Activate**

### Step 2 — Set Homepage
1. Go to **Settings → Reading**
2. Set "Your homepage displays" to **A static page**
3. Create a blank page titled "Home" and set it as the homepage

### Step 3 — Done! 🎉
Visit your site — the full portfolio is live.

---

## ⚡ Option 2: Next.js App (Standalone / Vercel)

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup
```bash
cd afaq-portfolio
npm install
npm run dev          # Development server at localhost:3000
npm run build        # Production build
```

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Static Export (for shared hosting / WordPress subdirectory)
```bash
npm run build        # Generates /out folder
```
Upload `/out` folder contents to your server's public directory.

---

## 🎨 Features
- ✅ Dark / Light Mode Toggle
- ✅ Animated Particles (Hero)
- ✅ Typewriter Typed Text
- ✅ Glassmorphism Cards
- ✅ Animated Skill Bars
- ✅ Scroll Reveal Animations
- ✅ Futuristic Scanline Overlay
- ✅ Animated Grid Background
- ✅ Fully Responsive
- ✅ Smooth Section Transitions
- ✅ Hover Shimmer Effects

## 🎨 Design
- **Fonts**: Syne (headings) · Space Mono (labels) · DM Sans (body)
- **Theme**: Black & White Glassmorphism
- **Aesthetic**: Futuristic / Cyber / Minimal

---

## 📝 Customization

### Change Personal Info
- **WordPress**: Edit `index.php` — all content is in plain HTML
- **Next.js**: Update component files in `/components/`

### Change Colors
Both themes use CSS custom properties in `:root` and `[data-theme="light"]`.
Edit `assets/css/portfolio.css` (WordPress) or `app/globals.css` (Next.js).

---

Built with ❤️ for Muhammad Afaq
