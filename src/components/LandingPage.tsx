import React, { useState } from "react";
import {
  ShieldCheck,
  Play,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Lock,
  Cpu,
  ScanFace,
  Mic,
  Mail,
  MessageSquare,
  Globe,
  QrCode,
  Bot,
  Flame,
  CheckCircle2,
  FileCheck2,
  X,
  Zap,
} from "lucide-react";
import { NavigationTab, LanguageCode } from "../types";
import { TRANSLATIONS } from "../utils/language";

interface LandingPageProps {
  setActiveTab: (tab: NavigationTab) => void;
  language: LanguageCode;
  onOpenEmergency: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  setActiveTab,
  language,
  onOpenEmergency,
}) => {
  const t = TRANSLATIONS[language];
  const [showDemoModal, setShowDemoModal] = useState(false);

  const features = [
    {
      icon: ScanFace,
      title: t.featImageTitle,
      tab: "image" as NavigationTab,
      desc: t.featImageDesc,
    },
    {
      icon: Mic,
      title: t.featVoiceTitle,
      tab: "voice" as NavigationTab,
      desc: t.featVoiceDesc,
    },
    {
      icon: Mail,
      title: t.featEmailTitle,
      tab: "email" as NavigationTab,
      desc: t.featEmailDesc,
    },
    {
      icon: MessageSquare,
      title: t.featSmsTitle,
      tab: "sms" as NavigationTab,
      desc: t.featSmsDesc,
    },
    {
      icon: QrCode,
      title: t.featQrTitle,
      tab: "qr" as NavigationTab,
      desc: t.featQrDesc,
    },
    {
      icon: Globe,
      title: t.featUrlTitle,
      tab: "url" as NavigationTab,
      desc: t.featUrlDesc,
    },
    {
      icon: Bot,
      title: t.featBotTitle,
      tab: "knowledge" as NavigationTab,
      desc: t.featBotDesc,
    },
    {
      icon: Flame,
      title: t.featEmergencyTitle,
      tab: "dashboard" as NavigationTab,
      desc: t.featEmergencyDesc,
    },
  ];

  const steps = [
    { num: "01", title: t.step01Title, desc: t.step01Desc },
    { num: "02", title: t.step02Title, desc: t.step02Desc },
    { num: "03", title: t.step03Title, desc: t.step03Desc },
    { num: "04", title: t.step04Title, desc: t.step04Desc },
    { num: "05", title: t.step05Title, desc: t.step05Desc },
  ];

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      {/* Subtle Backdrop Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-900/5 blur-[120px]" />

      {/* HERO SECTION */}
      <section className="relative mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 rounded-lg border border-slate-800 bg-slate-900/80 px-4 py-1.5 text-xs font-semibold text-slate-300 shadow-sm">
          <ShieldCheck className="h-4 w-4 text-blue-500" />
          <span>{t.statsTitle}</span>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="block text-slate-100">GuardianAI</span>
          <span className="block mt-2 text-2xl sm:text-4xl font-bold text-blue-400">
            {t.subtitle}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-slate-400 sm:text-lg">
          {t.footerDesc}
        </p>

        <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
          "{t.tagline}"
        </p>

        {/* Hero CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setActiveTab("dashboard")}
            className="group flex items-center space-x-2 rounded-lg bg-blue-600 hover:bg-blue-700 px-8 py-3.5 text-sm font-bold text-white shadow-md transition active:scale-95 cursor-pointer"
          >
            <span>{t.tryButton}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => setShowDemoModal(true)}
            className="flex items-center space-x-2 rounded-lg border border-slate-800 bg-slate-900 px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:bg-slate-855 cursor-pointer"
          >
            <Play className="h-4 w-4 text-slate-400 fill-slate-400" />
            <span>{t.watchDemo}</span>
          </button>
        </div>

        {/* Hero Interactive Preview Card */}
        <div className="mt-14 relative mx-auto max-w-4xl rounded-lg border border-slate-800 bg-slate-900/60 p-4 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs text-slate-400">
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-slate-700" />
              <span className="h-2 w-2 rounded-full bg-slate-700" />
              <span className="h-2 w-2 rounded-full bg-slate-700" />
              <span className="ml-2 font-mono text-[11px] text-slate-400">guardianai.gov.in/threat-detector</span>
            </div>
            <span className="rounded bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-blue-400 border border-blue-500/20">
              {t.previewStandardActive}
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="rounded-lg bg-slate-950 p-4 border border-slate-855">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">{t.previewInput}</p>
              <p className="mt-2 text-xs font-medium text-slate-300">
                {t.previewSampleContent}
              </p>
            </div>

            <div className="rounded-lg bg-slate-950 p-4 border border-red-500/20">
              <p className="text-[10px] uppercase tracking-wider text-red-400 font-semibold">{t.riskScoreLabel}</p>
              <div className="mt-1 flex items-baseline space-x-2">
                <span className="text-3xl font-black text-red-500">96 / 100</span>
                <span className="text-[10px] font-bold text-red-400">CRITICAL</span>
              </div>
              <p className="mt-1 text-[11px] text-slate-500">{t.confidenceLabel}: 99%</p>
            </div>

            <div className="rounded-lg bg-slate-950 p-4 border border-slate-855">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">{t.previewReason}</p>
              <p className="mt-1 text-xs text-slate-400">
                {t.previewAssessment}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM STATISTICS SECTION */}
      <section className="border-y border-slate-855 bg-slate-900/20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-500">{t.statsTitle}</h2>
            <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-100">
              {t.statsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-slate-855 bg-slate-900/40 p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
                <TrendingUp className="h-6 w-6" />
              </div>
              <p className="mt-4 text-3xl font-black text-red-400">{t.stat01Val}</p>
              <p className="mt-1 text-xs font-semibold text-slate-200">{t.stat01Title}</p>
              <p className="mt-2 text-[11px] text-slate-400">
                {t.stat01Desc}
              </p>
            </div>

            <div className="rounded-lg border border-slate-855 bg-slate-900/40 p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <p className="mt-4 text-3xl font-black text-blue-400">{t.stat02Val}</p>
              <p className="mt-1 text-xs font-semibold text-slate-200">{t.stat02Title}</p>
              <p className="mt-2 text-[11px] text-slate-400">
                {t.stat02Desc}
              </p>
            </div>

            <div className="rounded-lg border border-slate-855 bg-slate-900/40 p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-slate-500/10 border border-slate-500/20 text-slate-400">
                <Lock className="h-6 w-6" />
              </div>
              <p className="mt-4 text-3xl font-black text-slate-300">{t.stat03Val}</p>
              <p className="mt-1 text-xs font-semibold text-slate-200">{t.stat03Title}</p>
              <p className="mt-2 text-[11px] text-slate-400">
                {t.stat03Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MULTIMODAL FEATURES GRID */}
      <section className="py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-500">{t.whySuspicious}</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-100 sm:text-4xl">
            {t.dashboardTitle}
          </p>
          <p className="mt-3 text-sm text-slate-400">
            {t.footerCompliance}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(feat.tab)}
                className="group relative flex flex-col text-left rounded-lg border border-slate-855 bg-slate-900/40 p-5 transition-all hover:border-blue-500/30 hover:bg-slate-900 cursor-pointer"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-4 text-sm font-bold text-slate-100 group-hover:text-blue-400 transition">
                  {feat.title}
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed flex-1">{feat.desc}</p>

                <div className="mt-4 flex items-center space-x-1 text-xs font-semibold text-blue-400">
                  <span>{t.tryButton}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS WORKFLOW */}
      <section className="border-t border-slate-855 bg-slate-900/10 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-500">{t.digitalSafetyScore}</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-100">{t.whySuspicious}</p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center rounded-lg border border-slate-855 bg-slate-900/40 p-5"
              >
                <span className="text-2xl font-bold text-blue-500">
                  {step.num}
                </span>
                <h4 className="mt-2 text-sm font-bold text-slate-200">{step.title}</h4>
                <p className="mt-1.5 text-xs text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK SECTION */}
      <section className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">
          {t.footerCompliance}
        </h3>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-350 font-medium">
          <span className="rounded-lg border border-slate-855 bg-slate-900 px-4 py-2.5 shadow-sm">
            React Core Framework
          </span>
          <span className="rounded-lg border border-slate-855 bg-slate-900 px-4 py-2.5 shadow-sm text-blue-400">
            Node.js Secure Pipeline
          </span>
          <span className="rounded-lg border border-slate-855 bg-slate-900 px-4 py-2.5 shadow-sm text-blue-400">
            Gemini Threat Classification Model
          </span>
          <span className="rounded-lg border border-slate-855 bg-slate-900 px-4 py-2.5 shadow-sm">
            Audio Forensics Parser
          </span>
          <span className="rounded-lg border border-slate-855 bg-slate-900 px-4 py-2.5 shadow-sm">
            Error Level Analysis Engine
          </span>
        </div>
      </section>

      {/* DEMO VIDEO MODAL */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <Play className="h-5 w-5 text-blue-500 fill-blue-500" />
                <span>{t.watchDemo}</span>
              </h3>
              <button
                onClick={() => setShowDemoModal(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-slate-100 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 aspect-video w-full rounded-lg bg-slate-950 border border-slate-855 flex flex-col items-center justify-center p-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4">
                <ShieldCheck className="h-10 w-10" />
              </div>
              <h4 className="text-lg font-bold text-slate-100">{t.dashboardTitle}</h4>
              <p className="mt-2 text-xs text-slate-400 max-w-md">
                {t.footerDesc}
              </p>
              <button
                onClick={() => {
                  setShowDemoModal(false);
                  setActiveTab("dashboard");
                }}
                className="mt-6 rounded-lg bg-blue-600 hover:bg-blue-750 px-6 py-2.5 text-xs font-bold text-white shadow-md cursor-pointer"
              >
                {t.tryButton}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
