var tabId;

chrome.pageAction.onClicked.addListener(function() {
    chrome.tabs.executeScript(null, { file: "jquery.js" });
    chrome.tabs.executeScript(null, { file: "widgets-fix.js" });
});

chrome.tabs.onUpdated.addListener(function (tab) {
    tabId = tab;

    chrome.pageAction.show(tabId);
});
