function call_alma_print_slip() {
 browser.tabs.executeScript({
     file: "alma_print_slip.js"
 });
}

function open_options_page() {
  browser.runtime.openOptionsPage();
}

browser.webRequest.onCompleted.addListener(call_alma_print_slip, {urls: ["*://*.alma.exlibrisgroup.com/*"]});
browser.browserAction.onClicked.addListener(open_options_page);
