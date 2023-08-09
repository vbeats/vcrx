chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    // dev hmr
    if ('development' === import.meta.env.MODE && request.msg === 'reload') {
        chrome.runtime.reload()
    }

})
