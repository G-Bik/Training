// Berfungsi untuk menjalankan script setelah DOM sepenuhnya dimuat
document.addEventListener("DOMContentLoaded", () => {
  // Mendeklarasikan elemen yang akan digunakan kedalam variabel
  const button = document.getElementById("clickMeButton");
  const paragraph = document.getElementById("firstLine");

  // Mendeklarasikan event listener dengan addEventListener apabila tombol diklik
  button.addEventListener("click", () => {
    // Statement ini seperti memasuki statement if, yang mana apabila di button sudah di click, maka statement ini akan dijalankan

    // Mengubah teks atau value dari elemen p pada variabel paragraph menjadi "Button clicked!"
    paragraph.textContent = "Button clicked!";
  });

  //   JavaScript Output property innerHTML, yang mana akan mengubah value html dari elemen p dengan id secondLine menjadi value sesuai value yang ada pada JS, innerHTML juga dapat merubah elemen HTML itu sendiri yang mana dengan menambahkan tags HTML yang diperlukan didalamnya

  const pOutput = document.getElementById("secondLine");

  pOutput.innerHTML =
    "<strong>Merubah Value Paragraft menjadi value JS</strong>";

  // JavaScript Output property innerText, yang mana akan mengubah value text dari elemen p dengan id thirdLine menjadi value sesuai value yang ada pada JS, tapi tidak dapat merubah elemen HTML itu sendiri, hanya merubah value textnya saja dengan format text biasa
  const pOutput1 = document.getElementById("thirdLine");

  pOutput1.innerText =
    "Hanya text saja yang berubah dan tidak dapat memberikan efek html seperti pada innerHTML";

  // JavaScript Output property document.write(), berfungsi untuk menampilkan parameter yang ada dalam document.write(). Property ini merupakan sebuah metode global tanpa harus memanggil variabel resetAll dibawah statement addEventListener ketika tombol di klik.

  const resetAll = document.getElementById("reset");
  resetAll.addEventListener("click", () => {
    document.write("YAHHH KE RESETT, GOBLOK!");
  });

  //   JavaScript Output property window.alert(), berfungsi untuk menampilkan pesan alert yang berisi parameter yang ada dalam window.alert(). dibawah menggunakan contoh ketika tombol Click Me! di klik, maka akan muncul alert dengan pesan yang sudah ditentukan.

  button.addEventListener("click", () => {
    alert("HALO, BANYAKAKIN BELAJAR ANJING!");
  });

  //   JavaScript Output property console.log(), berfungsi untuk menampilkan pesan pada console browser (pencet F12 dan pilih menu "console"), yang mana dapat digunakan untuk debugging atau hanya sekedar menampilkan pesan.

  const clickBug = document.getElementById("debugClick");
  clickBug.addEventListener("click", () => {
    console.log("HEY RIGHT HERE, YOU GOT DEBUGG HAHA LOL!");
  });

  // Contoh penggunaan prompt untuk meminta input dari pengguna
  // yang mana prompt akan menampilkan dialog input dengan teks yang diberikan, dan mengembalikan nilai yang dimasukkan oleh pengguna.
  let userName = prompt("Masukkan nama kamu: ", "Nama Kamu");
  if (userName) {
    // ${userName} adalah template literal yang digunakan untuk menyisipkan variabel ke dalam string, mengapa tidak menggunakan tanda + karena template literal lebih mudah dibaca, ditulis dengan backtick (`) dan memungkinkan penulisan string multi-baris, serta lebih modern
    console.log(`Halo, ${userName}! Selamat datang!`);
  } else {
    console.log("Halo, pengunjung tanpa nama!");
  }

  // Contoh penggunaan template literal multi-baris pada string
  let age = 27;
  let nama = "Gustut Biksa";
  let gaAdaNilai;
  let ProgrammerWorks = null; // 1 untuk belum bekerja, 2 untuk sudah bekerja

  if (ProgrammerWorks === null) {
    ProgrammerWorks = "Kamu belum bekerja sebagai programmer!";
  } else {
    ProgrammerWorks = "YAYY!! sudah bekerja sebagai programmer!";
  }

  // Menggunakan switch case hampir sama dengan if, tapi lebih mudah dibaca dan ditulis, serta lebih efisien untuk banyak kondisi
  // switch (ProgrammerWorks) {
  //   case "belum bekerja":
  //     ProgrammerWorks = "Kamu belum bekerja sebagai programmer!";
  //     break;
  //   case "bekerja":
  //     ProgrammerWorks = "YAYY!! sudah bekerja sebagai programmer!";
  //     break;
  //   default:
  //     ProgrammerWorks = "Tidak diketahui status pekerjaanmu!";
  //     break;
  // }

  alert(`nama saya adalah ${nama} dan umur saya adalah ${age} tahun.
    dan ini contoh deteksi ${gaAdaNilai} karena variabel tidak mendapatkan nilai atau tidak dideklarasikan nilainya, dan ${ProgrammerWorks}`);
  // gaAdaNilai tidak dideklarasikan, akan menyebabkan error di console serta pesan undefined pada alert

  // tapi jika kita ingin mendeklarasikan nilainya maka cukup seperti dibawah ini, yang mana tanpa perlu mendeklarasikan ulang variabel gaAdaNilai dengan let, const, atau var.
  gaAdaNilai = "sekarang ada nilai";
  alert(
    `Sekarang variabel gaAdaNilai sudah dideklarasikan nilainya yaitu ${gaAdaNilai}`
  );

  // Menggunakan contoh sederhana operator + - * / pada JavaScript
  // yang mana operator ini digunakan untuk melakukan operasi matematika pada angka, contoh dibawah ini adalah contoh penggunaan operator + untuk menjumlahkan saldo awal dan saldo tambahan dengan menggunakan literal template string
  // yang mana saldoAwal dan saldoTamabahan adalah variabel yang sudah dideklarasikan sebelumnya
  // kita juga bisa menggunakan opertaor lain seperti perkalian (*), pembagian (/), dan pengurangan (-) dengan cara yang sama
  let saldoAwal = 50000;
  let saldoTamabahan = 80000;
  const hutang = 30000;
  const saldoAkhir = saldoAwal + saldoTamabahan - hutang;

  alert(
    `Saldo awal saya adalah Rp.${saldoAwal} dan saldo tambahan saya adalah Rp.
    ${saldoTamabahan}, jadi total saldo saya adalah Rp.${saldoAkhir}`
  );

  // Menggunakan array untuk menyimpan beberapa nilai dalam satu variabel
  // const fruits = ["apel", "jeruk", "mangga", "pisang"];
  // alert(`Saya suka buah ${fruits.join(", ")}`);

  // // Menggunakan objek untuk menyimpan data dengan pasangan kunci-nilai
  // const person = {
  //   name: "Gustut Biksa",
  //   age: 27,
  //   city: "Jakarta",
  // };
  // alert(
  //   `Nama saya adalah ${person.name}, umur saya ${person.age} tahun, dan saya tinggal di ${person.city}.`
  // );

  // // Contoh penggunaan fungsi untuk mengorganisir kode
  // function greet(name) {
  //   return `Halo, ${name}!`;
  // }
  // alert(greet("Gustut Biksa"));

  // Contoh penggunaan array untuk menyimpan nama pelanggan
  let namaPelanggan = ["Tarno", "Smith", "Johnson", "Bobo"];
  // Menambahkan nama baru ke dalam array tanpa mengubah array yang sudah ada
  // .push() digunakan untuk menambahkan elemen baru ke akhir array
  namaPelanggan.push("Gustut Biksa", "Jonathan");
  // .shift() digunakan untuk menghapus elemen pertama dari array
  namaPelanggan.shift();
  // .pop() digunakan untuk menghapus elemen terakhir dari array
  namaPelanggan.pop();
  // .join(", ") digunakan untuk menggabungkan elemen-elemen dalam array yang dipilih dalam variabel menjadi satu string, dengan koma sebagai pemisah. kita bisa mengganti koma tersebut dengan karakter lain seperti spasi, garis miring, atau karakter lainnya sesuai kebutuhan.
  alert(namaPelanggan.join(", ") + " adalah nama pelanggan yang terdaftar.");
  alert(namaPelanggan[2] + " adalah nama pelanggan yang terdaftar ke-3.");

  // Contoh penggunaan prompt untuk meminta input nama orang
  let namaOrang = [];

  namaOrang[0] = "Joana";
  namaOrang[1] = "Bono";
  namaOrang[2] = "Lukman";
  // Menghapus nama pertama dari array
  namaOrang.shift();

  alert(namaOrang);

  // Contoh loop for
  // .length berungsi menampilkan jumlah data dalam array
  console.log(namaOrang.length);
  // dalam melakukan loop array, kita harus ingat pada inisialisasi variabel i yang dimulai dari 0, karena array dimulai dari index 0, dan kondisi i harus kurang dari panjang array (.length) agar sesuai dengan jumlah data array yang ada dan tanpa operator = karena dapat menyebabkan undefined atau error, dan i++ untuk menambah nilai i setiap kali loop dilakukan.
  for (let i = 0; i < namaOrang.length; i++) {
    console.log(`kimochiii ${namaOrang.length} kalii`);
    console.log(i);
    console.log(namaOrang[i]);
  }

  //loop do-while

  // Contoh menggunakan while loop yang mana akan melihat kondisi terlebih dahulu dan barulah melakukan perulangan.
  let i = 0;
  while (i < namaOrang.length) {
    i++;
    console.log(`Gustut Biksa`);
  }

  // Contoh menggunakan do-while loop yang mana akan melakukan perulangan terlebih dahulu dan baru melihat kondisi.
  do {
    i++;
    console.log(`hey kita melakukan do-while loop`);
  } while (i < namaOrang.length);
  // Contoh penggunaan while loop
});
