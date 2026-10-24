# AGENTS.md - 11Hopem Website & Venture Ideas Vault

## Project Overview
- **Name:** `web-site-fikirleri` (11Hopem Website Ideas Vault)
- **Scope:** Curated repository of high-converting website, micro-SaaS, and digital venture concepts, complete with business models, feature specs, target audiences, and feasibility matrices.
- **Brand Identity:** Exclusively `11Hopem` with redirect to `https://11hopem.com`.
- **Live URL:** `https://web-site-fikirleri.vercel.app`
- **GitHub Repository:** Private repo `umutocguder/web-site-fikirleri`

---

## Architecture & Tech Stack
- **Core Engine:** Vanilla HTML5, ES Modules, Tailwind CSS CDN, Lucide Icons CDN.
- **Content System:** Markdown-based idea cards in `fikirler/` categorized into 5 high-yield niches:
  1. `01-yapay-zeka-ve-otomasyon`
  2. `02-hizmet-ve-rezervasyon-platformlari`
  3. `03-b2b-kobi-ve-operasyon-araclari`
  4. `04-edtech-ve-akademik-platformlar`
  5. `05-nis-pazaryeri-ve-kiralama`
- **Scoring & Comparison Matrix:** `degerlendirme-matrisi.md`
- **Testing:** Node.js native test runner (`node --test tests/*.test.js`).
- **Build / Packaging:** `scripts/build.js` synchronizes catalog files and assets into `public/`.
- **Hosting & CI/CD:** Vercel Production Deployment + GitHub Actions CI/CD.

---

## Development & Verification Commands
- **Install Dependencies:** `npm install`
- **Run Tests:** `npm test`
- **Build Production Directory:** `npm run build`
- **Local Dev Server:** `npm start` (or `npx serve public`)
- **Deploy:** `npx -y vercel --name web-site-fikirleri --prod --yes`

---

## Engineering & Governance Rules
1. **100% English Code Standard:** All code, test definitions, scripts, commit messages, and configs must be in English. User-facing web ideas and explanations are in Turkish.
2. **Strict Brand Compliance:** All links to brand must point directly to `https://11hopem.com`. Never use 'Software Ltd. Şti.'.
3. **1:1 Favicon & Brand Asset Rule:** All favicon and social graph assets (`favicon.svg`, `favicon.ico`, `logo.svg`, `apple-touch-icon.png`, `og-image.png`) must be present in both `assets/` and `public/`.
4. **Git Branching Policy:** `master` represents production deployment; `dev` represents staging/UAT.
