# Email Setup Guide for Finopedia

This guide will help you set up email functionality to send form details when users submit their financial goals.

## Prerequisites

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Verify your email service (Gmail, Outlook, etc.)

## Setup Steps

### 1. Create EmailJS Account
- Go to [EmailJS](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email address

### 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the authentication steps
5. Note down your **Service ID**

### 3. Create Admin Notification Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template for admin notifications:

**Subject:** New User Registration - Finopedia

**Body:**
```
New User Registration - Finopedia

A new user has submitted their financial goals information:

PERSONAL INFORMATION:
- Name: {{user_name}}
- Email: {{user_email}}
- Phone: {{user_phone}}

FINANCIAL GOALS: {{user_goals}}

EXPERIENCE LEVEL: {{user_experience_level}}
TIME COMMITMENT: {{user_time_commitment}}

ADDITIONAL INFORMATION: {{user_additional_info}}

Please follow up with this user to provide personalized financial education guidance.

You can reply directly to: {{user_email}}
```

4. Note down your **Template ID**

### 4. Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### 5. Update Configuration
1. Open `src/app/config/email.config.ts`
2. Replace the placeholder values:
   ```typescript
   export const EMAIL_CONFIG = {
     PUBLIC_KEY: 'your_actual_public_key',
     SERVICE_ID: 'your_actual_service_id',
     ADMIN_TEMPLATE_ID: 'your_actual_admin_template_id',
     ADMIN_EMAIL: 'your-email@example.com', // Replace with your email address
     FROM_NAME: 'Finopedia Website',
     SUBJECT: 'New User Registration - Finopedia'
   };
   ```

### 6. Test the Email Functionality
1. Start your Angular application: `npm start`
2. Navigate to the user goals form
3. Fill out the form and submit
4. Check if the email is received

## How It Works

1. When a user submits the form, the `EmailService` is called
2. The service formats the form data and sends it via EmailJS
3. EmailJS delivers the notification email to your admin email address
4. You receive the user's details and can reply directly to their email

## Troubleshooting

### Email not sending
- Check browser console for errors
- Verify EmailJS credentials in `email.config.ts`
- Ensure EmailJS service is properly configured
- Check if your email service has sending limits

### Template variables not working
- Make sure template variable names match exactly
- Check EmailJS template syntax
- Verify template is saved and published

## Security Notes

- EmailJS public key is safe to expose in client-side code
- Service ID and Template ID are also safe for client-side use
- Never expose private keys or API secrets

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic email templates
- Standard support

For production use, consider upgrading to a paid plan. 
