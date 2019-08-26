let express = require('express')
let cookieParser = require('cookie-parser')
let app = express()
app.use(cookieParser())
app.disable('x-powered-by')
app.get('/demo',function (req,res) {
    // res.cookie('zhao',123)
    res.cookie('zhao1','123',{maxAge:30*1000})
    res.send('我是cookie发送的请求')
})
app.get('/demo2',function (req,res) {
    console.log(res.cookies);
    res.send('我是获取cookie请求的')
})
app.get('/demo3',function (req,res) {
// res.clearCookie('zhao')
res.cookie('zhao1','',{maxAge:0})
    res.send('删除cookie请求')
})
app.listen(3000,function () {
    console.log('服务器连接成功');
})