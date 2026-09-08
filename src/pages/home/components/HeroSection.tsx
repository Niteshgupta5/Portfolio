import { useEffect, useState } from 'react';
import ParticleCanvas from '@/components/feature/ParticleCanvas';
import { FiDownload } from 'react-icons/fi';

const roles = ['Full Stack Engineer', 'Backend Developer', 'Frontend Developer'];

function TypeWriter({ words }: { words: string[] }) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = word.slice(0, displayed.length + 1);
          setDisplayed(next);
          if (next === word) {
            setTimeout(() => setDeleting(true), 1400);
          }
        } else {
          const next = word.slice(0, displayed.length - 1);
          setDisplayed(next);
          if (next === '') {
            setDeleting(false);
            setWordIndex((index) => (index + 1) % words.length);
          }
        }
      },
      deleting ? 35 : 85,
    );
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex, words]);

  return (
    <span className="inline-flex items-center">
      <span className="gradient-text">{displayed}</span>
      <span
        className="ml-1 inline-block h-7 md:h-9 w-[2px] rounded-full bg-accent-400 animate-pulse"
        aria-hidden="true"
      />
    </span>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background-950 via-background-900 to-background-950" />
      <ParticleCanvas />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-transparent" />

      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="scroll-animate text-sm md:text-base font-medium tracking-[0.2em] uppercase text-primary-400 mb-6">
            Welcome to my digital world
          </p>

          <h1 className="scroll-animate scroll-animate-delay-1 font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-5">
            Hi, I&apos;m <span className="gradient-text">Nitesh Gupta</span>
          </h1>

          <div className="scroll-animate scroll-animate-delay-2 h-10 md:h-12 flex items-center justify-center mb-8 font-heading text-xl md:text-3xl font-semibold">
            <TypeWriter words={roles} />
          </div>

          <p className="scroll-animate scroll-animate-delay-3 text-base md:text-lg text-foreground-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            I craft scalable, high-performance web applications that transform complex ideas into elegant, user-friendly digital experiences.
          </p>

          <div className="scroll-animate scroll-animate-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 text-sm font-semibold bg-primary-500 text-background-950 rounded-xl hover:bg-primary-600 transition-all hover:scale-105 whitespace-nowrap"
            >
              View My Work
            </a>
            <a
              href="/doc/Nitesh-Gupta-Resume(Full Stack Developer).pdf"
              target="_blank"
              className="px-8 py-3.5 text-sm font-semibold border border-foreground-700/30 text-foreground-700 rounded-xl hover:border-primary-400 hover:text-primary-400 transition-all whitespace-nowrap inline flex items=center gap-1"
              download
            >
              <FiDownload size={18} className="mr-2" />
              Resume
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-foreground-600 hover:text-primary-400 transition-colors"
          aria-label="Scroll down"
        >
          <i className="ri-arrow-down-double-line text-2xl" />
        </a>
      </div>
    </section>
  );
}