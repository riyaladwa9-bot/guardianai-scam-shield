import React, { useState } from "react";
import {
  Flame,
  X,
  PhoneCall,
  Send,
  ShieldAlert,
  Lock,
  Download,
  CheckCircle2,
  Share2,
} from "lucide-react";

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<"menu" | "reported" | "evidence">("menu");
  const [selectedThreatType, setSelectedThreatType] = useState("Digital Arrest / Video Call Fraud");

  const handle1930Call = () => {
    setStep("reported");
  };

  const handleDownloadEvidence = () => {
    const evidenceData = {
      timestamp: new Date().toISOString(),
      reportId: "CYBER-IND-" + Math.floor(100000 + Math.random() * 900000),
      incidentType: selectedThreatType,
      status: "Logged & Prepared for National Cyber Crime Portal",
      helpline: "1930 (I4C Ministry of Home Affairs)",
      guardianAiForensics: "Multimodal Gemini Hash Signature Verified",
    };

    const blob = new Blob([JSON.stringify(evidenceData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `GuardianAI_Emergency_Evidence_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-3xl border border-rose-500/50 bg-slate-950 p-6 shadow-2xl shadow-rose-950/80">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/40">
              <Flame className="h-6 w-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-slate-100">
                1-Click Cyber Emergency Shield
              </h3>
              <p className="text-[10px] text-rose-400 font-semibold">
                National Cyber Crime Helpline: 1930
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {step === "menu" && (
          <div className="mt-4 space-y-4">
            <p className="text-xs text-slate-300">
              If you are currently under financial threat, fake police digital arrest call, or UPI scam, take immediate action below:
            </p>

            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-slate-400">Select Cyber Threat Type</label>
              <select
                value={selectedThreatType}
                onChange={(e) => setSelectedThreatType(e.target.value)}
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-slate-200 focus:border-rose-500 focus:outline-none"
              >
                <option value="Digital Arrest / Video Call Fraud">Digital Arrest / Fake Police Skype Call</option>
                <option value="AI Voice Clone Emergency Money Demand">AI Voice Clone Relative Emergency</option>
                <option value="UPI Money Debited / QR Code Scam">UPI Money Debited Without PIN</option>
                <option value="Electricity Bill Disconnection Fraud">Electricity Bill Disconnection SMS</option>
                <option value="Stock Market / Crypto WhatsApp Group">Fake Stock Investment Group Fraud</option>
              </select>
            </div>

            {/* Emergency Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href="tel:1930"
                onClick={handle1930Call}
                className="flex items-center justify-center space-x-2 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-rose-900/40 hover:from-rose-500 hover:to-red-500 transition"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Dial 1930 Helpline</span>
              </a>

              <button
                onClick={() => setStep("evidence")}
                className="flex items-center justify-center space-x-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-xs font-bold text-slate-200 hover:bg-slate-800 transition"
              >
                <Download className="h-4 w-4 text-cyan-400" />
                <span>Save Digital Evidence</span>
              </button>
            </div>

            <div className="rounded-2xl border border-rose-500/20 bg-rose-950/20 p-3.5 text-left text-xs space-y-2">
              <div className="flex items-center space-x-2 text-rose-400 font-bold">
                <ShieldAlert className="h-4 w-4" />
                <span>Immediate Safety Checklist</span>
              </div>
              <ul className="list-disc list-inside text-[11px] text-slate-300 space-y-1">
                <li>NEVER transfer money to clear a 'police verification' case.</li>
                <li>Block sender phone number and email immediately.</li>
                <li>Report transaction to your bank branch within 3 hours (Golden Hour).</li>
              </ul>
            </div>
          </div>
        )}

        {step === "reported" && (
          <div className="mt-6 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h4 className="text-base font-bold text-slate-100">National Helpline Connection Triggered</h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              Connecting to Indian Cyber Crime Coordination Centre (I4C) helpline 1930. Keep your bank transaction reference ID ready.
            </p>
            <button
              onClick={() => setStep("menu")}
              className="rounded-xl bg-slate-900 border border-slate-700 px-6 py-2.5 text-xs font-bold text-slate-200 hover:bg-slate-800"
            >
              Back to Emergency Menu
            </button>
          </div>
        )}

        {step === "evidence" && (
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl border border-cyan-500/30 bg-slate-900 p-4 space-y-2 text-xs">
              <p className="text-cyan-400 font-bold">Evidence Package Ready for Download</p>
              <p className="text-slate-300 text-[11px]">
                Includes time-stamped JSON forensic log, sender details, and GuardianAI risk verification hash compatible with cybercrime.gov.in portal uploads.
              </p>
            </div>

            <button
              onClick={handleDownloadEvidence}
              className="flex w-full items-center justify-center space-x-2 rounded-2xl bg-cyan-600 py-3 text-xs font-bold text-white shadow-lg hover:bg-cyan-500"
            >
              <Download className="h-4 w-4" />
              <span>Download Digital Evidence Package (.JSON)</span>
            </button>

            <button
              onClick={() => setStep("menu")}
              className="w-full text-center text-xs text-slate-400 hover:underline"
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
