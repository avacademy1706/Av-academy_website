// import LucideIcon from "@/components/LucideIcon";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WAFloat from "@/components/WAFloat";
// import { Reveal } from "@/components/ScrollReveal";
// import Link from "next/link";

// export const metadata = { title: "AI Masterclass | AV Academy", description: "Learn AI, Machine Learning, ChatGPT, Midjourney and more — online & offline in Lucknow" };

// const learn = [
//   { num: "01", icon: "🤖", title: "Core AI & ML Essentials", items: ["AI & Machine Learning Fundamentals", "ChatGPT, DALL·E, Midjourney, Gemini", "RunwayML for AI Video Generation"], tag: "Build a rock-solid AI foundation." },
//   { num: "02", icon: "🎨", title: "Create with AI Tools", items: ["AI Art, Videos, Voice & Content Creation", "Build Your Own AI Tools & Projects", "Portfolio Building + Certification"], tag: "Create assets that command real rates." },
//   { num: "03", icon: "🧩", title: "Advanced AI Concepts", items: ["Agentic AI Fundamentals", "RAG (Retrieval Augmented Generation)", "LLM Workflows & Prompt Engineering"], tag: "Lead the AI revolution in your field." },
// ];

// export default function AIMasterclassPage() {
//   return (
//     <>
//       <Navbar />
//       <main>
//         {/* Hero */}
//         <section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden pt-[72px]" style={{ background: "linear-gradient(160deg,var(--bg2),var(--bg),var(--bg3))" }}>
//           <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 40%,rgba(0,180,216,.12) 0%,transparent 60%)" }} />
//           <div className="relative z-10 px-6 py-20">
//             <p className="font-black text-[12px] tracking-[5px] uppercase mb-3" style={{ fontFamily: "var(--font-syne)", color: "var(--cyan2)", animation: "fadeUp .8s ease both" }}>
//               AV ACADEMY — WHERE EDITS COME TO LIFE
//             </p>
//             <div className="inline-block text-[12.5px] px-4 py-1.5 rounded-full font-semibold mb-6" style={{ background: "rgba(245,158,11,.1)", border: "1px solid rgba(245,158,11,.3)", color: "var(--amber2)", animation: "fadeUp .8s ease .1s both" }}>
//               🔥 Ab skill bhi, earning bhi — sab AI se!
//             </div>
//             <h1 className="font-black leading-[1.05] tracking-tight mb-5 text-[clamp(2rem,5vw,4.5rem)]" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-2px", animation: "fadeUp .8s ease .2s both" }}>
//               <span style={{ background: "linear-gradient(135deg,var(--amber),var(--amber2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>ARTIFICIAL</span>
//               <br />
//               <span style={{ background: "linear-gradient(135deg,var(--cyan2),var(--blue2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>INTELLIGENCE</span>
//               <br />MASTERCLASSES
//             </h1>
//             <p className="text-[16px] max-w-[680px] mx-auto leading-[1.85] mb-9" style={{ color: "var(--gray2)", animation: "fadeUp .8s ease .3s both" }}>
//               AI Isn&apos;t the Future. It&apos;s the Present. From ChatGPT and Midjourney to self-driving cars — AI is shaping careers, businesses, and the world. Don&apos;t be left behind.
//             </p>
//             <div className="flex gap-3.5 justify-center flex-wrap" style={{ animation: "fadeUp .8s ease .4s both" }}>
//               <Link href="/contact" className="shimmer-btn inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[14px] relative overflow-hidden" style={{ fontFamily: "var(--font-syne)", background: "linear-gradient(135deg,var(--amber),var(--amber2))", color: "var(--bg)" }}>
//                 <i className="fas fa-bolt" /> Join Us Now
//               </Link>
//               <Link href="/courses" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[14px] transition-all hover:scale-[1.02]" style={{ fontFamily: "var(--font-syne)", background: "rgba(245,158,11,.1)", color: "var(--amber2)", border: "1px solid rgba(245,158,11,.35)" }}>
//                 View All Courses
//               </Link>
//             </div>
//             <div className="font-black text-[14px] tracking-[3px] uppercase mt-8" style={{ fontFamily: "var(--font-syne)", animation: "fadeUp .8s ease .5s both" }}>
//               LEARN AI.{" "}
//               <span style={{ background: "linear-gradient(135deg,var(--amber),var(--amber2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>CREATE MAGIC.</span>{" "}
//               <span style={{ background: "linear-gradient(135deg,var(--cyan2),var(--blue2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>LEAD THE CHANGE.</span>
//             </div>
//           </div>
//         </section>

//         {/* What You'll Learn */}
//         <section className="px-6 py-20" style={{ background: "var(--bg2)" }}>
//           <div className="max-w-[1300px] mx-auto">
//             <div className="inline-flex items-center px-6 py-2.5 rounded-md font-bold text-[12px] tracking-[2.5px] uppercase text-white mb-11" style={{ fontFamily: "var(--font-syne)", background: "linear-gradient(135deg,var(--cyan1),var(--cyan2))" }}>
//               WHAT YOU&apos;LL LEARN
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {learn.map((item, i) => (
//                 <Reveal key={item.num} delay={i * 100} className="group relative rounded-[22px] p-9 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,180,216,.2)] overflow-hidden" style={{ background: "rgba(8,28,44,.8)", border: "1px solid var(--border)" }}>
//                   <div className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{ background: "linear-gradient(90deg,var(--cyan1),var(--cyan2))" }} />
//                   <div className="font-black text-[4rem] leading-none mb-0.5" style={{ fontFamily: "var(--font-syne)", color: "rgba(0,180,216,.06)" }}>{item.num}</div>
//                   <div style={{ marginBottom: "10px", color: "var(--cyan2)" }}><LucideIcon name={item.icon} size={36} color="var(--cyan2)" strokeWidth={1.5} /></div>
//                   <h3 className="font-bold text-[1.1rem] mb-4" style={{ fontFamily: "var(--font-syne)", color: "var(--amber2)" }}>{item.title}</h3>
//                   <ul className="space-y-0 mb-4 list-none">
//                     {item.items.map((li) => (
//                       <li key={li} className="text-[13.5px] py-1.5 pl-4 relative border-b" style={{ color: "var(--gray2)", borderColor: "rgba(255,255,255,.04)" }}>
//                         <span className="absolute left-0" style={{ color: "var(--cyan2)" }}>▸</span> {li}
//                       </li>
//                     ))}
//                   </ul>
//                   <p className="text-[13px] italic font-medium" style={{ color: "var(--cyan3)" }}>→ {item.tag}</p>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="px-6 py-28 text-center relative overflow-hidden" style={{ background: "linear-gradient(160deg,var(--bg3),var(--bg))" }}>
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse,rgba(0,180,216,.1) 0%,transparent 70%)" }} />
//           <Reveal className="relative z-10">
//             <h2 className="font-black leading-tight tracking-tight mb-5 text-[clamp(1.9rem,3.5vw,3.2rem)]" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-1px" }}>
//               Start Your{" "}
//               <span style={{ background: "linear-gradient(135deg,var(--amber),var(--amber2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AI Journey Today</span>
//             </h2>
//             <p className="max-w-[540px] mx-auto leading-[1.85] mb-10 text-[15px]" style={{ color: "var(--gray2)" }}>
//               Join hundreds of students who&apos;ve transformed their careers with AV Academy&apos;s AI Masterclass.
//             </p>
//             <div className="flex gap-3.5 justify-center flex-wrap">
//               <Link href="/contact" className="shimmer-btn inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[14px] relative overflow-hidden" style={{ fontFamily: "var(--font-syne)", background: "linear-gradient(135deg,var(--amber),var(--amber2))", color: "var(--bg)" }}>
//                 <i className="fas fa-bolt" /> Enquire Now
//               </Link>
//               <a href="https://wa.me/919675903348" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[14px]" style={{ fontFamily: "var(--font-syne)", background: "rgba(245,158,11,.1)", color: "var(--amber2)", border: "1px solid rgba(245,158,11,.35)" }}>
//                 WhatsApp Us
//               </a>
//             </div>
//           </Reveal>
//         </section>
//       </main>
//       <Footer />
//       <WAFloat />
//     </>
//   );
// }


// app/ai-masterclass/page.tsx
// Enhanced AI Masterclass page — smaller hero, more sections, cyan theme

// import type { Metadata } from "next";
// import Link from "next/link";
// import Script from "next/script";
// import LucideIcon from "@/components/LucideIcon";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WAFloat from "@/components/WAFloat";
// import { Reveal } from "@/components/ScrollReveal";

// const SITE_URL = "https://avacademy.co.in";

// export const metadata: Metadata = {
//   title: "AI Masterclass in Lucknow | ChatGPT, Midjourney & Prompt Engineering | AV Academy",
//   description: "Master AI tools at AV Academy Lucknow. Learn ChatGPT, Midjourney, RunwayML, Agentic AI, RAG & Prompt Engineering. 6-8 week comprehensive program with hands-on projects & certification.",
//   keywords: ["ai masterclass lucknow", "chatgpt course", "midjourney training", "ai course india", "prompt engineering", "ai certification", "machine learning lucknow", "ai tools training", "generative ai course"],
//   alternates: { canonical: `${SITE_URL}/ai-masterclass` },
//   openGraph: {
//     title: "AI Masterclass | AV Academy Lucknow",
//     description: "Master ChatGPT, Midjourney, RunwayML & Prompt Engineering. Industry-leading AI course with certification.",
//     url: `${SITE_URL}/ai-masterclass`,
//     siteName: "AV Academy",
//     locale: "en_IN",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "AI Masterclass | AV Academy",
//     description: "Master AI tools — ChatGPT, Midjourney, RunwayML & more",
//   },
//   robots: { index: true, follow: true },
// };

// // ============ DATA ============

// const learn = [
//   {
//     num: "01",
//     icon: "Bot",
//     title: "Core AI & ML Essentials",
//     items: [
//       "AI & Machine Learning Fundamentals",
//       "ChatGPT, DALL·E, Midjourney, Gemini",
//       "RunwayML for AI Video Generation",
//       "Stable Diffusion & Image AI",
//       "Natural Language Processing Basics",
//     ],
//     tag: "Build a rock-solid AI foundation.",
//   },
//   {
//     num: "02",
//     icon: "Palette",
//     title: "Create with AI Tools",
//     items: [
//       "AI Art, Videos, Voice & Content Creation",
//       "Build Your Own AI Tools & Projects",
//       "Portfolio Building + Certification",
//       "AI for Business Applications",
//       "Monetization Strategies with AI",
//     ],
//     tag: "Create assets that command real rates.",
//   },
//   {
//     num: "03",
//     icon: "Brain",
//     title: "Advanced AI Concepts",
//     items: [
//       "Agentic AI Fundamentals",
//       "RAG (Retrieval Augmented Generation)",
//       "LLM Workflows & Prompt Engineering",
//       "API Integration & Automation",
//       "Future AI Trends & Career Paths",
//     ],
//     tag: "Lead the AI revolution in your field.",
//   },
// ];

// const stats = [
//   { num: "500+", label: "Students Trained", icon: "Users" },
//   { num: "20+", label: "AI Tools Covered", icon: "Wrench" },
//   { num: "6-8", label: "Weeks Duration", icon: "Clock" },
//   { num: "100%", label: "Hands-On Learning", icon: "Code2" },
// ];

// const highlights = [
//   "20+ AI tools covered in depth",
//   "Real industry projects to build portfolio",
//   "Hindi + English bilingual instruction",
//   "Lifetime access to course materials",
//   "Industry-recognized certification",
//   "Placement & freelancing support",
//   "Live mentorship sessions",
//   "Community of AI learners & professionals",
// ];

// const tools = [
//   "ChatGPT (GPT-4)",
//   "Claude AI",
//   "Google Gemini",
//   "Midjourney",
//   "DALL-E 3",
//   "Stable Diffusion",
//   "RunwayML",
//   "Sora (when available)",
//   "Adobe Firefly",
//   "Eleven Labs",
//   "LangChain",
//   "Pinecone Vector DB",
//   "OpenAI API",
//   "Make.com / n8n",
// ];

// const curriculum = [
//   {
//     title: "Module 1: AI Foundations",
//     topics: ["History & evolution of AI", "Types of AI (Narrow, General, Super)", "Machine Learning basics", "Neural networks intro", "Current AI landscape"],
//   },
//   {
//     title: "Module 2: ChatGPT & LLMs Mastery",
//     topics: ["ChatGPT advanced techniques", "Claude vs GPT comparison", "Custom GPTs creation", "API integrations", "Cost optimization"],
//   },
//   {
//     title: "Module 3: AI Image Generation",
//     topics: ["Midjourney mastery", "DALL-E 3 workflows", "Stable Diffusion local setup", "Image editing with AI", "Commercial use rights"],
//   },
//   {
//     title: "Module 4: AI Video & Audio",
//     topics: ["RunwayML video generation", "AI voice cloning", "Eleven Labs mastery", "Music generation tools", "Video editing with AI"],
//   },
//   {
//     title: "Module 5: Prompt Engineering",
//     topics: ["Prompt frameworks", "Chain-of-thought prompting", "Few-shot learning", "Role-based prompts", "Token optimization"],
//   },
//   {
//     title: "Module 6: Agentic AI & RAG",
//     topics: ["Agentic AI fundamentals", "RAG implementation", "LangChain workflows", "Vector databases", "Building AI agents"],
//   },
// ];

// const whoIsItFor = [
//   "Working professionals upgrading to AI skills",
//   "Content creators & marketers",
//   "Designers & video editors",
//   "Students preparing for AI careers",
//   "Business owners automating workflows",
//   "Freelancers expanding services",
// ];

// const careers = [
//   { role: "AI Content Creator", growth: "High Demand" },
//   { role: "Prompt Engineer", growth: "Top Paying" },
//   { role: "AI Product Manager", growth: "Strategic" },
//   { role: "AI Solutions Consultant", growth: "Premium Rates" },
// ];

// const projects = [
//   "Build a custom GPT for a specific industry",
//   "Create AI art portfolio (50+ pieces)",
//   "Generate AI video for a brand campaign",
//   "Develop an AI chatbot using RAG",
//   "Build an AI agent that automates workflows",
// ];

// const faqs = [
//   { question: "Do I need coding experience for this AI Masterclass?", answer: "No coding experience required! Our AI Masterclass is designed for everyone — students, professionals, business owners. We start from absolute basics and use no-code tools where possible." },
//   { question: "What's the duration of this AI course?", answer: "The complete AI Masterclass is 6-8 weeks with flexible online and offline batches. You can also opt for fast-track 4-week intensive batches." },
//   { question: "Will I get a certificate after completion?", answer: "Yes, you'll receive an industry-recognized AV Academy certificate. Plus, you'll have a portfolio of AI projects to showcase to employers or clients." },
//   { question: "Is the course online or offline?", answer: "Both! Choose between online (Zoom live + recordings) or offline (Lucknow campus). Hybrid option also available where you can attend both modes flexibly." },
//   { question: "What career opportunities are available after this course?", answer: "Many opportunities — AI Content Creator, Prompt Engineer, AI Consultant, Freelance AI Specialist. You can also use these skills to enhance your existing role or start an AI-powered business." },
//   { question: "Are AI tool subscriptions included in fees?", answer: "Some free tools are used during learning. For premium tools (ChatGPT Plus, Midjourney), we provide guidance on what to subscribe to during and after the course." },
// ];

// export default function AIMasterclassPage() {
//   // JSON-LD Schemas
//   const courseSchema = {
//     "@context": "https://schema.org",
//     "@type": "Course",
//     name: "AI Masterclass — AV Academy Lucknow",
//     description: "Comprehensive AI training covering ChatGPT, Midjourney, RunwayML, Agentic AI, RAG & Prompt Engineering",
//     provider: {
//       "@type": "EducationalOrganization",
//       name: "AV Academy",
//       url: SITE_URL,
//       telephone: "+91-9675903348",
//       email: "avacademy1706@gmail.com",
//     },
//     educationalLevel: "Beginner to Advanced",
//     inLanguage: ["en", "hi"],
//     teaches: tools,
//     aggregateRating: {
//       "@type": "AggregateRating",
//       ratingValue: "4.9",
//       ratingCount: "500",
//       bestRating: "5",
//     },
//   };

//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: faqs.map((faq) => ({
//       "@type": "Question",
//       name: faq.question,
//       acceptedAnswer: { "@type": "Answer", text: faq.answer },
//     })),
//   };

//   return (
//     <>
//       <Script id="course-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
//       <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

//       <Navbar />
//       <main className="bg-[#030f1a]">
//         {/* ============ HERO — SMALLER TEXT ============ */}
//         <section className="relative pt-36 pb-16 px-10 text-center overflow-hidden border-b border-cyan-500/15 bg-gradient-to-br from-[#061826] via-[#0a2436] to-[#061826]">
//           <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/20 blur-3xl pointer-events-none rounded-full" />
//           <div className="absolute top-[30%] left-[8%] w-52 h-52 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
//           <div className="absolute bottom-[10%] right-[10%] w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

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
//                 <li><Link href="/courses" className="text-cyan-400 font-semibold hover:text-cyan-300">Courses</Link></li>
//                 <li><LucideIcon name="ChevronRight" size={12} color="#6b7280" /></li>
//                 <li className="text-gray-300" aria-current="page">AI Masterclass</li>
//               </ol>
//             </nav>

//             {/* Tagline */}
//             <p className="font-syne font-bold text-[10px] tracking-[4px] uppercase mb-3 text-cyan-400">
//               AV ACADEMY — WHERE EDITS COME TO LIFE
//             </p>

//             {/* HOT Badge */}
//             <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[2px] uppercase mb-5 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 shadow-[0_0_30px_rgba(0,180,216,0.2)]">
//               <LucideIcon name="Flame" size={12} color="#22d3ee" strokeWidth={2.5} />
//               Most Popular Course
//             </span>

//             {/* ────── SMALLER H1 ────── */}
//             <h1 className="font-syne font-extrabold leading-[1.1] tracking-tight mb-4 text-[clamp(1.6rem,3.5vw,2.6rem)] text-white">
//               <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                 Artificial Intelligence
//               </span>
//               <br />
//               Masterclasses
//             </h1>

//             {/* Description */}
//             <p className="text-sm md:text-base text-gray-400 max-w-[680px] mx-auto leading-relaxed mb-6">
//               AI Isn&apos;t the Future. It&apos;s the Present. From ChatGPT and Midjourney to self-driving cars — AI is shaping careers, businesses, and the world. Don&apos;t be left behind.
//             </p>

//             {/* CTAs */}
//             <div className="flex flex-wrap justify-center gap-3 mb-6">
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[13px] font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all"
//               >
//                 <LucideIcon name="Zap" size={14} color="#031a2b" strokeWidth={2.5} />
//                 Join Us Now
//               </Link>
//               <Link
//                 href="/courses"
//                 className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[13px] font-syne tracking-wide bg-transparent border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all"
//               >
//                 <LucideIcon name="BookOpen" size={14} color="#22d3ee" strokeWidth={2.5} />
//                 View All Courses
//               </Link>
//             </div>

//             {/* Slogan */}
//             <div className="font-syne font-extrabold text-[11px] tracking-[3px] uppercase">
//               <span className="text-white">LEARN AI.</span>{" "}
//               <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">CREATE MAGIC.</span>{" "}
//               <span className="text-white">LEAD THE CHANGE.</span>
//             </div>
//           </div>
//         </section>

//         {/* ============ STATS BAR ============ */}
//         <section className="px-10 py-10 bg-[#061826] border-b border-cyan-500/10">
//           <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
//             {stats.map((s) => (
//               <div
//                 key={s.label}
//                 className="flex items-center gap-4 px-5 py-5 rounded-2xl bg-gradient-to-br from-[#082c44]/80 to-[#030f1a]/90 border border-cyan-500/15 hover:border-cyan-500/40 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10"
//               >
//                 <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-cyan-500/15 border border-cyan-500/40">
//                   <LucideIcon name={s.icon} size={22} color="#22d3ee" strokeWidth={2} />
//                 </div>
//                 <div>
//                   <div className="font-syne font-extrabold text-2xl leading-none text-white">{s.num}</div>
//                   <div className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold mt-1">{s.label}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ============ WHAT YOU'LL LEARN ============ */}
//         <section className="px-10 py-20 bg-[#030f1a]">
//           <div className="max-w-[1280px] mx-auto">
//             <Reveal>
//               <div className="text-center mb-14">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// What You&apos;ll Learn</div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
//                   Three Pillars of{" "}
//                   <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                     AI Mastery
//                   </span>
//                 </h2>
//                 <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
//                   From fundamentals to advanced techniques — everything you need to become AI-fluent
//                 </p>
//               </div>
//             </Reveal>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {learn.map((item, i) => (
//                 <Reveal key={item.num} delay={i * 80}>
//                   <div className="h-full relative p-7 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/25 hover:border-cyan-500/50 transition-all hover:-translate-y-1.5 hover:shadow-2xl group overflow-hidden">
//                     <div className="absolute top-0 left-0 right-0 h-[3px] opacity-60 bg-gradient-to-r from-cyan-400 to-cyan-600" />
//                     <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none bg-cyan-500/25" />

//                     <div className="font-syne font-extrabold text-6xl leading-none mb-3 text-cyan-500/10">{item.num}</div>

//                     <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative z-10 bg-cyan-500/15 border border-cyan-500/40 shadow-lg shadow-cyan-500/20">
//                       <LucideIcon name={item.icon} size={28} color="#22d3ee" strokeWidth={2} />
//                     </div>

//                     <h3 className="font-syne font-extrabold text-lg text-white mb-4 relative z-10">{item.title}</h3>

//                     <ul className="space-y-2 mb-5 relative z-10">
//                       {item.items.map((li) => (
//                         <li key={li} className="flex items-start gap-2 text-[13px] text-gray-300 leading-relaxed">
//                           <span className="flex-shrink-0 mt-0.5">
//                             <LucideIcon name="CheckCircle2" size={14} color="#22d3ee" strokeWidth={2.5} />
//                           </span>
//                           <span>{li}</span>
//                         </li>
//                       ))}
//                     </ul>

//                     <p className="text-[13px] italic font-medium pt-4 border-t border-cyan-500/20 text-cyan-400 relative z-10">
//                       → {item.tag}
//                     </p>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ HIGHLIGHTS ============ */}
//         <section className="px-10 py-20 bg-[#061826]">
//           <div className="max-w-[1240px] mx-auto">
//             <Reveal>
//               <div className="text-center mb-12">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Course Highlights</div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white">
//                   Why This{" "}
//                   <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                     Masterclass Stands Out
//                   </span>
//                 </h2>
//               </div>
//             </Reveal>

//             <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//               {highlights.map((h, i) => (
//                 <Reveal key={h} delay={i * 60}>
//                   <li className="flex items-start gap-3 p-5 rounded-2xl bg-gradient-to-br from-[#082c44]/80 to-[#030f1a]/90 border border-cyan-500/15 hover:border-cyan-500/40 hover:-translate-y-1 transition-all h-full">
//                     <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-cyan-500/15 border border-cyan-500/40">
//                       <LucideIcon name="CheckCircle2" size={20} color="#22d3ee" strokeWidth={2.5} />
//                     </div>
//                     <div className="text-[13px] text-gray-200 font-medium leading-relaxed pt-1.5">{h}</div>
//                   </li>
//                 </Reveal>
//               ))}
//             </ul>
//           </div>
//         </section>

//         {/* ============ WHO + TOOLS ============ */}
//         <section className="px-10 py-20 bg-[#030f1a]">
//           <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
//             {/* Who is it for */}
//             <Reveal direction="left">
//               <div className="p-8 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 h-full">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/40">
//                     <LucideIcon name="Users" size={22} color="#22d3ee" strokeWidth={2} />
//                   </div>
//                   <div>
//                     <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-1">// Perfect For</div>
//                     <h2 className="font-syne font-extrabold text-xl text-white">Who Is This For?</h2>
//                   </div>
//                 </div>
//                 <ul className="space-y-3">
//                   {whoIsItFor.map((person) => (
//                     <li key={person} className="flex items-start gap-3 text-[14px] text-gray-300">
//                       <div className="flex-shrink-0 mt-0.5">
//                         <LucideIcon name="ArrowRight" size={16} color="#22d3ee" strokeWidth={2.5} />
//                       </div>
//                       <span>{person}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </Reveal>

//             {/* Tools */}
//             <Reveal direction="right">
//               <div className="p-8 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 h-full">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/40">
//                     <LucideIcon name="Wrench" size={22} color="#22d3ee" strokeWidth={2} />
//                   </div>
//                   <div>
//                     <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-1">// AI Tools</div>
//                     <h2 className="font-syne font-extrabold text-xl text-white">Tools You&apos;ll Master</h2>
//                   </div>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {tools.map((tool) => (
//                     <span
//                       key={tool}
//                       className="px-3.5 py-2 rounded-full text-[12.5px] font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 transition-colors"
//                     >
//                       {tool}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </Reveal>
//           </div>
//         </section>

//         {/* ============ CURRICULUM ============ */}
//         <section className="px-10 py-20 bg-[#061826] relative overflow-hidden">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-3xl pointer-events-none bg-cyan-500/[0.04]" />

//           <div className="max-w-[1240px] mx-auto relative z-10">
//             <Reveal>
//               <div className="text-center mb-12">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Detailed Curriculum</div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                   6-Module{" "}
//                   <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                     Learning Path
//                   </span>
//                 </h2>
//                 <p className="text-sm text-gray-400 max-w-[600px] mx-auto leading-relaxed">
//                   Structured curriculum from beginner to AI expert
//                 </p>
//               </div>
//             </Reveal>

//             <ol className="space-y-4">
//               {curriculum.map((module, idx) => (
//                 <Reveal key={module.title} delay={idx * 60}>
//                   <li className="rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/25 hover:border-cyan-500/50 transition-all hover:-translate-y-1 overflow-hidden">
//                     <article className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-5 p-6">
//                       <div className="flex md:flex-col items-center gap-3 md:gap-2">
//                         <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-syne font-extrabold text-2xl bg-gradient-to-br from-cyan-500 to-cyan-400 text-[#031a2b] shadow-lg shadow-cyan-500/40">
//                           {String(idx + 1).padStart(2, "0")}
//                         </div>
//                       </div>
//                       <div>
//                         <h3 className="font-syne font-bold text-lg text-white mb-3">{module.title}</h3>
//                         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                           {module.topics.map((topic) => (
//                             <li key={topic} className="flex items-center gap-2 text-[13px] text-gray-300">
//                               <LucideIcon name="Check" size={14} color="#22d3ee" strokeWidth={3} />
//                               {topic}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </article>
//                   </li>
//                 </Reveal>
//               ))}
//             </ol>
//           </div>
//         </section>

//         {/* ============ CAREER OPPORTUNITIES ============ */}
//         <section className="px-10 py-20 bg-[#030f1a]">
//           <div className="max-w-[1240px] mx-auto">
//             <Reveal>
//               <div className="text-center mb-12">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Career Paths</div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                   Where This Course{" "}
//                   <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                     Takes You
//                   </span>
//                 </h2>
//                 <p className="text-sm text-gray-400 max-w-[600px] mx-auto leading-relaxed">
//                   AI is the most in-demand skill — these are some career paths you can pursue
//                 </p>
//               </div>
//             </Reveal>

//             <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
//               {careers.map((c, i) => (
//                 <Reveal key={c.role} delay={i * 80}>
//                   <li className="p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 text-center hover:border-cyan-500/50 hover:-translate-y-1 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
//                     <div className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/40">
//                       <LucideIcon name="Briefcase" size={26} color="#22d3ee" strokeWidth={2} />
//                     </div>
//                     <h3 className="font-syne font-bold text-base text-white mb-3 leading-tight">{c.role}</h3>
//                     <div className="pt-3 border-t border-cyan-500/15">
//                       <div className="text-[11px] uppercase tracking-wider font-bold text-cyan-400">{c.growth}</div>
//                     </div>
//                   </li>
//                 </Reveal>
//               ))}
//             </ul>
//           </div>
//         </section>

//         {/* ============ PROJECTS ============ */}
//         <section className="px-10 py-20 bg-[#061826]">
//           <div className="max-w-[1240px] mx-auto">
//             <Reveal>
//               <div className="text-center mb-12">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Hands-On Projects</div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                   Build a{" "}
//                   <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                     Portfolio That Hires
//                   </span>
//                 </h2>
//                 <p className="text-sm text-gray-400 max-w-[600px] mx-auto leading-relaxed">
//                   Real AI projects you&apos;ll complete during this masterclass
//                 </p>
//               </div>
//             </Reveal>

//             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {projects.map((project, i) => (
//                 <Reveal key={project} delay={i * 60}>
//                   <li className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/25 hover:-translate-y-1 transition-all">
//                     <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-syne font-extrabold text-lg bg-gradient-to-br from-cyan-500 to-cyan-400 text-[#031a2b]">
//                       {i + 1}
//                     </div>
//                     <div className="text-[14px] text-gray-200 font-medium leading-relaxed">{project}</div>
//                   </li>
//                 </Reveal>
//               ))}
//             </ul>
//           </div>
//         </section>

//         {/* ============ FAQ ============ */}
//         <section className="px-10 py-20 bg-[#030f1a]">
//           <div className="max-w-[900px] mx-auto">
//             <Reveal>
//               <div className="text-center mb-12">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// FAQ</div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                   Got{" "}
//                   <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                     Questions?
//                   </span>
//                 </h2>
//                 <p className="text-sm text-gray-400 leading-relaxed">
//                   Everything you need to know about the AI Masterclass
//                 </p>
//               </div>
//             </Reveal>

//             <div className="space-y-4">
//               {faqs.map((faq, i) => (
//                 <Reveal key={faq.question} delay={i * 80}>
//                   <details className="group rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 overflow-hidden transition-all hover:border-cyan-500/40">
//                     <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
//                       <h3 className="font-syne font-bold text-[15px] text-white flex-1">{faq.question}</h3>
//                       <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-open:rotate-45 bg-cyan-500/15 border border-cyan-500/40">
//                         <LucideIcon name="Plus" size={18} color="#22d3ee" strokeWidth={2.5} />
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

//         {/* ============ FINAL CTA ============ */}
//         <section className="px-10 py-24 bg-gradient-to-br from-[#030f1a] via-[#0a2436] to-[#030f1a] text-center relative overflow-hidden">
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />
//           <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

//           <div className="max-w-[900px] mx-auto relative z-10">
//             <Reveal>
//               <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-[2px] uppercase mb-6 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400">
//                 <LucideIcon name="Rocket" size={14} color="#22d3ee" strokeWidth={2} />
//                 Start Your AI Journey
//               </span>

//               <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3.5vw,2.8rem)] leading-tight tracking-tight text-white mb-5">
//                 Start Your{" "}
//                 <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                   AI Journey Today
//                 </span>
//               </h2>
//               <p className="text-base text-gray-400 max-w-[540px] mx-auto mb-9 leading-relaxed">
//                 Join hundreds of students who&apos;ve transformed their careers with AV Academy&apos;s AI Masterclass.
//               </p>

//               <div className="flex flex-wrap justify-center gap-4 mb-7">
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-[15px] font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all"
//                 >
//                   <LucideIcon name="Zap" size={18} color="#031a2b" strokeWidth={2.5} />
//                   Enquire Now
//                 </Link>
//                 <a
//                   href="https://wa.me/919675903348?text=Hi! I want to join the AI Masterclass. Please share details."
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-[15px] font-syne tracking-wide bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/40 transition-all"
//                 >
//                   <LucideIcon name="MessageCircle" size={18} color="#ffffff" strokeWidth={2.5} />
//                   WhatsApp Us
//                 </a>
//               </div>

//               <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[13px] text-gray-500">
//                 <div className="flex items-center gap-2">
//                   <LucideIcon name="Phone" size={14} color="#22d3ee" strokeWidth={2} />
//                   <span className="text-gray-400">+91-9675903348</span>
//                 </div>
//                 <div className="hidden md:block text-gray-700">·</div>
//                 <div className="flex items-center gap-2">
//                   <LucideIcon name="Mail" size={14} color="#22d3ee" strokeWidth={2} />
//                   <span className="text-gray-400">avacademy1706@gmail.com</span>
//                 </div>
//               </div>
//             </Reveal>
//           </div>
//         </section>
//       </main>
//       <Footer />
//       <WAFloat />
//     </>
//   );
// }



// app/ai-masterclass/page.tsx
// Enhanced AI Masterclass page — balanced hero size

// import type { Metadata } from "next";
// import Link from "next/link";
// import Script from "next/script";
// import LucideIcon from "@/components/LucideIcon";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WAFloat from "@/components/WAFloat";
// import { Reveal } from "@/components/ScrollReveal";

// const SITE_URL = "https://avacademy.co.in";

// export const metadata: Metadata = {
//   title: "AI Masterclass in Lucknow | ChatGPT, Midjourney & Prompt Engineering | AV Academy",
//   description: "Master AI tools at AV Academy Lucknow. Learn ChatGPT, Midjourney, RunwayML, Agentic AI, RAG & Prompt Engineering. 6-8 week comprehensive program with hands-on projects & certification.",
//   keywords: ["ai masterclass lucknow", "chatgpt course", "midjourney training", "ai course india", "prompt engineering", "ai certification", "machine learning lucknow", "ai tools training", "generative ai course"],
//   alternates: { canonical: `${SITE_URL}/ai-masterclass` },
//   openGraph: {
//     title: "AI Masterclass | AV Academy Lucknow",
//     description: "Master ChatGPT, Midjourney, RunwayML & Prompt Engineering. Industry-leading AI course with certification.",
//     url: `${SITE_URL}/ai-masterclass`,
//     siteName: "AV Academy",
//     locale: "en_IN",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "AI Masterclass | AV Academy",
//     description: "Master AI tools — ChatGPT, Midjourney, RunwayML & more",
//   },
//   robots: { index: true, follow: true },
// };

// // ============ DATA ============

// const learn = [
//   {
//     num: "01",
//     icon: "Bot",
//     title: "Core AI & ML Essentials",
//     items: [
//       "AI & Machine Learning Fundamentals",
//       "ChatGPT, DALL·E, Midjourney, Gemini",
//       "RunwayML for AI Video Generation",
//       "Stable Diffusion & Image AI",
//       "Natural Language Processing Basics",
//     ],
//     tag: "Build a rock-solid AI foundation.",
//   },
//   {
//     num: "02",
//     icon: "Palette",
//     title: "Create with AI Tools",
//     items: [
//       "AI Art, Videos, Voice & Content Creation",
//       "Build Your Own AI Tools & Projects",
//       "Portfolio Building + Certification",
//       "AI for Business Applications",
//       "Monetization Strategies with AI",
//     ],
//     tag: "Create assets that command real rates.",
//   },
//   {
//     num: "03",
//     icon: "Brain",
//     title: "Advanced AI Concepts",
//     items: [
//       "Agentic AI Fundamentals",
//       "RAG (Retrieval Augmented Generation)",
//       "LLM Workflows & Prompt Engineering",
//       "API Integration & Automation",
//       "Future AI Trends & Career Paths",
//     ],
//     tag: "Lead the AI revolution in your field.",
//   },
// ];

// const stats = [
//   { num: "500+", label: "Students Trained", icon: "Users" },
//   { num: "20+", label: "AI Tools Covered", icon: "Wrench" },
//   { num: "6-8", label: "Weeks Duration", icon: "Clock" },
//   { num: "100%", label: "Hands-On Learning", icon: "Code2" },
// ];

// const highlights = [
//   "20+ AI tools covered in depth",
//   "Real industry projects to build portfolio",
//   "Hindi + English bilingual instruction",
//   "Lifetime access to course materials",
//   "Industry-recognized certification",
//   "Placement & freelancing support",
//   "Live mentorship sessions",
//   "Community of AI learners & professionals",
// ];

// const tools = [
//   "ChatGPT (GPT-4)",
//   "Claude AI",
//   "Google Gemini",
//   "Midjourney",
//   "DALL-E 3",
//   "Stable Diffusion",
//   "RunwayML",
//   "Sora (when available)",
//   "Adobe Firefly",
//   "Eleven Labs",
//   "LangChain",
//   "Pinecone Vector DB",
//   "OpenAI API",
//   "Make.com / n8n",
// ];

// const curriculum = [
//   {
//     title: "Module 1: AI Foundations",
//     topics: ["History & evolution of AI", "Types of AI (Narrow, General, Super)", "Machine Learning basics", "Neural networks intro", "Current AI landscape"],
//   },
//   {
//     title: "Module 2: ChatGPT & LLMs Mastery",
//     topics: ["ChatGPT advanced techniques", "Claude vs GPT comparison", "Custom GPTs creation", "API integrations", "Cost optimization"],
//   },
//   {
//     title: "Module 3: AI Image Generation",
//     topics: ["Midjourney mastery", "DALL-E 3 workflows", "Stable Diffusion local setup", "Image editing with AI", "Commercial use rights"],
//   },
//   {
//     title: "Module 4: AI Video & Audio",
//     topics: ["RunwayML video generation", "AI voice cloning", "Eleven Labs mastery", "Music generation tools", "Video editing with AI"],
//   },
//   {
//     title: "Module 5: Prompt Engineering",
//     topics: ["Prompt frameworks", "Chain-of-thought prompting", "Few-shot learning", "Role-based prompts", "Token optimization"],
//   },
//   {
//     title: "Module 6: Agentic AI & RAG",
//     topics: ["Agentic AI fundamentals", "RAG implementation", "LangChain workflows", "Vector databases", "Building AI agents"],
//   },
// ];

// const whoIsItFor = [
//   "Working professionals upgrading to AI skills",
//   "Content creators & marketers",
//   "Designers & video editors",
//   "Students preparing for AI careers",
//   "Business owners automating workflows",
//   "Freelancers expanding services",
// ];

// const careers = [
//   { role: "AI Content Creator", growth: "High Demand" },
//   { role: "Prompt Engineer", growth: "Top Paying" },
//   { role: "AI Product Manager", growth: "Strategic" },
//   { role: "AI Solutions Consultant", growth: "Premium Rates" },
// ];

// const projects = [
//   "Build a custom GPT for a specific industry",
//   "Create AI art portfolio (50+ pieces)",
//   "Generate AI video for a brand campaign",
//   "Develop an AI chatbot using RAG",
//   "Build an AI agent that automates workflows",
// ];

// const faqs = [
//   { question: "Do I need coding experience for this AI Masterclass?", answer: "No coding experience required! Our AI Masterclass is designed for everyone — students, professionals, business owners. We start from absolute basics and use no-code tools where possible." },
//   { question: "What's the duration of this AI course?", answer: "The complete AI Masterclass is 6-8 weeks with flexible online and offline batches. You can also opt for fast-track 4-week intensive batches." },
//   { question: "Will I get a certificate after completion?", answer: "Yes, you'll receive an industry-recognized AV Academy certificate. Plus, you'll have a portfolio of AI projects to showcase to employers or clients." },
//   { question: "Is the course online or offline?", answer: "Both! Choose between online (Zoom live + recordings) or offline (Lucknow campus). Hybrid option also available where you can attend both modes flexibly." },
//   { question: "What career opportunities are available after this course?", answer: "Many opportunities — AI Content Creator, Prompt Engineer, AI Consultant, Freelance AI Specialist. You can also use these skills to enhance your existing role or start an AI-powered business." },
//   { question: "Are AI tool subscriptions included in fees?", answer: "Some free tools are used during learning. For premium tools (ChatGPT Plus, Midjourney), we provide guidance on what to subscribe to during and after the course." },
// ];

// export default function AIMasterclassPage() {
//   const courseSchema = {
//     "@context": "https://schema.org",
//     "@type": "Course",
//     name: "AI Masterclass — AV Academy Lucknow",
//     description: "Comprehensive AI training covering ChatGPT, Midjourney, RunwayML, Agentic AI, RAG & Prompt Engineering",
//     provider: {
//       "@type": "EducationalOrganization",
//       name: "AV Academy",
//       url: SITE_URL,
//       telephone: "+91-9675903348",
//       email: "avacademy1706@gmail.com",
//     },
//     educationalLevel: "Beginner to Advanced",
//     inLanguage: ["en", "hi"],
//     teaches: tools,
//     aggregateRating: {
//       "@type": "AggregateRating",
//       ratingValue: "4.9",
//       ratingCount: "500",
//       bestRating: "5",
//     },
//   };

//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: faqs.map((faq) => ({
//       "@type": "Question",
//       name: faq.question,
//       acceptedAnswer: { "@type": "Answer", text: faq.answer },
//     })),
//   };

//   return (
//     <>
//       <Script id="course-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
//       <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

//       <Navbar />
//       <main className="bg-[#030f1a]">
//         {/* ============ HERO — BALANCED SIZE ============ */}
//         <section className="relative pt-36 pb-20 px-10 text-center overflow-hidden border-b border-cyan-500/15 bg-gradient-to-br from-[#061826] via-[#0a2436] to-[#061826]">
//           <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/20 blur-3xl pointer-events-none rounded-full" />
//           <div className="absolute top-[30%] left-[8%] w-52 h-52 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
//           <div className="absolute bottom-[10%] right-[10%] w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

//           <div
//             className="absolute inset-0 opacity-50 pointer-events-none"
//             style={{
//               backgroundImage: "linear-gradient(rgba(0,180,216,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,.04) 1px, transparent 1px)",
//               backgroundSize: "60px 60px",
//             }}
//           />

//           <div className="relative z-10 max-w-[1000px] mx-auto">
//             {/* Breadcrumb */}
//             {/* <nav aria-label="Breadcrumb" className="mb-6">
//               <ol className="inline-flex items-center gap-2 text-[12px] text-gray-500 px-4 py-2 rounded-full bg-[#082c44]/60 border border-cyan-500/15">
//                 <li><Link href="/" className="text-cyan-400 font-semibold hover:text-cyan-300">Home</Link></li>
//                 <li><LucideIcon name="ChevronRight" size={12} color="#6b7280" /></li>
//                 <li><Link href="/courses" className="text-cyan-400 font-semibold hover:text-cyan-300">Courses</Link></li>
//                 <li><LucideIcon name="ChevronRight" size={12} color="#6b7280" /></li>
//                 <li className="text-gray-300" aria-current="page">AI Masterclass</li>
//               </ol>
//             </nav> */}

//             {/* ──── BIGGER TAGLINE ──── */}
//             <p className="font-syne font-bold text-[13px] tracking-[5px] uppercase mb-4 text-cyan-400">
//               AV ACADEMY — WHERE EDITS COME TO LIFE
//             </p>

//             {/* ──── BIGGER HOT BADGE ──── */}
//             <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[12px] font-bold tracking-[2px] uppercase mb-6 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 shadow-[0_0_30px_rgba(0,180,216,0.2)]">
//               <LucideIcon name="Flame" size={14} color="#22d3ee" strokeWidth={2.5} />
//               Most Popular Course
//             </span>

//             {/* ──── BIGGER H1 ──── */}
//             <h1 className="font-syne font-extrabold leading-[1.1] tracking-tight mb-5 text-[clamp(2.2rem,5vw,3.8rem)] text-white">
//               <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                 Artificial Intelligence
//               </span>
//               <br />
//               Masterclasses
//             </h1>

//             {/* ──── BIGGER DESCRIPTION ──── */}
//             <p className="text-base md:text-lg text-gray-400 max-w-[720px] mx-auto leading-relaxed mb-8">
//               AI Isn&apos;t the Future. It&apos;s the Present. From ChatGPT and Midjourney to self-driving cars — AI is shaping careers, businesses, and the world. Don&apos;t be left behind.
//             </p>

//             {/* ──── BIGGER CTAs ──── */}
//             <div className="flex flex-wrap justify-center gap-3.5 mb-8">
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-[14px] font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all"
//               >
//                 <LucideIcon name="Zap" size={16} color="#031a2b" strokeWidth={2.5} />
//                 Join Us Now
//               </Link>
//               <Link
//                 href="/courses"
//                 className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-[14px] font-syne tracking-wide bg-transparent border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all"
//               >
//                 <LucideIcon name="BookOpen" size={16} color="#22d3ee" strokeWidth={2.5} />
//                 View All Courses
//               </Link>
//             </div>

//             {/* ──── BIGGER SLOGAN ──── */}
//             {/* <div className="font-syne font-extrabold text-[13px] tracking-[3px] uppercase">
//               <span className="text-white">LEARN AI.</span>{" "}
//               <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">CREATE MAGIC.</span>{" "}
//               <span className="text-white">LEAD THE CHANGE.</span>
//             </div> */}
//           </div>
//         </section>

//         {/* ============ STATS BAR ============ */}
//         <section className="px-10 py-10 bg-[#061826] border-b border-cyan-500/10">
//           <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
//             {stats.map((s) => (
//               <div
//                 key={s.label}
//                 className="flex items-center gap-4 px-5 py-5 rounded-2xl bg-gradient-to-br from-[#082c44]/80 to-[#030f1a]/90 border border-cyan-500/15 hover:border-cyan-500/40 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10"
//               >
//                 <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-cyan-500/15 border border-cyan-500/40">
//                   <LucideIcon name={s.icon} size={22} color="#22d3ee" strokeWidth={2} />
//                 </div>
//                 <div>
//                   <div className="font-syne font-extrabold text-2xl leading-none text-white">{s.num}</div>
//                   <div className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold mt-1">{s.label}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ============ WHAT YOU'LL LEARN ============ */}
//         <section className="px-10 py-20 bg-[#030f1a]">
//           <div className="max-w-[1280px] mx-auto">
//             <Reveal>
//               <div className="text-center mb-14">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// What You&apos;ll Learn</div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
//                   Three Pillars of{" "}
//                   <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                     AI Mastery
//                   </span>
//                 </h2>
//                 <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
//                   From fundamentals to advanced techniques — everything you need to become AI-fluent
//                 </p>
//               </div>
//             </Reveal>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {learn.map((item, i) => (
//                 <Reveal key={item.num} delay={i * 80}>
//                   <div className="h-full relative p-7 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/25 hover:border-cyan-500/50 transition-all hover:-translate-y-1.5 hover:shadow-2xl group overflow-hidden">
//                     <div className="absolute top-0 left-0 right-0 h-[3px] opacity-60 bg-gradient-to-r from-cyan-400 to-cyan-600" />
//                     <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none bg-cyan-500/25" />

//                     <div className="font-syne font-extrabold text-6xl leading-none mb-3 text-cyan-500/10">{item.num}</div>

//                     <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative z-10 bg-cyan-500/15 border border-cyan-500/40 shadow-lg shadow-cyan-500/20">
//                       <LucideIcon name={item.icon} size={28} color="#22d3ee" strokeWidth={2} />
//                     </div>

//                     <h3 className="font-syne font-extrabold text-lg text-white mb-4 relative z-10">{item.title}</h3>

//                     <ul className="space-y-2 mb-5 relative z-10">
//                       {item.items.map((li) => (
//                         <li key={li} className="flex items-start gap-2 text-[13px] text-gray-300 leading-relaxed">
//                           <span className="flex-shrink-0 mt-0.5">
//                             <LucideIcon name="CheckCircle2" size={14} color="#22d3ee" strokeWidth={2.5} />
//                           </span>
//                           <span>{li}</span>
//                         </li>
//                       ))}
//                     </ul>

//                     <p className="text-[13px] italic font-medium pt-4 border-t border-cyan-500/20 text-cyan-400 relative z-10">
//                       → {item.tag}
//                     </p>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ HIGHLIGHTS ============ */}
//         <section className="px-10 py-20 bg-[#061826]">
//           <div className="max-w-[1240px] mx-auto">
//             <Reveal>
//               <div className="text-center mb-12">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Course Highlights</div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white">
//                   Why This{" "}
//                   <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                     Masterclass Stands Out
//                   </span>
//                 </h2>
//               </div>
//             </Reveal>

//             <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//               {highlights.map((h, i) => (
//                 <Reveal key={h} delay={i * 60}>
//                   <li className="flex items-start gap-3 p-5 rounded-2xl bg-gradient-to-br from-[#082c44]/80 to-[#030f1a]/90 border border-cyan-500/15 hover:border-cyan-500/40 hover:-translate-y-1 transition-all h-full">
//                     <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-cyan-500/15 border border-cyan-500/40">
//                       <LucideIcon name="CheckCircle2" size={20} color="#22d3ee" strokeWidth={2.5} />
//                     </div>
//                     <div className="text-[13px] text-gray-200 font-medium leading-relaxed pt-1.5">{h}</div>
//                   </li>
//                 </Reveal>
//               ))}
//             </ul>
//           </div>
//         </section>

//         {/* ============ WHO + TOOLS ============ */}
//         <section className="px-10 py-20 bg-[#030f1a]">
//           <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
//             <Reveal direction="left">
//               <div className="p-8 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 h-full">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/40">
//                     <LucideIcon name="Users" size={22} color="#22d3ee" strokeWidth={2} />
//                   </div>
//                   <div>
//                     <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-1">// Perfect For</div>
//                     <h2 className="font-syne font-extrabold text-xl text-white">Who Is This For?</h2>
//                   </div>
//                 </div>
//                 <ul className="space-y-3">
//                   {whoIsItFor.map((person) => (
//                     <li key={person} className="flex items-start gap-3 text-[14px] text-gray-300">
//                       <div className="flex-shrink-0 mt-0.5">
//                         <LucideIcon name="ArrowRight" size={16} color="#22d3ee" strokeWidth={2.5} />
//                       </div>
//                       <span>{person}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </Reveal>

//             <Reveal direction="right">
//               <div className="p-8 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 h-full">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/40">
//                     <LucideIcon name="Wrench" size={22} color="#22d3ee" strokeWidth={2} />
//                   </div>
//                   <div>
//                     <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-1">// AI Tools</div>
//                     <h2 className="font-syne font-extrabold text-xl text-white">Tools You&apos;ll Master</h2>
//                   </div>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {tools.map((tool) => (
//                     <span
//                       key={tool}
//                       className="px-3.5 py-2 rounded-full text-[12.5px] font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 transition-colors"
//                     >
//                       {tool}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </Reveal>
//           </div>
//         </section>

//         {/* ============ CURRICULUM ============ */}
//         <section className="px-10 py-20 bg-[#061826] relative overflow-hidden">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-3xl pointer-events-none bg-cyan-500/[0.04]" />

//           <div className="max-w-[1240px] mx-auto relative z-10">
//             <Reveal>
//               <div className="text-center mb-12">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Detailed Curriculum</div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                   6-Module{" "}
//                   <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                     Learning Path
//                   </span>
//                 </h2>
//                 <p className="text-sm text-gray-400 max-w-[600px] mx-auto leading-relaxed">
//                   Structured curriculum from beginner to AI expert
//                 </p>
//               </div>
//             </Reveal>

//             <ol className="space-y-4">
//               {curriculum.map((module, idx) => (
//                 <Reveal key={module.title} delay={idx * 60}>
//                   <li className="rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/25 hover:border-cyan-500/50 transition-all hover:-translate-y-1 overflow-hidden">
//                     <article className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-5 p-6">
//                       <div className="flex md:flex-col items-center gap-3 md:gap-2">
//                         <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-syne font-extrabold text-2xl bg-gradient-to-br from-cyan-500 to-cyan-400 text-[#031a2b] shadow-lg shadow-cyan-500/40">
//                           {String(idx + 1).padStart(2, "0")}
//                         </div>
//                       </div>
//                       <div>
//                         <h3 className="font-syne font-bold text-lg text-white mb-3">{module.title}</h3>
//                         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                           {module.topics.map((topic) => (
//                             <li key={topic} className="flex items-center gap-2 text-[13px] text-gray-300">
//                               <LucideIcon name="Check" size={14} color="#22d3ee" strokeWidth={3} />
//                               {topic}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </article>
//                   </li>
//                 </Reveal>
//               ))}
//             </ol>
//           </div>
//         </section>

//         {/* ============ CAREER OPPORTUNITIES ============ */}
//         <section className="px-10 py-20 bg-[#030f1a]">
//           <div className="max-w-[1240px] mx-auto">
//             <Reveal>
//               <div className="text-center mb-12">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Career Paths</div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                   Where This Course{" "}
//                   <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                     Takes You
//                   </span>
//                 </h2>
//                 <p className="text-sm text-gray-400 max-w-[600px] mx-auto leading-relaxed">
//                   AI is the most in-demand skill — these are some career paths you can pursue
//                 </p>
//               </div>
//             </Reveal>

//             <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
//               {careers.map((c, i) => (
//                 <Reveal key={c.role} delay={i * 80}>
//                   <li className="p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 text-center hover:border-cyan-500/50 hover:-translate-y-1 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
//                     <div className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/40">
//                       <LucideIcon name="Briefcase" size={26} color="#22d3ee" strokeWidth={2} />
//                     </div>
//                     <h3 className="font-syne font-bold text-base text-white mb-3 leading-tight">{c.role}</h3>
//                     <div className="pt-3 border-t border-cyan-500/15">
//                       <div className="text-[11px] uppercase tracking-wider font-bold text-cyan-400">{c.growth}</div>
//                     </div>
//                   </li>
//                 </Reveal>
//               ))}
//             </ul>
//           </div>
//         </section>

//         {/* ============ PROJECTS ============ */}
//         <section className="px-10 py-20 bg-[#061826]">
//           <div className="max-w-[1240px] mx-auto">
//             <Reveal>
//               <div className="text-center mb-12">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Hands-On Projects</div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                   Build a{" "}
//                   <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                     Portfolio That Hires
//                   </span>
//                 </h2>
//                 <p className="text-sm text-gray-400 max-w-[600px] mx-auto leading-relaxed">
//                   Real AI projects you&apos;ll complete during this masterclass
//                 </p>
//               </div>
//             </Reveal>

//             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {projects.map((project, i) => (
//                 <Reveal key={project} delay={i * 60}>
//                   <li className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/25 hover:-translate-y-1 transition-all">
//                     <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-syne font-extrabold text-lg bg-gradient-to-br from-cyan-500 to-cyan-400 text-[#031a2b]">
//                       {i + 1}
//                     </div>
//                     <div className="text-[14px] text-gray-200 font-medium leading-relaxed">{project}</div>
//                   </li>
//                 </Reveal>
//               ))}
//             </ul>
//           </div>
//         </section>

//         {/* ============ FAQ ============ */}
//         <section className="px-10 py-20 bg-[#030f1a]">
//           <div className="max-w-[900px] mx-auto">
//             <Reveal>
//               <div className="text-center mb-12">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// FAQ</div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                   Got{" "}
//                   <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                     Questions?
//                   </span>
//                 </h2>
//                 <p className="text-sm text-gray-400 leading-relaxed">
//                   Everything you need to know about the AI Masterclass
//                 </p>
//               </div>
//             </Reveal>

//             <div className="space-y-4">
//               {faqs.map((faq, i) => (
//                 <Reveal key={faq.question} delay={i * 80}>
//                   <details className="group rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 overflow-hidden transition-all hover:border-cyan-500/40">
//                     <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
//                       <h3 className="font-syne font-bold text-[15px] text-white flex-1">{faq.question}</h3>
//                       <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-open:rotate-45 bg-cyan-500/15 border border-cyan-500/40">
//                         <LucideIcon name="Plus" size={18} color="#22d3ee" strokeWidth={2.5} />
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

//         {/* ============ FINAL CTA ============ */}
//         <section className="px-10 py-24 bg-gradient-to-br from-[#030f1a] via-[#0a2436] to-[#030f1a] text-center relative overflow-hidden">
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />
//           <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

//           <div className="max-w-[900px] mx-auto relative z-10">
//             <Reveal>
//               <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-[2px] uppercase mb-6 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400">
//                 <LucideIcon name="Rocket" size={14} color="#22d3ee" strokeWidth={2} />
//                 Start Your AI Journey
//               </span>

//               <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3.5vw,2.8rem)] leading-tight tracking-tight text-white mb-5">
//                 Start Your{" "}
//                 <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                   AI Journey Today
//                 </span>
//               </h2>
//               <p className="text-base text-gray-400 max-w-[540px] mx-auto mb-9 leading-relaxed">
//                 Join hundreds of students who&apos;ve transformed their careers with AV Academy&apos;s AI Masterclass.
//               </p>

//               <div className="flex flex-wrap justify-center gap-4 mb-7">
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-[15px] font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all"
//                 >
//                   <LucideIcon name="Zap" size={18} color="#031a2b" strokeWidth={2.5} />
//                   Enquire Now
//                 </Link>
//                 <a
//                   href="https://wa.me/919675903348?text=Hi! I want to join the AI Masterclass. Please share details."
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-[15px] font-syne tracking-wide bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/40 transition-all"
//                 >
//                   <LucideIcon name="MessageCircle" size={18} color="#ffffff" strokeWidth={2.5} />
//                   WhatsApp Us
//                 </a>
//               </div>

//               <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[13px] text-gray-500">
//                 <div className="flex items-center gap-2">
//                   <LucideIcon name="Phone" size={14} color="#22d3ee" strokeWidth={2} />
//                   <span className="text-gray-400">+91-9675903348</span>
//                 </div>
//                 <div className="hidden md:block text-gray-700">·</div>
//                 <div className="flex items-center gap-2">
//                   <LucideIcon name="Mail" size={14} color="#22d3ee" strokeWidth={2} />
//                   <span className="text-gray-400">avacademy1706@gmail.com</span>
//                 </div>
//               </div>
//             </Reveal>
//           </div>
//         </section>
//       </main>
//       <Footer />
//       <WAFloat />
//     </>
//   );
// }

// app/ai-masterclass/page.tsx
// ✅ Server Component — SEO metadata + JSON-LD yahan, UI AIMasterclassClient mein

import type { Metadata } from "next";
import AIMasterclassClient from "./AIMasterclassClient";

const SITE_URL = "https://avacademy.co.in";

// ── SEO Metadata ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "AI Masterclass in Lucknow | ChatGPT, Midjourney & Prompt Engineering | AV Academy",
  description:
    "Master AI tools at AV Academy Lucknow. Learn ChatGPT, Midjourney, RunwayML, Agentic AI, RAG & Prompt Engineering. 6-8 week comprehensive program with hands-on projects & certification.",
  keywords: [
    "ai masterclass lucknow",
    "chatgpt course lucknow",
    "midjourney training india",
    "ai course india",
    "prompt engineering course",
    "ai certification lucknow",
    "machine learning lucknow",
    "ai tools training",
    "generative ai course",
    "runwayml course",
    "agentic ai training",
    "RAG course india",
  ],
  alternates: { canonical: `${SITE_URL}/ai-masterclass` },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: "AI Masterclass | AV Academy Lucknow",
    description:
      "Master ChatGPT, Midjourney, RunwayML & Prompt Engineering. Industry-leading AI course with certification.",
    url: `${SITE_URL}/ai-masterclass`,
    siteName: "AV Academy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-ai-masterclass.jpg`,
        width: 1200,
        height: 630,
        alt: "AI Masterclass — AV Academy Lucknow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Masterclass | AV Academy Lucknow",
    description: "Master AI tools — ChatGPT, Midjourney, RunwayML & more. Lucknow's best AI course.",
    images: [`${SITE_URL}/og-ai-masterclass.jpg`],
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "AI Masterclass — AV Academy Lucknow",
  description:
    "Comprehensive AI training covering ChatGPT, Midjourney, RunwayML, Agentic AI, RAG & Prompt Engineering. 6-8 weeks, beginner to advanced.",
  url: `${SITE_URL}/ai-masterclass`,
  provider: {
    "@type": "EducationalOrganization",
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
  },
  educationalLevel: "Beginner to Advanced",
  inLanguage: ["en", "hi"],
  timeRequired: "P6W",
  teaches: [
    "ChatGPT", "Midjourney", "RunwayML", "Stable Diffusion",
    "Prompt Engineering", "Agentic AI", "RAG", "LangChain",
    "DALL-E 3", "Google Gemini", "OpenAI API", "Make.com",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "500",
    bestRating: "5",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "INR",
    validFrom: "2024-01-01",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need coding experience for this AI Masterclass?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No coding experience required! Our AI Masterclass is designed for everyone — students, professionals, business owners. We start from absolute basics and use no-code tools where possible.",
      },
    },
    {
      "@type": "Question",
      name: "What's the duration of this AI course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The complete AI Masterclass is 6-8 weeks with flexible online and offline batches. You can also opt for fast-track 4-week intensive batches.",
      },
    },
    {
      "@type": "Question",
      name: "Will I get a certificate after completion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you'll receive an industry-recognized AV Academy certificate. Plus, you'll have a portfolio of AI projects to showcase to employers or clients.",
      },
    },
    {
      "@type": "Question",
      name: "Is the course online or offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both! Choose between online (Zoom live + recordings) or offline (Lucknow campus). Hybrid option also available where you can attend both modes flexibly.",
      },
    },
    {
      "@type": "Question",
      name: "What career opportunities are available after this AI course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many opportunities — AI Content Creator, Prompt Engineer, AI Consultant, Freelance AI Specialist. You can also use these skills to enhance your existing role or start an AI-powered business.",
      },
    },
    {
      "@type": "Question",
      name: "Are AI tool subscriptions included in fees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some free tools are used during learning. For premium tools (ChatGPT Plus, Midjourney), we provide guidance on what to subscribe to during and after the course.",
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
    { "@type": "ListItem", position: 3, name: "AI Masterclass", item: `${SITE_URL}/ai-masterclass` },
  ],
};

// ── Page (Server Component) ───────────────────────────────────────────────
export default function AIMasterclassPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AIMasterclassClient />
    </>
  );
}