const PROJECTS = [
  {
    num: '01',
    title: 'RAG Pipeline f\u00fcr Rechtsdokumente',
    stack: 'LangChain / Pinecone / GPT-4',
    result: '73% weniger Recherchezeit',
    year: '2024',
    description:
      'Retrieval-Augmented Generation System f\u00fcr eine Kanzlei. Chunking-Strategie, Embedding-Optimierung, Hybrid Search mit Re-Ranking.',
  },
  {
    num: '02',
    title: 'Multi-Agent Kundenservice',
    stack: 'CrewAI / Claude / PostgreSQL',
    result: '89% automatisierte Anfragen',
    year: '2024',
    description:
      'Autonomes Agent-System mit Routing, Eskalations-Logik und menschlicher \u00dcbergabe. Inklusive Sentiment-Analyse und Qualit\u00e4ts-Monitoring.',
  },
  {
    num: '03',
    title: 'Predictive Maintenance ML',
    stack: 'PyTorch / MLflow / AWS SageMaker',
    result: '40% weniger Ausf\u00e4lle',
    year: '2023',
    description:
      'Zeitreihen-Modell f\u00fcr industrielle Sensordaten. Feature Engineering, Anomalie-Erkennung, automatisiertes Retraining.',
  },
  {
    num: '04',
    title: 'Content Generation Engine',
    stack: 'Fine-tuned Llama / FastAPI / Redis',
    result: '5x Content-Output',
    year: '2024',
    description:
      'Ma\u00dfgeschneidertes LLM f\u00fcr Marken-konformen Content. Domain-spezifisches Fine-Tuning, Style Transfer, Qualit\u00e4tskontrolle.',
  },
];

function ProjectRow({ project }) {
  return (
    <div style={styles.row}>
      <div style={styles.numCol}>
        <span style={styles.num}>{project.num}</span>
      </div>

      <div style={styles.mainCol}>
        <h3 style={styles.title}>{project.title}</h3>
        <p style={styles.desc}>{project.description}</p>
        <div style={styles.meta}>
          <span style={styles.stack}>{project.stack}</span>
          <span style={styles.year}>{project.year}</span>
        </div>
      </div>

      <div style={styles.resultCol}>
        <div style={styles.resultBox}>
          <span style={styles.resultValue}>{project.result}</span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section style={styles.section}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>PROJEKTE</h2>
        <span style={styles.sectionNote}>{'// ausgewählte Arbeiten'}</span>
      </div>

      <div style={styles.list}>
        {PROJECTS.map((project) => (
          <ProjectRow key={project.num} project={project} />
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '4rem 1.5rem',
    borderBottom: '5px solid var(--black)',
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
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '60px 1fr auto',
    gap: '1.5rem',
    padding: '2rem 0',
    borderBottom: 'var(--border)',
    alignItems: 'start',
  },
  numCol: {},
  num: {
    fontFamily: 'var(--font-mono)',
    fontSize: '2.5rem',
    fontWeight: 700,
    color: 'var(--light-gray)',
    lineHeight: 1,
  },
  mainCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: 900,
    letterSpacing: '-0.01em',
    textTransform: 'uppercase',
  },
  desc: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    lineHeight: 1.7,
    color: 'var(--gray)',
    maxWidth: '520px',
  },
  meta: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  stack: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    letterSpacing: '0.05em',
    padding: '0.3rem 0.6rem',
    border: '1px solid var(--light-gray)',
    color: 'var(--gray)',
  },
  year: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: 'var(--gray)',
    letterSpacing: '0.1em',
  },
  resultCol: {
    display: 'flex',
    alignItems: 'center',
  },
  resultBox: {
    background: 'var(--black)',
    color: 'var(--white)',
    padding: '0.6rem 1rem',
    transform: 'rotate(-1deg)',
  },
  resultValue: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.05em',
    whiteSpace: 'nowrap',
  },
};
