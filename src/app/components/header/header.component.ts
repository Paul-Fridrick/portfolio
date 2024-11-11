import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private viewport: ViewportScroller) {}

  scrollToSection(sectionId: string): void {
    this.isMenuOpen = false;
    this.viewport.scrollToAnchor(sectionId);
  }

}
