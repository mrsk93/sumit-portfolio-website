# Resend Integration Setup Guide

This guide will help you set up Resend for the contact form in your portfolio website.

## Step 1: Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

## Step 2: Get Your API Key

1. Log in to your Resend dashboard
2. Navigate to **API Keys** section
3. Click **Create API Key**
4. Give it a name (e.g., "Portfolio Contact Form")
5. Copy the API key (it starts with `re_`)

## Step 3: Add a Verified Domain (Recommended)

For production use, you should add and verify your own domain:

1. Go to **Domains** in the Resend dashboard
2. Click **Add Domain**
3. Enter your domain name (e.g., `yourdomain.com`)
4. Follow the DNS configuration instructions:
   - Add the provided TXT record to verify ownership
   - Add MX records if you want to receive replies
   - Add SPF/DKIM records for better deliverability
5. Wait for DNS propagation (can take up to 48 hours)

**Note:** Until you verify your domain, you can only send emails from `onboarding@resend.dev` for testing.

## Step 4: Configure Environment Variables

Create a `.env.local` file in your project root (do not commit this to Git):

```bash
# Your Resend API Key
RESEND_API_KEY=re_your_actual_api_key_here

# Sender Email (use your verified domain email in production)
FROM_EMAIL=onboarding@resend.dev

# Where you want to receive contact form messages
CONTACT_FORM_EMAIL=kumar.sumit9981@gmail.com

# Your site URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Step 5: Install Dependencies

The `resend` package has been added to your `package.json`. Install it:

```bash
npm install --legacy-peer-deps
# or
pnpm install
# or
yarn install
```

## Step 6: Test Locally

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact section
3. Fill out the form and submit
4. Check your email inbox for the message

## Step 7: Deploy to Production

When deploying to Vercel, Netlify, or another platform:

1. Add the environment variables in your hosting platform's dashboard
2. For production, update `FROM_EMAIL` to use your verified domain email
3. Rebuild and redeploy your application

## Troubleshooting

### Common Issues

1. **"Invalid API Key" Error**
   - Double-check your API key in `.env.local`
   - Ensure there are no extra spaces or characters

2. **Emails Not Arriving**
   - Check your spam folder
   - Verify the `CONTACT_FORM_EMAIL` is correct
   - If using a custom domain, ensure DNS records are properly configured

3. **"Failed to Send" Error**
   - Check the browser console and server logs for detailed error messages
   - Ensure all required fields are filled in the form

## API Route Details

The contact form uses the API route at `/api/contact` which:
- Validates all form fields
- Checks email format
- Sends an HTML-formatted email via Resend
- Returns success/error responses to the frontend
- Sets the sender's email as the reply-to address

## Security Notes

- The API key is kept server-side and never exposed to the client
- Form data is validated on both client and server
- Rate limiting can be added if needed (consider using `@vercel/kv` or similar)

## Customization

You can customize the email template in `/app/api/contact/route.ts` to match your brand's styling and include additional information.
