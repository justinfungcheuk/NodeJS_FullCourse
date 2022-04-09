const http = require("http")
const server = http.createServer()

server.on("request", (req, res) => {
     //1. 獲取請求的 url 地址
     const url = req.url
     //2. 設置默認的響應內容為 404 Not found
     let content = "<h1>404 Not found</h1>"
     //3. 判斷用戶請求的是否為 / 或 /index.html 首頁
     if(url === "/" || url === "/index.html"){
         content = "<h1>首頁</h1>"
     //4. 判斷用戶請求的是否為 /about.html 關於頁面
     }else if(url === "/about.html"){
         content = "<h1>關於頁面</h1>"
     }
     
     //5. 設置 Content-Type響應頭，防止中文亂碼
     res.setHeader("Content-Type", "text/html; charset=utf-8")
     //6. 使用 res.end() 把內容響應給客戶端
     res.end(content)
})

server.listen(80, () => {
    console.log("server running at http://127.0.0.1")
})