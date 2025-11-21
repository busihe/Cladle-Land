import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MissionVision } from './components/MissionVision';
import { Projects } from './components/Projects';
import { Values } from './components/Values';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './styles/globals.css';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Projects />
        <Values />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
