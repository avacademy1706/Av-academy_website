// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Reveal } from "./ScrollReveal";
// import LucideIcon from "./LucideIcon";

// // ── ADD YOUR IMAGES HERE ──────────────────────────────────────────
// const galleryImages = [
//     {
//         src: "/gallery/cert-ai-real-estate.jpg",
//         title: "AI in Real Estate",
//         category: "Certification",
//         tag: "AI Training",
//     },
//     {
//         src: "/gallery/cert-graphic-design.jpg",
//         title: "Graphic Design",
//         category: "Certification",
//         tag: "Design",
//     },
//     {
//         src: "/gallery/cert-video-editing.jpg",
//         title: "Video Editing",
//         category: "Certification",
//         tag: "Media",
//     },
//     {
//         src: "/gallery/cert-ai-masterclass.jpg",
//         title: "AI Masterclass",
//         category: "Certification",
//         tag: "AI",
//     },
//     {
//         src: "/gallery/cert-3d-animation.jpg",
//         title: "3D Animation",
//         category: "Certification",
//         tag: "Animation",
//     },
//     {
//         src: "/gallery/cert-digital-marketing.jpg",
//         title: "Digital Marketing",
//         category: "Certification",
//         tag: "Marketing",
//     },
// ];

// const categories = ["All", ...Array.from(new Set(galleryImages.map((g) => g.tag)))];

// export default function CertificationGallery() {
//     const [activeCategory, setActiveCategory] = useState("All");
//     const [lightbox, setLightbox] = useState<null | typeof galleryImages[0]>(null);

//     const filtered =
//         activeCategory === "All"
//             ? galleryImages
//             : galleryImages.filter((g) => g.tag === activeCategory);

//     return (
//         <section className="px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-[#030f1a] relative overflow-hidden">
//             <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-cyan-500/[0.04]" />
//             <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-amber-500/[0.04]" />

//             <div className="max-w-[1280px] mx-auto relative z-10">

//                 {/* Heading */}
//                 <Reveal>
//                     <div className="text-center mb-10 sm:mb-12">
//                         <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">
//               // Achievements
//                         </div>
//                         <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
//                             Our{" "}
//                             <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
//                                 Certifications & Milestones
//                             </span>
//                         </h2>
//                         <p className="text-sm sm:text-[15px] text-gray-400 max-w-[600px] mx-auto leading-relaxed px-2">
//                             Industry-recognized certifications and achievements from AV Academy & AV EditLab
//                         </p>
//                     </div>
//                 </Reveal>

//                 {/* Filter Tabs */}
//                 <Reveal>
//                     <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
//                         {categories.map((cat) => (
//                             <button
//                                 key={cat}
//                                 onClick={() => setActiveCategory(cat)}
//                                 className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all ${activeCategory === cat
//                                         ? "bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b]"
//                                         : "bg-[#082c44]/60 border border-cyan-500/20 text-gray-400 hover:border-cyan-500/40 hover:text-cyan-400"
//                                     }`}
//                             >
//                                 {cat}
//                             </button>
//                         ))}
//                     </div>
//                 </Reveal>

//                 {/* Grid */}
//                 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
//                     {filtered.map((img, i) => (
//                         <Reveal key={img.src} delay={i * 60}>
//                             <div
//                                 className="group relative rounded-2xl overflow-hidden border border-cyan-500/10 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer bg-[#082c44]/40"
//                                 onClick={() => setLightbox(img)}
//                             >
//                                 <div className="relative aspect-[4/3] overflow-hidden">
//                                     <Image
//                                         src={img.src}
//                                         alt={img.title}
//                                         fill
//                                         className="object-cover group-hover:scale-105 transition-transform duration-500"
//                                         sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
//                                     />
//                                     {/* Overlay on hover */}
//                                     <div className="absolute inset-0 bg-[#030f1a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                                         <div className="w-10 h-10 rounded-full bg-cyan-400/20 border border-cyan-400/50 flex items-center justify-center">
//                                             <LucideIcon name="ZoomIn" size={18} color="#22d3ee" strokeWidth={2} />
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Info */}
//                                 <div className="p-3 sm:p-4">
//                                     <div className="flex items-center justify-between gap-2">
//                                         <h3 className="font-syne font-bold text-[11.5px] sm:text-sm text-white leading-tight truncate">
//                                             {img.title}
//                                         </h3>
//                                         <span className="flex-shrink-0 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-[9px] sm:text-[10px] font-bold text-amber-400 uppercase tracking-wide">
//                                             {img.tag}
//                                         </span>
//                                     </div>
//                                     <p className="text-[10px] sm:text-[11px] text-gray-500 mt-0.5">{img.category}</p>
//                                 </div>
//                             </div>
//                         </Reveal>
//                     ))}
//                 </div>

//             </div>

//             {/* Lightbox */}
//             {lightbox && (
//                 <div
//                     className="fixed inset-0 z-[9999] bg-[#030f1a]/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
//                     onClick={() => setLightbox(null)}
//                 >
//                     <div
//                         className="relative max-w-3xl w-full rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl"
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         {/* Close button */}
//                         <button
//                             onClick={() => setLightbox(null)}
//                             className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-[#030f1a]/80 border border-cyan-500/30 flex items-center justify-center hover:border-cyan-500/60 transition-all"
//                         >
//                             <LucideIcon name="X" size={16} color="#22d3ee" strokeWidth={2.5} />
//                         </button>

//                         {/* Image */}
//                         <div className="relative aspect-[4/3]">
//                             <Image
//                                 src={lightbox.src}
//                                 alt={lightbox.title}
//                                 fill
//                                 className="object-contain bg-[#082c44]/60"
//                                 sizes="100vw"
//                             />
//                         </div>

//                         {/* Caption */}
//                         <div className="p-4 sm:p-5 bg-[#082c44]/80 flex items-center justify-between">
//                             <div>
//                                 <h3 className="font-syne font-bold text-sm sm:text-base text-white">{lightbox.title}</h3>
//                                 <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5">{lightbox.category}</p>
//                             </div>
//                             <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[10px] sm:text-[11px] font-bold text-amber-400 uppercase tracking-wide">
//                                 {lightbox.tag}
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// }


// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { Reveal } from "./ScrollReveal";
// import LucideIcon from "./LucideIcon";

// const images = [
//     { src: "/gallery/Group.jpeg", alt: "Certification 1" },
//     { src: "/gallery/eldeco certi.jpeg", alt: "Certification 2" },
//     { src: "/gallery/eldeco certi2.jpeg", alt: "Certification 3" },
//     { src: "/gallery/eldeco certi3.jpeg", alt: "Certification 4" },


//     { src: "/gallery/eldico training 4.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico training 6.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico training 7.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico training 8.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico training 9.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico training 10.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico training 11.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico training 12.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico training 13.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico training 14.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico training 15.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico training 16.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico training 18.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico training 19.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico training 20.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico training 21.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico training 22.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico training 23.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico training 24.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico training 25.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico training 26.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico chanel.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico chanel 2.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico chanel 3.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico chanel 4.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico chanel 5.jpeg", alt: "Certification 4" },
//     { src: "/gallery/eldico chanel 6.jpeg", alt: "Certification 4" },
//     { src: "/gallery/invest101 certi.jpeg", alt: "Certification 5" },
//     { src: "/gallery/invest101 certi2.jpeg", alt: "Certification 6" },
//     { src: "/gallery/invest101 1.jpeg", alt: "Certification 5" },
//     { src: "/gallery/invest101 2.jpeg", alt: "Certification 5" },
//     { src: "/gallery/invest101 3.jpeg", alt: "Certification 5" },
//     { src: "/gallery/invest101 4.jpeg", alt: "Certification 5" },
//     { src: "/gallery/invest101 5.jpeg", alt: "Certification 5" },
//     { src: "/gallery/invest101 6.jpeg", alt: "Certification 5" },
// ];

// const len = images.length;

// export default function CertificationGallery() {
//     const [current, setCurrent] = useState(0);
//     const [lightbox, setLightbox] = useState(false);

//     function goPrev() { setCurrent((p) => (p - 1 + len) % len); }
//     function goNext() { setCurrent((p) => (p + 1) % len); }

//     // keyboard support
//     useEffect(() => {
//         if (!lightbox) return;
//         const handler = (e: KeyboardEvent) => {
//             if (e.key === "ArrowLeft") goPrev();
//             if (e.key === "ArrowRight") goNext();
//             if (e.key === "Escape") setLightbox(false);
//         };
//         window.addEventListener("keydown", handler);
//         return () => window.removeEventListener("keydown", handler);
//     }, [lightbox]);

//     function getPos(i: number) {
//         let diff = i - current;
//         if (diff > len / 2) diff -= len;
//         if (diff < -len / 2) diff += len;
//         return diff;
//     }

//     type CardStyle = {
//         transform: string;
//         zIndex: number;
//         opacity: number;
//         filter: string;
//         pointerEvents?: "none" | "auto";
//     };

//     function getCardStyle(pos: number): CardStyle {
//         switch (pos) {
//             case 0:
//                 return { transform: "translateX(0%) scale(1)", zIndex: 10, opacity: 1, filter: "none" };
//             case -1:
//                 return { transform: "translateX(-68%) scale(0.72)", zIndex: 6, opacity: 0.65, filter: "blur(2px) brightness(0.55)" };
//             case 1:
//                 return { transform: "translateX(68%) scale(0.72)", zIndex: 6, opacity: 0.65, filter: "blur(2px) brightness(0.55)" };
//             case -2:
//                 return { transform: "translateX(-108%) scale(0.52)", zIndex: 3, opacity: 0.3, filter: "blur(4px) brightness(0.35)" };
//             case 2:
//                 return { transform: "translateX(108%) scale(0.52)", zIndex: 3, opacity: 0.3, filter: "blur(4px) brightness(0.35)" };
//             default:
//                 return { transform: "scale(0)", zIndex: 0, opacity: 0, filter: "none", pointerEvents: "none" };
//         }
//     }

//     return (
//         <section className="px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-[#061826] relative overflow-hidden">
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none bg-cyan-500/[0.06]" />
//             <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none bg-amber-500/[0.04]" />

//             <div className="max-w-[1280px] mx-auto relative z-10">

//                 {/* Heading */}
//                 <Reveal>
//                     <div className="text-center mb-12 sm:mb-16">
//                         <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">
//               // Achievements
//                         </div>
//                         <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
//                             Our{" "}
//                             <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
//                                 Certifications & Milestones
//                             </span>
//                         </h2>
//                         <p className="text-sm sm:text-[15px] text-gray-400 max-w-[560px] mx-auto leading-relaxed">
//                             Industry-recognized certifications and achievements from AV Academy & AV EditLab
//                         </p>
//                     </div>
//                 </Reveal>

//                 {/* Carousel */}
//                 <div className="relative flex items-center justify-center" style={{ height: "clamp(260px, 45vw, 500px)" }}>

//                     {images.map((img, i) => {
//                         const pos = getPos(i);
//                         if (Math.abs(pos) > 2) return null;
//                         const style = getCardStyle(pos);

//                         return (
//                             <div
//                                 key={img.src}
//                                 className="absolute rounded-2xl overflow-hidden cursor-pointer"
//                                 style={{
//                                     width: "clamp(180px, 30vw, 340px)",
//                                     aspectRatio: "3/4",
//                                     transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
//                                     border: pos === 0 ? "2px solid rgba(0,180,216,0.55)" : "1px solid rgba(0,180,216,0.08)",
//                                     boxShadow: pos === 0 ? "0 25px 60px rgba(0,180,216,0.18), 0 0 0 1px rgba(0,180,216,0.1)" : "none",
//                                     ...style,
//                                 }}
//                                 onClick={() => {
//                                     if (pos === 0) setLightbox(true);
//                                     else if (pos < 0) goPrev();
//                                     else goNext();
//                                 }}
//                             >
//                                 <Image
//                                     src={img.src}
//                                     alt={img.alt}
//                                     fill
//                                     className="object-cover"
//                                     sizes="(max-width: 640px) 60vw, 340px"
//                                 />

//                                 {/* center card overlay */}
//                                 {pos === 0 && (
//                                     <div className="absolute inset-0 bg-gradient-to-t from-[#020c12]/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-5">
//                                         <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#020c12]/80 border border-cyan-500/40 backdrop-blur-sm">
//                                             <LucideIcon name="ZoomIn" size={13} color="#22d3ee" strokeWidth={2} />
//                                             <span className="text-[11px] text-cyan-400 font-semibold">Click to expand</span>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         );
//                     })}

//                 </div>

//                 {/* Controls */}
//                 <div className="flex items-center justify-center gap-5 mt-8">

//                     <button
//                         onClick={goPrev}
//                         className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#082c44]/80 border border-cyan-500/25 flex items-center justify-center hover:border-cyan-500/60 hover:bg-cyan-500/10 transition-all active:scale-95"
//                     >
//                         <LucideIcon name="ChevronLeft" size={20} color="#22d3ee" strokeWidth={2.5} />
//                     </button>

//                     <div className="flex gap-2 items-center">
//                         {images.map((_, i) => (
//                             <button
//                                 key={i}
//                                 onClick={() => setCurrent(i)}
//                                 className={`rounded-full transition-all duration-300 ${current === i ? "w-6 h-2.5 bg-cyan-400" : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
//                                     }`}
//                             />
//                         ))}
//                     </div>

//                     <button
//                         onClick={goNext}
//                         className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#082c44]/80 border border-cyan-500/25 flex items-center justify-center hover:border-cyan-500/60 hover:bg-cyan-500/10 transition-all active:scale-95"
//                     >
//                         <LucideIcon name="ChevronRight" size={20} color="#22d3ee" strokeWidth={2.5} />
//                     </button>

//                 </div>

//                 {/* Counter */}
//                 <p className="text-center text-[11px] sm:text-xs text-gray-500 mt-3 font-semibold tracking-wider">
//                     {current + 1} <span className="text-gray-600">/</span> {len}
//                 </p>

//             </div>

//             {/* Lightbox */}
//             {lightbox && (
//                 <div
//                     className="fixed inset-0 z-[9999] bg-[#020c12]/96 backdrop-blur-md flex items-center justify-center p-4 sm:p-10"
//                     onClick={() => setLightbox(false)}
//                 >
//                     {/* Prev */}
//                     <button
//                         onClick={(e) => { e.stopPropagation(); goPrev(); }}
//                         className="absolute left-4 sm:left-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#082c44]/80 border border-cyan-500/30 flex items-center justify-center hover:border-cyan-500/60 transition-all z-10 active:scale-95"
//                     >
//                         <LucideIcon name="ChevronLeft" size={22} color="#22d3ee" strokeWidth={2.5} />
//                     </button>

//                     {/* Image */}
//                     <div
//                         className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/10"
//                         style={{ width: "min(90vw, 480px)", aspectRatio: "3/4" }}
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         <Image
//                             src={images[current].src}
//                             alt={images[current].alt}
//                             fill
//                             className="object-contain bg-[#061826]"
//                             sizes="480px"
//                         />
//                         <button
//                             onClick={() => setLightbox(false)}
//                             className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#020c12]/80 border border-cyan-500/30 flex items-center justify-center hover:border-cyan-500/60 transition-all"
//                         >
//                             <LucideIcon name="X" size={15} color="#22d3ee" strokeWidth={2.5} />
//                         </button>
//                         <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#020c12]/80 border border-cyan-500/20 text-[11px] font-bold text-cyan-400 whitespace-nowrap">
//                             {current + 1} / {len}
//                         </div>
//                     </div>

//                     {/* Next */}
//                     <button
//                         onClick={(e) => { e.stopPropagation(); goNext(); }}
//                         className="absolute right-4 sm:right-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#082c44]/80 border border-cyan-500/30 flex items-center justify-center hover:border-cyan-500/60 transition-all z-10 active:scale-95"
//                     >
//                         <LucideIcon name="ChevronRight" size={22} color="#22d3ee" strokeWidth={2.5} />
//                     </button>
//                 </div>
//             )}
//         </section>
//     );
// }

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Reveal } from "./ScrollReveal";
import LucideIcon from "./LucideIcon";

const images = [
    { src: "/gallery/Group.jpeg", alt: "Group Photo" },
    { src: "/gallery/eldeco certi.jpeg", alt: "Eldeco Certification" },
    { src: "/gallery/eldeco certi2.jpeg", alt: "Eldeco Certification 2" },
    { src: "/gallery/eldeco certi3.jpeg", alt: "Eldeco Certification 3" },
    { src: "/gallery/eldico training 4.jpeg", alt: "Eldeco Training" },
    { src: "/gallery/eldico training 6.jpeg", alt: "Eldeco Training" },
    { src: "/gallery/eldico training 7.jpeg", alt: "Eldeco Training" },
    { src: "/gallery/eldico training 8.jpeg", alt: "Eldeco Training" },
    { src: "/gallery/eldicotraining9.jpeg", alt: "Eldeco Training" },
    { src: "/gallery/eldico training 10.jpeg", alt: "Eldeco Training" },
    { src: "/gallery/eldico training 11.jpeg", alt: "Eldeco Training" },
    { src: "/gallery/eldico training 12.jpeg", alt: "Eldeco Training" },
    { src: "/gallery/eldico training 13.jpeg", alt: "Eldeco Training" },
    { src: "/gallery/eldico training 14.jpeg", alt: "Eldeco Training" },
    { src: "/gallery/eldico training 15.jpeg", alt: "Eldeco Training" },
    { src: "/gallery/eldico training 16.jpeg", alt: "Eldeco Training" },
    { src: "/gallery/eldico training 18.jpeg", alt: "Eldeco Training" },
    { src: "/gallery/eldico training 19.jpeg", alt: "Eldeco Training" },
    { src: "/gallery/eldico training 20.jpeg", alt: "Eldeco Training" },
    { src: "/gallery/eldico training 21.jpeg", alt: "Eldeco Training" },
    { src: "/gallery/eldico training 22.jpeg", alt: "Eldeco Training" },
    { src: "/gallery/eldico training 23.jpeg", alt: "Eldeco Training" },
    { src: "/gallery/eldico training 24.jpeg", alt: "Eldeco Training" },
    { src: "/gallery/eldico training 25.jpeg", alt: "Eldeco Training" },
    { src: "/gallery/eldico training 26.jpeg", alt: "Eldeco Training" },
    { src: "/gallery/eldico chanel.jpeg", alt: "Eldeco Channel" },
    { src: "/gallery/eldico chanel 2.jpeg", alt: "Eldeco Channel" },
    { src: "/gallery/eldico chanel 3.jpeg", alt: "Eldeco Channel" },
    { src: "/gallery/eldico chanel 4.jpeg", alt: "Eldeco Channel" },
    { src: "/gallery/eldico chanel 5.jpeg", alt: "Eldeco Channel" },
    { src: "/gallery/eldico chanel 6.jpeg", alt: "Eldeco Channel" },
    { src: "/gallery/invest101 certi.jpeg", alt: "Invest101 Certification" },
    { src: "/gallery/invest101 certi2.jpeg", alt: "Invest101 Certification 2" },
    { src: "/gallery/invest101 1.jpeg", alt: "Invest101 Event" },
    { src: "/gallery/invest101 2.jpeg", alt: "Invest101 Event" },
    { src: "/gallery/invest101 3.jpeg", alt: "Invest101 Event" },
    { src: "/gallery/invest101 4.jpeg", alt: "Invest101 Event" },
    { src: "/gallery/invest101 5.jpeg", alt: "Invest101 Event" },
    { src: "/gallery/invest101 6.jpeg", alt: "Invest101 Event" },
];

const len = images.length;

export default function CertificationGallery() {
    const [current, setCurrent] = useState(0);
    const [lightbox, setLightbox] = useState(false);

    function goPrev() { setCurrent((p) => (p - 1 + len) % len); }
    function goNext() { setCurrent((p) => (p + 1) % len); }

    // keyboard support
    useEffect(() => {
        if (!lightbox) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "ArrowRight") goNext();
            if (e.key === "Escape") setLightbox(false);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [lightbox]);

    function getPos(i: number) {
        let diff = i - current;
        if (diff > len / 2) diff -= len;
        if (diff < -len / 2) diff += len;
        return diff;
    }

    type CardStyle = {
        transform: string;
        zIndex: number;
        opacity: number;
        filter: string;
        pointerEvents?: "none" | "auto";
    };

    function getCardStyle(pos: number): CardStyle {
        switch (pos) {
            case 0:
                return { transform: "translateX(0%) scale(1)", zIndex: 10, opacity: 1, filter: "none" };
            case -1:
                return { transform: "translateX(-68%) scale(0.72)", zIndex: 6, opacity: 0.65, filter: "blur(2px) brightness(0.55)" };
            case 1:
                return { transform: "translateX(68%) scale(0.72)", zIndex: 6, opacity: 0.65, filter: "blur(2px) brightness(0.55)" };
            case -2:
                return { transform: "translateX(-108%) scale(0.52)", zIndex: 3, opacity: 0.3, filter: "blur(4px) brightness(0.35)" };
            case 2:
                return { transform: "translateX(108%) scale(0.52)", zIndex: 3, opacity: 0.3, filter: "blur(4px) brightness(0.35)" };
            default:
                return { transform: "scale(0)", zIndex: 0, opacity: 0, filter: "none", pointerEvents: "none" };
        }
    }

    return (
        <section className="px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-[#061826] relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none bg-cyan-500/[0.06]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none bg-amber-500/[0.04]" />

            <div className="max-w-[1280px] mx-auto relative z-10">

                {/* Heading */}
                <Reveal>
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">
              // Achievements
                        </div>
                        <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
                            Our{" "}
                            <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
                                Certifications & Milestones
                            </span>
                        </h2>
                        <p className="text-sm sm:text-[15px] text-gray-400 max-w-[560px] mx-auto leading-relaxed">
                            Industry-recognized certifications and achievements from AV Academy & AV EditLab
                        </p>
                    </div>
                </Reveal>

                {/* Carousel */}
                <div className="relative flex items-center justify-center" style={{ height: "clamp(260px, 45vw, 500px)" }}>

                    {images.map((img, i) => {
                        const pos = getPos(i);
                        if (Math.abs(pos) > 2) return null;
                        const style = getCardStyle(pos);

                        return (
                            <div
                                key={img.src}
                                className="absolute rounded-2xl overflow-hidden cursor-pointer"
                                style={{
                                    width: "clamp(180px, 30vw, 340px)",
                                    aspectRatio: "3/4",
                                    transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
                                    border: pos === 0 ? "2px solid rgba(0,180,216,0.55)" : "1px solid rgba(0,180,216,0.08)",
                                    boxShadow: pos === 0 ? "0 25px 60px rgba(0,180,216,0.18), 0 0 0 1px rgba(0,180,216,0.1)" : "none",
                                    ...style,
                                }}
                                onClick={() => {
                                    if (pos === 0) setLightbox(true);
                                    else if (pos < 0) goPrev();
                                    else goNext();
                                }}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 60vw, 340px"
                                />

                                {/* center card overlay */}
                                {pos === 0 && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020c12]/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-5">
                                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#020c12]/80 border border-cyan-500/40 backdrop-blur-sm">
                                            <LucideIcon name="ZoomIn" size={13} color="#22d3ee" strokeWidth={2} />
                                            <span className="text-[11px] text-cyan-400 font-semibold">Click to expand</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}

                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-5 mt-8">

                    <button
                        onClick={goPrev}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#082c44]/80 border border-cyan-500/25 flex items-center justify-center hover:border-cyan-500/60 hover:bg-cyan-500/10 transition-all active:scale-95"
                    >
                        <LucideIcon name="ChevronLeft" size={20} color="#22d3ee" strokeWidth={2.5} />
                    </button>

                    <button
                        onClick={goNext}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#082c44]/80 border border-cyan-500/25 flex items-center justify-center hover:border-cyan-500/60 hover:bg-cyan-500/10 transition-all active:scale-95"
                    >
                        <LucideIcon name="ChevronRight" size={20} color="#22d3ee" strokeWidth={2.5} />
                    </button>

                </div>

                {/* Counter */}
                <p className="text-center text-[11px] sm:text-xs text-gray-500 mt-3 font-semibold tracking-wider">
                    {current + 1} <span className="text-gray-600">/</span> {len}
                </p>

            </div>

            {/* Lightbox */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-[9999] bg-[#020c12]/96 backdrop-blur-md flex items-center justify-center p-4 sm:p-10"
                    onClick={() => setLightbox(false)}
                >
                    {/* Prev */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goPrev(); }}
                        className="absolute left-4 sm:left-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#082c44]/80 border border-cyan-500/30 flex items-center justify-center hover:border-cyan-500/60 transition-all z-10 active:scale-95"
                    >
                        <LucideIcon name="ChevronLeft" size={22} color="#22d3ee" strokeWidth={2.5} />
                    </button>

                    {/* Image */}
                    <div
                        className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/10"
                        style={{ width: "min(90vw, 480px)", aspectRatio: "3/4" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={images[current].src}
                            alt={images[current].alt}
                            fill
                            className="object-contain bg-[#061826]"
                            sizes="480px"
                        />
                        <button
                            onClick={() => setLightbox(false)}
                            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#020c12]/80 border border-cyan-500/30 flex items-center justify-center hover:border-cyan-500/60 transition-all"
                        >
                            <LucideIcon name="X" size={15} color="#22d3ee" strokeWidth={2.5} />
                        </button>
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#020c12]/80 border border-cyan-500/20 text-[11px] font-bold text-cyan-400 whitespace-nowrap">
                            {current + 1} / {len}
                        </div>
                    </div>

                    {/* Next */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goNext(); }}
                        className="absolute right-4 sm:right-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#082c44]/80 border border-cyan-500/30 flex items-center justify-center hover:border-cyan-500/60 transition-all z-10 active:scale-95"
                    >
                        <LucideIcon name="ChevronRight" size={22} color="#22d3ee" strokeWidth={2.5} />
                    </button>
                </div>
            )}
        </section>
    );
}