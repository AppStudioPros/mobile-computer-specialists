"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LordIcon from "@/components/ui/LordIcon";

// Cute animated robot head from Lordicon (free CDN, no auth needed)
const ROBOT_ICON = "https://cdn.lordicon.com/zfqzlhpe.json";
const SEND_ICON = "https://cdn.lordicon.com/jvbqlntj.json";

type Message = {
  role: "bot" | "user";
  text: string;
};

const dummyResponses = [
  "I'm still learning! For now, the fastest way to reach a real human is to call 720-276-0797 or claim your free diagnostic.",
  "Great question! I'll have a smarter answer soon. In the meantime, our team can help directly: 720-276-0797.",
  "Thanks for chatting! I'm just a placeholder bot for now. Email us at info@mobilecomputerspecialists.com or call 720-276-0797.",
];

export default function RobotBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! I'm the MCS bot. I'm still in training, so my answers are limited for now. Got a quick question, or want to book a free diagnostic?",
    },
  ]);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function send() {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      const reply = dummyResponses[Math.floor(Math.random() * dummyResponses.length)];
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    }, 600);
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full mcs-gradient-blue shadow-lg shadow-[var(--color-mcs-blue)]/40 flex items-center justify-center group"
        aria-label="Open chat"
      >
        <div className="w-12 h-12">
          <LordIcon
            src={ROBOT_ICON}
            trigger="loop"
            colors="primary:#ffffff,secondary:#ffb547"
            size={48}
          />
        </div>
        {!open && (
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[var(--color-mcs-amber)] animate-pulse" />
        )}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-28 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[520px] rounded-2xl bg-white border border-[var(--color-mcs-line)] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 mcs-gradient-blue text-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-sm">
                <LordIcon
                  src={ROBOT_ICON}
                  trigger="loop"
                  colors="primary:#ffffff,secondary:#ffb547"
                  size={32}
                />
              </div>
              <div>
                <div className="text-sm font-bold">MCS Assistant</div>
                <div className="text-xs text-white/75">Beta — still learning</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="ml-auto text-white/70 hover:text-white text-xl leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[var(--color-mcs-page)]">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-snug ${
                      m.role === "user"
                        ? "bg-[var(--color-mcs-blue)] text-white rounded-br-md"
                        : "bg-white border border-[var(--color-mcs-line)] text-[var(--color-mcs-text)] rounded-bl-md"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-[var(--color-mcs-line)] bg-white flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2.5 rounded-full bg-[var(--color-mcs-page)] border border-[var(--color-mcs-line)] text-sm focus:outline-none focus:border-[var(--color-mcs-blue)] transition-colors"
              />
              <button
                onClick={send}
                className="w-10 h-10 rounded-full mcs-gradient-amber flex items-center justify-center hover:scale-105 transition-transform"
                aria-label="Send"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[var(--color-mcs-ink)] -ml-0.5"
                >
                  <path d="M5 12l14-7-7 14-2-5-5-2z" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
