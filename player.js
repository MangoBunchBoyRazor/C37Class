class Player{
    constructor(){
        //
    }
    getPlayerCount(){
        let playerCountref = database.ref('playerCount');
        playerCountref.on('value',function(data){playerCount = data.val();},showError);
        database.ref('players').on('value',function(data){players = Object.keys(data.val())},showError);
    }
    updatePlayer(count){
        database.ref('/').update({
            playerCount: count
        });
    }
}