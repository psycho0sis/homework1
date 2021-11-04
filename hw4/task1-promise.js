// Create currency convertor using https://exchangeratesapi.io/.
// A user should be able to pass a currency and amount of money in a function and get the amount of money in the desired currency in output.
// currencyConvertor(USD, 40, EUR) ⇒ 35 EUR

function currencyConvertor2(currentCurency, number, convertCurrency) {
  fetch(
    "http://api.exchangeratesapi.io/v1/latest?access_key=6e0cd49a4bfc9e9e86a75ca9d4dad3dc&base=EUR&symbols=USD&format=1"
  )
    .then((response) => response.json())
    .then((exchangeRate) => {
      const exchangeRate2 = exchangeRate.rates.USD;

      if (currentCurency === "USD") {
        convertCurrency = Math.round(number / exchangeRate2);
      } else if (currentCurency === "EUR") {
        convertCurrency = Math.round(number * exchangeRate2);
      }
      console.log(`${convertCurrency} ${currentCurency}`);
    });
}

currencyConvertor2("EUR", 30, "USD");
currencyConvertor2("USD", 30, "EUR");
