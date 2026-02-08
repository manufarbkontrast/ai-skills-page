import useIsMobile from '../hooks/useIsMobile';

const PROJECTS = [
  {
    num: '01',
    title: 'Content-Maschine f\u00fcr Marketing',
    stack: 'N8N / Claude / Supabase / React',
    result: '10x schnellere Produktion',
    year: '2025',
    description:
      'Internes Tool das den kompletten Content-Workflow automatisiert. Von Briefing \u00fcber Texterstellung bis zur Freigabe \u2014 mehrstufige Qualit\u00e4tskontrolle, Markenstimme als System-Prompt, direkter Export in CMS.',
  },
  {
    num: '02',
    title: 'Firmen-Wissensdatenbank mit RAG',
    stack: 'Pinecone / Embeddings / GPT-4 / N8N',
    result: 'Wissen in Sekunden statt Stunden',
    year: '2025',
    description:
      'Hunderte interne Dokumente, SOPs und Richtlinien in einer durchsuchbaren RAG-Pipeline. Mitarbeiter fragen in nat\u00fcrlicher Sprache, das System liefert pr\u00e4zise Antworten mit Quellenangabe.',
  },
  {
    num: '03',
    title: 'KPI-Dashboard mit Live-Daten',
    stack: 'React / Supabase / N8N / Recharts',
    result: 'Echtzeit-\u00dcberblick f\u00fcr F\u00fchrung',
    year: '2024',
    description:
      'Daten aus 5+ Quellen automatisch zusammengef\u00fchrt und visualisiert. Tagesaktuelle Marketing-KPIs, Vertriebs-Pipeline und Finanz\u00fcbersicht in einem Interface. Kein manuelles Excel mehr.',
  },
  {
    num: '04',
    title: 'AI-Chatbot f\u00fcr internen Support',
    stack: 'Claude / MCP / Supabase / Webhooks',
    result: '70% weniger Support-Tickets',
    year: '2025',
    description:
      'Chatbot der interne FAQs, HR-Fragen und IT-Anfragen beantwortet. Angebunden an Wissensdatenbank, mit Eskalation an echte Menschen wenn n\u00f6tig. Kein generischer Bot \u2014 trainiert auf firmenspezifische Prozesse.',
  },
];

function ProjectRow({ project, isMobile }) {
  if (isMobile) {
    return (
      <div style={styles.rowMobile}>
        <div style={styles.rowMobileHeader}>
          <span style={styles.numMobile}>{project.num}</span>
          <div style={styles.resultBox}>
            <span style={styles.resultValue}>{project.result}</span>
          </div>
        </div>
        <h3 style={styles.title}>{project.title}</h3>
        <p style={styles.desc}>{project.description}</p>
        <div style={styles.meta}>
          <span style={styles.stack}>{project.stack}</span>
          <span style={styles.year}>{project.year}</span>
        </div>
      </div>
    );
  }

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
  const isMobile = useIsMobile();

  return (
    <section style={{
      ...styles.section,
      ...(isMobile ? styles.sectionMobile : {}),
    }}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>PROJEKTE</h2>
        <span style={styles.sectionNote}>{'// ausgew\u00e4hlte Arbeiten'}</span>
      </div>

      <div style={styles.list}>
        {PROJECTS.map((project) => (
          <ProjectRow key={project.num} project={project} isMobile={isMobile} />
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
  rowMobile: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    padding: '1.5rem 0',
    borderBottom: 'var(--border)',
  },
  rowMobileHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  numCol: {},
  num: {
    fontFamily: 'var(--font-mono)',
    fontSize: '2.5rem',
    fontWeight: 700,
    color: 'var(--light-gray)',
    lineHeight: 1,
  },
  numMobile: {
    fontFamily: 'var(--font-mono)',
    fontSize: '1.8rem',
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
