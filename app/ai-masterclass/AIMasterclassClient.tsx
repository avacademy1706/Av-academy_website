// "use client";
// // app/ai-masterclass/AIMasterclassClient.tsx
// // ✅ Sirf UI — fully mobile responsive with Tailwind

// import Link from "next/link";
// import LucideIcon from "@/components/LucideIcon";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WAFloat from "@/components/WAFloat";
// import { Reveal } from "@/components/ScrollReveal";

// // ============ DATA ============

// const learn = [
//     {
//         num: "01",
//         icon: "Bot",
//         title: "Core AI & ML Essentials",
//         items: [
//             "AI & Machine Learning Fundamentals",
//             "ChatGPT, DALL·E, Midjourney, Gemini",
//             "RunwayML for AI Video Generation",
//             "Stable Diffusion & Image AI",
//             "Natural Language Processing Basics",
//         ],
//         tag: "Build a rock-solid AI foundation.",
//     },
//     {
//         num: "02",
//         icon: "Palette",
//         title: "Create with AI Tools",
//         items: [
//             "AI Art, Videos, Voice & Content Creation",
//             "Build Your Own AI Tools & Projects",
//             "Portfolio Building + Certification",
//             "AI for Business Applications",
//             "Monetization Strategies with AI",
//         ],
//         tag: "Create assets that command real rates.",
//     },
//     {
//         num: "03",
//         icon: "Brain",
//         title: "Advanced AI Concepts",
//         items: [
//             "Agentic AI Fundamentals",
//             "RAG (Retrieval Augmented Generation)",
//             "LLM Workflows & Prompt Engineering",
//             "API Integration & Automation",
//             "Future AI Trends & Career Paths",
//         ],
//         tag: "Lead the AI revolution in your field.",
//     },
// ];

// const stats = [
//     { num: "500+", label: "Students Trained", icon: "Users" },
//     { num: "20+", label: "AI Tools Covered", icon: "Wrench" },
//     { num: "6-8", label: "Weeks Duration", icon: "Clock" },
//     { num: "100%", label: "Hands-On Learning", icon: "Code2" },
// ];

// const highlights = [
//     "20+ AI tools covered in depth",
//     "Real industry projects to build portfolio",
//     "Hindi + English bilingual instruction",
//     "Lifetime access to course materials",
//     "Industry-recognized certification",
//     "Placement & freelancing support",
//     "Live mentorship sessions",
//     "Community of AI learners & professionals",
// ];

// const tools = [
//     "ChatGPT (GPT-4)", "Claude AI", "Google Gemini",
//     "Midjourney", "DALL-E 3", "Stable Diffusion",
//     "RunwayML", "Sora (when available)", "Adobe Firefly",
//     "Eleven Labs", "LangChain", "Pinecone Vector DB",
//     "OpenAI API", "Make.com / n8n",
// ];

// const curriculum = [
//     {
//         title: "Module 1: AI Foundations",
//         topics: ["History & evolution of AI", "Types of AI (Narrow, General, Super)", "Machine Learning basics", "Neural networks intro", "Current AI landscape"],
//     },
//     {
//         title: "Module 2: ChatGPT & LLMs Mastery",
//         topics: ["ChatGPT advanced techniques", "Claude vs GPT comparison", "Custom GPTs creation", "API integrations", "Cost optimization"],
//     },
//     {
//         title: "Module 3: AI Image Generation",
//         topics: ["Midjourney mastery", "DALL-E 3 workflows", "Stable Diffusion local setup", "Image editing with AI", "Commercial use rights"],
//     },
//     {
//         title: "Module 4: AI Video & Audio",
//         topics: ["RunwayML video generation", "AI voice cloning", "Eleven Labs mastery", "Music generation tools", "Video editing with AI"],
//     },
//     {
//         title: "Module 5: Prompt Engineering",
//         topics: ["Prompt frameworks", "Chain-of-thought prompting", "Few-shot learning", "Role-based prompts", "Token optimization"],
//     },
//     {
//         title: "Module 6: Agentic AI & RAG",
//         topics: ["Agentic AI fundamentals", "RAG implementation", "LangChain workflows", "Vector databases", "Building AI agents"],
//     },
// ];

// const whoIsItFor = [
//     "Working professionals upgrading to AI skills",
//     "Content creators & marketers",
//     "Designers & video editors",
//     "Students preparing for AI careers",
//     "Business owners automating workflows",
//     "Freelancers expanding services",
// ];

// const careers = [
//     { role: "AI Content Creator", growth: "High Demand" },
//     { role: "Prompt Engineer", growth: "Top Paying" },
//     { role: "AI Product Manager", growth: "Strategic" },
//     { role: "AI Solutions Consultant", growth: "Premium Rates" },
// ];

// const projects = [
//     "Build a custom GPT for a specific industry",
//     "Create AI art portfolio (50+ pieces)",
//     "Generate AI video for a brand campaign",
//     "Develop an AI chatbot using RAG",
//     "Build an AI agent that automates workflows",
// ];

// const faqs = [
//     { question: "Do I need coding experience for this AI Masterclass?", answer: "No coding experience required! Our AI Masterclass is designed for everyone — students, professionals, business owners. We start from absolute basics and use no-code tools where possible." },
//     { question: "What's the duration of this AI course?", answer: "The complete AI Masterclass is 6-8 weeks with flexible online and offline batches. You can also opt for fast-track 4-week intensive batches." },
//     { question: "Will I get a certificate after completion?", answer: "Yes, you'll receive an industry-recognized AV Academy certificate. Plus, you'll have a portfolio of AI projects to showcase to employers or clients." },
//     { question: "Is the course online or offline?", answer: "Both! Choose between online (Zoom live + recordings) or offline (Lucknow campus). Hybrid option also available where you can attend both modes flexibly." },
//     { question: "What career opportunities are available after this course?", answer: "Many opportunities — AI Content Creator, Prompt Engineer, AI Consultant, Freelance AI Specialist. You can also use these skills to enhance your existing role or start an AI-powered business." },
//     { question: "Are AI tool subscriptions included in fees?", answer: "Some free tools are used during learning. For premium tools (ChatGPT Plus, Midjourney), we provide guidance on what to subscribe to during and after the course." },
// ];

// // ============ COMPONENT ============

// export default function AIMasterclassClient() {
//     return (
//         <>
//             <Navbar />
//             <main className="bg-[#030f1a]">

//                 {/* ============ HERO ============ */}
//                 <section className="relative pt-28 sm:pt-36 md:pt-36 pb-14 sm:pb-20 px-4 sm:px-8 md:px-10 text-center overflow-hidden border-b border-cyan-500/15 bg-gradient-to-br from-[#061826] via-[#0a2436] to-[#061826]">
//                     <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[260px] sm:w-[460px] md:w-[600px] h-[160px] sm:h-[240px] md:h-[300px] rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
//                     <div className="absolute top-[30%] left-[4%] w-28 sm:w-44 md:w-52 h-28 sm:h-44 md:h-52 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
//                     <div className="absolute bottom-[10%] right-[5%] w-32 sm:w-48 md:w-60 h-32 sm:h-48 md:h-60 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
//                     <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,180,216,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,180,216,.04) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

//                     <div className="relative z-10 max-w-[1000px] mx-auto">
//                         <p className="font-syne font-bold text-[10px] sm:text-[13px] tracking-[4px] sm:tracking-[5px] uppercase mb-3 sm:mb-4 text-cyan-400">
//                             AV ACADEMY — WHERE EDITS COME TO LIFE
//                         </p>

//                         <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-[12px] font-bold tracking-[2px] uppercase mb-5 sm:mb-6 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 shadow-[0_0_30px_rgba(0,180,216,0.2)]">
//                             <LucideIcon name="Flame" size={12} color="#22d3ee" strokeWidth={2.5} />
//                             Most Popular Course
//                         </span>

//                         <h1 className="font-syne font-extrabold leading-[1.1] tracking-tight mb-4 sm:mb-5 text-[clamp(1.9rem,6vw,3.8rem)] text-white">
//                             <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                                 Artificial Intelligence
//                             </span>
//                             <br />
//                             Masterclasses
//                         </h1>

//                         <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-[700px] mx-auto leading-relaxed mb-7 sm:mb-8 px-1">
//                             AI Isn&apos;t the Future. It&apos;s the Present. From ChatGPT and Midjourney to self-driving cars — AI is shaping careers, businesses, and the world. Don&apos;t be left behind.
//                         </p>

//                         <div className="flex flex-wrap justify-center gap-3 sm:gap-3.5">
//                             <Link
//                                 href="/contact"
//                                 className="inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-[14px] font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all active:scale-[0.98]"
//                             >
//                                 <LucideIcon name="Zap" size={15} color="#031a2b" strokeWidth={2.5} />
//                                 Join Us Now
//                             </Link>
//                             <Link
//                                 href="/courses"
//                                 className="inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-[14px] font-syne tracking-wide bg-transparent border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all active:scale-[0.98]"
//                             >
//                                 <LucideIcon name="BookOpen" size={15} color="#22d3ee" strokeWidth={2.5} />
//                                 View All Courses
//                             </Link>
//                         </div>
//                     </div>
//                 </section>

//                 {/* ============ STATS BAR ============ */}
//                 <section aria-label="Course Stats" className="px-4 sm:px-8 md:px-10 py-8 sm:py-10 bg-[#061826] border-b border-cyan-500/10">
//                     <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
//                         {stats.map((s) => (
//                             <div
//                                 key={s.label}
//                                 className="flex items-center gap-3 sm:gap-4 px-3.5 sm:px-5 py-4 sm:py-5 rounded-2xl bg-gradient-to-br from-[#082c44]/80 to-[#030f1a]/90 border border-cyan-500/15 hover:border-cyan-500/40 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10"
//                             >
//                                 <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-cyan-500/15 border border-cyan-500/40">
//                                     <LucideIcon name={s.icon} size={18} color="#22d3ee" strokeWidth={2} />
//                                 </div>
//                                 <div>
//                                     <div className="font-syne font-extrabold text-xl sm:text-2xl leading-none text-white">{s.num}</div>
//                                     <div className="text-[9px] sm:text-[11px] text-gray-400 uppercase tracking-wider font-semibold mt-1">{s.label}</div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* ============ WHAT YOU'LL LEARN ============ */}
//                 <section className="px-4 sm:px-8 md:px-10 py-14 sm:py-18 md:py-20 bg-[#030f1a]">
//                     <div className="max-w-[1280px] mx-auto">
//                         <Reveal>
//                             <div className="text-center mb-10 sm:mb-14">
//                                 <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// What You&apos;ll Learn</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-3 sm:mb-4">
//                                     Three Pillars of{" "}
//                                     <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">AI Mastery</span>
//                                 </h2>
//                                 <p className="text-sm sm:text-[15px] text-gray-400 max-w-[620px] mx-auto leading-relaxed px-2">
//                                     From fundamentals to advanced techniques — everything you need to become AI-fluent
//                                 </p>
//                             </div>
//                         </Reveal>

//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
//                             {learn.map((item, i) => (
//                                 <Reveal key={item.num} delay={i * 80}>
//                                     <div className="h-full relative p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/25 hover:border-cyan-500/50 transition-all hover:-translate-y-1.5 hover:shadow-2xl group overflow-hidden">
//                                         <div className="absolute top-0 left-0 right-0 h-[3px] opacity-60 bg-gradient-to-r from-cyan-400 to-cyan-600" />
//                                         <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none bg-cyan-500/25" />

//                                         <div className="font-syne font-extrabold text-5xl sm:text-6xl leading-none mb-3 text-cyan-500/10">{item.num}</div>

//                                         <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 relative z-10 bg-cyan-500/15 border border-cyan-500/40 shadow-lg shadow-cyan-500/20">
//                                             <LucideIcon name={item.icon} size={24} color="#22d3ee" strokeWidth={2} />
//                                         </div>

//                                         <h3 className="font-syne font-extrabold text-base sm:text-lg text-white mb-3 sm:mb-4 relative z-10">{item.title}</h3>

//                                         <ul className="space-y-2 mb-4 sm:mb-5 relative z-10">
//                                             {item.items.map((li) => (
//                                                 <li key={li} className="flex items-start gap-2 text-[12.5px] sm:text-[13px] text-gray-300 leading-relaxed">
//                                                     <span className="flex-shrink-0 mt-0.5">
//                                                         <LucideIcon name="CheckCircle2" size={13} color="#22d3ee" strokeWidth={2.5} />
//                                                     </span>
//                                                     <span>{li}</span>
//                                                 </li>
//                                             ))}
//                                         </ul>

//                                         <p className="text-[12px] sm:text-[13px] italic font-medium pt-3 sm:pt-4 border-t border-cyan-500/20 text-cyan-400 relative z-10">
//                                             → {item.tag}
//                                         </p>
//                                     </div>
//                                 </Reveal>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* ============ HIGHLIGHTS ============ */}
//                 <section className="px-4 sm:px-8 md:px-10 py-14 sm:py-18 md:py-20 bg-[#061826]">
//                     <div className="max-w-[1240px] mx-auto">
//                         <Reveal>
//                             <div className="text-center mb-10 sm:mb-12">
//                                 <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Course Highlights</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.5rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white">
//                                     Why This{" "}
//                                     <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Masterclass Stands Out</span>
//                                 </h2>
//                             </div>
//                         </Reveal>

//                         <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
//                             {highlights.map((h, i) => (
//                                 <Reveal key={h} delay={i * 60}>
//                                     <li className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#082c44]/80 to-[#030f1a]/90 border border-cyan-500/15 hover:border-cyan-500/40 hover:-translate-y-1 transition-all h-full">
//                                         <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-cyan-500/15 border border-cyan-500/40">
//                                             <LucideIcon name="CheckCircle2" size={18} color="#22d3ee" strokeWidth={2.5} />
//                                         </div>
//                                         <div className="text-[12.5px] sm:text-[13px] text-gray-200 font-medium leading-relaxed pt-1">{h}</div>
//                                     </li>
//                                 </Reveal>
//                             ))}
//                         </ul>
//                     </div>
//                 </section>

//                 {/* ============ WHO + TOOLS ============ */}
//                 <section className="px-4 sm:px-8 md:px-10 py-14 sm:py-18 md:py-20 bg-[#030f1a]">
//                     <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
//                         <Reveal direction="left">
//                             <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 h-full">
//                                 <div className="flex items-center gap-3 mb-5 sm:mb-6">
//                                     <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/40 flex-shrink-0">
//                                         <LucideIcon name="Users" size={20} color="#22d3ee" strokeWidth={2} />
//                                     </div>
//                                     <div>
//                                         <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-0.5">// Perfect For</div>
//                                         <h2 className="font-syne font-extrabold text-lg sm:text-xl text-white">Who Is This For?</h2>
//                                     </div>
//                                 </div>
//                                 <ul className="space-y-2.5 sm:space-y-3">
//                                     {whoIsItFor.map((person) => (
//                                         <li key={person} className="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-gray-300">
//                                             <div className="flex-shrink-0 mt-0.5">
//                                                 <LucideIcon name="ArrowRight" size={15} color="#22d3ee" strokeWidth={2.5} />
//                                             </div>
//                                             <span>{person}</span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </Reveal>

//                         <Reveal direction="right">
//                             <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 h-full">
//                                 <div className="flex items-center gap-3 mb-5 sm:mb-6">
//                                     <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/40 flex-shrink-0">
//                                         <LucideIcon name="Wrench" size={20} color="#22d3ee" strokeWidth={2} />
//                                     </div>
//                                     <div>
//                                         <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-0.5">// AI Tools</div>
//                                         <h2 className="font-syne font-extrabold text-lg sm:text-xl text-white">Tools You&apos;ll Master</h2>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-wrap gap-2">
//                                     {tools.map((tool) => (
//                                         <span
//                                             key={tool}
//                                             className="px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-[11.5px] sm:text-[12.5px] font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 transition-colors"
//                                         >
//                                             {tool}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>
//                         </Reveal>
//                     </div>
//                 </section>

//                 {/* ============ CURRICULUM ============ */}
//                 <section className="relative px-4 sm:px-8 md:px-10 py-14 sm:py-18 md:py-20 bg-[#061826] overflow-hidden">
//                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[300px] sm:h-[600px] rounded-full blur-3xl pointer-events-none bg-cyan-500/[0.04]" />

//                     <div className="max-w-[1240px] mx-auto relative z-10">
//                         <Reveal>
//                             <div className="text-center mb-10 sm:mb-12">
//                                 <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Detailed Curriculum</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.5rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                                     6-Module{" "}
//                                     <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Learning Path</span>
//                                 </h2>
//                                 <p className="text-xs sm:text-sm text-gray-400 max-w-[560px] mx-auto leading-relaxed px-2">
//                                     Structured curriculum from beginner to AI expert
//                                 </p>
//                             </div>
//                         </Reveal>

//                         <ol className="space-y-3 sm:space-y-4">
//                             {curriculum.map((module, idx) => (
//                                 <Reveal key={module.title} delay={idx * 60}>
//                                     <li className="rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/25 hover:border-cyan-500/50 transition-all hover:-translate-y-0.5 overflow-hidden">
//                                         <article className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 sm:gap-5 p-5 sm:p-6">
//                                             <div className="flex sm:flex-col items-center gap-3 sm:gap-2">
//                                                 <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-syne font-extrabold text-xl sm:text-2xl bg-gradient-to-br from-cyan-500 to-cyan-400 text-[#031a2b] shadow-lg shadow-cyan-500/40 flex-shrink-0">
//                                                     {String(idx + 1).padStart(2, "0")}
//                                                 </div>
//                                             </div>
//                                             <div>
//                                                 <h3 className="font-syne font-bold text-base sm:text-lg text-white mb-2 sm:mb-3">{module.title}</h3>
//                                                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
//                                                     {module.topics.map((topic) => (
//                                                         <li key={topic} className="flex items-center gap-2 text-[12px] sm:text-[13px] text-gray-300">
//                                                             <LucideIcon name="Check" size={13} color="#22d3ee" strokeWidth={3} />
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

//                 {/* ============ CAREER OPPORTUNITIES ============ */}
//                 <section className="px-4 sm:px-8 md:px-10 py-14 sm:py-18 md:py-20 bg-[#030f1a]">
//                     <div className="max-w-[1240px] mx-auto">
//                         <Reveal>
//                             <div className="text-center mb-10 sm:mb-12">
//                                 <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Career Paths</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.5rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                                     Where This Course{" "}
//                                     <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Takes You</span>
//                                 </h2>
//                                 <p className="text-xs sm:text-sm text-gray-400 max-w-[560px] mx-auto leading-relaxed px-2">
//                                     AI is the most in-demand skill — these are some career paths you can pursue
//                                 </p>
//                             </div>
//                         </Reveal>

//                         <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
//                             {careers.map((c, i) => (
//                                 <Reveal key={c.role} delay={i * 80}>
//                                     <li className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 text-center hover:border-cyan-500/50 hover:-translate-y-1 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
//                                         <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-2xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/40">
//                                             <LucideIcon name="Briefcase" size={22} color="#22d3ee" strokeWidth={2} />
//                                         </div>
//                                         <h3 className="font-syne font-bold text-sm sm:text-base text-white mb-2 sm:mb-3 leading-tight">{c.role}</h3>
//                                         <div className="pt-2 sm:pt-3 border-t border-cyan-500/15">
//                                             <div className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-cyan-400">{c.growth}</div>
//                                         </div>
//                                     </li>
//                                 </Reveal>
//                             ))}
//                         </ul>
//                     </div>
//                 </section>

//                 {/* ============ PROJECTS ============ */}
//                 <section className="px-4 sm:px-8 md:px-10 py-14 sm:py-18 md:py-20 bg-[#061826]">
//                     <div className="max-w-[1240px] mx-auto">
//                         <Reveal>
//                             <div className="text-center mb-10 sm:mb-12">
//                                 <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Hands-On Projects</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.5rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                                     Build a{" "}
//                                     <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Portfolio That Hires</span>
//                                 </h2>
//                                 <p className="text-xs sm:text-sm text-gray-400 max-w-[560px] mx-auto leading-relaxed px-2">
//                                     Real AI projects you&apos;ll complete during this masterclass
//                                 </p>
//                             </div>
//                         </Reveal>

//                         <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
//                             {projects.map((project, i) => (
//                                 <Reveal key={project} delay={i * 60}>
//                                     <li className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/25 hover:-translate-y-0.5 transition-all">
//                                         <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-syne font-extrabold text-base sm:text-lg bg-gradient-to-br from-cyan-500 to-cyan-400 text-[#031a2b]">
//                                             {i + 1}
//                                         </div>
//                                         <div className="text-[13px] sm:text-[14px] text-gray-200 font-medium leading-relaxed">{project}</div>
//                                     </li>
//                                 </Reveal>
//                             ))}
//                         </ul>
//                     </div>
//                 </section>

//                 {/* ============ FAQ ============ */}
//                 <section className="px-4 sm:px-8 md:px-10 py-14 sm:py-18 md:py-20 bg-[#030f1a]">
//                     <div className="max-w-[900px] mx-auto">
//                         <Reveal>
//                             <div className="text-center mb-10 sm:mb-12">
//                                 <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// FAQ</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.5rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                                     Got{" "}
//                                     <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Questions?</span>
//                                 </h2>
//                                 <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
//                                     Everything you need to know about the AI Masterclass
//                                 </p>
//                             </div>
//                         </Reveal>

//                         <div className="space-y-3 sm:space-y-4">
//                             {faqs.map((faq, i) => (
//                                 <Reveal key={faq.question} delay={i * 80}>
//                                     <details className="group rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 overflow-hidden transition-all hover:border-cyan-500/40">
//                                         <summary className="flex items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 cursor-pointer list-none">
//                                             <h3 className="font-syne font-bold text-[13.5px] sm:text-[15px] text-white flex-1 text-left">{faq.question}</h3>
//                                             <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-open:rotate-45 bg-cyan-500/15 border border-cyan-500/40">
//                                                 <LucideIcon name="Plus" size={16} color="#22d3ee" strokeWidth={2.5} />
//                                             </div>
//                                         </summary>
//                                         <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-[13px] sm:text-[14px] text-gray-300 leading-relaxed border-t border-cyan-500/15 pt-3 sm:pt-4">
//                                             {faq.answer}
//                                         </div>
//                                     </details>
//                                 </Reveal>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* ============ FINAL CTA ============ */}
//                 <section className="relative px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#030f1a] via-[#0a2436] to-[#030f1a] text-center overflow-hidden">
//                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[500px] md:w-[600px] h-[160px] sm:h-[240px] md:h-[300px] bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />
//                     <div className="absolute bottom-0 left-1/4 w-44 sm:w-64 md:w-72 h-44 sm:h-64 md:h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

//                     <div className="max-w-[900px] mx-auto relative z-10">
//                         <Reveal>
//                             <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-[2px] uppercase mb-5 sm:mb-6 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400">
//                                 <LucideIcon name="Rocket" size={12} color="#22d3ee" strokeWidth={2} />
//                                 Start Your AI Journey
//                             </span>

//                             <h2 className="font-syne font-extrabold text-[clamp(1.7rem,3.5vw,2.8rem)] leading-tight tracking-tight text-white mb-4 sm:mb-5">
//                                 Start Your{" "}
//                                 <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">AI Journey Today</span>
//                             </h2>
//                             <p className="text-sm sm:text-base text-gray-400 max-w-[520px] mx-auto mb-7 sm:mb-9 leading-relaxed px-1">
//                                 Join hundreds of students who&apos;ve transformed their careers with AV Academy&apos;s AI Masterclass.
//                             </p>

//                             <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-7">
//                                 <Link
//                                     href="/contact"
//                                     className="inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-[15px] font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all active:scale-[0.98]"
//                                 >
//                                     <LucideIcon name="Zap" size={16} color="#031a2b" strokeWidth={2.5} />
//                                     Enquire Now
//                                 </Link>
//                                 <a
//                                     href="https://wa.me/917500206719?text=Hi! I want to join the AI Masterclass. Please share details."
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-[15px] font-syne tracking-wide bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/40 transition-all active:scale-[0.98]"
//                                 >
//                                     <LucideIcon name="MessageCircle" size={16} color="#ffffff" strokeWidth={2.5} />
//                                     WhatsApp Us
//                                 </a>
//                             </div>

//                             <div className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-6 gap-y-2 text-[12px] sm:text-[13px] text-gray-500">
//                                 <div className="flex items-center gap-1.5 sm:gap-2">
//                                     <LucideIcon name="Phone" size={13} color="#22d3ee" strokeWidth={2} />
//                                     <span className="text-gray-400">+91-7500206719</span>
//                                 </div>
//                                 <div className="hidden sm:block text-gray-700">·</div>
//                                 <div className="flex items-center gap-1.5 sm:gap-2">
//                                     <LucideIcon name="Mail" size={13} color="#22d3ee" strokeWidth={2} />
//                                     <span className="text-gray-400 break-all sm:break-normal">avacademy1706@gmail.com</span>
//                                 </div>
//                             </div>
//                         </Reveal>
//                     </div>
//                 </section>

//             </main>
//             <Footer />
//             <WAFloat />
//         </>
//     );
// }


"use client";
// app/ai-masterclass/AIMasterclassClient.tsx
// ✅ Sirf UI — fully mobile responsive with Tailwind

import Link from "next/link";
import LucideIcon from "@/components/LucideIcon";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WAFloat from "@/components/WAFloat";
import { Reveal } from "@/components/ScrollReveal";

// ============ DATA ============

const learn = [
    {
        num: "00",
        icon: "Sparkles",
        title: "AI Basics for Industry & Students",
        items: [
            "What is AI & How It Works (Simple Language)",
            "Top AI Tools Every Professional Must Know",
            "ChatGPT & Gemini for Office & Business Tasks",
            "AI for Packaging, Real Estate, Healthcare & More",
            "AI Safety, Ethics & Responsible Use at Work",
        ],
        tag: "Ideal for industry professionals & fresh students.",
    },
    {
        num: "01",
        icon: "Bot",
        title: "Core AI & ML Essentials",
        items: [
            "AI & Machine Learning Fundamentals",
            "ChatGPT, DALL·E, Midjourney, Gemini",
            "RunwayML for AI Video Generation",
            "Stable Diffusion & Image AI",
            "Natural Language Processing Basics",
        ],
        tag: "Build a rock-solid AI foundation.",
    },
    {
        num: "02",
        icon: "Palette",
        title: "Create with AI Tools",
        items: [
            "AI Art, Videos, Voice & Content Creation",
            "Build Your Own AI Tools & Projects",
            "Portfolio Building + Certification",
            "AI for Business Applications",
            "Monetization Strategies with AI",
        ],
        tag: "Create assets that command real rates.",
    },
    {
        num: "03",
        icon: "Brain",
        title: "Advanced AI Concepts",
        items: [
            "Agentic AI Fundamentals",
            "RAG (Retrieval Augmented Generation)",
            "LLM Workflows & Prompt Engineering",
            "API Integration & Automation",
            "Future AI Trends & Career Paths",
        ],
        tag: "Lead the AI revolution in your field.",
    },
];

const stats = [
    { num: "500+", label: "Students Trained", icon: "Users" },
    { num: "20+", label: "AI Tools Covered", icon: "Wrench" },
    { num: "6-8", label: "Weeks Duration", icon: "Clock" },
    { num: "100%", label: "Hands-On Learning", icon: "Code2" },
];

const highlights = [
    "20+ AI tools covered in depth",
    "Real industry projects to build portfolio",
    "Hindi + English bilingual instruction",
    "Lifetime access to course materials",
    "Industry-recognized certification",
    "Placement & freelancing support",
    "Live mentorship sessions",
    "Community of AI learners & professionals",
];

const tools = [
    "ChatGPT (GPT-4)", "Claude AI", "Google Gemini",
    "Midjourney", "DALL-E 3", "Stable Diffusion",
    "RunwayML", "Sora (when available)", "Adobe Firefly",
    "Eleven Labs", "LangChain", "Pinecone Vector DB",
    "OpenAI API", "Make.com / n8n",
];

const curriculum = [
    {
        title: "Module 1: AI Foundations",
        topics: ["History & evolution of AI", "Types of AI (Narrow, General, Super)", "Machine Learning basics", "Neural networks intro", "Current AI landscape"],
    },
    {
        title: "Module 2: ChatGPT & LLMs Mastery",
        topics: ["ChatGPT advanced techniques", "Claude vs GPT comparison", "Custom GPTs creation", "API integrations", "Cost optimization"],
    },
    {
        title: "Module 3: AI Image Generation",
        topics: ["Midjourney mastery", "DALL-E 3 workflows", "Stable Diffusion local setup", "Image editing with AI", "Commercial use rights"],
    },
    {
        title: "Module 4: AI Video & Audio",
        topics: ["RunwayML video generation", "AI voice cloning", "Eleven Labs mastery", "Music generation tools", "Video editing with AI"],
    },
    {
        title: "Module 5: Prompt Engineering",
        topics: ["Prompt frameworks", "Chain-of-thought prompting", "Few-shot learning", "Role-based prompts", "Token optimization"],
    },
    {
        title: "Module 6: Agentic AI & RAG",
        topics: ["Agentic AI fundamentals", "RAG implementation", "LangChain workflows", "Vector databases", "Building AI agents"],
    },
];

const whoIsItFor = [
    "Working professionals upgrading to AI skills",
    "Content creators & marketers",
    "Designers & video editors",
    "Students preparing for AI careers",
    "Business owners automating workflows",
    "Freelancers expanding services",
];

const careers = [
    { role: "AI Content Creator", growth: "High Demand" },
    { role: "Prompt Engineer", growth: "Top Paying" },
    { role: "AI Product Manager", growth: "Strategic" },
    { role: "AI Solutions Consultant", growth: "Premium Rates" },
];

const projects = [
    "Build a custom GPT for a specific industry",
    "Create AI art portfolio (50+ pieces)",
    "Generate AI video for a brand campaign",
    "Develop an AI chatbot using RAG",
    "Build an AI agent that automates workflows",
];

const faqs = [
    { question: "Do I need coding experience for this AI Masterclass?", answer: "No coding experience required! Our AI Masterclass is designed for everyone — students, professionals, business owners. We start from absolute basics and use no-code tools where possible." },
    { question: "What's the duration of this AI course?", answer: "The complete AI Masterclass is 6-8 weeks with flexible online and offline batches. You can also opt for fast-track 4-week intensive batches." },
    { question: "Will I get a certificate after completion?", answer: "Yes, you'll receive an industry-recognized AV Academy certificate. Plus, you'll have a portfolio of AI projects to showcase to employers or clients." },
    { question: "Is the course online or offline?", answer: "Both! Choose between online (Zoom live + recordings) or offline (Lucknow campus). Hybrid option also available where you can attend both modes flexibly." },
    { question: "What career opportunities are available after this course?", answer: "Many opportunities — AI Content Creator, Prompt Engineer, AI Consultant, Freelance AI Specialist. You can also use these skills to enhance your existing role or start an AI-powered business." },
    { question: "Are AI tool subscriptions included in fees?", answer: "Some free tools are used during learning. For premium tools (ChatGPT Plus, Midjourney), we provide guidance on what to subscribe to during and after the course." },
];

// ============ COMPONENT ============

export default function AIMasterclassClient() {
    return (
        <>
            <Navbar />
            <main className="bg-[#030f1a]">

                {/* ============ HERO ============ */}
                <section className="relative pt-28 sm:pt-36 md:pt-36 pb-14 sm:pb-20 px-4 sm:px-8 md:px-10 text-center overflow-hidden border-b border-cyan-500/15 bg-gradient-to-br from-[#061826] via-[#0a2436] to-[#061826]">
                    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[260px] sm:w-[460px] md:w-[600px] h-[160px] sm:h-[240px] md:h-[300px] rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
                    <div className="absolute top-[30%] left-[4%] w-28 sm:w-44 md:w-52 h-28 sm:h-44 md:h-52 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-[10%] right-[5%] w-32 sm:w-48 md:w-60 h-32 sm:h-48 md:h-60 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
                    <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,180,216,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,180,216,.04) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

                    <div className="relative z-10 max-w-[1000px] mx-auto">
                        <p className="font-syne font-bold text-[10px] sm:text-[13px] tracking-[4px] sm:tracking-[5px] uppercase mb-3 sm:mb-4 text-cyan-400">
                            AV ACADEMY — WHERE EDITS COME TO LIFE
                        </p>

                        <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-[12px] font-bold tracking-[2px] uppercase mb-5 sm:mb-6 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 shadow-[0_0_30px_rgba(0,180,216,0.2)]">
                            <LucideIcon name="Flame" size={12} color="#22d3ee" strokeWidth={2.5} />
                            Most Popular Course
                        </span>

                        <h1 className="font-syne font-extrabold leading-[1.1] tracking-tight mb-4 sm:mb-5 text-[clamp(1.9rem,6vw,3.8rem)] text-white">
                            <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
                                Artificial Intelligence
                            </span>
                            <br />
                            Masterclasses
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-[700px] mx-auto leading-relaxed mb-7 sm:mb-8 px-1">
                            AI Isn&apos;t the Future. It&apos;s the Present. From ChatGPT and Midjourney to self-driving cars — AI is shaping careers, businesses, and the world. Don&apos;t be left behind.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3 sm:gap-3.5">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-[14px] font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all active:scale-[0.98]"
                            >
                                <LucideIcon name="Zap" size={15} color="#031a2b" strokeWidth={2.5} />
                                Join Us Now
                            </Link>
                            <Link
                                href="/courses"
                                className="inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-[14px] font-syne tracking-wide bg-transparent border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all active:scale-[0.98]"
                            >
                                <LucideIcon name="BookOpen" size={15} color="#22d3ee" strokeWidth={2.5} />
                                View All Courses
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ============ STATS BAR ============ */}
                <section aria-label="Course Stats" className="px-4 sm:px-8 md:px-10 py-8 sm:py-10 bg-[#061826] border-b border-cyan-500/10">
                    <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                        {stats.map((s) => (
                            <div
                                key={s.label}
                                className="flex items-center gap-3 sm:gap-4 px-3.5 sm:px-5 py-4 sm:py-5 rounded-2xl bg-gradient-to-br from-[#082c44]/80 to-[#030f1a]/90 border border-cyan-500/15 hover:border-cyan-500/40 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-cyan-500/15 border border-cyan-500/40">
                                    <LucideIcon name={s.icon} size={18} color="#22d3ee" strokeWidth={2} />
                                </div>
                                <div>
                                    <div className="font-syne font-extrabold text-xl sm:text-2xl leading-none text-white">{s.num}</div>
                                    <div className="text-[9px] sm:text-[11px] text-gray-400 uppercase tracking-wider font-semibold mt-1">{s.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ============ WHAT YOU'LL LEARN ============ */}
                <section className="px-4 sm:px-8 md:px-10 py-14 sm:py-18 md:py-20 bg-[#030f1a]">
                    <div className="max-w-[1280px] mx-auto">
                        <Reveal>
                            <div className="text-center mb-10 sm:mb-14">
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// What You&apos;ll Learn</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.6rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-3 sm:mb-4">
                                    Four Pillars of{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">AI Mastery</span>
                                </h2>
                                <p className="text-sm sm:text-[15px] text-gray-400 max-w-[620px] mx-auto leading-relaxed px-2">
                                    From basics to advanced techniques — everything you need to become AI-fluent
                                </p>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
                            {learn.map((item, i) => (
                                <Reveal key={item.num} delay={i * 80}>
                                    <div className="h-full relative p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/25 hover:border-cyan-500/50 transition-all hover:-translate-y-1.5 hover:shadow-2xl group overflow-hidden">
                                        <div className="absolute top-0 left-0 right-0 h-[3px] opacity-60 bg-gradient-to-r from-cyan-400 to-cyan-600" />
                                        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none bg-cyan-500/25" />

                                        <div className="font-syne font-extrabold text-5xl sm:text-6xl leading-none mb-3 text-cyan-500/10">{item.num}</div>

                                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 relative z-10 bg-cyan-500/15 border border-cyan-500/40 shadow-lg shadow-cyan-500/20">
                                            <LucideIcon name={item.icon} size={24} color="#22d3ee" strokeWidth={2} />
                                        </div>

                                        <h3 className="font-syne font-extrabold text-base sm:text-lg text-white mb-3 sm:mb-4 relative z-10">{item.title}</h3>

                                        <ul className="space-y-2 mb-4 sm:mb-5 relative z-10">
                                            {item.items.map((li) => (
                                                <li key={li} className="flex items-start gap-2 text-[12.5px] sm:text-[13px] text-gray-300 leading-relaxed">
                                                    <span className="flex-shrink-0 mt-0.5">
                                                        <LucideIcon name="CheckCircle2" size={13} color="#22d3ee" strokeWidth={2.5} />
                                                    </span>
                                                    <span>{li}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <p className="text-[12px] sm:text-[13px] italic font-medium pt-3 sm:pt-4 border-t border-cyan-500/20 text-cyan-400 relative z-10">
                                            → {item.tag}
                                        </p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============ HIGHLIGHTS ============ */}
                <section className="px-4 sm:px-8 md:px-10 py-14 sm:py-18 md:py-20 bg-[#061826]">
                    <div className="max-w-[1240px] mx-auto">
                        <Reveal>
                            <div className="text-center mb-10 sm:mb-12">
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Course Highlights</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.5rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white">
                                    Why This{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Masterclass Stands Out</span>
                                </h2>
                            </div>
                        </Reveal>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                            {highlights.map((h, i) => (
                                <Reveal key={h} delay={i * 60}>
                                    <li className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#082c44]/80 to-[#030f1a]/90 border border-cyan-500/15 hover:border-cyan-500/40 hover:-translate-y-1 transition-all h-full">
                                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-cyan-500/15 border border-cyan-500/40">
                                            <LucideIcon name="CheckCircle2" size={18} color="#22d3ee" strokeWidth={2.5} />
                                        </div>
                                        <div className="text-[12.5px] sm:text-[13px] text-gray-200 font-medium leading-relaxed pt-1">{h}</div>
                                    </li>
                                </Reveal>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ============ WHO + TOOLS ============ */}
                <section className="px-4 sm:px-8 md:px-10 py-14 sm:py-18 md:py-20 bg-[#030f1a]">
                    <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
                        <Reveal direction="left">
                            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 h-full">
                                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/40 flex-shrink-0">
                                        <LucideIcon name="Users" size={20} color="#22d3ee" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-0.5">// Perfect For</div>
                                        <h2 className="font-syne font-extrabold text-lg sm:text-xl text-white">Who Is This For?</h2>
                                    </div>
                                </div>
                                <ul className="space-y-2.5 sm:space-y-3">
                                    {whoIsItFor.map((person) => (
                                        <li key={person} className="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-gray-300">
                                            <div className="flex-shrink-0 mt-0.5">
                                                <LucideIcon name="ArrowRight" size={15} color="#22d3ee" strokeWidth={2.5} />
                                            </div>
                                            <span>{person}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal direction="right">
                            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 h-full">
                                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/40 flex-shrink-0">
                                        <LucideIcon name="Wrench" size={20} color="#22d3ee" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-0.5">// AI Tools</div>
                                        <h2 className="font-syne font-extrabold text-lg sm:text-xl text-white">Tools You&apos;ll Master</h2>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-[11.5px] sm:text-[12.5px] font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 transition-colors"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* ============ CURRICULUM ============ */}
                <section className="relative px-4 sm:px-8 md:px-10 py-14 sm:py-18 md:py-20 bg-[#061826] overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[300px] sm:h-[600px] rounded-full blur-3xl pointer-events-none bg-cyan-500/[0.04]" />

                    <div className="max-w-[1240px] mx-auto relative z-10">
                        <Reveal>
                            <div className="text-center mb-10 sm:mb-12">
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Detailed Curriculum</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.5rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
                                    6-Module{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Learning Path</span>
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-400 max-w-[560px] mx-auto leading-relaxed px-2">
                                    Structured curriculum from beginner to AI expert
                                </p>
                            </div>
                        </Reveal>

                        <ol className="space-y-3 sm:space-y-4">
                            {curriculum.map((module, idx) => (
                                <Reveal key={module.title} delay={idx * 60}>
                                    <li className="rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/25 hover:border-cyan-500/50 transition-all hover:-translate-y-0.5 overflow-hidden">
                                        <article className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 sm:gap-5 p-5 sm:p-6">
                                            <div className="flex sm:flex-col items-center gap-3 sm:gap-2">
                                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-syne font-extrabold text-xl sm:text-2xl bg-gradient-to-br from-cyan-500 to-cyan-400 text-[#031a2b] shadow-lg shadow-cyan-500/40 flex-shrink-0">
                                                    {String(idx + 1).padStart(2, "0")}
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-syne font-bold text-base sm:text-lg text-white mb-2 sm:mb-3">{module.title}</h3>
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                                                    {module.topics.map((topic) => (
                                                        <li key={topic} className="flex items-center gap-2 text-[12px] sm:text-[13px] text-gray-300">
                                                            <LucideIcon name="Check" size={13} color="#22d3ee" strokeWidth={3} />
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

                {/* ============ CAREER OPPORTUNITIES ============ */}
                <section className="px-4 sm:px-8 md:px-10 py-14 sm:py-18 md:py-20 bg-[#030f1a]">
                    <div className="max-w-[1240px] mx-auto">
                        <Reveal>
                            <div className="text-center mb-10 sm:mb-12">
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Career Paths</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.5rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
                                    Where This Course{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Takes You</span>
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-400 max-w-[560px] mx-auto leading-relaxed px-2">
                                    AI is the most in-demand skill — these are some career paths you can pursue
                                </p>
                            </div>
                        </Reveal>

                        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
                            {careers.map((c, i) => (
                                <Reveal key={c.role} delay={i * 80}>
                                    <li className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 text-center hover:border-cyan-500/50 hover:-translate-y-1 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-2xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/40">
                                            <LucideIcon name="Briefcase" size={22} color="#22d3ee" strokeWidth={2} />
                                        </div>
                                        <h3 className="font-syne font-bold text-sm sm:text-base text-white mb-2 sm:mb-3 leading-tight">{c.role}</h3>
                                        <div className="pt-2 sm:pt-3 border-t border-cyan-500/15">
                                            <div className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-cyan-400">{c.growth}</div>
                                        </div>
                                    </li>
                                </Reveal>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ============ PROJECTS ============ */}
                <section className="px-4 sm:px-8 md:px-10 py-14 sm:py-18 md:py-20 bg-[#061826]">
                    <div className="max-w-[1240px] mx-auto">
                        <Reveal>
                            <div className="text-center mb-10 sm:mb-12">
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Hands-On Projects</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.5rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
                                    Build a{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Portfolio That Hires</span>
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-400 max-w-[560px] mx-auto leading-relaxed px-2">
                                    Real AI projects you&apos;ll complete during this masterclass
                                </p>
                            </div>
                        </Reveal>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                            {projects.map((project, i) => (
                                <Reveal key={project} delay={i * 60}>
                                    <li className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/25 hover:-translate-y-0.5 transition-all">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-syne font-extrabold text-base sm:text-lg bg-gradient-to-br from-cyan-500 to-cyan-400 text-[#031a2b]">
                                            {i + 1}
                                        </div>
                                        <div className="text-[13px] sm:text-[14px] text-gray-200 font-medium leading-relaxed">{project}</div>
                                    </li>
                                </Reveal>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ============ FAQ ============ */}
                <section className="px-4 sm:px-8 md:px-10 py-14 sm:py-18 md:py-20 bg-[#030f1a]">
                    <div className="max-w-[900px] mx-auto">
                        <Reveal>
                            <div className="text-center mb-10 sm:mb-12">
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// FAQ</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.5rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
                                    Got{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Questions?</span>
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                                    Everything you need to know about the AI Masterclass
                                </p>
                            </div>
                        </Reveal>

                        <div className="space-y-3 sm:space-y-4">
                            {faqs.map((faq, i) => (
                                <Reveal key={faq.question} delay={i * 80}>
                                    <details className="group rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 overflow-hidden transition-all hover:border-cyan-500/40">
                                        <summary className="flex items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 cursor-pointer list-none">
                                            <h3 className="font-syne font-bold text-[13.5px] sm:text-[15px] text-white flex-1 text-left">{faq.question}</h3>
                                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-open:rotate-45 bg-cyan-500/15 border border-cyan-500/40">
                                                <LucideIcon name="Plus" size={16} color="#22d3ee" strokeWidth={2.5} />
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

                {/* ============ FINAL CTA ============ */}
                <section className="relative px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#030f1a] via-[#0a2436] to-[#030f1a] text-center overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[500px] md:w-[600px] h-[160px] sm:h-[240px] md:h-[300px] bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />
                    <div className="absolute bottom-0 left-1/4 w-44 sm:w-64 md:w-72 h-44 sm:h-64 md:h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

                    <div className="max-w-[900px] mx-auto relative z-10">
                        <Reveal>
                            <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-[2px] uppercase mb-5 sm:mb-6 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400">
                                <LucideIcon name="Rocket" size={12} color="#22d3ee" strokeWidth={2} />
                                Start Your AI Journey
                            </span>

                            <h2 className="font-syne font-extrabold text-[clamp(1.7rem,3.5vw,2.8rem)] leading-tight tracking-tight text-white mb-4 sm:mb-5">
                                Start Your{" "}
                                <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">AI Journey Today</span>
                            </h2>
                            <p className="text-sm sm:text-base text-gray-400 max-w-[520px] mx-auto mb-7 sm:mb-9 leading-relaxed px-1">
                                Join hundreds of students who&apos;ve transformed their careers with AV Academy&apos;s AI Masterclass.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-7">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-[15px] font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all active:scale-[0.98]"
                                >
                                    <LucideIcon name="Zap" size={16} color="#031a2b" strokeWidth={2.5} />
                                    Enquire Now
                                </Link>
                                <a
                                    href="https://wa.me/917500206719?text=Hi! I want to join the AI Masterclass. Please share details."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-[15px] font-syne tracking-wide bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/40 transition-all active:scale-[0.98]"
                                >
                                    <LucideIcon name="MessageCircle" size={16} color="#ffffff" strokeWidth={2.5} />
                                    WhatsApp Us
                                </a>
                            </div>

                            <div className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-6 gap-y-2 text-[12px] sm:text-[13px] text-gray-500">
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <LucideIcon name="Phone" size={13} color="#22d3ee" strokeWidth={2} />
                                    <span className="text-gray-400">+91-7500206719</span>
                                </div>
                                <div className="hidden sm:block text-gray-700">·</div>
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <LucideIcon name="Mail" size={13} color="#22d3ee" strokeWidth={2} />
                                    <span className="text-gray-400 break-all sm:break-normal">avacademy1706@gmail.com</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

            </main>
            <Footer />
            <WAFloat />
        </>
    );
}