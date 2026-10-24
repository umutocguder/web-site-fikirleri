# AI Fikir 11: Mali Müşavir & Muhasebe Fatura Anomali Dedektörü (TaxAudit AI)

> **Slogan:** *"Binlerce e-fatura, fiş ve banka ekstresini saniyeler içinde tarayan; mükerrer ödemeleri, sahte/naylon fatura risklerini, KDV oranı hatalarını ve gider yazılamayacak harcamaları yakalayan finansal zeka asistanı."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Mali Müşavirlerin Dönem Sonu Çilesi:** Ay sonunda her şirketten yüzlerce e-fatura, yemek fişi ve banka hareketi geliyor. Bir mali müşavir veya muhasebeci tek tek bu faturaların KDV'sini, tevkifat oranını ve gider uygunluğunu elle kontrol ederken hata yapabiliyor.
- **Vergi Cezaları ve Mükerrer Ödemeler:** Şirketlerin yılda en az %1.5 - %3 bütçesi mükerrer (aynı faturanın iki kez ödenmesi) faturalardan veya yanlış KDV beyanından kaynaklanan vergi cezalarına gidiyor.
- **Yapay Zeka Fırsatı:** Luca, Zirve veya Paraşüt'ten aktarılan Excel/XML fatura listesini ve PDF fişleri tarayan bir anomali tespit motoru; aynı tutarlı mükerrer faturaları, *"Pazar günü şirket kartıyla alınan 15.000 ₺'lik kişisel lüks harcama"* gibi gider kabul edilmeyecek kalemleri kırmızı ile işaretler.

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Serbest Muhasebeci Mali Müşavirler (SMMM) ve Yeminli Mali Müşavirler (YMM)
- KOBİ finans yöneticileri ve ön muhasebe birimleri
- E-ticaret firmaları (Ayda on binlerce mikro fatura kesenler)

---

## 🚀 3. Temel Özellikler & AI Mimarisi
1. **Mükerrer & Şüpheli Fatura Dedektörü:**
   - Aynı fatura no, aynı IBAN veya 48 saat arayla kesilen şüpheli eşleşmeleri yakalar.
2. **KDV & Tevkifat Doğrulama:**
   - Faturadaki ürün cinsine göre (Örn: Gıda %1, Hizmet %20) uygulanan KDV oranının yasal mevzuata uygunluğunu denetler.
3. **Akıllı Gider Sınıflandırma (Gider mi Kanunen Kabul Edilmeyen Gider mi?):**
   - Şirketin faaliyet alanına göre harcamanın işle ilgili olup olmadığını analiz eder.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Mali Müşavir Ofis Paketi:** 1.250 ₺ / ay (50 mükellef şirkete kadar tarama).
- **KOBİ Finans Paketi:** 2.450 ₺ / ay (Sınırsız fatura + ERP entegrasyonu).
- **Yıllık Kurumsal Lisans:** 25.000 ₺.

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **AppZen:** Fortune 500 şirketleri için harcama denetimi yapan milyar dolarlık AI platformu.
- **Vic.ai:** Otonom muhasebe ve fatura işleme devi.
- **Glean AI:** Akıllı satıcı faturası ve harcama analitiği.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **AI Stack:** Python + Pandas / Polars (hızlı veri analitiği) + Scikit-Learn Anomaly Detection (Isolation Forest) + Gemini Flash.
- **Format Desteği:** UBL-TR XML, e-Arşiv PDF, Excel.
- **MVP Süresi:** 6 - 8 Gün.
