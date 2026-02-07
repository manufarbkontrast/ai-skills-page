export default function Marquee({ text = 'AI \u00b7 ML \u00b7 LLM \u00b7 NLP \u00b7 DATA \u00b7 AGENTS \u00b7 RAG \u00b7 FINE-TUNING \u00b7 DEPLOYMENT \u00b7 ', inverted = false }) {
  const repeated = `${text} ${text} ${text} ${text}`;

  return (
    <div
      style={{
        ...styles.wrapper,
        ...(inverted ? styles.inverted : {}),
      }}
    >
      <div style={styles.track}>
        <span style={styles.text}>{repeated}</span>
      </div>
      <style>{keyframes}</style>
    </div>
  );
}

const keyframes = `
  @keyframes marquee-scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-25%); }
  }
`;

const styles = {
  wrapper: {
    overflow: 'hidden',
    borderTop: '3px solid var(--black)',
    borderBottom: '3px solid var(--black)',
    padding: '0.75rem 0',
    background: 'var(--white)',
  },
  inverted: {
    background: 'var(--accent)',
    color: 'var(--white)',
    borderColor: 'var(--accent)',
  },
  track: {
    display: 'flex',
    whiteSpace: 'nowrap',
    animation: 'marquee-scroll 20s linear infinite',
    width: 'fit-content',
  },
  text: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
  },
};
