# AI Fikir 19: Veritabanı Doğal Dil İle Sorgulama & BI Rapor Asistanı (TalkToDB AI)

> **Slogan:** *"Şirket yöneticisinin 'Geçen ay Ege bölgesinde en çok satan ilk 5 ürünümüzün kâr marjı neydi?' gibi Türkçe sorusunu doğrudan optimize SQL'e çevirip canlı veritabanında çalıştıran ve interaktif grafiklerle yanıtlayan otonom veri analisti."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Yöneticiler Veriye Aç Ama SQL Bilmiyor:** Şirket genel müdürü veya pazarlama lideri kritik bir stratejik karar alırken veri tabanındaki rakamlara ihtiyaç duyuyor; ancak SQL bilmediği için veri ekibine bilet açıyor ve cevabın gelmesi 2-3 gün sürüyor.
- **PowerBI ve Tableau Çok Hantal:** Dashboard kurmak haftalar sürüyor ve dashboard'da olmayan anlık yeni bir soru sorulduğunda yine tıkanıyor.
- **Yapay Zeka Fırsatı:** Veritabanı şemasını (Tablolar, ilişkiler, yabancı anahtarlar) hafızasında tutan bir Text-to-SQL motoru; kullanıcının doğal konuşma dilindeki sorusunu okur, SQL enjeksiyon korumalı güvenli SELECT sorgusunu yazar, veriyi çeker ve Chart.js ile dinamik pasta/çizgi grafiğine dönüştürür.

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Şirket kurucuları, CEO'lar ve departman müdürleri
- E-ticaret operasyon ve lojistik yöneticileri
- Finans ve bütçe planlama ekipleri
- Veri analisti istihdam edecek bütçesi olmayan KOBİ'ler

---

## 🚀 3. Temel Özellikler & AI Mimarisi
1. **Şema & Metadata İndeksleyici (Zero Data Leaks):**
   - Şirketin müşteri verisini asla modele göndermez; yalnızca tablo ve sütun adlarını (Metadata) bağlam olarak kullanır.
2. **Güvenli Sorgu Yürütme Kalkanı:**
   - Asla `UPDATE`, `DELETE`, `DROP` çalıştırmaz; sadece salt okunur (Read-Only) replica veritabanında sorgu koşturur.
3. **Anında Grafik & PDF Yönetim Sunumu:**
   - Rakamları tek tıkla PowerPoint veya PDF formatında renkli yönetici sunumuna çevirme.
4. **Slack / Microsoft Teams Entegrasyonu:**
   - Şirket içi Slack kanalından *"@TalkToDB dünkü ciro neydi?"* şeklinde sorgulama.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **KOBİ Paketi:** 1.990 ₺ / ay (1 veritabanı bağlantısı + 5 kullanıcı).
- **Kurumsal Paket:** 7.500 ₺ / ay (Sınırsız veritabanı + Slack/Teams botu).
- **On-Premise Kurulum:** 45.000 ₺ (Kendi sunucusunda kapalı devre).

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **Defog.ai:** Text-to-SQL alanında Y Combinator destekli lider AI altyapısı.
- **Vanna.ai:** Açık kaynaklı Python Text-to-SQL kütüphanesi.
- **Seek AI / Julius AI:** Yapay zeka veri analizi platformları.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **AI Stack:** Vanna.ai / LangChain SQL Chain + Gemini 1.5 Flash + DuckDB / PostgreSQL read-replica.
- **Arayüz:** Next.js + Tailwind + Chart.js / Recharts.
- **MVP Süresi:** 5 - 7 Gün.
