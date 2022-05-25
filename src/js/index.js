console.log("index.js");

console.log(new Date());


// Fetch bitcoin price
Promise.all([
    fetch('https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT'),
    fetch('https://api.binance.com/api/v3/avgPrice?symbol=ETHUSDT')
])
.then(resList => Promise.all(resList.map(res => res.json())))
.then(data => {
    // console.log(data)
    bitcoinPriceText = document.querySelector("#bitcoin-price");
    bitcoinPriceText.innerHTML = `1 BTC = ${data[0].price.substring(0,8)} USD`
    bitcoinPriceText.innerHTML += `<br>1 ETH = ${data[1].price.substring(0,8)} USD`
});


// Increment page_open_counter every time New Tab is opened
chrome.storage.sync.get('page_open_counter', data => {
    chrome.storage.sync.set({
        'page_open_counter': (data['page_open_counter'] || 0) + 1
    }, () => {
        chrome.storage.sync.get('page_open_counter', newData => {
            console.log('page_open_counter:', newData['page_open_counter']);
            document.querySelector('#page-open-counter').innerHTML = `New Tab #${newData['page_open_counter']}`;
        })
    });
});


// Stop highlighting text on double click on body
document.body.addEventListener('mousedown', (evt) => {
    if (evt.target == document.body) evt.preventDefault() 
})


// Set date/time
const updateSectionTime = () => {
    document.querySelector('#section-time').innerHTML = new Date().toDateString() + ', ' + new Date().toLocaleTimeString();
}
updateSectionTime();
setInterval(updateSectionTime, 1000);
