'use client';
import { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Link from 'next/link';

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ALL_PROJECTS = [
  { id:1, category:'wordpress', type:'WordPress Theme', year:'2025', title:'Corporate Business Website', desc:'Custom WordPress theme with advanced Elementor layouts, mega menu, multilingual support, and WCAG accessibility compliance.', tags:['WordPress','Elementor','ACF','WPML'], label:'WP', image:'/media/Home-Guls-Globe-LLC-Webflow-Development-UI-UX-Design-Experts-min.png' },
  { id:2, category:'ecommerce', type:'E-Commerce', year:'2025', title:'WooCommerce Fashion Store', desc:'Custom WooCommerce store with product variation swatches, Ajax cart, Stripe & PayPal integration, and advanced product filtering.', tags:['WooCommerce','WordPress','PHP','Stripe'], label:'WC', image:'/media/Mindgigs-MakeWebsitely.png' },
  { id:3, category:'landing', type:'Landing Page', year:'2025', title:'SaaS Product Launch Page', desc:'High-converting SaaS landing page with animated hero, feature sections, pricing tables, testimonials, and integrated lead capture forms.', tags:['Bricks Builder','JavaScript','CSS Animations'], label:'LP', image:'/media/Home-Azionet-voice-over-dubbing-and-translation-Services-min.png' },
  { id:4, category:'wordpress', type:'Portfolio Site', year:'2024', title:'Creative Agency Portfolio', desc:'Dark-themed creative agency portfolio with smooth scroll animations, project case studies, and a custom-built contact system.', tags:['WordPress','Bricks','GSAP','PHP'], label:'PF', image:'/media/Anosh-Ahmed-A-Visionary-Leader-Dedicated-to-Positive-Change-in-Houston-Texas-min.png' },
  { id:5, category:'ecommerce', type:'E-Commerce', year:'2024', title:'Electronics Shop', desc:'Multi-vendor electronics marketplace with comparison tables, product reviews, live search, and automated inventory management.', tags:['WooCommerce','Dokan','WordPress'], label:'EC', image:'/media/Car-Rapair-–-Find-the-best-Service-for-your-car.png' },
  { id:6, category:'custom', type:'Custom Dev', year:'2024', title:'Restaurant Booking Platform', desc:'Custom WordPress plugin-powered restaurant site with online reservations, menu management, and Google Maps integration.', tags:['WordPress','PHP','Custom Plugin','Maps API'], label:'CD', image:'/media/Mom-I-Will-Be-Rich-–-Cultivate-Millionaires.png' },
  { id:7, category:'landing', type:'Landing Page', year:'2024', title:'Real Estate Listings Page', desc:'Property listing landing page with advanced search/filter, interactive map view, virtual tour embeds, and agent contact forms.', tags:['Elementor','WordPress','ACF'], label:'RE', image:'/media/Luxury-Desert-Dubai-Desert-Safari-Adventures-min.png' },
  { id:8, category:'custom', type:'Speed Optimization', year:'2024', title:'Core Web Vitals Optimization', desc:'Full performance audit and optimization — improved PageSpeed score from 38 to 97 on mobile and desktop.', tags:['WordPress','WP Rocket','CDN','Optimization'], label:'⚡', image:'/media/Dr-T-Medspa-min.png' },
  { id:9, category:'wordpress', type:'Blog / Magazine', year:'2023', title:'Tech News Magazine', desc:'WordPress news magazine with custom post types, category mega menu, infinite scroll, and AdSense integration.', tags:['WordPress','Custom Theme','PHP'], label:'NW' },
  { id:10, category:'ecommerce', type:'E-Commerce', year:'2023', title:'Handmade Crafts Store', desc:'Artisan WooCommerce store with custom product galleries, Etsy-style seller profiles, and live chat integration.', tags:['WooCommerce','Elementor','WordPress'], label:'HC' },
];

const FILTERS = [
  { key: 'all', label: 'All Projects' },
  { key: 'wordpress', label: 'WordPress' },
  { key: 'ecommerce', label: 'E-Commerce' },
  { key: 'landing', label: 'Landing Pages' },
  { key: 'custom', label: 'Custom Dev' },
];

function ProjectCard({ project, visible }) {
  return (
    <div className="glass-card project-card"
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'all 0.5s ease' }}>
      <div className="pc-image">
        {project.image ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </>
        ) : (
          <div className="pc-placeholder"><span>{project.label}</span><div className="pc-shimmer" /></div>
        )}
      </div>
      <div className="pc-body">
        <div className="pc-header">
          <span className="pc-type">{project.type}</span>
          <span className="pc-year">{project.year}</span>
        </div>
        <h3 className="pc-title">{project.title}</h3>
        <p className="pc-desc">{project.desc}</p>
        <div className="pc-tags">{project.tags.map(t => <span key={t}>{t}</span>)}</div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Particles
  useEffect(() => {
    const el = document.getElementById('particles');
    if (!el || el.children.length > 0) return;
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const s = Math.random() * 3 + 1;
      p.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;width:${s}px;height:${s}px;--dur:${(Math.random()*8+4).toFixed(1)}s;--delay:${(Math.random()*5).toFixed(1)}s;`;
      el.appendChild(p);
    }
  }, []);

  const filtered = filter === 'all' ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.category === filter);

  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-grid-bg" />
        <div className="hero-glow" />
        <div className="particles-container" id="particles" />
        <div className="page-hero-content">
          <div className="hero-badge"><span className="badge-dot" /><span>Portfolio Showcase</span></div>
          <h1 className="page-hero-title">My <span className="outline-text">Projects</span></h1>
          <p className="page-hero-sub">Custom WordPress themes, e-commerce stores, landing pages, and web apps — built with precision and purpose.</p>
          <div className="page-hero-stats">
            <div className="ph-stat"><span className="ph-stat-val">50+</span><span className="ph-stat-label">Projects Done</span></div>
            <div className="ph-stat-divider" />
            <div className="ph-stat"><span className="ph-stat-val">2+</span><span className="ph-stat-label">Years Active</span></div>
            <div className="ph-stat-divider" />
            <div className="ph-stat"><span className="ph-stat-val">100%</span><span className="ph-stat-label">Client Satisfaction</span></div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-main-section" ref={ref}>
        <div className="container">
          <div className="project-filters">
            {FILTERS.map(f => (
              <button key={f.key} className={`pf-btn${filter === f.key ? ' active' : ''}`} onClick={() => setFilter(f.key)}>
                {f.label}
              </button>
            ))}
          </div>
          <div className="projects-grid">
            {filtered.map((p, i) => (
              <div key={p.id} style={{ animationDelay: `${i * 0.07}s` }}>
                <ProjectCard project={p} visible={visible} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="container">
          <div className="glass-card cta-card">
            <div className="cta-card-inner">
              <div>
                <h2 className="cta-title">Have a project in mind?</h2>
                <p className="cta-sub">Let&apos;s discuss your requirements and build something amazing together.</p>
              </div>
              <div className="cta-actions">
                <Link href="/contact" className="btn-primary">Start a Project →</Link>
                <a href="https://wa.me/923433494788" target="_blank" rel="noopener" className="btn-whatsapp">{WA_ICON} WhatsApp Me</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
