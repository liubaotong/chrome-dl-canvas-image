let interval = chrome.storage.sync.get({'interval': 3000}, item => {
    document.getElementById('interval').value = item.interval
})

document.getElementById('btn').addEventListener('click', res => {
    let interval = document.getElementById('interval').value
    if (interval < 1000) {
        alert('间隔时间太小，请重新设置')
        document.getElementById('interval').select()
        return false
    }
    
    chrome.storage.sync.set({'interval': interval}, () => {
        alert('设置成功')
    })
})
