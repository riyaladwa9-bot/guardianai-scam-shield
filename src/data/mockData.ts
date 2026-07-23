import {
  ScanResult,
  StateScamData,
  ScamNewsItem,
  FamilyMember,
  CyberBadge,
  KnowledgeArticle,
} from "../types";

export const MOCK_RECENT_SCANS: ScanResult[] = [
  {
    id: "scan-001",
    scanType: "Voice Clone Scanner",
    timestamp: "10 minutes ago",
    title: "Incoming WhatsApp Audio from Unknown Number (Uncle Emergency)",
    riskScore: 94,
    confidenceScore: 97,
    threatCategory: "AI Voice Clone Impersonation",
    riskLevel: "Critical",
    explainableReasons: [
      "Spectral analysis reveals zero natural pitch variation (AI voice synthesis index: 0.94)",
      "Background noise matches pre-trained synthetic acoustic room reverb",
      "High psychological stress framing demanding immediate ₹50,000 UPI transfer to hospital account",
      "Sender voice signature differs by 88% from verified contacts audio database",
    ],
    detectedIndicators: [
      "Voice frequency gap > 420Hz",
      "Audio fingerprint: ElevenLabs v2 voice clone pattern",
      "Emergency monetary request detected",
      "UPI VPA: fake.hospital@ybl (Unverified merchant)",
    ],
    recommendedActions: [
      "Do NOT send money or UPI payments.",
      "Call your uncle directly on his regular cellular number.",
      "Report phone number to 1930 Cyber Crime Helpline.",
      "Share voice recording with GuardianAI Family Shield.",
    ],
    legalContextIndia: "Offense under IT Act Section 66D & BNS Section 318(4) for Cheating by Personation.",
    detailedSummary:
      "GuardianAI AI Voice Forensics identified a cloned voice message targeting family trust. The audio contains clear synthetic vocal artifacts and urgent monetary requests.",
  },
  {
    id: "scan-002",
    scanType: "Image Deepfake",
    timestamp: "25 minutes ago",
    title: "Political Video Screenshot / KYC ID Card Verification",
    riskScore: 88,
    confidenceScore: 95,
    threatCategory: "Synthetic AI Facial Deepfake",
    riskLevel: "High",
    explainableReasons: [
      "Error Level Analysis (ELA) highlights unnatural compression mask around jawline and eyes",
      "Pupil corneal light reflections do not match environmental light sources",
      "Sub-surface skin scattering is absent, indicating neural style GAN rendering",
    ],
    detectedIndicators: [
      "Face mesh alignment variance: 14.2%",
      "Generative diffusion noise residual detected",
      "ID Document font distortion near Aadhaar number",
    ],
    recommendedActions: [
      "Do not forward or post on social media.",
      "Reject KYC approval if used for bank account opening.",
      "File report with CERT-In.",
    ],
    legalContextIndia: "Strictly prohibited under Information Technology (Intermediary Guidelines) Rules.",
    detailedSummary:
      "Deepfake detection model detected generative facial swap artifacts. The image has been digitally manipulated.",
  },
  {
    id: "scan-003",
    scanType: "SMS / WhatsApp Scanner",
    timestamp: "1 hour ago",
    title: "Electricity Bill Disconnection Fraud SMS",
    riskScore: 96,
    confidenceScore: 99,
    threatCategory: "Financial SMS Phishing (Smishing)",
    riskLevel: "Critical",
    explainableReasons: [
      "Urgency trigger: Claims power will be cut tonight at 9:30 PM",
      "Unverified mobile number used instead of official state DISCOM sender ID (e.g., AD-BESCOM)",
      "Contains malicious APK link for 'Electricity Bill Payment App'",
    ],
    detectedIndicators: [
      "Sender: +91 98321 00219 (Personal SIM)",
      "Malicious URL domain: power-bill-update.apk.xyz",
      "Known scam pattern in 14 Indian states",
    ],
    recommendedActions: [
      "Never install APK files sent via SMS or WhatsApp.",
      "Pay electricity bills only via official DISCOM portals or trusted apps.",
      "Block number and report as spam on TRAI DND app.",
    ],
    legalContextIndia: "Violation of Telecom Commercial Communications Customer Preference Regulations & IT Act.",
    detailedSummary:
      "Classic electricity disconnection scam designed to steal netbanking credentials or install remote access apps.",
  },
  {
    id: "scan-004",
    scanType: "URL Scanner",
    timestamp: "3 hours ago",
    title: "sbi-netbanking-kyc-update-verify.top",
    riskScore: 98,
    confidenceScore: 99,
    threatCategory: "Typosquatting Banking Phishing Site",
    riskLevel: "Critical",
    explainableReasons: [
      "Domain created only 2 days ago in cheap registrar TLD (.top)",
      "Cloned official State Bank of India login interface with stolen CSS/images",
      "Free Let's Encrypt SSL certificate improperly issued to domain owner in Eastern Europe",
    ],
    detectedIndicators: [
      "Domain age: 48 hours",
      "Hosting IP blacklisted in 8 cyber threat feeds",
      "Form action posts credentials to external unverified IP",
    ],
    recommendedActions: [
      "Do NOT enter username, password, or OTP.",
      "Close browser tab immediately.",
      "Always verify SBI netbanking URL is https://www.onlinesbi.sbi",
    ],
    legalContextIndia: "Subject to domain takedown under NIXI / CERT-In guidelines.",
    detailedSummary:
      "Credential harvester site designed to steal Internet Banking User IDs, Passwords, and OTPs.",
  },
  {
    id: "scan-005",
    scanType: "Email Scanner",
    timestamp: "5 hours ago",
    title: "Income Tax Refund Approval Notification (ITR-V)",
    riskScore: 15,
    confidenceScore: 94,
    threatCategory: "Legitimate Tax Communication",
    riskLevel: "Low",
    explainableReasons: [
      "SPF, DKIM, and DMARC cryptographic email signatures pass completely",
      "Sender email address belongs to official incometax.gov.in domain",
      "No suspicious tracking links or executable attachments present",
    ],
    detectedIndicators: [
      "DKIM Status: PASS (incometax.gov.in)",
      "DMARC: PASS",
      "Domain Reputation: Clean (Trust score 100/100)",
    ],
    recommendedActions: [
      "Email appears safe to view.",
      "Log into official Income Tax e-filing portal to check refund status directly.",
    ],
    legalContextIndia: "Official Government of India communication.",
    detailedSummary:
      "Authentic email notification from Income Tax Department e-filing portal.",
  },
];

export const INDIA_SCAM_HEATMAP: StateScamData[] = [
  {
    state: "Delhi NCR",
    code: "DL",
    scamCount: 42150,
    topThreat: "Digital Arrest & Fake Police Call",
    riskLevel: "Severe",
    hotspotCities: ["New Delhi", "Noida", "Gurugram"],
  },
  {
    state: "Maharashtra",
    code: "MH",
    scamCount: 38900,
    topThreat: "Stock Market & Trading Whatsapp Scam",
    riskLevel: "Severe",
    hotspotCities: ["Mumbai", "Pune", "Nagpur"],
  },
  {
    state: "Karnataka",
    code: "KA",
    scamCount: 31200,
    topThreat: "Part-time Job Telegram / Customs Duty Scam",
    riskLevel: "High",
    hotspotCities: ["Bengaluru", "Mysuru", "Mangaluru"],
  },
  {
    state: "Telangana",
    code: "TS",
    scamCount: 28400,
    topThreat: "AI Voice Clone Relative Emergency",
    riskLevel: "High",
    hotspotCities: ["Hyderabad", "Warangal", "Nizamabad"],
  },
  {
    state: "West Bengal",
    code: "WB",
    scamCount: 26100,
    topThreat: "Fake Customer Care UPI Refund",
    riskLevel: "High",
    hotspotCities: ["Kolkata", "Howrah", "Siliguri"],
  },
  {
    state: "Jharkhand",
    code: "JH",
    scamCount: 22800,
    topThreat: "Smishing & Bank KYC Suspension (Jamtara Ring)",
    riskLevel: "Severe",
    hotspotCities: ["Jamtara", "Ranchi", "Dhanbad"],
  },
  {
    state: "Gujarat",
    code: "GJ",
    scamCount: 19500,
    topThreat: "Fake Crypto & Gold Investment Fraud",
    riskLevel: "Moderate",
    hotspotCities: ["Ahmedabad", "Surat", "Vadodara"],
  },
  {
    state: "Tamil Nadu",
    code: "TN",
    scamCount: 18200,
    topThreat: "Courier Parcel Customs Drug Scam",
    riskLevel: "Moderate",
    hotspotCities: ["Chennai", "Coimbatore", "Madurai"],
  },
];

export const SCAM_NEWS_FEED: ScamNewsItem[] = [
  {
    id: "news-1",
    title: "I4C Alert: Over ₹120 Crore Lost to 'Digital Arrest' Scams Across India in Q2",
    source: "Cyberabad Police & Ministry of Home Affairs",
    timeAgo: "2 hours ago",
    category: "Digital Arrest",
    impactLevel: "Critical",
    summary:
      "Scammers posing as CBI, ED, or TRAI officers conduct fake Skype/WhatsApp video calls wearing police uniforms, threatening victims with bogus drug cases to extort money.",
    advisoryUrl: "https://cybercrime.gov.in",
  },
  {
    id: "news-2",
    title: "New AI Voice Clone Scam Ring Targeting Senior Citizens in Metro Cities",
    source: "CERT-In Cyber Advisory",
    timeAgo: "5 hours ago",
    category: "AI Deepfake Voice",
    impactLevel: "High",
    summary:
      "Frauds clone voices of grandchildren using 5-second Instagram reel clips to trick grandparents into sending urgent bail money.",
  },
  {
    id: "news-3",
    title: "Beware of WhatsApp 'Task Scam' Promising ₹3,000 Daily for Rating Google Maps",
    source: "RBI Financial Literacy Cell",
    timeAgo: "1 day ago",
    category: "Job Fraud",
    impactLevel: "Warning",
    summary:
      "Victims are initially paid ₹200 for small tasks before being lured into crypto deposit schemes where millions are drained.",
  },
  {
    id: "news-4",
    title: "TRAI Orders Disconnection of 1.2 Lakh Unregistered Telemarketer Numbers Used in SMS Scams",
    source: "TRAI Press Information Bureau",
    timeAgo: "2 days ago",
    category: "Smishing Action",
    impactLevel: "Warning",
    summary:
      "Strict enforcement under DND regulations targets SIM swap and fake bank SMS senders.",
  },
];

export const FAMILY_MEMBERS: FamilyMember[] = [
  {
    id: "fam-1",
    name: "Ramesh Sharma (Father)",
    relation: "Father (Age 68)",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    safetyScore: 92,
    status: "Protected",
    lastScan: "Today, 10:15 AM",
    phone: "+91 98450 *****",
    recentAlertsCount: 0,
  },
  {
    id: "fam-2",
    name: "Sunita Sharma (Mother)",
    relation: "Mother (Age 64)",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80",
    safetyScore: 74,
    status: "Alert Required",
    lastScan: "Yesterday, 4:20 PM",
    phone: "+91 98451 *****",
    recentAlertsCount: 2,
  },
  {
    id: "fam-3",
    name: "Aarav Sharma (Son)",
    relation: "Son (Age 19)",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80",
    safetyScore: 88,
    status: "Protected",
    lastScan: "Today, 8:00 AM",
    phone: "+91 98452 *****",
    recentAlertsCount: 0,
  },
];

export const CYBER_BADGES: CyberBadge[] = [
  {
    id: "badge-1",
    title: "Phishing Buster",
    description: "Successfully scanned and reported 5 malicious email phishing links.",
    icon: "ShieldAlert",
    unlocked: true,
    progress: 5,
    maxProgress: 5,
    category: "Phishing",
  },
  {
    id: "badge-2",
    title: "Deepfake Detective",
    description: "Analyzed 3 synthetic video or audio voice clone files.",
    icon: "ScanFace",
    unlocked: true,
    progress: 3,
    maxProgress: 3,
    category: "AI Forensics",
  },
  {
    id: "badge-3",
    title: "Safe UPI Shield",
    description: "Verified 10 QR codes and payment links before transaction.",
    icon: "QrCode",
    unlocked: false,
    progress: 7,
    maxProgress: 10,
    category: "UPI Security",
  },
  {
    id: "badge-4",
    title: "Family Guardian Level 3",
    description: "Protected 3 family members with GuardianAI active monitoring.",
    icon: "Users",
    unlocked: true,
    progress: 3,
    maxProgress: 3,
    category: "Family Protection",
  },
  {
    id: "badge-5",
    title: "Digital Arrest Defeater",
    description: "Completed the AI Knowledge Base module on fake police video calls.",
    icon: "Award",
    unlocked: false,
    progress: 0,
    maxProgress: 1,
    category: "Awareness",
  },
];

export const KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  {
    id: "art-1",
    title: "Digital Arrest Scam (CBI / Police / Customs Video Call Fraud)",
    category: "Video & Call Scam",
    tags: ["Digital Arrest", "CBI Fraud", "Skype Call", "1930 Helpline"],
    description:
      "Scammers call victims on WhatsApp/Skype in police uniform, claiming a parcel containing drugs/illegal passports was seized in their name.",
    howItWorks: [
      "Victim receives an automated call claiming 'TRAI is disconnecting your mobile number in 2 hours'.",
      "Transferred to a bogus 'Police/ED/CBI Officer' on video call in a realistic backdrop room.",
      "Scammer issues a fake warrant and tells victim they are under 'Digital Arrest' and must not end the call.",
      "Demands victim transfer all savings into 'RBI verification accounts' to clear their name.",
    ],
    warningSigns: [
      "Real Indian police/CBI NEVER conduct video calls to arrest anyone or ask for funds.",
      "High emotional pressure, prohibiting you from informing family members or lawyers.",
      "Demands for money transfer to personal bank accounts or unknown UPI VPAs.",
    ],
    safePractices: [
      "Disconnect immediately! No Indian government agency conducts video arrest.",
      "Call 1930 Cyber Crime Helpline right away.",
      "Report phone number and video account handle to cybercrime.gov.in.",
    ],
    realCaseExample:
      "A retired professor in Bengaluru transferred ₹85 Lakhs after 48 hours of continuous video surveillance by fake police officers.",
    legalSections: "IT Act Sec 66D, BNS Sec 318(4) (Cheating by impersonation).",
  },
  {
    id: "art-2",
    title: "Part-Time Telegram Job Scam (Google Maps Rating / YouTube Likes)",
    category: "Job & Earnings Fraud",
    tags: ["Telegram Job", "Part-Time Scam", "Investment Trap", "Crypto"],
    description:
      "Fraudulent recruitment ads on Instagram/WhatsApp offering ₹2,000-₹5,000 per day for liking YouTube videos or reviewing hotels.",
    howItWorks: [
      "Initial task: Like 3 YouTube videos, scammer pays ₹150–₹300 immediately to build trust.",
      "Added to a VIP Telegram group with fake members posting earnings screenshots.",
      "Introduced to 'Prepaid Tasks' or 'Crypto Investment Tasks' requiring deposit of ₹5,000 for ₹8,000 return.",
      "Withdrawal blocked unless victim pays 'tax fees' or 'higher level deposit' up to lakhs.",
    ],
    warningSigns: [
      "Legitimate companies never ask job applicants to pay deposit money.",
      "Recruitment via Telegram or WhatsApp random numbers.",
      "Guaranteed abnormally high returns (e.g. 30% profit in 20 minutes).",
    ],
    safePractices: [
      "Never pay money to get a job or work-from-home task.",
      "Block and report telegram admins.",
    ],
    realCaseExample:
      "A software engineer in Hyderabad lost ₹14 Lakhs after completing 12 rounds of 'VIP Rating Tasks' on a fake portal.",
    legalSections: "IT Act Sec 66C & 66D.",
  },
  {
    id: "art-3",
    title: "Fake Electricity Bill Disconnection SMS",
    category: "SMS & Phishing",
    tags: ["Electricity Bill", "Smishing", "APK Scam", "BESCOM/MSEDCL"],
    description:
      "SMS message claiming electricity supply will be disconnected at 9:30 PM due to unpaid previous month bill.",
    howItWorks: [
      "SMS sent from personal 10-digit number asking victim to call an 'Officer Mobile Number'.",
      "Officer asks victim to download an app (AnyDesk, TeamViewer, or malicious APK) to pay ₹10 update fee.",
      "Scammer gets remote control of phone and drains bank accounts via OTP interception.",
    ],
    warningSigns: [
      "Official DISCOM SMS comes from 6-digit sender IDs (e.g., AD-BESCOM, VM-MSEDCL), never 10-digit mobile numbers.",
      "No electricity board asks users to install remote control apps like AnyDesk.",
    ],
    safePractices: [
      "Pay electricity bills only through official board websites or verified apps (Google Pay, Paytm, PhonePe).",
      "Do not call phone numbers given in suspicious SMS.",
    ],
    realCaseExample:
      "A senior citizen in Pune lost ₹3.5 Lakhs after installing an APK file sent by fake electricity officer.",
    legalSections: "IT Act Sec 66D, TRAI DND Guidelines.",
  },
  {
    id: "art-4",
    title: "Fake UPI QR Code Refund / Collect Request Trap",
    category: "UPI Payment Fraud",
    tags: ["UPI Fraud", "QR Scam", "OLX Scam", "Refund Scam"],
    description:
      "Scammer tricks victim into entering UPI PIN by claiming 'Scan this QR code or enter PIN to RECEIVE payment'.",
    howItWorks: [
      "Scammer poses as buyer on OLX/Facebook Marketplace or customer care executive.",
      "Sends a QR code or UPI Collect request claiming it is to credit money into victim's account.",
      "Victim enters UPI PIN thinking they are receiving money, but funds are debited instantly.",
    ],
    warningSigns: [
      "GOLDEN RULE OF UPI: You NEVER need to enter your UPI PIN or scan a QR code to RECEIVE money.",
      "UPI PIN is required ONLY to SEND/PAY money.",
    ],
    safePractices: [
      "If someone asks you to scan a QR or enter PIN to receive money, IT IS A SCAM.",
      "Immediately report the UPI ID on BHIM / NPCI / PhonePe / Paytm.",
    ],
    realCaseExample:
      "A college student selling an old laptop on OLX entered UPI PIN on a 'Money Received' QR code and lost ₹25,000.",
    legalSections: "NPCI Security Directives & IT Act Sec 66D.",
  },
];
