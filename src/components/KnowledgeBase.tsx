import React, { useState, useEffect } from "react";
import { BookOpen, Search, ShieldAlert, CheckCircle2, Scale, ChevronDown, ChevronUp } from "lucide-react";
import { LanguageCode } from "../types";

interface KnowledgeBaseProps {
  language: LanguageCode;
}

export const KnowledgeBase: React.FC<KnowledgeBaseProps> = ({ language }) => {
  const [articles, setArticles] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.articles) {
          setArticles(data.articles);
          if (data.articles.length > 0) {
            setExpandedId(data.articles[0].id);
          }
        }
      })
      .catch((err) => console.error("Error loading articles:", err));
  }, []);

  const filteredArticles = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.tags.some((t: string) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-indigo-500/30 bg-slate-900/60 p-6 shadow-xl backdrop-blur-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-100">AI Scam Knowledge Base & Legal Guide</h1>
              <p className="text-xs text-slate-400">
                In-depth intelligence on Indian cyber scams, warning signs, and legal protections.
              </p>
            </div>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search scams (e.g. Digital Arrest, KYC, UPI)..."
              className="w-full rounded-xl border border-slate-800 bg-slate-950 pl-9 pr-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Quick Filter Tags */}
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          {["Digital Arrest", "Telegram Job", "Electricity Bill", "UPI QR Scam", "Voice Clone"].map(
            (tag, idx) => (
              <button
                key={idx}
                onClick={() => setSearchQuery(tag)}
                className="rounded-full bg-slate-950 border border-slate-800 px-3 py-1 text-[11px] font-semibold text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition"
              >
                #{tag}
              </button>
            )
          )}
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="rounded-full bg-rose-500/20 px-3 py-1 text-[11px] font-bold text-rose-300"
            >
              Clear Filter
            </button>
          )}
        </div>
      </div>

      {/* Articles Accordion List */}
      <div className="space-y-4">
        {filteredArticles.map((art) => {
          const isExpanded = expandedId === art.id;
          return (
            <div
              key={art.id}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 shadow-xl overflow-hidden transition"
            >
              <button
                onClick={() => setExpandedId(isExpanded ? null : art.id)}
                className="flex w-full items-center justify-between p-6 text-left hover:bg-slate-800/40 transition"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-[10px] font-bold text-cyan-300 border border-cyan-500/30">
                      {art.category}
                    </span>
                    {art.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] text-slate-500 hidden sm:inline">
                        #{t}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-2 text-base font-bold text-slate-100">{art.title}</h3>
                  <p className="mt-1 text-xs text-slate-400">{art.description}</p>
                </div>
                <div className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-400">
                  {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </div>
              </button>

              {isExpanded && (
                <div className="border-t border-slate-800 bg-slate-950/80 p-6 space-y-6 text-xs text-slate-300">
                  {/* How It Works */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-cyan-400 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                      <ShieldAlert className="h-4 w-4" />
                      <span>How This Scam Works (Step-by-Step)</span>
                    </h4>
                    <ol className="list-decimal list-inside space-y-1.5 pl-1 text-slate-300">
                      {art.howItWorks.map((step, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Warning Signs & Safe Practices */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-rose-500/30 bg-rose-950/20 p-4 space-y-2">
                      <h4 className="font-bold text-rose-400 uppercase tracking-wider text-[11px]">
                        Immediate Warning Signs
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-slate-300">
                        {art.warningSigns.map((w, idx) => (
                          <li key={idx}>{w}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4 space-y-2">
                      <h4 className="font-bold text-emerald-400 uppercase tracking-wider text-[11px]">
                        Safe Practices
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-slate-300">
                        {art.safePractices.map((s, idx) => (
                          <li key={idx}>{s}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Real Case Example & Legal Sections */}
                  <div className="rounded-2xl border border-indigo-500/30 bg-indigo-950/20 p-4 space-y-2">
                    <div className="flex items-center space-x-2 text-indigo-300 font-bold">
                      <Scale className="h-4 w-4" />
                      <span>Indian Legal Protection & Case Study</span>
                    </div>
                    <p className="text-slate-300">
                      <strong>Real Incident:</strong> {art.realCaseExample}
                    </p>
                    <p className="text-slate-400 text-[11px]">
                      <strong>Legal Coverage:</strong> {art.legalSections}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
