// import { notFound } from "next/navigation";
// import { industries, industryList } from "@/lib/industryData";
// import LucideIcon from "@/components/LucideIcon";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WAFloat from "@/components/WAFloat";
// import { CTASection } from "@/components/PageSections";
// import { Reveal } from "@/components/ScrollReveal";
// import Link from "next/link";

// export async function generateStaticParams() {
//   return industryList.map((ind) => ({ industry: ind.slug }));
// }

// export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }) {
//   const { industry } = await params;
//   const data = industries[industry];
//   if (!data) return {};
//   return { title: `${data.tag} | AV EditLab`, description: data.intro };
// }

// export default async function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
//   const { industry } = await params;
//   const data = industries[industry];
//   if (!data) notFound();

//   return (
//     <>
//       <Navbar />
//       <main>
//         {/* Hero */}
//         <section className="min-h-[52vh] flex items-end pb-16 pt-[110px] px-6 text-center relative overflow-hidden" style={{ background: "linear-gradient(160deg,var(--bg2),var(--bg3))" }}>
//           <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center,rgba(0,180,216,.12) 0%,transparent 65%)" }} />
//           <div className="max-w-[1300px] mx-auto w-full relative z-10">
//             <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm text-[11px] font-bold tracking-[2px] uppercase mb-5" style={{ background: "rgba(0,180,216,.1)", border: "1px solid rgba(0,180,216,.3)", color: "var(--cyan2)" }}>
//               AV EditLab — {data.tag}
//             </span>
//             <h1 className="font-black leading-tight tracking-tight mb-3 text-[clamp(1.8rem,4vw,3.2rem)]" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-1px" }}>
//               <span style={{ background: "linear-gradient(135deg,var(--cyan2),var(--blue2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                 {data.h1}
//               </span>
//             </h1>
//             <p className="font-semibold mb-3" style={{ color: "var(--cyan3)", fontSize: "14px", letterSpacing: ".5px" }}>{data.subtitle}</p>
//             <h2 className="font-bold text-[1.2rem] mb-4 max-w-[700px] mx-auto" style={{ fontFamily: "var(--font-syne)", color: "var(--gray2)" }}>{data.h2}</h2>
//             <p className="text-[15px] leading-[1.85] max-w-[780px] mx-auto mb-3" style={{ color: "var(--gray2)" }}>{data.intro}</p>
//             <p className="italic text-[14px]" style={{ color: "var(--amber2)" }}>{data.quote}</p>
//           </div>
//         </section>

//         {/* Solutions */}
//         <section className="px-6 py-20" style={{ background: "var(--bg2)" }}>
//           <div className="max-w-[1300px] mx-auto">
//             <div className="inline-flex items-center px-6 py-2.5 rounded-md font-bold text-[12px] tracking-[2.5px] uppercase text-white mb-11" style={{ fontFamily: "var(--font-syne)", background: "linear-gradient(135deg,var(--cyan1),var(--cyan2))" }}>
//               OUR CREATIVE SOLUTIONS
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {data.solutions.map((sol, i) => (
//                 <Reveal key={sol.num} delay={i * 100} className="group relative rounded-[22px] p-9 overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,180,216,.2)]" style={{ background: "rgba(8,28,44,.8)", border: "1px solid var(--border)" }}>
//                   <div className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{ background: "linear-gradient(90deg,var(--cyan1),var(--cyan2))" }} />
//                   <div className="font-black text-[4rem] leading-none mb-0.5" style={{ fontFamily: "var(--font-syne)", color: "rgba(0,180,216,.06)" }}>{sol.num}</div>
//                   <div style={{ marginBottom: "10px", color: "var(--cyan2)" }}><LucideIcon name={sol.icon} size={36} color="var(--cyan2)" strokeWidth={1.5} /></div>
//                   <h3 className="font-bold text-[1.1rem] mb-4" style={{ fontFamily: "var(--font-syne)", color: "var(--amber2)" }}>{sol.title}</h3>
//                   <ul className="space-y-0 mb-4 list-none">
//                     {sol.items.map((item) => (
//                       <li key={item} className="text-[13.5px] py-1.5 pl-4 relative border-b" style={{ color: "var(--gray2)", borderColor: "rgba(255,255,255,.04)" }}>
//                         <span className="absolute left-0 top-1.5" style={{ color: "var(--cyan2)" }}>▸</span> {item}
//                       </li>
//                     ))}
//                   </ul>
//                   <p className="text-[13px] italic font-medium" style={{ color: "var(--cyan3)" }}>→ {sol.tagline}</p>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Why */}
//         <section className="px-6 py-20" style={{ background: "var(--bg3)" }}>
//           <div className="max-w-[1300px] mx-auto">
//             <Reveal className="mb-7">
//               <div className="inline-flex items-center gap-1.5 font-bold text-[11px] tracking-[3px] uppercase mb-3" style={{ fontFamily: "var(--font-syne)", color: "var(--cyan2)" }}>
//                 <span style={{ color: "var(--blue2)" }}>//</span> Why Choose Us
//               </div>
//               <h2 className="font-black text-[clamp(1.7rem,3vw,2.4rem)] tracking-tight" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-.5px" }}>
//                 Why{" "}
//                 <span style={{ background: "linear-gradient(135deg,var(--cyan2),var(--blue2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                   {data.whyTitle}
//                 </span>
//               </h2>
//             </Reveal>
//             <div className="rounded-[24px] p-14 grid grid-cols-1 md:grid-cols-2 gap-6" style={{ background: "rgba(8,28,44,.8)", border: "1px solid var(--border)" }}>
//               {data.whyItems.map((w) => (
//                 <div key={w.title} className="flex gap-4 items-start">
//                   <div className="w-11 h-11 rounded-[10px] flex items-center justify-center text-[18px] flex-shrink-0 mt-0.5" style={{ background: "rgba(0,180,216,.1)", border: "1px solid rgba(0,180,216,.22)", color: "var(--cyan2)" }}><LucideIcon name={w.iconName || w.icon || "Star"} size={22} color="var(--cyan2)" strokeWidth={1.5} /></div>
//                   <div>
//                     <h4 className="font-bold text-[15px] mb-1" style={{ fontFamily: "var(--font-syne)", color: "var(--white)" }}>{w.title}</h4>
//                     <p className="text-[13px] leading-relaxed" style={{ color: "var(--gray)" }}>{w.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <CTASection title={data.ctaTitle} highlight="" desc={data.ctaDesc} />
//         <div className="text-center py-3" style={{ background: "var(--bg)" }}>
//           <span className="text-xs" style={{ color: "var(--gray)" }}>
//             © 2025 AV EditLab.{" "}
//             <Link href="/" style={{ color: "var(--cyan2)" }}>Home</Link>{" "}|{" "}
//             <Link href="/services" style={{ color: "var(--cyan2)" }}>Services</Link>
//           </span>
//         </div>
//       </main>
//       <Footer />
//       <WAFloat />
//     </>
//   );
// }


// app/services/[industry]/page.tsx
// Enhanced industry detail page with comprehensive sections

// import type { Metadata } from "next";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import Script from "next/script";
// import { industries, industryList } from "@/lib/industryData";
// import LucideIcon from "@/components/LucideIcon";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WAFloat from "@/components/WAFloat";
// import { CTASection } from "@/components/PageSections";
// import { Reveal } from "@/components/ScrollReveal";

// const SITE_URL = "https://avacademy.co.in";

// export async function generateStaticParams() {
//   return industryList.map((ind) => ({ industry: ind.slug }));
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ industry: string }>;
// }): Promise<Metadata> {
//   const { industry } = await params;
//   const data = industries[industry];
//   if (!data) return { title: "Industry Not Found" };

//   const canonicalUrl = `${SITE_URL}/services/${industry}`;

//   return {
//     title: data.seoTitle,
//     description: data.seoDescription,
//     keywords: data.seoKeywords,
//     authors: [{ name: "AV EditLab", url: SITE_URL }],
//     creator: "AV EditLab",
//     publisher: "AV EditLab",
//     alternates: { canonical: canonicalUrl },
//     openGraph: {
//       title: data.seoTitle,
//       description: data.seoDescription,
//       url: canonicalUrl,
//       siteName: "AV EditLab",
//       locale: "en_IN",
//       type: "website",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: data.seoTitle,
//       description: data.seoDescription,
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         "max-image-preview": "large",
//       },
//     },
//   };
// }

// export default async function IndustryPage({
//   params,
// }: {
//   params: Promise<{ industry: string }>;
// }) {
//   const { industry } = await params;
//   const data = industries[industry];

//   if (!data) notFound();

//   const canonicalUrl = `${SITE_URL}/services/${industry}`;

//   // JSON-LD Schemas
//   const serviceSchema = {
//     "@context": "https://schema.org",
//     "@type": "Service",
//     name: `${data.tag} Services`,
//     description: data.intro,
//     provider: {
//       "@type": "Organization",
//       name: "AV EditLab",
//       url: SITE_URL,
//       telephone: "+91-9675903348",
//       email: "avacademy1706@gmail.com",
//       address: {
//         "@type": "PostalAddress",
//         addressLocality: "Lucknow",
//         addressRegion: "Uttar Pradesh",
//         addressCountry: "IN",
//       },
//     },
//     url: canonicalUrl,
//     areaServed: { "@type": "Country", name: "India" },
//   };

//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: data.faqs.map((faq) => ({
//       "@type": "Question",
//       name: faq.question,
//       acceptedAnswer: { "@type": "Answer", text: faq.answer },
//     })),
//   };

//   const breadcrumbSchema = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     itemListElement: [
//       { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
//       { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
//       { "@type": "ListItem", position: 3, name: data.tag, item: canonicalUrl },
//     ],
//   };

//   return (
//     <>
//       <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
//       <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
//       <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

//       <Navbar />
//       <main className="bg-[#030f1a]">
//         {/* ============ HERO ============ */}
//         <section className="relative pt-36 pb-16 px-10 text-center overflow-hidden border-b border-cyan-500/15 bg-gradient-to-br from-[#061826] via-[#0a2436] to-[#061826]">
//           <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/20 blur-3xl pointer-events-none rounded-full" />
//           <div className="absolute top-[30%] left-[8%] w-52 h-52 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
//           <div
//             className="absolute bottom-[10%] right-[10%] w-60 h-60 rounded-full pointer-events-none blur-3xl"
//             style={{ background: `${data.accentHex}15` }}
//           />

//           <div
//             className="absolute inset-0 opacity-50 pointer-events-none"
//             style={{
//               backgroundImage: "linear-gradient(rgba(0,180,216,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,.04) 1px, transparent 1px)",
//               backgroundSize: "60px 60px",
//             }}
//           />

//           <div className="relative z-10 max-w-[1000px] mx-auto">
//             {/* Breadcrumb */}
//             <nav aria-label="Breadcrumb" className="mb-5">
//               <ol className="inline-flex items-center gap-2 text-[12px] text-gray-500 px-4 py-2 rounded-full bg-[#082c44]/60 border border-cyan-500/15">
//                 <li><Link href="/" className="text-cyan-400 font-semibold hover:text-cyan-300">Home</Link></li>
//                 <li><LucideIcon name="ChevronRight" size={12} color="#6b7280" /></li>
//                 <li><Link href="/services" className="text-cyan-400 font-semibold hover:text-cyan-300">Services</Link></li>
//                 <li><LucideIcon name="ChevronRight" size={12} color="#6b7280" /></li>
//                 <li className="text-gray-300" aria-current="page">{data.tag}</li>
//               </ol>
//             </nav>

//             {/* Badge */}
//             <span
//               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[2px] uppercase mb-5 border"
//               style={{
//                 background: `${data.accentHex}15`,
//                 borderColor: `${data.accentHex}50`,
//                 color: data.accentHex,
//                 boxShadow: `0 0 30px ${data.accentHex}30`,
//               }}
//             >
//               <LucideIcon name="Sparkles" size={12} color={data.accentHex} strokeWidth={2} />
//               AV EditLab · {data.tag}
//             </span>

//             {/* H1 */}
//             <h1 className="font-syne font-extrabold text-[clamp(1.6rem,3.5vw,2.8rem)] leading-[1.1] tracking-tight mb-4 text-white">
//               <span
//                 className="bg-clip-text text-transparent"
//                 style={{ backgroundImage: `linear-gradient(135deg, ${data.accentHex}, #fbbf24)` }}
//               >
//                 {data.h1}
//               </span>
//             </h1>

//             {/* Subtitle */}
//             <p className="text-cyan-300 text-sm font-semibold tracking-wider mb-3">{data.subtitle}</p>

//             {/* H2 */}
//             <h2 className="font-syne font-bold text-lg md:text-xl text-gray-300 mb-4 max-w-[700px] mx-auto leading-snug">
//               {data.h2}
//             </h2>

//             {/* Intro */}
//             <p className="text-sm md:text-base text-gray-400 max-w-[780px] mx-auto mb-5 leading-relaxed">
//               {data.intro}
//             </p>

//             {/* Quote */}
//             <p className="italic text-amber-400 text-sm mb-6">{data.quote}</p>

//             {/* CTAs */}
//             <div className="flex flex-wrap justify-center gap-3">
//               <a
//                 href={`https://wa.me/919675903348?text=${encodeURIComponent(`Hi! I'm interested in your ${data.tag} services.`)}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[13px] font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all"
//               >
//                 <LucideIcon name="MessageCircle" size={14} color="#031a2b" strokeWidth={2.5} />
//                 Start Your Project
//               </a>
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[13px] font-syne tracking-wide bg-transparent border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all"
//               >
//                 <LucideIcon name="Phone" size={14} color="#22d3ee" strokeWidth={2.5} />
//                 Get Free Quote
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* ============ STATS BAR ============ */}
//         <section className="px-10 py-10 bg-[#061826] border-b border-cyan-500/10">
//           <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
//             {data.stats.map((s) => (
//               <div
//                 key={s.label}
//                 className="flex items-center gap-4 px-5 py-5 rounded-2xl bg-gradient-to-br from-[#082c44]/80 to-[#030f1a]/90 border border-cyan-500/15 hover:border-cyan-500/40 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10"
//               >
//                 <div
//                   className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
//                   style={{
//                     background: `${data.accentHex}15`,
//                     border: `1px solid ${data.accentHex}40`,
//                   }}
//                 >
//                   <LucideIcon name={s.icon} size={22} color={data.accentHex} strokeWidth={2} />
//                 </div>
//                 <div>
//                   <div className="font-syne font-extrabold text-2xl leading-none bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
//                     {s.num}
//                   </div>
//                   <div className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold mt-1">
//                     {s.label}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ============ SOLUTIONS ============ */}
//         <section className="px-10 py-20 bg-[#030f1a]">
//           <div className="max-w-[1280px] mx-auto">
//             <Reveal>
//               <div className="text-center mb-14">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">
//                                     // Our Creative Solutions
//                 </div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
//                   Services That{" "}
//                   <span
//                     className="bg-clip-text text-transparent"
//                     style={{ backgroundImage: `linear-gradient(135deg, ${data.accentHex}, #fbbf24)` }}
//                   >
//                     Deliver Results
//                   </span>
//                 </h2>
//                 <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
//                   Three core service areas designed to transform your {data.tag.toLowerCase()} brand
//                 </p>
//               </div>
//             </Reveal>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {data.solutions.map((sol, i) => (
//                 <Reveal key={sol.num} delay={i * 80}>
//                   <div
//                     className="h-full relative p-7 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border transition-all hover:-translate-y-1.5 hover:shadow-2xl group overflow-hidden"
//                     style={{ borderColor: `${data.accentHex}25` }}
//                   >
//                     {/* Top accent */}
//                     <div
//                       className="absolute top-0 left-0 right-0 h-[3px] opacity-60"
//                       style={{ background: `linear-gradient(90deg, ${data.accentHex}, #fbbf24)` }}
//                     />

//                     {/* Hover glow */}
//                     <div
//                       className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none"
//                       style={{ background: `${data.accentHex}25` }}
//                     />

//                     {/* Big Number */}
//                     <div
//                       className="font-syne font-extrabold text-6xl leading-none mb-3 opacity-10"
//                       style={{ color: data.accentHex }}
//                     >
//                       {sol.num}
//                     </div>

//                     {/* Icon */}
//                     <div
//                       className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative z-10"
//                       style={{
//                         background: `${data.accentHex}15`,
//                         border: `1px solid ${data.accentHex}40`,
//                         boxShadow: `0 8px 20px ${data.accentHex}20`,
//                       }}
//                     >
//                       <LucideIcon name={sol.icon} size={28} color={data.accentHex} strokeWidth={2} />
//                     </div>

//                     <h3 className="font-syne font-extrabold text-lg text-amber-400 mb-4 relative z-10">
//                       {sol.title}
//                     </h3>

//                     <ul className="space-y-2 mb-5 relative z-10">
//                       {sol.items.map((item) => (
//                         <li key={item} className="flex items-start gap-2 text-[13px] text-gray-300 leading-relaxed">
//                           <span className="flex-shrink-0 mt-0.5">
//                             <LucideIcon name="CheckCircle2" size={14} color={data.accentHex} strokeWidth={2.5} />
//                           </span>
//                           <span>{item}</span>
//                         </li>
//                       ))}
//                     </ul>

//                     <p
//                       className="text-[13px] italic font-medium pt-4 border-t relative z-10"
//                       style={{ color: data.accentHex, borderColor: `${data.accentHex}20` }}
//                     >
//                       → {sol.tagline}
//                     </p>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ PROCESS ============ */}
//         <section className="px-10 py-20 bg-[#061826] relative overflow-hidden">
//           <div
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-3xl pointer-events-none"
//             style={{ background: `${data.accentHex}05` }}
//           />

//           <div className="max-w-[1240px] mx-auto relative z-10">
//             <Reveal>
//               <div className="text-center mb-14">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Our Process</div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
//                   How We{" "}
//                   <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
//                     Work Together
//                   </span>
//                 </h2>
//                 <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
//                   A proven 5-step process that takes your project from idea to impact
//                 </p>
//               </div>
//             </Reveal>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
//               {data.processSteps.map((step, i) => (
//                 <Reveal key={step.step} delay={i * 80}>
//                   <div
//                     className="h-full p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border transition-all hover:-translate-y-1.5 hover:shadow-xl relative group"
//                     style={{ borderColor: `${data.accentHex}25` }}
//                   >
//                     <div
//                       className="absolute -top-3 -left-3 w-12 h-12 rounded-2xl flex items-center justify-center font-syne font-extrabold text-base"
//                       style={{
//                         background: `linear-gradient(135deg, ${data.accentHex}, ${data.accentHex}dd)`,
//                         color: "#031a2b",
//                         boxShadow: `0 8px 20px ${data.accentHex}40`,
//                       }}
//                     >
//                       {step.step}
//                     </div>

//                     <div
//                       className="w-12 h-12 rounded-xl flex items-center justify-center mt-6 mb-4"
//                       style={{
//                         background: `${data.accentHex}15`,
//                         border: `1px solid ${data.accentHex}40`,
//                       }}
//                     >
//                       <LucideIcon name={step.icon} size={22} color={data.accentHex} strokeWidth={2} />
//                     </div>

//                     <h3 className="font-syne font-bold text-base text-white mb-2 leading-tight">{step.title}</h3>
//                     <p className="text-[12.5px] text-gray-400 leading-relaxed">{step.desc}</p>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ DELIVERABLES ============ */}
//         <section className="px-10 py-20 bg-[#030f1a]">
//           <div className="max-w-[1240px] mx-auto">
//             <Reveal>
//               <div className="text-center mb-14">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// What You Get</div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
//                   Comprehensive{" "}
//                   <span
//                     className="bg-clip-text text-transparent"
//                     style={{ backgroundImage: `linear-gradient(135deg, ${data.accentHex}, #fbbf24)` }}
//                   >
//                     Deliverables
//                   </span>
//                 </h2>
//                 <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
//                   Everything your {data.tag.toLowerCase()} brand needs to succeed — delivered in industry-standard formats
//                 </p>
//               </div>
//             </Reveal>

//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               {data.deliverables.map((d, i) => (
//                 <Reveal key={d.title} delay={i * 60}>
//                   <div className="h-full flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/15 hover:border-cyan-500/40 hover:-translate-y-1 transition-all group">
//                     <div
//                       className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
//                       style={{
//                         background: `${data.accentHex}15`,
//                         border: `1px solid ${data.accentHex}40`,
//                       }}
//                     >
//                       <LucideIcon name={d.icon} size={26} color={data.accentHex} strokeWidth={2} />
//                     </div>
//                     <h4 className="font-syne font-bold text-[15px] text-white mb-2 leading-tight">{d.title}</h4>
//                     <div className="text-[11px] uppercase tracking-wider font-bold text-amber-400">
//                       {d.count}
//                     </div>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ WHY US ============ */}
//         <section className="px-10 py-20 bg-[#061826]">
//           <div className="max-w-[1280px] mx-auto">
//             <Reveal>
//               <div className="text-center mb-14">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Why Choose Us</div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
//                   Why{" "}
//                   <span
//                     className="bg-clip-text text-transparent"
//                     style={{ backgroundImage: `linear-gradient(135deg, ${data.accentHex}, #fbbf24)` }}
//                   >
//                     {data.whyTitle}
//                   </span>
//                 </h2>
//               </div>
//             </Reveal>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//               {data.whyItems.map((w, i) => (
//                 <Reveal key={w.title} delay={i * 60}>
//                   <div className="h-full flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/15 hover:border-cyan-500/40 hover:-translate-y-1 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group">
//                     <div
//                       className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
//                       style={{
//                         background: `${data.accentHex}15`,
//                         border: `1px solid ${data.accentHex}40`,
//                       }}
//                     >
//                       <LucideIcon name={w.iconName || w.icon || "Star"} size={22} color={data.accentHex} strokeWidth={2} />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <h4 className="font-syne font-bold text-base text-amber-400 mb-1.5 tracking-tight">{w.title}</h4>
//                       <p className="text-[13px] text-gray-400 leading-relaxed">{w.desc}</p>
//                     </div>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ TESTIMONIALS ============ */}
//         <section className="px-10 py-20 bg-[#030f1a]">
//           <div className="max-w-[1240px] mx-auto">
//             <Reveal>
//               <div className="text-center mb-14">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Client Stories</div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
//                   What Our Clients{" "}
//                   <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
//                     Say About Us
//                   </span>
//                 </h2>
//                 <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
//                   Real results from real brands in the {data.tag.toLowerCase()} space
//                 </p>
//               </div>
//             </Reveal>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {data.testimonials.map((t, i) => (
//                 <Reveal key={t.name} delay={i * 80}>
//                   <div
//                     className="h-full p-7 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border transition-all hover:-translate-y-1.5 hover:shadow-2xl relative"
//                     style={{ borderColor: `${data.accentHex}25` }}
//                   >
//                     {/* Quote icon */}
//                     <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center bg-amber-500/20 border border-amber-500/40">
//                       <LucideIcon name="Quote" size={18} color="#fbbf24" strokeWidth={2.5} />
//                     </div>

//                     <p className="text-[14px] text-gray-300 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>

//                     <div className="flex items-center gap-3 pt-5 border-t border-cyan-500/15">
//                       <div
//                         className="w-12 h-12 rounded-full flex items-center justify-center font-syne font-extrabold text-base flex-shrink-0"
//                         style={{
//                           background: `linear-gradient(135deg, ${data.accentHex}, ${data.accentHex}dd)`,
//                           color: "#031a2b",
//                         }}
//                       >
//                         {t.initials}
//                       </div>
//                       <div className="min-w-0 flex-1">
//                         <div className="font-syne font-bold text-sm text-white truncate">{t.name}</div>
//                         <div className="text-[11px] text-gray-400 truncate">
//                           {t.role}, {t.company}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ FAQ ============ */}
//         <section className="px-10 py-20 bg-[#061826]">
//           <div className="max-w-[900px] mx-auto">
//             <Reveal>
//               <div className="text-center mb-12">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Frequently Asked Questions</div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                   Got{" "}
//                   <span
//                     className="bg-clip-text text-transparent"
//                     style={{ backgroundImage: `linear-gradient(135deg, ${data.accentHex}, #fbbf24)` }}
//                   >
//                     Questions?
//                   </span>
//                 </h2>
//                 <p className="text-sm text-gray-400 leading-relaxed">
//                   Everything you need to know about our {data.tag.toLowerCase()} services
//                 </p>
//               </div>
//             </Reveal>

//             <div className="space-y-4">
//               {data.faqs.map((faq, i) => (
//                 <Reveal key={faq.question} delay={i * 80}>
//                   <details className="group rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 overflow-hidden transition-all hover:border-cyan-500/40">
//                     <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
//                       <h3 className="font-syne font-bold text-[15px] text-white flex-1">{faq.question}</h3>
//                       <div
//                         className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-open:rotate-45"
//                         style={{
//                           background: `${data.accentHex}15`,
//                           border: `1px solid ${data.accentHex}40`,
//                         }}
//                       >
//                         <LucideIcon name="Plus" size={18} color={data.accentHex} strokeWidth={2.5} />
//                       </div>
//                     </summary>
//                     <div className="px-5 pb-5 text-[14px] text-gray-300 leading-relaxed border-t border-cyan-500/15 pt-4">
//                       {faq.answer}
//                     </div>
//                   </details>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ OTHER INDUSTRIES ============ */}
//         <section className="px-10 py-20 bg-[#030f1a]">
//           <div className="max-w-[1240px] mx-auto">
//             <Reveal>
//               <div className="text-center mb-12">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Explore More</div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                   Other{" "}
//                   <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                     Industries We Serve
//                   </span>
//                 </h2>
//               </div>
//             </Reveal>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               {industryList
//                 .filter((ind) => ind.slug !== industry)
//                 .slice(0, 4)
//                 .map((ind, i) => (
//                   <Reveal key={ind.slug} delay={i * 60}>
//                     <Link href={`/services/${ind.slug}`} className="block h-full">
//                       <div className="h-full p-5 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 hover:border-cyan-500/50 hover:-translate-y-1 transition-all text-center group">
//                         <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/40 group-hover:scale-110 transition-transform">
//                           <LucideIcon name={ind.iconName} size={22} color="#22d3ee" strokeWidth={2} />
//                         </div>
//                         <h4 className="font-syne font-bold text-sm text-white mb-1 leading-tight">{ind.name}</h4>
//                         <p className="text-[11px] text-gray-400 line-clamp-2">{ind.desc}</p>
//                       </div>
//                     </Link>
//                   </Reveal>
//                 ))}
//             </div>
//           </div>
//         </section>

//         <CTASection
//           title={data.ctaTitle}
//           highlight=""
//           desc={data.ctaDesc}
//         />
//       </main>
//       <Footer />
//       <WAFloat />
//     </>
//   );
// }




// app/services/[industry]/page.tsx
// Industry detail page — consistent CYAN theme across all industries

// app/services/[industry]/page.tsx
// Industry detail page — CYAN + WHITE theme (no amber/orange)

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { industries, industryList } from "@/lib/industryData";
import LucideIcon from "@/components/LucideIcon";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WAFloat from "@/components/WAFloat";
import { CTASection } from "@/components/PageSections";
import { Reveal } from "@/components/ScrollReveal";

const SITE_URL = "https://avacademy.co.in";

export async function generateStaticParams() {
  return industryList.map((ind) => ({ industry: ind.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry } = await params;
  const data = industries[industry];
  if (!data) return { title: "Industry Not Found" };

  const canonicalUrl = `${SITE_URL}/services/${industry}`;

  return {
    title: data.seoTitle,
    description: data.seoDescription,
    keywords: data.seoKeywords,
    authors: [{ name: "AV EditLab", url: SITE_URL }],
    creator: "AV EditLab",
    publisher: "AV EditLab",
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: data.seoTitle,
      description: data.seoDescription,
      url: canonicalUrl,
      siteName: "AV EditLab",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.seoTitle,
      description: data.seoDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry } = await params;
  const data = industries[industry];

  if (!data) notFound();

  const canonicalUrl = `${SITE_URL}/services/${industry}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${data.tag} Services`,
    description: data.intro,
    provider: {
      "@type": "Organization",
      name: "AV EditLab",
      url: SITE_URL,
      telephone: "+91-9675903348",
      email: "avacademy1706@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },
    url: canonicalUrl,
    areaServed: { "@type": "Country", name: "India" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: data.tag, item: canonicalUrl },
    ],
  };

  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />
      <main className="bg-[#030f1a]">
        {/* ============ HERO ============ */}
        <section className="relative pt-36 pb-16 px-10 text-center overflow-hidden border-b border-cyan-500/15 bg-gradient-to-br from-[#061826] via-[#0a2436] to-[#061826]">
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/20 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute top-[30%] left-[8%] w-52 h-52 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-[10%] right-[10%] w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

          <div
            className="absolute inset-0 opacity-50 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(0,180,216,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,.04) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10 max-w-[1000px] mx-auto">
            {/* Breadcrumb */}
            {/* <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="inline-flex items-center gap-2 text-[12px] text-gray-500 px-4 py-2 rounded-full bg-[#082c44]/60 border border-cyan-500/15">
                <li><Link href="/" className="text-cyan-400 font-semibold hover:text-cyan-300">Home</Link></li>
                <li><LucideIcon name="ChevronRight" size={12} color="#6b7280" /></li>
                <li><Link href="/services" className="text-cyan-400 font-semibold hover:text-cyan-300">Services</Link></li>
                <li><LucideIcon name="ChevronRight" size={12} color="#6b7280" /></li>
                <li className="text-gray-300" aria-current="page">{data.tag}</li>
              </ol>
            </nav> */}

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[2px] uppercase mb-5 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 shadow-[0_0_30px_rgba(0,180,216,0.2)]">
              <LucideIcon name="Sparkles" size={12} color="#22d3ee" strokeWidth={2} />
              AV EditLab · {data.tag}
            </span>

            {/* H1 */}
            <h1 className="font-syne font-extrabold text-[clamp(1.6rem,3.5vw,2.8rem)] leading-[1.1] tracking-tight mb-4 text-white">
              <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
                {data.h1}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-cyan-300 text-sm font-semibold tracking-wider mb-3">{data.subtitle}</p>

            {/* H2 */}
            <h2 className="font-syne font-bold text-lg md:text-xl text-gray-300 mb-4 max-w-[700px] mx-auto leading-snug">
              {data.h2}
            </h2>

            {/* Intro */}
            <p className="text-sm md:text-base text-gray-400 max-w-[780px] mx-auto mb-5 leading-relaxed">
              {data.intro}
            </p>

            {/* Quote — White now */}
            <p className="italic text-white/80 text-sm mb-6">{data.quote}</p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`https://wa.me/919675903348?text=${encodeURIComponent(`Hi! I'm interested in your ${data.tag} services.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[13px] font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all"
              >
                <LucideIcon name="MessageCircle" size={14} color="#031a2b" strokeWidth={2.5} />
                Start Your Project
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[13px] font-syne tracking-wide bg-transparent border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all"
              >
                <LucideIcon name="Phone" size={14} color="#22d3ee" strokeWidth={2.5} />
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* ============ STATS BAR ============ */}
        <section className="px-10 py-10 bg-[#061826] border-b border-cyan-500/10">
          <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-4 px-5 py-5 rounded-2xl bg-gradient-to-br from-[#082c44]/80 to-[#030f1a]/90 border border-cyan-500/15 hover:border-cyan-500/40 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-cyan-500/15 border border-cyan-500/40">
                  <LucideIcon name={s.icon} size={22} color="#22d3ee" strokeWidth={2} />
                </div>
                <div>
                  {/* Number — White now */}
                  <div className="font-syne font-extrabold text-2xl leading-none text-white">
                    {s.num}
                  </div>
                  <div className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold mt-1">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ SOLUTIONS ============ */}
        <section className="px-10 py-20 bg-[#030f1a]">
          <div className="max-w-[1280px] mx-auto">
            <Reveal>
              <div className="text-center mb-14">
                <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">
                                    // Our Creative Solutions
                </div>
                <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
                  Services That{" "}
                  <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
                    Deliver Results
                  </span>
                </h2>
                <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
                  Three core service areas designed to transform your {data.tag.toLowerCase()} brand
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.solutions.map((sol, i) => (
                <Reveal key={sol.num} delay={i * 80}>
                  <div className="h-full relative p-7 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/25 hover:border-cyan-500/50 transition-all hover:-translate-y-1.5 hover:shadow-2xl group overflow-hidden">
                    {/* Top accent — pure cyan */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] opacity-60 bg-gradient-to-r from-cyan-400 to-cyan-600" />

                    {/* Hover glow */}
                    <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none bg-cyan-500/25" />

                    {/* Big Number */}
                    <div className="font-syne font-extrabold text-6xl leading-none mb-3 text-cyan-500/10">
                      {sol.num}
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative z-10 bg-cyan-500/15 border border-cyan-500/40 shadow-lg shadow-cyan-500/20">
                      <LucideIcon name={sol.icon} size={28} color="#22d3ee" strokeWidth={2} />
                    </div>

                    {/* Title — White now (was amber) */}
                    <h3 className="font-syne font-extrabold text-lg text-white mb-4 relative z-10">
                      {sol.title}
                    </h3>

                    <ul className="space-y-2 mb-5 relative z-10">
                      {sol.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[13px] text-gray-300 leading-relaxed">
                          <span className="flex-shrink-0 mt-0.5">
                            <LucideIcon name="CheckCircle2" size={14} color="#22d3ee" strokeWidth={2.5} />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-[13px] italic font-medium pt-4 border-t border-cyan-500/20 text-cyan-400 relative z-10">
                      → {sol.tagline}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PROCESS ============ */}
        <section className="px-10 py-20 bg-[#061826] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-3xl pointer-events-none bg-cyan-500/[0.03]" />

          <div className="max-w-[1240px] mx-auto relative z-10">
            <Reveal>
              <div className="text-center mb-14">
                <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Our Process</div>
                <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
                  How We{" "}
                  <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
                    Work Together
                  </span>
                </h2>
                <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
                  A proven 5-step process that takes your project from idea to impact
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {data.processSteps.map((step, i) => (
                <Reveal key={step.step} delay={i * 80}>
                  <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/25 hover:border-cyan-500/50 transition-all hover:-translate-y-1.5 hover:shadow-xl relative group">
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -left-3 w-12 h-12 rounded-2xl flex items-center justify-center font-syne font-extrabold text-base bg-gradient-to-br from-cyan-500 to-cyan-400 text-[#031a2b] shadow-lg shadow-cyan-500/40">
                      {step.step}
                    </div>

                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mt-6 mb-4 bg-cyan-500/15 border border-cyan-500/40">
                      <LucideIcon name={step.icon} size={22} color="#22d3ee" strokeWidth={2} />
                    </div>

                    <h3 className="font-syne font-bold text-base text-white mb-2 leading-tight">{step.title}</h3>
                    <p className="text-[12.5px] text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ DELIVERABLES ============ */}
        <section className="px-10 py-20 bg-[#030f1a]">
          <div className="max-w-[1240px] mx-auto">
            <Reveal>
              <div className="text-center mb-14">
                <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// What You Get</div>
                <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
                  Comprehensive{" "}
                  <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
                    Deliverables
                  </span>
                </h2>
                <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
                  Everything your {data.tag.toLowerCase()} brand needs to succeed — delivered in industry-standard formats
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {data.deliverables.map((d, i) => (
                <Reveal key={d.title} delay={i * 60}>
                  <div className="h-full flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/15 hover:border-cyan-500/40 hover:-translate-y-1 transition-all group">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-cyan-500/15 border border-cyan-500/40">
                      <LucideIcon name={d.icon} size={26} color="#22d3ee" strokeWidth={2} />
                    </div>
                    <h4 className="font-syne font-bold text-[15px] text-white mb-2 leading-tight">{d.title}</h4>
                    {/* Count — White/80 now (was amber) */}
                    <div className="text-[11px] uppercase tracking-wider font-bold text-white/70">
                      {d.count}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WHY US ============ */}
        <section className="px-10 py-20 bg-[#061826]">
          <div className="max-w-[1280px] mx-auto">
            <Reveal>
              <div className="text-center mb-14">
                <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Why Choose Us</div>
                <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
                  Why{" "}
                  <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
                    {data.whyTitle}
                  </span>
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.whyItems.map((w, i) => (
                <Reveal key={w.title} delay={i * 60}>
                  <div className="h-full flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/15 hover:border-cyan-500/40 hover:-translate-y-1 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform bg-cyan-500/15 border border-cyan-500/40">
                      <LucideIcon name={w.iconName || w.icon || "Star"} size={22} color="#22d3ee" strokeWidth={2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      {/* Title — White now (was amber) */}
                      <h4 className="font-syne font-bold text-base text-white mb-1.5 tracking-tight">{w.title}</h4>
                      <p className="text-[13px] text-gray-400 leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <section className="px-10 py-20 bg-[#030f1a]">
          <div className="max-w-[1240px] mx-auto">
            <Reveal>
              <div className="text-center mb-14">
                <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Client Stories</div>
                <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
                  What Our Clients{" "}
                  <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
                    Say About Us
                  </span>
                </h2>
                <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
                  Real results from real brands in the {data.tag.toLowerCase()} space
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 80}>
                  <div className="h-full p-7 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/25 hover:border-cyan-500/50 transition-all hover:-translate-y-1.5 hover:shadow-2xl relative">
                    {/* Quote icon — Cyan now (was amber) */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center bg-cyan-500/20 border border-cyan-500/40">
                      <LucideIcon name="Quote" size={18} color="#22d3ee" strokeWidth={2.5} />
                    </div>

                    <p className="text-[14px] text-gray-300 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>

                    <div className="flex items-center gap-3 pt-5 border-t border-cyan-500/15">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center font-syne font-extrabold text-base flex-shrink-0 bg-gradient-to-br from-cyan-500 to-cyan-400 text-[#031a2b]">
                        {t.initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-syne font-bold text-sm text-white truncate">{t.name}</div>
                        <div className="text-[11px] text-gray-400 truncate">
                          {t.role}, {t.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="px-10 py-20 bg-[#061826]">
          <div className="max-w-[900px] mx-auto">
            <Reveal>
              <div className="text-center mb-12">
                <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Frequently Asked Questions</div>
                <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
                  Got{" "}
                  <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
                    Questions?
                  </span>
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Everything you need to know about our {data.tag.toLowerCase()} services
                </p>
              </div>
            </Reveal>

            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <Reveal key={faq.question} delay={i * 80}>
                  <details className="group rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 overflow-hidden transition-all hover:border-cyan-500/40">
                    <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
                      <h3 className="font-syne font-bold text-[15px] text-white flex-1">{faq.question}</h3>
                      <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-open:rotate-45 bg-cyan-500/15 border border-cyan-500/40">
                        <LucideIcon name="Plus" size={18} color="#22d3ee" strokeWidth={2.5} />
                      </div>
                    </summary>
                    <div className="px-5 pb-5 text-[14px] text-gray-300 leading-relaxed border-t border-cyan-500/15 pt-4">
                      {faq.answer}
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ OTHER INDUSTRIES ============ */}
        <section className="px-10 py-20 bg-[#030f1a]">
          <div className="max-w-[1240px] mx-auto">
            <Reveal>
              <div className="text-center mb-12">
                <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Explore More</div>
                <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
                  Other{" "}
                  <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
                    Industries We Serve
                  </span>
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industryList
                .filter((ind) => ind.slug !== industry)
                .slice(0, 4)
                .map((ind, i) => (
                  <Reveal key={ind.slug} delay={i * 60}>
                    <Link href={`/services/${ind.slug}`} className="block h-full">
                      <div className="h-full p-5 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 hover:border-cyan-500/50 hover:-translate-y-1 transition-all text-center group">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/40 group-hover:scale-110 transition-transform">
                          <LucideIcon name={ind.iconName} size={22} color="#22d3ee" strokeWidth={2} />
                        </div>
                        <h4 className="font-syne font-bold text-sm text-white mb-1 leading-tight">{ind.name}</h4>
                        <p className="text-[11px] text-gray-400 line-clamp-2">{ind.desc}</p>
                      </div>
                    </Link>
                  </Reveal>
                ))}
            </div>
          </div>
        </section>

        <CTASection
          title={data.ctaTitle}
          highlight=""
          desc={data.ctaDesc}
        />
      </main>
      <Footer />
      <WAFloat />
    </>
  );
}