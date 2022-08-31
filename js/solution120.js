function alphabetWar(fight){
    console.log(fight)
    let count = 0
    let str = fight.split('')
    for (let i = 0; i<str.length; i++) {
      if(str[i] === 's'){
        count += 1
      } else if (str[i] === 'b') { 
        count += 2
      } else if (str[i] === 'p') {
        count += 3
      } else if (str[i] === 'w') {
        count += 4
      } else if (str[i] === 'z') { 
        count -= 1
      } else if (str[i] === 'd') {
        count -= 2
      } else if (str[i] === 'q') {
        count -= 3
      } else if (str[i] === 'm') {
        count -= 4
      }
    }
    
     return count > 0 ? "Left side wins!" : count < 0 ? "Right side wins!" : "Let's fight again!";
  }