function closeCompare(a, b, margin){
  // ...
  if (!margin){
    margin = 0
  }
  if (margin < Math.abs(a-b) && a < b) {
    return -1
  } else if (margin < Math.abs(a-b) && a > b){
    return 1
  } else {
    return 0
  }
}
