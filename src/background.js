// service worker 可以调用大部分chrome api

chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({
    active: true,
    url: 'popup.html',
  })
})
