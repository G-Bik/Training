/**
 Asynchronus adalah sebuah mekanisme antrian yang mana sebuah syntax yang berbentuk fungsi pada Javascript dijadikan sebuah callback atau sebuah fungsi yang nantinya akan dianggil setelah waktu yang ditentukan.

 fungsi utama dari asynchronus ini adalah karena javascript berjalan secara synchronus terhadap semua fungsi atau berjalan berurutan, jika sebuah fungsi yang berada di urutan tengah atau bahkan awal mengalami bug atau eror karena eror code atau bahkan karena memakan bandwith user yang berat, maka fungsi setelahnya tidak akan bisa dijalankan.

 asynchronus ini dijadikan jalan keluar pada mekanisme eksekusi berurutan ini, yang mana ketika ada fungsi yang berat berada pada urutan dengah code js, maka fungsi tersebut bisa dialihkan ke WEB API dahulu untuk di antri yang nantinya akan dipanggil setelah fungsi2 utama atau yang lebih ringan dijalankan dahulu.

 asynchronus ini tidak selalu dimekanisme melalui setTimeout saja, namun bahkan juga denngan addEventListener (ini bisa juga karena fungsi berat mungkin baru akan berjalan ketika tombol baru di klick)
 */

function satu() {
  console.log("satu");
}
// fungsi dua() dideklarasikan menjadi callback atau sebuah fungsi yang masuk dalam antrian web API. inilah salah satu bentuk asynchronus dalam bentuk setTimeout, yang mana setTimeout memindahkan function ke antrian web API yang nanti akan dipanggil dalam bentuk callback (fungsi yang dipanggil kembali setelah antre ataupun setelah dipanggil lagi dari Web API)
function dua() {
  console.log("fungsi dua masih di proses");

  setTimeout(() => {
    console.log("dua");
  }, 3000);
}
function tiga() {
  console.log("tiga");
}

// satu();
// dua();
// tiga();

// Mari kita belajar kasus login yang mana dengan user token dan apiKey user tersebut. kita juga akan belajar bahwa fungsi dapat melakukan return berupa array object {}, dan juga array []

// Mendekalarasikan sebuah nilai random sebagai value dari variabel token, yang mana value ini berupa array []
const token = ~~[Math.random() * 12345678]; // tanda ~~ digunakan untuk menghilangkan desimal dan nilai negatif pada nilai random property Math

function login(username) {
  // Melakukan asynchronus pada fungsi login dengan property setTimeout(), yang mana menjalankan delay eksekusi pada fungsi dengan memasukkannya kedalam WEB API queue, selama 200 milisecond. Kita bisa lihat juga bahwa dalam property ini, return fungsi baru dilakukan dalam menjalankan asynchronus tersebut.
  // setTimeout(() => {
  //   return { token, username };
  // }, 200);
  // inilah bagian return yang mengembalikan value fungsi menjadi berbentuk object {}, kita bisa juga mengubahnya dalam bentuk array seperti ini [] jika mau.
  return { token, username };
}

// Mendeklarasi variabel user dengan nilai fungsi login dengan parameter username yang diperlukan, nantinya value pada fungsi ini menjadi return yang dilakukan fungsi login() tersebut, yang mana disni nilai dari fungsi login() menjadi object dengan nilai token pada variabel token dan username dari parameter yang dideklarasikan pada nilai variabel login() yaitu "Gustut Biksa"
//jika console log dilakukan pada user disini, maka nilai user akan berbentuk object dari return fungsi login()
const user = login("Gustut Biksa");
console.log(user);
// kita juga bisa mengambil nilai token saja dari user (user.token), karena value user sudah berupa object, contohnya seperti ini
console.log("token user adalah", +user.token);

// Contoh fungsi untuk memberikan api key ke user sesuai dengan tokennya, tapi hanya melakukan algoritma kondisi yang sederhana saja dulu
function getUser(token) {
  if (token) {
    return { apiKey: "xkey123", token: token }; //sekali lagi memberikan return berupa object ke fungsi yang mana value fungsi menjadi sebuah object
  }
}
// karena variabel user berupa object dan fungsi getUser() memerlukan nilai parameternya berupa token, maka kita bisa langsung menginputkan token dari object pada value fungsi login() yang sudah diiniliasikan dalam variabel user, jadinya bisa user.token seperti dibawah:
const apiLogin = getUser(user.token); // kita juga bisa langsung membungkus nama variabel saat dideklarasikan menjadi object {} atau array []
console.log(apiLogin);

// Sekarang kita coba menghubungkan return dari apiKey user yang mana jika user sudah login dan apiKey sudah ada maka akan menampilkan array gambar
const pictures = ["1.jpg", "2.jpg", "3.jpg"];

function getPictures(apiLogin) {
  if (apiLogin.apiKey) {
    return pictures;
  }
}
//
let apiPictures = getPictures(apiLogin);
console.log(apiPictures);

// Melakukan fungsi asynchronus setTimeout dan Callback, yang mana ketika sebuah fungsi masuk dalam asynchronus yang mana dipindahkan kedalam queue web API, ketika ingin mengambil sebuah return dari fungsi tersebut dan memanggil callback tersebut dapat menggunakan fungsi callback pada nilai yang ingin di return dalam fungsi

// callback dicontoh dibawah sebenarnya sebuah metode dan bukanlah sebuah parameter ataupun fungsi. cara mudahnya membuat callback adalah ketika sebuah argument parameter dalam fungsi melakukan statement dengan berisikan (XXX), seperti contoh dibawah callback(xxxx)
const tokenUser = ~~[Math.random() * 100000];
function userToken(idUser, callback) {
  setTimeout(() => {
    callback({ tokenUser, idUser });
  }, 1000);
}

// Mengapa kita harus mendeklarasikan function(xxx){statement contohnya console.log()} dalam argument callback di parameter fungsi yang ingin kita panggil?
// alasan utamanya adalah sebuah argument dalam parameter fungsi yang dideklarasikan menjadi callback bersifat asynchronus atau terdapat jeda.
// jika fungsi tersebut dipanggil dengan parameter callback yang tidak dideklarasikan dengan function(xxx){statement contohnya console.log()}, maka kode akan tetap berjalan namun akan menjadi eror karena eksekusi sudah dilakukan namun callback tidak sempat terpanggil.

// contoh yang benar
const user1 = userToken("Gustut Biksa", function (response) {
  console.log("Tes Data data ", response);
});

// contoh yang salah
// const user11 = userToken("Gustut Biksa", callback);

// contoh 2 sedikit dengan arrow function biar seru
const tokenAw = ~~[Math.random() * 100000];
const awUser = (userName, kollbek) => {
  setTimeout(() => {
    kollbek(tokenAw, userName);
  }, 1500);
};
const kadabra = awUser("pokemon", function (login) {
  console.log("LOGGED TOKEN :", login);
});

// Contoh dibawah adalah ketika kita menambil sebuah nilai fungsi dari sebuah fungsi yang berisikan callback. bisa dilihat bahwa fungsi userToken1() berisikan sebuah parameter callback yang memanggil parameter "token" pada fungsi getUser(token).
function userToken1(idUser, callback) {
  setTimeout(() => {
    callback({ token, idUser });
  }, 1800);
}

// inilah cara mengambil nilai parameter dari fungsi yang dipanggil nilai parameternya oleh fungsi yang memiliki callback. Bisa dilihat bahwa, dalam pendeklarasian fungsi dalam argument callback pada parameter fungsi userToken1, dilakukan deklarasi object array dengan value parameter fungsi getUser() di = parameter fungsi pada nilai argumen fungsi userToken1 yaitu "response"
userToken1("Gustut Biksa", function (response) {
  const { token } = response;
  console.log("nilai token :", token);
});
