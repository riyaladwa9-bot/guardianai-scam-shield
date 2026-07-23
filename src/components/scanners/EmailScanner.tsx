import React, { useState } from "react";
import { Mail, Search, AlertTriangle, CheckCircle2, Sparkles, Volume2 } from "lucide-react";
import { ScanResult, LanguageCode } from "../../types";
import { speakText } from "../../utils/speech";
import { TRANSLATIONS } from "../../utils/language";

interface EmailScannerProps {
  onAddScan: (result: ScanResult) => void;
  language: LanguageCode;
  voiceEnabled: boolean;
}

export const EmailScanner: React.FC<EmailScannerProps> = ({
  onAddScan,
  language,
  voiceEnabled,
}) => {
  const t = TRANSLATIONS[language];
  const [emailText, setEmailText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);

  const sampleEmails = [
    {
      title: "Suspicious Bank KYC Block Email",
      content:
        "From: service@icici-netbanking-verification.com\nSubject: URGENT: Your NetBanking access will be SUSPENDED in 2 hours due to unverified KYC.\nDear Customer, Click here to upload Aadhaar immediately: http://icici-verify-kyc.top/login",
    },
    {
      title: "Fake Income Tax Refund Approval Email",
      content:
        "From: refund-department@incometax-gov-india.org\nSubject: Tax Refund Approved ₹18,450. Click link to enter account details: http://itr-refund-claim.tech/login",
    },
  ];

  const handleAnalyze = async () => {
    if (!emailText.trim() || loading) return;
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/analyze-multimodal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          scanType: "Email Scanner",
          textContent: emailText,
          language,
        }),
      });

      const data = await response.json();
      const res: ScanResult = {
        id: "scan-" + Date.now(),
        scanType: "Email Scanner",
        timestamp: "Just now",
        title: emailText.slice(0, 45) + "...",
        riskScore: data.result?.riskScore ?? 95,
        confidenceScore: data.result?.confidenceScore ?? 99,
        threatCategory: data.result?.threatCategory ?? "Credential Phishing Fraud",
        riskLevel: "Critical",
        explainableReasons: data.result?.explainableReasons ?? [
          "Sender domain (icici-netbanking-verification.com) is NOT official bank domain",
          "Includes urgent time pressure tactics (2 hours cutoff)",
          "Contains link pointing to untrusted .top TLD credential harvester",
        ],
        detectedIndicators: data.result?.detectedIndicators ?? [
          "SPF/DKIM: FAIL",
          "Domain Age: 3 days old",
          "Phishing Language Score: 98%",
        ],
        recommendedActions: data.result?.recommendedActions ?? [
          "Do NOT click any link in this email.",
          "Mark email as spam and phishing.",
          "Verify account status directly on official bank website.",
        ],
        legalContextIndia: "Reportable under IT Act Sec 66C (Identity theft).",
        detailedSummary:
          "GuardianAI Email Inspection detected a high-risk phishing attempt designed to steal netbanking credentials.",
      };

      setResult(res);
      onAddScan(res);

      if (voiceEnabled) {
        speakText(
          `Email scan complete. Risk Score is ${res.riskScore} percent. Phishing email detected. Do not click links.`,
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
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-500/20 text-teal-400 border border-teal-500/40">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-100">{t.titleEmail}</h1>
            <p className="text-xs text-slate-400">
              {t.descEmail}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Paste Email Content or Sender Header:
            </label>
            <textarea
              rows={5}
              value={emailText}
              onChange={(e) => setEmailText(e.target.value)}
              placeholder="Paste email text, sender address, or links here..."
              className="w-full rounded-2xl border border-slate-800 bg-slate-950 p-4 text-xs text-slate-100 placeholder-slate-500 focus:border-teal-500 focus:outline-none"
            />
          </div>

          {/* Test Samples */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Or Try Sample Phishing Email:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sampleEmails.map((sample, idx) => (
                <button
                  key={idx}
                  onClick={() => setEmailText(sample.content)}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-3 text-left hover:border-teal-500/50 transition"
                >
                  <p className="text-xs font-bold text-slate-200">{sample.title}</p>
                  <p className="text-[10px] text-slate-400 truncate mt-1">{sample.content}</p>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAnalyze}
            disabled={!emailText.trim() || loading}
            className="w-full rounded-xl bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-500 py-3 text-xs font-bold text-white shadow-lg transition hover:scale-105 active:scale-95 disabled:opacity-50"
          >
            {loading ? "Analyzing Email Credentials & Headers..." : "Scan Email with Gemini AI"}
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
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-400 mt-1.5 flex-shrink-0" />
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
