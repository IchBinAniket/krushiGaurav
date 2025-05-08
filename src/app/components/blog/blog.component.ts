import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-blog',
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  blogs: any[] = [];

  constructor(private http: HttpClient, private router: Router) {  }

  ngOnInit() {
    this.http.get<any[]>('assets/blogs/blogs.json').subscribe(data => {
      this.blogs = data;
    });
  }

  goToBlog(slug: string): void {
    this.router.navigate(['/blog', slug]);
  }
}
