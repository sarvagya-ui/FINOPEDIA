import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isSignUp: boolean = true;

  // Form data properties
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  fullName: string = '';
  agreeToTerms: boolean = false;

  constructor(private router: Router) { }

  /**
   * Toggles between sign-up and sign-in modes
   */
  toggleMode(): void {
    this.isSignUp = !this.isSignUp;
    // Reset form when switching modes
    this.resetForm();
  }

  /**
   * Handles form submission for both sign-up and sign-in
   */
  onSubmit(event: Event): void {
    // Prevent default form submission
    event.preventDefault();
    event.stopPropagation();

    if (this.isSignUp) {
      this.signUp();
    } else {
      this.signIn();
    }
  }

  /**
   * Handles sign-up form submission
   */
  signUp(): void {
    console.log('=== SIGN UP FORM VALUES ===');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmPassword);
    console.log('Full Name:', this.fullName);
    console.log('Agree to Terms:', this.agreeToTerms);
    console.log('==========================');

    // Validate form
    if (!this.email || !this.password || !this.confirmPassword || !this.fullName || !this.agreeToTerms) {
      alert('Please fill in all required fields and agree to terms.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // TODO: Implement actual sign-up API call
    alert('Account created successfully! Check console for form values.');
    // Don't navigate automatically - let user see the console logs
    // this.router.navigate(['/home']);
  }

  /**
   * Handles sign-in form submission
   */
  signIn(): void {
    console.log('=== SIGN IN FORM VALUES ===');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('==========================');

    // Validate form
    if (!this.email || !this.password) {
      alert('Please enter your email and password.');
      return;
    }

    // TODO: Implement actual sign-in API call
    alert('Signed in successfully! Check console for form values.');
    // Don't navigate automatically - let user see the console logs
    // this.router.navigate(['/home']);
  }

  /**
   * Resets form data
   */
  private resetForm(): void {
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.fullName = '';
    this.agreeToTerms = false;
  }

  /**
   * Navigates back to home
   */
  goBack(): void {
    this.router.navigate(['/home']);
  }
}
