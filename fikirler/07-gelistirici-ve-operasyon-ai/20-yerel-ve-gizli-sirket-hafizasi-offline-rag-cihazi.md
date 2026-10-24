# AI Fikir 20: Yerel & Gizli Şirket Hafızası: Çevrimdışı Donanım RAG Kutusu (VaultBrain Box)

> **Slogan:** *"İnternete asla bağlanmayan; şirket sözleşmelerini, teknik kılavuzlarını, Ar-Ge çizimlerini ve müşteri geçmişini yerel NVMe diskte indeksleyen ve sıfır veri sızıntısıyla şirketin personeline yanıt veren tak-çalıştır kapalı devre yapay zeka cihazı."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Veri Gizliliği Endişesiyle AI Kullanamayan Şirketler:** Savunma sanayi firmaları, hukuk büroları, hastaneler ve Ar-Ge merkezleri personeline ChatGPT kullanımını yasakladı. Çünkü personelin oraya yapıştırdığı gizli müşteri verileri veya patent taslakları OpenAI / Google sunucularına gidiyor.
- **Şirket Hafızasının Dağılması:** Personel işten ayrıldığında 10 yıllık tecrübe uçup gidiyor; eski teknik dosyalar ve arıza çözüm notları ağ paylaşımlarında (NAS) kayboluyor.
- **Yapay Zeka Fırsatı:** Kompakt bir Mac Studio veya RTX 4090 GPU'lu mini sunucu içine kurulu yerel açık kaynaklı model (Llama 3.3 70B / Mistral / DeepSeek); şirketin Ethernet kablosuna takılır. Sıfır internet bağlantısıyla tüm şirket dokümanlarını okur, personelin sorularını kaynak sayfa numarası vererek anında yanıtlar.

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Savunma sanayi, havacılık ve uzay şirketleri
- Büyük hukuk büroları ve noterler
- Özel hastaneler ve tıp merkezleri (Hasta mahremiyeti)
- Bankacılık ve finans kuruluşları

---

## 🚀 3. Temel Özellikler & AI Mimarisi
1. **%100 Air-Gapped & Çevrimdışı Çalışma:**
   - Dışarıya hiçbir paket göndermez, internet bağlantısı gerektirmez.
2. **Yerel Doküman İndeksleme (Local Embeddings):**
   - PDF, Word, Excel, DWG, e-posta arşivlerini yerel vektör veritabanında (Milvus / Qdrant) saklama.
3. **Rol Bazlı Erişim Güvenliği (RBAC):**
   - Stajyer personel CEO'nun veya İK'nın maaş/strateji dokümanlarını sorgulayamaz.
4. **Tak-Çalıştır Mini Donanım Kutusunda Teslim:**
   - Şirketin sistem odasına konulmaya hazır, şık bir donanım kutusu veya Docker imajı.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Donanım + Yazılım Cihaz Satışı:** 120.000 ₺ - 250.000 ₺ (Tek seferlik anahtar teslim).
- **Yıllık Bakım & Model Güncelleme Lisansı:** 35.000 ₺ / yıl.
- **Özel Şirket Eğitimi (Fine-Tuning Hizmeti):** 50.000 ₺.

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **AnythingLLM / Ollama:** Yerel LLM orkestrasyonu.
- **PrivateAI / Danswer (Onyx):** Kurumsal açık kaynaklı yerel RAG motoru.
- **Lamini / Crusoe:** Özel donanımlı kurumsal yapay zeka sistemleri.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **AI Stack:** Ollama / vLLM + Llama 3.3 / Qwen 2.5 + BAAI BGE Embeddings + Qdrant / LanceDB.
- **Frontend / Dağıtım:** Docker Compose + Electron / Web UI (Tailwind).
- **MVP Süresi:** 7 - 10 Gün.
