// ============================================================
// Project types — used by src/mocks/projects.ts
// ============================================================

export interface ProjectOutcome {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  duration: string;
  company: string;
  role: string;
  tech: string[];
  description: string;
  image: string;
  featured: boolean;
  overview: string;
  features: string[];
  outcomes: ProjectOutcome[];
  live: string;
  github: string;
}

export interface Tech {
  name: string;
  icon: React.ElementType;
  color: string;
  glow: string;
};
