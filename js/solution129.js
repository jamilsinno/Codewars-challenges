function toCsvText(array) {
    // good luck
   return array.map( el => el.join(',')).join('\n')
 }