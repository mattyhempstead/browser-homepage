/**
 * Add shortcuts to open webpages
 */

const shortcuts = [
  'https://www.facebook.com/messages/',
  'https://www.youtube.com/?gl=US',
  'https://canvas.sydney.edu.au/',
  'https://edstem.org/dashboard'
]

chrome.commands.onCommand.addListener((cmd) => {
  const hotkeyNum = parseInt(cmd.split('-')[1])
  if (hotkeyNum <= shortcuts.length) {
    const url = shortcuts[hotkeyNum - 1]
    window.open(url, '_top')  
  }
})



// Add each url to page and display Shortcut beneath it
chrome.commands.getAll((evt) => {
  console.log('command', evt)
})
