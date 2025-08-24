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
// Membuat interface input berupa nama dan noHP yang disimpan dalam file berbentuk object json, dan setiap inputan file akan bertambah bukan ditimpa. => hasilnya bisa dilihat pada test.json

// Membuat interface question nama, noHP dan menyimpannya dalam bentuk object di variabel dataTangkap
rl.question("Inputkan Nama Kalian :", (nama) => {
  rl.question("Masukkan No Hp anda :", (noHP) => {
    const dataTangkap = { nama, noHP };

    let dirPath = "./data/";

    // Membaca directory/folder data/ dan file test.json, apabila directory/folder dan file tidak ada, maka akan ada 2 kondisi
    fs.readFile(`${dirPath}test.json`, "utf8", (err, hasil) => {
      if (err) {
        // kalau folder/directory dan file tidak ada, dengan menggunakan value return (err) "ENOENT" yang berarti tidak ada directory dan file yang disebutkan dalam argument.
        if (err.code === "ENOENT") {
          // membuat folder/directory terlebih dahulu dengan 2 kondisi
          fs.mkdir(dirPath, (err) => {
            // if (err) throw err;
            // Mengecek apakah folder/directory sudah ada atau belum dengan validasi nilai return dari (err) yaitu "EEXIST"
            // (cara mengetahui nilai retun ini yaitu coba dulu menjalankan fungsi :if (err) throw err; setelahnya baru rubah kondisi if else seperti dibawah dan gunakan value return dari (err) tersebut untuk validasi if-else nya)

            // kalau folder/ directory ada
            if (err.code === "EEXIST") {
              // menuliskan [] pada file agar bisa diisi dnegan object dan dilakukan JSON.parse dan push
              fs.writeFile("data/test.json", "[]", (err) => {
                if (err) throw err;
                simpanData(dataTangkap); //fungsi yang dibuat dibawah untuk simpan data
              });
              // kalau folder/directory tidak ada
            } else {
              simpanData(dataTangkap);
            }
          });
        }
      } else {
        simpanData(dataTangkap);
      }

      // // kalau file kosong
      // if (hasil === "") {
      //   // menuliskan [] pada file agar bisa diisi dnegan object dan dilakukan JSON.parse dan push
      //   fs.writeFile("data/test.json", "[]", (err) => {
      //     if (err) throw err;
      //     simpanData(dataTangkap); //fungsi yang dibuat dibawah untuk simpan data
      //   });

      //   // kalau file tidak kosong
      // } else {
      //   simpanData(dataTangkap); //fungsi yang dibuat dibawah untuk simpan data
      // }
    });

    rl.close(); // Close CLI interface
  });
});

// Fungsi untuk menyimpan atau menuliskan data inputan ke test.json
const simpanData = (dataObject) => {
  // Membaca file secara asynchronus setelah itu dilakukan parsing dengan JSON.parse agar nantinya data yang berbentuk object bisa di push
  fs.readFile("data/test.json", "utf8", (err, hasil) => {
    if (err) throw err;
    const parse1 = JSON.parse(hasil); //parsing data
    parse1.push(dataObject); // push data
    console.log(`Data kosong, Data pertama adalah: `);
    console.log(parse1);

    //menuliskan data parsing dengan JSON.stringify karena format argument pada writeFile harus berbentuk string
    fs.writeFile("data/test.json", JSON.stringify(parse1), (err) => {
      if (err) throw err;
    });
  });
};
