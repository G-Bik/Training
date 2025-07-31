/**
 BELAJAR PERULANGAN di JAVASCRIPT
 for, for of, for in, foreach
 while & do while
 */
/**
 LOOP pada java script terbagi menjadi 3 ekspresi yaitu :
 1. Ekspresi pertama adalah inisialisasi variabel dan nilai loop awal
 2. Ekspresi kedua kondisi seberapa panjang perulagan yang akan dilakukan
 3. Ekspresi ketiga adalah inisialisasi perulangan entah itu ++ atau -- yang mana diestiap perulangan akan menambahkan atau mengurangi nilai ekspresi pertama hingga nilai ekspresi pertama tidak lagi memenuhi kondisi perulangan pada ekspresi kedua
 */

/** Contoh menangkap function dalam array dan mengelolanya secara dynamis dalam iterasi for, contoh dibawah adalah dengan mendeklarasikan variabel data, yang mana value function ada pada index ke-4  */

// OKE KITA ADA MASALAH DISINI:
// ketika banyak fungsi dijadikan 1 pada array, entah itu fucntion yang bentruknya standar ataupun berupa arrow function, atau jenis penulisan function yang lain. permasalahan utamanya adalah kedinamisan dari pembacaan array tersebut. Pastinya kita akan melakukan for pada array tersebut, setelah itu kita hanya bisa mendapatkan index dan jenis value dari setiap index array tersebut, kita tidak bisa menangkap hal uniqe setiap fungsi teresbut, ya tentu saja karena tidak semua function memiliki nama (contohnya pada arrow function yang masuk array karena tidak bisa di const lagi).

// Maka dari itu, function harus dirubah formatnya dalam array menjadi sebuah object, yang mana setiap fungsi diberikan pengenal (id : 1, fungsi). Sekarang pikirkan bagaimana caranya mendapatkan keunikan setiap fungsi dari object teresbut yang mana kita perlu merubah for array kita.
const data = [
  "saya",
  4,
  5,
  "mungkin saja",
  function arrayFunction(...parrams) {
    parrams[0] = console.log("kamu melakukan print fungsi dalam array");
    parrams[1] = console.log(
      "Oke sekarang kita melakukan display parameter kedua"
    );
    return parrams[2] + parrams[3];
  },
  "yuk semangat kerja",
  18,
  2025,
  (...arrParrams) => {
    return ((arrParrams[0] * arrParrams[1]) / 100) * arrParrams[0];
  },
];

const funcToObject = []; // deklarasi array baru utk menyimpan nama2 fungsi nanatinya
for (let index = 0; index < data.length; index++) {
  if (typeof data[index] === "function") {
    // Melakukan deklarasi variabel yang menyimpan value nama2 fungsi standar yang ada pada array lama (data), disini sebenarnya ada 2 kondisi yang membagi kedalam 2 statement dan dipisah dalam tanda ||
    // Kondisi pertama (sebelah kiri ||) adalah mengambil nama fungsi dari array lama (data) dan Kondisi kedua (sebelah kanan ||) adalah memberikan statement pada fungsi dengan format tidak standar (fungsi tanpa nama) yang mana dalam kasus ini adalah arrow function.
    // PR===> COBA PIKIRKAN BAGAIMANA KONDISI PADA FUNGSI ARROW (YANG bernilai Null dibawah) agar bisa diberikan identitas TANPA MERUBAH KONDISI di array lama (data).
    const identitasFungsi = data[index].name || `arrowFunc${index}`; //disni coba pikirkan null ini harus diapakan

    // melakukan push namma fungsi dengan yang memiliki format standar (yang memiliki nama) ke dalam arary yang baru (funcToObject) agar nantinya array baru tersebut menyimpan nama-nama fungsi standar yang akan dipanggil pada if else secara dinamis dengan data array lama (data)
    funcToObject.push(identitasFungsi);

    console.log(`print FunctoObject ${funcToObject}`);

    // Melakukan for pada array baru (funcToObject) yang berisikan list nama-nama fungsi dan dibandingkan dengan array lama (data) dengan property .name untuk mengambil nama fungsi dari array lama tersebut(data)
    for (let index1 = 0; index1 < funcToObject.length; index1++) {
      console.log(index1);

      // Membandingkan apakah nama fungsi di array lama sama dengan array baru

      /** Sebenarnya terdapat masalah pada else if disini, yang mana else if selalu bernilai true karena dia membandingkan nilai funcToObject yang mana bervalue array dengan masking nama2 function pada array data. nah karena jenis functionnya adalah arrow function yang tidak memiliki idnentitas, maka funcToObject dibandingkan dengan data[index].name yang mana membandingkan nama yang tidak sama, maka dari itu nilai else if selalu menjadi true
       
       nah diluar hal tersebut, mengapa output else if ini bisa berjalan 2 kali jika tidak menggunakan break;, alasan utamanya adalah for dalam for, nah karena index1 (for dalam) merupakan value dari index (for luar), maka disetiap perulanngan index (for luar) akan terus mengulang secara total lagi index1 (for dalam),

       nah dalam kasus kode javascript ini, karena ditemukan 2 function pada array data, maka perulangan index akan terjadi 2 kali, nah dalam 2 kali tersebut index1 akan terus berulang total data funcToObject disetiap perulangan index. maka dari itu kondisi else if akan terus masuk.

       nah semua bug ini terjadi karena jenis data arrow function tidak di objek kan pada array data, yang mana seharusnya jika arrow function di objek kan pada array data maka pengkondisian if -else pada index1 akan lebih tepat tanpa menyebabkan bug seperti ini.
      */
      if (funcToObject[index1] === data[index].name) {
        hasilfungsi1 = data[index](null, null, 10, 25);
        console.log(`Berhasil madafaka : ${hasilfungsi1}`);
      } else if (funcToObject[index1] != data[index].name) {
        hasilfungsi2 = data[index](Math.random() * 1000, Math.random() * 1000);
        console.log(`MASUK KE FUNGSI 2 MADAFAKA ${hasilfungsi2}`);
        break;
      } else {
        console.log("tidak masuk if else");
      }
    }
  }
}

// Melakukan optimasi refactor if-else dengan menggunakan map + workrround dan switch-case
// TOLONG KERJAKAN INI, BISA SETALAH NONTON VIDEO DEA AFRIZAA

// increment loop atau perulangan dengan data bertambah
for (let ini = 1; ini <= 5; ini++) {
  console.log(ini);
}

// decrement loop atau perulangan dengan data berkurang
for (let decre = 5; decre >= 1; decre--) {
  console.log("data decre", decre);
}

// increment loop dengan pemilihan angka genap ganjil
// Genap
for (let genap = 1; genap <= 20; genap++) {
  if (genap % 2 == 0) {
    console.log("display angka genap", genap);
  }
}
// Ganjil
for (let genap = 1; genap <= 20; genap++) {
  if (genap % 2 != 0) {
    console.log("display angka ganjil", genap);
  }
}

// Contoh perulangan WHILE mengambil nilai genap
let xy = 1;
while (xy <= 10) {
  if (xy % 2 == 0) {
    console.log("contoh loop while genap", xy);
  }
  xy++;
}

// Contoh perulangan WHILE mengambil nilai ganjil
let ay = 1;
while (ay <= 10) {
  if (ay % 2 != 0) {
    console.log("contoh loop while ganjil", ay);
  }
  ay++;
}

// Contoh perulangan do -While mengambil nilai genap
let aw = 0;
do {
  if (aw % 2 == 0) {
    console.log("contoh perulangan do-while :", aw);
  }
  aw++;
} while (aw < 10);

// Contoh perulangan do -While mengambil nilai ganjil
let uy = 0;
do {
  if (uy % 2 != 0) {
    console.log("contoh perulangan do-while :", uy);
  }
  uy++;
} while (uy < 10);

// TUGAS PERULANGAN

const xi = [3, 5, 12];
let total = 0;
for (let c = 0; c < xi.length; c++) {
  console.log((total += xi[c]));
}

let c = 0;
while (c < xi.length) {
  console.log((total += xi[c]));
  c++;
}

let total1 = 0;
let c1 = 0;
do {
  console.log((total1 += xi[c1]));
  c1++;
} while (c1 < xi.length);

banyakData = [
  "denpasar",
  "peguyangan",
  "udayana",
  "sudirman",
  "gatsu",
  "canggu",
  "ubud",
];

// contoh perulangan for of yang mana melakukan output values dari sebuah array atau data
for (let bData of banyakData) {
  console.log(bData);
}

// contoh perulangan for in yang mana melakukan output index dari sebuah array atau data
for (let aData in banyakData) {
  console.log(aData);
}
// contoh perulangan for each yang mana melakukan output index dan value dari sebuah array atau data
banyakData.forEach((cData, index) => {
  console.log(cData, index);
});

// contoh perulangan for each yang mana melakukan output index dan value dari sebuah array atau data
banyakData.map((cData, index) => {
  console.log(cData, index);
});
