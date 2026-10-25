# AI Fikir 31: Restoran ve Kafeler İçin Dinamik Reçete ve Maliyet Optimizasyonu (MenuProfit AI)

> **Slogan:** *"Halden ve toptancıdan gelen fatura fotoğraflarını okuyup tabağın anlık gramaj maliyetini hesaplayan; kâr marjı eriyen yemekleri uyararak dijital menü fiyatlarını optimize eden restoran zekası."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Enflasyonist Ortamda Erimeyen Maliyet:** Et, peynir, yağ ve sebze fiyatları her hafta değişiyor. Restoran sahipleri ise menü fiyatlarını 3-6 ayda bir güncelliyor. Birçok restoran sahibi en çok satan popüler yemeğini aslında zararına sattığının farkında bile değil.
- **Manuel Reçete Hamallığı:** Bir hamburgerin içindeki 150 gr kıyma, 1 dilim cheddar, 20 gr sos ve susamlı ekmeğin maliyetini Excel'de her toptancı faturasından sonra tek tek hesaplamak imkansız derecede zaman alıcıdır.
- **Yapay Zeka Fırsatı:** Mutfak şefinin telefonla çektiği toptancı fatura fotoğraflarını OCR ile okuyan; gramaj reçetelerine anında dağıtan, *"Kıymaya %12 zam geldi, Köri Soslu Tavuk tabağınızın kâr marjı %18'e düştü, fiyatı 240 ₺'den 280 ₺'ye çekmelisiniz"* tavsiyesi veren ve QR menüyü tek tıkla güncelleyen yapay zeka finans müdürü!

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Bağımsız restoranlar, kafeler, bistro ve pub işletmeleri.
- Şube sayısı 3 ila 20 arasında olan butik franchise zincirleri.
- Yemek fabrikaları (Catering) ve otel mutfakları.

---

## 🚀 3. Temel Özellikler & AI Mimarisi
1. **Multimodal Fatura Ayrıştırma (Invoice-to-Recipe OCR):**
   - Karışık, buruşuk veya el yazılı toptancı fişlerini okur; birim kilogram/litre fiyatlarını reçete veritabanına otomatik işler.
2. **Tabak Başı Net Gıda Maliyeti (Food Cost %):**
   - Her menü kaleminin gerçek gıda maliyet oranını (Örn: %28 ideal sınır) anlık hesaplar.
3. **Boston Matrix Menü Mühendisliği:**
   - POS satış verisiyle reçete maliyetini birleştirir; yemekleri *Yıldızlar* (Yüksek kâr, yüksek satış), *Puzzles* (Yüksek kâr, düşük satış), *Plowhorses* (Düşük kâr, yüksek satış) ve *Dogs* (Zarar edenler) olarak 4 gruba ayırır.
4. **Tek Tıkla QR Menü Senkronizasyonu:**
   - Menü fiyat artışlarını Adisyo, SambaPOS veya işletmenin dijital QR menüsüne anında yansıtır.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Tek Restoran Paketi:** 1.490 ₺ / ay (Sınırsız fatura tarama ve reçete takibi).
- **Çoklu Şube (3-10 Şube):** 4.500 ₺ / ay.
- **Kurumsal Catering:** 9.900 ₺ / ay.

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **MarginEdge:** ABD'de binlerce restoranın arka ofis ve gıda maliyeti yönetimini üstlenen pazar lideri.
- **Plate IQ:** Fatura otomasyonu ve restoran zekası sunan başarılı girişim.
- **Toast Analytics:** Restoran POS ve menü mühendisliği platformu.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **AI Stack:** Gemini 1.5 Flash (Görsel Fatura OCR & Tablo Ayrıştırma) + Python Pandas Reçete Motoru.
- **Entegrasyonlar:** SambaPOS API, Adisyo Webhooks, QR Menu Dinamik API.
- **MVP Süresi:** 6 - 8 Gün.
