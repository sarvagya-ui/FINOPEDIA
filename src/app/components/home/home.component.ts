import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) { }

  /**
   * Opens WhatsApp with a pre-filled message for demo requests
   */
  openWhatsAppDemo(): void {
    // Replace this phone number with your actual WhatsApp number
    const phoneNumber = '+919990611804'; // Remove spaces from phone number

    // Pre-filled message for demo requests
    const message = encodeURIComponent('Hi! I would like to request a free demo of Finopedia. Please provide me with more information about your financial education services.');

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank');
  }

  /**
   * Opens sign-up/sign-in functionality
   */
  openSignUp(): void {
    // Navigate to the auth component
    this.router.navigate(['/auth']);
  }

  /**
   * Navigates to the user goals page
   */
  startLearning(): void {
    this.router.navigate(['/home/user-goals']);
  }

  /**
   * Checks if current route is home route
   */
  isHomeRoute(): boolean {
    return this.router.url === '/home' || this.router.url === '/';
  }
}
