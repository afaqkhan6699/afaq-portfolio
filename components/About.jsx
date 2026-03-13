'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '100+', label: 'Happy Clients' },
  { value: '5★', label: 'Client Rating' },
];

export default function About() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{ padding: '7rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '4rem',
        alignItems: 'center',
      }}>
        {/* Left: Text */}
        <div style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateX(-30px)', transition: 'all 0.7s ease' }}>
          <div className="section-label">01 — Who I Am</div>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>About Me</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '1.25rem' }}>
            I&apos;m <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Muhammad Afaq</strong>, a WordPress Developer and Website Designer based in Pakistan with over 2 years of hands-on experience crafting performant, pixel-perfect digital experiences.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '1.25rem' }}>
            I specialize in custom WordPress theme development, speed optimization, and building sophisticated sites with Elementor and Bricks Builder. My goal is always to deliver websites that&apos;s fast, clean, and built to last.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>
            Holding a BS in Software Engineering from Abasyn University and multiple Coursera certifications, I bring both academic rigor and real-world freelance experience to every project.
          </p>
        </div>

        {/* Right: Stats Grid */}
        <div style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateX(30px)', transition: 'all 0.7s ease 0.2s' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {stats.map((s, i) => (
              <div key={i} className="glass-card" style={{
                padding: '1.75rem',
                textAlign: 'center',
                animation: `pulse-border 4s ${i}s ease infinite`,
              }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--text-accent)', lineHeight: 1, marginBottom: '0.5rem' }}>
                  {s.value}
                </div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', letterSpacing: '0.12em', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Badges */}
          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['WordPress', 'Elementor', 'Bricks', 'HTML', 'CSS', 'Tailwind', 'JavaScript', 'Python'].map(t => (
              <span key={t} style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.7rem',
                color: 'var(--text-secondary)',
                padding: '0.3rem 0.75rem',
                border: '1px solid var(--glass-border)',
                borderRadius: '4px',
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.25s ease',
                cursor: 'default',
              }}
                onMouseEnter={e => { e.target.style.color = 'var(--text-accent)'; e.target.style.borderColor = 'var(--text-secondary)'; }}
                onMouseLeave={e => { e.target.style.color = 'var(--text-secondary)'; e.target.style.borderColor = 'var(--glass-border)'; }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
