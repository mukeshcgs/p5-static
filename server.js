var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    //   res.write('Hello World!'); //write a response to the client
    //   res.end(); //end the response
}).listen(8080);
console.log('Node.js web server at port 8080 is running..')
