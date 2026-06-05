"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WAFloat from "@/components/WAFloat";
import CertificationGallery from "@/components/Certificationgallery";
import { Reveal } from "@/components/ScrollReveal";
import LucideIcon from "@/components/LucideIcon";
import Link from "next/link";

const events = [
    {
        title: "Eldeco AI Training Workshop",
        date: "April 2024",
        location: "Eldeco, Lucknow",
        tag: "Corporate Training",
        tagColor: "cyan",
        desc: "Hands-on AI tools training for Eldeco Group professionals — covering ChatGPT, Midjourney & AI-powered workflows.",
        icon: "Brain",
        count: "20+ Attendees",
    },
    {
        title: "Invest101 Certification Program",
        date: "March 2024",
        location: "AV Academy, Lucknow",
        tag: "Certification",
        tagColor: "amber",
        desc: "Certification distribution ceremony for Invest101 program participants with hands-on project presentations.",
        icon: "Award",
        count: "15+ Certified",
    },
    {
        title: "Group Creative Workshop",
        date: "2024",
        location: "AV Academy, Lucknow",
        tag: "Workshop",
        tagColor: "cyan",
        desc: "Interactive group session covering real-world creative projects, portfolio reviews and career guidance.",
        icon: "Users",
        count: "30+ Students",
    },
];

export default function EventsClient() {
    return (
        <>
            <Navbar />
            <main>

                {/* HERO */}
                <section className="relative pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-20 px-4 sm:px-8 md:px-10 text-center overflow-hidden border-b border-cyan-500/15 bg-gradient-to-br from-[#061826] via-[#0a2436] to-[#061826]">
                    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[260px] sm:w-[460px] md:w-[600px] h-[160px] sm:h-[240px] md:h-[300px] rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
                    <div className="absolute top-[30%] left-[4%] w-28 sm:w-44 h-28 sm:h-44 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-[10%] right-[5%] w-32 sm:w-48 h-32 sm:h-48 rounded-full bg-amber-500/8 blur-3xl pointer-events-none" />
                    <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,180,216,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,180,216,.04) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

                    <div className="relative z-10 max-w-[900px] mx-auto">
                        <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-[2px] uppercase mb-5 sm:mb-7 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 shadow-[0_0_30px_rgba(0,180,216,0.2)]">
                            <LucideIcon name="CalendarDays" size={13} color="#22d3ee" strokeWidth={2} />
                            Events & Gallery
                        </span>

                        <h1 className="font-syne font-extrabold text-[clamp(1.9rem,6vw,4.2rem)] leading-[1.05] tracking-tight mb-5 sm:mb-6 text-white">
                            Our{" "}
                            <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
                                Events & Achievements
                            </span>
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-[640px] mx-auto mb-6 leading-relaxed px-1">
                            From corporate AI training sessions to student certification ceremonies — explore the milestones and moments that define AV Academy.
                        </p>

                        {/* Breadcrumb */}
                        {/* <nav aria-label="Breadcrumb">
                            <ol className="inline-flex items-center gap-2 text-[11px] sm:text-[13px] text-gray-500 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#082c44]/60 border border-cyan-500/15 list-none m-0">
                                <li className="inline-flex items-center px-1">
                                    <Link href="/" className="text-cyan-400 no-underline font-semibold hover:text-cyan-300 transition-colors">Home</Link>
                                </li>
                                <li className="inline-flex items-center" aria-hidden="true">
                                    <LucideIcon name="ChevronRight" size={12} color="#6b7280" />
                                </li>
                                <li className="inline-flex items-center px-1">
                                    <span className="text-gray-300" aria-current="page">Events</span>
                                </li>
                            </ol>
                        </nav> */}
                    </div>
                </section>

                {/* EVENTS LIST */}
                {/* <section className="px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-[#030f1a]">
                    <div className="max-w-[1240px] mx-auto">
                        <Reveal>
                            <div className="text-center mb-10 sm:mb-14">
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Our Events</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.6rem,3vw,2.6rem)] tracking-tight mb-3.5 text-white">
                                    Workshops,{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
                                        Trainings & More
                                    </span>
                                </h2>
                                <p className="text-sm sm:text-[15px] text-gray-400 max-w-[580px] mx-auto leading-relaxed px-2">
                                    Real events, real impact — from corporate training to student celebrations
                                </p>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                            {events.map((ev, i) => (
                                <Reveal key={ev.title} delay={i * 80}>
                                    <div className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030e16]/95 border border-cyan-500/10 hover:border-cyan-500/40 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,180,216,.12)] transition-all overflow-hidden h-full flex flex-col">
                                  
                                        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 to-amber-500 opacity-50" />

                                    
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                                <LucideIcon name={ev.icon} size={22} color="#22d3ee" strokeWidth={1.8} />
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase ${ev.tagColor === "amber"
                                                    ? "bg-amber-500/10 border border-amber-500/25 text-amber-400"
                                                    : "bg-cyan-500/10 border border-cyan-500/25 text-cyan-400"
                                                }`}>
                                                {ev.tag}
                                            </span>
                                        </div>

                                        <h3 className="font-syne font-bold text-base sm:text-[1.1rem] text-white mb-2 tracking-tight">{ev.title}</h3>
                                        <p className="text-[12.5px] sm:text-[13.5px] text-gray-400 leading-relaxed mb-5 flex-1">{ev.desc}</p>

                                       
                                        <div className="flex flex-col gap-2 pt-4 border-t border-cyan-500/10">
                                            <div className="flex items-center gap-2 text-[11.5px] text-gray-500">
                                                <LucideIcon name="Calendar" size={13} color="#6b7280" strokeWidth={2} />
                                                {ev.date}
                                            </div>
                                            <div className="flex items-center gap-2 text-[11.5px] text-gray-500">
                                                <LucideIcon name="MapPin" size={13} color="#6b7280" strokeWidth={2} />
                                                {ev.location}
                                            </div>
                                            <div className="flex items-center gap-2 text-[11.5px] text-cyan-400 font-semibold">
                                                <LucideIcon name="Users" size={13} color="#22d3ee" strokeWidth={2} />
                                                {ev.count}
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section> */}

                {/* GALLERY */}
                <CertificationGallery />

                {/* CTA */}
                <section className="relative px-4 sm:px-8 md:px-10 py-16 sm:py-20 bg-gradient-to-br from-[#061826] to-[#0a2436] overflow-hidden border-t border-cyan-500/10">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,180,216,.08)_0%,transparent_70%)] pointer-events-none" />
                    <Reveal>
                        <div className="max-w-[700px] mx-auto text-center relative z-10">
                            <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Join Us</div>
                            <h2 className="font-syne font-extrabold text-[clamp(1.6rem,3vw,2.6rem)] tracking-tight text-white mb-4">
                                Want to be Part of Our{" "}
                                <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                                    Next Event?
                                </span>
                            </h2>
                            <p className="text-sm sm:text-[15px] text-gray-400 leading-relaxed mb-8">
                                Join AV Academy and become part of our growing community of creative professionals. Attend workshops, earn certifications & build your career.
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center">
                                <Link href="/courses" className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] font-bold text-sm hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/30 transition-all active:scale-[0.98]">
                                    <LucideIcon name="GraduationCap" size={15} color="#031a2b" strokeWidth={2.5} />
                                    Explore Courses
                                </Link>
                                <Link href="/contact-us" className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-cyan-500/40 text-cyan-400 font-bold text-sm hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all active:scale-[0.98]">
                                    Contact Us
                                    <LucideIcon name="ArrowRight" size={15} color="#22d3ee" strokeWidth={2.5} />
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </section>

            </main>
            <Footer />
            <WAFloat />
        </>
    );
}