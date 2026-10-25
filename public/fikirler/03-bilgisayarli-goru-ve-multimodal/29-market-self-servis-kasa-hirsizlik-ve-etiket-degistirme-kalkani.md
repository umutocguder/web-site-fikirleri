# AI Fikir 29: Market Self-Servis Kasa Hırsızlık ve Etiket Değiştirme Kalkanı (AntiTheft AI)

> **Slogan:** *"Süpermarketlerdeki self-servis kasalarda et eti basıp soğan parası ödemeyi veya barkodu okutmadan poşete atmayı tepe kamerasıyla anında yakalayan bilgisayarlı görü güvenlik gözü."*

---

## 📌 1. Problem ve Pazar Fırsatı (Neden Çok Popüler?)
- **Self-Checkout Kanaması (Shrinkage):** Süpermarketler kasiyer maliyetini kısmak için hızlı kasalara (self-checkout) geçti; ancak market içi hırsızlık ve barkod hileleri %300 arttı. Perakende devleri her yıl cirolarının %2 ila %3'ünü kasadaki usulsüzlüklerden kaybediyor.
- **En Yaygın Hileler:**
  1. *Etiket Kaydırma (Ticket Switching):* Pahalı bonfile veya alkollü içeceğin üzerine ucuz maydanoz veya elma barkodu yapıştırmak.
  2. *Hayalet Geçiş (Scan Avoidance):* Ürünü barkod okuyucuya yaklaştırıp okutmadan doğrudan poşete koymak.
- **Yapay Zeka Fırsatı:** Kasanın üzerine yerleştirilen ucuz bir geniş açılı kamera ile tepsiyi ve poşeti izleyen; tartıdaki ürünün rengini, dokusunu ve hacmini okutulan barkodla çapraz doğrulayan, uyuşmazlık anında ekranı kilitleyip görevliyi çağıran akıllı kamera!

---

## 🎯 2. Hedef Kitle (İdeal Müşteri Profili / ICP)
- Şubelerinde hızlı ödeme / self-servis kasa bulunan süpermarket zincirleri (Migros, CarrefourSA vb.).
- Yapı marketleri (Tekzen, Bauhaus vb.) ve toptan perakende noktaları.
- Kasiyersiz 7/24 konsept mağazalar ve benzin istasyonu marketleri.

---

## 🚀 3. Temel Özellikler & AI Mimarisi
1. **Görsel ve Terazi Çapraz Doğrulaması:**
   - Terazideki ağırlıkla (örneğin 1.2 kg) kamera görüntüsünü birleştirir; okutulan barkod 'Kuru Soğan' ise ama kameradaki ürün 'Antrikot' ise saniyesinde alarm üretir.
2. **Barkod Okutma Hareketi Takibi (Hand Tracking):**
   - Müşterinin el hareketini izler; sepetteki ürünün barkod tarayıcının kırmızı lazerinden geçmeden doğrudan poşete girdiğini tespit eder.
3. **Kibar Personel Bildirimi:**
   - Müşteriyi rencide etmeden ekranda *"Lütfen son okuttuğunuz ürünü ekranda onaylayınız, görevli yönlendiriliyor"* mesajı çıkarır ve görevlinin tabletine şüpheli anın 3 saniyelik GIF kaydını fırlatır.

---

## 💰 4. Gelir ve Monetizasyon Modeli
- **Kasa Başı Aylık Lisans:** Kasa başına 1.250 ₺ / ay.
- **10 Mağazalı Zincir Paketi (40 Kasa):** 39.000 ₺ / ay.
- **Kayıp Önleme Başarı Payı:** Engellenen kanıtlanmış hırsızlık tutarından %5 performans primi.

---

## 🌐 5. Benchmarklar & Dünya Örnekleri
- **Everseen:** Dünyanın en büyük perakendecilerinde (Kroger, Walmart vb.) çalışan self-checkout AI devi.
- **Grabango & Standard AI:** Kasiyersiz alışveriş ve kayıp önleme teknolojileri geliştiren girişimler.
- **Sensormatic Solutions:** Perakende güvenlik teknolojilerinde global pazar lideri.

---

## ⚡ 6. Geliştirme Süresi & Önerilen Stack
- **AI Stack:** Ultralytics YOLOv11 Edge (TensorRT optimize) + DeepSORT (Nesne Takibi) + MediaPipe El Takibi.
- **Donanım:** Basit PoE IP Kamera + Intel NUC / NVIDIA Jetson Orin Nano yerel işlem kutusu.
- **MVP Süresi:** 7 - 10 Gün.
