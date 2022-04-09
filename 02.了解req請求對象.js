/**
 * req 請求對象
 * 只要服務器接收到了客戶端的請求，就會調用通過 server.on() 為服務器綁定的 request事件處理函數
 * 如果想在事件處理函數中，訪問與客戶端相關的數據或屬性，可以使用如下的方式：
 * 
 */
const http = require("http")
const server = http.createServer()

server.on("request", (req, res) => {
    
    // req 是請求對象，它包含了與客戶端相關的數據和屬性，例如：
    // req.url 是客戶端請求的 URL地址
    const url = req.url

    // req.method 是客戶端的 method 請求類型
    const method = req.method
    
    // res 是響應對象，它包含了服務器相關的數據和屬性，例如：
    // 要發送到客戶端的字符串
    const str = `Your request url is ${url}, and request method is ${method}`
    console.log(str) 

    //調用 res.end()方法，向客戶端響應發生指定的一些內容，並結束這個請求的處理過程
    res.end(str)
})

server.listen(80, () => {
    console.log("server running at http://127.0.0.1")
})