# Fikir 46: Freelancer ve Butik Ekipler İçin Şık Müşteri Portalı (SoloPortal / ClientHub)

> **Slogan:** *"Müşterinize tek bir şık ve markalı bağlantı göndererek; teklifi onaylatan, e-imza attıran, proje aşamalarını gösteren ve revizyon dosyaları ile faturaları tek ekranda toplayan modern danışman portali."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **WhatsApp ve E-Posta Kaosu:** Freelance çalışan yazılımcılar, tasarımcılar ve butik ajanslar müşterileriyle WhatsApp gruplarında çalışıyor. Gönderilen logolar kayboluyor, revizyonlar unutuluyor, sözleşmeler imzalanmadan işe başlanıyor ve en sonunda *"Param ne zaman yatacak?"* tartışmaları çıkıyor.
- **Dubsado ve HoneyBook Çok Ağır:** Mevcut müşteri yönetim sistemleri karmaşık formüllerle dolu ve Türk KOBİ'lerine çok yabancı.
- **Fırsat:** Müşterinin şifre oluşturmasına gerek kalmadan doğrudan kendine özel linkle (`portal.ajans.com/proje-x`) girdiği; sözleşmeyi telefonundan parmağıyla imzaladığı, peşinat faturasını gördüğü, yüklenen tasarım dosyalarını indirebildiği ve proje ilerleme çubuğunu takip ettiği minimalist bir müşteri deneyim portalı!

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Bağımsız yazılımcılar, UI/UX tasarımcıları ve dijital pazarlama danışmanları.
- Butik mimarlık, iç mekan tasarım ve dekorasyon stüdyoları.
- Düğün ve kurumsal etkinlik fotoğrafçıları / video prodüksiyon ekipleri.

---

## 🚀 3. Temel Özellikler & Mimari Kapsam
1. **Sihirli Bağlantı Girişi (Magic Link Access):**
   - Müşterinin karmaşık şifre hatırlamasına gerek kalmaz; e-posta veya SMS'ine gelen linkle tek tıkla kendi portalına girer.
2. **Tek Tıkla Teklif Kabulü & E-İmza:**
   - Hazırlanan teklif ve sözleşme maddelerini ekranda okuyup tek parmakla yasal geçerli e-imza atabilme.
3. **Aşamalı Proje İlerlemesi (Phase Tracking):**
   - *Tasarım Onayı (%100)*, *Yazılım (%60)*, *Test (%0)* gibi müşteriye güven veren görsel ilerleme çubuğu.
4. **Güvenli Dosya ve Varlık Deposu:**
   - 4K video, Figma tasarımları veya ham dosyaların müşteri tarafından tek tıkla kaybolmadan indirilebilmesi.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Solo Freelancer:** 290 ₺ / ay (Aynı anda 5 aktif müşteri portalı).
- **Pro Stüdyo:** 790 ₺ / ay (Sınırsız müşteri portalı, özel alan adı, kendi şirket logosu).
- **Ajans:** 1.890 ₺ / ay (Ekip üyeleri, sınırsız dosya depolama alanı, Iyzico/Stripe ödeme toplama).

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **HoneyBook:** 2.4 milyar dolar değerlemeye ulaşan serbest çalışan yönetim devi.
- **Copilot.com:** Ajanslar için modern müşteri portalları sunan popüler platform.
- **Bonsai:** Freelancer'lar için hepsi-bir-arada iş yönetimi yazılımı.
- **Dubsado:** Butik kreatif işletmelerin kullandığı iş akışı otomasyonu.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **Tech Stack:** SvelteKit veya Next.js + Tailwind CSS + Supabase (PostgreSQL + RLS + S3 Storage).
- **İmza & PDF:** Canvas API (Dokunmatik İmza) + PDFKit / Puppeteer (Resmi PDF sözleşme çıktısı).
- **MVP Süresi:** 5 - 7 Gün.
