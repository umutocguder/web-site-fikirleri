# Fikir 50: Terk Edilmiş Sepet Otomatik WhatsApp Kurtarma Motoru (CartRescue / SepetKurtaran)

> **Slogan:** *"Ödeme adımına kadar gelip telefonunu yazdıktan sonra sepeti terk eden müşterilere; 30 dakika sonra kişiye özel sepet linki ve %10 indirim kuponuyla WhatsApp mesajı atan e-ticaret kurtarma motoru."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Sepetlerin %70'i Kasada Kalıyor:** Tüm dünyada ve Türkiye'de e-ticaret sepetlerinin ortalama %68 ila %74'ü ödeme tamamlanmadan terk ediliyor. Butikler bu trafiği çekmek için Meta ve Google reklamlarına binlerce lira döküyor; ancak kasadaki kaçakları durduramıyor.
- **E-Postalar Açılmıyor, WhatsApp %98 Açılıyor:** Geleneksel terk edilmiş sepet e-postalarının açılma oranı yalnızca %10-15 civarındadır ve spamlere düşer. Oysa WhatsApp mesajlarının açılma oranı **%98**'dir ve mesajların %45'ine tıklanır.
- **Fırsat:** Shopify, Ticimax, İkas veya WooCommerce mağazasına entegre olan; telefon numarası girildiği anda sepeti hafızaya alan, sipariş tamamlanmazsa 30 dakika sonra samimi bir dille *"Merhaba Ayşe Hanım, sepetinizdeki Elbise için %10 hediye kuponunuz hazır! Tek tıkla tamamlayabilirsiniz: [Link]"* WhatsApp mesajı atan ve ciroya anında %15-25 doping yapan kurtarma SaaS'ı!

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Ayda en az 100 sipariş alan kadın giyim, takı, kozmetik ve ayakkabı e-ticaret siteleri.
- Shopify ve İkas kullanan hızlı tüketim (D2C) markaları.
- Müşterilerini geri kazanmak isteyen e-ticaret pazarlama ajansları.

---

## 🚀 3. Temel Özellikler & Mimari Kapsam
1. **Gerçek Zamanlı Sepet Yakalama (Exit-Intent Field Listener):**
   - Müşteri ödeme formunda telefon numarasını yazdığı anda arka planda güvenle kaydeder.
2. **Akıllı Zamanlamalı WhatsApp Dizisi (Drip Recovery):**
   - 30. dakikada sepet hatırlatması, 24 saat sonra ise tükenmek üzere uyarısı ve indirim kuponu sunar.
3. **Tek Tıkla Sepet Yükleme (1-Click Cart Restore):**
   - Müşteri WhatsApp'taki linke tıkladığında ürünler, bedenler ve indirim kuponu otomatik yüklenmiş olarak doğrudan kart ödeme ekranına düşer.
4. **Çift Yönlü Canlı Destek Geçişi:**
   - Müşteri WhatsApp'tan *"Kalıplar dar mı?"* diye yanıtlarsa, konuşma anında butik sahibinin WhatsApp Business paneline canlı olarak devreder.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Temel Abonelik:** 990 ₺ / ay (Aylık 500 WhatsApp kurtarma mesajı dahil).
- **Pro Büyüme:** 2.450 ₺ / ay (2.000 mesaj + dinamik kupon üretimi).
- **Kurtarılan Ciro Komisyonu (Opsiyonel No-Cure No-Pay):** Sıfır sabit ücret, kurtarılan net sipariş tutarının %8'i.

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **Cartloop:** ABD ve Avrupa'da metin mesajlarıyla (SMS/RCS) sepet kurtararak milyonlarca dolar ARR yapan platform.
- **Omnisend:** E-ticaret için terk edilmiş sepet ve çok kanallı pazarlama devi.
- **LiveRecover:** Terk edilen sepetleri insan temsilcilerle SMS üzerinden kurtaran girişim.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **Tech Stack:** Node.js / Express + PostgreSQL + Redis (Kuyruk ve Gecikmeli Gönderim) + Meta WhatsApp Cloud API / Netgsm WhatsApp.
- **Entegrasyonlar:** Shopify Webhooks, İkas Webhooks, WooCommerce API.
- **MVP Süresi:** 5 - 7 Gün.
