export type NavigationTab =
  | "landing"
  | "dashboard"
  | "image"
  | "video"
  | "voice"
  | "email"
  | "sms"
  | "url"
  | "qr"
  | "document"
  | "knowledge"
  | "reports"
  | "family"
  | "badges"
  | "extension"
  | "settings";

export type LanguageCode = "en" | "hi" | "kn" | "ta" | "te" | "mr";

export interface ScanResult {
  id: string;
  scanType: string;
  timestamp: string;
  title: string;
  riskScore: number;
  confidenceScore: number;
  threatCategory: string;
  riskLevel: "Low" | "Medium" | "High" | "Critical";
  explainableReasons: string[];
  detectedIndicators: string[];
  recommendedActions: string[];
  legalContextIndia?: string;
  detailedSummary: string;
  thumbnailUrl?: string;
}

export interface StateScamData {
  state: string;
  code: string;
  scamCount: number;
  topThreat: string;
  riskLevel: "Low" | "Moderate" | "High" | "Severe";
  hotspotCities: string[];
}

export interface ScamNewsItem {
  id: string;
  title: string;
  source: string;
  timeAgo: string;
  category: string;
  impactLevel: "High" | "Critical" | "Warning";
  summary: string;
  advisoryUrl?: string;
}

export interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  avatar: string;
  safetyScore: number;
  status: "Protected" | "Alert Required" | "Scan Pending";
  lastScan: string;
  phone: string;
  recentAlertsCount: number;
}

export interface CyberBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress: number;
  maxProgress: number;
  category: string;
  xpPoints?: number;
}

export interface KnowledgeArticle {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  howItWorks: string[];
  warningSigns: string[];
  safePractices: string[];
  realCaseExample: string;
  legalSections: string;
}
