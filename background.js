chrome.action.onClicked.addListener(function () {
  chrome.windows.create({ url: 'index.html', 'type': 'panel', 'state': 'maximized' });
});