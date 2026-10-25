# AI Fikir 24: Doktor ve Klinikler İçin Ortam Dinleyen Akıllı Epikriz ve Reçete Katibi (MedScribe AI)

> **Slogan:** *"Muayene odasındaki doktor-hasta sohbetini arka planda ortam mikrofonuyla dinleyen; semptomları ve tanıyı ayıklayıp hastane bilgi sistemine (HBYS) tek tıkla epikriz ve reçete aktaran yapay zeka tıbbi katip."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Doktor Tükenmişliği ve Ekran Esareti:** Doktorlar çalışma saatlerinin %40'ını hastanın yüzüne bakmak yerine bilgisayara klavyeyle not girmekle ve sistem kayıtlarıyla harcıyor. Günde 40-50 hasta bakan bir doktor akşamları 2 saat epikriz yazmak zorunda kalıyor.
- **Tıbbi Hata Riski:** Yorgunlukla girilen eksik anamnez ve yanlış ICD-10 kodları sigorta ödemelerinin reddedilmesine ve yasal risklere yol açıyor.
- **Yapay Zeka Fırsatı:** Masada duran telefon veya mikrofon aracılığıyla Türkçe tıbbi terminolojiyi ve hasta şikayetlerini dinleyen; hal hatır sormayı filtreleyip tıbbi öykü (anamnez), fiziki muayene bulguları ve ICD-10 tanı kodlarını otomatik yapılandıran yapay zeka katip!

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Özel hastaneler, tıp merkezleri ve poliklinikler.
- Özel muayenehane sahibi uzman hekimler (Dahiliye, KBB, Ortopedi, Pediatri, Dermatoloji).
- Diş hekimleri ve estetik cerrahi klinikleri.

---

## 🚀 3. Temel Özellikler & AI Mimarisi
1. **Ortam Dinleme ve Tıbbi Filtreleme (Ambient Scribe):**
   - Doktor ve hasta arasındaki konuşmayı gerçek zamanlı dinler; havadan sudan sohbetleri eler, semptomları ve klinik şikayetleri izole eder.
2. **ICD-10 ve Reçete Yapılandırma:**
   - Tanıyı uluslararası ICD-10 kod standartlarıyla eşleştirir ve doktorun söylediği etken madde/ilaç dozajlarını reçete taslağı haline getirir.
3. **HBYS / EMR Paneline Otomatik Aktarım:**
   - Türkiye'deki yaygın hastane bilgi yönetim sistemlerine (HBYS) web eklentisi (Chrome Extension) veya masaüstü yardımcısı ile tek tıkla metin yapıştırma.
4. **Hasta Bilgilendirme Özeti:**
   - Tıbbi jargon yerine hastanın anlayacağı dilde *"İlaçlarınızı tok karna içiniz, 1 hafta sonra kontrole geliniz"* şeklinde sadeleştirilmiş WhatsApp talimat kartı üretir.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Tekil Doktor Lisansı:** 2.450 ₺ / ay (Sınırsız muayene kaydı).
- **Klinik Paketi (5 Doktor):** 8.900 ₺ / ay.
- **Hastane Entegrasyon Lisansı:** Doktor başı 1.750 ₺ / ay + Özel HBYS API kurulum ücreti.

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **Abridge:** 2.5 milyar dolar değerlemeye ulaşan, binlerce hastanede kullanılan ambient clinical scribe devi.
- **Ambience Healthcare:** YC destekli, acil servis ve poliklinik AI dokümantasyon lideri.
- **Scribeberry:** Bağımsız klinikler için popüler tıbbi katip platformu.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **AI Stack:** Whisper Large-v3 (Medical Fine-Tuned) + Gemini 1.5 Pro (Geniş tıbbi ontoloji) + FastAPI.
- **İstemci & Entegrasyon:** Electron Masaüstü Uygulaması / Chrome Uzantısı + Local Audio Buffer + HIPAA/KVKK Zero-Retention şifreleme.
- **MVP Süresi:** 7 - 10 Gün.
