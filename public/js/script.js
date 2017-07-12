var socket = io.connect();
$('#chatForm').on('submit', function(event){
    event.preventDefault();
    var msg = $('#message').val();
    socket.emit('send message', msg);
    $('#message').val('');
});

socket.on('new message', function(data){
    $('.message-list').append(`<div>${data.msg}</div>`);
    $('.message-list').scrollTop( $('.message-list')[0].scrollHeight);
    //console.log('Received message: '+data.msg);
});