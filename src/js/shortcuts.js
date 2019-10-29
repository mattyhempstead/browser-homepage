/**
 * Add shortcuts to open webpages
 */

const shortcuts = [
  {
    url: 'https://www.facebook.com/messages/',
    name: 'Messenger',
    img: ''
  },{
    url: 'https://www.youtube.com/?gl=US',
    name: 'Youtube',
    img: ''
  },{
    url: 'https://canvas.sydney.edu.au/',
    name: 'Canvas',
    img: ''
  },{
    url: 'https://edstem.org/dashboard',
    name: 'Edstem',
    img: ''
  }
]

chrome.commands.onCommand.addListener((cmd) => {
  const hotkeyNum = parseInt(cmd.split('-')[1])
  if (hotkeyNum <= shortcuts.length) {
    const url = shortcuts[hotkeyNum - 1].url
    window.open(url, '_top')  
  }
})



// Add each url to page and display Shortcut beneath it
const hotkeysContainer = document.getElementById('url-hotkeys')
chrome.commands.getAll((cmds) => {
  for (cmd of cmds) {
    const shortcutIndex = parseInt(cmd.shortcut.split('+')[1]) - 1

    // Skip shortcut if url does not exist
    if (shortcutIndex >= shortcuts.length) break;

    const hotkeySpan = document.createElement('span')
    hotkeysContainer.appendChild(hotkeySpan)

    // Add name element
    const nameText = document.createElement('span')
    hotkeySpan.appendChild(nameText)
    nameText.innerHTML = shortcuts[shortcutIndex].name

    // Add hotkey element
    const hotkeyText = document.createElement('span')
    hotkeySpan.appendChild(hotkeyText)
    hotkeyText.innerHTML = cmd.shortcut

  }
})
