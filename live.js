function getvalue() {
  var bhav = document.getElementById("priceofsopari");
  var cprice = document.getElementById("pricebycustomer");
  document.getElementById("gram").innerHTML =
    Math.round((1000 * cprice.value) / bhav.value);
}

