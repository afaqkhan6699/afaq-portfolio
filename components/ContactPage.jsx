'use client';
import { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const WA = '923433494788';

const EMAIL_ICON = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>;
const PHONE_ICON = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>;
const WA_ICON_LG = <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
const WA_BTN_ICON = <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
const LI_ICON = <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const GH_ICON = <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>;

function openWA(msg) {
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank');
}
function toast(msg) {
  const old = document.querySelector('.cf-toast');
  if (old) old.remove();
  const t = document.createElement('div');
  t.className = 'cf-toast';
  t.style.cssText = 'position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);background:#ef4444;color:#fff;padding:.875rem 1.75rem;border-radius:50px;font-family:"DM Sans",sans-serif;font-size:.875rem;z-index:9999;font-weight:500;box-shadow:0 8px 32px rgba(239,68,68,.4);animation:fadeInUp .3s ease;white-space:nowrap;';
  t.textContent = '⚠ ' + msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 4500);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function isValidEmail(value) {
  return EMAIL_RE.test(value.trim());
}

function isValidUrl(value) {
  try {
    const u = new URL(value.trim());
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}

function Input({ id, label, req, type='text', placeholder, value, onChange }) {
  const handleChange = (e) => {
    const raw = e.target.value;
    const next = type === 'tel' ? raw.replace(/\D/g, '') : raw;
    onChange(next);
  };

  return (
    <div className="cf-group">
      <label className="cf-label">{label} {req && <span className="cf-req">*</span>}</label>
      <input
        id={id}
        type={type}
        className="cf-input"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        inputMode={type === 'tel' ? 'numeric' : undefined}
        pattern={type === 'tel' ? '[0-9]*' : undefined}
      />
    </div>
  );
}
function Select({ id, label, req, options, value, onChange }) {
  return (
    <div className="cf-group">
      <label className="cf-label">{label} {req && <span className="cf-req">*</span>}</label>
      <select id={id} className="cf-select" value={value} onChange={e => onChange(e.target.value)}>
        <option value="">Select...</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
function Textarea({ id, label, req, rows=5, placeholder, value, onChange }) {
  return (
    <div className="cf-group">
      <label className="cf-label">{label} {req && <span className="cf-req">*</span>}</label>
      <textarea id={id} className="cf-textarea" rows={rows} placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} />
    </div>
  );
}

function HireForm() {
  const [f, setF] = useState({ name:'', phone:'', email:'', company:'', role:'', salary:'', message:'', source:'' });
  const set = k => v => setF(p => ({ ...p, [k]: v }));

  const send = () => {
    if (!f.name || !f.phone || !f.role || !f.message) return toast('Please fill in all required fields (Name, Phone, Role, Description).');
    if (f.phone.length < 7) return toast('Please enter a valid phone number.');
    if (f.email && !isValidEmail(f.email)) return toast('Please enter a valid email address.');
    const lines = ['👋 *HIRING INQUIRY — afaq-portfolio.com*','━━━━━━━━━━━━━━━━━━',
      `👤 *Name:* ${f.name}`, `📱 *Phone/WhatsApp:* ${f.phone}`,
      f.email && `📧 *Email:* ${f.email}`, f.company && `🏢 *Company:* ${f.company}`,
      `💼 *Position:* ${f.role}`, f.salary && `💰 *Budget/Salary:* ${f.salary}`,
      '━━━━━━━━━━━━━━━━━━', `📝 *Details:*\n${f.message}`,
      f.source && `\n🔍 *Found via:* ${f.source}`, '━━━━━━━━━━━━━━━━━━',
      '_Sent via portfolio contact form_'
    ].filter(Boolean).join('\n');
    openWA(lines);
  };

  return (
    <div className="glass-card contact-form-card">
      <div className="cfc-header">
        <h3>💼 Hiring Inquiry</h3>
        <p>Looking for a WordPress developer to join your team? Fill this out and I&apos;ll reply via WhatsApp.</p>
      </div>
      <div>
        <div className="cf-two-col">
          <Input id="h1" label="Full Name" req placeholder="e.g. John Smith" value={f.name} onChange={set('name')} />
          <Input id="h2" label="Phone / WhatsApp" req type="tel" placeholder="+1 234 567 8900" value={f.phone} onChange={set('phone')} />
        </div>
        <div className="cf-two-col">
          <Input id="h3" label="Email" type="email" placeholder="john@company.com" value={f.email} onChange={set('email')} />
          <Input id="h4" label="Company / Organization" placeholder="Company (optional)" value={f.company} onChange={set('company')} />
        </div>
        <div className="cf-two-col">
          <Select id="h5" label="Role / Position" req value={f.role} onChange={set('role')} options={['Full-time WordPress Developer','Part-time / Remote Developer','Freelance – Project Basis','Contract (3–6 Months)','Internship / Junior Role','Other']} />
          <Input id="h6" label="Offered Budget / Salary" placeholder="e.g. $500/mo" value={f.salary} onChange={set('salary')} />
        </div>
        <Textarea id="h7" label="Job Description / Requirements" req placeholder="Describe the role, required skills, working hours..." value={f.message} onChange={set('message')} />
        <Select id="h8" label="How did you find me?" value={f.source} onChange={set('source')} options={['Google Search','LinkedIn','Fiverr','Upwork','Referral from someone','Other']} />
        <button className="btn-whatsapp-submit" onClick={send}>{WA_BTN_ICON} Send Hiring Inquiry via WhatsApp</button>
        <p className="cf-note">Opens WhatsApp with a pre-filled message — your info goes directly to Muhammad Afaq.</p>
      </div>
    </div>
  );
}

function ProjectForm() {
  const [f, setF] = useState({ name:'', phone:'', email:'', website:'', type:'', budget:'', timeline:'', pages:'', desc:'', design:'' });
  const [features, setFeatures] = useState([]);
  const set = k => v => setF(p => ({ ...p, [k]: v }));

  const toggleFeature = val => setFeatures(prev => prev.includes(val) ? prev.filter(x => x !== val) : [...prev, val]);

  const FEATURE_LIST = ['Responsive / Mobile','E-Commerce','Contact Form','Blog / News','SEO Setup','Speed Optimization','Multilingual','Membership Area','Booking System','Custom Post Types','Payment Gateway','API Integration'];

  const send = () => {
    if (!f.name || !f.phone || !f.type || !f.budget || !f.desc) return toast('Please fill in all required fields (Name, Phone, Project Type, Budget, Description).');
    if (f.phone.length < 7) return toast('Please enter a valid phone number.');
    if (f.email && !isValidEmail(f.email)) return toast('Please enter a valid email address.');
    if (f.website && !isValidUrl(f.website)) return toast('Please enter a valid website URL (http or https).');
    const lines = ['🚀 *PROJECT BRIEF — afaq-portfolio.com*','━━━━━━━━━━━━━━━━━━',
      `👤 *Client:* ${f.name}`, `📱 *WhatsApp:* ${f.phone}`,
      f.email && `📧 *Email:* ${f.email}`, f.website && `🌐 *Website:* ${f.website}`,
      '━━━━━━━━━━━━━━━━━━', `📁 *Project Type:* ${f.type}`, `💰 *Budget:* ${f.budget}`,
      f.timeline && `⏱ *Timeline:* ${f.timeline}`, f.pages && `📄 *Pages:* ${f.pages}`,
      features.length && `\n✅ *Features Needed:*\n• ${features.join('\n• ')}`,
      '━━━━━━━━━━━━━━━━━━', `📝 *Description:*\n${f.desc}`,
      f.design && `\n🎨 *Design Style:*\n${f.design}`,
      '━━━━━━━━━━━━━━━━━━', '_Sent via portfolio contact form_'
    ].filter(Boolean).join('\n');
    openWA(lines);
  };

  return (
    <div className="glass-card contact-form-card">
      <div className="cfc-header">
        <h3>🚀 Project Brief</h3>
        <p>Need a custom WordPress site, theme, or web app? Share your project details and let&apos;s make it happen.</p>
      </div>
      <div>
        <div className="cf-two-col">
          <Input id="p1" label="Full Name" req placeholder="e.g. Sarah Johnson" value={f.name} onChange={set('name')} />
          <Input id="p2" label="WhatsApp Number" req type="tel" placeholder="+1 234 567 8900" value={f.phone} onChange={set('phone')} />
        </div>
        <div className="cf-two-col">
          <Input id="p3" label="Email" type="email" placeholder="sarah@company.com" value={f.email} onChange={set('email')} />
          <Input id="p4" label="Website URL (if redesign)" type="url" placeholder="https://yoursite.com" value={f.website} onChange={set('website')} />
        </div>
        <div className="cf-two-col">
          <Select id="p5" label="Project Type" req value={f.type} onChange={set('type')} options={['New WordPress Website','WordPress Redesign / Revamp','WooCommerce E-Commerce Store','Custom WordPress Theme','Landing Page','Speed Optimization','Bug Fixing / Maintenance','PSD / Figma to WordPress','Custom Plugin Development','Other']} />
          <Select id="p6" label="Estimated Budget" req value={f.budget} onChange={set('budget')} options={['Under $200','$200 – $500','$500 – $1,000','$1,000 – $2,500','$2,500 – $5,000','$5,000+','To be discussed']} />
        </div>
        <div className="cf-two-col">
          <Select id="p7" label="Timeline" value={f.timeline} onChange={set('timeline')} options={['ASAP (1–2 weeks)','~1 Month','2–3 Months','3–6 Months','Flexible / No rush']} />
          <Select id="p8" label="Pages / Complexity" value={f.pages} onChange={set('pages')} options={['1–3 pages (simple)','4–10 pages (standard)','10–20 pages (medium)','20+ pages (large)','Not sure yet']} />
        </div>
        <div className="cf-group">
          <label className="cf-label">Required Features</label>
          <div className="cf-checkboxes">
            {FEATURE_LIST.map(feat => (
              <label key={feat} className="cf-checkbox">
                <input type="checkbox" checked={features.includes(feat)} onChange={() => toggleFeature(feat)} />
                {feat}
              </label>
            ))}
          </div>
        </div>
        <Textarea id="p9" label="Project Description" req placeholder="What does the website need to do? Who is your audience? What problem should it solve?" value={f.desc} onChange={set('desc')} />
        <Textarea id="p10" label="Design Preferences" rows={3} placeholder="e.g. Modern & minimal, Dark theme, Corporate style. Any reference websites you like?" value={f.design} onChange={set('design')} />
        <button className="btn-whatsapp-submit" onClick={send}>{WA_BTN_ICON} Send Project Brief via WhatsApp</button>
        <p className="cf-note">Opens WhatsApp with your full project brief pre-filled — Muhammad Afaq receives it instantly.</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [tab, setTab] = useState('hire');
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

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

  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-grid-bg" />
        <div className="hero-glow" />
        <div className="particles-container" id="particles" />
        <div className="page-hero-content">
          <div className="hero-badge"><span className="badge-dot green" /><span>Available for Work</span></div>
          <h1 className="page-hero-title">Get In <span className="outline-text">Touch</span></h1>
          <p className="page-hero-sub">Whether you need a WordPress site, custom theme, or performance optimization — let&apos;s make it happen.</p>
        </div>
      </section>

      {/* Contact Info + Socials */}
      <section className="contact-info-section" ref={ref}>
        <div className="container">
          <div className="contact-info-grid">

            {/* LEFT: Direct Contact */}
            <div style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateX(-20px)', transition: 'all 0.6s ease' }}>
              <span className="section-label">Direct Contact</span>
              <h2 className="cip-title">Reach Me Directly</h2>
              <p className="cip-sub">Prefer to reach out yourself? Here&apos;s where to find me. I typically respond within a few hours.</p>

              <div className="cip-items">
                {[
                  { href:'mailto:afaqkhan6699@gmail.com', icon: EMAIL_ICON, label:'Email', value:'afaqkhan6699@gmail.com', note:'Response within 2–4 hours' },
                  { href:'tel:+923433494788', icon: PHONE_ICON, label:'Phone / WhatsApp', value:'+92 343 349 4788', note:'Mon–Sat, 10am – 8pm PKT' },
                  { href:'https://wa.me/923433494788', icon: WA_ICON_LG, label:'WhatsApp', value:'Chat Instantly', note:'Fastest response guaranteed', wa: true },
                ].map(c => (
                  <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="glass-card cip-item">
                    <div className="cip-icon-wrap" style={c.wa ? { borderColor:'rgba(37,211,102,.3)', color:'#25d366' } : {}}>{c.icon}</div>
                    <div className="cip-item-body">
                      <p className="cip-item-label">{c.label}</p>
                      <p className="cip-item-value">{c.value}</p>
                      <p className="cip-item-note">{c.note}</p>
                    </div>
                    <span className="cip-arrow">→</span>
                  </a>
                ))}
              </div>

              <div className="glass-card availability-card">
                <span className="avail-dot" />
                <div>
                  <p className="avail-title">Currently Available</p>
                  <p className="avail-note">Open to freelance projects & full-time roles</p>
                </div>
              </div>
            </div>

            {/* RIGHT: Social Links */}
            <div style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateX(20px)', transition: 'all 0.6s ease 0.15s' }}>
              <span className="section-label">Online Presence</span>
              <h2 className="cip-title">Find Me Online</h2>
              <p className="cip-sub">Connect with me across platforms. Follow for WordPress tips, project updates, and web dev insights.</p>

              <div className="social-links-grid">
                {[
                  { href:'https://linkedin.com/in/afaqkhan6699', icon: LI_ICON, name:'LinkedIn', handle:'Muhammad-Afaq', desc:'Professional network & endorsements' },
                  { href:'https://wa.me/923433494788', icon: WA_ICON_LG, name:'WhatsApp', handle:'+92 343 349 4788', desc:'Instant chat — fastest response' },
                  { href:'mailto:afaqkhan6699@gmail.com', icon: EMAIL_ICON, name:'Gmail', handle:'afaqkhan6699', desc:'For formal proposals & briefs' },
                  { href:'https://github.com/afaqkhan6699', icon: GH_ICON, name:'GitHub', handle:'Muhammad-Afaq', desc:'Code repos & open source' },
                  { href:'https://www.fiverr.com/makewebsitely', icon: <span style={{fontSize:'1.6rem',fontWeight:800,fontFamily:"'Syne',sans-serif",color:'var(--text-accent)'}}>F</span>, name:'Fiverr', handle:'afaqkhan', desc:'Hire on Fiverr marketplace' },
                  { href:'#', icon: <span style={{fontSize:'1.4rem',fontWeight:800,fontFamily:"'Syne',sans-serif",color:'var(--text-accent)'}}>U</span>, name:'Upwork', handle:'Muhammad Afaq', desc:'Professional freelance profile' },
                ].map(s => (
                  <a key={s.name} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="glass-card social-link-card">
                    <div className="slc-icon">{s.icon}</div>
                    <div style={{flex:1}}>
                      <p className="slc-name">{s.name}</p>
                      <p className="slc-handle">{s.handle}</p>
                      <p className="slc-desc">{s.desc}</p>
                    </div>
                    <span className="slc-arrow">↗</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="contact-form-section">
        <div className="container">
          <div className="section-header" style={{ opacity: vis ? 1 : 0, transition: 'all 0.6s ease 0.3s' }}>
            <span className="section-label">Send a Message</span>
            <h2 className="section-title">What Brings You Here?</h2>
            <p className="section-subtitle">Choose your inquiry type below. Your message will be sent directly to my WhatsApp.</p>
            <div className="title-line" />
          </div>

          {/* Tab Buttons */}
          <div className="form-tabs">
            <button className={`form-tab-btn${tab === 'hire' ? ' active' : ''}`} onClick={() => setTab('hire')}>
              <span className="ftb-icon">💼</span>
              <div><p className="ftb-title">Hire Me</p><p className="ftb-sub">For a job or collaboration</p></div>
            </button>
            <button className={`form-tab-btn${tab === 'project' ? ' active' : ''}`} onClick={() => setTab('project')}>
              <span className="ftb-icon">🚀</span>
              <div><p className="ftb-title">Start a Project</p><p className="ftb-sub">Custom website or development work</p></div>
            </button>
          </div>

          {/* Tab Content */}
          {tab === 'hire' ? <HireForm key="hire" /> : <ProjectForm key="project" />}
        </div>
      </section>

      <Footer />
    </>
  );
}
