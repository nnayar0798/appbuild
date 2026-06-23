import React from 'react';
import { useNavigate } from 'react-router-dom';
 
const HOW_IT_WORKS = [
  { icon: 'ti-user-check', title: 'Share what you\'re navigating', body: 'A short intake — no last name, no address. Just what you\'re going through and what kind of support feels right.' },
  { icon: 'ti-users',      title: 'Get matched with peers',        body: 'We connect you with 2–3 neighbours who\'ve been through something similar and want to help.' },
  { icon: 'ti-messages',   title: 'Connect on your terms',         body: 'Chat, meet for tea, or just know someone nearby gets it. No pressure, no schedule.' },
];
 
export default function Landing() {
  const navigate = useNavigate();
 
  return (
    <div style={{ maxWidth: 480, margin: '0 auto', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(160deg, var(--teal-50) 0%, var(--purple-50) 100%)',
        padding: '3.5rem 1.5rem 2.5rem',
        textAlign: 'center',
      }}>
        <span style={{
          display: 'inline-block',
          background: 'white',
          border: '1px solid var(--border)',
          borderRadius: 40,
          fontSize: 13,
          fontWeight: 500,
          color: 'var(--text-muted)',
          padding: '5px 14px',
          marginBottom: '1.5rem',
          letterSpacing: '0.02em',
        }}>
          Community · Not therapy
        </span>
 
        <h1 style={{ fontSize: 'clamp(32px, 8vw, 44px)', lineHeight: 1.2, color: 'var(--purple-900)', marginBottom: '1rem' }}>
          You don't have<br />to carry it alone
        </h1>
 
        <p style={{ fontSize: 16, color: 'var(--purple-700)', lineHeight: 1.7, maxWidth: 320, margin: '0 auto 2rem', fontFamily: 'DM Sans' }}>
          Sahaara connects you with neighbours who understand what you're going through — grief, illness, loneliness, transition.
        </p>
 
        <button className="btn-primary" style={{ width: '100%', maxWidth: 280, display: 'block', margin: '0 auto 0.75rem' }} onClick={() => navigate('/join')}>
          Find my people
        </button>
        <button className="btn-outline" style={{ width: '100%', maxWidth: 280, display: 'block', margin: '0 auto' }} onClick={() => navigate('/feed')}>
          Explore the community
        </button>
      </div>
 
      {/* How it works */}
      <div style={{ padding: '2rem 1.25rem 1rem' }}>
        <p style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
          How it works
        </p>
        {HOW_IT_WORKS.map((item, i) => (
          <div key={i} className="card" style={{ display: 'flex', gap: 14, marginBottom: '0.75rem', alignItems: 'flex-start' }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--purple-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <i className={`ti ${item.icon}`} style={{ fontSize: 18, color: 'var(--purple-500)' }} aria-hidden="true" />
            </div>
            <div>
              <p style={{ fontWeight: 500, fontSize: 15, marginBottom: 4 }}>{item.title}</p>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
 
      {/* Disclaimer */}
      <div style={{ padding: '0 1.25rem 2.5rem' }}>
        <div className="disclaimer">
          <strong>This is not therapy. This is community.</strong>
          Sahaara is peer support — not a substitute for professional mental health care. If you are in crisis, please contact iCall: 9152987821.
        </div>
      </div>
    </div>
  );
}
 
