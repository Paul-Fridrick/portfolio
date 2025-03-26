import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';

export interface Project {
  id: string;
  title: string;
  slug: string;
  date: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  order?: number;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projectsCache$: Observable<Project[]> | null = null;
  
  constructor(private http: HttpClient) { }
  
  getProjects(): Observable<Project[]> {
    if (!this.projectsCache$) {
      this.projectsCache$ = this.http.get<Project[]>('assets/data/projects.json').pipe(
        shareReplay(1),
        catchError(error => {
          console.error('Erreur lors du chargement des projets:', error);
          return of([]);
        })
      );
    }
    return this.projectsCache$;
  }
  
  getFeaturedProjects(): Observable<Project[]> {
    return this.getProjects().pipe(
      map(projects => projects.filter(p => p.featured))
    );
  }
  
  getProjectBySlug(slug: string): Observable<Project | null> {
    return this.getProjects().pipe(
      map(projects => projects.find(p => p.slug === slug) || null)
    );
  }
}