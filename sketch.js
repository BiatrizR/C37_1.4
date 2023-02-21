var canvas;
var backgroundImage;
var database, gameState;
var form, player, playerCount;
var allPlayers;
var car1, car2;
var cars = [];


function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1_img = loadImage ("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage ("assets/track.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(backgroundImage);

  //condicional
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
