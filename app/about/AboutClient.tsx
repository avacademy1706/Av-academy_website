// "use client";
// import LucideIcon from "@/components/LucideIcon";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WAFloat from "@/components/WAFloat";
// import { CTASection } from "@/components/PageSections";
// import { Reveal } from "@/components/ScrollReveal";
// import Link from "next/link";

// // ============ DATA ============

// const academyHighlights = [
//     { icon: "GraduationCap", title: "Industry-Ready Courses", desc: "Curriculum designed with real industry demands" },
//     { icon: "Users", title: "Expert Faculty", desc: "Learn from working industry professionals" },
//     { icon: "Briefcase", title: "100% Placement Support", desc: "Dedicated career guidance & job assistance" },
//     { icon: "Trophy", title: "Certified Programs", desc: "Government recognized certifications" },
// ];

// const visionPoints = [
//     { icon: "BookOpen", title: "Industry-Ready Curriculum", desc: "Updated with latest market demands" },
//     { icon: "Wrench", title: "Hands-on Live Projects", desc: "Real work, real portfolio building" },
//     { icon: "GraduationCap", title: "Expert Mentorship", desc: "Learn from working professionals" },
//     { icon: "TrendingUp", title: "Career Transformation", desc: "From learner to industry professional" },
// ];

// const missionPoints = [
//     { icon: "Rocket", title: "Future-Proof Learning", desc: "AI-integrated training that stays relevant" },
//     { icon: "Target", title: "Practical Mastery", desc: "Skill-based modules, not just theory" },
//     { icon: "HeartHandshake", title: "Mentorship & Support", desc: "We walk with you, not just teach" },
//     { icon: "Award", title: "Growth & Excellence", desc: "Measurable progress every step" },
// ];

// const courseCategories = [
//     { icon: "Palette", title: "Graphic Design", count: "8+ Courses" },
//     { icon: "Video", title: "Video Editing & VFX", count: "6+ Courses" },
//     { icon: "Box", title: "2D & 3D Animation", count: "5+ Courses" },
//     { icon: "Code2", title: "Programming Languages", count: "7+ Courses" },
//     { icon: "Brain", title: "AI & Data Science", count: "4+ Courses" },
//     { icon: "Megaphone", title: "Digital Marketing", count: "3+ Courses" },
// ];

// const learningJourney = [
//     { step: "01", icon: "Search", title: "Choose Your Course", desc: "Browse 30+ industry-focused programs aligned with your career goals" },
//     { step: "02", icon: "BookOpen", title: "Learn From Experts", desc: "Interactive classes with working professionals & hands-on training" },
//     { step: "03", icon: "Wrench", title: "Build Real Projects", desc: "Work on live client projects from EditLab agency to build portfolio" },
//     { step: "04", icon: "Award", title: "Get Certified", desc: "Earn industry-recognized certifications upon course completion" },
//     { step: "05", icon: "Briefcase", title: "Land Your Dream Job", desc: "Career counseling, interview prep & placement assistance" },
// ];

// const academyAchievements = [
//     { num: "1500+", label: "Students Trained", icon: "Users" },
//     { num: "30+", label: "Courses Offered", icon: "BookOpen" },
//     { num: "95%", label: "Placement Rate", icon: "TrendingUp" },
//     { num: "5+", label: "Years Teaching", icon: "Calendar" },
// ];

// const whyChooseAcademy = [
//     { icon: "Target", title: "Industry-Focused Curriculum", desc: "Every course is designed based on current industry demands and updated regularly with latest trends and technologies." },
//     { icon: "Users", title: "Small Batch Sizes", desc: "Limited students per batch ensures personalized attention from instructors and better learning outcomes." },
//     { icon: "Wrench", title: "Hands-On Practical Training", desc: "70% practical, 30% theory approach. Work on real client projects from EditLab agency during your training." },
//     { icon: "GraduationCap", title: "Expert Mentorship", desc: "Learn from 5+ years experienced professionals who are actively working in top companies and agencies." },
//     { icon: "Briefcase", title: "Placement Assistance", desc: "Resume building, mock interviews, portfolio review, and direct connections with hiring companies." },
//     { icon: "Sparkles", title: "AI-Integrated Learning", desc: "First academy in Lucknow to integrate AI tools (ChatGPT, Midjourney, Runway) into traditional creative courses." },
//     { icon: "Clock", title: "Flexible Timings", desc: "Morning, evening, and weekend batches available. Online + offline hybrid options for working professionals." },
//     { icon: "Trophy", title: "Recognized Certifications", desc: "Government recognized certifications + industry endorsed credentials accepted across India." },
// ];

// const studentSuccess = [
//     { name: "Priya Sharma", course: "Graphic Design", role: "UI Designer at Tech Startup", img: "PS" },
//     { name: "Rohit Kumar", course: "3D Animation", role: "3D Artist at Production House", img: "RK" },
//     { name: "Anjali Verma", course: "Digital Marketing", role: "Marketing Manager", img: "AV" },
//     { name: "Vikash Singh", course: "VFX Master Class", role: "VFX Artist (Bollywood)", img: "VS" },
// ];

// const editLabServices = [
//     { icon: "Palette", title: "Graphic Design" },
//     { icon: "Video", title: "Video Editing" },
//     { icon: "Box", title: "3D Animation" },
//     { icon: "Sparkles", title: "VFX Services" },
//     { icon: "Megaphone", title: "Digital Marketing" },
//     { icon: "Camera", title: "Photography" },
// ];

// const trustedBrands = [
//     "Grapess", "Tour4YOU", "Diabeto India", "Madhurveda",
//     "Sai Paradise", "TechGrow", "Aura Skincare",
// ];

// // ============ COMPONENT ============

// export default function AboutClient() {
//     return (
//         <>
//             <Navbar />
//             <main>

//                 {/* ============ HERO ============ */}
//                 <section className="relative pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-20 px-4 sm:px-8 md:px-10 text-center overflow-hidden border-b border-cyan-500/15 bg-gradient-to-br from-[#061826] via-[#0a2436] to-[#061826]">
//                     {/* Glows */}
//                     <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[260px] sm:w-[460px] md:w-[600px] h-[160px] sm:h-[240px] md:h-[300px] rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
//                     <div className="absolute top-[30%] left-[4%] w-28 sm:w-44 md:w-52 h-28 sm:h-44 md:h-52 rounded-full bg-cyan-500/12 blur-3xl pointer-events-none" />
//                     <div className="absolute bottom-[10%] right-[5%] w-32 sm:w-48 md:w-60 h-32 sm:h-48 md:h-60 rounded-full bg-amber-500/8 blur-3xl pointer-events-none" />
//                     <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,180,216,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,180,216,.04) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

//                     <div className="relative z-10 max-w-[1000px] mx-auto">
//                         <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-[2px] uppercase mb-5 sm:mb-7 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 shadow-[0_0_30px_rgba(0,180,216,0.2)]">
//                             <LucideIcon name="GraduationCap" size={13} color="#22d3ee" strokeWidth={2} />
//                             About AV Academy &amp; EditLab
//                         </span>

//                         <h1 className="font-syne font-extrabold text-[clamp(1.9rem,6vw,4.5rem)] leading-[1.05] tracking-tight mb-5 sm:mb-6 text-white">
//                             Lucknow&apos;s Premier{" "}
//                             <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                                 Creative Training Hub
//                             </span>
//                         </h1>

//                         <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-[700px] mx-auto mb-6 sm:mb-7 leading-relaxed px-1">
//                             Empowering 1500+ students with industry-ready skills — backed by our in-house creative agency{" "}
//                             <strong className="text-cyan-400">AV EditLab</strong> for real-world project experience.
//                         </p>

//                         <nav aria-label="Breadcrumb">
//                             <ol className="inline-flex items-center gap-2 text-[11px] sm:text-[13px] text-gray-500 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#082c44]/60 border border-cyan-500/15 list-none m-0">
//                                 <li className="inline-flex items-center px-1">
//                                     <Link href="/" className="text-cyan-400 no-underline font-semibold hover:text-cyan-300 transition-colors">Home</Link>
//                                 </li>
//                                 <li className="inline-flex items-center" aria-hidden="true">
//                                     <LucideIcon name="ChevronRight" size={12} color="#6b7280" />
//                                 </li>
//                                 <li className="inline-flex items-center px-1">
//                                     <span className="text-gray-300" aria-current="page">About Us</span>
//                                 </li>
//                             </ol>
//                         </nav>
//                     </div>
//                 </section>

//                 {/* ============ ACADEMY STORY ============ */}
//                 <section className="px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-[#030f1a]">
//                     <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[70px] items-center">

//                         {/* Visual Card */}
//                         <Reveal direction="left">
//                             <div className="relative">
//                                 <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#082c44]/95 to-[#030e16]/98 border border-cyan-500/25 shadow-[0_25px_60px_rgba(0,180,216,.15)] flex items-center justify-center p-8 sm:p-10 aspect-[4/5] sm:aspect-auto sm:min-h-[420px]">
//                                     {/* Rotating conic gradient */}
//                                     <div className="about-rotate absolute inset-[-20%] pointer-events-none" style={{ background: "conic-gradient(transparent 0%,rgba(0,180,216,.15) 25%,transparent 50%,rgba(245,158,11,.1) 75%,transparent 100%)" }} />

//                                     <div className="relative z-10 text-center">
//                                         <div className="w-24 h-24 sm:w-[120px] sm:h-[120px] mx-auto mb-5 rounded-full bg-gradient-to-br from-[#00b4d8] to-[#22d3ee] flex items-center justify-center shadow-[0_0_50px_rgba(0,180,216,.4)]">
//                                             <LucideIcon name="GraduationCap" size={48} color="#031a2b" strokeWidth={2} />
//                                         </div>
//                                         <h3 className="font-syne font-extrabold text-3xl sm:text-[2.8rem] leading-none tracking-tight mb-2 bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                                             AV ACADEMY
//                                         </h3>
//                                         <p className="text-[10px] sm:text-[11px] tracking-[4px] text-amber-400 font-bold uppercase mb-5">Creative Training Institute</p>
//                                         <div className="w-14 h-0.5 bg-cyan-400 mx-auto mb-5 opacity-50" />
//                                         <p className="text-xs sm:text-[13px] text-gray-400 leading-relaxed max-w-[240px] mx-auto">
//                                             Where careers are crafted with creativity and technology
//                                         </p>
//                                     </div>
//                                 </div>

//                                 {/* Badge: Est. */}
//                                 <div className="absolute -top-4 -right-2 sm:-top-5 sm:-right-5 px-4 py-3 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-[#1a1a1a] font-black text-xs sm:text-sm flex items-center gap-2 shadow-[0_12px_30px_rgba(245,158,11,.5)] z-10">
//                                     <LucideIcon name="Award" size={16} color="#1a1a1a" strokeWidth={3} />
//                                     Since 2020
//                                 </div>

//                                 {/* Badge: Students */}
//                                 <div className="absolute -bottom-2 -left-2 sm:bottom-7 sm:-left-7 px-4 sm:px-5 py-3 sm:py-4 rounded-2xl bg-gradient-to-br from-[#0a2436] to-[#061826] border border-cyan-500/50 backdrop-blur-sm flex items-center gap-3 shadow-[0_12px_30px_rgba(0,0,0,.5)] z-10">
//                                     <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#00b4d8] to-[#22d3ee] flex items-center justify-center shadow-[0_4px_12px_rgba(0,180,216,.4)]">
//                                         <LucideIcon name="Users" size={18} color="#031a2b" strokeWidth={2.5} />
//                                     </div>
//                                     <div>
//                                         <div className="font-syne font-black text-xl sm:text-2xl leading-none bg-gradient-to-r from-[#22d3ee] to-[#00b4d8] bg-clip-text text-transparent">1500+</div>
//                                         <div className="text-[9px] sm:text-[10px] text-gray-300 tracking-[1.5px] uppercase mt-0.5 font-semibold">Students</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Reveal>

//                         {/* Text Content */}
//                         <Reveal direction="right">
//                             <div>
//                                 <div className="text-[11px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Our Story</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.1] tracking-tight mb-5 text-white">
//                                     Building Future-Ready{" "}
//                                     <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Creative Professionals</span>
//                                 </h2>
//                                 <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4">
//                                     <strong className="text-cyan-400">AV Academy</strong> is Lucknow&apos;s leading creative training institute, established with a vision to bridge the gap between traditional education and industry requirements.
//                                 </p>
//                                 <p className="text-sm sm:text-[15px] text-gray-400 leading-relaxed mb-8">
//                                     We specialize in <strong className="text-amber-400">job-ready training programs</strong> across Graphic Design, Animation, VFX, Video Editing, Programming, AI, and Digital Marketing. With our unique <strong className="text-cyan-400">hands-on approach</strong> and direct integration with EditLab agency, students work on real client projects from day one.
//                                 </p>

//                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
//                                     {academyHighlights.map((f) => (
//                                         <div key={f.title} className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-[#082c44]/50 border border-cyan-500/12 hover:border-cyan-500/35 hover:-translate-y-0.5 transition-all">
//                                             <div className="w-9 h-9 rounded-xl flex-shrink-0 bg-cyan-500/10 flex items-center justify-center">
//                                                 <LucideIcon name={f.icon} size={17} color="#22d3ee" strokeWidth={2} />
//                                             </div>
//                                             <div>
//                                                 <div className="font-syne font-bold text-[12.5px] text-amber-400 mb-0.5">{f.title}</div>
//                                                 <div className="text-[11.5px] text-gray-400 leading-relaxed">{f.desc}</div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>

//                                 <div className="flex flex-wrap gap-3">
//                                     <Link href="/courses" className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] font-bold text-sm hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/30 transition-all active:scale-[0.98]">
//                                         <LucideIcon name="BookOpen" size={15} color="#031a2b" strokeWidth={2.5} />
//                                         Explore Courses
//                                     </Link>
//                                     <Link href="/contact" className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-cyan-500/40 text-cyan-400 font-bold text-sm hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all active:scale-[0.98]">
//                                         Get Counselling
//                                         <LucideIcon name="ArrowRight" size={15} color="#22d3ee" strokeWidth={2.5} />
//                                     </Link>
//                                 </div>
//                             </div>
//                         </Reveal>
//                     </div>
//                 </section>

//                 {/* ============ OUR VISION ============ */}
//                 <section className="px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-[#061826]">
//                     <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[70px] items-center">

//                         {/* Vision Visual */}
//                         <Reveal direction="left">
//                             <div className="relative">
//                                 <div className="aspect-square rounded-3xl bg-gradient-to-br from-cyan-500/18 to-[#082c44]/95 border border-cyan-500/30 flex flex-col items-center justify-center relative overflow-hidden p-8 sm:p-10 shadow-[0_25px_60px_rgba(0,180,216,.15)]">
//                                     <div className="about-rotate absolute inset-[8%] rounded-full border-2 border-dashed border-cyan-500/25 pointer-events-none" />
//                                     <div className="about-rotate absolute inset-[22%] rounded-full border border-amber-500/25 pointer-events-none" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
//                                     <div className="about-rotate absolute inset-[36%] rounded-full border border-dashed border-cyan-500/20 pointer-events-none" style={{ animationDuration: "20s" }} />

//                                     <div className="w-28 h-28 sm:w-[130px] sm:h-[130px] rounded-full bg-gradient-to-br from-[#00b4d8] to-[#22d3ee] flex items-center justify-center shadow-[0_0_70px_rgba(0,180,216,.5),inset_0_0_0_4px_rgba(255,255,255,.1)] relative z-10 mb-5">
//                                         <LucideIcon name="Eye" size={54} color="#031a2b" strokeWidth={2} />
//                                     </div>
//                                     <div className="font-syne font-extrabold text-2xl sm:text-[1.8rem] bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent tracking-[2px] relative z-10 mb-2">OUR VISION</div>
//                                     <p className="text-[10px] sm:text-xs text-gray-400 tracking-[3px] font-semibold uppercase relative z-10">Future of Creativity</p>
//                                 </div>

//                                 {/* Floating tag */}
//                                 <div className="absolute top-4 -right-2 sm:-right-4 px-3.5 sm:px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-[#1a1a1a] font-black text-[10px] sm:text-[11px] shadow-[0_8px_20px_rgba(245,158,11,.4)] tracking-[1.5px] uppercase z-10 flex items-center gap-1.5">
//                                     <LucideIcon name="Sparkles" size={11} color="#1a1a1a" strokeWidth={3} />
//                                     2030 Goal
//                                 </div>
//                             </div>
//                         </Reveal>

//                         {/* Vision Text */}
//                         <Reveal direction="right">
//                             <div>
//                                 <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
//                                     <LucideIcon name="Eye" size={12} color="#22d3ee" strokeWidth={2} />
//                                     Our Vision
//                                 </span>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.7rem,3.2vw,2.8rem)] leading-[1.1] tracking-tight mb-5 text-white">
//                                     Driving the Future of{" "}
//                                     <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Creative Education</span>
//                                 </h2>
//                                 <p className="text-sm sm:text-[15.5px] text-gray-400 leading-relaxed mb-6">
//                                     We envision AV Academy as India&apos;s most trusted destination for <strong className="text-cyan-400">industry-focused creative training</strong> — where every student transforms from a learner into a <strong className="text-amber-400">job-ready professional</strong> from day one.
//                                 </p>
//                                 <div className="flex flex-col gap-3">
//                                     {visionPoints.map((p) => (
//                                         <div key={p.title} className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#082c44]/60 border border-cyan-500/12 hover:border-cyan-500/40 hover:translate-x-1.5 transition-all">
//                                             <div className="w-10 h-10 sm:w-[42px] sm:h-[42px] rounded-xl flex-shrink-0 bg-cyan-500/12 border border-cyan-500/25 flex items-center justify-center">
//                                                 <LucideIcon name={p.icon} size={18} color="#22d3ee" strokeWidth={2} />
//                                             </div>
//                                             <div>
//                                                 <div className="font-syne font-bold text-[13.5px] sm:text-[14.5px] text-white mb-0.5">{p.title}</div>
//                                                 <div className="text-[12px] sm:text-[13px] text-gray-400 leading-relaxed">{p.desc}</div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </Reveal>
//                     </div>
//                 </section>

//                 {/* ============ OUR MISSION ============ */}
//                 <section className="relative px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-[#030f1a] overflow-hidden">
//                     <div className="absolute top-[10%] right-[5%] w-60 h-60 rounded-full bg-amber-500/6 blur-3xl pointer-events-none" />

//                     <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-[70px] items-center relative z-10">

//                         {/* Mission Text */}
//                         <Reveal direction="left">
//                             <div>
//                                 <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-amber-400 mb-3 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
//                                     <LucideIcon name="Rocket" size={12} color="#f59e0b" strokeWidth={2} />
//                                     Our Mission
//                                 </span>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.7rem,3.2vw,2.8rem)] leading-[1.1] tracking-tight mb-5 text-white">
//                                     Bringing Ideas to Life Through{" "}
//                                     <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Creative Impact</span>
//                                 </h2>
//                                 <p className="text-sm sm:text-[15.5px] text-gray-400 leading-relaxed mb-6">
//                                     Our mission is to empower the next generation of creative professionals with <strong className="text-cyan-400">practical skills, real-world experience</strong>, and <strong className="text-amber-400">AI-integrated knowledge</strong> — ensuring measurable career growth and lifelong learning.
//                                 </p>
//                                 <div className="flex flex-col gap-3">
//                                     {missionPoints.map((p) => (
//                                         <div key={p.title} className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#082c44]/60 border border-amber-500/15 hover:border-amber-500/40 hover:translate-x-1.5 transition-all">
//                                             <div className="w-10 h-10 sm:w-[42px] sm:h-[42px] rounded-xl flex-shrink-0 bg-amber-500/12 border border-amber-500/30 flex items-center justify-center">
//                                                 <LucideIcon name={p.icon} size={18} color="#f59e0b" strokeWidth={2} />
//                                             </div>
//                                             <div>
//                                                 <div className="font-syne font-bold text-[13.5px] sm:text-[14.5px] text-white mb-0.5">{p.title}</div>
//                                                 <div className="text-[12px] sm:text-[13px] text-gray-400 leading-relaxed">{p.desc}</div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </Reveal>

//                         {/* Mission Visual */}
//                         <Reveal direction="right">
//                             <div className="relative">
//                                 <div className="aspect-square rounded-3xl bg-gradient-to-br from-amber-500/18 to-[#082c44]/95 border border-amber-500/30 flex flex-col items-center justify-center relative overflow-hidden p-8 sm:p-10 shadow-[0_25px_60px_rgba(245,158,11,.12)]">
//                                     <div className="about-rotate absolute inset-[8%] rounded-full border-2 border-dashed border-amber-500/25 pointer-events-none" />
//                                     <div className="about-rotate absolute inset-[22%] rounded-full border border-cyan-500/25 pointer-events-none" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
//                                     <div className="about-rotate absolute inset-[36%] rounded-full border border-dashed border-amber-500/20 pointer-events-none" style={{ animationDuration: "20s" }} />

//                                     <div className="w-28 h-28 sm:w-[130px] sm:h-[130px] rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-[0_0_70px_rgba(245,158,11,.5),inset_0_0_0_4px_rgba(255,255,255,.15)] relative z-10 mb-5">
//                                         <LucideIcon name="Rocket" size={54} color="#1a1a1a" strokeWidth={2.5} />
//                                     </div>
//                                     <div className="font-syne font-extrabold text-2xl sm:text-[1.8rem] bg-gradient-to-r from-[#22d3ee] to-[#00b4d8] bg-clip-text text-transparent tracking-[2px] relative z-10 mb-2">OUR MISSION</div>
//                                     <p className="text-[10px] sm:text-xs text-gray-400 tracking-[3px] font-semibold uppercase relative z-10">Creative Impact</p>
//                                 </div>

//                                 {/* Floating tag */}
//                                 <div className="absolute top-4 -left-2 sm:-left-4 px-3.5 sm:px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] font-black text-[10px] sm:text-[11px] shadow-[0_8px_20px_rgba(0,180,216,.4)] tracking-[1.5px] uppercase z-10 flex items-center gap-1.5">
//                                     <LucideIcon name="Target" size={11} color="#031a2b" strokeWidth={3} />
//                                     Daily Goal
//                                 </div>
//                             </div>
//                         </Reveal>
//                     </div>
//                 </section>

//                 {/* ============ COURSE CATEGORIES ============ */}
//                 <section className="relative px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-[#061826] overflow-hidden">
//                     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,180,216,.06)_0%,transparent_70%)] pointer-events-none" />

//                     <div className="max-w-[1240px] mx-auto relative z-10">
//                         <Reveal>
//                             <div className="text-center mb-10 sm:mb-14">
//                                 <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Our Courses</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,3vw,2.6rem)] tracking-tight mb-3.5 text-white">
//                                     30+ Industry-Focused{" "}
//                                     <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Course Programs</span>
//                                 </h2>
//                                 <p className="text-sm sm:text-[15px] text-gray-400 max-w-[600px] mx-auto leading-relaxed px-2">
//                                     From creative arts to cutting-edge technology — discover programs designed to launch your career
//                                 </p>
//                             </div>
//                         </Reveal>

//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
//                             {courseCategories.map((cat, i) => (
//                                 <Reveal key={cat.title} delay={i * 80}>
//                                     <Link href="/courses" className="block h-full no-underline group">
//                                         <div className="relative p-6 sm:p-7 rounded-2xl h-full bg-gradient-to-br from-[#082c44]/85 to-[#030e16]/95 border border-cyan-500/18 hover:border-cyan-500/50 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,180,216,.15)] transition-all overflow-hidden">
//                                             <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 to-amber-500 opacity-60" />
//                                             <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl mb-4 sm:mb-5 bg-gradient-to-br from-cyan-500/15 to-cyan-400/5 border border-cyan-500/25 flex items-center justify-center">
//                                                 <LucideIcon name={cat.icon} size={24} color="#22d3ee" strokeWidth={1.8} />
//                                             </div>
//                                             <h3 className="font-syne font-bold text-base sm:text-lg text-white mb-2 tracking-tight">{cat.title}</h3>
//                                             <p className="text-xs sm:text-[13px] text-amber-400 font-semibold tracking-[0.5px]">{cat.count}</p>
//                                         </div>
//                                     </Link>
//                                 </Reveal>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* ============ LEARNING JOURNEY ============ */}
//                 <section className="px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-[#030f1a]">
//                     <div className="max-w-[1240px] mx-auto">
//                         <Reveal>
//                             <div className="text-center mb-10 sm:mb-14">
//                                 <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Student Journey</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,3vw,2.6rem)] tracking-tight mb-3.5 text-white">
//                                     Your Path to{" "}
//                                     <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Career Success</span>
//                                 </h2>
//                                 <p className="text-sm sm:text-[15px] text-gray-400 max-w-[580px] mx-auto leading-relaxed px-2">
//                                     A proven 5-step methodology that has launched 1500+ successful careers
//                                 </p>
//                             </div>
//                         </Reveal>

//                         <div className="flex flex-col gap-4 sm:gap-5">
//                             {learningJourney.map((j, i) => (
//                                 <Reveal key={j.step} delay={i * 100}>
//                                     <div className="grid grid-cols-[auto_1fr] gap-4 sm:gap-7 items-center p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030e16]/90 border border-cyan-500/18 hover:border-cyan-500/50 hover:translate-x-2 sm:hover:translate-x-2.5 hover:shadow-[0_15px_40px_rgba(0,180,216,.12)] transition-all">
//                                         <div className="flex items-center gap-3 sm:gap-5">
//                                             <div className="font-syne font-black text-3xl sm:text-[3rem] leading-none bg-gradient-to-b from-amber-400 to-amber-500 bg-clip-text text-transparent tracking-tight min-w-[48px] sm:min-w-[70px]">
//                                                 {j.step}
//                                             </div>
//                                             <div className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-2xl bg-gradient-to-br from-[#00b4d8] to-[#22d3ee] flex items-center justify-center shadow-[0_8px_20px_rgba(0,180,216,.3)] flex-shrink-0">
//                                                 <LucideIcon name={j.icon} size={22} color="#031a2b" strokeWidth={2} />
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <h3 className="font-syne font-bold text-base sm:text-[1.3rem] text-white mb-1 sm:mb-1.5 tracking-tight">{j.title}</h3>
//                                             <p className="text-xs sm:text-[14px] text-gray-400 leading-relaxed">{j.desc}</p>
//                                         </div>
//                                     </div>
//                                 </Reveal>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* ============ ACADEMY ACHIEVEMENTS ============ */}
//                 <section className="relative px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-[#061826] overflow-hidden">
//                     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,180,216,.06)_0%,transparent_70%)] pointer-events-none" />

//                     <div className="max-w-[1240px] mx-auto relative z-10">
//                         <Reveal>
//                             <div className="text-center mb-10 sm:mb-14">
//                                 <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Our Achievements</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,3vw,2.6rem)] tracking-tight mb-3.5 text-white">
//                                     Numbers That Speak{" "}
//                                     <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">For Themselves</span>
//                                 </h2>
//                                 <p className="text-sm sm:text-[15px] text-gray-400 max-w-[560px] mx-auto leading-relaxed px-2">
//                                     5 years of excellence in creative education and skill development
//                                 </p>
//                             </div>
//                         </Reveal>

//                         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
//                             {academyAchievements.map((s, i) => (
//                                 <Reveal key={s.label} delay={i * 100}>
//                                     <div className="relative p-6 sm:p-9 rounded-2xl text-center bg-gradient-to-br from-[#082c44]/80 to-[#030e16]/90 border border-cyan-500/18 hover:border-cyan-500/50 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,180,216,.15)] transition-all overflow-hidden">
//                                         <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-5 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-cyan-400/5 border border-cyan-500/25 flex items-center justify-center">
//                                             <LucideIcon name={s.icon} size={22} color="#22d3ee" strokeWidth={1.8} />
//                                         </div>
//                                         <div className="font-syne font-extrabold text-3xl sm:text-[2.6rem] leading-none tracking-tight mb-2 bg-gradient-to-b from-amber-400 to-amber-500 bg-clip-text text-transparent">
//                                             {s.num}
//                                         </div>
//                                         <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-[1px] font-semibold">{s.label}</div>
//                                     </div>
//                                 </Reveal>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* ============ WHY CHOOSE AV ACADEMY ============ */}
//                 <section className="relative px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-[#030f1a] overflow-hidden">
//                     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,180,216,.08)_0%,transparent_60%)] pointer-events-none" />

//                     <div className="max-w-[1240px] mx-auto relative z-10">
//                         <Reveal>
//                             <div className="text-center mb-10 sm:mb-14">
//                                 <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Why AV Academy</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,3vw,2.6rem)] tracking-tight mb-3.5 text-white">
//                                     Why Students Choose{" "}
//                                     <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">AV Academy</span>
//                                 </h2>
//                                 <p className="text-sm sm:text-[15px] text-gray-400 max-w-[620px] mx-auto leading-relaxed px-2">
//                                     Eight reasons why we&apos;re Lucknow&apos;s most trusted creative training institute
//                                 </p>
//                             </div>
//                         </Reveal>

//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
//                             {whyChooseAcademy.map((item, i) => (
//                                 <Reveal key={item.title} delay={i * 60}>
//                                     <div className="relative flex gap-4 sm:gap-5 items-start p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030e16]/95 border border-cyan-500/15 hover:border-cyan-500/50 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,180,216,.12)] transition-all overflow-hidden h-full">
//                                         <div className="w-12 h-12 sm:w-[54px] sm:h-[54px] rounded-2xl flex-shrink-0 bg-gradient-to-br from-cyan-500/15 to-cyan-400/5 border border-cyan-500/25 flex items-center justify-center">
//                                             <LucideIcon name={item.icon} size={22} color="#22d3ee" strokeWidth={1.8} />
//                                         </div>
//                                         <div>
//                                             <h3 className="font-syne font-bold text-sm sm:text-[1.1rem] text-amber-400 mb-1.5 sm:mb-2 tracking-tight">{item.title}</h3>
//                                             <p className="text-[12px] sm:text-[13.5px] text-gray-400 leading-relaxed">{item.desc}</p>
//                                         </div>
//                                     </div>
//                                 </Reveal>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* ============ STUDENT SUCCESS STORIES ============ */}
//                 <section className="px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-[#061826]">
//                     <div className="max-w-[1240px] mx-auto">
//                         <Reveal>
//                             <div className="text-center mb-10 sm:mb-14">
//                                 <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Success Stories</div>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,3vw,2.6rem)] tracking-tight mb-3.5 text-white">
//                                     Our Students Are{" "}
//                                     <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Industry Leaders</span>
//                                 </h2>
//                                 <p className="text-sm sm:text-[15px] text-gray-400 max-w-[600px] mx-auto leading-relaxed px-2">
//                                     Meet a few of our graduates who are now shaping the creative industry
//                                 </p>
//                             </div>
//                         </Reveal>

//                         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
//                             {studentSuccess.map((s, i) => (
//                                 <Reveal key={s.name} delay={i * 80}>
//                                     <div className="p-5 sm:p-8 rounded-2xl text-center bg-gradient-to-br from-[#082c44]/85 to-[#030e16]/95 border border-cyan-500/18 hover:border-cyan-500/50 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,180,216,.15)] transition-all">
//                                         <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-[#00b4d8] to-[#22d3ee] flex items-center justify-center shadow-[0_10px_25px_rgba(0,180,216,.3)] text-[#031a2b] font-syne font-black text-base sm:text-2xl tracking-tight">
//                                             {s.img}
//                                         </div>
//                                         <h3 className="font-syne font-bold text-xs sm:text-[1.05rem] text-white mb-1.5 sm:mb-2">{s.name}</h3>
//                                         <div className="text-[9px] sm:text-[11px] text-amber-400 font-semibold tracking-[1px] uppercase mb-2 sm:mb-2.5">{s.course}</div>
//                                         <div className="pt-3 sm:pt-3.5 border-t border-cyan-500/15 text-[10px] sm:text-[12.5px] text-gray-400 leading-relaxed">{s.role}</div>
//                                     </div>
//                                 </Reveal>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* ============ MEET AV EDITLAB ============ */}
//                 <section className="relative px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#030f1a] to-[#0a2436] overflow-hidden">
//                     <div className="absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-amber-500/8 blur-3xl pointer-events-none" />
//                     <div className="absolute -bottom-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-cyan-500/8 blur-3xl pointer-events-none" />

//                     <div className="max-w-[1240px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-[70px] items-center">

//                         <Reveal direction="left">
//                             <div>
//                                 <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-amber-400 mb-3 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
//                                     <LucideIcon name="Sparkles" size={12} color="#f59e0b" strokeWidth={2} />
//                                     Our Creative Agency
//                                 </span>
//                                 <h2 className="font-syne font-extrabold text-[clamp(1.7rem,3vw,2.6rem)] leading-[1.1] tracking-tight mb-5 text-white">
//                                     Meet{" "}
//                                     <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">AV EditLab</span>
//                                     {" "}— Our In-House Agency
//                                 </h2>
//                                 <p className="text-sm sm:text-[15.5px] text-gray-400 leading-relaxed mb-4">
//                                     Beyond training, we run <strong className="text-amber-400">AV EditLab</strong> — a full-service creative agency serving 100+ brands across packaging, hospitality, real estate, fashion, automotive, and more.
//                                 </p>
//                                 <p className="text-xs sm:text-[14px] text-gray-400 leading-relaxed mb-7">
//                                     This unique setup gives our students a <strong className="text-cyan-400">real-world advantage</strong> — they work on actual client projects during training, building portfolios that get them hired faster.
//                                 </p>

//                                 <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-7 sm:mb-8">
//                                     {editLabServices.map((s) => (
//                                         <div key={s.title} className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-amber-500/8 border border-amber-500/25 hover:border-amber-500/50 hover:bg-amber-500/15 text-[11px] sm:text-[12.5px] text-amber-300 font-semibold transition-all">
//                                             <LucideIcon name={s.icon} size={13} color="#fbbf24" strokeWidth={2} />
//                                             {s.title}
//                                         </div>
//                                     ))}
//                                 </div>

//                                 <Link href="/services" className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-[#1a1a1a] font-extrabold text-sm hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(245,158,11,.3)] transition-all active:scale-[0.98]">
//                                     Explore EditLab Services
//                                     <LucideIcon name="ArrowRight" size={15} color="#1a1a1a" strokeWidth={2.5} />
//                                 </Link>
//                             </div>
//                         </Reveal>

//                         <Reveal direction="right">
//                             <div className="relative">
//                                 <div className="aspect-square rounded-3xl bg-gradient-to-br from-amber-500/15 to-[#082c44]/95 border border-amber-500/30 flex flex-col items-center justify-center relative overflow-hidden p-8 sm:p-10 shadow-[0_25px_60px_rgba(245,158,11,.12)]">
//                                     <div className="about-rotate absolute inset-[10%] rounded-full border-2 border-dashed border-amber-500/25 pointer-events-none" />
//                                     <div className="about-rotate absolute inset-[25%] rounded-full border border-cyan-500/20 pointer-events-none" style={{ animationDirection: "reverse", animationDuration: "30s" }} />

//                                     <div className="w-24 h-24 sm:w-[120px] sm:h-[120px] rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-[0_0_60px_rgba(245,158,11,.5)] relative z-10 mb-5">
//                                         <LucideIcon name="Palette" size={48} color="#1a1a1a" strokeWidth={2} />
//                                     </div>
//                                     <h3 className="font-syne font-extrabold text-2xl sm:text-[1.8rem] text-white tracking-tight relative z-10 mb-2">AV EDITLAB</h3>
//                                     <p className="text-[10px] sm:text-[11px] tracking-[3px] text-cyan-400 font-bold uppercase relative z-10 mb-6 sm:mb-7">Creative Agency</p>

//                                     <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-[280px] relative z-10">
//                                         {[["100+", "Clients"], ["1000+", "Projects"]].map(([num, label]) => (
//                                             <div key={label} className="p-3 sm:p-3.5 rounded-xl text-center bg-[#082c44]/60 border border-amber-500/20">
//                                                 <div className="font-syne font-black text-xl sm:text-[1.4rem] leading-none bg-gradient-to-b from-amber-400 to-amber-500 bg-clip-text text-transparent">{num}</div>
//                                                 <div className="text-[9px] sm:text-[10px] text-gray-400 mt-1 uppercase tracking-[0.5px]">{label}</div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </Reveal>
//                     </div>
//                 </section>

//                 {/* ============ TRUSTED BY ============ */}
//                 <section className="px-4 sm:px-8 md:px-10 py-10 sm:py-14 bg-[#061826] border-t border-cyan-500/10 border-b border-cyan-500/10">
//                     <div className="max-w-[1240px] mx-auto">
//                         <div className="text-center mb-6 sm:mb-8">
//                             <span className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400">// Trusted By Brands Across India</span>
//                         </div>
//                         <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-4">
//                             {trustedBrands.map((brand) => (
//                                 <div key={brand} className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#082c44]/60 border border-cyan-500/15 hover:border-cyan-500/40 hover:text-cyan-400 text-gray-400 text-xs sm:text-sm font-semibold tracking-[0.5px] transition-all">
//                                     {brand}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 <CTASection
//                     title="Ready to Start Your"
//                     highlight="Creative Career?"
//                     desc="Join 1500+ students who transformed their passion into successful careers with AV Academy."
//                 />
//             </main>
//             <Footer />
//             <WAFloat />
//         </>
//     );
// }



"use client";
import LucideIcon from "@/components/LucideIcon";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WAFloat from "@/components/WAFloat";
import { CTASection } from "@/components/PageSections";
import { Reveal } from "@/components/ScrollReveal";
import Link from "next/link";

const academyHighlights = [
    { icon: "GraduationCap", title: "Industry-Ready Courses", desc: "Curriculum designed with real industry demands" },
    { icon: "Users", title: "Expert Faculty", desc: "Learn from working industry professionals" },
    { icon: "Briefcase", title: "100% Placement Support", desc: "Dedicated career guidance & job assistance" },
    { icon: "Trophy", title: "Certified Programs", desc: "Government recognized certifications" },
];
const visionPoints = [
    { icon: "BookOpen", title: "Industry-Ready Curriculum", desc: "Updated with latest market demands" },
    { icon: "Wrench", title: "Hands-on Live Projects", desc: "Real work, real portfolio building" },
    { icon: "GraduationCap", title: "Expert Mentorship", desc: "Learn from working professionals" },
    { icon: "TrendingUp", title: "Career Transformation", desc: "From learner to industry professional" },
];
const missionPoints = [
    { icon: "Rocket", title: "Future-Proof Learning", desc: "AI-integrated training that stays relevant" },
    { icon: "Target", title: "Practical Mastery", desc: "Skill-based modules, not just theory" },
    { icon: "HeartHandshake", title: "Mentorship & Support", desc: "We walk with you, not just teach" },
    { icon: "Award", title: "Growth & Excellence", desc: "Measurable progress every step" },
];
const courseCategories = [
    { icon: "Palette", title: "Graphic Design", count: "8+ Courses" },
    { icon: "Video", title: "Video Editing & VFX", count: "6+ Courses" },
    { icon: "Box", title: "2D & 3D Animation", count: "5+ Courses" },
    { icon: "Code2", title: "Programming Languages", count: "7+ Courses" },
    { icon: "Brain", title: "AI & Data Science", count: "4+ Courses" },
    { icon: "Megaphone", title: "Digital Marketing", count: "3+ Courses" },
];
const learningJourney = [
    { step: "01", icon: "Search", title: "Choose Your Course", desc: "Browse 30+ industry-focused programs aligned with your career goals" },
    { step: "02", icon: "BookOpen", title: "Learn From Experts", desc: "Interactive classes with working professionals & hands-on training" },
    { step: "03", icon: "Wrench", title: "Build Real Projects", desc: "Work on live client projects from EditLab agency to build portfolio" },
    { step: "04", icon: "Award", title: "Get Certified", desc: "Earn industry-recognized certifications upon course completion" },
    { step: "05", icon: "Briefcase", title: "Land Your Dream Job", desc: "Career counseling, interview prep & placement assistance" },
];
const academyAchievements = [
    { num: "1500+", label: "Students Trained", icon: "Users" },
    { num: "30+", label: "Courses Offered", icon: "BookOpen" },
    { num: "95%", label: "Placement Rate", icon: "TrendingUp" },
    { num: "5+", label: "Years Teaching", icon: "Calendar" },
];
const whyChooseAcademy = [
    { icon: "Target", title: "Industry-Focused Curriculum", desc: "Every course is designed based on current industry demands and updated regularly with latest trends and technologies." },
    { icon: "Users", title: "Small Batch Sizes", desc: "Limited students per batch ensures personalized attention from instructors and better learning outcomes." },
    { icon: "Wrench", title: "Hands-On Practical Training", desc: "70% practical, 30% theory approach. Work on real client projects from EditLab agency during your training." },
    { icon: "GraduationCap", title: "Expert Mentorship", desc: "Learn from 5+ years experienced professionals who are actively working in top companies and agencies." },
    { icon: "Briefcase", title: "Placement Assistance", desc: "Resume building, mock interviews, portfolio review, and direct connections with hiring companies." },
    { icon: "Sparkles", title: "AI-Integrated Learning", desc: "First academy in Lucknow to integrate AI tools (ChatGPT, Midjourney, Runway) into traditional creative courses." },
    { icon: "Clock", title: "Flexible Timings", desc: "Morning, evening, and weekend batches available. Online + offline hybrid options for working professionals." },
    { icon: "Trophy", title: "Recognized Certifications", desc: "Government recognized certifications + industry endorsed credentials accepted across India." },
];
const studentSuccess = [
    { name: "Priya Sharma", course: "Graphic Design", role: "UI Designer at Tech Startup", img: "PS" },
    { name: "Rohit Kumar", course: "3D Animation", role: "3D Artist at Production House", img: "RK" },
    { name: "Anjali Verma", course: "Digital Marketing", role: "Marketing Manager", img: "AV" },
    { name: "Vikash Singh", course: "VFX Master Class", role: "VFX Artist (Bollywood)", img: "VS" },
];
const editLabServices = [
    { icon: "Palette", title: "Graphic Design" },
    { icon: "Video", title: "Video Editing" },
    { icon: "Box", title: "3D Animation" },
    { icon: "Sparkles", title: "VFX Services" },
    { icon: "Megaphone", title: "Digital Marketing" },
    { icon: "Camera", title: "Photography" },
];
const trustedBrands = ["Grapess", "Tour4YOU", "Diabeto India", "Madhurveda", "Sai Paradise", "TechGrow", "Aura Skincare"];

export default function AboutClient() {
    return (
        <>
            <Navbar />
            <main>
                {/* HERO */}
                <section className="relative pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-20 px-4 sm:px-8 md:px-10 text-center overflow-hidden border-b border-cyan-500/15 bg-gradient-to-br from-[#061826] via-[#0a2436] to-[#061826]">
                    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[260px] sm:w-[460px] md:w-[600px] h-[160px] sm:h-[240px] md:h-[300px] rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
                    <div className="absolute top-[30%] left-[4%] w-28 sm:w-44 md:w-52 h-28 sm:h-44 md:h-52 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-[10%] right-[5%] w-32 sm:w-48 md:w-60 h-32 sm:h-48 md:h-60 rounded-full bg-amber-500/8 blur-3xl pointer-events-none" />
                    <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,180,216,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,180,216,.04) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
                    <div className="relative z-10 max-w-[1000px] mx-auto">
                        <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-[2px] uppercase mb-5 sm:mb-7 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 shadow-[0_0_30px_rgba(0,180,216,0.2)]">
                            <LucideIcon name="GraduationCap" size={13} color="#22d3ee" strokeWidth={2} />
                            About AV Academy &amp; EditLab
                        </span>
                        <h1 className="font-syne font-extrabold text-[clamp(1.9rem,6vw,4.5rem)] leading-[1.05] tracking-tight mb-5 sm:mb-6 text-white">
                            Lucknow&apos;s Premier{" "}
                            <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Creative Training Hub</span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-[700px] mx-auto mb-6 sm:mb-7 leading-relaxed px-1">
                            Empowering 1500+ students with industry-ready skills — backed by our in-house creative agency{" "}
                            <strong className="text-cyan-400">AV EditLab</strong> for real-world project experience.
                        </p>
                        {/* <nav aria-label="Breadcrumb">
                            <ol className="inline-flex items-center gap-2 text-[11px] sm:text-[13px] text-gray-500 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#082c44]/60 border border-cyan-500/15 list-none m-0">
                                <li className="inline-flex items-center px-1"><Link href="/" className="text-cyan-400 no-underline font-semibold hover:text-cyan-300 transition-colors">Home</Link></li>
                                <li className="inline-flex items-center" aria-hidden="true"><LucideIcon name="ChevronRight" size={12} color="#6b7280" /></li>
                                <li className="inline-flex items-center px-1"><span className="text-gray-300" aria-current="page">About Us</span></li>
                            </ol>
                        </nav> */}
                    </div>
                </section>

                {/* ACADEMY STORY */}
                <section className="px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-[#030f1a]">
                    <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[70px] items-center">
                        <Reveal direction="left">
                            <div className="relative">
                                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#082c44]/95 to-[#030e16]/98 border border-cyan-500/25 shadow-[0_25px_60px_rgba(0,180,216,.15)] flex items-center justify-center p-8 sm:p-10 aspect-[4/5] sm:aspect-auto sm:min-h-[420px]">
                                    <div className="about-rotate absolute inset-[-20%] pointer-events-none" style={{ background: "conic-gradient(transparent 0%,rgba(0,180,216,.15) 25%,transparent 50%,rgba(245,158,11,.1) 75%,transparent 100%)" }} />
                                    <div className="relative z-10 text-center">
                                        <div className="w-24 h-24 sm:w-[120px] sm:h-[120px] mx-auto mb-5 rounded-full bg-gradient-to-br from-[#00b4d8] to-[#22d3ee] flex items-center justify-center shadow-[0_0_50px_rgba(0,180,216,.4)]">
                                            <LucideIcon name="GraduationCap" size={48} color="#031a2b" strokeWidth={2} />
                                        </div>
                                        <h3 className="font-syne font-extrabold text-3xl sm:text-[2.8rem] leading-none tracking-tight mb-2 bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">AV ACADEMY</h3>
                                        <p className="text-[10px] sm:text-[11px] tracking-[4px] text-amber-400 font-bold uppercase mb-5">Creative Training Institute</p>
                                        <div className="w-14 h-0.5 bg-cyan-400 mx-auto mb-5 opacity-50" />
                                        <p className="text-xs sm:text-[13px] text-gray-400 leading-relaxed max-w-[240px] mx-auto">Where careers are crafted with creativity and technology</p>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-2 sm:-top-5 sm:-right-5 px-4 py-3 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-[#1a1a1a] font-black text-xs sm:text-sm flex items-center gap-2 shadow-[0_12px_30px_rgba(245,158,11,.5)] z-10">
                                    <LucideIcon name="Award" size={16} color="#1a1a1a" strokeWidth={3} />Since 2020
                                </div>
                                <div className="absolute -bottom-2 -left-2 sm:bottom-7 sm:-left-7 px-4 sm:px-5 py-3 sm:py-4 rounded-2xl bg-gradient-to-br from-[#0a2436] to-[#061826] border border-cyan-500/50 backdrop-blur-sm flex items-center gap-3 shadow-[0_12px_30px_rgba(0,0,0,.5)] z-10">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#00b4d8] to-[#22d3ee] flex items-center justify-center shadow-[0_4px_12px_rgba(0,180,216,.4)]">
                                        <LucideIcon name="Users" size={18} color="#031a2b" strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <div className="font-syne font-black text-xl sm:text-2xl leading-none bg-gradient-to-r from-[#22d3ee] to-[#00b4d8] bg-clip-text text-transparent">1500+</div>
                                        <div className="text-[9px] sm:text-[10px] text-gray-300 tracking-[1.5px] uppercase mt-0.5 font-semibold">Students</div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal direction="right">
                            <div>
                                <div className="text-[11px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Our Story</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.1] tracking-tight mb-5 text-white">
                                    Building Future-Ready{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Creative Professionals</span>
                                </h2>
                                <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4">
                                    <strong className="text-cyan-400">AV Academy</strong> is Lucknow&apos;s leading creative training institute, established with a vision to bridge the gap between traditional education and industry requirements.
                                </p>
                                <p className="text-sm sm:text-[15px] text-gray-400 leading-relaxed mb-8">
                                    We specialize in <strong className="text-amber-400">job-ready training programs</strong> across Graphic Design, Animation, VFX, Video Editing, Programming, AI, and Digital Marketing. With our unique <strong className="text-cyan-400">hands-on approach</strong> and direct integration with EditLab agency, students work on real client projects from day one.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                    {academyHighlights.map((f) => (
                                        <div key={f.title} className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-[#082c44]/50 border border-cyan-500/10 hover:border-cyan-500/35 hover:-translate-y-0.5 transition-all">
                                            <div className="w-9 h-9 rounded-xl flex-shrink-0 bg-cyan-500/10 flex items-center justify-center">
                                                <LucideIcon name={f.icon} size={17} color="#22d3ee" strokeWidth={2} />
                                            </div>
                                            <div>
                                                <div className="font-syne font-bold text-[12.5px] text-amber-400 mb-0.5">{f.title}</div>
                                                <div className="text-[11.5px] text-gray-400 leading-relaxed">{f.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <Link href="/courses" className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] font-bold text-sm hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/30 transition-all active:scale-[0.98]">
                                        <LucideIcon name="BookOpen" size={15} color="#031a2b" strokeWidth={2.5} />Explore Courses
                                    </Link>
                                    <Link href="/contact" className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-cyan-500/40 text-cyan-400 font-bold text-sm hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all active:scale-[0.98]">
                                        Get Counselling<LucideIcon name="ArrowRight" size={15} color="#22d3ee" strokeWidth={2.5} />
                                    </Link>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* OUR VISION */}
                <section className="px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-[#061826]">
                    <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[70px] items-center">
                        <Reveal direction="left">
                            <div className="relative">
                                <div className="aspect-square rounded-3xl bg-gradient-to-br from-cyan-500/18 to-[#082c44]/95 border border-cyan-500/30 flex flex-col items-center justify-center relative overflow-hidden p-8 sm:p-10 shadow-[0_25px_60px_rgba(0,180,216,.15)]">
                                    <div className="about-rotate absolute inset-[8%] rounded-full border-2 border-dashed border-cyan-500/25 pointer-events-none" />
                                    <div className="about-rotate absolute inset-[22%] rounded-full border border-amber-500/25 pointer-events-none" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
                                    <div className="about-rotate absolute inset-[36%] rounded-full border border-dashed border-cyan-500/20 pointer-events-none" style={{ animationDuration: "20s" }} />
                                    <div className="w-28 h-28 sm:w-[130px] sm:h-[130px] rounded-full bg-gradient-to-br from-[#00b4d8] to-[#22d3ee] flex items-center justify-center shadow-[0_0_70px_rgba(0,180,216,.5),inset_0_0_0_4px_rgba(255,255,255,.1)] relative z-10 mb-5">
                                        <LucideIcon name="Eye" size={54} color="#031a2b" strokeWidth={2} />
                                    </div>
                                    <div className="font-syne font-extrabold text-2xl sm:text-[1.8rem] bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent tracking-[2px] relative z-10 mb-2">OUR VISION</div>
                                    <p className="text-[10px] sm:text-xs text-gray-400 tracking-[3px] font-semibold uppercase relative z-10">Future of Creativity</p>
                                </div>
                                <div className="absolute top-4 -right-2 sm:-right-4 px-3.5 sm:px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-[#1a1a1a] font-black text-[10px] sm:text-[11px] shadow-[0_8px_20px_rgba(245,158,11,.4)] tracking-[1.5px] uppercase z-10 flex items-center gap-1.5">
                                    <LucideIcon name="Sparkles" size={11} color="#1a1a1a" strokeWidth={3} />2030 Goal
                                </div>
                            </div>
                        </Reveal>
                        <Reveal direction="right">
                            <div>
                                <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                                    <LucideIcon name="Eye" size={12} color="#22d3ee" strokeWidth={2} />Our Vision
                                </span>
                                <h2 className="font-syne font-extrabold text-[clamp(1.7rem,3.2vw,2.8rem)] leading-[1.1] tracking-tight mb-5 text-white">
                                    Driving the Future of{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Creative Education</span>
                                </h2>
                                <p className="text-sm sm:text-[15.5px] text-gray-400 leading-relaxed mb-6">
                                    We envision AV Academy as India&apos;s most trusted destination for <strong className="text-cyan-400">industry-focused creative training</strong> — where every student transforms from a learner into a <strong className="text-amber-400">job-ready professional</strong> from day one.
                                </p>
                                <div className="flex flex-col gap-3">
                                    {visionPoints.map((p) => (
                                        <div key={p.title} className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#082c44]/60 border border-cyan-500/10 hover:border-cyan-500/40 hover:translate-x-1.5 transition-all">
                                            <div className="w-10 h-10 sm:w-[42px] sm:h-[42px] rounded-xl flex-shrink-0 bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center">
                                                <LucideIcon name={p.icon} size={18} color="#22d3ee" strokeWidth={2} />
                                            </div>
                                            <div>
                                                <div className="font-syne font-bold text-[13.5px] sm:text-[14.5px] text-white mb-0.5">{p.title}</div>
                                                <div className="text-[12px] sm:text-[13px] text-gray-400 leading-relaxed">{p.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* OUR MISSION */}
                <section className="relative px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-[#030f1a] overflow-hidden">
                    <div className="absolute top-[10%] right-[5%] w-60 h-60 rounded-full bg-amber-500/6 blur-3xl pointer-events-none" />
                    <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-[70px] items-center relative z-10">
                        <Reveal direction="left">
                            <div>
                                <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-amber-400 mb-3 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                                    <LucideIcon name="Rocket" size={12} color="#f59e0b" strokeWidth={2} />Our Mission
                                </span>
                                <h2 className="font-syne font-extrabold text-[clamp(1.7rem,3.2vw,2.8rem)] leading-[1.1] tracking-tight mb-5 text-white">
                                    Bringing Ideas to Life Through{" "}
                                    <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Creative Impact</span>
                                </h2>
                                <p className="text-sm sm:text-[15.5px] text-gray-400 leading-relaxed mb-6">
                                    Our mission is to empower the next generation of creative professionals with <strong className="text-cyan-400">practical skills, real-world experience</strong>, and <strong className="text-amber-400">AI-integrated knowledge</strong> — ensuring measurable career growth and lifelong learning.
                                </p>
                                <div className="flex flex-col gap-3">
                                    {missionPoints.map((p) => (
                                        <div key={p.title} className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#082c44]/60 border border-amber-500/15 hover:border-amber-500/40 hover:translate-x-1.5 transition-all">
                                            <div className="w-10 h-10 sm:w-[42px] sm:h-[42px] rounded-xl flex-shrink-0 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                                                <LucideIcon name={p.icon} size={18} color="#f59e0b" strokeWidth={2} />
                                            </div>
                                            <div>
                                                <div className="font-syne font-bold text-[13.5px] sm:text-[14.5px] text-white mb-0.5">{p.title}</div>
                                                <div className="text-[12px] sm:text-[13px] text-gray-400 leading-relaxed">{p.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                        <Reveal direction="right">
                            <div className="relative">
                                <div className="aspect-square rounded-3xl bg-gradient-to-br from-amber-500/18 to-[#082c44]/95 border border-amber-500/30 flex flex-col items-center justify-center relative overflow-hidden p-8 sm:p-10 shadow-[0_25px_60px_rgba(245,158,11,.12)]">
                                    <div className="about-rotate absolute inset-[8%] rounded-full border-2 border-dashed border-amber-500/25 pointer-events-none" />
                                    <div className="about-rotate absolute inset-[22%] rounded-full border border-cyan-500/25 pointer-events-none" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
                                    <div className="about-rotate absolute inset-[36%] rounded-full border border-dashed border-amber-500/20 pointer-events-none" style={{ animationDuration: "20s" }} />
                                    <div className="w-28 h-28 sm:w-[130px] sm:h-[130px] rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-[0_0_70px_rgba(245,158,11,.5),inset_0_0_0_4px_rgba(255,255,255,.15)] relative z-10 mb-5">
                                        <LucideIcon name="Rocket" size={54} color="#1a1a1a" strokeWidth={2.5} />
                                    </div>
                                    <div className="font-syne font-extrabold text-2xl sm:text-[1.8rem] bg-gradient-to-r from-[#22d3ee] to-[#00b4d8] bg-clip-text text-transparent tracking-[2px] relative z-10 mb-2">OUR MISSION</div>
                                    <p className="text-[10px] sm:text-xs text-gray-400 tracking-[3px] font-semibold uppercase relative z-10">Creative Impact</p>
                                </div>
                                <div className="absolute top-4 -left-2 sm:-left-4 px-3.5 sm:px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] font-black text-[10px] sm:text-[11px] shadow-[0_8px_20px_rgba(0,180,216,.4)] tracking-[1.5px] uppercase z-10 flex items-center gap-1.5">
                                    <LucideIcon name="Target" size={11} color="#031a2b" strokeWidth={3} />Daily Goal
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* COURSE CATEGORIES */}
                <section className="relative px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-[#061826] overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,180,216,.06)_0%,transparent_70%)] pointer-events-none" />
                    <div className="max-w-[1240px] mx-auto relative z-10">
                        <Reveal>
                            <div className="text-center mb-10 sm:mb-14">
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Our Courses</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.6rem,3vw,2.6rem)] tracking-tight mb-3.5 text-white">
                                    30+ Industry-Focused{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Course Programs</span>
                                </h2>
                                <p className="text-sm sm:text-[15px] text-gray-400 max-w-[600px] mx-auto leading-relaxed px-2">From creative arts to cutting-edge technology — discover programs designed to launch your career</p>
                            </div>
                        </Reveal>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                            {courseCategories.map((cat, i) => (
                                <Reveal key={cat.title} delay={i * 80}>
                                    <Link href="/courses" className="block h-full no-underline group">
                                        <div className="relative p-6 sm:p-7 rounded-2xl h-full bg-gradient-to-br from-[#082c44]/85 to-[#030e16]/95 border border-cyan-500/10 hover:border-cyan-500/50 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,180,216,.15)] transition-all overflow-hidden">
                                            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 to-amber-500 opacity-60" />
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl mb-4 sm:mb-5 bg-gradient-to-br from-cyan-500/15 to-cyan-400/5 border border-cyan-500/25 flex items-center justify-center">
                                                <LucideIcon name={cat.icon} size={24} color="#22d3ee" strokeWidth={1.8} />
                                            </div>
                                            <h3 className="font-syne font-bold text-base sm:text-lg text-white mb-2 tracking-tight">{cat.title}</h3>
                                            <p className="text-xs sm:text-[13px] text-amber-400 font-semibold tracking-[0.5px]">{cat.count}</p>
                                        </div>
                                    </Link>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* LEARNING JOURNEY */}
                <section className="px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-[#030f1a]">
                    <div className="max-w-[1240px] mx-auto">
                        <Reveal>
                            <div className="text-center mb-10 sm:mb-14">
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Student Journey</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.6rem,3vw,2.6rem)] tracking-tight mb-3.5 text-white">
                                    Your Path to{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Career Success</span>
                                </h2>
                                <p className="text-sm sm:text-[15px] text-gray-400 max-w-[580px] mx-auto leading-relaxed px-2">A proven 5-step methodology that has launched 1500+ successful careers</p>
                            </div>
                        </Reveal>
                        <div className="flex flex-col gap-4 sm:gap-5">
                            {learningJourney.map((j, i) => (
                                <Reveal key={j.step} delay={i * 100}>
                                    <div className="grid grid-cols-[auto_1fr] gap-4 sm:gap-7 items-center p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030e16]/90 border border-cyan-500/10 hover:border-cyan-500/50 hover:translate-x-2 sm:hover:translate-x-2.5 hover:shadow-[0_15px_40px_rgba(0,180,216,.12)] transition-all">
                                        <div className="flex items-center gap-3 sm:gap-5">
                                            <div className="font-syne font-black text-3xl sm:text-[3rem] leading-none bg-gradient-to-b from-amber-400 to-amber-500 bg-clip-text text-transparent tracking-tight min-w-[48px] sm:min-w-[70px]">{j.step}</div>
                                            <div className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-2xl bg-gradient-to-br from-[#00b4d8] to-[#22d3ee] flex items-center justify-center shadow-[0_8px_20px_rgba(0,180,216,.3)] flex-shrink-0">
                                                <LucideIcon name={j.icon} size={22} color="#031a2b" strokeWidth={2} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-syne font-bold text-base sm:text-[1.3rem] text-white mb-1 sm:mb-1.5 tracking-tight">{j.title}</h3>
                                            <p className="text-xs sm:text-[14px] text-gray-400 leading-relaxed">{j.desc}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ACADEMY ACHIEVEMENTS */}
                <section className="relative px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-[#061826] overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,180,216,.06)_0%,transparent_70%)] pointer-events-none" />
                    <div className="max-w-[1240px] mx-auto relative z-10">
                        <Reveal>
                            <div className="text-center mb-10 sm:mb-14">
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Our Achievements</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.6rem,3vw,2.6rem)] tracking-tight mb-3.5 text-white">
                                    Numbers That Speak{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">For Themselves</span>
                                </h2>
                                <p className="text-sm sm:text-[15px] text-gray-400 max-w-[560px] mx-auto leading-relaxed px-2">5 years of excellence in creative education and skill development</p>
                            </div>
                        </Reveal>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                            {academyAchievements.map((s, i) => (
                                <Reveal key={s.label} delay={i * 100}>
                                    <div className="relative p-6 sm:p-9 rounded-2xl text-center bg-gradient-to-br from-[#082c44]/80 to-[#030e16]/90 border border-cyan-500/10 hover:border-cyan-500/50 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,180,216,.15)] transition-all overflow-hidden">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-5 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-cyan-400/5 border border-cyan-500/25 flex items-center justify-center">
                                            <LucideIcon name={s.icon} size={22} color="#22d3ee" strokeWidth={1.8} />
                                        </div>
                                        <div className="font-syne font-extrabold text-3xl sm:text-[2.6rem] leading-none tracking-tight mb-2 bg-gradient-to-b from-amber-400 to-amber-500 bg-clip-text text-transparent">{s.num}</div>
                                        <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-[1px] font-semibold">{s.label}</div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE */}
                <section className="relative px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-[#030f1a] overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,180,216,.08)_0%,transparent_60%)] pointer-events-none" />
                    <div className="max-w-[1240px] mx-auto relative z-10">
                        <Reveal>
                            <div className="text-center mb-10 sm:mb-14">
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Why AV Academy</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.6rem,3vw,2.6rem)] tracking-tight mb-3.5 text-white">
                                    Why Students Choose{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">AV Academy</span>
                                </h2>
                                <p className="text-sm sm:text-[15px] text-gray-400 max-w-[620px] mx-auto leading-relaxed px-2">Eight reasons why we&apos;re Lucknow&apos;s most trusted creative training institute</p>
                            </div>
                        </Reveal>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                            {whyChooseAcademy.map((item, i) => (
                                <Reveal key={item.title} delay={i * 60}>
                                    <div className="relative flex gap-4 sm:gap-5 items-start p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030e16]/95 border border-cyan-500/10 hover:border-cyan-500/50 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,180,216,.12)] transition-all overflow-hidden h-full">
                                        <div className="w-12 h-12 sm:w-[54px] sm:h-[54px] rounded-2xl flex-shrink-0 bg-gradient-to-br from-cyan-500/15 to-cyan-400/5 border border-cyan-500/25 flex items-center justify-center">
                                            <LucideIcon name={item.icon} size={22} color="#22d3ee" strokeWidth={1.8} />
                                        </div>
                                        <div>
                                            <h3 className="font-syne font-bold text-sm sm:text-[1.1rem] text-amber-400 mb-1.5 sm:mb-2 tracking-tight">{item.title}</h3>
                                            <p className="text-[12px] sm:text-[13.5px] text-gray-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* STUDENT SUCCESS */}
                <section className="px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-[#061826]">
                    <div className="max-w-[1240px] mx-auto">
                        <Reveal>
                            <div className="text-center mb-10 sm:mb-14">
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Success Stories</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.6rem,3vw,2.6rem)] tracking-tight mb-3.5 text-white">
                                    Our Students Are{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Industry Leaders</span>
                                </h2>
                                <p className="text-sm sm:text-[15px] text-gray-400 max-w-[600px] mx-auto leading-relaxed px-2">Meet a few of our graduates who are now shaping the creative industry</p>
                            </div>
                        </Reveal>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                            {studentSuccess.map((s, i) => (
                                <Reveal key={s.name} delay={i * 80}>
                                    <div className="p-5 sm:p-8 rounded-2xl text-center bg-gradient-to-br from-[#082c44]/85 to-[#030e16]/95 border border-cyan-500/10 hover:border-cyan-500/50 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,180,216,.15)] transition-all">
                                        <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-[#00b4d8] to-[#22d3ee] flex items-center justify-center shadow-[0_10px_25px_rgba(0,180,216,.3)] text-[#031a2b] font-syne font-black text-base sm:text-2xl tracking-tight">{s.img}</div>
                                        <h3 className="font-syne font-bold text-xs sm:text-[1.05rem] text-white mb-1.5 sm:mb-2">{s.name}</h3>
                                        <div className="text-[9px] sm:text-[11px] text-amber-400 font-semibold tracking-[1px] uppercase mb-2 sm:mb-2.5">{s.course}</div>
                                        <div className="pt-3 sm:pt-3.5 border-t border-cyan-500/15 text-[10px] sm:text-[12.5px] text-gray-400 leading-relaxed">{s.role}</div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* MEET AV EDITLAB */}
                <section className="relative px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#030f1a] to-[#0a2436] overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-amber-500/8 blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-cyan-500/8 blur-3xl pointer-events-none" />
                    <div className="max-w-[1240px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-[70px] items-center">
                        <Reveal direction="left">
                            <div>
                                <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-amber-400 mb-3 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                                    <LucideIcon name="Sparkles" size={12} color="#f59e0b" strokeWidth={2} />Our Creative Agency
                                </span>
                                <h2 className="font-syne font-extrabold text-[clamp(1.7rem,3vw,2.6rem)] leading-[1.1] tracking-tight mb-5 text-white">
                                    Meet{" "}
                                    <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">AV EditLab</span>
                                    {" "}— Our In-House Agency
                                </h2>
                                <p className="text-sm sm:text-[15.5px] text-gray-400 leading-relaxed mb-4">Beyond training, we run <strong className="text-amber-400">AV EditLab</strong> — a full-service creative agency serving 100+ brands across packaging, hospitality, real estate, fashion, automotive, and more.</p>
                                <p className="text-xs sm:text-[14px] text-gray-400 leading-relaxed mb-7">This unique setup gives our students a <strong className="text-cyan-400">real-world advantage</strong> — they work on actual client projects during training, building portfolios that get them hired faster.</p>
                                <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-7 sm:mb-8">
                                    {editLabServices.map((s) => (
                                        <div key={s.title} className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-amber-500/8 border border-amber-500/25 hover:border-amber-500/50 hover:bg-amber-500/15 text-[11px] sm:text-[12.5px] text-amber-300 font-semibold transition-all">
                                            <LucideIcon name={s.icon} size={13} color="#fbbf24" strokeWidth={2} />{s.title}
                                        </div>
                                    ))}
                                </div>
                                <Link href="/services" className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-[#1a1a1a] font-extrabold text-sm hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(245,158,11,.3)] transition-all active:scale-[0.98]">
                                    Explore EditLab Services<LucideIcon name="ArrowRight" size={15} color="#1a1a1a" strokeWidth={2.5} />
                                </Link>
                            </div>
                        </Reveal>
                        <Reveal direction="right">
                            <div className="relative">
                                <div className="aspect-square rounded-3xl bg-gradient-to-br from-amber-500/15 to-[#082c44]/95 border border-amber-500/30 flex flex-col items-center justify-center relative overflow-hidden p-8 sm:p-10 shadow-[0_25px_60px_rgba(245,158,11,.12)]">
                                    <div className="about-rotate absolute inset-[10%] rounded-full border-2 border-dashed border-amber-500/25 pointer-events-none" />
                                    <div className="about-rotate absolute inset-[25%] rounded-full border border-cyan-500/20 pointer-events-none" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
                                    <div className="w-24 h-24 sm:w-[120px] sm:h-[120px] rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-[0_0_60px_rgba(245,158,11,.5)] relative z-10 mb-5">
                                        <LucideIcon name="Palette" size={48} color="#1a1a1a" strokeWidth={2} />
                                    </div>
                                    <h3 className="font-syne font-extrabold text-2xl sm:text-[1.8rem] text-white tracking-tight relative z-10 mb-2">AV EDITLAB</h3>
                                    <p className="text-[10px] sm:text-[11px] tracking-[3px] text-cyan-400 font-bold uppercase relative z-10 mb-6 sm:mb-7">Creative Agency</p>
                                    <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-[280px] relative z-10">
                                        {[["100+", "Clients"], ["1000+", "Projects"]].map(([num, label]) => (
                                            <div key={label} className="p-3 sm:p-3.5 rounded-xl text-center bg-[#082c44]/60 border border-amber-500/20">
                                                <div className="font-syne font-black text-xl sm:text-[1.4rem] leading-none bg-gradient-to-b from-amber-400 to-amber-500 bg-clip-text text-transparent">{num}</div>
                                                <div className="text-[9px] sm:text-[10px] text-gray-400 mt-1 uppercase tracking-[0.5px]">{label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* TRUSTED BY */}
                <section className="px-4 sm:px-8 md:px-10 py-10 sm:py-14 bg-[#061826] border-t border-cyan-500/10 border-b border-cyan-500/10">
                    <div className="max-w-[1240px] mx-auto">
                        <div className="text-center mb-6 sm:mb-8">
                            <span className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400">// Trusted By Brands Across India</span>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-4">
                            {trustedBrands.map((brand) => (
                                <div key={brand} className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#082c44]/60 border border-cyan-500/10 hover:border-cyan-500/40 hover:text-cyan-400 text-gray-400 text-xs sm:text-sm font-semibold tracking-[0.5px] transition-all">{brand}</div>
                            ))}
                        </div>
                    </div>
                </section>

                <CTASection title="Ready to Start Your" highlight="Creative Career?" desc="Join 1500+ students who transformed their passion into successful careers with AV Academy." />
            </main>
            <Footer />
            <WAFloat />
        </>
    );
}