function Clock(x, y) {
	var txt_size;
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
		this.s.length = (windowWidth - this.x) * 0.75;
		txt_size = map(this.s.length, 0, (windowWidth - this.y) * 0.75, 72, 15);
	} else {
		this.s.length = (windowHeight - this.y) * 0.75;
		txt_size = map(this.s.length, 0, (windowHeight - this.y) * 0.75, 72, 15);
	}
	this.m.length = this.s.length;
	this.h.length = this.m.length * 60 / 100;


	this.render = function (x, y) {

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
			console.log("Mobile");
		}

		//	GETTING THE HOUR, MINUTE AND SECOND VALUE
		this.h.value = hour();
		this.m.value = minute();
		this.s.value = second();
        if(this.h.value == 0) {
            this.h.value = 12;
        }

		//	FINDING THE ANGLES
		//	HOUR ANGLE
		this.h.angle = map(this.h.value, 0, 24 / 2, -PI / 2, 3 * PI / 2);
		//	MINUTE ANGLE
		this.m.angle = map(this.m.value, 0, 60, -PI / 2, 3 * PI / 2);
		//	SECOND ANGLE
		this.s.angle = map(this.s.value, 0, 60, -PI / 2, 3 * PI / 2);

		//	FINDING THE HOUR'S OFFSET ANGLE
		var offset = map(this.m.value / 12, 0, 60 / 12, 0, 5);

		//	ADDING OFFSET ANGLE TO HOUR'S ANGLE
		if (this.h.angle > 0) {
			this.h.angle += offset * PI / 30;
		} else if (this.h.angle < 0) {
			this.h.angle -= offset * PI / 30;
		}

		//	FINDING THE END POINTS OF HOUR, MINUTE AND SECOND
		//	HOUR
		this.h.end.x = this.h.length * cos(this.h.angle);
		this.h.end.y = this.h.length * sin(this.h.angle);
		//	MINUTE
		this.m.end.x = this.m.length * cos(this.m.angle);
		this.m.end.y = this.m.length * sin(this.m.angle);
		//	SECOND
		this.s.end.x = this.s.length * cos(this.s.angle);
		this.s.end.y = this.s.length * sin(this.s.angle);


		this.draw();

	}

	this.draw = function () {
		translate(this.x, this.y);


		/*arc(0, 0, 2 * this.s.length, 2 * this.s.length, -PI / 2, this.s.angle);
		arc(0, 0, 2 * this.m.length, 2 * this.m.length, -PI / 2, this.m.angle);
		arc(0, 0, 2 * this.h.length, 2 * this.h.length, -PI / 2, this.h.angle);*/

		/*
		ellipse(0, 0, 2 * this.m.length, 2 * this.m.length);
		ellipse(0, 0, 2 * this.h.length, 2 * this.h.length);
		*/

		textAlign(CENTER, CENTER);
		textSize(txt_size);
		noStroke();
		for (var i = 0; i < 12; i++) {
			var x = this.s.length * cos(map(i, 0, 12, -PI / 2, 3 * PI / 2));
			var y = this.s.length * sin(map(i, 0, 12, -PI / 2, 3 * PI / 2));
			if (i == 0) {
				hr = "60";
			} else if (i == 1) {
				hr = "05";
			} else if (i == 2) {
				hr = "10";
			} else if (i == 3) {
				hr = "15";
			} else if (i == 4) {
				hr = "20";
			} else if (i == 5) {
				hr = "25";
			} else if (i == 6) {
				hr = "30";
			} else if (i == 7) {
				hr = "35";
			} else if (i == 8) {
				hr = "40";
			} else if (i == 9) {
				hr = "45";
			} else if (i == 10) {
				hr = "50";
			} else if (i == 11) {
				hr = "55";
			}
			text(hr, x * 1.1, y * 1.1);
		}

		/*for (var i = 0; i < 60; i++) {
			var x = this.m.length * cos(map(i, 0, 60, -PI / 2, 3 * PI / 2));
			var y = this.m.length * sin(map(i, 0, 60, -PI / 2, 3 * PI / 2));
			text(".", x, y);
		}*/

		noFill();
		stroke(75, 0, 211);
		strokeWeight(10);

		ellipse(0, 0, (2 * this.s.length) + (0.5 * this.s.length), (2 * this.s.length) + (0.5 * this.s.length));

		strokeWeight(7);
		fill(75, 0, 211);
		stroke(75, 0, 211);
		ellipse(0, 0, 20, 20);

		line(this.h.start.x, this.h.start.y, this.h.end.x, this.h.end.y);

		line(this.m.start.x, this.m.start.y, this.m.end.x, this.m.end.y);


		strokeWeight(3);
		//stroke(255, 250, 250);

		line(this.s.start.x, this.s.start.y, this.s.end.x, this.s.end.y);

		line(this.s.start.x, this.s.start.y, -this.s.length * 0.25 * cos(this.s.angle), -this.s.length * 0.25 * sin(this.s.angle));
	}
}
