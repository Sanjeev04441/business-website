# Contact Form Setup Guide

## 🚀 Quick Setup Steps

### 1. Create Environment Variables File

Create a file named `.env.local` in your project root with the following content:

```env
# Supabase Configuration
# Get these from your Supabase project dashboard
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Email Configuration (Optional - for email notifications)
# Use your Gmail address and App Password
EMAIL_TO=your-email@gmail.com
EMAIL_API_KEY=your_gmail_app_password_here
```

### 2. Set Up Supabase Database

#### Option A: Using Supabase Dashboard
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Go to SQL Editor in your Supabase dashboard
3. Run this SQL command to create the table:

```sql
CREATE TABLE contact_us (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  company_name VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Option B: Using Supabase CLI
```bash
# Install Supabase CLI
npm install -g supabase

# Initialize Supabase in your project
supabase init

# Create migration file
supabase migration new create_contact_us_table

# Add the SQL to the migration file, then run:
supabase db push
```

### 3. Get Supabase Credentials

1. Go to your Supabase project dashboard
2. Navigate to Settings > API
3. Copy the following:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 4. Set Up Email Notifications (Optional)

#### For Gmail:
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security > 2-Step Verification > App passwords
   - Generate password for "Mail"
3. Use your Gmail address and the generated app password in `.env.local`

### 5. Test the Setup

1. Start your development server: `npm run dev`
2. Go to `/contact` page
3. Fill out the contact form
4. Check your Supabase dashboard to see if data is stored
5. Check your email for notifications (if configured)

## 🔧 Troubleshooting

### Common Issues:

1. **"Invalid API key" error**: Check your Supabase credentials
2. **"Table doesn't exist" error**: Make sure you created the `contact_us` table
3. **Email not sending**: Check your Gmail app password and 2FA settings
4. **CORS errors**: Make sure your Supabase project allows your domain

### Database Schema:

```sql
-- Contact form submissions table
CREATE TABLE contact_us (
  id SERIAL PRIMARY KEY,                    -- Auto-incrementing ID
  name VARCHAR(255) NOT NULL,              -- Client name
  company_name VARCHAR(255),               -- Company name (optional)
  email VARCHAR(255) NOT NULL,             -- Email address
  phone VARCHAR(20),                       -- Phone number
  message TEXT NOT NULL,                   -- Message content
  created_at TIMESTAMP DEFAULT NOW()       -- Submission timestamp
);
```

## 📊 Data Flow

1. **User fills form** → Contact page form
2. **Form submission** → `/api/contact` API route
3. **Data validation** → Check required fields
4. **Database storage** → Save to Supabase `contact_us` table
5. **Email notification** → Send email to admin (optional)
6. **WhatsApp backup** → Open WhatsApp with form data
7. **Success response** → Show success message to user

## 🎯 Features Included

- ✅ **Database Storage**: All form data saved to Supabase
- ✅ **Email Notifications**: Admin gets notified via email
- ✅ **WhatsApp Integration**: Backup communication method
- ✅ **Form Validation**: Client-side and server-side validation
- ✅ **Error Handling**: Proper error messages and fallbacks
- ✅ **TypeScript**: Full type safety
- ✅ **Responsive Design**: Works on all devices

## 📝 Next Steps

1. Create the `.env.local` file with your credentials
2. Set up the Supabase database table
3. Test the form submission
4. Configure email notifications (optional)
5. Deploy to production with environment variables

Your contact form is already fully functional - you just need to add the database and email credentials!