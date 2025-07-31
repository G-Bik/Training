/**
 Promise adalah sebuah jalan keluar dari nested callback yang mana promise ini memiliki 2 parameter utama yaitu success dan failed. 2 parameter ini dapat digabungkan dengan logika kondisi if else atau if saja. ingatlah bahwa 2 parameter ini tidak bisa melakukan return lebih dari 2 value, jika kita ingin melakukan return 2 atau lebih value pada success atau failed, maka jadinkanlah array atau objek value2 tersebut dalam parameter success dan failed....contohnya success({ apiKey: "xkey123", token: token });
 
 Sebenarnya dalam promise ini menghasilkan output promise pending, jika kita melakukan pemanggilan promise pending, maka akan sama saja kita berakhir menjadi nested callback.
 
 Maka dari itu jalan keluarnya adalah Promise Pending dipanggil dengan cara asyncawait
 */
const token = ~~[Math.random() * 12345678];
// Fungsi 1
function login(username) {
  console.log("Fungsi Login diproses....");
  return new Promise((success, failed) => {
    if (username != "Gustut Biksa") failed("wrong username");
    setTimeout(() => {
      success({ token });
    }, 1000);
  });
}

// Fungsi 2
function getUser(token) {
  console.log("Fungsi apiKey diproses....");
  return new Promise((success, failed) => {
    if (!token) failed("not Token");
    setTimeout(() => {
      success({ apiKey: "xkey123", token: token });
    }, 500);
  });
}

const pictures = ["1.jpg", "2.jpg", "3.jpg"];
// Fungsi 3
function getPictures(apiKey) {
  console.log("Fungsi ambil gambar diproses....");
  return new Promise((success, failed) => {
    if (!apiKey) failed("NOT API KEY!");
    setTimeout(() => {
      success({ pic: pictures, apiKey: apiKey });
    }, 800);
  });
}

// Pemanggilan Promise di setiap fungsi, yang mana tetap saja terlihat menjadi nested callback. Kondisi ini disebut Nested Promise Pending
// const user = login("Gustut Biksa");
// user
//   .then(function (cbResponse) {
//     console.log("token anda:", cbResponse);
//     const userGet = getUser(cbResponse);
//     userGet
//       .then(function (cbResponse) {
//         const pictureGet = getPictures(cbResponse);
//         pictureGet
//           .then(function (cbResponse) {
//             console.log("gambar dan apiKey anda:", cbResponse);
//           })
//           .catch((err) => console.log(err)); //untuk catch eror pada parameter "failed" dalam promise fungsi login()
//       })
//       .catch((err) => console.log(err)); //untuk catch eror pada parameter "failed" dalam promise fungsi getUser
//   })
//   .catch((err) => console.log(err)); //untuk catch eror pada parameter "failed" dalam promise fungsi getPircture

//contoh penggunaan row function
// const user1 = login("Gustut Biksa");
// user1
//   .then((cbResponse) => {
//     console.log("token anda:", cbResponse);
//     const userGet1 = getUser(cbResponse);
//     userGet1
//       .then((cbResponse) => {
//         const pictureGet1 = getPictures(cbResponse);
//         pictureGet1
//           .then((cbResponse) => {
//             console.log("gambar dan apiKey anda:", cbResponse);
//           })
//           .catch((err) => console.log(err)); //untuk catch eror pada parameter "failed" dalam promise fungsi login()
//       })
//       .catch((err) => console.log(err)); //untuk catch eror pada parameter "failed" dalam promise fungsi getUser
//   })
//   .catch((err) => console.log(err)); //untuk catch eror pada parameter "failed" dalam promise fungsi getPircture

// Melakuka pemanggilan fungsi yang memberikan output Promise pending dengan async await

// ini contoh dasar pemanggilan promise pending dengan async await yang mana mengindari Nested Promise Function
// async function runCompile() {
//   const userAsync = await login("Gustut Biksa");
//   console.log(userAsync);
// }
// runCompile();

// kita gunakan cara yang lebih singkat dengan variabel object jika kita sudah memastikan bahwa memang nilai dari variabel itu adalah object yang kita inginkan

/**  contoh dibawah mengapa kita mendeklarasikan {token}? bukannya const variabel1 = await login("bla bla")?

karena boleh2 saja kita menggunakan cara variabel1 teresbut, tapi jika nilainya sama dengan nilai token pada fungsi, maka tidak apa kita langsung saja menjadi {token}
*/

async function runCompile() {
  try {
    //menggunakan try dan catch untuk menangkap 2 parameter Promise yaitu (success, failed)
    const { token } = await login("Gustut Biksa");
    const { apiKey } = await getUser(token);
    const { pic } = await getPictures(apiKey);

    console.log("Token anda :", token);
    console.log("Api Key anda :", apiKey);
    console.log("Gambar anda :", pic);
  } catch (err) {
    console.log(err);
  }
}

runCompile();
