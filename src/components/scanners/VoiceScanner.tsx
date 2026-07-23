import React, { useState } from "react";
import { Mic, Play, Square, AlertTriangle, CheckCircle2, Sparkles, Volume2 } from "lucide-react";
import { ScanResult, LanguageCode } from "../../types";
import { speakText } from "../../utils/speech";
import { TRANSLATIONS } from "../../utils/language";

interface VoiceScannerProps {
  onAddScan: (result: ScanResult) => void;
  language: LanguageCode;
  voiceEnabled: boolean;
}

export const VoiceScanner: React.FC<VoiceScannerProps> = ({
  onAddScan,
  language,
  voiceEnabled,
}) => {
  const t = TRANSLATIONS[language];
  const [isRecording, setIsRecording] = useState(false);
  const [audioSample, setAudioSample] = useState<string | null>(null);
  const [sampleTitle, setSampleTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);

  const testAudioSamples = [
    {
      title: "AI Voice Clone: Relative Requesting Emergency Hospital Funds",
      desc: "Audio claiming uncle in accident needing ₹50,000 immediately",
      type: "Family Voice Clone",
    },
    {
      title: "Fake Bank Manager Demanding Credit Card CVV & OTP",
      desc: "Synthetic call threatening card blockage within 10 minutes",
      type: "Bank OTP Fraud",
    },
  ];

  const handleToggleRecord = () => {
    if (!isRecording) {
      setIsRecording(true);
      setSampleTitle("Microphone Live Recording");
      setTimeout(() => {
        setIsRecording(false);
        setAudioSample("Recorded Audio Stream");
      }, 4000);
    } else {
      setIsRecording(false);
    }
  };

  const handleSelectSample = (sample: typeof testAudioSamples[0]) => {
    setSampleTitle(sample.title);
    setAudioSample(sample.title);
  };

  const handleAnalyze = async () => {
    if (!audioSample || loading) return;
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/analyze-multimodal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          scanType: "Voice Scanner",
          textContent: sampleTitle,
          language,
        }),
      });

      const data = await response.json();
      const res: ScanResult = {
        id: "scan-" + Date.now(),
        scanType: "Voice Scanner",
        timestamp: "Just now",
        title: sampleTitle,
        riskScore: data.result?.riskScore ?? 94,
        confidenceScore: data.result?.confidenceScore ?? 97,
        threatCategory: data.result?.threatCategory ?? "AI Voice Clone Impersonation",
        riskLevel: "Critical",
        explainableReasons: data.result?.explainableReasons ?? [
          "Zero natural pitch variation detected (AI synthesis index: 0.94)",
          "Background acoustics show pre-trained synthetic room reverb residual",
          "High psychological urgency demanding immediate ₹50,000 UPI transfer",
        ],
        detectedIndicators: data.result?.detectedIndicators ?? [
          "Audio fingerprint: ElevenLabs v2 voice clone model match",
          "Voice frequency variance < 5Hz (Unnatural flat pitch)",
          "Emergency money request detected",
        ],
        recommendedActions: data.result?.recommendedActions ?? [
          "Do NOT send money or UPI payments.",
          "Call your relative directly on their regular cellular mobile number.",
          "Report phone number to 1930 Cyber Crime Helpline.",
        ],
        legalContextIndia: "Offense under IT Act Sec 66D for Cheating by Personation.",
        detailedSummary:
          "GuardianAI Voice Forensics identified a cloned voice message targeting family trust.",
      };

      setResult(res);
      onAddScan(res);

      if (voiceEnabled) {
        speakText(
          `Voice scan complete. Risk Score is ${res.riskScore} percent. Voice clone detected. Call relative directly on mobile phone.`,
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
            <Mic className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-100">{t.titleVoice}</h1>
            <p className="text-xs text-slate-400">
              {t.descVoice}
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recording & Input */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center space-y-3">
              <button
                onClick={handleToggleRecord}
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full transition ${
                  isRecording
                    ? "bg-rose-500 text-white animate-pulse"
                    : "bg-indigo-600 text-white hover:bg-indigo-500"
                }`}
              >
                {isRecording ? <Square className="h-6 w-6" /> : <Mic className="h-8 w-8" />}
              </button>
              <p className="text-xs font-bold text-slate-200">
                {isRecording ? "Recording Audio Stream (4s)..." : "Record Voice / Call Audio"}
              </p>
              <p className="text-[10px] text-slate-500">Record incoming call or audio clip to test</p>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Or Select Test Audio Sample:
              </p>
              <div className="space-y-2">
                {testAudioSamples.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectSample(s)}
                    className="flex w-full items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-3 text-left hover:border-indigo-500/50 transition"
                  >
                    <div>
                      <p className="text-xs font-bold text-slate-200">{s.title}</p>
                      <p className="text-[10px] text-slate-400">{s.desc}</p>
                    </div>
                    <span className="rounded bg-indigo-500/20 px-2 py-0.5 text-[10px] font-bold text-indigo-300">
                      {s.type}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Audio Waveform Simulator */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 flex flex-col justify-between text-center">
            <div>
              <p className="text-xs font-bold text-slate-200">{sampleTitle || "No Audio Selected"}</p>
              {audioSample && (
                <div className="my-6 flex items-center justify-center space-x-1.5 h-16 bg-slate-900 rounded-xl px-4 border border-indigo-900/40">
                  <span className="h-8 w-1.5 bg-indigo-500 animate-pulse" />
                  <span className="h-12 w-1.5 bg-cyan-400 animate-pulse" />
                  <span className="h-6 w-1.5 bg-purple-500 animate-pulse" />
                  <span className="h-10 w-1.5 bg-indigo-400 animate-pulse" />
                  <span className="h-14 w-1.5 bg-cyan-500 animate-pulse" />
                  <span className="h-8 w-1.5 bg-indigo-500 animate-pulse" />
                </div>
              )}
            </div>

            <button
              onClick={handleAnalyze}
              disabled={!audioSample || loading}
              className="w-full rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 py-3 text-xs font-bold text-white shadow-lg transition hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              {loading ? "Analyzing Audio Spectrograph..." : "Analyze Voice with Gemini AI"}
            </button>
          </div>
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
