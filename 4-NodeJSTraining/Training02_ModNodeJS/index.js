// const coreFS = require("fs"); // pemanggilan core module
// const getUser = require("./coba"); // pemanggilan local module
// const npmMomment = require("moment"); // pemanggilan NPM atau third party module

const connect = require("./coba");

const generate = Math.random() * 100;

//Pemanggilan conectivitas exports dari coba.js....atau bagian Importnya jika pada ES Module

// Cara 1 pemanggilan exports jika Key dan Value Objectnya memiliki nama yang berbeda, seperti contoh dibawah setiap key object dari coba.js diberi nama module1234 sedangkan valuenya berbeda
// console.log(
//   connect.module1(generate, "Gustut"),
//   connect.module2,
//   connect.module3.totalBelanja(),
//   new connect.module4() //instansiasi class JS dengan new
// );

// Cara 2 pemanggilan exports jika Key dan Value Objectnya memiliki nama yang sama,
console.log(
  connect.getUser(generate, "Gustut"),
  connect.PI,
  connect.pelanggan.totalBelanja,
  connect.Costummer
);
