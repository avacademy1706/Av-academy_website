// "use client";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WAFloat from "@/components/WAFloat";
// import { CTASection } from "@/components/PageSections";
// import Link from "next/link";
// import { SITE_CONTENT } from "@/lib/siteContent";

// const C = SITE_CONTENT.academy;

// function CourseCard({ badge, title, duration, mode, isAI = false, href = "/contact" }: {
//   badge: string; title: string; duration: string; mode: string; isAI?: boolean; href?: string;
// }) {
//   const badgeStyle = isAI
//     ? { background: "rgba(0,180,216,.1)", color: "var(--cyan2)", border: "1px solid rgba(0,180,216,.25)" }
//     : { background: "rgba(245,158,11,.1)", color: "var(--amber2)", border: "1px solid rgba(245,158,11,.25)" };

//   return (
//     <div style={{
//       position: "relative", padding: "28px 24px", borderRadius: "20px",
//       background: "rgba(8,28,44,.8)", overflow: "hidden", transition: "all .3s",
//       border: isAI ? "1px solid rgba(0,180,216,.35)" : "1px solid var(--border)",
//       display: "flex", flexDirection: "column", height: "100%",
//     }}
//       onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 20px 50px rgba(0,180,216,.2)"; el.style.borderColor = "rgba(0,180,216,.5)"; }}
//       onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.boxShadow = ""; el.style.borderColor = isAI ? "rgba(0,180,216,.35)" : "var(--border)"; }}>
//       {/* Top line */}
//       <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg,var(--cyan1),var(--cyan2))" }} />

//       <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: "20px", fontSize: "10px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "14px", ...badgeStyle }}>
//         {badge}
//       </span>
//       <h4 className="font-syne" style={{ fontWeight: 700, fontSize: "15px", marginBottom: "12px", flex: 1 }}>{title}</h4>
//       <div style={{ display: "flex", flexDirection: "column", gap: "7px", marginBottom: "20px" }}>
//         <span style={{ fontSize: "12px", color: "var(--gray)", display: "flex", alignItems: "center", gap: "7px" }}>
//           <i className="far fa-clock" style={{ fontSize: "11px", color: "var(--amber2)" }} /> {duration}
//         </span>
//         <span style={{ fontSize: "12px", color: "var(--gray)", display: "flex", alignItems: "center", gap: "7px" }}>
//           <i className="fas fa-laptop" style={{ fontSize: "11px", color: "var(--amber2)" }} /> {mode}
//         </span>
//       </div>
//       <Link href={href} style={{
//         display: "block", width: "100%", textAlign: "center", padding: "10px",
//         borderRadius: "10px", fontSize: "12px", fontWeight: 700, fontFamily: "'Syne',sans-serif",
//         border: "1.5px solid rgba(0,180,216,.3)", color: "var(--cyan2)",
//         transition: "all .3s",
//       }}
//         onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--cyan1)"; el.style.color = "white"; el.style.borderColor = "var(--cyan1)"; }}
//         onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = ""; el.style.color = "var(--cyan2)"; el.style.borderColor = "rgba(0,180,216,.3)"; }}>
//         {isAI ? "View Details →" : "Enquire →"}
//       </Link>
//     </div>
//   );
// }

// export default function CoursesPage() {
//   return (
//     <>
//       <Navbar />
//       <main>
//         {/* HERO */}
//         <section style={{
//           minHeight: "38vh", display: "flex", alignItems: "center", justifyContent: "center",
//           padding: "110px 40px 60px", textAlign: "center",
//           position: "relative", overflow: "hidden",
//           background: "linear-gradient(160deg,var(--bg2),var(--bg3))",
//         }}>
//           <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(0,180,216,.12) 0%,transparent 65%)" }} />
//           <div style={{ position: "relative", zIndex: 1 }}>
//             <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 16px", borderRadius: "4px", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px", background: "rgba(245,158,11,.1)", border: "1px solid rgba(245,158,11,.3)", color: "var(--amber2)" }}>
//               AV Academy
//             </span>
//             <h1 className="font-syne" style={{ fontWeight: 800, fontSize: "clamp(2rem,5vw,3.5rem)", lineHeight: 1.1, letterSpacing: "-2px", marginBottom: "12px" }}>
//               All <span className="grad-amber">Courses</span>
//             </h1>
//             <p style={{ fontSize: "15px", color: "var(--cyan3)", fontWeight: 500 }}>
//               Lucknow&apos;s Leading Creative & Technology Training Hub
//             </p>
//           </div>
//         </section>

//         {/* COURSES SECTION */}
//         <section style={{ padding: "80px 40px", background: "var(--bg2)" }}>
//           <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

//             {/* ── MEDIA COURSES ── */}
//             <div style={{ marginBottom: "60px" }}>
//               <div className="sec-label">Media Industry</div>
//               <h2 className="font-syne" style={{ fontWeight: 800, fontSize: "clamp(1.8rem,3vw,2.4rem)", letterSpacing: "-.5px", marginBottom: "32px" }}>
//                 Creative & <span className="grad-cyan">Media Courses</span>
//               </h2>
//               <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
//                 {C.mediaCourses.map((c) => (
//                   <CourseCard key={c.name} badge={c.name.split(" ")[0].toUpperCase()} title={c.name} duration={c.duration} mode={c.mode} />
//                 ))}
//               </div>
//             </div>

//             {/* ── AI & TECH COURSES ── */}
//             <div>
//               <div className="sec-label">AI & Technology</div>
//               <h2 className="font-syne" style={{ fontWeight: 800, fontSize: "clamp(1.8rem,3vw,2.4rem)", letterSpacing: "-.5px", marginBottom: "32px" }}>
//                 AI & <span className="grad-amber">Technology Courses</span>
//               </h2>
//               <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
//                 {C.techCourses.map((c) => (
//                   <CourseCard
//                     key={c.name}
//                     badge={c.hot ? "🔥 HOT" : c.name.split(" ")[0]}
//                     title={c.name}
//                     duration={c.duration}
//                     mode={c.mode}
//                     isAI={!!c.hot}
//                     href={c.hot ? "/ai-masterclass" : "/contact"}
//                   />
//                 ))}
//               </div>
//             </div>

//           </div>
//         </section>

//         <CTASection
//           title="Not Sure Which"
//           highlight="Course Is Right?"
//           desc="Free consultation and personalized course recommendations from our counselors."
//         />
//       </main>
//       <Footer />
//       <WAFloat />
//     </>
//   );
// }

// app/courses/page.tsx
// Course LIST page — shows all courses, links to detail pages

// "use client";
// import Link from "next/link";
// import LucideIcon from "@/components/LucideIcon";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WAFloat from "@/components/WAFloat";
// import { CTASection } from "@/components/PageSections";
// import { Reveal } from "@/components/ScrollReveal";
// import { COURSES } from "@/lib/coursesData";

// const mediaCourses = COURSES.filter((c) => c.category === "media");
// const techCourses = COURSES.filter((c) => c.category === "tech");

// function CourseCard({ course }: { course: typeof COURSES[0] }) {
//   return (
//     <Link href={`/courses/${course.slug}`} className="block h-full">
//       <div
//         className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border transition-all hover:-translate-y-1.5 hover:shadow-2xl group overflow-hidden flex flex-col"
//         style={{ borderColor: `${course.accentHex}25` }}
//       >
//         {/* Top accent line */}
//         <div
//           className="absolute top-0 left-0 right-0 h-[3px] opacity-60"
//           style={{ background: `linear-gradient(90deg, ${course.accentHex}, #fbbf24)` }}
//         />

//         {/* Hover glow */}
//         <div
//           className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none"
//           style={{ background: `${course.accentHex}25` }}
//         />

//         {/* Badge */}
//         <span
//           className="self-start inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-[1.5px] uppercase mb-4 border relative z-10"
//           style={{
//             background: `${course.accentHex}15`,
//             borderColor: `${course.accentHex}40`,
//             color: course.accentHex,
//           }}
//         >
//           {course.badge}
//         </span>

//         {/* Icon */}
//         <div
//           className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative z-10"
//           style={{
//             background: `${course.accentHex}15`,
//             border: `1px solid ${course.accentHex}40`,
//           }}
//         >
//           <LucideIcon name={course.icon} size={22} color={course.accentHex} strokeWidth={2} />
//         </div>

//         {/* Title */}
//         <h4 className="font-syne font-bold text-base text-white mb-2 leading-tight relative z-10">
//           {course.name}
//         </h4>

//         {/* Tagline */}
//         <p className="text-[12.5px] text-gray-400 mb-4 leading-relaxed flex-1 relative z-10">
//           {course.tagline}
//         </p>

//         {/* Meta info */}
//         <div className="flex flex-col gap-1.5 mb-4 relative z-10">
//           <div className="flex items-center gap-2 text-[12px] text-gray-300">
//             <LucideIcon name="Clock" size={12} color="#fbbf24" strokeWidth={2.5} />
//             {course.duration}
//           </div>
//           <div className="flex items-center gap-2 text-[12px] text-gray-300">
//             <LucideIcon name="Laptop" size={12} color="#fbbf24" strokeWidth={2.5} />
//             {course.mode}
//           </div>
//         </div>

//         {/* CTA */}
//         <div
//           className="text-center py-2.5 rounded-xl font-bold text-[12px] font-syne tracking-wide border transition-all relative z-10 group-hover:scale-[1.02]"
//           style={{
//             borderColor: `${course.accentHex}50`,
//             color: course.accentHex,
//             background: `${course.accentHex}08`,
//           }}
//         >
//           View Details →
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default function CoursesPage() {
//   return (
//     <>
//       <Navbar />
//       <main className="bg-[#030f1a]">
//         {/* HERO */}
//         <section className="relative pt-36 pb-16 px-10 text-center overflow-hidden border-b border-cyan-500/15 bg-gradient-to-br from-[#061826] via-[#0a2436] to-[#061826]">
//           <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/20 blur-3xl pointer-events-none rounded-full" />
//           <div className="absolute top-[30%] left-[8%] w-52 h-52 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
//           <div className="absolute bottom-[10%] right-[10%] w-60 h-60 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

//           <div
//             className="absolute inset-0 opacity-50 pointer-events-none"
//             style={{
//               backgroundImage: "linear-gradient(rgba(0,180,216,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,.04) 1px, transparent 1px)",
//               backgroundSize: "60px 60px",
//             }}
//           />

//           <div className="relative z-10 max-w-[1000px] mx-auto">
//             <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[2px] uppercase mb-5 bg-amber-500/10 border border-amber-500/40 text-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
//               <LucideIcon name="GraduationCap" size={12} color="#fbbf24" strokeWidth={2} />
//               AV Academy
//             </span>

//             <h1 className="font-syne font-extrabold text-[clamp(1.6rem,3.5vw,2.8rem)] leading-[1.1] tracking-tight mb-4 text-white">
//               All{" "}
//               <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
//                 Courses
//               </span>
//             </h1>

//             <p className="text-sm md:text-base text-gray-400 max-w-[640px] mx-auto mb-6 leading-relaxed">
//               Lucknow&apos;s leading creative &amp; technology training hub — 12 industry-focused programs to launch your career
//             </p>

//             {/* <div className="inline-flex items-center gap-2 text-[12px] text-gray-500 px-4 py-2 rounded-full bg-[#082c44]/60 border border-cyan-500/15">
//               <Link href="/" className="text-cyan-400 no-underline font-semibold hover:text-cyan-300">
//                 Home
//               </Link>
//               <LucideIcon name="ChevronRight" size={12} color="#6b7280" />
//               <span className="text-gray-300">Courses</span>
//             </div> */}
//           </div>
//         </section>

//         {/* MEDIA COURSES */}
//         <section className="px-10 py-20 bg-[#061826]">
//           <div className="max-w-[1280px] mx-auto">
//             <Reveal>
//               <div className="mb-10">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">
//                   // Media Industry
//                 </div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.6vw,2.2rem)] leading-tight tracking-tight text-white mb-3">
//                   Creative &amp;{" "}
//                   <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                     Media Courses
//                   </span>
//                 </h2>
//                 <p className="text-sm text-gray-400 max-w-[640px] leading-relaxed">
//                   Design, animation, video, and creative arts — programs that turn passion into profession
//                 </p>
//               </div>
//             </Reveal>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//               {mediaCourses.map((c, i) => (
//                 <Reveal key={c.slug} delay={i * 60}>
//                   <CourseCard course={c} />
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* TECH COURSES */}
//         <section className="px-10 py-20 bg-[#030f1a]">
//           <div className="max-w-[1280px] mx-auto">
//             <Reveal>
//               <div className="mb-10">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">
//                   // AI &amp; Technology
//                 </div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.6vw,2.2rem)] leading-tight tracking-tight text-white mb-3">
//                   AI &amp;{" "}
//                   <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
//                     Technology Courses
//                   </span>
//                 </h2>
//                 <p className="text-sm text-gray-400 max-w-[640px] leading-relaxed">
//                   Programming, AI, and data science — future-proof your career with cutting-edge skills
//                 </p>
//               </div>
//             </Reveal>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//               {/* AI Masterclass — special card linking to existing /ai-masterclass */}
//               <Reveal delay={0}>
//                 <Link href="/ai-masterclass" className="block h-full">
//                   <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-[#082c44]/95 border-2 border-cyan-500/50 hover:border-cyan-500/80 transition-all hover:-translate-y-1.5 hover:shadow-2xl shadow-cyan-500/30 group overflow-hidden flex flex-col">
//                     <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 to-amber-500 opacity-90" />
//                     <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none bg-cyan-500/30" />

//                     <span className="self-start inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold tracking-[1.5px] uppercase mb-4 bg-gradient-to-r from-amber-500 to-amber-400 text-[#1a1a1a] border border-amber-300 relative z-10">
//                       <LucideIcon name="Flame" size={10} color="#1a1a1a" strokeWidth={3} />
//                       HOT
//                     </span>

//                     <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative z-10 bg-gradient-to-br from-cyan-400 to-cyan-500 shadow-lg shadow-cyan-500/40">
//                       <LucideIcon name="Brain" size={22} color="#031a2b" strokeWidth={2} />
//                     </div>

//                     <h4 className="font-syne font-bold text-base text-white mb-2 leading-tight relative z-10">
//                       AI Masterclass
//                     </h4>
//                     <p className="text-[12.5px] text-gray-300 mb-4 leading-relaxed flex-1 relative z-10">
//                       ChatGPT, Midjourney, RunwayML, Agentic AI &amp; Prompt Engineering
//                     </p>

//                     <div className="flex flex-col gap-1.5 mb-4 relative z-10">
//                       <div className="flex items-center gap-2 text-[12px] text-gray-200">
//                         <LucideIcon name="Clock" size={12} color="#fbbf24" strokeWidth={2.5} />
//                         6–8 Weeks
//                       </div>
//                       <div className="flex items-center gap-2 text-[12px] text-gray-200">
//                         <LucideIcon name="Laptop" size={12} color="#fbbf24" strokeWidth={2.5} />
//                         Online &amp; Offline
//                       </div>
//                     </div>

//                     <div className="text-center py-2.5 rounded-xl font-bold text-[12px] font-syne tracking-wide bg-gradient-to-r from-cyan-500 to-cyan-400 text-[#031a2b] relative z-10 group-hover:scale-[1.02] transition-transform">
//                       View Details →
//                     </div>
//                   </div>
//                 </Link>
//               </Reveal>

//               {techCourses.map((c, i) => (
//                 <Reveal key={c.slug} delay={(i + 1) * 60}>
//                   <CourseCard course={c} />
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         <CTASection
//           title="Not Sure Which"
//           highlight="Course Is Right?"
//           desc="Free consultation and personalized course recommendations from our expert counselors."
//         />
//       </main>
//       <Footer />
//       <WAFloat />
//     </>
//   );
// }

// app/courses/page.tsx
// ✅ Server Component — SEO metadata + JSON-LD yahan, UI CoursesClient mein

import type { Metadata } from "next";
import CoursesClient from "./CoursesClient";

const SITE_URL = "https://avacademy.co.in";

// ── SEO Metadata ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "All Courses | Graphic Design, Video Editing, AI, 3D Animation | AV Academy Lucknow",
  description:
    "Explore 12+ industry-focused courses at AV Academy Lucknow — Graphic Design, Video Editing, 3D Animation, VFX, AI Masterclass, Digital Marketing, Python & Data Science. Offline + Online. 100% placement support.",
  keywords: [
    "courses at AV Academy Lucknow",
    "graphic design course Lucknow",
    "video editing course Lucknow",
    "3D animation course Lucknow",
    "VFX course Lucknow",
    "AI course Lucknow",
    "digital marketing course Lucknow",
    "Python data science course Lucknow",
    "motion graphics course Lucknow",
    "creative courses Lucknow",
    "best design institute Lucknow",
    "online offline courses Lucknow",
  ],
  alternates: { canonical: `${SITE_URL}/courses` },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: "All Courses | AV Academy Lucknow",
    description:
      "12+ industry-focused courses — Design, Video, AI, Animation, Marketing & More. Offline + Online. 95% placement rate.",
    url: `${SITE_URL}/courses`,
    siteName: "AV Academy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-courses.jpg`,
        width: 1200,
        height: 630,
        alt: "AV Academy Courses — Lucknow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Courses | AV Academy Lucknow",
    description: "12+ industry-focused courses in Design, AI, Video & Tech. Join Lucknow's top creative institute.",
    images: [`${SITE_URL}/og-courses.jpg`],
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────
const courseCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "All Courses — AV Academy Lucknow",
  description:
    "12+ industry-focused creative and technology courses at AV Academy Lucknow",
  url: `${SITE_URL}/courses`,
  numberOfItems: 12,
  itemListElement: [
    // Media Courses
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "Graphic Design",
        description: "Professional graphic design course covering Photoshop, Illustrator, CorelDRAW and brand identity.",
        provider: { "@type": "Organization", name: "AV Academy", url: SITE_URL },
        url: `${SITE_URL}/courses/graphic-design`,
        inLanguage: ["en", "hi"],
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Course",
        name: "Video Editing",
        description: "Professional video editing course covering Premiere Pro, DaVinci Resolve and color grading.",
        provider: { "@type": "Organization", name: "AV Academy", url: SITE_URL },
        url: `${SITE_URL}/courses/video-editing`,
        inLanguage: ["en", "hi"],
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Course",
        name: "Motion Graphics",
        description: "Motion graphics and animation using After Effects and Cinema 4D.",
        provider: { "@type": "Organization", name: "AV Academy", url: SITE_URL },
        url: `${SITE_URL}/courses/motion-graphics`,
        inLanguage: ["en", "hi"],
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Course",
        name: "3D Animation",
        description: "3D modeling, rigging, animation and rendering using Blender and Maya.",
        provider: { "@type": "Organization", name: "AV Academy", url: SITE_URL },
        url: `${SITE_URL}/courses/3d-animation`,
        inLanguage: ["en", "hi"],
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Course",
        name: "VFX Masterclass",
        description: "Visual effects, compositing and special effects for film and digital media.",
        provider: { "@type": "Organization", name: "AV Academy", url: SITE_URL },
        url: `${SITE_URL}/courses/vfx`,
        inLanguage: ["en", "hi"],
      },
    },
    // Tech Courses
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Course",
        name: "Gen-AI Masterclass",
        description: "ChatGPT, Midjourney, RunwayML, Agentic AI, RAG and Prompt Engineering.",
        provider: { "@type": "Organization", name: "AV Academy", url: SITE_URL },
        url: `${SITE_URL}/ai-masterclass`,
        inLanguage: ["en", "hi"],
      },
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "Course",
        name: "Digital Marketing",
        description: "SEO, Google Ads, Social Media Marketing, Meta Ads and analytics.",
        provider: { "@type": "Organization", name: "AV Academy", url: SITE_URL },
        url: `${SITE_URL}/courses/digital-marketing`,
        inLanguage: ["en", "hi"],
      },
    },
    {
      "@type": "ListItem",
      position: 8,
      item: {
        "@type": "Course",
        name: "Python & Data Science",
        description: "Python programming, data analysis, machine learning and data visualization.",
        provider: { "@type": "Organization", name: "AV Academy", url: SITE_URL },
        url: `${SITE_URL}/courses/python-data-science`,
        inLanguage: ["en", "hi"],
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Courses", item: `${SITE_URL}/courses` },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${SITE_URL}/#organization`,
  name: "AV Academy",
  url: SITE_URL,
  telephone: "+91-7500206719",
  email: "avacademy1706@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3rd Floor, Sai Tower, Raibareli Rd, near Dental College, Vrindavan Colony",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "226014",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1500",
    bestRating: "5",
  },
};

// ── Page (Server Component) ───────────────────────────────────────────────
export default function CoursesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseCatalogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <CoursesClient />
    </>
  );
}

