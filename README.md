# SDB LABEL - Professional Business Solutions Website

A stunning, professional website built with Next.js and Tailwind CSS featuring a reddish theme for SDB LABEL business.

## 🚀 Features

- **Modern Design**: Professional reddish theme with gradients and animations
- **Responsive Layout**: Works perfectly on all devices (desktop, tablet, mobile)
- **Navigation**: Multi-level dropdown menus for all product categories
- **Contact Forms**: Professional contact and quotation request forms
- **Consultancy Services**: Dedicated consultancy page with consultation form
- **SEO Optimized**: Built with Next.js for optimal performance
- **Custom Logo**: Integrated SDB LABEL logo from public/images/icon/logo.png

## 📁 Project Structure

```
business-website/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact Us page
│   │   ├── get-quotation/
│   │   │   └── page.tsx          # Get Quotation page
│   │   └── consultancy/
│   │       └── page.tsx          # Consultancy page
│   ├── components/
│   │   └── Navigation.tsx        # Navigation component with SDB LABEL logo
│   └── globals.css               # Global styles
├── public/
│   └── images/
│       └── icon/
│           └── logo.png          # SDB LABEL logo
├── tailwind.config.ts            # Tailwind configuration
└── package.json                  # Dependencies
```

## 🛠️ Technology Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS 4**: Utility-first styling
- **Heroicons**: Professional icon set
- **Inter Font**: Modern typography

## 🎨 Design System

### Colors
- **Primary**: Red (#dc2626) - Main brand color
- **Secondary**: Pink (#db2777) - Accent color
- **Dark**: Gray scale for text and backgrounds

### Components
- **Buttons**: Primary and secondary button styles
- **Cards**: Hover effects and shadows
- **Forms**: Professional form styling
- **Navigation**: Sticky navigation with dropdowns and SDB LABEL logo

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd business-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Pages

### Homepage (`/`)
- Hero section with SDB LABEL branding
- Services overview
- Features and benefits
- Client testimonials
- Call-to-action sections

### Contact Us (`/contact`)
- Contact form (Name, Company, Email, Phone)
- Office locations (Corporate & Factory)
- Team member contact information
- Map section placeholder

### Get Quotation (`/get-quotation`)
- Comprehensive quotation form
- Personal and company information
- Project details and specifications
- Product requirements
- Timeline and budget options

### Consultancy (`/consultancy`)
- Consultancy services overview
- Consultation request form
- Service categories
- Client success stories

## 🧭 Navigation Structure

- **Home** - Landing page
- **Products**
  - Sticker Labels
    - Product Labels
    - Barcode Label
    - Billing Rolls
    - Hologram
    - RFIDs
  - Materials
    - Chrome Paper
    - Polyester Paper
- **Hardwares**
  - Printers
  - Scanners (1D, 2D)
  - Industrial Printer
  - ID Card Printers
- **Softwares**
  - Inventory Management
  - Asset Tracking System
  - Product Tracking System
  - ERP
- **Consultancy** - Professional consulting services
- **Contact Us** - Contact information and form
- **Get Quotation** - CTA button for quotes

## 🎯 Customization

### Logo
The SDB LABEL logo is located at `public/images/icon/logo.png` and is automatically used in the navigation.

### Colors
Update colors in `src/app/globals.css`:
```css
@theme {
  --color-primary-600: #your-red-color;
  --color-secondary-600: #your-pink-color;
}
```

### Content
- Update company information in each page component
- Modify contact details in contact forms
- Customize testimonials and team information
- Update office addresses and phone numbers

### Styling
- Modify Tailwind classes in components
- Update CSS custom properties in `globals.css`
- Adjust responsive breakpoints as needed

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
1. Build the project: `npm run build`
2. Start production server: `npm run start`
3. Deploy to your preferred hosting platform

## 🔧 Maintenance

### Adding New Pages
1. Create new directory in `src/app/`
2. Add `page.tsx` file
3. Update navigation if needed
4. Add to build process

### Updating Dependencies
```bash
npm update
npm audit fix
```

## 📞 Support

For technical support or customization requests, please contact your development team.

## 📄 License

This project is proprietary and confidential.

---

**Built with ❤️ for SDB LABEL using Next.js and Tailwind CSS**
