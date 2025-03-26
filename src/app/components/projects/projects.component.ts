import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/projects.service';
import { Project } from '../../models/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectsService: ProjectService) {}

  ngOnInit(): void {
    this.projectsService.getAllProjects().subscribe((projects: Project[]) => {
      console.log(projects);
      this.projects = projects;
    });
  }
}
