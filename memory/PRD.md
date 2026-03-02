# Rajesh Jewellery Mart - Product Requirements Document

## Original Problem Statement
Create a landing page website for Rajesh Jewellery Mart. A basic jewellery themed landing page with an additional page for terms and conditions.

## User Preferences
- **Color Scheme**: Gold and white tones with red accents (matching their brand logo)
- **Content**: Generic placeholder content
- **Features**: Hero section, product/collection showcase, about us section, contact form, and Terms & Conditions page
- **Images**: Stock images from Unsplash
- **Design**: Custom elegant jewellery-focused design with luxury feel

## Architecture
- **Frontend**: React with TypeScript/JavaScript
- **Styling**: Tailwind CSS with Shadcn UI components
- **Routing**: React Router for multi-page navigation
- **State Management**: React hooks
- **UI Library**: Shadcn/UI components (Button, Card, Input, Textarea, Toast)

## User Personas
1. **Potential Customers**: Looking for luxury jewellery, exploring collections online before visiting store
2. **Existing Customers**: Checking business hours, contact information, and new collections
3. **Wedding Shoppers**: Looking for engagement rings, wedding jewellery, and custom designs

## Core Requirements (Static)

### Pages
1. **Home Page** (`/`)
   - Hero section with full-screen banner
   - Collections showcase (4 categories)
   - Features section (certifications, trust, support)
   - About section
   - Contact form with business information
   - Header with navigation
   - Footer with links and social media

2. **Terms & Conditions Page** (`/terms`)
   - Comprehensive T&C covering all aspects
   - Clean, readable layout
   - Back to home navigation

### Key Features
- Responsive design (mobile-first approach)
- Smooth scroll navigation
- Interactive hover effects on cards and buttons
- Contact form with toast notifications
- Integration with brand logo and colors
- Professional jewellery imagery

### Color Palette
- Primary: Amber/Gold (#d97706 - amber-600)
- Accent: White and neutral tones
- Background: Light neutral (#fafaf9)
- Dark sections: Neutral-900 (#171717)
- Text: Neutral-700 to Neutral-900

## What's Been Implemented

### Date: March 2, 2026

#### Frontend Components Created:
1. **Home.jsx** - Main landing page with all sections
   - Full-screen hero with luxury jewellery background
   - Collections grid (4 categories with images)
   - Features section with icons
   - About section with stats
   - Contact form with validation
   - Header and footer

2. **Terms.jsx** - Terms and conditions page
   - 12 comprehensive sections
   - Professional layout
   - Back navigation

3. **mock.js** - Mock data structure
   - Images for hero and collections
   - Collection data (names, descriptions, images)
   - Features data with icons

4. **App.js** - Updated routing
   - Home route `/`
   - Terms route `/terms`
   - Sonner toast integration

5. **App.css** - Custom styling
   - Smooth scroll behavior
   - Custom scrollbar with gold theme
   - Gold gradient text effect
   - Transition animations

### Design Implementation:
- ✅ Sticky header with logo and navigation
- ✅ Hero section with gradient overlay and CTA buttons
- ✅ Collections grid with hover effects
- ✅ Feature cards with icons
- ✅ About section with statistics
- ✅ Contact form with information cards
- ✅ Footer with logo, links, and social media
- ✅ Terms page with comprehensive content
- ✅ Responsive design patterns
- ✅ Gold/white/neutral color scheme

### Images Used:
- Hero: Gold rings display in jewelry store
- Collections:
  - Gold Necklaces: Traditional Indian design
  - Diamond Rings: Luxury engagement ring
  - Gold Earrings: Elegant worn shot
  - Traditional Bangles: Bangles on red velvet
- Craftsmanship: Ornate gold rings

## Prioritized Backlog

### P0 (Critical - Not Started)
- Backend API development
- Contact form submission handling
- Database integration for inquiries

### P1 (High Priority - Future)
- Product detail pages for each collection
- Image gallery/lightbox functionality
- Collection filtering and search
- Customer testimonials section
- Store location map integration
- Newsletter subscription
- WhatsApp integration for quick contact

### P2 (Nice to Have)
- Admin panel for content management
- Product inventory management
- Online appointment booking
- Customer reviews and ratings
- Blog/news section
- Multi-language support
- Live chat support
- Virtual try-on feature

## Next Action Items
1. Get user approval on frontend design and functionality
2. Backend development:
   - Create contact form submission API
   - Store inquiries in MongoDB
   - Email notification system
3. Frontend-Backend integration
4. Testing and bug fixes
5. Production deployment

## Technical Specifications

### Frontend Stack
- React 19.0.0
- React Router DOM 7.5.1
- Tailwind CSS 3.4.17
- Shadcn UI components
- Lucide React icons
- Sonner for toast notifications

### Mock Data Structure
```javascript
{
  images: { hero, craftsmanship },
  collections: [{ name, description, image }],
  features: [{ icon, title, description }]
}
```

### Routes
- `/` - Home page
- `/terms` - Terms and conditions

## Notes
- All data is currently mocked in `mock.js`
- Contact form shows success toast but doesn't persist data
- All images are from Unsplash
- Responsive design tested for mobile and desktop
- Smooth scroll navigation working
- All interactive elements have proper hover states
