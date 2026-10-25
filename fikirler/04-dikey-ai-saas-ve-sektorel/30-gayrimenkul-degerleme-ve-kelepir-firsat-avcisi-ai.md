# AI Fikir 30: Gayrimenkul Değerleme ve Kelepir Fırsat Avcısı (EstateVal AI)

> **Slogan:** *"İlan sitelerindeki, belediye rayiçlerindeki ve tapu verilerindeki yüz binlerce konutu tarayan; piyasa değerinin %20 altında kalan kelepir fırsatları ve kira çarpanı rekorlarını anında fırlatan emlak zekası."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Piyasa Bilgi Asimetrisi:** Gayrimenkul alıcıları ve yatırımcıları bir evin gerçek değerini bilmekte zorlanıyor. İlan sitelerindeki fiyatlar genellikle köpük veya abartılı; gerçek satış fiyatları ise kapalı kapılar ardında gerçekleşiyor.
- **Kelepir İlanları Kaçırma Korkusu:** Bir mülk sahibi acil nakit ihtiyacından piyasanın %25 altına ilan girdiğinde bu fırsat profesyonel emlakçılar tarafından ilk 20 dakikada kapatılıyor. Normal yatırımcının tüm gün ilan yenilemesi imkansız.
- **Yapay Zeka Fırsatı:** Sahibinden, Hepsiemlak ve Emlakjet ilanlarını anlık dinleyen; metrekare, kat, cephe, bina yaşı ve bölgedeki gerçek kira getirisi regresyonuyla 'Adil Piyasa Değeri' (Fair Market Value) hesaplayan ve kelepir ilan düştüğü an yatırımcının WhatsApp'ına lokasyon pini ve amortisman tablosu atan yapay zeka avcısı!

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Düzenli gayrimenkul yatırımı yapan bireysel portföy sahipleri ve fonlar.
- Bölgesinde en hızlı portföyü toplamak isteyen Remax, Coldwell Banker ve bağımsız emlak danışmanları.
- Konut kredisi değerlemesi yapan bağımsız SPK lisanslı değerleme uzmanları.

---

## 🚀 3. Temel Özellikler & AI Mimarisi
1. **Hedonik Değerleme Modeli (Automated Valuation Model - AVM):**
   - 40+ parametreyi (metroya yakınlık, deprem bölgesi skoru, aidat, kat irtifakı) ağırlıklandırarak evin satılması gereken gerçek fiyat bandını hesaplar.
2. **Kelepir Alarmı (Undervalued Deal Alert):**
   - Hesaplanan adil değerin %15 ve daha altında fiyatla sisteme giren ilanları anında 'FIRSAT' etiketiyle filtreler.
3. **Kira Amortisman & Cap Rate Simülatörü:**
   - Bölgedeki emsal kiralara göre mülkün kaç yılda kendini amorti edeceğini ve aylık net nakit akışını simüle eder.
4. **İlan Metninden Niyet Analizi:**
   - İlan açıklamasındaki *"Acil satılık"*, *"Yurtdışına taşınma sebebiyle"*, *"Pazarlık payı vardır"* gibi satıcı psikolojisi ipuçlarını LLM ile analiz ederek pazarlık marjı önerir.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Bireysel Yatırımcı:** 990 ₺ / ay (1 bölge radar takibi + anlık SMS alarmı).
- **Emlak Ofisi Pro:** 2.900 ₺ / ay (Şehir geneli radar + PDF değerleme raporu üretimi).
- **Yatırım Fonu / Kurumsal:** 12.500 ₺ / ay + API erişimi.

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **HouseCanary:** Gayrimenkul değerlemesinde ABD'nin en büyük yapay zeka analitik sağlayıcılarından biri.
- **DealMachine:** Yatırımcılar için karlı gayrimenkul bulan popüler mobil AI platformu.
- **Cherre:** Gayrimenkul verilerini ve tapu kayıtlarını tek merkezde toplayan dev girişim.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **AI Stack:** XGBoost / CatBoost (Hedonik Regresyon) + Gemini 1.5 Flash (Açıklama & Niyet NLP).
- **Veri & Tarama:** Playwright / Scrapy + PostgreSQL / PostGIS (Coğrafi sorgular) + WhatsApp Business API.
- **MVP Süresi:** 6 - 8 Gün.
