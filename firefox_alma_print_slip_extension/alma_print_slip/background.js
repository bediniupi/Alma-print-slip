function call_alma_print_slip() {
 browser.tabs.executeScript({
     file: "alma_print_slip.js"
 });
}

browser.webRequest.onCompleted.addListener(call_alma_print_slip, {urls: ["*://*.alma.exlibrisgroup.com/*"]});
