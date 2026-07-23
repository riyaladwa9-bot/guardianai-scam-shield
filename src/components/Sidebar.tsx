import React from "react";
import {
  LayoutDashboard,
  Image as ImageIcon,
  Video,
  Mic,
  Mail,
  MessageSquare,
  Globe,
  QrCode,
  FileText,
  BookOpen,
  BarChart3,
  Users,
  Award,
  Download,
  Settings,
  Home,
  ShieldCheck,
} from "lucide-react";
import { NavigationTab, LanguageCode } from "../types";
import { TRANSLATIONS } from "../utils/language";

interface SidebarProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  language: LanguageCode;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  language,
  isOpen,
  setIsOpen,
}) => {
  const t = TRANSLATIONS[language];

  const menuItems = [
    { id: "landing" as NavigationTab, label: t.menuLanding, icon: Home },
    { id: "dashboard" as NavigationTab, label: t.menuDashboard, icon: LayoutDashboard },
    { id: "image" as NavigationTab, label: t.menuImage, icon: ImageIcon },
    { id: "video" as NavigationTab, label: t.menuVideo, icon: Video },
    { id: "voice" as NavigationTab, label: t.menuVoice, icon: Mic },
    { id: "email" as NavigationTab, label: t.menuEmail, icon: Mail },
    { id: "sms" as NavigationTab, label: t.menuSms, icon: MessageSquare },
    { id: "url" as NavigationTab, label: t.menuUrl, icon: Globe },
    { id: "qr" as NavigationTab, label: t.menuQr, icon: QrCode },
    { id: "document" as NavigationTab, label: t.menuDocument, icon: FileText },
    { id: "knowledge" as NavigationTab, label: t.menuKnowledge, icon: BookOpen },
    { id: "reports" as NavigationTab, label: t.menuReports, icon: BarChart3 },
    { id: "family" as NavigationTab, label: t.familyShield, icon: Users },
    { id: "badges" as NavigationTab, label: t.menuBadges, icon: Award },
    { id: "extension" as NavigationTab, label: t.menuExtension, icon: ShieldCheck },
    { id: "settings" as NavigationTab, label: t.menuSettings, icon: Settings },
  ];

  const handleSelect = (tab: NavigationTab) => {
    setActiveTab(tab);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-slate-950/80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-16 bottom-0 left-0 z-30 w-64 transform overflow-y-auto border-r border-slate-800 bg-slate-950 p-4 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-4 px-2">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Multimodal Scanners
          </p>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`group flex w-full items-center space-x-3 rounded-lg px-3 py-2.5 text-xs font-medium transition ${
                  isActive
                    ? "bg-blue-600/10 text-blue-400 border border-blue-500/25 shadow-sm font-semibold"
                    : "text-slate-400 hover:bg-slate-900 hover:text-slate-200 border border-transparent"
                }`}
              >
                <Icon
                  className={`h-4 w-4 transition-transform group-hover:scale-105 ${
                    isActive ? "text-blue-500" : "text-slate-400"
                  }`}
                />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Security Compliance Box */}
        <div className="mt-8 rounded-lg border border-slate-800 bg-slate-900/40 p-4 text-center">
          <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/25 text-blue-400">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <p className="mt-2 text-xs font-bold text-slate-200">National Threat Engine</p>
          <p className="mt-1 text-[10px] text-slate-400">Active Monitoring Protocol</p>
        </div>
      </aside>
    </>
  );
};
