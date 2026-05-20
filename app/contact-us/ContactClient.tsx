"use client";
// app/contact/ContactClient.tsx
// ✅ Sirf UI — koi metadata/Head nahi, sab page.tsx mein hai

import { useState } from "react";
import LucideIcon from "@/components/LucideIcon";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WAFloat from "@/components/WAFloat";
import { Reveal } from "@/components/ScrollReveal";
import Link from "next/link";

const formFields = [
    { label: "Your Name *", type: "text", placeholder: "Rahul Sharma", icon: "User", name: "name" },
    { label: "Phone *", type: "tel", placeholder: "+91-XXXXXXXXXX", icon: "Phone", name: "phone" },
    { label: "Email", type: "email", placeholder: "your@email.com", icon: "Mail", name: "email" },
];

const editLabServices = [
    "Packaging", "Hospitality", "Real Estate", "Education", "Fashion",
    "Automobile", "Advertising", "Media", "AI Training B2B", "Personal Brand Building",
];
const academyCourses = [
    "AI Masterclass", "Graphic Design", "Video Editing", "Motion Graphics",
    "3D Animation", "VFX", "Digital Marketing", "Python & Data Science",
];

const contactInfo = [
    {
        icon: "Phone",
        label: "Phone / WhatsApp",
        value: "+91-7500206719",
        href: "tel:+917500206719",
    },
    {
        icon: "Mail",
        label: "Email",
        value: "avacademy1706@gmail.com",
        href: "mailto:avacademy1706@gmail.com",
    },
    {
        icon: "MapPin",
        label: "Address",
        value: "3rd Floor, Sai Tower, Raibareli Rd, near Dental College, Vrindavan Colony, Lucknow UP 226014",
        href: "https://maps.google.com/?q=Sai+Tower+Vrindavan+Colony+Lucknow",
    },
];

const quickStats = [
    { num: "1hr", label: "Avg Response Time", icon: "Clock" },
    { num: "24/7", label: "WhatsApp Support", icon: "MessageCircle" },
    { num: "100%", label: "Free Consultation", icon: "Heart" },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactClient() {
    const [formData, setFormData] = useState({
        name: "", phone: "", email: "", service: "", message: "",
    });
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (!formData.name || !formData.phone) {
            setErrorMsg("Please fill in your name and phone number.");
            setStatus("error");
            return;
        }
        setStatus("loading");
        setErrorMsg("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Failed to send email.");
            }
            setStatus("success");
            const waMessage = `Hi! I'm interested in AV Academy.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`;
            window.open(`https://wa.me/917500206719?text=${encodeURIComponent(waMessage)}`, "_blank");
            setTimeout(() => {
                setFormData({ name: "", phone: "", email: "", service: "", message: "" });
                setStatus("idle");
            }, 4000);
        } catch (err: unknown) {
            setStatus("error");
            setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try WhatsApp directly.");
        }
    };

    const isLoading = status === "loading";

    return (
        <>
            <Navbar />
            <main className="bg-[#030f1a]">

                {/* ============ HERO ============ */}
                <section
                    aria-label="Contact Hero"
                    className="relative pt-28 sm:pt-36 md:pt-40 pb-14 md:pb-20 px-4 sm:px-8 md:px-10 text-center overflow-hidden border-b border-cyan-500/15 bg-gradient-to-br from-[#061826] via-[#0a2436] to-[#061826]"
                >
                    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[280px] sm:w-[460px] md:w-[600px] h-[180px] sm:h-[240px] md:h-[300px] bg-cyan-500/20 blur-3xl pointer-events-none rounded-full" />
                    <div className="absolute top-[30%] left-[4%] w-28 sm:w-40 md:w-52 h-28 sm:h-40 md:h-52 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-[10%] right-[5%] w-32 sm:w-44 md:w-60 h-32 sm:h-44 md:h-60 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
                    <div
                        className="absolute inset-0 opacity-40 pointer-events-none"
                        style={{
                            backgroundImage: "linear-gradient(rgba(0,180,216,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,.04) 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                        }}
                    />

                    <div className="relative z-10 max-w-[1000px] mx-auto">
                        <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-[2px] uppercase mb-4 sm:mb-6 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 shadow-[0_0_30px_rgba(0,180,216,0.2)]">
                            <LucideIcon name="MessageCircle" size={12} color="#22d3ee" strokeWidth={2} />
                            Let&apos;s Connect
                        </span>

                        <h1 className="font-syne font-extrabold text-[clamp(1.75rem,6vw,3.8rem)] leading-[1.05] tracking-tight mb-4 sm:mb-5 text-white">
                            Let&apos;s Build Something{" "}
                            <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
                                Great Together
                            </span>
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-[560px] mx-auto mb-5 sm:mb-6 leading-relaxed px-1">
                            Reach out for course inquiries, project consultations, or just to say hi. We respond within 1 hour!
                        </p>

                        {/* <nav aria-label="Breadcrumb">
                            <ol className="inline-flex items-center gap-1 text-[11px] sm:text-[13px] text-gray-500 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#082c44]/60 border border-cyan-500/15 list-none m-0">
                                <li className="inline-flex items-center px-1">
                                    <Link href="/" className="text-cyan-400 no-underline font-semibold hover:text-cyan-300 transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li className="inline-flex items-center" aria-hidden="true">
                                    <LucideIcon name="ChevronRight" size={12} color="#6b7280" />
                                </li>
                                <li className="inline-flex items-center px-1">
                                    <span className="text-gray-300" aria-current="page">Contact</span>
                                </li>
                            </ol>
                        </nav> */}
                    </div>
                </section>

                {/* ============ QUICK STATS BAR ============ */}
                <section aria-label="Quick Stats" className="px-4 sm:px-8 md:px-10 py-6 sm:py-8 bg-[#061826] border-b border-cyan-500/10">
                    <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5">
                        {quickStats.map((s) => (
                            <div
                                key={s.label}
                                className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 rounded-2xl bg-gradient-to-br from-[#082c44]/80 to-[#030f1a]/90 border border-cyan-500/15 hover:border-cyan-500/40 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-cyan-500/20 to-cyan-400/5 border border-cyan-500/30">
                                    <LucideIcon name={s.icon} size={18} color="#22d3ee" strokeWidth={2} />
                                </div>
                                <div>
                                    <div className="font-syne font-extrabold text-xl sm:text-2xl leading-none bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
                                        {s.num}
                                    </div>
                                    <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-semibold mt-1">
                                        {s.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ============ FORM + INFO ============ */}
                <section aria-label="Contact Form" className="px-4 sm:px-8 md:px-10 py-12 sm:py-20 md:py-24 bg-[#030f1a]">
                    <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-7 md:gap-10">

                        {/* ===== FORM ===== */}
                        <Reveal direction="left">
                            <div className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 shadow-2xl shadow-cyan-500/5 relative overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 via-cyan-400 to-amber-500 opacity-60" />

                                <div className="flex items-center gap-3 mb-6 sm:mb-7">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-500 to-cyan-400 shadow-lg shadow-cyan-500/30 flex-shrink-0">
                                        <LucideIcon name="Send" size={18} color="#031a2b" strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <h2 className="font-syne font-extrabold text-lg sm:text-xl text-white mb-0.5">
                                            Send Us a Message
                                        </h2>
                                        <p className="text-[11px] sm:text-xs text-gray-400 tracking-wide">
                                            Email + WhatsApp — dono jagah message jayega
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 sm:gap-5">
                                    {formFields.map((f) => (
                                        <div key={f.label}>
                                            <label
                                                htmlFor={`field-${f.name}`}
                                                className="block text-[11px] sm:text-[12.5px] font-semibold mb-1.5 sm:mb-2 tracking-wide text-gray-300 uppercase"
                                            >
                                                <span className="inline mr-1.5 align-middle">
                                                    <LucideIcon name={f.icon} size={11} color="#22d3ee" strokeWidth={2.5} />
                                                </span>
                                                {f.label}
                                            </label>
                                            <input
                                                id={`field-${f.name}`}
                                                type={f.type}
                                                name={f.name}
                                                value={formData[f.name as keyof typeof formData]}
                                                onChange={handleChange}
                                                placeholder={f.placeholder}
                                                disabled={isLoading}
                                                autoComplete={f.name === "name" ? "name" : f.name === "phone" ? "tel" : "email"}
                                                className="w-full rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-sm outline-none transition-all bg-white/5 border border-cyan-500/15 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:bg-white/10 focus:shadow-lg focus:shadow-cyan-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
                                            />
                                        </div>
                                    ))}

                                    <div>
                                        <label
                                            htmlFor="field-service"
                                            className="block text-[11px] sm:text-[12.5px] font-semibold mb-1.5 sm:mb-2 tracking-wide text-gray-300 uppercase"
                                        >
                                            <span className="inline mr-1.5 align-middle">
                                                <LucideIcon name="Target" size={11} color="#22d3ee" strokeWidth={2.5} />
                                            </span>
                                            Service Interest
                                        </label>
                                        <select
                                            id="field-service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                            className="w-full rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-sm outline-none transition-all bg-[#082c44] border border-cyan-500/15 text-gray-200 focus:border-cyan-400 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <option value="">Select your interest...</option>
                                            <optgroup label="🎨 AV EditLab Services">
                                                {editLabServices.map((s) => <option key={s} value={s}>{s}</option>)}
                                            </optgroup>
                                            <optgroup label="🎓 AV Academy Courses">
                                                {academyCourses.map((s) => <option key={s} value={s}>{s}</option>)}
                                            </optgroup>
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="field-message"
                                            className="block text-[11px] sm:text-[12.5px] font-semibold mb-1.5 sm:mb-2 tracking-wide text-gray-300 uppercase"
                                        >
                                            <span className="inline mr-1.5 align-middle">
                                                <LucideIcon name="MessageSquare" size={11} color="#22d3ee" strokeWidth={2.5} />
                                            </span>
                                            Your Message
                                        </label>
                                        <textarea
                                            id="field-message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your project, goals, or questions..."
                                            rows={4}
                                            disabled={isLoading}
                                            className="w-full rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-sm outline-none resize-y transition-all bg-white/5 border border-cyan-500/15 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                    </div>

                                    {status === "success" && (
                                        <div role="alert" aria-live="polite" className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-green-500/20 border border-green-500/40 mt-0.5">
                                                <LucideIcon name="CheckCircle" size={14} color="#4ade80" strokeWidth={2} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-green-400 mb-0.5">Message Sent Successfully! 🎉</p>
                                                <p className="text-xs text-green-400/70">
                                                    Email bhej diya gaya hai. WhatsApp bhi khul gaya hoga — wahan se bhi connect kar sakte ho!
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {status === "error" && (
                                        <div role="alert" aria-live="assertive" className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-red-500/20 border border-red-500/40 mt-0.5">
                                                <LucideIcon name="AlertCircle" size={14} color="#f87171" strokeWidth={2} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-red-400 mb-0.5">Kuch galat ho gaya</p>
                                                <p className="text-xs text-red-400/70">{errorMsg || "Please try again or contact via WhatsApp."}</p>
                                            </div>
                                        </div>
                                    )}

                                    <button
                                        onClick={handleSubmit}
                                        disabled={isLoading || status === "success"}
                                        aria-label="Submit contact form"
                                        className="w-full flex items-center justify-center gap-2 sm:gap-2.5 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-[15px] font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none active:scale-[0.98]"
                                    >
                                        {isLoading ? (
                                            <>
                                                <svg className="animate-spin h-4 w-4 sm:h-[18px] sm:w-[18px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                                </svg>
                                                Sending...
                                            </>
                                        ) : status === "success" ? (
                                            <>
                                                <LucideIcon name="CheckCircle" size={16} color="#031a2b" strokeWidth={2.5} />
                                                Sent Successfully!
                                            </>
                                        ) : (
                                            <>
                                                <LucideIcon name="Send" size={16} color="#031a2b" strokeWidth={2.5} />
                                                Send Message
                                                <LucideIcon name="ArrowRight" size={14} color="#031a2b" strokeWidth={2.5} />
                                            </>
                                        )}
                                    </button>

                                    <p className="text-center text-[10px] sm:text-xs text-gray-500 -mt-1">
                                        Submit karne pe — email aayegi aur WhatsApp bhi open hoga ✨
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        {/* ===== INFO COLUMN ===== */}
                        <Reveal direction="right">
                            <div className="flex flex-col gap-4 sm:gap-5">

                                <address className="not-italic p-5 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 to-amber-500 opacity-60" />
                                    <div className="flex items-center gap-3 mb-5 sm:mb-6">
                                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/30 flex-shrink-0">
                                            <LucideIcon name="Headphones" size={18} color="#22d3ee" strokeWidth={2} />
                                        </div>
                                        <h2 className="font-syne font-bold text-base sm:text-lg text-white">
                                            Contact Information
                                        </h2>
                                    </div>
                                    <div className="flex flex-col gap-3 sm:gap-4">
                                        {contactInfo.map(({ icon, label, value, href }) => (
                                            <a
                                                key={label}
                                                href={href}
                                                target={icon === "MapPin" ? "_blank" : undefined}
                                                rel="noopener noreferrer"
                                                aria-label={`${label}: ${value}`}
                                                className="flex gap-3 items-start p-2.5 -m-2.5 rounded-xl hover:bg-cyan-500/5 transition-all group"
                                            >
                                                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all">
                                                    <LucideIcon name={icon} size={15} color="#22d3ee" strokeWidth={2} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="font-syne font-semibold text-[12px] sm:text-[13.5px] text-amber-400 mb-0.5">
                                                        {label}
                                                    </div>
                                                    <div className="text-[11px] sm:text-[12.5px] leading-relaxed text-gray-400 whitespace-pre-line group-hover:text-gray-300 transition-colors break-words">
                                                        {value}
                                                    </div>
                                                </div>
                                                <span className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1 hidden sm:inline-flex">
                                                    <LucideIcon name="ArrowUpRight" size={13} color="#22d3ee" strokeWidth={2} />
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </address>

                                <div className="p-5 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl text-center bg-gradient-to-br from-green-500/15 to-green-700/10 border border-green-500/30 relative overflow-hidden">
                                    <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-green-500/20 blur-3xl pointer-events-none" />
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 shadow-xl shadow-green-500/30">
                                            <LucideIcon name="MessageCircle" size={22} color="#ffffff" strokeWidth={2.5} />
                                        </div>
                                        <h3 className="font-syne font-bold text-base sm:text-lg text-white mb-1.5 sm:mb-2">
                                            Chat on WhatsApp
                                        </h3>
                                        <p className="text-[12px] sm:text-[13px] text-gray-300 mb-4 sm:mb-5 leading-relaxed">
                                            Get a response within <strong className="text-green-400">1 hour!</strong> Available 24/7 for quick queries.
                                        </p>
                                        <a
                                            href="https://wa.me/917500206719"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Open WhatsApp chat with AV Academy"
                                            className="flex items-center justify-center gap-2 sm:gap-2.5 w-full py-3 sm:py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#25d366] to-[#128c7e] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/40 transition-all font-syne active:scale-[0.98]"
                                        >
                                            <LucideIcon name="MessageCircle" size={16} color="#ffffff" strokeWidth={2.5} />
                                            Open WhatsApp Chat
                                            <LucideIcon name="ArrowRight" size={14} color="#ffffff" strokeWidth={2.5} />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-amber-500/10 to-[#082c44]/80 border border-amber-500/25">
                                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                                        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center bg-amber-500/15 border border-amber-500/30 flex-shrink-0">
                                            <LucideIcon name="Clock" size={16} color="#fbbf24" strokeWidth={2} />
                                        </div>
                                        <h3 className="font-syne font-bold text-sm sm:text-base text-white">
                                            Office Hours
                                        </h3>
                                    </div>
                                    <div className="flex flex-col gap-2 text-[12px] sm:text-[13px]">
                                        <div className="flex justify-between items-center pb-2 border-b border-amber-500/15">
                                            <span className="text-gray-400">Mon – Sat</span>
                                            <span className="text-amber-400 font-semibold">10:00 AM – 8:00 PM</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-2 border-b border-amber-500/15">
                                            <span className="text-gray-400">Sunday</span>
                                            <span className="text-gray-500">By Appointment</span>
                                        </div>
                                        <div className="flex justify-between items-center pt-1">
                                            <span className="text-gray-400">WhatsApp</span>
                                            <span className="text-green-400 font-semibold flex items-center gap-1.5">
                                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                                24/7 Online
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-cyan-500/5 border border-cyan-500/15">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-cyan-500/10 border border-cyan-500/20">
                                        <LucideIcon name="Mail" size={15} color="#22d3ee" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <p className="text-[11.5px] sm:text-[12.5px] font-semibold text-cyan-400 mb-0.5">Email Notification Active</p>
                                        <p className="text-[10.5px] sm:text-[11.5px] text-gray-500 leading-relaxed">
                                            Har inquiry ka email seedha{" "}
                                            <span className="text-gray-400 break-all">avacademy1706@gmail.com</span> pe aata hai
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* ============ MAP SECTION ============ */}
                <section aria-label="Our Location" className="px-4 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 bg-[#061826] border-t border-cyan-500/10">
                    <div className="max-w-[1300px] mx-auto">
                        <Reveal>
                            <div className="text-center mb-7 sm:mb-10">
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-2 sm:mb-3">
                  // Find Us
                                </div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.35rem,3.5vw,2.4rem)] tracking-tight text-white mb-2 sm:mb-3">
                                    Visit Our{" "}
                                    <span className="bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent">
                                        Lucknow Campus
                                    </span>
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-400 max-w-[540px] mx-auto leading-relaxed px-2">
                                    3rd Floor, Sai Tower, Raibareli Rd, near Dental College, Vrindavan Colony, Lucknow
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
                                <iframe
                                    title="AV Academy Lucknow Campus Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6!2d80.9!3d26.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVnJpbmRhdmFuIENvbG9ueSBMdWNrbm93!5e0!3m2!1sen!2sin!4v1700000000000"
                                    width="100%"
                                    height="280"
                                    style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)", display: "block" }}
                                    className="sm:!h-[380px] md:!h-[450px]"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </Reveal>
                    </div>
                </section>

            </main>
            <Footer />
            <WAFloat />
        </>
    );
}