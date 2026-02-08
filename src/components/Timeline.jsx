import useIsMobile from '../hooks/useIsMobile';

const EVENTS = [
  {
    year: '2021',
    title: 'Erste Schritte',
    detail: 'Python, Data Science Grundlagen, erste ML-Modelle mit scikit-learn',
  },
  {
    year: '2022',
    title: 'Deep Learning',
    detail: 'PyTorch, Computer Vision, NLP Basics, erstes Deployment',
  },
  {
    year: '2023',
    title: 'LLM Revolution',
    detail: 'Prompt Engineering, Fine-Tuning, RAG-Systeme, erstes Produktiv-System',
  },
  {
    year: '2024',
    title: 'Agent Era',
    detail: 'Multi-Agent Systeme, MCP, AI Infrastructure, Produktionssysteme',
  },
  {
    year: 'JETZT',
    title: 'Was kommt',
    detail: 'Multimodale Systeme, Agent Frameworks, AI-native Produkte',
  },
];

export default function Timeline() {
  const isMobile = useIsMobile();

  return (
    <section style={{
      ...styles.section,
      ...(isMobile ? styles.sectionMobile : {}),
    }}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>TIMELINE</h2>
        <span style={styles.sectionNote}>// der Weg hierher</span>
      </div>

      <div style={styles.timeline}>
        {EVENTS.map((event, i) => {
          const isLast = i === EVENTS.length - 1;
          return (
            <div key={event.year} style={{
              ...styles.row,
              ...(isMobile ? styles.rowMobile : {}),
            }}>
              <div style={styles.yearCol}>
                <span
                  style={{
                    ...styles.year,
                    ...(isLast ? styles.yearActive : {}),
                  }}
                >
                  {event.year}
                </span>
              </div>

              <div style={styles.lineCol}>
                <div
                  style={{
                    ...styles.dot,
                    ...(isLast ? styles.dotActive : {}),
                  }}
                />
                {!isLast && <div style={styles.line} />}
              </div>

              <div style={styles.contentCol}>
                <h3
                  style={{
                    ...styles.title,
                    ...(isLast ? styles.titleActive : {}),
                  }}
                >
                  {event.title}
                </h3>
                <p style={styles.detail}>{event.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '4rem 1.5rem',
    borderBottom: '5px solid var(--black)',
  },
  sectionMobile: {
    padding: '2.5rem 1rem',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: '3rem',
    borderBottom: 'var(--border)',
    paddingBottom: '1rem',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  sectionTitle: {
    fontSize: 'clamp(2rem, 6vw, 4rem)',
    fontWeight: 900,
    letterSpacing: '-0.03em',
  },
  sectionNote: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--gray)',
    letterSpacing: '0.05em',
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '700px',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '80px 30px 1fr',
    gap: '0.5rem',
    minHeight: '100px',
  },
  rowMobile: {
    gridTemplateColumns: '50px 24px 1fr',
    gap: '0.4rem',
    minHeight: '80px',
  },
  yearCol: {
    textAlign: 'right',
    paddingTop: '0.1rem',
  },
  year: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
    fontWeight: 700,
    letterSpacing: '0.05em',
    color: 'var(--gray)',
  },
  yearActive: {
    color: 'var(--accent)',
    fontSize: '1rem',
  },
  lineCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  dot: {
    width: '10px',
    height: '10px',
    border: '3px solid var(--black)',
    borderRadius: '50%',
    background: 'var(--white)',
    flexShrink: 0,
    marginTop: '0.3rem',
  },
  dotActive: {
    background: 'var(--accent)',
    borderColor: 'var(--accent)',
    width: '14px',
    height: '14px',
  },
  line: {
    width: '3px',
    flex: 1,
    background: 'var(--black)',
    marginTop: '4px',
  },
  contentCol: {
    paddingBottom: '2rem',
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: '-0.01em',
    marginBottom: '0.3rem',
  },
  titleActive: {
    color: 'var(--accent)',
  },
  detail: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    lineHeight: 1.7,
    color: 'var(--gray)',
  },
};
