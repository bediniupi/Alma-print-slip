function call_alma_print_slip() {
 chrome.tabs.executeScript({
     file: "alma_print_slip.js"
 });
}

chrome.webRequest.onCompleted.addListener(call_alma_print_slip, {urls: ["*://*.alma.exlibrisgroup.com/*"]});
