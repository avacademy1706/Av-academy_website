"use client";
// app/courses/CoursesClient.tsx
// ✅ Sirf UI — fully mobile responsive with Tailwind

import Link from "next/link";
import LucideIcon from "@/components/LucideIcon";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WAFloat from "@/components/WAFloat";
import { CTASection } from "@/components/PageSections";
import { Reveal } from "@/components/ScrollReveal";
import { COURSES } from "@/lib/coursesData";

const mediaCourses = COURSES.filter((c) => c.category === "media");
const techCourses = COURSES.filter((c) => c.category === "tech");

// ── Course Card ───────────────────────────────────────────────────────────
function CourseCard({ course }: { course: typeof COURSES[0] }) {
    return (
        <Link href={`/courses/${course.slug}`} className="block h-full">
            <div
                className="relative h-full p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border transition-all hover:-translate-y-1 sm:hover:-translate-y-1.5 hover:shadow-2xl group overflow-hidden flex flex-col active:scale-[0.99]"
                style={{ borderColor: `${course.accentHex}25` }}
            >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] opacity-60" style={{ background: `linear-gradient(90deg, ${course.accentHex}, #fbbf24)` }} />

                {/* Hover glow */}
                <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none" style={{ background: `${course.accentHex}25` }} />

                {/* Badge */}
                <span
                    className="self-start inline-block px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold tracking-[1.5px] uppercase mb-3 sm:mb-4 border relative z-10"
                    style={{ background: `${course.accentHex}15`, borderColor: `${course.accentHex}40`, color: course.accentHex }}
                >
                    {course.badge}
                </span>

                {/* Icon */}
                <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform relative z-10"
                    style={{ background: `${course.accentHex}15`, border: `1px solid ${course.accentHex}40` }}
                >
                    <LucideIcon name={course.icon} size={19} color={course.accentHex} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="font-syne font-bold text-sm sm:text-base text-white mb-1.5 sm:mb-2 leading-tight relative z-10">
                    {course.name}
                </h3>

                {/* Tagline */}
                <p className="text-[11.5px] sm:text-[12.5px] text-gray-400 mb-3 sm:mb-4 leading-relaxed flex-1 relative z-10">
                    {course.tagline}
                </p>

                {/* Meta */}
                <div className="flex flex-col gap-1 sm:gap-1.5 mb-3 sm:mb-4 relative z-10">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-[12px] text-gray-300">
                        <LucideIcon name="Clock" size={11} color="#fbbf24" strokeWidth={2.5} />
                        {course.duration}
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-[12px] text-gray-300">
                        <LucideIcon name="Laptop" size={11} color="#fbbf24" strokeWidth={2.5} />
                        {course.mode}
                    </div>
                </div>

                {/* CTA */}
                <div
                    className="text-center py-2 sm:py-2.5 rounded-xl font-bold text-[11.5px] sm:text-[12px] font-syne tracking-wide border transition-all relative z-10 group-hover:scale-[1.02]"
                    style={{ borderColor: `${course.accentHex}50`, color: course.accentHex, background: `${course.accentHex}08` }}
                >
                    View Details →
                </div>
            </div>
        </Link>
    );
}

// ── AI Masterclass Special Card ───────────────────────────────────────────
function AIMasterclassCard() {
    return (
        <Link href="/ai-masterclass" className="block h-full">
            <div className="relative h-full p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-[#082c44]/95 border-2 border-cyan-500/50 hover:border-cyan-500/80 transition-all hover:-translate-y-1 sm:hover:-translate-y-1.5 hover:shadow-2xl shadow-cyan-500/30 group overflow-hidden flex flex-col active:scale-[0.99]">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 to-amber-500 opacity-90" />
                <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-100 blur-3xl pointer-events-none bg-cyan-500/30" />

                <span className="self-start inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold tracking-[1.5px] uppercase mb-3 sm:mb-4 bg-gradient-to-r from-amber-500 to-amber-400 text-[#1a1a1a] border border-amber-300 relative z-10">
                    <LucideIcon name="Flame" size={9} color="#1a1a1a" strokeWidth={3} />
                    HOT
                </span>

                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform relative z-10 bg-gradient-to-br from-cyan-400 to-cyan-500 shadow-lg shadow-cyan-500/40">
                    <LucideIcon name="Brain" size={19} color="#031a2b" strokeWidth={2} />
                </div>

                <h3 className="font-syne font-bold text-sm sm:text-base text-white mb-1.5 sm:mb-2 leading-tight relative z-10">
                    AI Masterclass
                </h3>
                <p className="text-[11.5px] sm:text-[12.5px] text-gray-300 mb-3 sm:mb-4 leading-relaxed flex-1 relative z-10">
                    ChatGPT, Midjourney, RunwayML, Agentic AI &amp; Prompt Engineering
                </p>

                <div className="flex flex-col gap-1 sm:gap-1.5 mb-3 sm:mb-4 relative z-10">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-[12px] text-gray-200">
                        <LucideIcon name="Clock" size={11} color="#fbbf24" strokeWidth={2.5} />
                        6–8 Weeks
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-[12px] text-gray-200">
                        <LucideIcon name="Laptop" size={11} color="#fbbf24" strokeWidth={2.5} />
                        Online &amp; Offline
                    </div>
                </div>

                <div className="text-center py-2 sm:py-2.5 rounded-xl font-bold text-[11.5px] sm:text-[12px] font-syne tracking-wide bg-gradient-to-r from-cyan-500 to-cyan-400 text-[#031a2b] relative z-10 group-hover:scale-[1.02] transition-transform">
                    View Details →
                </div>
            </div>
        </Link>
    );
}

// ── Main Page ─────────────────────────────────────────────────────────────
export default function CoursesClient() {
    return (
        <>
            <Navbar />
            <main className="bg-[#030f1a]">

                {/* ============ HERO ============ */}
                <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-8 md:px-10 text-center overflow-hidden border-b border-cyan-500/15 bg-gradient-to-br from-[#061826] via-[#0a2436] to-[#061826]">
                    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[260px] sm:w-[460px] md:w-[600px] h-[160px] sm:h-[240px] md:h-[300px] rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
                    <div className="absolute top-[30%] left-[4%] w-28 sm:w-44 md:w-52 h-28 sm:h-44 md:h-52 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-[10%] right-[5%] w-32 sm:w-48 md:w-60 h-32 sm:h-48 md:h-60 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
                    <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,180,216,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,180,216,.04) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

                    <div className="relative z-10 max-w-[1000px] mx-auto">
                        <span className="inline-flex items-center gap-2 px-4 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[2px] uppercase mb-4 sm:mb-5 bg-amber-500/10 border border-amber-500/40 text-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                            <LucideIcon name="GraduationCap" size={11} color="#fbbf24" strokeWidth={2} />
                            AV Academy
                        </span>

                        <h1 className="font-syne font-extrabold text-[clamp(1.7rem,4.5vw,2.8rem)] leading-[1.1] tracking-tight mb-3 sm:mb-4 text-white">
                            All{" "}
                            <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">Courses</span>
                        </h1>

                        <p className="text-sm sm:text-base text-gray-400 max-w-[620px] mx-auto mb-5 sm:mb-6 leading-relaxed px-1">
                            Lucknow&apos;s leading creative &amp; technology training hub — 12 industry-focused programs to launch your career
                        </p>

                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb">
                            <ol className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] text-gray-500 px-4 py-2 rounded-full bg-[#082c44]/60 border border-cyan-500/15 list-none m-0">
                                <li className="inline-flex items-center px-1">
                                    <Link href="/" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">Home</Link>
                                </li>
                                <li className="inline-flex items-center" aria-hidden="true">
                                    <LucideIcon name="ChevronRight" size={11} color="#6b7280" />
                                </li>
                                <li className="inline-flex items-center px-1">
                                    <span className="text-gray-300" aria-current="page">Courses</span>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </section>

                {/* ============ MEDIA COURSES ============ */}
                <section aria-labelledby="media-courses-heading" className="px-4 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 bg-[#061826]">
                    <div className="max-w-[1280px] mx-auto">
                        <Reveal>
                            <div className="mb-8 sm:mb-10">
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-2 sm:mb-3">// Media Industry</div>
                                <h2 id="media-courses-heading" className="font-syne font-extrabold text-[clamp(1.5rem,2.6vw,2.2rem)] leading-tight tracking-tight text-white mb-2 sm:mb-3">
                                    Creative &amp;{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Media Courses</span>
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-400 max-w-[600px] leading-relaxed">
                                    Design, animation, video, and creative arts — programs that turn passion into profession
                                </p>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
                            {mediaCourses.map((c, i) => (
                                <Reveal key={c.slug} delay={i * 60}>
                                    <CourseCard course={c} />
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============ TECH COURSES ============ */}
                <section aria-labelledby="tech-courses-heading" className="px-4 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 bg-[#030f1a]">
                    <div className="max-w-[1280px] mx-auto">
                        <Reveal>
                            <div className="mb-8 sm:mb-10">
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-2 sm:mb-3">// AI &amp; Technology</div>
                                <h2 id="tech-courses-heading" className="font-syne font-extrabold text-[clamp(1.5rem,2.6vw,2.2rem)] leading-tight tracking-tight text-white mb-2 sm:mb-3">
                                    AI &amp;{" "}
                                    <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">Technology Courses</span>
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-400 max-w-[600px] leading-relaxed">
                                    Programming, AI, and data science — future-proof your career with cutting-edge skills
                                </p>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
                            {/* AI Masterclass special card */}
                            <Reveal delay={0}>
                                <AIMasterclassCard />
                            </Reveal>

                            {techCourses.map((c, i) => (
                                <Reveal key={c.slug} delay={(i + 1) * 60}>
                                    <CourseCard course={c} />
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                <CTASection
                    title="Not Sure Which"
                    highlight="Course Is Right?"
                    desc="Free consultation and personalized course recommendations from our expert counselors."
                />

            </main>
            <Footer />
            <WAFloat />
        </>
    );
}