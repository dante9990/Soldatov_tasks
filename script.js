let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let scale = 0.1;

function Resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function KeyDown(e) {
    switch (e.KeyCode) {
        case 37:
            break;

        case 39:
            break;

        case 38:
            break;

        case 40:
            break;

        case 27:
            break;
    }
}

Resize();

window.addEventListener("resize", Resize);
window.addEventListener("keydown", function (e) { KeyDown(e); });

let objects = [];
let roads = [
    new Road("images/road.jpg", 0),
    new Road("images/road.jpg", 626)
];

let player = null;

function Start() {
    timer = setInterval(Update, 1000 / 60);
}

function Stop() {
    clearInterval(timer);
}

function Update() {
    roads[0].Update(roads[1]);
    roads[1].Update(roads[0]);

    Draw();
}

function Draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

class Road {
    constructor(image, y) {
        this.x = 0;
        this.y = y;

        this.image = new Image();
        this.image.src = image;
    }

    Update(road) {
        this.y += speed;

        if (this.y > window.innerHeight) {
            this.y = road - this.image.height + speed;
        }
    }
}