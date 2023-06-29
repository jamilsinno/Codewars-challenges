function maxRot(n) {
  // your code
  let max = n;
  let arr = n.toString().split("")
  for (let i = 0; i < arr.length; ++i){
    arr.push(arr[i]);
    arr.splice(i, 1)
    if (arr.map(c => +c).join('') > max) {
      max = arr.map(c => +c).join('');
    }
  }
  
  return +max; 
}