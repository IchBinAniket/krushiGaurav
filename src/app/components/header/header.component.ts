import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { VolunteerComponent } from '../volunteer/volunteer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule,VolunteerComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;
  showVolunteer = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  openVolunteer(event: Event) {
    event.preventDefault();
    this.showVolunteer = true;
  }
}
