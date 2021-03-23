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
        }, 3000);

    }

    typeSpell = (spelllist) => {
        let spell = Math.floor(Math.random() * spelllist.length)
        spell = spelllist[spell].cast;
        this.typechars(spell, 1, spelllist.length)
    }
    monitor = () => {

        if (!this.typing) {
            if (this.player.damage > 40) {
                this.player.spell = '';
                console.log('defendin');
                this.typing = true;
                clearInterval(this.timeoutid)
                this.typeSpell(defense);
            }
            else {
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
        this.intervalid = setInterval(() => {
            this.monitor();
        }, 100);
    }
    stop = () => {
        clearInterval(this.intervalid);
        clearTimeout(this.timeoutid);
    }
}