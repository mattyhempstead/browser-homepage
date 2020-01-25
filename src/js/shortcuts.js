/**
 * Add shortcuts to open webpages
 */

/*
  Shortcut images can be fetched with http://favicongrabber.com/api/grab/<website url>
  All shortcut icons should be saved in /resources/shortcut-icons
*/
const shortcuts = [
  {
    url: 'https://www.facebook.com/messages/',
    name: 'Messenger',
    img: 'messenger.ico'
  },{
    url: 'https://www.youtube.com/?gl=US',
    name: 'Youtube',
    img: 'youtube.png'
  },{
    url: 'https://canvas.sydney.edu.au/',
    name: 'Canvas',
    img: 'canvas.jpg'
  },{
    url: 'https://edstem.org/dashboard',
    name: 'Edstem',
    img: 'edstem.png'
  }
]

chrome.commands.onCommand.addListener((cmd) => {
  // Don't trigger for each new tab in a single window
  // However, this will still trigger if different windows each have a visible new tab
  if (document.visibilityState !== 'visible') return

  const hotkeyNum = parseInt(cmd.split('-')[1])
  if (hotkeyNum <= shortcuts.length) {
    shortcuts[hotkeyNum - 1].link.click()
    console.log('click')
  }
})



// Add each url to page and display Shortcut beneath it
const hotkeysContainer = document.getElementById('url-hotkeys')
chrome.commands.getAll((cmds) => {
  for (cmd of cmds) {
    const shortcutIndex = parseInt(cmd.shortcut.split('+')[1]) - 1

    // Skip shortcut if url does not exist
    if (shortcutIndex >= shortcuts.length) break;

    const shortcut = shortcuts[shortcutIndex]

    const hotkeySpan = document.createElement('a')
    hotkeySpan.setAttribute('href', shortcut.url)
    hotkeysContainer.appendChild(hotkeySpan)
    shortcut.link = hotkeySpan

    // Add icon element
    const icon = document.createElement('img')
    hotkeySpan.appendChild(icon)
    icon.src = 'resources/shortcut-icons/' + shortcut.img

    // Add name element
    const nameText = document.createElement('span')
    hotkeySpan.appendChild(nameText)
    nameText.innerHTML = shortcut.name

    // Add hotkey element
    const hotkeyText = document.createElement('span')
    hotkeySpan.appendChild(hotkeyText)
    hotkeyText.innerHTML = cmd.shortcut

  }
})
