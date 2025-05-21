import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className="bg-[#1E1E1E] pt-32 pb-20 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <div className={styles.terminal}>
          <span className={styles.prompt}>$ </span>
          <h1 className={`text-5xl font-bold mb-4 uppercase ${styles.terminalText}`}>Software Engineer</h1>
        </div>
        <p className="font-mono text-[#00ff00] text-xl mb-8 max-w-xl mx-auto opacity-80">
          Passionate about creating elegant solutions to complex problems. Specializing in full-stack development with a focus on scalable, maintainable code.
        </p>
        <div className="flex gap-4 justify-center font-mono">
          <Link href="#projects" className="bg-[#00ff00] text-black px-6 py-3 rounded-md font-medium hover:bg-[#00cc00] transition-colors">
            {'>'} View_Projects
          </Link>
          <Link href="#contact" className="border border-[#00ff00] text-[#00ff00] px-6 py-3 rounded-md font-medium hover:bg-[#00ff00] hover:text-black transition-colors">
            {'>'} Contact_Me
          </Link>
        </div>
      </div>
    </section>
  );
}