document
  .getElementById("inSoChanLeFor")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var number = document.getElementById("txt3KySo1").value * 1;
    var soChan = "";
    var soLe = "";
    for (var i = 0; i <= number; i++) {
      if (i % 2 === 0 && number < 100) {
        soChan += i + " ";
      } else if (i % 2 != 0 && number < 100) {
        soLe += i + " ";
      }
    }
    var info = "Số chẵn là :" + soChan + "<br>";
    info += "Số lẽ là:" + soLe;
    document.getElementById("footerCard").innerHTML = info;
  });

var n = 2;
while (n < 100) {
  var soChan = "";
  var soLe = "";
  if (n % 2 === 0 && n != 0) {
    soChan += n;
    n++;
  } else {
    soLe += n;
    n++;
  }
  console.log("số chẵn" + soChan);
  console.log("số lẽ" + soLe);
}

// bài 2
document
  .getElementById("inSoChanLeWhite")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var n = document.getElementById("txtSoNguyen").value * 1;
    var count = 0;
    var tong = 0;
    while (count <= n) {
      if (count % 2 == 0) {
        tong += count;
      }
      count++;
    }

    document.getElementById("footerCard").innerHTML = tong;
  });

document.getElementById("inSoChanLeFor").addEventListener("click", function (event) {
  event.preventDefault();
    var n = document.getElementById("txtSoNguyen").value * 1;
  var tong = 0;
  for (var i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      tong += i;
    }
  }
  document.getElementById("footerCard").innerHTML = tong;
});
// bài 3
document
  .getElementById("inTongSoChia3While")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var n = document.getElementById("txtSoNguyen").value * 1;
    var count = 0;
    var sochiahet = 0;
    while (count <= n) {
      if (count % 3 == 0) {
        sochiahet = count++ / 3;
      }
      count++;
    }
    document.getElementById("footerCard").innerHTML =
      "Tổng số chia hết cho 3 là : " + sochiahet;
  });
document
  .getElementById("inTongSoChia3For")
  .addEventListener("click", function () {
    var n = document.getElementById("txtSoNguyen").value * 1;
    var tong = 0;
    for (var i = 0; i <= n; i++) {
      if (i % 3 == 0) {
        tong += i / 3;
      }
    }
    document.getElementById("footerCard").innerHTML =
      "Tổng số chia hết cho 3 : " + tong;
  });
//bài 4
document.getElementById("dapAn").addEventListener("click", function (event) {
    event.preventDefault();
    var n = document.getElementById("txtSoNguyen").value * 1;
    var demSo = " ";
    var soCanTim = "";
    var tong = 0;
    for (var i = 1; i <= n; i++) {
      demSo += i + " ";
      tong += i;
      if (tong > 10000) {
        soCanTim = i;
        break;
      }
    }
  
    var info = "<div>số cần tìm là " + soCanTim + "</div>";
    document.getElementById("footerCard").innerHTML = info;
  });
  // bài 5
  document.getElementById("dapAn").addEventListener("click", function (event) {
    event.preventDefault();
    var x = document.getElementById("txtSoNguyen").value * 1;
    var n = document.getElementById("txtSoNguyen2").value * 1;
    var demSo = 1;
    var tongSoMu = 0;
    for (var i = 1; i <= n; i++) {
      demSo = soMu(x, i);
      tongSoMu += demSo;
    }
  
    document.getElementById("footerCard").innerHTML = tongSoMu;
  });
  function soMu(x, n) {
    return Math.pow(x, n);
  }
  //bài 6
  document.getElementById("dapAn").addEventListener("click", function (event) {
    event.preventDefault();
    var n = document.getElementById("txtSoNguyen2").value * 1;
    var sum = 1;
    for (i = 1; i <= n; i++) {
      sum = i * sum;
    }
    document.getElementById("footerCard").innerHTML = sum;
  });
  //bài 7
  function myFunction() {
    var x = document.getElementsByTagName("div");
    var i;
    for (i = 0; i <= 10; i++) {
      if ((i + 1) % 2 == 0) {
        x[i].style.backgroundColor = "red";
      } else {
        x[i].style.backgroundColor = "blue";
      }
    }
  }
  //bài 8