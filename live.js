function getvalue(event) {
  event?.preventDefault();
  var bhav = document.getElementById("priceofsopari");
  var cprice = document.getElementById("pricebycustomer");

  let totalGrams = Math.round((1000 * cprice.value) / bhav.value);
  let totalKilo = 0;

  if (totalGrams >= 1000) {
    let temp = Math.round(totalGrams / 1000);
    let tempGram = totalGrams % 1000;
    totalKilo = temp;
    totalGrams = tempGram;
  }

  console.log("totalGrams", totalGrams);

  document.getElementById("kilo").innerHTML = totalKilo;
  document.getElementById("gram").innerHTML = totalGrams || 0;
}
