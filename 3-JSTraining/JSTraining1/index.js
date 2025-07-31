// Statement dibawah berfungsi untuk menjalankan script setelah DOM sepenuhnya dimuat
document.addEventListener("DOMContentLoaded", () => {
  // Mendeklarasikan elemen yang akan digunakan kedalam variabel
  const button = document.getElementById("clickMeButton");
  const paragraph = document.getElementById("firstLine");

  // Mendeklarasikan event listener dengan addEventListener apabila tombol diklik
  // Statement ini seperti memasuki statement if, yang mana apabila di button sudah di click, maka statement ini akan dijalankan
  button.addEventListener("click", () => {
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
});
