import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VolunteerComponent } from '../volunteer/volunteer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [VolunteerComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showVolunteer = false;

  constructor(private router: Router) {}

  goTo(route: string) {
    this.router.navigate([`/${route}`]);
  }

  openVolunteer(event: Event) {
    event.preventDefault();
    this.showVolunteer = true;
  }
}
