// Menggunakan salah satu NPM atau third party package yaitu : Validator dan menncoba fitur didalamnya
const validator = require("validator");
// Untuk menggunakan pakcage chalk dengan cara commonJS (CJS) atau dengan require, maka install lah package chalk dengan versi @4.1.0. cmd = npm i chalk@4.1.0
const chalk = require("chalk");

// Penggunaan package validator
let email = validator.isEmail("testing@gmail.com");
let phone = validator.isMobilePhone("082112", "id-ID");
let numeric = validator.isNumeric("0821!@#!#12");

// Penggunaan package chalk
let textBiru = chalk.blue("TESTING CHALK BIRU");
console.log(textBiru);
let BGBiru = chalk.black.bgBlue("TESTING CHALK BACKGORUND BIRU");
console.log(BGBiru);
let textModifier = chalk.bold.bgBlue("TESTING CHALK MODIFIER BOLD");
console.log(textModifier);

//contoh cara mengatur tulisan pada terminal agar ter modify beberapa kata yang dipilih
const namaKu = "Gustut";
const text = chalk`{white.italic.bold Lorem} {bold.italic ipsum}, dolor {bgRed sit amet} consectetur {bgBlue.italic.bold adipisicing} elit. Alias, {bgGreen.bold.black eveniet}. kenalkan aku : ${namaKu}`;
console.log(text);
