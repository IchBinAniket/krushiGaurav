import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: any[] = [];

  constructor(private router: Router, private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();

    setInterval(() => {
      this.projects.forEach((project) => {
        project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length;
      });
    }, 1000); // rotate every 30 seconds
  }

  goTo(route: string) {
    debugger
    // this.router.navigate([`/${route}`]);
    this.router.navigate(['/blog', route]);
  }
}
