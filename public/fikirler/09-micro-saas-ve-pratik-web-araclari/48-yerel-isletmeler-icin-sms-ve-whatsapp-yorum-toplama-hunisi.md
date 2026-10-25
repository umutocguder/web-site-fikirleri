# Fikir 48: Yerel İşletmeler İçin SMS ve WhatsApp Yorum Toplama Hunisi (ReviewCollect / StarBooster)

> **Slogan:** *"Müşteri hizmet aldıktan sonra tek tıkla SMS veya WhatsApp memnuniyet linki gönderen; 5 yıldız verenleri doğrudan Google Haritalar'a yönlendirip yorum rekoru kırdıran, 1-3 yıldız verenlerin şikayetini ise kamuya kapalı şekilde patrona ileten akıllı yorum kalkanı."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Memnun Müşteriler Sessiz, Kızgınlar Yorumcu:** Bir restoranda, klinikte veya kuaförde harika hizmet alan müşterilerin %95'i eve gidince yorum yazmayı unutur. Ancak garsona kızan veya yemeği beğenmeyen %5'lik kesim anında Google Haritalar'a girip 1 yıldız yapıştırır. Bu durum işletmenin puanını haksız yere düşürür.
- **Amerikan Araçları Çok Pahalı:** Podium veya Birdeye gibi ABD yazılımları aylık 300 $ - 400 $ (10.000 ₺+) istiyor ve yerel Türk SMS başlıklarıyla çalışmıyor.
- **Fırsat:** Kasiyerin veya hekimin hastanın/müşterinin telefonunu girdiği ya da kasada pos cihazı yanındaki şık bir QR kod ile; müşteriye *"Bizi değerlendirin"* diyen, 5 yıldız seçenleri doğrudan Google Yorum yazma ekranına atan, düşük yıldız seçenlere ise *"Özür dileriz, sorunu yöneticimize iletin"* formu açarak şikayeti sessizce içeride çözen akıllı bir yorum filtresi!

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Restoranlar, kafeler, meyhaneler ve butik pastaneler.
- Özel diş hekimleri, dermatoloji poliklinikleri ve güzellik merkezleri.
- Oto ekspertizleri, tamirhaneler ve lastik bayileri.

---

## 🚀 3. Temel Özellikler & Mimari Kapsam
1. **İki Aşamalı Akıllı Yönlendirme Hunisi (Smart Rating Filter):**
   - Müşteri 4-5 yıldız verirse sistem doğrudan Google Haritalar / TripAdvisor yorum sayfasına yönlendirir.
   - Müşteri 1-3 yıldız verirse şikayet formu açılır ve Google'a yansımadan doğrudan işletme sahibinin cep telefonuna WhatsApp'tan düşer.
2. **Otomatik SMS / WhatsApp Tetikleyici:**
   - Adisyo, SambaPOS veya Excel müşteri listesi yüklendiğinde hizmetten 1 saat sonra otomatik mesaj atma.
3. **NFC & QR Masa Kartı Desteği:**
   - Masaya veya kasaya koyulacak, telefon yaklaştırıldığında (NFC) anında açılan temassız değerlendirme sayfası.
4. **Çalışan Bazlı Yorum Takibi:**
   - Hangi garsonun veya hekimin daha çok 5 yıldızlı yorum topladığını gösteren personel performans karnesi.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Tek İşletme:** 690 ₺ / ay (Aylık 300 SMS dahil + sınırsız QR/WhatsApp değerlendirme).
- **Pro İşletme:** 1.250 ₺ / ay (1.000 SMS dahil + NFC masa standı hediyesi).
- **Zincir / Bayi:** Şube başı 450 ₺ / ay.

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **Podium:** 3 milyar dolar değerlemeyle yerel esnafın yorum ve mesajlaşma lideri.
- **Birdeye:** Çok lokasyonlu markalar için müşteri deneyimi ve itibar devi.
- **NiceJob:** Küçük işletmeler için yorum toplama ve ciro artırma platformu.
- **Swell:** Sağlık klinikleri ve yerel işletmeler için hasta değerlendirme SaaS'ı.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **Tech Stack:** Next.js (Mobil Uyumlu Temiz UI) + Tailwind CSS + PostgreSQL + Netgsm / İletiMerkezi SMS API.
- **NFC Donanımı:** NTAG213 / NTAG215 programlanabilir şık pleksi masa kartları.
- **MVP Süresi:** 4 - 6 Gün.
