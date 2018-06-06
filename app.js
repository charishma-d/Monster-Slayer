new Vue({
    el:'#app',
    data:{
        playerHealth:100,
        monsterHealth:100,
        gameStatus:false,
        turns:[]
    },
    methods:{
        startGame(){
            this.gameStatus=true;
            this.playerHealth=100;
            this.monsterHealth=100;
            this.turns=[];
        },
        monsterAttacks(){
            var damage=this.damageCalculation(5,12);
            this.turns.unshift({
                isPlayer:false,
                text:"Monster hits player by "+ damage
            });
            this.playerHealth-=damage;
            this.gameCheckWin();
        },
        attack(){
            var damage=this.damageCalculation(3,10);
            this.turns.unshift({
                isPlayer:true,
                text:"Player hits Monster by "+ damage
            });
            this.monsterHealth-=damage;
            if(this.gameCheckWin()){
                return;
            }
            this.monsterAttacks();
        },
        heal(){
            if(this.playerHealth<=this.max)
                this.playerHealth+=10; 
            else
                this.playerHealth=100;
            this.turns.unshift({
                isPlayer:true,
                text:"Player heals by 10"
            });    
            this.monsterAttacks();
        },
        specialAttack(){
            var damage=this.damageCalculation(15,25);
            this.monsterHealth-=damage;
            this.turns.unshift({
                isPlayer:true,
                text:"Player hits Monster HARD by "+ damage
            });
            if(this.gameCheckWin()){
                return;
            }
            this.monsterAttacks();
        },
        giveUp(){
           if(confirm('Do you want to give up?')){
               this.gameStatus=false;
               this.startGame();
               this.turns=[];
           }
        },
        damageCalculation(min,max){
            return Math.max(Math.floor(Math.random()*max)+1,min );
        },
        gameCheckWin(){
            if(this.monsterHealth<=0){
                if(confirm('You won! New Game?')){
                    this.startGame();
                }else{
                this.gameStatus=false;
                }
                return true;
            }else if(this.playerHealth<=0){
                if(confirm('You lost! New Game?')){
                    this.startGame();
                }else{
                    this.gameStatus=false;
                }
                return true;
            }
            return false;
        }
    }
})