// export interface Solution {
//   num: string;
//   icon: string;
//   title: string;
//   items: string[];
//   tagline: string;
// }

// export interface WhyItem {
//   icon?: string;
//   iconName?: string;
//   title: string;
//   desc: string;
// }

// export interface IndustryData {
//   tag: string;
//   h1: string;
//   subtitle: string;
//   h2: string;
//   intro: string;
//   quote: string;
//   solutions: Solution[];
//   whyTitle: string;
//   whyItems: WhyItem[];
//   ctaTitle: string;
//   ctaDesc: string;
// }

// // Lucide icon names for each industry
// export const industryList = [
//   { slug: "packaging",   iconName: "Package",    name: "Packaging",          desc: "Boxes, labels, mockups & branding" },
//   { slug: "hospitality", iconName: "Hotel",      name: "Hospitality",        desc: "Hotels, cafes & resorts" },
//   { slug: "realestate",  iconName: "Home",       name: "Real Estate",        desc: "Builders, brokers & developers" },
//   { slug: "education",   iconName: "GraduationCap", name: "Education",       desc: "Institutes & online platforms" },
//   { slug: "fashion",     iconName: "Shirt",      name: "Fashion",            desc: "Labels, lookbooks & campaigns" },
//   { slug: "automobile",  iconName: "Car",        name: "Automobile",         desc: "Launches, dealers & brands" },
//   { slug: "advertising", iconName: "Megaphone",  name: "Advertising",        desc: "TVCs, digital ads & campaigns" },
//   { slug: "media",       iconName: "Tv",         name: "Media & Entertainment", desc: "Channels, YouTube & creators" },
// ];

// export const industries: Record<string, IndustryData> = {
//   packaging: {
//     tag: "Packaging Industry", h1: "ELEVATE YOUR PACKAGING", subtitle: "Design. Visuals. Impact.",
//     h2: "Transform the Way the World Sees Your Packaging",
//     intro: "Packaging is not just a wrapper — it's your brand's first impression. We make that impression unforgettable with bold design, engaging visuals, and 3D storytelling.",
//     quote: '"If your packaging stands out, your product sells out."',
//     solutions: [
//       { num: "01", icon: "Palette", title: "High-Impact Graphic Design", items: ["Custom Box & Label Designs", "Print-Ready Artwork & Brand Identity", "Realistic Product Mockups"], tagline: "Every design reflects your brand's quality." },
//       { num: "02", icon: "Video", title: "Professional Video Editing", items: ["Unboxing & Product Showcase Videos", "Factory Walkthroughs & Process Films", "Branded Motion Graphics"], tagline: "Videos that don't just show — they sell." },
//       { num: "03", icon: "Globe", title: "3D Packaging Visualization", items: ["Hyper-Realistic 3D Models", "360° Turntable Views", "Pre-Production Simulations"], tagline: "See the final product before it's made." },
//     ],
//     whyTitle: "Packaging Brands Choose AV EditLab",
//     whyItems: [
//       { icon: "Factory", title: "Packaging-Focused Team", desc: "Creatives who understand shelf impact." },
//       { icon: "Zap", title: "Fast Turnaround", desc: "Tight deadlines met without compromise." },
//       { icon: "Banknote", title: "Budget-Friendly", desc: "Studio quality at transparent pricing." },
//       { icon: "Trophy", title: "Trusted by 100+", desc: "FMCG to luxury and industrial." },
//     ],
//     ctaTitle: "Make Your Packaging Unforgettable",
//     ctaDesc: "Let's create packaging visuals that make your product fly off the shelf.",
//   },
//   hospitality: {
//     tag: "Hospitality Industry", h1: "ELEVATE HOSPITALITY", subtitle: "Design. Atmosphere. Luxury.",
//     h2: "Helping Hospitality Brands Inspire, Attract & Convert",
//     intro: "In hospitality, first impressions happen before a guest even visits. We help hotels, cafes, resorts, and tourism brands stand out with breathtaking visuals.",
//     quote: '"Luxury is first seen — then felt."',
//     solutions: [
//       { num: "01", icon: "Palette", title: "Elegant Graphic Design", items: ["Premium Menu Designs, Brochures", "In-room Stationery & Signage", "Social Media Creatives for Events"], tagline: "Designs that reflect your brand class." },
//       { num: "02", icon: "Video", title: "Cinematic Video Production", items: ["Hotel/Resort Tour Videos", "Testimonial Reels, Chef Specials", "Social Media Shorts"], tagline: "Content that makes guests say: I have to go here." },
//       { num: "03", icon: "Globe", title: "3D Visualization & Motion", items: ["Virtual Room Tours", "3D Interior Layouts & Previews", "Animation Intro Clips"], tagline: "Sell your space before it's built." },
//     ],
//     whyTitle: "Hospitality Brands Choose AV EditLab",
//     whyItems: [
//       { icon: "Crown", title: "Luxury-Focused Creatives", desc: "Aligned with premium standards." },
//       { icon: "Zap", title: "Fast for Seasonal Needs", desc: "Campaign-ready assets for events." },
//       { icon: "TrendingUp", title: "Designed to Drive Bookings", desc: "Visuals to drive footfall and reservations." },
//       { icon: "RefreshCw", title: "One-Stop Partner", desc: "From photos to motion — all under one roof." },
//     ],
//     ctaTitle: "Fill Your Tables & Rooms",
//     ctaDesc: "Let's craft visuals that make your guests book before they visit.",
//   },
//   realestate: {
//     tag: "Real Estate", h1: "BRING REAL ESTATE TO LIFE", subtitle: "Design. Visuals. Conversions.",
//     h2: "Helping Builders & Brokers Sell More, Faster",
//     intro: "In real estate, buyers invest in how it looks and feels. We help real estate brands build trust through high-end visuals, immersive videos, and powerful design.",
//     quote: '"If they can see it clearly, they\'ll buy it confidently."',
//     solutions: [
//       { num: "01", icon: "Palette", title: "Premium Graphic Design", items: ["Project Brochures, Hoardings & Flyers", "Floor Plan Designs, Location Maps", "Branding for Builders & Projects"], tagline: "Position your project as premium." },
//       { num: "02", icon: "Video", title: "Property Video Editing", items: ["Project Walkthrough Videos", "Testimonial Reels, Interviews", "YouTube & Social Media Ads"], tagline: "Videos that spark emotion and drive action." },
//       { num: "03", icon: "Globe", title: "3D Visualization & Virtual Tours", items: ["3D Exterior & Interior Renders", "Virtual Site Tours", "Pre-launch Simulations"], tagline: "Let buyers experience before it's ready." },
//     ],
//     whyTitle: "Real Estate Teams Work With Us",
//     whyItems: [
//       { icon: "Zap", title: "Fast & High-Quality", desc: "Scales with your project timeline." },
//       { icon: "Home", title: "Real Estate Experience", desc: "We know what converts browsers into buyers." },
//       { icon: "Diamond", title: "Visuals That Sell Lifestyle", desc: "Emotion, aspiration, and desirability." },
//       { icon: "RefreshCw", title: "Full Lifecycle Support", desc: "Pre-launch to post-possession." },
//     ],
//     ctaTitle: "Sell Your Project Faster",
//     ctaDesc: "Give your real estate brand the visual power it needs to win.",
//   },
//   education: {
//     tag: "Education Industry", h1: "TRANSFORM EDUCATION BRANDS", subtitle: "Design. Learning. Engagement.",
//     h2: "Helping Educators Stand Out in the Digital Age",
//     intro: "From coaching institutes to online platforms, today's education industry demands more than knowledge — it needs presentation, engagement, and trust.",
//     quote: '"When learning looks great, it feels great."',
//     solutions: [
//       { num: "01", icon: "Palette", title: "Educational Graphic Design", items: ["Posters, Banners, and Brochures", "Course Flyers, Certificates", "Social Media Creatives"], tagline: "Make your institute look premium." },
//       { num: "02", icon: "Video", title: "Educational Video Editing", items: ["Class Promo & Ad Videos", "Result Highlight Reels", "YouTube Classes & Shorts"], tagline: "Videos that explain and convert." },
//       { num: "03", icon: "Globe", title: "3D & Motion Graphics", items: ["Animated Class Intros", "3D Explainers", "Virtual Classroom Elements"], tagline: "Turn concepts into visual stories." },
//     ],
//     whyTitle: "Edu Brands Work With Us",
//     whyItems: [
//       { icon: "BookOpen", title: "Clarity + Creativity", desc: "Visuals that teach, inspire, and convert." },
//       { icon: "Zap", title: "Quick Turnaround", desc: "Result posters, admits — done fast." },
//       { icon: "Banknote", title: "Affordable Packages", desc: "Budgets for coaching centers." },
//       { icon: "RefreshCw", title: "360° Content Support", desc: "From ads to academics." },
//     ],
//     ctaTitle: "Grow Your Institute",
//     ctaDesc: "Let's create content that attracts students and builds reputation.",
//   },
//   fashion: {
//     tag: "Fashion Industry", h1: "STYLE MEETS STRATEGY", subtitle: "Design. Motion. Aesthetic.",
//     h2: "Helping Fashion Brands Look Iconic",
//     intro: "In fashion, your visual identity is your voice. We help you capture attention, define your look, and sell your style with premium visual content.",
//     quote: '"Fashion isn\'t just worn. It\'s seen, felt, and remembered."',
//     solutions: [
//       { num: "01", icon: "Palette", title: "Bold Graphic Design", items: ["Lookbooks, Catalogs & Posters", "Label Designs, Tags & Packaging", "Social Media Launch Teasers"], tagline: "Visuals that reflect your brand essence." },
//       { num: "02", icon: "Video", title: "Fashion Video Editing", items: ["Behind-the-Scenes Edits", "Campaign Films & Ad Reels", "Influencer Reels & YouTube Shorts"], tagline: "Videos that trend and trigger sales." },
//       { num: "03", icon: "Globe", title: "3D Fashion Visualization", items: ["Virtual Fashion Shows", "3D Product Displays & Turntables", "Animated Collection Intros"], tagline: "Give your brand a digital runway." },
//     ],
//     whyTitle: "Fashion Brands Choose AV EditLab",
//     whyItems: [
//       { icon: "Sparkles", title: "Aesthetic-First Design", desc: "Beautiful designs that drive sales." },
//       { icon: "Zap", title: "Quick Launch Support", desc: "Campaign assets for seasonal drops." },
//       { icon: "Diamond", title: "Strong Visual Branding", desc: "Identity that boosts recognition." },
//       { icon: "RefreshCw", title: "Sketch to Screen", desc: "Full-service visual partner." },
//     ],
//     ctaTitle: "Make Your Brand Iconic",
//     ctaDesc: "Let's design your next collection's visual story together.",
//   },
//   automobile: {
//     tag: "Automobile Industry", h1: "DRIVE VISUAL IMPACT", subtitle: "Design. Motion. Performance.",
//     h2: "Helping Automotive Brands Shift into the Fast Lane",
//     intro: "From roaring engines to elegant exteriors — we help automotive brands capture power through cutting-edge design, cinematic visuals, and immersive 3D.",
//     quote: '"People don\'t just buy vehicles — they buy the way it looks, feels, and moves."',
//     solutions: [
//       { num: "01", icon: "Palette", title: "High-Performance Graphic Design", items: ["Vehicle Launch Posters & Billboards", "Dealership Banners, Flyers & Catalogs", "Car Wrap & Accessory Branding"], tagline: "Showcase the power of your brand." },
//       { num: "02", icon: "Video", title: "Automotive Video Editing", items: ["Car Launch Trailers & Highlights", "Test Drive Videos & Reels", "Factory or Modification Showcases"], tagline: "Sell speed, comfort, and control." },
//       { num: "03", icon: "Globe", title: "3D Vehicle Visualization", items: ["3D Car Models & Turntables", "Interior Walkthroughs & Engine Animations", "AR/VR Ready Showcases"], tagline: "Cutting-edge digital presence." },
//     ],
//     whyTitle: "Auto Brands Choose AV EditLab",
//     whyItems: [
//       { icon: "Zap", title: "Speedy World-Class Quality", desc: "Fast without compromising excellence." },
//       { icon: "Car", title: "Premium Auto Design Language", desc: "Visuals that speak the automotive aesthetic." },
//       { icon: "Video", title: "Studio-Style Visuals", desc: "Campaign impact for every launch." },
//       { icon: "RefreshCw", title: "Full Campaign Coverage", desc: "From debut to rollout." },
//     ],
//     ctaTitle: "Rev Up Your Brand",
//     ctaDesc: "Let's create automotive visuals that stop people in their tracks.",
//   },
//   advertising: {
//     tag: "Advertising Agencies", h1: "POWERING ADVERTISING", subtitle: "Design. Motion. Attention.",
//     h2: "Helping Advertising Agencies Turn Ideas into Impact",
//     intro: "It's not enough to just think creatively — you have to show it. We collaborate with ad agencies and marketing teams to produce stunning visual assets.",
//     quote: '"In advertising, your visuals are your voice — make them unforgettable."',
//     solutions: [
//       { num: "01", icon: "Palette", title: "High-End Graphic Design", items: ["Campaign Creatives (Print & Digital)", "Ad Banners, Hoardings & Posters", "Social Media Ads & Storyboards"], tagline: "Designs that grab eyeballs and drive clicks." },
//       { num: "02", icon: "Video", title: "Commercial Video Editing", items: ["TVC & Digital Ads", "Product Launch Videos", "Short Reels & Paid Ad Creatives"], tagline: "Edits with rhythm, pace & persuasion." },
//       { num: "03", icon: "Globe", title: "3D & Motion Graphics", items: ["Logo Reveals, Ad Animations", "3D Product Commercials", "Explainer Ads"], tagline: "Next-level cinematic edge." },
//     ],
//     whyTitle: "Agencies Choose AV EditLab",
//     whyItems: [
//       { icon: "Megaphone", title: "We Speak the Ad Language", desc: "Fast, bold, strategic." },
//       { icon: "Clock", title: "On-Brand, On-Time", desc: "Respect for guidelines and deadlines." },
//       { icon: "TrendingUp", title: "Built for Performance", desc: "Optimized for clicks and conversions." },
//       { icon: "RefreshCw", title: "Reliable Campaign Partner", desc: "Retainer, weekly, or one-off support." },
//     ],
//     ctaTitle: "Amplify Your Campaigns",
//     ctaDesc: "Let's build assets that make your clients' campaigns impossible to ignore.",
//   },
//   media: {
//     tag: "Media & Entertainment", h1: "AMPLIFY MEDIA BRANDS", subtitle: "Design. Storytelling. Motion.",
//     h2: "Helping Media Companies Create Content That Connects",
//     intro: "From TV channels to digital creators, the media world thrives on visuals, speed, and impact. We empower media brands to engage better and grow faster.",
//     quote: '"In media, your content is your brand — let\'s make it unforgettable."',
//     solutions: [
//       { num: "01", icon: "Palette", title: "Visual Branding & Graphics", items: ["Channel & Show Logos", "Social Media Posts, Thumbnails, Reels", "Broadcast-Ready Templates"], tagline: "Make every frame branded." },
//       { num: "02", icon: "Video", title: "Video Editing & Motion", items: ["YouTube & OTT Content Editing", "Intro/Outro Animations", "News Promos & Show Intros"], tagline: "Grab attention in 5 seconds." },
//       { num: "03", icon: "Globe", title: "3D & Virtual Media Assets", items: ["3D Studio Sets & Backdrops", "Virtual Product Placements", "Logo Animations"], tagline: "Premium, futuristic edge." },
//     ],
//     whyTitle: "Media Brands Choose AV EditLab",
//     whyItems: [
//       { icon: "Tv", title: "Media Industry Experience", desc: "Broadcast standards and digital requirements." },
//       { icon: "Zap", title: "High-Speed Delivery", desc: "For live-news and viral content." },
//       { icon: "Banknote", title: "Affordable Studio Quality", desc: "Premium output, lower overhead." },
//       { icon: "RefreshCw", title: "Idea to Output", desc: "Concept to final render." },
//     ],
//     ctaTitle: "Make Your Content Unforgettable",
//     ctaDesc: "Let's give your media brand the visual language it deserves.",
//   },
// };


// lib/industryData.ts
// Comprehensive industry data with all sections

export interface Solution {
  num: string;
  icon: string;
  title: string;
  items: string[];
  tagline: string;
}

export interface WhyItem {
  icon?: string;
  iconName?: string;
  title: string;
  desc: string;
}

export interface ProcessStep {
  step: string;
  icon: string;
  title: string;
  desc: string;
}

export interface Deliverable {
  icon: string;
  title: string;
  count: string;
}

export interface Stat {
  num: string;
  label: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  initials: string;
  text: string;
}

export interface IndustryData {
  // SEO
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];

  // Hero
  tag: string;
  h1: string;
  subtitle: string;
  h2: string;
  intro: string;
  quote: string;
  accentHex: string;

  // Stats
  stats: Stat[];

  // Solutions
  solutions: Solution[];

  // Process
  processSteps: ProcessStep[];

  // Deliverables
  deliverables: Deliverable[];

  // Why Us
  whyTitle: string;
  whyItems: WhyItem[];

  // Testimonials
  testimonials: Testimonial[];

  // FAQ
  faqs: FAQ[];

  // CTA
  ctaTitle: string;
  ctaDesc: string;
}

export const industryList = [
  { slug: "packaging", iconName: "Package", name: "Packaging", desc: "Boxes, labels, mockups & branding" },
  { slug: "hospitality", iconName: "Hotel", name: "Hospitality", desc: "Hotels, cafes & resorts" },
  { slug: "realestate", iconName: "Home", name: "Real Estate", desc: "Builders, brokers & developers" },
  { slug: "education", iconName: "GraduationCap", name: "Education", desc: "Institutes & online platforms" },
  { slug: "fashion", iconName: "Shirt", name: "Fashion", desc: "Labels, lookbooks & campaigns" },
  { slug: "automobile", iconName: "Car", name: "Automobile", desc: "Launches, dealers & brands" },
  { slug: "advertising", iconName: "Megaphone", name: "Advertising", desc: "TVCs, digital ads & campaigns" },
  { slug: "media", iconName: "Tv", name: "Media & Entertainment", desc: "Channels, YouTube & creators" },
];

// Common process steps used across industries
const commonProcess: ProcessStep[] = [
  { step: "01", icon: "Search", title: "Discovery & Brief", desc: "We deep-dive into your brand, goals, and audience to align our creative vision with your business objectives." },
  { step: "02", icon: "Lightbulb", title: "Concept & Strategy", desc: "Our team crafts unique concepts tailored to your industry, audience, and competitive landscape." },
  { step: "03", icon: "Palette", title: "Design & Production", desc: "Hands-on creation phase with iterative reviews and real-time collaboration to ensure perfection." },
  { step: "04", icon: "Sparkles", title: "Refinement & Polish", desc: "Multiple revision rounds, color grading, and quality checks for premium output." },
  { step: "05", icon: "Rocket", title: "Delivery & Launch", desc: "Final files in all required formats with launch support, campaign deployment, and post-launch analysis." },
];

export const industries: Record<string, IndustryData> = {
  // ============ PACKAGING ============
  packaging: {
    seoTitle: "Packaging Design Services in Lucknow | 3D Mockups & Label Design | AV EditLab",
    seoDescription: "Premium packaging design services — boxes, labels, 3D mockups, and product photography. Serving FMCG, luxury, and industrial brands across India.",
    seoKeywords: ["packaging design lucknow", "3d packaging mockup", "label design", "product packaging", "box design india", "fmcg packaging"],

    tag: "Packaging Industry",
    h1: "ELEVATE YOUR PACKAGING",
    subtitle: "Design. Visuals. Impact.",
    h2: "Transform the Way the World Sees Your Packaging",
    intro: "Packaging is not just a wrapper — it's your brand's first impression. We make that impression unforgettable with bold design, engaging visuals, and 3D storytelling that turns shelf shoppers into loyal buyers.",
    quote: '"If your packaging stands out, your product sells out."',
    accentHex: "#22d3ee",

    stats: [
      { num: "200+", label: "Packaging Projects", icon: "Package" },
      { num: "50+", label: "FMCG Brands", icon: "ShoppingBag" },
      { num: "98%", label: "Client Satisfaction", icon: "Heart" },
      { num: "48hrs", label: "Quick Turnaround", icon: "Zap" },
    ],

    solutions: [
      { num: "01", icon: "Palette", title: "High-Impact Graphic Design", items: ["Custom Box & Label Designs", "Print-Ready Artwork & Brand Identity", "Realistic Product Mockups", "Dieline & Structural Design", "Multi-SKU Series Design"], tagline: "Every design reflects your brand's quality." },
      { num: "02", icon: "Video", title: "Professional Video Editing", items: ["Unboxing & Product Showcase Videos", "Factory Walkthroughs & Process Films", "Branded Motion Graphics", "Social Media Reels", "E-commerce Product Videos"], tagline: "Videos that don't just show — they sell." },
      { num: "03", icon: "Box", title: "3D Packaging Visualization", items: ["Hyper-Realistic 3D Models", "360° Turntable Views", "Pre-Production Simulations", "Interactive AR Previews", "Print Production Mockups"], tagline: "See the final product before it's made." },
    ],

    processSteps: commonProcess,

    deliverables: [
      { icon: "FileImage", title: "Design Files", count: "10+ Formats" },
      { icon: "Box", title: "3D Models", count: "Hi-Res Renders" },
      { icon: "Video", title: "Product Videos", count: "4K Quality" },
      { icon: "Printer", title: "Print-Ready Files", count: "CMYK + Bleed" },
      { icon: "Layers", title: "Source Files", count: "Editable PSD/AI" },
      { icon: "Award", title: "Brand Guidelines", count: "PDF Manual" },
    ],

    whyTitle: "Packaging Brands Choose AV EditLab",
    whyItems: [
      { iconName: "Factory", title: "Packaging-Focused Team", desc: "Creatives who understand shelf impact, retail psychology, and print production requirements." },
      { iconName: "Zap", title: "Fast Turnaround", desc: "Tight deadlines met without compromise on quality — perfect for product launches and seasonal campaigns." },
      { iconName: "Banknote", title: "Budget-Friendly", desc: "Studio quality at transparent pricing — no hidden costs, no surprise invoices." },
      { iconName: "Trophy", title: "Trusted by 100+", desc: "FMCG to luxury and industrial brands across India trust our packaging expertise." },
      { iconName: "ShieldCheck", title: "Quality Guaranteed", desc: "Multiple revision rounds and print-ready files that work first time, every time." },
      { iconName: "Users", title: "Dedicated Account Manager", desc: "One point of contact throughout your project — no confusion, just clarity." },
    ],

    testimonials: [
      { name: "Rohit Kumar", role: "Marketing Head", company: "FreshFoods Pvt Ltd", initials: "RK", text: "AV EditLab transformed our entire packaging line. The 3D mockups helped us finalize designs before printing, saving us lakhs in revisions." },
      { name: "Priya Sharma", role: "Brand Manager", company: "Aura Cosmetics", initials: "PS", text: "Their attention to detail in label design is exceptional. Our sales increased 40% after the packaging redesign." },
      { name: "Amit Verma", role: "Founder", company: "Madhurveda", initials: "AV", text: "Quick turnaround, premium quality, and great communication. They understand FMCG packaging like no one else." },
    ],

    faqs: [
      { question: "How long does packaging design take?", answer: "A typical packaging project takes 7-14 days from brief to final files. For urgent needs, we can deliver in 48-72 hours with our express service." },
      { question: "Do you provide print-ready files?", answer: "Yes, all our packaging designs come print-ready in CMYK with proper bleed, trim marks, and dieline specifications compatible with any commercial printer." },
      { question: "Can you create 3D mockups before printing?", answer: "Absolutely. Our 3D mockups are hyper-realistic and help you visualize the final product, get stakeholder approvals, and use for marketing — all before printing." },
      { question: "Do you handle multi-SKU packaging series?", answer: "Yes, we specialize in cohesive multi-SKU series with consistent brand identity across product variants while maintaining visual differentiation." },
      { question: "What industries do you serve?", answer: "FMCG, food & beverages, cosmetics, pharmaceuticals, luxury goods, industrial products, and more. Our team adapts to industry-specific regulations and aesthetics." },
    ],

    ctaTitle: "Make Your Packaging",
    ctaDesc: "Let's create packaging visuals that make your product fly off the shelf and turn first-time buyers into lifelong customers.",
  },

  // ============ HOSPITALITY ============
  hospitality: {
    seoTitle: "Hospitality Marketing & Design Services | Hotel Branding | AV EditLab",
    seoDescription: "Premium design and video services for hotels, resorts, cafes, and restaurants. Cinematic tours, social media content, and luxury branding that drives bookings.",
    seoKeywords: ["hotel branding lucknow", "restaurant marketing", "hospitality design", "hotel video production", "resort branding"],

    tag: "Hospitality Industry",
    h1: "ELEVATE HOSPITALITY",
    subtitle: "Design. Atmosphere. Luxury.",
    h2: "Helping Hospitality Brands Inspire, Attract & Convert",
    intro: "In hospitality, first impressions happen before a guest even visits. We help hotels, cafes, resorts, and tourism brands stand out with breathtaking visuals that turn browsers into bookers.",
    quote: '"Luxury is first seen — then felt."',
    accentHex: "#fbbf24",

    stats: [
      { num: "75+", label: "Hospitality Brands", icon: "Hotel" },
      { num: "120+", label: "Property Tours", icon: "Video" },
      { num: "300%", label: "Avg Booking Growth", icon: "TrendingUp" },
      { num: "24/7", label: "Support Available", icon: "Clock" },
    ],

    solutions: [
      { num: "01", icon: "Palette", title: "Elegant Graphic Design", items: ["Premium Menu Designs, Brochures", "In-room Stationery & Signage", "Social Media Creatives for Events", "Wedding & Event Packages", "Loyalty Program Materials"], tagline: "Designs that reflect your brand class." },
      { num: "02", icon: "Video", title: "Cinematic Video Production", items: ["Hotel/Resort Tour Videos", "Testimonial Reels, Chef Specials", "Social Media Shorts", "Wedding Venue Films", "Aerial Drone Footage"], tagline: "Content that makes guests say: I have to go here." },
      { num: "03", icon: "Box", title: "3D Visualization & Motion", items: ["Virtual Room Tours", "3D Interior Layouts & Previews", "Animation Intro Clips", "Property AR Experience", "Pre-construction Renders"], tagline: "Sell your space before it's built." },
    ],

    processSteps: commonProcess,

    deliverables: [
      { icon: "Video", title: "Cinematic Films", count: "4K + Drone" },
      { icon: "Camera", title: "Photography", count: "200+ Photos" },
      { icon: "FileImage", title: "Print Materials", count: "Full Suite" },
      { icon: "Globe", title: "Virtual Tours", count: "360° Ready" },
      { icon: "Megaphone", title: "Social Content", count: "Monthly" },
      { icon: "Award", title: "Brand Manual", count: "Complete" },
    ],

    whyTitle: "Hospitality Brands Choose AV EditLab",
    whyItems: [
      { iconName: "Crown", title: "Luxury-Focused Creatives", desc: "Aligned with premium standards — we understand the difference between 4-star and 5-star aesthetics." },
      { iconName: "Zap", title: "Fast for Seasonal Needs", desc: "Campaign-ready assets for events, festivals, and peak booking seasons — delivered when you need them." },
      { iconName: "TrendingUp", title: "Designed to Drive Bookings", desc: "Visuals strategically crafted to drive footfall, reservations, and direct bookings." },
      { iconName: "RefreshCw", title: "One-Stop Partner", desc: "From photos to motion to brand identity — all under one roof, one team, one vision." },
      { iconName: "Globe", title: "Multi-Platform Optimized", desc: "Content tailored for Instagram, MakeMyTrip, Booking.com, and your direct website." },
      { iconName: "Heart", title: "Storytelling Experts", desc: "We don't just show your property — we tell its story in a way that emotionally connects with guests." },
    ],

    testimonials: [
      { name: "Vikram Singh", role: "GM", company: "Sai Paradise Hotels", initials: "VS", text: "Our virtual tours and cinematic videos directly resulted in a 40% increase in direct bookings within 3 months." },
      { name: "Neha Agarwal", role: "Owner", company: "Cafe Mocha", initials: "NA", text: "The team understood our boutique cafe vibe perfectly. The Instagram reels they created went viral!" },
      { name: "Rakesh Yadav", role: "F&B Manager", company: "Tour4YOU Resorts", initials: "RY", text: "Best decision we made was partnering with AV EditLab. They handle everything from menus to ads." },
    ],

    faqs: [
      { question: "Do you do on-location shoots?", answer: "Yes, our team travels across India for property shoots, weddings, and events. We bring our own equipment including drones for aerial shots." },
      { question: "Can you handle our entire social media?", answer: "Absolutely. We offer monthly content packages with reels, photos, stories, and posts designed specifically for hospitality engagement." },
      { question: "How do virtual tours help us?", answer: "Virtual tours give potential guests an immersive preview of your property, increasing booking confidence and reducing inquiry-to-booking time by 60%." },
      { question: "Do you create wedding marketing materials?", answer: "Yes, we create complete wedding packages including venue films, brochures, social media campaigns, and dedicated wedding microsites." },
      { question: "Can you optimize for OTA platforms?", answer: "Yes, we create OTA-optimized content for MakeMyTrip, Booking.com, Airbnb, and other platforms — including videos, photos, and listing descriptions." },
    ],

    ctaTitle: "Fill Your",
    ctaDesc: "Let's craft visuals that make your guests book before they visit — and become loyal patrons for life.",
  },

  // ============ REAL ESTATE ============
  realestate: {
    seoTitle: "Real Estate Marketing & 3D Visualization | Builder Branding | AV EditLab",
    seoDescription: "Real estate marketing services — 3D walkthroughs, virtual tours, brochures, drone videos for builders, brokers, and developers. Convert leads faster.",
    seoKeywords: ["real estate marketing lucknow", "3d walkthrough builders", "property video", "real estate brochure", "virtual property tour"],

    tag: "Real Estate",
    h1: "BRING REAL ESTATE TO LIFE",
    subtitle: "Design. Visuals. Conversions.",
    h2: "Helping Builders & Brokers Sell More, Faster",
    intro: "In real estate, buyers invest in how it looks and feels. We help real estate brands build trust through high-end visuals, immersive videos, and powerful design that converts site visits into bookings.",
    quote: '"If they can see it clearly, they\'ll buy it confidently."',
    accentHex: "#34d399",

    stats: [
      { num: "150+", label: "Properties Marketed", icon: "Home" },
      { num: "80+", label: "Builder Partners", icon: "Building2" },
      { num: "5x", label: "Lead Conversion", icon: "TrendingUp" },
      { num: "30 Days", label: "Faster Sales", icon: "Zap" },
    ],

    solutions: [
      { num: "01", icon: "Palette", title: "Premium Graphic Design", items: ["Project Brochures, Hoardings & Flyers", "Floor Plan Designs, Location Maps", "Branding for Builders & Projects", "Investor Pitch Decks", "Sales Office Collaterals"], tagline: "Position your project as premium." },
      { num: "02", icon: "Video", title: "Property Video Editing", items: ["Project Walkthrough Videos", "Testimonial Reels, Interviews", "YouTube & Social Media Ads", "Aerial Drone Coverage", "Construction Progress Films"], tagline: "Videos that spark emotion and drive action." },
      { num: "03", icon: "Box", title: "3D Visualization & Virtual Tours", items: ["3D Exterior & Interior Renders", "Virtual Site Tours", "Pre-launch Simulations", "Walkable VR Experiences", "Architectural Animations"], tagline: "Let buyers experience before it's ready." },
    ],

    processSteps: commonProcess,

    deliverables: [
      { icon: "FileImage", title: "Marketing Brochure", count: "Print + Digital" },
      { icon: "Box", title: "3D Renders", count: "Photoreal" },
      { icon: "Video", title: "Walkthrough Films", count: "4K + Drone" },
      { icon: "Globe", title: "Virtual Tours", count: "360° VR" },
      { icon: "Map", title: "Floor Plans", count: "All Units" },
      { icon: "Megaphone", title: "Ad Campaigns", count: "Multi-Platform" },
    ],

    whyTitle: "Real Estate Teams Work With Us",
    whyItems: [
      { iconName: "Zap", title: "Fast & High-Quality", desc: "Scales with your project timeline — pre-launch to delivery, we're ready when you are." },
      { iconName: "Home", title: "Real Estate Experience", desc: "We know what converts browsers into buyers — every design decision is conversion-focused." },
      { iconName: "Diamond", title: "Visuals That Sell Lifestyle", desc: "We don't just show properties — we sell emotion, aspiration, and the dream of better living." },
      { iconName: "RefreshCw", title: "Full Lifecycle Support", desc: "Pre-launch teasers to post-possession reviews — we cover every stage of your project." },
      { iconName: "Users", title: "RERA Compliant Materials", desc: "All marketing materials are RERA-compliant with proper disclaimers and accurate representations." },
      { iconName: "Globe", title: "Multi-Channel Optimization", desc: "Content optimized for 99acres, MagicBricks, Housing.com, social media, and your direct website." },
    ],

    testimonials: [
      { name: "Sandeep Gupta", role: "Director", company: "Skyline Builders", initials: "SG", text: "Our 3D walkthroughs helped us sell 80% inventory before construction completion. Best ROI on marketing ever!" },
      { name: "Anjali Mehta", role: "Marketing Head", company: "Premium Realty", initials: "AM", text: "Their virtual tours and aerial videos completely transformed our digital marketing. Conversions tripled." },
      { name: "Rahul Verma", role: "CEO", company: "Greenfield Developers", initials: "RV", text: "Professional, fast, and they understand RERA compliance. AV EditLab is now our exclusive marketing partner." },
    ],

    faqs: [
      { question: "Can you create 3D walkthroughs before construction starts?", answer: "Yes, our 3D renders and walkthroughs are based on architectural drawings — perfect for pre-launch marketing and sales." },
      { question: "Do you offer drone footage?", answer: "Yes, we have licensed drone pilots for aerial property shoots, location surveys, and cinematic exterior footage." },
      { question: "Are your materials RERA compliant?", answer: "Absolutely. We ensure all marketing materials include proper RERA registration numbers, disclaimers, and accurate representations." },
      { question: "Can you handle entire property marketing campaigns?", answer: "Yes, we provide end-to-end marketing — from brochures and 3D renders to Google Ads, social media, and lead nurturing." },
      { question: "Do you work with brokers and channel partners too?", answer: "Yes, we create custom marketing materials, presentation decks, and digital assets for brokers and channel partners." },
    ],

    ctaTitle: "Sell Your Project",
    ctaDesc: "Give your real estate brand the visual power it needs to win — pre-launch to possession, we've got you covered.",
  },

  // ============ EDUCATION ============
  education: {
    seoTitle: "Education Branding & Marketing Services | Coaching & EdTech | AV EditLab",
    seoDescription: "Marketing services for coaching institutes, schools, colleges, and EdTech platforms. Brochures, videos, social media, and digital marketing.",
    seoKeywords: ["coaching institute branding", "education marketing", "school promotion", "edtech video production"],

    tag: "Education Industry",
    h1: "TRANSFORM EDUCATION BRANDS",
    subtitle: "Design. Learning. Engagement.",
    h2: "Helping Educators Stand Out in the Digital Age",
    intro: "From coaching institutes to online platforms, today's education industry demands more than knowledge — it needs presentation, engagement, and trust. We help education brands attract more students and build authority.",
    quote: '"When learning looks great, it feels great."',
    accentHex: "#f472b6",

    stats: [
      { num: "100+", label: "Edu Institutes", icon: "GraduationCap" },
      { num: "500+", label: "Course Videos", icon: "Video" },
      { num: "2M+", label: "Students Reached", icon: "Users" },
      { num: "200%", label: "Admission Growth", icon: "TrendingUp" },
    ],

    solutions: [
      { num: "01", icon: "Palette", title: "Educational Graphic Design", items: ["Posters, Banners, and Brochures", "Course Flyers, Certificates", "Social Media Creatives", "Result Day Materials", "Faculty Profiles & ID Cards"], tagline: "Make your institute look premium." },
      { num: "02", icon: "Video", title: "Educational Video Editing", items: ["Class Promo & Ad Videos", "Result Highlight Reels", "YouTube Classes & Shorts", "Faculty Introduction Films", "Topper Interview Series"], tagline: "Videos that explain and convert." },
      { num: "03", icon: "Box", title: "3D & Motion Graphics", items: ["Animated Class Intros", "3D Explainers", "Virtual Classroom Elements", "Subject-Specific Animations", "Interactive Learning Modules"], tagline: "Turn concepts into visual stories." },
    ],

    processSteps: commonProcess,

    deliverables: [
      { icon: "BookOpen", title: "Course Materials", count: "Custom Design" },
      { icon: "Video", title: "Promo Videos", count: "Monthly Set" },
      { icon: "Award", title: "Certificates", count: "Branded Design" },
      { icon: "Megaphone", title: "Ad Creatives", count: "All Platforms" },
      { icon: "FileImage", title: "Brochures", count: "Print + Digital" },
      { icon: "Sparkles", title: "Animations", count: "Topic-Specific" },
    ],

    whyTitle: "Edu Brands Work With Us",
    whyItems: [
      { iconName: "BookOpen", title: "Clarity + Creativity", desc: "Visuals that teach, inspire, and convert — we balance educational value with marketing appeal." },
      { iconName: "Zap", title: "Quick Turnaround", desc: "Result posters, admission ads, batch announcements — delivered fast when you need them." },
      { iconName: "Banknote", title: "Affordable Packages", desc: "Custom packages designed for coaching center budgets — from solo tutors to large chains." },
      { iconName: "RefreshCw", title: "360° Content Support", desc: "From admission ads to academic content, from social media to YouTube — complete support." },
      { iconName: "TrendingUp", title: "Lead Generation Focus", desc: "Every design optimized to drive demo enrollments and convert prospects into paying students." },
      { iconName: "Users", title: "Multi-Format Mastery", desc: "Equally skilled at JEE coaching aesthetics, music school vibes, or corporate training looks." },
    ],

    testimonials: [
      { name: "Dr. Sanjay Mishra", role: "Director", company: "Premier IIT-JEE Academy", initials: "SM", text: "Our admission numbers doubled after AV EditLab redesigned our entire branding and digital campaigns." },
      { name: "Kavita Iyer", role: "Founder", company: "EduSpark Online", initials: "KI", text: "The course explainer videos they created are amazing. Our student engagement on the platform is at all-time high." },
      { name: "Prof. Anand Rao", role: "Owner", company: "Aspire Coaching Center", initials: "AR", text: "Quick response, quality work, and they understand the coaching industry. Highly recommended for educators." },
    ],

    faqs: [
      { question: "Do you offer monthly content packages?", answer: "Yes, we have monthly content packages designed for coaching centers and EdTech platforms — covering social media, ads, and result posters." },
      { question: "Can you create subject-specific animations?", answer: "Absolutely. We create explainer videos and animations for Physics, Chemistry, Math, Biology, and other subjects — perfect for online classes." },
      { question: "Do you design certificates and ID cards?", answer: "Yes, we design custom certificates, ID cards, ranking certificates, and award designs that elevate your institute's brand." },
      { question: "Can you handle our YouTube channel?", answer: "Yes, we offer complete YouTube content services — from intros and thumbnails to video editing and channel optimization." },
      { question: "Do you create JEE/NEET specific materials?", answer: "Yes, we specialize in JEE, NEET, UPSC, and other competitive exam coaching marketing with industry-specific aesthetics and messaging." },
    ],

    ctaTitle: "Grow Your",
    ctaDesc: "Let's create content that attracts students, builds reputation, and turns your institute into the most preferred choice.",
  },

  // ============ FASHION ============
  fashion: {
    seoTitle: "Fashion Brand Marketing & Lookbook Design | AV EditLab Lucknow",
    seoDescription: "Fashion brand marketing — lookbooks, campaign videos, social media, label design for boutiques, designers, and apparel brands across India.",
    seoKeywords: ["fashion brand marketing", "lookbook design", "fashion video production", "apparel branding", "boutique marketing"],

    tag: "Fashion Industry",
    h1: "STYLE MEETS STRATEGY",
    subtitle: "Design. Motion. Aesthetic.",
    h2: "Helping Fashion Brands Look Iconic",
    intro: "In fashion, your visual identity is your voice. We help you capture attention, define your look, and sell your style with premium visual content that turns scrollers into shoppers.",
    quote: '"Fashion isn\'t just worn. It\'s seen, felt, and remembered."',
    accentHex: "#a78bfa",

    stats: [
      { num: "60+", label: "Fashion Brands", icon: "Shirt" },
      { num: "200+", label: "Lookbooks Created", icon: "BookOpen" },
      { num: "1.5M+", label: "Social Engagement", icon: "Heart" },
      { num: "5x", label: "Sales Conversion", icon: "ShoppingBag" },
    ],

    solutions: [
      { num: "01", icon: "Palette", title: "Bold Graphic Design", items: ["Lookbooks, Catalogs & Posters", "Label Designs, Tags & Packaging", "Social Media Launch Teasers", "E-commerce Product Pages", "Influencer Collab Kits"], tagline: "Visuals that reflect your brand essence." },
      { num: "02", icon: "Video", title: "Fashion Video Editing", items: ["Behind-the-Scenes Edits", "Campaign Films & Ad Reels", "Influencer Reels & YouTube Shorts", "Runway Show Highlights", "Try-On Hauls & Reviews"], tagline: "Videos that trend and trigger sales." },
      { num: "03", icon: "Box", title: "3D Fashion Visualization", items: ["Virtual Fashion Shows", "3D Product Displays & Turntables", "Animated Collection Intros", "AR Try-On Experiences", "Digital Fabric Sampling"], tagline: "Give your brand a digital runway." },
    ],

    processSteps: commonProcess,

    deliverables: [
      { icon: "BookOpen", title: "Lookbooks", count: "Seasonal" },
      { icon: "Camera", title: "Campaign Photos", count: "Editorial" },
      { icon: "Video", title: "Fashion Films", count: "Cinematic" },
      { icon: "Sparkles", title: "Social Reels", count: "Monthly Pack" },
      { icon: "ShoppingBag", title: "E-com Assets", count: "Listed Ready" },
      { icon: "Megaphone", title: "Ad Creatives", count: "Multi-Platform" },
    ],

    whyTitle: "Fashion Brands Choose AV EditLab",
    whyItems: [
      { iconName: "Sparkles", title: "Aesthetic-First Design", desc: "Beautiful designs that drive sales — we balance editorial vision with conversion psychology." },
      { iconName: "Zap", title: "Quick Launch Support", desc: "Campaign assets for seasonal drops and limited editions — delivered at fashion-week speed." },
      { iconName: "Diamond", title: "Strong Visual Branding", desc: "Identity that boosts recognition and creates loyal fans who buy collection after collection." },
      { iconName: "RefreshCw", title: "Sketch to Screen", desc: "Full-service visual partner from initial concept to digital store to social media campaigns." },
      { iconName: "Heart", title: "Trend-Aware Team", desc: "We stay current with fashion trends, color forecasts, and aesthetic movements globally." },
      { iconName: "Globe", title: "Multi-Platform Native", desc: "Content optimized for Instagram, Pinterest, Myntra, Ajio, your website — wherever fashion lives." },
    ],

    testimonials: [
      { name: "Sneha Kapoor", role: "Founder", company: "Veda Boutique", initials: "SK", text: "Our lookbook went viral on Instagram. The visuals AV EditLab created perfectly captured our ethnic-modern vibe." },
      { name: "Rohan Malhotra", role: "Creative Director", company: "Urban Threads", initials: "RM", text: "Best fashion marketing partner we've worked with. They understand both heritage and contemporary fashion." },
      { name: "Pooja Singh", role: "Designer", company: "Pooja's Couture", initials: "PS", text: "Their campaign film for our wedding collection got us bookings months in advance. Worth every rupee." },
    ],

    faqs: [
      { question: "Do you do fashion photography too?", answer: "Yes, we offer complete fashion photography services including editorial shoots, lookbook photography, e-commerce product shoots, and behind-the-scenes coverage." },
      { question: "Can you create seasonal lookbooks?", answer: "Absolutely. We create seasonal lookbooks 4 times a year (or as needed) — print-ready and digital versions with full styling and creative direction." },
      { question: "Do you handle Instagram reels?", answer: "Yes, fashion reels are our specialty. We create trending, on-brand reels that drive engagement and conversions for fashion brands." },
      { question: "Can you create AR try-on experiences?", answer: "Yes, we develop AR try-on solutions for Instagram filters, Snapchat lenses, and dedicated try-on apps — perfect for jewelry, accessories, and apparel." },
      { question: "Do you work with bridal/wedding fashion?", answer: "Yes, we specialize in bridal and wedding fashion — from couture brand campaigns to bridal lookbooks to wedding-season campaigns." },
    ],

    ctaTitle: "Make Your Brand",
    ctaDesc: "Let's design your next collection's visual story together — and turn your fashion brand into a recognized name.",
  },

  // ============ AUTOMOBILE ============
  automobile: {
    seoTitle: "Automotive Marketing & 3D Vehicle Visualization | AV EditLab",
    seoDescription: "Automotive marketing services for dealerships, manufacturers, and modification shops. 3D vehicle renders, launch films, and dealer marketing materials.",
    seoKeywords: ["automotive marketing lucknow", "car dealership branding", "3d vehicle rendering", "auto launch video"],

    tag: "Automobile Industry",
    h1: "DRIVE VISUAL IMPACT",
    subtitle: "Design. Motion. Performance.",
    h2: "Helping Automotive Brands Shift into the Fast Lane",
    intro: "From roaring engines to elegant exteriors — we help automotive brands capture power through cutting-edge design, cinematic visuals, and immersive 3D experiences that drive showroom footfall.",
    quote: '"People don\'t just buy vehicles — they buy the way it looks, feels, and moves."',
    accentHex: "#22d3ee",

    stats: [
      { num: "40+", label: "Auto Brands", icon: "Car" },
      { num: "120+", label: "Launch Campaigns", icon: "Rocket" },
      { num: "60%", label: "Test Drive Growth", icon: "TrendingUp" },
      { num: "4K+8K", label: "Render Quality", icon: "Video" },
    ],

    solutions: [
      { num: "01", icon: "Palette", title: "High-Performance Graphic Design", items: ["Vehicle Launch Posters & Billboards", "Dealership Banners, Flyers & Catalogs", "Car Wrap & Accessory Branding", "Service Center Materials", "Showroom Decals & Signage"], tagline: "Showcase the power of your brand." },
      { num: "02", icon: "Video", title: "Automotive Video Editing", items: ["Car Launch Trailers & Highlights", "Test Drive Videos & Reels", "Factory or Modification Showcases", "Customer Testimonial Films", "EV/Tech Feature Explainers"], tagline: "Sell speed, comfort, and control." },
      { num: "03", icon: "Box", title: "3D Vehicle Visualization", items: ["3D Car Models & Turntables", "Interior Walkthroughs & Engine Animations", "AR/VR Ready Showcases", "Color & Variant Configurators", "Detailed Component Renders"], tagline: "Cutting-edge digital presence." },
    ],

    processSteps: commonProcess,

    deliverables: [
      { icon: "Video", title: "Launch Films", count: "Cinematic 4K" },
      { icon: "Box", title: "3D Vehicle Models", count: "Photoreal" },
      { icon: "FileImage", title: "Print Collaterals", count: "Full Suite" },
      { icon: "Globe", title: "AR Experiences", count: "Mobile Ready" },
      { icon: "Megaphone", title: "Ad Campaigns", count: "Multi-Channel" },
      { icon: "Award", title: "Brand Guidelines", count: "Showroom Manual" },
    ],

    whyTitle: "Auto Brands Choose AV EditLab",
    whyItems: [
      { iconName: "Zap", title: "Speedy World-Class Quality", desc: "Fast without compromising excellence — perfect for time-sensitive product launches and dealer rollouts." },
      { iconName: "Car", title: "Premium Auto Design Language", desc: "Visuals that speak the automotive aesthetic — power, precision, performance, and prestige." },
      { iconName: "Video", title: "Studio-Style Visuals", desc: "Campaign impact for every launch — from local dealership ads to national TVC-quality production." },
      { iconName: "RefreshCw", title: "Full Campaign Coverage", desc: "From debut to rollout — pre-launch teasers, launch day blast, post-launch sustenance, all covered." },
      { iconName: "Sparkles", title: "EV & Future Tech Expertise", desc: "Specialized in electric vehicles, hybrid tech, and futuristic feature showcases that build excitement." },
      { iconName: "Users", title: "B2B + B2C Coverage", desc: "Equally strong at OEM-level brand campaigns and dealer-level local marketing materials." },
    ],

    testimonials: [
      { name: "Rajesh Kumar", role: "GM Marketing", company: "Premium Motors", initials: "RK", text: "Our launch film got 500K+ views in the first week. Test drive bookings increased by 60%. Phenomenal work!" },
      { name: "Sunil Sharma", role: "Owner", company: "Auto Connect Dealership", initials: "SS", text: "From showroom signage to social media reels — AV EditLab handles our entire visual marketing. Best decision." },
      { name: "Karan Bhatia", role: "Founder", company: "BoltMod Customizations", initials: "KB", text: "Their 3D modification visualizations help customers see the final look before we touch their car. Game changer." },
    ],

    faqs: [
      { question: "Do you create 3D car renders for any model?", answer: "Yes, we create photorealistic 3D renders for any car model based on reference photos, CAD files, or manufacturer data — perfect for marketing." },
      { question: "Can you help with vehicle launch campaigns?", answer: "Absolutely. We create complete launch campaigns including teasers, trailers, photoshoots, social media, dealer materials, and TVC-quality films." },
      { question: "Do you work with car modification shops?", answer: "Yes, we specialize in modification marketing — before/after visuals, 3D mod previews, social content, and customer testimonial videos." },
      { question: "Can you create AR experiences for showrooms?", answer: "Yes, we develop AR/VR experiences for showrooms — virtual test drives, interior walkthroughs, and feature demonstrations." },
      { question: "Do you handle EV and electric vehicle marketing?", answer: "Yes, we have specialized expertise in EV marketing — explaining tech features, range anxiety solutions, and the future-tech aesthetic." },
    ],

    ctaTitle: "Rev Up Your",
    ctaDesc: "Let's create automotive visuals that stop people in their tracks — and drive them straight to your showroom.",
  },

  // ============ ADVERTISING ============
  advertising: {
    seoTitle: "Advertising Agency Production Partner | TVC & Digital Ads | AV EditLab",
    seoDescription: "Production partner for advertising agencies — TVCs, digital ads, motion graphics, 3D commercials. Fast turnaround, agency-friendly workflow.",
    seoKeywords: ["advertising production lucknow", "tvc production", "digital ad agency partner", "motion graphics ads"],

    tag: "Advertising Agencies",
    h1: "POWERING ADVERTISING",
    subtitle: "Design. Motion. Attention.",
    h2: "Helping Advertising Agencies Turn Ideas into Impact",
    intro: "It's not enough to just think creatively — you have to show it. We collaborate with ad agencies and marketing teams to produce stunning visual assets that bring big ideas to life — on time, on budget, on brief.",
    quote: '"In advertising, your visuals are your voice — make them unforgettable."',
    accentHex: "#fbbf24",

    stats: [
      { num: "30+", label: "Agency Partners", icon: "Megaphone" },
      { num: "500+", label: "Campaigns Delivered", icon: "Rocket" },
      { num: "24hr", label: "Express Delivery", icon: "Zap" },
      { num: "100%", label: "On-Brief Rate", icon: "Target" },
    ],

    solutions: [
      { num: "01", icon: "Palette", title: "High-End Graphic Design", items: ["Campaign Creatives (Print & Digital)", "Ad Banners, Hoardings & Posters", "Social Media Ads & Storyboards", "Mockups & Pitch Visuals", "Print Production Files"], tagline: "Designs that grab eyeballs and drive clicks." },
      { num: "02", icon: "Video", title: "Commercial Video Editing", items: ["TVC & Digital Ads", "Product Launch Videos", "Short Reels & Paid Ad Creatives", "Brand Films & Manifestos", "Influencer Collaboration Content"], tagline: "Edits with rhythm, pace & persuasion." },
      { num: "03", icon: "Box", title: "3D & Motion Graphics", items: ["Logo Reveals, Ad Animations", "3D Product Commercials", "Explainer Ads", "VFX for Commercials", "Compositing & Color Grading"], tagline: "Next-level cinematic edge." },
    ],

    processSteps: commonProcess,

    deliverables: [
      { icon: "Video", title: "TVC Production", count: "Broadcast Ready" },
      { icon: "FileImage", title: "Print Campaigns", count: "Multi-Size" },
      { icon: "Sparkles", title: "Motion Graphics", count: "All Formats" },
      { icon: "Megaphone", title: "Digital Ads", count: "Multi-Platform" },
      { icon: "Box", title: "3D Commercials", count: "Photoreal" },
      { icon: "Layers", title: "Source Files", count: "Editable" },
    ],

    whyTitle: "Agencies Choose AV EditLab",
    whyItems: [
      { iconName: "Megaphone", title: "We Speak the Ad Language", desc: "Fast, bold, strategic — we understand agency workflows, briefs, brand books, and timelines." },
      { iconName: "Clock", title: "On-Brand, On-Time", desc: "Respect for guidelines, brand books, and deadlines — your reputation with clients is our priority." },
      { iconName: "TrendingUp", title: "Built for Performance", desc: "Every creative optimized for clicks, conversions, and campaign KPIs — not just pretty pictures." },
      { iconName: "RefreshCw", title: "Reliable Campaign Partner", desc: "Retainer, weekly, or one-off support — we adapt to your agency's workflow seamlessly." },
      { iconName: "ShieldCheck", title: "White-Label Friendly", desc: "We work invisibly as your production team — your clients only see your agency name on deliverables." },
      { iconName: "Users", title: "Dedicated Account Team", desc: "Single point of contact who knows your account history, brand preferences, and quality standards." },
    ],

    testimonials: [
      { name: "Aditya Kapoor", role: "Creative Director", company: "Pulse Agency", initials: "AK", text: "Our reliable production partner for 3+ years. They consistently deliver agency-quality work at fair prices." },
      { name: "Meera Nair", role: "Founder", company: "Brand Story Co.", initials: "MN", text: "AV EditLab is like having an in-house production team without the overhead. Saves us 40% on production costs." },
      { name: "Vikas Chopra", role: "Account Director", company: "DigitalFirst", initials: "VC", text: "Fast, reliable, professional. They've helped us scale our agency without scaling our internal team." },
    ],

    faqs: [
      { question: "Do you work as a white-label partner?", answer: "Yes, we work invisibly as your agency's production team. Your clients see only your brand on final deliverables — we never claim credit directly." },
      { question: "Can you handle urgent campaign turnarounds?", answer: "Yes, we offer 24-48 hour express delivery for urgent campaigns — perfect for breaking news, reactive marketing, and tight pitch deadlines." },
      { question: "Do you offer retainer arrangements?", answer: "Absolutely. We have monthly retainer packages for agencies — dedicated production hours, priority support, and discounted rates." },
      { question: "Can you produce TVCs for broadcast?", answer: "Yes, we produce broadcast-quality TVCs in all required formats and resolutions — compliant with TRAI, censor board, and broadcast standards." },
      { question: "Do you handle compositing and VFX?", answer: "Yes, our team handles complex VFX, compositing, color grading, and motion graphics — agency-grade quality on every project." },
    ],

    ctaTitle: "Amplify Your",
    ctaDesc: "Let's build assets that make your clients' campaigns impossible to ignore — and your agency unforgettable.",
  },

  // ============ MEDIA ============
  media: {
    seoTitle: "Media & Entertainment Production Services | YouTube & OTT | AV EditLab",
    seoDescription: "Production services for media houses, YouTube channels, OTT platforms, and content creators. Video editing, motion graphics, and channel branding.",
    seoKeywords: ["media production lucknow", "youtube channel branding", "ott content production", "video editing services"],

    tag: "Media & Entertainment",
    h1: "AMPLIFY MEDIA BRANDS",
    subtitle: "Design. Storytelling. Motion.",
    h2: "Helping Media Companies Create Content That Connects",
    intro: "From TV channels to digital creators, the media world thrives on visuals, speed, and impact. We empower media brands to engage better, grow faster, and stand out in an attention-starved world.",
    quote: '"In media, your content is your brand — let\'s make it unforgettable."',
    accentHex: "#f472b6",

    stats: [
      { num: "50+", label: "Media Brands", icon: "Tv" },
      { num: "1000+", label: "Videos Edited", icon: "Video" },
      { num: "10M+", label: "Total Views", icon: "Eye" },
      { num: "2hr", label: "Avg Delivery", icon: "Zap" },
    ],

    solutions: [
      { num: "01", icon: "Palette", title: "Visual Branding & Graphics", items: ["Channel & Show Logos", "Social Media Posts, Thumbnails, Reels", "Broadcast-Ready Templates", "News Lower Thirds & Tickers", "Show Title Cards & Bumpers"], tagline: "Make every frame branded." },
      { num: "02", icon: "Video", title: "Video Editing & Motion", items: ["YouTube & OTT Content Editing", "Intro/Outro Animations", "News Promos & Show Intros", "Podcast Video Editing", "Live Stream Graphics"], tagline: "Grab attention in 5 seconds." },
      { num: "03", icon: "Box", title: "3D & Virtual Media Assets", items: ["3D Studio Sets & Backdrops", "Virtual Product Placements", "Logo Animations", "Virtual News Studio Setups", "Holographic Display Designs"], tagline: "Premium, futuristic edge." },
    ],

    processSteps: commonProcess,

    deliverables: [
      { icon: "Video", title: "Edited Content", count: "Multi-Format" },
      { icon: "FileImage", title: "Thumbnails", count: "CTR Optimized" },
      { icon: "Sparkles", title: "Intros & Outros", count: "Branded" },
      { icon: "Box", title: "Virtual Sets", count: "3D Studios" },
      { icon: "Megaphone", title: "Promos", count: "Quick Cuts" },
      { icon: "Award", title: "Brand Kit", count: "Complete" },
    ],

    whyTitle: "Media Brands Choose AV EditLab",
    whyItems: [
      { iconName: "Tv", title: "Media Industry Experience", desc: "Broadcast standards and digital requirements — we understand the difference and excel at both." },
      { iconName: "Zap", title: "High-Speed Delivery", desc: "For live-news and viral content — same-day turnaround when the news cycle demands it." },
      { iconName: "Banknote", title: "Affordable Studio Quality", desc: "Premium output, lower overhead — perfect for digital-first media brands scaling content production." },
      { iconName: "RefreshCw", title: "Idea to Output", desc: "Concept to final render — we handle scriptwriting, editing, graphics, and final delivery." },
      { iconName: "TrendingUp", title: "Algorithm Aware", desc: "We understand YouTube, Instagram, and OTT platform algorithms — content optimized for visibility." },
      { iconName: "Users", title: "Creator Economy Focus", desc: "Dedicated services for YouTubers and content creators — channel branding, thumbnails, and growth content." },
    ],

    testimonials: [
      { name: "Anchor Priya Shukla", role: "News Anchor", company: "TimesNow Regional", initials: "PS", text: "Quick turnarounds on news graphics and promos. They understand broadcast urgency like no one else." },
      { name: "Rishi Verma", role: "Creator", company: "TechExplained (500K+ subs)", initials: "RV", text: "My YouTube channel grew from 50K to 500K subscribers — and their editing and thumbnails played a huge role." },
      { name: "Sanjay Iyer", role: "Producer", company: "StreamFlix Originals", initials: "SI", text: "Reliable production partner for our OTT shows. Quality, speed, and budget — all checked boxes." },
    ],

    faqs: [
      { question: "Can you edit YouTube videos regularly?", answer: "Yes, we have monthly packages for YouTube creators — including editing, thumbnails, channel art, and growth-focused content optimization." },
      { question: "Do you create news graphics?", answer: "Absolutely. We create lower thirds, tickers, breaking news graphics, weather maps, and election-day graphics packages for news channels." },
      { question: "Can you handle podcast video editing?", answer: "Yes, podcast video editing is a specialty — including multi-cam editing, audio cleanup, social media clips, and branded intros." },
      { question: "Do you create virtual studio setups?", answer: "Yes, we design and create 3D virtual studio environments for news, talk shows, and presentations — both for live broadcast and pre-recorded content." },
      { question: "What's your turnaround for breaking news graphics?", answer: "For breaking news and reactive content, we offer 30-60 minute turnaround. For regular content, 2-24 hours depending on complexity." },
    ],

    ctaTitle: "Make Your Content",
    ctaDesc: "Let's give your media brand the visual language it deserves — and the audience growth that follows great content.",
  },
};