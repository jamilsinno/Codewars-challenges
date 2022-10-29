function defineSuit(card) {
    // good luck
  //   console.log(card[1], typeof card[1])
    if (card.length === 2) {
      let suit = card[1].charCodeAt(0)
      
      if (suit === 9827) {
        return 'clubs'
      } else if (suit === 9824) {
        return 'spades'
      } else if (suit === 9830) {
        return 'diamonds'
      } else if (suit === 9829) {
        return 'hearts'
      }
    } else {
      let suit = card[2].charCodeAt(0)
      
      if (suit === 9827) {
        return 'clubs'
      } else if (suit === 9824) {
        return 'spades'
      } else if (suit === 9830) {
        return 'diamonds'
      } else if (suit === 9829) {
        return 'hearts'
      }
    }
  }