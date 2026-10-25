# AI Fikir 32: Lojistik Boş Dönüş ve Navlun Fiyat Eşleştirme Motoru (FreightMatch AI)

> **Slogan:** *"İstanbul'dan Adana'ya yük götürüp geri boş dönmek üzere olan kamyonları; Adana'dan yük göndermek isteyen fabrikalarla anlık eşleştiren ve adil spot navlun fiyatını belirleyen akıllı lojistik brokerı."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **%30 Boş Kamyon İsrafı (Deadhead Miles):** Türkiye ve Avrupa kara taşımacılığında tırların yaklaşık %25 ila %35'i dönüş yolculuğunu boş dorse ile yapıyor. Bu durum hem milyonlarca litre boşa harcanan mazot hem de nakliyeci için devasa bir ciro kaybı anlamına geliyor.
- **WhatsApp Gruplarında İlkel Pazarlık:** Fabrikalar ve nakliye komisyoncuları yük bulmak için yüzlerce düzensiz WhatsApp ve Telegram grubuna *"Adana - İstanbul acil kapalı kasa aranıyor"* mesajı atıp saatlerce telefonla pazarlık yapıyor.
- **Yapay Zeka Fırsatı:** Kamyon şoförlerinin rotalarını ve tahmini boşalma saatlerini dinleyen; fabrikaların yük ilanlarıyla dorse tipi (tenteli, frigo, damper), tonaj ve rota bazında saniyeler içinde akıllı eşleştirme yapan ve mazot fiyatına göre anlık spot navlun teklifi üreten yapay zeka brokerı!

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Bağımsız kamyon ve tır sahipleri ile küçük nakliye kooperatifleri.
- Düzenli şehirlerarası sevkiyat yapan sanayi fabrikaları, toptancılar ve e-ticaret lojistik depoları.
- Nakliye komisyoncuları ve 3PL lojistik firmaları.

---

## 🚀 3. Temel Özellikler & AI Mimarisi
1. **Dinamik Rota ve Boş Kapasite Eşleştirme:**
   - Şoförün teslimat yapacağı noktaya 50 km yarıçapındaki fabrikaların hazır bekleyen yüklerini anında listeler.
2. **Prediktif Navlun Fiyatlandırma Motoru:**
   - Rota mesafesi, gişe/köprü ücretleri, güncel motorin fiyatı ve bölgesel arz-talep dengesine göre adil spot piyasa fiyatını hesaplar.
3. **WhatsApp Botu Üzerinden Aracısız İletişim:**
   - Şoförün uygulama indirmesine bile gerek kalmadan WhatsApp'tan *"Adana Organize'de 22 ton paletli yük var, navlun 28.000 ₺, almak ister misin?"* mesajı gönderir.
4. **Dijital İrsaliye & Güvenli Ödeme:**
   - Teslimat anında şoförün çektiği ıslak imzalı irsaliye fotoğrafını OCR ile doğrular ve fabrika onayına sunar.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Başarılı Eşleştirme Komisyonu:** Eşleşen navlun bedeli üzerinden %3 - %5 brokerlık payı.
- **Fabrika / Sanayici Aboneliği:** Aylık 4.900 ₺ / ay (Garantili araç bulma ve fiyat analitiği).
- **Şoför / Kooperatif Üyeliği:** Ücretsiz temel erişim veya öncelikli yük bildirimi için 450 ₺ / ay.

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **Convoy (Flexport):** ABD'de dijital yük brokerlığını başlatan milyar dolarlık lojistik platformu.
- **Sennder:** Avrupa'nın en büyük dijital kara yolu taşımacılığı unicorn'u.
- **Transfix:** Yapay zeka destekli navlun fiyatlama ve eşleştirme lideri.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **AI Stack:** OptaPlanner / OR-Tools (Rota ve Yük Optimizasyonu) + Gemini 1.5 Flash (WhatsApp NLP & İrsaliye OCR).
- **Backend & Altyapı:** Node.js / Go microservices + PostGIS + WhatsApp Cloud API.
- **MVP Süresi:** 7 - 10 Gün.
