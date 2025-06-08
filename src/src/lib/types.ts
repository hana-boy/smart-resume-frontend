export type Skill = {
  category: string;
  name: string;
  experience: string;
  level: string;
};

export type WorkProject = {
  title: string;
  period: { from: string; to: string };
  teamSize: number;
  engineers: number;
  description: string;
  phases: string[];
  role: string;
  challenges: string;
  contributions: string;
  outcomes: string;
  technologies: {
    languages: string[];
    frameworks: string[];
    db: string[];
    os: string[];
    infra: string[];
    tools: string[];
  };
};

export type WorkHistory = {
  company: {
    name: string;
    employmentType: string;
    industry: string;
    capital: string;
    employees: number;
    listed: boolean;
    period: { from: string; to: string };
  };
  projects: WorkProject[];
};

export type ResumeRequest = {
  basicInfo: {
    name: string;
    createdAt: string;
    email: string;
    links: { github?: string; zenn?: string };
  };
  summary: {
    overview: string;
    highlights: string[];
  };
  skills: Skill[];
  workHistory: WorkHistory[];
  certifications: { name: string; date: string }[];
  activities: {
    studyGroups: string[];
    selfLearning: string[];
  };
};
