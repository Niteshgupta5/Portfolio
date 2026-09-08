import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { projects } from '@/mocks/projects';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ProjectDetailPage() {
  useScrollAnimation();
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  const goToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
    let attempts = 0;
    const timer = window.setInterval(() => {
      attempts += 1;
      const el = document.getElementById('contact');
      if (el) {
        window.clearInterval(timer);
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (attempts > 30) {
        window.clearInterval(timer);
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background-950 pt-24 md:pt-32 pb-20 flex flex-col items-center justify-center text-center px-4">
        <p className="font-heading text-5xl font-bold gradient-text mb-4">Project Not Found</p>
        <p className="text-foreground-600 mb-8 max-w-md">
          Sorry, we couldn&apos;t find the project you were looking for. It may have been moved or the link is incorrect.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-primary-500 text-background-950 rounded-xl hover:bg-primary-600 transition-all whitespace-nowrap"
        >
          <i className="ri-arrow-left-line" />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-950 pt-24 md:pt-32 pb-20 md:pb-32">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="scroll-animate mb-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground-600 hover:text-primary-400 transition-colors"
            >
              <i className="ri-arrow-left-line" />
              Back to Projects
            </Link>
          </div>

          <div className="scroll-animate scroll-animate-delay-1 mb-8 md:mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-primary-500/15 text-primary-400 rounded-full">
                {project.company}
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-background-800 text-foreground-600 rounded-full">
                {project.role}
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-background-800 text-foreground-600 rounded-full">
                <i className="ri-calendar-line mr-1" />
                {project.duration}
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight gradient-text mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-medium bg-background-800 text-foreground-600 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="scroll-animate scroll-animate-delay-2 relative rounded-3xl overflow-hidden border border-background-700/30 mb-10 md:mb-12">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-[420px] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 right-4 flex gap-3">
              {
                project.live &&
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-primary-500 text-background-950 rounded-lg hover:bg-primary-600 transition-all whitespace-nowrap"
                >
                  <i className="ri-external-link-line" />
                  Live Demo
                </a>
              }
              {
                project.github && 
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-background-900/80 backdrop-blur-sm text-foreground-950 border border-foreground-700/30 rounded-lg hover:border-primary-400 transition-all whitespace-nowrap"
                >
                  <i className="ri-github-line" />
                  Source Code
                </a>
              }
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {project.outcomes.map((stat, index) => (
              <div
                key={stat.label}
                className={`scroll-animate scroll-animate-delay-${(index % 3) + 1} rounded-2xl bg-background-800/40 border border-background-700/30 p-6 text-center hover:border-primary-400/30 transition-all duration-300 hover:-translate-y-1`}
              >
                <p className="font-heading text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                <p className="text-sm text-foreground-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="scroll-animate mb-12 md:mb-16">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground-950 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary-500/15 flex items-center justify-center text-primary-400 shrink-0">
                <i className="ri-quill-pen-line" />
              </span>
              Project Overview
            </h2>
            <p className="text-base text-foreground-600 leading-relaxed max-w-3xl">{project.overview}</p>
          </div>

          <div className="scroll-animate mb-12 md:mb-16">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground-950 mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-accent-500/15 flex items-center justify-center text-accent-400 shrink-0">
                <i className="ri-list-check-2" />
              </span>
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-background-800/40 border border-background-700/30"
                >
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-primary-500/15 text-primary-400 flex items-center justify-center shrink-0">
                    <i className="ri-check-line text-sm" />
                  </span>
                  <span className="text-sm text-foreground-600 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="scroll-animate scroll-animate-delay-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-6 md:p-8 rounded-2xl gradient-border bg-background-900/60">
            <div className="flex-1">
              <h3 className="font-heading text-lg font-semibold text-foreground-950 mb-1">
                Interested in this kind of project?
              </h3>
              <p className="text-sm text-foreground-600">
                Let&apos;s discuss how I can help bring your idea to life with similar results.
              </p>
            </div>
            <Link
              to="/#contact"
              onClick={goToContact}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold bg-primary-500 text-background-950 rounded-xl hover:bg-primary-600 transition-all whitespace-nowrap"
            >
              Get In Touch
              <i className="ri-arrow-right-line" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}