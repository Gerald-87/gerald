import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <div className="bg-primary text-white p-4 rounded-md m-4">
        Gerald Limbando
      </div>
      <Header />
     <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}