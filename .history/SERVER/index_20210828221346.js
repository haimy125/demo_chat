var express = require('express'); //phai require thu vien express moi chay
var app = express(); //khai bao server
app.use(express.static("./public")); //can file js, css nen khai bao the nay de all file trong public la khach hang truy cap duoc het
var server = require('http').Server(app); //dung server
server.listen(3000);
//code dựng server với post là 3000

app.get("/", function(req, res) {
    res.render("trangchu");
});