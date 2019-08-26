let express = require('express')
let app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.static('./public'))
app.get('/demo',function (req,res) {
    console.log(req.query);
    res.send('get请求')
})
app.post('/demo2',function (req,res) {
    console.log(req.body);
    res.send('post请求')
})
app.listen(3000,function () {
    console.log('数据库连接成功');
})