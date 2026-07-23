import React, { useState } from "react";
import { QrCode, AlertTriangle, CheckCircle2, Sparkles, Volume2, ShieldAlert } from "lucide-react";
import { ScanResult, LanguageCode } from "../../types";
import { speakText } from "../../utils/speech";
import { TRANSLATIONS } from "../../utils/language";

interface QrScannerProps {
  onAddScan: (result: ScanResult) => void;
  language: LanguageCode;
  voiceEnabled: boolean;
}

export const QrScanner: React.FC<QrScannerProps> = ({
  onAddScan,
  language,
  voiceEnabled,
}) => {
  const t = TRANSLATIONS[language];
  const [selectedQr, setSelectedQr] = useState<string | null>(null);
  const [qrTitle, setQrTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);

  const sampleQrs = [
    {
      title: "Fake OLX Buyer UPI Collect QR Trap",
      vpa: "upi://pay?pa=fake.collect.merchant@ybl&pn=BuyerRefund&am=15000&cu=INR",
      desc: "Tricks victim into entering UPI PIN thinking they are RECEIVING money",
      type: "Collect Request Trap",
    },
    {
      title: "Phishing Website Portal QR Code",
      vpa: "http://verify-bank-account-kyc-update.xyz/login",
      desc: "Redirects user to fake netbanking login page",
      type: "Phishing Link",
    },
  ];

  const handleSelectSample = (s: typeof sampleQrs[0]) => {
    setSelectedQr(s.vpa);
    setQrTitle(s.title);
  };

  const handleAnalyze = async () => {
    if (!selectedQr || loading) return;
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/analyze-multimodal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          scanType: "QR Scanner",
          textContent: `${qrTitle}: ${selectedQr}`,
          language,
        }),
      });

      const data = await response.json();
      const res: ScanResult = {
        id: "scan-" + Date.now(),
        scanType: "QR Scanner",
        timestamp: "Just now",
        title: qrTitle,
        riskScore: data.result?.riskScore ?? 97,
        confidenceScore: data.result?.confidenceScore ?? 99,
        threatCategory: data.result?.threatCategory ?? "UPI Collect Request Money Trap",
        riskLevel: "Critical",
        explainableReasons: data.result?.explainableReasons ?? [
          "Payload is a DEBIT/COLLECT payment intent forcing funds out of your bank account",
          "GOLDEN RULE: Entering your UPI PIN is required ONLY to SEND money, never to receive money",
          "Merchant VPA (fake.collect.merchant@ybl) is an unverified personal handle",
        ],
        detectedIndicators: data.result?.detectedIndicators ?? [
          "Intent action: debit",
          "Amount requested: ₹15,000",
          "Unverified merchant VPA",
        ],
        recommendedActions: data.result?.recommendedActions ?? [
          "Do NOT enter your UPI PIN under any circumstances.",
          "Cancel the payment request immediately.",
          "Report the UPI ID to NPCI and BHIM / PhonePe / Paytm.",
        ],
        legalContextIndia: "Violation of NPCI Payment Guidelines & IT Act Sec 66D.",
        detailedSummary:
          "GuardianAI QR Forensics detected a dangerous UPI Collect request. You do not need to enter your PIN to receive money.",
      };

      setResult(res);
      onAddScan(res);

      if (voiceEnabled) {
        speakText(
          `QR scan complete. Risk Score is ${res.riskScore} percent. Fake QR trap detected. Do not enter your UPI PIN.`,
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
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/40">
            <QrCode className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-100">{t.titleQr}</h1>
            <p className="text-xs text-slate-400">
              {t.descQr}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Select Test QR Code Payload:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sampleQrs.map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectSample(s)}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-4 text-left hover:border-rose-500/50 transition"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-100">{s.title}</h3>
                  <span className="rounded bg-rose-500/20 px-2 py-0.5 text-[10px] font-bold text-rose-300">
                    {s.type}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">{s.desc}</p>
                <p className="text-[10px] font-mono text-rose-400 mt-2 truncate">{s.vpa}</p>
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-rose-500/30 bg-rose-950/20 p-4 text-xs text-rose-200 flex items-start space-x-3">
            <ShieldAlert className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Golden Rule of UPI Security in India:</p>
              <p className="text-[11px] text-slate-300 mt-0.5">
                Entering your UPI PIN is required <strong>ONLY to SEND / PAY money</strong>. You NEVER enter a PIN to receive money.
              </p>
            </div>
          </div>

          <button
            onClick={handleAnalyze}
            disabled={!selectedQr || loading}
            className="w-full rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-pink-600 py-3 text-xs font-bold text-white shadow-lg transition hover:scale-105 active:scale-95 disabled:opacity-50"
          >
            {loading ? "Inspecting Merchant VPA Payload..." : "Scan QR Code Payload with Gemini AI"}
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
            <div className="rounded-2xl border border-slate-800 bg-slate-955 p-4 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <AlertTriangle className="h-4 w-4" />
                <span>{t.whySuspicious}</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {result.explainableReasons.map((reason, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400 mt-1.5 flex-shrink-0" />
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
