"use client";
import { useState, useRef, useEffect } from "react";
import LucideIcon from "./LucideIcon";

interface Message { role: "user" | "assistant"; content: string; }

const QUICK_QS = ["Courses kaunse hain?","Pricing kya hai?","AI Masterclass kya hai?","Contact number?","Services kya hain?"];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: "Namaste! 👋 Main AV EditLab & AV Academy ka AI Assistant hun.\n\nMain aapko courses, services, pricing aur contact info ke baare mein bata sakta hun. Kya jaanna chahte hain? 😊" }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { if (open) { setUnread(0); setTimeout(() => inputRef.current?.focus(), 200); } }, [open]);
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);

  const send = async (text?: string) => {
    const msg = text || input.trim();
    if (!msg || loading) return;
    setInput("");
    const newMsgs = [...messages, { role: "user" as const, content: msg }];
    setMessages(newMsgs);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: newMsgs }) });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Sorry, error aa gaya. Please +91-9675903348 pe call karein. 📞" }]);
    } finally { setLoading(false); }
  };

  return (
    <>
      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-[100px] right-7 z-[9997] w-[360px] max-w-[calc(100vw-32px)] rounded-[20px] overflow-hidden flex flex-col shadow-[0_25px_80px_rgba(0,0,0,.7),0_0_0_1px_rgba(0,180,216,.3)] animate-chat-open">
          {/* Header */}
          <div className="border-b border-cyan1/25 px-4 py-4 flex items-center justify-between" style={{ background: "linear-gradient(135deg,#020c12,#061828)" }}>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-[42px] h-[42px] rounded-xl bg-grad-cyan-btn flex items-center justify-center text-xl">🤖</div>
                <span className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-bg" />
              </div>
              <div>
                <div className="font-syne font-bold text-sm text-white">AV Assistant</div>
                <div className="text-[11px] text-cyan2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" style={{ animation: "pulse 2s infinite" }} />
                  Online — Fast Reply
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="bg-white/5 border border-white/10 rounded-lg w-8 h-8 cursor-pointer text-gray1 hover:bg-cyan1/15 hover:text-white transition-all flex items-center justify-center text-sm">✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-bg2 min-h-[320px] max-h-[380px]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-msg-in`}>
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-lg bg-grad-cyan-btn flex items-center justify-center text-sm mr-2 flex-shrink-0 self-end">🤖</div>
                )}
                <div className={`max-w-[78%] px-3.5 py-2.5 text-[13.5px] leading-[1.7] whitespace-pre-wrap break-words ${msg.role === "user" ? "rounded-2xl rounded-br-sm bg-grad-cyan-btn text-white" : "rounded-2xl rounded-bl-sm bg-card/90 border border-cyan1/20 text-gray2"}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex items-end gap-2 animate-msg-in">
                <div className="w-7 h-7 rounded-lg bg-grad-cyan-btn flex items-center justify-center text-sm">🤖</div>
                <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-card/90 border border-cyan1/20 flex gap-1 items-center">
                  {[0,1,2].map(i => <span key={i} className="w-1.5 h-1.5 rounded-full bg-cyan2 inline-block" style={{ animation: `typingDot 1.2s ease-in-out ${i*.2}s infinite` }} />)}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 1 && (
            <div className="bg-bg2 px-4 py-2 border-t border-cyan1/10 flex gap-1.5 flex-wrap">
              {QUICK_QS.map(q => (
                <button key={q} onClick={() => send(q)} className="px-3 py-1 rounded-full text-[11.5px] bg-cyan1/8 border border-cyan1/25 text-cyan2 cursor-pointer transition-all hover:bg-cyan1/20 hover:text-white whitespace-nowrap font-inter">
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="bg-bg2 border-t border-cyan1/15 px-3.5 py-3 flex gap-2 items-center">
            <input ref={inputRef} value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && !e.shiftKey && send()} placeholder="Kuch bhi poochho..." disabled={loading}
              className="flex-1 bg-card/80 border border-cyan1/20 rounded-xl px-3.5 py-2.5 text-[13.5px] text-white outline-none transition-all focus:border-cyan2/60 font-inter placeholder:text-gray1/50" />
            <button onClick={() => send()} disabled={loading || !input.trim()}
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-base transition-all flex-shrink-0 border-none cursor-pointer ${input.trim() && !loading ? "bg-grad-cyan-btn text-white hover:opacity-90" : "bg-cyan1/10 text-gray1"}`}>
              {loading ? <LucideIcon name="Loader2" size={16} /> : <LucideIcon name="Send" size={16} />}
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button onClick={() => setOpen(!open)}
        className={`fixed bottom-7 right-7 z-[9999] w-[60px] h-[60px] rounded-full border-none cursor-pointer flex items-center justify-center text-[26px] transition-all hover:scale-110 ${open ? "bg-card/90 shadow-[0_8px_30px_rgba(0,0,0,.5),0_0_0_1px_rgba(0,180,216,.3)]" : "bg-grad-cyan-btn animate-bot-pulse shadow-[0_8px_30px_rgba(0,180,216,.5)]"}`}>
        {open ? "✕" : "🤖"}
        {!open && unread > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[11px] font-bold flex items-center justify-center border-2 border-bg">{unread}</span>
        )}
      </button>

      <style>{`
        @keyframes typingDot { 0%,60%,100%{transform:translateY(0);opacity:.4} 30%{transform:translateY(-6px);opacity:1} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.5} }
      `}</style>
    </>
  );
}
