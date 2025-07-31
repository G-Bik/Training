/**
SOAL: ==> Cara 2
Mengecek apakah makanan tersedia di dapur.
Jika tersedia, resolve dengan info stok makanan.
Jika tidak, reject dengan pesan error "Makanan tidak tersedia".

processPayment(stokMakanan):
Memproses pembayaran jika makanan tersedia.
Simulasikan pembayaran berhasil setelah 1 detik.

deliverOrder(paymentStatus):
Jika pembayaran berhasil, proses pengiriman.
Simulasikan pengiriman selesai dalam 1.5 detik.
 */
const stockBahan = [
  { beras: 50 },
  { telur: 120 },
  { dagingAyam: 30 },
  { dagingSapi: 50 },
  { tahu: 20 },
  { tempe: 25 },
  { kentang: 80 },
  { wortel: 90 },
  { bawangMerah: 200 },
  { bawangPutih: 150 },
];

function checkStock(bahan, jumlah) {
  console.log("process cek stock.....");
  return new Promise((success, failed) => {
    setTimeout(() => {
      // Get data object dalam array

      // Metode ini menyingkat pencarian data array dalam object tanpa harus menggunakan for, setelah itu hasil iterasi kita ambil keynya semabagi indikator perulangan dan mendapatkan hasilnya ketika input dibandingkan dengan keys...metode penggunaan .find() mempermudah kita untuk mengoding agar lebih cepat.
      const getKeys = stockBahan.find((itm) => Object.keys(itm)[0] === bahan); // Cara yang lebih mutlak utk melakukan parsing array ataupun object dalam array agar lebih mudah.

      console.log("ini adalah hasil metode find :", getKeys);
      const value = getKeys[bahan]; //mendapatkan value dari setiap keys object
      console.log("ini adalah value dari getkey:", value);

      if (jumlah <= value) {
        success([bahan, jumlah]);
        return;
      } else {
        failed("stock kurang");
      }
    }, 1200);
  });
}

function processPayment(totalBayar) {
  console.log("stock Tersedia, Process payment....");
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (!totalBayar) failed("stock tidak ada");
      success([totalBayar * 3000]);
    }, 1000);
  });
}

function deliverOrder(payment) {
  console.log("payment berhasil, Delivery progress...");
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (!payment) failed("Pembayaran Gagal");
      const tokenBelanja = ~~[Math.random() * 12345678];
      success([tokenBelanja, payment]);
    }, 1500);
  });
}

async function belanja() {
  try {
    const bahanJumlah = await checkStock("dagingAyam", 20); // input apa yang mau dibeli disni
    const totalBelanja = await processPayment(bahanJumlah[1]);
    const antarPesanan = await deliverOrder(totalBelanja);

    console.log(
      `Bahan yang dibeli: ${bahanJumlah[0]}, sebanyak: ${bahanJumlah[1]}`
    );
    console.log(`Total pembelian : ${totalBelanja}`);
    console.log(
      `Pesananmu di delivery, no Nota :${antarPesanan[0]} total belanja: ${antarPesanan[1]}`
    );
  } catch (err) {
    console.log(err);
  }
}

belanja();
