class AI {
    difficulty = 1;
    typing = false;
    evaluateUser() {
        // evaluates the user according to something and his choices
    }

    typechars = (str, sublen, full) => {
        // let spell = str.substring(0,sublen);
        // this.player.spell = spell;
        // this.timeoutid = setTimeout(()=>{
        //     if (sublen<=full+1) this.typechars(str,sublen+1,full);
        //     else {
        //         this.player.usespell();
        //     }
        // },this.typingdelay)
        console.log(full)
        this.player.spell = str;

        setTimeout(() => {
            this.player.usespell();
            this.typing = false;
            this.monitor();
        }, 80*str.length);

    }

    typeSpell = (spelllist) => {
        let spell;
        do{
           spell = Math.floor(Math.random() * spelllist.length)
        }while(spelllist[spell].mp > this.player.mp-200)
        spell = spelllist[spell].cast;
        this.typechars(spell, 1, spelllist.length)
    }
    monitor = () => {
            if(this.player.damage > 40||this.player.hp<400) {
                if (!this.typing || Math.random()>0.8){
                this.player.spell = '';
                console.log('defendin');
                this.typing = true;
                clearInterval(this.timeoutid)
                this.typeSpell(defense);
                }
            }
            else {
                if (!this.typing) {
                console.log('typing');
                this.typing = true;
                this.typeSpell(attack);
            }
        }
    }
    constructor(difficulty, player) {
        this.player = player;
        this.difficulty = difficulty;
        this.typingdelay = 5000 / (difficulty + 1);
        console.log(this.typingdelay)
        this.monitor();
    }
    stop = () => {
        clearTimeout(this.timeoutid);
    }
}