class Chrono {
    constructor() {
        if (width < height) {
            this.d = width - (width * 0.05);
        } else {
            this.d = height - (height * 0.05);
        }
        this.h;
        this.m;
        this.s;
    }
    update() {
        this.h = hour();
        this.m = minute();
        this.s = second();
    }
    show() {
        translate(width / 2, height / 2);
        fill(51);
        stroke(255);
        strokeWeight(5);
        ellipse(0, 0, this.d, this.d);
        stroke(255);
        let endX, endY, angle;
        //SECOND'S HAND
        strokeWeight(2);
        angle = map(this.s, 0, 60, -PI / 2, 3 * PI / 2);
        endX = ((this.d / 2) * 0.95) * cos(angle);
        endY = ((this.d / 2) * 0.95) * sin(angle);
        line(0, 0, endX, endY);
        //MINUTE'S HAND
        strokeWeight(6);
        angle = map(this.m, 0, 60, -PI / 2, 3 * PI / 2);
        endX = ((this.d / 2) * 0.9) * cos(angle);
        endY = ((this.d / 2) * 0.9) * sin(angle);
        line(0, 0, endX, endY);
        //HOUR'S HAND
        strokeWeight(10);
        angle = map(this.h, 0, 12, -PI / 2, 3 * PI / 2);
        //OFFSET HOUR'S HAND BASED ON MINUTES
        let offset = map(this.m, 0, 60, 0, 10);
        let offsetAngle = map(offset, 0, 10, 0, PI / 6);
        angle += offsetAngle;
        endX = ((this.d / 2) * 0.75) * cos(angle);
        endY = ((this.d / 2) * 0.75) * sin(angle);
        line(0, 0, endX, endY);
    }
    render() {
        this.update();
        this.show();
    }
}
