function addLength(str) {
    //start-here
      let newStr = str.split(' ')
      return newStr.map( el => el + " " + el.length)
    }
    