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

var width = 20;
var height = 20;


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

function drawFood(){
	//draws food
play.beginPath();
play.rect (x, y, foodWidth, foodHeight);
play.fillStyle = "orange";
play.fill();
play.closePath();
}



var body = [];
body[0] = {x: xAxis, y: yAxis};
let bodyX = body[0].x;
let bodyY = body[0].y;

body.pop();

function drawBody(){
	for(let i = 0; i<body.length; i++){
    play.fillStyle = "red";
    play.fillRect(body[i].x, body[i].y, width, height);
}
}



//when snake collides with food, food disappears
function collide(){
	if (bodyX > x && bodyX > x+ foodWidth || bodyY > y && bodyY > y+ foodHeight){
		foodWidth = 0;
		randomFood();
		foodWidth = 21;
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
drawBody();

if (xAxis + smallValuex <width || xAxis + smallValuex > canvas.width-width){
	alert("Game Over");
}
if (yAxis + smallValuey < height || yAxis + smallValuey > canvas.height-height){
	alert("Game Over")
}
if(rightPressed){
	bodyX += 3;
}

else if(leftPressed){
	bodyX -= 3;
}

else if(upPressed){
	bodyY -= 3;
}
else if(downPressed){
	bodyY += 3;
}

let newHead = {
	x: bodyX,
	y: bodyY
}

body.unshift(newHead);
}

//function called every ms forever
let stopGame = setInterval(draw, 10);

