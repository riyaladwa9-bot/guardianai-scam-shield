import { LanguageCode } from "../types";

export interface Translation {
  appName: string;
  tagline: string;
  subtitle: string;
  tryButton: string;
  watchDemo: string;
  dashboardTitle: string;
  digitalSafetyScore: string;
  recentScans: string;
  threatAnalytics: string;
  emergencyReport: string;
  scanNow: string;
  riskScoreLabel: string;
  confidenceLabel: string;
  whySuspicious: string;
  safetyActions: string;
  familyShield: string;
  liveHotspots: string;
  legalAdvisory: string;
  knowledgeBase: string;

  // Sidebar Menu Items
  menuLanding: string;
  menuDashboard: string;
  menuImage: string;
  menuVideo: string;
  menuVoice: string;
  menuEmail: string;
  menuSms: string;
  menuUrl: string;
  menuQr: string;
  menuDocument: string;
  menuKnowledge: string;
  menuReports: string;
  menuBadges: string;
  menuExtension: string;
  menuSettings: string;

  // Scanner Details
  titleImage: string;
  descImage: string;
  titleVideo: string;
  descVideo: string;
  titleVoice: string;
  descVoice: string;
  titleEmail: string;
  descEmail: string;
  titleSms: string;
  descSms: string;
  titleUrl: string;
  descUrl: string;
  titleQr: string;
  descQr: string;
  titleDocument: string;
  descDocument: string;

  // Feature Titles & Descriptions (Landing Page)
  featImageTitle: string;
  featImageDesc: string;
  featVoiceTitle: string;
  featVoiceDesc: string;
  featEmailTitle: string;
  featEmailDesc: string;
  featSmsTitle: string;
  featSmsDesc: string;
  featQrTitle: string;
  featQrDesc: string;
  featUrlTitle: string;
  featUrlDesc: string;
  featBotTitle: string;
  featBotDesc: string;
  featEmergencyTitle: string;
  featEmergencyDesc: string;

  // Workflow Steps
  step01Title: string;
  step01Desc: string;
  step02Title: string;
  step02Desc: string;
  step03Title: string;
  step03Desc: string;
  step04Title: string;
  step04Desc: string;
  step05Title: string;
  step05Desc: string;

  // Hero Interactive Preview Card
  previewInput: string;
  previewRisk: string;
  previewReason: string;
  previewAssessment: string;
  previewStandardActive: string;
  previewSampleContent: string;

  // Problem Statistics Section
  statsTitle: string;
  statsSubtitle: string;
  stat01Val: string;
  stat01Title: string;
  stat01Desc: string;
  stat02Val: string;
  stat02Title: string;
  stat02Desc: string;
  stat03Val: string;
  stat03Title: string;
  stat03Desc: string;

  // Footer & Dashboard labels
  footerDesc: string;
  footerCompliance: string;
  footerRights: string;
  footerDevelopedFor: string;
  dashboardSub: string;
  dashboardQuickTitle: string;
  liveHotspotsBadge: string;
  regionalProfileTitle: string;
  totalReportedTitle: string;
  hotspotCitiesTitle: string;
  verifyRegionalButton: string;
  recentScansAuditLog: string;
  advisoryHeader: string;
  inspectButton: string;
  
  // Table Columns
  colScanType: string;
  colContext: string;
  colCategory: string;
  colRisk: string;
  colTime: string;
  colAction: string;
}

export const LANGUAGES: { code: LanguageCode; name: string; nativeName: string }[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिंदी" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
];

export const TRANSLATIONS: Record<LanguageCode, Translation> = {
  en: {
    appName: "GuardianAI",
    tagline: "Think Before You Trust",
    subtitle: "India's Multimodal AI Scam Detection Platform",
    tryButton: "Try GuardianAI",
    watchDemo: "Watch Live Demo",
    dashboardTitle: "AI Cyber Defense Command Center",
    digitalSafetyScore: "Digital Safety Score",
    recentScans: "Recent Multimodal Scans",
    threatAnalytics: "Scam Threat Distribution",
    emergencyReport: "1-Click Cyber Emergency (1930)",
    scanNow: "Analyze with Gemini AI",
    riskScoreLabel: "AI Scam Risk Score",
    confidenceLabel: "Forensic Confidence",
    whySuspicious: "Why Is This Suspicious? (Explainable AI)",
    safetyActions: "Recommended Safety Action Plan",
    familyShield: "Family Protection Shield",
    liveHotspots: "Live India Cyber Threat Heatmap",
    legalAdvisory: "Indian IT Act & Legal Protection",
    knowledgeBase: "Scam Intelligence Archives",

    menuLanding: "Landing Page",
    menuDashboard: "Overview Dashboard",
    menuImage: "Image Deepfake Scanner",
    menuVideo: "Video Deepfake Scanner",
    menuVoice: "Voice Clone Scanner",
    menuEmail: "Email Phishing Scanner",
    menuSms: "SMS / WhatsApp Scanner",
    menuUrl: "URL & Website Scanner",
    menuQr: "QR Payment Scanner",
    menuDocument: "Document Forgery Scanner",
    menuKnowledge: "AI Knowledge Base",
    menuReports: "Threat Reports & Audit",
    menuBadges: "Awareness & Badges",
    menuExtension: "Browser Extension",
    menuSettings: "Settings",

    titleImage: "AI Image Deepfake & ELA Forensic Scanner",
    descImage: "Detect facial variations, color disparities, and error level compression artifacts.",
    titleVideo: "AI Video Deepfake & Digital Arrest Detector",
    descVideo: "Verify video streams against generative models, facial mesh shifting, and lighting anomalies.",
    titleVoice: "AI Voice Clone & Audio Spectrogram Scanner",
    descVoice: "Analyze voice recordings to identify ElevenLabs patterns, frequency gaps, and synthetic elements.",
    titleEmail: "Email Phishing & Domain Cryptographic Scanner",
    descEmail: "Validate SPF, DKIM, and ITR refund credentials to shield against bank fraud mail.",
    titleSms: "SMS & WhatsApp Fraud Detector",
    descSms: "Verify suspicious electricity bill, Telegram job offers, and APK smishing texts.",
    titleUrl: "URL & TypoSquatting Domain Checker",
    descUrl: "Determine domain registration age, certificate validity, and netbanking clone pages.",
    titleQr: "UPI QR Code & Merchant Payment Safety Scanner",
    descQr: "Scan QR codes or transaction links to identify UPI debit requests.",
    titleDocument: "Document Forgery & PDF Scanner",
    descDocument: "Verify Aadhaar cards, bank details, and digital signatures against tampering.",

    featImageTitle: "AI Deepfake Detection",
    featImageDesc: "Forensic analysis of facial mesh alignment, error level compression (ELA), and synthetic neural textures.",
    featVoiceTitle: "Voice Clone Detection",
    featVoiceDesc: "Detect cloned voice recordings of relatives requesting emergency money using audio frequency spectrographs.",
    featEmailTitle: "Email Phishing Scanner",
    featEmailDesc: "Cryptographic validation of DKIM/SPF headers and AI detection of credential theft phishing language.",
    featSmsTitle: "SMS & WhatsApp Fraud",
    featSmsDesc: "Identify electricity bill disconnection scams, fake Telegram job offers, and lottery/OTP traps.",
    featQrTitle: "UPI QR Payment Safety",
    featQrDesc: "Scan merchant UPI QR codes to prevent money-debited collect request traps before entering PINs.",
    featUrlTitle: "URL & Website Checker",
    featUrlDesc: "Check domain age, SSL validity, and typosquatting domain impersonations of major Indian banks.",
    featBotTitle: "AI Chat Assistant",
    featBotDesc: "Interactive assistant offering explainable AI advice and legal protection under Indian IT Act.",
    featEmergencyTitle: "1-Click Cyber Emergency",
    featEmergencyDesc: "Instant reporting trigger to 1930 Cyber Crime Helpline with auto-generated evidence audit package.",

    step01Title: "Upload Content",
    step01Desc: "Submit image, audio, video, link, SMS, or PDF file",
    step02Title: "AI Analysis",
    step02Desc: "Gemini 3.6 Flash multimodal forensic inspection",
    step03Title: "Risk Score",
    step03Desc: "Instant 0–100 threat score & confidence percentage",
    step04Title: "Explainable AI",
    step04Desc: "Clear reasons detailing WHY it is suspicious",
    step05Title: "Safety Action Plan",
    step05Desc: "Actionable steps to protect funds & report scam",

    previewInput: "Threat Indicator",
    previewRisk: "AI Threat Level",
    previewReason: "Technical Assessment",
    previewAssessment: "Unauthorized 10-digit sender routing + remote control package distribution payload (Smishing).",
    previewStandardActive: "Security Standard V3 Active",
    previewSampleContent: "\"Electricity supply will be disconnected at 9:30 PM. Download verification portal: power-discom.apk\"",

    statsTitle: "Threat Intelligence Briefing",
    statsSubtitle: "Scale of National Cyber Crime & Fraud",
    stat01Val: "₹1,000+ Crores",
    stat01Title: "Lost to Scams Annually",
    stat01Desc: "Financial drain from digital arrests, customs impersonation, and fraudulent investments.",
    stat02Val: "400%+ Increase",
    stat02Title: "AI Deepfake Scams",
    stat02Desc: "Growth of synthesized audio and video impersonation attacks targeting general public.",
    stat03Val: "50 Million+",
    stat03Title: "Citizens Targeted",
    stat03Desc: "Continuous smishing, QR code routing traps, and WhatsApp investment group activities.",

    footerDesc: "National Multimodal AI Scam Detection Platform. Protecting citizens from deepfakes, voice clones, phishing, and financial fraud.",
    footerCompliance: "Certified threat intelligence frameworks under national cybersecurity guidelines.",
    footerRights: "GuardianAI India. All rights reserved.",
    footerDevelopedFor: "Developed for National Cyber Security Awareness",

    dashboardSub: "Real-time Threat Intelligence Pipeline • Standardized Risk Assessment Engine",
    dashboardQuickTitle: "Quick Launch Forensic Scanner",
    liveHotspotsBadge: "NATIONAL ADVISORY REPORT",
    regionalProfileTitle: "Regional Profile",
    totalReportedTitle: "Total Reported Scams",
    hotspotCitiesTitle: "Hotspot Cities",
    verifyRegionalButton: "Verify Local Protections in",
    recentScansAuditLog: "View Full Audit Log",
    advisoryHeader: "Live Advisories & Public Bulletins",
    inspectButton: "Inspect",
    
    colScanType: "Scan Type",
    colContext: "Title / Context",
    colCategory: "Threat Category",
    colRisk: "Risk Score",
    colTime: "Timestamp",
    colAction: "Action"
  },
  hi: {
    appName: "गार्डियन एआई",
    tagline: "विश्वास करने से पहले सोचें",
    subtitle: "भारत का बहु-आयामी एआई घोटाला निवारण मंच",
    tryButton: "गार्डियन एआई आजमाएं",
    watchDemo: "डेमो देखें",
    dashboardTitle: "एआई साइबर सुरक्षा डैशबोर्ड",
    digitalSafetyScore: "डिजिटल सुरक्षा स्कोर",
    recentScans: "हाल की जांच विवरण",
    threatAnalytics: "घोटाला खतरा विश्लेषण",
    emergencyReport: "1930 साइबर आपातकालीन हेल्पलाइन",
    scanNow: "एआई द्वारा जांच करें",
    riskScoreLabel: "घोटाला जोखिम स्कोर",
    confidenceLabel: "फॉरेंसिक सटीकता",
    whySuspicious: "यह संदिग्ध क्यों है? (व्याख्यात्मक एआई)",
    safetyActions: "सुरक्षा सुझाव एवं कदम",
    familyShield: "परिवार सुरक्षा कवच",
    liveHotspots: "भारत लाइव साइबर खतरा नक्शा",
    legalAdvisory: "भारतीय आईटी अधिनियम सुरक्षा",
    knowledgeBase: "स्कैम ज्ञान केंद्र",

    menuLanding: "मुख्य पृष्ठ",
    menuDashboard: "सुरक्षा डैशबोर्ड",
    menuImage: "छवि डीपफेक स्कैनर",
    menuVideo: "वीडियो डीपफेक स्कैनर",
    menuVoice: "आवाज क्लोन स्कैनर",
    menuEmail: "ईमेल फ़िशिंग स्कैनर",
    menuSms: "एसएमएस / व्हाट्सएप स्कैनर",
    menuUrl: "यूआरएल और वेबसाइट स्कैनर",
    menuQr: "क्यूआर भुगतान स्कैनर",
    menuDocument: "दस्तावेज़ जालसाजी स्कैनर",
    menuKnowledge: "एआई ज्ञान केंद्र",
    menuReports: "खतरा रिपोर्ट और ऑडिट",
    menuBadges: "जागरूकता और बैज",
    menuExtension: "ब्राउज़र एक्सटेंशन",
    menuSettings: "सेटिंग्स",

    titleImage: "एआई छवि डीपफेक और ईएलए फोरेंसिक स्कैनर",
    descImage: "चेहरे की भिन्नताओं, रंग असमानताओं और त्रुटि स्तर संपीड़न कलाकृतियों का पता लगाएं।",
    titleVideo: "एआई वीडियो डीपफेक और डिजिटल अरेस्ट डिटेक्टर",
    descVideo: "उत्पादक मॉडल, चेहरे के मेश स्थानांतरण और प्रकाश विसंगतियों के खिलाफ वीडियो स्ट्रीम सत्यापित करें।",
    titleVoice: "एआई वॉयस क्लोन और ऑडियो स्पेक्ट्रोग्राम स्कैनर",
    descVoice: "ग्यारह लैब्स पैटर्न, आवृत्ति अंतराल और सिंथेटिक तत्वों की पहचान करने के लिए वॉयस रिकॉर्डिंग का विश्लेषण करें।",
    titleEmail: "ईमेल फ़िशिंग और डोमेन क्रिप्टोग्राफिक स्कैनर",
    descEmail: "बैंक धोखाधड़ी मेल से बचने के लिए एसपीएफ, डीकेआईएम और आईटीआर रिफंड क्रेडेंशियल मान्य करें।",
    titleSms: "एसएमएस और व्हाट्सएप धोखाधड़ी डिटेक्टर",
    descSms: "संदिग्ध बिजली बिल, टेलीग्राम नौकरी के प्रस्तावों और एपीके स्मिषिंग ग्रंथों को सत्यापित करें।",
    titleUrl: "यूआरएल और टाइपोस्कैटिंग डोमेन चेकर",
    descUrl: "डोमेन पंजीकरण आयु, प्रमाण पत्र की वैधता और नेटबैंकिंग क्लोन पृष्ठों का निर्धारण करें।",
    titleQr: "यूपीआई क्यूआर कोड और मर्चेंट भुगतान सुरक्षा स्कैनर",
    descQr: "यूपीआई डेबिट अनुरोधों की पहचान करने के लिए क्यूआर कोड या लेनदेन लिंक स्कैन करें।",
    titleDocument: "दस्तावेज़ जालसाजी और पीडीएफ स्कैनर",
    descDocument: "छेड़छाड़ के खिलाफ आधार कार्ड, बैंक विवरण और डिजिटल हस्ताक्षर सत्यापित करें।",

    featImageTitle: "एआई डीपफेक पहचान",
    featImageDesc: "चेहरे के मेश संरेखण, त्रुटि स्तर संपीड़न (ईएलए), और सिंथेटिक तंत्रिका बनावट का फोरेंसिक विश्लेषण।",
    featVoiceTitle: "वॉयस क्लोन पहचान",
    featVoiceDesc: "ऑडियो आवृत्ति स्पेक्ट्रोग्राफ का उपयोग करके आपातकालीन धन का अनुरोध करने वाले रिश्तेदारों की क्लोन की गई वॉयस रिकॉर्डिंग का पता लगाएं।",
    featEmailTitle: "ईमेल फ़िशिंग स्कैनर",
    featEmailDesc: "डीकेआईएम/एसपीएफ हेडर का क्रिप्टोग्राफिक सत्यापन और क्रेडेंशियल चोरी फ़िशिंग भाषा का एआई द्वारा पता लगाना।",
    featSmsTitle: "एसएमएस और व्हाट्सएप धोखाधड़ी",
    featSmsDesc: "बिजली बिल डिस्कनेक्शन घोटाले, फर्जी टेलीग्राम नौकरी के प्रस्तावों और लॉटरी/ओटीपी जाल की पहचान करें।",
    featQrTitle: "यूपीआई क्यूआर भुगतान सुरक्षा",
    featQrDesc: "पिन दर्ज करने से पहले पैसे डेबिट करने वाले अनुरोध जाल को रोकने के लिए मर्चेंट यूपीआई क्यूआर कोड को स्कैन करें।",
    featUrlTitle: "यूआरएल और वेबसाइट चेकर",
    featUrlDesc: "प्रमुख भारतीय बैंकों के डोमेन की आयु, एसएसएल वैधता और टाइपोस्कैटिंग डोमेन प्रतिरूपण की जांच करें।",
    featBotTitle: "एआई चैट सहायक",
    featBotDesc: "भारतीय आईटी अधिनियम के तहत व्याख्यात्मक एआई सलाह और कानूनी सुरक्षा प्रदान करने वाला इंटरैक्टिव सहायक।",
    featEmergencyTitle: "1-क्लिक साइबर आपातकाल",
    featEmergencyDesc: "ऑटो-जेनरेटेड साक्ष्य ऑडिट पैकेज के साथ 1930 साइबर अपराध हेल्पलाइन को त्वरित रिपोर्टिंग ट्रिगर।",

    step01Title: "सामग्री अपलोड करें",
    step01Desc: "छवि, ऑडियो, वीडियो, लिंक, एसएमएस या पीडीएफ फाइल सबमिट करें",
    step02Title: "एआई विश्लेषण",
    step02Desc: "जेमिनी 3.6 फ्लैश बहु-आयामी फोरेंसिक निरीक्षण",
    step03Title: "जोखिम स्कोर",
    step03Desc: "तत्काल 0-100 खतरा स्कोर और आत्मविश्वास प्रतिशत",
    step04Title: "व्याख्यात्मक एआई",
    step04Desc: "यह संदिग्ध क्यों है, इसका विस्तृत विवरण",
    step05Title: "सुरक्षा कार्य योजना",
    step05Desc: "धन की रक्षा करने और घोटाले की रिपोर्ट करने के लिए व्यावहारिक कदम",

    previewInput: "खतरे का संकेत",
    previewRisk: "एआई खतरा स्तर",
    previewReason: "तकनीकी मूल्यांकन",
    previewAssessment: "अनधिकृत 10-अंकीय प्रेषक रूटिंग + रिमोट कंट्रोल पैकेज वितरण पेलोड (स्मिषिंग)।",
    previewStandardActive: "सुरक्षा मानक V3 सक्रिय",
    previewSampleContent: "\"बिजली की आपूर्ति आज रात 9:30 बजे काट दी जाएगी। सत्यापन पोर्टल डाउनलोड करें: power-discom.apk\"",

    statsTitle: "खतरा खुफिया ब्रीफिंग",
    statsSubtitle: "राष्ट्रीय साइबर अपराध और धोखाधड़ी का पैमाना",
    stat01Val: "₹1,000+ करोड़",
    stat01Title: "सालाना घोटालों में नुकसान",
    stat01Desc: "डिजिटल गिरफ्तारी, सीमा शुल्क प्रतिरूपण और धोखाधड़ी वाले निवेश से वित्तीय नुकसान।",
    stat02Val: "400%+ वृद्धि",
    stat02Title: "एआई डीपफेक घोटाले",
    stat02Desc: "आम जनता को लक्षित करने वाले सिंथेटिक ऑडियो और वीडियो प्रतिरूपण हमलों में वृद्धि।",
    stat03Val: "50 मिलियन से अधिक",
    stat03Title: "नागरिक लक्षित",
    stat03Desc: "लगातार स्मिषिंग, क्यूआर कोड रूटिंग जाल और व्हाट्सएप निवेश समूह की गतिविधियां।",

    footerDesc: "राष्ट्रीय बहु-आयामी एआई घोटाला निवारण मंच। नागरिकों को डीपफेक, वॉयस क्लोन, फ़िशिंग और वित्तीय धोखाधड़ी से बचाना।",
    footerCompliance: "राष्ट्रीय साइबर सुरक्षा दिशानिर्देशों के तहत प्रमाणित खतरा खुफिया ढांचे।",
    footerRights: "गार्डियन एआई भारत। सर्वाधिकार सुरक्षित।",
    footerDevelopedFor: "राष्ट्रीय साइबर सुरक्षा जागरूकता के लिए विकसित",

    dashboardSub: "वास्तविक समय खतरा खुफिया पाइपलाइन • मानकीकृत जोखिम मूल्यांकन इंजन",
    dashboardQuickTitle: "त्वरित फोरेंसिक स्कैनर",
    liveHotspotsBadge: "राष्ट्रीय सलाहकार रिपोर्ट",
    regionalProfileTitle: "क्षेत्रीय प्रोफ़ाइल",
    totalReportedTitle: "कुल रिपोर्ट किए गए घोटाले",
    hotspotCitiesTitle: "हॉटस्पॉट शहर",
    verifyRegionalButton: "क्षेत्रीय सुरक्षा सत्यापित करें",
    recentScansAuditLog: "पूर्ण ऑडिट लॉग देखें",
    advisoryHeader: "लाइव एडवाइजरी और सार्वजनिक बुलेटिन",
    inspectButton: "निरीक्षण करें",
    
    colScanType: "जांच का प्रकार",
    colContext: "शीर्षक / संदर्भ",
    colCategory: "खतरा श्रेणी",
    colRisk: "जोखिम स्कोर",
    colTime: "समय",
    colAction: "कार्रवाई"
  },
  kn: {
    appName: "ಗಾರ್ಡಿಯನ್ AI",
    tagline: "ನಂಬುವ ಮೊದಲು ಯೋಚಿಸಿ",
    subtitle: "ಭಾರತದ ಬಹುಮಾಧ್ಯಮ AI ವಂಚನೆ ಪತ್ತೆ ವೇದಿಕೆ",
    tryButton: "ಗಾರ್ಡಿಯನ್ AI ಬಳಸಿ",
    watchDemo: "ಡೆಮೊ ವೀಕ್ಷಿಸಿ",
    dashboardTitle: "AI ಸೈಬರ್ ರಕ್ಷಣಾ ಕಮಾಂಡ್ ಸೆಂಟರ್",
    digitalSafetyScore: "ಡಿಜಿಟಲ್ ಸುರಕ್ಷತಾ ಸ್ಕೋರ್",
    recentScans: "ಇತ್ತೀಚಿನ ಪರಿಶೀಲನೆಗಳು",
    threatAnalytics: "ವಂಚನೆ ವಿಶ್ಲೇಷಣೆ",
    emergencyReport: "1930 ಸೈಬರ್ ಸಹಾಯವಾಣಿ",
    scanNow: "AI ಯಿಂದ ಪರಿಶೀಲಿಸಿ",
    riskScoreLabel: "ವಂಚನೆಯ ಅಪಾಯದ ಸ್ಕೋರ್",
    confidenceLabel: "ಫೋರೆನ್ಸಿಕ್ ನಿಖರತೆ",
    whySuspicious: "ಇದು ಏಕೆ ಅನುಮಾನಾಸ್ಪದವಾಗಿದೆ? (ವಿವರಣಾತ್ಮಕ AI)",
    safetyActions: "ಸುರಕ್ಷತಾ ಕ್ರಮಗಳು",
    familyShield: "ಕುಟುಂಬದ ರಕ್ಷಾ ಕವಚ",
    liveHotspots: "ಲೈವ್ ಭಾರತ ಸೈಬರ್ ಬೆದರಿಕೆ ನಕ್ಷೆ",
    legalAdvisory: "ಭಾರತೀಯ IT ಕಾಯ್ದೆ ರಕ್ಷಣೆ",
    knowledgeBase: "ವಂಚನೆ ಜ್ಞಾನ ಭಂಡಾರ",

    menuLanding: "ಮುಖಪುಟ",
    menuDashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    menuImage: "ಚಿತ್ರದ ಡೀಪ್‌ಫೇಕ್ ಸ್ಕ್ಯಾನರ್",
    menuVideo: "ವಿಡಿಯೋ ಡೀಪ್‌ಫೇಕ್ ಸ್ಕ್ಯಾನರ್",
    menuVoice: "ಧ್ವನಿ ಕ್ಲೋನ್ ಸ್ಕ್ಯಾನರ್",
    menuEmail: "ಇಮೇಲ್ ಫಿಶಿಂಗ್ ಸ್ಕ್ಯಾನರ್",
    menuSms: "SMS / WhatsApp ಸ್ಕ್ಯಾನರ್",
    menuUrl: "URL ಮತ್ತು ವೆಬ್‌ಸೈಟ್ ಸ್ಕ್ಯಾನರ್",
    menuQr: "QR ಪಾವತಿ ಸ್ಕ್ಯಾನರ್",
    menuDocument: "ದಾಖಲೆ ನಕಲು ಸ್ಕ್ಯಾನರ್",
    menuKnowledge: "AI ಜ್ಞಾನ ಕೇಂದ್ರ",
    menuReports: "ಮುಪ್ಪು ವರದಿ ಮತ್ತು ಆಡಿಟ್",
    menuBadges: "ಜಾಗೃತಿ ಮತ್ತು ಬ್ಯಾಡ್ಜ್‌ಗಳು",
    menuExtension: "ಬ್ರೌಸರ್ ಎಕ್ಸ್‌ಟೆನ್ಷನ್",
    menuSettings: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",

    titleImage: "AI ಚಿತ್ರ ಡೀಪ್‌ಫೇಕ್ ಮತ್ತು ELA ಫೋರೆನ್ಸಿಕ್ ಸ್ಕ್ಯಾನರ್",
    descImage: "ಮುಖದ ವ್ಯತ್ಯಾಸಗಳು, ಬಣ್ಣದ ಅಸಮಾನತೆಗಳು ಮತ್ತು ದೋಷ ಮಟ್ಟದ ಸಂಕೋಚನ ಕಲಾಕೃತಿಗಳನ್ನು ಪತ್ತೆ ಮಾಡಿ.",
    titleVideo: "AI ವಿಡಿಯೋ ಡೀಪ್‌ಫೇಕ್ ಮತ್ತು ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್ ಡಿಟೆಕ್ಟರ್",
    descVideo: "ಜನರೇಟಿವ್ ಮಾಡೆಲ್‌ಗಳು, ಮುಖದ ಮೆಶ್ ವರ್ಗಾವಣೆ ಮತ್ತು ಬೆಳಕಿನ ವೈಪರೀತ್ಯಗಳ ವಿರುದ್ಧ ವಿಡಿಯೋ ಸ್ಟ್ರೀಮ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",
    titleVoice: "AI ಧ್ವನಿ ಕ್ಲೋನ್ ಮತ್ತು ಆಡಿಯೊ ಸ್ಪೆಕ್ಟ್ರೋಗ್ರಾಮ್ ಸ್ಕ್ಯಾನರ್",
    descVoice: "ಧ್ವನಿ ರೆಕಾರ್ಡಿಂಗ್‌ಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ ಸಿಂಥೆಟಿಕ್ ಧ್ವನಿ ಕ್ಲೋನಿಂಗ್ ಮಾದರಿಗಳನ್ನು ಪತ್ತೆ ಮಾಡಿ.",
    titleEmail: "ಇಮೇಲ್ ಫಿಶಿಂಗ್ ಮತ್ತು ಡೊಮೇನ್ ಕ್ರಿಪ್ಟೋಗ್ರಾಫಿಕ್ ಸ್ಕ್ಯಾನರ್",
    descEmail: "ಬ್ಯಾಂಕ್ ವಂಚನೆ ಮೇಲ್‌ಗಳಿಂದ ರಕ್ಷಿಸಲು SPF, DKIM ಮತ್ತು ITR ಮರುಪಾವತಿ ರುಜುವಾತುಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",
    titleSms: "SMS ಮತ್ತು ವಾಟ್ಸಾಪ್ ವಂಚನೆ ಡಿಟೆಕ್ಟರ್",
    descSms: "ಅನುಮಾನಾಸ್ಪದ ವಿದ್ಯುತ್ ಬಿಲ್, ಟೆಲಿಗ್ರಾಮ್ ಕೆಲಸದ ಕೊಡುಗೆಗಳು ಮತ್ತು APK ಸ್ಮಿಶಿಂಗ್ ಪಠ್ಯಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",
    titleUrl: "URL ಮತ್ತು ಟೈಪೋಸ್ಕ್ವೇಟಿಂಗ್ ಡೊಮೇನ್ ಪರೀಕ್ಷಕ",
    descUrl: "ಡೊಮೇನ್ ನೋಂದಣಿ ವಯಸ್ಸು, ಪ್ರಮಾಣಪತ್ರದ ಸಿಂಧುತ್ವ ಮತ್ತು ಬ್ಯಾಂಕಿಂಗ್ ಕ್ಲೋನ್ ಪುಟಗಳನ್ನು ನಿರ್ಧರಿಸಿ.",
    titleQr: "UPI QR ಕೋಡ್ ಮತ್ತು ಮರ್ಚೆಂಟ್ ಪಾವತಿ ಸುರಕ್ಷತಾ ಸ್ಕ್ಯಾನರ್",
    descQr: "UPI ಡೆಬಿಟ್ ವಿನಂತಿಗಳನ್ನು ಗುರುತಿಸಲು QR ಕೋಡ್‌ಗಳು ಅಥವಾ ವಹಿವಾಟು ಲಿಂಕ್‌ಗಳನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ.",
    titleDocument: "ದಾಖಲೆ ನಕಲಿ ಮತ್ತು ಪಿಡಿಎಫ್ ಸ್ಕ್ಯಾನರ್",
    descDocument: "ಟ್ಯಾಂಪರಿಂಗ್ ವಿರುದ್ಧ ಆಧಾರ್ ಕಾರ್ಡ್‌ಗಳು, ಬ್ಯಾಂಕ್ ವಿವರಗಳು ಮತ್ತು ಡಿಜಿಟಲ್ ಸಹಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",

    featImageTitle: "AI ಡೀಪ್‌ಫೇಕ್ ಪತ್ತೆ",
    featImageDesc: "ಮುಖದ ಜೋಡಣೆ, ದೋಷ ಮಟ್ಟದ ಸಂಕೋಚನ (ELA), ಮತ್ತು ಕೃತಕ ರಚನೆಯ ವಿಶ್ಲೇಷಣೆ.",
    featVoiceTitle: "ಧ್ವನಿ ಕ್ಲೋನ್ ಪತ್ತೆ",
    featVoiceDesc: "ಆಡಿಯೊ ಆವರ್ತನ ಸ್ಪೆಕ್ಟ್ರೋಗ್ರಾಫ್‌ಗಳನ್ನು ಬಳಸಿಕೊಂಡು ತುರ್ತು ಹಣವನ್ನು ವಿನಂತಿಸುವ ಸಂಬಂಧಿಕರ ಧ್ವನಿ ಕ್ಲೋನ್ ರೆಕಾರ್ಡಿಂಗ್ ಪತ್ತೆ ಮಾಡಿ.",
    featEmailTitle: "ಇಮೇಲ್ ಫಿಶಿಂಗ್ ಸ್ಕ್ಯಾನರ್",
    featEmailDesc: "DKIM/SPF ಹೆಡರ್‌ಗಳ ಕ್ರಿಪ್ಟೋಗ್ರಾಫಿಕ್ ಪರಿಶೀಲನೆ ಮತ್ತು AI ಮೂಲಕ ರುಜುವಾತು ಕಳ್ಳತನದ ಪತ್ತೆ.",
    featSmsTitle: "SMS ಮತ್ತು ವಾಟ್ಸಾಪ್ ವಂಚನೆ",
    featSmsDesc: "ವಿದ್ಯುತ್ ಬಿಲ್ ಸಂಪರ್ಕ ಕಡಿತ ವಂಚನೆ, ನಕಲಿ ಟೆಲಿಗ್ರಾಮ್ ಉದ್ಯೋಗ ಕೊಡುಗೆಗಳು ಮತ್ತು OTP ಬಲೆಗಳನ್ನು ಗುರುತಿಸಿ.",
    featQrTitle: "UPI QR ಪಾವತಿ ಸುರಕ್ಷತೆ",
    featQrDesc: "ಪಿನ್ ನಮೂದಿಸುವ ಮೊದಲು ಹಣ ಕಡಿತಗೊಳಿಸುವ ಬಲೆಗಳನ್ನು ತಡೆಯಲು UPI QR ಕೋಡ್‌ಗಳನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ.",
    featUrlTitle: "URL ಮತ್ತು ವೆಬ್‌ಸೈಟ್ ಪರೀಕ್ಷಕ",
    featUrlDesc: "ಪ್ರಮುಖ ಭಾರತೀಯ ಬ್ಯಾಂಕ್‌ಗಳ ಡೊಮೇನ್ ವಯಸ್ಸು, SSL ಸಿಂಧುತ್ವ ಮತ್ತು ನಕಲಿ ವೆಬ್‌ಸೈಟ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",
    featBotTitle: "AI ಚಾಟ್ ಸಹಾಯಕ",
    featBotDesc: "ಭಾರತೀಯ IT ಕಾಯ್ದೆಯಡಿ ಕಾನೂನು ರಕ್ಷಣೆ ಮತ್ತು ವಿವರಣಾತ್ಮಕ AI ಸಲಹೆ ನೀಡುವ ಸಹಾಯಕ.",
    featEmergencyTitle: "1-ಕ್ಲಿಕ್ ಸೈಬರ್ ತುರ್ತು",
    featEmergencyDesc: "ಸ್ವಯಂ-ರಚಿತ ಪುರಾವೆಗಳ ಆಡಿಟ್ ಪ್ಯಾಕೇಜ್‌ನೊಂದಿಗೆ 1930 ಸೈಬರ್ ಅಪರಾಧ ಸಹಾಯವಾಣಿಗೆ ತ್ವರಿತ ವರದಿ ಪ್ರಚೋದಕ.",

    step01Title: "ವಿಷಯವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    step01Desc: "ಚಿತ್ರ, ಆಡಿಯೋ, ವಿಡಿಯೋ, ಲಿಂಕ್, SMS ಅಥವಾ PDF ಫೈಲ್ ಸಲ್ಲಿಸಿ",
    step02Title: "AI ವಿಶ್ಲೇಷಣೆ",
    step02Desc: "ಜೆಮಿನಿ 3.6 ಫ್ಲ್ಯಾಶ್ ಬಹುಮಾಧ್ಯಮ ಫೋರೆನ್ಸಿಕ್ ಪರಿಶೀಲನೆ",
    step03Title: "ಅಪಾಯದ ಸ್ಕೋರ್",
    step03Desc: "ತ್ವರಿತ 0–100 ಬೆದರಿಕೆ ಸ್ಕೋರ್ ಮತ್ತು ನಿಖರತೆ ಶೇಕಡಾವಾರು",
    step04Title: "ವಿವರಣಾತ್ಮಕ AI",
    step04Desc: "ಇದು ಏಕೆ ಅನುಮಾನಾಸ್ಪದವಾಗಿದೆ ಎಂಬುದಕ್ಕೆ ಸ್ಪಷ್ಟ ವಿವರಣೆಗಳು",
    step05Title: "ಸುರಕ್ಷತಾ ಯೋಜನೆ",
    step05Desc: "ಹಣವನ್ನು ರಕ್ಷಿಸಲು ಮತ್ತು ವಂಚನೆ ವರದಿ ಮಾಡಲು ಕಾರ್ಯಗತಗೊಳಿಸಬಹುದಾದ ಕ್ರಮಗಳು",

    previewInput: "ಬೆದರಿಕೆಯ ಸೂಚಕ",
    previewRisk: "AI ಬೆದರಿಕೆ ಮಟ್ಟ",
    previewReason: "ತಾಂತ್ರಿಕ ಮೌಲ್ಯಮಾಪನ",
    previewAssessment: "ಅನಧಿಕೃತ 10-ಅಂಕಿಯ ಕಳುಹಿಸುವವರ ರೂಟಿಂಗ್ ಮತ್ತು ನಿಯಂತ್ರಣ ಪ್ಯಾಕೇಜ್ ವಿತರಣೆ (ಸ್ಮಿಶಿಂಗ್).",
    previewStandardActive: "ಸುರಕ್ಷತಾ ಮಾನದಂಡ V3 ಸಕ್ರಿಯ",
    previewSampleContent: "\"ಇಂದು ರಾತ್ರಿ 9:30 ಕ್ಕೆ ವಿದ್ಯುತ್ ಸಂಪರ್ಕ ಕಡಿತಗೊಳ್ಳಲಿದೆ. ಪರಿಶೀಲನಾ ಪೋರ್ಟಲ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ: power-discom.apk\"",

    statsTitle: "ಬೆದರಿಕೆ ಗುಪ್ತಚರ ಬ್ರೀಫಿಂಗ್",
    statsSubtitle: "ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಅಪರಾಧ ಮತ್ತು ವಂಚನೆಯ ಪ್ರಮಾಣ",
    stat01Val: "₹1,000+ ಕೋಟಿ",
    stat01Title: "ವಾರ್ಷಿಕ ವಂಚನೆ ನಷ್ಟ",
    stat01Desc: "ಡಿಜಿಟಲ್ ಬಂಧನಗಳು, ಕಸ್ಟಮ್ಸ್ ಸೋಗು ಹಾಕುವಿಕೆ ಮತ್ತು ನಕಲಿ ಹೂಡಿಕೆಗಳಿಂದ ಆರ್ಥಿಕ ನಷ್ಟ.",
    stat02Val: "400%+ ಹೆಚ್ಚಳ",
    stat02Title: "AI ಡೀಪ್‌ಫೇಕ್ ವಂಚನೆಗಳು",
    stat02Desc: "ಸಾರ್ವಜನಿಕರನ್ನು ಗುರಿಯಾಗಿಸಿಕೊಂಡು ಸಂಶ್ಲೇಷಿತ ಆಡಿಯೊ ಮತ್ತು ವಿಡಿಯೋ ವಂಚನೆ ದಾಳಿಗಳ ಹೆಚ್ಚಳ.",
    stat03Val: "50 ಮಿಲಿಯನ್+",
    stat03Title: "ಗುರಿಯಾಗಿಸಲ್ಪಟ್ಟ ನಾಗರಿಕರು",
    stat03Desc: "ನಿರಂತರ ಸ್ಮಿಶಿಂಗ್, QR ಕೋಡ್ ರೂಟಿಂಗ್ ಬಲೆಗಳು ಮತ್ತು ವಾಟ್ಸಾಪ್ ಹೂಡಿಕೆ ಗುಂಪು ಚಟುವಟಿಕೆಗಳು.",

    footerDesc: "ರಾಷ್ಟ್ರೀಯ ಬಹುಮಾಧ್ಯಮ AI ವಂಚನೆ ಪತ್ತೆ ವೇದಿಕೆ. ನಾಗರಿಕರನ್ನು ಡೀಪ್‌ಫೇಕ್‌ಗಳು, ಧ್ವನಿ ಕ್ಲೋನ್‌ಗಳು, ಫಿಶಿಂಗ್ ಮತ್ತು ಆರ್ಥಿಕ ವಂಚನೆಯಿಂದ ರಕ್ಷಿಸುತ್ತದೆ.",
    footerCompliance: "ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಸುರಕ್ಷತಾ ಮಾರ್ಗಸೂಚಿಗಳ ಅಡಿಯಲ್ಲಿ ಪ್ರಮಾಣೀಕೃತ ಬೆದರಿಕೆ ಗುಪ್ತಚರ ಚೌಕಟ್ಟುಗಳು.",
    footerRights: "ಗಾರ್ಡಿಯನ್ AI ಭಾರತ. ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    footerDevelopedFor: "ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಭದ್ರತಾ ಜಾಗೃತಿಗಾಗಿ ಅಭಿವೃದ್ಧಿಪಡಿಸಲಾಗಿದೆ",

    dashboardSub: "ನೈಜ-ಸಮಯದ ಬೆದರಿಕೆ ಗುಪ್ತಚರ ಪೈಪ್‌ಲೈನ್ • ಪ್ರಮಾಣೀಕೃತ ಅಪಾಯ ಮೌಲ್ಯಮಾಪನ ಎಂಜಿನ್",
    dashboardQuickTitle: "ತ್ವರಿತ ಫೋರೆನ್ಸಿಕ್ ಸ್ಕ್ಯಾನರ್",
    liveHotspotsBadge: "ರಾಷ್ಟ್ರೀಯ ಸಲಹಾ ವರದಿ",
    regionalProfileTitle: "ಪ್ರಾದೇಶಿಕ ಪ್ರೊಫೈಲ್",
    totalReportedTitle: "ಒಟ್ಟು ವರದಿಯಾದ ವಂಚನೆಗಳು",
    hotspotCitiesTitle: "ಹಾಟ್‌ಸ್ಪಾಟ್ ನಗರಗಳು",
    verifyRegionalButton: "ಪ್ರಾದೇಶಿಕ ಸುರಕ್ಷತೆ ಪರಿಶೀಲಿಸಿ",
    recentScansAuditLog: "ಪೂರ್ಣ ಆಡಿಟ್ ಲಾಗ್ ವೀಕ್ಷಿಸಿ",
    advisoryHeader: "ಲೈವ್ ಸಲಹೆಗಳು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಬುಲೆಟಿನ್ಗಳು",
    inspectButton: "ಪರಿಶೀಲಿಸಿ",
    
    colScanType: "ಪರಿಶೀಲನಾ ಪ್ರಕಾರ",
    colContext: "ಶೀರ್ಷಿಕೆ / ಸಂದರ್ಭ",
    colCategory: "ಬೆದರಿಕೆಯ ವರ್ಗ",
    colRisk: "ಅಪಾಯದ ಸ್ಕೋರ್",
    colTime: "ಸಮಯ",
    colAction: "ಕ್ರಮ"
  },
  ta: {
    appName: "கார்டியன் AI",
    tagline: "நம்புவதற்கு முன் சிந்தியுங்கள்",
    subtitle: "இந்தியாவின் மல்டிமாடல் AI மோசடி கண்டறிதல் தளம்",
    tryButton: "கார்டியன் AI ஐ முயற்சிக்கவும்",
    watchDemo: "டெமோ பார்க்கவும்",
    dashboardTitle: "AI சைபர் பாதுகாப்பு மையம்",
    digitalSafetyScore: "டிஜிட்டல் பாதுகாப்பு மதிப்பெண்",
    recentScans: "சமீபத்திய சோதனைகள்",
    threatAnalytics: "மோசடி அச்சுறுத்தல் பகுப்பாய்வு",
    emergencyReport: "1930 சைபர் அவசர உதவி",
    scanNow: "AI மூலம் பரிசோதிக்கவும்",
    riskScoreLabel: "மோசடி ஆபத்து மதிப்பெண்",
    confidenceLabel: "தடயவியல் துல்லியம்",
    whySuspicious: "இது ஏன் சந்தேகத்திற்குரியது? (விளக்கமளிக்கும் AI)",
    safetyActions: "பாதுகாப்பு நடவடிக்கை திட்டம்",
    familyShield: "குடும்ப பாதுகாப்பு கவசம்",
    liveHotspots: "நேரடி இந்திய சைபர் அச்சுறுத்தல் வரைபடம்",
    legalAdvisory: "இந்திய தகவல் தொழில்நுட்ப சட்ட பாதுகாப்பு",
    knowledgeBase: "மோசடி அறிவு காப்பகம்",

    menuLanding: "முகப்பு பக்கம்",
    menuDashboard: "கண்காணிப்பு மையம்",
    menuImage: "பட டீப்ஃபேக் ஸ்கேனர்",
    menuVideo: "வீடியோ டீப்ஃபேக் ஸ்கேனர்",
    menuVoice: "குரல் குளோன் ஸ்கேனர்",
    menuEmail: "மின்னஞ்சல் ஃபிஷிங் ஸ்கேனர்",
    menuSms: "SMS / வாட்ஸ்அப் ஸ்கேனர்",
    menuUrl: "URL & வலைத்தள ஸ்கேனர்",
    menuQr: "QR கட்டண ஸ்கேனர்",
    menuDocument: "ஆவண மோசடி ஸ்கேனர்",
    menuKnowledge: "AI அறிவு தளம்",
    menuReports: "அச்சுறுத்தல் அறிக்கைகள்",
    menuBadges: "விழிப்புணர்வு மற்றும் பேட்ஜ்கள்",
    menuExtension: "உலாவி நீட்டிப்பு",
    menuSettings: "அமைப்புகள்",

    titleImage: "AI பட டீப்ஃபேக் மற்றும் ELA தடயவியல் ஸ்கேனர்",
    descImage: "முக மாற்றங்கள், வண்ண வேறுபாடுகள் மற்றும் சுருக்கக் கோளாறுகளைக் கண்டறியவும்.",
    titleVideo: "AI வீடியோ டீப்ஃபேக் மற்றும் டிஜிட்டல் கைது கண்டறிவி",
    descVideo: "உருவாக்கும் மாதிரிகள், முக மாற்றங்கள் மற்றும் விளக்கு முரண்பாடுகளுக்கு எதிராக வீடியோக்களை சரிபார்க்கவும்.",
    titleVoice: "AI குரல் குளோன் மற்றும் ஆடியோ ஸ்பெக்ட்ரோகிராம் ஸ்கேனர்",
    descVoice: "செயற்கை குரல் குளோனிங் வடிவங்களை அடையாளம் காண குரல் பதிவுகளை பகுப்பாய்வு செய்யவும்.",
    titleEmail: "மின்னஞ்சல் ஃபிஷிங் மற்றும் டொமைன் கிரிப்டோகிராஃபிக் ஸ்கேனர்",
    descEmail: "வங்கி மோசடி அஞ்சல்களிலிருந்து பாதுகாக்க SPF, DKIM மற்றும் ITR சான்றுகளை சரிபார்க்கவும்.",
    titleSms: "SMS மற்றும் வாட்ஸ்அப் மோசடி கண்டறிவி",
    descSms: "சந்தேகத்திற்குரிய மின்சார கட்டணம், டெலிகிராம் வேலை வாய்ப்புகள் மற்றும் APK மோசடிகளை சரிபார்க்கவும்.",
    titleUrl: "URL மற்றும் தட்டச்சு பிழை டொமைன் சரிபார்ப்பு",
    descUrl: "டொமைன் பதிவு காலம், சான்றிதழ் செல்லுபடியாகும் தன்மை மற்றும் வங்கி நகல் பக்கங்களை தீர்மானிக்கவும்.",
    titleQr: "UPI QR குறியீடு மற்றும் வர்த்தகர் கட்டண பாதுகாப்பு ஸ்கேனர்",
    descQr: "UPI டெபிட் கோரிக்கைகளை அடையாளம் காண QR குறியீடுகள் அல்லது பரிவர்த்தனை இணைப்புகளை ஸ்கேன் செய்யவும்.",
    titleDocument: "ஆவண மோசடி மற்றும் PDF ஸ்கேனர்",
    descDocument: "ஆதார் அட்டைகள், வங்கி விவரங்கள் மற்றும் டிஜிட்டல் கையொப்பங்களை சரிபார்க்கவும்.",

    featImageTitle: "AI டீப்ஃபேக் கண்டறிதல்",
    featImageDesc: "முக சீரமைப்பு, பிழை நிலை சுருக்கம் (ELA) மற்றும் செயற்கை நரம்பியல் அமைப்புகளின் தடயவியல் பகுப்பாய்வு.",
    featVoiceTitle: "குரல் குளோன் கண்டறிதல்",
    featVoiceDesc: "ஆடியோ அலைவரிசை ஸ்பெக்ட்ரோகிராஃப்களைப் பயன்படுத்தி அவசரப் பணம் கேட்கும் உறவினர்களின் குரல் பதிவுகளைக் கண்டறிதல்.",
    featEmailTitle: "மின்னஞ்சல் ஃபிஷிங் ஸ்கேனர்",
    featEmailDesc: "DKIM/SPF தலைப்புகளின் கிரிப்டோகிராஃபிக் சரிபார்ப்பு மற்றும் AI மூலம் சான்றுகள் திருட்டு மொழி கண்டறிதல்.",
    featSmsTitle: "SMS மற்றும் வாட்ஸ்அப் மோசடி",
    featSmsDesc: "மின்சார கட்டண துண்டிப்பு மோசடி, போலி டெலிகிராம் வேலை வாய்ப்புகள் மற்றும் OTP பொறிகளை அடையாளம் காணவும்.",
    featQrTitle: "UPI QR கட்டண பாதுகாப்பு",
    featQrDesc: "பின்னை உள்ளிடுவதற்கு முன் பணம் டெபிட் செய்யப்படும் பொறிகளைத் தடுக்க UPI QR குறியீடுகளை ஸ்கேன் செய்யவும்.",
    featUrlTitle: "URL மற்றும் வலைத்தள சரிபார்ப்பு",
    featUrlDesc: "முக்கிய இந்திய வங்கிகளின் போலி டொமைன்கள், SSL செல்லுபடியாகும் தன்மை மற்றும் வலைத்தளங்களை சரிபார்க்கவும்.",
    featBotTitle: "AI அரட்டை உதவியாளர்",
    featBotDesc: "இந்திய தகவல் தொழில்நுட்ப சட்டத்தின் கீழ் சட்ட பாதுகாப்பு மற்றும் AI ஆலோசனைகளை வழங்கும் உதவியாளர்.",
    featEmergencyTitle: "1-கிளிக் சைபர் அவசரநிலை",
    featEmergencyDesc: "தானாக உருவாக்கப்பட்ட ஆதார ஆவணங்களுடன் 1930 சைபர் குற்ற உதவி எண்ணுக்கு விரைவான புகார் அனுப்பும் கருவி.",

    step01Title: "உள்ளடக்கத்தைப் பதிவேற்றவும்",
    step01Desc: "படம், ஆடியோ, வீடியோ, இணைப்பு, SMS அல்லது PDF கோப்பைச் சமர்ப்பிக்கவும்",
    step02Title: "AI பகுப்பாய்வு",
    step02Desc: "ஜெமினி 3.6 ஃபிளாஷ் மல்டிமாடல் தடயவியல் ஆய்வு",
    step03Title: "ஆபத்து மதிப்பெண்",
    step03Desc: "உடனடி 0-100 அச்சுறுத்தல் மதிப்பெண் மற்றும் துல்லிய சதவீதம்",
    step04Title: "விளக்கமளிக்கும் AI",
    step04Desc: "இது ஏன் சந்தேகத்திற்குரியது என்பதற்கான தெளிவான காரணங்கள்",
    step05Title: "பாதுகாப்பு திட்டம்",
    step05Desc: "நிதியைப் பாதுகாக்கவும் மோசடி குறித்து புகாரளிக்கவும் செய்ய வேண்டிய நடவடிக்கைகள்",

    previewInput: "அச்சுறுத்தல் காட்டி",
    previewRisk: "AI அச்சுறுத்தல் நிலை",
    previewReason: "தொழில்நுட்ப மதிப்பீடு",
    previewAssessment: "அங்கீகரிக்கப்படாத 10-இலக்க அனுப்புநர் ரூட்டிங் மற்றும் ரிமோட் கண்ட்ரோல் தொகுப்பு விநியோகம் (ஸ்மிஷிங்).",
    previewStandardActive: "பாதுகாப்பு தரநிலை V3 செயலில் உள்ளது",
    previewSampleContent: "\"மின்சாரம் இன்று இரவு 9:30 மணிக்கு துண்டிக்கப்படும். சரிபார்ப்பு போர்ட்டலை பதிவிறக்கவும்: power-discom.apk\"",

    statsTitle: "அச்சுறுத்தல் உளவுத்துறை விளக்கக்காட்சி",
    statsSubtitle: "தேசிய சைபர் குற்றங்கள் மற்றும் மோசடிகளின் அளவு",
    stat01Val: "₹1,000+ கோடி",
    stat01Title: "ஆண்டு மோசடி இழப்பு",
    stat01Desc: "டிஜிட்டல் கைதுகள், போலி சுங்க அதிகாரிகள் மற்றும் மோசடி முதலீடுகளால் ஏற்படும் நிதி இழப்பு.",
    stat02Val: "400%+ அதிகரிப்பு",
    stat02Title: "AI டீப்ஃபேக் மோசடிகள்",
    stat02Desc: "பொதுமக்களை இலக்காகக் கொண்ட செயற்கை ஆடியோ மற்றும் வீடியோ மோசடி தாக்குதல்களின் அதிகரிப்பு.",
    stat03Val: "50 மில்லியன்+",
    stat03Title: "இலக்கு வைக்கப்பட்ட குடிமக்கள்",
    stat03Desc: "தொடர்ச்சியான ஸ்மிஷிங், QR குறியீடு பொறிகள் மற்றும் வாட்ஸ்அப் முதலீட்டுக் குழு நடவடிக்கைகள்.",

    footerDesc: "தேசிய மல்டிமாடல் AI மோசடி கண்டறிதல் தளம். குடிமக்களை டீப்ஃபேக்குகள், குரல் குளோன்கள், ஃபிஷிங் மற்றும் நிதி மோசடிகளிலிருந்து பாதுகாக்கிறது.",
    footerCompliance: "தேசிய இணைய பாதுகாப்பு வழிகாட்டுதல்களின் கீழ் சான்றளிக்கப்பட்ட அச்சுறுத்தல் உளவுத்துறை கட்டமைப்புகள்.",
    footerRights: "கார்டியன் AI இந்தியா. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    footerDevelopedFor: "தேசிய இணைய பாதுகாப்பு விழிப்புணர்விற்காக உருவாக்கப்பட்டது",

    dashboardSub: "நிகழ்நேர அச்சுறுத்தல் உளவுத்துறை பைப்லைன் • தரப்படுத்தப்பட்ட ஆபத்து மதிப்பீட்டு இயந்திரம்",
    dashboardQuickTitle: "விரைவு தடಯவியல் ஸ்கேனர்",
    liveHotspotsBadge: "தேசிய ஆலோசனை அறிக்கை",
    regionalProfileTitle: "பிராந்திய சுயவிவரம்",
    totalReportedTitle: "மொத்தம் புகாரளிக்கப்பட்ட மோசடிகள்",
    hotspotCitiesTitle: "ஹாட்ஸ்பாட் நகரங்கள்",
    verifyRegionalButton: "பிராந்திய பாதுகாப்பை சரிபார்க்கவும்",
    recentScansAuditLog: "முழு தணிக்கை பதிவைக் காண்க",
    advisoryHeader: "நேரடி ஆலோசனைகள் மற்றும் பொது அறிவிப்புகள்",
    inspectButton: "ஆய்வு செய்",
    
    colScanType: "சோதனை வகை",
    colContext: "தலைப்பு / சூழல்",
    colCategory: "அச்சுறுத்தல் வகை",
    colRisk: "ஆபத்து மதிப்பெண்",
    colTime: "நேரம்",
    colAction: "நடவடிக்கை"
  },
  te: {
    appName: "గార్డియన్ AI",
    tagline: "నమ్మే ముందు ఆలోచించండి",
    subtitle: "భారతదేశ మల్టీమోడల్ AI స్కామ్ గుర్తింపు ప్లాట్‌ఫారమ్",
    tryButton: "గార్డియన్ AI ని ప్రయత్నించండి",
    watchDemo: "డెమో చూడండి",
    dashboardTitle: "AI సైబర్ డిఫెన్స్ కమాండ్ సెంటర్",
    digitalSafetyScore: "డిజితల్ భద్రతా స్కోర్",
    recentScans: "ఇటీవలి స్కాన్‌లు",
    threatAnalytics: "స్కామ్ ముప్పు విశ్లేషణ",
    emergencyReport: "1930 సైబర్ హెల్ప్‌లైన్",
    scanNow: "AI తో స్కాన్ చేయండి",
    riskScoreLabel: "స్కామ్ ముప్పు స్కోర్",
    confidenceLabel: "ఫొరెన్సిక్ ఖచ్చితత్వం",
    whySuspicious: "ఇది ఎందుకు అనుమానాస్పదంగా ఉంది? (వివరణాత్మక AI)",
    safetyActions: "భద్రతా చర్యల ప్రణాళిక",
    familyShield: "కుటుంబ రక్షణ కవచం",
    liveHotspots: "లైవ్ ఇండియా సైబర్ ముప్పు మ్యాప్",
    legalAdvisory: "భారతీయ IT చట్ట రక్షణ",
    knowledgeBase: "స్కామ్ పరిజ్ఞాన నిధి",

    menuLanding: "హోమ్ పేజీ",
    menuDashboard: "కమాండ్ సెంటర్",
    menuImage: "ఇమేజ్ డీప్‌ఫేక్ స్కేనర్",
    menuVideo: "వీడియో డీప్‌ఫేక్ స్కేనర్",
    menuVoice: "వాయిస్ క్లోన్ స్కేనర్",
    menuEmail: "ఈమెయిల్ ఫిషింగ్ స్కేనర్",
    menuSms: "SMS / వాట్సాప్ స్కేనర్",
    menuUrl: "URL & వెబ్‌సైట్ స్కేనర్",
    menuQr: "QR పేమెంట్ స్కేనర్",
    menuDocument: "డాక్యుమెంట్ ఫోర్జరీ స్కేనర్",
    menuKnowledge: "AI నాలెడ్జ్ బేస్",
    menuReports: "ముప్పు నివేదికలు & ఆడిట్",
    menuBadges: "అవగాహన మరియు బ్యాడ్జ్‌లు",
    menuExtension: "బ్రౌజర్ ఎక్స్‌టెన్షన్",
    menuSettings: "సెట్టింగులు",

    titleImage: "AI ఇమేజ్ డీప్‌ఫేక్ మరియు ELA ఫోరెన్సిక్ స్కేనర్",
    descImage: "ముఖ మార్పులు, రంగు వ్యత్యాసాలు మరియు కంప్రెషన్ లోపాలను గుర్తించండి.",
    titleVideo: "AI వీడియో డీప్‌ఫేక్ మరియు డిజిటల్ అరెస్ట్ డిటెక్టర్",
    descVideo: "జనరేటివ్ మోడల్స్, ఫేషియల్ మెష్ షిఫ్టింగ్ మరియు లైటింగ్ క్రమరాహిత్యాల నుండి వీడియోలను ధృవీకరించండి.",
    titleVoice: "AI వాయిస్ క్లోన్ మరియు ఆడియో స్పెక్ట్రోగ్రామ్ స్కేనర్",
    descVoice: "కృత్రిమ వాయిస్ క్లోనింగ్ నమూనాలను గుర్తించడానికి వాయిస్ రికార్డింగ్‌లను విశ్లేషించండి.",
    titleEmail: "ఈమెయిల్ ఫిషింగ్ మరియు డొమైన్ క్రిప్టోగ్రాఫిక్ స్కేనర్",
    descEmail: "బ్యాంక్ మోసాల నుండి రక్షించడానికి SPF, DKIM మరియు ITR రీఫండ్ ఆధారాలను ధృవీకరించండి.",
    titleSms: "SMS మరియు వాట్సాప్ మోసాల డిటెక్టర్",
    descSms: "అనుమానాస్పద విద్యుత్ బిల్లులు, టెలిగ్రామ్ ఉద్యోగ ఆఫర్లు మరియు APK మోసాలను ధృవీకరించండి.",
    titleUrl: "URL మరియు టైపోస్క్వాటింగ్ డొమైన్ చెకర్",
    descUrl: "డొమైన్ రిజిస్ట్రేషన్ వయస్సు, సర్టిఫికేట్ చెల్లుబాటు మరియు బ్యాంకింగ్ క్లోన్ పేజీలను నిర్ణయించండి.",
    titleQr: "UPI QR కోడ్ మరియు మర్చంట్ పేమెంట్ సేఫ్టీ స్కేనర్",
    descQr: "UPI డెబిట్ అభ్యర్థనలను గుర్తించడానికి QR కోడ్‌లు లేదా లావాదేవీల లింక్‌లను స్కాన్ చేయండి.",
    titleDocument: "డాక్యుమెంట్ ఫోర్జరీ మరియు PDF స్కేనర్",
    descDocument: "ట్యాంపరింగ్‌కు వ్యతిరేకంగా ఆధార్ కార్డ్‌లు, బ్యాంక్ వివరాలు మరియు డిజిటల్ సంతకాలను ధృవీకరించండి.",

    featImageTitle: "AI డీప్‌ఫేక్ గుర్తింపు",
    featImageDesc: "ఫేషియల్ మెష్ అలైన్‌మెంట్, ఎర్రర్ లెవెల్ కంప్రెషన్ (ELA) మరియు సింథటిక్ నరాల ఆకృతి యొక్క ఫోరెన్సిక్ విశ్లేషణ.",
    featVoiceTitle: "వాయిస్ క్లోన్ గుర్తింపు",
    featVoiceDesc: "ఆడియో ఫ్రీక్వెన్సీ స్పెక్ట్రోగ్రాఫ్‌లను ఉపయోగించి అత్యవసర డబ్బును అభ్యర్థించే బంధువుల వాయిస్ క్లోన్ రికార్డింగ్‌లను గుర్తించడం.",
    featEmailTitle: "ఈమెయిల్ ఫిషింగ్ స్కేనర్",
    featEmailDesc: "DKIM/SPF హెడర్‌ల క్రిప్టోగ్రాఫిక్ ధృవీకరణ మరియు AI ద్వారా క్రెడెన్షియల్ దొంగతనం ఫిషింగ్ లాంగ్వేజ్ గుర్తింపు.",
    featSmsTitle: "SMS మరియు వాట్సాప్ మోసాలు",
    featSmsDesc: "విద్యుత్ బిల్లు డిస్‌కనెక్ట్ మోసాలు, నకిలీ టెలిగ్రామ్ ఉద్యోగ ఆఫర్లు మరియు OTP ఉచ్చులను గుర్తించండి.",
    featQrTitle: "UPI QR పేమెంట్ భద్రత",
    featQrDesc: "పిన్ నమోదు చేయడానికి ముందు డబ్బు డెబిట్ చేయబడే ఉచ్చులను నిరోధించడానికి UPI QR కోడ్‌లను స్కాన్ చేయండి.",
    featUrlTitle: "URL మరియు వెబ్‌సైట్ చెకర్",
    featUrlDesc: "ప్రధాన భారతీయ బ్యాంకుల డొమైన్ వయస్సు, SSL చెల్లుబాటు మరియు నకిలీ వెబ్‌సైట్‌లను తనిఖీ చేయండి.",
    featBotTitle: "AI చాట్ సహాయకుడు",
    featBotDesc: "భారతీయ IT చట్టం పరిధిలో చట్టపరమైన రక్షణ మరియు వివరణాత్మక AI సలహాలను అందించే సహాయకుడు.",
    featEmergencyTitle: "1-క్లిక్ సైబర్ అత్యవసర పరిస్థితి",
    featEmergencyDesc: "ఆటో-జనరేటెడ్ ఆధారాల ఆడిట్ ప్యాకేజీతో 1930 సైబర్ క్రైమ్ హెల్ప్‌లైన్‌కు శీఘ్ర నివేదిక ప్రేరేపకం.",

    step01Title: "కంటెంట్‌ను అప్‌లోడ్ చేయండి",
    step01Desc: "చిత్రం, ఆడియో, వీడియో, లింక్, SMS లేదా PDF ఫైల్‌ను సమర్పించండి",
    step02Title: "AI విశ్లేషణ",
    step02Desc: "జెమినీ 3.6 ఫ్లాష్ మల్టీమోడల్ ఫోరెన్సిక్ తనిఖీ",
    step03Title: "ముప్పు స్కోర్",
    step03Desc: "తక్షణ 0-100 ముప్పు స్కోర్ మరియు ఖచ్చితత్వ శాతం",
    step04Title: "వివరణాత్మక AI",
    step04Desc: "ఇది ఎందుకు అనుమానాస్పదంగా ఉందో స్పష్టమైన కారణాలు",
    step05Title: "భద్రతా ప్రణాళిక",
    step05Desc: "నిధులను రక్షించుకోవడానికి మరియు మోసంపై ఫిర్యాదు చేయడానికి చేయవలసిన చర్యలు",

    previewInput: "ముప్పు సూచిక",
    previewRisk: "AI ముప్పు స్థాయి",
    previewReason: "సాంకేతిక అంచనా",
    previewAssessment: "అనధికృత 10-అంకెల పంపినవారి రూటింగ్ మరియు రిమోట్ కంట్రోల్ ప్యాకేజీ పంపిణీ (స్మిషింగ్).",
    previewStandardActive: "భద్రతా ప్రమాణం V3 సక్రియంగా ఉంది",
    previewSampleContent: "\"విద్యుత్ సరఫరా ఈ రాత్రి 9:30 గంటలకు నిలిపివేయబడుతుంది. ధృవీకరణ పోర్టల్‌ను డౌన్‌లోడ్ చేయండి: power-discom.apk\"",

    statsTitle: "ముప్పు నిఘా బ్రీఫింగ్",
    statsSubtitle: "జాతీయ సైబర్ నేరాలు మరియు మోసాల పరిమాణం",
    stat01Val: "₹1,000+ కోట్లు",
    stat01Title: "వార్షిక మోసాల నష్టం",
    stat01Desc: "డిజిటల్ అరెస్టులు, కస్టమ్స్ అధికారుల రూపంలో మోసాలు మరియు నకిలీ పెట్టుబడుల వల్ల కలిగే ఆర్థిక నష్టం.",
    stat02Val: "400%+ పెరుగుదల",
    stat02Title: "AI డీప్‌ఫేక్ మోసాలు",
    stat02Desc: "సాధారణ ప్రజలను లక్ష్యంగా చేసుకున్న కృత్రిమ ఆడియో మరియు వీడియో మోసాల పెరుగుదల.",
    stat03Val: "50 మిలియన్+",
    stat03Title: "లక్ష్యంగా చేసుకున్న పౌరులు",
    stat03Desc: "నిరంతర స్మిషింగ్, QR కోడ్ ఉచ్చులు మరియు వాట్సాప్ పెట్టుబడి సమూహాల కార్యకలాపాలు.",

    footerDesc: "జాతీయ మల్టీమోడల్ AI స్కామ్ గుర్తింపు ప్లాట్‌ఫారమ్. పౌరులను డీప్‌ఫేక్‌లు, వాయిస్ క్లోన్‌లు, ఫిషింగ్ మరియు ఆర్థిక మోసాల నుండి రక్షిస్తుంది.",
    footerCompliance: "జాతీయ సైబర్ భద్రతా మార్గదర్శకాల క్రింద ధృవీకరించబడిన ముప్పు నిఘా ఫ్రేమ్‌వర్క్‌లు.",
    footerRights: "గార్డియన్ AI ఇండియా. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.",
    footerDevelopedFor: "జాతీయ సైబర్ భద్రతా అవగాహన కోసం అభివృద్ధి చేయబడింది",

    dashboardSub: "నిజ సమయ ముప్పు నిఘా పైప్‌లైన్ • ప్రమాణీకరించబడిన ముప్పు అంచనా ఇంజిన్",
    dashboardQuickTitle: "త్వరిత ఫోరెన్సిక్ స్కేనర్",
    liveHotspotsBadge: "జాతీయ సలహా నివేదిక",
    regionalProfileTitle: "ప్రాంతీయ ప్రొఫైల్",
    totalReportedTitle: "మొత్తం నమోదైన మోసాలు",
    hotspotCitiesTitle: "హాట్‌స్పాట్ నగరాలు",
    verifyRegionalButton: "ప్రాంతీయ భద్రతను ధృవీకరించండి",
    recentScansAuditLog: "పూర్తి ఆడిట్ లాగ్‌ను వీక్షించండి",
    advisoryHeader: "ప్రత్యక్ష సలహాలు మరియు పబ్లిక్ బులెటిన్లు",
    inspectButton: "పరిశీలించండి",
    
    colScanType: "పరీక్ష రకం",
    colContext: "శీర్షిక / సందర్భం",
    colCategory: "ముప్పు వర్గం",
    colRisk: "ముప్పు స్కోర్",
    colTime: "సమయం",
    colAction: "చర్య"
  },
  mr: {
    appName: "गार्डियन एआय",
    tagline: "विश्वास ठेवण्यापूर्वी विचार करा",
    subtitle: "भारताचे बहु-आयामी एआय घोटाळा शोध प्लॅटफॉर्म",
    tryButton: "गार्डियन एआय वापरा",
    watchDemo: "डेमो पहा",
    dashboardTitle: "एआय सायबर सुरक्षा कमान केंद्र",
    digitalSafetyScore: "डिजिटल सुरक्षा स्कोर",
    recentScans: "अलीकडील स्कॅन तपशील",
    threatAnalytics: "घोटाळा धोक्याचे विश्लेषण",
    emergencyReport: "१९३० सायबर हेल्पलाइन",
    scanNow: "एआय द्वारे तपासा",
    riskScoreLabel: "घोटाळा धोका गुण",
    confidenceLabel: "फॉरेन्सिक अचूकता",
    whySuspicious: "हे संशयास्पद का आहे? (व्याख्यात्मक एआय)",
    safetyActions: "सुरक्षा कृती योजना",
    familyShield: "कुटुंब सुरक्षा कवच",
    liveHotspots: "थेट भारत सायबर धोका नकाशा",
    legalAdvisory: "भारतीय आयटी कायदा संरक्षण",
    knowledgeBase: "घोटाळा ज्ञान भांडार",

    menuLanding: "मुख्यपृष्ठ",
    menuDashboard: "नियंत्रण कक्ष",
    menuImage: "इमेज डीपफेक स्कॅनर",
    menuVideo: "व्हिडिओ डीपफेक स्कॅनर",
    menuVoice: "व्हॉइस क्लोन स्कॅनर",
    menuEmail: "ईमेल फिशिंग स्कॅनर",
    menuSms: "एसएमएस / व्हॉट्सॲप स्कॅनर",
    menuUrl: "यूआरएल आणि वेबसाइट स्कॅनर",
    menuQr: "क्यूआर पेमेंट स्कॅनर",
    menuDocument: "दस्तऐवज बनावट स्कॅनर",
    menuKnowledge: "एआय ज्ञान केंद्र",
    menuReports: "धोका अहवाल आणि ऑडिट",
    menuBadges: "जागरूकता आणि बॅज",
    menuExtension: "ब्राउझर एक्सटेंशन",
    menuSettings: "सेटिंग्ज",

    titleImage: "एआय इमेज डीपफेक आणि ईएलए फॉरेन्सिक स्कॅनर",
    descImage: "चेहऱ्यावरील बदल, रंगातील तफावत आणि कॉम्प्रेशन त्रुटी शोधून काढा.",
    titleVideo: "एआय व्हिडिओ डीपफेक आणि डिजिटल अटक डिटेक्टर",
    descVideo: "जनरेटिव्ह मॉडेल्स, फेशियल मेश शिफ्टिंग आणि प्रकाश विसंगती विरुद्ध व्हिडिओ प्रवाहित करा आणि सत्यापित करा.",
    titleVoice: "एआय व्हॉइस क्लोन आणि ऑडिओ स्पेक्ट्रोग्राम स्कॅनर",
    descVoice: "व्हॉईस क्लोनिंगचे कृत्रिम पॅटर्न शोधण्यासाठी व्हॉईस रेकॉर्डिंगचे विश्लेषण करा.",
    titleEmail: "ईमेल फिशिंग आणि डोमेन क्रिप्टोग्राफिक स्कॅनर",
    descEmail: "बँक फसवणुकीपासून स्वतःला वाचवण्यासाठी एसपीएफ, डीकेआयएम आणि आयटीआर रिफंड क्रेडेन्शियल्स सत्यापित करा.",
    titleSms: "एसएमएस आणि व्हॉट्सॲप फसवणूक डिटेक्टर",
    descSms: "संशयास्पद वीज बिल, टेलिग्राम नोकरीच्या ऑफर आणि एपीके फिशिंग संदेश तपासा.",
    titleUrl: "यूआरएल आणि टायपोस्कॅटिंग डोमेन तपासक",
    descUrl: "डोमेन नोंदणी वय, प्रमाणपत्राची वैधता आणि नेटबँकिंग क्लोन पृष्ठे निर्धारित करा.",
    titleQr: "यूपीआय क्यूआर कोड आणि मर्चंट पेमेंट सुरक्षा स्कॅनर",
    descQr: "यूपीआय डेबिट विनंत्या ओळखण्यासाठी क्यूआर कोड किंवा व्यवहार लिंक स्कॅन करा.",
    titleDocument: "दस्तऐवज बनावट आणि पीडीएफ स्कॅनर",
    descDocument: "आधार कार्ड, बँक तपशील आणि डिजिटल स्वाक्षऱ्यांमध्ये फेरफार नसल्याची खात्री करा.",

    featImageTitle: "एआय डीपफेक ओळख",
    featImageDesc: "चेहऱ्याची रचना, एरर लेव्हल कॉम्प्रेशन (ELA) आणि कृत्रिम त्वचा पोत यांचे फॉरेन्सिक विश्लेषण.",
    featVoiceTitle: "व्हॉइस क्लोन ओळख",
    featVoiceDesc: "ऑडिओ फ्रिक्वेन्सी स्पेक्ट्रोग्राफ वापरून आपत्कालीन पैशांची मागणी करणाऱ्या नातेवाईकांच्या क्लोन केलेल्या व्हॉइस रेकॉर्डिंगचा शोध घेणे.",
    featEmailTitle: "ईमेल फिशिंग स्कॅनर",
    featEmailDesc: "डीकेआयएम/एसपीएफ हेडर्सचे क्रिप्टोग्राफिक पडताळणी आणि क्रेडेंशियल चोरी फिशिंग भाषेचा एआय द्वारे शोध.",
    featSmsTitle: "एसएमएस आणि व्हॉट्सॲप फसवणूक",
    featSmsDesc: "वीज बिल डिस्कनेक्शन घोटाळे, बनावट टेलिग्राम नोकरीच्या ऑफर आणि ओटीपी फसवणूक ओळखा.",
    featQrTitle: "यूपीआय क्यूआर पेमेंट सुरक्षा",
    featQrDesc: "पिन प्रविष्ट करण्यापूर्वी पैसे डेबिट करणाऱ्या फसवणुकीपासून वाचण्यासाठी मर्चंट यूपीआय क्यूआर कोड स्कॅन करा.",
    featUrlTitle: "यूआरएल आणि वेबसाइट तपासक",
    featUrlDesc: "प्रमुख भारतीय बँकांच्या बनावट डोमेन, एसएसएल वैधता आणि वेबसाइट्स तपासा.",
    featBotTitle: "एआय चॅट सहाय्यक",
    featBotDesc: "भारतीय आयटी कायद्यांतर्गत कायदेशीर संरक्षण आणि एआय सल्ला देणारा परस्परसंवादी सहाय्यक.",
    featEmergencyTitle: "1-क्लिक सायबर आणीबाणी",
    featEmergencyDesc: "स्वयंचलित पुराव्यांसह १९३० सायबर गुन्हे हेल्पलाइनवर त्वरित तक्रार नोंदवणारे साधन.",

    step01Title: "सामग्री अपलोड करा",
    step01Desc: "इमेज, ऑडिओ, व्हिडिओ, लिंक, एसएमएस किंवा पीडीएफ फाईल सबमिट करा",
    step02Title: "एआय विश्लेषण",
    step02Desc: "जेमिनी ३.६ फ्लॅश बहु-आयामी फॉरेन्सिक तपासणी",
    step03Title: "धोका गुण",
    step03Desc: "तात्काळ ०-१०० धोका गुण आणि अचूकता टक्केवारी",
    step04Title: "व्याख्यात्मक एआय",
    step04Desc: "हे संशयास्पद का आहे याची स्पष्ट कारणे",
    step05Title: "सुरक्षा योजना",
    step05Desc: "पैशांचे रक्षण करण्यासाठी आणि घोटाळ्याची तक्रार करण्यासाठी आवश्यक पावले",

    previewInput: "धोक्याचा संकेत",
    previewRisk: "एआय धोका पातळी",
    previewReason: "तांत्रिक मूल्यमापन",
    previewAssessment: "अनधिकृत १०-अंकी प्रेषक मार्ग आणि रिमोट कंट्रोल पॅकेज वितरण (स्मिशिंग).",
    previewStandardActive: "सुरक्षा मानक V3 सक्रिय",
    previewSampleContent: "\"वीज पुरवठा आज रात्री ९:३० वाजता खंडित केला जाईल. पडताळणी पोर्टल डाउनलोड करा: power-discom.apk\"",

    statsTitle: "धोका गुप्तवार्ता ब्रीफिंग",
    statsSubtitle: "राष्ट्रीय सायबर गुन्हे आणि फसवणुकीचे प्रमाण",
    stat01Val: "₹१,०००+ कोटी",
    stat01Title: "वार्षिक घोटाळ्यांचे नुकसान",
    stat01Desc: "डिजिटल अटक, कस्टम अधिकारी म्हणून फसवणूक आणि बनावट गुंतवणुकीमुळे होणारे आर्थिक नुकसान.",
    stat02Val: "४००%+ वाढ",
    stat02Title: "एआय डीपफेक घोटाळे",
    stat02Desc: "नागरिकांना लक्ष्य करणाऱ्या कृत्रिम ऑडिओ आणि व्हिडिओ फसवणूक हल्ल्यांमध्ये वाढ.",
    stat03Val: "५० दशलक्ष+",
    stat03Title: "लक्ष्य केलेले नागरिक",
    stat03Desc: "सतत स्मिशिंग, क्यूआर कोड फसवणूक आणि व्हॉट्सॲप गुंतवणूक गटांचे उपक्रम.",

    footerDesc: "राष्ट्रीय बहु-आयामी एआय घोटाळा शोध प्लॅटफॉर्म. नागरिकांना डीपफेक, व्हॉइस क्लोन, फिशिंग आणि आर्थिक फसवणुकीपासून वाचवते.",
    footerCompliance: "राष्ट्रीय सायबर सुरक्षा मार्गदर्शक तत्त्वांनुसार प्रमाणित धोका गुप्तवार्ता संरचना.",
    footerRights: "गार्डियन एआय भारत. सर्व हक्क राखीव.",
    footerDevelopedFor: "राष्ट्रीय सायबर सुरक्षा जागरूकतेसाठी विकसित",

    dashboardSub: "वास्तविक वेळ धोका गुप्तवार्ता पाइपलाइन • मानकीकृत जोखीम मूल्यांकन इंजिन",
    dashboardQuickTitle: "त्वरित फॉरेन्सिक स्कॅनर",
    liveHotspotsBadge: "राष्ट्रीय सल्लागार अहवाल",
    regionalProfileTitle: "प्रादेशिक प्रोफाइल",
    totalReportedTitle: "एकूण नोंदवलेले घोटाळे",
    hotspotCitiesTitle: "हॉटस्पॉट शहरे",
    verifyRegionalButton: "प्रादेशिक सुरक्षा तपासा",
    recentScansAuditLog: "पूर्ण ऑडिट लॉग पहा",
    advisoryHeader: "थेट सल्ला आणि सार्वजनिक बुलेटिन",
    inspectButton: "तपासा",
    
    colScanType: "स्कॅन प्रकार",
    colContext: "शीर्षक / संदर्भ",
    colCategory: "धोका श्रेणी",
    colRisk: "धोका गुण",
    colTime: "वेळ",
    colAction: "कृती"
  },
};
