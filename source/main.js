var http = require('http');

var server = http.createServer(function(req,res) {
    res.end("hello shorove");
})

server.listen(5050);
console.log("server run successfully!");