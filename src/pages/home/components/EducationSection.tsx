import { education } from '@/mocks/education';

export default function EducationSection() {
  return (
    <section id="education" className="relative py-20 md:py-32 bg-background-900/50">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-animate text-center mb-12 md:mb-16">
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary-400 mb-3">
              Learning
            </p>
            <h2 className="section-title mb-4">
              Education & <span className="gradient-text">Certifications</span>
            </h2>
            <p className="section-subtitle mx-auto">
              My academic background and continuous learning journey that fuels my technical expertise.
            </p>
          </div>

          <div className="relative">
            <div className="absolute md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary-400/50 via-secondary-400/20 to-transparent"/>

            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`scroll-animate scroll-animate-delay-${index + 1} relative flex flex-col md:flex-row items-start gap-6 md:gap-12 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden md:block md:w-1/2" />

                <div className="absolute md:line-dot md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary-400 ring-4 ring-background-900 mt-1.5 z-10" />

                <div className="pl-12 md:pl-0 md:w-1/2">
                  <div className="group relative overflow-hidden glass-card rounded-2xl p-6 md:p-8 hover:border-secondary-400/20 transition-all duration-300 hover:-translate-y-1">
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-secondary-500 via-accent-400 to-secondary-500 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary-500/10 flex items-center justify-center shrink-0">
                        <i className="ri-graduation-cap-line text-secondary-400 text-lg" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground-950">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-secondary-400 font-medium">{edu.institution}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-foreground-600 mb-4">
                      <i className="ri-calendar-line" />
                      <span>{edu.year}</span>
                      <span className="mx-2">&middot;</span>
                      <i className="ri-map-pin-line" />
                      <span>{edu.location}</span>
                    </div>

                    <p className="text-sm text-foreground-600 leading-relaxed">
                      {edu.description}
                    </p>
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