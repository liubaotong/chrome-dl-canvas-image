let pages = []

document.oncontextmenu = (e) => {
    console.log(pages)
    return true;
}

document.ondblclick = () => {
    chrome.storage.sync.get({'interval': 3000}, res => {
        let height = 0
        setInterval(() => {
            saveImage()
            height += 1.5 * window.innerHeight
            window.scrollTo(0, height)
        }, res.interval)
    })
}

function saveImage() {
    let canvases = document.querySelectorAll('canvas[pageIdx]')

    for (let i = 0; i < canvases.length; i++) {
        let pageId = canvases[i].getAttribute('pageIdx')
        if (pages.includes(pageId)) {
            continue
        }
        pages.push(pageId)
        chrome.runtime.sendMessage({
            pageId: pageId,
            data: canvases[i].toDataURL()
        })
    }
    return true
}

document.onscroll = (e) => {

}