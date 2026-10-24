# AI Fikir 10: Hukuk Sözleşme Risk & Kırmızı Çizgi Analizörü (LexRedline AI)

> **Slogan:** *"Kira, iş, tedarik ve gizlilik sözleşmelerini saniyeler içinde tarayan; şirketin aleyhine olan cezai şartları, haksız fesih risklerini ve eksik hükümleri Türk Hukuk normlarına göre raporlayan ve alternatif güvenli maddeler yazan yapay zeka hukuk asistanı."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Her Sözleşmeyi Avukata Okutmak İmkansız:** Şirketler haftada 10-20 adet gizlilik (NDA), taşeron, yazılım lisansı veya tedarik sözleşmesi imzalıyor. Her küçük sözleşmeyi hukuk bürosuna göndermek hem avukatlık ücreti hem de 3-5 günlük gecikme yaratıyor.
- **Gizli Tehlikeli Maddeler:** Sözleşmenin 18. maddesinin c bendindeki *"Taraflardan biri sözleşmeyi tek taraflı feshederse son 12 aylık fatura bedeli kadar tazminat öder"* gibi küçük bir tuzak şirketi yüz binlerce lira zarara sokabiliyor.
- **Yapay Zeka Fırsatı:** Türk Borçlar Kanunu, TTK ve İş Kanunu içtihatlarıyla zenginleştirilmiş RAG mimarisi; Word veya PDF sözleşmeyi okur, tehlikeli maddeleri kırmızı ile işaretler (Redline) ve *"Bu maddeyi şu şekilde değiştirin"* diyerek kabul edilebilir hukuki alternatifini Word 'Değişiklikleri Takip Et' formatında geri verir.

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Şirket içi hukuk müşavirlikleri ve serbest avukatlar
- Sürekli sözleşme imzalayan KOBİ kurucuları, startup'lar ve ajanslar
- Gayrimenkul yönetim ve kiralama şirketleri (Kira sözleşmeleri)
- İnsan kaynakları departmanları (İş akitleri ve rekabet yasakları)

---

## 🚀 3. Temel Özellikler & AI Mimarisi
1. **Otomatik Kırmızı Çizgi (Redline) Üretimi:**
   - Word (.docx) dosyasındaki riskli cümleleri silip yerine güvenli versiyonunu revizyon balonu olarak ekleme.
2. **Kriter Bazlı Risk Puanı (Risk Score 1-100):**
   - Sözleşmeyi Fesih Zorluğu, Cezai Şart Ağırlığı, Sorumluluk Sınırı (Liability Cap) ve Yetkili Mahkeme açısından puanlama.
3. **Eksik Madde Dedektörü:**
   - *"Bu sözleşmede KVKK veri işleme taahhüdü ve mücbir sebep maddesi eksik"* uyarısı yapma.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Profesyonel Paket:** 1.490 ₺ / ay (Ayda 30 sözleşme derin inceleme).
- **Kurumsal Hukuk Paketi:** 4.900 ₺ / ay (Sınırsız sözleşme + Şirketin kendi sözleşme standartlarına göre özel kural tanımlama).
- **Tekil İnceleme:** Sözleşme başı 250 ₺.

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **Robin AI:** Anthropic destekli sözleşme inceleme yapay zekası (Milyonlarca dolar ARR).
- **Ironclad / ContractPodAi:** Kurumsal sözleşme yaşam döngüsü liderleri.
- **Klarity:** Finansal muhasebe ve sözleşme uyumluluk platformu.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **AI Stack:** Gemini 1.5 Pro (Geniş bağlam) + Python `python-docx` + LangChain RAG.
- **Veri Güvenliği:** Dokümanların modele eğitim verisi olarak gitmediği "Zero Retention" API garantisi.
- **MVP Süresi:** 6 - 8 Gün.
