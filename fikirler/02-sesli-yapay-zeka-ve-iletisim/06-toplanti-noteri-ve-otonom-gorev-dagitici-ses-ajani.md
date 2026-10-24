# AI Fikir 06: Akıllı Toplantı Noteri & Otonom Görev Dağıtıcı Ses Ajanı (ActionNote AI)

> **Slogan:** *"Google Meet, Zoom veya yüz yüze telefon görüşmelerini dinleyen; kimin ne söylediğini ayıran, alınan kararları özetleyen ve aksiyon maddelerini Trello, Notion ve Jira'ya otomatik görev kartı olarak açan ses ajanı."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Toplantı Notları Asla Tutulmuyor:** 1 saat süren toplantılarda herkes konuşuyor, harika kararlar alınıyor; ancak toplantı bittiğinde kimin hangi işi ne zamana teslim edeceği unutuluyor veya not tutan kişi işi aksatıyor.
- **Toplantı Özetleri İşe Yaramıyor:** Geleneksel transkript araçları 20 sayfalık ham metin veriyor; kimse oturup 20 sayfa transkript okumak istemiyor. İnsanların ihtiyacı: *"Kim, ne zaman, hangi görevi yapacak?"* netliğidir.
- **Yapay Zeka Fırsatı:** Konuşmacı ayrımı (Diarization) ve eyleme dönüştürülebilir görev çıkarımı (Action Item Extraction) ile; toplantıda *"Umut, cuma gününe kadar Vercel deploy'unu tamamlayacak"* dendiği anda Trello'da `Umut` etiketli, son teslim tarihi `Cuma` olan kartı otomatik oluşturan otonom yönetici asistanı!

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Yazılım ve ürün geliştirme takımları
- Reklam, pazarlama ve yaratıcı ajanslar
- Hukuk büroları ve müvekkil görüşmesi yapan avukatlar
- Proje yöneticileri ve operasyon direktörleri

---

## 🚀 3. Temel Özellikler & AI Mimarisi
1. **Otonom Toplantı Botu (Bot Attendance):**
   - Takvimdeki Google Meet / Zoom linkine otomatik katılan sessiz dinleyici bot.
2. **Kişi Bazlı Konuşma Ayrımı (Speaker Diarization):**
   - Kimin ne söylediğini ses frekansına göre ayırır (Ahmet, Elif, Mehmet).
3. **Akıllı Karar & Görev Çıkarıcı:**
   - Sohbet muhabbetini eler, sadece stratejik kararları, bütçe onaylarını ve sorumlulukları listeler.
4. **Tek Tıkla Proje Yönetimi Entegrasyonu:**
   - Trello, Notion, Jira, ClickUp ve Slack Webhook'larına otomatik görev basma.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Kişisel Paketi:** 190 ₺ / ay (Ayda 15 toplantı).
- **Takım Paketi:** 790 ₺ / ay (5 kullanıcı + Sınırsız toplantı + Trello/Jira senkronu).
- **Kurumsal Paketi:** 2.900 ₺ / ay (Özel şirket sunucusu + Gizlilik garantisi).

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **Otter.ai:** Toplantı transkripsiyon devi.
- **Fireflies.ai:** Yapay zeka toplantı asistanı (100 milyon $+ değerleme).
- **Fellow.app / Fathom:** Yapay zeka destekli yönetici noteri.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **AI Stack:** Deepgram Nova-2 / Whisper (Transkripsiyon) + Gemini 1.5 Flash (Aksiyon çıkarımı).
- **Toplantı Bot Altyapısı:** Recall.ai API / Daily.co.
- **MVP Süresi:** 5 - 7 Gün.
