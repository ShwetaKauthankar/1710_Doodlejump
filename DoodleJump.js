var GRAVITY = 0.3
var player;
var bg;
var y=0;

function setup(){
	bg = loadImage("assets/winter.jpg");
	createCanvas(432,576);
	player= new Doodler(width / 2, height - 50, false, 50, color("#FFF000"));
}

function draw(){
	background(bg); 

	player.update();
	player.draw();
	player.applyForce(createVector(0,GRAVITY));
}

function keyPressed(){
	if(keyCode == 32){
	player.applyForce(createVector(0,-5));
	}
}

