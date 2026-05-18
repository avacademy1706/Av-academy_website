"use client";
import { SITE_CONTENT } from "@/lib/siteContent";
import { Reveal } from "./ScrollReveal";

export default function Testimonials() {
  return (
    <section className="px-10 py-24 bg-bg2">
      <div className="max-w-[1300px] mx-auto">
        <div className="text-center mb-16">
          <div className="sec-label justify-center">Client Love</div>
          <h2 className="font-syne font-black text-[clamp(1.8rem,3vw,2.6rem)] tracking-[-0.5px]">
            What Our <span className="grad-cyan">Clients Say</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SITE_CONTENT.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="relative h-full p-9 rounded-[22px] bg-card/70 border border-cyan1/20 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyan1/40 hover:shadow-cyan-md group">
                <span className="absolute top-3.5 left-5 text-[80px] text-cyan1/8 font-serif leading-none">&ldquo;</span>
                <div className="text-[13px] tracking-[3px] text-amber2 mb-3.5">★★★★★</div>
                <p className="text-sm text-gray2 leading-[1.85] mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3.5">
                  <div className="w-[46px] h-[46px] rounded-full bg-grad-cyan-btn flex items-center justify-center font-syne font-black text-[17px] text-white flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-syne font-bold text-sm">{t.name}</div>
                    <div className="text-[11.5px] text-gray1 mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
