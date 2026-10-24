# AI Fikir 02: Otonom B2B Müşteri Avcısı & Hiper-Kişiselleştirilmiş Satış Ajanı (LeadScout AI)

> **Slogan:** *"Hedef sektördeki şirketleri otomatik bulan, web sitelerini ve son haberlerini okuyup her şirketin acı noktasına özel ilk temas e-postasını ve LinkedIn mesajını hazırlayan otonom B2B satış temsilcisi (SDR)."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Soğuk Satış E-postaları Çöp Kutusuna Gidiyor:** Toplu gönderilen jenerik soğuk e-postaların açılma oranı %10'un, geri dönüş oranı ise %1'in altına düştü. İnsanlar şablon mesajları anında siliyor.
- **Manuel Araştırma Çok Zaman Alıyor:** Kaliteli bir satış temsilcisi bir müşteriyi araştırmak, LinkedIn profiline bakmak ve özel bir teklif yazmak için 30-45 dakika harcıyor. Günde en fazla 10-15 kişiye ulaşabiliyor.
- **Yapay Zeka Fırsatı:** Web arama, LinkedIn scraping ve LLM sentezini birleştiren otonom bir ajan; hedef şirketin kariyer ilanlarını inceler (*"Bakıyorum Next.js bilen yazılımcı arıyorsunuz"*), kurucunun son paylaşımlarını okur ve tamamen o şirkete özel ilk temas mesajını 1 dakikada üreterek onay kuyruğuna getirir.

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- B2B yazılım ve SaaS şirketleri
- Dijital pazarlama, SEO ve tasarım ajansları
- Kurumsal danışmanlık, lojistik ve outsourcing firmaları
- Kendi başına satış yapmaya vakti olmayan bağımsız danışmanlar

---

## 🚀 3. Temel Özellikler & AI Mimarisi
1. **Otonom Şirket Keşif Motoru (Search & Scrape):**
   - Kullanıcı *"İstanbul'daki 20-100 çalışanlı lojistik firmaları"* dediğinde Google Haritalar ve LinkedIn üzerinden şirketleri listeler.
2. **Kişiselleştirme Motoru (Context Synthesizer):**
   - Şirketin web sitesini, blog yazılarını ve Google yorumlarını tarar.
   - Örnek: *"Web sitenizdeki kargo hesaplayıcınız mobilde 6 saniyede açılıyor, bu yüzden müşteri kaybediyor olabilirsiniz"* şeklinde somut acı noktasını tespit eder.
3. **Akıllı E-posta Dizisi & Gönderim Kontrolü:**
   - 3 adımlı takip e-postası (Follow-up) yazar; yanıt gelirse otonom ajanı durdurup insan temsilciye takvim toplantı linkini iletir.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Aylık SaaS Lisansı:** 1.990 ₺ / ay (Ayda 500 zenginleştirilmiş kurumsal lead + mesaj).
- **Growth Paketi:** 4.900 ₺ / ay (Ayda 2.500 lead + Entegre e-posta gönderim motoru).
- **Ajans White-Label:** 12.000 ₺ / ay.

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **Clay.com:** B2B veri zenginleştirme ve AI satış alanında en hızlı büyüyen Unicorn (1.3 milyar $ değerleme).
- **11x.ai (Alice & Jordan):** Dünyanın ilk otonom dijital satış çalışanları; milyonlarca dolar yatırım aldı.
- **Artisan AI (Ava):** Yapay zeka BDR satış temsilcisi.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **AI Stack:** Python / Node.js + Gemini 1.5 Flash (yüksek token hızı) + Puppeteer / Cheerio + Firecrawl.
- **Entegrasyonlar:** Hunter.io / Apollo API, Resend / SendGrid API, Supabase.
- **MVP Süresi:** 5 - 7 Gün.
