# Fikir 45: Müşteri Geri Bildirim Oylama ve Şeffaf Yol Haritası Panosu (FeatureVote / RoadmapKit)

> **Slogan:** *"Kullanıcılarınızın yeni özellik taleplerini paylaşabildiği, diğer kullanıcıların bunları oylayabildiği (Upvote), ekibinizin yol haritasını ve sürüm notlarını (Changelog) sergilediği tek tıkla kurulan hafif geri bildirim portalı."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Müşterilerin Ne İstediğini Bilmeme Çıkmazı:** Yazılım ve SaaS kurucuları yeni özellik geliştirirken genellikle kendi tahminlerine göre hareket ediyor. Dağınık e-postalarda, destek biletlerinde ve WhatsApp mesajlarında kaybolan müşteri istekleri organize edilemiyor.
- **Canny.io Astronomik Fiyat İstiyor:** Sektör lideri Canny.io küçük ekiplerden aylık 400 $ (yaklaşık 14.000 ₺) istiyor. Küçük girişimler ve orta ölçekli projeler bu parayı ödeyemediği için basit bir oylama panosundan mahrum kalıyor.
- **Fırsat:** Şirketin kendi alan adına (`feedback.sirketiniz.com`) bağlanan, kullanıcıların tek tıkla fikir bırakıp birbirlerinin fikrine oy verebildiği, ekibin ise *Planlandı*, *Yapılıyor*, *Yayınlandı* sütunlarıyla şeffaf yol haritası sunduğu uygun fiyatlı ve modern bir geri bildirim SaaS'ı!

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- B2B ve B2C SaaS kurucuları, mobil uygulama geliştiricileri ve indie hacker'lar.
- E-ticaret platformları ve üyelikli topluluk siteleri.
- Müşterilerini ürün geliştirme sürecine dahil etmek isteyen ürün yöneticileri (PM).

---

## 🚀 3. Temel Özellikler & Mimari Kapsam
1. **Upvote & Özellik Oylama Tahtası:**
   - Kullanıcıların yeni fikirler önerebildiği, popülerliğe göre sıralanan ve yorum yapılabilen etkileşimli pano.
2. **Kamusal Yol Haritası (Public Roadmap):**
   - *Gelecek*, *Geliştiriliyor*, *Tamamlandı* şeklinde Trello/Kanban tarzı görsel ilerleme ekranı.
3. **Dahili Sürüm Notları (In-App Changelog):**
   - Yeni bir özellik yayınlandığında sitenin köşesinde parlayan *"Neler Yeni?"* açılır penceresi (Widget).
4. **Tek Tıkla Giriş (SSO / Magic Link):**
   - Kullanıcının şifreyle uğraşmadan Google, GitHub veya ana uygulamanın oturumuyla (JWT SSO) otomatik tanınması.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Hobi / Erken Aşama:** 190 ₺ / ay (1 proje, 100 aktif geri bildirim).
- **Pro Girişim:** 590 ₺ / ay (Sınırsız geri bildirim, özel alan adı, Changelog widget'ı).
- **Takım / Şirket:** 1.450 ₺ / ay (Özel CSS temalandırma, SSO entegrasyonu, öncelikli destek).

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **Canny.io:** Yıllık milyonlarca dolar ciro yapan geri bildirim pazar lideri.
- **Featurebase:** Hızlı ve uygun fiyatlı modern Canny alternatifi.
- **Upvoty:** Solo girişimciler arasında popüler olan hafif geri bildirim aracı.
- **LaunchNotes:** Büyük teknoloji ekipleri için sürüm duyuru ve yol haritası platformu.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **Tech Stack:** Next.js + Tailwind CSS + Prisma + PostgreSQL + Vercel Edge.
- **Widget Dağıtımı:** Tek satırlık `<script src="...">` gömülü iframe veya web component.
- **MVP Süresi:** 4 - 6 Gün.
