import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import emailjs from '@emailjs/browser';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-volunteer',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.scss'
})
export class VolunteerComponent {
  @Output() close = new EventEmitter<void>();

  volunteerForm!: FormGroup;
  isSubmitting = false;
  successMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private snackBar: MatSnackBar) {
    this.volunteerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['']
    });
  }

  onSubmit() {
    if (this.volunteerForm.valid) {
      this.isSubmitting = true;
      const formData = this.volunteerForm.value;

      this.http.post(
        'https://hooks.zapier.com/hooks/catch/22853319/2na20qj/', 
        this.volunteerForm.value
      ).subscribe({
        next: () => {
          this.successMessage = 'Thank you for volunteering!';
          this.volunteerForm.reset();
          this.isSubmitting = false;
        },
        error: (err) => {
          console.error('Zapier Error:', err); 
          this.successMessage = 'Something went wrong. Please try again later.';
          this.isSubmitting = false;
        }
      });

      emailjs.send('service_hht3qsn', 'template_abhh4yv', {
        to_name: formData.fullName,
        to_email: formData.email
      }, 'O8pvayU7YP7M6mqYR')
      .then(() => {
        this.volunteerForm.reset();
        this.isSubmitting = false;
        this.snackBar.open('Thank you for volunteering! Our team will contact you soon.', 'Close', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          panelClass: ['custom-snackbar']  
        });
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        this.isSubmitting = false;
      });

      
      
      this.onClose();
    }
    else{
      console.log('invalid form')
    }
  }

  onClose() {
    this.close.emit();
  }
}


//zap webhook url:https://hooks.zapier.com/hooks/catch/22853319/2na20qj/
