// // app/vr-developer/page.tsx
// // VR Developer — UNIQUE immersive structure (different from AI Masterclass)

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
//     title: "VR Developer Course in Lucknow | Unity, Unreal & Meta Quest | AV Academy",
//     description: "Become a VR Developer at AV Academy Lucknow. Master Unity, Unreal Engine, Meta Quest, WebXR & immersive 3D development. 4-6 month program with real projects.",
//     keywords: ["vr developer course lucknow", "virtual reality course", "unity vr training", "unreal engine vr", "meta quest development", "vr training india"],
//     alternates: { canonical: `${SITE_URL}/vr-developer` },
//     openGraph: {
//         title: "VR Developer Course | AV Academy",
//         description: "Master Unity, Unreal Engine & Meta Quest VR development.",
//         url: `${SITE_URL}/vr-developer`,
//         siteName: "AV Academy",
//         locale: "en_IN",
//         type: "website",
//     },
//     robots: { index: true, follow: true },
// };

// // ============ DATA ============

// // 4-step learning journey
// const learningJourney = [
//     { week: "WEEKS 1-3", title: "Foundation Phase", icon: "Compass", desc: "VR hardware, 3D basics in Blender, design principles, and your first immersive scene." },
//     { week: "WEEKS 4-8", title: "Unity Mastery", icon: "Gamepad2", desc: "C# programming, XR Interaction Toolkit, VR controllers, and physics-based interactions." },
//     { week: "WEEKS 9-14", title: "Advanced Skills", icon: "Layers", desc: "Hand tracking, multiplayer VR, Unreal Engine basics, and photorealistic rendering." },
//     { week: "WEEKS 15-18", title: "Publishing Phase", icon: "Rocket", desc: "Portfolio building, Meta Store submission, SteamVR deployment, and career launch." },
// ];

// // VR Industries with use cases
// const industries = [
//     { icon: "Gamepad2", name: "Gaming", desc: "AAA VR games, indie experiences, multiplayer worlds" },
//     { icon: "GraduationCap", name: "Education", desc: "Interactive learning, virtual classrooms, simulations" },
//     { icon: "Building2", name: "Architecture", desc: "Virtual walkthroughs, design reviews, client presentations" },
//     { icon: "Heart", name: "Healthcare", desc: "Medical training, therapy, surgical simulations" },
//     { icon: "Factory", name: "Manufacturing", desc: "Worker training, equipment simulations, safety drills" },
//     { icon: "ShoppingBag", name: "Retail", desc: "Virtual showrooms, product demos, try-before-buy" },
// ];

// // Tech stack with categories
// const techStack = {
//     "Game Engines": ["Unity 3D", "Unreal Engine 5", "Godot (intro)"],
//     "Programming": ["C# (Unity)", "C++ / Blueprints", "JavaScript (WebXR)"],
//     "3D Tools": ["Blender", "Substance Painter", "Quill (VR drawing)"],
//     "VR SDKs": ["Meta Quest SDK", "OpenXR", "XR Interaction Toolkit", "WebXR API"],
//     "Frameworks": ["A-Frame", "Three.js", "Photon (Multiplayer)"],
// };

// // Detailed curriculum with topics
// const curriculum = [
//     {
//         phase: "Phase 1",
//         title: "VR Foundations & 3D Modeling",
//         duration: "3 Weeks",
//         topics: ["VR hardware ecosystem (Meta Quest, Vive, Index)", "VR design principles & UX", "Blender for VR assets", "Low-poly modeling techniques", "UV mapping & PBR texturing"],
//     },
//     {
//         phase: "Phase 2",
//         title: "Unity VR Development",
//         duration: "5 Weeks",
//         topics: ["Unity interface & C# basics", "XR Interaction Toolkit deep dive", "VR controllers & input handling", "Locomotion systems (teleport, smooth)", "Scene management & optimization"],
//     },
//     {
//         phase: "Phase 3",
//         title: "Advanced VR Features",
//         duration: "4 Weeks",
//         topics: ["Hand tracking & gestures", "Multiplayer VR with Photon", "VR physics & haptics", "Spatial audio implementation", "Performance profiling for Quest"],
//     },
//     {
//         phase: "Phase 4",
//         title: "Unreal Engine VR",
//         duration: "3 Weeks",
//         topics: ["Unreal interface & Blueprints", "VR template configuration", "Photorealistic environments", "Niagara particle effects", "Cross-platform deployment"],
//     },
//     {
//         phase: "Phase 5",
//         title: "Publishing & Portfolio",
//         duration: "3 Weeks",
//         topics: ["Meta Store submission process", "SteamVR publishing", "WebXR deployment", "Portfolio website building", "Freelancing & job applications"],
//     },
// ];

// // Showcase projects with descriptions
// const showcaseProjects = [
//     { num: "01", icon: "Gamepad2", title: "VR Escape Room", desc: "A complete physics-based puzzle game with multiple rooms, lighting effects, and immersive sound design.", tech: ["Unity", "C#", "XR Toolkit"] },
//     { num: "02", icon: "Building2", title: "Architectural Walkthrough", desc: "Photorealistic virtual tour of a luxury villa with day/night cycle and interactive furniture.", tech: ["Unreal", "Blueprints", "Niagara"] },
//     { num: "03", icon: "Users", title: "Multiplayer VR Lobby", desc: "Real-time social VR experience with voice chat, avatars, and synchronized interactions.", tech: ["Unity", "Photon", "VRChat-style"] },
//     { num: "04", icon: "Heart", title: "VR Meditation App", desc: "Calming immersive environments with guided breathing, ambient sound, and progress tracking.", tech: ["Unity", "Spatial Audio", "Meta Quest"] },
//     { num: "05", icon: "GraduationCap", title: "Educational VR Module", desc: "Interactive learning experience teaching anatomy/physics with hand interactions and quizzes.", tech: ["Unity", "XR Toolkit", "WebXR"] },
// ];

// // Career paths with salary ranges
// const careerPaths = [
//     { role: "Unity VR Developer", level: "Entry-Mid", scope: "Game studios, EdTech companies, agencies" },
//     { role: "XR Engineer", level: "Senior", scope: "Tech giants (Meta, Apple, Microsoft)" },
//     { role: "VR Designer", level: "Creative", scope: "Design agencies, gaming studios" },
//     { role: "Freelance VR Consultant", level: "Independent", scope: "Global clients via Upwork, Toptal" },
//     { role: "VR Trainer/Educator", level: "Teaching", scope: "Universities, online platforms" },
//     { role: "AR/VR Startup Founder", level: "Entrepreneur", scope: "Build your own immersive products" },
// ];

// // Why VR section
// const whyVR = [
//     { stat: "$32B", label: "VR Market Size 2030" },
//     { stat: "50%", label: "Annual Industry Growth" },
//     { stat: "10M+", label: "Meta Quest Devices Sold" },
//     { stat: "₹15L+", label: "Average VR Dev Salary" },
// ];

// // What makes us different
// const differences = [
//     { icon: "Headset", title: "Real VR Hardware", desc: "Hands-on practice with Meta Quest 3 devices at our campus — not just theory" },
//     { icon: "Code2", title: "Industry Code Reviews", desc: "Your code reviewed by working VR developers — learn how professionals build" },
//     { icon: "Globe", title: "Global Job Network", desc: "Direct connections with VR studios in India, USA, and Europe for placements" },
//     { icon: "Sparkles", title: "Cutting-Edge Curriculum", desc: "Updated quarterly to include latest Meta, Apple Vision Pro, and Quest releases" },
// ];

// // FAQs
// const faqs = [
//     { question: "Do I need a VR headset to start this course?", answer: "Not at the start. We provide hands-on practice with Meta Quest devices at our Lucknow campus. By Module 3, having your own Meta Quest 3 (~₹40K) gives you the best learning experience." },
//     { question: "Is coding experience required for VR development?", answer: "No prior coding experience needed. We teach C# (Unity) and Blueprints (Unreal) from absolute basics. Logic-thinking skills help, but we build them along the way." },
//     { question: "What's the salary range for VR developers in India?", answer: "Entry-level VR developers earn ₹4-8 LPA. Mid-level developers earn ₹10-20 LPA. Senior XR engineers at Meta/Apple earn ₹30-60 LPA. Freelancers can earn ₹40K-2L per month." },
//     { question: "Will I be able to publish on Meta Store after this course?", answer: "Yes, our Phase 5 specifically covers Meta Store submission process. We guide you through requirements, app review process, and publishing your first VR app commercially." },
//     { question: "Is VR the future or just a trend?", answer: "VR is the next computing platform. With Apple Vision Pro, Meta Quest 3, and constant investment from tech giants, VR developers are among the most in-demand and highest-paid tech professionals globally." },
// ];

// export default function VRDeveloperPage() {
//     const courseSchema = {
//         "@context": "https://schema.org",
//         "@type": "Course",
//         name: "VR Developer Course — AV Academy Lucknow",
//         description: "Comprehensive VR development training covering Unity, Unreal Engine, Meta Quest, WebXR",
//         provider: {
//             "@type": "EducationalOrganization",
//             name: "AV Academy",
//             url: SITE_URL,
//         },
//         educationalLevel: "Beginner to Advanced",
//         inLanguage: ["en", "hi"],
//         aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "200", bestRating: "5" },
//     };

//     const faqSchema = {
//         "@context": "https://schema.org",
//         "@type": "FAQPage",
//         mainEntity: faqs.map((faq) => ({
//             "@type": "Question",
//             name: faq.question,
//             acceptedAnswer: { "@type": "Answer", text: faq.answer },
//         })),
//     };

//     return (
//         <>
//             <Script id="course-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
//             <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

//             <Navbar />
//             <main className="bg-[#030f1a]">

//                 {/* ============ HERO — SPLIT LAYOUT ============ */}
//                 <section className="relative pt-32 pb-16 px-10 overflow-hidden border-b border-cyan-500/15 bg-gradient-to-br from-[#061826] via-[#0a2436] to-[#061826]">
//                     {/* Animated glows */}
//                     <div className="absolute top-[20%] left-[5%] w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none animate-pulse" />
//                     <div className="absolute bottom-[10%] right-[5%] w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

//                     {/* Grid pattern */}
//                     <div
//                         className="absolute inset-0 opacity-40 pointer-events-none"
//                         style={{
//                             backgroundImage: "linear-gradient(rgba(0,180,216,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,.04) 1px, transparent 1px)",
//                             backgroundSize: "60px 60px",
//                         }}
//                     />

//                     <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
//                         {/* LEFT — Content */}
//                         <div>
//                             <nav aria-label="Breadcrumb" className="mb-6">
//                                 <ol className="inline-flex items-center gap-2 text-[12px] text-gray-500 px-4 py-2 rounded-full bg-[#082c44]/60 border border-cyan-500/15">
//                                     <li><Link href="/" className="text-cyan-400 font-semibold hover:text-cyan-300">Home</Link></li>
//                                     <li><LucideIcon name="ChevronRight" size={12} color="#6b7280" /></li>
//                                     <li><Link href="/courses" className="text-cyan-400 font-semibold hover:text-cyan-300">Courses</Link></li>
//                                     <li><LucideIcon name="ChevronRight" size={12} color="#6b7280" /></li>
//                                     <li className="text-gray-300" aria-current="page">VR Developer</li>
//                                 </ol>
//                             </nav>

//                             <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[2px] uppercase mb-6 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 shadow-[0_0_30px_rgba(0,180,216,0.2)]">
//                                 <LucideIcon name="Sparkles" size={12} color="#22d3ee" strokeWidth={2.5} />
//                                 Future Tech Career
//                             </span>

//                             <h1 className="font-syne font-extrabold leading-[1.05] tracking-tight mb-5 text-[clamp(2rem,4.5vw,3.5rem)] text-white">
//                                 Build the Future in{" "}
//                                 <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                                     Virtual Reality
//                                 </span>
//                             </h1>

//                             <p className="text-base md:text-lg text-gray-400 mb-7 leading-relaxed max-w-[600px]">
//                                 Master Unity, Unreal Engine, and Meta Quest development. Create immersive experiences that the world hasn&apos;t seen yet — and get paid premium rates to do it.
//                             </p>

//                             {/* Quick stats inline */}
//                             <div className="flex flex-wrap gap-2 mb-7">
//                                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#082c44]/80 border border-cyan-500/25 text-gray-300">
//                                     <LucideIcon name="Clock" size={12} color="#22d3ee" strokeWidth={2.5} />
//                                     18 Weeks
//                                 </div>
//                                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#082c44]/80 border border-cyan-500/25 text-gray-300">
//                                     <LucideIcon name="Laptop" size={12} color="#22d3ee" strokeWidth={2.5} />
//                                     Online + Offline
//                                 </div>
//                                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#082c44]/80 border border-cyan-500/25 text-gray-300">
//                                     <LucideIcon name="Headset" size={12} color="#22d3ee" strokeWidth={2.5} />
//                                     Meta Quest Included
//                                 </div>
//                                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#082c44]/80 border border-cyan-500/25 text-gray-300">
//                                     <LucideIcon name="Languages" size={12} color="#22d3ee" strokeWidth={2.5} />
//                                     Hindi + English
//                                 </div>
//                             </div>

//                             <div className="flex flex-wrap gap-3">
//                                 <Link
//                                     href="/contact"
//                                     className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[13px] font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all"
//                                 >
//                                     <LucideIcon name="Rocket" size={14} color="#031a2b" strokeWidth={2.5} />
//                                     Start Your VR Journey
//                                 </Link>
//                                 <a
//                                     href="https://wa.me/919675903348?text=Hi! I want to know about the VR Developer Course."
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[13px] font-syne tracking-wide bg-transparent border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 transition-all"
//                                 >
//                                     <LucideIcon name="MessageCircle" size={14} color="#22d3ee" strokeWidth={2.5} />
//                                     Talk to Counselor
//                                 </a>
//                             </div>
//                         </div>

//                         {/* RIGHT — VR Headset Visual Card */}
//                         <Reveal direction="right">
//                             <div className="relative">
//                                 {/* Animated rings */}
//                                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                                     <div className="w-[280px] h-[280px] rounded-full border border-cyan-500/20 animate-pulse" />
//                                     <div className="absolute w-[340px] h-[340px] rounded-full border border-cyan-500/10" />
//                                     <div className="absolute w-[400px] h-[400px] rounded-full border border-cyan-500/5" />
//                                 </div>

//                                 {/* Center VR Card */}
//                                 <div className="relative rounded-3xl p-8 border-2 border-cyan-500/40 bg-gradient-to-br from-[#082c44]/95 to-[#030f1a]/95 shadow-[0_25px_60px_rgba(0,180,216,0.25)]">
//                                     <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 rounded-t-3xl" />

//                                     <div className="w-24 h-24 mx-auto mb-5 rounded-2xl flex items-center justify-center bg-gradient-to-br from-cyan-500 to-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.5)]">
//                                         <LucideIcon name="Box" size={50} color="#031a2b" strokeWidth={2} />
//                                     </div>

//                                     <div className="text-center mb-5">
//                                         <div className="text-[10px] tracking-[3px] uppercase text-cyan-400 font-bold mb-1">Career Track</div>
//                                         <h3 className="font-syne font-extrabold text-xl text-white">VR Developer</h3>
//                                         <div className="text-[12px] text-gray-400 mt-1">Industry-Ready in 18 Weeks</div>
//                                     </div>

//                                     {/* Live indicators */}
//                                     <div className="space-y-2.5 pt-5 border-t border-cyan-500/20">
//                                         <div className="flex items-center justify-between text-[12px]">
//                                             <span className="text-gray-400">Skill Level</span>
//                                             <div className="flex gap-1">
//                                                 {[1, 2, 3, 4, 5].map((i) => (
//                                                     <div key={i} className="w-5 h-1.5 rounded-full bg-cyan-400" />
//                                                 ))}
//                                             </div>
//                                         </div>
//                                         <div className="flex items-center justify-between text-[12px]">
//                                             <span className="text-gray-400">Job Demand</span>
//                                             <span className="text-cyan-400 font-bold flex items-center gap-1">
//                                                 <LucideIcon name="TrendingUp" size={12} color="#22d3ee" strokeWidth={2.5} />
//                                                 Very High
//                                             </span>
//                                         </div>
//                                         <div className="flex items-center justify-between text-[12px]">
//                                             <span className="text-gray-400">Avg Salary</span>
//                                             <span className="text-white font-bold">₹6-30 LPA</span>
//                                         </div>
//                                         <div className="flex items-center justify-between text-[12px]">
//                                             <span className="text-gray-400">Industry</span>
//                                             <span className="text-white font-bold">Gaming, EdTech, Med</span>
//                                         </div>
//                                     </div>

//                                     {/* Pulse dot */}
//                                     <div className="flex items-center justify-center gap-2 mt-5 text-[11px] text-cyan-400">
//                                         <span className="relative flex h-2 w-2">
//                                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
//                                             <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
//                                         </span>
//                                         Live batches starting soon
//                                     </div>
//                                 </div>
//                             </div>
//                         </Reveal>
//                     </div>
//                 </section>

//                 {/* ============ WHY VR NOW — MARKET STATS ============ */}
//                 <section className="px-10 py-16 bg-[#061826] border-b border-cyan-500/10">
//                     <div className="max-w-[1240px] mx-auto">
//                         <Reveal>
//                             <div className="text-center mb-10">
//                                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Why VR. Why Now.</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.2rem)] text-white">
//                                     The VR Industry is{" "}
//                                     <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Exploding</span>
//                                 </h2>
//                             </div>
//                         </Reveal>

//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                             {whyVR.map((s, i) => (
//                                 <Reveal key={s.label} delay={i * 60}>
//                                     <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/80 to-[#030f1a]/90 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:-translate-y-1">
//                                         <div className="font-syne font-extrabold text-3xl md:text-4xl text-white mb-2">{s.stat}</div>
//                                         <div className="text-[11px] text-cyan-400 uppercase tracking-wider font-semibold">{s.label}</div>
//                                     </div>
//                                 </Reveal>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* ============ LEARNING JOURNEY — TIMELINE ============ */}
//                 <section className="px-10 py-20 bg-[#030f1a] relative overflow-hidden">
//                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none bg-cyan-500/[0.03]" />

//                     <div className="max-w-[1240px] mx-auto relative z-10">
//                         <Reveal>
//                             <div className="text-center mb-14">
//                                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Your Learning Journey</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
//                                     From Beginner to{" "}
//                                     <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">VR Pro in 18 Weeks</span>
//                                 </h2>
//                                 <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
//                                     A structured 4-phase journey designed to take you from zero to job-ready
//                                 </p>
//                             </div>
//                         </Reveal>

//                         {/* Timeline with connecting line */}
//                         <div className="relative">
//                             {/* Vertical line (mobile) / Horizontal line (desktop) */}
//                             <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

//                             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative">
//                                 {learningJourney.map((step, i) => (
//                                     <Reveal key={step.title} delay={i * 100}>
//                                         <div className="flex flex-col items-center text-center">
//                                             {/* Icon circle */}
//                                             <div className="relative w-24 h-24 rounded-full flex items-center justify-center mb-5 bg-gradient-to-br from-cyan-500 to-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)] z-10">
//                                                 <LucideIcon name={step.icon} size={36} color="#031a2b" strokeWidth={2} />
//                                                 {/* Pulse animation */}
//                                                 <div className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping" />
//                                             </div>

//                                             <div className="text-[10px] tracking-[2px] uppercase text-cyan-400 font-bold mb-2">{step.week}</div>
//                                             <h3 className="font-syne font-bold text-lg text-white mb-3">{step.title}</h3>
//                                             <p className="text-[13px] text-gray-400 leading-relaxed">{step.desc}</p>
//                                         </div>
//                                     </Reveal>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* ============ INDUSTRIES VR IS TRANSFORMING ============ */}
//                 <section className="px-10 py-20 bg-[#061826]">
//                     <div className="max-w-[1280px] mx-auto">
//                         <Reveal>
//                             <div className="text-center mb-14">
//                                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Where VR Is Going</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
//                                     6 Industries{" "}
//                                     <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Hungry for VR Developers</span>
//                                 </h2>
//                                 <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
//                                     Your skills will be in demand across these high-growth sectors
//                                 </p>
//                             </div>
//                         </Reveal>

//                         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                             {industries.map((ind, i) => (
//                                 <Reveal key={ind.name} delay={i * 60}>
//                                     <div className="p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 hover:border-cyan-500/50 hover:-translate-y-1 transition-all group">
//                                         <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-cyan-500/15 border border-cyan-500/40 group-hover:scale-110 transition-transform">
//                                             <LucideIcon name={ind.icon} size={24} color="#22d3ee" strokeWidth={2} />
//                                         </div>
//                                         <h3 className="font-syne font-bold text-base text-white mb-2">{ind.name}</h3>
//                                         <p className="text-[13px] text-gray-400 leading-relaxed">{ind.desc}</p>
//                                     </div>
//                                 </Reveal>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* ============ TECH STACK — CATEGORIZED ============ */}
//                 <section className="px-10 py-20 bg-[#030f1a]">
//                     <div className="max-w-[1240px] mx-auto">
//                         <Reveal>
//                             <div className="text-center mb-14">
//                                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Your Tech Arsenal</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
//                                     Master{" "}
//                                     <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Industry-Grade Tools</span>
//                                 </h2>
//                                 <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
//                                     Every tool we teach is used by top VR studios worldwide
//                                 </p>
//                             </div>
//                         </Reveal>

//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//                             {Object.entries(techStack).map(([category, tools], i) => (
//                                 <Reveal key={category} delay={i * 80}>
//                                     <div className="p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 hover:border-cyan-500/50 transition-all h-full">
//                                         <div className="flex items-center gap-2 mb-4 pb-3 border-b border-cyan-500/15">
//                                             <div className="w-2 h-2 rounded-full bg-cyan-400" />
//                                             <h3 className="font-syne font-bold text-base text-white">{category}</h3>
//                                         </div>
//                                         <ul className="space-y-2">
//                                             {tools.map((tool) => (
//                                                 <li key={tool} className="flex items-center gap-2 text-[13px] text-gray-300">
//                                                     <LucideIcon name="Check" size={12} color="#22d3ee" strokeWidth={3} />
//                                                     {tool}
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </Reveal>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* ============ CURRICULUM — PHASE-WISE ============ */}
//                 <section className="px-10 py-20 bg-[#061826] relative overflow-hidden">
//                     <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-cyan-500/[0.04]" />
//                     <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-cyan-500/[0.04]" />

//                     <div className="max-w-[1240px] mx-auto relative z-10">
//                         <Reveal>
//                             <div className="text-center mb-14">
//                                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Deep-Dive Curriculum</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
//                                     5 Phases.{" "}
//                                     <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">25+ Skills.</span>{" "}
//                                     Endless Possibilities.
//                                 </h2>
//                             </div>
//                         </Reveal>

//                         {/* Timeline-style curriculum */}
//                         <div className="space-y-6">
//                             {curriculum.map((phase, i) => (
//                                 <Reveal key={phase.title} delay={i * 80}>
//                                     <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/25 hover:border-cyan-500/50 transition-all hover:-translate-y-1 relative overflow-hidden">
//                                         {/* Left — Phase info */}
//                                         <div className="flex md:flex-col md:items-start gap-3 md:gap-2 md:border-r md:border-cyan-500/15 md:pr-6">
//                                             <div className="text-[10px] tracking-[3px] uppercase text-cyan-400 font-bold">{phase.phase}</div>
//                                             <div className="font-syne font-extrabold text-2xl bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
//                                                 {String(i + 1).padStart(2, "0")}
//                                             </div>
//                                             <div className="text-[11px] text-gray-400 uppercase tracking-wider mt-auto">
//                                                 <span className="inline mr-1"><LucideIcon name="Clock" size={11} color="#22d3ee" strokeWidth={2} /></span>
//                                                 {phase.duration}
//                                             </div>
//                                         </div>

//                                         {/* Right — Topics */}
//                                         <div>
//                                             <h3 className="font-syne font-bold text-lg text-white mb-4">{phase.title}</h3>
//                                             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                                                 {phase.topics.map((topic) => (
//                                                     <li key={topic} className="flex items-start gap-2 text-[13px] text-gray-300">
//                                                         <span className="flex-shrink-0 mt-0.5"><LucideIcon name="ChevronRight" size={14} color="#22d3ee" strokeWidth={2.5} /></span>
//                                                         {topic}
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </Reveal>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* ============ SHOWCASE PROJECTS — DETAILED ============ */}
//                 <section className="px-10 py-20 bg-[#030f1a]">
//                     <div className="max-w-[1280px] mx-auto">
//                         <Reveal>
//                             <div className="text-center mb-14">
//                                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Portfolio Showcase</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
//                                     5 Production-Grade{" "}
//                                     <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">VR Projects</span>
//                                 </h2>
//                                 <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
//                                     Build a portfolio that gets you hired — these aren&apos;t toy projects, they&apos;re shippable products
//                                 </p>
//                             </div>
//                         </Reveal>

//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//                             {showcaseProjects.map((p, i) => (
//                                 <Reveal key={p.num} delay={i * 80}>
//                                     <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/25 hover:border-cyan-500/50 hover:-translate-y-1.5 transition-all hover:shadow-2xl group relative overflow-hidden">
//                                         {/* Project number watermark */}
//                                         <div className="absolute -top-4 -right-4 font-syne font-extrabold text-7xl text-cyan-500/10">
//                                             {p.num}
//                                         </div>

//                                         <div className="relative z-10">
//                                             <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-cyan-500/15 border border-cyan-500/40 group-hover:scale-110 transition-transform">
//                                                 <LucideIcon name={p.icon} size={24} color="#22d3ee" strokeWidth={2} />
//                                             </div>

//                                             <h3 className="font-syne font-bold text-lg text-white mb-2">{p.title}</h3>
//                                             <p className="text-[13px] text-gray-400 leading-relaxed mb-4">{p.desc}</p>

//                                             <div className="flex flex-wrap gap-1.5 pt-4 border-t border-cyan-500/15">
//                                                 {p.tech.map((t) => (
//                                                     <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold">
//                                                         {t}
//                                                     </span>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </Reveal>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* ============ WHY US — COMPARISON STYLE ============ */}
//                 <section className="px-10 py-20 bg-[#061826]">
//                     <div className="max-w-[1240px] mx-auto">
//                         <Reveal>
//                             <div className="text-center mb-14">
//                                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// The AV Academy Difference</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
//                                     Why AV Academy{" "}
//                                     <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Beats YouTube Tutorials</span>
//                                 </h2>
//                             </div>
//                         </Reveal>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             {differences.map((d, i) => (
//                                 <Reveal key={d.title} delay={i * 80}>
//                                     <div className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:-translate-y-1 group h-full">
//                                         <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-cyan-500 to-cyan-400 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
//                                             <LucideIcon name={d.icon} size={26} color="#031a2b" strokeWidth={2} />
//                                         </div>
//                                         <div>
//                                             <h3 className="font-syne font-bold text-lg text-white mb-2">{d.title}</h3>
//                                             <p className="text-[13.5px] text-gray-400 leading-relaxed">{d.desc}</p>
//                                         </div>
//                                     </div>
//                                 </Reveal>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* ============ CAREER PATHS — HORIZONTAL CARDS ============ */}
//                 <section className="px-10 py-20 bg-[#030f1a]">
//                     <div className="max-w-[1240px] mx-auto">
//                         <Reveal>
//                             <div className="text-center mb-14">
//                                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Your Career Options</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
//                                     6 Career Paths.{" "}
//                                     <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">One Skillset.</span>
//                                 </h2>
//                                 <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
//                                     Your VR skills open doors to multiple high-growth career options
//                                 </p>
//                             </div>
//                         </Reveal>

//                         <div className="space-y-3">
//                             {careerPaths.map((c, i) => (
//                                 <Reveal key={c.role} delay={i * 60}>
//                                     <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center p-5 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:-translate-y-0.5 group">
//                                         <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/40 group-hover:scale-110 transition-transform">
//                                             <LucideIcon name="Briefcase" size={22} color="#22d3ee" strokeWidth={2} />
//                                         </div>

//                                         <div>
//                                             <h3 className="font-syne font-bold text-base text-white mb-1">{c.role}</h3>
//                                             <p className="text-[12px] text-gray-400">{c.scope}</p>
//                                         </div>

//                                         <span className="hidden sm:block text-[10px] px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-bold tracking-wider uppercase">
//                                             {c.level}
//                                         </span>
//                                     </div>
//                                 </Reveal>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* ============ FAQ ============ */}
//                 <section className="px-10 py-20 bg-[#061826]">
//                     <div className="max-w-[900px] mx-auto">
//                         <Reveal>
//                             <div className="text-center mb-12">
//                                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// FAQ</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
//                                     Got{" "}
//                                     <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Questions?</span>
//                                 </h2>
//                             </div>
//                         </Reveal>

//                         <div className="space-y-4">
//                             {faqs.map((faq, i) => (
//                                 <Reveal key={faq.question} delay={i * 80}>
//                                     <details className="group rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 overflow-hidden transition-all hover:border-cyan-500/40">
//                                         <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
//                                             <h3 className="font-syne font-bold text-[15px] text-white flex-1">{faq.question}</h3>
//                                             <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-open:rotate-45 bg-cyan-500/15 border border-cyan-500/40">
//                                                 <LucideIcon name="Plus" size={18} color="#22d3ee" strokeWidth={2.5} />
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

//                 {/* ============ FINAL CTA — IMMERSIVE ============ */}
//                 <section className="px-10 py-24 bg-gradient-to-br from-[#030f1a] via-[#0a2436] to-[#030f1a] text-center relative overflow-hidden">
//                     {/* Decorative glows */}
//                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/15 blur-3xl pointer-events-none rounded-full" />
//                     <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
//                     <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

//                     {/* Floating dots */}
//                     <div className="absolute top-20 left-20 w-2 h-2 rounded-full bg-cyan-400 animate-ping pointer-events-none" />
//                     <div className="absolute bottom-20 right-20 w-2 h-2 rounded-full bg-cyan-400 animate-pulse pointer-events-none" />
//                     <div className="absolute top-1/2 right-32 w-1.5 h-1.5 rounded-full bg-cyan-300 animate-ping pointer-events-none" />

//                     <div className="max-w-[900px] mx-auto relative z-10">
//                         <Reveal>
//                             <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-[2px] uppercase mb-6 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 shadow-[0_0_30px_rgba(0,180,216,0.2)]">
//                                 <LucideIcon name="Headset" size={14} color="#22d3ee" strokeWidth={2.5} />
//                                 Limited Seats per Batch
//                             </span>

//                             <h2 className="font-syne font-extrabold text-[clamp(2rem,3.8vw,3rem)] leading-tight tracking-tight text-white mb-5">
//                                 The VR Revolution Won&apos;t{" "}
//                                 <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Wait for You</span>
//                             </h2>
//                             <p className="text-base md:text-lg text-gray-400 max-w-[600px] mx-auto mb-9 leading-relaxed">
//                                 Join the next generation of immersive technology developers. Build experiences that change how humans interact with computers.
//                             </p>

//                             <div className="flex flex-wrap justify-center gap-4 mb-8">
//                                 <Link
//                                     href="/contact"
//                                     className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-[15px] font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all"
//                                 >
//                                     <LucideIcon name="Rocket" size={18} color="#031a2b" strokeWidth={2.5} />
//                                     Reserve Your Seat
//                                 </Link>
//                                 <a
//                                     href="https://wa.me/919675903348?text=Hi! I want to join the VR Developer Course. Please share details."
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-[15px] font-syne tracking-wide bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/40 transition-all"
//                                 >
//                                     <LucideIcon name="MessageCircle" size={18} color="#ffffff" strokeWidth={2.5} />
//                                     Quick Chat on WhatsApp
//                                 </a>
//                             </div>

//                             <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[13px] text-gray-500">
//                                 <div className="flex items-center gap-2">
//                                     <LucideIcon name="Phone" size={14} color="#22d3ee" strokeWidth={2} />
//                                     <span className="text-gray-400">+91-9675903348</span>
//                                 </div>
//                                 <div className="hidden md:block text-gray-700">·</div>
//                                 <div className="flex items-center gap-2">
//                                     <LucideIcon name="Mail" size={14} color="#22d3ee" strokeWidth={2} />
//                                     <span className="text-gray-400">avacademy1706@gmail.com</span>
//                                 </div>
//                                 <div className="hidden md:block text-gray-700">·</div>
//                                 <div className="flex items-center gap-2">
//                                     <LucideIcon name="MapPin" size={14} color="#22d3ee" strokeWidth={2} />
//                                     <span className="text-gray-400">Lucknow, India</span>
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


// app/vr-developer/page.tsx
// VR Developer — Cyan + strategic Amber accents on stats/numbers/highlights

import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import LucideIcon from "@/components/LucideIcon";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WAFloat from "@/components/WAFloat";
import { Reveal } from "@/components/ScrollReveal";

const SITE_URL = "https://avacademy.co.in";

export const metadata: Metadata = {
    title: "VR Developer Course in Lucknow | Unity, Unreal & Meta Quest | AV Academy",
    description: "Become a VR Developer at AV Academy Lucknow. Master Unity, Unreal Engine, Meta Quest, WebXR & immersive 3D development. 4-6 month program with real projects.",
    keywords: ["vr developer course lucknow", "virtual reality course", "unity vr training", "unreal engine vr", "meta quest development", "vr training india"],
    alternates: { canonical: `${SITE_URL}/vr-developer` },
    openGraph: {
        title: "VR Developer Course | AV Academy",
        description: "Master Unity, Unreal Engine & Meta Quest VR development.",
        url: `${SITE_URL}/vr-developer`,
        siteName: "AV Academy",
        locale: "en_IN",
        type: "website",
    },
    robots: { index: true, follow: true },
};

// ============ DATA ============

const learningJourney = [
    { week: "WEEKS 1-3", title: "Foundation Phase", icon: "Compass", desc: "VR hardware, 3D basics in Blender, design principles, and your first immersive scene." },
    { week: "WEEKS 4-8", title: "Unity Mastery", icon: "Gamepad2", desc: "C# programming, XR Interaction Toolkit, VR controllers, and physics-based interactions." },
    { week: "WEEKS 9-14", title: "Advanced Skills", icon: "Layers", desc: "Hand tracking, multiplayer VR, Unreal Engine basics, and photorealistic rendering." },
    { week: "WEEKS 15-18", title: "Publishing Phase", icon: "Rocket", desc: "Portfolio building, Meta Store submission, SteamVR deployment, and career launch." },
];

const industries = [
    { icon: "Gamepad2", name: "Gaming", desc: "AAA VR games, indie experiences, multiplayer worlds" },
    { icon: "GraduationCap", name: "Education", desc: "Interactive learning, virtual classrooms, simulations" },
    { icon: "Building2", name: "Architecture", desc: "Virtual walkthroughs, design reviews, client presentations" },
    { icon: "Heart", name: "Healthcare", desc: "Medical training, therapy, surgical simulations" },
    { icon: "Factory", name: "Manufacturing", desc: "Worker training, equipment simulations, safety drills" },
    { icon: "ShoppingBag", name: "Retail", desc: "Virtual showrooms, product demos, try-before-buy" },
];

const techStack = {
    "Game Engines": ["Unity 3D", "Unreal Engine 5", "Godot (intro)"],
    "Programming": ["C# (Unity)", "C++ / Blueprints", "JavaScript (WebXR)"],
    "3D Tools": ["Blender", "Substance Painter", "Quill (VR drawing)"],
    "VR SDKs": ["Meta Quest SDK", "OpenXR", "XR Interaction Toolkit", "WebXR API"],
    "Frameworks": ["A-Frame", "Three.js", "Photon (Multiplayer)"],
};

const curriculum = [
    { phase: "Phase 1", title: "VR Foundations & 3D Modeling", duration: "3 Weeks", topics: ["VR hardware ecosystem (Meta Quest, Vive, Index)", "VR design principles & UX", "Blender for VR assets", "Low-poly modeling techniques", "UV mapping & PBR texturing"] },
    { phase: "Phase 2", title: "Unity VR Development", duration: "5 Weeks", topics: ["Unity interface & C# basics", "XR Interaction Toolkit deep dive", "VR controllers & input handling", "Locomotion systems (teleport, smooth)", "Scene management & optimization"] },
    { phase: "Phase 3", title: "Advanced VR Features", duration: "4 Weeks", topics: ["Hand tracking & gestures", "Multiplayer VR with Photon", "VR physics & haptics", "Spatial audio implementation", "Performance profiling for Quest"] },
    { phase: "Phase 4", title: "Unreal Engine VR", duration: "3 Weeks", topics: ["Unreal interface & Blueprints", "VR template configuration", "Photorealistic environments", "Niagara particle effects", "Cross-platform deployment"] },
    { phase: "Phase 5", title: "Publishing & Portfolio", duration: "3 Weeks", topics: ["Meta Store submission process", "SteamVR publishing", "WebXR deployment", "Portfolio website building", "Freelancing & job applications"] },
];

const showcaseProjects = [
    { num: "01", icon: "Gamepad2", title: "VR Escape Room", desc: "A complete physics-based puzzle game with multiple rooms, lighting effects, and immersive sound design.", tech: ["Unity", "C#", "XR Toolkit"] },
    { num: "02", icon: "Building2", title: "Architectural Walkthrough", desc: "Photorealistic virtual tour of a luxury villa with day/night cycle and interactive furniture.", tech: ["Unreal", "Blueprints", "Niagara"] },
    { num: "03", icon: "Users", title: "Multiplayer VR Lobby", desc: "Real-time social VR experience with voice chat, avatars, and synchronized interactions.", tech: ["Unity", "Photon", "VRChat-style"] },
    { num: "04", icon: "Heart", title: "VR Meditation App", desc: "Calming immersive environments with guided breathing, ambient sound, and progress tracking.", tech: ["Unity", "Spatial Audio", "Meta Quest"] },
    { num: "05", icon: "GraduationCap", title: "Educational VR Module", desc: "Interactive learning experience teaching anatomy/physics with hand interactions and quizzes.", tech: ["Unity", "XR Toolkit", "WebXR"] },
];

const careerPaths = [
    { role: "Unity VR Developer", level: "Entry-Mid", scope: "Game studios, EdTech companies, agencies" },
    { role: "XR Engineer", level: "Senior", scope: "Tech giants (Meta, Apple, Microsoft)" },
    { role: "VR Designer", level: "Creative", scope: "Design agencies, gaming studios" },
    { role: "Freelance VR Consultant", level: "Independent", scope: "Global clients via Upwork, Toptal" },
    { role: "VR Trainer/Educator", level: "Teaching", scope: "Universities, online platforms" },
    { role: "AR/VR Startup Founder", level: "Entrepreneur", scope: "Build your own immersive products" },
];

const whyVR = [
    { stat: "$32B", label: "VR Market Size 2030" },
    { stat: "50%", label: "Annual Industry Growth" },
    { stat: "10M+", label: "Meta Quest Devices Sold" },
    { stat: "₹15L+", label: "Average VR Dev Salary" },
];

const differences = [
    { icon: "Headset", title: "Real VR Hardware", desc: "Hands-on practice with Meta Quest 3 devices at our campus — not just theory" },
    { icon: "Code2", title: "Industry Code Reviews", desc: "Your code reviewed by working VR developers — learn how professionals build" },
    { icon: "Globe", title: "Global Job Network", desc: "Direct connections with VR studios in India, USA, and Europe for placements" },
    { icon: "Sparkles", title: "Cutting-Edge Curriculum", desc: "Updated quarterly to include latest Meta, Apple Vision Pro, and Quest releases" },
];

const faqs = [
    { question: "Do I need a VR headset to start this course?", answer: "Not at the start. We provide hands-on practice with Meta Quest devices at our Lucknow campus. By Module 3, having your own Meta Quest 3 (~₹40K) gives you the best learning experience." },
    { question: "Is coding experience required for VR development?", answer: "No prior coding experience needed. We teach C# (Unity) and Blueprints (Unreal) from absolute basics. Logic-thinking skills help, but we build them along the way." },
    { question: "What's the salary range for VR developers in India?", answer: "Entry-level VR developers earn ₹4-8 LPA. Mid-level developers earn ₹10-20 LPA. Senior XR engineers at Meta/Apple earn ₹30-60 LPA. Freelancers can earn ₹40K-2L per month." },
    { question: "Will I be able to publish on Meta Store after this course?", answer: "Yes, our Phase 5 specifically covers Meta Store submission process. We guide you through requirements, app review process, and publishing your first VR app commercially." },
    { question: "Is VR the future or just a trend?", answer: "VR is the next computing platform. With Apple Vision Pro, Meta Quest 3, and constant investment from tech giants, VR developers are among the most in-demand and highest-paid tech professionals globally." },
];

export default function VRDeveloperPage() {
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: "VR Developer Course — AV Academy Lucknow",
        description: "Comprehensive VR development training covering Unity, Unreal Engine, Meta Quest, WebXR",
        provider: { "@type": "EducationalOrganization", name: "AV Academy", url: SITE_URL },
        educationalLevel: "Beginner to Advanced",
        inLanguage: ["en", "hi"],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "200", bestRating: "5" },
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
    };

    return (
        <>
            <Script id="course-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <Navbar />
            <main className="bg-[#030f1a]">

                {/* ============ HERO ============ */}
                <section className="relative pt-32 pb-16 px-10 overflow-hidden border-b border-cyan-500/15 bg-gradient-to-br from-[#061826] via-[#0a2436] to-[#061826]">
                    <div className="absolute top-[20%] left-[5%] w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none animate-pulse" />
                    <div className="absolute bottom-[10%] right-[5%] w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

                    <div
                        className="absolute inset-0 opacity-40 pointer-events-none"
                        style={{
                            backgroundImage: "linear-gradient(rgba(0,180,216,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,.04) 1px, transparent 1px)",
                            backgroundSize: "60px 60px",
                        }}
                    />

                    <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
                        {/* LEFT */}
                        <div>
                            <nav aria-label="Breadcrumb" className="mb-6">
                                <ol className="inline-flex items-center gap-2 text-[12px] text-gray-500 px-4 py-2 rounded-full bg-[#082c44]/60 border border-cyan-500/15">
                                    <li><Link href="/" className="text-cyan-400 font-semibold hover:text-cyan-300">Home</Link></li>
                                    <li><LucideIcon name="ChevronRight" size={12} color="#6b7280" /></li>
                                    <li><Link href="/courses" className="text-cyan-400 font-semibold hover:text-cyan-300">Courses</Link></li>
                                    <li><LucideIcon name="ChevronRight" size={12} color="#6b7280" /></li>
                                    <li className="text-gray-300" aria-current="page">VR Developer</li>
                                </ol>
                            </nav>

                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[2px] uppercase mb-6 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 shadow-[0_0_30px_rgba(0,180,216,0.2)]">
                                <LucideIcon name="Sparkles" size={12} color="#22d3ee" strokeWidth={2.5} />
                                Future Tech Career
                            </span>

                            <h1 className="font-syne font-extrabold leading-[1.05] tracking-tight mb-5 text-[clamp(2rem,4.5vw,3.5rem)] text-white">
                                Build the Future in{" "}
                                <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
                                    Virtual Reality
                                </span>
                            </h1>

                            <p className="text-base md:text-lg text-gray-400 mb-7 leading-relaxed max-w-[600px]">
                                Master Unity, Unreal Engine, and Meta Quest development. Create immersive experiences that the world hasn&apos;t seen yet — and get paid premium rates to do it.
                            </p>

                            {/* Pills with AMBER icons */}
                            <div className="flex flex-wrap gap-2 mb-7">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#082c44]/80 border border-cyan-500/25 text-gray-300">
                                    <LucideIcon name="Clock" size={12} color="#fbbf24" strokeWidth={2.5} />
                                    18 Weeks
                                </div>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#082c44]/80 border border-cyan-500/25 text-gray-300">
                                    <LucideIcon name="Laptop" size={12} color="#fbbf24" strokeWidth={2.5} />
                                    Online + Offline
                                </div>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#082c44]/80 border border-cyan-500/25 text-gray-300">
                                    <LucideIcon name="Headset" size={12} color="#fbbf24" strokeWidth={2.5} />
                                    Meta Quest Included
                                </div>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#082c44]/80 border border-cyan-500/25 text-gray-300">
                                    <LucideIcon name="Languages" size={12} color="#fbbf24" strokeWidth={2.5} />
                                    Hindi + English
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[13px] font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all"
                                >
                                    <LucideIcon name="Rocket" size={14} color="#031a2b" strokeWidth={2.5} />
                                    Start Your VR Journey
                                </Link>
                                <a
                                    href="https://wa.me/919675903348?text=Hi! I want to know about the VR Developer Course."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[13px] font-syne tracking-wide bg-transparent border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 transition-all"
                                >
                                    <LucideIcon name="MessageCircle" size={14} color="#22d3ee" strokeWidth={2.5} />
                                    Talk to Counselor
                                </a>
                            </div>
                        </div>

                        {/* RIGHT — VR Card with AMBER highlights */}
                        <Reveal direction="right">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-[280px] h-[280px] rounded-full border border-cyan-500/20 animate-pulse" />
                                    <div className="absolute w-[340px] h-[340px] rounded-full border border-cyan-500/10" />
                                    <div className="absolute w-[400px] h-[400px] rounded-full border border-amber-500/10" />
                                </div>

                                <div className="relative rounded-3xl p-8 border-2 border-cyan-500/40 bg-gradient-to-br from-[#082c44]/95 to-[#030f1a]/95 shadow-[0_25px_60px_rgba(0,180,216,0.25)]">
                                    {/* Top accent — cyan + amber */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-amber-400 to-cyan-500 rounded-t-3xl" />

                                    <div className="w-24 h-24 mx-auto mb-5 rounded-2xl flex items-center justify-center bg-gradient-to-br from-cyan-500 to-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.5)]">
                                        <LucideIcon name="Box" size={50} color="#031a2b" strokeWidth={2} />
                                    </div>

                                    <div className="text-center mb-5">
                                        {/* AMBER label */}
                                        <div className="text-[10px] tracking-[3px] uppercase text-amber-400 font-bold mb-1">Career Track</div>
                                        <h3 className="font-syne font-extrabold text-xl text-white">VR Developer</h3>
                                        <div className="text-[12px] text-gray-400 mt-1">Industry-Ready in 18 Weeks</div>
                                    </div>

                                    <div className="space-y-2.5 pt-5 border-t border-cyan-500/20">
                                        <div className="flex items-center justify-between text-[12px]">
                                            <span className="text-gray-400">Skill Level</span>
                                            <div className="flex gap-1">
                                                {[1, 2, 3, 4, 5].map((i) => (
                                                    <div key={i} className="w-5 h-1.5 rounded-full bg-cyan-400" />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between text-[12px]">
                                            <span className="text-gray-400">Job Demand</span>
                                            <span className="text-cyan-400 font-bold flex items-center gap-1">
                                                <LucideIcon name="TrendingUp" size={12} color="#22d3ee" strokeWidth={2.5} />
                                                Very High
                                            </span>
                                        </div>
                                        {/* AMBER salary highlight with glow */}
                                        <div className="flex items-center justify-between text-[12px]">
                                            <span className="text-gray-400">Avg Salary</span>
                                            <span
                                                className="font-syne font-extrabold text-base bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent"
                                                style={{ filter: "drop-shadow(0 0 10px rgba(251,191,36,0.4))" }}
                                            >
                                                ₹6-30 LPA
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between text-[12px]">
                                            <span className="text-gray-400">Industry</span>
                                            <span className="text-white font-bold">Gaming, EdTech, Med</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center gap-2 mt-5 text-[11px] text-cyan-400">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                                        </span>
                                        Live batches starting soon
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* ============ WHY VR — STATS with AMBER NUMBERS ============ */}
                <section className="px-10 py-16 bg-[#061826] border-b border-cyan-500/10">
                    <div className="max-w-[1240px] mx-auto">
                        <Reveal>
                            <div className="text-center mb-10">
                                <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Why VR. Why Now.</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.2rem)] text-white">
                                    The VR Industry is{" "}
                                    <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">Exploding</span>
                                </h2>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {whyVR.map((s, i) => (
                                <Reveal key={s.label} delay={i * 60}>
                                    <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/80 to-[#030f1a]/90 border border-amber-500/25 hover:border-amber-500/60 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/10">
                                        {/* AMBER big stats with glow */}
                                        <div
                                            className="font-syne font-extrabold text-3xl md:text-4xl mb-2 bg-gradient-to-br from-amber-300 to-amber-500 bg-clip-text text-transparent"
                                            style={{ filter: "drop-shadow(0 0 20px rgba(251,191,36,0.25))" }}
                                        >
                                            {s.stat}
                                        </div>
                                        <div className="text-[11px] text-cyan-400 uppercase tracking-wider font-semibold">{s.label}</div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============ LEARNING JOURNEY ============ */}
                <section className="px-10 py-20 bg-[#030f1a] relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none bg-cyan-500/[0.03]" />

                    <div className="max-w-[1240px] mx-auto relative z-10">
                        <Reveal>
                            <div className="text-center mb-14">
                                <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Your Learning Journey</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
                                    From Beginner to{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">VR Pro in 18 Weeks</span>
                                </h2>
                                <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
                                    A structured 4-phase journey designed to take you from zero to job-ready
                                </p>
                            </div>
                        </Reveal>

                        <div className="relative">
                            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative">
                                {learningJourney.map((step, i) => (
                                    <Reveal key={step.title} delay={i * 100}>
                                        <div className="flex flex-col items-center text-center">
                                            <div className="relative w-24 h-24 rounded-full flex items-center justify-center mb-5 bg-gradient-to-br from-cyan-500 to-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)] z-10">
                                                <LucideIcon name={step.icon} size={36} color="#031a2b" strokeWidth={2} />
                                                <div className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping" />
                                            </div>

                                            {/* AMBER week badge */}
                                            <div className="text-[10px] tracking-[2px] uppercase text-amber-400 font-bold mb-2">{step.week}</div>
                                            <h3 className="font-syne font-bold text-lg text-white mb-3">{step.title}</h3>
                                            <p className="text-[13px] text-gray-400 leading-relaxed">{step.desc}</p>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============ INDUSTRIES with AMBER titles ============ */}
                <section className="px-10 py-20 bg-[#061826]">
                    <div className="max-w-[1280px] mx-auto">
                        <Reveal>
                            <div className="text-center mb-14">
                                <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Where VR Is Going</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
                                    6 Industries{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Hungry for VR Developers</span>
                                </h2>
                                <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
                                    Your skills will be in demand across these high-growth sectors
                                </p>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {industries.map((ind, i) => (
                                <Reveal key={ind.name} delay={i * 60}>
                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 hover:border-cyan-500/50 hover:-translate-y-1 transition-all group">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-cyan-500/15 border border-cyan-500/40 group-hover:scale-110 transition-transform">
                                            <LucideIcon name={ind.icon} size={24} color="#22d3ee" strokeWidth={2} />
                                        </div>
                                        {/* AMBER title */}
                                        <h3 className="font-syne font-bold text-base text-amber-400 mb-2">{ind.name}</h3>
                                        <p className="text-[13px] text-gray-400 leading-relaxed">{ind.desc}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============ TECH STACK with AMBER category labels ============ */}
                <section className="px-10 py-20 bg-[#030f1a]">
                    <div className="max-w-[1240px] mx-auto">
                        <Reveal>
                            <div className="text-center mb-14">
                                <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Your Tech Arsenal</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
                                    Master{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Industry-Grade Tools</span>
                                </h2>
                                <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
                                    Every tool we teach is used by top VR studios worldwide
                                </p>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {Object.entries(techStack).map(([category, tools], i) => (
                                <Reveal key={category} delay={i * 80}>
                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 hover:border-cyan-500/50 transition-all h-full">
                                        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-cyan-500/15">
                                            {/* AMBER dot + title */}
                                            <div className="w-2 h-2 rounded-full bg-amber-400" />
                                            <h3 className="font-syne font-bold text-base text-amber-400">{category}</h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {tools.map((tool) => (
                                                <li key={tool} className="flex items-center gap-2 text-[13px] text-gray-300">
                                                    <LucideIcon name="Check" size={12} color="#22d3ee" strokeWidth={3} />
                                                    {tool}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============ CURRICULUM with AMBER PHASE NUMBERS ============ */}
                <section className="px-10 py-20 bg-[#061826] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-cyan-500/[0.04]" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-amber-500/[0.04]" />

                    <div className="max-w-[1240px] mx-auto relative z-10">
                        <Reveal>
                            <div className="text-center mb-14">
                                <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Deep-Dive Curriculum</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
                                    5 Phases.{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">25+ Skills.</span>{" "}
                                    Endless Possibilities.
                                </h2>
                            </div>
                        </Reveal>

                        <div className="space-y-6">
                            {curriculum.map((phase, i) => (
                                <Reveal key={phase.title} delay={i * 80}>
                                    <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/25 hover:border-cyan-500/50 transition-all hover:-translate-y-1 relative overflow-hidden">
                                        <div className="flex md:flex-col md:items-start gap-3 md:gap-2 md:border-r md:border-cyan-500/15 md:pr-6">
                                            <div className="text-[10px] tracking-[3px] uppercase text-cyan-400 font-bold">{phase.phase}</div>
                                            {/* AMBER big phase number with glow */}
                                            <div
                                                className="font-syne font-extrabold text-3xl bg-gradient-to-br from-amber-300 to-amber-500 bg-clip-text text-transparent"
                                                style={{ filter: "drop-shadow(0 0 15px rgba(251,191,36,0.3))" }}
                                            >
                                                {String(i + 1).padStart(2, "0")}
                                            </div>
                                            {/* AMBER duration */}
                                            <div className="text-[11px] text-amber-400 uppercase tracking-wider mt-auto flex items-center gap-1.5 font-bold">
                                                <LucideIcon name="Clock" size={11} color="#fbbf24" strokeWidth={2.5} />
                                                {phase.duration}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="font-syne font-bold text-lg text-white mb-4">{phase.title}</h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                {phase.topics.map((topic) => (
                                                    <li key={topic} className="flex items-start gap-2 text-[13px] text-gray-300">
                                                        <span className="flex-shrink-0 mt-0.5"><LucideIcon name="ChevronRight" size={14} color="#22d3ee" strokeWidth={2.5} /></span>
                                                        {topic}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============ PROJECTS with AMBER NUMBERS & TITLES ============ */}
                <section className="px-10 py-20 bg-[#030f1a]">
                    <div className="max-w-[1280px] mx-auto">
                        <Reveal>
                            <div className="text-center mb-14">
                                <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Portfolio Showcase</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
                                    5 Production-Grade{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">VR Projects</span>
                                </h2>
                                <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
                                    Build a portfolio that gets you hired — these aren&apos;t toy projects, they&apos;re shippable products
                                </p>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {showcaseProjects.map((p, i) => (
                                <Reveal key={p.num} delay={i * 80}>
                                    <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/25 hover:border-cyan-500/50 hover:-translate-y-1.5 transition-all hover:shadow-2xl group relative overflow-hidden">
                                        {/* AMBER watermark number */}
                                        <div className="absolute -top-4 -right-4 font-syne font-extrabold text-7xl text-amber-500/15">
                                            {p.num}
                                        </div>

                                        <div className="relative z-10">
                                            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-cyan-500/15 border border-cyan-500/40 group-hover:scale-110 transition-transform">
                                                <LucideIcon name={p.icon} size={24} color="#22d3ee" strokeWidth={2} />
                                            </div>

                                            {/* AMBER title */}
                                            <h3 className="font-syne font-bold text-lg text-amber-400 mb-2">{p.title}</h3>
                                            <p className="text-[13px] text-gray-400 leading-relaxed mb-4">{p.desc}</p>

                                            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-cyan-500/15">
                                                {p.tech.map((t) => (
                                                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============ WHY US with AMBER titles ============ */}
                <section className="px-10 py-20 bg-[#061826]">
                    <div className="max-w-[1240px] mx-auto">
                        <Reveal>
                            <div className="text-center mb-14">
                                <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// The AV Academy Difference</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
                                    Why AV Academy{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Beats YouTube Tutorials</span>
                                </h2>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {differences.map((d, i) => (
                                <Reveal key={d.title} delay={i * 80}>
                                    <div className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:-translate-y-1 group h-full">
                                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-cyan-500 to-cyan-400 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
                                            <LucideIcon name={d.icon} size={26} color="#031a2b" strokeWidth={2} />
                                        </div>
                                        <div>
                                            {/* AMBER title */}
                                            <h3 className="font-syne font-bold text-lg text-amber-400 mb-2">{d.title}</h3>
                                            <p className="text-[13.5px] text-gray-400 leading-relaxed">{d.desc}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============ CAREER PATHS with AMBER LEVEL BADGES ============ */}
                <section className="px-10 py-20 bg-[#030f1a]">
                    <div className="max-w-[1240px] mx-auto">
                        <Reveal>
                            <div className="text-center mb-14">
                                <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Your Career Options</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
                                    6 Career Paths.{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">One Skillset.</span>
                                </h2>
                                <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
                                    Your VR skills open doors to multiple high-growth career options
                                </p>
                            </div>
                        </Reveal>

                        <div className="space-y-3">
                            {careerPaths.map((c, i) => (
                                <Reveal key={c.role} delay={i * 60}>
                                    <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center p-5 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:-translate-y-0.5 group">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/40 group-hover:scale-110 transition-transform">
                                            <LucideIcon name="Briefcase" size={22} color="#22d3ee" strokeWidth={2} />
                                        </div>

                                        <div>
                                            <h3 className="font-syne font-bold text-base text-white mb-1">{c.role}</h3>
                                            <p className="text-[12px] text-gray-400">{c.scope}</p>
                                        </div>

                                        {/* AMBER level badge */}
                                        <span
                                            className="hidden sm:block text-[10px] px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 font-bold tracking-wider uppercase"
                                            style={{ boxShadow: "0 0 15px rgba(251,191,36,0.15)" }}
                                        >
                                            {c.level}
                                        </span>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============ FAQ with AMBER highlight ============ */}
                <section className="px-10 py-20 bg-[#061826]">
                    <div className="max-w-[900px] mx-auto">
                        <Reveal>
                            <div className="text-center mb-12">
                                <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// FAQ</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight tracking-tight text-white mb-3">
                                    Got{" "}
                                    <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">Questions?</span>
                                </h2>
                            </div>
                        </Reveal>

                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
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

                {/* ============ FINAL CTA with AMBER BADGE ============ */}
                <section className="px-10 py-24 bg-gradient-to-br from-[#030f1a] via-[#0a2436] to-[#030f1a] text-center relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/15 blur-3xl pointer-events-none rounded-full" />
                    <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

                    <div className="absolute top-20 left-20 w-2 h-2 rounded-full bg-cyan-400 animate-ping pointer-events-none" />
                    <div className="absolute bottom-20 right-20 w-2 h-2 rounded-full bg-amber-400 animate-pulse pointer-events-none" />
                    <div className="absolute top-1/2 right-32 w-1.5 h-1.5 rounded-full bg-cyan-300 animate-ping pointer-events-none" />

                    <div className="max-w-[900px] mx-auto relative z-10">
                        <Reveal>
                            {/* AMBER urgency badge */}
                            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-[2px] uppercase mb-6 bg-amber-500/10 border border-amber-500/40 text-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.2)]">
                                <LucideIcon name="Headset" size={14} color="#fbbf24" strokeWidth={2.5} />
                                Limited Seats per Batch
                            </span>

                            <h2 className="font-syne font-extrabold text-[clamp(2rem,3.8vw,3rem)] leading-tight tracking-tight text-white mb-5">
                                The VR Revolution Won&apos;t{" "}
                                <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Wait for You</span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-400 max-w-[600px] mx-auto mb-9 leading-relaxed">
                                Join the next generation of immersive technology developers. Build experiences that change how humans interact with computers.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-[15px] font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all"
                                >
                                    <LucideIcon name="Rocket" size={18} color="#031a2b" strokeWidth={2.5} />
                                    Reserve Your Seat
                                </Link>
                                <a
                                    href="https://wa.me/919675903348?text=Hi! I want to join the VR Developer Course. Please share details."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-[15px] font-syne tracking-wide bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/40 transition-all"
                                >
                                    <LucideIcon name="MessageCircle" size={18} color="#ffffff" strokeWidth={2.5} />
                                    Quick Chat on WhatsApp
                                </a>
                            </div>

                            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[13px] text-gray-500">
                                <div className="flex items-center gap-2">
                                    <LucideIcon name="Phone" size={14} color="#fbbf24" strokeWidth={2} />
                                    <span className="text-gray-400">+91-9675903348</span>
                                </div>
                                <div className="hidden md:block text-gray-700">·</div>
                                <div className="flex items-center gap-2">
                                    <LucideIcon name="Mail" size={14} color="#fbbf24" strokeWidth={2} />
                                    <span className="text-gray-400">avacademy1706@gmail.com</span>
                                </div>
                                <div className="hidden md:block text-gray-700">·</div>
                                <div className="flex items-center gap-2">
                                    <LucideIcon name="MapPin" size={14} color="#fbbf24" strokeWidth={2} />
                                    <span className="text-gray-400">Lucknow, India</span>
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