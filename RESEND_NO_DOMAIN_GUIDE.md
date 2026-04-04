# Using Resend Without a Custom Domain

## Good News: You Don't Need a Domain!

Resend provides a **free verified email address** when you sign up, so you can start sending emails immediately without owning a domain.

## Quick Setup Steps

### 1. Sign Up for Resend
- Go to https://resend.com
- Click "Sign Up" (free account)
- Verify your email address

### 2. Get Your API Key
- After signing in, go to https://resend.com/api-keys
- Click "Create API Key"
- Give it a name (e.g., "Portfolio Contact Form")
- Copy the key (starts with `re_`)

### 3. Find Your Verified Sender Email
- Go to https://resend.com/emails or check your dashboard
- Resend automatically provides a verified email like:
  - `onboarding@resend.dev`
  - Or a specific address shown in your account
- This is your **default sender** - no domain verification needed!

### 4. Configure Your Environment Variables

Create or update `.env.local`:

```bash
# Your API key from step 2
RESEND_API_KEY=re_your_actual_api_key_here

# Use the default Resend email (replace with your actual verified email)
# Format: "Display Name <email@resend.dev>"
FROM_EMAIL="Sumit's Portfolio <onboarding@resend.dev>"

# Where YOU want to receive messages (your personal email)
CONTACT_FORM_EMAIL=kumar.sumit9981@gmail.com
```

### 5. Test It
```bash
npm run dev
```
Fill out the contact form on your portfolio and check your email!

## Important Notes

### ✅ What Works Without a Domain:
- Sending emails from `onboarding@resend.dev` (or your provided default)
- Receiving emails at any address (Gmail, Outlook, etc.)
- Reply-to functionality (when you reply, it goes to the user's email)
- Full HTML email templates
- Up to 3,000 emails/month free (100/day limit)

### ⚠️ Limitations Without a Custom Domain:
- **Sender Address**: Emails come from `@resend.dev` instead of your personal domain
- **Branding**: Less professional than `contact@yourname.com`
- **Daily Limit**: 100 emails per day on free tier

### 🚀 When to Add a Custom Domain (Optional):
If you later want a more professional appearance:
1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. Add it in Resend dashboard under "Domains"
3. Update DNS records as instructed
4. Change `FROM_EMAIL` to `contact@yourdomain.com`

## Troubleshooting

### Error: "Invalid sender"
- Check your Resend dashboard for the exact verified email address
- Make sure `FROM_EMAIL` matches exactly what Resend shows
- Format must be: `"Display Name <email@resend.dev>"`

### Error: "API key invalid"
- Ensure your key starts with `re_`
- No extra spaces in `.env.local`
- Restart the dev server after changing env variables

### Emails going to spam
- This is rare with Resend's default domain
- Ask recipients to mark as "Not Spam"
- Consider adding a custom domain for better deliverability

## Example Working Configuration

```bash
# .env.local
RESEND_API_KEY=re_A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6
FROM_EMAIL="Sumit Kumar <onboarding@resend.dev>"
CONTACT_FORM_EMAIL=kumar.sumit9981@gmail.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

That's it! No domain required to get started. 🎉
