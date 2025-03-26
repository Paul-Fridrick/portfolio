import { Component } from '@angular/core';
import { ProjectsService, Project } from '../../services/projects.service';

@Component({
  selector: 'app-projetcs',
  standalone: true,
  imports: [],
  templateUrl: './projetcs.component.html',
})
export class ProjetcsComponent {
  projects: Project[] = [];
  featuredProjects: Project[] = [];

  constructor(private projectsService: ProjectsService) {
    this.projectsService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }

  getFeaturedProjects() {
    this.projectsService.getFeaturedProjects().subscribe((projects) => {
      this.featuredProjects = projects;
      console.log(this.featuredProjects);
    });
  }



}
