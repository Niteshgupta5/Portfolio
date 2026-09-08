import { useState } from 'react';
import { techStack } from '@/mocks/tech';
import { Tech } from '@/types';

function TechCard({ tech }: { tech: Tech }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={
        hovered
          ? {
              borderColor: `${tech.glow}66`,
              boxShadow: `0 0 0 1px ${tech.glow}33, 0 0 0 3px ${tech.glow}0d, 0 22px 45px -18px ${tech.glow}b3`,
            }
          : undefined
      }
      className="group flex flex-col items-center gap-3 p-5 md:p-6 rounded-xl bg-background-800/40 border border-background-700/40 transition-all duration-300 hover:-translate-y-1.5 hover:bg-background-800/70"
    >
      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg bg-background-700/40 transition-all duration-300 group-hover:scale-110">
        <tech.icon className={`text-xl md:text-2xl ${tech.color} transition-transform animate-bounce-3`} />
      </div>
      <span className="text-sm font-medium text-foreground-700 group-hover:text-foreground-950 transition-colors text-center whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}

export default function TechSection() {
  return (
    <section id="skills" className="relative py-20 md:py-32 bg-background-950">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="scroll-animate text-center mb-12 md:mb-16">
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary-400 mb-3">
              Toolkit
            </p>
            <h2 className="section-title mb-4">
              Technologies & <span className="gradient-text">Skills</span>
            </h2>
            <p className="section-subtitle mx-auto">
              The modern tools and technologies I use to bring ideas to life with clean, efficient code.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-5">
            {techStack.map((tech, index) => (
              <div key={tech.name} className={`scroll-animate scroll-animate-delay-${(index % 5) + 1}`}>
                <TechCard tech={tech} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}