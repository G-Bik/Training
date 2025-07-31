// DOM adalah manipulasi terhadap elemen HTML, jika kita memanggil document. dalam // JavaScript, maka kita akan mengakses elemen HTML yang ada di dalam dokumen tersebut, dan document. inilah tanda bahwa kita melakukan manipulasi DOM.

// Contoh dibawah adalah manipulasi DOM untuk mengubah judul halaman web sesuai dengan yang kita inginkan.
// pertama kita dapat melakukan debugging dengan console.log untuk melihat apakah kita sudah mengakses elemen HTML yang benar dan value apa yang ada di dalamnya sebelum kita mengubahnya.
console.log(document.title);

// mengubah judul halaman web
document.title = "Belajar JavaScript DOM";
// kita dapat melakukan debugging kembali untuk memastikan bahwa judul halaman web sudah berubah sesuai dengan yang kita inginkan.
console.log(document.title);

// Manipulasi DOM juga dapat dilakukan terhadap elemen lain seperti body, misalnya kita ingin mengubah background color dari body. pertama kita dapat melakukan debugging dengan console.log untuk melihat apakah kita sudah mengakses elemen HTML yang benar dan value apa yang ada di dalamnya sebelum kita mengubahnya.
console.log(document.body);

// Menulis "HELLO WORLD!" ke dalam body melalui method .append di JS
const body = document.body;
body.append("HELLO WORLD!");

// Kita akan mempelajari 3 konsep dasar property dalam manipulasi elemen HTML yaitu textContent, innerHTML, dan innerText.
//
// Perbedaan ketiganya:
// 1. textContent: Mengatur atau mengambil semua teks dalam sebuah elemen, termasuk teks yang tersembunyi oleh CSS, dan tidak memproses tag HTML apapun (hanya teks murni).
// 2. innerHTML: Mengatur atau mengambil HTML di dalam sebuah elemen, sehingga bisa memasukkan tag HTML dan akan dirender sebagai elemen HTML oleh browser.
// 3. innerText: Mengatur atau mengambil teks yang terlihat (visible) oleh user, memperhatikan style CSS (misal display:none tidak akan diambil), dan tidak memproses tag HTML (hanya teks yang terlihat).

// Kita juga mempelajari cara membuat elemen <h1> dan mengisinya dengan teks "BE<marquee>LAJAR DOM JAVASCRIPT dengan menggunakan textContent</marquee>" yang, yang mana hanya text saja yang bisa di proses, dan tambahan element html lainnya malah dianggap text bukan dianggap sebagai element, contohnya pada element marquee kemudian akan ditambahkan ke dalam body.
//ini seperti membuat tag HTML <h1></h1> saja di dalam dokumen HTML.
const heading1 = document.createElement("h1");
// Menambahkan teks ke dalam elemen <h1></h1> yang telah dibuat menjadi <h1>BELAJAR<marquee> DOM JAVASCRIPT dengan menggunakan textContent</marquee></h1> dengan , yang mana hanya text saja yang bisa di proses, dan tambahan element html lainnya malah dianggap text bukan dianggap sebagai element, contohnya pada element marqueemenggunakan properti .textContent.
heading1.textContent =
  "<marquee>BELAJAR DOM JAVASCRIPT dengan menggunakan textContent, yang mana hanya text saja yang bisa di proses, dan tambahan element html lainnya malah dianggap text bukan dianggap sebagai element, contohnya pada element marquee</marquee>";

// Kita juga mempelajari cara membuat elemen <p> dan mengisinya dengan teks "<marquee>Belajar DOM JavaScript dengan menggunakan innerHTML, yang mana bisa memproses tag atau element html lainnya dan tidak hanya text saja </marquee>." yang kemudian akan ditambahkan ke dalam body.
//ini seperti membuat tag HTML <p></p> saja di dalam dokumen HTML.
const keterangan = document.createElement("p");

// Kita juga mempelajari cara membuat teks ke dalam elemen <p></p> yang telah dibuat menjadi <p><marquee><marquee>Belajar DOM JavaScript dengan menggunakan innerHTML, yang mana bisa memproses tag atau element html lainnya dan tidak hanya text saja </marquee>.</p> dengan menggunakan properti .innerHTML.
keterangan.innerHTML =
  "<marquee>Belajar DOM JavaScript dengan menggunakan innerHTML, yang mana bisa memproses tag atau element html lainnya dan tidak hanya text saja </marquee>.";

// Membuat elemen <b> dan mengisinya dengan teks "Belajar DOM JavaScript dengan menggunakan innerText, yang mana hanya mengambil teks yang terlihat (visible) oleh user, memperhatikan style CSS (misal display:none tidak akan diambil), dan tidak memproses tag HTML (hanya teks yang terlihat).";" yang kemudian akan ditambahkan ke dalam body.
const detailKeterangan = document.createElement("b");

// Menambahkan teks ke dalam elemen <b></b> yang telah dibuat menjadi <b>Belajar DOM JavaScript dengan menggunakan innerText, yang mana hanya mengambil teks yang terlihat (visible) oleh user, memperhatikan style CSS (misal display:none tidak akan diambil), dan tidak memproses tag HTML (hanya teks yang terlihat).";</b> dengan menggunakan properti .innerText.
detailKeterangan.innerText =
  "Belajar DOM JavaScript dengan menggunakan innerText, yang mana hanya mengambil teks yang terlihat (visible) oleh user, memperhatikan style CSS (misal display:none tidak akan diambil), dan tidak memproses tag HTML (hanya teks yang terlihat).";

// Menambahkan elemen <h1> pada variabel heading1 ke dalam body.
body.append(heading1);

// Menambahkan elemen <p> pada variabel keterangan ke dalam body.
body.append(keterangan);

// Menambahkan elemen <b> pada variabel detailKeterangan ke dalam body.
body.append(detailKeterangan);

// Kita mempelajari Data Selector untuk memilih elemen HTML berdasarkan ID, class, atau tag.
// 1. Menggunakan ID

const btn1 = document.getElementById("btn1");

// Salah satu cara lain untuk memilih elemen HTML adalah dengan menggunakan ID, yaitu dengan menggunakan method .querySelector dengan parameter "#btn1" yang berarti memilih elemen dengan ID "btn1" atau dengan parameter ".btn2" yang berarti memilih elemen dengan class "btn2".

// Menggunakan .querySelector untuk memilih tombol dengan class "btn2" yaitu dengan .btn2 pada parameter querySelector.
const btn2 = document.querySelector(".btn2");

console.log(btn2); // mengecek pada console pada browser apakah elemen dengan class ataupun dengan id oleh DOM sudah terpilih dengan benar.

const defaultText = "Klik Saya!"; // Teks default untuk tombol

// Syntax dibawah berarti button dengan ID "btn1" akan diubah teksnya menjadi "Teks tombol berubah!" saat halaman dimuat tanpa harus di klick, karena lansung menggunakan property .innerHTML.
btn1.innerHTML = `<b>${defaultText}</b>`;

// syntax dibawah berarti button dengan ID "btn1" akan ditambahkan emoji 👍 ke dalam teks tombol tersebut tanpa harus di klik, karena langsung menggunakan property .append.
btn1.append(" <span>👍</span>"); // Menambahkan emoji 👍 ke dalam tombol

btn1.style.border = "2px solid red"; // Menambahkan border merah pada tombol
btn1.style.padding = "10px"; // Menambahkan padding pada tombol
btn1.style.fontSize = "20px"; // Mengubah ukuran font tombol
btn1.style.backgroundColor = "lightblue"; // Mengubah warna latar belakang tombol

function clickedButton() {
  console.log("Cek apakah function berhasil di panggil dari Tombol 1 diklik!"); // Debugging untuk memastikan fungsi dipanggil
  alert("Tombol 1 telah diklik!"); // Menampilkan alert saat tombol diklik
  btn1.style.backgroundColor = "lightgreen"; // Mengubah warna latar belakang tombol menjadi kuning saat diklik
  const newText = document.createElement("p"); // Membuat elemen <p> baru
  newText.textContent =
    "HAII KAU SUDAH MEMENCET TOMBOL 1 SEBAGAI TOMBOL SPESIAL"; // Mengisi teks pada elemen <p> baru
  body.append(newText); // Menambahkan elemen <p> baru ke dalam body
}

function ubahText() {
  console.log("Cek apakah function ubahText Berhasil muncul"); // Debugging untuk memastikan fungsi dipanggil
  btn1.innerHTML = "<marquee>Teks Tombol 2 Berubah!</marquee>"; // Mengubah teks tombol 1 saat hoover ke tombol
}

function kembalikanText() {
  console.log("Cek apakah function kembalikanText Berhasil muncul"); // Debugging untuk memastikan fungsi dipanggil
  btn1.innerHTML = `<b>${defaultText}</b>`; // Mengembalikan teks tombol 1 ke teks default saat mouse keluar dari tombol
}

// kalau bisa jangan menggunakan onclick, onmouseenter, onmouseleave, onmouseover, onmouseout, onmousemove, onmousedown, onmouseup, onkeydown, onkeyup, onkeypress, onfocus, onblur, onsubmit, onchange, oninput, onselect, onreset, onclick pada elemen HTML karena itu adalah cara lama dan tidak direkomendasikan lagi. Gunakan addEventListener untuk menangani event pada elemen HTML. maka dari itu kita akan menggunakan addEventListener untuk menangani event pada elemen HTML. dengan menggunakan addEventListener dan propertynya yaitu "click", "mouseenter", dan "mouseleave" pada elemen HTML yang sudah kita pilih sebelumnya yaitu btn1 dan btn2.

//penggunaan mouseenter dan mouseleave untuk menangani event saat mouse masuk dan keluar dari elemen HTML.

// pada contoh dibawah ini kita bisa langsung mempraktekkan arrow function untuk menangani event pada elemen HTML, yaitu dengan menggunakan arrow function pada addEventListener, yang mana parameter kedua pada event langsung memanggil fungsi yang sudah kita buat sebelumnya yaitu clickedButton(), ubahText(), dan kembalikanText(), tanpa harus membuat fungsi baru lagi dengan output yang sama seperti pada contoh sebelumnya.
// Menambahkan event listener untuk menangani klik pada tombol 1
btn1.addEventListener("click", clickedButton);
// Menambahkan event listener untuk menangani hover mouse masuk pada tombol 1
btn1.addEventListener("mouseenter", ubahText);
// Menambahkan event listener untuk menangani hoover mouse keluar dari tombol 1
btn1.addEventListener("mouseleave", kembalikanText);

// Tugas : Menambah elemen tulisan berisikan Nama Kita pada mouseenter, dan mengganti backround tulisan teresbut menjadi warna bebas ketika mouseleave dari elemen tombol 2 tersebut.

let nama = "Gustut Biksa";
const newText2 = document.createElement("p");

function tombol2Clicked() {
  console.log("Cek apakah function tombol2Clicked Berhasil muncul"); // Debugging untuk memastikan fungsi dipanggil
  alert("Tombol 2 telah diklik!"); // Menampilkan alert saat tombol diklik
  newText2.textContent = `OKEY ${nama}  kamu LULUS Tugas 2`; // Mengisi teks pada elemen <p> baru
}

function munculNama() {
  console.log("Cek apakah function munculNama Berhasil muncul"); // Debugging untuk memastikan fungsi dipanggil
  newText2.textContent = `Hai ${nama}`; // Mengisi teks pada elemen <p> baru
  body.append(newText2); // Menambahkan elemen <p> baru ke dalam body
}

function gantiWarnaNama() {
  console.log("Cek apakah function gantiWarnaNama Berhasil muncul"); // Debugging untuk memastikan fungsi dipanggil
  newText2.style.color = "yellow"; // Mengubah warna latar belakang teks menjadi kuning saat mouse keluar dari tombol
}

btn2.addEventListener("click", tombol2Clicked); // Menambahkan event listener untuk menangani klik pada tombol 2
btn2.addEventListener("mouseenter", munculNama); // Menambahkan event listener untuk menangani hover mouse masuk pada tombol 2
btn2.addEventListener("mouseleave", gantiWarnaNama); // Menambahkan event listener untuk menangani hover mouse keluar dari tombol 2
