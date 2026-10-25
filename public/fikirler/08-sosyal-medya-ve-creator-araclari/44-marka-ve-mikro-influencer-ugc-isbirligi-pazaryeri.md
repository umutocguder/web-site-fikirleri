# Fikir 44: Marka ve Mikro-İçerik Üreticisi UGC İşbirliği Pazaryeri (UGCBridge / CollabSphere)

> **Slogan:** *"E-ticaret butikleri ile 2k-50k takipçili güvenilir mikro-içerik üreticilerini bir araya getiren; ücretsiz ürün gönderimi veya 500-2.000 ₺ bütçeli video çekim anlaşmalarını emanet hesap (Escrow) güvencesiyle yöneten işbirliği pazaryeri."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **UGC (Kullanıcı Tarafından Üretilen İçerik) Çılgınlığı:** TikTok ve Instagram reklamlarında cilalı prodüksiyon videoları yerine, el kamerasıyla çekilmiş samimi kullanıcı deneyim videoları (UGC) 3 kat daha fazla satış getiriyor.
- **Ajanslar Çok Pahalı, DM'ler Güvensiz:** Butiklerin büyük influencer ajanslarına 50.000 ₺ verecek bütçesi yok. Instagram DM'den anlaşılan fenomenler ise çoğu zaman ücretsiz ürünü alıp videoyu çekmeden ortadan kayboluyor.
- **Fırsat:** Markanın kampanya açtığı (Örn: *"Kozmetik kremimiz için 30 saniyelik samimi kutu açılış videosu arıyoruz - Bütçe: 1.000 ₺ + Ürün Hediye"*), onaylanan üretici videoyu yükleyip marka onaylayana kadar paranın havuzda (Escrow) tutulduğu güvenli bir UGC pazaryeri!

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Trendyol, Shopify ve Instagram butikleri, kozmetik, takı ve giyim markaları.
- Takipçi sayısından bağımsız olarak kaliteli dikey video çekebilen genç içerik üreticileri (UGC Creators).
- Müşterileri için sürekli yeni video reklam kreatifine ihtiyaç duyan performans pazarlama ajansları.

---

## 🚀 3. Temel Özellikler & Mimari Kapsam
1. **İki Taraflı İş İlanı & Başvuru Paneli:**
   - Markalar bütçe, brief ve ürün detayını girer; içerik üreticileri tek tıkla geçmiş video örnekleriyle başvurur.
2. **Güvenli Emanet Havuz Sistemi (Escrow Payment):**
   - Marka anlaşma anında ücreti yatırır; ancak para içerik üreticisine yalnızca video teslim edilip marka tarafından onaylandığında aktarılır.
3. **Kargo Takip Entegrasyonu:**
   - Gönderilen hediye ürünün kargo takip numarası sisteme girilir; ürün teslim alındığında video çekim süresi (Örn: 5 gün) otomatik başlar.
4. **Telif & Reklam Kullanım Hakkı Sözleşmesi:**
   - Video yüklendiği anda markaya dijital reklamlarında kullanım hakkı veren yasal e-sözleşme otomatik imzalanır.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Pazaryeri İşlem Komisyonu:** Yapılan her video işbirliği anlaşmasından %15 - %20 platform komisyonu.
- **Marka Kampanya Listeleme Ücreti:** Öne çıkan acil kampanya ilanı için 450 ₺.
- **Ajans Sınırsız Üyelik:** Ayda 20+ video siparişi veren ajanslara özel 2.900 ₺ / ay SaaS aboneliği.

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **JoinBrands:** ABD'de TikTok ve Amazon satıcılarına mikro-UGC video sağlayan dev platform.
- **Trend.io:** E-ticaret markalarıyla içerik üreticilerini küratörlü eşleştiren lider servis.
- **Insense:** Meta ve TikTok onaylı partner UGC platformu.
- **Cohley:** Büyük markalar için içerik ve fotoğraf toplama pazaryeri.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **Tech Stack:** Next.js (Tailwind CSS) + Supabase (PostgreSQL + RLS Güvenliği) + AWS S3 / Cloudflare R2 (Büyük video yüklemeleri).
- **Ödeme & Escrow:** Iyzico Pazaryeri / Sub-merchant API veya Stripe Connect.
- **MVP Süresi:** 7 - 10 Gün.
