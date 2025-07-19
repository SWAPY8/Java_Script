let base_url =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.5.2/v1/currencies";

let dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".btn");
let fromcurr = document.querySelector(".from select");
let tocurr = document.querySelector(".to select");

for (let select of dropdowns) {
  for (let currcode in countryList) {
    // console.log(currcode, countryList[currcode])
    let newoption = document.createElement("option");
    newoption.innerText = currcode;
    newoption.value = currcode;

    if (select.name === "from" && currcode === "USD") {
      newoption.selected = "selected";
    } else if (select.name === "to" && currcode === "INR") {
      newoption.selected = "selected";
    }
    select.append(newoption);
  }
  select.addEventListener("change", (evt) => {
    update_flag(evt.target);
  });
}
let update_flag = (element) => {
  let currencycode = element.value;
  let countrycode = countryList[currencycode];
  let newsrc = `http://flagsapi.com/${countrycode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newsrc;
};

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amt input");
  let amtvalue = amount.value;
  //
  if (amtvalue == "" || amtvalue < 1) {
    amtvalue = 1;
    amount.value = 1;
    console.log(amtvalue);
  }
  console.log(fromcurr.value, tocurr.value);

  let URL = `${base_url}/${fromcurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[fromcurr.value.toLowerCase()][tocurr.value.toLowerCase()];
  let final_amt = rate * amtvalue;
  console.log(final_amt);
  let finaloutput = document.querySelector(".examt input");
  finaloutput.value = final_amt;
});
