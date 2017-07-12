var socket = io.connect();
$('#send-btn').on('click', function(event){
    var msg = $('#message').val();
    socket.emit('send message', msg);
    $('#message').val('');
});

socket.on('new message', function(data){
    $('.message-list').append(`<div>${data.msg}</div>`);
    //console.log('Received message: '+data.msg);
});