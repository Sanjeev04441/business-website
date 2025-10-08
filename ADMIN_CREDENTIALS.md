# 🔐 Admin Dashboard Access

## Authorized Users
Only these 2 users can access the admin dashboard:

### User 1:
- **Email**: `salessdbl@gmail.com`
- **Password**: `R@scal0441`

### User 2:
- **Email**: `sanjeevprasad0441@gmail.com`
- **Password**: `helloworld@0441`

## How to Access
1. Go to: `http://localhost:3001/admin/login`
2. Enter one of the authorized email addresses
3. Enter the corresponding password
4. Click "Sign in"

## Security Features
- ✅ Email-based authorization (only 2 specific users allowed)
- ✅ Individual password protection for each user
- ✅ Session timeout (8 hours)
- ✅ Automatic logout on session expiry
- ✅ Secure cookie storage
- ✅ Middleware protection for admin routes

## Session Management
- Sessions expire after 8 hours
- Users are automatically logged out when session expires
- Logout button available in admin dashboard
- All authentication data is cleared on logout

## URLs
- **Login**: `/admin/login`
- **Dashboard**: `/admin` (redirects to login if not authenticated)

## Notes
- The admin dashboard is completely separate from the public website
- Only form submission data is accessible through the admin panel
- All form data is stored securely in Supabase
- No public access to admin functionality