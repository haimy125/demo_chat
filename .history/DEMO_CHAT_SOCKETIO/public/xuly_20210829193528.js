var socket = io('http://localhost:3000/');

// socket.on('Server-send-data', function(data) {
//     $('#noidung').append(data + ', ');
// });

$(document).ready(function() {
    $("#loginForm").show();
    $("#chatForm").hide();

    $("#btnRegister").click(function(event) {
        socket.emit('client-send-Username');
    });

});