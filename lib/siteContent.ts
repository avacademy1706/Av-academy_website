export const SITE_CONTENT = {
  company: {
    name: "AV EditLab & AV Academy",
    tagline: "Where Creativity Meets Business Growth",
    academyTagline: "Where Edits Come to Life",
    phone1: "+91-9675903348",
    phone2: "+91-75002 06719",
    whatsapp: "+91-9675903348",
    email: "avacademy1706@gmail.com",
    website: "avacademy.co.in",
    address: "3rd Floor, Sai Tower, Raibareli Rd, Vrindavan Colony, Lucknow, UP 226014",
    stats: { clients: "100+", projects: "1000+", years: "5+", industries: "8+" },
  },
  editlab: {
    services: [
      { title: "Graphic Design", desc: "Premium print & digital visuals — logo, brochures, packaging, social media creatives" },
      { title: "Video Editing & Production", desc: "Product films, reels, TVCs, YouTube content, social media videos" },
      { title: "3D Visualization & Motion", desc: "3D models, turntables, walkthroughs, virtual tours, animations" },
      { title: "AI-Powered Creative Solutions", desc: "AI tools for creative automation, content generation, smart editing" },
      { title: "Personal Brand Building", desc: "Complete personal branding — social media, website, content strategy" },
    ],
    industries: [
      { name: "Packaging", desc: "Box designs, labels, 3D mockups, FMCG branding, luxury packaging" },
      { name: "Hospitality", desc: "Hotels, cafes, resorts — menus, tour videos, 3D interior tours, social content" },
      { name: "Real Estate", desc: "Builders, brokers — brochures, walkthroughs, 3D renders, project videos" },
      { name: "Education", desc: "Coaching institutes — posters, promo videos, animated explainers, result reels" },
      { name: "Fashion", desc: "Labels, lookbooks, campaign films, 3D product displays, influencer content" },
      { name: "Automobile", desc: "Car launches, dealership campaigns, 3D vehicle visualization, test drive videos" },
      { name: "Advertising", desc: "TVCs, digital ads, campaign creatives, motion graphics, brand films" },
      { name: "Media & Entertainment", desc: "Channel branding, YouTube content, broadcast graphics, OTT content editing" },
    ],
  },
  academy: {
    mediaCourses: [
      { name: "Graphic Design", duration: "3 Months", mode: "Online & Offline" },
      { name: "Video Editing", duration: "2–3 Months", mode: "Online & Offline" },
      { name: "Motion Graphics", duration: "3 Months", mode: "Online & Offline" },
      { name: "VFX Master Classes", duration: "4–6 Months", mode: "Offline Lucknow" },
      { name: "2D Animation", duration: "3 Months", mode: "Online & Offline" },
      { name: "3D Animation", duration: "4–6 Months", mode: "Online & Offline" },
      { name: "Digital Marketing", duration: "2 Months", mode: "Online & Offline" },
      { name: "Painting & Sketching", duration: "2–3 Months", mode: "Offline Lucknow" },
    ],
    techCourses: [
      { name: "AI Masterclass", duration: "6–8 Weeks", mode: "Online & Offline", hot: true, topics: ["AI & Machine Learning Fundamentals", "ChatGPT, DALL-E, Midjourney, Gemini", "RunwayML for AI Video Generation", "Agentic AI, RAG, LLM Workflows", "Prompt Engineering Mastery"] },
      { name: "Python & Data Science", duration: "3–4 Months", mode: "Online & Offline" },
      { name: "C Programming", duration: "2 Months", mode: "Online & Offline" },
      { name: "C++ Programming", duration: "2–3 Months", mode: "Online & Offline" },
    ],
  },
  pricing: {
    plans: [
      { id: "starter", name: "Starter Impact", price: 15000, priceDisplay: "₹15,000", period: "/month", forWho: "Local leaders, early-stage politicians, small institutions", popular: false, features: ["Static Website", "Facebook & Instagram Page Setup", "8 Social Media Posts/month", "4 Short Videos (cross-platform)", "Monthly Report Summary"] },
      { id: "growth", name: "Digital Growth Plan", price: 25000, priceDisplay: "₹25,000", period: "/month", forWho: "Regional leaders, coaching centers, medium institutions", popular: true, features: ["Dynamic Website", "YouTube Setup + 4 Videos/month", "Meta Setup + 15 Posts/month", "5 Short Videos (Insta + Facebook)", "SEO Management + GMB Setup", "Personal Ad Manager", "Business Counseling"] },
      { id: "pro", name: "Pro Leadership Suite", price: 50000, priceDisplay: "₹50,000", period: "/month", forWho: "Senior leaders, political personalities, brand heads", popular: false, features: ["Full Stack Website + SEO", "Daily Social Media Post", "8 YouTube Videos/month", "10 Instagram & Facebook Reels", "Meta + Google Ad Management", "Dedicated Manager", "Monthly Dashboard"] },
    ],
    addons: [
      { service: "Additional Reels / Shorts", price: "₹3,000/video" },
      { service: "Event Photoshoot", price: "₹10,000/session" },
      { service: "Digital Poster Campaign (10 templates)", price: "₹5,000" },
      { service: "Meta Ads Campaign Setup", price: "₹10,000" },
    ],
  },
  // Lucide icon names for WhyUs
  whyUs: [
    { iconName: "Factory", title: "Deep Industry Know-How", desc: "Tailored creativity for every sector — no generic solutions." },
    { iconName: "Sparkles", title: "Creative Excellence", desc: "Every pixel, every frame crafted to connect and convert." },
    { iconName: "RefreshCw", title: "End-to-End Support", desc: "Brainstorming to final delivery — with you at every step." },
    { iconName: "Zap", title: "Fast & Transparent", desc: "Your deadlines are sacred. Always on time." },
    { iconName: "Trophy", title: "Trusted by 100+ Clients", desc: "Who keep returning because we exceed expectations." },
  ],
  testimonials: [
    { name: "Rahul Sharma", role: "CEO, PackRight Industries", text: "AV EditLab transformed our packaging with breathtaking 3D renders. Sales went up 40% within 3 months of the rebrand. Absolutely world-class work!" },
    { name: "Priya Agarwal", role: "Director, The Royal Stays, Lucknow", text: "Our hotel's booking rate doubled after the cinematic tour video they created. Professional, creative, and delivers on time — always!" },
    { name: "Arjun Verma", role: "AI Freelancer & Academy Alumni", text: "I joined the AI Masterclass with zero background and now freelance earning ₹50,000/month using AI tools. AV Academy changed my career!" },
  ],
};

export function generateChatbotPrompt(): string {
  const c = SITE_CONTENT;
  const mediaCoursesList = c.academy.mediaCourses.map(course => `  - ${course.name}: ${course.duration}, ${course.mode}`).join("\n");
  const techCoursesList = c.academy.techCourses.map(course => `  - ${course.name}: ${course.duration}, ${course.mode}${course.hot ? " ⭐ MOST POPULAR" : ""}`).join("\n");
  const servicesList = c.editlab.services.map(s => `  - ${s.title}: ${s.desc}`).join("\n");
  const pricingList = c.pricing.plans.map(plan => `  ${plan.name} — ${plan.priceDisplay}${plan.period}${plan.popular ? " (MOST POPULAR)" : ""}\n   For: ${plan.forWho}\n   Includes: ${plan.features.join(", ")}`).join("\n\n");
  const addonsList = c.pricing.addons.map(a => `  - ${a.service}: ${a.price}`).join("\n");

  return `Tum ${c.company.name} ka AI Assistant ho. Friendly, helpful aur professional ho.

=== COMPANY INFO ===
Phone: ${c.company.phone1} | ${c.company.phone2}
WhatsApp: ${c.company.whatsapp}
Email: ${c.company.email}
Website: ${c.company.website}
Address: ${c.company.address}

=== AV EDITLAB SERVICES ===
${servicesList}

=== AV ACADEMY — MEDIA COURSES ===
${mediaCoursesList}

=== AV ACADEMY — AI & TECH COURSES ===
${techCoursesList}

=== PERSONAL BRAND PRICING PLANS ===
${pricingList}

=== ADD-ON SERVICES ===
${addonsList}

=== RESPONSE RULES ===
1. Hindi mein pooche toh Hindi/Hinglish mein jawab do
2. Pricing poochhe toh clearly batao aur add karo: "Enquiry ke liye call/WhatsApp karein: ${c.company.whatsapp}"
3. Course fees poochhe toh: "Fees ke liye WhatsApp karein: ${c.company.whatsapp}"
4. Contact details: Phone ${c.company.phone1}, ${c.company.phone2} | Email: ${c.company.email}
5. Website se bahar ke topics pe: "Main sirf ${c.company.name} ke baare mein bata sakta hun"
6. Short, clear answers do — 2-4 lines`;
}
