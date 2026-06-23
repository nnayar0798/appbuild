import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const HOW_IT_WORKS = [
  {
    number: '01',
    icon: '🤲',
    title: 'Share what you\'re navigating',
    body: 'A short intake — no last name, no address. Just what you\'re going through and what kind of support feels right.',
  },
  {
    number: '02',
    icon: '🤝',
    title: 'Get matched with peers',
    body: 'We connect you with 2–3 neighbours who\'ve been through something similar and want to help.',
  },
  {
    number: '03',
    icon: '💬',
    title: 'Connect on your terms',
    body: 'Chat, meet for tea, or just know someone nearby gets it. No pressure, no schedule.',
  },
];

const TESTIMONIALS = [
  { quote: "I didn't need advice. I needed someone who'd been there.", name: "Priya, Bengaluru" },
  { quote: "It felt like talking to a neighbour who truly understood.", name: "Arjun, Mumbai" },
];

export default function Landing() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Fade-in hero on mount
    const hero = heroRef.current;
    if (hero) {
      hero.style.opacity = '0';
      hero.style.transform = 'translateY(18px)';
      requestAnimationFrame(() => {
        hero.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
      });
    }

    // Staggered card reveal using IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Inter:wght@400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #F7F5F2;
          font-family: 'Inter', sans-serif;
          color: #1a1a2e;
        }

        .landing-root {
          max-width: 480px;
          margin: 0 auto;
          min-height: 100vh;
          background: #F7F5F2;
        }

        /* ── NAV ── */
        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.1rem 1.5rem;
          position: sticky;
          top: 0;
          background: rgba(247,245,242,0.92);
          backdrop-filter: blur(8px);
          z-index: 10;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .nav-logo {
          font-family: 'Lora', serif;
          font-size: 20px;
          font-weight: 600;
          color: #3B2F6B;
          letter-spacing: -0.02em;
        }
        .nav-badge {
          font-size: 11px;
          font-weight: 500;
          color: #6B5EA8;
          background: #EDE9F8;
          border-radius: 20px;
          padding: 4px 10px;
          letter-spacing: 0.03em;
        }

        /* ── HERO ── */
        .hero {
          padding: 3rem 1.5rem 2.5rem;
          text-align: center;
          background: linear-gradient(170deg, #EBF4F5 0%, #EDE9F8 60%, #F7F5F2 100%);
          border-radius: 0 0 32px 32px;
        }
        .hero-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6B5EA8;
          margin-bottom: 1.25rem;
        }
        .hero h1 {
          font-family: 'Lora', serif;
          font-size: clamp(30px, 8vw, 42px);
          line-height: 1.18;
          color: #1a1535;
          margin-bottom: 1.1rem;
          font-weight: 600;
        }
        .hero h1 em {
          font-style: italic;
          color: #5B48A8;
        }
        .hero-sub {
          font-size: 15px;
          color: #4a4466;
          line-height: 1.75;
          max-width: 300px;
          margin: 0 auto 2rem;
          font-weight: 400;
        }
        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 6px;
          margin-bottom: 2rem;
        }
        .hero-tag {
          font-size: 12px;
          color: #6B5EA8;
          background: rgba(107,94,168,0.1);
          border-radius: 20px;
          padding: 4px 12px;
          font-weight: 500;
        }

        /* ── BUTTONS ── */
        .btn-primary {
          width: 100%;
          max-width: 280px;
          display: block;
          margin: 0 auto 0.75rem;
          padding: 14px 24px;
          background: #3B2F6B;
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          letter-spacing: 0.01em;
          box-shadow: 0 4px 16px rgba(59,47,107,0.28);
          transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
        }
        .btn-primary:hover {
          background: #4e3d8a;
          transform: translateY(-1px);
          box-shadow: 0 6px 22px rgba(59,47,107,0.35);
        }
        .btn-primary:active { transform: translateY(0); }

        .btn-outline {
          width: 100%;
          max-width: 280px;
          display: block;
          margin: 0 auto;
          padding: 13px 24px;
          background: transparent;
          color: #3B2F6B;
          border: 1.5px solid #3B2F6B;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease, transform 0.15s ease;
        }
        .btn-outline:hover {
          background: #3B2F6B;
          color: white;
          transform: translateY(-1px);
        }

        /* ── SECTION LABEL ── */
        .section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9B91C4;
          margin-bottom: 1.25rem;
          padding: 0 1.5rem;
        }

        /* ── HOW IT WORKS ── */
        .hiw-section {
          padding: 2.5rem 0 1rem;
        }
        .hiw-card {
          margin: 0 1.25rem 0.875rem;
          background: white;
          border-radius: 18px;
          padding: 1.25rem;
          display: flex;
          gap: 14px;
          align-items: flex-start;
          box-shadow: 0 2px 12px rgba(59,47,107,0.07);
          border: 1px solid rgba(107,94,168,0.08);
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
        .hiw-card:hover {
          box-shadow: 0 6px 24px rgba(59,47,107,0.13);
          transform: translateY(-2px);
        }
        .hiw-number {
          font-family: 'Lora', serif;
          font-size: 11px;
          font-weight: 600;
          color: #C4B8F0;
          letter-spacing: 0.05em;
          flex-shrink: 0;
          margin-top: 2px;
          width: 20px;
        }
        .hiw-emoji {
          font-size: 22px;
          flex-shrink: 0;
          line-height: 1;
          margin-top: 1px;
        }
        .hiw-title {
          font-weight: 600;
          font-size: 14.5px;
          color: #1a1535;
          margin-bottom: 5px;
          line-height: 1.3;
        }
        .hiw-body {
          font-size: 13px;
          color: #6B6485;
          line-height: 1.65;
        }

        /* ── TESTIMONIALS ── */
        .testimonials {
          padding: 0.5rem 1.25rem 1.5rem;
        }
        .testimonial-card {
          background: linear-gradient(135deg, #EDE9F8, #E8F4F5);
          border-radius: 18px;
          padding: 1.25rem 1.5rem;
          margin-bottom: 0.75rem;
          border: 1px solid rgba(107,94,168,0.1);
        }
        .testimonial-quote {
          font-family: 'Lora', serif;
          font-style: italic;
          font-size: 15px;
          color: #2d2450;
          line-height: 1.6;
          margin-bottom: 0.6rem;
        }
        .testimonial-name {
          font-size: 12px;
          font-weight: 500;
          color: #8B7EBF;
          letter-spacing: 0.03em;
        }

        /* ── DISCLAIMER ── */
        .disclaimer {
          margin: 0 1.25rem 2.5rem;
          background: #FFF8EC;
          border: 1px solid #F5D78E;
          border-radius: 14px;
          padding: 1rem 1.1rem;
          font-size: 12.5px;
          color: #7A6020;
          line-height: 1.65;
        }
        .disclaimer strong {
          display: block;
          margin-bottom: 4px;
          font-size: 13px;
          color: #5A4410;
        }

        /* ── FOOTER ── */
        .footer {
          text-align: center;
          padding: 1rem 1.5rem 2rem;
          font-size: 12px;
          color: #B0A8CC;
        }

        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; }
        }
      `}</style>

      <div className="landing-root">
        {/* Nav */}
        <nav className="nav">
          <span className="nav-logo">sahaara</span>
          <span className="nav-badge">Peer support · Not therapy</span>
        </nav>

        {/* Hero */}
        <div className="hero" ref={heroRef}>
          <span className="hero-eyebrow">For when life gets heavy</span>
          <h1>
            You don't have to<br />
            carry it <em>alone</em>
          </h1>
          <p className="hero-sub">
            Sahaara connects you with neighbours who understand what you're going through.
          </p>
          <div className="hero-tags">
            {['grief', 'illness', 'loneliness', 'transition', 'caregiving'].map(t => (
              <span key={t} className="hero-tag">{t}</span>
            ))}
          </div>
          <button className="btn-primary" onClick={() => navigate('/join')}>
            Find my people
          </button>
          <button className="btn-outline" onClick={() => navigate('/feed')}>
            Explore the community
          </button>
        </div>

        {/* How it works */}
        <div className="hiw-section">
          <p className="section-label">How it works</p>
          {HOW_IT_WORKS.map((item, i) => (
            <div
              key={i}
              className="hiw-card"
              ref={el => cardsRef.current[i] = el}
            >
              <span className="hiw-number">{item.number}</span>
              <span className="hiw-emoji">{item.icon}</span>
              <div>
                <p className="hiw-title">{item.title}</p>
                <p className="hiw-body">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="testimonials">
          <p className="section-label">From the community</p>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="testimonial-card"
              ref={el => cardsRef.current[HOW_IT_WORKS.length + i] = el}
            >
              <p className="testimonial-quote">"{t.quote}"</p>
              <p className="testimonial-name">— {t.name}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div
          className="disclaimer"
          ref={el => cardsRef.current[HOW_IT_WORKS.length + TESTIMONIALS.length] = el}
        >
          <strong>This is not therapy. This is community.</strong>
          Sahaara is peer support — not a substitute for professional mental health care. If you are in crisis, please contact iCall: 9152987821.
        </div>

        <div className="footer">Made with care · Sahaara © 2025</div>
      </div>
    </>
  );
}
