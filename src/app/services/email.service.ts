import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/email.config';

export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    goals: string[];
    experienceLevel: string;
    timeCommitment: string;
    additionalInfo?: string;
}

@Injectable({
    providedIn: 'root'
})
export class EmailService {

    constructor() {
        // Initialize EmailJS with your public key
        emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
    }

    /**
     * Sends form data via email to admin for follow-up
     * @param formData - The form data to send
     * @returns Promise that resolves when email is sent
     */
    async sendFormData(formData: FormData): Promise<void> {
        try {
            // Prepare the email template parameters for admin notification
            const templateParams = {
                to_email: EMAIL_CONFIG.ADMIN_EMAIL, // Send to admin email
                to_name: 'Finopedia Admin',
                from_name: 'Finopedia Website',
                user_name: `${formData.firstName} ${formData.lastName}`,
                user_email: formData.email,
                user_phone: formData.phone || 'Not provided',
                user_goals: formData.goals.join(', '),
                user_experience_level: formData.experienceLevel,
                user_time_commitment: formData.timeCommitment,
                user_additional_info: formData.additionalInfo || 'None provided',
                message: this.formatAdminEmailMessage(formData)
            };

            // Send email using EmailJS
            const response = await emailjs.send(
                EMAIL_CONFIG.SERVICE_ID,
                EMAIL_CONFIG.ADMIN_TEMPLATE_ID,
                templateParams
            );

            console.log('Admin notification email sent successfully:', response);
        } catch (error) {
            console.error('Error sending admin email:', error);
            throw error;
        }
    }

    /**
     * Formats the form data into a readable admin email message
     * @param formData - The form data to format
     * @returns Formatted admin email message
     */
    private formatAdminEmailMessage(formData: FormData): string {
        const goalsText = formData.goals.length > 0 ? formData.goals.join(', ') : 'None selected';

        return `
New User Registration - Finopedia

A new user has submitted their financial goals information:

PERSONAL INFORMATION:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone || 'Not provided'}

FINANCIAL GOALS: ${goalsText}

EXPERIENCE LEVEL: ${formData.experienceLevel}
TIME COMMITMENT: ${formData.timeCommitment}

ADDITIONAL INFORMATION: ${formData.additionalInfo || 'None provided'}

Please follow up with this user to provide personalized financial education guidance.

You can reply directly to: ${formData.email}
    `.trim();
    }
}
