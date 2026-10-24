# AI Fikir 04: 7/24 Restoran & Klinik Sesli Telefon Santral Ajanı (VoiceDesk AI)

> **Slogan:** *"Çalan telefonu insan gibi doğal Türkçe ile açan; rezervasyon oluşturan, iptal eden, menü/fiyat sorularını yanıtlayan ve randevuyu takvime işleyen gecikmesiz sesli yapay zeka asistanı."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Kaçan Aramalar = Kaybedilen Milyonlar:** Popüler bir restoran cuma akşamı yoğunluktan günde 40-50 telefon aramasına cevap veremiyor. Bir diş kliniği pazar günü kapalıyken arayan 20 acil hastayı rakip kliniklere kaptırıyor.
- **Robotik Tuşlamalı Ses Menüleri (IVR) Nefret Ediliyor:** *"Satış için 1'e, muhasebe için 2'ye basın"* menüleri kullanıcıyı bezdiriyor ve %60 oranında telefonu kapatmasına neden oluyor.
- **Yapay Zeka Fırsatı:** Gemini Live API / WebRTC ve ElevenLabs / OpenAI Realtime ile gecikme süresi 300 milisaniyenin altına indi! Artık sesli yapay zeka insan gibi nefes alıyor, araya girildiğinde duraksıyor ve *"Ahmet Bey, cuma saat 20:00 için 4 kişilik cam kenarı masanızı ayırdım, onay SMS'inizi gönderiyorum"* diyebiliyor.

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Rezervasyonla çalışan butik restoranlar, meyhaneler ve kafeler
- Özel diş klinikleri, veteriner klinikleri ve estetik/güzellik merkezleri
- Çilingirler, oto kurtarıcılar ve 7/24 acil servis veren işletmeler
- Butik oteller ve tatil köyleri

---

## 🚀 3. Temel Özellikler & AI Mimarisi
1. **Ultra Düşük Gecikmeli Sesli İletişim (Ultra-Low Latency Voice):**
   - SIP / Twilio trunk üzerinden gelen ses akışını (Stream) WebRTC ile Gemini Live API'ye bağlar.
2. **Akıllı Fonksiyon Çağrısı (Function Calling):**
   - Müşteri konuşurken arkada `checkAvailability(date, time, guests)` fonksiyonunu çalıştırarak Google Takvim / Rezerve paneline bakar.
3. **SMS / WhatsApp Onay Köprüsü:**
   - Görüşme sonlandığı anda müşteriye konumu ve rezervasyon detayını içeren WhatsApp/SMS mesajı iletir.
4. **İnsan Temsilciye Aktarma (Warm Transfer):**
   - Müşteri *"Yetkili biriyle görüşmek istiyorum"* dediğinde aramayı işletme sahibinin cep telefonuna canlı devreder.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Kurulum Ücreti:** İşletme başına tek seferlik 3.500 ₺ (Menü, SSS ve santral entegrasyonu).
- **Aylık Sabit Paket:** 1.900 ₺ / ay (Ayda 300 dakika görüşme dahil).
- **Ekstra Dakika:** 2.50 ₺ / dakika.

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **Bland AI:** Dünyanın en popüler telefon arama yapay zeka altyapısı (Dakikada milyonlarca çağrı).
- **Retell AI:** Gecikmesiz sesli ajan platformu, Y Combinator destekli.
- **Vapi.ai:** Geliştiriciler için sesli yapay zeka orkestrasyon motoru.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **AI Stack:** Gemini 3.8 Live / OpenAI Realtime API + Vapi / Retell SDK + ElevenLabs Türkçe ses modelleri.
- **Telefoni:** Twilio Voice / Netgsm SIP Trunk.
- **MVP Süresi:** 6 - 8 Gün.
