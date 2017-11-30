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
//    cb = new CheckBox();
//    tm = new Clock(width / 2, height / 2);
    tm = new Chrono();
}

function draw() {
    background(0);
//    background(bgcolor.r, bgcolor.g, bgcolor.b);
    tm.render();
}
