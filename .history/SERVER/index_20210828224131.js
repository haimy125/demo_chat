var express = require('express'); //phai require thu vien express moi chay
var app = express(); //khai bao server
app.use(express.static("public")); //can file js, css nen khai bao the nay de all file trong public la khach hang truy cap duoc het

app.set("view engine", "ejs"); //
app.set("views", "./views");
var server = require('http').Server(app); //dựng server
var io = require('socket.io')(server);
server.listen(3000);
//code dựng server với post là 3000

//server lang nghe xem co ai ket noi len hay khong
io.on('connection', function(socket) { //neu co thi goi function ket noi. khi do server se tao ra bien socket de quan ly ket noi voi 1 doi tuong cu the. cu 1 nguoi truy cap se tao ra 1 bien socket cu the, quan ly ho. nho socket nen server phan biet duoc ai voi ai
    console.log('co nguoi ket noi: ' + socket.id);
});

app.get("/", function(req, res) {
    res.render("trangchu"); //dung express nen co ham render
});