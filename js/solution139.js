function wordsToMarks(string){
    //your code here
    let result = 0
    
    for (let i = 0; i < string.length; i++) {
      result += parseInt(string[i], 36) - 9
      console.log(result)
    }
    return result
  }