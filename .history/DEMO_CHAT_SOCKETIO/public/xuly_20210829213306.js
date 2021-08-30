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
$(document).ready(function() {
    $("#loginForm").show();
    $("#chatForm").hide();

    $("#btnRegister").click(function(event) {
        socket.emit('client-send-Username', $('#txtUsername').val());
    });
    $('#btnLogout').click(function() {
        socket.emit('logout');
    });
});