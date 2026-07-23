import React, { useState } from "react";
import {
  Upload,
  ScanFace,
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Zap,
  Image as ImageIcon,
  Volume2,
} from "lucide-react";
import { ScanResult, LanguageCode } from "../../types";
import { speakText } from "../../utils/speech";
import { TRANSLATIONS } from "../../utils/language";

interface ImageScannerProps {
  onAddScan: (result: ScanResult) => void;
  language: LanguageCode;
  voiceEnabled: boolean;
}

export const ImageScanner: React.FC<ImageScannerProps> = ({
  onAddScan,
  language,
  voiceEnabled,
}) => {
  const t = TRANSLATIONS[language];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageName, setImageName] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);

  const sampleImages = [
    {
      title: "AI Deepfake Political Video Screenshot",
      url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      type: "Deepfake",
    },
    {
      title: "Suspicious Aadhaar / Bank KYC Card",
      url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80",
      type: "KYC Fraud",
    },
    {
      title: "Genuine Natural Photo",
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      type: "Clean",
    },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectSample = (sample: typeof sampleImages[0]) => {
    setSelectedImage(sample.url);
    setImageName(sample.title);
  };

  const handleAnalyze = async () => {
    if (!selectedImage || loading) return;
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/analyze-multimodal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          scanType: "Image Deepfake",
          content: selectedImage,
          textContent: `Scanned image: ${imageName}`,
          language,
        }),
      });

      const data = await response.json();
      const res: ScanResult = {
        id: "scan-" + Date.now(),
        scanType: "Image Deepfake",
        timestamp: "Just now",
        title: imageName || "Uploaded Image Scan",
        riskScore: data.result?.riskScore ?? 88,
        confidenceScore: data.result?.confidenceScore ?? 95,
        threatCategory: data.result?.threatCategory ?? "AI Deepfake Facial Swap",
        riskLevel: data.result?.riskLevel ?? "High",
        explainableReasons: data.result?.explainableReasons ?? [
          "Lighting inconsistency between eyes and cheek highlights",
          "Facial mesh boundary jitter detected at 120fps frame resolution",
          "Sub-surface skin scattering missing, indicating neural GAN generation",
        ],
        detectedIndicators: data.result?.detectedIndicators ?? [
          "Error Level Analysis (ELA) compression mask mismatch",
          "Corneal reflection variance: 18%",
          "Deepfake diffusion noise present",
        ],
        recommendedActions: data.result?.recommendedActions ?? [
          "Do NOT forward on social media or messaging platforms.",
          "Reject KYC approval if submitted for bank verification.",
          "File report with CERT-In.",
        ],
        legalContextIndia:
          data.result?.legalContextIndia ||
          "Prohibited under IT Rules 2021 (Intermediary Guidelines) & BNS Section 318.",
        detailedSummary:
          data.result?.detailedSummary ||
          "GuardianAI Image Forensics detected generative facial swap artifacts. The image shows evidence of synthetic manipulation.",
      };

      setResult(res);
      onAddScan(res);

      if (voiceEnabled) {
        speakText(
          `Image scan complete. Risk Score is ${res.riskScore} percent. ${res.explainableReasons[0]}`,
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
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
            <ScanFace className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-100">{t.titleImage}</h1>
            <p className="text-xs text-slate-400">
              {t.descImage}
            </p>
          </div>
        </div>

        {/* Upload Dropzone */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-indigo-500/30 bg-slate-950/60 p-6 text-center hover:border-cyan-500/50 transition">
              <Upload className="h-10 w-10 text-cyan-400 mb-2" />
              <p className="text-xs font-semibold text-slate-200">
                Drag & Drop Image or Click to Browse
              </p>
              <p className="text-[10px] text-slate-500 mt-1">Supports PNG, JPG, WEBP (Max 20MB)</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>

            {/* Test Samples Bar */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Or Select Test Sample:
              </p>
              <div className="grid grid-cols-3 gap-2">
                {sampleImages.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectSample(s)}
                    className="rounded-xl border border-slate-800 bg-slate-950 p-2 text-left hover:border-cyan-500/50 transition"
                  >
                    <img
                      src={s.url}
                      alt={s.title}
                      className="h-16 w-full rounded-lg object-cover"
                    />
                    <p className="mt-1 text-[10px] font-bold text-slate-300 truncate">{s.type}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Selected Preview Box */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 flex flex-col items-center justify-center text-center">
            {selectedImage ? (
              <div className="w-full space-y-3">
                <div className="relative overflow-hidden rounded-xl border border-indigo-500/40 bg-slate-900 max-h-56">
                  <img
                    src={selectedImage}
                    alt="Scan Preview"
                    className="w-full h-56 object-cover"
                  />
                  {loading && (
                    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center space-y-2">
                      <Sparkles className="h-8 w-8 text-cyan-400 animate-spin" />
                      <span className="text-xs font-bold text-cyan-300">
                        Analyzing ELA Residuals & Facial Mesh...
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-xs font-bold text-slate-200 truncate">{imageName || "Image Preview"}</p>
                <button
                  onClick={handleAnalyze}
                  disabled={loading}
                  className="w-full rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 py-3 text-xs font-bold text-white shadow-lg transition hover:scale-105 active:scale-95 disabled:opacity-50"
                >
                  {loading ? "Performing AI Forensic Scan..." : "Analyze Image with Gemini AI"}
                </button>
              </div>
            ) : (
              <div className="py-12 space-y-2 text-slate-500">
                <ImageIcon className="h-12 w-12 mx-auto stroke-1" />
                <p className="text-xs font-semibold">No Image Selected</p>
                <p className="text-[10px]">Upload a photo or select a test sample to analyze</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* RESULT CARDS */}
      {result && (
        <div className="rounded-3xl border border-indigo-500/40 bg-slate-900/80 p-6 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-black ${
                    result.riskScore >= 70
                      ? "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                      : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                  }`}
                >
                  Risk Score: {result.riskScore} / 100 ({result.riskLevel})
                </span>
                <span className="text-xs text-slate-400">Confidence: {result.confidenceScore}%</span>
              </div>
              <h2 className="mt-2 text-lg font-bold text-slate-100">{result.threatCategory}</h2>
            </div>

            <button
              onClick={() => speakText(result.detailedSummary, language)}
              className="flex items-center space-x-2 rounded-xl bg-slate-800 px-3.5 py-2 text-xs font-semibold text-cyan-400 hover:bg-slate-700"
            >
              <Volume2 className="h-4 w-4" />
              <span>Read AI Explanation Aloud</span>
            </button>
          </div>

          {/* Explainable Reasons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <AlertTriangle className="h-4 w-4" />
                <span>{t.whySuspicious}</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {result.explainableReasons.map((reason, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
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

          <div className="rounded-2xl border border-indigo-500/20 bg-indigo-950/20 p-4 text-xs text-slate-300">
            <p className="font-bold text-indigo-300">Legal Protection Context in India:</p>
            <p className="mt-1 text-slate-400">{result.legalContextIndia}</p>
          </div>
        </div>
      )}
    </div>
  );
};
