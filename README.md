# 下载canvas图片

> 1. canvas.toDataUrl()
> 2. chrome.downloads.download()

#### 流程：
1. 在content页面获取canvas节点，通过canvas.toDataUrl()得到数据
2. 通过chrome.runtime.sendMessage() 把数据传到background
3. background通过chrome.downloads.download()把图片下载到本地
