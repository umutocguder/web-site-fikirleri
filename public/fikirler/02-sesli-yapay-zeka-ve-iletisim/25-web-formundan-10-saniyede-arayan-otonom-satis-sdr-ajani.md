# AI Fikir 25: Web Formundan 10 Saniyede Arayan Otonom Satış SDR Ajanı (CallQualify AI)

> **Slogan:** *"Sitenizdeki iletişim formunu dolduran müşteriyi 10 saniye içinde telefonla arayan; doğal ses tonuyla bütçe, ihtiyaç ve zamanlamayı sorgulayıp sıcak müşteriyi canlı satış temsilcisine bağlayan sesli AI."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Dakikalar İçinde Soğuyan Lead'ler:** Bir web sitesine bilgi almak için telefonunu bırakan kullanıcının satın alma ihtimali ilk 5 dakika içinde aranırsa %400 daha fazladır. Türkiye'deki firmaların ortalama geri arama süresi ise 4 ila 24 saat arasındadır.
- **Satış Temsilcisi Zaman İsrafı:** Satış ekipleri yanlış telefon numaraları, telesekreterler veya *"Fiyat bakıyordum sadece"* diyen ilgisiz kişilerle günde saatlerini kaybediyor.
- **Yapay Zeka Fırsatı:** Form doldurulduğu anda WebRTC/SIP üzerinden çağrı başlatan; doğal bir Türkçe diksiyonla konuşan, müşterinin bütçesini ve aciliyetini öğrenen ve müşteri *"Hemen satın almak istiyorum"* derse çağrıyı anında satış müdürünün cep telefonuna devreden sesli SDR!

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Gayrimenkul ve lüks konut projeleri satan inşaat firmaları.
- Sıfır/ikinci el araç filoları ve otomotiv bayileri.
- Estetik, diş ve saç ekim klinikleri (yüksek biletli sağlık turizmi).
- Güneş enerjisi (GES) ve B2B kurumsal yazılım satan şirketler.

---

## 🚀 3. Temel Özellikler & AI Mimarisi
1. **Ultra Hızlı Tetiklenme (Sub-15s Dialing):**
   - Web sitesi formu veya Facebook Lead Ads tetiklendiği an SIP trunk üzerinden dış arama başlatır.
2. **Doğal Konuşma ve İtiraz Karşılama:**
   - 350 ms yanıt süresiyle laf kesilmesine (interruption) izin verir. *"Şu an müsait değilim"* denirse takvime uygun yeni arama saati belirler.
3. **BANT Nitelik Taraması (Budget, Authority, Need, Timeline):**
   - Müşterinin bütçe aralığını ve projenin başlama tarihini kibarca öğrenir.
4. **Canlı Transfer (Warm Call Transfer):**
   - Müşteri yüksek potansiyelli (Hot Lead) olarak sınıflandırılırsa *"Harika, sizi hemen kıdemli proje uzmanımız Ahmet Bey'e bağlıyorum"* diyerek çağrıyı gerçek temsilciye bağlar.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Kurulum & Şablon:** 4.500 ₺ tek seferlik.
- **Aylık Sabit Paket:** 2.900 ₺ / ay (500 başarılı görüşme dahil).
- **Kazanılmış Nitelikli Lead Başı:** Nitelikli görüşme başına 25 ₺.

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **Air.ai:** Dünyada 10-40 dakikalık otonom satış aramaları yapan ilk viral sesli AI girişimi.
- **Bland AI:** Geliştiricilere dakikada binlerce eşzamanlı telefon araması yaptıran platform.
- **Retell AI:** YC destekli ultra düşük gecikmeli kurumsal çağrı altyapısı.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **AI Stack:** Gemini 3.8 Live API / OpenAI Realtime + Deepgram STT + Cartesia / ElevenLabs Turbo.
- **Telekomünikasyon:** Netgsm SIP Trunk / Twilio Voice WebRTC + Redis State Machine.
- **MVP Süresi:** 6 - 8 Gün.
