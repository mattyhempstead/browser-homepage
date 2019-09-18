// document.body.innerHTML =

console.log("Running script.js")

fetch('https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT')
.then(res => res.json())
.then(data => {
  console.log(data)
  document.getElementById("bitcoin-price").innerHTML = `1 BTC = ${data.price} USD`
})
