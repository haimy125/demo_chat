var express = require('express'); //phai require thu vien express moi chay
var app = express(); //khai bao server
app.use(express.static("public")); //can file js, css nen khai bao the nay de all file trong public la khach hang truy cap duoc het

app.set("view engine", "ejs"); //
app.set("views", "./views");
var server = require('http').Server(app); //dựng server
var io = require('socket.io')(server);
server.listen(3000);

var mangUsers = [];
io.on('connection', function(socket) {
    console.log('co nguoi ket noi: ' + socket.id);

    socket.on('client-send-Username', function(data) {
        if (mangUsers.indexOf(data) >= 0) { //>=0 chứng tỏ là có tìm thấy data trong mảng
            //that bai

            socket.emit('server-send-dki-thatbai');
        } else {
            //thanh cong
        }
    });
});

app.get('/', function(req, res) {
    res.render('trangchu');
});