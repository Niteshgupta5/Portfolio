import { Link } from 'react-router-dom';
import { projects } from '@/mocks/projects';

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="relative py-20 md:py-32 bg-background-900/50">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-12 md:mb-16">
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary-400 mb-3">
              Portfolio
            </p>
            <h2 className="section-title mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle mx-auto">
              A selection of projects that showcase my skills in full-stack development, UI design, and problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featured.map((project, index) => (
              <div
                key={project.id}
                className={`scroll-animate scroll-animate-delay-${index + 1} group relative rounded-2xl overflow-hidden bg-background-800/40 border border-background-700/30 hover:border-primary-400/30 transition-all duration-500 hover:-translate-y-2`}
              >
                <div className="relative h-48 md:h-52 overflow-hidden">
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
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground-950 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground-600 mb-1">{project.company}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2.5 py-1 text-xs font-medium bg-background-700/30 text-foreground-600 rounded-md">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-foreground-600 leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    View Details
                    <i className="ri-arrow-right-line" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="scroll-animate scroll-animate-delay-4 text-center mt-12 md:mt-16">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold border border-primary-400/50 text-primary-400 rounded-xl hover:bg-primary-500/10 transition-all"
            >
              Explore All Projects
              <i className="ri-arrow-right-line" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}