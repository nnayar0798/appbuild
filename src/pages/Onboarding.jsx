import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SITUATIONS = [
  { emoji: '🕊️', label: 'Grief & loss',       desc: 'Losing someone or something important' },
  { emoji: '🏥', label: 'Illness',              desc: 'My own health or a loved one\'s' },
  { emoji: '🌀', label: 'Life transition',      desc: 'Divorce, job change, moving, identity' },
  { emoji: '🤍', label: 'Loneliness',           desc: 'Feeling disconnected or unseen' },
  { emoji: '👨‍👩‍👧', label: 'Caregiving',          desc: 'Supporting someone who needs me' },
  { emoji: '😔', label: 'Low mood',             desc: 'Feeling low, flat, or lost' },
  { emoji: '😰', label: 'Anxiety',              desc: 'Worry, dread, or overwhelm' },
  { emoji: '✨', label: 'Something else',       desc: 'I\'ll share more when I\'m ready' },
];

const SUPPORT_TYPES = [
  { emoji: '👂', label: 'Someone to listen',   desc: 'No advice — just presence' },
  { emoji: '🗺️', label: 'Practical guidance',  desc: 'Someone who navigated this' },
  { emoji: '☕', label: 'Meet in person',       desc: 'A walk, tea, or just nearby' },
  { emoji: '💬', label: 'Chat at my pace',      desc: 'Low-pressure, no schedule' },
];

export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0); // 0 = situation, 1 = support, 2 = done
  const [situation, setSituation] = useState(null);
  const [support, setSupport] = useState(null);

  const canNext = step === 0 ? situation !== null : support !== null;

  function handleNext() {
    if (step === 0) { setStep(1); return; }
    setStep(2);
    setTimeout(() => navigate('/matched'), 1800);
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,600;1,400&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #F7F5F2; font-family: 'Inter', sans-serif; }

        .ob-root {
          max-width: 480px;
          margin: 0 auto;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* NAV */
        .ob-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.1rem 1.5rem;
          background: rgba(247,245,242,0.92);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          position: sticky;
          top: 0;
          z-index: 10;
        }
        .ob-logo {
          font-family: 'Lora', serif;
          font-size: 20px;
          font-weight: 600;
          color: #3B2F6B;
        }
        .ob-back {
          font-size: 13px;
          color: #9B91C4;
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          padding: 4px 0;
        }
        .ob-back:hover { color: #3B2F6B; }

        /* PROGRESS */
        .ob-progress {
          padding: 1.25rem 1.5rem 0;
        }
        .ob-progress-track {
          height: 4px;
          background: #E8E4F5;
          border-radius: 4px;
          overflow: hidden;
        }
        .ob-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #5B48A8, #7EC8C8);
          border-radius: 4px;
          transition: width 0.4s ease;
        }
        .ob-step-label {
          font-size: 11px;
          color: #9B91C4;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-top: 8px;
        }

        /* CONTENT */
        .ob-content {
          flex: 1;
          padding: 2rem 1.25rem 1.5rem;
        }
        .ob-heading {
          font-family: 'Lora', serif;
          font-size: 26px;
          font-weight: 600;
          color: #1a1535;
          line-height: 1.25;
          margin-bottom: 0.4rem;
        }
        .ob-heading em { font-style: italic; color: #5B48A8; }
        .ob-subheading {
          font-size: 14px;
          color: #6B6485;
          margin-bottom: 1.75rem;
          line-height: 1.6;
        }

        /* GRID */
        .ob-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 2rem;
        }
        .ob-option {
          background: white;
          border: 1.5px solid #E8E4F5;
          border-radius: 16px;
          padding: 1rem 0.875rem;
          cursor: pointer;
          text-align: left;
          transition: border-color 0.15s, box-shadow 0.15s, transform 0.15s;
          font-family: 'Inter', sans-serif;
        }
        .ob-option:hover {
          border-color: #9B91C4;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(59,47,107,0.1);
        }
        .ob-option.selected {
          border-color: #5B48A8;
          background: #F3F0FC;
          box-shadow: 0 0 0 3px rgba(91,72,168,0.12);
        }
        .ob-option-emoji { font-size: 22px; margin-bottom: 6px; display: block; }
        .ob-option-label {
          font-size: 13px;
          font-weight: 600;
          color: #1a1535;
          margin-bottom: 3px;
          line-height: 1.3;
        }
        .ob-option-desc {
          font-size: 11.5px;
          color: #9B91C4;
          line-height: 1.5;
        }

        /* FOOTER */
        .ob-footer {
          padding: 1rem 1.25rem 2rem;
        }
        .ob-btn {
          width: 100%;
          padding: 14px;
          background: #3B2F6B;
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(59,47,107,0.28);
          transition: background 0.15s, transform 0.15s, opacity 0.15s;
        }
        .ob-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
          box-shadow: none;
        }
        .ob-btn:not(:disabled):hover {
          background: #4e3d8a;
          transform: translateY(-1px);
        }
        .ob-safe {
          font-size: 11.5px;
          color: #B0A8CC;
          text-align: center;
          margin-top: 10px;
          line-height: 1.5;
        }

        /* DONE STATE */
        .ob-done {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem;
          text-align: center;
          animation: fadeUp 0.5s ease forwards;
        }
        .ob-done-icon {
          font-size: 52px;
          margin-bottom: 1.25rem;
          animation: pulse 1.2s ease infinite;
        }
        .ob-done h2 {
          font-family: 'Lora', serif;
          font-size: 24px;
          color: #1a1535;
          margin-bottom: 0.6rem;
        }
        .ob-done p { font-size: 14px; color: #6B6485; line-height: 1.65; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.08); }
        }
        @media (prefers-reduced-motion: reduce) { * { transition: none !important; animation: none !important; } }
      `}</style>

      <div className="ob-root">
        {step < 2 ? (
          <>
            {/* Nav */}
            <nav className="ob-nav">
              <span className="ob-logo">sahaara</span>
              {step === 1 && (
                <button className="ob-back" onClick={() => setStep(0)}>← Back</button>
              )}
            </nav>

            {/* Progress */}
            <div className="ob-progress">
              <div className="ob-progress-track">
                <div className="ob-progress-fill" style={{ width: step === 0 ? '50%' : '100%' }} />
              </div>
              <p className="ob-step-label">Step {step + 1} of 2</p>
            </div>

            {/* Content */}
            <div className="ob-content">
              {step === 0 ? (
                <>
                  <h1 className="ob-heading">What are you <em>navigating</em>?</h1>
                  <p className="ob-subheading">Choose what feels closest. You can always share more later.</p>
                  <div className="ob-grid">
                    {SITUATIONS.map((s, i) => (
                      <button
                        key={i}
                        className={`ob-option${situation === i ? ' selected' : ''}`}
                        onClick={() => setSituation(i)}
                      >
                        <span className="ob-option-emoji">{s.emoji}</span>
                        <p className="ob-option-label">{s.label}</p>
                        <p className="ob-option-desc">{s.desc}</p>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h1 className="ob-heading">What kind of <em>support</em> feels right?</h1>
                  <p className="ob-subheading">There's no wrong answer — just what you need right now.</p>
                  <div className="ob-grid">
                    {SUPPORT_TYPES.map((s, i) => (
                      <button
                        key={i}
                        className={`ob-option${support === i ? ' selected' : ''}`}
                        onClick={() => setSupport(i)}
                      >
                        <span className="ob-option-emoji">{s.emoji}</span>
                        <p className="ob-option-label">{s.label}</p>
                        <p className="ob-option-desc">{s.desc}</p>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="ob-footer">
              <button className="ob-btn" disabled={!canNext} onClick={handleNext}>
                {step === 0 ? 'Continue' : 'Find my people'}
              </button>
              <p className="ob-safe">No last name. No address. Always private.</p>
            </div>
          </>
        ) : (
          <div className="ob-done">
            <div className="ob-done-icon">🤝</div>
            <h2>Finding your people…</h2>
            <p>We're looking for neighbours who understand.<br />This only takes a moment.</p>
          </div>
        )}
      </div>
    </>
  );
}
