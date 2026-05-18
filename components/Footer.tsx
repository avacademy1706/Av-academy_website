import Link from "next/link";
import LucideIcon from "./LucideIcon";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-bg2 border-t border-cyan1/10 px-10 pt-16 pb-8">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11 mb-11">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* <div className="relative w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-grad-cyan-btn" />
                <span className="relative z-10 font-syne font-black text-[17px] text-white">AV</span>
              </div> */}
              <div className="relative w-[70px] h-[70px] rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">

                <Image
                  src="/a.v.png"
                  alt="AV Academy Logo"
                  fill
                  className="object-contain p-1"
                />

              </div>
              <div>
                <strong className="block font-syne font-black text-[15px] grad-cyan">AV EDITLAB</strong>
                <em className="not-italic text-[10px] text-cyan3 tracking-[1.5px]">& AV ACADEMY</em>
              </div>
            </div>
            <p className="text-[13.5px] text-gray1 leading-[1.8] mb-5">
              Lucknow&apos;s leading creative studio & training academy — empowering businesses and learners through premium design, video, 3D, and AI-powered solutions.
            </p>
            <div className="flex gap-2.5">
              {[["Instagram", "fab fa-instagram"], ["Facebook", "fab fa-facebook-f"], ["Youtube", "fab fa-youtube"], ["Linkedin", "fab fa-linkedin-in"]].map(([, ic]) => (
                <a key={ic} href="#" className="w-[38px] h-[38px] rounded-full bg-cyan1/8 border border-cyan1/20 flex items-center justify-center text-cyan2 text-sm transition-all hover:bg-cyan1 hover:text-white hover:-translate-y-0.5">
                  <i className={ic} />
                </a>
              ))}
            </div>
          </div>

          {/* EditLab */}
          <div>
            <h5 className="font-syne font-bold text-xs tracking-widest uppercase mb-4 grad-cyan">AV EditLab</h5>
            <ul className="space-y-2.5 list-none">
              {[["packaging", "Packaging"], ["hospitality", "Hospitality"], ["realestate", "Real Estate"], ["education", "Education"], ["fashion", "Fashion"], ["automobile", "Automobile"], ["ai-training", "AI Training"]].map(([slug, label]) => (
                <li key={slug}>
                  <Link href={slug === "ai-training" ? "/ai-training" : `/services/${slug}`} className="flex items-center gap-1.5 text-[13px] text-gray1 transition-all hover:text-white hover:pl-1">
                    <span className="text-cyan2 text-sm">›</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academy */}
          <div>
            <h5 className="font-syne font-bold text-xs tracking-widest uppercase mb-4 grad-cyan">AV Academy</h5>
            <ul className="space-y-2.5 list-none">
              {[["/ai-masterclass", "AI Masterclass"], ["/courses", "All Courses"], ["/about", "About Us"], ["/contact", "Contact"]].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="flex items-center gap-1.5 text-[13px] text-gray1 transition-all hover:text-white hover:pl-1">
                    <span className="text-cyan2 text-sm">›</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-syne font-bold text-xs tracking-widest uppercase mb-4 grad-cyan">Contact</h5>
            {[
              { icon: "Phone", text: "+91-75002 06719" },
              { icon: "Mail", text: "avacademy1706@gmail.com" },
              { icon: "MapPin", text: "3rd Floor, Sai Tower,\nRaibareli Rd, Lucknow UP 226014" },
            ].map(({ icon, text }) => (
              <div key={icon} className="flex items-start gap-2.5 mb-3">
                <div className="text-cyan2 mt-0.5 flex-shrink-0">
                  <LucideIcon name={icon} size={13} color="#22d3ee" strokeWidth={1.5} />
                </div>
                <span className="text-[12.5px] text-gray1 leading-relaxed whitespace-pre-line">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="border-t border-cyan1/10 pt-5 flex flex-wrap justify-between items-center gap-2.5 text-xs text-gray1">
          <span>© 2025 AV EditLab & AV Academy. All Rights Reserved.</span>
          <span>Made with ❤️ in Lucknow, India</span>
        </div> */}
        <div className="border-t border-cyan1/10 pt-5 flex justify-center items-center text-xs text-gray1">
          <span>© 2025 AV EditLab & AV Academy. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
