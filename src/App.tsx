import React, { useState, useEffect } from "react";
import { NavigationTab, LanguageCode, ScanResult } from "./types";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { LandingPage } from "./components/LandingPage";
import { DashboardOverview } from "./components/DashboardOverview";
import { ImageScanner } from "./components/scanners/ImageScanner";
import { VideoScanner } from "./components/scanners/VideoScanner";
import { VoiceScanner } from "./components/scanners/VoiceScanner";
import { EmailScanner } from "./components/scanners/EmailScanner";
import { SmsScanner } from "./components/scanners/SmsScanner";
import { UrlScanner } from "./components/scanners/UrlScanner";
import { QrScanner } from "./components/scanners/QrScanner";
import { DocumentScanner } from "./components/scanners/DocumentScanner";
import { KnowledgeBase } from "./components/KnowledgeBase";
import { ReportsPage } from "./components/ReportsPage";
import { FamilyDashboard } from "./components/FamilyDashboard";
import { BadgesGamification } from "./components/BadgesGamification";
import { ExtensionPreview } from "./components/ExtensionPreview";
import { AiAvatarAssistant } from "./components/AiAvatarAssistant";
import { EmergencyModal } from "./components/EmergencyModal";
import { MOCK_RECENT_SCANS } from "./data/mockData";

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>("landing");
  const [language, setLanguage] = useState<LanguageCode>("en");
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [scans, setScans] = useState<ScanResult[]>(MOCK_RECENT_SCANS);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetch("/api/scans")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.scans) {
          setScans(data.scans);
        }
      })
      .catch((err) => console.error("Error fetching scans from backend:", err));
  }, []);

  const handleAddScan = (newScan: ScanResult) => {
    setScans((prev) => [newScan, ...prev]);
  };

  // Calculate overall Digital Safety Score based on scans
  const highRiskScans = scans.filter((s) => s.riskScore >= 70).length;
  const safetyScore = Math.max(30, 96 - highRiskScans * 4);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950 font-sans antialiased">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
        setLanguage={setLanguage}
        voiceEnabled={voiceEnabled}
        setVoiceEnabled={setVoiceEnabled}
        safetyScore={safetyScore}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="flex flex-1 pt-16">
        {/* Sidebar (shown on app views, hidden on landing page unless user chooses) */}
        {activeTab !== "landing" && (
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            language={language}
            isOpen={isSidebarOpen}
            setIsOpen={setIsSidebarOpen}
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 transition-all duration-300 w-full">
          <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
            {activeTab === "landing" && (
              <LandingPage setActiveTab={setActiveTab} language={language} />
            )}

            {activeTab === "dashboard" && (
              <DashboardOverview
                setActiveTab={setActiveTab}
                language={language}
                scans={scans}
                safetyScore={safetyScore}
                onOpenEmergency={() => setIsEmergencyOpen(true)}
              />
            )}

            {activeTab === "image" && (
              <ImageScanner
                onAddScan={handleAddScan}
                language={language}
                voiceEnabled={voiceEnabled}
              />
            )}

            {activeTab === "video" && (
              <VideoScanner
                onAddScan={handleAddScan}
                language={language}
                voiceEnabled={voiceEnabled}
              />
            )}

            {activeTab === "voice" && (
              <VoiceScanner
                onAddScan={handleAddScan}
                language={language}
                voiceEnabled={voiceEnabled}
              />
            )}

            {activeTab === "email" && (
              <EmailScanner
                onAddScan={handleAddScan}
                language={language}
                voiceEnabled={voiceEnabled}
              />
            )}

            {activeTab === "sms" && (
              <SmsScanner
                onAddScan={handleAddScan}
                language={language}
                voiceEnabled={voiceEnabled}
              />
            )}

            {activeTab === "url" && (
              <UrlScanner
                onAddScan={handleAddScan}
                language={language}
                voiceEnabled={voiceEnabled}
              />
            )}

            {activeTab === "qr" && (
              <QrScanner
                onAddScan={handleAddScan}
                language={language}
                voiceEnabled={voiceEnabled}
              />
            )}

            {activeTab === "document" && (
              <DocumentScanner
                onAddScan={handleAddScan}
                language={language}
                voiceEnabled={voiceEnabled}
              />
            )}

            {activeTab === "knowledge" && <KnowledgeBase language={language} />}

            {activeTab === "reports" && (
              <ReportsPage scans={scans} safetyScore={safetyScore} language={language} />
            )}

            {activeTab === "family" && <FamilyDashboard language={language} />}

            {activeTab === "badges" && <BadgesGamification language={language} />}

            {activeTab === "extension" && <ExtensionPreview language={language} />}
          </div>

          <Footer setActiveTab={setActiveTab} language={language} />
        </main>
      </div>

      {/* Floating Multilingual AI Voice Assistant */}
      <AiAvatarAssistant language={language} voiceEnabled={voiceEnabled} />

      {/* 1-Click Cyber Emergency 1930 Modal */}
      <EmergencyModal
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
      />
    </div>
  );
}
