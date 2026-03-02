# Rajesh Jewellery Mart - Product Requirements Document

## Original Problem Statement
Create a landing page website for Rajesh Jewellery Mart. A basic jewellery themed landing page with an additional page for terms and conditions.

## User Preferences
- **Color Scheme**: Gold and white tones with red accents (matching their brand logo)
- **Content**: Generic placeholder content with specific legal terms and company details
- **Features**: Hero section, product/collection showcase, about us section, contact form, Terms & Conditions page
- **Images**: Stock images from Unsplash
- **Design**: Custom elegant jewellery-focused design with luxury feel

## Business Information
- **Registered Name**: RAJESH JEWELLERY MART
- **Address**: BBMP KHATHA NO 786/L-377, HSR LAYOUT SECTOR VI, Bengaluru, Karnataka 560102
- **Phone**: +91 9362320307
- **Email**: rajeshsusheel@gmail.com
- **Established**: 1990 (30+ years of excellence)

## Architecture
- **Frontend**: React with JavaScript
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

2. **About Us Page** (`/about`)
   - Hero section with company tagline
   - Our Story section with company history
   - Why Choose Us section with 3 key features
   - Contact information cards
   - Statistics showcase
   - Call-to-action section

3. **Terms & Conditions Page** (`/terms`)
   - Comprehensive T&C with legal content
   - Introduction with registered address
   - Website content and liability disclaimers
   - Intellectual property rights
   - Cancellation and refund policy
   - Shipping and delivery policy
   - Payment and transaction liability
   - Governing law (India)
   - Contact information
   - Razorpay disclaimer

### Key Features
- Responsive design (mobile-first approach)
- Smooth scroll navigation
- Interactive hover effects on cards and buttons
- Contact form with toast notifications
- Integration with brand logo and colors
- Professional jewellery imagery
- Inter-page navigation with React Router

### Color Palette
- Primary: Amber/Gold (#d97706 - amber-600)
- Accent: White and neutral tones
- Background: Light neutral (#fafaf9)
- Dark sections: Neutral-900 (#171717)
- Text: Neutral-700 to Neutral-900

## What's Been Implemented

### Date: March 2, 2026

#### Phase 1: Initial Website Creation
1. **Home.jsx** - Main landing page
   - Full-screen hero with luxury jewellery background
   - Collections grid (4 categories with images)
   - Features section with icons
   - About section with stats
   - Contact form with validation
   - Header and footer

2. **Terms.jsx** - Terms and conditions page
   - Comprehensive legal content
   - Professional layout
   - Back navigation

3. **mock.js** - Mock data structure
   - Images for hero and collections
   - Collection data (names, descriptions, images)
   - Features data with icons

#### Phase 2: Legal Content and About Page Update
1. **Updated Terms.jsx** with actual legal content:
   - Registered business address
   - Legal definitions (we/us/our, you/your/visitor)
   - Website content and liability disclaimers
   - Intellectual property rights
   - External links policy
   - Cancellation and refund policy (same-day cancellation rule)
   - Shipping and delivery policy (0-7 days shipping)
   - Payment and transaction liability
   - Governing law (India)
   - Razorpay disclaimer
   - Updated contact information with actual phone and email

2. **Created About.jsx** - Complete About Us page:
   - Hero section with gradient background
   - Our Story section with company history
   - Why Choose Us (3 feature cards)
   - Contact information (4 cards: Address, Phone, Email, Hours)
   - Statistics section (30+ years, 10k+ customers, 500+ designs, 100% quality)
   - Call-to-action section with buttons
   - Proper header and footer with navigation

3. **Updated Home.jsx**:
   - Contact information updated to actual business details
   - Navigation links updated (About now links to /about page)
   - Footer links updated with About Us page link

4. **Updated App.js**:
   - Added /about route
   - All three pages now properly routed

### Design Implementation:
- ✅ Sticky header with logo and navigation
- ✅ Hero section with gradient overlay and CTA buttons
- ✅ Collections grid with hover effects
- ✅ Feature cards with icons
- ✅ About section with statistics
- ✅ Contact form with information cards
- ✅ Footer with logo, links, and social media
- ✅ Comprehensive Terms page with actual legal content
- ✅ Complete About Us page with company information
- ✅ Responsive design patterns
- ✅ Gold/white/neutral color scheme
- ✅ Smooth inter-page navigation

### Images Used:
- Hero: Gold rings display in jewelry store
- Collections:
  - Gold Necklaces: Traditional Indian design
  - Diamond Rings: Luxury engagement ring
  - Gold Earrings: Elegant worn shot
  - Traditional Bangles: Bangles on red velvet
- Craftsmanship: Ornate gold rings

## Legal Policies Implemented

### Cancellation and Refund
- Same-day cancellation only
- No cancellation for perishable items
- Damaged items must be reported same day
- Refunds processed in 1-2 days

### Shipping and Delivery
- Domestic: Registered courier/speed post
- International: International courier/speed post
- Shipping within 0-7 days from order
- Not liable for courier delays
- Contact: 9362320307, rajeshsusheel@gmail.com

### Intellectual Property
- All website content owned/licensed
- Reproduction prohibited
- Unauthorized use is criminal offense

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
- Store location map integration (Google Maps)
- Newsletter subscription
- WhatsApp integration for quick contact
- Online order tracking

### P2 (Nice to Have)
- Admin panel for content management
- Product inventory management
- Online appointment booking
- Customer reviews and ratings
- Blog/news section
- Multi-language support
- Live chat support
- Virtual try-on feature
- Payment gateway integration

## Next Action Items
1. ✅ Updated Terms & Conditions with actual legal content
2. ✅ Created About Us page with company information
3. ✅ Updated all contact details across the website
4. Backend development (next phase):
   - Create contact form submission API
   - Store inquiries in MongoDB
   - Email notification system
5. Frontend-Backend integration
6. Testing and bug fixes
7. Production deployment

## Technical Specifications

### Frontend Stack
- React 19.0.0
- React Router DOM 7.5.1
- Tailwind CSS 3.4.17
- Shadcn UI components
- Lucide React icons
- Sonner for toast notifications

### Routes
- `/` - Home page
- `/about` - About Us page
- `/terms` - Terms and conditions page

## Notes
- All data is currently mocked in `mock.js`
- Contact form shows success toast but doesn't persist data
- All images are from Unsplash
- Responsive design tested for mobile and desktop
- Smooth scroll navigation working
- All interactive elements have proper hover states
- Legal content includes Razorpay disclaimer
- Actual business information integrated throughout the site
