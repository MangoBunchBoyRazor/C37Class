class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
    }
    play(){
        if(keyIsPressed && keyCode==UP_ARROW){
            this.distance++;
            this.updateInfo();
        }
        if(this.distance > 400){
            game.update(2);
            game.getGameState();
            form.display();
        }
        push();
        textAlign(CENTER);
        fill(0);
        textSize(20);
        text("Distance: "+this.distance,width-80,25);
        pop();
    }
    getPlayerCount(){
        let playerCountref = database.ref('playerCount');
        playerCountref.on('value',function(data){playerCount = data.val();if(playerCount >= 4){game.update(1);greeting.remove();delete window.greeting}},showError);
        database.ref('players').on('value',function(data){playersData = data.val(); if(data.val())players=Object.keys(data.val())},showError);
    }
    updatePlayer(count){
        database.ref('/').update({
            playerCount: count
        });
    }
    updateInfo(){
        var playerIndex = null;
        if(this.index == null){
            playerIndex = playerCount;
            this.index = playerCount;
        }
        else{
            playerIndex = this.index;
        }
        database.ref('players/player'+playerIndex).set({
            name: this.name,
            distance: this.distance
        });
    }
}