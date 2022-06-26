// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// PREP

// will be passed a name. Parameter passed will be a string. No need to worry about numbers or special characters.

// Return 18 if the parameter passed is Zach. Otherwise, return 0

function howManyLightsabersDoYouOwn(name) {
    return name === 'Zach' ? 18 : 0
  }


// examples

console.log(howManyLightsabersDoYouOwn()) // 0
console.log(howManyLightsabersDoYouOwn('Adam')) // 0
console.log(howManyLightsabersDoYouOwn('Zach')) // 18