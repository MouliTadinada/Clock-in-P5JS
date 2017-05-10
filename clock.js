function Clock(x, y) {

	this.x = x;
	this.y = y;
	this.h = {
		angle: 0,
		length: 200,
		value: 0,
		start: {
			x: 0,
			y: 0
		},
		end: {
			x: 0,
			y: 0
		}
	};
	this.m = {
		angle: 0,
		length: 250,
		value: 0,
		start: {
			x: 0,
			y: 0
		},
		end: {
			x: 0,
			y: 0
		}
	};
	this.s = {
		angle: 0,
		length: 300,
		value: 0,
		start: {
			x: 0,
			y: 0
		},
		end: {
			x: 0,
			y: 0
		}
	};
	if (windowWidth - this.x < windowHeight - this.y) {
		this.s.length = windowWidth - this.x - 10;
	} else {
		this.s.length = windowHeight - this.y - 5;
	}
	this.m.length = this.s.length * 90 / 100;
	this.h.length = this.m.length * 60 / 100;



	this.render = function (x, y) {

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
			console.log("Mobile");
		}


		this.h.value = hour();
		this.m.value = minute();
		this.s.value = second();

		this.h.angle = map(this.h.value, 0, 24 / 2, -PI / 2, 3 * PI / 2);
		this.m.angle = map(this.m.value, 0, 60, -PI / 2, 3 * PI / 2);
		this.s.angle = map(this.s.value, 0, 60, -PI / 2, 3 * PI / 2);

		var temp = map(this.m.value / 12, 0, 60 / 12, 0, 5);

		if (this.h.angle > 0) {
			this.h.angle += temp * PI / 30;
		} else if (this.h.angle < 0) {
			this.h.angle -= temp * PI / 30;
		}

		this.h.end.x = this.h.length * cos(this.h.angle);
		this.h.end.y = this.h.length * sin(this.h.angle);
		this.m.end.x = this.m.length * cos(this.m.angle);
		this.m.end.y = this.m.length * sin(this.m.angle);
		this.s.end.x = this.s.length * cos(this.s.angle);
		this.s.end.y = this.s.length * sin(this.s.angle);


		this.draw();

	}

	this.draw = function () {
		push();
		translate(this.x, this.y);
		noFill();
		stroke(255);
		strokeWeight(7);
		
		/*arc(0, 0, 2 * this.s.length, 2 * this.s.length, -PI / 2, this.s.angle);
		arc(0, 0, 2 * this.m.length, 2 * this.m.length, -PI / 2, this.m.angle);
		arc(0, 0, 2 * this.h.length, 2 * this.h.length, -PI / 2, this.h.angle);*/
		
		ellipse(0, 0, 2 * this.s.length, 2 * this.s.length);
		
		/*ellipse(0, 0, 2 * this.m.length, 2 * this.m.length);
		ellipse(0, 0, 2 * this.h.length, 2 * this.h.length);*/

		/*for (var i = 0; i < 12; i++) {
			var x = this.s.length * cos(map(i, 0, 12, -PI / 2, 3 * PI / 2));
			var y = this.s.length * sin(map(i, 0, 12, -PI / 2, 3 * PI / 2));
			text(".", x, y);
		}
		
		textSize(1);
		for (var i = 0; i < 60; i++) {
			var x = this.m.length * cos(map(i, 0, 60, -PI / 2, 3 * PI / 2));
			var y = this.m.length * sin(map(i, 0, 60, -PI / 2, 3 * PI / 2));
			text(".", x, y);
		}*/

		fill(255);
		stroke(255);
		line(this.h.start.x, this.h.start.y, this.h.end.x, this.h.end.y);
		line(this.m.start.x, this.m.start.y, this.m.end.x, this.m.end.y);
		strokeWeight(3);
		line(this.s.start.x, this.s.start.y, this.s.end.x, this.s.end.y);
		line(this.s.start.x, this.s.start.y, -this.s.length * 0.25 * cos(this.s.angle), -this.s.length * 0.25 * sin(this.s.angle));
		pop();
	}
}
