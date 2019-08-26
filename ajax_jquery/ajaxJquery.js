let express = require('express')
let app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.static('./public'))
app.get('/demo',function (req,res) {
    console.log(req.query);
})
app.post('/demo2',function (req,res) {
    console.log(req.body);
})
app.listen(3000,function () {
    console.log('服务器连接成功');
})
