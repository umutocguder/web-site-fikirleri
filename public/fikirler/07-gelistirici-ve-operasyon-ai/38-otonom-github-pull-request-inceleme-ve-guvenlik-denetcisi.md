# AI Fikir 38: Otonom GitHub Pull Request İnceleme ve Güvenlik Denetçisi (CodeSentinel AI)

> **Slogan:** *"Açılan her GitHub Pull Request'ini saniyeler içinde okuyan; kod standartlarını, unutulmuş API keylerini, SQL injection açıklarını ve mantık hatalarını satır içi yorumla düzeltip PR'ı onaylayan yapay zeka kıdemli mühendisi."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Kıdemli Mühendislerin PR Tıkanıklığı:** Bir şirketteki kıdemli (Senior/Lead) geliştiriciler günlerinin 2 ila 4 saatini genç yazılımcıların açtığı Pull Request'leri (PR) incelemekle geçiriyor. Bu durum hem yeni özelliklerin yayına çıkışını günlerce geciktiriyor hem de kıdemlileri asıl mimari işlerinden alıkoyuyor.
- **Gözden Kaçan Güvenlik Açıkları:** İnsan gözü 500 satırlık bir diff'i incelerken dalgınlıkla SQL injection, açık bırakılmış IDOR veya hardcoded gizli şifreleri gözden kaçırabiliyor.
- **Yapay Zeka Fırsatı:** GitHub App olarak depoya kurulan; her PR açıldığında Abstract Syntax Tree (AST) ve LLM ile kod değişikliklerini tarayan, kritik güvenlik açığı varsa merge edilmesini otomatik bloklayan, temiz kod için satır içi çözüm önerisi sunan yapay zeka kıdemli gözü!

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- 5 ila 50 kişilik yazılım geliştirme takımları ve hızla büyüyen teknoloji girişimleri.
- Açık kaynak (Open Source) proje sahipleri ve kütüphane geliştiricileri.
- Finans, sağlık ve e-ticaret gibi kod güvenliği ve regülasyonun kritik olduğu sektörler.

---

## 🚀 3. Temel Özellikler & AI Mimarisi
1. **Satır İçi Akıllı Yorum ve Öneri (Inline Code Suggestions):**
   - GitHub'ın 'Suggestion' formatında doğrudan tıklayıp kabul edilebilir düzeltme kod blokları sunar.
2. **Güvenlik & Gizli Veri Kalkanı (Secret & Vuln Scanner):**
   - AWS anahtarları, Stripe tokenları, XSS, SSRF ve yetkisiz sorgu açıklarını tespit eder.
3. **Eksik Birim Test Uyarısı (Missing Test Coverage):**
   - Yeni eklenen fonksiyona unit test yazılmamışsa PR'ın geçmesini engeller ve test fonksiyonu şablonunu hazırlar.
4. **Teknik Lider PR Özeti:**
   - 30 dosyalık devasa diff'i 3 maddelik sade bir yönetici özetine dönüştürerek hızlı onay sağlar.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Açık Kaynak (Open Source):** Ücretsiz topluluk kullanımı.
- **Takım Paketi (5 Geliştirici):** 990 ₺ / ay (veya 49 $ / ay).
- **Pro / Scale (20 Geliştirici):** 2.900 ₺ / ay.
- **Kurumsal On-Prem:** Kendi sunucusuna kurulan sürüm için yıllık 45.000 ₺.

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **CodeRabbit:** Milyonlarca PR inceleyen ve 50M $+ değerleme hızına koşan en popüler YC girişimi.
- **CodiumAI (Qodo):** Test üretimi ve kod inceleme için 50 milyon dolardan fazla fonlanan platform.
- **Greptile:** Büyük kod depolarını derinlemesine anlayarak PR inceleyen yapay zeka aracı.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **AI Stack:** Claude 3.5 Sonnet / Gemini 1.5 Pro + Tree-sitter (AST Analizi) + LangChain.
- **Entegrasyon:** GitHub App API, Octokit.js, Probot Framework, Redis Queue.
- **MVP Süresi:** 6 - 8 Gün.
