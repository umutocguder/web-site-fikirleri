# AI Fikir 08: Perakende Raf Doluluk & Fiyat Etiketi Denetçisi (ShelfEye AI)

> **Slogan:** *"Süpermarket ve mağaza reyonlarında cep telefonu veya mağaza kamerasıyla çekilen fotoğraflardan boşalan rafları (Out-of-Stock), yanlış basılan fiyat etiketlerini ve rakip ürün payını saniyeler içinde analiz eden yapay zeka."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Rafta Olmayan Ürün Satılamaz (Kayıp Ciro):** Bir müşteri markete gittiğinde aradığı şampuanı veya kahveyi rafta bulamazsa (oysa arka depoda vardır), %70 ihtimalle rakip markayı alır veya satın almaktan vazgeçer. Perakende zincirleri sırf bu yüzden cirolarının %4-8'ini kaybeder.
- **Kasa ile Raf Fiyat Farkı Skandalları:** Enflasyonist dönemde fiyatlar sürekli değişiyor. Raftaki etiket 80 ₺ iken kasada 110 ₺ çıktığında tüketici hakem heyeti cezaları ve müşteri güven kaybı yaşanıyor.
- **Yapay Zeka Fırsatı:** Mağaza personelinin günde bir kez reyon boyunca yürüyüp telefon kamerasıyla video çekmesi yeterlidir. Multimodal AI reyonu tarar; *"3. rafta Nutella bitmiş depodan getirin"*, *"Sütaş sütün raf etiketi 45 ₺ ama sistemde 52 ₺ güncelleyin"* direktifini anında verir.

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Yerel ve ulusal süpermarket zincirleri
- Hızlı tüketim (FMCG) markaları (Unilever, Nestlé, P&G saha denetçileri)
- Eczane depoları ve kozmetik perakendecileri

---

## 🚀 3. Temel Özellikler & AI Mimarisi
1. **Raf Payı (Share of Shelf) & Stoksuzluk Tespiti:**
   - Ürün yüzlerini (Facing) sayar, boşlukları santimetrik olarak tespit eder.
2. **OCR Fiyat Etiketi Eşleştirme:**
   - Reyondaki kağıt etiketi okur, ERP / Kasa veritabanı fiyatıyla karşılaştırıp uyumsuzlukları işaretler.
3. **Planoğram Uyumluluk Skoru:**
   - Merkez ofisin belirlediği dizilim şablonuna mağazanın ne kadar uyduğunu % olarak puanlar.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Mağaza Başına Aylık Abonelik:** 1.250 ₺ / şube / ay.
- **FMCG Marka Saha Denetimi:** Marka başına aylık 15.000 ₺ (500 mağaza denetim raporu).

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **Trax Retail:** Perakende bilgisayarlı görü alanında 2 milyar $ değerinde global lider.
- **ParallelDots (ShelfWatch):** FMCG markaları için raf analitiği.
- **Ailet:** Mağaza içi görüntü tanıma çözümü.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **AI Stack:** Ultralytics YOLOv11 (Özel ürün tespiti) + Google Cloud Vision / Gemini Multimodal (OCR & Anomali tespiti).
- **Frontend / Mobil:** Flutter / PWA + Tailwind.
- **MVP Süresi:** 7 - 10 Gün.
