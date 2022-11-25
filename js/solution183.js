function cubeOdd(arr) {

  if(!arr.every(x => x === +x)){
    return undefined
  }
// insert code here >.<
  let ans = arr.filter( x => x % 2 !== 0).reduce( (pv, cv) => pv + cv**3, 0 )

return ans;
}