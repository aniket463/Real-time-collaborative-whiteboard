var express = require('express'); //Importing Express Frameworks.
var app = express();
var server = app.listen(3000);  //Defining the port for hosting server. 
app.use(express.static('public'));  // Read the static file(public)  

console.log("My socket server is runing here");

var socket = require('socket.io'); //Importing socket module
var io = socket(server);           //Socket connection with server.
io.sockets.on('connection',newConnection); // When Client connect with server  then newConnection() will run

function newConnection(socket){
    console.log('New connection: '+ socket.id);

    socket.on('mouse', mouseMsg);
    function mouseMsg(data) {
        socket.broadcast.emit('mouse', data);
        //io.sockets.emit('mouse',data);
        console.log(data);
    }


}