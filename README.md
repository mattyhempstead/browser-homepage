# My custom chrome home page & new tab page

## How to use:
1. Clone this repo
2. Navigate to "chrome://extensions' and click "Load unpacked extension" (you may need to enable developer mode)
3. Select the "browser-homepage/" directory for the repo you just cloned
4. Open a new tab and the browser will probably prompt you to let the extension take over your new tab page.
6. Edit the /src directory to use a custom static webpage.
7. Done!

## Notes
 - This extension will actually live update directly from the src directory, so there is no need to ever reload/refresh the extension (unless you decide to change the manifect.json for some reason).
 - You should disable any other chrome extenstions which take control over the new tab page for chrome.
 - Most other chrome extensions will not work on this page.
