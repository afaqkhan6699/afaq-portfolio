'use client';

import { useEffect, useState } from 'react';

const ROLES = ['WordPress Developer', 'Website Designer', 'Theme Builder', 'Frontend Developer'];

export default function Hero() {
  const [typed, setTyped] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < currentRole.length) {
          setTyped(currentRole.slice(0, charIndex + 1));
          setCharIndex((current) => current + 1);
        } else {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else if (charIndex > 0) {
        setTyped(currentRole.slice(0, charIndex - 1));
        setCharIndex((current) => current - 1);
      } else {
        setDeleting(false);
        setRoleIndex((current) => (current + 1) % ROLES.length);
      }
    }, deleting ? 60 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '8rem 2rem 4rem',
      }}
    >
      <div style={{ position: 'absolute', inset: 0 }} className="hero-grid-bg" />

      <div className="hero-glow" />

      <div
        style={{
          position: 'absolute',
          top: '8rem',
          left: '2rem',
          opacity: 0.2,
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.65rem',
          color: 'var(--text-primary)',
          letterSpacing: '0.1em',
        }}
      >
        {['[ 00.1 ]', '[ PORTFOLIO ]', '[ 2026 ]'].map((label, index) => (
          <div
            key={label}
            style={{ marginBottom: '0.5rem', animation: `fadeInLeft 0.5s ${index * 0.2}s ease both` }}
          >
            {label}
          </div>
        ))}
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '800px',
          animation: 'fadeInUp 0.8s 0.2s ease both',
        }}
      >
        <div className="hero-badge">
          <span className="badge-dot green" />
          <span>Available for Work</span>
        </div>

        <div style={{ position: 'relative', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1
            style={{
              fontSize: 'clamp(2rem, 10vw, 7rem)',
              fontWeight: 800,
              fontFamily: "'Syne', sans-serif",
              color: 'var(--text-accent)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              position: 'relative',
              margin: 0,
            }}
          >
            Muhammad
          </h1>
          <h1
            className="outline-text"
            style={{
              fontSize: 'clamp(2rem, 10vw, 7rem)',
              fontWeight: 800,
              fontFamily: "'Syne', sans-serif",
              lineHeight: 1,
              letterSpacing: '-0.03em',
              marginTop: '-0.5rem',
              margin: 0,
            }}
          >
            Afaq
          </h1>
        </div>

        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            minHeight: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2px',
          }}
        >
          <span style={{ color: 'var(--text-secondary)', marginRight: '0.5rem' }}>{'//'}</span>
          <span style={{ color: 'var(--text-primary)' }}>{typed}</span>
          <span style={{ animation: 'blink 1s infinite', color: 'var(--text-accent)' }}>|</span>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#experience" className="btn-primary">
            View My Work ↓
          </a>
          <a href="#contact" className="btn-outline">
            Contact Me →
          </a>
        </div>

        <div
          style={{
            marginTop: '4rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            opacity: 0.6,
          }}
        >
          <div
            style={{
              width: '24px',
              height: '40px',
              border: '2px solid var(--text-secondary)',
              borderRadius: '12px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '3px',
                height: '8px',
                background: 'var(--text-secondary)',
                borderRadius: '2px',
                animation: 'scroll-wheel 1.5s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}