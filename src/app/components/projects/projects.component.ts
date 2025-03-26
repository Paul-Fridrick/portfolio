import { Component } from '@angular/core';
import { ProjectService } from '../../services/projects.service';

@Component({
  selector: 'app-projetcs',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getAllProjects().subscribe((projects) => {
      console.log(projects);
    });
  }
}
