function flyBy(lamps, drone){
    let lampArr = lamps.split('')
    
    if (drone.length <= lamps.length) {
      for (let i = 0 ; i < drone.length; i++) {
        lampArr.splice(i, 1, 'o')
      }
    } else {
      for (let i = 0; i<lamps.length; i++) {
        lampArr.splice(i, 1, 'o')
      }
    }
    
    return lampArr.join('')
  }