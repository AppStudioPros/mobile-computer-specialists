"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AiNodeOrb from "@/components/ui/AiNodeOrb";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const WELCOME: Message = {
  role: "assistant",
  content:
    "Hi! I'm the MCS assistant. We're mobile, so we come to you. Ask me about computer repairs, custom PCs, our free diagnostic, or where we travel.",
};

const SUGGESTED = [
  "My computer is really slow, can you help?",
  "Do you come to my area?",
  "How does the free diagnostic work?",
  "I think I have a virus",
];

export default function RobotBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, streaming]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 200);
      return () => clearTimeout(t);
    }
  }, [open]);

  async function sendMessage(overrideText?: string) {
    const text = (overrideText ?? input).trim();
    if (!text || streaming) return;
    setInput("");
    setError(null);

    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setStreaming(true);
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        // strip the UI-only welcome message from the wire payload
        body: JSON.stringify({ messages: next.slice(1) }),
      });

      if (!res.ok || !res.body) {
        const errBody = await res
          .json()
          .catch(() => ({ error: "Request failed" }));
        throw new Error(errBody.error || `HTTP ${res.status}`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6);
          if (data === "[DONE]") continue;
          try {
            const parsed = JSON.parse(data);
            if (parsed.error) throw new Error(parsed.error);
            if (parsed.text) {
              setMessages((prev) => {
                const updated = [...prev];
                const last = updated[updated.length - 1];
                if (last && last.role === "assistant") {
                  updated[updated.length - 1] = {
                    ...last,
                    content: last.content + parsed.text,
                  };
                }
                return updated;
              });
            }
          } catch (e) {
            if (e instanceof Error && e.message !== data) throw e;
          }
        }
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last && last.role === "assistant" && last.content === "") {
          return prev.slice(0, -1);
        }
        return prev;
      });
    } finally {
      setStreaming(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage();
  }

  function resetChat() {
    setMessages([WELCOME]);
    setError(null);
    setInput("");
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
        <div className="text-white">
          <AiNodeOrb className="w-9 h-9" />
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
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-sm text-white">
                <AiNodeOrb className="w-7 h-7" />
              </div>
              <div>
                <div className="text-sm font-bold">MCS Assistant</div>
                <div className="text-xs text-white/75">We come to you</div>
              </div>
              <button
                onClick={resetChat}
                className="ml-auto text-white/70 hover:text-white text-xs"
                aria-label="Reset chat"
                title="Reset chat"
              >
                Reset
              </button>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white text-xl leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[var(--color-mcs-page)]"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-snug whitespace-pre-wrap ${
                      m.role === "user"
                        ? "bg-[var(--color-mcs-blue)] text-white rounded-br-md"
                        : "bg-white border border-[var(--color-mcs-line)] text-[var(--color-mcs-text)] rounded-bl-md"
                    }`}
                  >
                    {m.content || (
                      <span className="inline-flex items-center gap-1 text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse" />
                        thinking
                      </span>
                    )}
                  </div>
                </div>
              ))}
              {error && (
                <div className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
                  {error}
                </div>
              )}
            </div>

            {/* Suggested prompts — only on initial state */}
            {messages.length === 1 && !streaming && (
              <div className="px-4 pb-2 bg-[var(--color-mcs-page)] border-t border-[var(--color-mcs-line)]">
                <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-2 mt-2">
                  Try asking
                </p>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTED.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="text-xs px-3 py-1.5 rounded-full bg-white border border-[var(--color-mcs-line)] text-[var(--color-mcs-text)] hover:border-[var(--color-mcs-blue)] hover:text-[var(--color-mcs-blue)] transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="px-4 py-3 border-t border-[var(--color-mcs-line)] bg-white flex items-center gap-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                disabled={streaming}
                className="flex-1 px-4 py-2.5 rounded-full bg-[var(--color-mcs-page)] border border-[var(--color-mcs-line)] text-sm focus:outline-none focus:border-[var(--color-mcs-blue)] transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={streaming || !input.trim()}
                className="w-10 h-10 rounded-full mcs-gradient-amber flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
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
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
