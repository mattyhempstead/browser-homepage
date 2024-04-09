# Custom browser New Tab / Home Page

Convert your browser New Tab (& Home) page into a custom built static HTML+JS+CSS site!

Stop using bloated default search engine new tabs or wasting time looking for the perfect browser extension which provides the features you want. Just write your own from scratch with the boilerplate provided in this repo.

## Usage
1. Clone this repo (probably fork it first).
2. Navigate to **chrome://extensions** and click "**Load unpacked extension**" (you may need to enable developer mode).
3. Select the `src/` directory for the repo you just cloned.
4. Open a new tab and the browser will probably prompt you to let the extension take over your new tab page.
6. Edit the `src/` directory to be a completely custom static site.
7. Cut all communication with those who lack their own custom new tab page.

## Notes
 - Unless you want to implement a search engine inside the site you probably want to start using the url bar for searches.
   - The URL+search omnibox is a better UX than any searchbox anyway imo.
   - Especially if you remember to use `ctrl+l` to focus.
 - All javascript execution must occur in local `.js` files (rather than inside `index.html`) due to Chrome's Content Security Policy.
 - Permissions have been set in `manifest.json` to allow for all outgoing requests, you may want to limit this for security reasons.
 - This extension will actually live update directly from the `src/` directory, so there is no need to ever reload/refresh the extension (unless you decide to change the `manifest.json` for some reason).
 - You should disable any other chrome extensions which take control over the new tab page for chrome.
 - Most other chrome extensions will not work on this page.
 - Any changes you make to `manifest.json` will require you to reload the extension (visit **chrome://extensions** and press the refresh icon on the extension).

## Default Page
The default page I have included in `src/` is probably not great as it is custom designed for my needs.

You should just use it as boilerplate to build your own.
