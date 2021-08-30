var socket = io('http://localhost:3000/');

socket.on('server-send-dki-thatbai', function() {
    alert('sai username, co nguoi da dang ky roi');
});

socket.on('server-send-danhsach-Users', function(data) { //nguoi dung lang nghe mang users tu server
    $('#boxContent').html("");
    data.forEach(function(i) { //cu moi phan tu thi duyet va do vao
        $('#boxContent').append("<div class='user'>" + i + "</div>") //append la do vao
    });
});
socket.on('server-send-dki-thanhcong', function(data) {
    $('#currentUser').html(data);
    $("#loginForm").hide(2000);
    $("#chatForm").show(1000);
});
socket.on('server-send-message', function(data) {
    $('#listMessage').append("<div class='ms'>" + data.un + ":" + data.nd + "</div>");
});

socket.on('ai-do-dang-go-chu', function(data) {
    $('#thongbao').html(data);
});
$(document).ready(function() {
    $("#loginForm").show();
    $("#chatForm").hide();

    $('#txtMessage').focusin(function() {
        socket.emit('toi-dang-go-cai-qq-gi-do-ne');
    });
    $('#txtMessage').focusout(function() {
        socket.emit('toi-stop-roi-ne');
    });

    $("#btnRegister").click(function(event) {
        socket.emit('client-send-Username', $('#txtUsername').val());
    });
    $('#btnLogout').click(function() {
        socket.emit('logout');
        $("#chatForm").hide(2000);
        $("#loginForm").show(1000);
    });
    $('#btnSendMessage').click(function(event) {
        socket.emit('user-send-message', $('txtMessage').val());
    });
});