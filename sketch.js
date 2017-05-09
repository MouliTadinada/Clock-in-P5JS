var tm = [];
var clock_ding;

function preLoad() {
	clock_ding = loadSound('data/ding.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(100);
	text("Made by Mouli", 0 , height/2);
	tm[0] = new Clock(width/2, height/2);
}

function draw() {
	background(51);
	for(i=0; i<tm.length; i++) {
		tm[i].render();
	}
}

function mousePressed() {
	//tm.push(new Clock(mouseX, mouseY));
}