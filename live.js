function getvalue(event) {
  event?.preventDefault();
  var bhav = document.getElementById("priceofsopari");
  var cprice = document.getElementById("pricebycustomer");
  var kilo = document.getElementById("kbycustomer");
  var gram = document.getElementById("gbycustomer");
  var csecondprice = document.getElementById("priceofsoparisecond");

  if (bhav && cprice) {
    let totalGrams = Math.round((1000 * cprice.value) / bhav.value);
    let totalKilo = 0;

    if (totalGrams >= 1000) {
      let temp = Math.round(totalGrams / 1000);
      let tempGram = totalGrams % 1000;
      totalKilo = temp;
      totalGrams = tempGram;
    }
    document.getElementById("kilo").innerHTML = totalKilo;
    document.getElementById("gram").innerHTML = totalGrams || 0;
  }
  if ((kilo.value || gram.value) && csecondprice.value) {
    let totalQuantity = 0;
    if (kilo.value) {
      totalQuantity = 1000 * Number(kilo.value) + Number(gram.value);
    } else {
      totalQuantity = Number(gram.value);
    }
    let finalPrice = Math.round(
      (totalQuantity * Number(csecondprice.value)) / 1000
    );
    document.getElementById("finalPrice").innerHTML = finalPrice || 0;
  }
}
