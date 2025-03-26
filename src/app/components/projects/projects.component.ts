import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/projects.service';
import { Project } from '../../models/project.interface';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  selectedProject: any = null;
  showModal = false;

  constructor(
    private projectsService: ProjectService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.projectsService.getAllProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
    });
  }

  openModal(project: any) {
    this.selectedProject = project;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedProject = null;
  }
}
