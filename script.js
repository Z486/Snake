// take snakeStart and link to event that is fired after keys are pressed
// take snakeFood and randomly place within outline

// todo: get both elements by id(or another method)
// apply appropriate methods to event listeners
// add logic to keep circles within outline
// end game if snakeStart hits outline
// keep snakeStart in motion after first key pressed
// add 1 to snake start after snakestart collides with snakeFood
//i want snakestart to recieve food (use this???)

var canvas = document.getElementById("canvas");
var play = canvas.getContext("2d");

var xAxis = canvas.width/2;
var yAxis = canvas.height/2;

var smallValuex = 2;
var smallValuey = -2;

var ballRadius = 10;

var rightPressed = false
var leftPressed = false
var upPressed = false
var downPressed = false

// document.addEventListener("keydown", keydownHandler, false);
// document.addEventListener("keyup", keyupHandler, false);

// function keyDownHandler(event){
// 	if(event.key == "Right" || event.key == "ArrowRight"){
// 		rightPressed = true;}
// 	else if(event.key == "Left" || event.key == "ArrowLeft"){
// 		leftPressed = true;}
// 	else if(event.key == "Up" || event.key == "ArrowUp"){
// 		upPressed == true;}
// 	else if(event.key == "Down" || event.key == "ArrowDown"){
// 		downPressed == true;
// 	}
// }

// function keyUpHandler(event){
// 	if(event.key == "Right" || event.key == "ArrowRight"){
// 		rightPressed = false;}
// 	else if(event.key == "Left" || event.key == "ArrowLeft"){
// 		leftPressed = false;}
// 	else if(event.key == "Up" || event.key == "ArrowUp"){
// 		upPressed == false;}
// 	else if(event.key == "Down" || event.key == "ArrowDown"){
// 		downPressed == false;
// 	}
// }

function drawSnakeStart(){
	//draws snake
play.beginPath();
play.arc (xAxis, yAxis, ballRadius, 0, Math.PI*2);
play.fillStyle = "red";
play.fill();
play.closePath();
}


//clears game board after each circle is printed
//how is this function continuously called without a for loop
function draw(){
play.clearRect(0, 0, canvas.width, canvas.height);
drawSnakeStart();
if (xAxis + smallValuex < ballRadius || xAxis + smallValuex > canvas.width-ballRadius){
	alert("Game Over")
}
if (yAxis + smallValuey < ballRadius || yAxis + smallValuey > canvas.height-ballRadius){
	alert("Game Over")
}
// if(rightPressed){
// 	ballRadius += 7;
// }
// else if(leftPressed){
// 	ballRadius -= 7;
// }
// else if(upPressed){
// 	ballRadius += 7;
// }
// else if(downPressed){
// 	ballRadius -=7
// }
xAxis += smallValuex;
yAxis += smallValuey;
move()
}
//function called every ms forever
// function move {
// if (rightPressed || leftPressed || upPressed || downPressed){
// setInterval(draw, 10);}}

