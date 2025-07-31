// Tugas Kecil

// 1. prompt : buatlah saldo akhir dari apa yang telah diinputkan oleh user
// 2. Menentukan hari dari tanggal yang ada saat ini di pc

// Tugas 1
let saldoAkhir;
let saldo = [];
for (let i = 0; i < 3; i++) {
  saldoAkhir = prompt(`Masukkan saldo ke-${i + 1}:`);
  // menggunakan .push() untuk menyimpan setiap nilai perulangan saldoAkhir ke dalam array variabel saldo
  saldo.push(saldoAkhir);
}
// console.log ini akan menunjukkan nilai terakhir dari LOOP prompt yang diinputkan oleh user, setiap loop sesuai jumlah dari kondisi yang ditentukan akan menampilkan nilai terakir dari loop tersebut
console.log(`Saldo akhir yang diinputkan adalah: ${saldoAkhir}`);
// console.log ini akan menampilkan saldo awal yang diinputkan pada loop pertama
console.log(`Saldo awal saya adalah Rp.${saldo[0]}`);

// Tugas 2
dataSetHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
let hariIni = dataSetHari[new Date().getDay()];

// Output: nama hari saat ini sesuai dengan tanggal di PC
alert(`Hari ini adalah ${hariIni}.`);
