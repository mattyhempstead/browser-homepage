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





function getLocalDateString() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const date = new Date();
    const dayOfWeek = days[date.getDay()];
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    // Get the timezone offset in minutes and convert it to hours and minutes
    const timezoneOffset = -date.getTimezoneOffset();
    const offsetHours = Math.floor(Math.abs(timezoneOffset) / 60).toString().padStart(2, '0');
    const offsetMinutes = (Math.abs(timezoneOffset) % 60).toString().padStart(2, '0');
    // Create a string that represents the offset with a plus or minus sign
    const offsetSign = timezoneOffset >= 0 ? '+' : '-';
    let timezoneString = ` ${offsetSign}${offsetHours}`;

    if (offsetMinutes != "00") {
        timezoneString += ":" + offsetMinutes;
    }

  return `${dayOfWeek}, ${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${timezoneString}`;
}


function getUTCDateString() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const date = new Date();
    const dayOfWeek = days[date.getUTCDay()];
    const year = date.getUTCFullYear();
    // Month in JavaScript is 0-indexed, January is 0 and December is 11, hence the +1.
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    
    return `${dayOfWeek}, ${year}-${month}-${day} ${hours}:${minutes}:${seconds} UTC`;
}

// Set date/time
const updateSectionTime = () => {
    // sectionTimeHTML = new Date().toDateString() + ', ' + new Date().toLocaleTimeString();
    sectionTimeHTML = getLocalDateString();
    sectionTimeHTML += "<br>"
    sectionTimeHTML += getUTCDateString();

    document.querySelector('#section-time').innerHTML = sectionTimeHTML;
}
updateSectionTime();
setInterval(updateSectionTime, 1000);
