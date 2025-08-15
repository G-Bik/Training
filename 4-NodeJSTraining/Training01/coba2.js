<<<<<<< HEAD
// const nama = "Gustut";
// const umur = 27;

// const helo = (adan, wangsa) => {
//   console.log(`we adan ci ${adan} umur ci ${wangsa}`);
// };
// //pemanggilan fungsi
// helo(nama, umur);

// //contoh fungsi arrow function tanpa menulis return karena statementnya hanya 1 baris
// const aselole = (cobaCoba) =>
//   console.log(`kita coba hasilnya adalah ${cobaCoba}`);
// //pemanggilan fungsi
// aselole(15);

// Objek Global yang hanya bisa dibaca pada browser aja
// console.log(window);

// IIFE yang membuat statement didalam fungsi IIFE ini menjadi lokal dan tidak global
// (() => {
//   const count = 10;
//   return count + 10;
// })() + 50;

// ./ untuk file dalam 1 folder yang sama, ../ untuk diluar folder, ./namafolder/namafile untuk file yang berada di sebuah folder

console.log("INI LOG Coba2.js");

/**  Jika kita ingin melakukan konektivitas fungsi dalam sebuah file JS agar dapat digunakan pada file JS lainnya, maka kita perlu melakukan modularisasi, contoh dibawah menggunakan NodeJS jadi melakukan modularisasi pada sisi backend, dan karena ES module sudah mendukung NodeJS versi ini dan JS saat ini juga sudah mendukung ES module maka aman melakukan Export / Import cara penulisannya bisa seperti ini:
 * 
export const getName = (idUser, nama) => {
  return "Hai user ${idUser}, boleh aku panggil ${nama}";
};

Atau juga dapat seperti dibawah ini yang mana membedakan penulisan function dan exportnya dengan module.exports INGAT ADA s nya*/
const getName = (idUser, nama) => {
  return `Hai user ${idUser}, boleh aku panggil ${nama}`;
};
// ingat ini exports bukan export
module.exports = getName; //bagian export fungsinya agar bisa dipakai semua file JS
=======
consta nama = 'Gustut';
const umur = 27;
const helo = (adan, wangsa) =>{
console.log(`we adan ci ${adan} umur ci ${wangsa}`)
}
>>>>>>> a9b1c47eaaae9059a963e41371607cf30646df1c
