let http = require('http');
let server = http.createServer(function (req,res) {
   res.setHeader('content-type','text/html;charset=utf-8')
   res.end('<h2>Yangon</h2>')
})
server.listen(3000,(err) => {
  if(!err){
    console.log('success');
  }
})

