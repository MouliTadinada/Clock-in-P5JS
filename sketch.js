var startX;
var startY;
var tm = [];
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
	tm.push(new Clock(width / 2, height / 2));
}

function draw() {
	background(bgcolor.r, bgcolor.g, bgcolor.b);
	for (i = 0; i < tm.length; i++) {
		tm[i].render();
	}
}

function mouseDragged() {
	//tm.push(new Clock(mouseX, mouseY));
	bgcolor.r = map(mouseX, 0, width, 0 ,255);
	bgcolor.b = map(mouseY, 0, height, 0 ,255);
	
	
}
