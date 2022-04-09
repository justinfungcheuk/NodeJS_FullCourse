//1.1 導入 http模塊
const http = require('http')
//1.2 導入 fs模塊
const fs = require('fs')
//1.3 導入 path模塊
const path = require('path')

//2.1 創建 web服務器
const server = http.createServer()
//2.2 監聽 web服務器 的 request事件
server.on('request', (req, res) => {
    //3.1 獲取到客戶端請求的 URL地址
    // /clock/index.html
    // /clock/index.css
    // clock/index.js
    const url = req.url
    //3.2 把請求 URL地址 映射為具體文件的存放路徑
    //const fpath = path.join(__dirname, url)
    // __dirname 代表5所處的這個目錄，也就是 code這個目錄
    // url 則代表 /clock/index.html，/clock/index.css，/clock/index.js

    //5.1 預定義一個空白的文件存放路徑
    let fpath = ''
    if(url === '/'){
        fpath = path.join(__dirname, './clock/index.html')
    }else{
        // /index.html
        // index.js
        // index.css
        fpath = path.join(__dirname, '/clock', url)
    }

    //4.1 根據 “映射” 過來的文件路徑讀取文件的內容
    fs.readFile(fpath, "utf8", (err, dataStr) => {
        //4.2 讀取失敗，向客戶端響應固定的“錯誤消息”
        if(err) return res.end("404 Not found")
        //4.3 讀取成功，將讀取成功的內容，響應給客戶端
        res.end(dataStr)
    }) 
})
//2.3 啟動服務器
server.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})