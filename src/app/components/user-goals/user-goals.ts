import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService, FormData } from '../../services/email.service';

@Component({
  selector: 'app-user-goals',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-goals.html',
  styleUrls: ['./user-goals.scss']
})
export class UserGoalsComponent {
  userGoalsForm: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;
  showSuccessModal = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private emailService: EmailService
  ) {
    this.userGoalsForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      goals: this.fb.array([]),
      experienceLevel: ['', [Validators.required]],
      timeCommitment: ['', [Validators.required]],
      additionalInfo: ['']
    });
  }



  /**
   * Handles form submission
   */
  async onSubmit(): Promise<void> {
    if (this.userGoalsForm.valid) {
      try {
        // Prepare form data for email
        const formData: FormData = {
          firstName: this.userGoalsForm.get('firstName')?.value,
          lastName: this.userGoalsForm.get('lastName')?.value,
          email: this.userGoalsForm.get('email')?.value,
          phone: this.userGoalsForm.get('phone')?.value,
          goals: this.userGoalsForm.get('goals')?.value || [],
          experienceLevel: this.userGoalsForm.get('experienceLevel')?.value,
          timeCommitment: this.userGoalsForm.get('timeCommitment')?.value,
          additionalInfo: this.userGoalsForm.get('additionalInfo')?.value
        };

        // Send email with form details
        await this.emailService.sendFormData(formData);

        console.log('Form submitted:', this.userGoalsForm.value);

        // Show success modal
        console.log('Setting showSuccessModal to true');
        this.showSuccessModal = true;
        console.log('showSuccessModal is now:', this.showSuccessModal);

        // Reset form
        this.userGoalsForm.reset();

        // Auto-hide modal after 3 seconds and navigate to home
        setTimeout(() => {
          this.closeModalAndNavigate();
        }, 3000);

        // You can redirect to a dashboard or learning page here
        // this.router.navigate(['/dashboard']);
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Thank you for your information! We\'ll review your details and contact you soon. (Email notification failed)');
      }
    } else {
      this.markFormGroupTouched();
    }
  }



  /**
   * Handles goal checkbox changes
   */
  onGoalChange(goal: string, event: any): void {
    const goalsArray = this.userGoalsForm.get('goals') as FormArray;
    if (event.target.checked) {
      goalsArray.push(this.fb.control(goal));
    } else {
      const index = goalsArray.value.indexOf(goal);
      if (index > -1) {
        goalsArray.removeAt(index);
      }
    }
  }

  /**
   * Checks if a goal is selected
   */
  isGoalSelected(goal: string): boolean {
    const goalsArray = this.userGoalsForm.get('goals') as FormArray;
    return goalsArray.value.includes(goal);
  }

  /**
   * Checks if any goals are selected
   */
  hasSelectedGoals(): boolean {
    const goalsArray = this.userGoalsForm.get('goals') as FormArray;
    return goalsArray.length > 0;
  }

  /**
   * Closes the modal and navigates to home screen
   */
  closeModalAndNavigate(): void {
    this.showSuccessModal = false;
    this.router.navigate(['/home']);
  }

  /**
   * Scrolls to the top of the page smoothly
   */
  private scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  /**
   * Marks all form controls as touched to trigger validation display
   */
  private markFormGroupTouched(): void {
    Object.keys(this.userGoalsForm.controls).forEach(key => {
      const control = this.userGoalsForm.get(key);
      control?.markAsTouched();
    });
  }
}
