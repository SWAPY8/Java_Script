let base_url =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let dropdowns = document.querySelectorAll(".dropdown select");

for (let select of dropdowns) {
  for (let currcode in countryList) {
    console.log(currcode, countryList[currcode])
    let newoption = document.createElement("option");
    newoption.innerText = currcode;
    newoption.value = currcode;
    select.append(newoption);
  }
}
