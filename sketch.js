var tm;

function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(100);
	text("Made by Mouli", 0 , height/2);
	tm = new Clock(width/2, height/2);
}

function draw() {
	background(51, 50);
	tm.render();
}
