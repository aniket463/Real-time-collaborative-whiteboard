//This a client side.
var socket;  // Delear variable 
function setup() {
  createCanvas(600, 400);  
  background(51);
  socket = io.connect('http://127.0.0.1:3000'); // Connection with server using socket.
  socket.on('mouse', newDrawing);

}

function newDrawing(data) {
  noStroke();
  fill(255,0,100);
  ellipse(data.x, data.y, 36, 36);
  
}



function mouseDragged() {
  console.log('sending: ' + mouseX + ',' + mouseY);
  var data ={
    x:mouseX,
    y:mouseY
  }
  socket.emit('mouse',data);
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 36, 36);

}

