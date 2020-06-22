class Game{
    constructor(){
    }
    getGameState(){
        let gameStateref = database.ref('gameState');
        gameStateref.on('value',function(data){gameState = data.val()},showError);
    }
    update(state){
        database.ref('/').update({
            gameState: state
        });
    }
    startGame(){
        if(gameState == 0){
            player.getPlayerCount();
            form.display();
        }
    }
}