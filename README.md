# AV Academy / AV EditLab — Next.js Website

🎨 **Cyan Theme** — Complete Next.js 14 website with App Router

## Quick Start

```bash
# Install dependencies
npm install

# Development server   
npm run dev

# Production build  
npm run build  

# View production export
npx serve out/
```

## Project Structure

```
app/
├── page.tsx                    # Home page
├── layout.tsx                  # Root layout
├── globals.css                 # Cyan theme CSS variables
├── services/
│   ├── page.tsx                # All services overview
│   └── [industry]/page.tsx     # Dynamic industry pages (8 industries)
├── ai-masterclass/page.tsx     # AI Masterclass page
├── ai-training/page.tsx        # AI Training B2B page
├── courses/page.tsx            # All courses listing
├── pricing/page.tsx            # Personal brand plans
├── about/page.tsx              # About us page
└── contact/page.tsx            # Contact form

components/
├── Navbar.tsx                  # Responsive navbar with dropdowns
├── HeroSection.tsx             # Animated hero with typed text & sector wheel
├── HomeSections.tsx            # Ticker, Stats counter, What We Do
├── PageSections.tsx            # Industries grid, Dual brand, Why us, CTA
├── CoursesSlider.tsx           # Swiper carousel for courses
├── Testimonials.tsx            # Client testimonials
├── Footer.tsx                  # Full footer
├── Preloader.tsx               # Loading screen
├── ParticleCanvas.tsx          # Canvas particle animation
├── ScrollReveal.tsx            # Intersection Observer animations
└── WAFloat.tsx                 # WhatsApp floating button

lib/
└── industryData.ts             # All 8 industry data (type-safe)
```

## Features
- ✅ Next.js 14 App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Static Export (output: "export")
- ✅ Particle canvas animation
- ✅ Swiper slider (courses)
- ✅ Scroll reveal animations
- ✅ Counter animations
- ✅ Typed text effect
- ✅ Sector wheel (hero)
- ✅ Responsive (mobile-first)
- ✅ All 16 pages complete

## Pages
- `/` — Home
- `/services` — All Services
- `/services/packaging` — Packaging
- `/services/hospitality` — Hospitality
- `/services/realestate` — Real Estate
- `/services/education` — Education
- `/services/fashion` — Fashion
- `/services/automobile` — Automobile
- `/services/advertising` — Advertising
- `/services/media` — Media & Entertainment
- `/ai-masterclass` — AI Masterclass
- `/ai-training` — AI Training B2B
- `/courses` — All Courses
- `/pricing` — Personal Brand Plans
- `/about` — About Us
- `/contact` — Contact Form

## Contact
📞 +91-9675903348 | +91-75002 06719
📧 avacademy1706@gmail.com
🌐 avacademy.co.in
📍 3rd Floor, Sai Tower, Raibareli Rd, Lucknow UP 226014
