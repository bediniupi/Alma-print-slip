function call_alma_print_slip() {
 chrome.tabs.executeScript({
     file: "alma_print_slip.js"
 });
}

function open_options_page() {
    chrome.runtime.openOptionsPage();
    }

chrome.webRequest.onCompleted.addListener(call_alma_print_slip, {urls: ["*://*.alma.exlibrisgroup.com/*"]});
chrome.browserAction.onClicked.addListener(open_options_page);
