import React, { useState, useEffect } from "react";
import { Users, ShieldCheck, AlertCircle, PhoneCall, Plus, CheckCircle2, Radio } from "lucide-react";
import { LanguageCode } from "../types";

interface FamilyDashboardProps {
  language: LanguageCode;
}

export const FamilyDashboard: React.FC<FamilyDashboardProps> = ({ language }) => {
  const [members, setMembers] = useState<any[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newName, setNewName] = useState("");
  const [newRelation, setNewRelation] = useState("");
  const [alertSent, setAlertSent] = useState(false);

  useEffect(() => {
    fetch("/api/family")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.family) {
          setMembers(data.family);
        }
      })
      .catch((err) => console.error("Error loading family members:", err));
  }, []);

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    setMembers((prev) => [
      ...prev,
      {
        id: "fam-" + Date.now(),
        name: newName,
        relation: newRelation || "Relative",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
        safetyScore: 90,
        status: "Protected",
        lastScan: "Just now",
        phone: "+91 98*** *****",
        recentAlertsCount: 0,
      },
    ]);
    setNewName("");
    setNewRelation("");
    setShowAddModal(false);
  };

  const handleBroadcastAlert = () => {
    setAlertSent(true);
    setTimeout(() => setAlertSent(false), 4000);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-indigo-500/30 bg-slate-900/60 p-6 shadow-xl backdrop-blur-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-100">Family Protection Shield</h1>
              <p className="text-xs text-slate-400">
                Protect elderly parents and relatives from AI voice clones and digital arrest scams.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleBroadcastAlert}
              className="flex items-center space-x-2 rounded-xl bg-gradient-to-r from-amber-600 to-rose-600 px-4 py-2.5 text-xs font-bold text-white shadow-md hover:from-amber-500 hover:to-rose-500 transition"
            >
              <Radio className="h-4 w-4 animate-pulse" />
              <span>{alertSent ? "Emergency Broadcast Sent!" : "Broadcast Family Advisory"}</span>
            </button>

            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center space-x-1.5 rounded-xl bg-slate-800 border border-slate-700 px-3.5 py-2.5 text-xs font-bold text-cyan-300 hover:bg-slate-700"
            >
              <Plus className="h-4 w-4" />
              <span>Add Relative</span>
            </button>
          </div>
        </div>

        {/* Family Members Cards Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {members.map((fam) => (
            <div
              key={fam.id}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-5 space-y-4 hover:border-indigo-500/40 transition"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={fam.avatar}
                  alt={fam.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-indigo-500/40"
                />
                <div>
                  <h3 className="text-sm font-bold text-slate-100">{fam.name}</h3>
                  <p className="text-[11px] text-slate-400">{fam.relation}</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-y border-slate-900 py-3 text-xs">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">Safety Score</p>
                  <p
                    className={`font-black text-sm ${
                      fam.safetyScore >= 80 ? "text-emerald-400" : "text-amber-400"
                    }`}
                  >
                    {fam.safetyScore} / 100
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">Status</p>
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                      fam.status === "Protected"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-amber-500/20 text-amber-400"
                    }`}
                  >
                    {fam.status}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>Last Scan: {fam.lastScan}</span>
                <a
                  href={`tel:${fam.phone}`}
                  className="flex items-center space-x-1 font-semibold text-cyan-400 hover:underline"
                >
                  <PhoneCall className="h-3 w-3" />
                  <span>Call Directly</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Relative Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md">
          <form
            onSubmit={handleAddMember}
            className="w-full max-w-md rounded-3xl border border-indigo-500/40 bg-slate-900 p-6 space-y-4 shadow-2xl"
          >
            <h3 className="text-base font-bold text-slate-100">Add Family Member to Shield</h3>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Relative Full Name</label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="e.g. Ramesh Sharma"
                required
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-100 focus:border-cyan-500 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Relationship / Age</label>
              <input
                type="text"
                value={newRelation}
                onChange={(e) => setNewRelation(e.target.value)}
                placeholder="e.g. Father (Age 68)"
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-100 focus:border-cyan-500 focus:outline-none"
              />
            </div>

            <div className="flex space-x-2 pt-2">
              <button
                type="submit"
                className="flex-1 rounded-xl bg-cyan-600 py-2.5 text-xs font-bold text-white shadow-md hover:bg-cyan-500"
              >
                Add to Protection
              </button>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs text-slate-400 hover:bg-slate-800"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
