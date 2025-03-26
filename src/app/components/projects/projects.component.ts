import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/projects.service';
import { Project } from '../../models/project.interface';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  selectedProject: Project | null = null;
  showModal = false;

  constructor(private projectsService: ProjectService) {}

  ngOnInit(): void {
    this.projectsService.getAllProjects().subscribe((projects: Project[]) => {
      this.projects = projects.sort((a, b) => a.order - b.order);
    });
  }

  getDescription(content: string): string {
    const match = content.match(/<h2>Description<\/h2>\s*<p>(.*?)<\/p>/s);
    return match ? match[1] : '';
  }

  openModal(project: Project) {
    this.selectedProject = project;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedProject = null;
  }
}
