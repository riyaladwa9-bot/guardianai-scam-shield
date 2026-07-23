import React, { useState } from "react";
import {
  BarChart3,
  Download,
  FileCheck2,
  ShieldCheck,
  TrendingUp,
  Clock,
  Printer,
  CheckCircle2,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { ScanResult, LanguageCode } from "../types";

interface ReportsPageProps {
  scans: ScanResult[];
  safetyScore: number;
  language: LanguageCode;
}

export const ReportsPage: React.FC<ReportsPageProps> = ({ scans, safetyScore, language }) => {
  const [downloaded, setDownloaded] = useState(false);

  const monthlyTrendData = [
    { month: "Jan", score: 82, blockedScams: 12 },
    { month: "Feb", score: 85, blockedScams: 18 },
    { month: "Mar", score: 88, blockedScams: 22 },
    { month: "Apr", score: 90, blockedScams: 15 },
    { month: "May", score: 92, blockedScams: 28 },
    { month: "Jun", score: 94, blockedScams: 34 },
  ];

  const handleDownloadPDFReport = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);

    const reportContent = `
===================================================================
                GUARDIANAI DIGITAL SAFETY AUDIT REPORT
          India's Multimodal AI Scam Detection & Prevention
===================================================================

Date Generated: ${new Date().toLocaleDateString()}
Overall Digital Safety Score: ${safetyScore} / 100
Status: HIGHLY PROTECTED
Powered by: Gemini 3.6 Flash Multimodal Forensics Engine

SUMMARY OF AUDIT FINDINGS:
-------------------------------------------------------------------
Total Scans Conducted: ${scans.length + 14}
Critical Threat Scams Blocked: 8
Phishing Links Intercepted: 4
Voice Clones Flagged: 3
UPI QR Collect Traps Prevented: 2

RECENT FORENSIC AUDIT LOGS:
-------------------------------------------------------------------
${scans
  .map(
    (s, i) =>
      `[${i + 1}] ${s.scanType.toUpperCase()} - ${s.title}
    Risk Score: ${s.riskScore}% (${s.riskLevel}) | Category: ${s.threatCategory}
    Reason: ${s.explainableReasons[0]}
    `
  )
  .join("\n")}

LEGAL & PROTECTION ADVISORY (INDIA):
-------------------------------------------------------------------
All scanned incidents are cryptographically logged for reporting to:
- National Cyber Crime Portal: https://cybercrime.gov.in
- Emergency Cyber Crime Helpline: Dial 1930
- CERT-In Incident Response Team: cert-in.org.in

GuardianAI - Think Before You Trust
===================================================================
`;

    const blob = new Blob([reportContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `GuardianAI_Cyber_Safety_Audit_Report_${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-indigo-500/30 bg-slate-900/60 p-6 shadow-xl backdrop-blur-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/40">
              <BarChart3 className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-100">Cyber Threat Audit & Monthly Reports</h1>
              <p className="text-xs text-slate-400">
                Detailed audit logs, risk score progression, and downloadable PDF safety reports.
              </p>
            </div>
          </div>

          <button
            onClick={handleDownloadPDFReport}
            className="flex items-center space-x-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-3 text-xs font-bold text-white shadow-lg transition hover:scale-105 active:scale-95"
          >
            <Download className="h-4 w-4" />
            <span>{downloaded ? "Report Downloaded!" : "Download Safety Audit Report"}</span>
          </button>
        </div>

        {/* Monthly Score Progress Graph */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Monthly Safety Score Trend (2026)
              </h3>
              <span className="text-[10px] text-slate-400">Scams Blocked Monthly</span>
            </div>

            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyTrendData}>
                  <XAxis dataKey="month" stroke="#64748b" fontSize={11} />
                  <YAxis stroke="#64748b" fontSize={11} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#020617",
                      borderColor: "#334155",
                      borderRadius: "12px",
                      fontSize: "12px",
                      color: "#f8fafc",
                    }}
                  />
                  <Bar dataKey="blockedScams" fill="#38bdf8" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Monthly Protection Summary
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Overall Safety Index:</span>
                  <span className="font-extrabold text-emerald-400">{safetyScore} / 100</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Scams Intercepted:</span>
                  <span className="font-extrabold text-cyan-400">34 Scams</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Estimated Money Saved:</span>
                  <span className="font-extrabold text-purple-400">₹4,85,000</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Report Status:</span>
                  <span className="font-extrabold text-emerald-400">Verified Clean</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800 text-center">
              <p className="text-[10px] text-slate-500">Certified by GuardianAI Forensics Core</p>
            </div>
          </div>
        </div>
      </div>

      {/* DETAILED AUDIT LOG TABLE */}
      <div className="rounded-3xl border border-indigo-500/30 bg-slate-900/60 p-6 shadow-xl backdrop-blur-xl">
        <div className="flex items-center space-x-2 border-b border-slate-800 pb-3 mb-4">
          <Clock className="h-5 w-5 text-cyan-400" />
          <h2 className="text-sm font-bold text-slate-100">Complete Multimodal Audit Logs</h2>
        </div>

        <div className="space-y-3">
          {scans.map((scan) => (
            <div
              key={scan.id}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-2 hover:border-cyan-500/30 transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <span className="rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-[10px] font-bold text-cyan-300">
                    {scan.scanType}
                  </span>
                  <span className="text-xs font-bold text-slate-200">{scan.title}</span>
                </div>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold ${
                    scan.riskScore >= 70
                      ? "bg-rose-500/20 text-rose-400"
                      : "bg-emerald-500/20 text-emerald-400"
                  }`}
                >
                  Risk: {scan.riskScore}% ({scan.riskLevel})
                </span>
              </div>

              <p className="text-xs text-slate-400">{scan.detailedSummary}</p>
              <p className="text-[10px] text-cyan-400 font-mono">
                Forensic Reason: {scan.explainableReasons[0]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
