# AI Fikir 03: Kamu & Özel Sektör İhale Takip ve Şartname Teklif Ajanı (BidForge AI)

> **Slogan:** *"EKAP ve özel ihale platformlarındaki yüzlerce sayfalık teknik şartname PDF'lerini tarayan, şirketin yeterliliğini test eden ve kural hatası yapmadan taslak teklif dosyasını hazırlayan otonom ihale mühendisi."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **100 Sayfalık Şartnameler ve Gözden Kaçan Riskler:** Kamu (EKAP) veya kurumsal ihalelerde 100-200 sayfalık teknik şartnameler bulunur. Şartnamede geçen *"Teslimattan sonra 48 saat içinde yedek parça temin edilmelidir, aksi takdirde her gün için sözleşme bedelinin %1'i oranında ceza kesilir"* gibi tek bir kritik madde gözden kaçtığında şirket milyonlarca lira zarar eder.
- **Teklif Hazırlama Süresi:** Bir ihaleye teklif hazırlamak uzman bir mühendislik ve hukuk ekibinin 4-7 gününü alır. Çoğu şirket süre yetmediği için ihalelere katılamaz.
- **Yapay Zeka Fırsatı:** Büyük bağlam pencereli modeller (Gemini 1.5 Pro - 2 milyon token) tüm şartname ve eklerini bir kerede okur; şirketin yetkinlikleriyle (ISO belgeleri, ciro şartı, referans mektupları) çapraz denetler ve teklif tablosunu otomatik üretir.

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Kamu ihalelerine giren müteahhitlik ve inşaat firmaları
- Bilişim, medikal ve temizlik/güvenlik hizmet sağlayıcıları
- Savunma sanayi ve endüstriyel makine tedarikçileri

---

## 🚀 3. Temel Özellikler & AI Mimarisi
1. **Otonom İhale Radarı:**
   - Her sabah EKAP ve özel portal ilanlarını anahtar kelimelere göre tarar, şirkete uygun ihaleleri WhatsApp/Slack üzerinden fırlatır.
2. **Kırmızı Bayrak (Red Flag) Analizi:**
   - Şartnamedeki ağır cezai şartları, mantıksız teslim sürelerini ve firmanın karşılayamayacağı yeterlilik kriterlerini kırmızı ile özetler.
3. **Teklif & Birim Fiyat Tablosu Üretimi:**
   - İhale poz numaralarını şirketin ürün kataloğuyla eşleştirir; Excel formatında teklif cetveli ve idari dilekçeleri üretir.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **KOBİ Paketi:** 4.900 ₺ / ay (Sınırsız ihale takibi + Ayda 5 şartname derin analizi).
- **Kurumsal Paket:** 14.900 ₺ / ay (Sınırsız şartname analizi + Özel model eğitimi).
- **İhale Başı Analiz:** 1.500 ₺ (Tekil kullanım).

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **AutogenAI:** İngiltere merkezli ihale ve teklif hazırlama AI platformu; 39 milyon $ yatırım aldı.
- **GovSpend / GovDash:** Kamu ihaleleri için özel LLM destekli teklif üreticisi.
- **DeepProcure:** B2B tedarik şartname analitiği.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **AI Stack:** Python + Gemini 1.5 Pro (Geniş doküman okuma) + PyPDF / pdfplumber + ChromaDB (Vektör arama).
- **Arayüz:** Next.js / Tailwind + Supabase Auth & Storage.
- **MVP Süresi:** 7 - 9 Gün.
