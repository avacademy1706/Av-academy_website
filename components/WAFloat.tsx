// "use client";
// import { useState } from "react";

// export default function WAFloat() {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <a href="https://wa.me/919675903348" target="_blank" rel="noopener noreferrer"
//       className="wa-float fixed bottom-[100px] right-7 z-[9998] w-[58px] h-[58px] rounded-full flex items-center justify-center text-[28px] text-white transition-transform hover:scale-110 shadow-wa"
//       style={{ background: "linear-gradient(135deg,#25d366,#128c7e)" }}
//       onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
//       <i className="fab fa-whatsapp" />
//       {hovered && (
//         <div className="absolute right-[70px] bg-bg3 border border-cyan1/25 rounded-lg px-3.5 py-2 text-xs whitespace-nowrap text-white shadow-[0_4px_15px_rgba(0,0,0,.4)]">
//           Chat on WhatsApp
//         </div>
//       )}
//     </a>
//   );
// }


"use client";
import { useState } from "react";

export default function WAFloat() {
  const [hovered, setHovered] = useState(false);
  return (
    <a href="https://wa.me/919675903348" target="_blank" rel="noopener noreferrer"
      className="wa-float fixed bottom-[140px] right-7 z-[9998] w-[58px] h-[58px] rounded-full flex items-center justify-center text-[28px] text-white transition-transform hover:scale-110 shadow-wa"
      style={{ background: "linear-gradient(135deg,#25d366,#128c7e)" }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <i className="fab fa-whatsapp" />
      {hovered && (
        <div className="absolute right-[70px] bg-bg3 border border-cyan1/25 rounded-lg px-3.5 py-2 text-xs whitespace-nowrap text-white shadow-[0_4px_15px_rgba(0,0,0,.4)]">
          Chat on WhatsApp
        </div>
      )}
    </a>
  );
}