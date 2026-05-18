// "use client";
// import { useEffect, useRef, useState } from "react";
// import LucideIcon from "./LucideIcon";

// /* ── TICKER ── */
// const tickItems = ["Graphic Design","Video Editing","3D Visualization","AI Training","Motion Graphics","Brand Building","Packaging Design","Real Estate Visuals","Fashion Campaigns","Automobile Launches"];

// export function Ticker() {
//   const doubled = [...tickItems, ...tickItems];
//   return (
//     <div className="overflow-hidden py-3" style={{ background: "linear-gradient(90deg,#00b4d8,#22d3ee,#00b4d8)" }}>
//       <div className="ticker-track">
//         {doubled.map((item, i) => (
//           <span key={i} className="font-syne font-bold text-xs text-white tracking-[.8px] flex items-center gap-2.5">
//             ✦ {item}
//             <span className="w-1 h-1 rounded-full bg-white/40 inline-block" />
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ── STAT COUNTER ── */
// function StatItem({ target, label, iconName }: { target: number; label: string; iconName: string }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef<HTMLDivElement>(null);
//   const started = useRef(false);
//   useEffect(() => {
//     const el = ref.current; if (!el) return;
//     const obs = new IntersectionObserver(([e]) => {
//       if (e.isIntersecting && !started.current) {
//         started.current = true;
//         const step = Math.ceil(target / 55);
//         const id = setInterval(() => setCount(c => { const n = Math.min(c + step, target); if (n >= target) clearInterval(id); return n; }), 25);
//       }
//     }, { threshold: 0.1 });
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [target]);

//   return (
//     <div ref={ref} className="relative text-center px-6 py-8 rounded-[18px] bg-card/60 border border-cyan1/20 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyan1/40 hover:shadow-cyan-md cursor-default group">
//       <div className="absolute top-0 left-0 right-0 h-[2px] bg-grad-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-[400ms] origin-left" />
//       <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full opacity-15 pointer-events-none" style={{ background: "radial-gradient(#22d3ee,transparent)" }} />
//       <div className="flex justify-center mb-2.5 text-cyan2">
//         <LucideIcon name={iconName} size={28} color="#22d3ee" strokeWidth={1.5} />
//       </div>
//       <div className="font-syne font-black text-[2.8rem] leading-none grad-amber">{count}<span className="text-2xl">+</span></div>
//       <div className="text-[13px] text-gray1 mt-1.5 tracking-[.3px]">{label}</div>
//     </div>
//   );
// }

// export function StatsBand() {
//   return (
//     <div className="px-10 py-16 bg-bg2 relative">
//       <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,#00b4d8,#22d3ee,transparent)" }} />
//       <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,#00b4d8,#22d3ee,transparent)" }} />
//       <div className="max-w-[1100px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
//         <StatItem target={100}  label="Happy Clients"       iconName="Users" />
//         <StatItem target={8}    label="Industries Served"   iconName="Building2" />
//         <StatItem target={5}    label="Years Experience"    iconName="Star" />
//         <StatItem target={1000} label="Projects Delivered"  iconName="Rocket" />
//       </div>
//     </div>
//   );
// }

// /* ── WHAT WE DO ── */
// const wwd = [
//   { num: "01", iconName: "Palette", title: "Graphic Design",              desc: "Premium print & digital visuals that define your brand — every pixel crafted to communicate and convert.",          tag: "Brand Identity",    iconBg: "bg-cyan1/12", tagBg: "bg-cyan1/12 text-cyan2 border-cyan1/25" },
//   { num: "02", iconName: "Video",   title: "Video Editing & Production",   desc: "Cinematic content that captures attention and drives action — from product films to social reels and TVCs.",        tag: "Cinematic Content", iconBg: "bg-blue2/10",  tagBg: "bg-blue2/10 text-blue2 border-blue2/25" },
//   { num: "03", iconName: "Globe",   title: "3D Visualization & Motion",    desc: "Immersive renders and animations that sell before the product exists — turntables, walkthroughs, virtual tours.",   tag: "3D & Motion",       iconBg: "bg-teal2/10",  tagBg: "bg-teal2/10 text-teal2 border-teal2/20" },
// ];

// export function WhatWeDo() {
//   return (
//     <section className="px-10 py-24" style={{ background: "linear-gradient(180deg,#020c12,#030e16)" }}>
//       <div className="max-w-[1300px] mx-auto">
//         <div className="text-center mb-16">
//           <div className="sec-label justify-center">What We Do</div>
//           <h2 className="font-syne font-black text-[clamp(1.8rem,3vw,2.6rem)] leading-tight tracking-[-0.5px] mb-3">
//             Three Pillars of <span className="grad-cyan">Creative Power</span>
//           </h2>
//           <p className="text-[14.5px] text-gray1 leading-[1.85] max-w-[620px] mx-auto">
//             Premium creative services that drive real business results — from first impression to final conversion.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {wwd.map((item) => (
//             <div key={item.num} className="has-card-line relative bg-card/70 border border-cyan1/20 rounded-[22px] p-10 overflow-hidden transition-all duration-[400ms] hover:-translate-y-2 hover:shadow-cyan-lg hover:border-cyan1/45 group">
//               <div className="card-line" />
//               <span className="font-syne font-black text-[3.5rem] absolute top-5 right-6 text-white/[.04] leading-none">{item.num}</span>
//               <div className={`w-[68px] h-[68px] rounded-[18px] flex items-center justify-center mb-6 text-cyan2 ${item.iconBg} border border-cyan1/30`}>
//                 <LucideIcon name={item.iconName} size={30} color="#22d3ee" strokeWidth={1.5} />
//               </div>
//               <h3 className="font-syne font-bold text-[1.15rem] mb-3">{item.title}</h3>
//               <p className="text-[14px] text-gray1 leading-[1.8]">{item.desc}</p>
//               <span className={`inline-block mt-4 text-[11px] font-semibold tracking-[1px] px-3 py-1 rounded-full uppercase border ${item.tagBg}`}>{item.tag}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useEffect, useRef, useState } from "react";
// import LucideIcon from "./LucideIcon";

// /* ─────────────────────────────────────────────
//    TICKER
// ───────────────────────────────────────────── */

// const tickItems = [
//   "Video Editing Courses",
//   "Graphic Design Training",
//   "3D Visualization",
//   "AI Content Creation",
//   "Motion Graphics",
//   "Brand Building",
//   "Packaging Design",
//   "Real Estate Visuals",
//   "Career-Focused Skills",
//   "Professional Creative Services",
// ];

// export function Ticker() {
//   const doubled = [...tickItems, ...tickItems];

//   return (
//     <div
//       className="overflow-hidden py-3"
//       style={{
//         background:
//           "linear-gradient(90deg,#00b4d8,#22d3ee,#00b4d8)",
//       }}
//     >
//       <div className="ticker-track">
//         {doubled.map((item, i) => (
//           <span
//             key={i}
//             className="font-syne font-bold text-xs text-white tracking-[.8px] flex items-center gap-2.5"
//           >
//             ✦ {item}

//             <span className="w-1 h-1 rounded-full bg-white/40 inline-block" />
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    STAT COUNTER
// ───────────────────────────────────────────── */

// function StatItem({
//   target,
//   label,
//   iconName,
// }: {
//   target: number;
//   label: string;
//   iconName: string;
// }) {
//   const [count, setCount] = useState(0);

//   const ref = useRef<HTMLDivElement>(null);

//   const started = useRef(false);

//   useEffect(() => {
//     const el = ref.current;

//     if (!el) return;

//     const obs = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting && !started.current) {
//           started.current = true;

//           const step = Math.ceil(target / 55);

//           const id = setInterval(() => {
//             setCount((c) => {
//               const n = Math.min(c + step, target);

//               if (n >= target) clearInterval(id);

//               return n;
//             });
//           }, 25);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     obs.observe(el);

//     return () => obs.disconnect();
//   }, [target]);

//   return (
//     <div
//       ref={ref}
//       className="relative text-center px-6 py-8 rounded-[18px] bg-card/60 border border-cyan1/20 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyan1/40 hover:shadow-cyan-md cursor-default group"
//     >
//       <div className="absolute top-0 left-0 right-0 h-[2px] bg-grad-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-[400ms] origin-left" />

//       <div
//         className="absolute -top-8 -right-8 w-20 h-20 rounded-full opacity-15 pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(#22d3ee,transparent)",
//         }}
//       />

//       <div className="flex justify-center mb-2.5 text-cyan2">
//         <LucideIcon
//           name={iconName}
//           size={28}
//           color="#22d3ee"
//           strokeWidth={1.5}
//         />
//       </div>

//       <div className="font-syne font-black text-[2.8rem] leading-none grad-amber">
//         {count}
//         <span className="text-2xl">+</span>
//       </div>

//       <div className="text-[13px] text-gray1 mt-1.5 tracking-[.3px]">
//         {label}
//       </div>
//     </div>
//   );
// }

// export function StatsBand() {
//   return (
//     <div className="px-10 py-16 bg-bg2 relative">
//       <div
//         className="absolute top-0 left-0 right-0 h-px"
//         style={{
//           background:
//             "linear-gradient(90deg,transparent,#00b4d8,#22d3ee,transparent)",
//         }}
//       />

//       <div
//         className="absolute bottom-0 left-0 right-0 h-px"
//         style={{
//           background:
//             "linear-gradient(90deg,transparent,#00b4d8,#22d3ee,transparent)",
//         }}
//       />

//       <div className="max-w-[1100px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">

//         <StatItem
//           target={100}
//           label="Students Trained"
//           iconName="GraduationCap"
//         />

//         <StatItem
//           target={100}
//           label="Happy Clients"
//           iconName="Users"
//         />

//         <StatItem
//           target={5}
//           label="Years Experience"
//           iconName="Star"
//         />

//         <StatItem
//           target={1000}
//           label="Projects Delivered"
//           iconName="Rocket"
//         />

//       </div>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    WHAT WE OFFER
// ───────────────────────────────────────────── */

// const wwd = [
//   {
//     num: "01",
//     iconName: "GraduationCap",

//     title: "Creative Skill Training",

//     desc:
//       "Industry-focused courses in Video Editing, Graphic Design, Motion Graphics, AI Tools & 3D — designed to build real creative careers.",

//     tag: "AV Academy",

//     iconBg: "bg-cyan1/12",

//     tagBg:
//       "bg-cyan1/12 text-cyan2 border-cyan1/25",
//   },

//   {
//     num: "02",
//     iconName: "Video",

//     title: "Video Editing & Production",

//     desc:
//       "Professional cinematic editing, reels, ads, podcasts, YouTube content & commercial production powered by AV EditLab.",

//     tag: "Creative Services",

//     iconBg: "bg-blue2/10",

//     tagBg:
//       "bg-blue2/10 text-blue2 border-blue2/25",
//   },

//   {
//     num: "03",
//     iconName: "Palette",

//     title: "Graphic Design & Branding",

//     desc:
//       "Premium brand identity, social creatives, packaging, print design & marketing visuals crafted for modern businesses.",

//     tag: "Brand Design",

//     iconBg: "bg-teal2/10",

//     tagBg:
//       "bg-teal2/10 text-teal2 border-teal2/20",
//   },
// ];

// export function WhatWeDo() {
//   return (
//     <section
//       className="px-10 py-24"
//       style={{
//         background:
//           "linear-gradient(180deg,#020c12,#030e16)",
//       }}
//     >
//       <div className="max-w-[1300px] mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-16">

//           <div className="sec-label justify-center">
//             What We Offer
//           </div>

//           <h2 className="font-syne font-black text-[clamp(1.8rem,3vw,2.6rem)] leading-tight tracking-[-0.5px] mb-3">
//             Learn, Create & Grow With
//             <span className="grad-cyan">
//               {" "}
//               AV Academy & EditLab
//             </span>
//           </h2>

//           <p className="text-[14.5px] text-gray1 leading-[1.85] max-w-[720px] mx-auto">
//             From professional creative training to real-world
//             production services — we help students, creators &
//             businesses grow through design, editing, branding,
//             motion graphics & AI-powered content.
//           </p>

//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//           {wwd.map((item) => (
//             <div
//               key={item.num}
//               className="has-card-line relative bg-card/70 border border-cyan1/20 rounded-[22px] p-10 overflow-hidden transition-all duration-[400ms] hover:-translate-y-2 hover:shadow-cyan-lg hover:border-cyan1/45 group"
//             >

//               <div className="card-line" />

//               <span className="font-syne font-black text-[3.5rem] absolute top-5 right-6 text-white/[.04] leading-none">
//                 {item.num}
//               </span>

//               <div
//                 className={`w-[68px] h-[68px] rounded-[18px] flex items-center justify-center mb-6 text-cyan2 ${item.iconBg} border border-cyan1/30`}
//               >
//                 <LucideIcon
//                   name={item.iconName}
//                   size={30}
//                   color="#22d3ee"
//                   strokeWidth={1.5}
//                 />
//               </div>

//               <h3 className="font-syne font-bold text-[1.15rem] mb-3">
//                 {item.title}
//               </h3>

//               <p className="text-[14px] text-gray1 leading-[1.8]">
//                 {item.desc}
//               </p>

//               <span
//                 className={`inline-block mt-4 text-[11px] font-semibold tracking-[1px] px-3 py-1 rounded-full uppercase border ${item.tagBg}`}
//               >
//                 {item.tag}
//               </span>

//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import LucideIcon from "./LucideIcon";

/* ─────────────────────────────────────────────
   TICKER
───────────────────────────────────────────── */

const tickItems = [
  "Video Editing Courses",
  "Graphic Design Training",
  "3D Visualization",
  "AI Content Creation",
  "Motion Graphics",
  "Brand Building",
  "Packaging Design",
  "Real Estate Visuals",
  "Career-Focused Skills",
  "Professional Creative Services",
];

export function Ticker() {
  const doubled = [...tickItems, ...tickItems];

  return (
    <div className="overflow-hidden py-2.5 sm:py-3 bg-gradient-to-r from-[#00b4d8] via-[#22d3ee] to-[#00b4d8]">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-syne font-bold text-[11px] sm:text-xs text-white tracking-[.8px] flex items-center gap-2 sm:gap-2.5 whitespace-nowrap"
          >
            ✦ {item}
            <span className="w-1 h-1 rounded-full bg-white/40 inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STAT COUNTER
───────────────────────────────────────────── */

function StatItem({
  target,
  label,
  iconName,
}: {
  target: number;
  label: string;
  iconName: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const step = Math.ceil(target / 55);
          const id = setInterval(() => {
            setCount((c) => {
              const n = Math.min(c + step, target);
              if (n >= target) clearInterval(id);
              return n;
            });
          }, 25);
        }
      },
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className="relative text-center px-4 sm:px-6 py-6 sm:py-8 rounded-[18px] bg-card/60 border border-cyan-500/20 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 cursor-default group"
    >
      {/* Top line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] scale-x-0 group-hover:scale-x-100 transition-transform duration-[400ms] origin-left" />

      {/* Glow */}
      <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full opacity-15 pointer-events-none bg-[radial-gradient(#22d3ee,transparent)]" />

      <div className="flex justify-center mb-2 sm:mb-2.5">
        <LucideIcon name={iconName} size={24} color="#22d3ee" strokeWidth={1.5} />
      </div>

      <div className="font-syne font-black text-[2.2rem] sm:text-[2.8rem] leading-none bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
        {count}<span className="text-xl sm:text-2xl">+</span>
      </div>

      <div className="text-[11.5px] sm:text-[13px] text-gray-400 mt-1 sm:mt-1.5 tracking-[.3px]">
        {label}
      </div>
    </div>
  );
}

export function StatsBand() {
  return (
    <div className="relative px-4 sm:px-8 md:px-10 py-12 sm:py-14 md:py-16 bg-[#061826]">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00b4d8] to-transparent" />
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22d3ee] to-transparent" />

      <div className="max-w-[1100px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
        <StatItem target={100} label="Students Trained" iconName="GraduationCap" />
        <StatItem target={100} label="Happy Clients" iconName="Users" />
        <StatItem target={5} label="Years Experience" iconName="Star" />
        <StatItem target={1000} label="Projects Delivered" iconName="Rocket" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   WHAT WE OFFER
───────────────────────────────────────────── */

const wwd = [
  {
    num: "01",
    iconName: "GraduationCap",
    title: "Creative Skill Training",
    desc: "Industry-focused courses in Video Editing, Graphic Design, Motion Graphics, AI Tools & 3D — designed to build real creative careers.",
    tag: "AV Academy",
    iconColor: "#22d3ee",
    iconBg: "bg-cyan-500/10 border-cyan-500/30",
    tagColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/25",
  },
  {
    num: "02",
    iconName: "Video",
    title: "Video Editing & Production",
    desc: "Professional cinematic editing, reels, ads, podcasts, YouTube content & commercial production powered by AV EditLab.",
    tag: "Creative Services",
    iconColor: "#60a5fa",
    iconBg: "bg-blue-500/10 border-blue-500/30",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/25",
  },
  {
    num: "03",
    iconName: "Palette",
    title: "Graphic Design & Branding",
    desc: "Premium brand identity, social creatives, packaging, print design & marketing visuals crafted for modern businesses.",
    tag: "Brand Design",
    iconColor: "#2dd4bf",
    iconBg: "bg-teal-500/10 border-teal-500/30",
    tagColor: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  },
];

export function WhatWeDo() {
  return (
    <section className="px-4 sm:px-8 md:px-10 py-14 sm:py-20 md:py-24 bg-gradient-to-b from-[#020c12] to-[#030e16]">
      <div className="max-w-[1300px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3 flex items-center justify-center gap-2">
            // What We Offer
          </div>
          <h2 className="font-syne font-black text-[clamp(1.6rem,3vw,2.6rem)] leading-tight tracking-tight mb-3">
            Learn, Create & Grow With
            <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent"> AV Academy & EditLab</span>
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] text-gray-400 leading-[1.85] max-w-[700px] mx-auto px-2">
            From professional creative training to real-world production services — we help students, creators & businesses grow through design, editing, branding, motion graphics & AI-powered content.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {wwd.map((item) => (
            <div
              key={item.num}
              className="relative bg-[#082c44]/70 border border-cyan-500/20 rounded-[22px] p-7 sm:p-9 md:p-10 overflow-hidden transition-all duration-[400ms] hover:-translate-y-1.5 sm:hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/45 group"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] opacity-0 group-hover:opacity-70 transition-opacity duration-[400ms]" />

              {/* Background number */}
              <span className="font-syne font-black text-[3rem] sm:text-[3.5rem] absolute top-4 right-5 text-white/[.04] leading-none pointer-events-none">
                {item.num}
              </span>

              {/* Icon */}
              <div className={`w-14 h-14 sm:w-[68px] sm:h-[68px] rounded-[18px] flex items-center justify-center mb-5 sm:mb-6 border ${item.iconBg}`}>
                <LucideIcon name={item.iconName} size={26} color={item.iconColor} strokeWidth={1.5} />
              </div>

              <h3 className="font-syne font-bold text-[1rem] sm:text-[1.15rem] mb-2.5 sm:mb-3 text-white">
                {item.title}
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-400 leading-[1.8] mb-4 sm:mb-5">
                {item.desc}
              </p>

              <span className={`inline-block text-[10px] sm:text-[11px] font-semibold tracking-[1px] px-3 py-1 rounded-full uppercase border ${item.tagColor}`}>
                {item.tag}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}