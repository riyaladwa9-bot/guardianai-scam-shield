# GuardianAI: Multimodal Scam Shield & Cyber Forensics

GuardianAI is a state-of-the-art, full-stack cybersecurity application designed to combat the rising wave of digital scams in India (such as Digital Arrest fraud, electricity bill smishing, part-time job Telegram traps, fake UPI collect requests, AI voice clones, and deepfakes).

Powered by Google's **Gemini Multimodal AI**, GuardianAI scans files, text, links, and media in real-time, providing Indian users with instant threat scores, legal context, and actionable safety advisories.

---

## 🌟 Key Features

* **Multi-Scanner Intelligence Suite**:
  * **Image Deepfake & KYC Scan**: Detects neural style manipulation and facial swaps.
  * **Voice Clone Forensic Scan**: Analyzes audio frequencies for cloned synthesis patterns.
  * **Video Deepfake Scan**: Highlights corneal reflection anomalies and jawline compression masks.
  * **SMS & WhatsApp Smishing Scan**: Flags unverified numbers, malicious APK domains, and coercive language.
  * **URL Phishing Scan**: Inspects domain age, typosquatting records, and hosting reputation.
  * **Email Phishing Scan**: Validates SPF, DKIM, and DMARC cryptographic signatures.
  * **QR Code & UPI Scan**: Inspects QR payment payloads to protect against collect-request traps.
  * **Document Scanner**: Analyzes contract text or ID documents for fraudulent modifications.
* **Full Localization (Dynamic Translations)**: Support for **English, Hindi (हिंदी), Kannada (ಕನ್ನಡ), Telugu (తెలుగు), and Bengali (বাংলা)** across all views.
* **Indian Threat Command Center**:
  * **Live Regional Scam Heatmap**: Shows real-time hot zones (e.g., Delhi NCR, Jamtara, Bengaluru) and top regional threat patterns.
  * **Active Advisories Feed**: Real-time alerts based on CERT-In, RBI, and Ministry of Home Affairs (I4C) directives.
* **Family Shield Hub**: Monitor safety scores of connected family member accounts.
* **Gamified Awareness Badges**: Earn achievements by completing interactive security quizzes.
* **AI Security Assistant Chatbot**: 24/7 conversational support on cyber safety and Indian cyber law (IT Act Section 66D).

---

## 🛠️ Tech Stack

* **Frontend**: React (v19), TypeScript, Tailwind CSS, Recharts (visual statistics), Lucide Icons.
* **Backend**: Node.js, Express.js.
* **Database**: MongoDB (Client/Atlas) for persistent scan storage, regional metrics, and user profiles.
* **AI Model**: Google Gemini API (`@google/genai`).

---

## 🚀 Setup Instructions (Local Development)

Follow these steps to run GuardianAI on your local machine:

### Prerequisites
* **Node.js** (v18.0.0 or higher recommended)
* **MongoDB** (local community server running on port `27017` OR a free cloud account on **MongoDB Atlas**)
* **Gemini API Key** (Get one from [Google AI Studio](https://aistudio.google.com/))

### Step 1: Install Dependencies
Open your terminal inside the project directory and run:
```bash
npm install
```

### Step 2: Set Environment Variables
Create a file named `.env` in the root of your project directory:
```env
# Google Gemini API Credentials
GEMINI_API_KEY="YOUR_GEMINI_API_KEY_HERE"

# MongoDB Database Connection String
# For Local MongoDB:
MONGODB_URI="mongodb://127.0.0.1:27017/scamshield"

# For Cloud MongoDB Atlas:
# MONGODB_URI="mongodb+srv://<username>:<password>@cluster.mongodb.net/scamshield?retryWrites=true&w=majority"
```

### Step 3: Run the Application
Start the unified full-stack server (runs Express backend on port `3000` and proxies the React frontend):
```bash
npm run dev
```
Open **`http://localhost:3000`** in your browser to view the application.

---

## ☁️ Deployment Guide (Render.com)

To publish GuardianAI live on the web, follow these steps to host on **Render**:

1. **Push your code to GitHub**: Create a repository and push your project files.
2. **Set up MongoDB Atlas**:
   * Create a free cluster on MongoDB Atlas.
   * Add database access user credentials.
   * Add network whitelist access to allow connection from anywhere (`0.0.0.0/0`).
   * Copy your cloud connection URL.
3. **Deploy on Render**:
   * Log into **Render.com** and click **New +** > **Web Service**.
   * Link your GitHub repository.
   * Configure the service options:
     * **Runtime**: `Node`
     * **Build Command**: `npm install && npm run build`
     * **Start Command**: `npm start`
     * **Instance Plan**: `Free`
   * Click **Advanced** > **Add Environment Variable**:
     * `GEMINI_API_KEY` = `your_gemini_api_key`
     * `MONGODB_URI` = `your_mongodb_atlas_connection_string`
     * `NODE_ENV` = `production`
   * Click **Deploy Web Service**.

Once the build finishes, Render will provide you with a public HTTPS link (e.g. `https://your-app.onrender.com`).
