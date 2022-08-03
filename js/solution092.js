function dutyFree(normPrice, discount, hol){
    let count = 0
    while (normPrice*(discount/100)*count <= hol) {
        count++
    }
    return count-1
  }

// actual solution

// function dutyFree(normPrice, discount, hol){
//     return(Math.floor(hol / normPrice / discount * 100))
//   }