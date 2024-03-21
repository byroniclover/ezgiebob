function hesapla() {
  // Kullanıcıdan sayıları alma
  const sayi1 = document.getElementById("sayi1").valueAsNumber;
  const sayi2 = document.getElementById("sayi2").valueAsNumber;

  // Sayıların geçerliliğini kontrol etme
  if (!sayi1 || !sayi2) {
    alert("Lütfen her iki sayıyı da giriniz!");
    return;
  }

  // EKOK'u hesaplama
  const ekok = ekokHesapla([sayi1, sayi2]);

  // Sonucu ekrana yazdırma
  const sonucElemani = document.getElementById("sonuc").querySelector("strong");
  sonucElemani.textContent = ekok;
}

function ekokHesapla(sayilar) {
  const asalCarpanlar = [];
  for (const sayi of sayilar) {
    asalCarpanlar.push(asalCarpanlarinaAyir(sayi));
  }

  const enYuksekKuvvetler = {};
  for (const asalCarpanListesi of asalCarpanlar) {
    for (const [asalCarpan, kuvvet] of asalCarpanListesi) {
      if (!enYuksekKuvvetler.hasOwnProperty(asalCarpan)) {
        enYuksekKuvvetler[asalCarpan] = kuvvet;
      } else {
        enYuksekKuvvetler[asalCarpan] = Math.max(enYuksekKuvvetler[asalCarpan], kuvvet);
      }
    }
  }

  let ekok = 1;
  for (const [asalCarpan, kuvvet] of Object.entries(enYuksekKuvvetler)) {
    ekok *= asalCarpan ** kuvvet;
  }

  return ekok;
}

function asalCarpanlarinaAyir(sayi) {
  const asalCarpanlar = [];
  let i = 2;
  while (i <= sayi) {
    if (sayi % i === 0) {
      asalCar
