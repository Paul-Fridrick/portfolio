import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Project } from '../models/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsUrl = '/data/projects.json';

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }

  getProjectById(id: string): Observable<Project | undefined> {
    return this.getAllProjects().pipe(
      map(projects => projects.find(project => project.id === id))
    );
  }

  getProjectBySlug(slug: string): Observable<Project | undefined> {
    return this.getAllProjects().pipe(
      map(projects => projects.find(project => project.slug === slug))
    );
  }

  getFeaturedProjects(): Observable<Project[]> {
    return this.getAllProjects().pipe(
      map(projects => projects.filter(project => project.featured))
    );
  }
} 