import React, { useState } from "react";
import { Bot, Volume2, VolumeX, X, Send, Sparkles, MessageSquare } from "lucide-react";
import { speakText, stopSpeaking } from "../utils/speech";

interface AiAvatarAssistantProps {
  lastScanExplanation?: string;
  voiceEnabled: boolean;
  language: string;
}

export const AiAvatarAssistant: React.FC<AiAvatarAssistantProps> = ({
  lastScanExplanation,
  voiceEnabled,
  language,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: "ai" | "user"; text: string }>>([
    {
      sender: "ai",
      text: "Namaste! I am GuardianAI Assistant. Ask me anything about suspicious calls, messages, deepfakes, or how to stay safe from Indian cyber scams.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = (text: string) => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
    } else {
      speakText(text, language);
      setIsSpeaking(true);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput("");
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, language }),
      });
      const data = await res.json();
      const replyText = data.reply || "Stay vigilant! Always verify bank calls and never share OTPs.";
      setMessages((prev) => [...prev, { sender: "ai", text: replyText }]);

      if (voiceEnabled) {
        speakText(replyText, language);
        setIsSpeaking(true);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Always remember: No bank or police officer will ever ask for your OTP or ask you to transfer funds to a 'safety account'.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-0.5 shadow-2xl shadow-cyan-500/30 transition hover:scale-105 active:scale-95"
          aria-label="Open AI Security Assistant"
        >
          <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-slate-950">
            <Bot className="h-7 w-7 text-cyan-400 animate-pulse" />
          </div>
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500" />
          </span>
        </button>
      )}

      {/* Assistant Modal Drawer */}
      {isOpen && (
        <div className="flex flex-col h-[480px] w-80 sm:w-96 rounded-2xl border border-indigo-500/40 bg-slate-950/95 p-4 shadow-2xl shadow-indigo-950/80 backdrop-blur-xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center space-x-2.5">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400">
                <Bot className="h-5 w-5" />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-950" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-100 flex items-center gap-1">
                  <span>GuardianAI Cyber Avatar</span>
                  <Sparkles className="h-3 w-3 text-cyan-400" />
                </h3>
                <p className="text-[10px] text-slate-400">Explainable Scam Intelligence</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => handleSpeak(messages[messages.length - 1]?.text || "")}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-cyan-400"
                title="Read aloud"
              >
                {isSpeaking ? <VolumeX className="h-4 w-4 text-rose-400" /> : <Volume2 className="h-4 w-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Last Scan Explanation Alert Banner if available */}
          {lastScanExplanation && (
            <div className="my-2 rounded-xl border border-cyan-500/30 bg-cyan-950/30 p-2.5 text-[11px] text-cyan-200">
              <span className="font-semibold text-cyan-400">Latest Scan Finding:</span>{" "}
              {lastScanExplanation}
            </div>
          )}

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto my-2 space-y-3 pr-1 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 ${
                    m.sender === "user"
                      ? "bg-indigo-600 text-white rounded-br-none"
                      : "bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none"
                  }`}
                >
                  <p className="whitespace-pre-wrap leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-slate-900 border border-slate-800 px-3.5 py-2.5 text-slate-400 flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-[11px]">Analyzing threat database...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="pt-2 border-t border-slate-800 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about digital arrest, UPI PINs, scams..."
              className="flex-1 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-2 text-white shadow-md disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
