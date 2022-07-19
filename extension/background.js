// listener checking to see if the current tab is a youtube watch page
chrome.tab.onUpdate.addListener((tabId, tab) => {
    if (tab.url && tab.url.include("youtube.com/watch")) {
        const queryParameters = tab.url.split("?")[1];
        const urlParameters = new URLSearchParams(queryParameters);

        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            videoId: urlParameters.get("v")
        });
}});
