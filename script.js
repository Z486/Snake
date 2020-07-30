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

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

var x = 300;
var y = 300;

var foodWidth = 20;
var foodHeight = 20;


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
drawBody();
}
function drawFood(){
	//draws food
play.beginPath();
play.rect (x, y, foodWidth, foodHeight);
play.fillStyle = "orange";
play.fill();
play.closePath();
}

let xxAxis = canvas.width/2
let yyAxis = 500

function drawBody(){
	//draws body
play.beginPath();
play.rect (xxAxis, yyAxis, foodWidth, foodHeight);
play.fillStyle = "orange";
play.fill();
play.closePath();
}

function chgCoor(){
 xxAxis = xAxis + 11;
 yyAxis = yAxis - 11;
}

//when snake collides with food, food disappears
function collide(){
	drawSnakeStart();
	if (xAxis > x && xAxis < x+foodWidth && yAxis >y && yAxis <y+foodHeight){
		foodWidth = 0;
		randomFood();
		foodWidth = 21;
		chgCoor();
}
}

//randomly prints food to the screen!!
function randomFood(){
	
	x = Math.floor(Math.random()* (canvas.width-30));
	y = Math.floor(Math.random()* (canvas.width-30));

}

//clears game board after each circle is printed
var firstRightPressed = false;
function draw(){
play.clearRect(0, 0, canvas.width, canvas.height);

drawFood();
collide();


if (xAxis + smallValuex < ballRadius || xAxis + smallValuex > canvas.width-ballRadius){
	alert("Game Over");
}
if (yAxis + smallValuey < ballRadius || yAxis + smallValuey > canvas.height-ballRadius){
	alert("Game Over")
}
if(rightPressed){
	xAxis +=3;
	xxAxis +=3;
}

else if(leftPressed){
	xAxis -=3;
	xxAxis -=3;
}

else if(upPressed){
	yAxis -= 3;
	yyAxis -=3;
}
else if(downPressed){
	yAxis += 3;
	yyAxis += 3;
}
}

//function called every ms forever
setInterval(draw, 10);


