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
  isDarkMode = false;

  constructor(private viewport: ViewportScroller) {}

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }

  toggleTheme() {
    const html = document.documentElement;
    this.isDarkMode = !html.classList.contains('dark');
    html.classList.toggle('dark');
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  scrollToSection(sectionId: string): void {
    this.isMenuOpen = false;
    this.viewport.scrollToAnchor(sectionId);
  }

}
