import React, { useState, useEffect } from "react";
import { Award, CheckCircle2, ShieldCheck, Zap, Lock, HelpCircle } from "lucide-react";
import { LanguageCode } from "../types";

interface BadgesGamificationProps {
  language: LanguageCode;
}

export const BadgesGamification: React.FC<BadgesGamificationProps> = () => {
  const [badges, setBadges] = useState<any[]>([]);
  const [selectedQuizIdx, setSelectedQuizIdx] = useState<number | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  useEffect(() => {
    fetch("/api/badges")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.badges) {
          setBadges(data.badges);
        }
      })
      .catch((err) => console.error("Error loading badges:", err));
  }, []);

  const sampleQuiz = {
    question:
      "You receive a Skype video call from a person in police uniform claiming you are under 'Digital Arrest' for money laundering and demanding ₹1,00,000 via UPI. What should you do?",
    options: [
      "A) Transfer money immediately to avoid arrest.",
      "B) Disconnect the call, know that Digital Arrest is fake, and report to 1930 Helpline.",
      "C) Request a discount on the penalty fee.",
      "D) Send your Aadhaar copy to verify.",
    ],
    correctIdx: 1,
    explanation:
      "Correct! Indian Police, CBI, ED, and IT Department NEVER conduct video call arrests or request money deposits. Disconnect immediately!",
  };

  const handleAnswerSubmit = (idx: number) => {
    setQuizAnswer(idx);
    setQuizSubmitted(true);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-indigo-500/30 bg-slate-900/60 p-6 shadow-xl backdrop-blur-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-100">Cyber Awareness Badges & Achievements</h1>
              <p className="text-xs text-slate-400">
                Level up your digital safety score, earn certificates, and test your scam spotter skills.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 rounded-2xl border border-amber-500/40 bg-slate-950 px-4 py-2">
            <Zap className="h-5 w-5 text-amber-400 animate-bounce" />
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-semibold">User Level</p>
              <p className="text-xs font-black text-amber-300">Level 4: Cyber Sentinel</p>
            </div>
          </div>
        </div>

        {/* Badges Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`rounded-2xl border p-4 space-y-2 transition ${
                badge.unlocked
                  ? "border-amber-500/40 bg-slate-950/80 shadow-lg shadow-amber-950/20"
                  : "border-slate-800 bg-slate-950/40 opacity-60"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
                  <Award className="h-5 w-5" />
                </div>
                {badge.unlocked ? (
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                    Unlocked
                  </span>
                ) : (
                  <Lock className="h-4 w-4 text-slate-600" />
                )}
              </div>
              <h3 className="text-xs font-bold text-slate-100">{badge.title}</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">{badge.description}</p>
              <div className="pt-2 border-t border-slate-900 text-[10px] text-amber-400 font-semibold">
                Reward: +{badge.xpPoints || 100} XP
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INTERACTIVE SCAM SPOTTER QUIZ */}
      <div className="rounded-3xl border border-indigo-500/30 bg-slate-900/60 p-6 shadow-xl backdrop-blur-xl">
        <div className="flex items-center space-x-2 border-b border-slate-800 pb-3 mb-4">
          <HelpCircle className="h-5 w-5 text-cyan-400" />
          <h2 className="text-sm font-bold text-slate-100">Daily Cyber Awareness Challenge</h2>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 space-y-4">
          <p className="text-xs font-bold text-slate-100">{sampleQuiz.question}</p>

          <div className="space-y-2">
            {sampleQuiz.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswerSubmit(idx)}
                className={`w-full rounded-xl border p-3 text-left text-xs transition ${
                  quizAnswer === idx
                    ? idx === sampleQuiz.correctIdx
                      ? "border-emerald-500 bg-emerald-950/30 text-emerald-200"
                      : "border-rose-500 bg-rose-950/30 text-rose-200"
                    : "border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {quizSubmitted && (
            <div
              className={`rounded-xl border p-4 text-xs ${
                quizAnswer === sampleQuiz.correctIdx
                  ? "border-emerald-500/40 bg-emerald-950/20 text-emerald-300"
                  : "border-rose-500/40 bg-rose-950/20 text-rose-300"
              }`}
            >
              <p className="font-bold">
                {quizAnswer === sampleQuiz.correctIdx
                  ? "Correct! +50 XP Earned!"
                  : "Incorrect Answer!"}
              </p>
              <p className="mt-1 text-[11px] text-slate-300">{sampleQuiz.explanation}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
