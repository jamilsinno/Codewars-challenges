function dutyFree(normPrice, discount, hol){
    let count = 0
    while (normPrice*(discount/100)*count <= hol) {
        count++
    }
    return count-1
  }