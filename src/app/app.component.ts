import { Component } from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {PresentationComponent} from './components/presentation/presentation.component';
import {SkillsComponent} from './components/skills/skills.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {ContactComponent} from './components/contact/contact.component';
import {FooterComponent} from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    PresentationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PF Solution';
}
