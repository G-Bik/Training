/**
SOAL: ==> Cara 1
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
      for (let i = 0; i < stockBahan.length; i++) {
        const objectArray = stockBahan[i]; //mendapatkan setiap object dalam array-nya
        const getKeys = Object.keys(objectArray)[0]; //mendapatkan keys dalam object untuk dijadikan pengkondisian nantinya
        const value = objectArray[getKeys]; //mendapatkan value dari setiap keys object

        if (getKeys == bahan) {
          if (jumlah <= value) {
            success(`Bahan yang dibeli: ${bahan}, sebanyak: ${jumlah}`);
            return;
          } else {
            failed("stock kurang");
          }
        }
      }
      failed("Bahan tidak tersedia");
    }, 1200);
  });
}

function processPayment(totalBayar) {
  console.log("stock Tersedia, Process payment....");
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (!totalBayar) failed("stock tidak ada");
      success(`Total pembelian : ${totalBayar * 3000}`);
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

// node koding dalam input data agar bisa dinamis pada terminal seperti di pyhton
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("Masukkan nama bahan: ", (bahanInput) => {
//   rl.question("Masukkan jumlah: ", (jumlahInput) => {
//     rl.close();
//   });
// });

async function belanja() {
  try {
    const bahanJumlah = await checkStock("telur", 10); // input apa yang mau dibeli disni
    const qty = bahanJumlah.split(": ")[2]; //contoh jika kita tidak memisahkan array dan value parameter success, yang mana harus memisahkan nilai antara string dan value itu sendiri dengan .split pada pemanggilan fungsi.

    const totalBelanja = await processPayment(qty);
    const total = totalBelanja.split(": ")[1]; // ini juga sama terpaksa pakai .split, sebenarnya salah

    const antarPesanan = await deliverOrder(total);

    console.log(bahanJumlah);
    console.log(totalBelanja);
    console.log(
      `Pesananmu di delivery, no Nota :${antarPesanan[0]} total belanja: ${antarPesanan[1]}`
    );
  } catch (err) {
    console.log(err);
  }
}

belanja();
