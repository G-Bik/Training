const moment = require("moment");
var unique = require("uniq");

const myDate = new Date();
const date = moment(myDate).format("MMMM Do YYYY, h:mm:ss a");
console.log(date);

const data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));

// Konektivitas Modularisasi file js pada sisi backend developer dengan menggunakan NodeJS
// require("./coba2");
console.log("coba konektivitas");

// Konek Modul Fungsi NodeJS yaitu dengan memasukkan require kedalam variabel agar bisa digunakan
data1 = require("./coba2");
console.log(data1); //untuk cek apakah funtion di file lain sudah dibaca sebagai Function

console.log(data1(1, "Gustut"));
