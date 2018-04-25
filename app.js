new Vue({
    el:'#app',
    data:{
        playerHealth:100,
        monsterHealth:100,
        gameStatus:false
    },
    methods:{
        startGame(){
            this.gameStatus=true;
            this.playerHealth=100;
            this.monsterHealth=100;
        },
        attack(){
            var damage=damageCalculation(3,10)
            this.monsterHealth-=damage;
            if(this.monsterHealth<0){
                this.gameStatus=false;
                return;
            }
            var damage=damageCalculation(5,12);
            this.playerHealth-=damage;
            if(this.playerHealth<0){
                this.gameStatus=false;
                return;
            }
        },
        heal(){

        },
        specialAttack(){

        },
        giveUp(){

        },
        damageCalculation(min,max){
            return Math.max(Math.floor(Math.random()*max)+1,minimum);
        }
    }
})