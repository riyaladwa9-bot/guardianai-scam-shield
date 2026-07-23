import React from "react";
import { ShieldCheck, Github, ExternalLink } from "lucide-react";
import { NavigationTab, LanguageCode } from "../types";
import { TRANSLATIONS } from "../utils/language";

interface FooterProps {
  setActiveTab: (tab: NavigationTab) => void;
  language: LanguageCode;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, language }) => {
  const t = TRANSLATIONS[language];

  return (
    <footer className="border-t border-slate-850 bg-slate-950 px-4 py-8 text-slate-400 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-bold text-slate-100">GuardianAI</span>
            </div>
            <p className="text-xs text-slate-400">
              {t.footerDesc}
            </p>
            <p className="text-[10px] text-blue-400">{t.tagline} • Powered by Gemini AI</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              {t.menuDashboard}
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setActiveTab("image")}
                  className="hover:text-blue-400 transition cursor-pointer"
                >
                  {t.menuImage}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("voice")}
                  className="hover:text-blue-400 transition cursor-pointer"
                >
                  {t.menuVoice}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("sms")}
                  className="hover:text-blue-400 transition cursor-pointer"
                >
                  {t.menuSms}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("qr")}
                  className="hover:text-blue-400 transition cursor-pointer"
                >
                  {t.menuQr}
                </button>
              </li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              {t.legalAdvisory}
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setActiveTab("knowledge")}
                  className="hover:text-blue-400 transition cursor-pointer"
                >
                  {t.menuKnowledge}
                </button>
              </li>
              <li>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-1 hover:text-blue-400 transition cursor-pointer"
                >
                  <span>National Cyber Portal (1930)</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://cert-in.org.in"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-1 hover:text-blue-400 transition cursor-pointer"
                >
                  <span>CERT-In Advisories</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Legal Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              {t.menuSettings}
            </h4>
            <p className="text-xs text-slate-400">
              {t.footerCompliance}
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-slate-900 p-2 text-slate-300 hover:text-blue-400 hover:bg-slate-855 transition"
                aria-label="GitHub Repository"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-900 pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} {t.footerRights}</p>
          <p className="mt-2 sm:mt-0 flex items-center space-x-1">
            <span>{t.footerDevelopedFor}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
