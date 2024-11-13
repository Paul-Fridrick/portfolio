import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  Frontend = [
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', name: 'Angular', level: 'Connaissances avancées' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript', level: 'Connaissances avancées' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg', name: 'Ionic', level: 'Connaissances avancées' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', name: 'HTML & CSS', level: 'Connaissances avancées' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', name: 'Tailwind CSS', level: 'Connaissances basiques' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React', level: 'Connaissances basiques' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', name: 'Vue', level: 'Connaissances basiques' }
  ];

  Backend = [
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'NodeJS', level: 'Connaissances avancées' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',name: 'NestJS', level: 'Connaissances avancées' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',name: 'Docker', level: 'Connaissances avancées' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',name: 'MongoDB', level: 'Connaissances avancées' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',name: 'FastAPI', level: 'Connaissances basiques' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',name: 'GO', level: 'Connaissances basiques' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',name: 'MySQL', level: 'Connaissances basiques' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',name: 'Jenkins', level: 'Connaissances basiques' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg',name: 'Kubernestes', level: 'Connaissances basiques' },
  ];
}
