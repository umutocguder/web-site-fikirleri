# Fikir 51: E-Ticaret ve Kurslar İçin Satış Ortaklığı Motoru (AffiliFlow / ReferansPro)

> **Slogan:** *"Mevcut müşterilerinize, influencer'lara ve iş ortaklarınıza özel takip bağlantıları (link) ve indirim kuponları tanımlayan; yapılan satışlardan otomatik kâr payı hesaplayan, sıfır komisyonlu bağımsız satış ortaklığı (Affiliate) altyapısı."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Müşterilerinizi Satış Temsilcisine Dönüştürün:** Bir markayı en iyi tanıtan kişiler o markanın ürününü sevip kullanan gerçek müşterileridir. Butikler ve kurs sahipleri *"Bizi arkadaşına tavsiye et, yapılan her alışverişten %15 komisyon kazan"* demek istiyor.
- **Mevcut Affiliate Ağları Şişkin ve Masraflı:** GelirOrtakları veya CJ Affiliate gibi eski ağlar devasa kurulum bedelleri ve işlem başına %20-30 aracı payı kesiyor. Yabancı Rewardful veya Tapfiliate ise aylık 49 $ - 149 $ gibi yüksek dolar bazlı ücretler alıyor.
- **Fırsat:** Herhangi bir e-ticaret veya kurs sitesine 5 dakikada kurulan; her ortağa (Affiliate) özel şık bir kazanç paneli (`ortak.markaniz.com`) veren, tıklanma/satış istatistiklerini canlı gösteren ve ay sonunda hak edilen komisyonları IBAN listesiyle döken sade bir satış ortaklığı SaaS'ı!

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Kendi dijital kursunu, e-kitabını veya SaaS yazılımını satan bağımsız üreticiler.
- Butik e-ticaret markaları (giyim, takı, organik gıda, kahve aboneliği).
- Mikro-influencer'larla satış başı komisyon modeliyle çalışmak isteyen marka yöneticileri.

---

## 🚀 3. Temel Özellikler & Mimari Kapsam
1. **Çerez ve Kupon Bazlı Takip (Cookie & Coupon Tracking):**
   - 30 günlük çerez takibiyle veya ortağa özel indirim kodu (`AHMET10`) ile gerçekleşen tüm satışları otomatik eşleştirme.
2. **Ortağa Özel Şık Gösterge Paneli (Affiliate Dashboard):**
   - Satış ortaklarının kaç tık aldığını, kaç satış yaptığını ve ne kadar bakiye biriktiğini gördüğü sade arayüz.
3. **Otomatik Hak Ediş & Havale/EFT Listesi:**
   - Ay sonunda iade edilen siparişleri komisyondan düşen ve kalan net tutarları banka IBAN formatında Excel/CSV olarak hazırlayan sistem.
4. **Çok Kademeli Komisyon Kuralları:**
   - İlk 10 satışa %10, 50 satış üzeri elit ortaklara %20 gibi performans bazlı dinamik prim kuralları koyabilme.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Starter Mağaza:** 390 ₺ / ay (25 aktif satış ortağı, sınırsız tıklama).
- **Pro Büyüme:** 890 ₺ / ay (100 satış ortağı, özel alan adı, otomatik faturalandırma).
- **Kurumsal:** 1.950 ₺ / ay (Sınırsız ortak + API erişimi).

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **Rewardful:** Stripe kullanan SaaS şirketleri için küresel satış ortaklığı lideri.
- **Tapfiliate:** E-ticaret ve dijital ürünler için esnek affiliate takip yazılımı.
- **Refersion:** Büyük Shopify mağazalarının kullandığı popüler platform.
- **Tolt:** Modern teknoloji girişimleri için minimalist ortaklık yönetim aracı.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **Tech Stack:** Next.js + Tailwind CSS + PostgreSQL / Prisma + Redis (Hızlı yönlendirme & çerez eşleme).
- **Entegrasyonlar:** Stripe Webhooks, Iyzico Webhooks, Shopify App Bridge.
- **MVP Süresi:** 5 - 7 Gün.
