const PRINCIPLES = [
  {
    symbol: '\u2260',
    title: 'Marketing-Denke trifft Tech',
    text: 'Ich komme nicht aus der IT-Ecke. Ich komme daher wo die Probleme sind \u2014 und baue L\u00f6sungen die Leute tats\u00e4chlich benutzen.',
  },
  {
    symbol: '\u2234',
    title: 'Systeme statt Spielerei',
    text: 'Kein "guck mal was AI kann". Jedes Projekt hat ein Ziel: Prozesse schneller, Entscheidungen besser, Teams entlastet.',
  },
  {
    symbol: '\u03bb',
    title: 'Erst verstehen, dann bauen',
    text: 'Bevor eine Zeile Code geschrieben wird: Was ist das eigentliche Problem? Oft ist die L\u00f6sung einfacher als gedacht.',
  },
  {
    symbol: '\u221e',
    title: '1 Jahr, 100% Intensit\u00e4t',
    text: 'Von Null auf produktive Systeme in 12 Monaten. Jeden Tag gelernt, gebaut, verworfen, besser gemacht. Das h\u00f6rt nicht auf.',
  },
];

export default function Philosophy() {
  return (
    <section style={styles.section}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>HALTUNG</h2>
        <span style={styles.sectionNote}>// warum ich so arbeite</span>
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
          Wer im Marketing gelernt hat zuzuh&ouml;ren,
          baut bessere Systeme &mdash; weil er wei&szlig; was
          die Leute wirklich brauchen.
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
