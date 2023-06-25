function evil(n) {
  return n.toString(2).split("").reduce((a,b) => a + +b, 0) % 2 === 0 ? "It's Evil!" : "It's Odious!";
}