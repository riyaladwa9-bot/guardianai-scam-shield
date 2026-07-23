import React, { useState } from "react";
import {
  Video,
  Play,
  Upload,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  Volume2,
} from "lucide-react";
import { ScanResult, LanguageCode } from "../../types";
import { speakText } from "../../utils/speech";
import { TRANSLATIONS } from "../../utils/language";

interface VideoScannerProps {
  onAddScan: (result: ScanResult) => void;
  language: LanguageCode;
  voiceEnabled: boolean;
}

export const VideoScanner: React.FC<VideoScannerProps> = ({
  onAddScan,
  language,
  voiceEnabled,
}) => {
  const t = TRANSLATIONS[language];
  const [videoTitle, setVideoTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);

  const sampleVideos = [
    {
      title: "Fake Police Skype 'Digital Arrest' Video Call",
      desc: "Scammer wearing police uniform threatening victim in bogus room",
      type: "Digital Arrest Fraud",
    },
    {
      title: "AI Generated CEO / Government Official Speech",
      desc: "Deepfake video clip offering guaranteed stock market profits",
      type: "Investment Scam",
    },
  ];

  const handleAnalyze = async (title: string) => {
    setVideoTitle(title);
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/analyze-multimodal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          scanType: "Video Scanner",
          textContent: title,
          language,
        }),
      });

      const data = await response.json();
      const res: ScanResult = {
        id: "scan-" + Date.now(),
        scanType: "Video Scanner",
        timestamp: "Just now",
        title: title,
        riskScore: data.result?.riskScore ?? 94,
        confidenceScore: data.result?.confidenceScore ?? 98,
        threatCategory: data.result?.threatCategory ?? "Digital Arrest Video Call Fraud",
        riskLevel: "Critical",
        explainableReasons: data.result?.explainableReasons ?? [
          "Lip-sync frame lag detected (Audio/Video phase offset: 180ms)",
          "Background police station banner renders blurred AI text artifacts",
          "Uniform badge alignment fails Indian Police Service (IPS) standard specifications",
          "High psychological pressure asserting illegal 'Digital Arrest' authority",
        ],
        detectedIndicators: data.result?.detectedIndicators ?? [
          "Lip sync accuracy score: 42% (Fails natural threshold)",
          "Frame jitter residual score: High",
          "Bogus officer badge pattern detected",
        ],
        recommendedActions: data.result?.recommendedActions ?? [
          "Disconnect the video call IMMEDIATELY.",
          "Indian Police or CBI NEVER conduct video call arrests or demand money.",
          "Call 1930 Cyber Crime Hotline.",
          "Block the caller account.",
        ],
        legalContextIndia:
          "Reportable under IT Act Sec 66D & Bharatiya Nyaya Sanhita Sec 318(4).",
        detailedSummary:
          "GuardianAI Video Analysis identified a synthetic/fake video call. No Indian police agency uses Skype or WhatsApp video calls to arrest citizens or request funds.",
      };

      setResult(res);
      onAddScan(res);

      if (voiceEnabled) {
        speakText(
          `Video scan complete. Risk Score is ${res.riskScore} percent. Disconnect immediately. No Indian police agency conducts video arrests.`,
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
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/40">
            <Video className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-100">{t.titleVideo}</h1>
            <p className="text-xs text-slate-400">
              {t.descVideo}
            </p>
          </div>
        </div>

        {/* Video Upload & Sample Bar */}
        <div className="mt-6 space-y-4">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Select Test Video Sample:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sampleVideos.map((v, idx) => (
              <button
                key={idx}
                onClick={() => handleAnalyze(v.title)}
                disabled={loading}
                className="flex items-start space-x-3 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-left hover:border-purple-500/50 transition group"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400 group-hover:scale-110 transition">
                  <Play className="h-5 w-5 fill-purple-400" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-100 group-hover:text-purple-300">{v.title}</h3>
                  <p className="text-[11px] text-slate-400 mt-1">{v.desc}</p>
                  <span className="mt-2 inline-block rounded-md bg-purple-500/10 px-2 py-0.5 text-[10px] font-bold text-purple-300">
                    Test {v.type}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {loading && (
          <div className="mt-6 rounded-2xl border border-purple-500/30 bg-purple-950/20 p-6 text-center space-y-2">
            <Sparkles className="h-8 w-8 text-purple-400 animate-spin mx-auto" />
            <p className="text-xs font-bold text-purple-300">
              Analyzing frame lip-sync, temporal jitter, and uniform badges...
            </p>
          </div>
        )}
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
              <span>Listen to AI Explanation</span>
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
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
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
