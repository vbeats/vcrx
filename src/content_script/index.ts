if ('development' === import.meta.env.MODE) {
// dev hmr
    chrome.runtime.sendMessage({msg: 'reload'})
}
