// "use client";
// import Link from "next/link";
// import { industryList } from "@/lib/industryData";
// import { SITE_CONTENT } from "@/lib/siteContent";
// import { Reveal } from "./ScrollReveal";
// import LucideIcon from "./LucideIcon";

// const C = SITE_CONTENT;

// export function SectionHeader({ label, title, desc, center = true }: { label: string; title: React.ReactNode; desc?: string; center?: boolean }) {
//   return (
//     <div className={`${center ? "text-center" : ""} mb-16`}>
//       <div className={`sec-label ${center ? "justify-center" : ""}`}>{label}</div>
//       <h2 className="font-syne font-black text-[clamp(1.8rem,3vw,2.6rem)] leading-tight tracking-[-0.5px] mb-3">{title}</h2>
//       {desc && <p className={`text-[14.5px] text-gray1 leading-[1.85] max-w-[620px] ${center ? "mx-auto mt-2.5" : "mt-2.5"}`}>{desc}</p>}
//     </div>
//   );
// }

// /* ── INDUSTRIES GRID ── */
// export function IndustriesGrid() {
//   return (
//     <section className="px-10 py-24 bg-bg2">
//       <div className="max-w-[1300px] mx-auto">
//         <SectionHeader label="Industries" title={<>Built for <span className="grad-cyan">Every Industry</span></>} desc="Deep creative expertise across 8 sectors — we speak your industry's visual language." />
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//           {industryList.map((ind) => (
//             <Link key={ind.slug} href={`/services/${ind.slug}`}
//               className="block relative text-center p-7 rounded-[18px] bg-card/80 border border-cyan1/20 transition-all duration-[400ms] hover:-translate-y-1.5 hover:border-cyan1/50 hover:shadow-cyan-md overflow-hidden group">
//               <div className="absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "linear-gradient(135deg,rgba(0,180,216,.1),rgba(14,165,233,.06))" }} />
//               <div className="mb-3 flex justify-center text-cyan2 transition-transform group-hover:scale-110">
//                 <LucideIcon name={ind.iconName} size={36} color="#22d3ee" strokeWidth={1.5} />
//               </div>
//               <h4 className="font-syne font-bold text-[13.5px] mb-1.5">{ind.name}</h4>
//               <p className="text-[11.5px] text-gray1 leading-relaxed">{ind.desc}</p>
//               <span className="block text-[11px] font-bold text-cyan2 mt-2.5 opacity-0 group-hover:opacity-100 transition-opacity">Explore →</span>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ── DUAL BRAND ── */
// export function DualBrand() {
//   return (
//     <div className="bg-bg">
//       <div className="grid grid-cols-1 lg:grid-cols-2">
//         {/* EditLab */}
//         <div className="px-16 py-20 relative overflow-hidden flex flex-col justify-center border-r border-cyan1/20" style={{ background: "linear-gradient(135deg,#020c12 0%,#061828 100%)" }}>
//           <span className="absolute font-syne font-black text-[160px] text-white/[.025] -right-5 -bottom-5 leading-none pointer-events-none tracking-[-8px]">EL</span>
//           <span className="inline-block text-[10.5px] font-bold tracking-[2px] px-3.5 py-1.5 rounded-full mb-4 uppercase bg-cyan1/10 text-cyan2 border border-cyan1/30">B2B Creative Agency</span>
//           <h2 className="font-syne font-black text-[clamp(2rem,3vw,3rem)] leading-tight tracking-[-1px] mb-2.5 grad-el">AV EDITLAB</h2>
//           <p className="italic text-[13px] text-gray1 mb-4">&ldquo;{C.company.tagline}&rdquo;</p>
//           <p className="text-[14.5px] text-gray2 leading-[1.8] mb-6 max-w-[440px]">Full-service B2B creative agency helping businesses across 8+ industries with premium Graphic Design, Video Production, and 3D Visualization.</p>
//           <ul className="mb-8 space-y-2 list-none">
//             {C.editlab.services.map(s => (
//               <li key={s.title} className="flex items-center gap-2.5 text-[13.5px] text-gray2 pb-2 border-b border-white/[.04]">
//                 <span className="text-cyan2 font-bold">→</span> {s.title}
//               </li>
//             ))}
//           </ul>
//           <Link href="/services" className="shimmer-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-syne font-bold text-sm text-white bg-grad-cyan-btn self-start">
//             <LucideIcon name="ArrowRight" size={16} /> Explore Services
//           </Link>
//         </div>

//         {/* Academy */}
//         <div className="px-16 py-20 relative overflow-hidden flex flex-col justify-center" style={{ background: "linear-gradient(135deg,#030a10 0%,#060e18 100%)" }}>
//           <span className="absolute font-syne font-black text-[160px] text-white/[.025] -right-5 -bottom-5 leading-none pointer-events-none tracking-[-8px]">AC</span>
//           <span className="inline-block text-[10.5px] font-bold tracking-[2px] px-3.5 py-1.5 rounded-full mb-4 uppercase bg-amber1/10 text-amber2 border border-amber1/30">Training Institute</span>
//           <h2 className="font-syne font-black text-[clamp(2rem,3vw,3rem)] leading-tight tracking-[-1px] mb-2.5 grad-ac">AV ACADEMY</h2>
//           <p className="italic text-[13px] text-amber2/70 mb-4">&ldquo;{C.company.academyTagline}&rdquo;</p>
//           <p className="text-[14.5px] text-gray2 leading-[1.8] mb-6 max-w-[440px]">Lucknow&apos;s leading creative training hub — hands-on courses in Design, Video, Animation, AI, and Digital Marketing with placement support.</p>
//           <ul className="mb-8 space-y-2 list-none">
//             {["AI & Machine Learning Masterclass","Graphic Design & Video Editing","3D Animation & VFX","Digital Marketing","Freelancing & Career Guidance"].map(f => (
//               <li key={f} className="flex items-center gap-2.5 text-[13.5px] text-gray2 pb-2 border-b border-white/[.04]">
//                 <span className="text-amber2 font-bold">→</span> {f}
//               </li>
//             ))}
//           </ul>
//           <Link href="/ai-masterclass" className="shimmer-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-syne font-bold text-sm text-bg bg-grad-amber-btn self-start">
//             <LucideIcon name="Zap" size={16} color="#020c12" /> Explore Courses
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ── WHY US ── */
// export function WhyUs() {
//   return (
//     <section className="px-10 py-24 bg-bg3">
//       <div className="max-w-[1300px] mx-auto">
//         <SectionHeader label="Why Choose Us" title={<>Five Reasons to <span className="grad-cyan">Choose AV EditLab</span></>} />
//         <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
//           {C.whyUs.map((w) => (
//             <div key={w.title} className="bg-card/70 border border-cyan1/20 rounded-[20px] p-7 text-center transition-all duration-[400ms] hover:-translate-y-1.5 hover:scale-[1.02] hover:border-cyan1/50 hover:shadow-cyan-md hover:bg-card/95 cursor-default group">
//               <div className="w-[58px] h-[58px] rounded-[14px] mx-auto mb-4 flex items-center justify-center bg-cyan1/10 border border-cyan1/20 text-cyan2 transition-all group-hover:bg-cyan1/20 group-hover:border-cyan2">
//                 <LucideIcon name={w.iconName!} size={26} color="#22d3ee" strokeWidth={1.5} />
//               </div>
//               <h4 className="font-syne font-bold text-[13px] mb-2">{w.title}</h4>
//               <p className="text-xs text-gray1 leading-[1.6]">{w.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ── CTA ── */
// export function CTASection({ title, highlight, desc }: { title: string; highlight: string; desc: string }) {
//   return (
//     <section className="px-10 py-28 text-center relative overflow-hidden" style={{ background: "linear-gradient(160deg,#071520,#020c12)" }}>
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse,rgba(0,180,216,.1) 0%,transparent 70%)" }} />
//       <Reveal className="relative z-10">
//         <div className="sec-label justify-center">Let&apos;s Work Together</div>
//         <h2 className="font-syne font-black text-[clamp(1.9rem,3.5vw,3.2rem)] tracking-[-1px] mb-4 leading-tight">
//           {title} <span className="grad-cyan">{highlight}</span>
//         </h2>
//         <p className="text-gray2 text-[15px] max-w-[580px] mx-auto leading-[1.85] mb-10">{desc}</p>
//         <div className="flex gap-3.5 justify-center flex-wrap">
//           <a href={`https://wa.me/${C.company.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer"
//             className="shimmer-btn inline-flex items-center gap-2 px-8 py-4 rounded-xl font-syne font-bold text-sm text-white bg-grad-cyan-btn hover:scale-[1.02] transition-all">
//             <LucideIcon name="MessageCircle" size={16} /> WhatsApp Now
//           </a>
//           <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-syne font-bold text-sm text-cyan2 bg-cyan1/10 border border-cyan1/40 hover:bg-cyan1/20 hover:scale-[1.02] transition-all">
//             <LucideIcon name="Send" size={16} /> Get Free Quote
//           </Link>
//         </div>
//       </Reveal>
//     </section>
//   );
// }


// "use client";
// import Link from "next/link";
// import { industryList } from "@/lib/industryData";
// import { SITE_CONTENT } from "@/lib/siteContent";
// import { Reveal } from "./ScrollReveal";
// import LucideIcon from "./LucideIcon";

// const C = SITE_CONTENT;

// export function SectionHeader({
//   label,
//   title,
//   desc,
//   center = true,
// }: {
//   label: string;
//   title: React.ReactNode;
//   desc?: string;
//   center?: boolean;
// }) {
//   return (
//     <div className={`${center ? "text-center" : ""} mb-10 sm:mb-14 md:mb-16`}>
//       <div className={`sec-label ${center ? "justify-center" : ""}`}>{label}</div>
//       <h2 className="font-syne font-black text-[clamp(1.6rem,3vw,2.6rem)] leading-tight tracking-[-0.5px] mb-3">
//         {title}
//       </h2>
//       {desc && (
//         <p className={`text-[13.5px] sm:text-[14.5px] text-gray1 leading-[1.85] max-w-[620px] px-2 sm:px-0 ${center ? "mx-auto mt-2.5" : "mt-2.5"}`}>
//           {desc}
//         </p>
//       )}
//     </div>
//   );
// }

// /* ── INDUSTRIES GRID ── */
// export function IndustriesGrid() {
//   return (
//     <section className="px-4 sm:px-8 md:px-10 py-14 sm:py-20 md:py-24 bg-bg2">
//       <div className="max-w-[1300px] mx-auto">
//         <SectionHeader
//           label="Industries"
//           title={<>Built for <span className="grad-cyan">Every Industry</span></>}
//           desc="Deep creative expertise across 8 sectors — we speak your industry's visual language."
//         />
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
//           {industryList.map((ind) => (
//             <Link
//               key={ind.slug}
//               href={`/services/${ind.slug}`}
//               className="block relative text-center p-4 sm:p-6 md:p-7 rounded-[18px] bg-card/80 border border-cyan1/20 transition-all duration-[400ms] hover:-translate-y-1.5 hover:border-cyan1/50 hover:shadow-cyan-md overflow-hidden group active:scale-[0.99]"
//             >
//               <div
//                 className="absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity"
//                 style={{ background: "linear-gradient(135deg,rgba(0,180,216,.1),rgba(14,165,233,.06))" }}
//               />
//               <div className="mb-2.5 sm:mb-3 flex justify-center text-cyan2 transition-transform group-hover:scale-110">
//                 <LucideIcon name={ind.iconName} size={28} color="#22d3ee" strokeWidth={1.5} />
//               </div>
//               <h4 className="font-syne font-bold text-[12px] sm:text-[13.5px] mb-1 sm:mb-1.5">{ind.name}</h4>
//               <p className="text-[10.5px] sm:text-[11.5px] text-gray1 leading-relaxed hidden sm:block">{ind.desc}</p>
//               <span className="block text-[10px] sm:text-[11px] font-bold text-cyan2 mt-2 sm:mt-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
//                 Explore →
//               </span>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ── DUAL BRAND ── */
// export function DualBrand() {
//   return (
//     <div className="bg-bg">
//       <div className="grid grid-cols-1 lg:grid-cols-2">

//         {/* ── LEFT — AV ACADEMY (amber theme) ── */}
//         <div
//           className="px-6 sm:px-10 md:px-16 py-14 sm:py-16 md:py-20 relative overflow-hidden flex flex-col justify-center lg:border-r border-b lg:border-b-0 border-amber-500/20"
//           style={{ background: "linear-gradient(135deg,#030a10 0%,#060e18 100%)" }}
//         >
//           <span className="absolute font-syne font-black text-[100px] sm:text-[130px] md:text-[160px] text-white/[.025] -right-3 -bottom-3 leading-none pointer-events-none tracking-[-8px]">
//             AC
//           </span>

//           <span className="inline-block text-[10px] sm:text-[10.5px] font-bold tracking-[2px] px-3 sm:px-3.5 py-1.5 rounded-full mb-4 uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30 self-start">
//             Training Institute
//           </span>

//           <h2 className="font-syne font-black text-[clamp(1.8rem,3vw,3rem)] leading-tight tracking-[-1px] mb-2.5 grad-ac">
//             AV ACADEMY
//           </h2>

//           <p className="italic text-[12px] sm:text-[13px] text-amber-400/70 mb-4">
//             &ldquo;{C.company.academyTagline}&rdquo;
//           </p>

//           <p className="text-[13.5px] sm:text-[14.5px] text-gray2 leading-[1.8] mb-5 sm:mb-6 max-w-[440px]">
//             Lucknow&apos;s leading creative training hub — hands-on courses in Design, Video, Animation, AI, and Digital Marketing with placement support.
//           </p>

//           <ul className="mb-6 sm:mb-8 space-y-2 list-none">
//             {[
//               "AI & Machine Learning Masterclass",
//               "Graphic Design & Video Editing",
//               "3D Animation & VFX",
//               "Digital Marketing",
//               "Freelancing & Career Guidance",
//             ].map((f) => (
//               <li key={f} className="flex items-center gap-2.5 text-[13px] sm:text-[13.5px] text-gray2 pb-2 border-b border-white/[.04]">
//                 <span className="text-amber-400 font-bold flex-shrink-0">→</span> {f}
//               </li>
//             ))}
//           </ul>

//           <Link
//             href="/courses"
//             className="shimmer-btn inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-syne font-bold text-sm text-bg bg-grad-amber-btn self-start active:scale-[0.98] transition-transform"
//           >
//             <LucideIcon name="Zap" size={16} color="#020c12" /> Explore Courses
//           </Link>
//         </div>

//         {/* ── RIGHT — AV EDITLAB (cyan theme) ── */}
//         <div
//           className="px-6 sm:px-10 md:px-16 py-14 sm:py-16 md:py-20 relative overflow-hidden flex flex-col justify-center"
//           style={{ background: "linear-gradient(135deg,#020c12 0%,#061828 100%)" }}
//         >
//           <span className="absolute font-syne font-black text-[100px] sm:text-[130px] md:text-[160px] text-white/[.025] -right-3 -bottom-3 leading-none pointer-events-none tracking-[-8px]">
//             EL
//           </span>

//           <span className="inline-block text-[10px] sm:text-[10.5px] font-bold tracking-[2px] px-3 sm:px-3.5 py-1.5 rounded-full mb-4 uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 self-start">
//             B2B Creative Agency
//           </span>

//           <h2 className="font-syne font-black text-[clamp(1.8rem,3vw,3rem)] leading-tight tracking-[-1px] mb-2.5 grad-el">
//             AV EDITLAB
//           </h2>

//           <p className="italic text-[12px] sm:text-[13px] text-gray1 mb-4">
//             &ldquo;{C.company.tagline}&rdquo;
//           </p>

//           <p className="text-[13.5px] sm:text-[14.5px] text-gray2 leading-[1.8] mb-5 sm:mb-6 max-w-[440px]">
//             Full-service B2B creative agency helping businesses across 8+ industries with premium Graphic Design, Video Production, and 3D Visualization.
//           </p>

//           <ul className="mb-6 sm:mb-8 space-y-2 list-none">
//             {C.editlab.services.map((s) => (
//               <li key={s.title} className="flex items-center gap-2.5 text-[13px] sm:text-[13.5px] text-gray2 pb-2 border-b border-white/[.04]">
//                 <span className="text-cyan-400 font-bold flex-shrink-0">→</span> {s.title}
//               </li>
//             ))}
//           </ul>

//           <Link
//             href="/services"
//             className="shimmer-btn inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-syne font-bold text-sm text-white bg-grad-cyan-btn self-start active:scale-[0.98] transition-transform"
//           >
//             <LucideIcon name="ArrowRight" size={16} /> Explore Services
//           </Link>
//         </div>

//       </div>
//     </div>
//   );
// }

// /* ── WHY US ── */
// export function WhyUs() {
//   return (
//     <section className="px-4 sm:px-8 md:px-10 py-14 sm:py-20 md:py-24 bg-bg3">
//       <div className="max-w-[1300px] mx-auto">
//         <SectionHeader
//           label="Why Choose Us"
//           title={<>Five Reasons to <span className="grad-cyan">Choose AV EditLab</span></>}
//         />
//         <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
//           {C.whyUs.map((w) => (
//             <div
//               key={w.title}
//               className="bg-card/70 border border-cyan1/20 rounded-[20px] p-5 sm:p-7 text-center transition-all duration-[400ms] hover:-translate-y-1.5 hover:scale-[1.02] hover:border-cyan1/50 hover:shadow-cyan-md hover:bg-card/95 cursor-default group"
//             >
//               <div className="w-12 h-12 sm:w-[58px] sm:h-[58px] rounded-[14px] mx-auto mb-3 sm:mb-4 flex items-center justify-center bg-cyan1/10 border border-cyan1/20 text-cyan2 transition-all group-hover:bg-cyan1/20 group-hover:border-cyan2">
//                 <LucideIcon name={w.iconName!} size={22} color="#22d3ee" strokeWidth={1.5} />
//               </div>
//               <h4 className="font-syne font-bold text-[12px] sm:text-[13px] mb-1.5 sm:mb-2">{w.title}</h4>
//               <p className="text-[10.5px] sm:text-xs text-gray1 leading-[1.6]">{w.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ── CTA ── */
// export function CTASection({
//   title,
//   highlight,
//   desc,
// }: {
//   title: string;
//   highlight: string;
//   desc: string;
// }) {
//   return (
//     <section
//       className="px-4 sm:px-8 md:px-10 py-16 sm:py-22 md:py-28 text-center relative overflow-hidden"
//       style={{ background: "linear-gradient(160deg,#071520,#020c12)" }}
//     >
//       <div
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[700px] h-[260px] sm:h-[340px] md:h-[400px] rounded-full pointer-events-none"
//         style={{ background: "radial-gradient(ellipse,rgba(0,180,216,.1) 0%,transparent 70%)" }}
//       />
//       <Reveal className="relative z-10">
//         <div className="sec-label justify-center">Let&apos;s Work Together</div>
//         <h2 className="font-syne font-black text-[clamp(1.7rem,3.5vw,3.2rem)] tracking-[-1px] mb-4 leading-tight px-2">
//           {title} <span className="grad-cyan">{highlight}</span>
//         </h2>
//         <p className="text-gray2 text-[13.5px] sm:text-[15px] max-w-[560px] mx-auto leading-[1.85] mb-8 sm:mb-10 px-2">
//           {desc}
//         </p>
//         <div className="flex gap-3 sm:gap-3.5 justify-center flex-wrap">
//           <a
//             href={`https://wa.me/${C.company.whatsapp.replace(/[^0-9]/g, "")}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="shimmer-btn inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-syne font-bold text-sm text-white bg-grad-cyan-btn hover:scale-[1.02] transition-all active:scale-[0.98]"
//           >
//             <LucideIcon name="MessageCircle" size={15} /> WhatsApp Now
//           </a>
//           <Link
//             href="/contact"
//             className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-syne font-bold text-sm text-cyan2 bg-cyan1/10 border border-cyan1/40 hover:bg-cyan1/20 hover:scale-[1.02] transition-all active:scale-[0.98]"
//           >
//             <LucideIcon name="Send" size={15} /> Get Free Quote
//           </Link>
//         </div>
//       </Reveal>
//     </section>
//   );
// }


"use client";
import Link from "next/link";
import { industryList } from "@/lib/industryData";
import { SITE_CONTENT } from "@/lib/siteContent";
import { Reveal } from "./ScrollReveal";
import LucideIcon from "./LucideIcon";

const C = SITE_CONTENT;

export function SectionHeader({
  label,
  title,
  desc,
  center = true,
}: {
  label: string;
  title: React.ReactNode;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "text-center" : ""} mb-10 sm:mb-14 md:mb-16`}>
      <div className={`sec-label ${center ? "justify-center" : ""}`}>{label}</div>
      <h2 className="font-syne font-black text-[clamp(1.6rem,3vw,2.6rem)] leading-tight tracking-[-0.5px] mb-3">
        {title}
      </h2>
      {desc && (
        <p className={`text-[13.5px] sm:text-[14.5px] text-gray1 leading-[1.85] max-w-[620px] px-2 sm:px-0 ${center ? "mx-auto mt-2.5" : "mt-2.5"}`}>
          {desc}
        </p>
      )}
    </div>
  );
}

/* ── INDUSTRIES GRID ── */
export function IndustriesGrid() {
  return (
    <section className="px-4 sm:px-8 md:px-10 py-14 sm:py-20 md:py-24 bg-bg2">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader
          label="Industries"
          title={<>Built for <span className="grad-cyan">Every Industry</span></>}
          desc="Deep creative expertise across 8 sectors — we speak your industry's visual language."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {industryList.map((ind) => (
            <Link
              key={ind.slug}
              href={`/services/${ind.slug}`}
              className="block relative text-center p-4 sm:p-6 md:p-7 rounded-[18px] bg-card/80 border border-cyan1/20 transition-all duration-[400ms] hover:-translate-y-1.5 hover:border-cyan1/50 hover:shadow-cyan-md overflow-hidden group active:scale-[0.99]"
            >
              <div
                className="absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "linear-gradient(135deg,rgba(0,180,216,.1),rgba(14,165,233,.06))" }}
              />
              <div className="mb-2.5 sm:mb-3 flex justify-center text-cyan2 transition-transform group-hover:scale-110">
                <LucideIcon name={ind.iconName} size={28} color="#22d3ee" strokeWidth={1.5} />
              </div>
              <h4 className="font-syne font-bold text-[12px] sm:text-[13.5px] mb-1 sm:mb-1.5">{ind.name}</h4>
              <p className="text-[10.5px] sm:text-[11.5px] text-gray1 leading-relaxed hidden sm:block">{ind.desc}</p>
              <span className="block text-[10px] sm:text-[11px] font-bold text-cyan2 mt-2 sm:mt-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── DUAL BRAND ── */
export function DualBrand() {
  return (
    <div className="bg-bg">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* ── LEFT — AV ACADEMY (amber theme) ── */}
        <div
          className="px-6 sm:px-10 md:px-16 py-14 sm:py-16 md:py-20 relative overflow-hidden flex flex-col justify-center lg:border-r border-b lg:border-b-0 border-cyan-500/20"
          style={{ background: "linear-gradient(135deg,#020c12 0%,#061828 100%)" }}
        >
          <span className="absolute font-syne font-black text-[100px] sm:text-[130px] md:text-[160px] text-white/[.025] -right-3 -bottom-3 leading-none pointer-events-none tracking-[-8px]">
            AC
          </span>

          <span className="inline-block text-[10px] sm:text-[10.5px] font-bold tracking-[2px] px-3 sm:px-3.5 py-1.5 rounded-full mb-4 uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 self-start">
            Training Institute
          </span>

          <h2 className="font-syne font-black text-[clamp(1.8rem,3vw,3rem)] leading-tight tracking-[-1px] mb-2.5 grad-el">
            AV ACADEMY
          </h2>

          <p className="italic text-[12px] sm:text-[13px] text-cyan-400/70 mb-4">
            &ldquo;{C.company.academyTagline}&rdquo;
          </p>

          <p className="text-[13.5px] sm:text-[14.5px] text-gray2 leading-[1.8] mb-5 sm:mb-6 max-w-[440px]">
            Lucknow&apos;s leading creative training hub — hands-on courses in Design, Video, Animation, AI, and Digital Marketing with placement support.
          </p>

          <ul className="mb-6 sm:mb-8 space-y-2 list-none">
            {[
              "AI & Machine Learning Masterclass",
              "Graphic Design & Video Editing",
              "3D Animation & VFX",
              "Digital Marketing",
              "Freelancing & Career Guidance",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-[13px] sm:text-[13.5px] text-gray2 pb-2 border-b border-white/[.04]">
                <span className="text-cyan-400 font-bold flex-shrink-0">→</span> {f}
              </li>
            ))}
          </ul>

          <Link
            href="/courses"
            className="shimmer-btn inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-syne font-bold text-sm text-white bg-grad-cyan-btn self-start active:scale-[0.98] transition-transform"
          >
            <LucideIcon name="Zap" size={16} color="#031a2b" /> Explore Courses
          </Link>
        </div>

        {/* ── RIGHT — AV EDITLAB (cyan theme) ── */}
        <div
          className="px-6 sm:px-10 md:px-16 py-14 sm:py-16 md:py-20 relative overflow-hidden flex flex-col justify-center"
          style={{ background: "linear-gradient(135deg,#030a10 0%,#060e18 100%)" }}
        >
          <span className="absolute font-syne font-black text-[100px] sm:text-[130px] md:text-[160px] text-white/[.025] -right-3 -bottom-3 leading-none pointer-events-none tracking-[-8px]">
            EL
          </span>

          <span className="inline-block text-[10px] sm:text-[10.5px] font-bold tracking-[2px] px-3 sm:px-3.5 py-1.5 rounded-full mb-4 uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30 self-start">
            B2B Creative Agency
          </span>

          <h2 className="font-syne font-black text-[clamp(1.8rem,3vw,3rem)] leading-tight tracking-[-1px] mb-2.5 grad-ac">
            AV EDITLAB
          </h2>

          <p className="italic text-[12px] sm:text-[13px] text-amber-400/70 mb-4">
            &ldquo;{C.company.tagline}&rdquo;
          </p>

          <p className="text-[13.5px] sm:text-[14.5px] text-gray2 leading-[1.8] mb-5 sm:mb-6 max-w-[440px]">
            Full-service B2B creative agency helping businesses across 8+ industries with premium Graphic Design, Video Production, and 3D Visualization.
          </p>

          <ul className="mb-6 sm:mb-8 space-y-2 list-none">
            {C.editlab.services.map((s) => (
              <li key={s.title} className="flex items-center gap-2.5 text-[13px] sm:text-[13.5px] text-gray2 pb-2 border-b border-white/[.04]">
                <span className="text-amber-400 font-bold flex-shrink-0">→</span> {s.title}
              </li>
            ))}
          </ul>

          <Link
            href="/services"
            className="shimmer-btn inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-syne font-bold text-sm text-bg bg-grad-amber-btn self-start active:scale-[0.98] transition-transform"
          >
            <LucideIcon name="ArrowRight" size={16} color="#020c12" /> Explore Services
          </Link>
        </div>

      </div>
    </div>
  );
}

/* ── WHY US ── */
export function WhyUs() {
  return (
    <section className="px-4 sm:px-8 md:px-10 py-14 sm:py-20 md:py-24 bg-bg3">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader
          label="Why Choose Us"
          title={<>Five Reasons to <span className="grad-cyan">Choose AV EditLab</span></>}
        />
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {C.whyUs.map((w) => (
            <div
              key={w.title}
              className="bg-card/70 border border-cyan1/20 rounded-[20px] p-5 sm:p-7 text-center transition-all duration-[400ms] hover:-translate-y-1.5 hover:scale-[1.02] hover:border-cyan1/50 hover:shadow-cyan-md hover:bg-card/95 cursor-default group"
            >
              <div className="w-12 h-12 sm:w-[58px] sm:h-[58px] rounded-[14px] mx-auto mb-3 sm:mb-4 flex items-center justify-center bg-cyan1/10 border border-cyan1/20 text-cyan2 transition-all group-hover:bg-cyan1/20 group-hover:border-cyan2">
                <LucideIcon name={w.iconName!} size={22} color="#22d3ee" strokeWidth={1.5} />
              </div>
              <h4 className="font-syne font-bold text-[12px] sm:text-[13px] mb-1.5 sm:mb-2">{w.title}</h4>
              <p className="text-[10.5px] sm:text-xs text-gray1 leading-[1.6]">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ── */
export function CTASection({
  title,
  highlight,
  desc,
}: {
  title: string;
  highlight: string;
  desc: string;
}) {
  return (
    <section
      className="px-4 sm:px-8 md:px-10 py-16 sm:py-22 md:py-28 text-center relative overflow-hidden"
      style={{ background: "linear-gradient(160deg,#071520,#020c12)" }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[700px] h-[260px] sm:h-[340px] md:h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse,rgba(0,180,216,.1) 0%,transparent 70%)" }}
      />
      <Reveal className="relative z-10">
        <div className="sec-label justify-center">Let&apos;s Work Together</div>
        <h2 className="font-syne font-black text-[clamp(1.7rem,3.5vw,3.2rem)] tracking-[-1px] mb-4 leading-tight px-2">
          {title} <span className="grad-cyan">{highlight}</span>
        </h2>
        <p className="text-gray2 text-[13.5px] sm:text-[15px] max-w-[560px] mx-auto leading-[1.85] mb-8 sm:mb-10 px-2">
          {desc}
        </p>
        <div className="flex gap-3 sm:gap-3.5 justify-center flex-wrap">
          <a
            href={`https://wa.me/${C.company.whatsapp.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-btn inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-syne font-bold text-sm text-white bg-grad-cyan-btn hover:scale-[1.02] transition-all active:scale-[0.98]"
          >
            <LucideIcon name="MessageCircle" size={15} /> WhatsApp Now
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-syne font-bold text-sm text-cyan2 bg-cyan1/10 border border-cyan1/40 hover:bg-cyan1/20 hover:scale-[1.02] transition-all active:scale-[0.98]"
          >
            <LucideIcon name="Send" size={15} /> Get Free Quote
          </Link>
        </div>
      </Reveal>
    </section>
  );
}