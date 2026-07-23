import React, { useState, useEffect } from "react";
import {
  PieChart as RePieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  ShieldAlert,
  ShieldCheck,
  Activity,
  MapPin,
  Clock,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  FileCheck2,
  ExternalLink,
  Zap,
  Radio,
  Newspaper,
  ChevronRight,
} from "lucide-react";
import { ScanResult, NavigationTab, LanguageCode } from "../types";
import { TRANSLATIONS } from "../utils/language";

interface DashboardOverviewProps {
  setActiveTab: (tab: NavigationTab) => void;
  language: LanguageCode;
  scans: ScanResult[];
  safetyScore: number;
  onOpenEmergency: () => void;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  setActiveTab,
  language,
  scans,
  safetyScore,
  onOpenEmergency,
}) => {
  const t = TRANSLATIONS[language];

  const [heatmap, setHeatmap] = useState<any[]>([]);
  const [selectedState, setSelectedState] = useState<any | null>(null);
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/heatmap")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.heatmap && data.heatmap.length > 0) {
          setHeatmap(data.heatmap);
          setSelectedState(data.heatmap[0]);
        }
      })
      .catch((err) => console.error("Error loading heatmap:", err));

    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.news) {
          setNews(data.news);
        }
      })
      .catch((err) => console.error("Error loading news feed:", err));
  }, []);

  if (!selectedState) {
    return (
      <div className="flex h-64 items-center justify-center text-slate-400">
        Loading Command Center Data...
      </div>
    );
  }

  // Threat Category Data for Recharts (Unified professional palette)
  const threatCategoryData = [
    { name: "Digital Arrest & Police Calls", value: 38, color: "#dc2626" }, // Crimson
    { name: "AI Voice Clone Impersonation", value: 24, color: "#2563eb" }, // Royal Blue
    { name: "SMS Electricity Bill Fraud", value: 18, color: "#d97706" }, // Dark Amber
    { name: "Typosquat Netbanking Links", value: 12, color: "#4f46e5" }, // Indigo
    { name: "Fake UPI QR Collect Traps", value: 8, color: "#059669" }, // Emerald
  ];

  const quickScanButtons = [
    { label: t.menuImage, tab: "image" as NavigationTab },
    { label: t.menuVoice, tab: "voice" as NavigationTab },
    { label: t.menuSms, tab: "sms" as NavigationTab },
    { label: t.menuUrl, tab: "url" as NavigationTab },
    { label: t.menuQr, tab: "qr" as NavigationTab },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* WELCOME BANNER & DIGITAL SAFETY SCORE */}
      <div className="relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 rounded border border-blue-500/20 bg-blue-950/40 px-3 py-1 text-xs font-semibold text-blue-400">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-500" />
              <span>GuardianAI Multimodal Shield Active</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-100">
              {t.dashboardTitle}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400">
              {t.dashboardSub}
            </p>
          </div>

          {/* Safety Score Radial Meter */}
          <div className="flex items-center space-x-4 rounded-lg border border-slate-800 bg-slate-950 p-4 min-w-[220px]">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 border-4 border-emerald-500/80 text-emerald-400">
              <span className="text-xl font-bold">{safetyScore}</span>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-400">{t.digitalSafetyScore}</p>
              <p className="text-sm font-bold text-emerald-450">HIGHLY PROTECTED</p>
              <p className="text-[10px] text-slate-500">0 Active Alerts Detected</p>
            </div>
          </div>
        </div>

        {/* Quick Launch Scanner Bar */}
        <div className="mt-6 border-t border-slate-800 pt-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
            {t.dashboardQuickTitle}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {quickScanButtons.map((btn, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(btn.tab)}
                className="rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 px-3.5 py-2 text-xs font-bold transition hover:bg-blue-600 hover:text-white cursor-pointer"
              >
                + Scan {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* GRID: INDIA HEATMAP & THREAT ANALYTICS PIE CHART */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* INDIA SCAM HEATMAP (7 COLS) */}
        <div className="lg:col-span-7 rounded-lg border border-slate-800 bg-slate-900/40 p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-red-400" />
              <h2 className="text-sm font-bold text-slate-100">{t.liveHotspots}</h2>
            </div>
            <span className="rounded bg-red-500/10 px-2.5 py-0.5 text-[10px] font-bold text-red-400 border border-red-500/20">
              {t.liveHotspotsBadge}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Interactive State Selector List */}
            <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
              {heatmap.map((item) => (
                <button
                  key={item.code}
                  onClick={() => setSelectedState(item)}
                  className={`flex w-full items-center justify-between rounded-lg p-3 text-left text-xs transition ${
                    selectedState.code === item.code
                      ? "border border-blue-500/30 bg-blue-950/20 text-slate-100"
                      : "border border-slate-855 bg-slate-950/60 text-slate-400 hover:bg-slate-900 cursor-pointer"
                  }`}
                >
                  <div>
                    <span className="font-bold text-slate-200">{item.state}</span>
                    <p className="text-[10px] text-slate-500">Primary: {item.topThreat}</p>
                  </div>
                  <span
                    className={`rounded px-2 py-0.5 text-[10px] font-bold ${
                      item.riskLevel === "Severe"
                        ? "bg-red-500/10 text-red-400 border border-red-500/20"
                        : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    }`}
                  >
                    {item.scamCount.toLocaleString()} Cases
                  </span>
                </button>
              ))}
            </div>

            {/* Selected State Detail View Box */}
            <div className="rounded-lg border border-slate-855 bg-slate-950 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {t.regionalProfileTitle}
                  </span>
                  <span className="rounded bg-red-500/10 px-2.5 py-0.5 text-[10px] font-bold text-red-400 border border-red-500/20">
                    Risk: {selectedState.riskLevel}
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-bold text-slate-100">{selectedState.state}</h3>
                <p className="mt-1 text-xs text-red-400 font-semibold">
                  Primary Threat: {selectedState.topThreat}
                </p>
 
                <div className="mt-4 space-y-2 text-xs">
                  <p className="text-slate-400">
                    <span className="text-slate-355 font-bold">{t.totalReportedTitle}:</span>{" "}
                    {selectedState.scamCount.toLocaleString()}
                  </p>
                  <p className="text-slate-400">
                    <span className="text-slate-355 font-bold">{t.hotspotCitiesTitle}:</span>{" "}
                    {selectedState.hotspotCities.join(", ")}
                  </p>
                </div>
              </div>
 
              <div className="mt-4 border-t border-slate-855 pt-3">
                <button
                  onClick={() => setActiveTab("knowledge")}
                  className="flex w-full items-center justify-center space-x-1.5 rounded-lg bg-slate-900 border border-slate-800 py-2 text-xs font-bold text-slate-200 hover:bg-slate-855 cursor-pointer"
                >
                  <span>{t.verifyRegionalButton} {selectedState.state}</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* THREAT ANALYTICS PIE CHART (5 COLS) */}
        <div className="lg:col-span-5 rounded-lg border border-slate-800 bg-slate-900/40 p-6 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-sm font-bold text-slate-100">{t.threatAnalytics}</h2>
            <span className="text-[10px] text-slate-500 font-mono">Q3 India Data</span>
          </div>

          <div className="h-48 w-full my-2">
            <ResponsiveContainer width="100%" height="100%">
              <RePieChart>
                <Pie
                  data={threatCategoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {threatCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#020617",
                    borderColor: "#1e293b",
                    borderRadius: "8px",
                    fontSize: "12px",
                    color: "#f8fafc",
                  }}
                />
              </RePieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-1.5 text-[11px]">
            {threatCategoryData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center space-x-2 truncate">
                  <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: item.color }} />
                  <span className="text-slate-355 truncate">{item.name}</span>
                </div>
                <span className="font-bold text-slate-100">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RECENT SCANS TABLE & ACTIVITY TIMELINE */}
      <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-blue-500" />
            <h2 className="text-sm font-bold text-slate-100">{t.recentScans}</h2>
          </div>
          <button
            onClick={() => setActiveTab("reports")}
            className="text-xs font-semibold text-blue-400 hover:underline flex items-center space-x-1 cursor-pointer"
          >
            <span>{t.recentScansAuditLog}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="border-b border-slate-855 bg-slate-950 text-[10px] uppercase tracking-wider text-slate-400">
              <tr>
                <th className="py-3 px-4">{t.colScanType}</th>
                <th className="py-3 px-4">{t.colContext}</th>
                <th className="py-3 px-4">{t.colCategory}</th>
                <th className="py-3 px-4">{t.colRisk}</th>
                <th className="py-3 px-4">{t.colTime}</th>
                <th className="py-3 px-4 text-right">{t.colAction}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-855">
              {scans.map((scan) => (
                <tr key={scan.id} className="hover:bg-slate-900/50 transition">
                  <td className="py-3 px-4 font-bold text-blue-450">{scan.scanType}</td>
                  <td className="py-3 px-4 max-w-xs truncate text-slate-200">{scan.title}</td>
                  <td className="py-3 px-4 font-medium text-slate-355">{scan.threatCategory}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`rounded px-2.5 py-0.5 text-[10px] font-bold ${
                        scan.riskScore >= 75
                          ? "bg-red-500/10 text-red-400 border border-red-500/20"
                          : scan.riskScore >= 40
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      }`}
                    >
                      {scan.riskScore}% ({scan.riskLevel})
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-450">{scan.timestamp}</td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => setActiveTab("reports")}
                      className="rounded bg-slate-800 px-2.5 py-1 text-[11px] font-semibold text-blue-400 hover:bg-slate-755 cursor-pointer"
                    >
                      {t.inspectButton}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* LIVE SCAM NEWS TICKER */}
      <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-6 shadow-sm">
        <div className="flex items-center space-x-2 border-b border-slate-800 pb-3 mb-4">
          <Newspaper className="h-5 w-5 text-blue-500" />
          <h2 className="text-sm font-bold text-slate-100">{t.advisoryHeader}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {news.map((news) => (
            <div
              key={news.id}
              className="rounded-lg border border-slate-855 bg-slate-950 p-4 space-y-2 hover:border-slate-800 transition animate-fade-in"
            >
              <div className="flex items-center justify-between">
                <span className="rounded bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold text-blue-400">
                  {news.category}
                </span>
                <span className="text-[10px] text-slate-500">{news.timeAgo}</span>
              </div>
              <h3 className="text-xs font-bold text-slate-150">{news.title}</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">{news.summary}</p>
              <p className="text-[10px] font-semibold text-slate-500">Source: {news.source}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
