// "use client";
// import { SITE_CONTENT } from "@/lib/siteContent";
// import { Reveal } from "./ScrollReveal";

// export default function Testimonials() {
//   return (
//     <section className="px-10 py-24 bg-bg2">
//       <div className="max-w-[1300px] mx-auto">
//         <div className="text-center mb-16">
//           <div className="sec-label justify-center">Client Love</div>
//           <h2 className="font-syne font-black text-[clamp(1.8rem,3vw,2.6rem)] tracking-[-0.5px]">
//             What Our <span className="grad-cyan">Clients Say</span>
//           </h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {SITE_CONTENT.testimonials.map((t, i) => (
//             <Reveal key={t.name} delay={i * 100}>
//               <div className="relative h-full p-9 rounded-[22px] bg-card/70 border border-cyan1/20 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyan1/40 hover:shadow-cyan-md group">
//                 <span className="absolute top-3.5 left-5 text-[80px] text-cyan1/8 font-serif leading-none">&ldquo;</span>
//                 <div className="text-[13px] tracking-[3px] text-amber2 mb-3.5">★★★★★</div>
//                 <p className="text-sm text-gray2 leading-[1.85] mb-5 italic">&ldquo;{t.text}&rdquo;</p>
//                 <div className="flex items-center gap-3.5">
//                   <div className="w-[46px] h-[46px] rounded-full bg-grad-cyan-btn flex items-center justify-center font-syne font-black text-[17px] text-white flex-shrink-0">
//                     {t.name[0]}
//                   </div>
//                   <div>
//                     <div className="font-syne font-bold text-sm">{t.name}</div>
//                     <div className="text-[11.5px] text-gray1 mt-0.5">{t.role}</div>
//                   </div>
//                 </div>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { useEffect, useState } from "react";
import { SITE_CONTENT } from "@/lib/siteContent";
import { Reveal } from "./ScrollReveal";

const testimonials = SITE_CONTENT.testimonials;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [current]);

  function goNext() {
    if (animating) return;
    setDirection("left");
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setAnimating(false);
    }, 400);
  }

  function goPrev() {
    if (animating) return;
    setDirection("right");
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 400);
  }

  // 3 cards visible: prev, current, next
  const getIdx = (offset: number) =>
    (current + offset + testimonials.length) % testimonials.length;

  const cards = [
    { t: testimonials[getIdx(-1)], pos: "prev" },
    { t: testimonials[getIdx(0)], pos: "active" },
    { t: testimonials[getIdx(1)], pos: "next" },
  ];

  return (
    <section className="px-4 sm:px-8 md:px-10 py-24 bg-bg2 overflow-hidden">
      <div className="max-w-[1300px] mx-auto">

        <Reveal>
          <div className="text-center mb-14">
            <div className="sec-label justify-center">Client Love</div>
            <h2 className="font-syne font-black text-[clamp(1.8rem,3vw,2.6rem)] tracking-[-0.5px]">
              What Our <span className="grad-cyan">Clients Say</span>
            </h2>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="relative flex items-center justify-center gap-4 sm:gap-6">

          {/* Prev Arrow */}
          <button
            onClick={goPrev}
            className="hidden sm:flex w-10 h-10 rounded-full bg-card border border-cyan1/20 items-center justify-center text-cyan2 hover:border-cyan1/50 hover:bg-cyan1/10 transition-all flex-shrink-0"
          >
            ‹
          </button>

          {/* 3 Cards */}
          <div className="flex gap-4 sm:gap-5 w-full max-w-[1100px] justify-center items-stretch">
            {cards.map(({ t, pos }) => (
              <div
                key={pos}
                className={`relative flex-shrink-0 p-6 sm:p-9 rounded-[22px] border overflow-hidden transition-all duration-500 flex flex-col
                  ${pos === "active"
                    ? "w-full sm:w-[380px] bg-card/90 border-cyan1/40 shadow-cyan-md scale-100 opacity-100 z-10"
                    : "hidden sm:flex sm:w-[380px] bg-card/50 border-cyan1/15 scale-95 opacity-60"
                  }
                  ${animating ? (direction === "left" ? "-translate-x-2" : "translate-x-2") : "translate-x-0"}
                `}
              >
                <span className="absolute top-3.5 left-5 text-[80px] text-cyan1/8 font-serif leading-none">&ldquo;</span>
                <div className="text-[13px] tracking-[3px] text-amber2 mb-3.5">★★★★★</div>
                <p className="text-sm text-gray2 leading-[1.85] mb-5 italic flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3.5 mt-auto">
                  <div className="w-[46px] h-[46px] rounded-full bg-grad-cyan-btn flex items-center justify-center font-syne font-black text-[17px] text-white flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-syne font-bold text-sm">{t.name}</div>
                    <div className="text-[11.5px] text-gray1 mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={goNext}
            className="hidden sm:flex w-10 h-10 rounded-full bg-card border border-cyan1/20 items-center justify-center text-cyan2 hover:border-cyan1/50 hover:bg-cyan1/10 transition-all flex-shrink-0"
          >
            ›
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? "left" : "right"); setCurrent(i); }}
              className={`rounded-full transition-all duration-300 ${current === i
                  ? "w-6 h-2.5 bg-cyan2"
                  : "w-2.5 h-2.5 bg-gray-600 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
