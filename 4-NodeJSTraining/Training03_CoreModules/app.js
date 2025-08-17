// File Sistem
const fs = require("fs");
const { stdin } = require("process");
const { stringify } = require("querystring");

// coba ikuti saja dlu video sandhika galih, nanti klo sudah selesai coba require promise dan callback dibawahnya sesuai documentasi NodeJS

// Menuliskan string ke file (synchronus)
// fs.writeFileSync("test.txt", "Hello World secara synchronus!");

// jika kita menggunakan metode synchronus maka biasanya memakai try cath, jika memakai ashyncronus biasanya sudah ditangani dengan calback
// try {
//   // mencoba try catch pada core module file sistem untuk membuat folder
//   fs.writeFileSync("data/test.txt", "Hello World secara synchronus!");
// } catch (err) {
//   console.log(err);
// }

// Menuliskan string ke file (asynchronus) yang mana try catch nya menggunakan CALBACK
// fs.writeFile("data/test.txt", "Hello world secara asynchronus", (err) => {
//   if (err) throw err;
//   console.log("file has been saved");
// });

//Membaca isi file secara Synchronus,
// Ingat setelah directory file, isikan encodingnya entah itu utf8 atau yang lainnya, jika tidak maka output dari syntaks ini berupa buffer dan sulit utk di mengerti.
// const read = fs.readFileSync("test.txt", "utf8");
// console.log(read);

//Membaca isi file secara Asynchronus, terdapat 2 argument dalam callbacknya yaitu yang pertama sebagai eror dan argument kedua sebagai hasil read data. 2 argument ini sudah default penempatannya seperti itu, tapi cuman argument hasil saja yang bisa kita rubah2 penamaannya.
// fs.readFile("data/test.txt", "utf8", (err, hasil) => {
//   if (err) throw err;
//   console.log(hasil);
// });

// Readline, sama seperti fungsi input-close pada python yang mana memberikan interface CLI I/O ke kita
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Input CLI interface
// rl.question("Inputkan Nama Kalian :", (nama) => {
//   rl.question("Masukkan No Hp anda :", (noHP) => {
//     console.log(`hai selamat datang : ${nama}`);
//     console.log(`no Hp anda: ${noHP}`);

//     rl.close(); // Close CLI interface
//   });
// });

// Tugas 1
// Membuat
rl.question("Inputkan Nama Kalian :", (nama) => {
  rl.question("Masukkan No Hp anda :", (noHP) => {
    const dataTangkap = { nama, noHP };

    fs.readFile("data/test.json", "utf8", (err, hasil) => {
      if (err) throw err;

      // kalau data kosong
      if (hasil === "") {
        // menuliskan [] pada file agar bisa diisi dnegan object
        fs.writeFile("data/test.json", "[]", (err) => {
          if (err) throw err;
          simpanData(dataTangkap);
        });

        // kalau data tidak kosong
      } else {
        simpanData(dataTangkap);
      }
    });

    rl.close(); // Close CLI interface
  });
});

// Fungsi untuk menyimpan data
const simpanData = (dataObject) => {
  // Membaca file secara asynchronus setelah itu dilakukan parsing agar bisa input file dengan JSON.parse
  fs.readFile("data/test.json", "utf8", (err, hasil) => {
    if (err) throw err;
    const parse1 = JSON.parse(hasil);
    parse1.push(dataObject);
    console.log(`Data kosong, Data pertama adalah: `);
    console.log(parse1);

    //menuliskan data parsing dengan JSON.stringify
    fs.writeFile("data/test.json", JSON.stringify(parse1), (err) => {
      if (err) throw err;
    });
  });
};
