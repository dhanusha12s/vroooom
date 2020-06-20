var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var popo;
var database;

var form, player, game;

function preload(){
  backgroundImage = loadImage("stage.jpg");
  music =  loadSound('Maroon_5_-_Memories_Lyrics[Converterino.online].mp3');
  popo = loadImage("photo.jpeg");
}
function setup(){
  canvas = createCanvas(400,400);
  
  game = new Game();
  
  game.start();
}


function draw(){
  //background(backgroundImage);
}
