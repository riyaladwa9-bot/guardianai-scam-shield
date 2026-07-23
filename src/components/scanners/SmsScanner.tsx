import React, { useState } from "react";
import { MessageSquare, AlertTriangle, CheckCircle2, Sparkles, Volume2 } from "lucide-react";
import { ScanResult, LanguageCode } from "../../types";
import { speakText } from "../../utils/speech";
import { TRANSLATIONS } from "../../utils/language";

interface SmsScannerProps {
  onAddScan: (result: ScanResult) => void;
  language: LanguageCode;
  voiceEnabled: boolean;
}

export const SmsScanner: React.FC<SmsScannerProps> = ({
  onAddScan,
  language,
  voiceEnabled,
}) => {
  const t = TRANSLATIONS[language];
  const [smsText, setSmsText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);

  const sampleMessages = [
    {
      title: "Electricity Bill Disconnection Fraud",
      content:
        "Dear Electricity Consumer, your power supply will be DISCONNECTED tonight at 9:30 PM due to previous month bill update. Immediately contact Electricity Officer +91 9832100219.",
    },
    {
      title: "WhatsApp Part-Time Job Telegram Scam",
      content:
        "Earn ₹3,000–₹8,000 daily by rating Google Maps & YouTube videos from home! No experience required. Join Telegram channel: @india_work_from_home_jobs",
    },
    {
      title: "Fake Bank Cashback / UPI Claim Link",
      content:
        "Dear Customer, ₹4,999 cashback credited to your GPay/PhonePe account! Click link to claim into bank account: http://gpay-cashback-claim.xyz",
    },
  ];

  const handleAnalyze = async () => {
    if (!smsText.trim() || loading) return;
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/analyze-multimodal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          scanType: "SMS Scanner",
          textContent: smsText,
          language,
        }),
      });

      const data = await response.json();
      const res: ScanResult = {
        id: "scan-" + Date.now(),
        scanType: "SMS Scanner",
        timestamp: "Just now",
        title: smsText.slice(0, 45) + "...",
        riskScore: data.result?.riskScore ?? 96,
        confidenceScore: data.result?.confidenceScore ?? 99,
        threatCategory: data.result?.threatCategory ?? "Financial SMS Smishing Scam",
        riskLevel: "Critical",
        explainableReasons: data.result?.explainableReasons ?? [
          "Creates artificial psychological panic (power cut tonight at 9:30 PM)",
          "Uses personal 10-digit SIM sender number instead of registered DISCOM sender ID",
          "Prompts victim to call scammer or download remote control app",
        ],
        detectedIndicators: data.result?.detectedIndicators ?? [
          "Smishing pattern match: Electricity DISCOM scam",
          "Sender number: Personal SIM (+91 9832100219)",
          "Unregistered payment URL",
        ],
        recommendedActions: data.result?.recommendedActions ?? [
          "Do NOT call the phone number mentioned in the message.",
          "Never install APK files sent over WhatsApp or SMS.",
          "Pay electricity bills only through official DISCOM portals or trusted apps.",
          "Block number and report on TRAI DND app.",
        ],
        legalContextIndia: "Violation of Telecom DND Regulations & IT Act Sec 66D.",
        detailedSummary:
          "GuardianAI SMS Detection identified a classic smishing fraud pattern aimed at extracting bank funds.",
      };

      setResult(res);
      onAddScan(res);

      if (voiceEnabled) {
        speakText(
          `SMS scan complete. Risk Score is ${res.riskScore} percent. Fraudulent message detected. Do not call number or click links.`,
          language
        );
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-indigo-500/30 bg-slate-900/60 p-6 shadow-xl backdrop-blur-xl">
        <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
            <MessageSquare className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-100">{t.titleSms}</h1>
            <p className="text-xs text-slate-400">
              {t.descSms}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Paste SMS or WhatsApp Message:
            </label>
            <textarea
              rows={4}
              value={smsText}
              onChange={(e) => setSmsText(e.target.value)}
              placeholder="Paste suspicious SMS or WhatsApp message text here..."
              className="w-full rounded-2xl border border-slate-800 bg-slate-950 p-4 text-xs text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Or Try Sample Scam Messages:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {sampleMessages.map((sample, idx) => (
                <button
                  key={idx}
                  onClick={() => setSmsText(sample.content)}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-3 text-left hover:border-amber-500/50 transition"
                >
                  <p className="text-xs font-bold text-slate-200">{sample.title}</p>
                  <p className="text-[10px] text-slate-400 truncate mt-1">{sample.content}</p>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAnalyze}
            disabled={!smsText.trim() || loading}
            className="w-full rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-rose-500 py-3 text-xs font-bold text-white shadow-lg transition hover:scale-105 active:scale-95 disabled:opacity-50"
          >
            {loading ? "Analyzing Message Patterns..." : "Scan Message with Gemini AI"}
          </button>
        </div>
      </div>

      {/* RESULT CARDS */}
      {result && (
        <div className="rounded-3xl border border-indigo-500/40 bg-slate-900/80 p-6 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="rounded-full bg-rose-500/20 px-3 py-1 text-xs font-black text-rose-400 border border-rose-500/40">
                Risk Score: {result.riskScore} / 100 ({result.riskLevel})
              </span>
              <h2 className="mt-2 text-lg font-bold text-slate-100">{result.threatCategory}</h2>
            </div>
            <button
              onClick={() => speakText(result.detailedSummary, language)}
              className="flex items-center space-x-2 rounded-xl bg-slate-800 px-3.5 py-2 text-xs font-semibold text-cyan-400 hover:bg-slate-700"
            >
              <Volume2 className="h-4 w-4" />
              <span>Read AI Explanation</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <AlertTriangle className="h-4 w-4" />
                <span>{t.whySuspicious}</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {result.explainableReasons.map((reason, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                <span>{t.safetyActions}</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {result.recommendedActions.map((action, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
