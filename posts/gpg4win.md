### **Amac**

Bu rehberde sana Windows bilgisayarinda yazilim imzalarini dogrulamak icin kullanacagin **Gpg4Win** yazilimini nasil kuracagini gosterecegim.

Bu yazilim sayesinde `.sig`, `.asc` gibi imza dosyalariyla `.exe` dosyasinin sahte mi, degil mi oldugunu kontrol edebilirsin. Bu da yazilimin oynanip oynanmadigini anlamani saglar.

---

### **Kurulum**

#### **Yazilimi elde et**

1. Tarayicinda [https://gpg4win.org/download.html](https://gpg4win.org/download.html) adresine git.
2. Yesil “Download Gpg4win” butonuna tikla.
3. Bagis ekraninda en alta in, tekrar “Download” butonuna tikla.
4. `.exe` dosyasi otomatik inmeye baslayacak, “Dosyayi kaydet” de.
5. Ayni sayfada biraz yukarida “**Check integrity**” linkine tikla.
6. Acilan sayfada `.sig` uzantili dosyaya tikla, onu da kaydet.
7. Bir de [https://gnupg.org/signature\_key.asc](https://gnupg.org/signature_key.asc) adresine git.
   Acilan sayfaya sag tikla → “Sayfayi farkli kaydet...” → indir.

> Sonuc olarak 3 dosya olacak:
>
> * `gpg4win-x.x.x.exe`
> * `gpg4win-x.x.x.exe.sig`
> * `signature_key.asc`

---

#### **Yazilimi yukle**

1. `gpg4win-x.x.x.exe` dosyasina **sag tikla > Calistir**.
2. Cikan “Kullanici hesabi kontrolu” ekraninda **Yes** de.
3. Dil sec: English ya da Türkçe → OK.
4. Kurulum sihirbazinda hep **Next** de.
5. Bilesen seciminde sadece **Kleopatra** kalsin, digerlerini kapatabilirsin.
6. **Install** butonuna bas → yukleme tamamlansin.
7. Son ekranda “Run Kleopatra” secili kalsin → **Finish**.

---

#### **Yazilimi calistir**

1. Kleopatra acilir. Anahtarlar sayfasi gelir.
2. Sol üstten **Import** butonuna tikla.
3. `signature_key.asc` dosyasini sec → **Open** → OK.
4. Ardindan ust menuden **Decrypt/Verify** butonuna bas.
5. Dosya sec ekraninda `gpg4win-x.x.x.exe.sig` dosyasini sec → **Open**.
6. Dogrulama islemi yapilir. Sonucta “Signature created by...” yazisi gorunur.
7. Oradaki **Fingerprint** ile `signature_key.asc` dosyasindaki fingerprint birebir ayniysa, imza gercek.

---

### **Sonuc**

Bu rehberde Gpg4Win programinin kurulumunu gosterdim. Gpg4Win kullanarak bilgisayarina yukledigin yazilimlarin yazilimcilarin elinden ciktiktan sonra degistirilmedigini kanitlayabilirsin. Bunun icin indirdigin yazilima ait .sig veya .asc uzantisi ile sonlanan imza dosyasina, yazilimcinin kendisine ait sifreleme anahtarina, ve yazilimin derlenmis dosyasina ihtiyacin var. Bunlari topladiktan sonra, bu rehberde gosterdigim sekilde dogrulamayi gerceklestirip, gonul rahatligiyla yazilimi bilgisayarina kurabilirsin.
