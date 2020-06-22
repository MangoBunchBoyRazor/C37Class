var database;
var position;
var player, game, gameState, form, playerCount, players = [];

function setup(){
  database = firebase.database();
  createCanvas(500,500);

  gameState = 0;
  form = new Form();
  player = new Player();
  game = new Game();
  game.getGameState();
  game.startGame();
}

function draw(){
  background("white");
}
function showError(){
  console.log("Error in writing to the database");
}