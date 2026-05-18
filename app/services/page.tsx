import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WAFloat from "@/components/WAFloat";
import { IndustriesGrid, CTASection } from "@/components/PageSections";

export const metadata = { title: "All Services | AV EditLab", description: "Creative services for every industry — from concept to creation" };

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="min-h-[42vh] flex items-center justify-center pt-[110px] pb-16 px-6 text-center relative overflow-hidden" style={{ background: "linear-gradient(160deg,var(--bg2),var(--bg3))" }}>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center,rgba(0,180,216,.12) 0%,transparent 65%)" }} />
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm text-[11px] font-bold tracking-[2px] uppercase mb-5" style={{ background: "rgba(0,180,216,.1)", border: "1px solid rgba(0,180,216,.3)", color: "var(--cyan2)" }}>
              AV EditLab
            </span>
            <h1 className="font-black leading-tight tracking-tight text-[clamp(1.8rem,4vw,3.2rem)]" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-1px" }}>
              <span style={{ background: "linear-gradient(135deg,var(--cyan2),var(--blue2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Creative Services
              </span>
              <br />for Every Industry
            </h1>
            <p className="font-semibold mt-3" style={{ color: "var(--cyan3)", fontSize: "14px" }}>
              From concept to creation — building visual assets that grow businesses
            </p>
          </div>
        </section>
        <IndustriesGrid />
        <CTASection title="Ready to" highlight="Get Started?" desc="Tell us your industry and let's craft something extraordinary together." />
      </main>
      <Footer />
      <WAFloat />
    </>
  );
}
