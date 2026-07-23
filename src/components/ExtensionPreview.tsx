import React, { useState } from "react";
import { Chrome, ShieldCheck, AlertTriangle, ExternalLink, ShieldAlert, CheckCircle2 } from "lucide-react";
import { LanguageCode } from "../types";

interface ExtensionPreviewProps {
  language: LanguageCode;
}

export const ExtensionPreview: React.FC<ExtensionPreviewProps> = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-indigo-500/30 bg-slate-900/60 p-6 shadow-xl backdrop-blur-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
              <Chrome className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-100">GuardianAI Browser Extension Preview</h1>
              <p className="text-xs text-slate-400">
                Real-time active protection directly inside Google Chrome, Firefox, and Microsoft Edge.
              </p>
            </div>
          </div>

          {/* Toggle Extension Status */}
          <button
            onClick={() => setEnabled(!enabled)}
            className={`flex items-center space-x-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition ${
              enabled
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                : "bg-slate-800 text-slate-400 border border-slate-700"
            }`}
          >
            <ShieldCheck className="h-4 w-4" />
            <span>{enabled ? "Extension Active in Browser" : "Extension Disabled"}</span>
          </button>
        </div>

        {/* Live Mockup of Browser Interface with Overlay Banner */}
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl">
          {/* Mock Browser Header */}
          <div className="flex items-center space-x-2 bg-slate-900 px-4 py-3 border-b border-slate-800 text-xs">
            <div className="flex space-x-1.5">
              <span className="h-3 w-3 rounded-full bg-rose-500" />
              <span className="h-3 w-3 rounded-full bg-amber-500" />
              <span className="h-3 w-3 rounded-full bg-emerald-500" />
            </div>
            <div className="flex-1 max-w-xl mx-auto bg-slate-950 rounded-lg px-3 py-1 text-[11px] font-mono text-slate-400 border border-slate-800 flex items-center justify-between">
              <span className="truncate">https://mail.google.com/mail/u/0/#inbox/FMfcgzGxX...</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <ShieldCheck className="h-3 w-3" /> Protected
              </span>
            </div>
          </div>

          {/* Mock Email / Page Content with GuardianAI Overlay Banner */}
          <div className="p-6 space-y-4">
            {/* GuardianAI Active In-Page Overlay Shield Banner */}
            {enabled && (
              <div className="rounded-2xl border border-rose-500/60 bg-gradient-to-r from-slate-950 via-rose-950/40 to-slate-950 p-4 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/40">
                    <ShieldAlert className="h-6 w-6 animate-pulse" />
                  </div>
                  <div>
                    <span className="rounded bg-rose-500/20 px-2 py-0.5 text-[10px] font-bold text-rose-400">
                      GuardianAI Threat Block
                    </span>
                    <h4 className="text-xs font-bold text-slate-100 mt-1">
                      Warning: Phishing Link Detected inside Email Text!
                    </h4>
                    <p className="text-[11px] text-slate-300">
                      Link points to domain (sbi-netbanking-verify.top) created 2 days ago. Do NOT click.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button className="rounded-xl bg-rose-600 px-3.5 py-2 text-xs font-bold text-white shadow hover:bg-rose-500">
                    Block Link & Quarantine
                  </button>
                  <button className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-300">
                    Dismiss
                  </button>
                </div>
              </div>
            )}

            {/* Email Mock Body */}
            <div className="space-y-2 text-xs text-slate-300 opacity-80 border-t border-slate-900 pt-4">
              <p className="font-bold text-slate-200">From: service@icici-netbanking-verification.com</p>
              <p className="font-bold text-slate-200">Subject: URGENT: NetBanking Blocked in 2 hours</p>
              <p className="mt-2 text-slate-400 leading-relaxed">
                Dear Customer, your bank account access will be suspended due to pending KYC verification. Please click the link below to verify your Aadhaar and debit card immediately:
              </p>
              <p className="text-rose-400 font-mono underline">http://icici-verify-kyc.top/login</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
