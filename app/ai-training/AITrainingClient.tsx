"use client";
// app/ai-training/AITrainingClient.tsx
// ✅ Sirf UI — fully mobile responsive with Tailwind

import Link from "next/link";
import LucideIcon from "@/components/LucideIcon";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WAFloat from "@/components/WAFloat";
import { Reveal } from "@/components/ScrollReveal";

// ============ TYPES ============
interface AISector {
    id: string;
    icon: string;
    name: string;
    tagline: string;
    modules: string[];
    outcome: string;
    accentHex: string;
}

interface Deliverable {
    icon: string;
    title: string;
    desc: string;
}

// ============ DATA ============
const sectors: AISector[] = [
    {
        id: "real-estate",
        icon: "Building2",
        name: "Real Estate & Property Tech",
        tagline: "Transform Property Business with AI",
        modules: [
            "AI-Powered Lead Generation & CRM Automation",
            "Virtual Property Tour Creation with AI Tools",
            "AI Pricing Analytics & Market Prediction",
            "Chatbot Integration for 24/7 Client Engagement",
            "AI-Assisted Contract & Document Management",
            "Social Media AI for Property Marketing",
        ],
        outcome: "Agents & builders close deals 40% faster using AI-powered lead follow-up and virtual showcase tools.",
        accentHex: "#22d3ee",
    },
    {
        id: "government",
        icon: "Landmark",
        name: "Government & Public Services",
        tagline: "Modernize Governance with AI",
        modules: [
            "AI for Citizen Service Automation & Helpdesks",
            "Smart Grievance Redressal AI Systems",
            "AI-Powered Public Scheme Communication",
            "Data Analytics for Policy Decision Making",
            "AI Chatbots for Government Portals (Hindi + English)",
            "Fraud Detection & Compliance Monitoring",
        ],
        outcome: "Government departments report 60% faster citizen query resolution and improved public communication.",
        accentHex: "#fbbf24",
    },
    {
        id: "healthcare",
        icon: "Heart",
        name: "Healthcare & Medical",
        tagline: "AI-Powered Healthcare Transformation",
        modules: [
            "AI Basics for Healthcare Professionals",
            "Medical Imaging AI & Diagnostic Assistance",
            "Patient Scheduling & Hospital Operations AI",
            "AI Tools for Medical Report Summarization",
            "Telemedicine AI & Remote Patient Monitoring",
            "Healthcare Data Privacy & AI Ethics",
        ],
        outcome: "Medical teams reduce administrative workload by 50%, freeing time for actual patient care.",
        accentHex: "#34d399",
    },
    {
        id: "police",
        icon: "ShieldCheck",
        name: "Police & Security Forces",
        tagline: "Smart Policing with AI Intelligence",
        modules: [
            "AI Fundamentals for Law Enforcement",
            "Predictive Policing & Crime Pattern Analytics",
            "AI-Assisted Surveillance & Monitoring Tools",
            "Digital Evidence Management with AI",
            "Cybercrime Detection & Prevention AI",
            "AI for Traffic Management & Public Safety",
        ],
        outcome: "Police forces equipped with AI analytics improve crime detection and optimize resource deployment.",
        accentHex: "#a78bfa",
    },
    {
        id: "education",
        icon: "GraduationCap",
        name: "Education & Universities",
        tagline: "AI-Powered Learning Revolution",
        modules: [
            "AI Tools for Teachers & Educators (ChatGPT, Gemini)",
            "Creating AI-Enhanced Learning Materials",
            "Personalized Learning Platforms with AI",
            "AI-Based Student Assessment & Feedback",
            "EdTech Platform Integration & Management",
            "Digital Content Creation with AI for Classrooms",
        ],
        outcome: "Teachers create more engaging content in 70% less time and deliver personalized learning at scale.",
        accentHex: "#f472b6",
    },
    {
        id: "welfare",
        icon: "HandHeart",
        name: "Social Welfare & NGOs",
        tagline: "AI for Social Impact & Outreach",
        modules: [
            "AI for Beneficiary Identification & Targeting",
            "Smart Scheme Delivery Monitoring with AI",
            "AI-Powered Field Data Collection & Analysis",
            "Chatbots for Rural & Multi-Language Outreach",
            "AI Impact Measurement & Reporting Tools",
            "Grant Writing Assistance with AI",
        ],
        outcome: "NGOs reach 3x more beneficiaries with the same team size through smart automation.",
        accentHex: "#facc15",
    },
];

const deliverables: Deliverable[] = [
    { icon: "BookOpen", title: "Customized Curriculum", desc: "Built around your organization's specific workflows, tools, and goals." },
    { icon: "Languages", title: "Bilingual Delivery", desc: "Training in English, Hindi, or regional languages as required." },
    { icon: "Wrench", title: "Hands-On Workshops", desc: "Real tools, real simulations, real use cases — not just theory." },
    { icon: "Award", title: "Certification", desc: "AV EditLab certificates for all participants + ongoing mentorship." },
    { icon: "Bot", title: "AI Platform Deployment", desc: "We can build AI chatbots and smart portals for your organization." },
    { icon: "Lock", title: "Data Privacy Compliant", desc: "All training and tools comply with government security norms." },
];

const trainingStats = [
    { num: "6+", label: "Industry Sectors", icon: "Briefcase" },
    { num: "500+", label: "Officials Trained", icon: "Users" },
    { num: "100%", label: "Customized Plans", icon: "Settings" },
    { num: "1hr-3M", label: "Program Duration", icon: "Clock" },
];

const programs = [
    {
        icon: "Zap",
        duration: "1 Day",
        title: "Quick Workshop",
        desc: "Introductory AI awareness session for leadership teams. Perfect for getting started.",
        features: ["Live demos", "Q&A session", "Certificate of attendance"],
        highlight: false,
    },
    {
        icon: "Star",
        duration: "2 Weeks",
        title: "Intensive Program",
        desc: "Hands-on training with practical assignments. Most popular for department teams.",
        features: ["Daily 2-hr sessions", "Real project work", "Group + individual mentoring", "Industry certification"],
        highlight: true,
    },
    {
        icon: "Trophy",
        duration: "3 Months",
        title: "Complete Transformation",
        desc: "Full organizational AI transformation including platform deployment.",
        features: ["Weekly workshops", "AI tools deployment", "Custom chatbots built", "Long-term support"],
        highlight: false,
    },
];

// ============ COMPONENT ============
export default function AITrainingClient() {
    return (
        <>
            <Navbar />
            <main className="bg-[#030f1a]">

                {/* ============ HERO ============ */}
                <section className="relative pt-28 sm:pt-36 pb-14 sm:pb-16 px-4 sm:px-8 md:px-10 text-center overflow-hidden border-b border-cyan-500/15 bg-gradient-to-br from-[#061826] via-[#0a2436] to-[#061826]">
                    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[260px] sm:w-[460px] md:w-[600px] h-[160px] sm:h-[240px] md:h-[300px] rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
                    <div className="absolute top-[30%] left-[4%] w-28 sm:w-44 md:w-52 h-28 sm:h-44 md:h-52 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-[10%] right-[5%] w-32 sm:w-48 md:w-60 h-32 sm:h-48 md:h-60 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
                    <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,180,216,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,180,216,.04) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

                    <div className="relative z-10 max-w-[1000px] mx-auto">
                        <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[2px] uppercase mb-4 sm:mb-5 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 shadow-[0_0_30px_rgba(0,180,216,0.2)]">
                            <LucideIcon name="Bot" size={11} color="#22d3ee" strokeWidth={2} />
                            AV EditLab · Corporate AI Training
                        </span>

                        <h1 className="font-syne font-extrabold text-[clamp(1.7rem,4.5vw,2.8rem)] leading-[1.1] tracking-tight mb-4 text-white">
                            AI Training &amp; Digital Engagement{" "}
                            <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
                                for Every Industry
                            </span>
                        </h1>

                        <p className="text-sm sm:text-base text-gray-400 max-w-[620px] mx-auto mb-5 sm:mb-6 leading-relaxed px-1">
                            Empowering organizations through applied AI and smart platforms — customized, sector-specific training programs designed for real-world impact.
                        </p>

                        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-5 sm:mb-6">
                            <a
                                href="https://wa.me/917500206719"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-[12.5px] sm:text-[13px] font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all active:scale-[0.98]"
                            >
                                <LucideIcon name="MessageCircle" size={13} color="#031a2b" strokeWidth={2.5} />
                                Request Custom Proposal
                            </a>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-[12.5px] sm:text-[13px] font-syne tracking-wide bg-transparent border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all active:scale-[0.98]"
                            >
                                <LucideIcon name="Mail" size={13} color="#22d3ee" strokeWidth={2.5} />
                                Send a Brief
                            </Link>
                        </div>

                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb">
                            <ol className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-[12px] text-gray-500 px-4 py-2 rounded-full bg-[#082c44]/60 border border-cyan-500/15 list-none m-0">
                                <li className="inline-flex items-center px-1">
                                    <Link href="/" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">Home</Link>
                                </li>
                                <li className="inline-flex items-center" aria-hidden="true">
                                    <LucideIcon name="ChevronRight" size={11} color="#6b7280" />
                                </li>
                                <li className="inline-flex items-center px-1">
                                    <span className="text-gray-300" aria-current="page">AI Training</span>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </section>

                {/* ============ STATS BAR ============ */}
                <section aria-label="Training Stats" className="px-4 sm:px-8 md:px-10 py-7 sm:py-10 bg-[#061826] border-b border-cyan-500/10">
                    <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                        {trainingStats.map((s) => (
                            <div
                                key={s.label}
                                className="flex items-center gap-3 sm:gap-4 px-3.5 sm:px-5 py-4 sm:py-5 rounded-2xl bg-gradient-to-br from-[#082c44]/80 to-[#030f1a]/90 border border-cyan-500/15 hover:border-cyan-500/40 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-cyan-500/20 to-cyan-400/5 border border-cyan-500/30">
                                    <LucideIcon name={s.icon} size={18} color="#22d3ee" strokeWidth={2} />
                                </div>
                                <div>
                                    <div className="font-syne font-extrabold text-xl sm:text-2xl leading-none bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">{s.num}</div>
                                    <div className="text-[9px] sm:text-[11px] text-gray-400 uppercase tracking-wider font-semibold mt-1">{s.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ============ WHY NOW ============ */}
                <section className="px-4 sm:px-8 md:px-10 py-14 sm:py-20 md:py-24 bg-[#030f1a]">
                    <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <Reveal direction="left">
                            <div>
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Why AI Training Now</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.7rem,3.2vw,2.8rem)] leading-[1.1] tracking-tight text-white mb-4 sm:mb-5">
                                    Every Organization Needs{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">AI-Ready Teams. Now.</span>
                                </h2>
                                <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-3 sm:mb-4">
                                    AI is no longer optional. Whether you&apos;re a government department, hospital, builder, or educator — your teams need practical AI skills to stay competitive, serve better, and operate smarter.
                                </p>
                                <p className="text-sm sm:text-[15px] text-gray-400 leading-relaxed mb-6 sm:mb-7">
                                    AV EditLab delivers <strong className="text-cyan-400">customized, sector-specific AI training</strong> — not generic IT workshops. We speak <strong className="text-amber-400">your industry language</strong>.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-sm font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all active:scale-[0.98]"
                                >
                                    Request a Custom Proposal
                                    <LucideIcon name="ArrowRight" size={15} color="#031a2b" strokeWidth={2.5} />
                                </Link>
                            </div>
                        </Reveal>

                        <Reveal direction="right">
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                {deliverables.slice(0, 4).map((d) => (
                                    <div
                                        key={d.title}
                                        className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#082c44]/80 to-[#030f1a]/90 border border-cyan-500/15 hover:border-cyan-500/40 hover:-translate-y-1 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group"
                                    >
                                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mb-3 bg-gradient-to-br from-cyan-500/20 to-cyan-400/5 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                                            <LucideIcon name={d.icon} size={18} color="#22d3ee" strokeWidth={2} />
                                        </div>
                                        <div className="font-syne font-bold text-[12.5px] sm:text-sm text-amber-400 mb-1 tracking-tight">{d.title}</div>
                                        <p className="text-[11px] sm:text-xs leading-relaxed text-gray-400">{d.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* ============ SECTOR CARDS ============ */}
                <section className="relative px-4 sm:px-8 md:px-10 py-14 sm:py-20 md:py-24 bg-[#061826] overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[300px] sm:h-[600px] rounded-full bg-cyan-500/[0.03] blur-3xl pointer-events-none" />

                    <div className="max-w-[1280px] mx-auto relative z-10">
                        <Reveal>
                            <div className="text-center mb-10 sm:mb-14">
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Sector-Specific Programs</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.6rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-3 sm:mb-4">
                                    AI Training by{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Industry</span>
                                </h2>
                                <p className="text-sm sm:text-[15px] text-gray-400 max-w-[620px] mx-auto leading-relaxed px-2">
                                    6 industry-specific programs, each with tailored modules, real-world tools, and measurable outcomes.
                                </p>
                            </div>
                        </Reveal>

                        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
                            {sectors.map((s, i) => (
                                <Reveal key={s.id} delay={i * 80}>
                                    <div
                                        id={s.id}
                                        className="h-full p-5 sm:p-7 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border transition-all hover:-translate-y-1 sm:hover:-translate-y-1.5 hover:shadow-2xl relative overflow-hidden group"
                                        style={{ borderColor: `${s.accentHex}30` }}
                                    >
                                        {/* Top accent line */}
                                        <div className="absolute top-0 left-0 right-0 h-[3px] opacity-60" style={{ background: `linear-gradient(90deg, ${s.accentHex}, #fbbf24)` }} />
                                        {/* Hover glow */}
                                        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none" style={{ background: `${s.accentHex}25` }} />

                                        {/* Header */}
                                        <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5 relative z-10">
                                            <div
                                                className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-2xl flex items-center justify-center border"
                                                style={{ background: `${s.accentHex}15`, borderColor: `${s.accentHex}40`, boxShadow: `0 8px 20px ${s.accentHex}20` }}
                                            >
                                                <LucideIcon name={s.icon} size={24} color={s.accentHex} strokeWidth={2} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-syne font-extrabold text-base sm:text-xl text-white mb-1 leading-tight">{s.name}</h3>
                                                <p className="text-[12px] sm:text-[13px] font-semibold tracking-wide" style={{ color: s.accentHex }}>{s.tagline}</p>
                                            </div>
                                        </div>

                                        <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[2px] text-gray-500 mb-2 sm:mb-3 relative z-10">Training Modules</p>

                                        <ul className="mb-4 sm:mb-5 space-y-1.5 sm:space-y-2 relative z-10">
                                            {s.modules.map((mod) => (
                                                <li key={mod} className="flex items-start gap-2 sm:gap-2.5 text-[12px] sm:text-[13px] text-gray-300 leading-relaxed">
                                                    <span className="flex-shrink-0 mt-0.5">
                                                        <LucideIcon name="CheckCircle2" size={13} color={s.accentHex} strokeWidth={2.5} />
                                                    </span>
                                                    <span>{mod}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div
                                            className="flex items-start gap-2 sm:gap-2.5 rounded-xl p-3 sm:p-3.5 text-[12px] sm:text-[13px] leading-relaxed relative z-10 border"
                                            style={{ background: `${s.accentHex}10`, borderColor: `${s.accentHex}30` }}
                                        >
                                            <span className="flex-shrink-0 mt-0.5">
                                                <LucideIcon name="Lightbulb" size={14} color={s.accentHex} strokeWidth={2.5} />
                                            </span>
                                            <span className="text-gray-300">
                                                <strong className="text-white">Outcome:</strong> {s.outcome}
                                            </span>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============ DELIVERABLES ============ */}
                <section className="px-4 sm:px-8 md:px-10 py-14 sm:py-20 md:py-24 bg-[#030f1a]">
                    <div className="max-w-[1240px] mx-auto">
                        <Reveal>
                            <div className="text-center mb-10 sm:mb-14">
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// What You Get</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.6rem,3vw,2.8rem)] leading-tight tracking-tight text-white mb-3 sm:mb-4">
                                    Complete AI Training{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Package</span>
                                </h2>
                                <p className="text-sm sm:text-[15px] text-gray-400 max-w-[580px] mx-auto leading-relaxed px-2">
                                    Everything your organization needs to deploy AI successfully — from curriculum to certification to live tools.
                                </p>
                            </div>
                        </Reveal>

                        <div className="grid gap-3 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            {deliverables.map((d, i) => (
                                <Reveal key={d.title} delay={i * 60}>
                                    <div className="flex gap-3 sm:gap-4 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/15 hover:border-cyan-500/40 hover:-translate-y-1 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group h-full">
                                        <div className="w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-cyan-400/5 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                                            <LucideIcon name={d.icon} size={20} color="#22d3ee" strokeWidth={2} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="font-syne font-bold text-sm sm:text-base text-amber-400 mb-1 sm:mb-1.5 tracking-tight">{d.title}</div>
                                            <p className="text-[12px] sm:text-[13px] leading-relaxed text-gray-400">{d.desc}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============ PROGRAM DURATION ============ */}
                <section className="relative px-4 sm:px-8 md:px-10 py-14 sm:py-20 md:py-24 bg-[#061826] overflow-hidden">
                    <div className="absolute top-0 right-0 w-60 sm:w-96 h-60 sm:h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-60 sm:w-96 h-60 sm:h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

                    <div className="max-w-[1240px] mx-auto relative z-10">
                        <Reveal>
                            <div className="text-center mb-10 sm:mb-14">
                                <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">// Flexible Programs</div>
                                <h2 className="font-syne font-extrabold text-[clamp(1.5rem,3vw,2.6rem)] leading-tight tracking-tight text-white mb-3 sm:mb-4">
                                    From{" "}
                                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">1-Day Workshops</span>{" "}
                                    to{" "}
                                    <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">3-Month Programs</span>
                                </h2>
                                <p className="text-sm sm:text-[15px] text-gray-400 max-w-[580px] mx-auto leading-relaxed px-2">
                                    Choose the format that fits your team&apos;s schedule and depth of learning required.
                                </p>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                            {programs.map((p) => (
                                <Reveal key={p.title}>
                                    <div
                                        className={`relative h-full p-6 sm:p-7 rounded-3xl border transition-all hover:-translate-y-1 sm:hover:-translate-y-1.5 ${p.highlight
                                                ? "bg-gradient-to-br from-cyan-500/15 to-[#082c44]/90 border-cyan-500/50 shadow-2xl shadow-cyan-500/20"
                                                : "bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border-cyan-500/15 hover:border-cyan-500/40"
                                            }`}
                                    >
                                        {p.highlight && (
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-[#1a1a1a] whitespace-nowrap">
                                                Most Popular
                                            </div>
                                        )}

                                        <div className={`w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-5 rounded-2xl flex items-center justify-center ${p.highlight ? "bg-gradient-to-br from-cyan-500 to-cyan-400" : "bg-cyan-500/15 border border-cyan-500/30"}`}>
                                            <LucideIcon name={p.icon} size={22} color={p.highlight ? "#031a2b" : "#22d3ee"} strokeWidth={2.5} />
                                        </div>

                                        <div className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-amber-400 mb-1.5 sm:mb-2">{p.duration}</div>
                                        <h3 className="font-syne font-extrabold text-lg sm:text-xl text-white mb-2 sm:mb-3">{p.title}</h3>
                                        <p className="text-[12.5px] sm:text-[13.5px] text-gray-400 leading-relaxed mb-4 sm:mb-5">{p.desc}</p>

                                        <ul className="space-y-1.5 sm:space-y-2 pt-4 sm:pt-5 border-t border-cyan-500/15">
                                            {p.features.map((f) => (
                                                <li key={f} className="flex items-start gap-2 text-[12px] sm:text-[13px] text-gray-300">
                                                    <div className="flex-shrink-0 mt-0.5">
                                                        <LucideIcon name="Check" size={13} color="#22d3ee" strokeWidth={3} />
                                                    </div>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============ FINAL CTA ============ */}
                <section className="relative px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#030f1a] via-[#0a2436] to-[#030f1a] text-center overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[260px] sm:w-[460px] md:w-[600px] h-[160px] sm:h-[240px] md:h-[300px] bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />
                    <div className="absolute bottom-0 left-1/4 w-40 sm:w-60 md:w-72 h-40 sm:h-60 md:h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

                    <div className="max-w-[900px] mx-auto relative z-10">
                        <Reveal>
                            <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-[2px] uppercase mb-5 sm:mb-6 bg-amber-500/10 border border-amber-500/40 text-amber-400">
                                <LucideIcon name="Rocket" size={12} color="#fbbf24" strokeWidth={2} />
                                Ready to Get Started?
                            </span>

                            <h2 className="font-syne font-extrabold text-[clamp(1.8rem,4vw,3.2rem)] leading-tight tracking-tight text-white mb-4 sm:mb-5">
                                Ready to Train{" "}
                                <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">Your Team?</span>
                            </h2>
                            <p className="text-sm sm:text-base text-gray-400 max-w-[620px] mx-auto mb-7 sm:mb-9 leading-relaxed px-1">
                                Starting from a 1-day workshop to a comprehensive 3-month program — we design every aspect for your organization&apos;s unique needs.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-7">
                                <a
                                    href="https://wa.me/917500206719"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-[15px] font-syne tracking-wide bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/40 transition-all active:scale-[0.98]"
                                >
                                    <LucideIcon name="MessageCircle" size={16} color="#ffffff" strokeWidth={2.5} />
                                    WhatsApp for Quick Discussion
                                </a>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-[15px] font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all active:scale-[0.98]"
                                >
                                    <LucideIcon name="Mail" size={16} color="#031a2b" strokeWidth={2.5} />
                                    Send Us a Brief
                                    <LucideIcon name="ArrowRight" size={14} color="#031a2b" strokeWidth={2.5} />
                                </Link>
                            </div>

                            <div className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-6 gap-y-2 text-[11.5px] sm:text-[13px] text-gray-500">
                                <div className="flex items-center gap-1.5">
                                    <LucideIcon name="Phone" size={12} color="#22d3ee" strokeWidth={2} />
                                    <span className="text-gray-400">+91-7500206719</span>
                                </div>
                                <div className="hidden sm:block text-gray-700">·</div>
                                <div className="flex items-center gap-1.5">
                                    <LucideIcon name="Mail" size={12} color="#22d3ee" strokeWidth={2} />
                                    <span className="text-gray-400 break-all sm:break-normal">avacademy1706@gmail.com</span>
                                </div>
                                <div className="hidden sm:block text-gray-700">·</div>
                                <div className="flex items-center gap-1.5">
                                    <LucideIcon name="MapPin" size={12} color="#22d3ee" strokeWidth={2} />
                                    <span className="text-gray-400">Serving UP &amp; India</span>
                                </div>
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