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



// Create a shooting star whenever user clicks for some reason
document.body.addEventListener('click', (evt) => {
  // Only spawn a star if did not click on element
  if (evt.target != document.body) return

  const star = document.createElement('div')
  star.style.position = 'absolute'
  star.style.width = '10px'
  star.style.height = '10px'
  star.style.borderRadius = '50%'
  star.style.backgroundColor = '#FFA'
  star.style.boxShadow = '0 0 20px 10px #ffa, 0 0 30px 20px #aaf, 0 0 100px 30px #a7f'

  document.body.appendChild(star)

  const angle = 2 * Math.PI * Math.random()
  const speed = 5 // Percent per frame
  const side = Math.floor(Math.random() * 4) // Top, Right, Bottom, Left
  const vel = {
    x: speed * Math.cos(angle),
    y: speed * Math.sin(angle)
  }

  const pos = { x:0, y:0 }

  switch (side) {
    case 0:
      pos.x = Math.random() * 100
      pos.y = 0
      vel.y = Math.abs(vel.y)
      break
    case 1:
      pos.x = 100
      pos.y = Math.random() * 100
      vel.x = -Math.abs(vel.x)
      break
    case 2:
      pos.x = Math.random() * 100
      pos.y = 100
      vel.y = -Math.abs(vel.y)
      break
    case 3:
      pos.x = 0
      pos.y = Math.random() * 100
      vel.x = Math.abs(vel.x)
      break
  }

  

  const moveStar = () => {
    pos.x += vel.x
    pos.y += vel.y

    star.style.top = pos.y + '%'
    star.style.left = pos.x + '%'


    if (pos.x < 0 || pos.x > 100 || pos.y < 0 || pos.y > 100) {
      document.body.removeChild(star)
    } else {
      window.requestAnimationFrame(moveStar)
    }
  }
  moveStar()

})
