/** Terdapat 2 Jenis cara pembuatan Fungsi, yakni dengan null parameter(statis) dan dengan parameter(dinamis) / diisi beberapa argument 

Perbedaan 2 jenis fungsi ini adalah: 
-Fungsi statis kita hanya bisa memanggil fungsi teresbut diluar namun tidak bisa mengisikan nilai apapun kedalam fungsi karena tidak memiliki parameter / argument yang menyimpan nilai dan membalikkan nilai di fungsi. Mudahnya adalah fungsi statis memiliki syntax yang bertugas tetap tanpa adanya input data dari luar fungsi

-Fungsi dinamis adalah kebalikan dari fungsi statis yang mana kita bisa memberikan input nilai diluar fungsi ke dalam fungsi secara dinamis sesuai jumlah parameter dan argument yang kita deklarasikan di fungsi. Mudahnya adalah fungsi dinamis juga memiliki syntax yang bertugas tetap namun dapat menerima input data dari luar fungsi dan pengelolaan data sebuah fitur bisa dilakukan sedinamis mungkin
*/

// Function Statis atau null parameter, yaitu function yang cara pengembalian nilainya dilakukan pada return karena tidak ada argument dalam parameter function yang menyimpan nilai dari function tersebut.
function nama() {
  return "Gustut Biksa";
}
// Pemanggilan function statis dengan parameter null dilakukan dengan nama funtion dan kurung kosong () saja, karena tidak bisa dilakukan input data apapun kedalam fungsi.
console.log(`Contoh Pemanggilan Fungsi statis: ${nama()}`);
// Contoh Function Statis dalam bentuk arrow function
const arrowNama = () => "Gusut Biksa";
console.log(`Contoh Pemanggilan Fungsi statis Arrow function: ${arrowNama()}`);

// Contoh perhitungan dengan Arrow Function Dinamis dengan syntax proses cara 1:
const sum = (angka1, angka2) => {
  let hitung = angka1 + angka2; //masukkan proses sebagai value dari sebuah variabel agar tidak konyol untuk mlakukan return sebuah syntax atau proses, ingat kebanyakan koding di python kita hanya melakukan return variabel, bukan return sebuah syntax.
  return hitung;
};

let ab = sum(5, 7);
console.log(ab);

/** Perlu adanya pemahaman penting disini bahwa, Dalam sebuah function, jika kita ingin nilai dari sebuah proses dari function digunakan diluar function itu sendiri, maka kita harus melakukan return. TAPI, kebanyakan programmer JS melakukan return sebuah syntax, dan itu terlihat sangat konyol. maka dari itu, syntax atau sebuah proses dalam fungsi kita masukkan ke dalam variabel dan dijadikan value dari variabel, lantas kita hanya perlu me-return variabel itu saja, terlihat lebih mudah dibaca dan lebih ramah. */

// Tapi jika memang diharuskan return sebuah syntax, yasudah pakai cara dibawah ini
// Contoh perhitungan dengan Arrow Function Dinamis dengan syntax proses cara 2:
const sum1 = (angka3, angka4) => {
  return angka3 + angka4;
};

let ab1 = sum1(10, 8);
console.log(ab1);

// Function Dinamis atau dengan parameter, yang mana return pada fungsi dinamis kosong dan syntaxnya melakukan pemanggilan ke parameter atau argument fungsi yang nantinya argument - argument ini akan diberikan nilai ketika fungsi dipanggil dari luar fungsi.
function namaLengkapAlamat(lengkap, alamat) {
  console.log(`Contoh Pemanggilan fungsi dinamis dibawah`);
  console.log(`Nama Lengkap anda : ${lengkap}`);
  console.log(`Alamat anda adalah : ${alamat}`);
  return;
}
// Pemanggilan fungsi dinamis yang mana parameternya langsung diberikan nilai, dan nantinya nilai ini akan langsung diproses oleh syntax yang berada dalam fungsi.
namaLengkapAlamat("Gustut Biksa", "Peguyangan");
// Contoh Function Dinamis dalam bentuk arrow function
const lengkapIdentitas = (namaLengkap, alamatLengkap) =>
  `Contoh Pemanggilan fungsi dinamis dibawah: ${namaLengkap} ${alamatLengkap}`;

let a = lengkapIdentitas("Gustut Biksa", "Peguyangan");
console.log(a);

// Contoh Fungsi dinamis namun menggunakan kedinamisan pada jumlah argumentnya yang mana menggunakan object lawas berbentuk araay dalam function bernama "arguments", yang mana jumlah argument bisa kita deklarasikan dalam sytanx fungsi tanpa kita deklarasikan pada parameter fungsi itu sendiri.
function bioSaya() {
  arguments[0] = console.log(arguments[0]); // contoh jika argument[0] merupakan module yang ingin memiliki statementnya sendiri
  console.log(arguments[1]); // contoh argument[1] yang cuma berfungsi sebagai pengembalian nilai variabel pada fungsi
}
let identitas = ["gustut", "abiansemal"];

bioSaya(identitas[0], identitas[1]);

// Kita juga bisa akses semua arguments tanpa mendekalrasikannya, caranya adalah kita melakukan for pada object argumetns tersebut seperti dibawah ini :
// contoh dibawah ini sudah contoh stadar, jadi tinggal sesuaikan saja sesuai keperluan
function bioSayaLoop() {
  for (let i = 0; i < arguments.length; i++) {
    b = `Ini data Loop : s${arguments[i]}`;
    console.log(b);
  }
}

bioSayaLoop("Gustut Biksa", "suka koding", 27);

// Contoh Penggunaan fungsi dengan menggunakan Rest Parameter : ...args (args bebas, boleh ...uwau ...lalo ...nyiahahaha, yang penting titik 3 nya : ...). tapi hal yang penting adalah, rest parameter hanya bisa dideklarasikan pada parameter terakhir saja
function restPam(modul1, modul2, ...params) {
  console.log("Modul 1:", modul1);
  console.log("Modul 2:", modul2);
  console.log("Sisa data (rest):", params);
  console.log("Data pertama dari rest:", params[0]);
}

restPam("HTML", "CSS", "JavaScript", "React", "Tailwind", "Node.js");

// Contoh penggunaan fungsi dengan Rest Parameter dengan looping pada Rest Parameternya :

function restPam(modul1, modul2, ...params) {
  // Data ke 0 dan ke 2 ("HTML", "CSS") ditampilkan pada parameter pertama dan kedua
  console.log(`Modul wajib: ${modul1}, ${modul2}`);

  // Contoh Loop pada Rest Parameter
  console.log("Modul tambahan:");
  // looping dengan forEach pada rest parameter yang dimulai pada array ketiga dst ("JavaScript", "React", "Tailwind", "Node.js")
  params.forEach((modul, index) => {
    console.log(`index ke ${index} dari data ketiga : ${modul}`);
  });
}

restPam("HTML", "CSS", "JavaScript", "React", "Tailwind", "Node.js");

/** Penjelasan dasar perulangan for each, yang mana forEach memiliki 3 parameter tetap yakni :

Value: nilai dari data saat ini dalam array
Index: indeks dari data saat ini
Array: array dari data asli tempat kita sedang melakukan perulangan
*/
let datasss = [1, 2, 3, 4];
datasss.forEach((value, index, array) => {
  console.log(value);
  console.log(index);
  console.log(array);
});

// Function yang masuk sebagai value sebuah variabel, berikut Cara 1 :
const showName = function fullname(namaDepan, namaBelakang) {
  console.log("tanpa spasi:" + namaDepan + namaBelakang);
  console.log("dengan spasi:" + namaDepan, namaBelakang);
};
showName("gustut", "biksa");

// Function yang masuk sebagai value sebuah variabel, berikut Cara 2 :
const nameShow = new Function(
  "namaFirst",
  "namaLast",
  "return namaFirst + namaLast" //kita harus menyebutkan argument yang kita return dengan tanda + untuk argument kedua agar function dengan sifat dinamis seperti ini dapat menerima value untuk argumennya dari luar fungsi
);
x = nameShow("Gustut ", "Biksa"); // Isi spasikan di Gustut agar value tidak terlalu mepet saat console.log
console.log(x);

// Contoh Fungsi dinamis dengan kondisi if-else, yang mana memanggil angka random dan masukan angka tersebut kedalam kondisi :
const kondisiNumber = (theNumber) => {
  if (theNumber > 800) {
    console.log("WAW LEBIH DARI 800 :", theNumber);
  } else {
    console.log("KURANG DARI 800 TERNYATA :", theNumber);
  }
};
let randomNumber = ~~(Math.random() * 1000); //variabel dengan value property math yang akan menampilkan angka random dan langsung dikali dengan 1000
kondisiNumber(randomNumber); //memasukkan nilai angka random dari variabel randomNumber ke dalam fungsi

/**  Ada yang namanya hoisting pada JS, terutama pada function dengan format standar dan pada variabel. Jadi Hoisting adalah mekanisme JavaScript di mana deklarasi variabel dan fungsi “diangkat” ke atas scope sebelum kode dijalankan. Namun hanya deklarasi-nya, bukan inisialisasinya.
 */

// Contoh eror dalam Hoisting
console.log(nama); // undefined ❗
var nama = "Gustut";

// Fungsi Dibawah akan eror seperti ini pada console browser : Uncaught ReferenceError: Cannot access 'kondisiNumber1' before initialization. Fungsi dipanggil terlebih dahulu daripada di deklarasikan, hal ini kare kita melakukan arrow function, yang mana nama fungsi masuk dalam sebuah variabel const, dan variabel tidak dapat melakukan hoisting. Namun jika melakukan deklarasi fungsi secara standar maka hoisting ini bisa berjalan.

// INGAT BAHWA HOISTING BUKANLAH CARA KODING TAPI SEBUAH MASALAH, JANGAN ANGGEP HOISTING ITU SEBUAH HAL JENIUS!!!

// let randomNumber1 = ~~(Math.random() * 1000);
// kondisiNumber1(randomNumber1);

// const kondisiNumber1 = (theNumber1) => {
//   if (theNumber1 > 800) {
//     console.log("WAW LEBIH DARI 800 :", theNumber1);
//   } else {
//     console.log("KURANG DARI 800 TERNYATA :", theNumber1);
//   }
// };

// TUGAS 1
/** Membuat Perhitungan
 * Menghitung Luas Lingkaran
 * Menghitung Luas Segitiga
 * Menghitung Luas persegi panjang
 * Menghitung Luas Jajargenjang
 */

// Luas Lingkaran
const luasLingkaran = (jari2) => {
  const pi = Math.PI;
  luasLing = pi * jari2;
  return luasLing;
};
let jari = luasLingkaran(Math.random() * 200);
console.log(`Luas Lingkaran adalah : ${jari}`);

// Luas Segitiga
const luasSegitiga = (alas, tinggi) => {
  luasSeg = 0.5 * alas * tinggi;
  return luasSeg;
};
let alting = luasSegitiga(Math.random() * 1500, Math.random() * 2000);
console.log(`Luas Segitiga adalah : ${alting}`);

// Luas Persegi Panjang
const luasPerPanjang = (panjang, lebar) => {
  luasPerPan = panjang * lebar;
  return luasPerPan;
};
let jangBar = luasPerPanjang(Math.random() * 1500, Math.random() * 2000);
console.log(`Luas Persegi Panjang adalah : ${jangBar}`);

// Luas Jajar Genjang
const luasJarGenjang = (alas1, tinggi1) => {
  luasJarGen = alas1 * tinggi1;
  return luasJarGen;
};
let jarJang = luasJarGenjang(Math.random() * 1500, Math.random() * 2000);
console.log(`Luas Jajar Genjang adalah : ${jarJang}`);

// TUGAS 2
/** Menghitung total gaji yang di dapat dalam satu bulan dengan input minimal sebagai berikut :
 * Nama Karyawan
 * Gaji Perhari
 * Jumlah hari masuk kerja
 
Tugas 2 ini bertujuan untuk mencoba data input prompt yang diproses oleh sebuah fungsi
 */

let namaKaryawan = prompt("Masukkan Nama Anda Sebagai Karyawan :");
let gajiPerhari = prompt("Masukkan Uang Harian Anda Sebagai Karyawan :");
let jumlahAbsen = prompt("Masukkan Jumlah Absen Anda Sebagai Karyawan :");

const totalGaji = (gaji, absen) => {
  total = gaji * absen;
  return total;
};

uangKaryawan = totalGaji(gajiPerhari, jumlahAbsen);
alert(`Hai ${namaKaryawan} total Gajimu sekarang sebesar : ${uangKaryawan}`);
