// "use client";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WAFloat from "@/components/WAFloat";
// import { Reveal } from "@/components/ScrollReveal";

// export default function ContactPage() {
//   return (
//     <>
//       <Navbar />
//       <main>
//         <section className="min-h-[40vh] flex items-center justify-center pt-[110px] pb-16 px-6 text-center relative overflow-hidden" style={{ background: "linear-gradient(160deg,var(--bg2),var(--bg3))" }}>
//           <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center,rgba(0,180,216,.12) 0%,transparent 65%)" }} />
//           <div className="relative z-10">
//             <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm text-[11px] font-bold tracking-[2px] uppercase mb-5" style={{ background: "rgba(0,180,216,.1)", border: "1px solid rgba(0,180,216,.3)", color: "var(--cyan2)" }}>
//               Let&apos;s Connect
//             </span>
//             <h1 className="font-black leading-tight tracking-tight text-[clamp(1.8rem,4vw,3.2rem)]" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-1px" }}>
//               Let&apos;s Build Something{" "}
//               <span style={{ background: "linear-gradient(135deg,var(--cyan2),var(--blue2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                 Great Together
//               </span>
//             </h1>
//             <p className="font-semibold mt-3" style={{ color: "var(--cyan3)", fontSize: "14px" }}>
//               Reach out — we respond within 1 hour!
//             </p>
//           </div>
//         </section>

//         <section className="px-6 py-20" style={{ background: "var(--bg2)" }}>
//           <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10">
//             {/* Form */}
//             <Reveal direction="left">
//               <div className="p-11 rounded-[24px]" style={{ background: "rgba(8,28,44,.8)", border: "1px solid var(--border)" }}>
//                 <h3 className="font-black text-[1.3rem] mb-7" style={{ fontFamily: "var(--font-syne)", color: "var(--cyan2)" }}>
//                   Send Us a Message
//                 </h3>
//                 {[
//                   { label: "Your Name *", type: "text", ph: "Rahul Sharma" },
//                   { label: "Phone *", type: "tel", ph: "+91-XXXXXXXXXX" },
//                   { label: "Email", type: "email", ph: "your@email.com" },
//                 ].map((f) => (
//                   <div key={f.label} className="mb-5">
//                     <label className="block text-[12.5px] font-semibold mb-2 tracking-wide" style={{ color: "var(--gray2)" }}>{f.label}</label>
//                     <input type={f.type} placeholder={f.ph} className="w-full rounded-[10px] px-4 py-3 text-[14px] outline-none transition-all focus:border-[var(--cyan2)]" style={{ background: "rgba(255,255,255,.03)", border: "1px solid var(--border)", color: "var(--white)", fontFamily: "inherit" }} />
//                   </div>
//                 ))}
//                 <div className="mb-5">
//                   <label className="block text-[12.5px] font-semibold mb-2 tracking-wide" style={{ color: "var(--gray2)" }}>Service Interest</label>
//                   <select className="w-full rounded-[10px] px-4 py-3 text-[14px] outline-none transition-all" style={{ background: "var(--bg2)", border: "1px solid var(--border)", color: "var(--gray2)", fontFamily: "inherit" }}>
//                     <option>Select your interest...</option>
//                     <optgroup label="AV EditLab Services">
//                       {["Packaging", "Hospitality", "Real Estate", "Education", "Fashion", "Automobile", "Advertising", "Media", "AI Training B2B", "Personal Brand Building"].map(s => <option key={s}>{s}</option>)}
//                     </optgroup>
//                     <optgroup label="AV Academy Courses">
//                       {["AI Masterclass", "Graphic Design", "Video Editing", "Motion Graphics", "3D Animation", "VFX", "Digital Marketing", "Python & Data Science"].map(s => <option key={s}>{s}</option>)}
//                     </optgroup>
//                   </select>
//                 </div>
//                 <div className="mb-7">
//                   <label className="block text-[12.5px] font-semibold mb-2 tracking-wide" style={{ color: "var(--gray2)" }}>Message</label>
//                   <textarea placeholder="Tell us about your project..." rows={4} className="w-full rounded-[10px] px-4 py-3 text-[14px] outline-none resize-vertical transition-all" style={{ background: "rgba(255,255,255,.03)", border: "1px solid var(--border)", color: "var(--white)", fontFamily: "inherit" }} />
//                 </div>
//                 <button
//                   onClick={() => alert("Thank you! We will reach out within 24 hours. WhatsApp: +91-9675903348")}
//                   className="shimmer-btn w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-[15px] text-white relative overflow-hidden"
//                   style={{ fontFamily: "var(--font-syne)", background: "linear-gradient(135deg,var(--cyan1),var(--cyan2))" }}
//                 >
//                   <i className="fas fa-paper-plane" /> Submit Enquiry
//                 </button>
//               </div>
//             </Reveal>

//             {/* Info */}
//             <Reveal direction="right">
//               <div className="flex flex-col gap-5">
//                 <div className="p-7 rounded-[20px]" style={{ background: "rgba(8,28,44,.8)", border: "1px solid var(--border)" }}>
//                   <h3 className="font-bold text-[1.1rem] mb-5" style={{ fontFamily: "var(--font-syne)", color: "var(--cyan2)" }}>Contact Information</h3>
//                   {[
//                     { icon: "fas fa-phone-alt", label: "Phone / WhatsApp", value: "+91-9675903348\n+91-75002 06719" },
//                     { icon: "fas fa-envelope", label: "Email", value: "avacademy1706@gmail.com" },
//                     { icon: "fas fa-globe", label: "Website", value: "avacademy.co.in" },
//                     { icon: "fas fa-map-marker-alt", label: "Address", value: "3rd Floor, Sai Tower, Raibareli Rd, near Dental College, Vrindavan Colony, Lucknow UP 226014" },
//                   ].map(({ icon, label, value }) => (
//                     <div key={label} className="flex gap-3.5 items-start mb-4.5">
//                       <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center text-[16px] flex-shrink-0" style={{ background: "rgba(0,180,216,.1)", border: "1px solid rgba(0,180,216,.2)", color: "var(--cyan2)" }}>
//                         <i className={icon} />
//                       </div>
//                       <div>
//                         <div className="font-semibold text-[13.5px] mb-0.5">{label}</div>
//                         <div className="text-[12.5px] leading-relaxed whitespace-pre-line" style={{ color: "var(--gray2)" }}>{value}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* WhatsApp */}
//                 <div className="p-6 rounded-[20px] text-center" style={{ background: "linear-gradient(135deg,rgba(37,211,102,.1),rgba(18,140,126,.06))", border: "1px solid rgba(37,211,102,.25)" }}>
//                   <div className="text-[34px] mb-2.5">💬</div>
//                   <h4 className="font-bold text-[1rem] mb-2" style={{ fontFamily: "var(--font-syne)" }}>Chat on WhatsApp</h4>
//                   <p className="text-[13px] mb-4" style={{ color: "var(--gray)" }}>Get a response within 1 hour!</p>
//                   <a href="https://wa.me/919675903348" target="_blank" rel="noopener noreferrer" className="shimmer-btn flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-[14px] text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg,#25d366,#128c7e)", fontFamily: "var(--font-syne)" }}>
//                     <i className="fab fa-whatsapp" /> Open WhatsApp Chat
//                   </a>
//                 </div>
//               </div>
//             </Reveal>
//           </div>
//         </section>
//       </main>
//       <Footer />
//       <WAFloat />
//     </>
//   );
// }


// "use client";
// import { useState } from "react";
// import LucideIcon from "@/components/LucideIcon";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WAFloat from "@/components/WAFloat";
// import { Reveal } from "@/components/ScrollReveal";
// import Link from "next/link";

// const formFields = [
//   { label: "Your Name *", type: "text", placeholder: "Rahul Sharma", icon: "User", name: "name" },
//   { label: "Phone *", type: "tel", placeholder: "+91-XXXXXXXXXX", icon: "Phone", name: "phone" },
//   { label: "Email", type: "email", placeholder: "your@email.com", icon: "Mail", name: "email" },
// ];

// const editLabServices = ["Packaging", "Hospitality", "Real Estate", "Education", "Fashion", "Automobile", "Advertising", "Media", "AI Training B2B", "Personal Brand Building"];
// const academyCourses = ["AI Masterclass", "Graphic Design", "Video Editing", "Motion Graphics", "3D Animation", "VFX", "Digital Marketing", "Python & Data Science"];

// const contactInfo = [
//   {
//     icon: "Phone",
//     label: "Phone / WhatsApp",
//     value: "+91-7500206719",
//     href: "tel:+917500206719",
//   },
//   {
//     icon: "Mail",
//     label: "Email",
//     value: "avacademy1706@gmail.com",
//     href: "mailto:avacademy1706@gmail.com",
//   },
//   // {
//   //   icon: "Globe",
//   //   label: "Website",
//   //   value: "avacademy.co.in",
//   //   href: "https://avacademy.co.in",
//   // },
//   {
//     icon: "MapPin",
//     label: "Address",
//     value: "3rd Floor, Sai Tower, Raibareli Rd, near Dental College, Vrindavan Colony, Lucknow UP 226014",
//     href: "https://maps.google.com/?q=Sai+Tower+Vrindavan+Colony+Lucknow",
//   },
// ];

// const quickStats = [
//   { num: "1hr", label: "Avg Response Time", icon: "Clock" },
//   { num: "24/7", label: "WhatsApp Support", icon: "MessageCircle" },
//   { num: "100%", label: "Free Consultation", icon: "Heart" },
// ];

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     service: "",
//     message: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     if (!formData.name || !formData.phone) {
//       alert("Please fill in your name and phone number.");
//       return;
//     }
//     const message = `Hi! I'm interested in AV Academy.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`;
//     window.open(`https://wa.me/917500206719?text=${encodeURIComponent(message)}`, "_blank");
//   };

//   return (
//     <>
//       <Navbar />
//       <main className="bg-[#030f1a]">
//         {/* ============ HERO ============ */}
//         <section className="relative pt-40 pb-20 px-10 text-center overflow-hidden border-b border-cyan-500/15 bg-gradient-to-br from-[#061826] via-[#0a2436] to-[#061826]">
//           {/* Background glows */}
//           <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/20 blur-3xl pointer-events-none rounded-full" />
//           <div className="absolute top-[30%] left-[8%] w-52 h-52 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
//           <div className="absolute bottom-[10%] right-[10%] w-60 h-60 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

//           {/* Grid pattern */}
//           <div
//             className="absolute inset-0 opacity-50 pointer-events-none"
//             style={{
//               backgroundImage: "linear-gradient(rgba(0,180,216,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,.04) 1px, transparent 1px)",
//               backgroundSize: "60px 60px",
//             }}
//           />

//           <div className="relative z-10 max-w-[1000px] mx-auto">
//             <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-[2px] uppercase mb-6 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 shadow-[0_0_30px_rgba(0,180,216,0.2)]">
//               <LucideIcon name="MessageCircle" size={14} color="#22d3ee" strokeWidth={2} />
//               Let&apos;s Connect
//             </span>

//             <h1 className="font-syne font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] tracking-tight mb-5 text-white">
//               Let&apos;s Build Something{" "}
//               <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                 Great Together
//               </span>
//             </h1>

//             <p className="text-base md:text-lg text-gray-400 max-w-[600px] mx-auto mb-6 leading-relaxed">
//               Reach out for course inquiries, project consultations, or just to say hi. We respond within 1 hour!
//             </p>

//             {/* Breadcrumb */}
//             <div className="inline-flex items-center gap-2.5 text-[13px] text-gray-500 px-5 py-2.5 rounded-full bg-[#082c44]/60 border border-cyan-500/15">
//               <Link href="/" className="text-cyan-400 no-underline font-semibold hover:text-cyan-300">
//                 Home
//               </Link>
//               <LucideIcon name="ChevronRight" size={14} color="#6b7280" />
//               <span className="text-gray-300">Contact</span>
//             </div>
//           </div>
//         </section>

//         {/* ============ QUICK STATS BAR ============ */}
//         <section className="px-10 py-8 bg-[#061826] border-b border-cyan-500/10">
//           <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
//             {quickStats.map((s) => (
//               <div
//                 key={s.label}
//                 className="flex items-center gap-4 px-6 py-5 rounded-2xl bg-gradient-to-br from-[#082c44]/80 to-[#030f1a]/90 border border-cyan-500/15 hover:border-cyan-500/40 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10"
//               >
//                 <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-cyan-500/20 to-cyan-400/5 border border-cyan-500/30">
//                   <LucideIcon name={s.icon} size={22} color="#22d3ee" strokeWidth={2} />
//                 </div>
//                 <div>
//                   <div className="font-syne font-extrabold text-2xl leading-none bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
//                     {s.num}
//                   </div>
//                   <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-1">
//                     {s.label}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ============ FORM + INFO ============ */}
//         <section className="px-10 py-24 bg-[#030f1a]">
//           <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10">
//             {/* ===== FORM ===== */}
//             <Reveal direction="left">
//               <div className="p-10 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 shadow-2xl shadow-cyan-500/5 relative overflow-hidden">
//                 {/* Top gradient line */}
//                 <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 via-cyan-400 to-amber-500 opacity-60" />

//                 {/* Form Header */}
//                 <div className="flex items-center gap-3 mb-7">
//                   <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-500 to-cyan-400 shadow-lg shadow-cyan-500/30">
//                     <LucideIcon name="Send" size={22} color="#031a2b" strokeWidth={2.5} />
//                   </div>
//                   <div>
//                     <h3 className="font-syne font-extrabold text-xl text-white mb-1">
//                       Send Us a Message
//                     </h3>
//                     <p className="text-xs text-gray-400 tracking-wide">
//                       Fill the form — we&apos;ll WhatsApp you back
//                     </p>
//                   </div>
//                 </div>

//                 {/* Form Fields */}
//                 <div className="flex flex-col gap-5">
//                   {formFields.map((f) => (
//                     <div key={f.label}>
//                       <label className="block text-[12.5px] font-semibold mb-2 tracking-wide text-gray-300 uppercase">
//                         <span className="inline mr-1.5 align-middle">
//                           <LucideIcon name={f.icon} size={12} color="#22d3ee" strokeWidth={2.5} />
//                         </span>
//                         {f.label}
//                       </label>
//                       <input
//                         type={f.type}
//                         name={f.name}
//                         value={formData[f.name as keyof typeof formData]}
//                         onChange={handleChange}
//                         placeholder={f.placeholder}
//                         className="w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all bg-white/5 border border-cyan-500/15 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:bg-white/10 focus:shadow-lg focus:shadow-cyan-500/10"
//                       />
//                     </div>
//                   ))}

//                   {/* Service Select */}
//                   <div>
//                     <label className="block text-[12.5px] font-semibold mb-2 tracking-wide text-gray-300 uppercase">
//                       <span className="inline mr-1.5 align-middle">
//                         <LucideIcon name="Target" size={12} color="#22d3ee" strokeWidth={2.5} />
//                       </span>
//                       Service Interest
//                     </label>
//                     <select
//                       name="service"
//                       value={formData.service}
//                       onChange={handleChange}
//                       className="w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all bg-[#082c44] border border-cyan-500/15 text-gray-200 focus:border-cyan-400 cursor-pointer"
//                     >
//                       <option value="">Select your interest...</option>
//                       <optgroup label="🎨 AV EditLab Services">
//                         {editLabServices.map((s) => (
//                           <option key={s} value={s}>{s}</option>
//                         ))}
//                       </optgroup>
//                       <optgroup label="🎓 AV Academy Courses">
//                         {academyCourses.map((s) => (
//                           <option key={s} value={s}>{s}</option>
//                         ))}
//                       </optgroup>
//                     </select>
//                   </div>

//                   {/* Message */}
//                   <div>
//                     <label className="block text-[12.5px] font-semibold mb-2 tracking-wide text-gray-300 uppercase">
//                       <span className="inline mr-1.5 align-middle">
//                         <LucideIcon name="MessageSquare" size={12} color="#22d3ee" strokeWidth={2.5} />
//                       </span>
//                       Your Message
//                     </label>
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Tell us about your project, goals, or questions..."
//                       rows={4}
//                       className="w-full rounded-xl px-4 py-3.5 text-sm outline-none resize-y transition-all bg-white/5 border border-cyan-500/15 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:bg-white/10"
//                     />
//                   </div>

//                   {/* Submit Button */}
//                   <button
//                     onClick={handleSubmit}
//                     className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-[15px] font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all"
//                   >
//                     <LucideIcon name="Send" size={18} color="#031a2b" strokeWidth={2.5} />
//                     Send via WhatsApp
//                     <LucideIcon name="ArrowRight" size={16} color="#031a2b" strokeWidth={2.5} />
//                   </button>

//                   <p className="text-center text-xs text-gray-500 -mt-1">
//                     By submitting, you&apos;ll be redirected to WhatsApp with your message pre-filled
//                   </p>
//                 </div>
//               </div>
//             </Reveal>

//             {/* ===== INFO COLUMN ===== */}
//             <Reveal direction="right">
//               <div className="flex flex-col gap-5">
//                 {/* Contact Info Card */}
//                 <div className="p-7 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 relative overflow-hidden">
//                   <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 to-amber-500 opacity-60" />

//                   <div className="flex items-center gap-3 mb-6">
//                     <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/30">
//                       <LucideIcon name="Headphones" size={20} color="#22d3ee" strokeWidth={2} />
//                     </div>
//                     <h3 className="font-syne font-bold text-lg text-white">
//                       Contact Information
//                     </h3>
//                   </div>

//                   <div className="flex flex-col gap-4">
//                     {contactInfo.map(({ icon, label, value, href }) => (
//                       <a
//                         key={label}
//                         href={href}
//                         target={icon === "MapPin" || icon === "Globe" ? "_blank" : undefined}
//                         rel="noopener noreferrer"
//                         className="flex gap-3.5 items-start p-3 -m-3 rounded-xl hover:bg-cyan-500/5 transition-all group"
//                       >
//                         <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all">
//                           <LucideIcon name={icon} size={18} color="#22d3ee" strokeWidth={2} />
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <div className="font-syne font-semibold text-[13.5px] text-amber-400 mb-1">
//                             {label}
//                           </div>
//                           <div className="text-[12.5px] leading-relaxed text-gray-400 whitespace-pre-line group-hover:text-gray-300 transition-colors">
//                             {value}
//                           </div>
//                         </div>
//                         <span className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1 inline-flex">
//                           <LucideIcon name="ArrowUpRight" size={14} color="#22d3ee" strokeWidth={2} />
//                         </span>
//                       </a>
//                     ))}
//                   </div>
//                 </div>

//                 {/* WhatsApp CTA Card */}
//                 <div className="p-7 rounded-3xl text-center bg-gradient-to-br from-green-500/15 to-green-700/10 border border-green-500/30 relative overflow-hidden">
//                   {/* Glow effect */}
//                   <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-green-500/20 blur-3xl pointer-events-none" />

//                   <div className="relative z-10">
//                     <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 shadow-xl shadow-green-500/30">
//                       <LucideIcon name="MessageCircle" size={32} color="#ffffff" strokeWidth={2.5} />
//                     </div>
//                     <h4 className="font-syne font-bold text-lg text-white mb-2">
//                       Chat on WhatsApp
//                     </h4>
//                     <p className="text-[13px] text-gray-300 mb-5 leading-relaxed">
//                       Get a response within <strong className="text-green-400">1 hour!</strong> Available 24/7 for quick queries.
//                     </p>
//                     <a
//                       href="https://wa.me/917500206719"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#25d366] to-[#128c7e] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/40 transition-all font-syne"
//                     >
//                       <LucideIcon name="MessageCircle" size={18} color="#ffffff" strokeWidth={2.5} />
//                       Open WhatsApp Chat
//                       <LucideIcon name="ArrowRight" size={16} color="#ffffff" strokeWidth={2.5} />
//                     </a>
//                   </div>
//                 </div>

//                 {/* Office Hours Card */}
//                 <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/10 to-[#082c44]/80 border border-amber-500/25">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-amber-500/15 border border-amber-500/30">
//                       <LucideIcon name="Clock" size={20} color="#fbbf24" strokeWidth={2} />
//                     </div>
//                     <h4 className="font-syne font-bold text-base text-white">
//                       Office Hours
//                     </h4>
//                   </div>
//                   <div className="flex flex-col gap-2 text-[13px]">
//                     <div className="flex justify-between items-center pb-2 border-b border-amber-500/15">
//                       <span className="text-gray-400">Mon - Sat</span>
//                       <span className="text-amber-400 font-semibold">10:00 AM - 8:00 PM</span>
//                     </div>
//                     <div className="flex justify-between items-center pb-2 border-b border-amber-500/15">
//                       <span className="text-gray-400">Sunday</span>
//                       <span className="text-gray-500">By Appointment</span>
//                     </div>
//                     <div className="flex justify-between items-center pt-1">
//                       <span className="text-gray-400">WhatsApp</span>
//                       <span className="text-green-400 font-semibold flex items-center gap-1.5">
//                         <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
//                         24/7 Online
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Reveal>
//           </div>
//         </section>

//         {/* ============ MAP SECTION ============ */}
//         <section className="px-10 py-20 bg-[#061826] border-t border-cyan-500/10">
//           <div className="max-w-[1300px] mx-auto">
//             <Reveal>
//               <div className="text-center mb-10">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">
//                   // Find Us
//                 </div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] tracking-tight text-white mb-3">
//                   Visit Our{" "}
//                   <span className="bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent">
//                     Lucknow Campus
//                   </span>
//                 </h2>
//                 <p className="text-sm text-gray-400 max-w-[600px] mx-auto leading-relaxed">
//                   3rd Floor, Sai Tower, Raibareli Rd, near Dental College, Vrindavan Colony, Lucknow
//                 </p>
//               </div>
//             </Reveal>

//             <Reveal>
//               <div className="rounded-3xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 relative">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6!2d80.9!3d26.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVnJpbmRhdmFuIENvbG9ueSBMdWNrbm93!5e0!3m2!1sen!2sin!4v1700000000000"
//                   width="100%"
//                   height="450"
//                   style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 />
//               </div>
//             </Reveal>
//           </div>
//         </section>
//       </main>
//       <Footer />
//       <WAFloat />
//     </>
//   );
// }

// "use client";
// import { useState } from "react";
// import LucideIcon from "@/components/LucideIcon";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WAFloat from "@/components/WAFloat";
// import { Reveal } from "@/components/ScrollReveal";
// import Link from "next/link";

// const formFields = [
//   { label: "Your Name *", type: "text", placeholder: "Rahul Sharma", icon: "User", name: "name" },
//   { label: "Phone *", type: "tel", placeholder: "+91-XXXXXXXXXX", icon: "Phone", name: "phone" },
//   { label: "Email", type: "email", placeholder: "your@email.com", icon: "Mail", name: "email" },
// ];

// const editLabServices = ["Packaging", "Hospitality", "Real Estate", "Education", "Fashion", "Automobile", "Advertising", "Media", "AI Training B2B", "Personal Brand Building"];
// const academyCourses = ["AI Masterclass", "Graphic Design", "Video Editing", "Motion Graphics", "3D Animation", "VFX", "Digital Marketing", "Python & Data Science"];

// const contactInfo = [
//   {
//     icon: "Phone",
//     label: "Phone / WhatsApp",
//     value: "+91-7500206719",
//     href: "tel:+917500206719",
//   },
//   {
//     icon: "Mail",
//     label: "Email",
//     value: "avacademy1706@gmail.com",
//     href: "mailto:avacademy1706@gmail.com",
//   },
//   {
//     icon: "MapPin",
//     label: "Address",
//     value: "3rd Floor, Sai Tower, Raibareli Rd, near Dental College, Vrindavan Colony, Lucknow UP 226014",
//     href: "https://maps.google.com/?q=Sai+Tower+Vrindavan+Colony+Lucknow",
//   },
// ];

// const quickStats = [
//   { num: "1hr", label: "Avg Response Time", icon: "Clock" },
//   { num: "24/7", label: "WhatsApp Support", icon: "MessageCircle" },
//   { num: "100%", label: "Free Consultation", icon: "Heart" },
// ];

// type FormStatus = "idle" | "loading" | "success" | "error";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     service: "",
//     message: "",
//   });
//   const [status, setStatus] = useState<FormStatus>("idle");
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     if (!formData.name || !formData.phone) {
//       setErrorMsg("Please fill in your name and phone number.");
//       setStatus("error");
//       return;
//     }

//     setStatus("loading");
//     setErrorMsg("");

//     try {
//       // Send email via Nodemailer API route
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (!res.ok) {
//         const data = await res.json();
//         throw new Error(data.error || "Failed to send email.");
//       }

//       setStatus("success");

//       // Also open WhatsApp with pre-filled message
//       const waMessage = `Hi! I'm interested in AV Academy.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`;
//       window.open(`https://wa.me/917500206719?text=${encodeURIComponent(waMessage)}`, "_blank");

//       // Reset form after success
//       setTimeout(() => {
//         setFormData({ name: "", phone: "", email: "", service: "", message: "" });
//         setStatus("idle");
//       }, 4000);

//     } catch (err: unknown) {
//       setStatus("error");
//       setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try WhatsApp directly.");
//     }
//   };

//   const isLoading = status === "loading";

//   return (
//     <>
//       <Navbar />
//       <main className="bg-[#030f1a]">
//         {/* ============ HERO ============ */}
//         <section className="relative pt-40 pb-20 px-10 text-center overflow-hidden border-b border-cyan-500/15 bg-gradient-to-br from-[#061826] via-[#0a2436] to-[#061826]">
//           <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/20 blur-3xl pointer-events-none rounded-full" />
//           <div className="absolute top-[30%] left-[8%] w-52 h-52 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
//           <div className="absolute bottom-[10%] right-[10%] w-60 h-60 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
//           <div
//             className="absolute inset-0 opacity-50 pointer-events-none"
//             style={{
//               backgroundImage: "linear-gradient(rgba(0,180,216,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,.04) 1px, transparent 1px)",
//               backgroundSize: "60px 60px",
//             }}
//           />

//           <div className="relative z-10 max-w-[1000px] mx-auto">
//             <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-[2px] uppercase mb-6 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 shadow-[0_0_30px_rgba(0,180,216,0.2)]">
//               <LucideIcon name="MessageCircle" size={14} color="#22d3ee" strokeWidth={2} />
//               Let&apos;s Connect
//             </span>

//             <h1 className="font-syne font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] tracking-tight mb-5 text-white">
//               Let&apos;s Build Something{" "}
//               <span className="bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] bg-clip-text text-transparent">
//                 Great Together
//               </span>
//             </h1>

//             <p className="text-base md:text-lg text-gray-400 max-w-[600px] mx-auto mb-6 leading-relaxed">
//               Reach out for course inquiries, project consultations, or just to say hi. We respond within 1 hour!
//             </p>

//             <div className="inline-flex items-center gap-2.5 text-[13px] text-gray-500 px-5 py-2.5 rounded-full bg-[#082c44]/60 border border-cyan-500/15">
//               <Link href="/" className="text-cyan-400 no-underline font-semibold hover:text-cyan-300">
//                 Home
//               </Link>
//               <LucideIcon name="ChevronRight" size={14} color="#6b7280" />
//               <span className="text-gray-300">Contact</span>
//             </div>
//           </div>
//         </section>

//         {/* ============ QUICK STATS BAR ============ */}
//         <section className="px-10 py-8 bg-[#061826] border-b border-cyan-500/10">
//           <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
//             {quickStats.map((s) => (
//               <div
//                 key={s.label}
//                 className="flex items-center gap-4 px-6 py-5 rounded-2xl bg-gradient-to-br from-[#082c44]/80 to-[#030f1a]/90 border border-cyan-500/15 hover:border-cyan-500/40 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10"
//               >
//                 <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-cyan-500/20 to-cyan-400/5 border border-cyan-500/30">
//                   <LucideIcon name={s.icon} size={22} color="#22d3ee" strokeWidth={2} />
//                 </div>
//                 <div>
//                   <div className="font-syne font-extrabold text-2xl leading-none bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
//                     {s.num}
//                   </div>
//                   <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-1">
//                     {s.label}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ============ FORM + INFO ============ */}
//         <section className="px-10 py-24 bg-[#030f1a]">
//           <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10">

//             {/* ===== FORM ===== */}
//             <Reveal direction="left">
//               <div className="p-10 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 shadow-2xl shadow-cyan-500/5 relative overflow-hidden">
//                 <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 via-cyan-400 to-amber-500 opacity-60" />

//                 <div className="flex items-center gap-3 mb-7">
//                   <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-500 to-cyan-400 shadow-lg shadow-cyan-500/30">
//                     <LucideIcon name="Send" size={22} color="#031a2b" strokeWidth={2.5} />
//                   </div>
//                   <div>
//                     <h3 className="font-syne font-extrabold text-xl text-white mb-1">
//                       Send Us a Message
//                     </h3>
//                     <p className="text-xs text-gray-400 tracking-wide">
//                       Email + WhatsApp — dono jagah message jayega
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex flex-col gap-5">
//                   {formFields.map((f) => (
//                     <div key={f.label}>
//                       <label className="block text-[12.5px] font-semibold mb-2 tracking-wide text-gray-300 uppercase">
//                         <span className="inline mr-1.5 align-middle">
//                           <LucideIcon name={f.icon} size={12} color="#22d3ee" strokeWidth={2.5} />
//                         </span>
//                         {f.label}
//                       </label>
//                       <input
//                         type={f.type}
//                         name={f.name}
//                         value={formData[f.name as keyof typeof formData]}
//                         onChange={handleChange}
//                         placeholder={f.placeholder}
//                         disabled={isLoading}
//                         className="w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all bg-white/5 border border-cyan-500/15 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:bg-white/10 focus:shadow-lg focus:shadow-cyan-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
//                       />
//                     </div>
//                   ))}

//                   {/* Service Select */}
//                   <div>
//                     <label className="block text-[12.5px] font-semibold mb-2 tracking-wide text-gray-300 uppercase">
//                       <span className="inline mr-1.5 align-middle">
//                         <LucideIcon name="Target" size={12} color="#22d3ee" strokeWidth={2.5} />
//                       </span>
//                       Service Interest
//                     </label>
//                     <select
//                       name="service"
//                       value={formData.service}
//                       onChange={handleChange}
//                       disabled={isLoading}
//                       className="w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all bg-[#082c44] border border-cyan-500/15 text-gray-200 focus:border-cyan-400 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       <option value="">Select your interest...</option>
//                       <optgroup label="🎨 AV EditLab Services">
//                         {editLabServices.map((s) => (
//                           <option key={s} value={s}>{s}</option>
//                         ))}
//                       </optgroup>
//                       <optgroup label="🎓 AV Academy Courses">
//                         {academyCourses.map((s) => (
//                           <option key={s} value={s}>{s}</option>
//                         ))}
//                       </optgroup>
//                     </select>
//                   </div>

//                   {/* Message */}
//                   <div>
//                     <label className="block text-[12.5px] font-semibold mb-2 tracking-wide text-gray-300 uppercase">
//                       <span className="inline mr-1.5 align-middle">
//                         <LucideIcon name="MessageSquare" size={12} color="#22d3ee" strokeWidth={2.5} />
//                       </span>
//                       Your Message
//                     </label>
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Tell us about your project, goals, or questions..."
//                       rows={4}
//                       disabled={isLoading}
//                       className="w-full rounded-xl px-4 py-3.5 text-sm outline-none resize-y transition-all bg-white/5 border border-cyan-500/15 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
//                     />
//                   </div>

//                   {/* ===== STATUS MESSAGES ===== */}
//                   {status === "success" && (
//                     <div className="flex items-start gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30">
//                       <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-green-500/20 border border-green-500/40">
//                         <LucideIcon name="CheckCircle" size={16} color="#4ade80" strokeWidth={2} />
//                       </div>
//                       <div>
//                         <p className="text-sm font-semibold text-green-400 mb-0.5">Message Sent Successfully! 🎉</p>
//                         <p className="text-xs text-green-400/70">
//                           Email bhej diya gaya hai. WhatsApp bhi khul gaya hoga — wahan se bhi connect kar sakte ho!
//                         </p>
//                       </div>
//                     </div>
//                   )}

//                   {status === "error" && (
//                     <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30">
//                       <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-red-500/20 border border-red-500/40">
//                         <LucideIcon name="AlertCircle" size={16} color="#f87171" strokeWidth={2} />
//                       </div>
//                       <div>
//                         <p className="text-sm font-semibold text-red-400 mb-0.5">Kuch galat ho gaya</p>
//                         <p className="text-xs text-red-400/70">{errorMsg || "Please try again or contact via WhatsApp."}</p>
//                       </div>
//                     </div>
//                   )}

//                   {/* Submit Button */}
//                   <button
//                     onClick={handleSubmit}
//                     disabled={isLoading || status === "success"}
//                     className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-[15px] font-syne tracking-wide bg-gradient-to-r from-[#00b4d8] to-[#22d3ee] text-[#031a2b] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
//                   >
//                     {isLoading ? (
//                       <>
//                         {/* Spinner */}
//                         <svg className="animate-spin h-[18px] w-[18px] text-[#031a2b]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
//                         </svg>
//                         Sending...
//                       </>
//                     ) : status === "success" ? (
//                       <>
//                         <LucideIcon name="CheckCircle" size={18} color="#031a2b" strokeWidth={2.5} />
//                         Sent Successfully!
//                       </>
//                     ) : (
//                       <>
//                         <LucideIcon name="Send" size={18} color="#031a2b" strokeWidth={2.5} />
//                         Send Message
//                         <LucideIcon name="ArrowRight" size={16} color="#031a2b" strokeWidth={2.5} />
//                       </>
//                     )}
//                   </button>

//                   <p className="text-center text-xs text-gray-500 -mt-1">
//                     Submit karne pe — email aayegi aur WhatsApp bhi open hoga ✨
//                   </p>
//                 </div>
//               </div>
//             </Reveal>

//             {/* ===== INFO COLUMN ===== */}
//             <Reveal direction="right">
//               <div className="flex flex-col gap-5">
//                 {/* Contact Info Card */}
//                 <div className="p-7 rounded-3xl bg-gradient-to-br from-[#082c44]/85 to-[#030f1a]/95 border border-cyan-500/20 relative overflow-hidden">
//                   <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 to-amber-500 opacity-60" />

//                   <div className="flex items-center gap-3 mb-6">
//                     <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/30">
//                       <LucideIcon name="Headphones" size={20} color="#22d3ee" strokeWidth={2} />
//                     </div>
//                     <h3 className="font-syne font-bold text-lg text-white">
//                       Contact Information
//                     </h3>
//                   </div>

//                   <div className="flex flex-col gap-4">
//                     {contactInfo.map(({ icon, label, value, href }) => (
//                       <a
//                         key={label}
//                         href={href}
//                         target={icon === "MapPin" || icon === "Globe" ? "_blank" : undefined}
//                         rel="noopener noreferrer"
//                         className="flex gap-3.5 items-start p-3 -m-3 rounded-xl hover:bg-cyan-500/5 transition-all group"
//                       >
//                         <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all">
//                           <LucideIcon name={icon} size={18} color="#22d3ee" strokeWidth={2} />
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <div className="font-syne font-semibold text-[13.5px] text-amber-400 mb-1">
//                             {label}
//                           </div>
//                           <div className="text-[12.5px] leading-relaxed text-gray-400 whitespace-pre-line group-hover:text-gray-300 transition-colors">
//                             {value}
//                           </div>
//                         </div>
//                         <span className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1 inline-flex">
//                           <LucideIcon name="ArrowUpRight" size={14} color="#22d3ee" strokeWidth={2} />
//                         </span>
//                       </a>
//                     ))}
//                   </div>
//                 </div>

//                 {/* WhatsApp CTA Card */}
//                 <div className="p-7 rounded-3xl text-center bg-gradient-to-br from-green-500/15 to-green-700/10 border border-green-500/30 relative overflow-hidden">
//                   <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-green-500/20 blur-3xl pointer-events-none" />
//                   <div className="relative z-10">
//                     <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 shadow-xl shadow-green-500/30">
//                       <LucideIcon name="MessageCircle" size={32} color="#ffffff" strokeWidth={2.5} />
//                     </div>
//                     <h4 className="font-syne font-bold text-lg text-white mb-2">
//                       Chat on WhatsApp
//                     </h4>
//                     <p className="text-[13px] text-gray-300 mb-5 leading-relaxed">
//                       Get a response within <strong className="text-green-400">1 hour!</strong> Available 24/7 for quick queries.
//                     </p>
//                     <a
//                       href="https://wa.me/917500206719"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#25d366] to-[#128c7e] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/40 transition-all font-syne"
//                     >
//                       <LucideIcon name="MessageCircle" size={18} color="#ffffff" strokeWidth={2.5} />
//                       Open WhatsApp Chat
//                       <LucideIcon name="ArrowRight" size={16} color="#ffffff" strokeWidth={2.5} />
//                     </a>
//                   </div>
//                 </div>

//                 {/* Office Hours Card */}
//                 <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/10 to-[#082c44]/80 border border-amber-500/25">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-amber-500/15 border border-amber-500/30">
//                       <LucideIcon name="Clock" size={20} color="#fbbf24" strokeWidth={2} />
//                     </div>
//                     <h4 className="font-syne font-bold text-base text-white">
//                       Office Hours
//                     </h4>
//                   </div>
//                   <div className="flex flex-col gap-2 text-[13px]">
//                     <div className="flex justify-between items-center pb-2 border-b border-amber-500/15">
//                       <span className="text-gray-400">Mon - Sat</span>
//                       <span className="text-amber-400 font-semibold">10:00 AM - 8:00 PM</span>
//                     </div>
//                     <div className="flex justify-between items-center pb-2 border-b border-amber-500/15">
//                       <span className="text-gray-400">Sunday</span>
//                       <span className="text-gray-500">By Appointment</span>
//                     </div>
//                     <div className="flex justify-between items-center pt-1">
//                       <span className="text-gray-400">WhatsApp</span>
//                       <span className="text-green-400 font-semibold flex items-center gap-1.5">
//                         <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
//                         24/7 Online
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Email notification badge */}
//                 <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/15">
//                   <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-cyan-500/10 border border-cyan-500/20">
//                     <LucideIcon name="Mail" size={18} color="#22d3ee" strokeWidth={2} />
//                   </div>
//                   <div>
//                     <p className="text-[12.5px] font-semibold text-cyan-400 mb-0.5">Email Notification Active</p>
//                     <p className="text-[11.5px] text-gray-500 leading-relaxed">
//                       Har inquiry ka email seedha <span className="text-gray-400">avacademy1706@gmail.com</span> pe aata hai
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </Reveal>
//           </div>
//         </section>

//         {/* ============ MAP SECTION ============ */}
//         <section className="px-10 py-20 bg-[#061826] border-t border-cyan-500/10">
//           <div className="max-w-[1300px] mx-auto">
//             <Reveal>
//               <div className="text-center mb-10">
//                 <div className="text-xs font-bold tracking-[2px] uppercase text-cyan-400 mb-3">
//                   // Find Us
//                 </div>
//                 <h2 className="font-syne font-extrabold text-[clamp(1.6rem,2.8vw,2.4rem)] tracking-tight text-white mb-3">
//                   Visit Our{" "}
//                   <span className="bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent">
//                     Lucknow Campus
//                   </span>
//                 </h2>
//                 <p className="text-sm text-gray-400 max-w-[600px] mx-auto leading-relaxed">
//                   3rd Floor, Sai Tower, Raibareli Rd, near Dental College, Vrindavan Colony, Lucknow
//                 </p>
//               </div>
//             </Reveal>

//             <Reveal>
//               <div className="rounded-3xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 relative">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6!2d80.9!3d26.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVnJpbmRhdmFuIENvbG9ueSBMdWNrbm93!5e0!3m2!1sen!2sin!4v1700000000000"
//                   width="100%"
//                   height="450"
//                   style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 />
//               </div>
//             </Reveal>
//           </div>
//         </section>
//       </main>
//       <Footer />
//       <WAFloat />
//     </>
//   );
// }



// app/contact/page.tsx
// ✅ Server Component — metadata export + JSON-LD yahan, UI alag file mein

import type { Metadata } from "next";
import ContactClient from "./ContactClient";

// ── SEO Metadata ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Contact Us | AV Academy & AV EditLab — Lucknow",
  description:
    "AV Academy se contact karein — Graphic Design, Video Editing, AI, Digital Marketing courses ke liye. Lucknow mein located. WhatsApp ya form ke zariye 1 ghante mein jawab.",
  keywords: [
    "AV Academy contact",
    "Lucknow design institute",
    "video editing course Lucknow",
    "contact AV EditLab",
    "graphic design classes Lucknow",
    "AI course Lucknow",
    "digital marketing course Lucknow",
  ],
  alternates: {
    canonical: "https://avacademy.co.in/contact",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url: "https://avacademy.co.in/contact",
    siteName: "AV Academy",
    title: "Contact AV Academy | Lucknow's Top Design Institute",
    description:
      "Reach out for courses, design services & free consultation. Response within 1 hour on WhatsApp!",
    images: [
      {
        url: "https://avacademy.co.in/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "AV Academy Contact Page",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AV Academy | Lucknow",
    description: "Reach out for courses, design services & free consultation.",
    images: ["https://avacademy.co.in/og-contact.jpg"],
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "AV Academy",
  url: "https://avacademy.co.in",
  logo: "https://avacademy.co.in/logo.png",
  description:
    "AV Academy — Lucknow ka premier design, video editing, AI aur digital marketing institute.",
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
    contactType: "customer support",
    availableLanguage: ["Hindi", "English"],
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
};

// ── Page (Server Component) ───────────────────────────────────────────────
export default function ContactPage() {
  return (
    <>
      {/* JSON-LD — server side render hota hai, Google ise directly padhta hai */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Actual UI — client component */}
      <ContactClient />
    </>
  );
}