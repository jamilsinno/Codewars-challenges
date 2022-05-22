// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Example:

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

// PREP

// We're passed three parameters, 1 string and 2 numbers. Numbers are greater than 0. No special characters passed. 
// We need to create two new fighters and determine who is the winner.
// Run a comparison in a secondary class using a loop to count down hp 

// return the type string name of the winner

//  const fighter1 = new Fighter('Bob', 100, 2)
// let fighter2 = new Fighter()

// console.log(fighter1)

function declareWinner(fighter1, fighter2, firstAttacker) {
    // Based on first attacker subtract damagePerAttack from other fighter
    
    while(fighter1.health > 0  || fighter2.health > 0){
        // if fighter1 goes first
        if(fighter1.name === firstAttacker){
            // take health away from fighter 2
            fighter2.health -= fighter1.damagePerAttack
            // check to see if fighter 2 hp < 0 and return winner name
            if(fighter2.health <= 0){
                return fighter1.name
            }

            //take hp away from fighter 1
            fighter1.health -= fighter2.damagePerAttack
            // check to see if fighter1 lost
            if(fighter1.health <= 0){
                return fighter2.name
            }
        }else{
            //take hp away from fighter 1
            fighter1.health -= fighter2.damagePerAttack
            // check to see if fighter1 lost
            if(fighter1.health <= 0){
                return fighter2.name
            }

            // take health away from fighter 2
            fighter2.health -= fighter1.damagePerAttack
            // check to see if fighter 2 hp < 0 and return winner name
            if(fighter2.health <= 0){
                return fighter1.name
            }
        }
    }
  }

// examples 

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")) // "Lew"
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")) // "Harry"
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry")) // "Harald"