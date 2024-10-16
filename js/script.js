$("document").ready(function () {
  //   $("li").text("Orlando");
  $(".promo").text("Orlando");
  $("#rome").text("Mekkah");

  // mencari semua elemen li didalam object dengan id destinations
  $("#destinations li").css("background-color", "blue");

  // mencari hanya elemen anak (child) nya saja didalam elemen dengan id destinations
  $("#destinations > li").css("background-color", "red");

  // mencari elemen lebih dari satu (memakai koma)
  $(".promo, #rome").css("background-color", "yellow");

  // memilih elemen pertama dalam list
  $("#destination li:first");
  // memilih elemen terakhir dalam list
  $("#destination li:last");

  // memilih elemen ganjil dalam list (dimulai dari 0 (genap))
  $("#destination li:odd");
  // memilih elemen genap dalam list (dimulai dari 0 (genap))
  $("#destination li:even");

  // Fungsi Traversing (menjelajah)
  $("li").first().next().prev();
  $("li").first().parent();
  $("#destinations").children("li");

  // var purwakarta = $("<li>Purwakarta</li>"); // diluar li (sebelum)
  // $(".lokasi").before(purwakarta);
  // var purwakarta = $("<li>Purwakarta</li>"); // diluar li (sesudah)
  // $(".lokasi").after(purwakarta);
  // var semarang = $("<li>Semarang</li>"); // termasuk kedalan li (sesudah)
  // $(".lokasi").append(semarang);
  // var semarang = $("<li>Semarang</li>"); // termasuk kedalan li (sebelum)
  // $(".lokasi").prepend(semarang);

  console.log("query sudah jalan");

  // Get
  console.log($(".jakarta").text());
  console.log($(".jakarta").html());
  console.log($(".inputan").val());

  // Set
  console.log($(".jakarta").text("Cianjur"));
  console.log($(".jakarta").html("<em>jakarta</em>"));
  console.log($(".inputan").val(150));

  // Remove
  $(".surabaya").remove();
  // $(".malang").empty();

  $("#go").on("click", function () {
    alert("Goes to Bandung");
  });
  $("#exit").on("click", function () {
    alert("Back from Bandung");
  });
  $("#hapus").on("click", function () {
    $(".malang").remove();
    alert("Malang dihapus");
  });

  // hide()
  $("#hideBandung").on("click", function () {
    $(".bandung").hide();
  });
  // fadeOut()
  $("#hideBandung").on("click", function () {
    $(".bandung").fadeOut(10000);
  });
  // slideDown() / slideUp()
  $("#hideBandung").on("click", function () {
    $(".bandung").slideDown(2000);
  });
  // Toggle() / fadeToggle() / slideToggle()
  $("#toggleBandung").on("click", function () {
    $(".bandung").toggle();
  });
  // animate()
  $("#toggleBandung").on("click", function () {
    $(".bandung").animate({
      right: 20,
      left: 20,
      marginTop: 10,
      marginRight: 10,
      marginLeft: 10,
      marginBottom: 10,
    });
  });

  // slick
  $(".your-class").slick();

  // popup
  $("#my_popup").popup();
});
