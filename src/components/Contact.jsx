import useIsMobile from '../hooks/useIsMobile';

export default function Contact() {
  const isMobile = useIsMobile();

  return (
    <section style={{
      ...styles.section,
      ...(isMobile ? styles.sectionMobile : {}),
    }}>
      <div style={styles.content}>
        <h2 style={styles.heading}>
          <span style={styles.line1}>LASS UNS</span>
          <span style={styles.line2}>REDEN.</span>
        </h2>

        <div style={{
          ...styles.links,
          ...(isMobile ? styles.linksMobile : {}),
        }}>
          <a
            href="mailto:deine@email.de"
            style={{
              ...styles.link,
              ...(isMobile ? styles.linkMobile : {}),
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent)';
              e.currentTarget.style.color = 'var(--white)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--black)';
            }}
          >
            <span style={styles.linkLabel}>EMAIL</span>
            <span style={{
              ...styles.linkValue,
              ...(isMobile ? styles.linkValueMobile : {}),
            }}>deine@email.de</span>
            <span style={styles.arrow}>&rarr;</span>
          </a>

          <a
            href="https://github.com/dein-username"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...styles.link,
              ...(isMobile ? styles.linkMobile : {}),
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent)';
              e.currentTarget.style.color = 'var(--white)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--black)';
            }}
          >
            <span style={styles.linkLabel}>GITHUB</span>
            <span style={{
              ...styles.linkValue,
              ...(isMobile ? styles.linkValueMobile : {}),
            }}>github.com/dein-username</span>
            <span style={styles.arrow}>&rarr;</span>
          </a>

          <a
            href="https://linkedin.com/in/dein-profil"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...styles.link,
              ...(isMobile ? styles.linkMobile : {}),
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent)';
              e.currentTarget.style.color = 'var(--white)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--black)';
            }}
          >
            <span style={styles.linkLabel}>LINKEDIN</span>
            <span style={{
              ...styles.linkValue,
              ...(isMobile ? styles.linkValueMobile : {}),
            }}>linkedin.com/in/dein-profil</span>
            <span style={styles.arrow}>&rarr;</span>
          </a>
        </div>
      </div>

      <footer style={styles.footer}>
        <span style={styles.footerText}>
          Handgemacht. Kein Template. Kein AI Slop.
        </span>
        <span style={styles.footerText}>
          &copy; {new Date().getFullYear()}
        </span>
      </footer>
    </section>
  );
}

const styles = {
  section: {
    padding: '4rem 1.5rem 2rem',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  sectionMobile: {
    padding: '2.5rem 1rem 1.5rem',
    minHeight: '70vh',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '3rem',
  },
  heading: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 0.9,
  },
  line1: {
    fontSize: 'clamp(2rem, 7vw, 5rem)',
    fontWeight: 900,
    letterSpacing: '-0.04em',
    color: 'var(--gray)',
  },
  line2: {
    fontSize: 'clamp(4rem, 14vw, 12rem)',
    fontWeight: 900,
    letterSpacing: '-0.04em',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
  },
  linksMobile: {
    maxWidth: '100%',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '1.25rem 1.5rem',
    borderBottom: 'var(--border)',
    textDecoration: 'none',
    transition: 'background 0.2s, color 0.2s',
    cursor: 'pointer',
  },
  linkMobile: {
    gap: '0.75rem',
    padding: '1rem 0.75rem',
  },
  linkLabel: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    letterSpacing: '0.2em',
    width: '70px',
    color: 'var(--gray)',
    flexShrink: 0,
  },
  linkValue: {
    fontSize: '1rem',
    fontWeight: 700,
    flex: 1,
  },
  linkValueMobile: {
    fontSize: '0.8rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  arrow: {
    fontSize: '1.2rem',
    fontWeight: 700,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '2rem',
    marginTop: '2rem',
    borderTop: '1px solid var(--light-gray)',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  footerText: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: 'var(--gray)',
    letterSpacing: '0.05em',
  },
};
