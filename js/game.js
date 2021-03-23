let Game = {};
let players = [];

handleSubmit = () => {
    switch (Game.difficulty.indexOf(Game.input)) {
        case 0:
        case 1:
        case 2:
            Game.level = Game.difficulty.indexOf(Game.input);
            $('#spell').off('input')
            console.log(Game.level)
            Game.playerstate = 1;
            Game.laststate = 0;
            game()
            break;
        default:
            console.log('invalid', Game.difficulty);
            $('#information').html('These three are valid inputs')

    }
}

$(document).ready(() => {
    $('#info1').hide();
    // $('#title').hide();
    $('#playerinfo').hide(100);
    $('#spell').on('input', () => {
        Game.input = $('#spell').val()
    })
    Game.difficulty = [];
    Game.difficulty.push($('#suggest1').html());
    Game.difficulty.push($('#suggest2').html());
    Game.difficulty.push($('#suggest3').html());

    $('#spell').keypress(event => {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            handleSubmit()
            $('#spell').val('');
        }
    });

})

const suggestSpell = () => {
    if (Game.playerstate === Game.laststate) return;
    switch (Game.playerstate){
        case 1:
            suggestList = attack;
            break;
        case 2:
            suggestList = defense;
            break;
        default:
            suggestList= Game.difficulty;
    }

    suggestList.some((element,i)=>{
        $('#suggest' + (i + 1).toString()).html(element.damage + 'dp ' + 
                                                element.cast + ' @' + 
                                                element.time.toString() + 's'+
                                                element.mp.toString() + 'mp')
        if (i >= 9){
            return;
        }
    })
}

const game = () => {
    $('#title').hide();
    $('#playerinfo').fadeIn(300);
    const gamecontroller = new GameController(suggestSpell,Game);
    console.log('starting game');

    players.push(new Player('player1', 0, 500, 100, gamecontroller));
    players.push(new Player('player2', 1, 500, 100, gamecontroller));
    players[0].gamecontroller = gamecontroller;
    players[1].gamecontroller = gamecontroller;

    let ai = new AI(Game.difficulty, players[1]);
    $('#spell').on('input',() => { players[0].spell = $('#spell').val() });
    handleSubmit = () => { players[0].usespell(); }
    gamecontroller.players = players;
    gamecontroller.ai = ai;
}