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

// import type { Metadata } from "next";
// import "./globals.css";
// import Script from "next/script";
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
//         {/* <Chatbot /> */}

//         {/* ── Tidio Live Chat ── */}
//         <Script
//           src="//code.tidio.co/7bc0pbhxdcmf5au1yka13kuaivbnscvz.js" async
//         />

//       </body>
//     </html>
//   );
// }
// import type { Metadata } from "next";
// import "./globals.css";
// import Script from "next/script";

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
//         <link
//           href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
//           rel="stylesheet"
//         />
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
//         <style>{`
//           :root {
//             --font-jakarta: 'Plus Jakarta Sans', sans-serif;
//             --font-inter: 'Inter', sans-serif;
//           }
//           body { font-family: 'Plus Jakarta Sans', 'Inter', sans-serif; }
//           .font-syne { font-family: 'Plus Jakarta Sans', sans-serif !important; }
//           .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }
//         `}</style>
//       </head>
//       <body>
//         {children}

//         {/* ── Tidio Live Chat ── */}
//         <Script
//           src="//code.tidio.co/7bc0pbhxdcmf5au1yka13kuaivbnscvz.js"
//           strategy="lazyOnload"
//         />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AV Academy | AV EditLab — Creative Studio Lucknow",
  description:
    "Lucknow's #1 Creative Studio & Training Academy — Graphic Design, Video Editing, 3D Visualization, AI Courses",
  keywords:
    "AV Academy, AV EditLab, Lucknow, Graphic Design, Video Editing, AI Training, 3D Visualization",
  icons: {
    icon: "/a.v.png",
  },
  verification: {
    google: "QPVaBE_8JLiiAkxkz3QFATnDtku6ik4xxUI23WRinP8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NDWDXQPJ');
            `,
          }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />

        <style>{`
          :root {
            --font-jakarta: 'Plus Jakarta Sans', sans-serif;
            --font-inter: 'Inter', sans-serif;
          }

          body {
            font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
          }

          .font-syne {
            font-family: 'Plus Jakarta Sans', sans-serif !important;
          }

          .font-jakarta {
            font-family: 'Plus Jakarta Sans', sans-serif !important;
          }
        `}</style>
      </head>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NDWDXQPJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        {/* ── Tidio Live Chat ── */}
        <Script
          src="//code.tidio.co/7bc0pbhxdcmf5au1yka13kuaivbnscvz.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}