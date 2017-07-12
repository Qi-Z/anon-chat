var express = require('express'), app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server)
var port = process.env.PORT || 3000;

// Static
app.use(express.static(__dirname+'/public'));

// Serve root route
app.get('/', function(req, res){
    res.sendFile(__dirname+"/public/index.html");
});


server.listen(port, function(){
    console.log('listen @ http://localhost:'+port);
});

io.on('connection', function(socket){
    console.log('1 client connected');

    // Send message
    socket.on('send message', function(data){
        //io.emit('new message', {msg: data});
        socket.emit('new message', {msg: data});
    });
});