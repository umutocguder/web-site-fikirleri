# Fikir 01: Müteahhit & Taşeron İçin AI Teklif ve Hakediş Motoru (TenderForge AI)

> **Slogan:** *"İnşaat taşeronları için el yazısı metrajdan 60 saniyede resmi birim fiyatlı teklif mektubu ve hakediş tablosu üreten web asistanı."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Büyük Zaman Kaybı:** İnşaat taşeronları (demirci, kalıpçı, elektrikçi, mekanik tesisatçı, alçı-boyacı) saha işinden dolayı bilgisayar başında saatlerce Excel'de Çevre ve Şehircilik Bakanlığı poz numaralarıyla birim fiyat teklifi hazırlamaya vakit bulamıyor.
- **Teklif Verememe Kaybı:** Birçok taşeron, teklif hazırlama sürecinin hantallığı yüzünden gelen ihaleleri ve iş fırsatlarını kaçırıyor.
- **Trend Fırsatı:** Yapay zekâ görme modelleri (Gemini Vision / multimodal) artık şantiyedeki el yazısı metraj defterlerini veya çizim kesitlerini hatasız okuyabiliyor. Taşeronun defter fotoğrafını çekip atması teklifi oluşturmak için yeterli.

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- KOBİ ölçekli inşaat taşeronları ve alt yükleniciler
- Şantiye şefleri ve metraj/keşif mühendisleri
- Bağımsız çalışan elektrik, mekanik ve tesisat ustaları
- Mimari tadilat ve dekorasyon firmaları

---

## 🚀 3. Temel Özellikler & MVP Kapsamı
1. **Fotoğraftan / PDF'ten Otomatik Metraj Okuma:**
   - Şantiyede tutulan el yazısı metraj çizelgesinin fotoğrafını yükleme.
   - OCR ve LLM ile kalem kalem malzeme (m³, ton, mtül, adet) ayrıştırma.
2. **Resmi Poz & Piyasa Fiyat Eşleştirme:**
   - Çevre ve Şehircilik Bakanlığı güncel birim fiyat kütüphanesi veya taşeronun kendi malzeme kâr marjını otomatik uygulama.
3. **Tek Tıkla Kurumsal PDF Teklif Mektubu:**
   - Şirket logolu, kaşe-imza alanlı, şartnameli ve ödeme planlı resmi teklif çıktısı.
4. **WhatsApp Paylaşım Köprüsü:**
   - Hazırlanan teklif özetini ve PDF bağlantısını doğrudan ana müteahhide WhatsApp üzerinden gönderme.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Freemium:** Ayda 3 teklif ücretsiz.
- **Pro Abonelik (SaaS):** 790 ₺ / ay (Sınırsız teklif üretimi, Bakanlık pozları kütüphanesi, özel antetli kağıt).
- **Takım / Şantiye Paketi:** 1.990 ₺ / ay (5 kullanıcı, ortak malzeme fiyat listesi, onay akışı).

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **Togal.AI** (ABD — Yapay zekayla plan ve metraj çıkarma, $100M+ değerleme).
- **Buildxact** (Avustralya/ABD — Küçük müteahhitler için teklif yazılımı).

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **Stack:** Next.js 15 / Vanilla ES Modules + Tailwind CSS + Gemini Vision API + Supabase / Cloud Firestore.
- **11Hopem Hızında MVP:** 4 - 6 Gün.
- **Fizibilite Puanı:** 9.2 / 10 | **Gelir Potansiyeli:** Yüksek (Doğrudan para kazandıran B2B araç).
