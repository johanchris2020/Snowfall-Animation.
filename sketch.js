const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImage;
var snow;

function preload() {
    backgroundImage = loadImage("snow3.jpg");
}

function setup() {
    createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;
    snow = new Snow(Math.round(random(10, 780)), 10, 1, 1);
    Engine.run(engine);

}

function draw() {
    background(backgroundImage);
    Engine.update(engine);
    if (frameCount % 20 === 0) {
        snow.display();
        console.log("snow created")
    }
}