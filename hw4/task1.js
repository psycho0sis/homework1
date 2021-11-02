
// Create currency convertor using https://exchangeratesapi.io/. 
// A user should be able to pass a currency and amount of money in a function and get the amount of money in the desired currency in output.
// currencyConvertor(USD, 40, EUR) ⇒ 35 EUR

// Learn about async/await syntax.
// Reimplement the first task with async/await syntax.

let url = "http://api.exchangeratesapi.io/v1/latest?access_key=6e0cd49a4bfc9e9e86a75ca9d4dad3dc&base=EUR&symbols=USD&format=1";

async function currencyConvertor(currentCurency, number, convertCurrency) {
  const exchanger = url;
  const resolve = await fetch(exchanger);
  const exchangerContent = await resolve.json();
  const exchangeRate = exchangerContent.rates.USD;
    
    if (currentCurency === "USD") {
        convertCurrency = Math.round(number / exchangeRate);
    } else if (currentCurency === "EUR") {
        convertCurrency = Math.round(number * exchangeRate);
    }
    console.log(`${convertCurrency} ${currentCurency}`);
}

currencyConvertor("EUR", 30, "USD");
currencyConvertor("USD", 30, "EUR");
