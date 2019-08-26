let express = require('express')
let app = express()
app.get('/demo',function (req,res) {
    res.send('我是get请求')
})
app.listen(3000,function () {
    console.log('数据库连接成功');
})