// import type { Metadata } from "next";
// import "./globals.css";
// import Chatbot from "@/components/Chatbot";

// export const metadata: Metadata = {
//   title: "AV Academy | AV EditLab — Creative Studio Lucknow",
//   description: "Lucknow's #1 Creative Studio & Training Academy — Graphic Design, Video Editing, 3D Visualization, AI Courses",
//   keywords: "AV Academy, AV EditLab, Lucknow, Graphic Design, Video Editing, AI Training, 3D Visualization",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
//         <style>{`
//           :root { --font-syne: 'Syne', sans-serif; --font-inter: 'Inter', sans-serif; }
//           body { font-family: 'Inter', sans-serif; }
//           .font-syne { font-family: 'Syne', sans-serif !important; }
//         `}</style>
//       </head>
//       <body>
//         {children}
//         <Chatbot />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "AV Academy | AV EditLab — Creative Studio Lucknow",
  description: "Lucknow's #1 Creative Studio & Training Academy — Graphic Design, Video Editing, 3D Visualization, AI Courses",
  keywords: "AV Academy, AV EditLab, Lucknow, Graphic Design, Video Editing, AI Training, 3D Visualization",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <style>{`
          :root { --font-syne: 'Syne', sans-serif; --font-inter: 'Inter', sans-serif; }
          body { font-family: 'Inter', sans-serif; }
          .font-syne { font-family: 'Syne', sans-serif !important; }
        `}</style>
      </head>
      <body>
        {children}
        {/* <Chatbot /> */}

        {/* ── Tidio Live Chat ── */}
        <Script
          src="//code.tidio.co/7bc0pbhxdcmf5au1yka13kuaivbnscvz.js" async
        />

      </body>
    </html>
  );
}