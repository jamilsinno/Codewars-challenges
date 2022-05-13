// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

// PREP

// 1 -> ILY, 2-> a little.. so on
// return a string & log

function howMuchILoveYou(nbPetals) {
    // your code
    // check if number is greater than 6 and reduce by 6
    while(nbPetals > 6){
        nbPetals -= 6
    }

    //print answer based on number of petals
    if(nbPetals === 1){
        return 'I love you'
    }else if(nbPetals === 2){
        return 'a little'
    }else if(nbPetals === 3){
        return 'a lot'
    }else if(nbPetals === 4){
        return 'passionately'
    }else if(nbPetals === 5){
        return 'madly'
    }else{
        return 'not at all'
    }
 
}

console.log(howMuchILoveYou(7)) // I love you
console.log(howMuchILoveYou(1)) // I love you
console.log(howMuchILoveYou(2)) // a little
console.log(howMuchILoveYou(3)) // a lot
console.log(howMuchILoveYou(4)) // passionately
console.log(howMuchILoveYou(5)) // madly
console.log(howMuchILoveYou(6)) // not at all
console.log(howMuchILoveYou(25)) // I love you
