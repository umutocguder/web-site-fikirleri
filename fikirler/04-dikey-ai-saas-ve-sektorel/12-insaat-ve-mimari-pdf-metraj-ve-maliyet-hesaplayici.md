# AI Fikir 12: İnşaat & Mimari PDF Metraj ve Maliyet Hesaplayıcı (CostCraft AI)

> **Slogan:** *"Mimari ve statik proje PDF çizimlerinden duvar alanını, beton hacmini, demir tonajını ve seramik metrajını otomatik çıkaran; güncel Çevre Şehircilik birim fiyatlarıyla saniyeler içinde ihale ve taşeron maliyet tablosu oluşturan dikey inşaat SaaS'ı."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Metraj Çıkarmak Haftalar Sürüyor:** Bir inşaat mühendisi veya teknisyeni 50 sayfalık mimari ve statik paftalardan cetvelle veya AutoCAD üzerinde tek tek çizgi çekerek duvar, sıva, seramik ve beton hesabı yapıyor. 10.000 m² bir bina için metraj çıkarmak en az 10-15 gün sürüyor.
- **Hesap Hataları Müteahhidi Batırıyor:** Fazla sipariş edilen beton veya eksik hesaplanan demir şantiyede yüz binlerce lira israfa ve iş gecikmesine sebep oluyor.
- **Yapay Zeka Fırsatı:** Vektörel PDF paftaları okuyan ve duvar katmanlarını segmentasyonla ayıran multimodal model; binanın net/brüt alanlarını, oda oda zemin/duvar kaplama metrajlarını ve statik donatı cetvelini 2 dakikada Excel formatına döker.

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Konut ve ticari bina inşaatı yapan müteahhitler
- Taşeron firmalar (Alçıpan, şap, seramik, boya, cephe giydirme ustaları)
- Mimarlık ofisleri ve hakediş mühendisleri
- Villa ve tadilat işi yapan müteahhitler

---

## 🚀 3. Temel Özellikler & AI Mimarisi
1. **Paftadan Otomatik Metraj Çıkarımı (Takeoff):**
   - Ölçeklendirilmiş PDF paftadan mahal listesini ve duvar kalınlıklarını otomatik algılama.
2. **Çevre, Şehircilik ve İklim Değişikliği Poz Eşleştirmesi:**
   - Çıkarılan metrajları resmi poz numaralarıyla (Örn: `15.150.1005` - C25/30 Hazır Beton) doğrudan fiyatlandırma.
3. **Tek Tıkla Taşeron İhale Dosyası:**
   - Her iş kalemi için teklif isteme formatında Excel ve PDF hazırlama.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Aylık Abonelik:** 2.900 ₺ / ay (Ayda 5 proje metraj analizi).
- **Kurumsal Sınırsız:** 9.900 ₺ / ay (Sınırsız proje + Özel birim fiyat veritabanı).
- **Proje Başına Tekil Kullanım:** 1.200 ₺ / proje.

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **Togal.AI:** Mimari çizimlerden yapay zeka ile otomatik metraj çıkaran ABD lideri.
- **Kreoo:** İnşaat maliyet tahmini platformu.
- **Countfire:** Elektrik ve mekanik metraj otomasyonu.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **AI Stack:** Python OpenCV + Gemini 1.5 Pro Multimodal + Shapely / PDF2Image + PyMuPDF.
- **Frontend:** Canvas / Fabric.js (kullanıcının pafta üzerinde alanları görsel denetlemesi için).
- **MVP Süresi:** 7 - 10 Gün.
