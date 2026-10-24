# AI Fikir 15: Mimari Eskizden Fotogerçekçi 3D Render & Dekorasyon Stüdyosu (RoomMorph AI)

> **Slogan:** *"Mimarın veya ev sahibinin kağıda karaladığı kaba çizimden veya boş daire fotoğrafından; İskandinav, Bohem, Minimalist veya Modern Luxury tarzlarında 10 saniyede 4K fotogerçekçi iç mimari render ve alışveriş malzeme listesi üreten görsel motor."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **3D Render Almak Çok Pahalı ve Yavaş:** Bir mimarlık veya iç mimarlık ofisinde 3ds Max / V-Ray ile bir salonun veya mutfağın 3D görselleştirmesini hazırlamak 2-3 gün ve render çiftliklerinde saatler sürüyor. Müşteriye sunum yaparken hızlı alternatif göstermek imkansız.
- **Evini Yenileyen İnsanların Kararsızlığı:** Boya, parke, mobilya seçerken *"Acaba bu koltuk bu duvara yakışır mı?"* endişesi tadilat sürecini aylarca kilitliyor.
- **Yapay Zeka Fırsatı:** ControlNet (Derinlik haritası, Canny kenar tespiti) ve diffusion modelleri ile mimarın basit çizgi taslağının geometrisi bozulmadan; pencereler, ışık hüzmeleri, ahşap dokusu ve mobilyalar fotogerçekçi olarak 10 saniyede giydirilebiliyor.

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- İç mimarlar, mimarlık ofisleri ve 3D görselleştirme uzmanları
- Mobilya üreticileri ve dekorasyon mağazaları (Müşterinin odasına mobilyayı sanal yerleştirme)
- Emlak ofisleri ve gayrimenkul geliştiricileri (İnşaat aşamasındaki boş daireleri sanal eşyalandırma / Virtual Staging)

---

## 🚀 3. Temel Özellikler & AI Mimarisi
1. **Geometri Koruyucu Render (ControlNet Depth / Normal Maps):**
   - Odanın kolon, kiriş ve kapı ölçülerini asla bozmadan kaplama ve mobilya yerleştirme.
2. **Stil Seçici & Malzeme Paleti:**
   - Tek tıkla *"Japandi"*, *"Modern Luxury"*, *"Endüstriyel Loft"* modlarına geçiş.
3. **Sanal Eşyalandırma (Virtual Staging):**
   - Emlakçıların portföyündeki boş, beton veya eski eşyalı daire fotoğraflarını lüks eşyalı hale getirme.
4. **Mobilya Satın Alma Linkleri:**
   - Render'da kullanılan koltuk veya aydınlatmaya en yakın IKEA, Vivense veya Bellona ürünlerini önerme.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Mimar & Emlakçı Pro Paketi:** 990 ₺ / ay (Ayda 100 4K render).
- **Stüdyo Sınırsız:** 2.900 ₺ / ay.
- **Bireysel Kullanıcı (Ev Tadilatı):** 390 ₺ (20 render kredisi).

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **Interior AI:** Pieter Levels tarafından kurulan ve ayda yüz binlerce dolar kazanan minimalist girişim.
- **RoomGPT:** Milyonlarca kullanıcıya ulaşan boş oda dönüştürücüsü.
- **Planner 5D AI / Spacely AI:** Kurumsal mimari render çözümleri.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **AI Stack:** Stable Diffusion XL / Flux + ControlNet Depth/Canny + Fal.ai / Replicate GPU API.
- **Frontend:** Vanilla JS / React + Tailwind Canvas.
- **MVP Süresi:** 5 - 7 Gün.
