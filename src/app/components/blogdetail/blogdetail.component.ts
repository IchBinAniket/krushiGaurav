import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogdetail',
  imports: [CommonModule],
  templateUrl: './blogdetail.component.html',
  styleUrl: './blogdetail.component.scss'
})
export class BlogdetailComponent {
  blog: any;
  safeHtmlContent: SafeHtml | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.http.get(`assets/blogs/${slug}.json`).subscribe(data => {
      this.blog = data;
      this.safeHtmlContent = this.sanitizer.bypassSecurityTrustHtml(this.blog.htmlContent);
    });
  }

  goTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
