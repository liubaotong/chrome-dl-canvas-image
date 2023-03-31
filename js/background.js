/** 安装初始化 */
chrome.runtime.onInstalled.addListener(({ reason }) => {
	if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
		
	}

	chrome.contextMenus.create({
		id: 'save',
		contexts: ['page'],
		title: '保存所有图片'
	})

	chrome.contextMenus.onClicked.addListener(function (info, tab) {
		console.log(info)
		console.log(tab)
		if (info.menuItemId == 'save') {
			
		}
	})
});

/** 监听域名变动 */
chrome.webNavigation.onCommitted.addListener((details) => {
	// const { url, tabId, frameId } = details;
	// if (details?.url.startsWith("http")) {
	// 	console.log(url)
	// 	chrome.scripting.insertCSS({
	// 		target: { tabId },
	// 		files: ["inject.css"],
	// 	});
	// 	console.log('inject success')
	// }

	// chrome.action.setIcon({ path: { 32: '/images/logo.png' } })
	// chrome.action.setBadgeText({ text: '乾坤' })

	// fetch('http://127.0.0.1:8080', {
	// 	method: 'POST',
	// 	body: 'AABBCC^'
	// }).then(async res => {
	// 	console.log("fetch: ", await res.text())
	// }).catch(err => {
	// 	console.log("fetch: ", err)
	// })
});

chrome.runtime.onMessage.addListener((message, sender, response) => {
	let pageId = parseInt(message.pageId) + 1
    pageId = pageId.toString().padStart(3, '0')

    chrome.downloads.download({
        url: message.data,
        filename: `book-${pageId}.png`
    })
})

chrome.storage.onChanged.addListener(async (changes) => {

});

// 监听插件图标点击事件
chrome.action.onClicked.addListener(() => {
	console.log("点击logo")
});