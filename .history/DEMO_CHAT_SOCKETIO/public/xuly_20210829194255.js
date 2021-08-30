var socket = io('http://localhost:3000/');

socket.on('server-send-dki-thatbai', function() {
    alert('sai username, co nguoi da dang ky roi');
});

$(document).ready(function() {
    $("#loginForm").show();
    $("#chatForm").hide();

    $("#btnRegister").click(function(event) {
        socket.emit('client-send-Username', $('#txtUsername').val());
    });

});