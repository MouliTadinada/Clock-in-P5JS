var h;
var m;
var s;

function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(100);
	text("Made by Mouli", 0 , height/2);
}

function draw() {
	background(51, 50);
	translate(width / 2, height / 2);
	h = hour();
	m = minute();
	s = second();
	noFill();
	stroke(255);
	var timeIs = h + ": " + m + ": " + s;
	textSize(20);
	text(timeIs, 0, -100);	
	ellipse(0, 0, 300, 300);
	textAlign(CENTER);
	/*for (var i = 0; i < 12; i++) {
		var x = 160 * cos(map(i, 0, 12, -PI / 2, 3 * PI / 2));
		var y = 160 * sin(map(i, 0, 12, -PI / 2, 3 * PI / 2));
		text(i, x, y);
	}
	for (var i = 0; i < 60; i++) {
		var x = 140 * cos(map(i, 0, 60, -PI / 2, 3 * PI / 2));
		var y = 140 * sin(map(i, 0, 60, -PI / 2, 3 * PI / 2));
		text(i, x, y);
	}*/

	var r;
	var angle;


	r = 100;
	angle = map(h, 0, 24 / 2, -PI / 2, 3 * PI / 2);
	stroke(0, 100, 100);
	strokeWeight(4);
	beginShape();
	vertex(0, 0);
	vertex(r * cos(angle), r * sin(angle));
	endShape(CLOSE);

	r = 110;
	angle = map(m, 0, 60, -PI / 2, 3 * PI / 2);
	stroke(0, 100, 100);
	strokeWeight(2);
	beginShape();
	vertex(0, 0);
	vertex(r * cos(angle), r * sin(angle));
	endShape(CLOSE);

	r = 150;
	angle = map(s, 0, 60, -PI / 2, 3 * PI / 2);
	stroke(255, 0, 0);
	strokeWeight(1);
	beginShape();
	vertex(0, 0);
	vertex(r * cos(angle), r * sin(angle));
	endShape(CLOSE);

}
