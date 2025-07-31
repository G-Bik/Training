/**
 Nested callback adalah kondisi dimana terdepat beberapa fungsi dalam sebuah sistem yang melakukan metode ashychronus, namun dalam mengambil nilai parameter dengan fungsi yang memiliki ashynchronus didalamnya, tentu kita perlu melakukan callback.
 
 Sayangnya jika banyak value yang kita ambil dari setiap fungsi yang memiliki ashynchronus, maka semakin banyak callback yang harus kita lakukan dan kita panggil, masalahnya kode menjadi terlihat rumit dan akan sangat susah dimengerti oleh anggota tim
 */

/**
 Pada tiga fungsi dibawah menunjukkan bahwa setiap fungsi berisikan ashyncronus yang berbeda beda dan tidak berurutan. dalam pemanggilan fungsi yang memiliki callback dan fungsi ini memiliki ketergantungan dan keterhubungan yang kuat, dimana :

 fungsi 1 ketika user login akan mendapatkan "token", "token" ini nantinya digunakan untuk mendapatkan apiKey pada fungsi 2, nah nantinya apiKey yang didapatkan akan diproses dalam fungsi 3 untuk mendapatkan gambar. walaupun ketiganya memiliki timeout yang berbeda dan tidak berurut, namun karena koding dijalankan baris perbaris dari atas ke bawah maka hal itu tidak bermasalah.
 */
const token = ~~[Math.random() * 12345678];
// Fungsi 1
function login(username, callback) {
  console.log("Fungsi Login diproses....");
  setTimeout(() => {
    callback({ token, username });
  }, 1000);
}

// Fungsi 2
function getUser(token, callback) {
  if (token) console.log("Fungsi apiKey diproses....");
  setTimeout(() => {
    callback({ apiKey: "xkey123", token: token });
  }, 500);
}

const pictures = ["1.jpg", "2.jpg", "3.jpg"];
// Fungsi 3
function getPictures(apiKey, callback) {
  if (apiKey) {
    console.log("Fungsi ambil gambar diproses....");
    setTimeout(() => {
      callback({ pic: pictures, apiKey: apiKey });
    }, 800);
  }
}

/** Pemanggilan Fungsi Callback yang menyebabkan Calback Nested
 Contoh ini menggambarkan mengapa callback chaining perlu dikelola dengan baik, dan nantinya bisa disederhanakan menggunakan Promise atau async/await.
 
 Bisa kita lihat dibawah pemanggilan fungsi ashynchronus dengan callback dipanggil dengan fungsi berisikan parameter yang sama (karena boleh2 aja sama boleh juga beda tapi ruet) untuk argument callback dari parameter ketiga fungsi.

 setelahnya menyiapkan data yang dibutuhkan untuk fungsi setelahnya sesuai ketergantungan 3 fungsi diatas seperti dibawah:

 Jika callback setiap fungsi berstatement object array seperti contoh diatas, maka dalam pemanggilannya yaitu dengan menyiapkan variabel object array seperti dibawah yang bernilai = parameter function di argument callback, pada contoh dibawah yaitu = cbResponse
 */

/**  contoh dibawah mengapa kita mendeklarasikan {token}? bukannya const variabel1 = await login("bla bla")?

karena boleh2 saja kita menggunakan cara variabel1 teresbut, tapi jika nilainya sama dengan nilai token pada fungsi, maka tidak apa kita langsung saja menjadi {token}
*/
login("Gustut Biksa", function (cbResponse) {
  const { token } = cbResponse; //menyiapkan token dari fungsi 1 untuk fungsi 2
  getUser(token, function (cbResponse) {
    const { apiKey } = cbResponse; //menyiapkan apiKey dari fungsi 2 untuk fungsi 3
    getPictures(apiKey, function (cbResponse) {
      const { pic } = cbResponse;
      console.log("mendapatkan gambar :", pic);
    });
  });
});
