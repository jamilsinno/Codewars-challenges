function isSortedAndHow(array) {
    const compare = array.join('')
    return compare === array.sort( (a,b) => a-b ).join('') ? "yes, ascending" :
      compare === array.sort( (a,b) => b-a ).join('') ? "yes, descending" :
      "no"
  }