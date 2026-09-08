import { experience } from '@/mocks/experience';

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 md:py-32 bg-background-950">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-animate text-center mb-12 md:mb-16">
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary-400 mb-3">
              Career
            </p>
            <h2 className="section-title mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="section-subtitle mx-auto">
              My professional journey and the roles that have shaped my expertise in software development.
            </p>
          </div>

          <div className="relative">
            <div className="absolute md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-400/50 via-primary-400/20 to-transparent" />

            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`scroll-animate scroll-animate-delay-${index + 1} relative flex flex-col md:flex-row items-start gap-6 md:gap-12 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden md:block md:w-1/2" />

                <div className="absolute md:line-dot md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-400 ring-4 ring-background-950 mt-1.5 z-10" />

                <div className="pl-12 md:pl-0 md:w-1/2">
                  <div className="group relative overflow-hidden glass-card rounded-2xl p-6 md:p-8 hover:border-primary-400/20 transition-all duration-300 hover:-translate-y-1">
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-500 via-accent-400 to-primary-500 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center shrink-0">
                        <i className="ri-briefcase-4-line text-primary-400 text-lg" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground-950">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-primary-400 font-medium">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-foreground-600 mb-4">
                      <i className="ri-calendar-line" />
                      <span>{exp.duration}</span>
                      <span className="mx-2">&middot;</span>
                      <i className="ri-map-pin-line" />
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-foreground-600 leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}