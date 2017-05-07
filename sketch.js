var tm;
var clock_ding;

function preLoad() {
	clock_ding = loadSound('data/ding.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(100);
	text("Made by Mouli", 0 , height/2);
	tm = new Clock(width/2, height/2);
}

function draw() {
	background(51);
	tm.render();
}
