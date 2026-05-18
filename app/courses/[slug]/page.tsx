// // app/courses/[slug]/page.tsx
// // Course DETAIL page — shows full info for one course

// import type { Metadata } from "next";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import Script from "next/script";
// import LucideIcon from "@/components/LucideIcon";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WAFloat from "@/components/WAFloat";
// import { CTASection } from "@/components/PageSections";
// import { Reveal } from "@/components/ScrollReveal";
// import { COURSES, getCourseBySlug, getAllCourseSlugs, SITE_URL } from "@/lib/coursesData";

// // SEO: Static generation for all course slugs
// export function generateStaticParams() {
//     return getAllCourseSlugs().map((slug) => ({ slug }));
// }

// // SEO: Dynamic metadata for each course
// export async function generateMetadata({
//     params,
// }: {
//     params: Promise<{ slug: string }>;
// }): Promise<Metadata> {
//     const { slug } = await params;
//     const course = getCourseBySlug(slug);

//     if (!course) {
//         return {
//             title: "Course Not Found | AV Academy",
//             description: "The requested course could not be found.",
//         };
//     }

//     const canonicalUrl = `${SITE_URL}/courses/${course.slug}`;

//     return {
//         title: course.seoTitle,
//         description: course.seoDescription,
//         keywords: course.seoKeywords,
//         authors: [{ name: "AV Academy", url: SITE_URL }],
//         creator: "AV Academy Lucknow",
//         publisher: "AV Academy",
//         alternates: { canonical: canonicalUrl },
//         openGraph: {
//             title: course.seoTitle,
//             description: course.seoDescription,
//             url: canonicalUrl,
//             siteName: "AV Academy Lucknow",
//             locale: "en_IN",
//             type: "website",
//             images: [
//                 {
//                     url: `${SITE_URL}/og-images/${course.slug}.jpg`,
//                     width: 1200,
//                     height: 630,
//                     alt: course.name,
//                 },
//             ],
//         },
//         twitter: {
//             card: "summary_large_image",
//             title: course.seoTitle,
//             description: course.seoDescription,
//             images: [`${SITE_URL}/og-images/${course.slug}.jpg`],
//         },
//         robots: {
//             index: true,
//             follow: true,
//             googleBot: {
//                 index: true,
//                 follow: true,
//                 "max-image-preview": "large",
//                 "max-snippet": -1,
//             },
//         },
//         category: course.category === "media" ? "Creative Arts Education" : "Technology Education",
//     };
// }

// export default async function CourseDetailPage({
//     params,
// }: {
//     params: Promise<{ slug: string }>;
// }) {
//     const { slug } = await params;
//     const course = getCourseBySlug(slug);

//     if (!course) {
//         notFound();
//     }

//     const canonicalUrl = `${SITE_URL}/courses/${course.slug}`;

//     // Related courses
//     const relatedCourses = COURSES.filter(
//         (c) => c.category === course.category && c.slug !== course.slug
//     ).slice(0, 3);

//     // JSON-LD Schemas for SEO
//     const courseSchema = {
//         "@context": "https://schema.org",
//         "@type": "Course",
//         name: course.name,
//         description: course.description,
//         provider: {
//             "@type": "EducationalOrganization",
//             name: "AV Academy",
//             url: SITE_URL,
//             address: {
//                 "@type": "PostalAddress",
//                 streetAddress: "3rd Floor, Sai Tower, Raibareli Rd, near Dental College, Vrindavan Colony",
//                 addressLocality: "Lucknow",
//                 addressRegion: "Uttar Pradesh",
//                 postalCode: "226014",
//                 addressCountry: "IN",
//             },
//             telephone: "+91-9675903348",
//             email: "avacademy1706@gmail.com",
//         },
//         url: canonicalUrl,
//         educationalLevel: course.level,
//         inLanguage: ["en", "hi"],
//         teaches: course.tools,
//         hasCourseInstance: {
//             "@type": "CourseInstance",
//             courseMode: course.mode.includes("Online") ? ["onsite", "online"] : ["onsite"],
//             courseWorkload: course.duration,
//         },
//         offers: {
//             "@type": "Offer",
//             category: "Education",
//             price: course.feeNumeric,
//             priceCurrency: "INR",
//             availability: "https://schema.org/InStock",
//             url: canonicalUrl,
//         },
//         aggregateRating: {
//             "@type": "AggregateRating",
//             ratingValue: "4.8",
//             ratingCount: "1500",
//             bestRating: "5",
//         },
//     };

//     const faqSchema = {
//         "@context": "https://schema.org",
//         "@type": "FAQPage",
//         mainEntity: course.faqs.map((faq) => ({
//             "@type": "Question",
//             name: faq.question,
//             acceptedAnswer: { "@type": "Answer", text: faq.answer },
//         })),
//     };

//     const breadcrumbSchema = {
//         "@context": "https://schema.org",
//         "@type": "BreadcrumbList",
//         itemListElement: [
//             { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
//             { "@type": "ListItem", position: 2, name: "Courses", item: `${SITE_URL}/courses` },
//             { "@type": "ListItem", position: 3, name: course.name, item: canonicalUrl },
//         ],
//     };

//     return (
//         <>
//             {/* JSON-LD Structured Data */}
//             <Script
//                 id="course-schema"
//                 type="application/ld+json"
//                 dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
//             />
//             <Script
//                 id="faq-schema"
//                 type="application/ld+json"
//                 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
//             />
//             <Script
//                 id="breadcrumb-schema"
//                 type="application/ld+json"
//                 dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
//             />

//             <Navbar />
//             <main className="bg-[#030f1a]">
//                 {/* HERO */}
//                 <section className="relative pt-36 pb-16 px-10 overflow-hidden border-b border-cyan-500/15 bg-gradient-to-br from-[#061826] via-[#0a2436] to-[#061826]">
//                     <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/20 blur-3xl pointer-events-none rounded-full" />
//                     <div className="absolute top-[30%] left-[8%] w-52 h-52 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
//                     <div
//                         className="absolute bottom-[10%] right-[10%] w-60 h-60 rounded-full pointer-events-none blur-3xl"
//                         style={{ background: `${course.accentHex}15` }}
//                     />

//                     <div className="relative z-10 max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
//                         {/* LEFT */}
//                         <div>
//                             <nav aria-label="Breadcrumb" className="mb-5">
//                                 <ol className="inline-flex items-center gap-2 text-[12px] text-gray-500 px-4 py-2 rounded-full bg-[#082c44]/60 border border-cyan-500/15">
//                                     <li>
//                                         <Link href="/" className="text-cyan-400 font-semibold hover:text-cyan-300">Home</Link>
//                                     </li>
//                                     <li><LucideIcon name="ChevronRight" size={12} color="#6b7280" /></li>
//                                     <li>
//                                         <Link href="/courses" className="text-cyan-400 font-semibold hover:text-cyan-300">Courses</Link>
//                                     </li>
//                                     <li><LucideIcon name="ChevronRight" size={12} color="#6b7280" /></li>
//                                     <li className="text-gray-300" aria-current="page">{course.name.split(" ")[0]}</li>
//                                 </ol>
//                             </nav>

//                             <span
//                                 className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[2px] uppercase mb-5 border"
//                                 style={{
//                                     background: `${course.accentHex}15`,
//                                     borderColor: `${course.accentHex}50`,
//                                     color: course.accentHex,
//                                     boxShadow: `0 0 30px ${course.accentHex}30`,
//                                 }}
//                             >
//                                 <LucideIcon name={course.icon} size={12} color={course.accentHex} strokeWidth={2} />
//                                 {course.badge} · AV Academy
//                             </span>

//                             <h1 className="font-syne font-extrabold text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] tracking-tight text-white mb-4">
//                                 {course.name.split(" ").slice(0, -1).join(" ")}{" "}
//                                 <span
//                                     className="bg-clip-text text-transparent"
//                                     style={{ backgroundImage: `linear-gradient(135deg, ${course.accentHex}, #fbbf24)` }}
//                                 >
//                                     {course.name.split(" ").slice(-1)}
//                                 </span>
//                             </h1>

//                             <p className="text-base text-gray-300 mb-3 font-medium">{course.tagline}</p>
//                             <p className="text-sm text-gray-400 mb-7 leading-relaxed max-w-[640px]">{course.description}</p>

//                             <div className="flex flex-wrap gap-2 mb-6">
//                                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#082c44]/80 border border-cyan-500/25 text-gray-300">
//                                     <LucideIcon name="Clock" size={12} color="#22d3ee" strokeWidth={2.5} />
//                                     {course.duration}
//                                 </div>
//                                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#082c44]/80 border border-cyan-500/25 text-gray-300">
//                                     <LucideIcon name="Laptop" size={12} color="#22d3ee" strokeWidth={2.5} />
//                                     {course.mode}
//                                 </div>
//                                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#082c44]/80 border border-cyan-500/25 text-gray-300">
//                                     <LucideIcon name="TrendingUp" size={12} color="#22d3ee" strokeWidth={2.5} />
//                                     {course.level}
//                                 </div>
//                                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#082c44]/80 border border-cyan-500/25 text-gray-300">
//                                     <LucideIcon name="Languages" size={12} color="#22d3ee" strokeWidth={2.5} />
//                                     {course.language}
//                                 </div>
//                             </div>

//                             <div className="flex flex-wrap gap-3">
//                                 <a
//                                     href={`https://wa.me/919675903348?text=${encodeURIComponent(`Hi! I want to enroll in ${course.name}. Please share details.`)}`}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[13px] font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all"
//                                 >
//                                     <LucideIcon name="Rocket" size={14} color="#031a2b" strokeWidth={2.5} />
//                                     Enroll Now
//                                 </a>
//                                 <Link
//                                     href="/contact"
//                                     className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[13px] font-syne tracking-wide bg-transparent border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all"
//                                 >
//                                     <LucideIcon name="Phone" size={14} color="#22d3ee" strokeWidth={2.5} />
//                                     Get Counselling
//                                 </Link>
//                             </div>
//                         </div>

//                         {/* RIGHT — Info Card */}
//                         <Reveal direction="right">
//                             <aside
//                                 className="relative rounded-3xl overflow-hidden p-8 border-2"
//                                 style={{
//                                     background: "linear-gradient(145deg, rgba(8,28,44,.95), rgba(3,14,22,.98))",
//                                     borderColor: `${course.accentHex}40`,
//                                     boxShadow: `0 25px 60px ${course.accentHex}25`,
//                                 }}
//                             >
//                                 <div
//                                     className="absolute top-0 left-0 right-0 h-1 opacity-80"
//                                     style={{ background: `linear-gradient(90deg, ${course.accentHex}, #fbbf24)` }}
//                                 />

//                                 <div
//                                     className="relative w-20 h-20 mx-auto mb-5 rounded-2xl flex items-center justify-center"
//                                     style={{
//                                         background: `linear-gradient(135deg, ${course.accentHex}, ${course.accentHex}cc)`,
//                                         boxShadow: `0 0 50px ${course.accentHex}50`,
//                                     }}
//                                 >
//                                     <LucideIcon name={course.icon} size={40} color="#031a2b" strokeWidth={2} />
//                                 </div>

//                                 <div className="relative text-center mb-5">
//                                     <div className="text-[11px] text-gray-400 uppercase tracking-[2px] font-bold mb-1">Course Fee</div>
//                                     <div
//                                         className="font-syne font-extrabold text-4xl bg-clip-text text-transparent"
//                                         style={{ backgroundImage: `linear-gradient(135deg, #fbbf24, #f59e0b)` }}
//                                     >
//                                         {course.fee}
//                                     </div>
//                                     <div className="text-[11px] text-gray-500 mt-1">EMI options available</div>
//                                 </div>

//                                 <dl className="relative space-y-2.5 pt-5 border-t border-cyan-500/15">
//                                     {[
//                                         { label: "Duration", value: course.duration, icon: "Clock" },
//                                         { label: "Mode", value: course.mode, icon: "Laptop" },
//                                         { label: "Level", value: course.level, icon: "TrendingUp" },
//                                         { label: "Language", value: course.language, icon: "Languages" },
//                                     ].map((s) => (
//                                         <div key={s.label} className="flex items-center justify-between text-[12.5px]">
//                                             <dt className="flex items-center gap-2 text-gray-400">
//                                                 <LucideIcon name={s.icon} size={13} color={course.accentHex} strokeWidth={2} />
//                                                 {s.label}
//                                             </dt>
//                                             <dd className="text-white font-semibold text-right">{s.value}</dd>
//                                         </div>
//                                     ))}
//                                 </dl>

//                                 <a
//                                     href={`https://wa.me/919675903348?text=${encodeURIComponent(`Hi! I want to enroll in ${course.name}. Please share details.`)}`}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="relative mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm font-syne text-[#031a2b]"
//                                     style={{
//                                         background: `linear-gradient(135deg, ${course.accentHex}, ${course.accentHex}dd)`,
//                                         boxShadow: `0 10px 25px ${course.accentHex}40`,
//                                     }}
//                                 >
//                                     <LucideIcon name="MessageCircle" size={16} color="#031a2b" strokeWidth={2.5} />
//                                     Enquire on WhatsApp
//                                 </a>
//                             </aside>
//                         </Reveal>
//                     </div>
//                 </section>

//                 {/* HIGHLIGHTS */}
//                 <section className="px-10 py-20 bg-[#061826]">
//                     <div className="max-w-[1240px] mx-auto">
//                         <Reveal>
//                             <div className="text-center mb-12">
//                                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Course Highlights</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white">
//                                     What Makes This Course{" "}
//                                     <span
//                                         className="bg-clip-text text-transparent"
//                                         style={{ backgroundImage: `linear-gradient(135deg, ${course.accentHex}, #fbbf24)` }}
//                                     >
//                                         Special
//                                     </span>
//                                 </h2>
//                             </div>
//                         </Reveal>

//                         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                             {course.highlights.map((h, i) => (
//                                 <Reveal key={h} delay={i * 60}>
//                                     <li className="flex items-start gap-3 p-5 rounded-2xl bg-gradient-to-br from-[#082c44]/80 to-[#030f1a]/90 border border-cyan-500/15 hover:border-cyan-500/40 hover:-translate-y-1 transition-all">
//                                         <div
//                                             className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
//                                             style={{ background: `${course.accentHex}15`, border: `1px solid ${course.accentHex}40` }}
//                                         >
//                                             <LucideIcon name="CheckCircle2" size={20} color={course.accentHex} strokeWidth={2.5} />
//                                         </div>
//                                         <div className="text-[14px] text-gray-200 font-medium leading-relaxed pt-1.5">{h}</div>
//                                     </li>
//                                 </Reveal>
//                             ))}
//                         </ul>
//                     </div>
//                 </section>

//                 {/* WHO + TOOLS */}
//                 <section className="px-10 py-20 bg-[#030f1a]">
//                     <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
//                         <Reveal direction="left">
//                             <div className="p-8 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 h-full">
//                                 <div className="flex items-center gap-3 mb-6">
//                                     <div
//                                         className="w-12 h-12 rounded-xl flex items-center justify-center"
//                                         style={{ background: `${course.accentHex}15`, border: `1px solid ${course.accentHex}40` }}
//                                     >
//                                         <LucideIcon name="Users" size={22} color={course.accentHex} strokeWidth={2} />
//                                     </div>
//                                     <div>
//                                         <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-1">// Perfect For</div>
//                                         <h2 className="font-syne font-extrabold text-xl text-white">Who Is This Course For?</h2>
//                                     </div>
//                                 </div>
//                                 <ul className="space-y-3">
//                                     {course.whoIsItFor.map((person) => (
//                                         <li key={person} className="flex items-start gap-3 text-[14px] text-gray-300">
//                                             <span className="flex-shrink-0 mt-0.5"><LucideIcon name="ArrowRight" size={16} color={course.accentHex} strokeWidth={2.5} /></span>
//                                             <span>{person}</span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </Reveal>

//                         <Reveal direction="right">
//                             <div className="p-8 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-amber-500/20 h-full">
//                                 <div className="flex items-center gap-3 mb-6">
//                                     <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-amber-500/15 border border-amber-500/40">
//                                         <LucideIcon name="Wrench" size={22} color="#fbbf24" strokeWidth={2} />
//                                     </div>
//                                     <div>
//                                         <div className="text-xs font-bold tracking-[2px] uppercase text-amber-400 mb-1">// Industry Tools</div>
//                                         <h2 className="font-syne font-extrabold text-xl text-white">Tools You&apos;ll Master</h2>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-wrap gap-2">
//                                     {course.tools.map((tool) => (
//                                         <span
//                                             key={tool}
//                                             className="px-3.5 py-2 rounded-full text-[12.5px] font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 transition-colors"
//                                         >
//                                             {tool}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>
//                         </Reveal>
//                     </div>
//                 </section>

//                 {/* CURRICULUM */}
//                 <section className="px-10 py-20 bg-[#061826] relative overflow-hidden">
//                     <div
//                         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-3xl pointer-events-none"
//                         style={{ background: `${course.accentHex}08` }}
//                     />

//                     <div className="max-w-[1240px] mx-auto relative z-10">
//                         <Reveal>
//                             <div className="text-center mb-12">
//                                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Detailed Curriculum</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                                     {course.curriculum.length}-Module{" "}
//                                     <span
//                                         className="bg-clip-text text-transparent"
//                                         style={{ backgroundImage: `linear-gradient(135deg, ${course.accentHex}, #fbbf24)` }}
//                                     >
//                                         Learning Path
//                                     </span>
//                                 </h2>
//                                 <p className="text-sm text-gray-400 max-w-[600px] mx-auto leading-relaxed">
//                                     Structured curriculum designed to take you from beginner to job-ready professional
//                                 </p>
//                             </div>
//                         </Reveal>

//                         <ol className="space-y-4">
//                             {course.curriculum.map((module, idx) => (
//                                 <Reveal key={module.title} delay={idx * 60}>
//                                     <li
//                                         className="rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border transition-all hover:-translate-y-1 overflow-hidden"
//                                         style={{ borderColor: `${course.accentHex}25` }}
//                                     >
//                                         <article className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-5 p-6">
//                                             <div className="flex md:flex-col items-center gap-3 md:gap-2">
//                                                 <div
//                                                     className="w-16 h-16 rounded-2xl flex items-center justify-center font-syne font-extrabold text-2xl"
//                                                     style={{
//                                                         background: `linear-gradient(135deg, ${course.accentHex}, ${course.accentHex}dd)`,
//                                                         color: "#031a2b",
//                                                         boxShadow: `0 8px 20px ${course.accentHex}30`,
//                                                     }}
//                                                 >
//                                                     {String(idx + 1).padStart(2, "0")}
//                                                 </div>
//                                             </div>
//                                             <div>
//                                                 <h3 className="font-syne font-bold text-lg text-white mb-3">{module.title}</h3>
//                                                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                                                     {module.topics.map((topic) => (
//                                                         <li key={topic} className="flex items-center gap-2 text-[13px] text-gray-300">
//                                                             <LucideIcon name="Check" size={14} color={course.accentHex} strokeWidth={3} />
//                                                             {topic}
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             </div>
//                                         </article>
//                                     </li>
//                                 </Reveal>
//                             ))}
//                         </ol>
//                     </div>
//                 </section>

//                 {/* CAREERS */}
//                 <section className="px-10 py-20 bg-[#030f1a]">
//                     <div className="max-w-[1240px] mx-auto">
//                         <Reveal>
//                             <div className="text-center mb-12">
//                                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Career Opportunities</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                                     Where This Course{" "}
//                                     <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">Takes You</span>
//                                 </h2>
//                                 <p className="text-sm text-gray-400 max-w-[600px] mx-auto leading-relaxed">
//                                     Industry-ready skills that open multiple high-paying career paths
//                                 </p>
//                             </div>
//                         </Reveal>

//                         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
//                             {course.careers.map((c, i) => (
//                                 <Reveal key={c.role} delay={i * 80}>
//                                     <li className="p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-amber-500/20 text-center hover:border-amber-500/50 hover:-translate-y-1 transition-all hover:shadow-lg hover:shadow-amber-500/10">
//                                         <div className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center bg-amber-500/15 border border-amber-500/40">
//                                             <LucideIcon name="Briefcase" size={22} color="#fbbf24" strokeWidth={2} />
//                                         </div>
//                                         <h3 className="font-syne font-bold text-base text-white mb-3 leading-tight">{c.role}</h3>
//                                         <div className="pt-3 border-t border-amber-500/15">
//                                             <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1">Avg Salary</div>
//                                             <div className="font-syne font-extrabold text-xl bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
//                                                 {c.salary}
//                                             </div>
//                                         </div>
//                                     </li>
//                                 </Reveal>
//                             ))}
//                         </ul>
//                     </div>
//                 </section>

//                 {/* PROJECTS */}
//                 <section className="px-10 py-20 bg-[#061826]">
//                     <div className="max-w-[1240px] mx-auto">
//                         <Reveal>
//                             <div className="text-center mb-12">
//                                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Hands-On Projects</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                                     Build a{" "}
//                                     <span
//                                         className="bg-clip-text text-transparent"
//                                         style={{ backgroundImage: `linear-gradient(135deg, ${course.accentHex}, #fbbf24)` }}
//                                     >
//                                         Portfolio That Hires
//                                     </span>
//                                 </h2>
//                                 <p className="text-sm text-gray-400 max-w-[600px] mx-auto leading-relaxed">
//                                     Real projects you&apos;ll complete during this course — each goes into your portfolio
//                                 </p>
//                             </div>
//                         </Reveal>

//                         <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             {course.projects.map((project, i) => (
//                                 <Reveal key={project} delay={i * 60}>
//                                     <li
//                                         className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border hover:-translate-y-1 transition-all"
//                                         style={{ borderColor: `${course.accentHex}25` }}
//                                     >
//                                         <div
//                                             className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-syne font-extrabold text-lg"
//                                             style={{
//                                                 background: `linear-gradient(135deg, ${course.accentHex}, ${course.accentHex}dd)`,
//                                                 color: "#031a2b",
//                                             }}
//                                         >
//                                             {i + 1}
//                                         </div>
//                                         <div className="text-[14px] text-gray-200 font-medium leading-relaxed">{project}</div>
//                                     </li>
//                                 </Reveal>
//                             ))}
//                         </ul>
//                     </div>
//                 </section>

//                 {/* FAQ */}
//                 <section className="px-10 py-20 bg-[#030f1a]">
//                     <div className="max-w-[900px] mx-auto">
//                         <Reveal>
//                             <div className="text-center mb-12">
//                                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Frequently Asked Questions</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                                     Got{" "}
//                                     <span
//                                         className="bg-clip-text text-transparent"
//                                         style={{ backgroundImage: `linear-gradient(135deg, ${course.accentHex}, #fbbf24)` }}
//                                     >
//                                         Questions?
//                                     </span>
//                                 </h2>
//                                 <p className="text-sm text-gray-400 leading-relaxed">
//                                     Everything you need to know about the {course.name}
//                                 </p>
//                             </div>
//                         </Reveal>

//                         <div className="space-y-4">
//                             {course.faqs.map((faq, i) => (
//                                 <Reveal key={faq.question} delay={i * 80}>
//                                     <details className="group rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 overflow-hidden transition-all hover:border-cyan-500/40">
//                                         <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
//                                             <h3 className="font-syne font-bold text-[15px] text-white flex-1">{faq.question}</h3>
//                                             <div
//                                                 className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-open:rotate-45"
//                                                 style={{ background: `${course.accentHex}15`, border: `1px solid ${course.accentHex}40` }}
//                                             >
//                                                 <LucideIcon name="Plus" size={18} color={course.accentHex} strokeWidth={2.5} />
//                                             </div>
//                                         </summary>
//                                         <div className="px-5 pb-5 text-[14px] text-gray-300 leading-relaxed border-t border-cyan-500/15 pt-4">
//                                             {faq.answer}
//                                         </div>
//                                     </details>
//                                 </Reveal>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* RELATED COURSES */}
//                 {relatedCourses.length > 0 && (
//                     <section className="px-10 py-20 bg-[#061826]">
//                         <div className="max-w-[1240px] mx-auto">
//                             <Reveal>
//                                 <div className="text-center mb-12">
//                                     <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Related Courses</div>
//                                     <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                                         Explore More{" "}
//                                         <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                                             {course.category === "media" ? "Creative" : "Tech"} Courses
//                                         </span>
//                                     </h2>
//                                 </div>
//                             </Reveal>

//                             <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
//                                 {relatedCourses.map((rc, i) => (
//                                     <Reveal key={rc.slug} delay={i * 80}>
//                                         <li className="h-full">
//                                             <Link href={`/courses/${rc.slug}`} className="block h-full">
//                                                 <article
//                                                     className="h-full p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border transition-all hover:-translate-y-1.5 hover:shadow-2xl group"
//                                                     style={{ borderColor: `${rc.accentHex}25` }}
//                                                 >
//                                                     <div
//                                                         className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
//                                                         style={{ background: `${rc.accentHex}15`, border: `1px solid ${rc.accentHex}40` }}
//                                                     >
//                                                         <LucideIcon name={rc.icon} size={22} color={rc.accentHex} strokeWidth={2} />
//                                                     </div>
//                                                     <h3 className="font-syne font-bold text-lg text-white mb-2 leading-tight">{rc.name}</h3>
//                                                     <p className="text-[13px] text-gray-400 mb-4 line-clamp-2">{rc.tagline}</p>
//                                                     <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-4">
//                                                         <LucideIcon name="Clock" size={12} color={rc.accentHex} strokeWidth={2.5} />
//                                                         {rc.duration}
//                                                     </div>
//                                                     <div className="inline-flex items-center gap-1.5 text-[12px] font-bold" style={{ color: rc.accentHex }}>
//                                                         View Details
//                                                         <LucideIcon name="ArrowRight" size={12} color={rc.accentHex} strokeWidth={2.5} />
//                                                     </div>
//                                                 </article>
//                                             </Link>
//                                         </li>
//                                     </Reveal>
//                                 ))}
//                             </ul>

//                             <div className="text-center mt-10">
//                                 <Link
//                                     href="/courses"
//                                     className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[13px] font-syne tracking-wide bg-transparent border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all"
//                                 >
//                                     View All Courses
//                                     <LucideIcon name="ArrowRight" size={14} color="#22d3ee" strokeWidth={2.5} />
//                                 </Link>
//                             </div>
//                         </div>
//                     </section>
//                 )}

//                 <CTASection
//                     title="Ready to Master"
//                     highlight={course.name.split(" ").slice(0, 2).join(" ") + "?"}
//                     desc={`Join AV Academy's ${course.name} and transform your career with industry-ready skills, real projects, and placement support.`}
//                 />
//             </main>
//             <Footer />
//             <WAFloat />
//         </>
//     );
// }


// // app/courses/[slug]/page.tsx
// // Course DETAIL page — shows full info for one course (NO PRICING)

// import type { Metadata } from "next";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import Script from "next/script";
// import LucideIcon from "@/components/LucideIcon";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WAFloat from "@/components/WAFloat";
// import { CTASection } from "@/components/PageSections";
// import { Reveal } from "@/components/ScrollReveal";
// import { COURSES, getCourseBySlug, getAllCourseSlugs, SITE_URL } from "@/lib/coursesData";

// // SEO: Static generation for all course slugs
// export function generateStaticParams() {
//     return getAllCourseSlugs().map((slug) => ({ slug }));
// }

// // SEO: Dynamic metadata for each course
// export async function generateMetadata({
//     params,
// }: {
//     params: Promise<{ slug: string }>;
// }): Promise<Metadata> {
//     const { slug } = await params;
//     const course = getCourseBySlug(slug);

//     if (!course) {
//         return {
//             title: "Course Not Found | AV Academy",
//             description: "The requested course could not be found.",
//         };
//     }

//     const canonicalUrl = `${SITE_URL}/courses/${course.slug}`;

//     return {
//         title: course.seoTitle,
//         description: course.seoDescription,
//         keywords: course.seoKeywords,
//         authors: [{ name: "AV Academy", url: SITE_URL }],
//         creator: "AV Academy Lucknow",
//         publisher: "AV Academy",
//         alternates: { canonical: canonicalUrl },
//         openGraph: {
//             title: course.seoTitle,
//             description: course.seoDescription,
//             url: canonicalUrl,
//             siteName: "AV Academy Lucknow",
//             locale: "en_IN",
//             type: "website",
//             images: [
//                 {
//                     url: `${SITE_URL}/og-images/${course.slug}.jpg`,
//                     width: 1200,
//                     height: 630,
//                     alt: course.name,
//                 },
//             ],
//         },
//         twitter: {
//             card: "summary_large_image",
//             title: course.seoTitle,
//             description: course.seoDescription,
//             images: [`${SITE_URL}/og-images/${course.slug}.jpg`],
//         },
//         robots: {
//             index: true,
//             follow: true,
//             googleBot: {
//                 index: true,
//                 follow: true,
//                 "max-image-preview": "large",
//                 "max-snippet": -1,
//             },
//         },
//         category: course.category === "media" ? "Creative Arts Education" : "Technology Education",
//     };
// }

// export default async function CourseDetailPage({
//     params,
// }: {
//     params: Promise<{ slug: string }>;
// }) {
//     const { slug } = await params;
//     const course = getCourseBySlug(slug);

//     if (!course) {
//         notFound();
//     }

//     const canonicalUrl = `${SITE_URL}/courses/${course.slug}`;

//     // Related courses
//     const relatedCourses = COURSES.filter(
//         (c) => c.category === course.category && c.slug !== course.slug
//     ).slice(0, 3);

//     // JSON-LD Schemas for SEO (pricing kept here for Google rich results - not visible to users)
//     const courseSchema = {
//         "@context": "https://schema.org",
//         "@type": "Course",
//         name: course.name,
//         description: course.description,
//         provider: {
//             "@type": "EducationalOrganization",
//             name: "AV Academy",
//             url: SITE_URL,
//             address: {
//                 "@type": "PostalAddress",
//                 streetAddress: "3rd Floor, Sai Tower, Raibareli Rd, near Dental College, Vrindavan Colony",
//                 addressLocality: "Lucknow",
//                 addressRegion: "Uttar Pradesh",
//                 postalCode: "226014",
//                 addressCountry: "IN",
//             },
//             telephone: "+91-9675903348",
//             email: "avacademy1706@gmail.com",
//         },
//         url: canonicalUrl,
//         educationalLevel: course.level,
//         inLanguage: ["en", "hi"],
//         teaches: course.tools,
//         hasCourseInstance: {
//             "@type": "CourseInstance",
//             courseMode: course.mode.includes("Online") ? ["onsite", "online"] : ["onsite"],
//             courseWorkload: course.duration,
//         },
//         aggregateRating: {
//             "@type": "AggregateRating",
//             ratingValue: "4.8",
//             ratingCount: "1500",
//             bestRating: "5",
//         },
//     };

//     const faqSchema = {
//         "@context": "https://schema.org",
//         "@type": "FAQPage",
//         mainEntity: course.faqs.map((faq) => ({
//             "@type": "Question",
//             name: faq.question,
//             acceptedAnswer: { "@type": "Answer", text: faq.answer },
//         })),
//     };

//     const breadcrumbSchema = {
//         "@context": "https://schema.org",
//         "@type": "BreadcrumbList",
//         itemListElement: [
//             { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
//             { "@type": "ListItem", position: 2, name: "Courses", item: `${SITE_URL}/courses` },
//             { "@type": "ListItem", position: 3, name: course.name, item: canonicalUrl },
//         ],
//     };

//     return (
//         <>
//             {/* JSON-LD Structured Data */}
//             <Script
//                 id="course-schema"
//                 type="application/ld+json"
//                 dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
//             />
//             <Script
//                 id="faq-schema"
//                 type="application/ld+json"
//                 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
//             />
//             <Script
//                 id="breadcrumb-schema"
//                 type="application/ld+json"
//                 dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
//             />

//             <Navbar />
//             <main className="bg-[#030f1a]">
//                 {/* HERO */}
//                 <section className="relative pt-36 pb-16 px-10 overflow-hidden border-b border-cyan-500/15 bg-gradient-to-br from-[#061826] via-[#0a2436] to-[#061826]">
//                     <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/20 blur-3xl pointer-events-none rounded-full" />
//                     <div className="absolute top-[30%] left-[8%] w-52 h-52 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
//                     <div
//                         className="absolute bottom-[10%] right-[10%] w-60 h-60 rounded-full pointer-events-none blur-3xl"
//                         style={{ background: `${course.accentHex}15` }}
//                     />

//                     <div className="relative z-10 max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
//                         {/* LEFT */}
//                         <div>
//                             {/* <nav aria-label="Breadcrumb" className="mb-5">
//                                 <ol className="inline-flex items-center gap-2 text-[12px] text-gray-500 px-4 py-2 rounded-full bg-[#082c44]/60 border border-cyan-500/15">
//                                     <li>
//                                         <Link href="/" className="text-cyan-400 font-semibold hover:text-cyan-300">Home</Link>
//                                     </li>
//                                     <li><LucideIcon name="ChevronRight" size={12} color="#6b7280" /></li>
//                                     <li>
//                                         <Link href="/courses" className="text-cyan-400 font-semibold hover:text-cyan-300">Courses</Link>
//                                     </li>
//                                     <li><LucideIcon name="ChevronRight" size={12} color="#6b7280" /></li>
//                                     <li className="text-gray-300" aria-current="page">{course.name.split(" ")[0]}</li>
//                                 </ol>
//                             </nav> */}

//                             <span
//                                 className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[2px] uppercase mb-5 border"
//                                 style={{
//                                     background: `${course.accentHex}15`,
//                                     borderColor: `${course.accentHex}50`,
//                                     color: course.accentHex,
//                                     boxShadow: `0 0 30px ${course.accentHex}30`,
//                                 }}
//                             >
//                                 <LucideIcon name={course.icon} size={12} color={course.accentHex} strokeWidth={2} />
//                                 {course.badge} · AV Academy
//                             </span>

//                             <h1 className="font-syne font-extrabold text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] tracking-tight text-white mb-4">
//                                 {course.name.split(" ").slice(0, -1).join(" ")}{" "}
//                                 <span
//                                     className="bg-clip-text text-transparent"
//                                     style={{ backgroundImage: `linear-gradient(135deg, ${course.accentHex}, #fbbf24)` }}
//                                 >
//                                     {course.name.split(" ").slice(-1)}
//                                 </span>
//                             </h1>

//                             <p className="text-base text-gray-300 mb-3 font-medium">{course.tagline}</p>
//                             <p className="text-sm text-gray-400 mb-7 leading-relaxed max-w-[640px]">{course.description}</p>

//                             <div className="flex flex-wrap gap-2 mb-6">
//                                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#082c44]/80 border border-cyan-500/25 text-gray-300">
//                                     <LucideIcon name="Clock" size={12} color="#22d3ee" strokeWidth={2.5} />
//                                     {course.duration}
//                                 </div>
//                                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#082c44]/80 border border-cyan-500/25 text-gray-300">
//                                     <LucideIcon name="Laptop" size={12} color="#22d3ee" strokeWidth={2.5} />
//                                     {course.mode}
//                                 </div>
//                                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#082c44]/80 border border-cyan-500/25 text-gray-300">
//                                     <LucideIcon name="TrendingUp" size={12} color="#22d3ee" strokeWidth={2.5} />
//                                     {course.level}
//                                 </div>
//                                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#082c44]/80 border border-cyan-500/25 text-gray-300">
//                                     <LucideIcon name="Languages" size={12} color="#22d3ee" strokeWidth={2.5} />
//                                     {course.language}
//                                 </div>
//                             </div>

//                             <div className="flex flex-wrap gap-3">
//                                 <a
//                                     href={`https://wa.me/919675903348?text=${encodeURIComponent(`Hi! I want to enroll in ${course.name}. Please share details.`)}`}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[13px] font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all"
//                                 >
//                                     <LucideIcon name="Rocket" size={14} color="#031a2b" strokeWidth={2.5} />
//                                     Enroll Now
//                                 </a>
//                                 <Link
//                                     href="/contact"
//                                     className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[13px] font-syne tracking-wide bg-transparent border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all"
//                                 >
//                                     <LucideIcon name="Phone" size={14} color="#22d3ee" strokeWidth={2.5} />
//                                     Get Counselling
//                                 </Link>
//                             </div>
//                         </div>

//                         {/* RIGHT — Info Card (NO PRICING) */}
//                         <Reveal direction="right">
//                             <aside
//                                 className="relative rounded-3xl overflow-hidden p-8 border-2"
//                                 style={{
//                                     background: "linear-gradient(145deg, rgba(8,28,44,.95), rgba(3,14,22,.98))",
//                                     borderColor: `${course.accentHex}40`,
//                                     boxShadow: `0 25px 60px ${course.accentHex}25`,
//                                 }}
//                             >
//                                 <div
//                                     className="absolute top-0 left-0 right-0 h-1 opacity-80"
//                                     style={{ background: `linear-gradient(90deg, ${course.accentHex}, #fbbf24)` }}
//                                 />

//                                 {/* Course Icon */}
//                                 <div
//                                     className="relative w-20 h-20 mx-auto mb-5 rounded-2xl flex items-center justify-center"
//                                     style={{
//                                         background: `linear-gradient(135deg, ${course.accentHex}, ${course.accentHex}cc)`,
//                                         boxShadow: `0 0 50px ${course.accentHex}50`,
//                                     }}
//                                 >
//                                     <LucideIcon name={course.icon} size={40} color="#031a2b" strokeWidth={2} />
//                                 </div>

//                                 {/* Course Title in Card */}
//                                 <div className="relative text-center mb-5">
//                                     <div className="text-[11px] text-gray-400 uppercase tracking-[2px] font-bold mb-2">
//                                         Course Quick Info
//                                     </div>
//                                     <h3
//                                         className="font-syne font-extrabold text-xl bg-clip-text text-transparent leading-tight"
//                                         style={{ backgroundImage: `linear-gradient(135deg, ${course.accentHex}, #fbbf24)` }}
//                                     >
//                                         {course.badge}
//                                     </h3>
//                                 </div>

//                                 {/* Course Info List */}
//                                 <dl className="relative space-y-2.5 pt-5 border-t border-cyan-500/15">
//                                     {[
//                                         { label: "Duration", value: course.duration, icon: "Clock" },
//                                         { label: "Mode", value: course.mode, icon: "Laptop" },
//                                         { label: "Level", value: course.level, icon: "TrendingUp" },
//                                         { label: "Language", value: course.language, icon: "Languages" },
//                                         { label: "Certificate", value: "Industry Recognized", icon: "Award" },
//                                     ].map((s) => (
//                                         <div key={s.label} className="flex items-center justify-between text-[12.5px]">
//                                             <dt className="flex items-center gap-2 text-gray-400">
//                                                 <LucideIcon name={s.icon} size={13} color={course.accentHex} strokeWidth={2} />
//                                                 {s.label}
//                                             </dt>
//                                             <dd className="text-white font-semibold text-right">{s.value}</dd>
//                                         </div>
//                                     ))}
//                                 </dl>

//                                 {/* CTA Button */}
//                                 <a
//                                     href={`https://wa.me/919675903348?text=${encodeURIComponent(`Hi! I want to enroll in ${course.name}. Please share details.`)}`}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="relative mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm font-syne text-[#031a2b]"
//                                     style={{
//                                         background: `linear-gradient(135deg, ${course.accentHex}, ${course.accentHex}dd)`,
//                                         boxShadow: `0 10px 25px ${course.accentHex}40`,
//                                     }}
//                                 >
//                                     <LucideIcon name="MessageCircle" size={16} color="#031a2b" strokeWidth={2.5} />
//                                     Enquire on WhatsApp
//                                 </a>

//                                 {/* Note */}
//                                 <p className="relative text-center text-[11px] text-gray-500 mt-3">
//                                     Contact us for fee details &amp; counselling
//                                 </p>
//                             </aside>
//                         </Reveal>
//                     </div>
//                 </section>

//                 {/* HIGHLIGHTS */}
//                 <section className="px-10 py-20 bg-[#061826]">
//                     <div className="max-w-[1240px] mx-auto">
//                         <Reveal>
//                             <div className="text-center mb-12">
//                                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Course Highlights</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white">
//                                     What Makes This Course{" "}
//                                     <span
//                                         className="bg-clip-text text-transparent"
//                                         style={{ backgroundImage: `linear-gradient(135deg, ${course.accentHex}, #fbbf24)` }}
//                                     >
//                                         Special
//                                     </span>
//                                 </h2>
//                             </div>
//                         </Reveal>

//                         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                             {course.highlights.map((h, i) => (
//                                 <Reveal key={h} delay={i * 60}>
//                                     <li className="flex items-start gap-3 p-5 rounded-2xl bg-gradient-to-br from-[#082c44]/80 to-[#030f1a]/90 border border-cyan-500/15 hover:border-cyan-500/40 hover:-translate-y-1 transition-all">
//                                         <div
//                                             className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
//                                             style={{ background: `${course.accentHex}15`, border: `1px solid ${course.accentHex}40` }}
//                                         >
//                                             <LucideIcon name="CheckCircle2" size={20} color={course.accentHex} strokeWidth={2.5} />
//                                         </div>
//                                         <div className="text-[14px] text-gray-200 font-medium leading-relaxed pt-1.5">{h}</div>
//                                     </li>
//                                 </Reveal>
//                             ))}
//                         </ul>
//                     </div>
//                 </section>

//                 {/* WHO + TOOLS */}
//                 <section className="px-10 py-20 bg-[#030f1a]">
//                     <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
//                         <Reveal direction="left">
//                             <div className="p-8 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 h-full">
//                                 <div className="flex items-center gap-3 mb-6">
//                                     <div
//                                         className="w-12 h-12 rounded-xl flex items-center justify-center"
//                                         style={{ background: `${course.accentHex}15`, border: `1px solid ${course.accentHex}40` }}
//                                     >
//                                         <LucideIcon name="Users" size={22} color={course.accentHex} strokeWidth={2} />
//                                     </div>
//                                     <div>
//                                         <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-1">// Perfect For</div>
//                                         <h2 className="font-syne font-extrabold text-xl text-white">Who Is This Course For?</h2>
//                                     </div>
//                                 </div>
//                                 <ul className="space-y-3">
//                                     {course.whoIsItFor.map((person) => (
//                                         <li key={person} className="flex items-start gap-3 text-[14px] text-gray-300">
//                                             <span className="flex-shrink-0 mt-0.5"><LucideIcon name="ArrowRight" size={16} color={course.accentHex} strokeWidth={2.5} /></span>
//                                             <span>{person}</span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </Reveal>

//                         <Reveal direction="right">
//                             <div className="p-8 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-amber-500/20 h-full">
//                                 <div className="flex items-center gap-3 mb-6">
//                                     <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-amber-500/15 border border-amber-500/40">
//                                         <LucideIcon name="Wrench" size={22} color="#fbbf24" strokeWidth={2} />
//                                     </div>
//                                     <div>
//                                         <div className="text-xs font-bold tracking-[2px] uppercase text-amber-400 mb-1">// Industry Tools</div>
//                                         <h2 className="font-syne font-extrabold text-xl text-white">Tools You&apos;ll Master</h2>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-wrap gap-2">
//                                     {course.tools.map((tool) => (
//                                         <span
//                                             key={tool}
//                                             className="px-3.5 py-2 rounded-full text-[12.5px] font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 transition-colors"
//                                         >
//                                             {tool}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>
//                         </Reveal>
//                     </div>
//                 </section>

//                 {/* CURRICULUM */}
//                 <section className="px-10 py-20 bg-[#061826] relative overflow-hidden">
//                     <div
//                         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-3xl pointer-events-none"
//                         style={{ background: `${course.accentHex}08` }}
//                     />

//                     <div className="max-w-[1240px] mx-auto relative z-10">
//                         <Reveal>
//                             <div className="text-center mb-12">
//                                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Detailed Curriculum</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                                     {course.curriculum.length}-Module{" "}
//                                     <span
//                                         className="bg-clip-text text-transparent"
//                                         style={{ backgroundImage: `linear-gradient(135deg, ${course.accentHex}, #fbbf24)` }}
//                                     >
//                                         Learning Path
//                                     </span>
//                                 </h2>
//                                 <p className="text-sm text-gray-400 max-w-[600px] mx-auto leading-relaxed">
//                                     Structured curriculum designed to take you from beginner to job-ready professional
//                                 </p>
//                             </div>
//                         </Reveal>

//                         <ol className="space-y-4">
//                             {course.curriculum.map((module, idx) => (
//                                 <Reveal key={module.title} delay={idx * 60}>
//                                     <li
//                                         className="rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border transition-all hover:-translate-y-1 overflow-hidden"
//                                         style={{ borderColor: `${course.accentHex}25` }}
//                                     >
//                                         <article className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-5 p-6">
//                                             <div className="flex md:flex-col items-center gap-3 md:gap-2">
//                                                 <div
//                                                     className="w-16 h-16 rounded-2xl flex items-center justify-center font-syne font-extrabold text-2xl"
//                                                     style={{
//                                                         background: `linear-gradient(135deg, ${course.accentHex}, ${course.accentHex}dd)`,
//                                                         color: "#031a2b",
//                                                         boxShadow: `0 8px 20px ${course.accentHex}30`,
//                                                     }}
//                                                 >
//                                                     {String(idx + 1).padStart(2, "0")}
//                                                 </div>
//                                             </div>
//                                             <div>
//                                                 <h3 className="font-syne font-bold text-lg text-white mb-3">{module.title}</h3>
//                                                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                                                     {module.topics.map((topic) => (
//                                                         <li key={topic} className="flex items-center gap-2 text-[13px] text-gray-300">
//                                                             <LucideIcon name="Check" size={14} color={course.accentHex} strokeWidth={3} />
//                                                             {topic}
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             </div>
//                                         </article>
//                                     </li>
//                                 </Reveal>
//                             ))}
//                         </ol>
//                     </div>
//                 </section>

//                 {/* CAREERS — NO SALARY */}
//                 <section className="px-10 py-20 bg-[#030f1a]">
//                     <div className="max-w-[1240px] mx-auto">
//                         <Reveal>
//                             <div className="text-center mb-12">
//                                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Career Opportunities</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                                     Where This Course{" "}
//                                     <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">Takes You</span>
//                                 </h2>
//                                 <p className="text-sm text-gray-400 max-w-[600px] mx-auto leading-relaxed">
//                                     Industry-ready skills that open multiple career paths
//                                 </p>
//                             </div>
//                         </Reveal>

//                         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
//                             {course.careers.map((c, i) => (
//                                 <Reveal key={c.role} delay={i * 80}>
//                                     <li className="p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-amber-500/20 text-center hover:border-amber-500/50 hover:-translate-y-1 transition-all hover:shadow-lg hover:shadow-amber-500/10">
//                                         <div className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-amber-500/15 border border-amber-500/40">
//                                             <LucideIcon name="Briefcase" size={26} color="#fbbf24" strokeWidth={2} />
//                                         </div>
//                                         <h3 className="font-syne font-bold text-base text-white leading-tight">{c.role}</h3>
//                                     </li>
//                                 </Reveal>
//                             ))}
//                         </ul>
//                     </div>
//                 </section>

//                 {/* PROJECTS */}
//                 <section className="px-10 py-20 bg-[#061826]">
//                     <div className="max-w-[1240px] mx-auto">
//                         <Reveal>
//                             <div className="text-center mb-12">
//                                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Hands-On Projects</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                                     Build a{" "}
//                                     <span
//                                         className="bg-clip-text text-transparent"
//                                         style={{ backgroundImage: `linear-gradient(135deg, ${course.accentHex}, #fbbf24)` }}
//                                     >
//                                         Portfolio That Hires
//                                     </span>
//                                 </h2>
//                                 <p className="text-sm text-gray-400 max-w-[600px] mx-auto leading-relaxed">
//                                     Real projects you&apos;ll complete during this course — each goes into your portfolio
//                                 </p>
//                             </div>
//                         </Reveal>

//                         <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             {course.projects.map((project, i) => (
//                                 <Reveal key={project} delay={i * 60}>
//                                     <li
//                                         className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border hover:-translate-y-1 transition-all"
//                                         style={{ borderColor: `${course.accentHex}25` }}
//                                     >
//                                         <div
//                                             className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-syne font-extrabold text-lg"
//                                             style={{
//                                                 background: `linear-gradient(135deg, ${course.accentHex}, ${course.accentHex}dd)`,
//                                                 color: "#031a2b",
//                                             }}
//                                         >
//                                             {i + 1}
//                                         </div>
//                                         <div className="text-[14px] text-gray-200 font-medium leading-relaxed">{project}</div>
//                                     </li>
//                                 </Reveal>
//                             ))}
//                         </ul>
//                     </div>
//                 </section>

//                 {/* FAQ */}
//                 <section className="px-10 py-20 bg-[#030f1a]">
//                     <div className="max-w-[900px] mx-auto">
//                         <Reveal>
//                             <div className="text-center mb-12">
//                                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Frequently Asked Questions</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                                     Got{" "}
//                                     <span
//                                         className="bg-clip-text text-transparent"
//                                         style={{ backgroundImage: `linear-gradient(135deg, ${course.accentHex}, #fbbf24)` }}
//                                     >
//                                         Questions?
//                                     </span>
//                                 </h2>
//                                 <p className="text-sm text-gray-400 leading-relaxed">
//                                     Everything you need to know about the {course.name}
//                                 </p>
//                             </div>
//                         </Reveal>

//                         <div className="space-y-4">
//                             {course.faqs.map((faq, i) => (
//                                 <Reveal key={faq.question} delay={i * 80}>
//                                     <details className="group rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 overflow-hidden transition-all hover:border-cyan-500/40">
//                                         <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
//                                             <h3 className="font-syne font-bold text-[15px] text-white flex-1">{faq.question}</h3>
//                                             <div
//                                                 className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-open:rotate-45"
//                                                 style={{ background: `${course.accentHex}15`, border: `1px solid ${course.accentHex}40` }}
//                                             >
//                                                 <LucideIcon name="Plus" size={18} color={course.accentHex} strokeWidth={2.5} />
//                                             </div>
//                                         </summary>
//                                         <div className="px-5 pb-5 text-[14px] text-gray-300 leading-relaxed border-t border-cyan-500/15 pt-4">
//                                             {faq.answer}
//                                         </div>
//                                     </details>
//                                 </Reveal>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* RELATED COURSES */}
//                 {relatedCourses.length > 0 && (
//                     <section className="px-10 py-20 bg-[#061826]">
//                         <div className="max-w-[1240px] mx-auto">
//                             <Reveal>
//                                 <div className="text-center mb-12">
//                                     <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Related Courses</div>
//                                     <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                                         Explore More{" "}
//                                         <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                                             {course.category === "media" ? "Creative" : "Tech"} Courses
//                                         </span>
//                                     </h2>
//                                 </div>
//                             </Reveal>

//                             <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
//                                 {relatedCourses.map((rc, i) => (
//                                     <Reveal key={rc.slug} delay={i * 80}>
//                                         <li className="h-full">
//                                             <Link href={`/courses/${rc.slug}`} className="block h-full">
//                                                 <article
//                                                     className="h-full p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border transition-all hover:-translate-y-1.5 hover:shadow-2xl group"
//                                                     style={{ borderColor: `${rc.accentHex}25` }}
//                                                 >
//                                                     <div
//                                                         className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
//                                                         style={{ background: `${rc.accentHex}15`, border: `1px solid ${rc.accentHex}40` }}
//                                                     >
//                                                         <LucideIcon name={rc.icon} size={22} color={rc.accentHex} strokeWidth={2} />
//                                                     </div>
//                                                     <h3 className="font-syne font-bold text-lg text-white mb-2 leading-tight">{rc.name}</h3>
//                                                     <p className="text-[13px] text-gray-400 mb-4 line-clamp-2">{rc.tagline}</p>
//                                                     <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-4">
//                                                         <LucideIcon name="Clock" size={12} color={rc.accentHex} strokeWidth={2.5} />
//                                                         {rc.duration}
//                                                     </div>
//                                                     <div className="inline-flex items-center gap-1.5 text-[12px] font-bold" style={{ color: rc.accentHex }}>
//                                                         View Details
//                                                         <LucideIcon name="ArrowRight" size={12} color={rc.accentHex} strokeWidth={2.5} />
//                                                     </div>
//                                                 </article>
//                                             </Link>
//                                         </li>
//                                     </Reveal>
//                                 ))}
//                             </ul>

//                             <div className="text-center mt-10">
//                                 <Link
//                                     href="/courses"
//                                     className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[13px] font-syne tracking-wide bg-transparent border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all"
//                                 >
//                                     View All Courses
//                                     <LucideIcon name="ArrowRight" size={14} color="#22d3ee" strokeWidth={2.5} />
//                                 </Link>
//                             </div>
//                         </div>
//                     </section>
//                 )}

//                 <CTASection
//                     title="Ready to Master"
//                     highlight={course.name.split(" ").slice(0, 2).join(" ") + "?"}
//                     desc={`Join AV Academy's ${course.name} and transform your career with industry-ready skills, real projects, and placement support.`}
//                 />
//             </main>
//             <Footer />
//             <WAFloat />
//         </>
//     );
// }


// app/courses/[slug]/page.tsx
// ✅ Server Component — SEO already sahi hai, sirf mobile responsive kiya

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import LucideIcon from "@/components/LucideIcon";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WAFloat from "@/components/WAFloat";
import { CTASection } from "@/components/PageSections";
import { Reveal } from "@/components/ScrollReveal";
import { COURSES, getCourseBySlug, getAllCourseSlugs, SITE_URL } from "@/lib/coursesData";

// ── Static generation ─────────────────────────────────────────────────────
export function generateStaticParams() {
    return getAllCourseSlugs().map((slug) => ({ slug }));
}

// ── Dynamic SEO metadata ──────────────────────────────────────────────────
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const course = getCourseBySlug(slug);

    if (!course) {
        return {
            title: "Course Not Found | AV Academy",
            description: "The requested course could not be found.",
        };
    }

    const canonicalUrl = `${SITE_URL}/courses/${course.slug}`;

    return {
        title: course.seoTitle,
        description: course.seoDescription,
        keywords: course.seoKeywords,
        authors: [{ name: "AV Academy", url: SITE_URL }],
        creator: "AV Academy Lucknow",
        publisher: "AV Academy",
        alternates: { canonical: canonicalUrl },
        openGraph: {
            title: course.seoTitle,
            description: course.seoDescription,
            url: canonicalUrl,
            siteName: "AV Academy Lucknow",
            locale: "en_IN",
            type: "website",
            images: [
                {
                    url: `${SITE_URL}/og-images/${course.slug}.jpg`,
                    width: 1200,
                    height: 630,
                    alt: course.name,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: course.seoTitle,
            description: course.seoDescription,
            images: [`${SITE_URL}/og-images/${course.slug}.jpg`],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        category: course.category === "media" ? "Creative Arts Education" : "Technology Education",
    };
}

// ── Page ──────────────────────────────────────────────────────────────────
export default async function CourseDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const course = getCourseBySlug(slug);

    if (!course) notFound();

    const canonicalUrl = `${SITE_URL}/courses/${course.slug}`;

    const relatedCourses = COURSES.filter(
        (c) => c.category === course.category && c.slug !== course.slug
    ).slice(0, 3);

    // ── JSON-LD ───────────────────────────────────────────────────────────
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: course.name,
        description: course.description,
        provider: {
            "@type": "EducationalOrganization",
            name: "AV Academy",
            url: SITE_URL,
            address: {
                "@type": "PostalAddress",
                streetAddress: "3rd Floor, Sai Tower, Raibareli Rd, near Dental College, Vrindavan Colony",
                addressLocality: "Lucknow",
                addressRegion: "Uttar Pradesh",
                postalCode: "226014",
                addressCountry: "IN",
            },
            telephone: "+91-7500206719",
            email: "avacademy1706@gmail.com",
        },
        url: canonicalUrl,
        educationalLevel: course.level,
        inLanguage: ["en", "hi"],
        teaches: course.tools,
        hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: course.mode.includes("Online") ? ["onsite", "online"] : ["onsite"],
            courseWorkload: course.duration,
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "1500",
            bestRating: "5",
        },
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: course.faqs.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Courses", item: `${SITE_URL}/courses` },
            { "@type": "ListItem", position: 3, name: course.name, item: canonicalUrl },
        ],
    };

    const waLink = `https://wa.me/917500206719?text=${encodeURIComponent(`Hi! I want to enroll in ${course.name}. Please share details.`)}`;

    return (
        <>
            {/* JSON-LD — server-side, no Script component needed */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <Navbar />
            <main className="bg-[#030f1a]">

                {/* ============ HERO ============ */}
                <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-8 md:px-10 overflow-hidden border-b border-cyan-500/15 bg-gradient-to-br from-[#061826] via-[#0a2436] to-[#061826]">
                    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[260px] sm:w-[460px] md:w-[600px] h-[160px] sm:h-[240px] md:h-[300px] bg-cyan-500/20 blur-3xl pointer-events-none rounded-full" />
                    <div className="absolute top-[30%] left-[4%] w-28 sm:w-44 md:w-52 h-28 sm:h-44 md:h-52 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-[10%] right-[5%] w-32 sm:w-48 md:w-60 h-32 sm:h-48 md:h-60 rounded-full pointer-events-none blur-3xl" style={{ background: `${course.accentHex}15` }} />

                    <div className="relative z-10 max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 md:gap-10 items-center">

                        {/* LEFT — Course Info */}
                        <div>
                            {/* Breadcrumb */}
                            {/* <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
                                <ol className="inline-flex items-center gap-1.5 text-[10px] sm:text-[12px] text-gray-500 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#082c44]/60 border border-cyan-500/15 list-none m-0">
                                    <li className="inline-flex items-center px-0.5">
                                        <Link href="/" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">Home</Link>
                                    </li>
                                    <li className="inline-flex items-center" aria-hidden="true"><LucideIcon name="ChevronRight" size={10} color="#6b7280" /></li>
                                    <li className="inline-flex items-center px-0.5">
                                        <Link href="/courses" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">Courses</Link>
                                    </li>
                                    <li className="inline-flex items-center" aria-hidden="true"><LucideIcon name="ChevronRight" size={10} color="#6b7280" /></li>
                                    <li className="inline-flex items-center px-0.5">
                                        <span className="text-gray-300" aria-current="page">{course.name.split(" ")[0]}</span>
                                    </li>
                                </ol>
                            </nav> */}

                            <span
                                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[2px] uppercase mb-4 sm:mb-5 border"
                                style={{ background: `${course.accentHex}15`, borderColor: `${course.accentHex}50`, color: course.accentHex, boxShadow: `0 0 30px ${course.accentHex}30` }}
                            >
                                <LucideIcon name={course.icon} size={11} color={course.accentHex} strokeWidth={2} />
                                {course.badge} · AV Academy
                            </span>

                            <h1 className="font-syne font-extrabold text-[clamp(1.7rem,5vw,3rem)] leading-[1.1] tracking-tight text-white mb-3 sm:mb-4">
                                {course.name.split(" ").slice(0, -1).join(" ")}{" "}
                                <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, ${course.accentHex}, #fbbf24)` }}>
                                    {course.name.split(" ").slice(-1)}
                                </span>
                            </h1>

                            <p className="text-sm sm:text-base text-gray-300 mb-2 sm:mb-3 font-medium">{course.tagline}</p>
                            <p className="text-xs sm:text-sm text-gray-400 mb-5 sm:mb-7 leading-relaxed max-w-[640px]">{course.description}</p>

                            {/* Meta chips */}
                            <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                                {[
                                    { icon: "Clock", value: course.duration },
                                    { icon: "Laptop", value: course.mode },
                                    { icon: "TrendingUp", value: course.level },
                                    { icon: "Languages", value: course.language },
                                ].map((item) => (
                                    <div key={item.value} className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-[#082c44]/80 border border-cyan-500/25 text-gray-300">
                                        <LucideIcon name={item.icon} size={11} color="#22d3ee" strokeWidth={2.5} />
                                        {item.value}
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-2.5 sm:gap-3">
                                <a
                                    href={waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-[12.5px] sm:text-[13px] font-syne tracking-wide text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl transition-all active:scale-[0.98]"
                                    style={{ background: `linear-gradient(135deg, ${course.accentHex}, ${course.accentHex}cc)`, boxShadow: `0 10px 25px ${course.accentHex}40` }}
                                >
                                    <LucideIcon name="Rocket" size={13} color="#031a2b" strokeWidth={2.5} />
                                    Enroll Now
                                </a>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-[12.5px] sm:text-[13px] font-syne tracking-wide bg-transparent border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all active:scale-[0.98]"
                                >
                                    <LucideIcon name="Phone" size={13} color="#22d3ee" strokeWidth={2.5} />
                                    Get Counselling
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT — Info Card */}
                        <Reveal direction="right">
                            <aside
                                className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-6 sm:p-8 border-2"
                                style={{ background: "linear-gradient(145deg, rgba(8,28,44,.95), rgba(3,14,22,.98))", borderColor: `${course.accentHex}40`, boxShadow: `0 25px 60px ${course.accentHex}25` }}
                            >
                                <div className="absolute top-0 left-0 right-0 h-1 opacity-80" style={{ background: `linear-gradient(90deg, ${course.accentHex}, #fbbf24)` }} />

                                <div
                                    className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-5 rounded-2xl flex items-center justify-center"
                                    style={{ background: `linear-gradient(135deg, ${course.accentHex}, ${course.accentHex}cc)`, boxShadow: `0 0 50px ${course.accentHex}50` }}
                                >
                                    <LucideIcon name={course.icon} size={32} color="#031a2b" strokeWidth={2} />
                                </div>

                                <div className="relative text-center mb-4 sm:mb-5">
                                    <div className="text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-[2px] font-bold mb-1.5 sm:mb-2">Course Quick Info</div>
                                    <h3
                                        className="font-syne font-extrabold text-lg sm:text-xl bg-clip-text text-transparent leading-tight"
                                        style={{ backgroundImage: `linear-gradient(135deg, ${course.accentHex}, #fbbf24)` }}
                                    >
                                        {course.badge}
                                    </h3>
                                </div>

                                <dl className="relative space-y-2 sm:space-y-2.5 pt-4 sm:pt-5 border-t border-cyan-500/15">
                                    {[
                                        { label: "Duration", value: course.duration, icon: "Clock" },
                                        { label: "Mode", value: course.mode, icon: "Laptop" },
                                        { label: "Level", value: course.level, icon: "TrendingUp" },
                                        { label: "Language", value: course.language, icon: "Languages" },
                                        { label: "Certificate", value: "Industry Recognized", icon: "Award" },
                                    ].map((s) => (
                                        <div key={s.label} className="flex items-center justify-between text-[11.5px] sm:text-[12.5px]">
                                            <dt className="flex items-center gap-1.5 sm:gap-2 text-gray-400">
                                                <LucideIcon name={s.icon} size={12} color={course.accentHex} strokeWidth={2} />
                                                {s.label}
                                            </dt>
                                            <dd className="text-white font-semibold text-right ml-2">{s.value}</dd>
                                        </div>
                                    ))}
                                </dl>

                                <a
                                    href={waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative mt-4 sm:mt-5 w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl font-bold text-[13px] sm:text-sm font-syne text-[#031a2b] active:scale-[0.98] transition-transform"
                                    style={{ background: `linear-gradient(135deg, ${course.accentHex}, ${course.accentHex}dd)`, boxShadow: `0 10px 25px ${course.accentHex}40` }}
                                >
                                    <LucideIcon name="MessageCircle" size={15} color="#031a2b" strokeWidth={2.5} />
                                    Enquire on WhatsApp
                                </a>

                                <p className="relative text-center text-[10px] sm:text-[11px] text-gray-500 mt-2.5 sm:mt-3">
                                    Contact us for fee details &amp; counselling
                                </p>
                            </aside>
                        </Reveal>
                    </div>
                </section>

                {/* ============ HIGHLIGHTS ============ */}
                <section className="px-4 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 bg-[#061826]">
                    <div className="max-w-[1240px] mx-auto">
                        <Reveal>
                            <div className="text-center mb-8 sm:mb-12">
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Course Highlights</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.5rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white">
                                    What Makes This Course{" "}
                                    <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, ${course.accentHex}, #fbbf24)` }}>
                                        Special
                                    </span>
                                </h2>
                            </div>
                        </Reveal>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                            {course.highlights.map((h, i) => (
                                <Reveal key={h} delay={i * 60}>
                                    <li className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#082c44]/80 to-[#030f1a]/90 border border-cyan-500/15 hover:border-cyan-500/40 hover:-translate-y-1 transition-all">
                                        <div
                                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                            style={{ background: `${course.accentHex}15`, border: `1px solid ${course.accentHex}40` }}
                                        >
                                            <LucideIcon name="CheckCircle2" size={18} color={course.accentHex} strokeWidth={2.5} />
                                        </div>
                                        <div className="text-[12.5px] sm:text-[14px] text-gray-200 font-medium leading-relaxed pt-1">{h}</div>
                                    </li>
                                </Reveal>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ============ WHO + TOOLS ============ */}
                <section className="px-4 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 bg-[#030f1a]">
                    <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
                        <Reveal direction="left">
                            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 h-full">
                                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${course.accentHex}15`, border: `1px solid ${course.accentHex}40` }}>
                                        <LucideIcon name="Users" size={20} color={course.accentHex} strokeWidth={2} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-0.5">// Perfect For</div>
                                        <h2 className="font-syne font-extrabold text-lg sm:text-xl text-white">Who Is This Course For?</h2>
                                    </div>
                                </div>
                                <ul className="space-y-2.5 sm:space-y-3">
                                    {course.whoIsItFor.map((person) => (
                                        <li key={person} className="flex items-start gap-2.5 sm:gap-3 text-[13px] sm:text-[14px] text-gray-300">
                                            <span className="flex-shrink-0 mt-0.5"><LucideIcon name="ArrowRight" size={14} color={course.accentHex} strokeWidth={2.5} /></span>
                                            <span>{person}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal direction="right">
                            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-amber-500/20 h-full">
                                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-amber-500/15 border border-amber-500/40">
                                        <LucideIcon name="Wrench" size={20} color="#fbbf24" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-amber-400 mb-0.5">// Industry Tools</div>
                                        <h2 className="font-syne font-extrabold text-lg sm:text-xl text-white">Tools You&apos;ll Master</h2>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {course.tools.map((tool) => (
                                        <span key={tool} className="px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-[11.5px] sm:text-[12.5px] font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 transition-colors">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* ============ CURRICULUM ============ */}
                <section className="relative px-4 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 bg-[#061826] overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[300px] sm:h-[600px] rounded-full blur-3xl pointer-events-none" style={{ background: `${course.accentHex}08` }} />

                    <div className="max-w-[1240px] mx-auto relative z-10">
                        <Reveal>
                            <div className="text-center mb-8 sm:mb-12">
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Detailed Curriculum</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.5rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
                                    {course.curriculum.length}-Module{" "}
                                    <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, ${course.accentHex}, #fbbf24)` }}>
                                        Learning Path
                                    </span>
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-400 max-w-[580px] mx-auto leading-relaxed px-2">
                                    Structured curriculum designed to take you from beginner to job-ready professional
                                </p>
                            </div>
                        </Reveal>

                        <ol className="space-y-3 sm:space-y-4">
                            {course.curriculum.map((module, idx) => (
                                <Reveal key={module.title} delay={idx * 60}>
                                    <li
                                        className="rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border transition-all hover:-translate-y-0.5 overflow-hidden"
                                        style={{ borderColor: `${course.accentHex}25` }}
                                    >
                                        <article className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 sm:gap-5 p-5 sm:p-6">
                                            <div className="flex sm:flex-col items-center gap-3 sm:gap-2">
                                                <div
                                                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-syne font-extrabold text-xl sm:text-2xl flex-shrink-0"
                                                    style={{ background: `linear-gradient(135deg, ${course.accentHex}, ${course.accentHex}dd)`, color: "#031a2b", boxShadow: `0 8px 20px ${course.accentHex}30` }}
                                                >
                                                    {String(idx + 1).padStart(2, "0")}
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-syne font-bold text-base sm:text-lg text-white mb-2 sm:mb-3">{module.title}</h3>
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                                                    {module.topics.map((topic) => (
                                                        <li key={topic} className="flex items-center gap-2 text-[12px] sm:text-[13px] text-gray-300">
                                                            <LucideIcon name="Check" size={12} color={course.accentHex} strokeWidth={3} />
                                                            {topic}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </article>
                                    </li>
                                </Reveal>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* ============ CAREERS ============ */}
                <section className="px-4 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 bg-[#030f1a]">
                    <div className="max-w-[1240px] mx-auto">
                        <Reveal>
                            <div className="text-center mb-8 sm:mb-12">
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Career Opportunities</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.5rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
                                    Where This Course{" "}
                                    <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">Takes You</span>
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-400 max-w-[560px] mx-auto leading-relaxed px-2">
                                    Industry-ready skills that open multiple career paths
                                </p>
                            </div>
                        </Reveal>

                        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
                            {course.careers.map((c, i) => (
                                <Reveal key={c.role} delay={i * 80}>
                                    <li className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-amber-500/20 text-center hover:border-amber-500/50 hover:-translate-y-1 transition-all hover:shadow-lg hover:shadow-amber-500/10">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-2xl flex items-center justify-center bg-amber-500/15 border border-amber-500/40">
                                            <LucideIcon name="Briefcase" size={22} color="#fbbf24" strokeWidth={2} />
                                        </div>
                                        <h3 className="font-syne font-bold text-xs sm:text-base text-white leading-tight">{c.role}</h3>
                                    </li>
                                </Reveal>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ============ PROJECTS ============ */}
                <section className="px-4 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 bg-[#061826]">
                    <div className="max-w-[1240px] mx-auto">
                        <Reveal>
                            <div className="text-center mb-8 sm:mb-12">
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Hands-On Projects</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.5rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
                                    Build a{" "}
                                    <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, ${course.accentHex}, #fbbf24)` }}>
                                        Portfolio That Hires
                                    </span>
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-400 max-w-[560px] mx-auto leading-relaxed px-2">
                                    Real projects you&apos;ll complete during this course — each goes into your portfolio
                                </p>
                            </div>
                        </Reveal>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                            {course.projects.map((project, i) => (
                                <Reveal key={project} delay={i * 60}>
                                    <li
                                        className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border hover:-translate-y-0.5 transition-all"
                                        style={{ borderColor: `${course.accentHex}25` }}
                                    >
                                        <div
                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-syne font-extrabold text-base sm:text-lg"
                                            style={{ background: `linear-gradient(135deg, ${course.accentHex}, ${course.accentHex}dd)`, color: "#031a2b" }}
                                        >
                                            {i + 1}
                                        </div>
                                        <div className="text-[12.5px] sm:text-[14px] text-gray-200 font-medium leading-relaxed">{project}</div>
                                    </li>
                                </Reveal>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ============ FAQ ============ */}
                <section className="px-4 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 bg-[#030f1a]">
                    <div className="max-w-[900px] mx-auto">
                        <Reveal>
                            <div className="text-center mb-8 sm:mb-12">
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Frequently Asked Questions</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.5rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
                                    Got{" "}
                                    <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, ${course.accentHex}, #fbbf24)` }}>
                                        Questions?
                                    </span>
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                                    Everything you need to know about the {course.name}
                                </p>
                            </div>
                        </Reveal>

                        <div className="space-y-3 sm:space-y-4">
                            {course.faqs.map((faq, i) => (
                                <Reveal key={faq.question} delay={i * 80}>
                                    <details className="group rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 overflow-hidden transition-all hover:border-cyan-500/40">
                                        <summary className="flex items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 cursor-pointer list-none">
                                            <h3 className="font-syne font-bold text-[13.5px] sm:text-[15px] text-white flex-1 text-left">{faq.question}</h3>
                                            <div
                                                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-open:rotate-45"
                                                style={{ background: `${course.accentHex}15`, border: `1px solid ${course.accentHex}40` }}
                                            >
                                                <LucideIcon name="Plus" size={16} color={course.accentHex} strokeWidth={2.5} />
                                            </div>
                                        </summary>
                                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-[13px] sm:text-[14px] text-gray-300 leading-relaxed border-t border-cyan-500/15 pt-3 sm:pt-4">
                                            {faq.answer}
                                        </div>
                                    </details>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============ RELATED COURSES ============ */}
                {relatedCourses.length > 0 && (
                    <section className="px-4 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 bg-[#061826]">
                        <div className="max-w-[1240px] mx-auto">
                            <Reveal>
                                <div className="text-center mb-8 sm:mb-12">
                                    <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Related Courses</div>
                                    <h2 className="font-syne font-extrabold text-[clamp(1.5rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
                                        Explore More{" "}
                                        <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
                                            {course.category === "media" ? "Creative" : "Tech"} Courses
                                        </span>
                                    </h2>
                                </div>
                            </Reveal>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
                                {relatedCourses.map((rc, i) => (
                                    <Reveal key={rc.slug} delay={i * 80}>
                                        <li className="h-full">
                                            <Link href={`/courses/${rc.slug}`} className="block h-full">
                                                <article
                                                    className="h-full p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border transition-all hover:-translate-y-1 sm:hover:-translate-y-1.5 hover:shadow-2xl group active:scale-[0.99]"
                                                    style={{ borderColor: `${rc.accentHex}25` }}
                                                >
                                                    <div
                                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform"
                                                        style={{ background: `${rc.accentHex}15`, border: `1px solid ${rc.accentHex}40` }}
                                                    >
                                                        <LucideIcon name={rc.icon} size={19} color={rc.accentHex} strokeWidth={2} />
                                                    </div>
                                                    <h3 className="font-syne font-bold text-base sm:text-lg text-white mb-1.5 sm:mb-2 leading-tight">{rc.name}</h3>
                                                    <p className="text-[12px] sm:text-[13px] text-gray-400 mb-3 sm:mb-4 line-clamp-2">{rc.tagline}</p>
                                                    <div className="flex items-center gap-2 text-[11px] sm:text-[12px] text-gray-500 mb-3 sm:mb-4">
                                                        <LucideIcon name="Clock" size={11} color={rc.accentHex} strokeWidth={2.5} />
                                                        {rc.duration}
                                                    </div>
                                                    <div className="inline-flex items-center gap-1.5 text-[12px] font-bold" style={{ color: rc.accentHex }}>
                                                        View Details
                                                        <LucideIcon name="ArrowRight" size={11} color={rc.accentHex} strokeWidth={2.5} />
                                                    </div>
                                                </article>
                                            </Link>
                                        </li>
                                    </Reveal>
                                ))}
                            </ul>

                            <div className="text-center mt-8 sm:mt-10">
                                <Link
                                    href="/courses"
                                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-[12.5px] sm:text-[13px] font-syne tracking-wide bg-transparent border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all active:scale-[0.98]"
                                >
                                    View All Courses
                                    <LucideIcon name="ArrowRight" size={13} color="#22d3ee" strokeWidth={2.5} />
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                <CTASection
                    title="Ready to Master"
                    highlight={course.name.split(" ").slice(0, 2).join(" ") + "?"}
                    desc={`Join AV Academy's ${course.name} and transform your career with industry-ready skills, real projects, and placement support.`}
                />
            </main>
            <Footer />
            <WAFloat />
        </>
    );
}