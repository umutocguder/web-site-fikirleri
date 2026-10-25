# Fikir 49: Canlı Satış ve Ziyaretçi Sosyal Kanıt Bildirim Widget'ı (ProofPopup / FomoSignal)

> **Slogan:** *"E-ticaret sitenizin köşesinde 'Az önce İzmir'den Burak bu spor ayakkabıyı satın aldı' veya 'Şu anda 24 kişi bu otele bakıyor' bildirimleri göstererek güven aşılayan ve dönüşüm oranlarını %15 artıran hafif JavaScript widget'ı."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Terk Edilen Soğuk Siteler:** İnternetten alışveriş yapan kullanıcıların en büyük çekincesi, ilk kez girdikleri bir sitenin güvenilir olup olmadığını bilememektir. Mağazada başka kimsenin olmadığını düşünen kullanıcı sepeti terk eder.
- **Sosyal Kanıtın Gücü (Social Proof & FOMO):** İnsanlar başkalarının satın aldığını gördüğünde güven duyar ve *"Tükenmeden ben de almalıyım"* aciliyeti hisseder. Fomo.com ve UseProof gibi araçların e-ticaret sitelerinde satışları kanıtlanmış şekilde %10 ila %20 artırdığı bilinmektedir.
- **Fırsat:** Shopify, WooCommerce, Ticimax ve özel sitelere tek satırlık `<script>` etiketiyle eklenen; son siparişleri ve canlı ziyaretçi sayısını şık bildirim balonlarıyla gösteren, aylık 10 $ - 20 $ gibi çok makul bir fiyata çalışan hafif bir dönüşüm optimizasyon SaaS'ı!

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Shopify, WooCommerce, Ticimax ve İkas kullanan e-ticaret siteleri.
- Butik oteller, pansiyonlar ve tur/aktivite rezervasyon siteleri.
- Dijital kurs, bilet ve etkinlik satan web platformları.

---

## 🚀 3. Temel Özellikler & Mimari Kapsam
1. **Canlı Satış Bildirimleri (Recent Activity Popups):**
   - *"Az önce Kadıköy'den Selin Hanım 'Oversize Keten Gömlek' sipariş etti (2 dk önce)"* şeklinde gerçek satın alma bildirimleri.
2. **Canlı Sayfa Ziyaretçi Sayacı (Live Visitor Counter):**
   - Popüler ürün sayfalarında *"Şu anda bu ürünü 14 kişi inceliyor"* ibaresiyle aciliyet hissi oluşturma.
3. **Stok Azaldı Uyarısı (Low Stock Urgency):**
   - Stok sayısı 3'ün altına düşen ürünlerde *"Son 2 adet kaldı"* dinamik rozeti çıkarma.
4. **Sıfır Site Yavaşlatma (Zero Latency CDN):**
   - 10 KB boyutunda mikro kütüphane; sitenin PageSpeed ve Core Web Vitals skorunu kesinlikle düşürmez.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Starter Butik:** 190 ₺ / ay (Aylık 10.000 tekil ziyaretçiye kadar).
- **Pro E-Ticaret:** 490 ₺ / ay (Aylık 50.000 ziyaretçi + özel renk/tasarım uyarlaması).
- **Scale:** 990 ₺ / ay (Sınırsız gösterim + çoklu mağaza desteği).

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **Fomo.com:** Sosyal kanıt pazarlamasını başlatan ve milyonlarca dolar ciro yapan öncü.
- **UseProof:** YC mezunu, dönüşüm oranlarını artırmada küresel pazar lideri.
- **Nudgify:** Shopify mağazaları arasında çok popüler olan hafif bildirim eklentisi.
- **Provely:** Dijital ürün ve kurs siteleri için dönüşüm widget'ı.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **Tech Stack:** Vanilla JS (Widget Core, 8 KB) + Cloudflare Workers / Fastify (Yüksek trafikli bildirim API'si) + Redis + Next.js Admin Paneli.
- **Entegrasyonlar:** Shopify Webhooks, WooCommerce REST API, Zapier.
- **MVP Süresi:** 4 - 6 Gün.
