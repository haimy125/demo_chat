var http = require('http');
var dt = require('./module_data');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end('<br>Hello World!');
}).listen(8080);