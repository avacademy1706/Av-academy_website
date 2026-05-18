// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { industryList } from "@/lib/industryData";
// import LucideIcon from "./LucideIcon";

// const phrases = ["Graphic Designs", "Cinematic Videos", "3D Visualizations", "AI Creatives", "Brand Identities", "Motion Graphics"];

// function useTyped() {
//   const [text, setText] = useState("");
//   useEffect(() => {
//     let pi = 0, ci = 0, del = false;
//     const tick = () => {
//       const w = phrases[pi];
//       if (!del) { setText(w.slice(0, ci + 1)); ci++; if (ci === w.length) { del = true; setTimeout(tick, 1500); return; } }
//       else { setText(w.slice(0, ci - 1)); ci--; if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; } }
//       setTimeout(tick, del ? 55 : 85);
//     };
//     const t = setTimeout(tick, 500);
//     return () => clearTimeout(t);
//   }, []);
//   return text;
// }

// const nodePos = [
//   "top-[4px] left-1/2 -translate-x-1/2",
//   "top-[50px] right-3",
//   "top-1/2 -right-1.5 -translate-y-1/2",
//   "bottom-[50px] right-3",
//   "bottom-[4px] left-1/2 -translate-x-1/2",
//   "bottom-[50px] left-3",
//   "top-1/2 -left-1.5 -translate-y-1/2",
//   "top-[50px] left-3",
// ];

// export default function HeroSection() {
//   const typed = useTyped();
//   return (
//     <section className="min-h-screen flex items-center pt-[72px] relative overflow-hidden">
//       {/* BG */}
//       <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 50%,rgba(0,180,216,.15) 0%,transparent 55%),radial-gradient(ellipse at 80% 30%,rgba(14,165,233,.1) 0%,transparent 50%)" }} />
//       <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,180,216,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,180,216,.04) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

//       <div className="max-w-[1300px] mx-auto px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
//         {/* LEFT */}
//         <div className="fade-up">
//           <div className="inline-flex items-center gap-2 border border-cyan1/40 rounded-full px-4 py-1.5 mb-6 text-[11px] font-semibold tracking-[1.5px] text-cyan2 bg-cyan1/8">
//             <span className="blink-dot" /> Lucknow&apos;s #1 Creative Studio
//           </div>

//           <h1 className="font-syne font-black text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.08] tracking-[-1.5px] mb-2">
//             Welcome to<br />
//             <span className="grad-brand">AV EDITLAB</span>
//           </h1>

//           <p className="font-syne font-semibold text-[clamp(.95rem,1.8vw,1.25rem)] text-cyan3 mb-2 tracking-[.3px]">
//             Where Creativity Meets Business Growth
//           </p>

//           <p className="text-base text-gray2 mb-5 min-h-[24px] font-medium">
//             We craft <span className="text-amber2 font-bold">{typed}</span>
//             <span className="typed-cursor">|</span>
//           </p>

//           <p className="text-[14.5px] leading-[1.9] text-gray1 mb-9 max-w-[520px]">
//             Full-service creative studio empowering businesses across Packaging, Media, Education, Hospitality, Real Estate, Fashion, Advertising & Automobile — through premium Design, Video, 3D & AI.
//           </p>

//           <div className="flex flex-wrap gap-3.5 mb-9">
//             <Link href="/services" className="shimmer-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-syne font-bold text-sm text-white bg-grad-cyan-btn hover:scale-[1.02] hover:shadow-cyan-md transition-all">
//               <LucideIcon name="Rocket" size={16} /> Explore Services
//             </Link>
//             <Link href="/about" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-syne font-bold text-sm text-cyan2 bg-cyan1/10 border border-cyan1/40 hover:bg-cyan1/20 hover:scale-[1.02] transition-all">
//               <LucideIcon name="Play" size={16} /> View Portfolio
//             </Link>
//           </div>

//           <div className="flex flex-wrap gap-8">
//             {[["100", "Clients+"], ["1000", "Projects+"], ["5", "Yrs Exp+"], ["8", "Industries+"]].map(([n, l]) => (
//               <div key={l}>
//                 <strong className="font-syne font-black text-[1.8rem] leading-none block grad-amber">{n}+</strong>
//                 <span className="text-[11px] text-gray1 mt-1 block tracking-[.3px]">{l}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT — WHEEL */}
//         <div className="fade-right-anim flex justify-center items-center">
//           <div className="relative w-[430px] h-[430px]">
//             <div className="orbit-1" />
//             <div className="orbit-2" />
//             <div className="orbit-3" />

//             {/* Center */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[135px] h-[135px] rounded-full flex flex-col items-center justify-center z-10 border-2 border-cyan1/50 shadow-cyan-glow" style={{ background: "linear-gradient(145deg,#0c2236,#071520)" }}>
//               <span className="font-syne font-black text-2xl grad-cyan">AV</span>
//               <span className="text-[7.5px] text-cyan3 tracking-[2.5px] text-center mt-0.5">EDITLAB</span>
//             </div>

//             {/* Nodes */}
//             {industryList.map((ind, i) => (
//               <Link key={ind.slug} href={`/services/${ind.slug}`}
//                 className={`absolute w-[72px] h-[72px] flex flex-col items-center gap-1 cursor-pointer group ${nodePos[i]}`}>
//                 <div className="w-14 h-14 rounded-[14px] bg-card border border-cyan1/25 flex items-center justify-center transition-all duration-300 group-hover:border-cyan2 group-hover:bg-cyan1/15 group-hover:scale-[1.15] group-hover:-rotate-[5deg] group-hover:shadow-[0_8px_25px_rgba(0,180,216,.4)] text-cyan2 shadow-[0_4px_20px_rgba(0,0,0,.5)]">
//                   <LucideIcon name={ind.iconName} size={22} color="#22d3ee" strokeWidth={1.5} />
//                 </div>
//                 <span className="text-[8.5px] text-gray1 font-semibold text-center whitespace-nowrap">{ind.name}</span>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { industryList } from "@/lib/industryData";
import LucideIcon from "./LucideIcon";
import Image from "next/image";

const phrases = [
  "Video Editing",
  "Graphic Designing",
  "Motion Graphics",
  "3D Visualizations",
  "AI Content Creation",
  "Digital Media Skills",
];

function useTyped() {
  const [text, setText] = useState("");

  useEffect(() => {
    let pi = 0,
      ci = 0,
      del = false;

    const tick = () => {
      const w = phrases[pi];

      if (!del) {
        setText(w.slice(0, ci + 1));
        ci++;

        if (ci === w.length) {
          del = true;
          setTimeout(tick, 1500);
          return;
        }
      } else {
        setText(w.slice(0, ci - 1));
        ci--;

        if (ci === 0) {
          del = false;
          pi = (pi + 1) % phrases.length;
        }
      }

      setTimeout(tick, del ? 55 : 85);
    };

    const t = setTimeout(tick, 500);

    return () => clearTimeout(t);
  }, []);

  return text;
}

const nodePos = [
  "top-[4px] left-1/2 -translate-x-1/2",
  "top-[50px] right-3",
  "top-1/2 -right-1.5 -translate-y-1/2",
  "bottom-[50px] right-3",
  "bottom-[4px] left-1/2 -translate-x-1/2",
  "bottom-[50px] left-3",
  "top-1/2 -left-1.5 -translate-y-1/2",
  "top-[50px] left-3",
];

export default function HeroSection() {
  const typed = useTyped();

  return (
    <section className="min-h-screen flex items-center pt-[72px] relative overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%,rgba(0,180,216,.15) 0%,transparent 55%),radial-gradient(ellipse at 80% 30%,rgba(14,165,233,.1) 0%,transparent 50%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,180,216,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,180,216,.04) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-[1300px] mx-auto px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">

        {/* LEFT */}
        <div className="fade-up">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-cyan1/40 rounded-full px-4 py-1.5 mb-6 text-[11px] font-semibold tracking-[1.5px] text-cyan2 bg-cyan1/8">
            <span className="blink-dot" />
            Lucknow&apos;s Creative Learning Platform
          </div>

          {/* Heading */}
          <h1 className="font-syne font-black leading-[1.08] tracking-[-1.5px] mb-4">

            <span className="grad-brand block text-[clamp(1.8rem,3.5vw,3rem)]">
              AV ACADEMY
            </span>

            <span className="block text-cyan3 font-bold tracking-[4px] uppercase text-[clamp(.65rem,1vw,.9rem)] mt-1">
              & EditLab
            </span>

          </h1>

          {/* Tagline */}
          <p className="font-syne font-semibold text-[clamp(.95rem,1.8vw,1.25rem)] text-cyan3 mb-2 tracking-[.3px]">
            Learn Creative Skills That Build Real Careers
          </p>

          {/* Typing */}
          <p className="text-base text-gray2 mb-5 min-h-[24px] font-medium">
            Master{" "}
            <span className="text-amber2 font-bold">
              {typed}
            </span>
            <span className="typed-cursor">|</span>
          </p>

          {/* Description */}
          <p className="text-[14.5px] leading-[1.9] text-gray1 mb-9 max-w-[520px]">
            AV Academy trains future creators in Video Editing,
            Graphic Design, Motion Graphics, 3D Visualization,
            AI Content Creation & Digital Media with real-world
            industry experience powered by AV EditLab.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3.5 mb-9">

            <Link
              href="/courses"
              className="shimmer-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-syne font-bold text-sm text-white bg-grad-cyan-btn hover:scale-[1.02] hover:shadow-cyan-md transition-all"
            >
              <LucideIcon name="GraduationCap" size={16} />
              Explore Courses
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-syne font-bold text-sm text-cyan2 bg-cyan1/10 border border-cyan1/40 hover:bg-cyan1/20 hover:scale-[1.02] transition-all"
            >
              <LucideIcon name="Play" size={16} />
              View EditLab Work
            </Link>

          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {[
              ["100", "Students+"],
              ["1000", "Projects+"],
              ["5", "Years Exp+"],
              ["8", "Creative Skills"],
            ].map(([n, l]) => (
              <div key={l}>
                <strong className="font-syne font-black text-[1.8rem] leading-none block grad-amber">
                  {n}+
                </strong>

                <span className="text-[11px] text-gray1 mt-1 block tracking-[.3px]">
                  {l}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT — WHEEL */}
        <div className="fade-right-anim flex justify-center items-center">

          <div className="relative w-[430px] h-[430px]">

            <div className="orbit-1" />
            <div className="orbit-2" />
            <div className="orbit-3" />

            {/* Center */}
            {/* <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[135px] h-[135px] rounded-full flex flex-col items-center justify-center z-10 border-2 border-cyan1/50 shadow-cyan-glow"
              style={{
                background:
                  "linear-gradient(145deg,#0c2236,#071520)",
              }}
            >
              <span className="font-syne font-black text-2xl grad-cyan">
                AV
              </span>

              <span className="text-[8px] text-cyan3 tracking-[2px] text-center mt-0.5 uppercase leading-[1.4]">
                Academy
              </span>

              <span className="text-[6px] text-gray1 tracking-[2px] uppercase mt-1">
                by EditLab
              </span>
            </div> */}

            {/* Center */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[135px] h-[135px] rounded-full flex flex-col items-center justify-center z-10 border-2 border-cyan1/50 shadow-cyan-glow overflow-hidden"
              style={{
                background:
                  "linear-gradient(145deg,#0c2236,#071520)",
              }}
            >

              {/* Logo */}
              <Image
                src="/a.v.png"
                alt="AV Academy Logo"
                width={120}
                height={120}
                priority
                className="object-contain drop-shadow-[0_0_14px_rgba(34,211,238,.45)]"
              />

              {/* Small Text */}
              {/* <span className="text-[6px] text-gray1 tracking-[2px] uppercase mt-2">
                AV Academy
              </span> */}

            </div>

            {/* Nodes */}
            {industryList.map((ind, i) => (
              <Link
                key={ind.slug}
                href={`/services/${ind.slug}`}
                className={`absolute w-[72px] h-[72px] flex flex-col items-center gap-1 cursor-pointer group ${nodePos[i]}`}
              >
                <div className="w-14 h-14 rounded-[14px] bg-card border border-cyan1/25 flex items-center justify-center transition-all duration-300 group-hover:border-cyan2 group-hover:bg-cyan1/15 group-hover:scale-[1.15] group-hover:-rotate-[5deg] group-hover:shadow-[0_8px_25px_rgba(0,180,216,.4)] text-cyan2 shadow-[0_4px_20px_rgba(0,0,0,.5)]">

                  <LucideIcon
                    name={ind.iconName}
                    size={22}
                    color="#22d3ee"
                    strokeWidth={1.5}
                  />

                </div>

                <span className="text-[8.5px] text-gray1 font-semibold text-center whitespace-nowrap">
                  {ind.name}
                </span>
              </Link>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}