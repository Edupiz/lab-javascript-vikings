// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;


}
    receiveDamage(damage){
        if (damage > 0) this.health -= damage;
}
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super (health, strength);
        this.name = name;

    }
    receiveDamage(damage){
        this.health -= damage;
        if(damage == 0) return this.health;
        if (this.health > 0) {
           
            return `${this.name} has received ${damage} points of damage`
        }
        else{ 
            return `${this.name} has died in act of combat`
        }
        }
    battleCry(){
        return "Odin Owns You All!";
    }
    }

// Saxon
class Saxon extends Soldier{
    
    receiveDamage(damage){
        this.health -= damage;;
        if (this.health > 0) {
           
            return `A Saxon has received ${damage} points of damage`
        }
        else{ 
            return `A Saxon has died in combat`
        }
        }
}

// War
class War {

    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking);
    };
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    };
    vikingAttack(){
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let resultAttackViking = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
       // this.saxonArmy = this.saxonArmy.filter(sax=>sax.health>0);
        if (this.saxonArmy[randomSaxon].health <= 0){
            this.saxonArmy.splice(randomSaxon);
        }

        return resultAttackViking;
    };
    saxonAttack(){
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let resultAttackSaxon = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
        // this.saxonArmy = this.saxonArmy.filter(sax=>sax.health>0);
         if (this.vikingArmy[randomViking].health <= 0){
             this.vikingArmy.splice(randomViking);
         }
 
         return resultAttackSaxon;
    };
    showStatus(){

         let saxonAlive = [];

        saxonArmy.forEach(function(saxonSoldier){
            saxonSoldier = this.saxonArmy[randomSaxon];
            if (saxonSoldier.health > 0){
                saxonAlive.push(saxonSoldier);
            if (saxonAlive.length == 0){ return "Vikings have won the war of the century!";
            }}
         })
    }
    };


