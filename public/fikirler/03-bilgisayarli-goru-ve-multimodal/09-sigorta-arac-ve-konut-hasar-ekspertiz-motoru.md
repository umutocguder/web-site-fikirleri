# AI Fikir 09: Sigorta Araç & Konut Fotoğraftan Hasar Ekspertiz Motoru (ClaimVision AI)

> **Slogan:** *"Kaza yapan aracın veya su basan evin fotoğraflarını yükleyen kullanıcıya saniyeler içinde hasar gören parçaları listeleyen, değişecek/onarılacak ayrımını yapan ve tahmini tamir faturasını çıkaran yapay zeka eksperi."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Ekspertiz Süreci Günler Sürüyor:** Bir trafik kazasında veya ev hasarında eksperin gelmesi 3-5 gün, hasar raporunun yazılması ise 10-15 günü buluyor. Müşteri ikame araç beklerken veya tamirhanede arabasız kalırken mağdur oluyor.
- **Sigorta Şirketleri İçin Şişirilmiş Faturalar:** Sanayideki tamirhaneler hasarlı parçayı düzeltmek yerine sıfır parça yazarak veya gereksiz işçilik ekleyerek hasar dosyasını %40-60 oranında şişirebiliyor.
- **Yapay Zeka Fırsatı:** Sürücü kaza anında olay yerinden 4 açıdan fotoğraf çektiğinde; Gemini Multimodal ve parça segmentasyon modelleri tampon, far, çamurluk hasarlarını ayırır; orjinal parça kodlarıyla Tramer/Sigorta veritabanı fiyatlarını eşleştirerek anında ön ekspertiz raporu sunar.

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Kasko ve trafik sigortası yapan sigorta acenteleri ve genel merkezler
- Bağımsız sigorta eksperleri ve hasar yönetim şirketleri
- Araç kiralama (Rent a Car) filoları (Teslim alırken/verirken hasar tespiti)
- İkinci el araç satış platformları

---

## 🚀 3. Temel Özellikler & AI Mimarisi
1. **Araç Parçası & Hasar Sınıflandırma (Mask R-CNN / YOLO):**
   - Çizik, göçük, yırtılma, kırılma ve şasi yamukluğunu şiddet derecesine göre (Hafif, Orta, Ağır) derecelendirme.
2. **Onarım vs. Değişim Karar Motoru:**
   - Parçanın boyanarak kurtarılıp kurtarılamayacağını sigorta mevzuatına göre denetleme.
3. **Tahmini Maliyet & Parça Fiyat Cetveli:**
   - Güncel yedek parça piyasası ve işçilik saat ücretlerine göre otomatik masraf çıkarma.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Ekspertiz Başına Ücret:** Rapor başına 150 ₺ - 350 ₺.
- **Rent a Car Filo Aboneliği:** Araç başına aylık 75 ₺ (Teslim anı AI hasar karşılaştırma).
- **Sigorta Şirketi API Entegrasyonu:** Yıllık 150.000 ₺+ kurumsal lisans.

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **Tractable.ai:** Sigorta hasar tespiti alanında 1 milyar $ değerinde global Unicorn.
- **Balyo / Shift Technology:** Dolandırıcılık ve hasar otomasyonu.
- **Snapsheet:** Dijital hasar talep platformu.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **AI Stack:** Python FastAPI + PyTorch / YOLOv11 Segmentasyon + Gemini 1.5 Pro Multimodal.
- **Veritabanı:** PostgreSQL + PostGIS (kaza konumu tespiti) + S3 (yüksek çözünürlüklü fotoğraflar).
- **MVP Süresi:** 8 - 12 Gün.
