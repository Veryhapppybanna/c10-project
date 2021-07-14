var sea;
var ship,ship_Bouncing;

function preload(){
  ship_Bouncing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  boat = crateSprite(50,160,20,50) 
}

function draw() {
  background("blue");
 
}