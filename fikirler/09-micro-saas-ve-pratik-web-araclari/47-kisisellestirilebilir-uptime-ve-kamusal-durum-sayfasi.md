# Fikir 47: Kişiselleştirilebilir Uptime ve Canlı Durum Sayfası (PingPulse / StatusLight)

> **Slogan:** *"Web siteniz, mobil uygulamanız veya API'niz çöktüğünde 30 saniye içinde WhatsApp, Telegram ve SMS ile haber veren; müşterileriniz için alan adınıza özel (status.sirketiniz.com) şık durum sayfası sunan hafif izleme aracı."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Sitelerin Sessizce Çökmesi:** Bir e-ticaret sitesi veya mobil uygulamanın veritabanı çöktüğünde ya da SSL sertifikası bittiğinde, kurucular bunu ancak saatler sonra öfkeli müşteri mesajlarından öğreniyor.
- **Enterprise Araçlar Fazla Karmaşık:** Datadog, New Relic veya Dynatrace gibi araçlar küçük web projeleri için fazla karmaşık, ayarları günler alıyor ve faturaları kontrolsüzce artıyor. UptimeRobot ise eski arayüzlü ve SMS paketleri pahalı.
- **Fırsat:** Sadece sitenin URL'sini girerek 30 saniyelik aralıklarla HTTP, SSL ve port kontrolü yapan; kesinti anında doğrudan kurucunun telefonuna WhatsApp/Telegram alarmı çalan ve müşterilere güven veren şık koyu/açık temalı canlı bir Status Page sunan sade Micro-SaaS!

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Kendi SaaS projelerini ve müşteri web sitelerini yayında tutmak zorunda olan yazılım ajansları.
- E-ticaret butikleri ve Shopify satıcıları (ödeme sayfası veya site kesintilerini anında yakalamak için).
- Portföyünde 5-50 web sitesi barındıran hosting ve WordPress bakım uzmanları.

---

## 🚀 3. Temel Özellikler & Mimari Kapsam
1. **Çok Bölgeli HTTP / SSL / Ping Kontrolü:**
   - Frankfurt, İstanbul ve Londra sunucularından sitenin yanıt kodunu (200 OK) ve SSL sertifika geçerlilik gün sayısını sürekli denetleme.
2. **Anında WhatsApp & Telegram Alarmları:**
   - E-posta spamlere düşebileceği için sitenin kapandığı ve tekrar ayağa kalktığı anda doğrudan cep telefonuna anlık mesaj atma.
3. **Kişiselleştirilebilir Durum Sayfası (Hosted Status Page):**
   - Müşterilerin görebileceği, son 90 günlük uptime çubuk grafiğini gösteren ve planlı bakımları duyuran modern durum sayfası (`status.markaniz.com`).
4. **Hafif JavaScript Heartbeat / Cron İzleme:**
   - Arka planda çalışan zamanlanmış görevlerin (Cron job) veya veri yedeklemelerinin aksamadan çalıştığını doğrulayan ping endpoint'i.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Hobi Planı:** 149 ₺ / ay (5 monitör, 3 dakikalık kontrol, Telegram bildirimi).
- **Pro Girişim:** 490 ₺ / ay (25 monitör, 30 saniyelik kontrol, WhatsApp + SMS alarmı, özel alan adı status page).
- **Ajans:** 1.490 ₺ / ay (100 monitör, sınırsız status page, müşteri bildirim listesi).

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **Better Stack (Better Uptime):** 500 milyon dolar değerlemeye ulaşan, şık tasarımıyla pazarı domine eden uptime platformu.
- **UptimeRobot:** Dünyanın en eski ve en çok kullanılan temel uptime izleme aracı.
- **Instatus:** Hızlı ve uygun fiyatlı durum sayfaları sunan popüler indie hacker SaaS'ı.
- **Statuspage by Atlassian:** Büyük şirketler için kurumsal standart.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **Tech Stack:** Go veya Node.js Ping Worker (Global Cloudflare Workers / Fly.io düğümleri) + PostgreSQL + Next.js Dashboard.
- **Bildirimler:** Telegram Bot API, WhatsApp Cloud API / Netgsm SMS Gateway.
- **MVP Süresi:** 4 - 6 Gün.
