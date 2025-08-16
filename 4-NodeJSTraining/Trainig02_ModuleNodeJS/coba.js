const getUser = (token, nama) => {
  return `Hai ${nama} anda adalah user ke : ${token}`;
};

const PI = 3.14;

// pada object dibawah kita akan mengambil value dari key dalam sebuah object yang sama untuk fungsi yang akan kita buat dalam object tersebut. maka cara mengambil valuenya adalah dengan menggunakan this. pada ${}sama dengan ${this.nama key yang valuenya akan kita ambil}
const pelanggan = {
  nama: "Dina",
  jumlah: 5,
  harga: 17000,
  totalBelanja() {
    return `total belanja ${this.nama} adalah ${this.jumlah * this.harga}`;
  },
};

class Costummer {
  //constructor adalah method khusus di dalam sebuah class (kelas) di JavaScript yang berfungsi otomatis dijalankan sekali saat kita membuat objek baru dari class tersebut. constructor ini akan otomatis dijalankan terlebih dahulu ketika kelas diinstansiasikan dengan new
  constructor() {
    console.log("Object Costummer telah dibuat");
  }
}

//Cara Ekports lebih dari 1 module dalam NodeJS, yang mana modul yang di exports akan dikembalikan dalam bentuk Object :

// Cara 1
// module.exports.module1 = getUser; //exports fungsi dalam bentuk object dengan nama object module1
// module.exports.module2 = PI; //exports variabel dalam bentuk object dengan nama object module2
// module.exports.module3 = pelanggan; //exports object yang didalamnya terdapat fungsi
// module.exports.module4 = Costummer; //exports class JS yang didalamnya ada constructor

// Cara 2
// module.exports = {
//   module1: getUser,
//   module2: PI,
//   module3: pelanggan,
//   module4: Costummer,
// };

// Cara 3 semisal Key dan Value objectnya sama, maka cukup dibuat antara key dan valuenya saja

// module.exports = {
//   getUser: getUser,
//   PI: PI,
//   pelanggan: pelanggan,
//   Costummer: Costummer,
// };

module.exports = {
  getUser,
  PI,
  pelanggan,
  Costummer,
};
