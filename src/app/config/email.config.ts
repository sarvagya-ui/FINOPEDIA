export const EMAIL_CONFIG = {
  // EmailJS Configuration
  // You need to sign up at https://www.emailjs.com/ and get these values

  // Your EmailJS Public Key
  PUBLIC_KEY: 'XvMmPbMwSDYSS1fvJ', // Replace with your actual public key from EmailJS dashboard

  // Your EmailJS Service ID (Gmail, Outlook, etc.)
  SERVICE_ID: 'service_vlt6san',

  // Your EmailJS Template ID for admin notifications
  ADMIN_TEMPLATE_ID: 'template_voemmso',

  // Admin email where you want to receive notifications
  ADMIN_EMAIL: 'sarwagya.pandey@gmail.com', // Replace with your email address

  // Email settings
  FROM_NAME: 'Finopedia Website',
  SUBJECT: 'New User Registration - Finopedia'
};

/*
SETUP INSTRUCTIONS:

1. Sign up for EmailJS at https://www.emailjs.com/
2. Create an email service (Gmail, Outlook, etc.)
3. Create an admin notification email template
4. Replace the placeholder values above with your actual EmailJS credentials

Example template variables you can use in your EmailJS admin template:
- {{user_name}} - User's full name
- {{user_email}} - User's email address (you can reply to this)
- {{user_phone}} - User's phone number
- {{user_goals}} - Selected financial goals
- {{user_experience_level}} - User's experience level
- {{user_time_commitment}} - User's time commitment
- {{user_additional_info}} - Additional information provided

Template example:
Subject: New User Registration - Finopedia

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
*/
