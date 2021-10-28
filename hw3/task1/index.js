let url = "./data.json";

async function changeCurrency() {
  const exchanger = "http://api.exchangeratesapi.io/v1/latest?access_key=6e0cd49a4bfc9e9e86a75ca9d4dad3dc&symbols=USD,AUD,CAD,PLN,MXN&format=1";
  const resolve = await fetch(exchanger);
  const exchangerContent = await resolve.json();
  const exchangeRate = exchangerContent.rates.USD;

  const data = url;
  const res = await fetch(data);
  const dataContent = await res.json();
  const cloneDataContent = JSON.parse(JSON.stringify(dataContent))
  dataContent.data.forEach(el => {
    el.Prices.PriceEuro = "";
    el.Prices.RentailPriceEuro = "";
    el.Prices.WholesalePriceEuro = "";

    console.log(el.Prices)  
  });
    
console.log("clone object with euro field")
  cloneDataContent.data.forEach(el => {
      el.Prices.PriceEuro = Math.round(el.Prices.Price / exchangeRate);
      el.Prices.RentailPriceEuro = Math.round(el.Prices["Retail Price"] / exchangeRate);
      el.Prices.WholesalePriceEuro = Math.round(el.Prices["Wholesale Price"] / exchangeRate);

      console.log(el.Prices)
  });
}

changeCurrency();
