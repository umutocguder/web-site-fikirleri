# AI Fikir 28: Dron ve Uydu Görüntüsüyle Tarımsal Hastalık ve Sulama Tespiti (CropEye AI)

> **Slogan:** *"Tarla ve sera fotoğraflarını yapay zeka ve multispektral uydu verisiyle analiz eden; bitki hastalıklarını, yetersiz sulamayı ve yabani otları santimetre hassasiyetinde haritalayan tarım zekası."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Gözden Kaçan Tarla Salgınları:** Çiftçiler ve büyük tarım işletmeleri mantar, böcek veya su stresini fark ettiğinde genellikle tarlanın yarısı çoktan sararmış oluyor. Geç müdahale verimi %30 ila %50 düşürüyor.
- **Aşırı ve Yanlış İlaçlama:** Çiftçiler hastalığın tam yerini bilmedikleri için dönümlerce araziye gereksiz yere tonlarca kimyasal ilaç ve gübre saçıyor; bu da yüksek maliyete ve toprak kirliliğine sebep oluyor.
- **Yapay Zeka Fırsatı:** Sentinel-2 / Landsat uydularından veya çiftçinin kaldırdığı basit bir DJI dronundan gelen fotoğrafları işleyen; NDVI bitki sağlığı indeksini hesaplayıp WhatsApp'tan *"Tarlanın kuzeydoğu köşesinde pas hastalığı başladı, sadece 4. parsele ilaç atınız"* uyarısı veren tarım yapay zekası!

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- 200 dönüm üzeri arazi işleyen mısır, buğday, pamuk, ayçiçeği ve zeytin üreticileri.
- Tarım kooperatifleri, ziraat odaları ve gübre/tohum dağıtım şirketleri.
- Modern sera işletmeleri ve endüstriyel meyve bahçeleri.

---

## 🚀 3. Temel Özellikler & AI Mimarisi
1. **Multispektral NDVI ve Klorofil Analizi:**
   - Yakın kızılötesi (NIR) ışık yansımalarını hesaplayarak bitkinin fotosentez kapasitesini ve susuzluk derecesini renkli haritaya döker.
2. **YOLOv11 ile Yaprak Hastalığı Sınıflandırma:**
   - Traktör veya dron kamerasından gelen yüksek çözünürlüklü yaprak fotoğraflarında 80+ farklı mantar, bakteri ve zararlı böcek türünü tespit eder.
3. **Değişken Oranlı Reçete Haritası (VRA Prescription Map):**
   - Modern traktörlerin ve ilaçlama dronlarının bilgisayarına yüklenebilir 'nokta atışı ilaçlama koordinat dosyası' (Shapefile / GeoJSON) üretir.
4. **Çiftçi WhatsApp Bildirim Botu:**
   - Çiftçinin haritayla uğraşmasına gerek kalmadan sesli Türkçe mesajla hava durumu ve risk uyarısı gönderir.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Dönüm Başı Sezonluk Ücret:** Dönüm başına 15 ₺ - 35 ₺ / sezon (Uydu takibi + anomali alarmı).
- **Dron Analiz Paketi:** Uçuş başına 1.250 ₺ (Santimetrik yabani ot ve hastalık haritası).
- **Ziraat Bayi / Kooperatif Paneli:** Yıllık kurumsal lisans: 35.000 ₺.

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **Taranis:** 100 milyon dolardan fazla yatırım alan, yaprak düzeyinde yapay zeka tarım istihbaratı devi.
- **Gamaya:** Hiperspektral görüntülemeyle tarımsal verim artıran İsviçre merkezli AI şirketi.
- **Ceres Imaging:** Sulama ve su stresini havadan analiz eden hassas tarım platformu.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **AI Stack:** PyTorch YOLOv11 + Google Earth Engine API + Rasterio / GDAL + Gemini 1.5 Flash.
- **Harita & Coğrafi Veri:** Leaflet / Mapbox GL + GeoPandas + Sentinel Hub Open Data.
- **MVP Süresi:** 7 - 10 Gün.
