var tabId,
    showHideInterval;

function hidePageAction() {
    chrome.pageAction.hide(tabId);

    showHideInterval = setInterval(function () {
        chrome.pageAction.show(tabId);
        
        setTimeout(function () {
            chrome.pageAction.hide(tabId);
        }, 400);

    }, 800);
}

chrome.pageAction.onClicked.addListener(function() {
    chrome.tabs.executeScript(null, { file: "jquery.js" });
    chrome.tabs.executeScript(null, { file: "widgets-fix.js" });
    
});

chrome.extension.onRequest.addListener(function (msg, sender, respond) {
    if (msg === "fixed") {
        clearInterval(showHideInterval);
        
        setTimeout(function () {
            chrome.pageAction.show(tabId);

        }, 1000);
        
    } else if (msg === "fixing") {
        hidePageAction();
    }
});

chrome.tabs.onUpdated.addListener(function (tab) {
    tabId = tab;

    chrome.pageAction.show(tabId);
});
