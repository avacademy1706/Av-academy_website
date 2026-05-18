"use client";
import { useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);

    interface Pt { x: number; y: number; vx: number; vy: number; sz: number; a: number; hue: number; }
    
    function newPt(): Pt {
      return { x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25, sz: Math.random() * 1.4 + 0.3, a: Math.random() * 0.3 + 0.05, hue: 185 + Math.random() * 25 };
    }

    let pts: Pt[] = Array.from({ length: 80 }, newPt);

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      pts = pts.map(p => {
        let { x, y, vx, vy, sz, a, hue } = p;
        x += vx; y += vy;
        if (x < 0 || x > w || y < 0 || y > h) return newPt();
        ctx.beginPath(); ctx.arc(x, y, sz, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue},80%,65%,${a})`; ctx.fill();
        return { x, y, vx, vy, sz, a, hue };
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(0,180,216,${0.06 * (1 - d / 90)})`; ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(animId); };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-50" />;
}
