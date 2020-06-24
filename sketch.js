var database;
var position;
var player, game, gameState, form, playerCount, players = [],playersData;

function setup(){
  database = firebase.database();
  createCanvas(600,400);

  gameState = 0;
  form = new Form();
  player = new Player();
  game = new Game();
  game.getGameState();
  game.startGame();
}

function draw(){
  background("white");
  if(gameState == 1){
    for(let i = 0; i < players.length; i++){
      rect(i*150+50,height-playersData[players[i]].distance,50,100);
      player.play();
    }
  }
  if(gameState == 2){
    push();
    textAlign(CENTER);
    textSize(25);
    fill(0);
    text('Game Over',width/2,100);
    text('You went '+playersData[players[player.index]].distance+' metres',width/2,150);
    pop();
  }
}
function showError(){
  console.log("Error in writing to the database");
}