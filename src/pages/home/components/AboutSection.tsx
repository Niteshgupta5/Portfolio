//Images
import { projects } from '@/mocks/projects';
import ProfileImg from '/images/profile-1.png';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-32 bg-background-950">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="scroll-animate lg:w-2/5 flex flex-col items-center">
              <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden gradient-border">
                <img
                  src={ProfileImg}
                  alt="Nitesh Gupta"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-950/60 to-transparent" />
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8 w-full max-w-sm">
                {[
                  { number: '3+', label: 'Years Experience' },
                  { number: `${projects.length}+`, label: 'Projects Delivered' },
                  { number: '9+', label: 'Happy Clients' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-3 rounded-xl bg-background-800/40 border border-background-700/30"
                  >
                    <div className="font-heading text-xl md:text-2xl font-bold text-primary-400">
                      {stat.number}
                    </div>
                    <div className="text-xs text-foreground-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="scroll-animate scroll-animate-delay-2 lg:w-3/5">
              <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary-400 mb-3">
                About Me
              </p>
              <h2 className="section-title mb-6">
                Turning Ideas Into{' '}
                <span className="gradient-text">Digital Reality</span>
              </h2>
              <div className="space-y-4 text-foreground-600 leading-relaxed">
                <p>
                  I am a Full Stack Developer with 3+ years of professional experience building scalable, high-performance, and user-centric web applications using modern technologies like React.js, Node.js, Next.js, TypeScript, and various databases.
                </p>
                <p>
                  Since 2023, I have worked across the full development lifecycle — from building responsive and intuitive interfaces and developing RESTful APIs, database design, authentication systems, real-time features, and third-party integrations.
                </p>
                <p>
                  I’ve contributed to applications across SaaS, healthcare, e-commerce, workflow automation, and analytics domains, working on scalable admin panels, role-based access control, dynamic dashboards, and business-critical backend systems. I also have experience with Redis, RabbitMQ, microservices, and performance optimization.
                </p>
                <p>
                  Alongside full-stack development, I’m actively exploring AI and LLM technologies, including integrating LLM APIs into applications, AI-assisted development, and building practical AI-powered features and workflows. I’m particularly interested in combining modern web technologies with AI to create smarter and more efficient products.
                </p>
                <p>
                  I enjoy solving complex problems, learning emerging technologies, and turning ideas into reliable digital products. I’m always looking for opportunities to build meaningful products, improve user experiences, and grow as an engineer.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {['Problem Solver', 'Team Player', 'Fast Learner', 'AI Enthusiast'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-sm font-medium rounded-full bg-background-800/60 border border-background-700/30 text-foreground-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}