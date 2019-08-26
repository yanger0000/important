let express = require('express')
let app = express()
app.set('view engine','ejs')
app.set('views','./views')
app.get('/demo',function (req,res) {
    let arr = [{name:'张三',age:18},{name:'李四',age:19},{name:'王五',age:20}]
    res.render('ejs_index.ejs',{person:arr})
})
app.listen(3000,function () {
    console.log('服务器连接成功');
})
