// "use client";
// import { useRef } from "react";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";
// import "swiper/css";
// import LucideIcon from "./LucideIcon";

// const courses = [
//   { badge: "🔥 HOT", bType: "ai",    title: "AI Masterclass",       dur: "6–8 Weeks",  mode: "Online & Offline", href: "/ai-masterclass" },
//   { badge: "Design",  bType: "media", title: "Graphic Design",       dur: "3 Months",   mode: "Online & Offline", href: "/contact" },
//   { badge: "Video",   bType: "media", title: "Video Editing",        dur: "2–3 Months", mode: "Online & Offline", href: "/contact" },
//   { badge: "Motion",  bType: "media", title: "Motion Graphics",      dur: "3 Months",   mode: "Online & Offline", href: "/contact" },
//   { badge: "VFX",     bType: "media", title: "VFX Master Classes",   dur: "4–6 Months", mode: "Offline Lucknow",  href: "/contact" },
//   { badge: "3D",      bType: "media", title: "3D Animation",         dur: "4–6 Months", mode: "Online & Offline", href: "/contact" },
//   { badge: "Tech",    bType: "tech",  title: "Python & Data Science",dur: "3–4 Months", mode: "Online & Offline", href: "/contact" },
//   { badge: "Digital", bType: "media", title: "Digital Marketing",    dur: "2 Months",   mode: "Online & Offline", href: "/contact" },
// ];

// const badgeCls: Record<string, string> = {
//   ai:    "bg-cyan1/10 text-cyan2 border border-cyan1/25",
//   media: "bg-amber1/10 text-amber2 border border-amber1/25",
//   tech:  "bg-teal1/10 text-teal2 border border-teal2/20",
// };

// export default function CoursesSlider() {
//   const swiperRef = useRef<SwiperType | null>(null);
//   return (
//     <section className="px-10 py-24 bg-bg2">
//       <div className="max-w-[1300px] mx-auto">
//         <div className="text-center mb-16">
//           <div className="sec-label justify-center">AV Academy</div>
//           <h2 className="font-syne font-black text-[clamp(1.8rem,3vw,2.6rem)] tracking-[-0.5px] mb-3">
//             Featured <span className="grad-amber">Courses</span>
//           </h2>
//           <p className="text-[14.5px] text-gray1 leading-[1.85] max-w-[620px] mx-auto">Practical, industry-focused courses — online & offline in Lucknow</p>
//         </div>

//         <Swiper modules={[Navigation, Autoplay]} spaceBetween={20} slidesPerView={1} loop
//           autoplay={{ delay: 3500, pauseOnMouseEnter: true }}
//           onSwiper={(s) => (swiperRef.current = s)}
//           breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}
//           className="!pb-2">
//           {courses.map((c) => (
//             <SwiperSlide key={c.title} className="!h-auto">
//               <div className="relative h-full p-7 rounded-[20px] bg-card/80 border border-cyan1/20 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-cyan1/50 hover:shadow-cyan-md overflow-hidden group">
//                 <div className="absolute top-0 left-0 right-0 h-[2px] bg-grad-cyan" />
//                 <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-[1px] uppercase mb-3.5 ${badgeCls[c.bType]}`}>{c.badge}</span>
//                 <h4 className="font-syne font-bold text-[15px] mb-3 flex-1">{c.title}</h4>
//                 <div className="flex flex-col gap-1.5 mb-5">
//                   <span className="flex items-center gap-1.5 text-xs text-gray1">
//                     <LucideIcon name="Clock" size={11} color="#fbbf24" /> {c.dur}
//                   </span>
//                   <span className="flex items-center gap-1.5 text-xs text-gray1">
//                     <LucideIcon name="Monitor" size={11} color="#fbbf24" /> {c.mode}
//                   </span>
//                 </div>
//                 <Link href={c.href} className="block w-full text-center py-2.5 rounded-lg text-xs font-bold font-syne tracking-wide border border-cyan1/30 text-cyan2 transition-all hover:bg-cyan1 hover:text-white hover:border-cyan1">
//                   {c.href === "/ai-masterclass" ? "View Details →" : "Enquire →"}
//                 </Link>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <div className="flex gap-3 justify-center mt-8">
//           {[{ icon: "ChevronLeft", action: () => swiperRef.current?.slidePrev() }, { icon: "ChevronRight", action: () => swiperRef.current?.slideNext() }].map(({ icon, action }) => (
//             <button key={icon} onClick={action} className="w-11 h-11 rounded-full bg-cyan1/10 border border-cyan1/30 text-cyan2 flex items-center justify-center transition-all hover:bg-cyan1 hover:text-white cursor-pointer">
//               <LucideIcon name={icon} size={18} />
//             </button>
//           ))}
//         </div>

//         <div className="text-center mt-7">
//           <Link href="/courses" className="shimmer-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-syne font-bold text-sm text-white bg-grad-cyan-btn">
//             <LucideIcon name="LayoutGrid" size={16} /> View All Courses
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useRef } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Autoplay,
} from "swiper/modules";

import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import LucideIcon from "./LucideIcon";

/* ─────────────────────────────────────────────
   COURSES
───────────────────────────────────────────── */

const courses = [
  {
    badge: "🔥 HOT",
    bType: "ai",
    title: "Gen-AI Masterclass",
    dur: "6–8 Weeks",
    href: "/ai-masterclass",
  },

  {
    badge: "Design",
    bType: "media",
    title: "Graphic Design",
    dur: "3 Months",
    href: "/courses/graphic-design",
  },

  {
    badge: "Video",
    bType: "media",
    title: "Video Editing",
    dur: "2–3 Months",
    href: "/courses/video-editing",
  },

  {
    badge: "Motion",
    bType: "media",
    title: "Motion Graphics",
    dur: "3 Months",
    href: "/courses/motion-graphics",
  },

  {
    badge: "VFX",
    bType: "media",
    title: "VFX Master Classes",
    dur: "4–6 Months",
    href: "/courses/vfx-master-classes",
  },

  {
    badge: "3D",
    bType: "media",
    title: "3D Animation",
    dur: "4–6 Months",
    href: "/courses/3d-animation",
  },

  {
    badge: "Tech",
    bType: "tech",
    title: "Python & Data Science",
    dur: "3–4 Months",
    href: "/courses/python-data-science",
  },

  {
    badge: "Digital",
    bType: "media",
    title: "Digital Marketing",
    dur: "2 Months",
    href: "/courses/digital-marketing",
  },
];

/* ─────────────────────────────────────────────
   BADGES
───────────────────────────────────────────── */

const badgeCls: Record<string, string> = {
  ai: "bg-cyan1/10 text-cyan2 border border-cyan1/25",

  media:
    "bg-amber1/10 text-amber2 border border-amber1/25",

  tech:
    "bg-teal1/10 text-teal2 border border-teal2/20",
};

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */

export default function CoursesSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="px-10 py-24 bg-bg2">
      <div className="max-w-[1300px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <div className="sec-label justify-center">
            AV Academy
          </div>

          <h2 className="font-syne font-black text-[clamp(1.8rem,3vw,2.6rem)] tracking-[-0.5px] mb-3">
            Featured{" "}
            <span className="grad-amber">
              Courses
            </span>
          </h2>

          <p className="text-[14.5px] text-gray1 leading-[1.85] max-w-[620px] mx-auto">
            Practical, industry-focused creative courses
            designed to build real careers.
          </p>

        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 3500,
            pauseOnMouseEnter: true,
          }}
          onSwiper={(s) => (swiperRef.current = s)}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="!pb-2"
        >

          {courses.map((c) => (
            <SwiperSlide
              key={c.title}
              className="!h-auto"
            >

              <div className="relative h-full p-7 rounded-[20px] bg-card/80 border border-cyan1/20 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-cyan1/50 hover:shadow-cyan-md overflow-hidden group">

                {/* Top Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-grad-cyan" />

                {/* Badge */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-[1px] uppercase mb-3.5 ${badgeCls[c.bType]}`}
                >
                  {c.badge}
                </span>

                {/* Title */}
                <h4 className="font-syne font-bold text-[15px] mb-3 flex-1">
                  {c.title}
                </h4>

                {/* Duration */}
                <div className="flex flex-col gap-1.5 mb-5">

                  <span className="flex items-center gap-1.5 text-xs text-gray1">
                    <LucideIcon
                      name="Clock"
                      size={11}
                      color="#fbbf24"
                    />

                    {c.dur}
                  </span>

                </div>

                {/* Button */}
                {/* <Link
                  href={c.href}
                  className="block w-full text-center py-2.5 rounded-lg text-xs font-bold font-syne tracking-wide border border-cyan1/30 text-cyan2 transition-all hover:bg-cyan1 hover:text-white hover:border-cyan1"
                >
                  {c.href === "/ai-masterclass"
                    ? "View Details →"
                    : "Enquire →"}
                </Link> */}

                <Link
                  href={c.href}
                  className="block w-full text-center py-2.5 rounded-lg text-xs font-bold font-syne tracking-wide border border-cyan1/30 text-cyan2 transition-all hover:bg-cyan1 hover:text-white hover:border-cyan1"
                >
                  View Details →
                </Link>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

        {/* Navigation */}
        <div className="flex gap-3 justify-center mt-8">

          {[
            {
              icon: "ChevronLeft",
              action: () =>
                swiperRef.current?.slidePrev(),
            },

            {
              icon: "ChevronRight",
              action: () =>
                swiperRef.current?.slideNext(),
            },
          ].map(({ icon, action }) => (
            <button
              key={icon}
              onClick={action}
              className="w-11 h-11 rounded-full bg-cyan1/10 border border-cyan1/30 text-cyan2 flex items-center justify-center transition-all hover:bg-cyan1 hover:text-white cursor-pointer"
            >
              <LucideIcon
                name={icon}
                size={18}
              />
            </button>
          ))}

        </div>

        {/* Bottom Button */}
        <div className="text-center mt-7">

          <Link
            href="/courses"
            className="shimmer-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-syne font-bold text-sm text-white bg-grad-cyan-btn"
          >
            <LucideIcon
              name="LayoutGrid"
              size={16}
            />

            View All Courses
          </Link>

        </div>
      </div>
    </section>
  );
}