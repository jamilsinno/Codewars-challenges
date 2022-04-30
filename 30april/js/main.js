// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// sample tests

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(feast("great blue heron", "garlic naan"), true)
// Test.assertEquals(feast("chickadee", "chocolate cake"), true)
// Test.assertEquals(feast("brown bear", "bear claw"), false)
//   });
// });

// solution

function feast(beast, dish) {
  //your function here
  let firstLetterAnimal = beast.split('')
  let firstLetterDish = dish.split('')
  
  console.log(beast)
  console.log(dish)

   if(firstLetterAnimal[0] === firstLetterDish[0] && firstLetterAnimal[firstLetterAnimal.length-1] === firstLetterDish[firstLetterDish.length-1] ){
     return true
   }else{
     return false
   }
}

//--------------------------------------------------------------------

