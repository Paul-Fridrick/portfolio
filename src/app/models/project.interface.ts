import { SafeHtml } from '@angular/platform-browser';

export interface Project {
  title: string;
  slug: string;
  date: string;
  image: string;
  description: string;
  fonctionnalites: string[];
  defis: string[];
  solutions: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  order: number;
  id: string;
} 