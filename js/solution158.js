function findDifference(a, b) {
    //loading...
    return Math.abs(a.reduce( (pv, cv) => pv * cv, 1 ) - b.reduce((pv, cv) => pv * cv, 1))
  }