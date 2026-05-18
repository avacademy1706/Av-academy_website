// "use client";

// import Image from "next/image";
// import { Reveal } from "./ScrollReveal";

// const placedImages = [
//     {
//         src: "/students/priyanshu-maurya.jpg",
//         alt: "Priyanshu Maurya - Graphic Designer at Motion Mate",
//     },
//     {
//         src: "/students/prityarth-kumar.jpg",
//         alt: "Prityarth Kumar Parth - Graphic Designer at Om Solutions",
//     },
// ];

// export default function PlacedStudents() {
//     return (
//         <section className= "px-10 py-20 bg-[#030f1a] relative overflow-hidden" >
//         < div className = "absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-cyan-500/[0.05]" />
//             <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-amber-500/[0.05]" />

//                 <div className="max-w-[1280px] mx-auto relative z-10" >
//                     < Reveal >
//                     <div className="text-center mb-14" >
//                         <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3" >
//                             // Success Stories
//                             </div>

//                             < h2 className = "font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4" >
//                                 Our{ " " }
//     <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent" >
//         Placed Students
//             </span>

//             </h2>

//             < p className = "text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed" >
//                 From AV Academy classrooms to top creative studios — celebrating our students & apos; success
//                     </>
//                     </div>
//                     </Reveal>

//     {/* Images Grid */ }
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" >
//     {
//         placedImages.map((image, i) => (
//             <Reveal key= { image.src } delay = { i * 80} >
//             <div className="group rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/15 bg-[#082c44]/40" >
//         <div className="relative aspect-square overflow-hidden" >
//         <Image
//                     src={ image.src }
//                     alt = { image.alt }
//                     fill
//                     className = "object-cover group-hover:scale-105 transition-transform duration-500"
//                     sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//             />
//             </div>
//             </div>
//             </Reveal>
//         ))
//     }
//         </div>
//         </div>
//         </section>
//   );
// }


// "use client";

// import Image from "next/image";
// import { Reveal } from "./ScrollReveal";

// const placedImages = [
//     {
//         src: "/students/priyanshu-maurya.jpg",
//         alt: "Priyanshu Maurya - Graphic Designer at Motion Mate",
//     },
//     {
//         src: "/students/prityarth-kumar.jpg",
//         alt: "Prityarth Kumar Parth - Graphic Designer at Om Solutions",
//     },
// ];

// export default function PlacedStudents() {
//     return (
//         <section className="px-10 py-20 bg-[#030f1a] relative overflow-hidden">

//             {/* Background Glows */}
//             <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-cyan-500/[0.05]" />

//             <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-amber-500/[0.05]" />

//             <div className="max-w-[1280px] mx-auto relative z-10">

//                 {/* Heading */}
//                 <Reveal>
//                     <div className="text-center mb-14">

//                         <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">
//               // Success Stories
//                         </div>

//                         <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
//                             Our{" "}
//                             <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
//                                 Placed Students
//                             </span>
//                         </h2>

//                         <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
//                             From AV Academy classrooms to top creative studios — celebrating our students&apos; success
//                         </p>

//                     </div>
//                 </Reveal>

//                 {/* Images Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//                     {placedImages.map((image, i) => (
//                         <Reveal key={image.src} delay={i * 80}>

//                             <div className="group rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/15 bg-[#082c44]/40">

//                                 <div className="relative aspect-square overflow-hidden">
//                                     <Image
//                                         src={image.src}
//                                         alt={image.alt}
//                                         fill
//                                         className="object-cover group-hover:scale-105 transition-transform duration-500"
//                                         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
//               // Success Stories
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

//                                 <div className="relative aspect-square overflow-hidden">
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

const placedImages = [
    {
        src: "/Priyanshu.png",
        alt: "Priyanshu Maurya - Graphic Designer at Motion Mate",
    },
    {
        src: "/Parth.png",
        alt: "Prityarth Kumar Parth - Graphic Designer at Om Solutions",
    },
];

export default function PlacedStudents() {
    return (
        <section className="px-6 md:px-10 py-20 bg-[#030f1a] relative overflow-hidden">

            {/* Background Glows */}
            <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-cyan-500/[0.05]" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-amber-500/[0.05]" />

            <div className="max-w-[1280px] mx-auto relative z-10">

                {/* Heading */}
                <Reveal>
                    <div className="text-center mb-14">
                        <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">
                            // Success Stories
                        </div>
                        <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
                            Our{" "}
                            <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
                                Placed Students
                            </span>
                        </h2>
                        <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
                            From AV Academy classrooms to top creative studios —
                            celebrating our students&apos; success
                        </p>
                    </div>
                </Reveal>

                {/* Images Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {placedImages.map((image, i) => (
                        <Reveal key={image.src} delay={i * 80}>
                            <div className="group rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/15 bg-[#082c44]/40">
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                                    />
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

            </div>
        </section>
    );
}