import { services } from '@/mocks/services';

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 md:py-32 bg-background-900/50">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-12 md:mb-16">
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary-400 mb-3">
              What I Offer
            </p>
            <h2 className="section-title mb-4">
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Specialized development services tailored to help businesses grow and succeed in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`scroll-animate scroll-animate-delay-${(index % 3) + 1} group relative overflow-hidden p-6 md:p-8 rounded-2xl bg-background-800/40 border border-background-700/30 hover:border-primary-400/30 transition-all duration-500 hover:-translate-y-2`}
              >
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-500 via-accent-400 to-primary-500 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                <div className="absolute top-6 right-6 font-heading text-5xl font-bold text-background-700/40 group-hover:text-primary-400/20 transition-colors">
                  {service.number}
                </div>

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-5 group-hover:bg-primary-500/20 transition-colors">
                    <i className={`${service.icon} text-2xl text-primary-400`} />
                  </div>

                  <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground-950 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-foreground-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}