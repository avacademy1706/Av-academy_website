// "use client";
// import LucideIcon from "@/components/LucideIcon";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WAFloat from "@/components/WAFloat";
// import { CTASection } from "@/components/PageSections";
// import { Reveal } from "@/components/ScrollReveal";
// import { SITE_CONTENT } from "@/lib/siteContent";

// const diffs = SITE_CONTENT.whyUs;

// export default function AboutPage() {
//   return (
//     <>
//       <Navbar />
//       <main>
//         {/* HERO */}
//         <section style={{
//           minHeight: "42vh", display: "flex", alignItems: "center",
//           justifyContent: "center", paddingTop: "110px", paddingBottom: "60px",
//           padding: "110px 40px 60px", textAlign: "center",
//           position: "relative", overflow: "hidden",
//           background: "linear-gradient(160deg,var(--bg2),var(--bg3))"
//         }}>
//           <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(0,180,216,.12) 0%,transparent 65%)" }} />
//           <div style={{ position: "relative", zIndex: 1 }}>
//             <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "4px", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px", background: "rgba(0,180,216,.1)", border: "1px solid rgba(0,180,216,.3)", color: "var(--cyan2)" }}>
//               Our Story
//             </span>
//             <h1 className="font-syne" style={{ fontWeight: 800, fontSize: "clamp(2rem,5vw,3.5rem)", lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "14px" }}>
//               Why Partner With{" "}
//               <span className="grad-cyan">AV EditLab?</span>
//             </h1>
//             <p style={{ fontSize: "16px", color: "var(--cyan3)", fontWeight: 500, letterSpacing: ".5px" }}>
//               Because Your Vision Deserves The Best
//             </p>
//           </div>
//         </section>

//         {/* MAIN CONTENT */}
//         <section style={{ padding: "80px 40px", background: "var(--bg2)" }}>
//           <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "60px", alignItems: "start" }}>

//             {/* LEFT — AV BOX + STATS */}
//             <Reveal direction="left">
//               {/* AV Box */}
//               <div style={{
//                 borderRadius: "24px", padding: "50px 30px",
//                 display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
//                 position: "relative", overflow: "hidden", marginBottom: "20px",
//                 background: "linear-gradient(145deg,rgba(8,28,44,.9),rgba(3,14,22,.95))",
//                 border: "1px solid rgba(0,180,216,.2)",
//                 boxShadow: "0 0 60px rgba(0,180,216,.08)",
//               }}>
//                 {/* Rotating glow */}
//                 <div className="about-rotate" style={{
//                   position: "absolute", inset: 0,
//                   background: "conic-gradient(transparent 30%,rgba(0,180,216,.06) 40%,transparent 50%)",
//                   pointerEvents: "none",
//                 }} />
//                 {/* Border glow */}
//                 <div style={{
//                   position: "absolute", inset: "-1px", borderRadius: "24px",
//                   background: "linear-gradient(135deg,rgba(0,180,216,.3),transparent,rgba(34,211,238,.15))",
//                   zIndex: -1,
//                 }} />

//                 <span className="font-syne grad-cyan" style={{
//                   fontWeight: 800, fontSize: "80px", lineHeight: 1,
//                   letterSpacing: "-4px", position: "relative", zIndex: 1,
//                 }}>AV</span>
//                 <span style={{
//                   fontSize: "11px", color: "var(--amber2)", letterSpacing: "4px",
//                   fontWeight: 700, marginTop: "8px", position: "relative", zIndex: 1,
//                   textTransform: "uppercase",
//                 }}>EDITLAB & ACADEMY</span>
//               </div>

//               {/* Stats Grid */}
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
//                 {[
//                   { n: "100+", l: "Clients" },
//                   { n: "1000+", l: "Projects" },
//                   { n: "5+", l: "Years" },
//                   { n: "8+", l: "Industries" },
//                 ].map(({ n, l }) => (
//                   <div key={l} style={{
//                     textAlign: "center", padding: "22px 16px", borderRadius: "14px",
//                     background: "rgba(0,180,216,.06)", border: "1px solid rgba(0,180,216,.14)",
//                     transition: "all .3s",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.35)"; el.style.background = "rgba(0,180,216,.1)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.14)"; el.style.background = "rgba(0,180,216,.06)"; }}>
//                     <div className="font-syne grad-amber" style={{ fontWeight: 800, fontSize: "2rem", lineHeight: 1, letterSpacing: "-1px" }}>{n}</div>
//                     <div style={{ fontSize: "11px", color: "var(--gray)", marginTop: "6px", textTransform: "uppercase", letterSpacing: ".5px" }}>{l}</div>
//                   </div>
//                 ))}
//               </div>
//             </Reveal>

//             {/* RIGHT — DIFFERENTIATORS */}
//             <Reveal direction="right">
//               <div className="sec-label">What Makes Us Different</div>
//               <h2 className="font-syne" style={{
//                 fontWeight: 800, fontSize: "clamp(1.8rem,3vw,2.6rem)",
//                 letterSpacing: "-1px", marginBottom: "32px", lineHeight: 1.1,
//               }}>
//                 Built Different.{" "}
//                 <span className="grad-cyan">Built Better.</span>
//               </h2>

//               <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
//                 {diffs.map((d) => (
//                   <div key={d.title} style={{
//                     display: "flex", gap: "16px", alignItems: "flex-start",
//                     padding: "18px 20px", borderRadius: "16px",
//                     background: "rgba(8,28,44,.5)", border: "1px solid rgba(0,180,216,.1)",
//                     transition: "all .3s",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.3)"; el.style.background = "rgba(8,28,44,.9)"; el.style.transform = "translateX(4px)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.1)"; el.style.background = "rgba(8,28,44,.5)"; el.style.transform = ""; }}>
//                     <div style={{
//                       width: "46px", height: "46px", borderRadius: "12px", flexShrink: 0,
//                       background: "rgba(0,180,216,.1)", border: "1px solid rgba(0,180,216,.2)",
//                       display: "flex", alignItems: "center", justifyContent: "center", color: "var(--cyan2)",
//                     }}>
//                       <LucideIcon name={d.iconName} size={20} color="var(--cyan2)" strokeWidth={1.5} />
//                     </div>
//                     <div>
//                       <h4 className="font-syne" style={{ fontWeight: 700, fontSize: "15px", color: "var(--amber2)", marginBottom: "5px" }}>{d.title}</h4>
//                       <p style={{ fontSize: "13.5px", color: "var(--gray2)", lineHeight: 1.65 }}>{d.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </Reveal>
//           </div>
//         </section>

//         <CTASection title="Ready to" highlight="Get Started?" desc="Let's create something amazing together that drives real business growth." />
//       </main>
//       <Footer />
//       <WAFloat />
//     </>
//   );
// }


// "use client";
// import LucideIcon from "@/components/LucideIcon";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WAFloat from "@/components/WAFloat";
// import { CTASection } from "@/components/PageSections";
// import { Reveal } from "@/components/ScrollReveal";
// import Link from "next/link";

// const aboutFeatures = [
//   { icon: "Sparkles", title: "Creativity and Innovation", desc: "Fresh ideas that push creative boundaries" },
//   { icon: "Users", title: "Client-Centricity", desc: "Your vision, our priority — always" },
//   { icon: "ShieldCheck", title: "Integrity and Transparency", desc: "Honest collaboration at every step" },
//   { icon: "Award", title: "Excellence and Quality", desc: "Premium output, no compromises" },
// ];

// const visionPoints = [
//   { icon: "BookOpen", title: "Industry-Ready Curriculum", desc: "Updated with latest market demands" },
//   { icon: "Wrench", title: "Hands-on Live Projects", desc: "Real work, real portfolio building" },
//   { icon: "GraduationCap", title: "Expert Mentorship", desc: "Learn from working professionals" },
//   { icon: "TrendingUp", title: "Career Transformation", desc: "From learner to industry professional" },
// ];

// const missionPoints = [
//   { icon: "Rocket", title: "Future-Proof Learning", desc: "AI-integrated training that stays relevant" },
//   { icon: "Target", title: "Practical Mastery", desc: "Skill-based modules, not just theory" },
//   { icon: "HeartHandshake", title: "Mentorship & Support", desc: "We walk with you, not just teach" },
//   { icon: "TrendingUp", title: "Growth & Excellence", desc: "Measurable progress every step" },
// ];

// const stats = [
//   { num: "1000+", label: "Projects Completed", icon: "Briefcase" },
//   { num: "5+", label: "Years of Experience", icon: "Calendar" },
//   { num: "100+", label: "Happy Clients", icon: "Users" },
//   { num: "98%", label: "Client Satisfaction", icon: "Heart" },
// ];

// const trustedBrands = [
//   "Grapess", "Tour4YOU", "Diabeto India", "Madhurveda",
//   "Sai Paradise", "TechGrow", "Aura Skincare",
// ];

// const whyChooseUs = [
//   { icon: "Factory", title: "Industry Expertise", desc: "5+ years serving 8+ industries with proven creative solutions and strategic insights." },
//   { icon: "Sparkles", title: "AI-Integrated Approach", desc: "Latest AI tools combined with human creativity for faster, smarter, better results." },
//   { icon: "RefreshCw", title: "End-to-End Service", desc: "From concept to delivery — graphics, video, 3D, marketing — all under one roof." },
//   { icon: "Zap", title: "Fast Turnaround", desc: "Quick delivery without compromising on quality. Deadlines met, every time." },
//   { icon: "Trophy", title: "Award-Winning Quality", desc: "Premium output that wins awards and drives measurable business growth." },
//   { icon: "Users", title: "Dedicated Team", desc: "Personal account managers, expert designers, and 24/7 support for every project." },
// ];

// export default function AboutPage() {
//   return (
//     <>
//       <Navbar />
//       <main>
//         {/* ============ HERO ============ */}
//         <section className="relative overflow-hidden" style={{
//           paddingTop: "140px", paddingBottom: "80px", padding: "140px 40px 80px",
//           background: "linear-gradient(160deg,var(--bg2) 0%,var(--bg3) 60%,var(--bg2) 100%)",
//           textAlign: "center",
//         }}>
//           {/* Background decoration */}
//           <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center top,rgba(0,180,216,.15) 0%,transparent 70%)", pointerEvents: "none" }} />
//           <div style={{ position: "absolute", top: "20%", left: "8%", width: "180px", height: "180px", borderRadius: "50%", background: "radial-gradient(circle,rgba(0,180,216,.08),transparent)", filter: "blur(40px)" }} />
//           <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "220px", height: "220px", borderRadius: "50%", background: "radial-gradient(circle,rgba(245,158,11,.06),transparent)", filter: "blur(50px)" }} />

//           <div style={{ position: "relative", zIndex: 1, maxWidth: "1000px", margin: "0 auto" }}>
//             <span style={{
//               display: "inline-flex", alignItems: "center", gap: "8px",
//               padding: "8px 20px", borderRadius: "100px",
//               fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//               textTransform: "uppercase", marginBottom: "24px",
//               background: "rgba(0,180,216,.1)",
//               border: "1px solid rgba(0,180,216,.3)",
//               color: "var(--cyan2)",
//             }}>
//               <LucideIcon name="Sparkles" size={14} color="var(--cyan2)" strokeWidth={2} />
//               Our Story
//             </span>

//             <h1 className="font-syne" style={{
//               fontWeight: 800, fontSize: "clamp(2.5rem,6vw,4.5rem)",
//               lineHeight: 1.05, letterSpacing: "-2px", marginBottom: "20px",
//             }}>
//               About Our{" "}
//               <span className="grad-cyan">Journey</span>
//             </h1>

//             <p style={{ fontSize: "18px", color: "var(--gray)", maxWidth: "640px", margin: "0 auto 24px", lineHeight: 1.7 }}>
//               A team of creative thinkers transforming ideas into compelling visual stories that drive real business growth.
//             </p>

//             {/* Breadcrumb */}
//             <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "var(--gray2)" }}>
//               <Link href="/" style={{ color: "var(--cyan2)", textDecoration: "none", transition: "color .2s" }}>Home</Link>
//               <LucideIcon name="ChevronRight" size={14} color="var(--gray2)" />
//               <span>About Us</span>
//             </div>
//           </div>
//         </section>

//         {/* ============ ABOUT — A TEAM OF CREATIVE THINKERS ============ */}
//         <section style={{ padding: "100px 40px", background: "var(--bg)" }}>
//           <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "70px", alignItems: "center" }}>
//             {/* LEFT — Image with floating accents */}
//             <Reveal direction="left">
//               <div style={{ position: "relative" }}>
//                 {/* Main visual */}
//                 <div style={{
//                   position: "relative",
//                   borderRadius: "24px",
//                   overflow: "hidden",
//                   aspectRatio: "4/5",
//                   background: "linear-gradient(145deg,rgba(8,28,44,.95),rgba(3,14,22,.98))",
//                   border: "1px solid rgba(0,180,216,.2)",
//                   boxShadow: "0 25px 60px rgba(0,180,216,.15)",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   padding: "40px",
//                 }}>
//                   {/* Animated glow ring */}
//                   <div className="about-rotate" style={{
//                     position: "absolute", inset: "-20%",
//                     background: "conic-gradient(transparent 0%,rgba(0,180,216,.15) 25%,transparent 50%,rgba(245,158,11,.1) 75%,transparent 100%)",
//                     pointerEvents: "none",
//                   }} />

//                   {/* Center content */}
//                   <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
//                     <div style={{
//                       width: "110px", height: "110px", margin: "0 auto 20px",
//                       borderRadius: "50%",
//                       background: "linear-gradient(135deg,var(--cyan1),var(--cyan2))",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                       boxShadow: "0 0 50px rgba(0,180,216,.4)",
//                     }}>
//                       <LucideIcon name="Palette" size={48} color="#031a2b" strokeWidth={2} />
//                     </div>
//                     <h3 className="font-syne grad-cyan" style={{ fontWeight: 800, fontSize: "3.5rem", lineHeight: 1, letterSpacing: "-2px", marginBottom: "8px" }}>AV</h3>
//                     <p style={{ fontSize: "11px", letterSpacing: "4px", color: "var(--amber2)", fontWeight: 700, textTransform: "uppercase", marginBottom: "20px" }}>EditLab & Academy</p>
//                     <div style={{ width: "60px", height: "2px", background: "var(--cyan2)", margin: "0 auto 20px", opacity: .5 }} />
//                     <p style={{ fontSize: "13px", color: "var(--gray)", lineHeight: 1.7, maxWidth: "260px", margin: "0 auto" }}>
//                       Lucknow's premier creative studio &amp; training academy
//                     </p>
//                   </div>
//                 </div>

//                 {/* Floating badge - top right */}
//                 <div style={{
//                   position: "absolute", top: "-20px", right: "-20px",
//                   padding: "14px 20px", borderRadius: "16px",
//                   background: "linear-gradient(135deg,var(--amber1),var(--amber2))",
//                   color: "#0a0a0a", fontWeight: 800, fontSize: "13px",
//                   boxShadow: "0 12px 30px rgba(245,158,11,.3)",
//                   display: "flex", alignItems: "center", gap: "8px",
//                   letterSpacing: ".5px",
//                 }}>
//                   <LucideIcon name="Award" size={16} color="#0a0a0a" strokeWidth={2.5} />
//                   5+ Years
//                 </div>

//                 {/* Floating badge - bottom left */}
//                 <div style={{
//                   position: "absolute", bottom: "30px", left: "-30px",
//                   padding: "16px 22px", borderRadius: "16px",
//                   background: "rgba(8,28,44,.95)",
//                   border: "1px solid rgba(0,180,216,.3)",
//                   backdropFilter: "blur(10px)",
//                   display: "flex", alignItems: "center", gap: "12px",
//                   boxShadow: "0 12px 30px rgba(0,0,0,.4)",
//                 }}>
//                   <div style={{
//                     width: "40px", height: "40px", borderRadius: "10px",
//                     background: "rgba(0,180,216,.15)",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                   }}>
//                     <LucideIcon name="Users" size={20} color="var(--cyan2)" strokeWidth={2} />
//                   </div>
//                   <div>
//                     <div className="font-syne grad-cyan" style={{ fontWeight: 800, fontSize: "1.4rem", lineHeight: 1 }}>1000+</div>
//                     <div style={{ fontSize: "10px", color: "var(--gray2)", letterSpacing: "1px", textTransform: "uppercase", marginTop: "2px" }}>Projects</div>
//                   </div>
//                 </div>
//               </div>
//             </Reveal>

//             {/* RIGHT — Content */}
//             <Reveal direction="right">
//               <div className="sec-label" style={{ marginBottom: "12px" }}>About Us</div>
//               <h2 className="font-syne" style={{
//                 fontWeight: 800, fontSize: "clamp(2rem,3.5vw,3rem)",
//                 lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "20px",
//               }}>
//                 A team of{" "}
//                 <span className="grad-cyan">creative thinkers</span>
//               </h2>
//               <p style={{ fontSize: "16px", color: "var(--gray)", lineHeight: 1.75, marginBottom: "32px" }}>
//                 We're a full-service design agency specializing in branding, web design, and creative strategies that elevate businesses. Our team transforms ideas into compelling visual stories that drive real, measurable results.
//               </p>

//               {/* Feature list */}
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "32px" }}>
//                 {aboutFeatures.map((f) => (
//                   <div key={f.title} style={{
//                     display: "flex", alignItems: "flex-start", gap: "12px",
//                     padding: "16px", borderRadius: "12px",
//                     background: "rgba(8,28,44,.5)",
//                     border: "1px solid rgba(0,180,216,.12)",
//                     transition: "all .3s",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.35)"; el.style.transform = "translateY(-2px)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.12)"; el.style.transform = ""; }}>
//                     <div style={{
//                       width: "36px", height: "36px", borderRadius: "10px", flexShrink: 0,
//                       background: "rgba(0,180,216,.1)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                     }}>
//                       <LucideIcon name={f.icon} size={18} color="var(--cyan2)" strokeWidth={2} />
//                     </div>
//                     <div>
//                       <div className="font-syne" style={{ fontWeight: 700, fontSize: "13px", color: "var(--amber2)", marginBottom: "2px" }}>{f.title}</div>
//                       <div style={{ fontSize: "12px", color: "var(--gray2)", lineHeight: 1.5 }}>{f.desc}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <Link href="/contact" style={{
//                 display: "inline-flex", alignItems: "center", gap: "10px",
//                 padding: "14px 28px", borderRadius: "100px",
//                 background: "linear-gradient(135deg,var(--cyan1),var(--cyan2))",
//                 color: "#031a2b", fontWeight: 700, fontSize: "14px",
//                 textDecoration: "none", letterSpacing: ".5px",
//                 boxShadow: "0 10px 30px rgba(0,180,216,.3)",
//                 transition: "transform .3s",
//               }}
//                 onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
//                 onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; }}>
//                 Get In Touch
//                 <LucideIcon name="ArrowRight" size={16} color="#031a2b" strokeWidth={2.5} />
//               </Link>
//             </Reveal>
//           </div>
//         </section>

//         {/* ============ TRUSTED BY ============ */}
//         <section style={{ padding: "60px 40px", background: "var(--bg2)", borderTop: "1px solid rgba(0,180,216,.1)", borderBottom: "1px solid rgba(0,180,216,.1)" }}>
//           <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
//             <div style={{ textAlign: "center", marginBottom: "32px" }}>
//               <span className="sec-label">Trusted By Teams At</span>
//             </div>
//             <div style={{
//               display: "flex", flexWrap: "wrap", justifyContent: "center",
//               alignItems: "center", gap: "40px",
//             }}>
//               {trustedBrands.map((brand) => (
//                 <div key={brand} style={{
//                   padding: "12px 24px", borderRadius: "10px",
//                   background: "rgba(8,28,44,.6)",
//                   border: "1px solid rgba(0,180,216,.15)",
//                   color: "var(--gray)", fontSize: "14px", fontWeight: 600,
//                   letterSpacing: ".5px",
//                   transition: "all .3s",
//                 }}
//                   onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.4)"; el.style.color = "var(--cyan2)"; }}
//                   onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.15)"; el.style.color = "var(--gray)"; }}>
//                   {brand}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ STATS / ACHIEVEMENTS ============ */}
//         <section style={{ padding: "100px 40px", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
//           <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(0,180,216,.06) 0%,transparent 70%)", pointerEvents: "none" }} />

//           <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1 }}>
//             <Reveal>
//               <div style={{ textAlign: "center", marginBottom: "60px" }}>
//                 <div className="sec-label" style={{ marginBottom: "12px" }}>Our Achievements</div>
//                 <h2 className="font-syne" style={{ fontWeight: 800, fontSize: "clamp(1.8rem,3vw,2.6rem)", letterSpacing: "-1px", marginBottom: "14px" }}>
//                   Proud Moments &amp; <span className="grad-cyan">Milestones</span>
//                 </h2>
//                 <p style={{ fontSize: "15px", color: "var(--gray)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
//                   Numbers that speak for our dedication to creative excellence and client satisfaction.
//                 </p>
//               </div>
//             </Reveal>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
//               {stats.map((s, i) => (
//                 <Reveal key={s.label} delay={i * 100}>
//                   <div style={{
//                     padding: "36px 24px", borderRadius: "20px", textAlign: "center",
//                     background: "linear-gradient(145deg,rgba(8,28,44,.8),rgba(3,14,22,.9))",
//                     border: "1px solid rgba(0,180,216,.18)",
//                     transition: "all .4s",
//                     position: "relative", overflow: "hidden",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.5)"; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 40px rgba(0,180,216,.15)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.18)"; el.style.transform = ""; el.style.boxShadow = ""; }}>
//                     <div style={{
//                       width: "56px", height: "56px", margin: "0 auto 18px",
//                       borderRadius: "14px",
//                       background: "linear-gradient(135deg,rgba(0,180,216,.15),rgba(34,211,238,.05))",
//                       border: "1px solid rgba(0,180,216,.25)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                     }}>
//                       <LucideIcon name={s.icon} size={26} color="var(--cyan2)" strokeWidth={1.8} />
//                     </div>
//                     <div className="font-syne grad-amber" style={{ fontWeight: 800, fontSize: "2.6rem", lineHeight: 1, letterSpacing: "-1.5px", marginBottom: "8px" }}>
//                       {s.num}
//                     </div>
//                     <div style={{ fontSize: "12px", color: "var(--gray)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }}>
//                       {s.label}
//                     </div>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ OUR VISION ============ */}
//         <section style={{ padding: "100px 40px", background: "var(--bg2)" }}>
//           <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "70px", alignItems: "center" }}>
//             {/* LEFT — Visual */}
//             <Reveal direction="left">
//               <div style={{ position: "relative" }}>
//                 <div style={{
//                   aspectRatio: "1/1", borderRadius: "24px",
//                   background: "linear-gradient(135deg,rgba(0,180,216,.15),rgba(8,28,44,.95))",
//                   border: "1px solid rgba(0,180,216,.25)",
//                   display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
//                   position: "relative", overflow: "hidden", padding: "40px",
//                   boxShadow: "0 25px 60px rgba(0,180,216,.12)",
//                 }}>
//                   {/* Animated rings */}
//                   <div className="about-rotate" style={{
//                     position: "absolute", inset: "10%", borderRadius: "50%",
//                     border: "2px dashed rgba(0,180,216,.2)",
//                   }} />
//                   <div className="about-rotate" style={{
//                     position: "absolute", inset: "25%", borderRadius: "50%",
//                     border: "1px solid rgba(245,158,11,.2)",
//                     animationDirection: "reverse", animationDuration: "30s",
//                   }} />

//                   <div style={{
//                     width: "120px", height: "120px", borderRadius: "50%",
//                     background: "linear-gradient(135deg,var(--cyan1),var(--cyan2))",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     boxShadow: "0 0 60px rgba(0,180,216,.5)", position: "relative", zIndex: 1,
//                     marginBottom: "20px",
//                   }}>
//                     <LucideIcon name="Eye" size={56} color="#031a2b" strokeWidth={2} />
//                   </div>
//                   <div className="font-syne" style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--amber2)", letterSpacing: "1px", position: "relative", zIndex: 1 }}>
//                     VISION
//                   </div>
//                 </div>
//               </div>
//             </Reveal>

//             {/* RIGHT — Content */}
//             <Reveal direction="right">
//               <div className="sec-label" style={{ marginBottom: "12px" }}>Our Vision</div>
//               <h2 className="font-syne" style={{
//                 fontWeight: 800, fontSize: "clamp(2rem,3.2vw,2.8rem)",
//                 lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "20px",
//               }}>
//                 Driving the Future of{" "}
//                 <span className="grad-cyan">Creativity</span>
//               </h2>
//               <p style={{ fontSize: "15.5px", color: "var(--gray)", lineHeight: 1.75, marginBottom: "28px" }}>
//                 We are a specialized training academy offering <strong style={{ color: "var(--cyan2)" }}>industry-focused courses</strong> in digital media, programming, and creative technology — designed to make you <strong style={{ color: "var(--amber2)" }}>job-ready</strong> from day one.
//               </p>

//               <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//                 {visionPoints.map((p) => (
//                   <div key={p.title} style={{
//                     display: "flex", alignItems: "center", gap: "14px",
//                     padding: "14px 18px", borderRadius: "12px",
//                     background: "rgba(8,28,44,.6)",
//                     border: "1px solid rgba(0,180,216,.12)",
//                     transition: "all .3s",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.4)"; el.style.transform = "translateX(6px)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.12)"; el.style.transform = ""; }}>
//                     <div style={{
//                       width: "38px", height: "38px", borderRadius: "10px", flexShrink: 0,
//                       background: "rgba(0,180,216,.12)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                     }}>
//                       <LucideIcon name={p.icon} size={18} color="var(--cyan2)" strokeWidth={2} />
//                     </div>
//                     <div>
//                       <div className="font-syne" style={{ fontWeight: 700, fontSize: "14px", color: "var(--text)", marginBottom: "2px" }}>{p.title}</div>
//                       <div style={{ fontSize: "12.5px", color: "var(--gray2)", lineHeight: 1.5 }}>{p.desc}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </Reveal>
//           </div>
//         </section>

//         {/* ============ OUR MISSION (REVERSED) ============ */}
//         <section style={{ padding: "100px 40px", background: "var(--bg)" }}>
//           <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "70px", alignItems: "center" }}>
//             {/* LEFT — Content */}
//             <Reveal direction="left">
//               <div className="sec-label" style={{ marginBottom: "12px" }}>Our Mission</div>
//               <h2 className="font-syne" style={{
//                 fontWeight: 800, fontSize: "clamp(2rem,3.2vw,2.8rem)",
//                 lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "20px",
//               }}>
//                 Bringing Ideas to Life Through{" "}
//                 <span className="grad-cyan">Creative Impact</span>
//               </h2>
//               <p style={{ fontSize: "15.5px", color: "var(--gray)", lineHeight: 1.75, marginBottom: "28px" }}>
//                 We are a full-service design agency (EditLab) specializing in branding, web design, and creative strategies. Our mission is to deliver <strong style={{ color: "var(--cyan2)" }}>visually stunning and strategically sound projects</strong> that drive measurable business growth.
//               </p>

//               <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//                 {missionPoints.map((p) => (
//                   <div key={p.title} style={{
//                     display: "flex", alignItems: "center", gap: "14px",
//                     padding: "14px 18px", borderRadius: "12px",
//                     background: "rgba(8,28,44,.6)",
//                     border: "1px solid rgba(245,158,11,.15)",
//                     transition: "all .3s",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(245,158,11,.4)"; el.style.transform = "translateX(6px)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(245,158,11,.15)"; el.style.transform = ""; }}>
//                     <div style={{
//                       width: "38px", height: "38px", borderRadius: "10px", flexShrink: 0,
//                       background: "rgba(245,158,11,.12)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                     }}>
//                       <LucideIcon name={p.icon} size={18} color="var(--amber2)" strokeWidth={2} />
//                     </div>
//                     <div>
//                       <div className="font-syne" style={{ fontWeight: 700, fontSize: "14px", color: "var(--text)", marginBottom: "2px" }}>{p.title}</div>
//                       <div style={{ fontSize: "12.5px", color: "var(--gray2)", lineHeight: 1.5 }}>{p.desc}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </Reveal>

//             {/* RIGHT — Visual */}
//             <Reveal direction="right">
//               <div style={{ position: "relative" }}>
//                 <div style={{
//                   aspectRatio: "1/1", borderRadius: "24px",
//                   background: "linear-gradient(135deg,rgba(245,158,11,.12),rgba(8,28,44,.95))",
//                   border: "1px solid rgba(245,158,11,.25)",
//                   display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
//                   position: "relative", overflow: "hidden", padding: "40px",
//                   boxShadow: "0 25px 60px rgba(245,158,11,.1)",
//                 }}>
//                   <div className="about-rotate" style={{
//                     position: "absolute", inset: "10%", borderRadius: "50%",
//                     border: "2px dashed rgba(245,158,11,.2)",
//                   }} />
//                   <div className="about-rotate" style={{
//                     position: "absolute", inset: "25%", borderRadius: "50%",
//                     border: "1px solid rgba(0,180,216,.2)",
//                     animationDirection: "reverse", animationDuration: "30s",
//                   }} />

//                   <div style={{
//                     width: "120px", height: "120px", borderRadius: "50%",
//                     background: "linear-gradient(135deg,var(--amber1),var(--amber2))",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     boxShadow: "0 0 60px rgba(245,158,11,.4)", position: "relative", zIndex: 1,
//                     marginBottom: "20px",
//                   }}>
//                     <LucideIcon name="Rocket" size={56} color="#0a0a0a" strokeWidth={2} />
//                   </div>
//                   <div className="font-syne" style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--cyan2)", letterSpacing: "1px", position: "relative", zIndex: 1 }}>
//                     MISSION
//                   </div>
//                 </div>
//               </div>
//             </Reveal>
//           </div>
//         </section>

//         {/* ============ WHY CHOOSE US ============ */}
//         <section style={{ padding: "100px 40px", background: "var(--bg2)", position: "relative", overflow: "hidden" }}>
//           <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at top,rgba(0,180,216,.08) 0%,transparent 60%)", pointerEvents: "none" }} />

//           <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1 }}>
//             <Reveal>
//               <div style={{ textAlign: "center", marginBottom: "60px" }}>
//                 <div className="sec-label" style={{ marginBottom: "12px" }}>Why Choose Us</div>
//                 <h2 className="font-syne" style={{ fontWeight: 800, fontSize: "clamp(1.8rem,3vw,2.6rem)", letterSpacing: "-1px", marginBottom: "14px" }}>
//                   Built Different. <span className="grad-cyan">Built Better.</span>
//                 </h2>
//                 <p style={{ fontSize: "15px", color: "var(--gray)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
//                   Six reasons why brands across India trust AV EditLab with their creative vision.
//                 </p>
//               </div>
//             </Reveal>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }}>
//               {whyChooseUs.map((item, i) => (
//                 <Reveal key={item.title} delay={i * 80}>
//                   <div style={{
//                     padding: "32px 26px", borderRadius: "20px", height: "100%",
//                     background: "linear-gradient(145deg,rgba(8,28,44,.85),rgba(3,14,22,.95))",
//                     border: "1px solid rgba(0,180,216,.15)",
//                     transition: "all .4s",
//                     position: "relative", overflow: "hidden",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.5)"; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 40px rgba(0,180,216,.15)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.15)"; el.style.transform = ""; el.style.boxShadow = ""; }}>
//                     {/* Top gradient line */}
//                     <div style={{
//                       position: "absolute", top: 0, left: 0, right: 0, height: "3px",
//                       background: "linear-gradient(90deg,var(--cyan1),var(--cyan2),var(--amber2))",
//                       opacity: .6,
//                     }} />

//                     <div style={{
//                       width: "54px", height: "54px", borderRadius: "14px", marginBottom: "18px",
//                       background: "linear-gradient(135deg,rgba(0,180,216,.15),rgba(34,211,238,.05))",
//                       border: "1px solid rgba(0,180,216,.25)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                     }}>
//                       <LucideIcon name={item.icon} size={26} color="var(--cyan2)" strokeWidth={1.8} />
//                     </div>
//                     <h3 className="font-syne" style={{ fontWeight: 700, fontSize: "1.15rem", color: "var(--amber2)", marginBottom: "10px", letterSpacing: "-.3px" }}>
//                       {item.title}
//                     </h3>
//                     <p style={{ fontSize: "13.5px", color: "var(--gray)", lineHeight: 1.65 }}>
//                       {item.desc}
//                     </p>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         <CTASection title="Ready to" highlight="Get Started?" desc="Let's create something amazing together that drives real business growth." />
//       </main>
//       <Footer />
//       <WAFloat />
//     </>
//   );
// }


// "use client";
// import LucideIcon from "@/components/LucideIcon";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WAFloat from "@/components/WAFloat";
// import { CTASection } from "@/components/PageSections";
// import { Reveal } from "@/components/ScrollReveal";
// import Link from "next/link";

// const aboutFeatures = [
//   { icon: "Sparkles", title: "Creativity and Innovation", desc: "Fresh ideas that push creative boundaries" },
//   { icon: "Users", title: "Client-Centricity", desc: "Your vision, our priority — always" },
//   { icon: "ShieldCheck", title: "Integrity and Transparency", desc: "Honest collaboration at every step" },
//   { icon: "Award", title: "Excellence and Quality", desc: "Premium output, no compromises" },
// ];

// const visionPoints = [
//   { icon: "BookOpen", title: "Industry-Ready Curriculum", desc: "Updated with latest market demands" },
//   { icon: "Wrench", title: "Hands-on Live Projects", desc: "Real work, real portfolio building" },
//   { icon: "GraduationCap", title: "Expert Mentorship", desc: "Learn from working professionals" },
//   { icon: "TrendingUp", title: "Career Transformation", desc: "From learner to industry professional" },
// ];

// const missionPoints = [
//   { icon: "Rocket", title: "Future-Proof Learning", desc: "AI-integrated training that stays relevant" },
//   { icon: "Target", title: "Practical Mastery", desc: "Skill-based modules, not just theory" },
//   { icon: "HeartHandshake", title: "Mentorship & Support", desc: "We walk with you, not just teach" },
//   { icon: "TrendingUp", title: "Growth & Excellence", desc: "Measurable progress every step" },
// ];

// const stats = [
//   { num: "1000+", label: "Projects Completed", icon: "Briefcase" },
//   { num: "5+", label: "Years of Experience", icon: "Calendar" },
//   { num: "100+", label: "Happy Clients", icon: "Users" },
//   { num: "98%", label: "Client Satisfaction", icon: "Heart" },
// ];

// const trustedBrands = [
//   "Grapess", "Tour4YOU", "Diabeto India", "Madhurveda",
//   "Sai Paradise", "TechGrow", "Aura Skincare",
// ];

// const whyChooseUs = [
//   { icon: "Factory", title: "Industry Expertise", desc: "5+ years serving 8+ industries with proven creative solutions and strategic insights." },
//   { icon: "Sparkles", title: "AI-Integrated Approach", desc: "Latest AI tools combined with human creativity for faster, smarter, better results." },
//   { icon: "RefreshCw", title: "End-to-End Service", desc: "From concept to delivery — graphics, video, 3D, marketing — all under one roof." },
//   { icon: "Zap", title: "Fast Turnaround", desc: "Quick delivery without compromising on quality. Deadlines met, every time." },
//   { icon: "Trophy", title: "Award-Winning Quality", desc: "Premium output that wins awards and drives measurable business growth." },
//   { icon: "Users", title: "Dedicated Team", desc: "Personal account managers, expert designers, and 24/7 support for every project." },
// ];

// export default function AboutPage() {
//   return (
//     <>
//       <Navbar />
//       <main>
//         {/* ============ HERO ============ */}
//         <section style={{
//           position: "relative",
//           paddingTop: "160px",
//           paddingBottom: "100px",
//           paddingLeft: "40px",
//           paddingRight: "40px",
//           background: "linear-gradient(160deg, #061826 0%, #0a2436 50%, #061826 100%)",
//           textAlign: "center",
//           overflow: "hidden",
//           borderBottom: "1px solid rgba(0,180,216,.15)",
//         }}>
//           <div style={{
//             position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)",
//             width: "600px", height: "300px",
//             background: "radial-gradient(ellipse, rgba(0,180,216,.18) 0%, transparent 70%)",
//             pointerEvents: "none", filter: "blur(20px)",
//           }} />
//           <div style={{
//             position: "absolute", top: "30%", left: "8%",
//             width: "200px", height: "200px", borderRadius: "50%",
//             background: "radial-gradient(circle, rgba(0,180,216,.12), transparent 70%)",
//             filter: "blur(40px)", pointerEvents: "none",
//           }} />
//           <div style={{
//             position: "absolute", bottom: "10%", right: "10%",
//             width: "240px", height: "240px", borderRadius: "50%",
//             background: "radial-gradient(circle, rgba(245,158,11,.08), transparent 70%)",
//             filter: "blur(50px)", pointerEvents: "none",
//           }} />
//           <div style={{
//             position: "absolute", inset: 0,
//             backgroundImage: "linear-gradient(rgba(0,180,216,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,.04) 1px, transparent 1px)",
//             backgroundSize: "60px 60px", opacity: .5, pointerEvents: "none",
//           }} />

//           <div style={{ position: "relative", zIndex: 2, maxWidth: "1000px", margin: "0 auto" }}>
//             <span style={{
//               display: "inline-flex", alignItems: "center", gap: "8px",
//               padding: "8px 20px", borderRadius: "100px",
//               fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//               textTransform: "uppercase", marginBottom: "28px",
//               background: "rgba(0,180,216,.12)", border: "1px solid rgba(0,180,216,.4)",
//               color: "#22d3ee", boxShadow: "0 0 30px rgba(0,180,216,.2)",
//             }}>
//               <LucideIcon name="Sparkles" size={14} color="#22d3ee" strokeWidth={2} />
//               Our Story
//             </span>

//             <h1 className="font-syne" style={{
//               fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
//               lineHeight: 1.05, letterSpacing: "-2px", marginBottom: "24px",
//               color: "#ffffff",
//             }}>
//               About Our{" "}
//               <span style={{
//                 background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                 WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}>Journey</span>
//             </h1>

//             <p style={{
//               fontSize: "18px", color: "#9ca3af", maxWidth: "640px",
//               margin: "0 auto 28px", lineHeight: 1.7,
//             }}>
//               A team of creative thinkers transforming ideas into compelling visual stories that drive real business growth.
//             </p>

//             <div style={{
//               display: "inline-flex", alignItems: "center", gap: "10px",
//               fontSize: "13px", color: "#6b7280",
//               padding: "10px 20px", borderRadius: "100px",
//               background: "rgba(8,28,44,.6)", border: "1px solid rgba(0,180,216,.15)",
//             }}>
//               <Link href="/" style={{ color: "#22d3ee", textDecoration: "none", fontWeight: 600 }}>Home</Link>
//               <LucideIcon name="ChevronRight" size={14} color="#6b7280" />
//               <span style={{ color: "#d1d5db" }}>About Us</span>
//             </div>
//           </div>
//         </section>

//         {/* ============ ABOUT — A TEAM OF CREATIVE THINKERS ============ */}
//         <section style={{ padding: "100px 40px", background: "#030f1a" }}>
//           <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "70px", alignItems: "center" }}>
//             <Reveal direction="left">
//               <div style={{ position: "relative" }}>
//                 <div style={{
//                   position: "relative", borderRadius: "24px", overflow: "hidden",
//                   aspectRatio: "4/5",
//                   background: "linear-gradient(145deg, rgba(8,28,44,.95), rgba(3,14,22,.98))",
//                   border: "1px solid rgba(0,180,216,.25)",
//                   boxShadow: "0 25px 60px rgba(0,180,216,.15)",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   padding: "40px",
//                 }}>
//                   <div className="about-rotate" style={{
//                     position: "absolute", inset: "-20%",
//                     background: "conic-gradient(transparent 0%, rgba(0,180,216,.15) 25%, transparent 50%, rgba(245,158,11,.1) 75%, transparent 100%)",
//                     pointerEvents: "none",
//                   }} />

//                   <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
//                     <div style={{
//                       width: "110px", height: "110px", margin: "0 auto 20px",
//                       borderRadius: "50%",
//                       background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                       boxShadow: "0 0 50px rgba(0,180,216,.4)",
//                     }}>
//                       <LucideIcon name="Palette" size={48} color="#031a2b" strokeWidth={2} />
//                     </div>
//                     <h3 className="font-syne" style={{
//                       fontWeight: 800, fontSize: "3.5rem", lineHeight: 1,
//                       letterSpacing: "-2px", marginBottom: "8px",
//                       background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                       WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                       backgroundClip: "text",
//                     }}>AV</h3>
//                     <p style={{
//                       fontSize: "11px", letterSpacing: "4px", color: "#f59e0b",
//                       fontWeight: 700, textTransform: "uppercase", marginBottom: "20px",
//                     }}>EditLab & Academy</p>
//                     <div style={{ width: "60px", height: "2px", background: "#22d3ee", margin: "0 auto 20px", opacity: .5 }} />
//                     <p style={{ fontSize: "13px", color: "#9ca3af", lineHeight: 1.7, maxWidth: "260px", margin: "0 auto" }}>
//                       Lucknow&apos;s premier creative studio &amp; training academy
//                     </p>
//                   </div>
//                 </div>

//                 {/* ====== FIXED BADGE 1: 5+ Years (top right) — Text NOW VISIBLE ====== */}
//                 <div style={{
//                   position: "absolute",
//                   top: "-20px",
//                   right: "-20px",
//                   padding: "14px 22px",
//                   borderRadius: "16px",
//                   background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
//                   color: "#1a1a1a",
//                   fontWeight: 900,
//                   fontSize: "14px",
//                   boxShadow: "0 12px 30px rgba(245,158,11,.5), inset 0 0 0 1px rgba(255,255,255,.2)",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "8px",
//                   letterSpacing: ".8px",
//                   zIndex: 10,
//                   textShadow: "0 1px 0 rgba(255,255,255,.2)",
//                 }}>
//                   <LucideIcon name="Award" size={18} color="#1a1a1a" strokeWidth={3} />
//                   5+ Years
//                 </div>

//                 {/* ====== FIXED BADGE 2: 1000+ Projects (bottom left) ====== */}
//                 <div style={{
//                   position: "absolute",
//                   bottom: "30px",
//                   left: "-30px",
//                   padding: "16px 22px",
//                   borderRadius: "16px",
//                   background: "linear-gradient(135deg, #0a2436, #061826)",
//                   border: "1px solid rgba(0,180,216,.5)",
//                   backdropFilter: "blur(10px)",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "12px",
//                   boxShadow: "0 12px 30px rgba(0,0,0,.5), inset 0 0 0 1px rgba(34,211,238,.15)",
//                   zIndex: 10,
//                 }}>
//                   <div style={{
//                     width: "40px",
//                     height: "40px",
//                     borderRadius: "10px",
//                     background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     boxShadow: "0 4px 12px rgba(0,180,216,.4)",
//                   }}>
//                     <LucideIcon name="Users" size={20} color="#031a2b" strokeWidth={2.5} />
//                   </div>
//                   <div>
//                     <div className="font-syne" style={{
//                       fontWeight: 900,
//                       fontSize: "1.5rem",
//                       lineHeight: 1,
//                       background: "linear-gradient(135deg, #22d3ee, #00b4d8)",
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                       backgroundClip: "text",
//                     }}>1000+</div>
//                     <div style={{
//                       fontSize: "10px",
//                       color: "#d1d5db",
//                       letterSpacing: "1.5px",
//                       textTransform: "uppercase",
//                       marginTop: "3px",
//                       fontWeight: 600,
//                     }}>Projects</div>
//                   </div>
//                 </div>
//               </div>
//             </Reveal>

//             <Reveal direction="right">
//               <div style={{
//                 display: "inline-block", fontSize: "12px", fontWeight: 700,
//                 letterSpacing: "2px", textTransform: "uppercase",
//                 color: "#22d3ee", marginBottom: "12px",
//               }}>// About Us</div>
//               <h2 className="font-syne" style={{
//                 fontWeight: 800, fontSize: "clamp(2rem, 3.5vw, 3rem)",
//                 lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "20px",
//                 color: "#ffffff",
//               }}>
//                 A team of{" "}
//                 <span style={{
//                   background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                   WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}>creative thinkers</span>
//               </h2>
//               <p style={{ fontSize: "16px", color: "#9ca3af", lineHeight: 1.75, marginBottom: "32px" }}>
//                 We&apos;re a full-service design agency specializing in branding, web design, and creative strategies that elevate businesses. Our team transforms ideas into compelling visual stories that drive real, measurable results.
//               </p>

//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "32px" }}>
//                 {aboutFeatures.map((f) => (
//                   <div key={f.title} style={{
//                     display: "flex", alignItems: "flex-start", gap: "12px",
//                     padding: "16px", borderRadius: "12px",
//                     background: "rgba(8,28,44,.5)", border: "1px solid rgba(0,180,216,.12)",
//                     transition: "all .3s",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.35)"; el.style.transform = "translateY(-2px)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.12)"; el.style.transform = ""; }}>
//                     <div style={{
//                       width: "36px", height: "36px", borderRadius: "10px", flexShrink: 0,
//                       background: "rgba(0,180,216,.1)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                     }}>
//                       <LucideIcon name={f.icon} size={18} color="#22d3ee" strokeWidth={2} />
//                     </div>
//                     <div>
//                       <div className="font-syne" style={{ fontWeight: 700, fontSize: "13px", color: "#f59e0b", marginBottom: "2px" }}>{f.title}</div>
//                       <div style={{ fontSize: "12px", color: "#9ca3af", lineHeight: 1.5 }}>{f.desc}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <Link href="/contact" style={{
//                 display: "inline-flex", alignItems: "center", gap: "10px",
//                 padding: "14px 28px", borderRadius: "100px",
//                 background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                 color: "#031a2b", fontWeight: 700, fontSize: "14px",
//                 textDecoration: "none", letterSpacing: ".5px",
//                 boxShadow: "0 10px 30px rgba(0,180,216,.3)", transition: "transform .3s",
//               }}
//                 onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
//                 onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; }}>
//                 Get In Touch
//                 <LucideIcon name="ArrowRight" size={16} color="#031a2b" strokeWidth={2.5} />
//               </Link>
//             </Reveal>
//           </div>
//         </section>

//         {/* ============ TRUSTED BY ============ */}
//         <section style={{
//           padding: "60px 40px", background: "#061826",
//           borderTop: "1px solid rgba(0,180,216,.1)",
//           borderBottom: "1px solid rgba(0,180,216,.1)",
//         }}>
//           <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
//             <div style={{ textAlign: "center", marginBottom: "32px" }}>
//               <span style={{
//                 fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//                 textTransform: "uppercase", color: "#22d3ee",
//               }}>// Trusted By Teams At</span>
//             </div>
//             <div style={{
//               display: "flex", flexWrap: "wrap", justifyContent: "center",
//               alignItems: "center", gap: "16px",
//             }}>
//               {trustedBrands.map((brand) => (
//                 <div key={brand} style={{
//                   padding: "12px 24px", borderRadius: "10px",
//                   background: "rgba(8,28,44,.6)", border: "1px solid rgba(0,180,216,.15)",
//                   color: "#9ca3af", fontSize: "14px", fontWeight: 600,
//                   letterSpacing: ".5px", transition: "all .3s",
//                 }}
//                   onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.4)"; el.style.color = "#22d3ee"; }}
//                   onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.15)"; el.style.color = "#9ca3af"; }}>
//                   {brand}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ STATS / ACHIEVEMENTS ============ */}
//         <section style={{
//           padding: "100px 40px", background: "#030f1a",
//           position: "relative", overflow: "hidden",
//         }}>
//           <div style={{
//             position: "absolute", inset: 0,
//             background: "radial-gradient(ellipse at center, rgba(0,180,216,.06) 0%, transparent 70%)",
//             pointerEvents: "none",
//           }} />

//           <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1 }}>
//             <Reveal>
//               <div style={{ textAlign: "center", marginBottom: "60px" }}>
//                 <div style={{
//                   fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//                   textTransform: "uppercase", color: "#22d3ee", marginBottom: "12px",
//                 }}>// Our Achievements</div>
//                 <h2 className="font-syne" style={{
//                   fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
//                   letterSpacing: "-1px", marginBottom: "14px", color: "#ffffff",
//                 }}>
//                   Proud Moments &amp;{" "}
//                   <span style={{
//                     background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                     WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                     backgroundClip: "text",
//                   }}>Milestones</span>
//                 </h2>
//                 <p style={{ fontSize: "15px", color: "#9ca3af", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
//                   Numbers that speak for our dedication to creative excellence and client satisfaction.
//                 </p>
//               </div>
//             </Reveal>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
//               {stats.map((s, i) => (
//                 <Reveal key={s.label} delay={i * 100}>
//                   <div style={{
//                     padding: "36px 24px", borderRadius: "20px", textAlign: "center",
//                     background: "linear-gradient(145deg, rgba(8,28,44,.8), rgba(3,14,22,.9))",
//                     border: "1px solid rgba(0,180,216,.18)",
//                     transition: "all .4s", position: "relative", overflow: "hidden",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.5)"; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 40px rgba(0,180,216,.15)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.18)"; el.style.transform = ""; el.style.boxShadow = ""; }}>
//                     <div style={{
//                       width: "56px", height: "56px", margin: "0 auto 18px",
//                       borderRadius: "14px",
//                       background: "linear-gradient(135deg, rgba(0,180,216,.15), rgba(34,211,238,.05))",
//                       border: "1px solid rgba(0,180,216,.25)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                     }}>
//                       <LucideIcon name={s.icon} size={26} color="#22d3ee" strokeWidth={1.8} />
//                     </div>
//                     <div className="font-syne" style={{
//                       fontWeight: 800, fontSize: "2.6rem", lineHeight: 1,
//                       letterSpacing: "-1.5px", marginBottom: "8px",
//                       background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
//                       WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                       backgroundClip: "text",
//                     }}>
//                       {s.num}
//                     </div>
//                     <div style={{
//                       fontSize: "12px", color: "#9ca3af",
//                       textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600,
//                     }}>
//                       {s.label}
//                     </div>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ OUR VISION ============ */}
//         <section style={{ padding: "100px 40px", background: "#061826" }}>
//           <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "70px", alignItems: "center" }}>
//             <Reveal direction="left">
//               <div style={{ position: "relative" }}>
//                 <div style={{
//                   aspectRatio: "1/1", borderRadius: "24px",
//                   background: "linear-gradient(135deg, rgba(0,180,216,.15), rgba(8,28,44,.95))",
//                   border: "1px solid rgba(0,180,216,.25)",
//                   display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
//                   position: "relative", overflow: "hidden", padding: "40px",
//                   boxShadow: "0 25px 60px rgba(0,180,216,.12)",
//                 }}>
//                   <div className="about-rotate" style={{
//                     position: "absolute", inset: "10%", borderRadius: "50%",
//                     border: "2px dashed rgba(0,180,216,.2)",
//                   }} />
//                   <div className="about-rotate" style={{
//                     position: "absolute", inset: "25%", borderRadius: "50%",
//                     border: "1px solid rgba(245,158,11,.2)",
//                     animationDirection: "reverse", animationDuration: "30s",
//                   }} />

//                   <div style={{
//                     width: "120px", height: "120px", borderRadius: "50%",
//                     background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     boxShadow: "0 0 60px rgba(0,180,216,.5)",
//                     position: "relative", zIndex: 1, marginBottom: "20px",
//                   }}>
//                     <LucideIcon name="Eye" size={56} color="#031a2b" strokeWidth={2} />
//                   </div>
//                   <div className="font-syne" style={{
//                     fontSize: "1.5rem", fontWeight: 800, color: "#f59e0b",
//                     letterSpacing: "1px", position: "relative", zIndex: 1,
//                   }}>
//                     VISION
//                   </div>
//                 </div>
//               </div>
//             </Reveal>

//             <Reveal direction="right">
//               <div style={{
//                 fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//                 textTransform: "uppercase", color: "#22d3ee", marginBottom: "12px",
//               }}>// Our Vision</div>
//               <h2 className="font-syne" style={{
//                 fontWeight: 800, fontSize: "clamp(2rem, 3.2vw, 2.8rem)",
//                 lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "20px",
//                 color: "#ffffff",
//               }}>
//                 Driving the Future of{" "}
//                 <span style={{
//                   background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                   WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}>Creativity</span>
//               </h2>
//               <p style={{ fontSize: "15.5px", color: "#9ca3af", lineHeight: 1.75, marginBottom: "28px" }}>
//                 We are a specialized training academy offering <strong style={{ color: "#22d3ee" }}>industry-focused courses</strong> in digital media, programming, and creative technology — designed to make you <strong style={{ color: "#f59e0b" }}>job-ready</strong> from day one.
//               </p>

//               <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//                 {visionPoints.map((p) => (
//                   <div key={p.title} style={{
//                     display: "flex", alignItems: "center", gap: "14px",
//                     padding: "14px 18px", borderRadius: "12px",
//                     background: "rgba(8,28,44,.6)", border: "1px solid rgba(0,180,216,.12)",
//                     transition: "all .3s",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.4)"; el.style.transform = "translateX(6px)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.12)"; el.style.transform = ""; }}>
//                     <div style={{
//                       width: "38px", height: "38px", borderRadius: "10px", flexShrink: 0,
//                       background: "rgba(0,180,216,.12)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                     }}>
//                       <LucideIcon name={p.icon} size={18} color="#22d3ee" strokeWidth={2} />
//                     </div>
//                     <div>
//                       <div className="font-syne" style={{ fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "2px" }}>{p.title}</div>
//                       <div style={{ fontSize: "12.5px", color: "#9ca3af", lineHeight: 1.5 }}>{p.desc}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </Reveal>
//           </div>
//         </section>

//         {/* ============ OUR MISSION ============ */}
//         <section style={{ padding: "100px 40px", background: "#030f1a" }}>
//           <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "70px", alignItems: "center" }}>
//             <Reveal direction="left">
//               <div style={{
//                 fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//                 textTransform: "uppercase", color: "#22d3ee", marginBottom: "12px",
//               }}>// Our Mission</div>
//               <h2 className="font-syne" style={{
//                 fontWeight: 800, fontSize: "clamp(2rem, 3.2vw, 2.8rem)",
//                 lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "20px",
//                 color: "#ffffff",
//               }}>
//                 Bringing Ideas to Life Through{" "}
//                 <span style={{
//                   background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                   WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}>Creative Impact</span>
//               </h2>
//               <p style={{ fontSize: "15.5px", color: "#9ca3af", lineHeight: 1.75, marginBottom: "28px" }}>
//                 We are a full-service design agency (EditLab) specializing in branding, web design, and creative strategies. Our mission is to deliver <strong style={{ color: "#22d3ee" }}>visually stunning and strategically sound projects</strong> that drive measurable business growth.
//               </p>

//               <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//                 {missionPoints.map((p) => (
//                   <div key={p.title} style={{
//                     display: "flex", alignItems: "center", gap: "14px",
//                     padding: "14px 18px", borderRadius: "12px",
//                     background: "rgba(8,28,44,.6)", border: "1px solid rgba(245,158,11,.15)",
//                     transition: "all .3s",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(245,158,11,.4)"; el.style.transform = "translateX(6px)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(245,158,11,.15)"; el.style.transform = ""; }}>
//                     <div style={{
//                       width: "38px", height: "38px", borderRadius: "10px", flexShrink: 0,
//                       background: "rgba(245,158,11,.12)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                     }}>
//                       <LucideIcon name={p.icon} size={18} color="#f59e0b" strokeWidth={2} />
//                     </div>
//                     <div>
//                       <div className="font-syne" style={{ fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "2px" }}>{p.title}</div>
//                       <div style={{ fontSize: "12.5px", color: "#9ca3af", lineHeight: 1.5 }}>{p.desc}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </Reveal>

//             <Reveal direction="right">
//               <div style={{ position: "relative" }}>
//                 <div style={{
//                   aspectRatio: "1/1", borderRadius: "24px",
//                   background: "linear-gradient(135deg, rgba(245,158,11,.12), rgba(8,28,44,.95))",
//                   border: "1px solid rgba(245,158,11,.25)",
//                   display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
//                   position: "relative", overflow: "hidden", padding: "40px",
//                   boxShadow: "0 25px 60px rgba(245,158,11,.1)",
//                 }}>
//                   <div className="about-rotate" style={{
//                     position: "absolute", inset: "10%", borderRadius: "50%",
//                     border: "2px dashed rgba(245,158,11,.2)",
//                   }} />
//                   <div className="about-rotate" style={{
//                     position: "absolute", inset: "25%", borderRadius: "50%",
//                     border: "1px solid rgba(0,180,216,.2)",
//                     animationDirection: "reverse", animationDuration: "30s",
//                   }} />

//                   <div style={{
//                     width: "120px", height: "120px", borderRadius: "50%",
//                     background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     boxShadow: "0 0 60px rgba(245,158,11,.4)",
//                     position: "relative", zIndex: 1, marginBottom: "20px",
//                   }}>
//                     <LucideIcon name="Rocket" size={56} color="#1a1a1a" strokeWidth={2.5} />
//                   </div>
//                   <div className="font-syne" style={{
//                     fontSize: "1.5rem", fontWeight: 800, color: "#22d3ee",
//                     letterSpacing: "1px", position: "relative", zIndex: 1,
//                   }}>
//                     MISSION
//                   </div>
//                 </div>
//               </div>
//             </Reveal>
//           </div>
//         </section>

//         {/* ============ WHY CHOOSE US ============ */}
//         <section style={{
//           padding: "100px 40px", background: "#061826",
//           position: "relative", overflow: "hidden",
//         }}>
//           <div style={{
//             position: "absolute", inset: 0,
//             background: "radial-gradient(ellipse at top, rgba(0,180,216,.08) 0%, transparent 60%)",
//             pointerEvents: "none",
//           }} />

//           <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1 }}>
//             <Reveal>
//               <div style={{ textAlign: "center", marginBottom: "60px" }}>
//                 <div style={{
//                   fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//                   textTransform: "uppercase", color: "#22d3ee", marginBottom: "12px",
//                 }}>// Why Choose Us</div>
//                 <h2 className="font-syne" style={{
//                   fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
//                   letterSpacing: "-1px", marginBottom: "14px", color: "#ffffff",
//                 }}>
//                   Built Different.{" "}
//                   <span style={{
//                     background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                     WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                     backgroundClip: "text",
//                   }}>Built Better.</span>
//                 </h2>
//                 <p style={{ fontSize: "15px", color: "#9ca3af", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
//                   Six reasons why brands across India trust AV EditLab with their creative vision.
//                 </p>
//               </div>
//             </Reveal>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "22px" }}>
//               {whyChooseUs.map((item, i) => (
//                 <Reveal key={item.title} delay={i * 80}>
//                   <div style={{
//                     padding: "32px 26px", borderRadius: "20px", height: "100%",
//                     background: "linear-gradient(145deg, rgba(8,28,44,.85), rgba(3,14,22,.95))",
//                     border: "1px solid rgba(0,180,216,.15)",
//                     transition: "all .4s", position: "relative", overflow: "hidden",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.5)"; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 40px rgba(0,180,216,.15)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.15)"; el.style.transform = ""; el.style.boxShadow = ""; }}>
//                     <div style={{
//                       position: "absolute", top: 0, left: 0, right: 0, height: "3px",
//                       background: "linear-gradient(90deg, #00b4d8, #22d3ee, #f59e0b)",
//                       opacity: .6,
//                     }} />

//                     <div style={{
//                       width: "54px", height: "54px", borderRadius: "14px", marginBottom: "18px",
//                       background: "linear-gradient(135deg, rgba(0,180,216,.15), rgba(34,211,238,.05))",
//                       border: "1px solid rgba(0,180,216,.25)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                     }}>
//                       <LucideIcon name={item.icon} size={26} color="#22d3ee" strokeWidth={1.8} />
//                     </div>
//                     <h3 className="font-syne" style={{
//                       fontWeight: 700, fontSize: "1.15rem", color: "#f59e0b",
//                       marginBottom: "10px", letterSpacing: "-.3px",
//                     }}>
//                       {item.title}
//                     </h3>
//                     <p style={{ fontSize: "13.5px", color: "#9ca3af", lineHeight: 1.65 }}>
//                       {item.desc}
//                     </p>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         <CTASection title="Ready to" highlight="Get Started?" desc="Let's create something amazing together that drives real business growth." />
//       </main>
//       <Footer />
//       <WAFloat />
//     </>
//   );
// }



// "use client";
// import LucideIcon from "@/components/LucideIcon";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WAFloat from "@/components/WAFloat";
// import { CTASection } from "@/components/PageSections";
// import { Reveal } from "@/components/ScrollReveal";
// import Link from "next/link";

// // ============ ACADEMY-FOCUSED CONTENT (Primary) ============

// const academyHighlights = [
//   { icon: "GraduationCap", title: "Industry-Ready Courses", desc: "Curriculum designed with real industry demands" },
//   { icon: "Users", title: "Expert Faculty", desc: "Learn from working industry professionals" },
//   { icon: "Briefcase", title: "100% Placement Support", desc: "Dedicated career guidance & job assistance" },
//   { icon: "Trophy", title: "Certified Programs", desc: "Government recognized certifications" },
// ];

// const courseCategories = [
//   { icon: "Palette", title: "Graphic Design", count: "8+ Courses", color: "#22d3ee" },
//   { icon: "Video", title: "Video Editing & VFX", count: "6+ Courses", color: "#22d3ee" },
//   { icon: "Box", title: "2D & 3D Animation", count: "5+ Courses", color: "#22d3ee" },
//   { icon: "Code2", title: "Programming Languages", count: "7+ Courses", color: "#22d3ee" },
//   { icon: "Brain", title: "AI & Data Science", count: "4+ Courses", color: "#f59e0b" },
//   { icon: "Megaphone", title: "Digital Marketing", count: "3+ Courses", color: "#22d3ee" },
// ];

// const learningJourney = [
//   { step: "01", icon: "Search", title: "Choose Your Course", desc: "Browse 30+ industry-focused programs aligned with your career goals" },
//   { step: "02", icon: "BookOpen", title: "Learn From Experts", desc: "Interactive classes with working professionals & hands-on training" },
//   { step: "03", icon: "Wrench", title: "Build Real Projects", desc: "Work on live client projects from EditLab agency to build portfolio" },
//   { step: "04", icon: "Award", title: "Get Certified", desc: "Earn industry-recognized certifications upon course completion" },
//   { step: "05", icon: "Briefcase", title: "Land Your Dream Job", desc: "Career counseling, interview prep & placement assistance" },
// ];

// const academyAchievements = [
//   { num: "1500+", label: "Students Trained", icon: "Users" },
//   { num: "30+", label: "Courses Offered", icon: "BookOpen" },
//   { num: "95%", label: "Placement Rate", icon: "TrendingUp" },
//   { num: "5+", label: "Years Teaching", icon: "Calendar" },
// ];

// const whyChooseAcademy = [
//   { icon: "Target", title: "Industry-Focused Curriculum", desc: "Every course is designed based on current industry demands and updated regularly with latest trends and technologies." },
//   { icon: "Users", title: "Small Batch Sizes", desc: "Limited students per batch ensures personalized attention from instructors and better learning outcomes." },
//   { icon: "Wrench", title: "Hands-On Practical Training", desc: "70% practical, 30% theory approach. Work on real client projects from EditLab agency during your training." },
//   { icon: "GraduationCap", title: "Expert Mentorship", desc: "Learn from 5+ years experienced professionals who are actively working in top companies and agencies." },
//   { icon: "Briefcase", title: "Placement Assistance", desc: "Resume building, mock interviews, portfolio review, and direct connections with hiring companies." },
//   { icon: "Sparkles", title: "AI-Integrated Learning", desc: "First academy in Lucknow to integrate AI tools (ChatGPT, Midjourney, Runway) into traditional creative courses." },
//   { icon: "Clock", title: "Flexible Timings", desc: "Morning, evening, and weekend batches available. Online + offline hybrid options for working professionals." },
//   { icon: "Trophy", title: "Recognized Certifications", desc: "Government recognized certifications + industry endorsed credentials accepted across India." },
// ];

// const studentSuccess = [
//   { name: "Priya Sharma", course: "Graphic Design", role: "UI Designer at Tech Startup", img: "PS" },
//   { name: "Rohit Kumar", course: "3D Animation", role: "3D Artist at Production House", img: "RK" },
//   { name: "Anjali Verma", course: "Digital Marketing", role: "Marketing Manager", img: "AV" },
//   { name: "Vikash Singh", course: "VFX Master Class", role: "VFX Artist (Bollywood)", img: "VS" },
// ];

// // ============ EDITLAB CONTENT (Secondary) ============

// const editLabServices = [
//   { icon: "Palette", title: "Graphic Design" },
//   { icon: "Video", title: "Video Editing" },
//   { icon: "Box", title: "3D Animation" },
//   { icon: "Sparkles", title: "VFX Services" },
//   { icon: "Megaphone", title: "Digital Marketing" },
//   { icon: "Camera", title: "Photography" },
// ];

// const trustedBrands = [
//   "Grapess", "Tour4YOU", "Diabeto India", "Madhurveda",
//   "Sai Paradise", "TechGrow", "Aura Skincare",
// ];

// export default function AboutPage() {
//   return (
//     <>
//       <Navbar />
//       <main>
//         {/* ============ HERO — ACADEMY FOCUSED ============ */}
//         <section style={{
//           position: "relative",
//           paddingTop: "160px",
//           paddingBottom: "100px",
//           paddingLeft: "40px",
//           paddingRight: "40px",
//           background: "linear-gradient(160deg, #061826 0%, #0a2436 50%, #061826 100%)",
//           textAlign: "center",
//           overflow: "hidden",
//           borderBottom: "1px solid rgba(0,180,216,.15)",
//         }}>
//           <div style={{
//             position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)",
//             width: "600px", height: "300px",
//             background: "radial-gradient(ellipse, rgba(0,180,216,.18) 0%, transparent 70%)",
//             pointerEvents: "none", filter: "blur(20px)",
//           }} />
//           <div style={{
//             position: "absolute", top: "30%", left: "8%",
//             width: "200px", height: "200px", borderRadius: "50%",
//             background: "radial-gradient(circle, rgba(0,180,216,.12), transparent 70%)",
//             filter: "blur(40px)", pointerEvents: "none",
//           }} />
//           <div style={{
//             position: "absolute", bottom: "10%", right: "10%",
//             width: "240px", height: "240px", borderRadius: "50%",
//             background: "radial-gradient(circle, rgba(245,158,11,.08), transparent 70%)",
//             filter: "blur(50px)", pointerEvents: "none",
//           }} />
//           <div style={{
//             position: "absolute", inset: 0,
//             backgroundImage: "linear-gradient(rgba(0,180,216,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,.04) 1px, transparent 1px)",
//             backgroundSize: "60px 60px", opacity: .5, pointerEvents: "none",
//           }} />

//           <div style={{ position: "relative", zIndex: 2, maxWidth: "1000px", margin: "0 auto" }}>
//             <span style={{
//               display: "inline-flex", alignItems: "center", gap: "8px",
//               padding: "8px 20px", borderRadius: "100px",
//               fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//               textTransform: "uppercase", marginBottom: "28px",
//               background: "rgba(0,180,216,.12)", border: "1px solid rgba(0,180,216,.4)",
//               color: "#22d3ee", boxShadow: "0 0 30px rgba(0,180,216,.2)",
//             }}>
//               <LucideIcon name="GraduationCap" size={14} color="#22d3ee" strokeWidth={2} />
//               About AV Academy &amp; EditLab
//             </span>

//             <h1 className="font-syne" style={{
//               fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
//               lineHeight: 1.05, letterSpacing: "-2px", marginBottom: "24px",
//               color: "#ffffff",
//             }}>
//               Lucknow&apos;s Premier{" "}
//               <span style={{
//                 background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                 WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}>Creative Training Hub</span>
//             </h1>

//             <p style={{
//               fontSize: "18px", color: "#9ca3af", maxWidth: "720px",
//               margin: "0 auto 28px", lineHeight: 1.7,
//             }}>
//               Empowering 1500+ students with industry-ready skills — backed by our in-house creative agency <strong style={{ color: "#22d3ee" }}>AV EditLab</strong> for real-world project experience.
//             </p>

//             <div style={{
//               display: "inline-flex", alignItems: "center", gap: "10px",
//               fontSize: "13px", color: "#6b7280",
//               padding: "10px 20px", borderRadius: "100px",
//               background: "rgba(8,28,44,.6)", border: "1px solid rgba(0,180,216,.15)",
//             }}>
//               <Link href="/" style={{ color: "#22d3ee", textDecoration: "none", fontWeight: 600 }}>Home</Link>
//               <LucideIcon name="ChevronRight" size={14} color="#6b7280" />
//               <span style={{ color: "#d1d5db" }}>About Us</span>
//             </div>
//           </div>
//         </section>

//         {/* ============ ACADEMY STORY (PRIMARY FOCUS) ============ */}
//         <section style={{ padding: "100px 40px", background: "#030f1a" }}>
//           <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "70px", alignItems: "center" }}>
//             <Reveal direction="left">
//               <div style={{ position: "relative" }}>
//                 <div style={{
//                   position: "relative", borderRadius: "24px", overflow: "hidden",
//                   aspectRatio: "4/5",
//                   background: "linear-gradient(145deg, rgba(8,28,44,.95), rgba(3,14,22,.98))",
//                   border: "1px solid rgba(0,180,216,.25)",
//                   boxShadow: "0 25px 60px rgba(0,180,216,.15)",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   padding: "40px",
//                 }}>
//                   <div className="about-rotate" style={{
//                     position: "absolute", inset: "-20%",
//                     background: "conic-gradient(transparent 0%, rgba(0,180,216,.15) 25%, transparent 50%, rgba(245,158,11,.1) 75%, transparent 100%)",
//                     pointerEvents: "none",
//                   }} />

//                   <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
//                     <div style={{
//                       width: "120px", height: "120px", margin: "0 auto 20px",
//                       borderRadius: "50%",
//                       background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                       boxShadow: "0 0 50px rgba(0,180,216,.4)",
//                     }}>
//                       <LucideIcon name="GraduationCap" size={56} color="#031a2b" strokeWidth={2} />
//                     </div>
//                     <h3 className="font-syne" style={{
//                       fontWeight: 800, fontSize: "2.8rem", lineHeight: 1,
//                       letterSpacing: "-1px", marginBottom: "8px",
//                       background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                       WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                       backgroundClip: "text",
//                     }}>AV ACADEMY</h3>
//                     <p style={{
//                       fontSize: "11px", letterSpacing: "4px", color: "#f59e0b",
//                       fontWeight: 700, textTransform: "uppercase", marginBottom: "20px",
//                     }}>Creative Training Institute</p>
//                     <div style={{ width: "60px", height: "2px", background: "#22d3ee", margin: "0 auto 20px", opacity: .5 }} />
//                     <p style={{ fontSize: "13px", color: "#9ca3af", lineHeight: 1.7, maxWidth: "260px", margin: "0 auto" }}>
//                       Where careers are crafted with creativity and technology
//                     </p>
//                   </div>
//                 </div>

//                 {/* Badge: Est. Year */}
//                 <div style={{
//                   position: "absolute", top: "-20px", right: "-20px",
//                   padding: "14px 22px", borderRadius: "16px",
//                   background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
//                   color: "#1a1a1a", fontWeight: 900, fontSize: "14px",
//                   boxShadow: "0 12px 30px rgba(245,158,11,.5), inset 0 0 0 1px rgba(255,255,255,.2)",
//                   display: "flex", alignItems: "center", gap: "8px",
//                   letterSpacing: ".8px", zIndex: 10,
//                   textShadow: "0 1px 0 rgba(255,255,255,.2)",
//                 }}>
//                   <LucideIcon name="Award" size={18} color="#1a1a1a" strokeWidth={3} />
//                   Since 2020
//                 </div>

//                 {/* Badge: Students Count */}
//                 <div style={{
//                   position: "absolute", bottom: "30px", left: "-30px",
//                   padding: "16px 22px", borderRadius: "16px",
//                   background: "linear-gradient(135deg, #0a2436, #061826)",
//                   border: "1px solid rgba(0,180,216,.5)",
//                   backdropFilter: "blur(10px)",
//                   display: "flex", alignItems: "center", gap: "12px",
//                   boxShadow: "0 12px 30px rgba(0,0,0,.5), inset 0 0 0 1px rgba(34,211,238,.15)",
//                   zIndex: 10,
//                 }}>
//                   <div style={{
//                     width: "40px", height: "40px", borderRadius: "10px",
//                     background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     boxShadow: "0 4px 12px rgba(0,180,216,.4)",
//                   }}>
//                     <LucideIcon name="Users" size={20} color="#031a2b" strokeWidth={2.5} />
//                   </div>
//                   <div>
//                     <div className="font-syne" style={{
//                       fontWeight: 900, fontSize: "1.5rem", lineHeight: 1,
//                       background: "linear-gradient(135deg, #22d3ee, #00b4d8)",
//                       WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                       backgroundClip: "text",
//                     }}>1500+</div>
//                     <div style={{
//                       fontSize: "10px", color: "#d1d5db",
//                       letterSpacing: "1.5px", textTransform: "uppercase",
//                       marginTop: "3px", fontWeight: 600,
//                     }}>Students</div>
//                   </div>
//                 </div>
//               </div>
//             </Reveal>

//             <Reveal direction="right">
//               <div style={{
//                 display: "inline-block", fontSize: "12px", fontWeight: 700,
//                 letterSpacing: "2px", textTransform: "uppercase",
//                 color: "#22d3ee", marginBottom: "12px",
//               }}>// Our Story</div>
//               <h2 className="font-syne" style={{
//                 fontWeight: 800, fontSize: "clamp(2rem, 3.5vw, 3rem)",
//                 lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "20px",
//                 color: "#ffffff",
//               }}>
//                 Building Future-Ready{" "}
//                 <span style={{
//                   background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                   WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}>Creative Professionals</span>
//               </h2>
//               <p style={{ fontSize: "16px", color: "#9ca3af", lineHeight: 1.75, marginBottom: "20px" }}>
//                 <strong style={{ color: "#22d3ee" }}>AV Academy</strong> is Lucknow&apos;s leading creative training institute, established with a vision to bridge the gap between traditional education and industry requirements.
//               </p>
//               <p style={{ fontSize: "15px", color: "#9ca3af", lineHeight: 1.75, marginBottom: "32px" }}>
//                 We specialize in <strong style={{ color: "#f59e0b" }}>job-ready training programs</strong> across Graphic Design, Animation, VFX, Video Editing, Programming, AI, and Digital Marketing. With our unique <strong style={{ color: "#22d3ee" }}>hands-on approach</strong> and direct integration with EditLab agency, students work on real client projects from day one.
//               </p>

//               {/* Highlights grid */}
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "32px" }}>
//                 {academyHighlights.map((f) => (
//                   <div key={f.title} style={{
//                     display: "flex", alignItems: "flex-start", gap: "12px",
//                     padding: "16px", borderRadius: "12px",
//                     background: "rgba(8,28,44,.5)", border: "1px solid rgba(0,180,216,.12)",
//                     transition: "all .3s",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.35)"; el.style.transform = "translateY(-2px)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.12)"; el.style.transform = ""; }}>
//                     <div style={{
//                       width: "36px", height: "36px", borderRadius: "10px", flexShrink: 0,
//                       background: "rgba(0,180,216,.1)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                     }}>
//                       <LucideIcon name={f.icon} size={18} color="#22d3ee" strokeWidth={2} />
//                     </div>
//                     <div>
//                       <div className="font-syne" style={{ fontWeight: 700, fontSize: "13px", color: "#f59e0b", marginBottom: "2px" }}>{f.title}</div>
//                       <div style={{ fontSize: "12px", color: "#9ca3af", lineHeight: 1.5 }}>{f.desc}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
//                 <Link href="/courses" style={{
//                   display: "inline-flex", alignItems: "center", gap: "10px",
//                   padding: "14px 28px", borderRadius: "100px",
//                   background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                   color: "#031a2b", fontWeight: 700, fontSize: "14px",
//                   textDecoration: "none", letterSpacing: ".5px",
//                   boxShadow: "0 10px 30px rgba(0,180,216,.3)", transition: "transform .3s",
//                 }}
//                   onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
//                   onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; }}>
//                   <LucideIcon name="BookOpen" size={16} color="#031a2b" strokeWidth={2.5} />
//                   Explore Courses
//                 </Link>
//                 <Link href="/contact" style={{
//                   display: "inline-flex", alignItems: "center", gap: "10px",
//                   padding: "14px 28px", borderRadius: "100px",
//                   background: "transparent",
//                   color: "#22d3ee", fontWeight: 700, fontSize: "14px",
//                   textDecoration: "none", letterSpacing: ".5px",
//                   border: "1px solid rgba(0,180,216,.4)",
//                   transition: "all .3s",
//                 }}
//                   onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(0,180,216,.1)"; el.style.borderColor = "rgba(0,180,216,.6)"; }}
//                   onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.borderColor = "rgba(0,180,216,.4)"; }}>
//                   Get Counselling
//                   <LucideIcon name="ArrowRight" size={16} color="#22d3ee" strokeWidth={2.5} />
//                 </Link>
//               </div>
//             </Reveal>
//           </div>
//         </section>

//         {/* ============ COURSE CATEGORIES ============ */}
//         <section style={{ padding: "100px 40px", background: "#061826", position: "relative", overflow: "hidden" }}>
//           <div style={{
//             position: "absolute", inset: 0,
//             background: "radial-gradient(ellipse at center, rgba(0,180,216,.06) 0%, transparent 70%)",
//             pointerEvents: "none",
//           }} />

//           <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1 }}>
//             <Reveal>
//               <div style={{ textAlign: "center", marginBottom: "60px" }}>
//                 <div style={{
//                   fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//                   textTransform: "uppercase", color: "#22d3ee", marginBottom: "12px",
//                 }}>// Our Courses</div>
//                 <h2 className="font-syne" style={{
//                   fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
//                   letterSpacing: "-1px", marginBottom: "14px", color: "#ffffff",
//                 }}>
//                   30+ Industry-Focused{" "}
//                   <span style={{
//                     background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                     WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                     backgroundClip: "text",
//                   }}>Course Programs</span>
//                 </h2>
//                 <p style={{ fontSize: "15px", color: "#9ca3af", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>
//                   From creative arts to cutting-edge technology — discover programs designed to launch your career
//                 </p>
//               </div>
//             </Reveal>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
//               {courseCategories.map((cat, i) => (
//                 <Reveal key={cat.title} delay={i * 80}>
//                   <Link href="/courses" style={{ textDecoration: "none", display: "block", height: "100%" }}>
//                     <div style={{
//                       padding: "30px 26px", borderRadius: "20px", height: "100%",
//                       background: "linear-gradient(145deg, rgba(8,28,44,.85), rgba(3,14,22,.95))",
//                       border: "1px solid rgba(0,180,216,.18)",
//                       transition: "all .4s", position: "relative", overflow: "hidden",
//                       cursor: "pointer",
//                     }}
//                       onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.5)"; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 40px rgba(0,180,216,.15)"; }}
//                       onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.18)"; el.style.transform = ""; el.style.boxShadow = ""; }}>
//                       <div style={{
//                         position: "absolute", top: 0, left: 0, right: 0, height: "3px",
//                         background: `linear-gradient(90deg, ${cat.color}, #f59e0b)`,
//                         opacity: .6,
//                       }} />

//                       <div style={{
//                         width: "54px", height: "54px", borderRadius: "14px", marginBottom: "18px",
//                         background: "linear-gradient(135deg, rgba(0,180,216,.15), rgba(34,211,238,.05))",
//                         border: "1px solid rgba(0,180,216,.25)",
//                         display: "flex", alignItems: "center", justifyContent: "center",
//                       }}>
//                         <LucideIcon name={cat.icon} size={26} color={cat.color} strokeWidth={1.8} />
//                       </div>
//                       <h3 className="font-syne" style={{
//                         fontWeight: 700, fontSize: "1.15rem", color: "#ffffff",
//                         marginBottom: "8px", letterSpacing: "-.3px",
//                       }}>
//                         {cat.title}
//                       </h3>
//                       <p style={{ fontSize: "13px", color: "#f59e0b", fontWeight: 600, letterSpacing: ".5px" }}>
//                         {cat.count}
//                       </p>
//                     </div>
//                   </Link>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ LEARNING JOURNEY ============ */}
//         <section style={{ padding: "100px 40px", background: "#030f1a" }}>
//           <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
//             <Reveal>
//               <div style={{ textAlign: "center", marginBottom: "60px" }}>
//                 <div style={{
//                   fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//                   textTransform: "uppercase", color: "#22d3ee", marginBottom: "12px",
//                 }}>// Student Journey</div>
//                 <h2 className="font-syne" style={{
//                   fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
//                   letterSpacing: "-1px", marginBottom: "14px", color: "#ffffff",
//                 }}>
//                   Your Path to{" "}
//                   <span style={{
//                     background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                     WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                     backgroundClip: "text",
//                   }}>Career Success</span>
//                 </h2>
//                 <p style={{ fontSize: "15px", color: "#9ca3af", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
//                   A proven 5-step methodology that has launched 1500+ successful careers
//                 </p>
//               </div>
//             </Reveal>

//             <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//               {learningJourney.map((j, i) => (
//                 <Reveal key={j.step} delay={i * 100}>
//                   <div style={{
//                     display: "grid", gridTemplateColumns: "auto 1fr",
//                     gap: "30px", alignItems: "center",
//                     padding: "28px 32px", borderRadius: "20px",
//                     background: "linear-gradient(135deg, rgba(8,28,44,.85), rgba(3,14,22,.9))",
//                     border: "1px solid rgba(0,180,216,.18)",
//                     transition: "all .4s",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.5)"; el.style.transform = "translateX(10px)"; el.style.boxShadow = "0 15px 40px rgba(0,180,216,.12)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.18)"; el.style.transform = ""; el.style.boxShadow = ""; }}>

//                     <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
//                       <div className="font-syne" style={{
//                         fontSize: "3rem", fontWeight: 900, lineHeight: 1,
//                         background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
//                         WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                         backgroundClip: "text", letterSpacing: "-2px",
//                         minWidth: "70px",
//                       }}>
//                         {j.step}
//                       </div>
//                       <div style={{
//                         width: "60px", height: "60px", borderRadius: "16px",
//                         background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                         display: "flex", alignItems: "center", justifyContent: "center",
//                         boxShadow: "0 8px 20px rgba(0,180,216,.3)",
//                         flexShrink: 0,
//                       }}>
//                         <LucideIcon name={j.icon} size={28} color="#031a2b" strokeWidth={2} />
//                       </div>
//                     </div>

//                     <div>
//                       <h3 className="font-syne" style={{
//                         fontWeight: 700, fontSize: "1.3rem", color: "#ffffff",
//                         marginBottom: "6px", letterSpacing: "-.3px",
//                       }}>
//                         {j.title}
//                       </h3>
//                       <p style={{ fontSize: "14px", color: "#9ca3af", lineHeight: 1.65 }}>
//                         {j.desc}
//                       </p>
//                     </div>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ ACADEMY ACHIEVEMENTS ============ */}
//         <section style={{
//           padding: "100px 40px", background: "#061826",
//           position: "relative", overflow: "hidden",
//         }}>
//           <div style={{
//             position: "absolute", inset: 0,
//             background: "radial-gradient(ellipse at center, rgba(0,180,216,.06) 0%, transparent 70%)",
//             pointerEvents: "none",
//           }} />

//           <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1 }}>
//             <Reveal>
//               <div style={{ textAlign: "center", marginBottom: "60px" }}>
//                 <div style={{
//                   fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//                   textTransform: "uppercase", color: "#22d3ee", marginBottom: "12px",
//                 }}>// Our Achievements</div>
//                 <h2 className="font-syne" style={{
//                   fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
//                   letterSpacing: "-1px", marginBottom: "14px", color: "#ffffff",
//                 }}>
//                   Numbers That Speak{" "}
//                   <span style={{
//                     background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                     WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                     backgroundClip: "text",
//                   }}>For Themselves</span>
//                 </h2>
//                 <p style={{ fontSize: "15px", color: "#9ca3af", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
//                   5 years of excellence in creative education and skill development
//                 </p>
//               </div>
//             </Reveal>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
//               {academyAchievements.map((s, i) => (
//                 <Reveal key={s.label} delay={i * 100}>
//                   <div style={{
//                     padding: "36px 24px", borderRadius: "20px", textAlign: "center",
//                     background: "linear-gradient(145deg, rgba(8,28,44,.8), rgba(3,14,22,.9))",
//                     border: "1px solid rgba(0,180,216,.18)",
//                     transition: "all .4s", position: "relative", overflow: "hidden",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.5)"; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 40px rgba(0,180,216,.15)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.18)"; el.style.transform = ""; el.style.boxShadow = ""; }}>
//                     <div style={{
//                       width: "56px", height: "56px", margin: "0 auto 18px",
//                       borderRadius: "14px",
//                       background: "linear-gradient(135deg, rgba(0,180,216,.15), rgba(34,211,238,.05))",
//                       border: "1px solid rgba(0,180,216,.25)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                     }}>
//                       <LucideIcon name={s.icon} size={26} color="#22d3ee" strokeWidth={1.8} />
//                     </div>
//                     <div className="font-syne" style={{
//                       fontWeight: 800, fontSize: "2.6rem", lineHeight: 1,
//                       letterSpacing: "-1.5px", marginBottom: "8px",
//                       background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
//                       WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                       backgroundClip: "text",
//                     }}>
//                       {s.num}
//                     </div>
//                     <div style={{
//                       fontSize: "12px", color: "#9ca3af",
//                       textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600,
//                     }}>
//                       {s.label}
//                     </div>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ WHY CHOOSE AV ACADEMY ============ */}
//         <section style={{
//           padding: "100px 40px", background: "#030f1a",
//           position: "relative", overflow: "hidden",
//         }}>
//           <div style={{
//             position: "absolute", inset: 0,
//             background: "radial-gradient(ellipse at top, rgba(0,180,216,.08) 0%, transparent 60%)",
//             pointerEvents: "none",
//           }} />

//           <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1 }}>
//             <Reveal>
//               <div style={{ textAlign: "center", marginBottom: "60px" }}>
//                 <div style={{
//                   fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//                   textTransform: "uppercase", color: "#22d3ee", marginBottom: "12px",
//                 }}>// Why AV Academy</div>
//                 <h2 className="font-syne" style={{
//                   fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
//                   letterSpacing: "-1px", marginBottom: "14px", color: "#ffffff",
//                 }}>
//                   Why Students Choose{" "}
//                   <span style={{
//                     background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                     WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                     backgroundClip: "text",
//                   }}>AV Academy</span>
//                 </h2>
//                 <p style={{ fontSize: "15px", color: "#9ca3af", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>
//                   Eight reasons why we&apos;re Lucknow&apos;s most trusted creative training institute
//                 </p>
//               </div>
//             </Reveal>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
//               {whyChooseAcademy.map((item, i) => (
//                 <Reveal key={item.title} delay={i * 60}>
//                   <div style={{
//                     padding: "28px 28px", borderRadius: "20px", height: "100%",
//                     display: "flex", gap: "20px", alignItems: "flex-start",
//                     background: "linear-gradient(145deg, rgba(8,28,44,.85), rgba(3,14,22,.95))",
//                     border: "1px solid rgba(0,180,216,.15)",
//                     transition: "all .4s", position: "relative", overflow: "hidden",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.5)"; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 20px 40px rgba(0,180,216,.12)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.15)"; el.style.transform = ""; el.style.boxShadow = ""; }}>
//                     <div style={{
//                       width: "54px", height: "54px", borderRadius: "14px", flexShrink: 0,
//                       background: "linear-gradient(135deg, rgba(0,180,216,.15), rgba(34,211,238,.05))",
//                       border: "1px solid rgba(0,180,216,.25)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                     }}>
//                       <LucideIcon name={item.icon} size={26} color="#22d3ee" strokeWidth={1.8} />
//                     </div>
//                     <div>
//                       <h3 className="font-syne" style={{
//                         fontWeight: 700, fontSize: "1.1rem", color: "#f59e0b",
//                         marginBottom: "8px", letterSpacing: "-.3px",
//                       }}>
//                         {item.title}
//                       </h3>
//                       <p style={{ fontSize: "13.5px", color: "#9ca3af", lineHeight: 1.65 }}>
//                         {item.desc}
//                       </p>
//                     </div>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ STUDENT SUCCESS STORIES ============ */}
//         <section style={{ padding: "100px 40px", background: "#061826" }}>
//           <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
//             <Reveal>
//               <div style={{ textAlign: "center", marginBottom: "60px" }}>
//                 <div style={{
//                   fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//                   textTransform: "uppercase", color: "#22d3ee", marginBottom: "12px",
//                 }}>// Success Stories</div>
//                 <h2 className="font-syne" style={{
//                   fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
//                   letterSpacing: "-1px", marginBottom: "14px", color: "#ffffff",
//                 }}>
//                   Our Students Are{" "}
//                   <span style={{
//                     background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                     WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                     backgroundClip: "text",
//                   }}>Industry Leaders</span>
//                 </h2>
//                 <p style={{ fontSize: "15px", color: "#9ca3af", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>
//                   Meet a few of our graduates who are now shaping the creative industry
//                 </p>
//               </div>
//             </Reveal>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
//               {studentSuccess.map((s, i) => (
//                 <Reveal key={s.name} delay={i * 80}>
//                   <div style={{
//                     padding: "32px 24px", borderRadius: "20px", textAlign: "center",
//                     background: "linear-gradient(145deg, rgba(8,28,44,.85), rgba(3,14,22,.95))",
//                     border: "1px solid rgba(0,180,216,.18)",
//                     transition: "all .4s", position: "relative", overflow: "hidden",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.5)"; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 40px rgba(0,180,216,.15)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.18)"; el.style.transform = ""; el.style.boxShadow = ""; }}>
//                     <div style={{
//                       width: "80px", height: "80px", margin: "0 auto 16px",
//                       borderRadius: "50%",
//                       background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                       boxShadow: "0 10px 25px rgba(0,180,216,.3)",
//                       color: "#031a2b", fontWeight: 900, fontSize: "1.5rem",
//                       letterSpacing: "-1px",
//                     }} className="font-syne">
//                       {s.img}
//                     </div>
//                     <h3 className="font-syne" style={{
//                       fontWeight: 700, fontSize: "1.05rem", color: "#ffffff",
//                       marginBottom: "6px",
//                     }}>
//                       {s.name}
//                     </h3>
//                     <div style={{
//                       fontSize: "11px", color: "#f59e0b", fontWeight: 600,
//                       letterSpacing: "1px", textTransform: "uppercase", marginBottom: "10px",
//                     }}>
//                       {s.course}
//                     </div>
//                     <div style={{
//                       paddingTop: "12px", borderTop: "1px solid rgba(0,180,216,.15)",
//                       fontSize: "12.5px", color: "#9ca3af", lineHeight: 1.5,
//                     }}>
//                       {s.role}
//                     </div>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ MEET AV EDITLAB (SECONDARY — Compact) ============ */}
//         <section style={{
//           padding: "100px 40px",
//           background: "linear-gradient(160deg, #030f1a 0%, #0a2436 100%)",
//           position: "relative", overflow: "hidden",
//         }}>
//           <div style={{
//             position: "absolute", top: "-100px", right: "-100px",
//             width: "400px", height: "400px", borderRadius: "50%",
//             background: "radial-gradient(circle, rgba(245,158,11,.08), transparent 70%)",
//             filter: "blur(60px)", pointerEvents: "none",
//           }} />
//           <div style={{
//             position: "absolute", bottom: "-100px", left: "-100px",
//             width: "400px", height: "400px", borderRadius: "50%",
//             background: "radial-gradient(circle, rgba(0,180,216,.08), transparent 70%)",
//             filter: "blur(60px)", pointerEvents: "none",
//           }} />

//           <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "70px", alignItems: "center" }}>
//             {/* LEFT — Content */}
//             <Reveal direction="left">
//               <div style={{
//                 display: "inline-flex", alignItems: "center", gap: "8px",
//                 fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//                 textTransform: "uppercase", color: "#f59e0b", marginBottom: "12px",
//                 padding: "6px 14px", borderRadius: "100px",
//                 background: "rgba(245,158,11,.1)", border: "1px solid rgba(245,158,11,.3)",
//               }}>
//                 <LucideIcon name="Sparkles" size={14} color="#f59e0b" strokeWidth={2} />
//                 Our Creative Agency
//               </div>
//               <h2 className="font-syne" style={{
//                 fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
//                 lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "20px",
//                 color: "#ffffff",
//               }}>
//                 Meet{" "}
//                 <span style={{
//                   background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
//                   WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}>AV EditLab</span>
//                 {" "}— Our In-House Agency
//               </h2>
//               <p style={{ fontSize: "15.5px", color: "#9ca3af", lineHeight: 1.75, marginBottom: "20px" }}>
//                 Beyond training, we run <strong style={{ color: "#f59e0b" }}>AV EditLab</strong> — a full-service creative agency serving 100+ brands across packaging, hospitality, real estate, fashion, automotive, and more.
//               </p>
//               <p style={{ fontSize: "14px", color: "#9ca3af", lineHeight: 1.7, marginBottom: "28px" }}>
//                 This unique setup gives our students a <strong style={{ color: "#22d3ee" }}>real-world advantage</strong> — they work on actual client projects during training, building portfolios that get them hired faster.
//               </p>

//               {/* Services chips */}
//               <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
//                 {editLabServices.map((s) => (
//                   <div key={s.title} style={{
//                     display: "inline-flex", alignItems: "center", gap: "8px",
//                     padding: "10px 16px", borderRadius: "100px",
//                     background: "rgba(245,158,11,.08)",
//                     border: "1px solid rgba(245,158,11,.25)",
//                     fontSize: "12.5px", color: "#fbbf24", fontWeight: 600,
//                     transition: "all .3s",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(245,158,11,.5)"; el.style.background = "rgba(245,158,11,.15)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(245,158,11,.25)"; el.style.background = "rgba(245,158,11,.08)"; }}>
//                     <LucideIcon name={s.icon} size={14} color="#fbbf24" strokeWidth={2} />
//                     {s.title}
//                   </div>
//                 ))}
//               </div>

//               <Link href="/services" style={{
//                 display: "inline-flex", alignItems: "center", gap: "10px",
//                 padding: "14px 28px", borderRadius: "100px",
//                 background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
//                 color: "#1a1a1a", fontWeight: 800, fontSize: "14px",
//                 textDecoration: "none", letterSpacing: ".5px",
//                 boxShadow: "0 10px 30px rgba(245,158,11,.3)",
//                 transition: "transform .3s",
//               }}
//                 onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
//                 onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; }}>
//                 Explore EditLab Services
//                 <LucideIcon name="ArrowRight" size={16} color="#1a1a1a" strokeWidth={2.5} />
//               </Link>
//             </Reveal>

//             {/* RIGHT — Visual Card */}
//             <Reveal direction="right">
//               <div style={{ position: "relative" }}>
//                 <div style={{
//                   aspectRatio: "1/1", borderRadius: "24px",
//                   background: "linear-gradient(135deg, rgba(245,158,11,.15), rgba(8,28,44,.95))",
//                   border: "1px solid rgba(245,158,11,.3)",
//                   display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
//                   position: "relative", overflow: "hidden", padding: "40px",
//                   boxShadow: "0 25px 60px rgba(245,158,11,.12)",
//                 }}>
//                   <div className="about-rotate" style={{
//                     position: "absolute", inset: "10%", borderRadius: "50%",
//                     border: "2px dashed rgba(245,158,11,.25)",
//                   }} />
//                   <div className="about-rotate" style={{
//                     position: "absolute", inset: "25%", borderRadius: "50%",
//                     border: "1px solid rgba(0,180,216,.2)",
//                     animationDirection: "reverse", animationDuration: "30s",
//                   }} />

//                   <div style={{
//                     width: "120px", height: "120px", borderRadius: "50%",
//                     background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     boxShadow: "0 0 60px rgba(245,158,11,.5)",
//                     position: "relative", zIndex: 1, marginBottom: "20px",
//                   }}>
//                     <LucideIcon name="Palette" size={56} color="#1a1a1a" strokeWidth={2} />
//                   </div>
//                   <h3 className="font-syne" style={{
//                     fontSize: "1.8rem", fontWeight: 800, color: "#ffffff",
//                     letterSpacing: "-1px", position: "relative", zIndex: 1, marginBottom: "8px",
//                   }}>
//                     AV EDITLAB
//                   </h3>
//                   <p style={{
//                     fontSize: "11px", letterSpacing: "3px", color: "#22d3ee",
//                     fontWeight: 700, textTransform: "uppercase",
//                     position: "relative", zIndex: 1, marginBottom: "20px",
//                   }}>Creative Agency</p>

//                   {/* Stats inside card */}
//                   <div style={{
//                     display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px",
//                     width: "100%", maxWidth: "300px", position: "relative", zIndex: 1,
//                   }}>
//                     <div style={{
//                       padding: "14px", borderRadius: "12px", textAlign: "center",
//                       background: "rgba(8,28,44,.6)", border: "1px solid rgba(245,158,11,.2)",
//                     }}>
//                       <div className="font-syne" style={{
//                         fontWeight: 900, fontSize: "1.4rem", lineHeight: 1,
//                         background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
//                         WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                         backgroundClip: "text",
//                       }}>100+</div>
//                       <div style={{ fontSize: "10px", color: "#9ca3af", marginTop: "4px", letterSpacing: ".5px", textTransform: "uppercase" }}>Clients</div>
//                     </div>
//                     <div style={{
//                       padding: "14px", borderRadius: "12px", textAlign: "center",
//                       background: "rgba(8,28,44,.6)", border: "1px solid rgba(245,158,11,.2)",
//                     }}>
//                       <div className="font-syne" style={{
//                         fontWeight: 900, fontSize: "1.4rem", lineHeight: 1,
//                         background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
//                         WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                         backgroundClip: "text",
//                       }}>1000+</div>
//                       <div style={{ fontSize: "10px", color: "#9ca3af", marginTop: "4px", letterSpacing: ".5px", textTransform: "uppercase" }}>Projects</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Reveal>
//           </div>
//         </section>

//         {/* ============ TRUSTED BY (EditLab Clients) ============ */}
//         <section style={{
//           padding: "60px 40px", background: "#061826",
//           borderTop: "1px solid rgba(0,180,216,.1)",
//           borderBottom: "1px solid rgba(0,180,216,.1)",
//         }}>
//           <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
//             <div style={{ textAlign: "center", marginBottom: "32px" }}>
//               <span style={{
//                 fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//                 textTransform: "uppercase", color: "#22d3ee",
//               }}>// Trusted By Brands Across India</span>
//             </div>
//             <div style={{
//               display: "flex", flexWrap: "wrap", justifyContent: "center",
//               alignItems: "center", gap: "16px",
//             }}>
//               {trustedBrands.map((brand) => (
//                 <div key={brand} style={{
//                   padding: "12px 24px", borderRadius: "10px",
//                   background: "rgba(8,28,44,.6)", border: "1px solid rgba(0,180,216,.15)",
//                   color: "#9ca3af", fontSize: "14px", fontWeight: 600,
//                   letterSpacing: ".5px", transition: "all .3s",
//                 }}
//                   onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.4)"; el.style.color = "#22d3ee"; }}
//                   onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.15)"; el.style.color = "#9ca3af"; }}>
//                   {brand}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <CTASection title="Ready to Start Your" highlight="Creative Career?" desc="Join 1500+ students who transformed their passion into successful careers with AV Academy." />
//       </main>
//       <Footer />
//       <WAFloat />
//     </>
//   );
// }


// "use client";
// import LucideIcon from "@/components/LucideIcon";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WAFloat from "@/components/WAFloat";
// import { CTASection } from "@/components/PageSections";
// import { Reveal } from "@/components/ScrollReveal";
// import Link from "next/link";

// // ============ ACADEMY-FOCUSED CONTENT (Primary) ============

// const academyHighlights = [
//   { icon: "GraduationCap", title: "Industry-Ready Courses", desc: "Curriculum designed with real industry demands" },
//   { icon: "Users", title: "Expert Faculty", desc: "Learn from working industry professionals" },
//   { icon: "Briefcase", title: "100% Placement Support", desc: "Dedicated career guidance & job assistance" },
//   { icon: "Trophy", title: "Certified Programs", desc: "Government recognized certifications" },
// ];

// const visionPoints = [
//   { icon: "BookOpen", title: "Industry-Ready Curriculum", desc: "Updated with latest market demands" },
//   { icon: "Wrench", title: "Hands-on Live Projects", desc: "Real work, real portfolio building" },
//   { icon: "GraduationCap", title: "Expert Mentorship", desc: "Learn from working professionals" },
//   { icon: "TrendingUp", title: "Career Transformation", desc: "From learner to industry professional" },
// ];

// const missionPoints = [
//   { icon: "Rocket", title: "Future-Proof Learning", desc: "AI-integrated training that stays relevant" },
//   { icon: "Target", title: "Practical Mastery", desc: "Skill-based modules, not just theory" },
//   { icon: "HeartHandshake", title: "Mentorship & Support", desc: "We walk with you, not just teach" },
//   { icon: "Award", title: "Growth & Excellence", desc: "Measurable progress every step" },
// ];

// const courseCategories = [
//   { icon: "Palette", title: "Graphic Design", count: "8+ Courses", color: "#22d3ee" },
//   { icon: "Video", title: "Video Editing & VFX", count: "6+ Courses", color: "#22d3ee" },
//   { icon: "Box", title: "2D & 3D Animation", count: "5+ Courses", color: "#22d3ee" },
//   { icon: "Code2", title: "Programming Languages", count: "7+ Courses", color: "#22d3ee" },
//   { icon: "Brain", title: "AI & Data Science", count: "4+ Courses", color: "#f59e0b" },
//   { icon: "Megaphone", title: "Digital Marketing", count: "3+ Courses", color: "#22d3ee" },
// ];

// const learningJourney = [
//   { step: "01", icon: "Search", title: "Choose Your Course", desc: "Browse 30+ industry-focused programs aligned with your career goals" },
//   { step: "02", icon: "BookOpen", title: "Learn From Experts", desc: "Interactive classes with working professionals & hands-on training" },
//   { step: "03", icon: "Wrench", title: "Build Real Projects", desc: "Work on live client projects from EditLab agency to build portfolio" },
//   { step: "04", icon: "Award", title: "Get Certified", desc: "Earn industry-recognized certifications upon course completion" },
//   { step: "05", icon: "Briefcase", title: "Land Your Dream Job", desc: "Career counseling, interview prep & placement assistance" },
// ];

// const academyAchievements = [
//   { num: "1500+", label: "Students Trained", icon: "Users" },
//   { num: "30+", label: "Courses Offered", icon: "BookOpen" },
//   { num: "95%", label: "Placement Rate", icon: "TrendingUp" },
//   { num: "5+", label: "Years Teaching", icon: "Calendar" },
// ];

// const whyChooseAcademy = [
//   { icon: "Target", title: "Industry-Focused Curriculum", desc: "Every course is designed based on current industry demands and updated regularly with latest trends and technologies." },
//   { icon: "Users", title: "Small Batch Sizes", desc: "Limited students per batch ensures personalized attention from instructors and better learning outcomes." },
//   { icon: "Wrench", title: "Hands-On Practical Training", desc: "70% practical, 30% theory approach. Work on real client projects from EditLab agency during your training." },
//   { icon: "GraduationCap", title: "Expert Mentorship", desc: "Learn from 5+ years experienced professionals who are actively working in top companies and agencies." },
//   { icon: "Briefcase", title: "Placement Assistance", desc: "Resume building, mock interviews, portfolio review, and direct connections with hiring companies." },
//   { icon: "Sparkles", title: "AI-Integrated Learning", desc: "First academy in Lucknow to integrate AI tools (ChatGPT, Midjourney, Runway) into traditional creative courses." },
//   { icon: "Clock", title: "Flexible Timings", desc: "Morning, evening, and weekend batches available. Online + offline hybrid options for working professionals." },
//   { icon: "Trophy", title: "Recognized Certifications", desc: "Government recognized certifications + industry endorsed credentials accepted across India." },
// ];

// const studentSuccess = [
//   { name: "Priya Sharma", course: "Graphic Design", role: "UI Designer at Tech Startup", img: "PS" },
//   { name: "Rohit Kumar", course: "3D Animation", role: "3D Artist at Production House", img: "RK" },
//   { name: "Anjali Verma", course: "Digital Marketing", role: "Marketing Manager", img: "AV" },
//   { name: "Vikash Singh", course: "VFX Master Class", role: "VFX Artist (Bollywood)", img: "VS" },
// ];

// // ============ EDITLAB CONTENT (Secondary) ============

// const editLabServices = [
//   { icon: "Palette", title: "Graphic Design" },
//   { icon: "Video", title: "Video Editing" },
//   { icon: "Box", title: "3D Animation" },
//   { icon: "Sparkles", title: "VFX Services" },
//   { icon: "Megaphone", title: "Digital Marketing" },
//   { icon: "Camera", title: "Photography" },
// ];

// const trustedBrands = [
//   "Grapess", "Tour4YOU", "Diabeto India", "Madhurveda",
//   "Sai Paradise", "TechGrow", "Aura Skincare",
// ];

// export default function AboutPage() {
//   return (
//     <>
//       <Navbar />
//       <main>
//         {/* ============ HERO ============ */}
//         <section style={{
//           position: "relative",
//           paddingTop: "160px",
//           paddingBottom: "100px",
//           paddingLeft: "40px",
//           paddingRight: "40px",
//           background: "linear-gradient(160deg, #061826 0%, #0a2436 50%, #061826 100%)",
//           textAlign: "center",
//           overflow: "hidden",
//           borderBottom: "1px solid rgba(0,180,216,.15)",
//         }}>
//           <div style={{
//             position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)",
//             width: "600px", height: "300px",
//             background: "radial-gradient(ellipse, rgba(0,180,216,.18) 0%, transparent 70%)",
//             pointerEvents: "none", filter: "blur(20px)",
//           }} />
//           <div style={{
//             position: "absolute", top: "30%", left: "8%",
//             width: "200px", height: "200px", borderRadius: "50%",
//             background: "radial-gradient(circle, rgba(0,180,216,.12), transparent 70%)",
//             filter: "blur(40px)", pointerEvents: "none",
//           }} />
//           <div style={{
//             position: "absolute", bottom: "10%", right: "10%",
//             width: "240px", height: "240px", borderRadius: "50%",
//             background: "radial-gradient(circle, rgba(245,158,11,.08), transparent 70%)",
//             filter: "blur(50px)", pointerEvents: "none",
//           }} />
//           <div style={{
//             position: "absolute", inset: 0,
//             backgroundImage: "linear-gradient(rgba(0,180,216,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,.04) 1px, transparent 1px)",
//             backgroundSize: "60px 60px", opacity: .5, pointerEvents: "none",
//           }} />

//           <div style={{ position: "relative", zIndex: 2, maxWidth: "1000px", margin: "0 auto" }}>
//             <span style={{
//               display: "inline-flex", alignItems: "center", gap: "8px",
//               padding: "8px 20px", borderRadius: "100px",
//               fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//               textTransform: "uppercase", marginBottom: "28px",
//               background: "rgba(0,180,216,.12)", border: "1px solid rgba(0,180,216,.4)",
//               color: "#22d3ee", boxShadow: "0 0 30px rgba(0,180,216,.2)",
//             }}>
//               <LucideIcon name="GraduationCap" size={14} color="#22d3ee" strokeWidth={2} />
//               About AV Academy &amp; EditLab
//             </span>

//             <h1 className="font-syne" style={{
//               fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
//               lineHeight: 1.05, letterSpacing: "-2px", marginBottom: "24px",
//               color: "#ffffff",
//             }}>
//               Lucknow&apos;s Premier{" "}
//               <span style={{
//                 background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                 WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}>Creative Training Hub</span>
//             </h1>

//             <p style={{
//               fontSize: "18px", color: "#9ca3af", maxWidth: "720px",
//               margin: "0 auto 28px", lineHeight: 1.7,
//             }}>
//               Empowering 1500+ students with industry-ready skills — backed by our in-house creative agency <strong style={{ color: "#22d3ee" }}>AV EditLab</strong> for real-world project experience.
//             </p>

//             <div style={{
//               display: "inline-flex", alignItems: "center", gap: "10px",
//               fontSize: "13px", color: "#6b7280",
//               padding: "10px 20px", borderRadius: "100px",
//               background: "rgba(8,28,44,.6)", border: "1px solid rgba(0,180,216,.15)",
//             }}>
//               <Link href="/" style={{ color: "#22d3ee", textDecoration: "none", fontWeight: 600 }}>Home</Link>
//               <LucideIcon name="ChevronRight" size={14} color="#6b7280" />
//               <span style={{ color: "#d1d5db" }}>About Us</span>
//             </div>
//           </div>
//         </section>

//         {/* ============ ACADEMY STORY ============ */}
//         <section style={{ padding: "100px 40px", background: "#030f1a" }}>
//           <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "70px", alignItems: "center" }}>
//             <Reveal direction="left">
//               <div style={{ position: "relative" }}>
//                 <div style={{
//                   position: "relative", borderRadius: "24px", overflow: "hidden",
//                   aspectRatio: "4/5",
//                   background: "linear-gradient(145deg, rgba(8,28,44,.95), rgba(3,14,22,.98))",
//                   border: "1px solid rgba(0,180,216,.25)",
//                   boxShadow: "0 25px 60px rgba(0,180,216,.15)",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   padding: "40px",
//                 }}>
//                   <div className="about-rotate" style={{
//                     position: "absolute", inset: "-20%",
//                     background: "conic-gradient(transparent 0%, rgba(0,180,216,.15) 25%, transparent 50%, rgba(245,158,11,.1) 75%, transparent 100%)",
//                     pointerEvents: "none",
//                   }} />

//                   <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
//                     <div style={{
//                       width: "120px", height: "120px", margin: "0 auto 20px",
//                       borderRadius: "50%",
//                       background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                       boxShadow: "0 0 50px rgba(0,180,216,.4)",
//                     }}>
//                       <LucideIcon name="GraduationCap" size={56} color="#031a2b" strokeWidth={2} />
//                     </div>
//                     <h3 className="font-syne" style={{
//                       fontWeight: 800, fontSize: "2.8rem", lineHeight: 1,
//                       letterSpacing: "-1px", marginBottom: "8px",
//                       background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                       WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                       backgroundClip: "text",
//                     }}>AV ACADEMY</h3>
//                     <p style={{
//                       fontSize: "11px", letterSpacing: "4px", color: "#f59e0b",
//                       fontWeight: 700, textTransform: "uppercase", marginBottom: "20px",
//                     }}>Creative Training Institute</p>
//                     <div style={{ width: "60px", height: "2px", background: "#22d3ee", margin: "0 auto 20px", opacity: .5 }} />
//                     <p style={{ fontSize: "13px", color: "#9ca3af", lineHeight: 1.7, maxWidth: "260px", margin: "0 auto" }}>
//                       Where careers are crafted with creativity and technology
//                     </p>
//                   </div>
//                 </div>

//                 {/* Badge: Est. Year */}
//                 <div style={{
//                   position: "absolute", top: "-20px", right: "-20px",
//                   padding: "14px 22px", borderRadius: "16px",
//                   background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
//                   color: "#1a1a1a", fontWeight: 900, fontSize: "14px",
//                   boxShadow: "0 12px 30px rgba(245,158,11,.5), inset 0 0 0 1px rgba(255,255,255,.2)",
//                   display: "flex", alignItems: "center", gap: "8px",
//                   letterSpacing: ".8px", zIndex: 10,
//                   textShadow: "0 1px 0 rgba(255,255,255,.2)",
//                 }}>
//                   <LucideIcon name="Award" size={18} color="#1a1a1a" strokeWidth={3} />
//                   Since 2020
//                 </div>

//                 {/* Badge: Students Count */}
//                 <div style={{
//                   position: "absolute", bottom: "30px", left: "-30px",
//                   padding: "16px 22px", borderRadius: "16px",
//                   background: "linear-gradient(135deg, #0a2436, #061826)",
//                   border: "1px solid rgba(0,180,216,.5)",
//                   backdropFilter: "blur(10px)",
//                   display: "flex", alignItems: "center", gap: "12px",
//                   boxShadow: "0 12px 30px rgba(0,0,0,.5), inset 0 0 0 1px rgba(34,211,238,.15)",
//                   zIndex: 10,
//                 }}>
//                   <div style={{
//                     width: "40px", height: "40px", borderRadius: "10px",
//                     background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     boxShadow: "0 4px 12px rgba(0,180,216,.4)",
//                   }}>
//                     <LucideIcon name="Users" size={20} color="#031a2b" strokeWidth={2.5} />
//                   </div>
//                   <div>
//                     <div className="font-syne" style={{
//                       fontWeight: 900, fontSize: "1.5rem", lineHeight: 1,
//                       background: "linear-gradient(135deg, #22d3ee, #00b4d8)",
//                       WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                       backgroundClip: "text",
//                     }}>1500+</div>
//                     <div style={{
//                       fontSize: "10px", color: "#d1d5db",
//                       letterSpacing: "1.5px", textTransform: "uppercase",
//                       marginTop: "3px", fontWeight: 600,
//                     }}>Students</div>
//                   </div>
//                 </div>
//               </div>
//             </Reveal>

//             <Reveal direction="right">
//               <div style={{
//                 display: "inline-block", fontSize: "12px", fontWeight: 700,
//                 letterSpacing: "2px", textTransform: "uppercase",
//                 color: "#22d3ee", marginBottom: "12px",
//               }}>// Our Story</div>
//               <h2 className="font-syne" style={{
//                 fontWeight: 800, fontSize: "clamp(2rem, 3.5vw, 3rem)",
//                 lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "20px",
//                 color: "#ffffff",
//               }}>
//                 Building Future-Ready{" "}
//                 <span style={{
//                   background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                   WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}>Creative Professionals</span>
//               </h2>
//               <p style={{ fontSize: "16px", color: "#9ca3af", lineHeight: 1.75, marginBottom: "20px" }}>
//                 <strong style={{ color: "#22d3ee" }}>AV Academy</strong> is Lucknow&apos;s leading creative training institute, established with a vision to bridge the gap between traditional education and industry requirements.
//               </p>
//               <p style={{ fontSize: "15px", color: "#9ca3af", lineHeight: 1.75, marginBottom: "32px" }}>
//                 We specialize in <strong style={{ color: "#f59e0b" }}>job-ready training programs</strong> across Graphic Design, Animation, VFX, Video Editing, Programming, AI, and Digital Marketing. With our unique <strong style={{ color: "#22d3ee" }}>hands-on approach</strong> and direct integration with EditLab agency, students work on real client projects from day one.
//               </p>

//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "32px" }}>
//                 {academyHighlights.map((f) => (
//                   <div key={f.title} style={{
//                     display: "flex", alignItems: "flex-start", gap: "12px",
//                     padding: "16px", borderRadius: "12px",
//                     background: "rgba(8,28,44,.5)", border: "1px solid rgba(0,180,216,.12)",
//                     transition: "all .3s",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.35)"; el.style.transform = "translateY(-2px)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.12)"; el.style.transform = ""; }}>
//                     <div style={{
//                       width: "36px", height: "36px", borderRadius: "10px", flexShrink: 0,
//                       background: "rgba(0,180,216,.1)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                     }}>
//                       <LucideIcon name={f.icon} size={18} color="#22d3ee" strokeWidth={2} />
//                     </div>
//                     <div>
//                       <div className="font-syne" style={{ fontWeight: 700, fontSize: "13px", color: "#f59e0b", marginBottom: "2px" }}>{f.title}</div>
//                       <div style={{ fontSize: "12px", color: "#9ca3af", lineHeight: 1.5 }}>{f.desc}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
//                 <Link href="/courses" style={{
//                   display: "inline-flex", alignItems: "center", gap: "10px",
//                   padding: "14px 28px", borderRadius: "100px",
//                   background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                   color: "#031a2b", fontWeight: 700, fontSize: "14px",
//                   textDecoration: "none", letterSpacing: ".5px",
//                   boxShadow: "0 10px 30px rgba(0,180,216,.3)", transition: "transform .3s",
//                 }}
//                   onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
//                   onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; }}>
//                   <LucideIcon name="BookOpen" size={16} color="#031a2b" strokeWidth={2.5} />
//                   Explore Courses
//                 </Link>
//                 <Link href="/contact" style={{
//                   display: "inline-flex", alignItems: "center", gap: "10px",
//                   padding: "14px 28px", borderRadius: "100px",
//                   background: "transparent",
//                   color: "#22d3ee", fontWeight: 700, fontSize: "14px",
//                   textDecoration: "none", letterSpacing: ".5px",
//                   border: "1px solid rgba(0,180,216,.4)",
//                   transition: "all .3s",
//                 }}
//                   onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(0,180,216,.1)"; el.style.borderColor = "rgba(0,180,216,.6)"; }}
//                   onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.borderColor = "rgba(0,180,216,.4)"; }}>
//                   Get Counselling
//                   <LucideIcon name="ArrowRight" size={16} color="#22d3ee" strokeWidth={2.5} />
//                 </Link>
//               </div>
//             </Reveal>
//           </div>
//         </section>

//         {/* ============ OUR VISION ============ */}
//         <section style={{ padding: "100px 40px", background: "#061826" }}>
//           <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "70px", alignItems: "center" }}>
//             {/* LEFT — Vision Visual */}
//             <Reveal direction="left">
//               <div style={{ position: "relative" }}>
//                 <div style={{
//                   aspectRatio: "1/1", borderRadius: "24px",
//                   background: "linear-gradient(135deg, rgba(0,180,216,.18), rgba(8,28,44,.95))",
//                   border: "1px solid rgba(0,180,216,.3)",
//                   display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
//                   position: "relative", overflow: "hidden", padding: "40px",
//                   boxShadow: "0 25px 60px rgba(0,180,216,.15)",
//                 }}>
//                   {/* Animated dashed rings */}
//                   <div className="about-rotate" style={{
//                     position: "absolute", inset: "8%", borderRadius: "50%",
//                     border: "2px dashed rgba(0,180,216,.25)",
//                   }} />
//                   <div className="about-rotate" style={{
//                     position: "absolute", inset: "22%", borderRadius: "50%",
//                     border: "1px solid rgba(245,158,11,.25)",
//                     animationDirection: "reverse", animationDuration: "30s",
//                   }} />
//                   <div className="about-rotate" style={{
//                     position: "absolute", inset: "36%", borderRadius: "50%",
//                     border: "1px dashed rgba(0,180,216,.2)",
//                     animationDuration: "20s",
//                   }} />

//                   {/* Center Eye icon */}
//                   <div style={{
//                     width: "130px", height: "130px", borderRadius: "50%",
//                     background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     boxShadow: "0 0 70px rgba(0,180,216,.5), inset 0 0 0 4px rgba(255,255,255,.1)",
//                     position: "relative", zIndex: 2, marginBottom: "20px",
//                   }}>
//                     <LucideIcon name="Eye" size={60} color="#031a2b" strokeWidth={2} />
//                   </div>

//                   <div className="font-syne" style={{
//                     fontSize: "1.8rem", fontWeight: 800,
//                     background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
//                     WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                     backgroundClip: "text",
//                     letterSpacing: "2px", position: "relative", zIndex: 2,
//                     marginBottom: "8px",
//                   }}>
//                     OUR VISION
//                   </div>
//                   <p style={{
//                     fontSize: "12px", color: "#9ca3af", letterSpacing: "3px",
//                     fontWeight: 600, textTransform: "uppercase",
//                     position: "relative", zIndex: 2,
//                   }}>
//                     Future of Creativity
//                   </p>
//                 </div>

//                 {/* Floating tag */}
//                 <div style={{
//                   position: "absolute", top: "20px", right: "-15px",
//                   padding: "10px 18px", borderRadius: "12px",
//                   background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
//                   color: "#1a1a1a", fontWeight: 900, fontSize: "11px",
//                   boxShadow: "0 8px 20px rgba(245,158,11,.4)",
//                   letterSpacing: "1.5px", zIndex: 10,
//                   textTransform: "uppercase",
//                 }}>
//                   <span style={{ display: "inline-flex", marginRight: "5px", verticalAlign: "middle" }}>
//                     <LucideIcon name="Sparkles" size={12} color="#1a1a1a" strokeWidth={3} />
//                   </span>
//                   2030 Goal
//                 </div>
//               </div>
//             </Reveal>

//             {/* RIGHT — Vision Content */}
//             <Reveal direction="right">
//               <div style={{
//                 display: "inline-flex", alignItems: "center", gap: "8px",
//                 fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//                 textTransform: "uppercase", color: "#22d3ee", marginBottom: "12px",
//                 padding: "6px 14px", borderRadius: "100px",
//                 background: "rgba(0,180,216,.1)", border: "1px solid rgba(0,180,216,.3)",
//               }}>
//                 <LucideIcon name="Eye" size={14} color="#22d3ee" strokeWidth={2} />
//                 Our Vision
//               </div>
//               <h2 className="font-syne" style={{
//                 fontWeight: 800, fontSize: "clamp(2rem, 3.2vw, 2.8rem)",
//                 lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "20px",
//                 color: "#ffffff",
//               }}>
//                 Driving the Future of{" "}
//                 <span style={{
//                   background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                   WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}>Creative Education</span>
//               </h2>
//               <p style={{ fontSize: "15.5px", color: "#9ca3af", lineHeight: 1.75, marginBottom: "28px" }}>
//                 We envision AV Academy as India&apos;s most trusted destination for <strong style={{ color: "#22d3ee" }}>industry-focused creative training</strong> — where every student transforms from a learner into a <strong style={{ color: "#f59e0b" }}>job-ready professional</strong> from day one.
//               </p>

//               <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//                 {visionPoints.map((p) => (
//                   <div key={p.title} style={{
//                     display: "flex", alignItems: "center", gap: "14px",
//                     padding: "14px 18px", borderRadius: "12px",
//                     background: "rgba(8,28,44,.6)", border: "1px solid rgba(0,180,216,.12)",
//                     transition: "all .3s",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.4)"; el.style.transform = "translateX(6px)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.12)"; el.style.transform = ""; }}>
//                     <div style={{
//                       width: "42px", height: "42px", borderRadius: "12px", flexShrink: 0,
//                       background: "rgba(0,180,216,.12)",
//                       border: "1px solid rgba(0,180,216,.25)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                     }}>
//                       <LucideIcon name={p.icon} size={20} color="#22d3ee" strokeWidth={2} />
//                     </div>
//                     <div>
//                       <div className="font-syne" style={{ fontWeight: 700, fontSize: "14.5px", color: "#ffffff", marginBottom: "3px" }}>{p.title}</div>
//                       <div style={{ fontSize: "13px", color: "#9ca3af", lineHeight: 1.5 }}>{p.desc}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </Reveal>
//           </div>
//         </section>

//         {/* ============ OUR MISSION (REVERSED) ============ */}
//         <section style={{ padding: "100px 40px", background: "#030f1a", position: "relative", overflow: "hidden" }}>
//           <div style={{
//             position: "absolute", top: "10%", right: "5%",
//             width: "300px", height: "300px", borderRadius: "50%",
//             background: "radial-gradient(circle, rgba(245,158,11,.06), transparent 70%)",
//             filter: "blur(50px)", pointerEvents: "none",
//           }} />

//           <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "70px", alignItems: "center", position: "relative", zIndex: 1 }}>
//             {/* LEFT — Mission Content */}
//             <Reveal direction="left">
//               <div style={{
//                 display: "inline-flex", alignItems: "center", gap: "8px",
//                 fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//                 textTransform: "uppercase", color: "#f59e0b", marginBottom: "12px",
//                 padding: "6px 14px", borderRadius: "100px",
//                 background: "rgba(245,158,11,.1)", border: "1px solid rgba(245,158,11,.3)",
//               }}>
//                 <LucideIcon name="Rocket" size={14} color="#f59e0b" strokeWidth={2} />
//                 Our Mission
//               </div>
//               <h2 className="font-syne" style={{
//                 fontWeight: 800, fontSize: "clamp(2rem, 3.2vw, 2.8rem)",
//                 lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "20px",
//                 color: "#ffffff",
//               }}>
//                 Bringing Ideas to Life Through{" "}
//                 <span style={{
//                   background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
//                   WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}>Creative Impact</span>
//               </h2>
//               <p style={{ fontSize: "15.5px", color: "#9ca3af", lineHeight: 1.75, marginBottom: "28px" }}>
//                 Our mission is to empower the next generation of creative professionals with <strong style={{ color: "#22d3ee" }}>practical skills, real-world experience</strong>, and <strong style={{ color: "#f59e0b" }}>AI-integrated knowledge</strong> — ensuring measurable career growth and lifelong learning.
//               </p>

//               <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//                 {missionPoints.map((p) => (
//                   <div key={p.title} style={{
//                     display: "flex", alignItems: "center", gap: "14px",
//                     padding: "14px 18px", borderRadius: "12px",
//                     background: "rgba(8,28,44,.6)", border: "1px solid rgba(245,158,11,.15)",
//                     transition: "all .3s",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(245,158,11,.4)"; el.style.transform = "translateX(6px)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(245,158,11,.15)"; el.style.transform = ""; }}>
//                     <div style={{
//                       width: "42px", height: "42px", borderRadius: "12px", flexShrink: 0,
//                       background: "rgba(245,158,11,.12)",
//                       border: "1px solid rgba(245,158,11,.3)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                     }}>
//                       <LucideIcon name={p.icon} size={20} color="#f59e0b" strokeWidth={2} />
//                     </div>
//                     <div>
//                       <div className="font-syne" style={{ fontWeight: 700, fontSize: "14.5px", color: "#ffffff", marginBottom: "3px" }}>{p.title}</div>
//                       <div style={{ fontSize: "13px", color: "#9ca3af", lineHeight: 1.5 }}>{p.desc}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </Reveal>

//             {/* RIGHT — Mission Visual */}
//             <Reveal direction="right">
//               <div style={{ position: "relative" }}>
//                 <div style={{
//                   aspectRatio: "1/1", borderRadius: "24px",
//                   background: "linear-gradient(135deg, rgba(245,158,11,.18), rgba(8,28,44,.95))",
//                   border: "1px solid rgba(245,158,11,.3)",
//                   display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
//                   position: "relative", overflow: "hidden", padding: "40px",
//                   boxShadow: "0 25px 60px rgba(245,158,11,.12)",
//                 }}>
//                   <div className="about-rotate" style={{
//                     position: "absolute", inset: "8%", borderRadius: "50%",
//                     border: "2px dashed rgba(245,158,11,.25)",
//                   }} />
//                   <div className="about-rotate" style={{
//                     position: "absolute", inset: "22%", borderRadius: "50%",
//                     border: "1px solid rgba(0,180,216,.25)",
//                     animationDirection: "reverse", animationDuration: "30s",
//                   }} />
//                   <div className="about-rotate" style={{
//                     position: "absolute", inset: "36%", borderRadius: "50%",
//                     border: "1px dashed rgba(245,158,11,.2)",
//                     animationDuration: "20s",
//                   }} />

//                   <div style={{
//                     width: "130px", height: "130px", borderRadius: "50%",
//                     background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     boxShadow: "0 0 70px rgba(245,158,11,.5), inset 0 0 0 4px rgba(255,255,255,.15)",
//                     position: "relative", zIndex: 2, marginBottom: "20px",
//                   }}>
//                     <LucideIcon name="Rocket" size={60} color="#1a1a1a" strokeWidth={2.5} />
//                   </div>

//                   <div className="font-syne" style={{
//                     fontSize: "1.8rem", fontWeight: 800,
//                     background: "linear-gradient(135deg, #22d3ee, #00b4d8)",
//                     WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                     backgroundClip: "text",
//                     letterSpacing: "2px", position: "relative", zIndex: 2,
//                     marginBottom: "8px",
//                   }}>
//                     OUR MISSION
//                   </div>
//                   <p style={{
//                     fontSize: "12px", color: "#9ca3af", letterSpacing: "3px",
//                     fontWeight: 600, textTransform: "uppercase",
//                     position: "relative", zIndex: 2,
//                   }}>
//                     Creative Impact
//                   </p>
//                 </div>

//                 {/* Floating tag */}
//                 <div style={{
//                   position: "absolute", top: "20px", left: "-15px",
//                   padding: "10px 18px", borderRadius: "12px",
//                   background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                   color: "#031a2b", fontWeight: 900, fontSize: "11px",
//                   boxShadow: "0 8px 20px rgba(0,180,216,.4)",
//                   letterSpacing: "1.5px", zIndex: 10,
//                   textTransform: "uppercase",
//                 }}>
//                   <span style={{ display: "inline-flex", marginRight: "5px", verticalAlign: "middle" }}>
//                     <LucideIcon name="Target" size={12} color="#031a2b" strokeWidth={3} />
//                   </span>
//                   Daily Goal
//                 </div>
//               </div>
//             </Reveal>
//           </div>
//         </section>

//         {/* ============ COURSE CATEGORIES ============ */}
//         <section style={{ padding: "100px 40px", background: "#061826", position: "relative", overflow: "hidden" }}>
//           <div style={{
//             position: "absolute", inset: 0,
//             background: "radial-gradient(ellipse at center, rgba(0,180,216,.06) 0%, transparent 70%)",
//             pointerEvents: "none",
//           }} />

//           <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1 }}>
//             <Reveal>
//               <div style={{ textAlign: "center", marginBottom: "60px" }}>
//                 <div style={{
//                   fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//                   textTransform: "uppercase", color: "#22d3ee", marginBottom: "12px",
//                 }}>// Our Courses</div>
//                 <h2 className="font-syne" style={{
//                   fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
//                   letterSpacing: "-1px", marginBottom: "14px", color: "#ffffff",
//                 }}>
//                   30+ Industry-Focused{" "}
//                   <span style={{
//                     background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                     WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                     backgroundClip: "text",
//                   }}>Course Programs</span>
//                 </h2>
//                 <p style={{ fontSize: "15px", color: "#9ca3af", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>
//                   From creative arts to cutting-edge technology — discover programs designed to launch your career
//                 </p>
//               </div>
//             </Reveal>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
//               {courseCategories.map((cat, i) => (
//                 <Reveal key={cat.title} delay={i * 80}>
//                   <Link href="/courses" style={{ textDecoration: "none", display: "block", height: "100%" }}>
//                     <div style={{
//                       padding: "30px 26px", borderRadius: "20px", height: "100%",
//                       background: "linear-gradient(145deg, rgba(8,28,44,.85), rgba(3,14,22,.95))",
//                       border: "1px solid rgba(0,180,216,.18)",
//                       transition: "all .4s", position: "relative", overflow: "hidden",
//                       cursor: "pointer",
//                     }}
//                       onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.5)"; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 40px rgba(0,180,216,.15)"; }}
//                       onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.18)"; el.style.transform = ""; el.style.boxShadow = ""; }}>
//                       <div style={{
//                         position: "absolute", top: 0, left: 0, right: 0, height: "3px",
//                         background: `linear-gradient(90deg, ${cat.color}, #f59e0b)`,
//                         opacity: .6,
//                       }} />

//                       <div style={{
//                         width: "54px", height: "54px", borderRadius: "14px", marginBottom: "18px",
//                         background: "linear-gradient(135deg, rgba(0,180,216,.15), rgba(34,211,238,.05))",
//                         border: "1px solid rgba(0,180,216,.25)",
//                         display: "flex", alignItems: "center", justifyContent: "center",
//                       }}>
//                         <LucideIcon name={cat.icon} size={26} color={cat.color} strokeWidth={1.8} />
//                       </div>
//                       <h3 className="font-syne" style={{
//                         fontWeight: 700, fontSize: "1.15rem", color: "#ffffff",
//                         marginBottom: "8px", letterSpacing: "-.3px",
//                       }}>
//                         {cat.title}
//                       </h3>
//                       <p style={{ fontSize: "13px", color: "#f59e0b", fontWeight: 600, letterSpacing: ".5px" }}>
//                         {cat.count}
//                       </p>
//                     </div>
//                   </Link>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ LEARNING JOURNEY ============ */}
//         <section style={{ padding: "100px 40px", background: "#030f1a" }}>
//           <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
//             <Reveal>
//               <div style={{ textAlign: "center", marginBottom: "60px" }}>
//                 <div style={{
//                   fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//                   textTransform: "uppercase", color: "#22d3ee", marginBottom: "12px",
//                 }}>// Student Journey</div>
//                 <h2 className="font-syne" style={{
//                   fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
//                   letterSpacing: "-1px", marginBottom: "14px", color: "#ffffff",
//                 }}>
//                   Your Path to{" "}
//                   <span style={{
//                     background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                     WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                     backgroundClip: "text",
//                   }}>Career Success</span>
//                 </h2>
//                 <p style={{ fontSize: "15px", color: "#9ca3af", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
//                   A proven 5-step methodology that has launched 1500+ successful careers
//                 </p>
//               </div>
//             </Reveal>

//             <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//               {learningJourney.map((j, i) => (
//                 <Reveal key={j.step} delay={i * 100}>
//                   <div style={{
//                     display: "grid", gridTemplateColumns: "auto 1fr",
//                     gap: "30px", alignItems: "center",
//                     padding: "28px 32px", borderRadius: "20px",
//                     background: "linear-gradient(135deg, rgba(8,28,44,.85), rgba(3,14,22,.9))",
//                     border: "1px solid rgba(0,180,216,.18)",
//                     transition: "all .4s",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.5)"; el.style.transform = "translateX(10px)"; el.style.boxShadow = "0 15px 40px rgba(0,180,216,.12)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.18)"; el.style.transform = ""; el.style.boxShadow = ""; }}>

//                     <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
//                       <div className="font-syne" style={{
//                         fontSize: "3rem", fontWeight: 900, lineHeight: 1,
//                         background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
//                         WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                         backgroundClip: "text", letterSpacing: "-2px",
//                         minWidth: "70px",
//                       }}>
//                         {j.step}
//                       </div>
//                       <div style={{
//                         width: "60px", height: "60px", borderRadius: "16px",
//                         background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                         display: "flex", alignItems: "center", justifyContent: "center",
//                         boxShadow: "0 8px 20px rgba(0,180,216,.3)",
//                         flexShrink: 0,
//                       }}>
//                         <LucideIcon name={j.icon} size={28} color="#031a2b" strokeWidth={2} />
//                       </div>
//                     </div>

//                     <div>
//                       <h3 className="font-syne" style={{
//                         fontWeight: 700, fontSize: "1.3rem", color: "#ffffff",
//                         marginBottom: "6px", letterSpacing: "-.3px",
//                       }}>
//                         {j.title}
//                       </h3>
//                       <p style={{ fontSize: "14px", color: "#9ca3af", lineHeight: 1.65 }}>
//                         {j.desc}
//                       </p>
//                     </div>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ ACADEMY ACHIEVEMENTS ============ */}
//         <section style={{
//           padding: "100px 40px", background: "#061826",
//           position: "relative", overflow: "hidden",
//         }}>
//           <div style={{
//             position: "absolute", inset: 0,
//             background: "radial-gradient(ellipse at center, rgba(0,180,216,.06) 0%, transparent 70%)",
//             pointerEvents: "none",
//           }} />

//           <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1 }}>
//             <Reveal>
//               <div style={{ textAlign: "center", marginBottom: "60px" }}>
//                 <div style={{
//                   fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//                   textTransform: "uppercase", color: "#22d3ee", marginBottom: "12px",
//                 }}>// Our Achievements</div>
//                 <h2 className="font-syne" style={{
//                   fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
//                   letterSpacing: "-1px", marginBottom: "14px", color: "#ffffff",
//                 }}>
//                   Numbers That Speak{" "}
//                   <span style={{
//                     background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                     WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                     backgroundClip: "text",
//                   }}>For Themselves</span>
//                 </h2>
//                 <p style={{ fontSize: "15px", color: "#9ca3af", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
//                   5 years of excellence in creative education and skill development
//                 </p>
//               </div>
//             </Reveal>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
//               {academyAchievements.map((s, i) => (
//                 <Reveal key={s.label} delay={i * 100}>
//                   <div style={{
//                     padding: "36px 24px", borderRadius: "20px", textAlign: "center",
//                     background: "linear-gradient(145deg, rgba(8,28,44,.8), rgba(3,14,22,.9))",
//                     border: "1px solid rgba(0,180,216,.18)",
//                     transition: "all .4s", position: "relative", overflow: "hidden",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.5)"; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 40px rgba(0,180,216,.15)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.18)"; el.style.transform = ""; el.style.boxShadow = ""; }}>
//                     <div style={{
//                       width: "56px", height: "56px", margin: "0 auto 18px",
//                       borderRadius: "14px",
//                       background: "linear-gradient(135deg, rgba(0,180,216,.15), rgba(34,211,238,.05))",
//                       border: "1px solid rgba(0,180,216,.25)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                     }}>
//                       <LucideIcon name={s.icon} size={26} color="#22d3ee" strokeWidth={1.8} />
//                     </div>
//                     <div className="font-syne" style={{
//                       fontWeight: 800, fontSize: "2.6rem", lineHeight: 1,
//                       letterSpacing: "-1.5px", marginBottom: "8px",
//                       background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
//                       WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                       backgroundClip: "text",
//                     }}>
//                       {s.num}
//                     </div>
//                     <div style={{
//                       fontSize: "12px", color: "#9ca3af",
//                       textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600,
//                     }}>
//                       {s.label}
//                     </div>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ WHY CHOOSE AV ACADEMY ============ */}
//         <section style={{
//           padding: "100px 40px", background: "#030f1a",
//           position: "relative", overflow: "hidden",
//         }}>
//           <div style={{
//             position: "absolute", inset: 0,
//             background: "radial-gradient(ellipse at top, rgba(0,180,216,.08) 0%, transparent 60%)",
//             pointerEvents: "none",
//           }} />

//           <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1 }}>
//             <Reveal>
//               <div style={{ textAlign: "center", marginBottom: "60px" }}>
//                 <div style={{
//                   fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//                   textTransform: "uppercase", color: "#22d3ee", marginBottom: "12px",
//                 }}>// Why AV Academy</div>
//                 <h2 className="font-syne" style={{
//                   fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
//                   letterSpacing: "-1px", marginBottom: "14px", color: "#ffffff",
//                 }}>
//                   Why Students Choose{" "}
//                   <span style={{
//                     background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                     WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                     backgroundClip: "text",
//                   }}>AV Academy</span>
//                 </h2>
//                 <p style={{ fontSize: "15px", color: "#9ca3af", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>
//                   Eight reasons why we&apos;re Lucknow&apos;s most trusted creative training institute
//                 </p>
//               </div>
//             </Reveal>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
//               {whyChooseAcademy.map((item, i) => (
//                 <Reveal key={item.title} delay={i * 60}>
//                   <div style={{
//                     padding: "28px 28px", borderRadius: "20px", height: "100%",
//                     display: "flex", gap: "20px", alignItems: "flex-start",
//                     background: "linear-gradient(145deg, rgba(8,28,44,.85), rgba(3,14,22,.95))",
//                     border: "1px solid rgba(0,180,216,.15)",
//                     transition: "all .4s", position: "relative", overflow: "hidden",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.5)"; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 20px 40px rgba(0,180,216,.12)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.15)"; el.style.transform = ""; el.style.boxShadow = ""; }}>
//                     <div style={{
//                       width: "54px", height: "54px", borderRadius: "14px", flexShrink: 0,
//                       background: "linear-gradient(135deg, rgba(0,180,216,.15), rgba(34,211,238,.05))",
//                       border: "1px solid rgba(0,180,216,.25)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                     }}>
//                       <LucideIcon name={item.icon} size={26} color="#22d3ee" strokeWidth={1.8} />
//                     </div>
//                     <div>
//                       <h3 className="font-syne" style={{
//                         fontWeight: 700, fontSize: "1.1rem", color: "#f59e0b",
//                         marginBottom: "8px", letterSpacing: "-.3px",
//                       }}>
//                         {item.title}
//                       </h3>
//                       <p style={{ fontSize: "13.5px", color: "#9ca3af", lineHeight: 1.65 }}>
//                         {item.desc}
//                       </p>
//                     </div>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ STUDENT SUCCESS STORIES ============ */}
//         <section style={{ padding: "100px 40px", background: "#061826" }}>
//           <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
//             <Reveal>
//               <div style={{ textAlign: "center", marginBottom: "60px" }}>
//                 <div style={{
//                   fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//                   textTransform: "uppercase", color: "#22d3ee", marginBottom: "12px",
//                 }}>// Success Stories</div>
//                 <h2 className="font-syne" style={{
//                   fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
//                   letterSpacing: "-1px", marginBottom: "14px", color: "#ffffff",
//                 }}>
//                   Our Students Are{" "}
//                   <span style={{
//                     background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                     WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                     backgroundClip: "text",
//                   }}>Industry Leaders</span>
//                 </h2>
//                 <p style={{ fontSize: "15px", color: "#9ca3af", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>
//                   Meet a few of our graduates who are now shaping the creative industry
//                 </p>
//               </div>
//             </Reveal>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
//               {studentSuccess.map((s, i) => (
//                 <Reveal key={s.name} delay={i * 80}>
//                   <div style={{
//                     padding: "32px 24px", borderRadius: "20px", textAlign: "center",
//                     background: "linear-gradient(145deg, rgba(8,28,44,.85), rgba(3,14,22,.95))",
//                     border: "1px solid rgba(0,180,216,.18)",
//                     transition: "all .4s", position: "relative", overflow: "hidden",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.5)"; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 40px rgba(0,180,216,.15)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.18)"; el.style.transform = ""; el.style.boxShadow = ""; }}>
//                     <div style={{
//                       width: "80px", height: "80px", margin: "0 auto 16px",
//                       borderRadius: "50%",
//                       background: "linear-gradient(135deg, #00b4d8, #22d3ee)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                       boxShadow: "0 10px 25px rgba(0,180,216,.3)",
//                       color: "#031a2b", fontWeight: 900, fontSize: "1.5rem",
//                       letterSpacing: "-1px",
//                     }} className="font-syne">
//                       {s.img}
//                     </div>
//                     <h3 className="font-syne" style={{
//                       fontWeight: 700, fontSize: "1.05rem", color: "#ffffff",
//                       marginBottom: "6px",
//                     }}>
//                       {s.name}
//                     </h3>
//                     <div style={{
//                       fontSize: "11px", color: "#f59e0b", fontWeight: 600,
//                       letterSpacing: "1px", textTransform: "uppercase", marginBottom: "10px",
//                     }}>
//                       {s.course}
//                     </div>
//                     <div style={{
//                       paddingTop: "12px", borderTop: "1px solid rgba(0,180,216,.15)",
//                       fontSize: "12.5px", color: "#9ca3af", lineHeight: 1.5,
//                     }}>
//                       {s.role}
//                     </div>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============ MEET AV EDITLAB (Secondary) ============ */}
//         <section style={{
//           padding: "100px 40px",
//           background: "linear-gradient(160deg, #030f1a 0%, #0a2436 100%)",
//           position: "relative", overflow: "hidden",
//         }}>
//           <div style={{
//             position: "absolute", top: "-100px", right: "-100px",
//             width: "400px", height: "400px", borderRadius: "50%",
//             background: "radial-gradient(circle, rgba(245,158,11,.08), transparent 70%)",
//             filter: "blur(60px)", pointerEvents: "none",
//           }} />
//           <div style={{
//             position: "absolute", bottom: "-100px", left: "-100px",
//             width: "400px", height: "400px", borderRadius: "50%",
//             background: "radial-gradient(circle, rgba(0,180,216,.08), transparent 70%)",
//             filter: "blur(60px)", pointerEvents: "none",
//           }} />

//           <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "70px", alignItems: "center" }}>
//             <Reveal direction="left">
//               <div style={{
//                 display: "inline-flex", alignItems: "center", gap: "8px",
//                 fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//                 textTransform: "uppercase", color: "#f59e0b", marginBottom: "12px",
//                 padding: "6px 14px", borderRadius: "100px",
//                 background: "rgba(245,158,11,.1)", border: "1px solid rgba(245,158,11,.3)",
//               }}>
//                 <LucideIcon name="Sparkles" size={14} color="#f59e0b" strokeWidth={2} />
//                 Our Creative Agency
//               </div>
//               <h2 className="font-syne" style={{
//                 fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
//                 lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "20px",
//                 color: "#ffffff",
//               }}>
//                 Meet{" "}
//                 <span style={{
//                   background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
//                   WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}>AV EditLab</span>
//                 {" "}— Our In-House Agency
//               </h2>
//               <p style={{ fontSize: "15.5px", color: "#9ca3af", lineHeight: 1.75, marginBottom: "20px" }}>
//                 Beyond training, we run <strong style={{ color: "#f59e0b" }}>AV EditLab</strong> — a full-service creative agency serving 100+ brands across packaging, hospitality, real estate, fashion, automotive, and more.
//               </p>
//               <p style={{ fontSize: "14px", color: "#9ca3af", lineHeight: 1.7, marginBottom: "28px" }}>
//                 This unique setup gives our students a <strong style={{ color: "#22d3ee" }}>real-world advantage</strong> — they work on actual client projects during training, building portfolios that get them hired faster.
//               </p>

//               <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
//                 {editLabServices.map((s) => (
//                   <div key={s.title} style={{
//                     display: "inline-flex", alignItems: "center", gap: "8px",
//                     padding: "10px 16px", borderRadius: "100px",
//                     background: "rgba(245,158,11,.08)",
//                     border: "1px solid rgba(245,158,11,.25)",
//                     fontSize: "12.5px", color: "#fbbf24", fontWeight: 600,
//                     transition: "all .3s",
//                   }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(245,158,11,.5)"; el.style.background = "rgba(245,158,11,.15)"; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(245,158,11,.25)"; el.style.background = "rgba(245,158,11,.08)"; }}>
//                     <LucideIcon name={s.icon} size={14} color="#fbbf24" strokeWidth={2} />
//                     {s.title}
//                   </div>
//                 ))}
//               </div>

//               <Link href="/services" style={{
//                 display: "inline-flex", alignItems: "center", gap: "10px",
//                 padding: "14px 28px", borderRadius: "100px",
//                 background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
//                 color: "#1a1a1a", fontWeight: 800, fontSize: "14px",
//                 textDecoration: "none", letterSpacing: ".5px",
//                 boxShadow: "0 10px 30px rgba(245,158,11,.3)",
//                 transition: "transform .3s",
//               }}
//                 onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
//                 onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; }}>
//                 Explore EditLab Services
//                 <LucideIcon name="ArrowRight" size={16} color="#1a1a1a" strokeWidth={2.5} />
//               </Link>
//             </Reveal>

//             <Reveal direction="right">
//               <div style={{ position: "relative" }}>
//                 <div style={{
//                   aspectRatio: "1/1", borderRadius: "24px",
//                   background: "linear-gradient(135deg, rgba(245,158,11,.15), rgba(8,28,44,.95))",
//                   border: "1px solid rgba(245,158,11,.3)",
//                   display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
//                   position: "relative", overflow: "hidden", padding: "40px",
//                   boxShadow: "0 25px 60px rgba(245,158,11,.12)",
//                 }}>
//                   <div className="about-rotate" style={{
//                     position: "absolute", inset: "10%", borderRadius: "50%",
//                     border: "2px dashed rgba(245,158,11,.25)",
//                   }} />
//                   <div className="about-rotate" style={{
//                     position: "absolute", inset: "25%", borderRadius: "50%",
//                     border: "1px solid rgba(0,180,216,.2)",
//                     animationDirection: "reverse", animationDuration: "30s",
//                   }} />

//                   <div style={{
//                     width: "120px", height: "120px", borderRadius: "50%",
//                     background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     boxShadow: "0 0 60px rgba(245,158,11,.5)",
//                     position: "relative", zIndex: 1, marginBottom: "20px",
//                   }}>
//                     <LucideIcon name="Palette" size={56} color="#1a1a1a" strokeWidth={2} />
//                   </div>
//                   <h3 className="font-syne" style={{
//                     fontSize: "1.8rem", fontWeight: 800, color: "#ffffff",
//                     letterSpacing: "-1px", position: "relative", zIndex: 1, marginBottom: "8px",
//                   }}>
//                     AV EDITLAB
//                   </h3>
//                   <p style={{
//                     fontSize: "11px", letterSpacing: "3px", color: "#22d3ee",
//                     fontWeight: 700, textTransform: "uppercase",
//                     position: "relative", zIndex: 1, marginBottom: "20px",
//                   }}>Creative Agency</p>

//                   <div style={{
//                     display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px",
//                     width: "100%", maxWidth: "300px", position: "relative", zIndex: 1,
//                   }}>
//                     <div style={{
//                       padding: "14px", borderRadius: "12px", textAlign: "center",
//                       background: "rgba(8,28,44,.6)", border: "1px solid rgba(245,158,11,.2)",
//                     }}>
//                       <div className="font-syne" style={{
//                         fontWeight: 900, fontSize: "1.4rem", lineHeight: 1,
//                         background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
//                         WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                         backgroundClip: "text",
//                       }}>100+</div>
//                       <div style={{ fontSize: "10px", color: "#9ca3af", marginTop: "4px", letterSpacing: ".5px", textTransform: "uppercase" }}>Clients</div>
//                     </div>
//                     <div style={{
//                       padding: "14px", borderRadius: "12px", textAlign: "center",
//                       background: "rgba(8,28,44,.6)", border: "1px solid rgba(245,158,11,.2)",
//                     }}>
//                       <div className="font-syne" style={{
//                         fontWeight: 900, fontSize: "1.4rem", lineHeight: 1,
//                         background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
//                         WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                         backgroundClip: "text",
//                       }}>1000+</div>
//                       <div style={{ fontSize: "10px", color: "#9ca3af", marginTop: "4px", letterSpacing: ".5px", textTransform: "uppercase" }}>Projects</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Reveal>
//           </div>
//         </section>

//         {/* ============ TRUSTED BY ============ */}
//         <section style={{
//           padding: "60px 40px", background: "#061826",
//           borderTop: "1px solid rgba(0,180,216,.1)",
//           borderBottom: "1px solid rgba(0,180,216,.1)",
//         }}>
//           <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
//             <div style={{ textAlign: "center", marginBottom: "32px" }}>
//               <span style={{
//                 fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
//                 textTransform: "uppercase", color: "#22d3ee",
//               }}>// Trusted By Brands Across India</span>
//             </div>
//             <div style={{
//               display: "flex", flexWrap: "wrap", justifyContent: "center",
//               alignItems: "center", gap: "16px",
//             }}>
//               {trustedBrands.map((brand) => (
//                 <div key={brand} style={{
//                   padding: "12px 24px", borderRadius: "10px",
//                   background: "rgba(8,28,44,.6)", border: "1px solid rgba(0,180,216,.15)",
//                   color: "#9ca3af", fontSize: "14px", fontWeight: 600,
//                   letterSpacing: ".5px", transition: "all .3s",
//                 }}
//                   onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.4)"; el.style.color = "#22d3ee"; }}
//                   onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,180,216,.15)"; el.style.color = "#9ca3af"; }}>
//                   {brand}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <CTASection title="Ready to Start Your" highlight="Creative Career?" desc="Join 1500+ students who transformed their passion into successful careers with AV Academy." />
//       </main>
//       <Footer />
//       <WAFloat />
//     </>
//   );
// }


// app/about/page.tsx
// ✅ Server Component — SEO metadata + JSON-LD yahan, UI AboutClient mein

import type { Metadata } from "next";
import AboutClient from "./AboutClient";

// ── SEO Metadata ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "About Us | AV Academy & AV EditLab — Lucknow's Premier Creative Institute",
  description:
    "AV Academy ke baare mein jaanein — Lucknow ka #1 creative training institute. Graphic Design, Video Editing, 3D Animation, AI, Digital Marketing courses. 1500+ students trained, 95% placement rate.",
  keywords: [
    "AV Academy Lucknow",
    "about AV Academy",
    "creative training institute Lucknow",
    "AV EditLab",
    "graphic design institute Lucknow",
    "video editing course Lucknow",
    "3D animation academy Lucknow",
    "AI course Lucknow",
    "digital marketing institute Lucknow",
    "best design institute UP",
    "placement guarantee design course",
  ],
  alternates: {
    canonical: "https://avacademy.co.in/about",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url: "https://avacademy.co.in/about",
    siteName: "AV Academy",
    title: "About AV Academy | Lucknow's Premier Creative Training Hub",
    description:
      "1500+ students trained. 95% placement rate. Industry-ready courses in Design, Animation, VFX, AI & Digital Marketing. Backed by AV EditLab — our in-house creative agency.",
    images: [
      {
        url: "https://avacademy.co.in/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "AV Academy — Lucknow's Premier Creative Training Institute",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "About AV Academy | Lucknow's Top Creative Institute",
    description:
      "1500+ students trained. 95% placement. Industry-ready creative courses in Lucknow.",
    images: ["https://avacademy.co.in/og-about.jpg"],
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://avacademy.co.in/#organization",
      name: "AV Academy",
      alternateName: "AV EditLab",
      url: "https://avacademy.co.in",
      logo: {
        "@type": "ImageObject",
        url: "https://avacademy.co.in/logo.png",
        width: 200,
        height: 60,
      },
      description:
        "AV Academy is Lucknow's premier creative training institute offering industry-ready courses in Graphic Design, Video Editing, 3D Animation, VFX, AI, Digital Marketing and Programming.",
      foundingDate: "2020",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: 20,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "3rd Floor, Sai Tower, Raibareli Rd, near Dental College, Vrindavan Colony",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        postalCode: "226014",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7500206719",
        contactType: "admissions",
        availableLanguage: ["Hindi", "English"],
      },
      sameAs: [
        "https://www.instagram.com/avacademy",
        "https://www.youtube.com/avacademy",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Creative Training Courses",
        itemListElement: [
          { "@type": "Course", name: "Graphic Design", provider: { "@type": "Organization", name: "AV Academy" } },
          { "@type": "Course", name: "Video Editing & VFX", provider: { "@type": "Organization", name: "AV Academy" } },
          { "@type": "Course", name: "3D Animation", provider: { "@type": "Organization", name: "AV Academy" } },
          { "@type": "Course", name: "AI Masterclass", provider: { "@type": "Organization", name: "AV Academy" } },
          { "@type": "Course", name: "Digital Marketing", provider: { "@type": "Organization", name: "AV Academy" } },
          { "@type": "Course", name: "Python & Data Science", provider: { "@type": "Organization", name: "AV Academy" } },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1500",
        bestRating: "5",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "10:00",
          closes: "20:00",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://avacademy.co.in/about",
      url: "https://avacademy.co.in/about",
      name: "About AV Academy | Lucknow's Premier Creative Training Hub",
      description:
        "Learn about AV Academy — Lucknow's top creative training institute with 1500+ students, 30+ courses and 95% placement rate.",
      isPartOf: { "@id": "https://avacademy.co.in/#website" },
      about: { "@id": "https://avacademy.co.in/#organization" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://avacademy.co.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About Us",
            item: "https://avacademy.co.in/about",
          },
        ],
      },
    },
  ],
};

// ── Page (Server Component) ───────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      {/* JSON-LD — server-side render, Google directly padhta hai */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  );
}