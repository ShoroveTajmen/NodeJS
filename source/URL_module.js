var http = require('http');
var  URL_module = require('URL_module');

var server = http.createServer(function (req,res){
    var myURL = "http://rabbil.com/blog.html?year=2020&month=july";
    var myURLObj = URL_module.parse(myURL, true);

    var myHostName = myURLObj.host;
    var myPathName = myURLObj.pathname;
    var mySearchName = myURLObj.search;

    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.write(myHostName);
    res.end();
})

server.listen(5050);
console.log("server run success");