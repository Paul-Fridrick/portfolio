import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/projects.service';
import { Project } from '../../models/project.interface';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private projectsService: ProjectService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.projectsService.getAllProjects().subscribe((projects: Project[]) => {
      this.projects = projects.map(project => ({
        ...project,
        content: this.sanitizer.bypassSecurityTrustHtml(typeof project.content === 'string' ? project.content : '')
      }));
    });
  }
}
