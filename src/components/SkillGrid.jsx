import { useState } from 'react';

const SKILLS = [
  {
    id: 'llm',
    title: 'LLM Engineering',
    level: 92,
    tags: ['GPT-4', 'Claude', 'Llama', 'Fine-Tuning'],
    description:
      'Prompt Design, Chain-of-Thought, RAG-Pipelines, Evaluation & Benchmarking. Nicht einfach "schreib mir was" sondern systematisches Engineering.',
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    level: 78,
    tags: ['PyTorch', 'scikit-learn', 'Transformers', 'MLflow'],
    description:
      'Von klassischem ML bis Deep Learning. Modellauswahl, Feature Engineering, Hyperparameter-Tuning, Deployment.',
  },
  {
    id: 'data',
    title: 'Data Engineering',
    level: 85,
    tags: ['Python', 'SQL', 'Pandas', 'dbt'],
    description:
      'Daten-Pipelines die nicht um 3 Uhr morgens crashen. ETL/ELT, Data Quality, Orchestrierung, Monitoring.',
  },
  {
    id: 'agents',
    title: 'AI Agents',
    level: 88,
    tags: ['LangChain', 'CrewAI', 'Tool Use', 'MCP'],
    description:
      'Autonome Systeme die tats\u00e4chlich funktionieren. Multi-Agent Orchestrierung, Tool Integration, Guardrails.',
  },
  {
    id: 'vision',
    title: 'Computer Vision',
    level: 65,
    tags: ['OpenCV', 'YOLO', 'Diffusion', 'OCR'],
    description:
      'Objekterkennung, Bildklassifikation, generative Modelle. Solides Fundament, kein Spezialist.',
  },
  {
    id: 'infra',
    title: 'AI Infrastructure',
    level: 80,
    tags: ['Docker', 'AWS', 'Vector DBs', 'APIs'],
    description:
      'Vom Notebook zur Produktion. Deployment, Skalierung, Kosten-Optimierung, Monitoring von AI-Systemen.',
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

  const handleToggle = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <section style={styles.section}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>SKILLS</h2>
        <span style={styles.sectionCount}>
          {String(SKILLS.length).padStart(2, '0')} Bereiche
        </span>
      </div>

      <div style={styles.grid}>
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
