let express = require('express')
let app = express()
app.use((req,res,next) => {
    if(req.get('Referer').split('/')[2] === 'localhost:8083'){
        next()
    }else{
     res.sendFile(__dirname+'/public/err.jpg')
    }

})
app.get('/pic',function (req,res) {
    res.sendFile(__dirname+'/public/middle.jpg')
})
app.listen(3000,function () {
    console.log('服务启动成功');
})