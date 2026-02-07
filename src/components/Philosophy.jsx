const PRINCIPLES = [
  {
    symbol: '\u2260',
    title: 'AI ist kein Ersatz f\u00fcr Denken',
    text: 'Tools sind Tools. Wer nicht versteht was er baut, baut M\u00fcll. Punkt.',
  },
  {
    symbol: '\u2234',
    title: 'Ergebnisse > Buzzwords',
    text: 'Mir ist egal ob es "GenAI" oder "Traditional ML" hei\u00dft. Was z\u00e4hlt: L\u00f6st es das Problem?',
  },
  {
    symbol: '\u03bb',
    title: 'Einfachheit ist schwer',
    text: 'Die eleganteste L\u00f6sung ist meistens die einfachste. Overengineering ist der Feind.',
  },
  {
    symbol: '\u221e',
    title: 'Lernen h\u00f6rt nie auf',
    text: 'Das Feld bewegt sich in Wochen weiter als andere in Jahren. Stillstand = R\u00fcckschritt.',
  },
];

export default function Philosophy() {
  return (
    <section style={styles.section}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>HALTUNG</h2>
        <span style={styles.sectionNote}>// keine Buzzword-Bingo-Karte</span>
      </div>

      <div style={styles.grid}>
        {PRINCIPLES.map((p, i) => (
          <div key={i} style={styles.card}>
            <span style={styles.symbol}>{p.symbol}</span>
            <h3 style={styles.cardTitle}>{p.title}</h3>
            <p style={styles.cardText}>{p.text}</p>
          </div>
        ))}
      </div>

      <div style={styles.quote}>
        <span style={styles.quoteOpen}>&ldquo;</span>
        <p style={styles.quoteText}>
          Die beste AI-L&ouml;sung ist die, bei der niemand fragt
          ob AI drinsteckt &mdash; weil sie einfach funktioniert.
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '4rem 1.5rem',
    borderBottom: '5px solid var(--black)',
    background: 'var(--black)',
    color: 'var(--white)',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: '3rem',
    borderBottom: '3px solid var(--white)',
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '0',
  },
  card: {
    border: '2px solid rgba(255,255,255,0.35)',
    padding: '2rem 1.5rem',
    marginTop: '-2px',
    marginLeft: '-2px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  symbol: {
    fontSize: '2.5rem',
    color: 'var(--accent)',
    fontWeight: 700,
    lineHeight: 1,
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: '-0.01em',
  },
  cardText: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    lineHeight: 1.7,
    color: '#b0b0b0',
  },
  quote: {
    marginTop: '4rem',
    padding: '2rem 0',
    position: 'relative',
    maxWidth: '700px',
  },
  quoteOpen: {
    fontSize: '6rem',
    color: 'var(--accent)',
    lineHeight: 0.5,
    position: 'absolute',
    top: '1rem',
    left: '-0.5rem',
    fontFamily: 'Georgia, serif',
    opacity: 0.5,
  },
  quoteText: {
    fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
    fontWeight: 700,
    lineHeight: 1.5,
    paddingLeft: '2.5rem',
    fontStyle: 'italic',
  },
};
