let http = require('http');
let server = http.createServer(function (req,res) {
    res.setHeader('content-type','text/html;charset=utf-8');
    res.end('努力')
}).listen(3000, console.log('success'))