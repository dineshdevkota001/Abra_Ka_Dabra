class Player{

    checkloss= ()=>{
        if (this.hp <=0){
            this.loss = true;
            this.gamecontroller.declareWin();
        }
    };
    HP = 0;
    MP = 0;
    DAMAGE = 0;
    TIME = 0;
    SPELL = '';
    mode = 1;
    loss = false;
    get hp(){
        return this.HP;
    }
    set hp(hp){
        if (hp > this.MAXHP){
            hp = this.MAXHP;
        }
        this.HP = hp;
        let x = 0 < this.HP ? this.HP.toString():'0';
        $(this.hpid).html(x)
    }

    get mp(){
        return this.MP;
    }
    set mp(mp){
        if (mp>this.MAXMP){
            mp = this.MAXMP;
        }
        this.MP = mp;
        $(this.mpid).html(mp.toString());
    }
   
    get damage(){
        return this.DAMAGE;
    }
    set damage(damage){
        this.DAMAGE = damage;
        $(this.damageid).html(damage.toString())
    }
    get time(){

        return this.TIME;
    }
    set time(time){
        this.TIME = time;
        $(this.timeid).html(time.toString())
    }

    get spell(){
        return this.SPELL;
    }

    set spell(spell){
        this.SPELL = spell;
        $(this.spellid).html(this.SPELL);
    }
    constructor(playername, order, mp, hp,controller){
        this.name = playername;
        this.playerid = order;
        this.hpid = '#hp'+playername;
        this.mpid = '#mp'+playername;
        this.timeid = '#time'+playername;
        this.damageid = '#damage'+playername;
        this.spellid = '#spell'+playername;

        this.hp = hp;
        this.mp = mp;
        this.time = 0;
        this.clearTimer();
        this.damage = '';
        this.spell = '';

        this.MAXHP = hp;
        this.MAXMP = mp;
        this.gamecontroller = controller;
        this.checkintervalid = setInterval(this.checkloss, 500);
    }


    decreaseHP = (quantity) =>{
        this.hp = this.hp - quantity;
        this.damage = ''
    }

    decreaseMP = (quantity) =>{
        this.mp = this.mp - quantity;
    }
    increaseHP = (quantity) =>{
        this.hp = this.hp + quantity;
    }

    increaseMP = (quantity) =>{
        this.mp = this.mp + quantity;
    }
    clearTimer = ()=>{
        try{
        clearTimeout(this.timetimeoutid);
        }
        catch(err){
            console.log(err)
        }
    }
    setTimer = (time) =>{
        this.time = time;
        this.timetimeoutid = setTimeout(() => {
            if (this.time > 0){
                this.setTimer((this.time - 0.1).toFixed(1))
            }
            else{
                this.decreaseHP(this.damage)
            }
        }, 100);
    }
    clearCheck = () =>{
        clearInterval(this.checkintervalid);
    }
    usespell = ()=>{
        console.log('spell triggered')
        this.gamecontroller.spell(this.spell, this.playerid);
        this.spell = '';
    }

}