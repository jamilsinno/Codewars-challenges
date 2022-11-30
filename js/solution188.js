function sumArray(array) {
  if( !array || array.length < 3) {
    return 0
  }
  array.sort( (a,b) => a-b ).pop()
  array.shift()
  return array.reduce( (a,b) => a+b , 0 )
}