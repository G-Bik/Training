// contoh Array untuk pengenalan array di JavaScript
// Dalam sebuah  variabel javascript, kita bisa menyimpan berbagai tipe data dalam sebuah array. contohnya seperti dibawah yang mana terdapat string, function, dan object dalam sebuah array.
const contohArray = [
  "hahaha",
  function () {
    return false;
  },
  { token: "123141" },
];

// Contoh sederhana membuat array dengan cara 1
const arraySaya = ["😉", "🙌", "💋"];
// console.log(arraySaya);

// contoh sederhana membuat array dengan cara 2
const arraySaya2 = [];
arraySaya2[0] = "🍏";
arraySaya2[1] = "🍎";
arraySaya2[2] = "🍊";
arraySaya2[3] = "🥑";
// console.log(arraySaya2);
// Menampilkan panjang dari array dengan properti .length
// console.log(`panjang data array ${arraySaya2.length}`);

// Contoh sederhana membuat array dengan cara 3
const arraySaya3 = new Array("🚗", "✈️");
// console.log(arraySaya3);

// Contoh mengcombine array cara 2 dan cara 3
const combineArray = new Array();
combineArray[0] = "🤣";
combineArray[3] = "🍌";

// console.log(
//   `Contoh Combine cara 2 dan cara 3 dan juga menunjukkan contoh array yang memiliki empty value ${combineArray}`
// );
// Contoh cara pemanggilan data dari array
// console.log(combineArray[0]);

// Mengidentifikasi array beserta indexnya

// Contoh Array yang akan diidentifikasi
const arrayIdentifikasi = [
  "🍉",
  "🍇",
  "🍓",
  "🍈",
  "🍒",
  "🍑",
  "🥭",
  "🍍",
  "🥥",
];

// Cara mengidentifikasi apakah sebuah array memiliki data tertentu yang kita inginkan dengan menggunakan method .includes(). Nantinya akan mengembalikan nilai boolean true atau false
const strawberry = arrayIdentifikasi.includes("🍓");
// console.log(strawberry); // Output: boolean

// Untuk mengetahui posisi dari data tertentu dalam sebuah array, kita bisa menggunakan method .indexOf(). Nantinya akan mengembalikan nilai berupa index dari data yang kita cari. Jika tidak ditemukan, maka akan mengembalikan nilai -1
const posisiStrawberry = arrayIdentifikasi.indexOf("🍓");
// Menggunakan kondisi untuk mengecek apakah data ditemukan diposisi yang mana atau tidak
// menggunakan if steatement hanya dengan parameter tanpa operator logika akan langsung dibantingkan dengan nilai true seperti dibawah ini.
// if strawberry === true sama saja dengan if (strawberry)
if (strawberry) {
  //   console.log(`Data 🍓 ditemukan dalam array di posisi ${posisiStrawberry}`);
} else {
  //   console.log("Data 🍓 tidak ditemukan dalam array.");
}

// Untuk mengetahui data sebelum dan sesudah dari data yang kita cari, kita bisa menggunakan index yang sudah didapatkan sebelumnya
const indexBefore = posisiStrawberry - 1;
const indexAfter = posisiStrawberry + 1;
const before = arrayIdentifikasi[indexBefore];
const after = arrayIdentifikasi[indexAfter];
// console.log(`Sebelum 🍓 ada ${before} dan setelahnya ada ${after}`);

// Cara mengetahui value pertama dan terakhir dari sebuah array dapat dilakukan dengan metode shift() dan pop(). Hal ini berguna untuk mengambil data dari sebuah array yang memiliki banyak value dan multiple jenis data (bukan hanya string saja). Ini akan sangat memudahkan kita untuk mempelajari dan mengidentifikasi array yang lebih kompleks.
const firstIndex = arrayIdentifikasi.shift(); // Mengambil data pertama dan menghapusnya dari array
const lastIndex = arrayIdentifikasi.pop(); // Mengambil data terakhir dan menghapusnya dari array
// console.log(
//   `Data pertama adalah ${firstIndex} dan data terakhir adalah ${lastIndex}`
// );

// Cara dalam mendeklarasikan objek kedalam array pada Javascript
const arrayNew = [];
arrayNew["semangka"] = "🍉";
arrayNew["Anggur"] = "🍇";
arrayNew["ApelIjo"] = "🍏";

// console.log(arrayNew);

// Melakukan duplikasi Array dalam pengelolaan Array
// terdapat 2 jenis pendupikasian array yaitu shallow copy dan deep copy
const arrayData = [
  "🍉",
  "🍇",
  "🍓",
  "🍈",
  "🍒",
  "🍑",
  "🥭",
  [30, 4],
  { semangka: "🍉" },
];

//Shallow Copy, yaitu pengcopyan array pada tingkat atas atau generalnya saja. Jika terdapat adanya nested (objek, fungsi dll.) dalam data array utama, maka nested tersebut akan ikut terpengaruh oleh perubahan pada array duplikat. ada banyak cara melakukan shallow copy, semua memiliki performancenya masing2, dan sebaiknya tanya AI untuk lebih detail dan jelasnya.
const copyData1 = [...arrayData]; //salah satu cara copy shallow copy
copyData1[7][8] = 321;
// console.log(
//   `Shallow Copy Array Utama ${arrayData} dan Array duplikat ${copyData1}`
// );

//Deep Copy, yaitu pengcopyann array keseluruhan tanpa mempengaruhi array utama yang dicopykannya (menduplikat lebih lengkap dibandingkan Shallow Copy)
const copyData2 = JSON.parse(JSON.stringify(arrayData)); // Cara Deep Copy
copyData2[7][8] = "HAHA HIHI";
// console.log(
//   `Deep Copy Array Utama ${arrayData} dan Array duplikat ${copyData2}`
// );

const arrayGUWE = [
  "🍉",
  10,
  { tomato: true },
  "eat",
  "🍒",
  {
    contohFungsi: function () {
      console.log("console log berhasil dipanggil");
    },
  },
  "🥭",
  [30, 4],
  { semangka: "🍉" },
];

// Cara pengambilan multidimensi array dalam array serta value objek dalam array (pengambilan sebuah nested pada array)
console.log(arrayGUWE[7][1]);
console.log(arrayGUWE[2].tomato);
// Cara pemanggilan fungsi yang berada dalam array
console.log(arrayGUWE[5].contohFungsi()); // akan menghasilkan nilai undefined, karena dalam fungsi sudah ada console.log(), bisa pakai cara dibawah sbegai berikut:
arrayGUWE[5].contohFungsi();

// Merging 2 array
const array1 = ["🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🥭", "🍍", "🥥"];
const array2 = [7, "mwehehehe", "🍒", 6, 3, [30, 4], { semangka: "🍉" }];

// Melakukan pengganbungan atau merge 2 array dengan fungsi .concat()
const mergerArray = array1.concat(array2);
console.log(mergerArray);

// Melakukan mapping pada gabungan array, pada parameter for tersebut ada 2 cara melakukan mapping tergantung dari tujuannya. Jika kita ingin melihat value arraynya maka gunakan of, jika ingin melihat index-nya gunakan in, dan jika ingin melihat keduanya gunakan .mapping()

// melihat index array utk di mapping
for (ulang in mergerArray) {
  console.log(`melihat index : ${ulang}`);
}

// melihat value array utk di mappiing
for (ulang of mergerArray) {
  console.log(`melihat value : ${ulang}`);
}

// melihat index dan valuenya utk di mapping
mergerArray.map((value, index) =>
  console.log(`melihat value dan index :` + value, index)
);

const datas = [
  {
    nama: "Gustut Biksa",
    stack: "js react dll",
    age: 27,
  },
  {
    nama: "Jonson",
    stack: "C++",
    age: 30,
  },
  {
    nama: "Andri",
    stack: "Ruby",
    age: 25,
  },
  {
    nama: "Andri",
    stack: "Python",
    age: 28,
  },
];

// Cara untuk menampilkan beberapa value dari key di objek dalam array
// property ini menggunakan arrow function
datas.map((values, index) => {
  return values.nama;
  console.log(values.nama, values.stack);
  console.log(values); // Tampilkan semua
});

// Cara melakukan pengurutan pada array, contohnya pada key "age" yang megurutkan valuenya
datas.sort((a, b) => b.age - a.age).map((values) => console.log(values));

// Cara melakukan filter dengan spesifik tertentu dengan penggunaan sort, filter dan map untuk mencari data dengan spesifik tertentu, yang mana menggunakan arrow function.
//Contoh ingin mengurutkan dari tahun paling tua ke muda utk data dengan umur diatas 25 tahun
datas
  .sort((a, b) => b.age - a.age) //pertama melakukan pengurutan umur dari paling besar ke paling kecil
  .filter((x) => x.age > 25) //kondisi filter yang diinginkan
  .map((values) => console.log(values)); // menampilkan valuesnya saja dari mapping tersebut

/**
 * Melakukan pengurutan array menggunakan algoritma Bubble Sort.
 * Algoritma ini membandingkan elemen bersebelahan dan menukarnya jika urutannya salah.
 * Proses ini diulang hingga seluruh array terurut sesuai kriteria.
 *
 * Pada contoh di bawah, pengurutan dilakukan dari nilai terbesar ke terkecil (descending).
 *
 * Langkah-langkah:
 * 1. Loop luar (i) mengatur berapa kali proses pengurutan dilakukan.
 * 2. Loop dalam (j) membandingkan elemen ke-j dengan elemen ke-(j+1).
 * 3. Jika elemen ke-j lebih kecil dari ke-(j+1), maka kedua elemen ditukar.
 * 4. Setelah satu iterasi loop luar, elemen terbesar akan berada di posisi akhir array yang belum terurut.
 * 5. Proses diulang hingga seluruh array terurut.
 *
 * Kompleksitas waktu: O(n^2) pada kasus terburuk dan rata-rata.
 *
 * Contoh penggunaan:
 * const datas2 = [9, 5, 8, 4, 21, 12, 2, 3, 4, 5];
 * // Setelah proses bubble sort, datas2 akan terurut dari terbesar ke terkecil.
 */
const datas2 = [9, 5, 8, 4, 21, 12, 2, 3, 4, 5];
/**
 Kita akan melakukan perulangan bubble sort, ini merupakan perulangan yang uniqe dan memiliki aturan bakunya. pertama kita melakukan perulangan bubble.

 Perulangan Bubble yakni menggunakan 2 for, nah 2 for ini memiliki pengkondisian perulangann yaitu -1 dan -1 -(variabel for luar), okey mudahnya perulangan ini seperti ini jika kita melihat dari keyboard kita, lihatlah angka 1-0 pada keyboard dan anggap saja itu sebuah array dengan index 0-10:

 for (let i = 0; i < datas2.length - 1; i++)

 Perulangan luar diatas, dalam variabel i akan mengulang seperti ini dalam keyboard :

 123456789 -> tidak sampai 0 karena ingat ada panjang .length -1 

 Sekarang perulangan dalam 

 for (let j = 0; j < datas2.length - 1 - i; j++)

 Perulangan dalam diatas, dalam variabel j akan mengulang seperti ini dalam keyboard: note ini juga lebih dimudahkan dnegan kondisi i karena perulangan variabel j berada pada perulangan variabel i beserta dengan kondisi 
 .length -1 -i :

sesuai angka di keyboard, bukan index
 i = 1
 j = 123456789

 i = 2
 j = 12345678

 i = 3
 j = 1234567

 dst hingga kondisi i pada angka 9 dan j hanya berulang pada angka 1 saja (istilahnya ketika i semakin ke kanan, j semakin sedikit gerakannya untuk ke kanan)
 
 */
for (let i = 0; i < datas2.length - 1; i++) {
  for (let j = 0; j < datas2.length - 1 - i; j++) {
    /**
     nah ketika j melakukan perulangan maka akan dilakukan kondisi, dimana jika index datas2 dengan nilai index j lebih kecil < dari index datas2 dengan nilai index j+1 (index +1 disebelahnya) maka akan bernilai true dan melakukan syntax swapping
     */
    if (datas2[j] < datas2[j + 1]) {
      /**
       ini adalah syntax swapping, yang mana pertama dideklarasikan variabel temp dengan nilai pada index ke j pada array datas2, nilai variabel temp, nantinya akan digunakan untuk mereplace nilai index j+1 pada array datas2

       setelahnya index j pada array datas2 di dirubah nilainya menjadi index j+1 pada array datas2

       terakhir, nilai index j+1 pada array datas2 dirubah nilainya menjadi nilai variabel temp (yang berisi nilai awal index j pada array datas2)
       */
      let temp = datas2[j]; // deklarasi variabel untuk penyimpanan nilai awal index j pada array datas2
      datas2[j] = datas2[j + 1]; // merubah nilai index j menjadi nilai index j+1
      datas2[j + 1] = temp; // merubah nilai index j+1 menjadi nilai awal j yang disimpan pada nilai variabel temp
    }
  }
}

// Melakukan Algoritma Bubble sort pada array datas yang berisikan objek agar mengurutkan umur dari besar ke terkecil
for (let i = 0; i < datas.length - 1; i++) {
  for (let j = 0; j < datas.length - 1 - i; j++) {
    if (datas[j].age < datas[j + 1].age) {
      // Tukar posisi
      let temp = datas[j];
      datas[j] = datas[j + 1];
      datas[j + 1] = temp;
    }
  }
}

console.log(datas);
