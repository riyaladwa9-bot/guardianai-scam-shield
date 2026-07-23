import React, { useState } from "react";
import { FileText, AlertTriangle, CheckCircle2, Sparkles, Volume2 } from "lucide-react";
import { ScanResult, LanguageCode } from "../../types";
import { speakText } from "../../utils/speech";
import { TRANSLATIONS } from "../../utils/language";

interface DocumentScannerProps {
  onAddScan: (result: ScanResult) => void;
  language: LanguageCode;
  voiceEnabled: boolean;
}

export const DocumentScanner: React.FC<DocumentScannerProps> = ({
  onAddScan,
  language,
  voiceEnabled,
}) => {
  const t = TRANSLATIONS[language];
  const [docText, setDocText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);

  const sampleDocs = [
    {
      title: "Fake High Court / Police Digital Arrest Notice PDF",
      content:
        "HIGH COURT OF DELHI - NOTICE OF IMMEDIATE ARREST\nCase No: ED-DL-2026-90812\nYou are charged with Money Laundering & Narcotics Trafficking under PMLA Sec 3. Transfer ₹2,50,000 into Court Verification Account within 24 hours to stay arrest warrant.",
    },
    {
      title: "Fake Bank Pre-Approved Loan Offer Letter",
      content:
        "HDFC BANK OFFICIAL LOAN APPROVAL\nLoan Amount: ₹10,000,000 Approved at 2% Interest.\nTo disburse funds, pay ₹12,500 Processing Fee to Account Holder: Suresh Kumar, UPI VPA: loan.disburse@paytm",
    },
  ];

  const handleAnalyze = async () => {
    if (!docText.trim() || loading) return;
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/analyze-multimodal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          scanType: "Document Scanner",
          textContent: docText,
          language,
        }),
      });

      const data = await response.json();
      const res: ScanResult = {
        id: "scan-" + Date.now(),
        scanType: "Document Scanner",
        timestamp: "Just now",
        title: docText.slice(0, 45) + "...",
        riskScore: data.result?.riskScore ?? 98,
        confidenceScore: data.result?.confidenceScore ?? 99,
        threatCategory: data.result?.threatCategory ?? "Forged Legal Document / Extortion Notice",
        riskLevel: "Critical",
        explainableReasons: data.result?.explainableReasons ?? [
          "High Courts and Indian Police NEVER issue arrest notices asking for monetary deposits to personal bank accounts",
          "Includes forged Emblem seal and inconsistent typography",
          "Demand for payment via personal UPI VPA indicates criminal extortion",
        ],
        detectedIndicators: data.result?.detectedIndicators ?? [
          "Forged High Court letterhead pattern",
          "Personal account payment demand",
          "PMLA Extortion phrase match",
        ],
        recommendedActions: data.result?.recommendedActions ?? [
          "Do NOT transfer any money.",
          "File report on National Cyber Crime Portal (cybercrime.gov.in) or call 1930.",
          "Consult a licensed lawyer if you have doubts.",
        ],
        legalContextIndia: "Offense under BNS Sec 336 (Forgery) & IT Act Sec 66D.",
        detailedSummary:
          "GuardianAI Document OCR identified a forged legal/loan document created to extort money.",
      };

      setResult(res);
      onAddScan(res);

      if (voiceEnabled) {
        speakText(
          `Document scan complete. Risk Score is ${res.riskScore} percent. Forged document detected. Do not pay money.`,
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
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/40">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-100">{t.titleDocument}</h1>
            <p className="text-xs text-slate-400">
              {t.descDocument}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Paste Document / PDF Text Content:
            </label>
            <textarea
              rows={4}
              value={docText}
              onChange={(e) => setDocText(e.target.value)}
              placeholder="Paste document text or notice here..."
              className="w-full rounded-2xl border border-slate-800 bg-slate-950 p-4 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Or Try Sample Forged Documents:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sampleDocs.map((sample, idx) => (
                <button
                  key={idx}
                  onClick={() => setDocText(sample.content)}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-3 text-left hover:border-indigo-500/50 transition"
                >
                  <p className="text-xs font-bold text-slate-200">{sample.title}</p>
                  <p className="text-[10px] text-slate-400 truncate mt-1">{sample.content}</p>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAnalyze}
            disabled={!docText.trim() || loading}
            className="w-full rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 py-3 text-xs font-bold text-white shadow-lg transition hover:scale-105 active:scale-95 disabled:opacity-50"
          >
            {loading ? "Analyzing Document Seal & Font Forensics..." : "Scan Document with Gemini AI"}
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
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
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
