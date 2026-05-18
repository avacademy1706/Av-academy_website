"use client";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [show, setShow] = useState(true);
  useEffect(() => { const t = setTimeout(() => setShow(false), 2600); return () => clearTimeout(t); }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-5 bg-bg">
      <div className="pre-ring" />
      <div className="font-syne font-black text-[28px] grad-brand">AV EDITLAB</div>
      <div className="text-xs tracking-[3px] uppercase text-gray1">Creative Studio · Lucknow</div>
      <div className="w-[180px] h-0.5 rounded-sm overflow-hidden bg-white/8">
        <div className="pre-bar-fill" />
      </div>
    </div>
  );
}
