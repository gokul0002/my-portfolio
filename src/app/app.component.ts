import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface Project {
  title: string;
  type: string;
  stack: string[];
  description: string;
  points: string[];
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(24px)' }),
        animate('650ms cubic-bezier(.2,.8,.2,1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AppComponent {
  menuOpen = false;
  darkMode = true;
  copied = false;
  activeProject = 0;

  readonly email = 'gokulsaran29@gmail.com';
  readonly phone = '+91 8825796188';
  readonly linkedin = 'https://www.linkedin.com/in/gokul-saran-6b4667207';

  readonly projects: Project[] = [
    {
      title: 'Red Pepper',
      type: 'Digital Catalogue Platform',
      stack: ['Angular 14/17', 'Tailwind CSS', 'REST APIs'],
      description: 'Interactive digital catalogue experiences created from static print catalogues for enterprise clients.',
      points: [
        'Dynamic content rendering and intuitive navigation.',
        'Reusable Angular components for fast catalogue configuration.',
        'Responsive, engagement-focused digital experiences.'
      ],
      icon: '▦'
    },
    {
      title: 'Workflow Management Tool',
      type: 'Multi-role Enterprise App',
      stack: ['Angular', 'Nx Monorepo', 'Tailwind CSS'],
      description: 'A role-based workflow platform supporting Designers, QCs, Team Leads and Clients.',
      points: [
        'Role-based views and task status tracking.',
        'Shared libraries and scalable monorepo organisation.',
        'Streamlined cross-team approval workflows.'
      ],
      icon: '⌘'
    },
    {
      title: 'Habanero',
      type: 'Data Analytics Dashboard',
      stack: ['Angular', 'Google Analytics API', 'GA4', 'Charts'],
      description: 'Analytics reporting experience that turns client traffic and engagement data into interactive dashboards.',
      points: [
        'Google Analytics and GA4 API integration.',
        'Real-time graphical reporting and key metrics.',
        'Client-friendly charts with drill-down capability.'
      ],
      icon: '◒'
    }
  ];

  readonly skills = [
    { name: 'Angular', level: 92, category: 'Frontend' },
    { name: 'TypeScript', level: 88, category: 'Frontend' },
    { name: 'JavaScript', level: 88, category: 'Frontend' },
    { name: 'React', level: 78, category: 'Frontend' },
    { name: 'Node.js / Express', level: 72, category: 'Backend' },
    { name: 'REST APIs', level: 88, category: 'Backend' },
    { name: 'Tailwind CSS', level: 90, category: 'UI' },
    { name: 'Nx Monorepo', level: 75, category: 'Architecture' },
    { name: 'Git / Bitbucket', level: 85, category: 'Tools' }
  ];

  scrollTo(id: string): void {
    this.menuOpen = false;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  nextProject(): void {
    this.activeProject = (this.activeProject + 1) % this.projects.length;
  }

  previousProject(): void {
    this.activeProject = (this.activeProject - 1 + this.projects.length) % this.projects.length;
  }

  setProject(index: number): void {
    this.activeProject = index;
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    document.documentElement.classList.toggle('light-theme', !this.darkMode);
  }

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email);
      this.copied = true;
      setTimeout(() => this.copied = false, 1800);
    } catch {
      this.copied = false;
    }
  }

  openLinkedIn(): void {
    window.open(this.linkedin, '_blank', 'noopener,noreferrer');
  }

  @HostListener('document:keydown.escape')
  closeMenu(): void {
    this.menuOpen = false;
  }
}