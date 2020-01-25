console.log("Running script.js")



// Fetch bitcoin price
fetch('https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT')
.then(res => res.json())
.then(data => {
  // console.log(data)
  document.getElementById("bitcoin-price").innerHTML = `1 BTC = ${data.price} USD`
})




// Increment page_open_counter every time New Tab is opened
chrome.storage.sync.get('page_open_counter', data => {
  chrome.storage.sync.set({
    'page_open_counter': (data['page_open_counter'] || 0) + 1
  }, () => {
    chrome.storage.sync.get('page_open_counter', newData => {
      console.log('page_open_counter:', newData['page_open_counter'])
      document.getElementById('page-open-counter').innerHTML = `New Tab #${newData['page_open_counter']}`
    })
  })
})


// Stop highlighting text on double click on body
document.body.addEventListener('mousedown', (evt) => {
  if (evt.target == document.body) evt.preventDefault() 
})

