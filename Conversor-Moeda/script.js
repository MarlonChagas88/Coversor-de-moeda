const convertButton = document.querySelector(".convert-button");

//input-currency
//currency-value-covert
//currency-value
//currency-select
//currencyValueConverted

function convertValues() {
  const currencySelect = document.querySelector(".currency-select").value;
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueConvert = document.querySelector(".currency-value-convert");
  const currencyValueConverted = document.querySelector(".currency-value");
  const flagImage = document.querySelector(".us-img");

  

  let dolarToday = 5.2;
  let euroToday = 6.2;

  if (currencySelect == "dolar") {
    flagImage.src = "assets/usa.png"
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect == "euro") {
    flagImage.src = "assets/eur.png"
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

convertButton.addEventListener("click", convertValues);
