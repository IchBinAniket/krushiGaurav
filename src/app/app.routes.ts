import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DonateComponent } from './components/donate/donate.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BlogComponent } from './components/blog/blog.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'donate', component: DonateComponent },
    { path: 'volunteer', component: VolunteerComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact', component: ContactComponent },    { path: '**', redirectTo: '' } // wildcard redirect to home
  ];
  
