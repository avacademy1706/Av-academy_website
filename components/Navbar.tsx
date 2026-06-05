// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";

// const navIndustries = [
//   { href: "/services/packaging",   label: "📦 Packaging" },
//   { href: "/services/hospitality", label: "🏨 Hospitality" },
//   { href: "/services/realestate",  label: "🏠 Real Estate" },
//   { href: "/services/education",   label: "🎓 Education" },
//   { href: "/services/fashion",     label: "👗 Fashion" },
//   { href: "/services/automobile",  label: "🚗 Automobile" },
//   { href: "/services/advertising", label: "📢 Advertising" },
//   { href: "/services/media",       label: "📺 Media" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobOpen, setMobOpen] = useState(false);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 50);
//       const h = document.body.scrollHeight - window.innerHeight;
//       setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       <div className="scroll-progress" style={{ width: `${progress}%` }} />

//       <nav className={`fixed top-0 left-0 right-0 z-[1000] px-10 transition-all duration-300 ${scrolled ? "bg-bg/95 backdrop-blur-xl border-b border-cyan1/20" : ""}`}>
//         <div className="max-w-[1300px] mx-auto flex items-center justify-between h-[72px]">

//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-3">
//             <div className="relative w-[46px] h-[46px] rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
//               <div className="absolute inset-0 bg-grad-cyan-btn" />
//               <span className="relative z-10 font-syne font-black text-lg text-white">AV</span>
//             </div>
//             <div className="leading-tight">
//               <strong className="block font-syne font-black text-[15px] tracking-wide grad-cyan">AV EDITLAB</strong>
//               <em className="not-italic text-[10px] text-cyan3 tracking-[1.5px]">& AV ACADEMY</em>
//             </div>
//           </Link>

//           {/* Desktop Nav */}
//           <div className="hidden lg:flex items-center gap-1">
//             <NavLink href="/">Home</NavLink>

//             <div className="relative group">
//               <button className="px-3.5 py-2 text-[13px] font-medium text-gray2 hover:text-white hover:bg-cyan1/10 rounded-lg transition-all font-syne bg-transparent border-none cursor-pointer">
//                 AV EditLab ▾
//               </button>
//               <div className="absolute top-[calc(100%+8px)] left-0 bg-bg/98 backdrop-blur-2xl border border-cyan1/20 rounded-2xl min-w-[220px] py-2.5 z-[999] opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 shadow-[0_24px_60px_rgba(0,0,0,.7)]">
//                 <span className="block px-5 py-2 text-[10px] tracking-[2px] text-cyan2/80 font-bold uppercase font-syne">Industries</span>
//                 {navIndustries.map(item => <DropLink key={item.href} href={item.href} label={item.label} />)}
//                 <span className="block px-5 py-2 text-[10px] tracking-[2px] text-cyan2/80 font-bold uppercase font-syne">More</span>
//                 <DropLink href="/ai-training" label="🤖 AI Training B2B" />
//                 <DropLink href="/services" label="✦ All Services" />
//               </div>
//             </div>

//             <div className="relative group">
//               <button className="px-3.5 py-2 text-[13px] font-medium text-gray2 hover:text-white hover:bg-cyan1/10 rounded-lg transition-all font-syne bg-transparent border-none cursor-pointer">
//                 AV Academy ▾
//               </button>
//               <div className="absolute top-[calc(100%+8px)] left-0 bg-bg/98 backdrop-blur-2xl border border-cyan1/20 rounded-2xl min-w-[220px] py-2.5 z-[999] opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 shadow-[0_24px_60px_rgba(0,0,0,.7)]">
//                 <DropLink href="/ai-masterclass" label="🧠 AI Masterclasses" />
//                 <DropLink href="/courses" label="📚 All Courses" />
//                 <DropLink href="/pricing" label="💎 Personal Brand Plans" />
//               </div>
//             </div>

//             <NavLink href="/about">About Us</NavLink>
//             <NavLink href="/contact">Contact</NavLink>

//             <Link href="/contact" className="shimmer-btn ml-2 px-5 py-2.5 rounded-lg font-syne font-semibold text-sm text-white bg-grad-cyan-btn hover:opacity-90 transition-opacity">
//               Get a Quote
//             </Link>
//           </div>

//           {/* Hamburger */}
//           <button onClick={() => setMobOpen(!mobOpen)} className="lg:hidden flex flex-col gap-1.5 p-1 cursor-pointer bg-transparent border-none">
//             <span className={`block w-6 h-0.5 bg-cyan2 rounded transition-all ${mobOpen ? "rotate-45 translate-y-2" : ""}`} />
//             <span className={`block h-0.5 bg-blue2 rounded transition-all ${mobOpen ? "opacity-0 w-6" : "w-[18px]"}`} />
//             <span className={`block w-6 h-0.5 bg-cyan3 rounded transition-all ${mobOpen ? "-rotate-45 -translate-y-2" : ""}`} />
//           </button>
//         </div>

//         {/* Mobile Nav */}
//         {mobOpen && (
//           <div className="lg:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-bg/97 backdrop-blur-xl z-[998] overflow-y-auto px-10 py-5">
//             {[
//               { href: "/", label: "🏠 Home" },
//               { href: "/services", label: "🎨 All Services" },
//               ...navIndustries,
//               { href: "/ai-training", label: "🤖 AI Training B2B" },
//               { href: "/ai-masterclass", label: "🧠 AI Masterclasses" },
//               { href: "/courses", label: "📚 All Courses" },
//               { href: "/pricing", label: "💎 Brand Plans" },
//               { href: "/about", label: "ℹ️ About Us" },
//               { href: "/contact", label: "📞 Contact / Quote" },
//             ].map(item => (
//               <div key={item.href} className="border-b border-cyan1/10 py-3.5">
//                 <Link href={item.href} className={`text-sm font-medium ${item.href === "/contact" ? "text-cyan2" : "text-gray2"}`} onClick={() => setMobOpen(false)}>
//                   {item.label}
//                 </Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }

// function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
//   return (
//     <Link href={href} className="block px-3.5 py-2 text-[13px] font-medium text-gray2 hover:text-white hover:bg-cyan1/10 rounded-lg transition-all font-syne">
//       {children}
//     </Link>
//   );
// }

// function DropLink({ href, label }: { href: string; label: string }) {
//   return (
//     <Link href={href} className="flex items-center gap-2 px-5 py-2.5 text-[12.5px] text-gray1 hover:text-white hover:bg-cyan1/10 hover:pl-6 transition-all">
//       {label}
//     </Link>
//   );
// }


// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import LucideIcon from "./LucideIcon";

// const navIndustries = [
//   { href: "/services/packaging", icon: "Package", label: "Packaging" },
//   { href: "/services/hospitality", icon: "Hotel", label: "Hospitality" },
//   { href: "/services/realestate", icon: "Home", label: "Real Estate" },
//   { href: "/services/education", icon: "GraduationCap", label: "Education" },
//   { href: "/services/fashion", icon: "Shirt", label: "Fashion" },
//   { href: "/services/automobile", icon: "Car", label: "Automobile" },
//   { href: "/services/advertising", icon: "Megaphone", label: "Advertising" },
//   { href: "/services/media", icon: "Tv", label: "Media" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobOpen, setMobOpen] = useState(false);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 50);
//       const h = document.body.scrollHeight - window.innerHeight;
//       setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       <div className="scroll-progress" style={{ width: `${progress}%` }} />

//       <nav className={`fixed top-0 left-0 right-0 z-[1000] px-10 transition-all duration-300 ${scrolled ? "bg-bg/95 backdrop-blur-xl border-b border-cyan1/20" : ""}`}>
//         <div className="max-w-[1300px] mx-auto flex items-center justify-between h-[72px]">

//           {/* ── LOGO — AV ACADEMY pehle ── */}
//           <Link href="/" className="flex items-center gap-3">
//             <div className="relative w-[46px] h-[46px] rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
//               <div className="absolute inset-0 bg-grad-cyan-btn" />
//               <span className="relative z-10 font-syne font-black text-lg text-white">AV</span>
//             </div>
//             <div className="leading-tight">
//               <strong className="block font-syne font-black text-[15px] tracking-wide grad-cyan">AV ACADEMY</strong>
//               <em className="not-italic text-[10px] text-cyan3 tracking-[1.5px]">& AV EDITLAB</em>
//             </div>
//           </Link>

//           {/* Desktop Nav */}
//           <div className="hidden lg:flex items-center gap-1">
//             <NavLink href="/">Home</NavLink>

//             {/* ── AV ACADEMY — PEHLE ── */}
//             <div className="relative group">
//               <button className="px-3.5 py-2 text-[13px] font-medium text-gray2 hover:text-white hover:bg-cyan1/10 rounded-lg transition-all font-syne bg-transparent border-none cursor-pointer flex items-center gap-1.5">
//                 <LucideIcon name="GraduationCap" size={14} color="#a8c8dc" strokeWidth={1.5} />
//                 AV Academy ▾
//               </button>
//               <div className="absolute top-[calc(100%+8px)] left-0 bg-bg/98 backdrop-blur-2xl border border-cyan1/20 rounded-2xl min-w-[220px] py-2.5 z-[999] opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 shadow-[0_24px_60px_rgba(0,0,0,.7)]">
//                 <DropLink href="/ai-masterclass" icon="Brain" label="AI Masterclasses" />
//                 <DropLink href="/courses" icon="BookOpen" label="All Courses" />
//                 <DropLink href="/pricing" icon="BadgeDollarSign" label="Personal Brand Plans" />
//               </div>
//             </div>

//             {/* ── AV EDITLAB — BAAD MEIN ── */}
//             <div className="relative group">
//               <button className="px-3.5 py-2 text-[13px] font-medium text-gray2 hover:text-white hover:bg-cyan1/10 rounded-lg transition-all font-syne bg-transparent border-none cursor-pointer flex items-center gap-1.5">
//                 <LucideIcon name="Palette" size={14} color="#a8c8dc" strokeWidth={1.5} />
//                 AV EditLab ▾
//               </button>
//               <div className="absolute top-[calc(100%+8px)] left-0 bg-bg/98 backdrop-blur-2xl border border-cyan1/20 rounded-2xl min-w-[240px] py-2.5 z-[999] opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 shadow-[0_24px_60px_rgba(0,0,0,.7)]">
//                 <span className="block px-5 py-2 text-[10px] tracking-[2px] text-cyan2/80 font-bold uppercase font-syne">Industries</span>
//                 {navIndustries.map(item => (
//                   <DropLink key={item.href} href={item.href} icon={item.icon} label={item.label} />
//                 ))}
//                 <div className="my-1 mx-4 border-t border-cyan1/10" />
//                 <DropLink href="/ai-training" icon="Bot" label="AI Training B2B" />
//                 <DropLink href="/services" icon="LayoutGrid" label="All Services" />
//               </div>
//             </div>

//             <NavLink href="/about">About Us</NavLink>
//             <NavLink href="/contact">Contact</NavLink>

//             <Link href="/contact" className="shimmer-btn ml-2 px-5 py-2.5 rounded-lg font-syne font-semibold text-sm text-white bg-grad-cyan-btn hover:opacity-90 transition-opacity flex items-center gap-2">
//               <LucideIcon name="MessageCircle" size={14} /> Get a Quote
//             </Link>
//           </div>

//           {/* Hamburger */}
//           <button onClick={() => setMobOpen(!mobOpen)} className="lg:hidden flex flex-col gap-1.5 p-1 cursor-pointer bg-transparent border-none">
//             <span className={`block w-6 h-0.5 bg-cyan2 rounded transition-all ${mobOpen ? "rotate-45 translate-y-2" : ""}`} />
//             <span className={`block h-0.5 bg-cyan1 rounded transition-all ${mobOpen ? "opacity-0 w-6" : "w-[18px]"}`} />
//             <span className={`block w-6 h-0.5 bg-cyan3 rounded transition-all ${mobOpen ? "-rotate-45 -translate-y-2" : ""}`} />
//           </button>
//         </div>

//         {/* Mobile Nav */}
//         {mobOpen && (
//           <div className="lg:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-bg/97 backdrop-blur-xl z-[998] overflow-y-auto px-10 py-5">
//             {[
//               { href: "/", icon: "House", label: "Home" },
//               { href: "/ai-masterclass", icon: "Brain", label: "AI Masterclasses" },
//               { href: "/courses", icon: "BookOpen", label: "All Courses" },
//               { href: "/pricing", icon: "BadgeDollarSign", label: "Brand Plans" },
//               { href: "/services", icon: "LayoutGrid", label: "All Services" },
//               { href: "/services/packaging", icon: "Package", label: "Packaging" },
//               { href: "/services/hospitality", icon: "Hotel", label: "Hospitality" },
//               { href: "/services/realestate", icon: "Home", label: "Real Estate" },
//               { href: "/services/education", icon: "GraduationCap", label: "Education" },
//               { href: "/services/fashion", icon: "Shirt", label: "Fashion" },
//               { href: "/services/automobile", icon: "Car", label: "Automobile" },
//               { href: "/services/advertising", icon: "Megaphone", label: "Advertising" },
//               { href: "/services/media", icon: "Tv", label: "Media" },
//               { href: "/ai-training", icon: "Bot", label: "AI Training B2B" },
//               { href: "/about", icon: "Info", label: "About Us" },
//               { href: "/contact", icon: "Phone", label: "Contact / Quote" },
//             ].map(item => (
//               <div key={item.href} className="border-b border-cyan1/10 py-3.5">
//                 <Link
//                   href={item.href}
//                   className={`flex items-center gap-2.5 text-sm font-medium ${item.href === "/contact" ? "text-cyan2" : "text-gray2"}`}
//                   onClick={() => setMobOpen(false)}
//                 >
//                   <LucideIcon name={item.icon} size={15} color={item.href === "/contact" ? "#22d3ee" : "#a8c8dc"} strokeWidth={1.5} />
//                   {item.label}
//                 </Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }

// function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
//   return (
//     <Link href={href} className="block px-3.5 py-2 text-[13px] font-medium text-gray2 hover:text-white hover:bg-cyan1/10 rounded-lg transition-all font-syne">
//       {children}
//     </Link>
//   );
// }

// function DropLink({ href, icon, label }: { href: string; icon: string; label: string }) {
//   return (
//     <Link href={href} className="flex items-center gap-2.5 px-5 py-2.5 text-[12.5px] text-gray1 hover:text-white hover:bg-cyan1/10 hover:pl-6 transition-all">
//       <LucideIcon name={icon} size={14} color="#7a9db0" strokeWidth={1.5} />
//       {label}
//     </Link>
//   );
// }


// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import LucideIcon from "./LucideIcon";

// const navIndustries = [
//   { href: "/services/packaging", icon: "Package", label: "Packaging" },
//   { href: "/services/hospitality", icon: "Hotel", label: "Hospitality" },
//   { href: "/services/realestate", icon: "Home", label: "Real Estate" },
//   { href: "/services/education", icon: "GraduationCap", label: "Education" },
//   { href: "/services/fashion", icon: "Shirt", label: "Fashion" },
//   { href: "/services/automobile", icon: "Car", label: "Automobile" },
//   { href: "/services/advertising", icon: "Megaphone", label: "Advertising" },
//   { href: "/services/media", icon: "Tv", label: "Media" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobOpen, setMobOpen] = useState(false);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 50);
//       const h = document.body.scrollHeight - window.innerHeight;
//       setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       <div className="scroll-progress" style={{ width: `${progress}%` }} />

//       <nav className={`fixed top-0 left-0 right-0 z-[1000] px-10 transition-all duration-300 ${scrolled ? "bg-bg/95 backdrop-blur-xl border-b border-cyan1/20" : ""}`}>
//         <div className="max-w-[1300px] mx-auto flex items-center justify-between h-[72px]">

//           {/* ── LOGO — AV ACADEMY pehle ── */}
//           <Link href="/" className="flex items-center gap-3">
//             <div className="relative w-[46px] h-[46px] rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
//               <div className="absolute inset-0 bg-grad-cyan-btn" />
//               <span className="relative z-10 font-syne font-black text-lg text-white">AV</span>
//             </div>
//             <div className="leading-tight">
//               <strong className="block font-syne font-black text-[15px] tracking-normal grad-cyan">AV ACADEMY</strong>
//               <em className="not-italic text-[10px] text-cyan3 tracking-[1px]">& AV EDITLAB</em>
//             </div>
//           </Link>

//           {/* Desktop Nav */}
//           <div className="hidden lg:flex items-center gap-1">
//             <NavLink href="/">Home</NavLink>

//             {/* ── AV ACADEMY — PEHLE ── */}
//             <div className="relative group">
//               <button className="px-3.5 py-2 text-[13px] font-medium text-gray2 hover:text-white hover:bg-cyan1/10 rounded-lg transition-all font-syne bg-transparent border-none cursor-pointer flex items-center gap-1.5">
//                 <LucideIcon name="GraduationCap" size={14} color="#a8c8dc" strokeWidth={1.5} />
//                 AV Academy ▾
//               </button>
//               <div className="absolute top-[calc(100%+8px)] left-0 bg-bg/98 backdrop-blur-2xl border border-cyan1/20 rounded-2xl min-w-[220px] py-2.5 z-[999] opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 shadow-[0_24px_60px_rgba(0,0,0,.7)]">
//                 <DropLink href="/ai-masterclass" icon="Brain" label="AI Masterclasses" />
//                 <DropLink href="/courses" icon="BookOpen" label="All Courses" />
//                 {/* <DropLink href="/pricing" icon="BadgeDollarSign" label="Personal Brand Plans" /> */}
//               </div>
//             </div>

//             {/* ── AV EDITLAB — BAAD MEIN ── */}
//             <div className="relative group">
//               <button className="px-3.5 py-2 text-[13px] font-medium text-gray2 hover:text-white hover:bg-cyan1/10 rounded-lg transition-all font-syne bg-transparent border-none cursor-pointer flex items-center gap-1.5">
//                 <LucideIcon name="Palette" size={14} color="#a8c8dc" strokeWidth={1.5} />
//                 AV EditLab ▾
//               </button>
//               <div className="absolute top-[calc(100%+8px)] left-0 bg-bg/98 backdrop-blur-2xl border border-cyan1/20 rounded-2xl min-w-[240px] py-2.5 z-[999] opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 shadow-[0_24px_60px_rgba(0,0,0,.7)]">
//                 <span className="block px-5 py-2 text-[10px] tracking-[2px] text-cyan2/80 font-bold uppercase font-syne">Industries</span>
//                 {navIndustries.map(item => (
//                   <DropLink key={item.href} href={item.href} icon={item.icon} label={item.label} />
//                 ))}
//                 <div className="my-1 mx-4 border-t border-cyan1/10" />
//                 <DropLink href="/ai-training" icon="Bot" label="AI Training B2B" />
//                 <DropLink href="/services" icon="LayoutGrid" label="All Services" />
//               </div>
//             </div>

//             <NavLink href="/about">About Us</NavLink>
//             <NavLink href="/contact">Contact</NavLink>

//             <Link href="/contact" className="shimmer-btn ml-2 px-5 py-2.5 rounded-lg font-syne font-semibold text-sm text-white bg-grad-cyan-btn hover:opacity-90 transition-opacity flex items-center gap-2">
//               <LucideIcon name="MessageCircle" size={14} /> Get a Quote
//             </Link>
//           </div>

//           {/* Hamburger */}
//           <button onClick={() => setMobOpen(!mobOpen)} className="lg:hidden flex flex-col gap-1.5 p-1 cursor-pointer bg-transparent border-none">
//             <span className={`block w-6 h-0.5 bg-cyan2 rounded transition-all ${mobOpen ? "rotate-45 translate-y-2" : ""}`} />
//             <span className={`block h-0.5 bg-cyan1 rounded transition-all ${mobOpen ? "opacity-0 w-6" : "w-[18px]"}`} />
//             <span className={`block w-6 h-0.5 bg-cyan3 rounded transition-all ${mobOpen ? "-rotate-45 -translate-y-2" : ""}`} />
//           </button>
//         </div>

//         {/* Mobile Nav */}
//         {mobOpen && (
//           <div className="lg:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-bg/97 backdrop-blur-xl z-[998] overflow-y-auto px-10 py-5">
//             {[
//               { href: "/", icon: "House", label: "Home" },
//               { href: "/ai-masterclass", icon: "Brain", label: "AI Masterclasses" },
//               { href: "/courses", icon: "BookOpen", label: "All Courses" },
//               // { href: "/pricing", icon: "BadgeDollarSign", label: "Brand Plans" },
//               { href: "/services", icon: "LayoutGrid", label: "All Services" },
//               { href: "/services/packaging", icon: "Package", label: "Packaging" },
//               { href: "/services/hospitality", icon: "Hotel", label: "Hospitality" },
//               { href: "/services/realestate", icon: "Home", label: "Real Estate" },
//               { href: "/services/education", icon: "GraduationCap", label: "Education" },
//               { href: "/services/fashion", icon: "Shirt", label: "Fashion" },
//               { href: "/services/automobile", icon: "Car", label: "Automobile" },
//               { href: "/services/advertising", icon: "Megaphone", label: "Advertising" },
//               { href: "/services/media", icon: "Tv", label: "Media" },
//               { href: "/ai-training", icon: "Bot", label: "AI Training B2B" },
//               { href: "/about", icon: "Info", label: "About Us" },
//               { href: "/contact", icon: "Phone", label: "Contact / Quote" },
//             ].map(item => (
//               <div key={item.href} className="border-b border-cyan1/10 py-3.5">
//                 <Link
//                   href={item.href}
//                   className={`flex items-center gap-2.5 text-sm font-medium ${item.href === "/contact" ? "text-cyan2" : "text-gray2"}`}
//                   onClick={() => setMobOpen(false)}
//                 >
//                   <LucideIcon name={item.icon} size={15} color={item.href === "/contact" ? "#22d3ee" : "#a8c8dc"} strokeWidth={1.5} />
//                   {item.label}
//                 </Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }

// function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
//   return (
//     <Link href={href} className="block px-3.5 py-2 text-[13px] font-medium text-gray2 hover:text-white hover:bg-cyan1/10 rounded-lg transition-all font-syne">
//       {children}
//     </Link>
//   );
// }

// function DropLink({ href, icon, label }: { href: string; icon: string; label: string }) {
//   return (
//     <Link href={href} className="flex items-center gap-2.5 px-5 py-2.5 text-[12.5px] text-gray1 hover:text-white hover:bg-cyan1/10 hover:pl-6 transition-all">
//       <LucideIcon name={icon} size={14} color="#7a9db0" strokeWidth={1.5} />
//       {label}
//     </Link>
//   );
// }


// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import LucideIcon from "./LucideIcon";

// const navIndustries = [
//   { href: "/services/packaging", icon: "Package", label: "Packaging" },
//   { href: "/services/hospitality", icon: "Hotel", label: "Hospitality" },
//   { href: "/services/realestate", icon: "Home", label: "Real Estate" },
//   { href: "/services/education", icon: "GraduationCap", label: "Education" },
//   { href: "/services/fashion", icon: "Shirt", label: "Fashion" },
//   { href: "/services/automobile", icon: "Car", label: "Automobile" },
//   { href: "/services/advertising", icon: "Megaphone", label: "Advertising" },
//   { href: "/services/media", icon: "Tv", label: "Media" },
// ];

// // ── All Courses for nested submenu ──
// const mediaCourses = [
//   { href: "/courses/graphic-design", icon: "Palette", label: "Graphic Design" },
//   { href: "/courses/video-editing", icon: "Video", label: "Video Editing" },
//   { href: "/courses/motion-graphics", icon: "Zap", label: "Motion Graphics" },
//   { href: "/courses/vfx-master-classes", icon: "Sparkles", label: "VFX Master Classes" },
//   { href: "/courses/2d-animation", icon: "PenTool", label: "2D Animation" },
//   { href: "/courses/3d-animation", icon: "Box", label: "3D Animation" },
//   { href: "/courses/digital-marketing", icon: "Megaphone", label: "Digital Marketing" },
//   { href: "/courses/painting-sketching", icon: "PenLine", label: "Painting & Sketching" },
// ];

// const techCourses = [
//   { href: "/ai-masterclass", icon: "Brain", label: "AI Masterclass", hot: true },
//   { href: "/courses/python-data-science", icon: "Code2", label: "Python & Data Science" },
//   { href: "/courses/c-programming", icon: "Terminal", label: "C Programming" },
//   { href: "/courses/cpp-programming", icon: "FileCode2", label: "C++ Programming" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobOpen, setMobOpen] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [mobCoursesOpen, setMobCoursesOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 50);
//       const h = document.body.scrollHeight - window.innerHeight;
//       setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       <div className="scroll-progress" style={{ width: `${progress}%` }} />

//       <nav className={`fixed top-0 left-0 right-0 z-[1000] px-10 transition-all duration-300 ${scrolled ? "bg-bg/95 backdrop-blur-xl border-b border-cyan1/20" : ""}`}>
//         <div className="max-w-[1300px] mx-auto flex items-center justify-between h-[72px]">

//           {/* ── LOGO ── */}
//           <Link href="/" className="flex items-center gap-3">
//             <div className="relative w-[46px] h-[46px] rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
//               <div className="absolute inset-0 bg-grad-cyan-btn" />
//               <span className="relative z-10 font-syne font-black text-lg text-white">AV</span>
//             </div>
//             <div className="leading-tight">
//               <strong className="block font-syne font-black text-[15px] tracking-normal grad-cyan">AV ACADEMY</strong>
//               <em className="not-italic text-[10px] text-cyan3 tracking-[1px]">& AV EDITLAB</em>
//             </div>
//           </Link>

//           {/* Desktop Nav */}
//           <div className="hidden lg:flex items-center gap-1">
//             <NavLink href="/">Home</NavLink>

//             {/* ── AV ACADEMY DROPDOWN ── */}
//             <div className="relative group">
//               <button className="px-3.5 py-2 text-[13px] font-medium text-gray2 hover:text-white hover:bg-cyan1/10 rounded-lg transition-all font-syne bg-transparent border-none cursor-pointer flex items-center gap-1.5">
//                 <LucideIcon name="GraduationCap" size={14} color="#a8c8dc" strokeWidth={1.5} />
//                 AV Academy ▾
//               </button>

//               <div className="absolute top-[calc(100%+8px)] left-0 bg-bg/98 backdrop-blur-2xl border border-cyan1/20 rounded-2xl min-w-[240px] py-2.5 z-[999] opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 shadow-[0_24px_60px_rgba(0,0,0,.7)]">
//                 <DropLink href="/ai-masterclass" icon="Brain" label="AI Masterclasses" />

//                 {/* ━━━━━━ ALL COURSES — NESTED SUBMENU ━━━━━━ */}
//                 <div className="relative group/sub">
//                   <Link
//                     href="/courses"
//                     className="flex items-center justify-between gap-2.5 px-5 py-2.5 text-[12.5px] text-gray1 hover:text-white hover:bg-cyan1/10 hover:pl-6 transition-all cursor-pointer"
//                   >
//                     <span className="flex items-center gap-2.5">
//                       <LucideIcon name="BookOpen" size={14} color="#7a9db0" strokeWidth={1.5} />
//                       All Courses
//                     </span>
//                     <LucideIcon name="ChevronRight" size={12} color="#22d3ee" strokeWidth={2} />
//                   </Link>

//                   {/* ── NESTED SUBMENU — Opens to RIGHT ── */}
//                   <div className="absolute top-0 left-full ml-1 bg-bg/98 backdrop-blur-2xl border border-cyan1/20 rounded-2xl min-w-[280px] py-2.5 z-[1000] opacity-0 invisible -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0 transition-all duration-200 shadow-[0_24px_60px_rgba(0,0,0,.7)]">
//                     {/* Media Section */}
//                     <span className="block px-5 py-2 text-[10px] tracking-[2px] text-cyan2/80 font-bold uppercase font-syne">
//                       Media Courses
//                     </span>
//                     {mediaCourses.map(c => (
//                       <DropLink key={c.href} href={c.href} icon={c.icon} label={c.label} />
//                     ))}

//                     <div className="my-2 mx-4 border-t border-cyan1/10" />

//                     {/* Tech Section */}
//                     <span className="block px-5 py-2 text-[10px] tracking-[2px] text-cyan2/80 font-bold uppercase font-syne">
//                       Tech Courses
//                     </span>
//                     {techCourses.map(c => (
//                       <Link
//                         key={c.href}
//                         href={c.href}
//                         className="flex items-center justify-between gap-2.5 px-5 py-2.5 text-[12.5px] text-gray1 hover:text-white hover:bg-cyan1/10 hover:pl-6 transition-all"
//                       >
//                         <span className="flex items-center gap-2.5">
//                           <LucideIcon name={c.icon} size={14} color="#7a9db0" strokeWidth={1.5} />
//                           {c.label}
//                         </span>
//                         {c.hot && (
//                           <span className="text-[9px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-cyan2/20 text-cyan2 border border-cyan2/30">
//                             HOT
//                           </span>
//                         )}
//                       </Link>
//                     ))}

//                     <div className="my-2 mx-4 border-t border-cyan1/10" />

//                     {/* View All Link */}
//                     <Link
//                       href="/courses"
//                       className="flex items-center justify-center gap-2 mx-4 mt-2 px-4 py-2 rounded-lg text-[12px] font-bold text-cyan2 bg-cyan1/10 hover:bg-cyan1/20 border border-cyan1/30 transition-all font-syne"
//                     >
//                       View All Courses
//                       <LucideIcon name="ArrowRight" size={12} color="#22d3ee" strokeWidth={2.5} />
//                     </Link>
//                   </div>
//                 </div>
//                 {/* ━━━━━━ END NESTED SUBMENU ━━━━━━ */}
//               </div>
//             </div>

//             {/* ── AV EDITLAB DROPDOWN ── */}
//             <div className="relative group">
//               <button className="px-3.5 py-2 text-[13px] font-medium text-gray2 hover:text-white hover:bg-cyan1/10 rounded-lg transition-all font-syne bg-transparent border-none cursor-pointer flex items-center gap-1.5">
//                 <LucideIcon name="Palette" size={14} color="#a8c8dc" strokeWidth={1.5} />
//                 AV EditLab ▾
//               </button>
//               <div className="absolute top-[calc(100%+8px)] left-0 bg-bg/98 backdrop-blur-2xl border border-cyan1/20 rounded-2xl min-w-[240px] py-2.5 z-[999] opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 shadow-[0_24px_60px_rgba(0,0,0,.7)]">
//                 <span className="block px-5 py-2 text-[10px] tracking-[2px] text-cyan2/80 font-bold uppercase font-syne">Industries</span>
//                 {navIndustries.map(item => (
//                   <DropLink key={item.href} href={item.href} icon={item.icon} label={item.label} />
//                 ))}
//                 <div className="my-1 mx-4 border-t border-cyan1/10" />
//                 <DropLink href="/ai-training" icon="Bot" label="AI Training B2B" />
//                 <DropLink href="/services" icon="LayoutGrid" label="All Services" />
//               </div>
//             </div>

//             <NavLink href="/about">About Us</NavLink>
//             <NavLink href="/contact">Contact</NavLink>

//             <Link href="/contact" className="shimmer-btn ml-2 px-5 py-2.5 rounded-lg font-syne font-semibold text-sm text-white bg-grad-cyan-btn hover:opacity-90 transition-opacity flex items-center gap-2">
//               <LucideIcon name="MessageCircle" size={14} /> Get a Quote
//             </Link>
//           </div>

//           {/* Hamburger */}
//           <button onClick={() => setMobOpen(!mobOpen)} className="lg:hidden flex flex-col gap-1.5 p-1 cursor-pointer bg-transparent border-none">
//             <span className={`block w-6 h-0.5 bg-cyan2 rounded transition-all ${mobOpen ? "rotate-45 translate-y-2" : ""}`} />
//             <span className={`block h-0.5 bg-cyan1 rounded transition-all ${mobOpen ? "opacity-0 w-6" : "w-[18px]"}`} />
//             <span className={`block w-6 h-0.5 bg-cyan3 rounded transition-all ${mobOpen ? "-rotate-45 -translate-y-2" : ""}`} />
//           </button>
//         </div>

//         {/* ━━━━━━ MOBILE NAV with EXPANDABLE COURSES ━━━━━━ */}
//         {mobOpen && (
//           <div className="lg:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-bg/97 backdrop-blur-xl z-[998] overflow-y-auto px-10 py-5">
//             {/* Static Links */}
//             {[
//               { href: "/", icon: "House", label: "Home" },
//               { href: "/ai-masterclass", icon: "Brain", label: "AI Masterclasses" },
//             ].map(item => (
//               <MobileLink key={item.href} item={item} onClick={() => setMobOpen(false)} />
//             ))}

//             {/* ── EXPANDABLE ALL COURSES ── */}
//             <div className="border-b border-cyan1/10 py-3.5">
//               <button
//                 onClick={() => setMobCoursesOpen(!mobCoursesOpen)}
//                 className="flex items-center justify-between w-full text-sm font-medium text-gray2 bg-transparent border-none cursor-pointer"
//               >
//                 <span className="flex items-center gap-2.5">
//                   <LucideIcon name="BookOpen" size={15} color="#a8c8dc" strokeWidth={1.5} />
//                   All Courses
//                 </span>
//                 <LucideIcon
//                   name={mobCoursesOpen ? "ChevronUp" : "ChevronDown"}
//                   size={16}
//                   color="#22d3ee"
//                   strokeWidth={2}
//                 />
//               </button>

//               {mobCoursesOpen && (
//                 <div className="mt-3 pl-6 space-y-1 border-l-2 border-cyan1/20">
//                   {/* Media courses */}
//                   <span className="block py-1 text-[10px] tracking-[2px] text-cyan2/80 font-bold uppercase font-syne">
//                     Media
//                   </span>
//                   {mediaCourses.map(c => (
//                     <Link
//                       key={c.href}
//                       href={c.href}
//                       className="flex items-center gap-2 py-2 text-[13px] text-gray1 hover:text-white"
//                       onClick={() => setMobOpen(false)}
//                     >
//                       <LucideIcon name={c.icon} size={13} color="#7a9db0" strokeWidth={1.5} />
//                       {c.label}
//                     </Link>
//                   ))}

//                   {/* Tech courses */}
//                   <span className="block py-1 text-[10px] tracking-[2px] text-cyan2/80 font-bold uppercase font-syne mt-3">
//                     Tech
//                   </span>
//                   {techCourses.map(c => (
//                     <Link
//                       key={c.href}
//                       href={c.href}
//                       className="flex items-center justify-between gap-2 py-2 text-[13px] text-gray1 hover:text-white"
//                       onClick={() => setMobOpen(false)}
//                     >
//                       <span className="flex items-center gap-2">
//                         <LucideIcon name={c.icon} size={13} color="#7a9db0" strokeWidth={1.5} />
//                         {c.label}
//                       </span>
//                       {c.hot && (
//                         <span className="text-[8px] font-bold tracking-wider px-1 py-0.5 rounded bg-cyan2/20 text-cyan2 border border-cyan2/30">
//                           HOT
//                         </span>
//                       )}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Rest of mobile links */}
//             {[
//               { href: "/services", icon: "LayoutGrid", label: "All Services" },
//               { href: "/services/packaging", icon: "Package", label: "Packaging" },
//               { href: "/services/hospitality", icon: "Hotel", label: "Hospitality" },
//               { href: "/services/realestate", icon: "Home", label: "Real Estate" },
//               { href: "/services/education", icon: "GraduationCap", label: "Education" },
//               { href: "/services/fashion", icon: "Shirt", label: "Fashion" },
//               { href: "/services/automobile", icon: "Car", label: "Automobile" },
//               { href: "/services/advertising", icon: "Megaphone", label: "Advertising" },
//               { href: "/services/media", icon: "Tv", label: "Media" },
//               { href: "/ai-training", icon: "Bot", label: "AI Training B2B" },
//               { href: "/about", icon: "Info", label: "About Us" },
//               { href: "/contact", icon: "Phone", label: "Contact / Quote" },
//             ].map(item => (
//               <MobileLink key={item.href} item={item} onClick={() => setMobOpen(false)} />
//             ))}
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }

// function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
//   return (
//     <Link href={href} className="block px-3.5 py-2 text-[13px] font-medium text-gray2 hover:text-white hover:bg-cyan1/10 rounded-lg transition-all font-syne">
//       {children}
//     </Link>
//   );
// }

// function DropLink({ href, icon, label }: { href: string; icon: string; label: string }) {
//   return (
//     <Link href={href} className="flex items-center gap-2.5 px-5 py-2.5 text-[12.5px] text-gray1 hover:text-white hover:bg-cyan1/10 hover:pl-6 transition-all">
//       <LucideIcon name={icon} size={14} color="#7a9db0" strokeWidth={1.5} />
//       {label}
//     </Link>
//   );
// }

// function MobileLink({ item, onClick }: { item: { href: string; icon: string; label: string }; onClick: () => void }) {
//   return (
//     <div className="border-b border-cyan1/10 py-3.5">
//       <Link
//         href={item.href}
//         className={`flex items-center gap-2.5 text-sm font-medium ${item.href === "/contact" ? "text-cyan2" : "text-gray2"}`}
//         onClick={onClick}
//       >
//         <LucideIcon name={item.icon} size={15} color={item.href === "/contact" ? "#22d3ee" : "#a8c8dc"} strokeWidth={1.5} />
//         {item.label}
//       </Link>
//     </div>
//   );
// }


// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import LucideIcon from "./LucideIcon";
// import Image from "next/image";

// const navIndustries = [
//   { href: "/services/packaging", icon: "Package", label: "Packaging" },
//   { href: "/services/hospitality", icon: "Hotel", label: "Hospitality" },
//   { href: "/services/realestate", icon: "Home", label: "Real Estate" },
//   { href: "/services/education", icon: "GraduationCap", label: "Education" },
//   { href: "/services/fashion", icon: "Shirt", label: "Fashion" },
//   { href: "/services/automobile", icon: "Car", label: "Automobile" },
//   { href: "/services/advertising", icon: "Megaphone", label: "Advertising" },
//   { href: "/services/media", icon: "Tv", label: "Media" },
// ];

// const mediaCourses = [
//   { href: "/courses/graphic-design", icon: "Palette", label: "Graphic Design" },
//   { href: "/courses/video-editing", icon: "Video", label: "Video Editing" },
//   { href: "/courses/motion-graphics", icon: "Zap", label: "Motion Graphics" },
//   { href: "/courses/vfx-master-classes", icon: "Sparkles", label: "VFX Master Classes" },
//   { href: "/courses/2d-animation", icon: "PenTool", label: "2D Animation" },
//   { href: "/courses/3d-animation", icon: "Box", label: "3D Animation" },
//   { href: "/courses/digital-marketing", icon: "Megaphone", label: "Digital Marketing" },
//   { href: "/courses/painting-sketching", icon: "PenLine", label: "Painting & Sketching" },
// ];

// const techCourses = [
//   // { href: "/ai-masterclass", icon: "Brain", label: "AI Masterclass", hot: true },
//   { href: "/courses/python-data-science", icon: "Code2", label: "Python & Data Science" },
//   { href: "/courses/c-programming", icon: "Terminal", label: "C Programming" },
//   { href: "/courses/cpp-programming", icon: "FileCode2", label: "C++ Programming" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobOpen, setMobOpen] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [mobCoursesOpen, setMobCoursesOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 50);
//       const h = document.body.scrollHeight - window.innerHeight;
//       setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       <div className="scroll-progress" style={{ width: `${progress}%` }} />

//       <nav className={`fixed top-0 left-0 right-0 z-[1000] px-10 transition-all duration-300 ${scrolled ? "bg-[#030f1a] border-b border-cyan1/20" : ""}`}>
//         <div className="max-w-[1300px] mx-auto flex items-center justify-between h-[72px]">

//           {/* ── LOGO ── */}
//           <Link href="/" className="flex items-center gap-3">
//             {/* <div className="relative w-[46px] h-[46px] rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
//               <div className="absolute inset-0 bg-grad-cyan-btn" />
//               <span className="relative z-10 font-syne font-black text-lg text-white">AV</span>
//             </div> */}
//             <div className="relative w-[70px] h-[70px] rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">

//               <Image
//                 src="/a.v.png"
//                 alt="AV Academy Logo"
//                 fill
//                 className="object-contain p-1"
//               />

//             </div>
//             <div className="leading-tight">
//               <strong className="block font-syne font-black text-[15px] tracking-normal grad-cyan">AV ACADEMY</strong>
//               <em className="not-italic text-[10px] text-cyan3 tracking-[1px]">& AV EDITLAB</em>
//             </div>
//           </Link>

//           {/* Desktop Nav */}
//           <div className="hidden lg:flex items-center gap-1">
//             <NavLink href="/">Home</NavLink>

//             {/* ── AV ACADEMY DROPDOWN — SOLID BG ── */}
//             <div className="relative group">
//               <button className="px-3.5 py-2 text-[13px] font-medium text-gray2 hover:text-white hover:bg-cyan1/10 rounded-lg transition-all font-syne bg-transparent border-none cursor-pointer flex items-center gap-1.5">
//                 <LucideIcon name="GraduationCap" size={14} color="#a8c8dc" strokeWidth={1.5} />
//                 AV Academy ▾
//               </button>

//               <div className="absolute top-[calc(100%+8px)] left-0 bg-[#061826] border border-cyan1/30 rounded-2xl min-w-[240px] py-2.5 z-[999] opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 shadow-[0_24px_60px_rgba(0,0,0,.7)]">
//                 <DropLink href="/ai-masterclass" icon="Brain" label="AI Masterclasses" />
//                 <DropLink href="/vr-developer" icon="Headphones" label="VR Development" />
//                 <DropLink href="/ai-training" icon="Bot" label="AI Training B2B" />

//                 {/* ━━━━━━ ALL COURSES — NESTED ━━━━━━ */}
//                 <div className="relative group/sub">
//                   <Link
//                     href="/courses"
//                     className="flex items-center justify-between gap-2.5 px-5 py-2.5 text-[12.5px] text-gray1 hover:text-white hover:bg-cyan1/10 hover:pl-6 transition-all cursor-pointer"
//                   >
//                     <span className="flex items-center gap-2.5">
//                       <LucideIcon name="BookOpen" size={14} color="#7a9db0" strokeWidth={1.5} />
//                       All Courses
//                     </span>
//                     <LucideIcon name="ChevronRight" size={12} color="#22d3ee" strokeWidth={2} />
//                   </Link>

//                   {/* ── NESTED SUBMENU — SOLID BG ── */}
//                   <div className="absolute top-0 left-full ml-1 bg-[#061826] border border-cyan1/30 rounded-2xl min-w-[280px] py-2.5 z-[1000] opacity-0 invisible -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0 transition-all duration-200 shadow-[0_24px_60px_rgba(0,0,0,.7)]">
//                     <span className="block px-5 py-2 text-[10px] tracking-[2px] text-cyan2/80 font-bold uppercase font-syne">
//                       Media Courses
//                     </span>
//                     {mediaCourses.map(c => (
//                       <DropLink key={c.href} href={c.href} icon={c.icon} label={c.label} />
//                     ))}

//                     <div className="my-2 mx-4 border-t border-cyan1/15" />

//                     <span className="block px-5 py-2 text-[10px] tracking-[2px] text-cyan2/80 font-bold uppercase font-syne">
//                       Tech Courses
//                     </span>
//                     {techCourses.map(c => (
//                       <Link
//                         key={c.href}
//                         href={c.href}
//                         className="flex items-center justify-between gap-2.5 px-5 py-2.5 text-[12.5px] text-gray1 hover:text-white hover:bg-cyan1/10 hover:pl-6 transition-all"
//                       >
//                         <span className="flex items-center gap-2.5">
//                           <LucideIcon name={c.icon} size={14} color="#7a9db0" strokeWidth={1.5} />
//                           {c.label}
//                         </span>
//                         {/* {c.hot && (
//                           <span className="text-[9px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-cyan2/20 text-cyan2 border border-cyan2/30">
//                             HOT
//                           </span>
//                         )} */}
//                       </Link>
//                     ))}

//                     {/* <div className="my-2 mx-4 border-t border-cyan1/15" /> */}

//                     {/* <Link
//                       href="/courses"
//                       className="flex items-center justify-center gap-2 mx-4 mt-2 px-4 py-2 rounded-lg text-[12px] font-bold text-cyan2 bg-cyan1/10 hover:bg-cyan1/20 border border-cyan1/30 transition-all font-syne"
//                     >
//                       View All Courses
//                       <LucideIcon name="ArrowRight" size={12} color="#22d3ee" strokeWidth={2.5} />
//                     </Link> */}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* ── AV EDITLAB DROPDOWN — SOLID BG ── */}
//             <div className="relative group">
//               <button className="px-3.5 py-2 text-[13px] font-medium text-gray2 hover:text-white hover:bg-cyan1/10 rounded-lg transition-all font-syne bg-transparent border-none cursor-pointer flex items-center gap-1.5">
//                 <LucideIcon name="Palette" size={14} color="#a8c8dc" strokeWidth={1.5} />
//                 AV EditLab ▾
//               </button>
//               <div className="absolute top-[calc(100%+8px)] left-0 bg-[#061826] border border-cyan1/30 rounded-2xl min-w-[240px] py-2.5 z-[999] opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 shadow-[0_24px_60px_rgba(0,0,0,.7)]">
//                 <span className="block px-5 py-2 text-[10px] tracking-[2px] text-cyan2/80 font-bold uppercase font-syne">Industries</span>
//                 {navIndustries.map(item => (
//                   <DropLink key={item.href} href={item.href} icon={item.icon} label={item.label} />
//                 ))}
//                 <div className="my-1 mx-4 border-t border-cyan1/15" />
//                 {/* <DropLink href="/ai-training" icon="Bot" label="AI Training B2B" /> */}
//                 <DropLink href="/services" icon="LayoutGrid" label="All Services" />
//               </div>
//             </div>

//             <NavLink href="/about">About Us</NavLink>
//             <NavLink href="/contact-us">Contact</NavLink>

//             <Link href="/contact-us" className="shimmer-btn ml-2 px-5 py-2.5 rounded-lg font-syne font-semibold text-sm text-white bg-grad-cyan-btn hover:opacity-90 transition-opacity flex items-center gap-2">
//               {/* <LucideIcon name="MessageCircle" size={14} /> Contact us */}
//               Contact us
//             </Link>
//           </div>

//           {/* Hamburger */}
//           <button onClick={() => setMobOpen(!mobOpen)} className="lg:hidden flex flex-col gap-1.5 p-1 cursor-pointer bg-transparent border-none">
//             <span className={`block w-6 h-0.5 bg-cyan2 rounded transition-all ${mobOpen ? "rotate-45 translate-y-2" : ""}`} />
//             <span className={`block h-0.5 bg-cyan1 rounded transition-all ${mobOpen ? "opacity-0 w-6" : "w-[18px]"}`} />
//             <span className={`block w-6 h-0.5 bg-cyan3 rounded transition-all ${mobOpen ? "-rotate-45 -translate-y-2" : ""}`} />
//           </button>
//         </div>

//         {/* ── MOBILE NAV — SOLID BG ── */}
//         {mobOpen && (
//           <div className="lg:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-[#030f1a] z-[998] overflow-y-auto px-10 py-5">
//             {[
//               { href: "/", icon: "House", label: "Home" },
//               { href: "/ai-masterclass", icon: "Brain", label: "AI Masterclasses" },
//             ].map(item => (
//               <MobileLink key={item.href} item={item} onClick={() => setMobOpen(false)} />
//             ))}

//             <div className="border-b border-cyan1/10 py-3.5">
//               <button
//                 onClick={() => setMobCoursesOpen(!mobCoursesOpen)}
//                 className="flex items-center justify-between w-full text-sm font-medium text-gray2 bg-transparent border-none cursor-pointer"
//               >
//                 <span className="flex items-center gap-2.5">
//                   <LucideIcon name="BookOpen" size={15} color="#a8c8dc" strokeWidth={1.5} />
//                   All Courses
//                 </span>
//                 <LucideIcon
//                   name={mobCoursesOpen ? "ChevronUp" : "ChevronDown"}
//                   size={16}
//                   color="#22d3ee"
//                   strokeWidth={2}
//                 />
//               </button>

//               {mobCoursesOpen && (
//                 <div className="mt-3 pl-6 space-y-1 border-l-2 border-cyan1/20">
//                   <span className="block py-1 text-[10px] tracking-[2px] text-cyan2/80 font-bold uppercase font-syne">
//                     Media
//                   </span>
//                   {mediaCourses.map(c => (
//                     <Link
//                       key={c.href}
//                       href={c.href}
//                       className="flex items-center gap-2 py-2 text-[13px] text-gray1 hover:text-white"
//                       onClick={() => setMobOpen(false)}
//                     >
//                       <LucideIcon name={c.icon} size={13} color="#7a9db0" strokeWidth={1.5} />
//                       {c.label}
//                     </Link>
//                   ))}

//                   <span className="block py-1 text-[10px] tracking-[2px] text-cyan2/80 font-bold uppercase font-syne mt-3">
//                     Tech
//                   </span>
//                   {techCourses.map(c => (
//                     <Link
//                       key={c.href}
//                       href={c.href}
//                       className="flex items-center justify-between gap-2 py-2 text-[13px] text-gray1 hover:text-white"
//                       onClick={() => setMobOpen(false)}
//                     >
//                       <span className="flex items-center gap-2">
//                         <LucideIcon name={c.icon} size={13} color="#7a9db0" strokeWidth={1.5} />
//                         {c.label}
//                       </span>
//                       {/* {c.hot && (
//                         <span className="text-[8px] font-bold tracking-wider px-1 py-0.5 rounded bg-cyan2/20 text-cyan2 border border-cyan2/30">
//                           HOT
//                         </span>
//                       )} */}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {[
//               { href: "/services", icon: "LayoutGrid", label: "All Services" },
//               { href: "/services/packaging", icon: "Package", label: "Packaging" },
//               { href: "/services/hospitality", icon: "Hotel", label: "Hospitality" },
//               { href: "/services/realestate", icon: "Home", label: "Real Estate" },
//               { href: "/services/education", icon: "GraduationCap", label: "Education" },
//               { href: "/services/fashion", icon: "Shirt", label: "Fashion" },
//               { href: "/services/automobile", icon: "Car", label: "Automobile" },
//               { href: "/services/advertising", icon: "Megaphone", label: "Advertising" },
//               { href: "/services/media", icon: "Tv", label: "Media" },
//               { href: "/ai-training", icon: "Bot", label: "AI Training B2B" },
//               { href: "/about", icon: "Info", label: "About Us" },
//               { href: "/contact-us", icon: "Phone", label: "Contact / Quote" },
//             ].map(item => (
//               <MobileLink key={item.href} item={item} onClick={() => setMobOpen(false)} />
//             ))}
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }

// function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
//   return (
//     <Link href={href} className="block px-3.5 py-2 text-[13px] font-medium text-gray2 hover:text-white hover:bg-cyan1/10 rounded-lg transition-all font-syne">
//       {children}
//     </Link>
//   );
// }

// function DropLink({ href, icon, label }: { href: string; icon: string; label: string }) {
//   return (
//     <Link href={href} className="flex items-center gap-2.5 px-5 py-2.5 text-[12.5px] text-gray1 hover:text-white hover:bg-cyan1/10 hover:pl-6 transition-all">
//       <LucideIcon name={icon} size={14} color="#7a9db0" strokeWidth={1.5} />
//       {label}
//     </Link>
//   );
// }

// function MobileLink({ item, onClick }: { item: { href: string; icon: string; label: string }; onClick: () => void }) {
//   return (
//     <div className="border-b border-cyan1/10 py-3.5">
//       <Link
//         href={item.href}
//         className={`flex items-center gap-2.5 text-sm font-medium ${item.href === "/contact-us" ? "text-cyan2" : "text-gray2"}`}
//         onClick={onClick}
//       >
//         <LucideIcon name={item.icon} size={15} color={item.href === "/contact-us" ? "#22d3ee" : "#a8c8dc"} strokeWidth={1.5} />
//         {item.label}
//       </Link>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import LucideIcon from "./LucideIcon";
import Image from "next/image";

const navIndustries = [
  { href: "/services/packaging", icon: "Package", label: "Packaging" },
  { href: "/services/hospitality", icon: "Hotel", label: "Hospitality" },
  { href: "/services/realestate", icon: "Home", label: "Real Estate" },
  { href: "/services/education", icon: "GraduationCap", label: "Education" },
  { href: "/services/fashion", icon: "Shirt", label: "Fashion" },
  { href: "/services/automobile", icon: "Car", label: "Automobile" },
  { href: "/services/advertising", icon: "Megaphone", label: "Advertising" },
  { href: "/services/media", icon: "Tv", label: "Media" },
];

const mediaCourses = [
  { href: "/courses/graphic-design", icon: "Palette", label: "Graphic Design" },
  { href: "/courses/video-editing", icon: "Video", label: "Video Editing" },
  { href: "/courses/motion-graphics", icon: "Zap", label: "Motion Graphics" },
  { href: "/courses/vfx-master-classes", icon: "Sparkles", label: "VFX Master Classes" },
  { href: "/courses/2d-animation", icon: "PenTool", label: "2D Animation" },
  { href: "/courses/3d-animation", icon: "Box", label: "3D Animation" },
  { href: "/courses/digital-marketing", icon: "Megaphone", label: "Digital Marketing" },
  { href: "/courses/painting-sketching", icon: "PenLine", label: "Painting & Sketching" },
];

const techCourses = [
  { href: "/courses/python-data-science", icon: "Code2", label: "Python & Data Science" },
  { href: "/courses/c-programming", icon: "Terminal", label: "C Programming" },
  { href: "/courses/cpp-programming", icon: "FileCode2", label: "C++ Programming" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobCoursesOpen, setMobCoursesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const h = document.body.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <nav className={`fixed top-0 left-0 right-0 z-[1000] px-10 transition-all duration-300 ${scrolled ? "bg-[#030f1a] border-b border-cyan1/20" : ""}`}>
        <div className="max-w-[1300px] mx-auto flex items-center justify-between h-[72px]">

          {/* ── LOGO ── */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-[70px] h-[70px] rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
              <Image src="/a.v.png" alt="AV Academy Logo" fill className="object-contain p-1" />
            </div>
            <div className="leading-tight">
              <strong className="block font-syne font-black text-[15px] tracking-normal grad-cyan">AV ACADEMY</strong>
              <em className="not-italic text-[10px] text-cyan3 tracking-[1px]">& AV EDITLAB</em>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink href="/">Home</NavLink>

            {/* ── AV ACADEMY DROPDOWN ── */}
            <div className="relative group">
              <button className="px-3.5 py-2 text-[13px] font-medium text-gray2 hover:text-white hover:bg-cyan1/10 rounded-lg transition-all font-syne bg-transparent border-none cursor-pointer flex items-center gap-1.5">
                <LucideIcon name="GraduationCap" size={14} color="#a8c8dc" strokeWidth={1.5} />
                AV Academy ▾
              </button>
              <div className="absolute top-[calc(100%+8px)] left-0 bg-[#061826] border border-cyan1/30 rounded-2xl min-w-[240px] py-2.5 z-[999] opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 shadow-[0_24px_60px_rgba(0,0,0,.7)]">
                <DropLink href="/ai-masterclass" icon="Brain" label="AI Masterclasses" />
                <DropLink href="/vr-developer" icon="Headphones" label="VR Development" />
                <DropLink href="/ai-training" icon="Bot" label="AI Training B2B" />

                {/* ALL COURSES NESTED */}
                <div className="relative group/sub">
                  <Link href="/courses" className="flex items-center justify-between gap-2.5 px-5 py-2.5 text-[12.5px] text-gray1 hover:text-white hover:bg-cyan1/10 hover:pl-6 transition-all cursor-pointer">
                    <span className="flex items-center gap-2.5">
                      <LucideIcon name="BookOpen" size={14} color="#7a9db0" strokeWidth={1.5} />
                      All Courses
                    </span>
                    <LucideIcon name="ChevronRight" size={12} color="#22d3ee" strokeWidth={2} />
                  </Link>
                  <div className="absolute top-0 left-full ml-1 bg-[#061826] border border-cyan1/30 rounded-2xl min-w-[280px] py-2.5 z-[1000] opacity-0 invisible -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0 transition-all duration-200 shadow-[0_24px_60px_rgba(0,0,0,.7)]">
                    <span className="block px-5 py-2 text-[10px] tracking-[2px] text-cyan2/80 font-bold uppercase font-syne">Media Courses</span>
                    {mediaCourses.map(c => <DropLink key={c.href} href={c.href} icon={c.icon} label={c.label} />)}
                    <div className="my-2 mx-4 border-t border-cyan1/15" />
                    <span className="block px-5 py-2 text-[10px] tracking-[2px] text-cyan2/80 font-bold uppercase font-syne">Tech Courses</span>
                    {techCourses.map(c => (
                      <Link key={c.href} href={c.href} className="flex items-center gap-2.5 px-5 py-2.5 text-[12.5px] text-gray1 hover:text-white hover:bg-cyan1/10 hover:pl-6 transition-all">
                        <LucideIcon name={c.icon} size={14} color="#7a9db0" strokeWidth={1.5} />
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── AV EDITLAB DROPDOWN ── */}
            <div className="relative group">
              <button className="px-3.5 py-2 text-[13px] font-medium text-gray2 hover:text-white hover:bg-cyan1/10 rounded-lg transition-all font-syne bg-transparent border-none cursor-pointer flex items-center gap-1.5">
                <LucideIcon name="Palette" size={14} color="#a8c8dc" strokeWidth={1.5} />
                AV EditLab ▾
              </button>
              <div className="absolute top-[calc(100%+8px)] left-0 bg-[#061826] border border-cyan1/30 rounded-2xl min-w-[240px] py-2.5 z-[999] opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 shadow-[0_24px_60px_rgba(0,0,0,.7)]">
                <span className="block px-5 py-2 text-[10px] tracking-[2px] text-cyan2/80 font-bold uppercase font-syne">Industries</span>
                {navIndustries.map(item => <DropLink key={item.href} href={item.href} icon={item.icon} label={item.label} />)}
                <div className="my-1 mx-4 border-t border-cyan1/15" />
                <DropLink href="/services" icon="LayoutGrid" label="All Services" />
              </div>
            </div>

            <NavLink href="/about">About Us</NavLink>

            {/* ── EVENTS LINK ── */}
            <NavLink href="/events">Events</NavLink>

            <NavLink href="/contact-us">Contact</NavLink>

            <Link href="/contact-us" className="shimmer-btn ml-2 px-5 py-2.5 rounded-lg font-syne font-semibold text-sm text-white bg-grad-cyan-btn hover:opacity-90 transition-opacity flex items-center gap-2">
              Contact us
            </Link>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMobOpen(!mobOpen)} className="lg:hidden flex flex-col gap-1.5 p-1 cursor-pointer bg-transparent border-none">
            <span className={`block w-6 h-0.5 bg-cyan2 rounded transition-all ${mobOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-cyan1 rounded transition-all ${mobOpen ? "opacity-0 w-6" : "w-[18px]"}`} />
            <span className={`block w-6 h-0.5 bg-cyan3 rounded transition-all ${mobOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* ── MOBILE NAV ── */}
        {mobOpen && (
          <div className="lg:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-[#030f1a] z-[998] overflow-y-auto px-10 py-5">
            {[
              { href: "/", icon: "House", label: "Home" },
              { href: "/ai-masterclass", icon: "Brain", label: "AI Masterclasses" },
            ].map(item => (
              <MobileLink key={item.href} item={item} onClick={() => setMobOpen(false)} />
            ))}

            {/* Mobile Courses Accordion */}
            <div className="border-b border-cyan1/10 py-3.5">
              <button onClick={() => setMobCoursesOpen(!mobCoursesOpen)} className="flex items-center justify-between w-full text-sm font-medium text-gray2 bg-transparent border-none cursor-pointer">
                <span className="flex items-center gap-2.5">
                  <LucideIcon name="BookOpen" size={15} color="#a8c8dc" strokeWidth={1.5} />
                  All Courses
                </span>
                <LucideIcon name={mobCoursesOpen ? "ChevronUp" : "ChevronDown"} size={16} color="#22d3ee" strokeWidth={2} />
              </button>
              {mobCoursesOpen && (
                <div className="mt-3 pl-6 space-y-1 border-l-2 border-cyan1/20">
                  <span className="block py-1 text-[10px] tracking-[2px] text-cyan2/80 font-bold uppercase font-syne">Media</span>
                  {mediaCourses.map(c => (
                    <Link key={c.href} href={c.href} className="flex items-center gap-2 py-2 text-[13px] text-gray1 hover:text-white" onClick={() => setMobOpen(false)}>
                      <LucideIcon name={c.icon} size={13} color="#7a9db0" strokeWidth={1.5} />
                      {c.label}
                    </Link>
                  ))}
                  <span className="block py-1 text-[10px] tracking-[2px] text-cyan2/80 font-bold uppercase font-syne mt-3">Tech</span>
                  {techCourses.map(c => (
                    <Link key={c.href} href={c.href} className="flex items-center gap-2 py-2 text-[13px] text-gray1 hover:text-white" onClick={() => setMobOpen(false)}>
                      <LucideIcon name={c.icon} size={13} color="#7a9db0" strokeWidth={1.5} />
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[
              { href: "/services", icon: "LayoutGrid", label: "All Services" },
              { href: "/services/packaging", icon: "Package", label: "Packaging" },
              { href: "/services/hospitality", icon: "Hotel", label: "Hospitality" },
              { href: "/services/realestate", icon: "Home", label: "Real Estate" },
              { href: "/services/education", icon: "GraduationCap", label: "Education" },
              { href: "/services/fashion", icon: "Shirt", label: "Fashion" },
              { href: "/services/automobile", icon: "Car", label: "Automobile" },
              { href: "/services/advertising", icon: "Megaphone", label: "Advertising" },
              { href: "/services/media", icon: "Tv", label: "Media" },
              { href: "/ai-training", icon: "Bot", label: "AI Training B2B" },
              { href: "/about", icon: "Info", label: "About Us" },
              { href: "/events", icon: "CalendarDays", label: "Events" },  // ← Events added
              { href: "/contact-us", icon: "Phone", label: "Contact / Quote" },
            ].map(item => (
              <MobileLink key={item.href} item={item} onClick={() => setMobOpen(false)} />
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block px-3.5 py-2 text-[13px] font-medium text-gray2 hover:text-white hover:bg-cyan1/10 rounded-lg transition-all font-syne">
      {children}
    </Link>
  );
}

function DropLink({ href, icon, label }: { href: string; icon: string; label: string }) {
  return (
    <Link href={href} className="flex items-center gap-2.5 px-5 py-2.5 text-[12.5px] text-gray1 hover:text-white hover:bg-cyan1/10 hover:pl-6 transition-all">
      <LucideIcon name={icon} size={14} color="#7a9db0" strokeWidth={1.5} />
      {label}
    </Link>
  );
}

function MobileLink({ item, onClick }: { item: { href: string; icon: string; label: string }; onClick: () => void }) {
  return (
    <div className="border-b border-cyan1/10 py-3.5">
      <Link href={item.href} className={`flex items-center gap-2.5 text-sm font-medium ${item.href === "/contact-us" ? "text-cyan2" : "text-gray2"}`} onClick={onClick}>
        <LucideIcon name={item.icon} size={15} color={item.href === "/contact-us" ? "#22d3ee" : "#a8c8dc"} strokeWidth={1.5} />
        {item.label}
      </Link>
    </div>
  );
}