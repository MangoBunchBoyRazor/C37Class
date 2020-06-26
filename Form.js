class Form{
    constructor(){
    }
    display(){
        if(gameState == 0){
            var title = createElement('h2','Hello Gamer!');
            title.position(width/2-80,50);
            var nameInput = createInput();
            nameInput.attribute('placeholder','name');
            var submitBtn = createButton('submit');
            nameInput.position(width/2-100,120);
            nameInput.input(function(){player.name = nameInput.value()});
            submitBtn.position(width/2-30,150);
            submitBtn.mouseClicked(function(){
                if(nameInput.value() == ""){
                    alert('Give a name');
                    nameInput.elt.focus();
                    return 0;
                }window.greeting = createElement('h3',`hello ${nameInput.value()}<br> Waiting for other players..`);
                greeting.position(width/2-50,170);
                title.hide();
                nameInput.hide();
                submitBtn.hide();
                player.updateInfo();
                player.updatePlayer(playerCount+1);   
            });
        }
        else if(gameState == 2){
            //
        }
    }
}