import { testimonials } from '@/mocks/testimonials';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-20 md:py-32 bg-background-950">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-12 md:mb-16">
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary-400 mb-3">
              Testimonials
            </p>
            <h2 className="section-title mb-4">
              What People <span className="gradient-text">Say</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Feedback from clients and collaborators who have experienced working with me firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((test, index) => (
              <div
                key={test.id}
                className={`scroll-animate scroll-animate-delay-${index + 1} relative p-6 md:p-8 rounded-2xl bg-background-800/40 border border-background-700/30 hover:border-primary-400/30 transition-all duration-500`}
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <i key={i} className="ri-star-fill text-sm text-primary-400" />
                  ))}
                </div>

                <div className="mb-6">
                  <i className="ri-double-quotes-l text-3xl text-primary-400/30 mb-2 block" />
                  <p className="text-sm text-foreground-600 leading-relaxed italic">
                    {test.feedback}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center">
                    <span className="font-heading text-sm font-bold text-primary-400">
                      {test.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground-950">{test.name}</h4>
                    <p className="text-xs text-foreground-600">
                      {test.role} {test.company}
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