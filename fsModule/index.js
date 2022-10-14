var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {

if(req.url="/") {

    //synchronous file read method
    // let mydata = fs.readFileSync('Home.html');
    // res.writeHead(200, {'Content-Type':'text/html'});
    // res.write(mydata);
    // res.end();


    //asynchronous file read method
    // fs.readFile('Home.html', function (error,data){
    //     res.writeHead(200, {'Content-Type' : 'text/html'});
    //     res.write(data);
    //     res.end();
    // });


    //asynchronous file write method
    // fs.writeFile('dmeo.txt','my name is shorove tajmen', function(error){
    //     if(error){
    //         res.writeHead(200,{'Content-Type':'text/html'});
    //         res.write("File write fail");
    //         res.end();
    //     }
    //     else{
    //         res.writeHead(200,{'Content-Type':'text/html'});
    //         res.write("File write success");
    //         res.end();
    //     }
    // })


    //synchronous file write method
    // let error = fs.writeFileSync('demoSync.txt', 'Welcome to file sync');
    //     if(error){
    //         res.writeHead(200,{'Content-Type':'text/html'});
    //         res.write("File write fail");
    //         res.end();
    //     }
    //     else{
    //         res.writeHead(200,{'Content-Type':'text/html'});
    //         res.write("File write success");
    //         res.end();
    //     }


    //file rename for synchronous
    // let error = fs.renameSync('demoNewSync.txt','newSyncFile.txt');
    //
    //          if(error){
    //              res.writeHead(200,{'Content-Type':'text/html'});
    //              res.write("File rename fail");
    //              res.end();
    //          }
    //          else{
    //              res.writeHead(200,{'Content-Type':'text/html'});
    //              res.write("File rename success");
    //              res.end();
    //          }


    //delete a file with asynchronous way
    // fs.unlink('demoNew.txt', function (error){
    //              if(error){
    //                  res.writeHead(200,{'Content-Type':'text/html'});
    //                  res.write("File delete fail");
    //                  res.end();
    //              }
    //              else{
    //                  res.writeHead(200,{'Content-Type':'text/html'});
    //                  res.write("File delete success");
    //                  res.end();
    //              }
    // })


    //delete a file with synchronous way
    // let error = fs.unlinkSync('Home.html');
    //              if(error){
    //                  res.writeHead(200,{'Content-Type':'text/html'});
    //                  res.write("File delete fail");
    //                  res.end();
    //              }
    //              else{
    //                  res.writeHead(200,{'Content-Type':'text/html'});
    //                  res.write("File delete success");
    //                  res.end();
    //              }


    //check is file exist or not in synchronous way
    fs.exists("newSyncFile.txt", function (result) {
        if (result) {
            res.end("True");
        } else {
            res.end("False");
        }

    });
}

});
server.listen(5050);
console.log("sever run success!");
