import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  nom: string = 'Paul Fridrick';
  titre: string = 'Développeur Angular & Backend';
  accroche: string = 'Automatisation, APIs, Projets dynamiques';
}
