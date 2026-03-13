'use client';
import { useEffect, useRef, useState } from 'react';

const PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 8 + 4,
  delay: Math.random() * 5,
}));

export default function Hero() {
  const [typed, setTyped] = useState('');
  const roles = ['WordPress Developer', 'Website Designer', 'Theme Builder', 'Frontend Developer'];
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setTyped(current.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        if (charIdx > 0) {
          setTyped(current.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        } else {
          setDeleting(false);
          setRoleIdx(r => (r + 1) % roles.length);
        }
      }
    }, deleting ? 60 : 100);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx, roles]);

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '8rem 2rem 4rem',
    }}>
      {/* Animated Grid Background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(var(--glass-border) 1px, transparent 1px),
          linear-gradient(90deg, var(--glass-border) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        animation: 'grid-move 12s linear infinite',
        opacity: 0.4,
      }} />

      {/* Radial gradient center glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Floating Particles */}
      {PARTICLES.map(p => (
        <div key={p.id} style={{
          position: 'absolute',
          left: `${p.x}%`,
          top: `${p.y}%`,
          width: `${p.size}px`,
          height: `${p.size}px`,
          borderRadius: '50%',
          background: 'var(--text-secondary)',
          animation: `float ${p.duration}s ${p.delay}s ease-in-out infinite`,
          opacity: 0.3,
          pointerEvents: 'none',
        }} />
      ))}

      {/* Corner Decorations */}
      <div style={{ position: 'absolute', top: '8rem', left: '2rem', opacity: 0.2, fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: 'var(--text-primary)', letterSpacing: '0.1em' }}>
        {['[ 00.1 ]', '[ PORTFOLIO ]', '[ 2026 ]'].map((t, i) => (
          <div key={i} style={{ marginBottom: '0.5rem', animation: `fadeInLeft 0.5s ${i * 0.2}s ease both` }}>{t}</div>
        ))}
      </div>

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1,
        textAlign: 'center',
        maxWidth: '800px',
        animation: 'fadeInUp 0.8s 0.2s ease both',
      }}>
        {/* Pre-label */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: '50px',
          padding: '0.4rem 1rem',
          marginBottom: '2rem',
          backdropFilter: 'blur(12px)',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', display: 'inline-block', animation: 'blink 2s infinite' }} />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
            Available for Work
          </span>
        </div>

        {/* Name with Glitch */}
        <div style={{ position: 'relative', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            fontWeight: 800,
            fontFamily: "'Syne', sans-serif",
            color: 'var(--text-accent)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            position: 'relative',
            margin: 0,
          }}>
            Muhammad
          </h1>
          <h1 style={{
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            fontWeight: 800,
            fontFamily: "'Syne', sans-serif",
            color: 'transparent',
            WebkitTextStroke: '1px var(--glass-border)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            marginTop: '-0.5rem',
            margin: '0',
            marginTop: '-0.5rem',
          }}>
            Afaq
          </h1>
        </div>

        {/* Typed Role */}
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
          color: 'var(--text-secondary)',
          marginBottom: '2.5rem',
          minHeight: '2rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px',
        }}>
          <span style={{ color: 'var(--text-secondary)', marginRight: '0.5rem' }}>//</span>
          <span style={{ color: 'var(--text-primary)' }}>{typed}</span>
          <span style={{ animation: 'blink 1s infinite', color: 'var(--text-accent)' }}>|</span>
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#experience" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.875rem 2rem',
            borderRadius: '50px',
            background: 'var(--text-accent)',
            color: 'var(--bg-primary)',
            textDecoration: 'none',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: '0.9rem',
            transition: 'all 0.3s ease',
            letterSpacing: '0.02em',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 30px var(--accent-glow)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            View My Work ↓
          </a>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.875rem 2rem',
            borderRadius: '50px',
            background: 'transparent',
            color: 'var(--text-accent)',
            border: '1px solid var(--glass-border)',
            textDecoration: 'none',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: '0.9rem',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text-secondary)'; e.currentTarget.style.background = 'var(--glass-bg)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.background = 'transparent'; }}
          >
            Contact Me →
          </a>
        </div>

        {/* Scroll indicator with mouse */}
        <div style={{
          marginTop: '4rem',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
          opacity: 0.6,
        }}>
          {/* Mouse icon with scroll wheel animation */}
          <div style={{
            width: '24px',
            height: '40px',
            border: '2px solid var(--text-secondary)',
            borderRadius: '12px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {/* Scroll wheel */}
            <div style={{
              width: '3px',
              height: '8px',
              background: 'var(--text-secondary)',
              borderRadius: '2px',
              animation: 'scroll-wheel 1.5s ease-in-out infinite',
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
