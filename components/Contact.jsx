'use client';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const contacts = [
    { label: 'Email', value: 'afaqkhan6699@gmail.com', href: 'mailto:afaqkhan6699@gmail.com', icon: '✉' },
    { label: 'Phone', value: '+92 343 349 4788', href: 'tel:+923433494788', icon: '◎' },
    { label: 'LinkedIn', value: 'Muhammad-Afaq', href: 'https://linkedin.com/in/afaqkhan6699', icon: '⬡' },
  ];

  return (
    <section id="contact" ref={ref} style={{ padding: '7rem 2rem 4rem', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem', opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
        <div className="section-label">06 — Connect</div>
        <h2 className="section-title">Let&apos;s Build Together</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--text-secondary)', maxWidth: '480px', margin: '1.5rem auto 0', lineHeight: 1.7, fontSize: '1rem' }}>
          Looking for a dedicated WordPress developer? I&apos;m available for freelance projects, collaborations, and full-time opportunities.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '4rem' }}>
        {contacts.map((c, i) => (
          <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
            className="glass-card"
            style={{
              padding: '1.75rem',
              display: 'flex', flexDirection: 'column', gap: '0.75rem',
              textDecoration: 'none',
              opacity: vis ? 1 : 0,
              transform: vis ? 'none' : 'translateY(20px)',
              transition: `all 0.5s ease ${i * 0.12}s`,
            }}
          >
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '1.25rem', color: 'var(--text-accent)' }}>{c.icon}</span>
            <div>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', letterSpacing: '0.15em', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{c.label}</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>{c.value}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Hobbies */}
      <div className="glass-card" style={{
        padding: '2rem',
        opacity: vis ? 1 : 0,
        transition: 'all 0.6s ease 0.4s',
        marginBottom: '4rem',
      }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '1rem' }}>
          When I&apos;m Not Coding
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {['📚 Reading Books', '🎮 Playing Games'].map((h, i) => (
            <span key={i} style={{
              padding: '0.5rem 1.25rem',
              border: '1px solid var(--glass-border)',
              borderRadius: '50px',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.875rem',
              color: 'var(--text-primary)',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(8px)',
            }}>
              {h}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        paddingTop: '2rem',
        borderTop: '1px solid var(--glass-border)',
        opacity: vis ? 0.6 : 0,
        transition: 'all 0.6s ease 0.5s',
      }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', color: 'var(--text-secondary)', letterSpacing: '0.1em' }}>
          © 2025 MUHAMMAD AFAQ — DESIGNED & BUILT WITH PRECISION
        </p>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: 'var(--text-secondary)', marginTop: '0.5rem', opacity: 0.5 }}>
          Next.js · Glassmorphism · Futurism
        </p>
      </div>
    </section>
  );
}
