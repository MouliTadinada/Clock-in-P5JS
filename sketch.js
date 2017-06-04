var startX;
var startY;
var tm;
var clock_ding;
var bgcolor = {
	r: 51,
	g: 51,
	b: 51
};
var cb;

function preLoad() {
	clock_ding = loadSound('data/ding.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	//cb = new CheckBox();
	tm = new Clock(width / 2, height / 2);
}

function draw() {
	background(255);
	//background(bgcolor.r, bgcolor.g, bgcolor.b);
	tm.render();
}

function mouseDragged() {
	bgcolor.r = map(mouseX, 0, width, 0, 255);
	bgcolor.g = map(mouseY, 0, height, 0, 255);
	bgcolor.b = map(mouseX, 0, width, 255, 0);
}
