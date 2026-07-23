import React from "react";
import {
  ShieldAlert,
  ShieldCheck,
  Globe,
  Bell,
  Volume2,
  VolumeX,
  Zap,
  Menu,
  X,
  Activity,
  Flame,
} from "lucide-react";
import { NavigationTab, LanguageCode } from "../types";
import { LANGUAGES, TRANSLATIONS } from "../utils/language";

interface NavbarProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  voiceEnabled: boolean;
  setVoiceEnabled: (val: boolean) => void;
  safetyScore: number;
  onOpenEmergency: () => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  language,
  setLanguage,
  voiceEnabled,
  setVoiceEnabled,
  safetyScore,
  onOpenEmergency,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Mobile Menu + Logo */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-900 lg:hidden"
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <button
            onClick={() => setActiveTab("landing")}
            className="flex items-center space-x-3 text-left focus:outline-none"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/30 bg-slate-900 shadow-sm">
              <ShieldCheck className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold tracking-tight text-slate-100">
                  GuardianAI
                </span>
                <span className="hidden rounded bg-blue-950/60 px-2 py-0.5 text-[10px] font-semibold text-blue-400 sm:inline-block border border-blue-900/30">
                  NATIONAL PORTAL
                </span>
              </div>
              <p className="hidden text-[10px] text-slate-400 md:block">{t.tagline}</p>
            </div>
          </button>
        </div>

        {/* Center: Live Safety Meter */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={() => setActiveTab("dashboard")}
            className="flex items-center space-x-2 rounded-lg border border-slate-850 bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-slate-200 transition hover:bg-slate-850"
          >
            <Activity className="h-4 w-4 text-blue-500" />
            <span>{t.digitalSafetyScore}:</span>
            <span
              className={`rounded px-2 py-0.5 text-xs font-bold ${
                safetyScore >= 80
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  : safetyScore >= 60
                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
              }`}
            >
              {safetyScore} / 100
            </span>
          </button>
        </div>

        {/* Right: Controls & Emergency Button */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Voice Narration Toggle */}
          <button
            onClick={() => setVoiceEnabled(!voiceEnabled)}
            title={voiceEnabled ? "Mute AI Voice Explanation" : "Enable AI Voice Narration"}
            className={`rounded-lg p-2 text-xs transition ${
              voiceEnabled
                ? "bg-blue-600/10 text-blue-400 border border-blue-500/20"
                : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200"
            }`}
          >
            {voiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </button>

          {/* Multilingual Selector */}
          <div className="relative flex items-center">
            <Globe className="pointer-events-none absolute left-2.5 h-3.5 w-3.5 text-slate-400" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as LanguageCode)}
              className="h-9 rounded-lg border border-slate-800 bg-slate-900 pl-8 pr-3 text-xs font-medium text-slate-200 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code} className="bg-slate-900 text-slate-200">
                  {lang.nativeName}
                </option>
              ))}
            </select>
          </div>

          {/* Emergency 1-Click Button */}
          <button
            onClick={onOpenEmergency}
            className="group relative inline-flex items-center space-x-1.5 overflow-hidden rounded-lg bg-red-700 hover:bg-red-650 px-4 py-2.5 text-xs font-bold text-white shadow-sm border border-red-800 transition active:scale-95 cursor-pointer"
          >
            <Flame className="h-4 w-4 text-red-200" />
            <span className="hidden sm:inline">1930 EMERGENCY</span>
            <span className="sm:hidden">1930</span>
          </button>
        </div>
      </div>
    </header>
  );
};
