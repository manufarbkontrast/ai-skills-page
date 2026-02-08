import Hero from './components/Hero';
import Marquee from './components/Marquee';
import SkillGrid from './components/SkillGrid';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import NoiseOverlay from './components/NoiseOverlay';

export default function App() {
  return (
    <>
      <NoiseOverlay />
      <main>
        <Hero />
        <Marquee inverted />
        <SkillGrid />
        <Projects />
        <Marquee text={"VECTOR SEARCH \u00b7 EMBEDDINGS \u00b7 SUPABASE \u00b7 REACT \u00b7 CLAUDE \u00b7 GPT-4 \u00b7 PINECONE \u00b7 MAKE \u00b7 "} />
        <Philosophy />
        <Timeline />
        <Marquee
          text={"BEREIT F\u00dcR DEIN PROJEKT \u00b7 "}
          inverted
        />
        <Contact />
      </main>
    </>
  );
}
