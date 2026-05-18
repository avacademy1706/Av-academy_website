import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WAFloat from "@/components/WAFloat";
import { CTASection } from "@/components/PageSections";
import { Reveal } from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata = { title: "Personal Brand Plans | AV EditLab", description: "Personal brand building plans for leaders, politicians, coaches and institutions" };

const plans = [
  {
    plan: "Plan 01", name: "Starter Impact", forWho: "Local leaders, early-stage politicians, small institutions",
    price: "15,000", featured: false,
    features: ["Static Website", "Facebook & Instagram Page Setup", "8 Social Media Posts/month", "4 Short Videos (cross-platform)", "Monthly Report Summary"],
  },
  {
    plan: "Plan 02", name: "Digital Growth Plan", forWho: "Regional leaders, coaching centers, medium institutions",
    price: "25,000", featured: true,
    features: ["Dynamic Website", "YouTube Setup + 4 Videos/month", "Meta Setup + 15 Posts/month", "5 Short Videos (Insta + Facebook)", "SEO Management + GMB Setup", "Personal Ad Manager", "Business Counseling"],
  },
  {
    plan: "Plan 03", name: "Pro Leadership Suite", forWho: "Senior leaders, political personalities, brand heads",
    price: "50,000", featured: false,
    features: ["Full Stack Website + SEO", "Daily Social Media Post", "8 YouTube Videos/month", "10 Instagram & Facebook Reels", "Meta + Google Ad Management", "Dedicated Manager", "Monthly Dashboard"],
  },
];

const addons = [
  { service: "Additional Reels / Shorts", price: "₹3,000 /video" },
  { service: "1 Event Photoshoot", price: "₹10,000 /session" },
  { service: "Digital Poster Campaign (10 Templates)", price: "₹5,000" },
  { service: "Meta Ads Campaign Setup", price: "₹10,000" },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="min-h-[40vh] flex items-center justify-center pt-[110px] pb-16 px-6 text-center relative overflow-hidden" style={{ background: "linear-gradient(160deg,var(--bg2),var(--bg3))" }}>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center,rgba(0,180,216,.12) 0%,transparent 65%)" }} />
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm text-[11px] font-bold tracking-[2px] uppercase mb-5" style={{ background: "rgba(0,180,216,.1)", border: "1px solid rgba(0,180,216,.3)", color: "var(--cyan2)" }}>
              Personal Branding
            </span>
            <h1 className="font-black leading-tight tracking-tight text-[clamp(1.8rem,4vw,3.2rem)]" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-1px" }}>
              <span style={{ background: "linear-gradient(135deg,var(--cyan2),var(--blue2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Personal Brand
              </span>
              <br />Building Service
            </h1>
            <p className="font-semibold mt-3" style={{ color: "var(--cyan3)", fontSize: "14px" }}>
              For Leaders, Politicians, Coaches & Institutions
            </p>
          </div>
        </section>

        <section className="px-6 py-20" style={{ background: "var(--bg2)" }}>
          <div className="max-w-[1300px] mx-auto">
            {/* Plans */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {plans.map((p, i) => (
                <Reveal key={p.plan} delay={i * 100} className={`relative rounded-[24px] p-9 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,180,216,.2)] ${p.featured ? "shadow-[0_0_0_1px_rgba(0,180,216,.5)]" : ""}`} style={{ background: p.featured ? "rgba(8,28,44,.95)" : "rgba(8,28,44,.8)", border: p.featured ? "1px solid rgba(0,180,216,.5)" : "1px solid var(--border)" }}>
                  {p.featured && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] font-bold px-4 py-1.5 rounded-full text-white whitespace-nowrap tracking-[1.5px]" style={{ background: "linear-gradient(135deg,var(--cyan1),var(--cyan2))" }}>
                      MOST POPULAR
                    </span>
                  )}
                  <div className="text-[11px] font-bold tracking-[2px] uppercase mb-1.5" style={{ color: "var(--cyan2)" }}>{p.plan}</div>
                  <div className="font-black text-[1.25rem] mb-1.5" style={{ fontFamily: "var(--font-syne)" }}>{p.name}</div>
                  <div className="text-[12px] italic mb-5" style={{ color: "var(--gray)" }}>{p.forWho}</div>
                  <div className="leading-none mb-1">
                    <span className="text-[1.3rem] font-bold align-top mt-1.5 inline-block" style={{ color: "var(--amber2)" }}>₹</span>
                    <span className="font-black text-[3rem] tracking-tight" style={{ fontFamily: "var(--font-syne)", background: "linear-gradient(135deg,var(--amber),var(--amber2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      {p.price}
                    </span>
                  </div>
                  <div className="text-[12px] mb-5" style={{ color: "var(--gray)" }}>/month</div>
                  <div className="border-t mb-5" style={{ borderColor: "rgba(0,180,216,.12)" }} />
                  <ul className="space-y-2 mb-7 list-none">
                    {p.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-[13px] pb-2 border-b" style={{ color: "var(--gray2)", borderColor: "rgba(255,255,255,.04)" }}>
                        <span className="font-bold mt-0.5 flex-shrink-0" style={{ color: "var(--cyan2)" }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="shimmer-btn flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-[14px] text-white relative overflow-hidden" style={{ fontFamily: "var(--font-syne)", background: "linear-gradient(135deg,var(--cyan1),var(--cyan2))" }}>
                    Get Started
                  </Link>
                </Reveal>
              ))}
            </div>

            {/* Add-ons */}
            <Reveal>
              <div className="inline-flex items-center gap-1.5 font-bold text-[11px] tracking-[3px] uppercase mb-3" style={{ fontFamily: "var(--font-syne)", color: "var(--cyan2)" }}>
                <span style={{ color: "var(--blue2)" }}>//</span> Add-On Services
              </div>
              <h2 className="font-black tracking-tight mb-6 text-[clamp(1.7rem,3vw,2.4rem)]" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-.5px" }}>
                Enhance Your{" "}
                <span style={{ background: "linear-gradient(135deg,var(--cyan2),var(--blue2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Package
                </span>
              </h2>
            </Reveal>
            <div className="rounded-[16px] overflow-hidden" style={{ background: "rgba(8,28,44,.8)", border: "1px solid var(--border)" }}>
              <table className="w-full border-collapse">
                <thead>
                  <tr style={{ background: "rgba(0,180,216,.1)", borderBottom: "2px solid rgba(0,180,216,.2)" }}>
                    <th className="text-left px-5 py-3.5 font-bold text-[12.5px] tracking-wide" style={{ fontFamily: "var(--font-syne)", color: "var(--cyan2)" }}>Service</th>
                    <th className="text-left px-5 py-3.5 font-bold text-[12.5px] tracking-wide" style={{ fontFamily: "var(--font-syne)", color: "var(--cyan2)" }}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {addons.map((a, i) => (
                    <tr key={a.service} style={{ borderBottom: i < addons.length - 1 ? "1px solid rgba(0,180,216,.06)" : "none" }} className="hover:bg-[rgba(0,180,216,.03)] transition-colors">
                      <td className="px-5 py-3.5 text-[13.5px]" style={{ color: "var(--gray2)" }}>{a.service}</td>
                      <td className="px-5 py-3.5 text-[13.5px] font-bold" style={{ color: "var(--amber2)" }}>{a.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <CTASection title="Build Your" highlight="Digital Empire" desc="Let's craft a personal brand that makes you unforgettable in your field." />
      </main>
      <Footer />
      <WAFloat />
    </>
  );
}
