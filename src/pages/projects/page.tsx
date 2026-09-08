import { Link } from 'react-router-dom';
import { projects } from '@/mocks/projects';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ProjectsPage() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background-950 pt-24 md:pt-32 pb-20 md:pb-32">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground-600 hover:text-primary-400 transition-colors"
            >
              <i className="ri-arrow-left-line" />
              Back to Home
            </Link>
          </div>

          <div className="scroll-animate scroll-animate-delay-1 mb-12 md:mb-16">
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary-400 mb-3">
              Portfolio
            </p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-4">
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-base text-foreground-600 max-w-2xl">
              A complete collection of my work across various domains, technologies, and challenges. Each project represents a unique problem solved with clean code and thoughtful design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`scroll-animate scroll-animate-delay-${(index % 3) + 1} group relative rounded-2xl overflow-hidden bg-background-800/40 border border-background-700/30 hover:border-primary-400/30 transition-all duration-500 hover:-translate-y-2`}
              >
                <div className="relative h-52 md:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-900/90 via-background-900/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-xs font-medium bg-background-950/80 backdrop-blur-sm text-foreground-700 rounded-full">
                      {project.duration}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 text-xs font-medium bg-primary-500/20 backdrop-blur-sm text-primary-400 rounded-full">
                      {project.company}
                    </span>
                  </div>
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground-950 mb-3">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-foreground-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-background-700/30">
                    <span className="text-xs text-foreground-600 whitespace-nowrap">
                      <i className="ri-calendar-line mr-1" />
                      {project.duration}
                    </span>
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-primary-500 text-background-950 rounded-lg hover:bg-primary-600 transition-all whitespace-nowrap"
                    >
                      View Details
                      <i className="ri-arrow-right-line" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}