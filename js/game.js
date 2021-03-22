let Game = {};
Game.enteredSpell = '';
$(document).ready(() => {
    // initiate json
    console.log(attack);    
    
    // initiate reflectors
    // reflectors Game.spell for current and enteredSpell for entered spell
    $('#spell').on('input',()=>{
        Game.spell = $('#spell').val();
        console.log(Game.spell)
    })

    $('#spell').keypress(event=>{
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            Game.enteredSpell = Game.spell;
            Game.spell = '';
            $('#spell').val('');
            console.log('the used spell is'+ Game.enteredSpell);
        }
    });
    Game.playerstate = 1;
    // initiate event handlers
    game();
})

const suggestSpell = () =>{
    if (Game.playerstate === 1){
        // idle state
        suggestList = attack;
    }
    else if (Game.playerstate === 2){
        // being attacked
        suggestList = defense;
    }
    else{
        suggestList = heal;
    }

    for (let i = 0; i<3;i++){
        $('#'+(i+1).toString()).html(suggestList[i].damage +'dp '+suggestList[i].cast + ' @' + suggestList[i].time.toString()+'s')
        console.log(suggestList[i].damage +'dp '+suggestList[i].cast + ' @' + suggestList[i].time.toString()+'s')
    }
}

const verifySpell = (spell)=>{
    [attack,defense,heal].forEach( (lister, listindex)=>{
    lister.forEach((element, index)=>{
        if (spell == element.chant){
            return {list: listindex, index: index}
        }
    })
});
    return false
}

const game = () =>{
    // initiate variables
    Game.hp = 25 + Math.floor(5 * Math.random());
    Game.mp = 25 + Math.floor(5 * Math.random());
    // game loop
    while(Game.hp>0){
        // get type
        
        // display available modes

        // check health

        // change time
    }
}

// anti cheat
// compare the previous change to this one. if the change is greater than 5 then it is probably cheating


// parser
const input = () =>{
    // check enter
    // get changes
    // return changes
}

const selection = () =>{
    // selection thingy
}