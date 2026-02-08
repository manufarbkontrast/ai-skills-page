import { useState } from 'react';
import useIsMobile from '../hooks/useIsMobile';

const SKILLS = [
  {
    id: 'automation',
    title: 'AI Automation',
    level: 90,
    tags: ['N8N', 'Make', 'Zapier', 'API Integration'],
    description:
      'Komplexe Workflows die ganze Abteilungen entlasten. Nicht ein Zap hier und da \u2014 durchdachte Systeme mit Fehlerbehandlung, Logging und echtem Business-Impact.',
  },
  {
    id: 'agents',
    title: 'AI Agents & Chatbots',
    level: 88,
    tags: ['Claude', 'GPT-4', 'MCP', 'Custom Bots'],
    description:
      'Chatbots die nicht nach 2 Nachrichten aufgeben. Intelligentes Routing, Kontext-Management, Tool-Integration und saubere Eskalation an Menschen.',
  },
  {
    id: 'rag',
    title: 'RAG & Wissensdatenbanken',
    level: 85,
    tags: ['Pinecone', 'Supabase', 'Embeddings', 'Vector Search'],
    description:
      'Firmenwissen durchsuchbar machen \u2014 nicht mit Ctrl+F sondern mit semantischem Verst\u00e4ndnis. Chunking-Strategien, Re-Ranking, Hybrid Search.',
  },
  {
    id: 'content',
    title: 'KI-Content & Medien',
    level: 82,
    tags: ['Midjourney', 'Runway', 'ElevenLabs', 'Prompt Design'],
    description:
      'Bild, Video, Audio, Text \u2014 aber mit Strategie. Markenkonformer Output, konsistente Qualit\u00e4t, skalierbare Produktion. Kein "mach mir mal ein Bild".',
  },
  {
    id: 'web',
    title: 'Web & Dashboards',
    level: 78,
    tags: ['React', 'Supabase', 'Vite', 'Data Viz'],
    description:
      'Interne Tools und Dashboards die Daten sichtbar machen. Von der Datenbank bis zur UI \u2014 Fullstack wenn es sein muss.',
  },
  {
    id: 'strategy',
    title: 'KI-Strategie',
    level: 80,
    tags: ['Use Cases', 'ROI', 'Workshops', 'Roadmaps'],
    description:
      'Marketing-Background trifft Tech-Verst\u00e4ndnis. Wo lohnt sich KI wirklich? Welche Prozesse zuerst? Kein Buzzword-Consulting sondern konkrete Pl\u00e4ne.',
  },
];

function SkillBar({ level }) {
  return (
    <div style={styles.barOuter}>
      <div
        style={{
          ...styles.barInner,
          width: `${level}%`,
        }}
      />
      <span style={styles.barLabel}>{level}%</span>
    </div>
  );
}

function SkillCard({ skill, isExpanded, onToggle }) {
  return (
    <div
      style={{
        ...styles.card,
        ...(isExpanded ? styles.cardExpanded : {}),
      }}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onToggle()}
    >
      <div style={styles.cardHeader}>
        <span style={styles.cardId}>/{skill.id}</span>
        <h3 style={styles.cardTitle}>{skill.title}</h3>
        <SkillBar level={skill.level} />
      </div>

      <div style={styles.tags}>
        {skill.tags.map((tag) => (
          <span key={tag} style={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      {isExpanded && (
        <p style={styles.cardDesc}>{skill.description}</p>
      )}

      <span style={styles.expandHint}>
        {isExpanded ? '[\u2212]' : '[+]'}
      </span>
    </div>
  );
}

export default function SkillGrid() {
  const [expanded, setExpanded] = useState(null);
  const isMobile = useIsMobile();

  const handleToggle = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <section style={{
      ...styles.section,
      ...(isMobile ? styles.sectionMobile : {}),
    }}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>SKILLS</h2>
        <span style={styles.sectionCount}>
          {String(SKILLS.length).padStart(2, '0')} Bereiche
        </span>
      </div>

      <div style={{
        ...styles.grid,
        ...(isMobile ? styles.gridMobile : {}),
      }}>
        {SKILLS.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            isExpanded={expanded === skill.id}
            onToggle={() => handleToggle(skill.id)}
          />
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
  },
  sectionTitle: {
    fontSize: 'clamp(2rem, 6vw, 4rem)',
    fontWeight: 900,
    letterSpacing: '-0.03em',
  },
  sectionCount: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--gray)',
    letterSpacing: '0.1em',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: '0',
  },
  gridMobile: {
    gridTemplateColumns: '1fr',
  },
  card: {
    border: 'var(--border)',
    padding: '1.5rem',
    cursor: 'pointer',
    transition: 'background 0.2s',
    position: 'relative',
    marginTop: '-3px',
    marginLeft: '-3px',
  },
  cardExpanded: {
    background: 'var(--black)',
    color: 'var(--white)',
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  cardId: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: 'var(--gray)',
    letterSpacing: '0.15em',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 900,
    letterSpacing: '-0.02em',
    textTransform: 'uppercase',
  },
  barOuter: {
    width: '100%',
    height: '6px',
    background: 'var(--light-gray)',
    position: 'relative',
    marginTop: '0.25rem',
  },
  barInner: {
    height: '100%',
    background: 'var(--accent)',
    transition: 'width 0.6s ease-out',
  },
  barLabel: {
    position: 'absolute',
    right: 0,
    top: '-1.2rem',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    color: 'var(--gray)',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.4rem',
    marginBottom: '0.75rem',
  },
  tag: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    letterSpacing: '0.05em',
    padding: '0.2rem 0.5rem',
    border: '1px solid currentColor',
    textTransform: 'uppercase',
  },
  cardDesc: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    lineHeight: 1.7,
    marginTop: '0.75rem',
    opacity: 0.85,
  },
  expandHint: {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    fontWeight: 700,
  },
};
