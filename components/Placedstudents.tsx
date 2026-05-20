
// "use client";

// import Image from "next/image";
// import { Reveal } from "./ScrollReveal";

// const placedImages = [
//     {
//         src: "/Priyanshu.png",
//         alt: "Priyanshu Maurya - Graphic Designer at Motion Mate",
//     },
//     {
//         src: "/Parth.png",
//         alt: "Prityarth Kumar Parth - Graphic Designer at Om Solutions",
//     },
// ];

// export default function PlacedStudents() {
//     return (
//         <section className="px-6 md:px-10 py-20 bg-[#030f1a] relative overflow-hidden">

//             {/* Background Glows */}
//             <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-cyan-500/[0.05]" />
//             <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-amber-500/[0.05]" />

//             <div className="max-w-[1280px] mx-auto relative z-10">

//                 {/* Heading */}
//                 <Reveal>
//                     <div className="text-center mb-14">
//                         <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">
//                             // Success Stories
//                         </div>
//                         <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
//                             Our{" "}
//                             <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
//                                 Placed Students
//                             </span>
//                         </h2>
//                         <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
//                             From AV Academy classrooms to top creative studios —
//                             celebrating our students&apos; success
//                         </p>
//                     </div>
//                 </Reveal>

//                 {/* Images Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
//                     {placedImages.map((image, i) => (
//                         <Reveal key={image.src} delay={i * 80}>
//                             <div className="group rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/15 bg-[#082c44]/40">
//                                 <div className="relative aspect-[3/4] overflow-hidden">
//                                     <Image
//                                         src={image.src}
//                                         alt={image.alt}
//                                         fill
//                                         className="object-cover group-hover:scale-105 transition-transform duration-500"
//                                         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
//                                     />
//                                 </div>
//                             </div>
//                         </Reveal>
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// }



"use client";

import Image from "next/image";
import { Reveal } from "./ScrollReveal";
import LucideIcon from "./LucideIcon";

const placedImages = [
    {
        src: "/Priyanshu.png",
        alt: "Priyanshu Maurya - Graphic Designer at Motion Mate",
        name: "Priyanshu Maurya",
        course: "Graphic Design",
        company: "Motion Mate",
        role: "Graphic Designer",
        batch: "Batch 2025",
    },
    {
        src: "/Parth.png",
        alt: "Prityarth Kumar Parth - Graphic Designer at Om Solutions",
        name: "Prityarth Kumar Parth",
        course: "Graphic Design",
        company: "Om Solutions",
        role: "Graphic Designer",
        batch: "Batch 2025",
    },
];

const stats = [
    { num: "95%", label: "Placement Rate", icon: "TrendingUp" },
    { num: "100+", label: "Students Placed", icon: "Users" },
    { num: "50+", label: "Hiring Partners", icon: "Briefcase" },
    { num: "5+", label: "Years Record", icon: "Award" },
];

export default function PlacedStudents() {
    return (
        <section className="px-4 sm:px-8 md:px-10 py-16 sm:py-20 bg-[#030f1a] relative overflow-hidden">

            <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-cyan-500/[0.05]" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-amber-500/[0.05]" />

            <div className="max-w-[1280px] mx-auto relative z-10">

                {/* Heading */}
                <Reveal>
                    <div className="text-center mb-10 sm:mb-14">
                        <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">
                            // Success Stories
                        </div>
                        <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
                            Our{" "}
                            <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
                                Placed Students
                            </span>
                        </h2>
                        <p className="text-sm sm:text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed px-2">
                            From AV Academy classrooms to top creative studios —
                            celebrating our students&apos; success
                        </p>
                    </div>
                </Reveal>

                {/* Stats Bar */}
                <Reveal>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16 max-w-3xl mx-auto">
                        {stats.map((s) => (
                            <div key={s.label} className="text-center p-4 sm:p-5 rounded-2xl bg-[#082c44]/60 border border-cyan-500/10">
                                <div className="flex justify-center mb-2">
                                    <LucideIcon name={s.icon} size={18} color="#22d3ee" strokeWidth={2} />
                                </div>
                                <div className="font-syne font-black text-xl sm:text-2xl leading-none bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent mb-1">
                                    {s.num}
                                </div>
                                <div className="text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-wider font-semibold">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>

                {/* Images Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                    {placedImages.map((image, i) => (
                        <Reveal key={image.src} delay={i * 80}>
                            <div className="group rounded-2xl overflow-hidden border border-cyan-500/10 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/15 bg-[#082c44]/40">

                                {/* Image */}
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                                    />
                                    {/* Batch badge */}
                                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#030f1a]/80 backdrop-blur-sm border border-cyan-500/30 text-[10px] sm:text-[11px] font-bold text-cyan-400 tracking-wider">
                                        {image.batch}
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-4 sm:p-5">
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <div>
                                            <h3 className="font-syne font-bold text-sm sm:text-base text-white leading-tight">
                                                {image.name}
                                            </h3>
                                            <p className="text-[11px] sm:text-xs text-amber-400 font-semibold tracking-wide uppercase mt-0.5">
                                                {image.course}
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                            <LucideIcon name="CheckCircle" size={16} color="#22d3ee" strokeWidth={2} />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 pt-3 border-t border-cyan-500/10">
                                        <LucideIcon name="Briefcase" size={13} color="#9ca3af" strokeWidth={2} />
                                        <span className="text-[12px] sm:text-[13px] text-gray-400">
                                            <span className="text-white font-semibold">{image.role}</span>
                                            {" "}at{" "}
                                            <span className="text-cyan-400 font-semibold">{image.company}</span>
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Bottom note */}
                <Reveal>
                    <p className="text-center text-xs sm:text-sm text-gray-500 mt-8 sm:mt-10">
                        These are just a few of our{" "}
                        <span className="text-cyan-400 font-semibold">100+ placed students</span>
                        {" "}— more success stories coming every batch! 🎓
                    </p>
                </Reveal>

            </div>
        </section>
    );
}