class GameController {
    constructor(suggestSpell,game){
        this.players = null;
        this.respawnid = setInterval(() => {
            this.players.forEach(player=>{
                player.increaseHP(1);
                player.increaseMP(4);
                suggestSpell();
            })
        }, 1000);
        this.game = game
    }
    
    attacc = (spell,playerid)=>{
        var opponent = (playerid +1)%2;
        attack.some(element => {
            if (element.cast === spell && this.players[playerid].mp >= element.mp){
                this.players[opponent].clearTimer(element.time);
                console.log(this.players[opponent].playerid)
                this.players[opponent].setTimer(element.time);
                this.players[playerid].decreaseMP(element.mp);
                this.players[opponent].damage = element.damage;
                if (opponent = 0){
                    game.playerstate = 2;
                }
                return true;
            }
        });
    }

    defen = (spell,playerid)=>{    
        defense.some(element => {
            if (element.cast === spell && this.players[playerid].mp >= element.mp){
            console.log('protecced')
                this.players[playerid].decreaseMP(element.mp)
                setTimeout(() => {
                    this.players[playerid].increaseHP( element.damage);
                }, (element.time+1)*1000);
                return;
            }
        });
    }

    spell = (submittedspell, playerid)=>{
        if (this.players){
            console.log('submitted')
            if (submittedspell.includes('protect')||submittedspell.includes('heal')) this.defen(submittedspell, playerid);
            else this.attacc(submittedspell, playerid);
        }
    }
    
    declareWin = () =>{
        this.ai.stop();
        clearInterval(this.respawnid);
        if (this.players[0].loss){
            $('#information').html('Lose');
            $('#info').html('Lose')
        }
        else{
            $('#information').html('Win');
            $('#info').html('Win')
        }
        $('#information').hide();
        $('#info1').show();

    $('#playerinfo').fadeOut(1000);
    $('#title').fadeIn(2000);
    }
}