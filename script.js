// take snakeStart and link to event that is fired after keys are pressed
// take snakeFood and randomly place within outline

// keep snakeStart in motion after first key pressed
// add 1 to snake start after snakestart collides with snakeFood
//i want snakestart to recieve food (use this???)

var canvas = document.getElementById("canvas");
var play = canvas.getContext("2d");

var xAxis = canvas.width/2;
var yAxis = canvas.height/2;

var smallValuex = 1;
var smallValuey = -1;

var ballRadius = 10;

var rightPressed = false
var leftPressed = false
var upPressed = false
var downPressed = false

var x = canvas.width-300
var y = canvas.height-30

var food = [];

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(event){
	if(event.key == "Right" || event.key == "ArrowRight"){
		rightPressed = true;}
	else if(event.key == "Left" || event.key == "ArrowLeft"){
		leftPressed = true;}
	else if(event.key == "Up" || event.key == "ArrowUp"){
		upPressed = true;}
	else if(event.key == "Down" || event.key == "ArrowDown"){
		downPressed = true;
	}
}

function keyUpHandler(event){
	if(event.key == "Right" || event.key == "ArrowRight"){
		rightPressed = false;}
	else if(event.key == "Left" || event.key == "ArrowLeft"){
		leftPressed = false;}
	else if(event.key == "Up" || event.key == "ArrowUp"){
		upPressed = false;}
	else if(event.key == "Down" || event.key == "ArrowDown"){
		downPressed = false;
	}
}

function drawSnakeStart(){
	//draws snake
play.beginPath();
play.arc (xAxis, yAxis, ballRadius, 0, Math.PI*2);
play.fillStyle = "red";
play.fill();
play.closePath();
}

function drawFood(){
	//draws snake
play.beginPath();
play.arc (x, y, 10, 0, Math.PI*2);
play.fillStyle = "orange";
play.fill();
play.closePath();
}


function collide(){
	var xy = food[x][y];
	if (x > xy.xAxis && x < xy.Axis+ballRadius && y > xy.yAxis && y < xy.yAxis+ballRadius){
		canvas.delete(drawSnakeStart());
	}
}
//clears game board after each circle is printed
//how is this function continuously called without a for loop
function draw(){
play.clearRect(0, 0, canvas.width, canvas.height);
drawSnakeStart();
drawFood();
collide();
if (xAxis + smallValuex < ballRadius || xAxis + smallValuex > canvas.width-ballRadius){
	alert("Game Over")
}
if (yAxis + smallValuey < ballRadius || yAxis + smallValuey > canvas.height-ballRadius){
	alert("Game Over")
}
if(rightPressed){
	xAxis +=3;
}
else if(leftPressed){
	xAxis -= 3;
}
else if(upPressed){
	yAxis -= 3;
}
else if(downPressed){
	yAxis += 3;
}
}

//function called every ms forever
setInterval(draw, 10);



