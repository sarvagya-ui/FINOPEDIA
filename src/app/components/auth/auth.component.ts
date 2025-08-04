import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
    isSignUp: boolean = true;

    constructor(private router: Router) { }

    /**
     * Toggles between sign-up and sign-in modes
     */
    toggleMode(): void {
        this.isSignUp = !this.isSignUp;
    }

    /**
     * Handles form submission for both sign-up and sign-in
     */
    onSubmit(): void {
        if (this.isSignUp) {
            console.log('Sign up submitted');
            // TODO: Implement sign-up logic
        } else {
            console.log('Sign in submitted');
            // TODO: Implement sign-in logic
        }
    }

    /**
     * Navigates back to home
     */
    goBack(): void {
        this.router.navigate(['/home']);
    }
}
