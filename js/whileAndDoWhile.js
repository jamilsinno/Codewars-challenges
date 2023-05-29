function padIt(str,n){
  //coding here
  let i = 0;
  let ans = str.split('');
  while (i < n) {
    ans.unshift('*');
    i++
    if(i < n) {
      ans.push('*');
      i++
    }
  }
  
  return ans.join('');
}