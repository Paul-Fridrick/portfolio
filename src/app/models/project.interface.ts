import { SafeHtml } from '@angular/platform-browser';

export interface Project {
  title: string;
  slug: string;
  date: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
  order: number;
  content: string | SafeHtml;
  id: string;
} 