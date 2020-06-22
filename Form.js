class Form{
    constructor(){
    }
    display(){
        var nameInput = createInput('name');
        var submitBtn = createButton('submit');
        nameInput.position(450,220);
        submitBtn.position(530,250);
        submitBtn.mouseClicked(function(){
            gameState = 1;
            nameInput.remove();
            submitBtn.remove();
            database.ref('players/'+nameInput.value()).set({
                name: nameInput.value()
            });
            player.getPlayerCount();
            let toupdate = true;
            for(var i = 0; i < players.length; i++){
                if(nameInput.value() == players[i])
                    toupdate = false;
            }
            if(toupdate){
            let newCount = playerCount + 1;
            player.updatePlayer(newCount);
            }
            var greeting = createElement('h3',`hello ${nameInput.value()}`);
            greeting.position(300,170);
            var backBtn = createButton('back');
            backBtn.position(300,120);
            backBtn.mouseClicked(function(){backBtn.remove();greeting.remove();gameState=0;game.startGame()})
        });
    }
}