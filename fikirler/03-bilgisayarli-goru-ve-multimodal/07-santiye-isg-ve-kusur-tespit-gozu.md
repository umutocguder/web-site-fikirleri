# AI Fikir 07: Şantiye İSG & Yapı Kusur Denetim Gözü (BuildVision AI)

> **Slogan:** *"Şantiye güvenlik kameralarından baret/yelek takmayan personeli, tehlikeli alan ihlallerini, betondaki çatlak ve demir donatı hatalarını gerçek zamanlı tespit edip şantiye şefine anlık WhatsApp alarmı fırlatan bilgisayarlı görü sistemi."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **İş Kazaları ve Ağır Cezalar:** Türkiye'de inşaat sektörü iş kazalarında maalesef en riskli sektördür. İş müfettişlerinin kestiği cezalar ve olası bir kazadaki cezai/hukuki sorumluluk müteahhitleri iflasa kadar götürebilmektedir.
- **Şantiye Şefleri Her Yerde Olamaz:** 20 katlı dev bir projede şantiye şefinin aynı anda her kattaki ustaları denetlemesi fiziksel olarak imkansızdır.
- **Yapay Zeka Fırsatı:** Şantiyedeki mevcut RTSP/IP güvenlik kameralarına bağlanan YOLOv11 / RT-DETR ve Gemini Multimodal modelleri; 7/24 yorulmadan her kareyi tarar. Kasksız veya balkonda emniyet kemersiz işçi gördüğü anda kareyi kırpar ve şantiye şefinin WhatsApp'ına *"A Blok 4. kat, 1 işçi baretsiz"* uyarısı atar.

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Konut, AVM ve altyapı inşaatı yapan müteahhitlik firmaları
- Ortak Sağlık Güvenlik Birimleri (OSGB) ve İSG Uzmanları
- Yapı denetim kuruluşları ve proje müşavirleri

---

## 🚀 3. Temel Özellikler & AI Mimarisi
1. **Kişisel Koruyucu Donanım (KKD) Tespiti:**
   - Kask, fosforlu yelek, koruyucu gözlük ve emniyet kemeri denetimi.
2. **Tehlikeli Alan & Asansör Boşluğu İhlali:**
   - Şantiyede belirlenen sanal sınırları (Geofence) aşan işçileri algılama.
3. **Beton Çatlak & Donatı Pas Payı Analizi:**
   - Mühendisin cep telefonuyla çektiği kolon/kiriş fotoğraflarında milimetrik çatlak genişliğini ve donatı hatalarını ölçen görsel analizör.
4. **Günlük Otonom İSG Raporu:**
   - Her akşam şantiye genel müdürüne PDF formatında ihlal istatistikleri ve risk skor tablosu gönderimi.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Kamera Başı Aylık Lisans:** 650 ₺ / kamera / ay (Bulut analiz + anlık WhatsApp uyarısı).
- **Proje Başı Kurulum & Şantiye Paketi:** 10 kamera için 7.500 ₺ / ay.
- **Mobil Kusur Tespit Uygulaması:** Şantiye mühendisi başına 490 ₺ / ay.

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **ViAct.ai:** Asya ve Avrupa'da şantiye güvenliği için 100 milyon $+ değerlenen AI platformu.
- **OpenSpace.ai:** 360° kameralarla şantiye ilerleme ve kusur takibi devi.
- **Kwant.ai:** Akıllı şantiye iş gücü ve güvenlik analitiği.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **AI Stack:** Python + YOLOv11 / OpenCV + Gemini 1.5 Flash (Kusur raporlama).
- **Video Akışı:** RTSP stream, WebRTC, Edge Docker container (yerel mini PC veya bulut GPU).
- **MVP Süresi:** 8 - 12 Gün.
