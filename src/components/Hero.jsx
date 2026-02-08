import { useEffect, useRef } from 'react';
import useIsMobile from '../hooks/useIsMobile';

const ROLES = [
  'PROMPT ENGINEER',
  'AI STRATEGIST',
  'ML PRACTITIONER',
  'LLM WHISPERER',
  'DATA THINKER',
];

export default function Hero() {
  const roleRef = useRef(null);
  const indexRef = useRef(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % ROLES.length;
      const el = roleRef.current;
      if (!el) return;

      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';

      setTimeout(() => {
        el.textContent = ROLES[indexRef.current];
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 300);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section style={styles.section}>
      <div style={styles.topBar}>
        <span style={styles.label}>PORTFOLIO / 2025</span>
        {!isMobile && <span style={styles.label}>SCROLL DOWN</span>}
      </div>

      <div style={styles.content}>
        <h1 style={styles.heading}>
          <span style={styles.line1}>ICH BAUE</span>
          <span style={styles.line2}>DINGE MIT</span>
          <span style={styles.line3}>
            <span style={styles.aiText}>AI</span>
            <span style={styles.dot} />
          </span>
        </h1>

        <div style={{
          ...styles.roleBox,
          ...(isMobile ? styles.roleBoxMobile : {}),
        }}>
          <span style={styles.roleLabel}>AKTUELL:</span>
          <span ref={roleRef} style={{
            ...styles.role,
            ...(isMobile ? styles.roleMobile : {}),
          }}>
            {ROLES[0]}
          </span>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <p style={{
          ...styles.intro,
          ...(isMobile ? styles.introMobile : {}),
        }}>
          Nicht noch eine generische AI-Seite.<br />
          Hier geht es um echte Arbeit, echte Ergebnisse,<br />
          echtes Verst&auml;ndnis.
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '1.5rem',
    borderBottom: '5px solid var(--black)',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    letterSpacing: '0.1em',
    color: 'var(--gray)',
  },
  label: {
    textTransform: 'uppercase',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '2rem',
  },
  heading: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 0.9,
    fontWeight: 900,
    textTransform: 'uppercase',
  },
  line1: {
    fontSize: 'clamp(3rem, 10vw, 9rem)',
    letterSpacing: '-0.04em',
  },
  line2: {
    fontSize: 'clamp(3rem, 10vw, 9rem)',
    letterSpacing: '-0.04em',
  },
  line3: {
    fontSize: 'clamp(4rem, 14vw, 13rem)',
    letterSpacing: '-0.04em',
    display: 'flex',
    alignItems: 'center',
    gap: '0.3em',
  },
  aiText: {
    fontStyle: 'italic',
    color: 'var(--accent)',
  },
  dot: {
    width: 'clamp(12px, 2vw, 24px)',
    height: 'clamp(12px, 2vw, 24px)',
    borderRadius: '50%',
    background: 'var(--accent)',
    display: 'inline-block',
    flexShrink: 0,
  },
  roleBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.875rem',
    padding: '0.75rem 1rem',
    border: 'var(--border)',
    width: 'fit-content',
  },
  roleBoxMobile: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.4rem',
    fontSize: '0.75rem',
    width: '100%',
  },
  roleLabel: {
    color: 'var(--gray)',
    fontSize: '0.7rem',
    letterSpacing: '0.15em',
  },
  role: {
    fontWeight: 700,
    transition: 'opacity 0.3s, transform 0.3s',
    letterSpacing: '0.05em',
  },
  roleMobile: {
    fontSize: '0.75rem',
  },
  bottomBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  intro: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    lineHeight: 1.8,
    color: 'var(--gray)',
    textAlign: 'right',
    maxWidth: '380px',
  },
  introMobile: {
    textAlign: 'left',
    fontSize: '0.75rem',
    maxWidth: '100%',
  },
};
