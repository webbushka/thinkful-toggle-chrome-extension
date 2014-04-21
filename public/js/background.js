chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (tab.url.match(/thinkful/) && tab.url.match(/assignment/)) {
		chrome.tabs.sendMessage(tabId, {
			action: 'toggleAnswers'
		});
	}
});