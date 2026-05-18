// import LucideIcon from "@/components/LucideIcon";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WAFloat from "@/components/WAFloat";
// import { CTASection } from "@/components/PageSections";
// import { Reveal } from "@/components/ScrollReveal";

// export const metadata = { title: "AI Training B2B | AV EditLab", description: "Customized AI training and digital engagement platforms for organizations and government sectors" };

// const services = [
//   { num: "01", icon: "🎓", title: "Customized AI Training", items: ["Role-based learning for every level", "Hands-on training with real-world tools", "Bilingual delivery (English, Hindi, Regional)"], tag: "Certification and ongoing mentorship support." },
//   { num: "02", icon: "🤖", title: "Digital Engagement Platforms", items: ["AI-powered chatbots for communication", "Smart portals for feedback & support", "Digital awareness and training hubs"], tag: "Scalable, user-friendly platforms." },
//   { num: "03", icon: "📊", title: "Outcomes & Impact Measurement", items: ["Monthly reporting dashboards", "Productivity gains tracking", "Continuous improvement & ROI visibility"], tag: "Practical, measurable results." },
// ];

// const whyItems = [
//   { icon: "🎯", title: "Sector-Specific Solutions", desc: "Not generic AI training — customized to your industry and roles." },
//   { icon: "⚡", title: "Rapid Deployment", desc: "Quick go-live with your organization's identity and requirements." },
//   { icon: "🔒", title: "Data Privacy & Security", desc: "Enterprise-grade security for sensitive organizational data." },
//   { icon: "📈", title: "Outcome-Driven Training", desc: "Real skills, real application — not just theoretical knowledge." },
//   { icon: "🔄", title: "Continuous Support", desc: "Ongoing updates as AI tools and best practices evolve." },
//   { icon: "🌐", title: "Bilingual Delivery", desc: "Training in English, Hindi, or regional languages for wider reach." },
// ];

// export default function AITrainingPage() {
//   return (
//     <>
//       <Navbar />
//       <main>
//         <section className="min-h-[45vh] flex items-center justify-center pt-[110px] pb-16 px-6 text-center relative overflow-hidden" style={{ background: "linear-gradient(160deg,var(--bg2),var(--bg3))" }}>
//           <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center,rgba(0,180,216,.12) 0%,transparent 65%)" }} />
//           <div className="relative z-10">
//             <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm text-[11px] font-bold tracking-[2px] uppercase mb-5" style={{ background: "rgba(0,180,216,.1)", border: "1px solid rgba(0,180,216,.3)", color: "var(--cyan2)" }}>
//               AV EditLab — B2B Solutions
//             </span>
//             <h1 className="font-black leading-tight tracking-tight text-[clamp(1.8rem,4vw,3.2rem)]" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-1px" }}>
//               <span style={{ background: "linear-gradient(135deg,var(--cyan2),var(--blue2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                 AI Training & Digital
//               </span>
//               <br />Engagement for Organizations
//             </h1>
//             <p className="font-semibold mt-3" style={{ color: "var(--cyan3)", fontSize: "14px" }}>Including Government & Public Sector</p>
//             <p className="text-[15px] leading-[1.85] max-w-[780px] mx-auto mt-4" style={{ color: "var(--gray2)" }}>
//               EditLab — Empowering Organizations Through Applied AI and Smart Platforms. Sector-specific training and digital engagement solutions built for every level.
//             </p>
//           </div>
//         </section>

//         <section className="px-6 py-20" style={{ background: "var(--bg2)" }}>
//           <div className="max-w-[1300px] mx-auto">
//             <div className="inline-flex items-center px-6 py-2.5 rounded-md font-bold text-[12px] tracking-[2.5px] uppercase text-white mb-11" style={{ fontFamily: "var(--font-syne)", background: "linear-gradient(135deg,var(--cyan1),var(--cyan2))" }}>
//               OUR AI SERVICES
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {services.map((s, i) => (
//                 <Reveal key={s.num} delay={i * 100} className="group relative rounded-[22px] p-9 overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,180,216,.2)]" style={{ background: "rgba(8,28,44,.8)", border: "1px solid var(--border)" }}>
//                   <div className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{ background: "linear-gradient(90deg,var(--cyan1),var(--cyan2))" }} />
//                   <div className="font-black text-[4rem] leading-none mb-0.5" style={{ fontFamily: "var(--font-syne)", color: "rgba(0,180,216,.06)" }}>{s.num}</div>
//                   <div className="text-[36px] mb-2.5">{s.icon}</div>
//                   <h3 className="font-bold text-[1.1rem] mb-4" style={{ fontFamily: "var(--font-syne)", color: "var(--amber2)" }}>{s.title}</h3>
//                   <ul className="space-y-0 mb-4 list-none">
//                     {s.items.map(item => (
//                       <li key={item} className="text-[13.5px] py-1.5 pl-4 relative border-b" style={{ color: "var(--gray2)", borderColor: "rgba(255,255,255,.04)" }}>
//                         <span className="absolute left-0" style={{ color: "var(--cyan2)" }}>▸</span> {item}
//                       </li>
//                     ))}
//                   </ul>
//                   <p className="text-[13px] italic font-medium" style={{ color: "var(--cyan3)" }}>→ {s.tag}</p>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="px-6 py-20" style={{ background: "var(--bg3)" }}>
//           <div className="max-w-[1300px] mx-auto">
//             <Reveal className="mb-7">
//               <div className="inline-flex items-center gap-1.5 font-bold text-[11px] tracking-[3px] uppercase mb-3" style={{ fontFamily: "var(--font-syne)", color: "var(--cyan2)" }}>
//                 <span style={{ color: "var(--blue2)" }}>//</span> Why Choose EditLab for AI
//               </div>
//               <h2 className="font-black tracking-tight text-[clamp(1.7rem,3vw,2.4rem)]" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-.5px" }}>
//                 Your Trusted{" "}
//                 <span style={{ background: "linear-gradient(135deg,var(--cyan2),var(--blue2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                   AI Partner
//                 </span>
//               </h2>
//             </Reveal>
//             <div className="rounded-[24px] p-14 grid grid-cols-1 md:grid-cols-2 gap-6" style={{ background: "rgba(8,28,44,.8)", border: "1px solid var(--border)" }}>
//               {whyItems.map(w => (
//                 <div key={w.title} className="flex gap-4 items-start">
//                   <div className="w-11 h-11 rounded-[10px] flex items-center justify-center text-[18px] flex-shrink-0 mt-0.5" style={{ background: "rgba(0,180,216,.1)", border: "1px solid rgba(0,180,216,.22)", color: "var(--cyan2)" }}><LucideIcon name={w.icon} size={22} color="var(--cyan2)" strokeWidth={1.5} /></div>
//                   <div>
//                     <h4 className="font-bold text-[15px] mb-1" style={{ fontFamily: "var(--font-syne)", color: "var(--white)" }}>{w.title}</h4>
//                     <p className="text-[13px] leading-relaxed" style={{ color: "var(--gray)" }}>{w.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <CTASection title="Bring AI to Your" highlight="Organization" desc="Let's discuss a custom AI training or digital platform solution for your sector." />
//       </main>
//       <Footer />
//       <WAFloat />
//     </>
//   );
// }

// "use client";
// import Link from "next/link";
// import LucideIcon from "@/components/LucideIcon";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WAFloat from "@/components/WAFloat";
// import { Reveal } from "@/components/ScrollReveal";

// interface AISector {
//   id: string;
//   icon: string;
//   name: string;
//   tagline: string;
//   modules: string[];
//   outcome: string;
//   accentColor: string;
//   accentHex: string;
// }

// interface Deliverable {
//   icon: string;
//   title: string;
//   desc: string;
// }

// const sectors: AISector[] = [
//   {
//     id: "real-estate",
//     icon: "Building2",
//     name: "Real Estate & Property Tech",
//     tagline: "Transform Property Business with AI",
//     modules: [
//       "AI-Powered Lead Generation & CRM Automation",
//       "Virtual Property Tour Creation with AI Tools",
//       "AI Pricing Analytics & Market Prediction",
//       "Chatbot Integration for 24/7 Client Engagement",
//       "AI-Assisted Contract & Document Management",
//       "Social Media AI for Property Marketing",
//     ],
//     outcome: "Agents & builders close deals 40% faster using AI-powered lead follow-up and virtual showcase tools.",
//     accentColor: "cyan",
//     accentHex: "#22d3ee",
//   },
//   {
//     id: "government",
//     icon: "Landmark",
//     name: "Government & Public Services",
//     tagline: "Modernize Governance with AI",
//     modules: [
//       "AI for Citizen Service Automation & Helpdesks",
//       "Smart Grievance Redressal AI Systems",
//       "AI-Powered Public Scheme Communication",
//       "Data Analytics for Policy Decision Making",
//       "AI Chatbots for Government Portals (Hindi + English)",
//       "Fraud Detection & Compliance Monitoring",
//     ],
//     outcome: "Government departments report 60% faster citizen query resolution and improved public communication.",
//     accentColor: "amber",
//     accentHex: "#fbbf24",
//   },
//   {
//     id: "healthcare",
//     icon: "Heart",
//     name: "Healthcare & Medical",
//     tagline: "AI-Powered Healthcare Transformation",
//     modules: [
//       "AI Basics for Healthcare Professionals",
//       "Medical Imaging AI & Diagnostic Assistance",
//       "Patient Scheduling & Hospital Operations AI",
//       "AI Tools for Medical Report Summarization",
//       "Telemedicine AI & Remote Patient Monitoring",
//       "Healthcare Data Privacy & AI Ethics",
//     ],
//     outcome: "Medical teams reduce administrative workload by 50%, freeing time for actual patient care.",
//     accentColor: "emerald",
//     accentHex: "#34d399",
//   },
//   {
//     id: "police",
//     icon: "ShieldCheck",
//     name: "Police & Security Forces",
//     tagline: "Smart Policing with AI Intelligence",
//     modules: [
//       "AI Fundamentals for Law Enforcement",
//       "Predictive Policing & Crime Pattern Analytics",
//       "AI-Assisted Surveillance & Monitoring Tools",
//       "Digital Evidence Management with AI",
//       "Cybercrime Detection & Prevention AI",
//       "AI for Traffic Management & Public Safety",
//     ],
//     outcome: "Police forces equipped with AI analytics improve crime detection and optimize resource deployment.",
//     accentColor: "violet",
//     accentHex: "#a78bfa",
//   },
//   {
//     id: "education",
//     icon: "GraduationCap",
//     name: "Education & Universities",
//     tagline: "AI-Powered Learning Revolution",
//     modules: [
//       "AI Tools for Teachers & Educators (ChatGPT, Gemini)",
//       "Creating AI-Enhanced Learning Materials",
//       "Personalized Learning Platforms with AI",
//       "AI-Based Student Assessment & Feedback",
//       "EdTech Platform Integration & Management",
//       "Digital Content Creation with AI for Classrooms",
//     ],
//     outcome: "Teachers create more engaging content in 70% less time and deliver personalized learning at scale.",
//     accentColor: "pink",
//     accentHex: "#f472b6",
//   },
//   {
//     id: "welfare",
//     icon: "HandHeart",
//     name: "Social Welfare & NGOs",
//     tagline: "AI for Social Impact & Outreach",
//     modules: [
//       "AI for Beneficiary Identification & Targeting",
//       "Smart Scheme Delivery Monitoring with AI",
//       "AI-Powered Field Data Collection & Analysis",
//       "Chatbots for Rural & Multi-Language Outreach",
//       "AI Impact Measurement & Reporting Tools",
//       "Grant Writing Assistance with AI",
//     ],
//     outcome: "NGOs reach 3x more beneficiaries with the same team size through smart automation.",
//     accentColor: "yellow",
//     accentHex: "#facc15",
//   },
// ];

// const deliverables: Deliverable[] = [
//   { icon: "BookOpen", title: "Customized Curriculum", desc: "Built around your organization's specific workflows, tools, and goals." },
//   { icon: "Languages", title: "Bilingual Delivery", desc: "Training in English, Hindi, or regional languages as required." },
//   { icon: "Wrench", title: "Hands-On Workshops", desc: "Real tools, real simulations, real use cases — not just theory." },
//   { icon: "Award", title: "Certification", desc: "AV EditLab certificates for all participants + ongoing mentorship." },
//   { icon: "Bot", title: "AI Platform Deployment", desc: "We can build AI chatbots and smart portals for your organization." },
//   { icon: "Lock", title: "Data Privacy Compliant", desc: "All training and tools comply with government security norms." },
// ];

// const trainingStats = [
//   { num: "6+", label: "Industry Sectors", icon: "Briefcase" },
//   { num: "500+", label: "Officials Trained", icon: "Users" },
//   { num: "100%", label: "Customized Plans", icon: "Settings" },
//   { num: "1hr-3M", label: "Program Duration", icon: "Clock" },
// ];

// export default function AITrainingPage() {
//   return (
//     <>
//       <Navbar />
//       <main className="bg-[#030f1a]">
//         {/* ============ HERO — SMALLER TEXT ============ */}
//         <section className="relative pt-36 pb-16 px-10 text-center overflow-hidden border-b border-cyan-500/15 bg-gradient-to-br from-[#061826] via-[#0a2436] to-[#061826]">
//           {/* Background glows */}
//           <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/20 blur-3xl pointer-events-none rounded-full" />
//           <div className="absolute top-[30%] left-[8%] w-52 h-52 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
//           <div className="absolute bottom-[10%] right-[10%] w-60 h-60 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

//           {/* Grid pattern */}
//           <div
//             className="absolute inset-0 opacity-50 pointer-events-none"
//             style={{
//               backgroundImage: "linear-gradient(rgba(0,180,216,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,.04) 1px, transparent 1px)",
//               backgroundSize: "60px 60px",
//             }}
//           />

//           <div className="relative z-10 max-w-[1000px] mx-auto">
//             {/* ====== SMALLER BADGE ====== */}
//             <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[2px] uppercase mb-5 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 shadow-[0_0_30px_rgba(0,180,216,0.2)]">
//               <LucideIcon name="Bot" size={12} color="#22d3ee" strokeWidth={2} />
//               AV EditLab · Corporate AI Training
//             </span>

//             {/* ====== SMALLER H1 ====== */}
//             <h1 className="font-syne font-extrabold text-[clamp(1.6rem,3.5vw,2.8rem)] leading-[1.1] tracking-tight mb-4 text-white">
//               AI Training &amp; Digital Engagement{" "}
//               <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                 for Every Industry
//               </span>
//             </h1>

//             {/* ====== SMALLER PARAGRAPH ====== */}
//             <p className="text-sm md:text-base text-gray-400 max-w-[640px] mx-auto mb-6 leading-relaxed">
//               Empowering organizations through applied AI and smart platforms — customized, sector-specific training programs designed for real-world impact.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap justify-center gap-3 mb-6">
//               <a
//                 href="https://wa.me/919675903348"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[13px] font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all"
//               >
//                 <LucideIcon name="MessageCircle" size={14} color="#031a2b" strokeWidth={2.5} />
//                 Request Custom Proposal
//               </a>
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[13px] font-syne tracking-wide bg-transparent border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all"
//               >
//                 <LucideIcon name="Mail" size={14} color="#22d3ee" strokeWidth={2.5} />
//                 Send a Brief
//               </Link>
//             </div>

//             {/* Breadcrumb */}
//             <div className="inline-flex items-center gap-2 text-[12px] text-gray-500 px-4 py-2 rounded-full bg-[#082c44]/60 border border-cyan-500/15">
//               <Link href="/" className="text-cyan-400 no-underline font-semibold hover:text-cyan-300">
//                 Home
//               </Link>
//               <LucideIcon name="ChevronRight" size={12} color="#6b7280" />
//               <span className="text-gray-300">AI Training</span>
//             </div>
//           </div>
//         </section>

//         {/* ============ STATS BAR ============ */}
//         <section className="px-10 py-10 bg-[#061826] border-b border-cyan-500/10">
//           <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
//             {trainingStats.map((s) => (
//               <div
//                 key={s.label}
//                 className="flex items-center gap-4 px-5 py-5 rounded-2xl bg-gradient-to-br from-[#082c44]/80 to-[#030f1a]/90 border border-cyan-500/15 hover:border-cyan-500/40 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10"
//               >
//                 <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-cyan-500/20 to-cyan-400/5 border border-cyan-500/30">
//                   <LucideIcon name={s.icon} size={22} color="#22d3ee" strokeWidth={2} />
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

//         {/* ============ WHY NOW SECTION ============ */}
//         <section className="px-10 py-24 bg-[#030f1a]">
//           <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             {/* LEFT — Content */}
//             <Reveal direction="left">
//               <div className="inline-block text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">
//                 // Why AI Training Now
//               </div>
//               <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3.2vw,2.8rem)] leading-[1.1] tracking-tight text-white mb-5">
//                 Every Organization Needs{" "}
//                 <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                   AI-Ready Teams. Now.
//                 </span>
//               </h2>
//               <p className="text-base text-gray-400 leading-relaxed mb-4">
//                 AI is no longer optional. Whether you&apos;re a government department, hospital, builder, or educator — your teams need practical AI skills to stay competitive, serve better, and operate smarter.
//               </p>
//               <p className="text-[15px] text-gray-400 leading-relaxed mb-7">
//                 AV EditLab delivers <strong className="text-cyan-400">customized, sector-specific AI training</strong> — not generic IT workshops. We speak <strong className="text-amber-400">your industry language</strong>.
//               </p>

//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all"
//               >
//                 Request a Custom Proposal
//                 <LucideIcon name="ArrowRight" size={16} color="#031a2b" strokeWidth={2.5} />
//               </Link>
//             </Reveal>

//             {/* RIGHT — Mini Feature Grid */}
//             <Reveal direction="right">
//               <div className="grid grid-cols-2 gap-4">
//                 {deliverables.slice(0, 4).map((d) => (
//                   <div
//                     key={d.title}
//                     className="p-5 rounded-2xl bg-gradient-to-br from-[#082c44]/80 to-[#030f1a]/90 border border-cyan-500/15 hover:border-cyan-500/40 hover:-translate-y-1 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group"
//                   >
//                     <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 bg-gradient-to-br from-cyan-500/20 to-cyan-400/5 border border-cyan-500/30 group-hover:scale-110 transition-transform">
//                       <LucideIcon name={d.icon} size={20} color="#22d3ee" strokeWidth={2} />
//                     </div>
//                     <div className="font-syne font-bold text-sm text-amber-400 mb-1.5 tracking-tight">
//                       {d.title}
//                     </div>
//                     <p className="text-xs leading-relaxed text-gray-400">
//                       {d.desc}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </Reveal>
//           </div>
//         </section>

//         {/* ============ SECTOR CARDS — MAIN CONTENT ============ */}
//         <section className="px-10 py-24 bg-[#061826] relative overflow-hidden">
//           {/* Background ambient glow */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-cyan-500/[0.03] blur-3xl pointer-events-none" />

//           <div className="max-w-[1280px] mx-auto relative z-10">
//             <Reveal>
//               <div className="text-center mb-14">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">
//                   // Sector-Specific Programs
//                 </div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
//                   AI Training by{" "}
//                   <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                     Industry
//                   </span>
//                 </h2>
//                 <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
//                   6 industry-specific programs, each with tailored modules, real-world tools, and measurable outcomes.
//                 </p>
//               </div>
//             </Reveal>

//             {/* Sector Grid */}
//             <div className="grid gap-6 md:grid-cols-2">
//               {sectors.map((s, i) => (
//                 <Reveal key={s.id} delay={i * 80}>
//                   <div
//                     id={s.id}
//                     className="h-full p-7 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border transition-all hover:-translate-y-1.5 hover:shadow-2xl relative overflow-hidden group"
//                     style={{
//                       borderColor: `${s.accentHex}30`,
//                     }}
//                   >
//                     {/* Top accent line */}
//                     <div
//                       className="absolute top-0 left-0 right-0 h-[3px] opacity-60"
//                       style={{
//                         background: `linear-gradient(90deg, ${s.accentHex}, #fbbf24)`,
//                       }}
//                     />

//                     {/* Hover glow */}
//                     <div
//                       className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none"
//                       style={{ background: `${s.accentHex}25` }}
//                     />

//                     {/* Header */}
//                     <div className="flex items-start gap-4 mb-5 relative z-10">
//                       <div
//                         className="w-14 h-14 flex-shrink-0 rounded-2xl flex items-center justify-center border"
//                         style={{
//                           background: `${s.accentHex}15`,
//                           borderColor: `${s.accentHex}40`,
//                           boxShadow: `0 8px 20px ${s.accentHex}20`,
//                         }}
//                       >
//                         <LucideIcon name={s.icon} size={28} color={s.accentHex} strokeWidth={2} />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <h3 className="font-syne font-extrabold text-xl text-white mb-1 leading-tight">
//                           {s.name}
//                         </h3>
//                         <p
//                           className="text-[13px] font-semibold tracking-wide"
//                           style={{ color: s.accentHex }}
//                         >
//                           {s.tagline}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Modules Label */}
//                     <p className="text-[11px] font-bold uppercase tracking-[2px] text-gray-500 mb-3 relative z-10">
//                       Training Modules
//                     </p>

//                     {/* Modules List */}
//                     <ul className="mb-5 space-y-2 relative z-10">
//                       {s.modules.map((mod) => (
//                         <li
//                           key={mod}
//                           className="flex items-start gap-2.5 text-[13px] text-gray-300 leading-relaxed"
//                         >
//                           <span className="flex-shrink-0 mt-0.5">
//                             <LucideIcon name="CheckCircle2" size={14} color={s.accentHex} strokeWidth={2.5} />
//                           </span>
//                           <span>{mod}</span>
//                         </li>
//                       ))}
//                     </ul>

//                     {/* Outcome Box */}
//                     <div
//                       className="flex items-start gap-2.5 rounded-xl p-3.5 text-[13px] leading-relaxed relative z-10 border"
//                       style={{
//                         background: `${s.accentHex}10`,
//                         borderColor: `${s.accentHex}30`,
//                       }}
//                     >
//                       <span className="flex-shrink-0 mt-0.5">
//                         <LucideIcon name="Lightbulb" size={16} color={s.accentHex} strokeWidth={2.5} />
//                       </span>
//                       <span className="text-gray-300">
//                         <strong className="text-white">Outcome:</strong> {s.outcome}
//                       </span>
//                     </div>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ DELIVERABLES ============ */}
//         <section className="px-10 py-24 bg-[#030f1a]">
//           <div className="max-w-[1240px] mx-auto">
//             <Reveal>
//               <div className="text-center mb-14">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">
//                   // What You Get
//                 </div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
//                   Complete AI Training{" "}
//                   <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                     Package
//                   </span>
//                 </h2>
//                 <p className="text-[15px] text-gray-400 max-w-[600px] mx-auto leading-relaxed">
//                   Everything your organization needs to deploy AI successfully — from curriculum to certification to live tools.
//                 </p>
//               </div>
//             </Reveal>

//             <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//               {deliverables.map((d, i) => (
//                 <Reveal key={d.title} delay={i * 60}>
//                   <div className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/15 hover:border-cyan-500/40 hover:-translate-y-1 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group h-full">
//                     <div className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-cyan-400/5 border border-cyan-500/30 group-hover:scale-110 transition-transform">
//                       <LucideIcon name={d.icon} size={22} color="#22d3ee" strokeWidth={2} />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <div className="font-syne font-bold text-base text-amber-400 mb-1.5 tracking-tight">
//                         {d.title}
//                       </div>
//                       <p className="text-[13px] leading-relaxed text-gray-400">
//                         {d.desc}
//                       </p>
//                     </div>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ PROGRAM DURATION SHOWCASE ============ */}
//         <section className="px-10 py-24 bg-[#061826] relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
//           <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

//           <div className="max-w-[1240px] mx-auto relative z-10">
//             <Reveal>
//               <div className="text-center mb-14">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">
//                   // Flexible Programs
//                 </div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.6rem)] leading-tight tracking-tight text-white mb-4">
//                   From{" "}
//                   <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                     1-Day Workshops
//                   </span>{" "}
//                   to{" "}
//                   <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
//                     3-Month Programs
//                   </span>
//                 </h2>
//                 <p className="text-[15px] text-gray-400 max-w-[600px] mx-auto leading-relaxed">
//                   Choose the format that fits your team&apos;s schedule and depth of learning required.
//                 </p>
//               </div>
//             </Reveal>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {[
//                 {
//                   icon: "Zap",
//                   duration: "1 Day",
//                   title: "Quick Workshop",
//                   desc: "Introductory AI awareness session for leadership teams. Perfect for getting started.",
//                   features: ["Live demos", "Q&A session", "Certificate of attendance"],
//                   highlight: false,
//                 },
//                 {
//                   icon: "Star",
//                   duration: "2 Weeks",
//                   title: "Intensive Program",
//                   desc: "Hands-on training with practical assignments. Most popular for department teams.",
//                   features: ["Daily 2-hr sessions", "Real project work", "Group + individual mentoring", "Industry certification"],
//                   highlight: true,
//                 },
//                 {
//                   icon: "Trophy",
//                   duration: "3 Months",
//                   title: "Complete Transformation",
//                   desc: "Full organizational AI transformation including platform deployment.",
//                   features: ["Weekly workshops", "AI tools deployment", "Custom chatbots built", "Long-term support"],
//                   highlight: false,
//                 },
//               ].map((p) => (
//                 <Reveal key={p.title}>
//                   <div
//                     className={`relative h-full p-7 rounded-3xl border transition-all hover:-translate-y-1.5 ${p.highlight
//                       ? "bg-gradient-to-br from-cyan-500/15 to-[#082c44]/90 border-cyan-500/50 shadow-2xl shadow-cyan-500/20"
//                       : "bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border-cyan-500/15 hover:border-cyan-500/40"
//                       }`}
//                   >
//                     {p.highlight && (
//                       <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-[10px] font-bold tracking-widest uppercase text-[#1a1a1a]">
//                         Most Popular
//                       </div>
//                     )}

//                     <div className={`w-14 h-14 mb-5 rounded-2xl flex items-center justify-center ${p.highlight ? "bg-gradient-to-br from-cyan-500 to-cyan-400" : "bg-cyan-500/15 border border-cyan-500/30"
//                       }`}>
//                       <LucideIcon name={p.icon} size={26} color={p.highlight ? "#031a2b" : "#22d3ee"} strokeWidth={2.5} />
//                     </div>

//                     <div className="text-xs font-bold tracking-[2px] uppercase text-amber-400 mb-2">
//                       {p.duration}
//                     </div>
//                     <h3 className="font-syne font-extrabold text-xl text-white mb-3">
//                       {p.title}
//                     </h3>
//                     <p className="text-[13.5px] text-gray-400 leading-relaxed mb-5">
//                       {p.desc}
//                     </p>

//                     <ul className="space-y-2 pt-5 border-t border-cyan-500/15">
//                       {p.features.map((f) => (
//                         <li key={f} className="flex items-start gap-2 text-[13px] text-gray-300">
//                           <div className="flex-shrink-0 mt-0.5">
//                             <LucideIcon name="Check" size={14} color="#22d3ee" strokeWidth={3} />
//                           </div>
//                           {f}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ FINAL CTA ============ */}
//         <section className="px-10 py-24 bg-gradient-to-br from-[#030f1a] via-[#0a2436] to-[#030f1a] text-center relative overflow-hidden">
//           {/* Decorative glows */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />
//           <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

//           <div className="max-w-[900px] mx-auto relative z-10">
//             <Reveal>
//               <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-[2px] uppercase mb-6 bg-amber-500/10 border border-amber-500/40 text-amber-400">
//                 <LucideIcon name="Rocket" size={14} color="#fbbf24" strokeWidth={2} />
//                 Ready to Get Started?
//               </span>

//               <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3.2rem)] leading-tight tracking-tight text-white mb-5">
//                 Ready to Train{" "}
//                 <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                   Your Team?
//                 </span>
//               </h2>
//               <p className="text-base text-gray-400 max-w-[640px] mx-auto mb-9 leading-relaxed">
//                 Starting from a 1-day workshop to a comprehensive 3-month program — we design every aspect for your organization&apos;s unique needs.
//               </p>

//               <div className="flex flex-wrap justify-center gap-4 mb-7">
//                 <a
//                   href="https://wa.me/919675903348"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-[15px] font-syne tracking-wide bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/40 transition-all"
//                 >
//                   <LucideIcon name="MessageCircle" size={18} color="#ffffff" strokeWidth={2.5} />
//                   WhatsApp for Quick Discussion
//                 </a>
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-[15px] font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all"
//                 >
//                   <LucideIcon name="Mail" size={18} color="#031a2b" strokeWidth={2.5} />
//                   Send Us a Brief
//                   <LucideIcon name="ArrowRight" size={16} color="#031a2b" strokeWidth={2.5} />
//                 </Link>
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
//                 <div className="hidden md:block text-gray-700">·</div>
//                 <div className="flex items-center gap-2">
//                   <LucideIcon name="MapPin" size={14} color="#22d3ee" strokeWidth={2} />
//                   <span className="text-gray-400">Serving UP &amp; India</span>
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

// app/ai-training/page.tsx
// ✅ Server Component — SEO metadata + JSON-LD yahan, UI AITrainingClient mein

import type { Metadata } from "next";
import AITrainingClient from "./AITrainingClient";

const SITE_URL = "https://avacademy.co.in";

// ── SEO Metadata ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "AI Training for Organizations | Government, Healthcare, Education | AV EditLab Lucknow",
  description:
    "Sector-specific AI training programs for Government, Healthcare, Police, Education, Real Estate & NGOs. Customized workshops from 1-day to 3-month programs. 500+ officials trained across UP.",
  keywords: [
    "AI training for organizations",
    "corporate AI training Lucknow",
    "government AI training UP",
    "AI training for healthcare",
    "AI workshop for police",
    "AI training for teachers",
    "AI training for real estate",
    "AI training for NGOs",
    "B2B AI training India",
    "AV EditLab AI training",
    "customized AI program Lucknow",
    "AI digital transformation UP",
  ],
  alternates: { canonical: `${SITE_URL}/ai-training` },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: "AI Training for Every Industry | AV EditLab Lucknow",
    description:
      "Customized AI training for Government, Healthcare, Police, Education & more. 500+ officials trained. 1-day to 3-month programs.",
    url: `${SITE_URL}/ai-training`,
    siteName: "AV EditLab",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-ai-training.jpg`,
        width: 1200,
        height: 630,
        alt: "AI Training for Organizations — AV EditLab Lucknow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Training for Organizations | AV EditLab",
    description: "Sector-specific AI training — Government, Healthcare, Police, Education & more.",
    images: [`${SITE_URL}/og-ai-training.jpg`],
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#editlab`,
  name: "AV EditLab",
  url: SITE_URL,
  telephone: "+91-7500206719",
  email: "avacademy1706@gmail.com",
  description:
    "AV EditLab delivers customized, sector-specific AI training programs for government, healthcare, police, education, real estate and NGOs across Uttar Pradesh and India.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3rd Floor, Sai Tower, Raibareli Rd, near Dental College, Vrindavan Colony",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "226014",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "State",
    name: "Uttar Pradesh",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Training Programs",
    itemListElement: [
      {
        "@type": "Offer",
        name: "AI Training for Government & Public Services",
        description: "AI for citizen service automation, grievance redressal, fraud detection and policy analytics.",
        category: "Government",
      },
      {
        "@type": "Offer",
        name: "AI Training for Healthcare",
        description: "Medical imaging AI, patient scheduling, telemedicine AI and healthcare data privacy.",
        category: "Healthcare",
      },
      {
        "@type": "Offer",
        name: "AI Training for Police & Security Forces",
        description: "Predictive policing, crime pattern analytics, surveillance AI and cybercrime detection.",
        category: "Law Enforcement",
      },
      {
        "@type": "Offer",
        name: "AI Training for Education & Universities",
        description: "AI tools for teachers, personalized learning platforms, EdTech integration.",
        category: "Education",
      },
      {
        "@type": "Offer",
        name: "AI Training for Real Estate",
        description: "AI lead generation, virtual property tours, pricing analytics and client chatbots.",
        category: "Real Estate",
      },
      {
        "@type": "Offer",
        name: "AI Training for NGOs & Social Welfare",
        description: "AI for beneficiary identification, outreach chatbots, impact measurement.",
        category: "Social Sector",
      },
    ],
  },
};

const courseCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AI Training Programs by Industry — AV EditLab",
  description: "Sector-specific AI training programs for organizations across India",
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "Quick AI Workshop (1 Day)",
        description: "Introductory AI awareness session for leadership teams with live demos and Q&A.",
        provider: { "@type": "Organization", name: "AV EditLab", url: SITE_URL },
        timeRequired: "P1D",
        educationalLevel: "Beginner",
        inLanguage: ["en", "hi"],
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Course",
        name: "Intensive AI Program (2 Weeks)",
        description: "Hands-on AI training with practical assignments, real project work and industry certification.",
        provider: { "@type": "Organization", name: "AV EditLab", url: SITE_URL },
        timeRequired: "P2W",
        educationalLevel: "Intermediate",
        inLanguage: ["en", "hi"],
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Course",
        name: "Complete AI Transformation (3 Months)",
        description: "Full organizational AI transformation including AI platform deployment, custom chatbots and long-term support.",
        provider: { "@type": "Organization", name: "AV EditLab", url: SITE_URL },
        timeRequired: "P3M",
        educationalLevel: "Advanced",
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
    { "@type": "ListItem", position: 2, name: "AI Training", item: `${SITE_URL}/ai-training` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which industries do you provide AI training for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide customized AI training for Government & Public Services, Healthcare, Police & Security Forces, Education & Universities, Real Estate, and NGOs/Social Welfare organizations.",
      },
    },
    {
      "@type": "Question",
      name: "How long are the AI training programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Programs range from 1-day introductory workshops to 2-week intensive programs to comprehensive 3-month transformation programs. Duration depends on your organization's needs.",
      },
    },
    {
      "@type": "Question",
      name: "Is the training available in Hindi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all training is available in English, Hindi, or regional languages as required. We also build chatbots supporting Hindi and regional languages for rural outreach.",
      },
    },
    {
      "@type": "Question",
      name: "Do participants get certificates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all participants receive AV EditLab certificates along with ongoing mentorship and support after the program.",
      },
    },
  ],
};

// ── Page (Server Component) ───────────────────────────────────────────────
export default function AITrainingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseCatalogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AITrainingClient />
    </>
  );
}