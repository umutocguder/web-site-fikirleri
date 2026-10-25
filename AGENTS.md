# AGENTS.md - 11Hopem AI Ideas & Innovation Vault

## Project Overview
- **Name:** `web-site-fikirleri` (11Hopem AI Ideas & Innovation Vault)
- **Scope:** Broad AI venture repository covering everything that can be built with Artificial Intelligence: Autonomous Agents, Voice AI/Telephony, Computer Vision, Vertical SaaS, Generative Media, EdTech/Cognitive AI, and DevTools/Offline RAG.
- **Brand Identity:** Exclusively `11Hopem` with redirect to `https://11hopem.com`.
- **Live URL:** `https://web-site-fikirleri.vercel.app`
- **GitHub Repository:** Private repo `umutocguder/web-site-fikirleri`

---

## Architecture & Tech Stack
- **Core Engine:** Vanilla HTML5, ES Modules, Tailwind CSS CDN, Lucide Icons CDN.
- **Content System:** 40 deep structured AI venture briefs across 7 core verticals:
  1. `01-otonom-ajanlar-ve-otomasyon` (6 briefs: RefundOps, LeadScout, BidForge, ChurnShield, GovGuard, GigPilot)
  2. `02-sesli-yapay-zeka-ve-iletisim` (6 briefs: VoiceDesk, PolyVoice, ActionNote, MedScribe, CallQualify, AudioAudit)
  3. `03-bilgisayarli-goru-ve-multimodal` (6 briefs: BuildVision, ShelfEye, ClaimVision, MedVision, CropEye, AntiTheft)
  4. `04-dikey-ai-saas-ve-sektorel` (6 briefs: LexRedline, TaxAudit, CostCraft, EstateVal, MenuProfit, FreightMatch)
  5. `05-uretken-medya-ve-pazarlama` (6 briefs: AdMorph, HeroTale, RoomMorph, StyleMorph, ClipViral, ReviewPulse)
  6. `06-egitim-edtech-ve-kisisel-ai` (4 briefs: Socrates, PhonoRead, KnowBase, LingoNative)
  7. `07-gelistirici-ve-operasyon-ai` (6 briefs: RefactorBot, TalkToDB, VaultBrain, CodeSentinel, SpecCraft, CloudSaver)
- **Scoring & Comparison Matrix:** `degerlendirme-matrisi.md` (20-point scoring framework, 40 models ranked)
- **Testing:** Node.js native test runner (`node --test tests/*.test.js`).
- **Build / Packaging:** `scripts/build.js` synchronizes catalog files and assets into `public/`.
- **Hosting & CI/CD:** Vercel Production Deployment + GitHub Actions CI/CD.

---

## Engineering & Governance Rules
1. **100% English Code Standard:** All code, test definitions, scripts, commit messages, and configs must be in English.
2. **Strict Brand Compliance:** All links to brand must point directly to `https://11hopem.com`. Never use 'Software Ltd. Şti.'.
3. **1:1 Favicon & Brand Asset Rule:** All favicon and social graph assets (`favicon.svg`, `favicon.ico`, `logo.svg`, `apple-touch-icon.png`, `og-image.png`) must be present in both `assets/` and `public/`.
4. **Git Branching Policy:** `master` represents production deployment; `dev` represents staging/UAT.
