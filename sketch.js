var canvas;
var backgroundImage;
var database, gameState;
var form, player, playerCount;
var allPlayers;
var car1, car2;
var cars = [];


function preload() {
  
  car1_img = loadImage ("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage ("assets/track.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
//banco de dados e Classes
  
}

function draw() {
  background(0);

  //condicional
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
