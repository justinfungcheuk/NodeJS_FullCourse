/**
 * 步驟1：引入 http模塊
 * 
 */
const http = require("http")

/**
 * 步驟2: 創建 web 服務器實例 
 */
const server = http.createServer()

/*
步驟3：為服務器綁定 request 事件，即可監聽客戶端發送過來的網路請求；
使用服務器的 .on()方法，為服務器綁定一個 request事件，所以當有客服端請求服務器 Server，就會觸發 request事件，
觸發後就會立即調用後面的回調函數，在回調函數裡就會運行裡面的代碼
*/
/**
 * req請求對象
 * 只要服務器接收到了客戶端的請求，就會調用通過 server.on() 為服務器綁定的 request事件處理函數
 */
server.on("request", (req, res) => { 
    //第一個參數是事件的名稱 request 字符串，第二個參數是觸發 request事件的回調，會觸發兩個形參 req 和 res
    //只要有客戶端來請求我們自己的服務器，就會觸發 request事件,從而調用這個事件處理函數
    console.log("Someone visit our web server.")
})

/**
 * 步驟4: 啟動服務器
 * 調用服務器實例的 .listen()方法，即可啟動當前的 web服務器實例：
 * 
 */
// 調用服務器實例惡的 .listen(端口號, cb回調)方法，即可啟動當前的 web服務器
server.listen(80, () => {
    console.log("http server running at http://127.0.0.1:8080")
})